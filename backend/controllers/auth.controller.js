const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// ky cho JWT secret key
function signToken(user) {
    return jwt.sign(
        { sub: user._id.toString(), username: user.username, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '2d' }
    )
}

// ham seed admin mot lan
exports.register = async (req, res) => {
    //khoa env(chi seed admin mot lan)
    if (process.env.ADMIN_SEED_ENABLED !== 'true') {
        return res.status(403).json({ message: 'Admin seeding is disabled.' });
    }

    // doc input va validate
    const { username, password, role = 'admin' } = req.body || {};
    if (!username || !password) {
        res.status(400).json({ message: 'Username and password are required.' });
    }

    //chan seed lan 2(ktra neu da co user admin thi khong seed nua)
    const count = await User.countDocuments();
    if (count > 0) {
        return res.status(403).json({ message: 'Seeding blocked (user exists).' });
    }

    // ktra username da ton tai chua
    const exists = await User.findOne({ username });
    if (exists) return res.status(409).json({ message: 'Username already exists.' });

    // hash password
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, passwordHash, role });

    return res.json({ id: user._id, username: user.username, role: user.role });
}


// login(JWT tra ve token)
exports.login = async (req, res) => {
    const { username, password } = req.body || {};
    const user = await User.findOne({ username });

    if (!user) return res.status(401).json({ message: 'Bad credentials.' });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ message: 'Bad credentials.' });

    // ky token va tra ve
    const token = signToken(user);
    return res.json({ token, user: { username: user.username, role: user.role } });
}
const jwt = require('jsonwebtoken');

/* middleware xac thuc JWT 
    - neu token hop le thi gan thong tin user vao req.user
    - neu khong hop le thi tra ve 401
*/
const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization || "";
        // Bearer <token>
        const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
        if (!token) return res.status(401).json({ message: 'No token provided.' });

        //verify token
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload; //gan payload vao req.user
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token.' });
    }
};

/* middleware kiem tra quyen admin
    - phai xac thuc truoc (req.user phai co)
    - neu khong phai admin tra ve 403
*/
const isAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Admin access required.' });
    }
    next();
};

module.exports = { verifyToken, isAdmin };
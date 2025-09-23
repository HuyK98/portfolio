require("dotenv").config();
const path = require("path");
const fs = require("fs/promises");
const mongoose = require("mongoose");

const Project = require("./models/project");
const Skill = require("./models/skillGroup");
const Exp = require("./models/experience");

async function readJSON(filename) {
    const file = path.join(__dirname, "data", filename);
    return JSON.parse(await fs.readFile(file, "utf-8"));
}

async function run() {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongo connected (seed)");

    // Seed du lieu project vao mongodb
    try {
        const projects = await readJSON("projects.json");
        for (const p of projects) {
            const exists = await Project.findOne({ name: p.name, period: p.period });
            if (!exists) {
                await Project.create({
                    name: p.name, role: p.role, period: p.period, stack: p.stack || [],
                    repo: p.repo, demo: p.demo, highlights: p.highlights || []
                });
            }
        }
        console.log("Seeded projects");
    } catch (err) {
        console.warn("Skip projects:", err.message);
    }

    // skills
    try {
        const skills = await readJSON("skills.json");
        for (const s of skills) {
            const exists = await Skill.findOne({ title: s.title });
            if (!exists) {
                await Skill.create({
                    title: s.title, items: s.items || []
                });
            }
        }
        console.log("Seeded skills");
    } catch(err) {
        console.warn("Skip skills", err.message);
    }

    // exp
    try {
        const exp = await readJSON("experience.json");
        for (const e of exp) {
            const exists = await Exp.findOne({ company: e.company, title: e.title, time: e.time });
            if (!exists) await Exp.create({
                company: e.company, title: e.title,
                time: e.time, points: e.points || []
            });
        }
        console.log("Seeded Exp");
    } catch(err) {
        console.warn("Skip exp", err.message);
    }

    await mongoose.disconnect();
    console.log("Seed done");
}

run().catch(err => {
    console.error(err);
    process.exit(1);
});

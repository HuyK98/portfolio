import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaDownload, FaEye } from "react-icons/fa";
import { TypingText } from "../../../../../ui/TypingText";
import { AuroraText } from "../../../../../ui/AuroraText";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="hero-inner">
        <div className="avatar-wrapper">
          <img src="/avatar.jpg" alt="Truong Dinh Huy" className="avatar" />
          <div className="social-links">
            <a href="https://github.com/HuyK98" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:huytruongdinh61@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-content">
          <motion.p
            className="muted"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <TypingText
              text="Hi! I&apos;m"
              speed={80}
              showCursor={false}
            />
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AuroraText
              colors={["#38BDF8", "#3B82F6", "#EC4899"]}
              speed={1}
              className="font-bold"
            >
              Truong Dinh Huy
            </AuroraText>
          </motion.h2>

          <motion.p
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <TypingText
              text="Fresher web developer focusing on React &amp; Node. Portfolio này được build từng bước mỗi ngày."
              speed={50}
              showCursor={true}
              cursurClassName="text-primary"
            />
          </motion.p>

          <motion.div
            className="tech-stack"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="tech-badge">React</span>
            <span className="tech-badge">JavaScript</span>
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">MongoDB</span>
          </motion.div>

          <div className="hero-actions">
            <a href="/resume.pdf" download className="download-btn">
              <FaDownload className="btn-icon" />
              <span>Download Resume</span>
            </a>

            <a href="#projects" className="view-btn">
              <FaEye className="btn-icon" />
              <span>View Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
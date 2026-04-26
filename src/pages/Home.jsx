import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Triangle, 
  FileCode2, 
  Terminal, 
  Box, 
  GitBranch, 
  Zap, 
  Hexagon, 
  Wind, 
  Link,
  Coffee,
  FileText,
  MessageSquare,
  ArrowRight,
  Briefcase,
  Lightbulb,
  ClipboardList,
  Brain,
  Code2,
  Search,
  FlaskConical,
  BookOpen,
  Mail
} from 'lucide-react';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const skills = [
  { icon: Atom, label: 'React', color: 'text-cyan-400', bg: 'bg-cyan-950/40', pos: { top: '15%', left: '40%' }, delay: 0 },
  { icon: Triangle, label: 'Next.js', color: 'text-gray-300', bg: 'bg-gray-800/40', pos: { top: '22%', left: '62%' }, delay: 0.5 },
  { icon: FileCode2, label: 'TypeScript', color: 'text-blue-400', bg: 'bg-blue-900/30', pos: { top: '38%', left: '78%' }, delay: 1 },
  { icon: Terminal, label: 'Python', color: 'text-yellow-400', bg: 'bg-yellow-900/30', pos: { top: '60%', left: '72%' }, delay: 1.5 },
  { icon: Box, label: 'Docker', color: 'text-blue-500', bg: 'bg-blue-900/30', pos: { top: '78%', left: '58%' }, delay: 2 },
  { icon: GitBranch, label: 'Git', color: 'text-orange-500', bg: 'bg-orange-900/30', pos: { top: '82%', left: '40%' }, delay: 0.8 },
  { icon: Zap, label: 'FastAPI', color: 'text-green-400', bg: 'bg-green-900/30', pos: { top: '72%', left: '22%' }, delay: 1.2 },
  { icon: Hexagon, label: 'Node.js', color: 'text-green-500', bg: 'bg-green-900/30', pos: { top: '55%', left: '15%' }, delay: 0.3 },
  { icon: Wind, label: 'Tailwind', color: 'text-cyan-300', bg: 'bg-cyan-900/30', pos: { top: '35%', left: '18%' }, delay: 1.8 },
  { icon: Link, label: 'LangChain', color: 'text-blue-300', bg: 'bg-blue-900/30', pos: { top: '20%', left: '25%' }, delay: 0.7 },
];

const projects = [
  {
    id: 1,
    title: "smart door lock system using otp",
    description: "otp based door lock system using iot and firebase database and flutter for mobile app",
    color: "cyan",
    tags: ["Full-Stack", "Capacitor", "React", "Node.js"]
  },
  {
    id: 2,
    title: "Dollar Hegemony",
    description: "ML-driven study of USD dominance using a custom Dollar Supremacy Index built from macro indicators, with XGBoost + stacked LSTM + Temporal Transformer ensemble.",
    color: "yellow",
    tags: ["Python", "XGBoost", "LSTM", "MLOps"]
  },
  {
    id: 3,
    title: "India Banking Dashboard",
    description: "Financial analytics dashboard comparing 10 Indian banks across FY 2020–2024 — tracks NPA recovery, profit growth, ROA/ROE with AI-generated sector insights.",
    color: "purple",
    tags: ["React", "FastAPI", "Groq LLaMA", "Docker"]
  }
];

const colorMap = {
  cyan: {
    line: "bg-cyan-400",
    text: "text-cyan-400",
    bg: "bg-cyan-950/20",
    border: "border-cyan-900/50"
  },
  yellow: {
    line: "bg-yellow-500",
    text: "text-yellow-500",
    bg: "bg-yellow-900/20",
    border: "border-yellow-900/50"
  },
  purple: {
    line: "bg-purple-400",
    text: "text-purple-400",
    bg: "bg-purple-900/20",
    border: "border-purple-900/50"
  }
};

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Concentric Rings Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-white/[0.03]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-white/[0.04]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/[0.02] border-dashed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full border border-white/[0.02]" />
        </div>

        {/* Floating Skill Nodes */}
        <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="absolute flex flex-col items-center gap-3 -translate-x-1/2 -translate-y-1/2"
              style={{ top: skill.pos.top, left: skill.pos.left }}
              initial={{ y: 0, opacity: 0 }}
              animate={{ 
                y: [-15, 15, -15],
                opacity: 1
              }}
              transition={{ 
                y: { duration: 5 + (index % 3), repeat: Infinity, ease: "easeInOut", delay: skill.delay },
                opacity: { duration: 1, delay: skill.delay * 0.5 }
              }}
            >
              <div className={`p-3.5 rounded-2xl ${skill.bg} border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                <skill.icon className={skill.color} size={22} strokeWidth={1.5} />
              </div>
              <span className="text-gray-500 text-xs font-medium tracking-wide">{skill.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <p className="text-gray-500 tracking-[0.4em] text-sm mb-4 font-medium uppercase">Hello! I'm</p>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
              Dattatri Reddy
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl mb-6 font-light">
              A passionate <span className="text-cyan-400 font-medium">Full-Stack</span> & <span className="text-yellow-500 font-medium">ML</span> Developer
            </p>
            
            <div className="relative mb-10">
              {/* Subtle glow behind the huge text */}
              <div className="absolute inset-0 blur-[80px] bg-cyan-400/20 rounded-full" />
              <h2 className="text-[80px] md:text-[140px] font-extrabold leading-none tracking-tighter" 
                  style={{
                    background: 'linear-gradient(135deg, #fde047 0%, #86efac 40%, #22d3ee 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0px 0px 40px rgba(34, 211, 238, 0.1)'
                  }}>
                CREATOR
              </h2>
            </div>

            {/* Dots Indicator */}
            <div className="flex gap-2.5 mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
              <div className="w-10 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
            </div>

            <p className="text-gray-400 max-w-xl mb-12 text-[15px] leading-relaxed font-light">
              Building intelligent systems at the intersection of <span className="text-gray-200 font-medium">full-stack development</span> and <span className="text-gray-200 font-medium">machine learning</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="flex items-center gap-3 px-7 py-3.5 rounded-full border border-gray-700/80 bg-gray-900/60 hover:bg-gray-800 transition-all duration-300 text-gray-300 font-medium text-sm hover:scale-105 active:scale-95 group">
                <Coffee size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                Lounge
              </button>
              <button className="flex items-center gap-3 px-7 py-3.5 rounded-full border border-cyan-800/80 bg-cyan-950/40 hover:bg-cyan-900/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 text-cyan-400 font-medium text-sm hover:scale-105 active:scale-95">
                <FileText size={18} />
                Resume & CV
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-[1200px] mx-auto px-6 py-24 relative z-10" id="projects">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[40px] font-bold text-white mb-10 tracking-tight"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => {
            const colors = colorMap[project.color];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#080808]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 flex flex-col hover:bg-[#0c0c0c]/90 transition-colors shadow-xl"
              >
                <div className={`w-8 h-[3px] rounded-full mb-6 ${colors.line}`}></div>
                <h3 className="text-[22px] font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-400 text-[15px] leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className={`text-[13px] px-3.5 py-1 rounded-full border ${colors.border} ${colors.bg} ${colors.text} font-medium tracking-wide`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 px-6 py-3 rounded-full border border-cyan-900 bg-[#080808] text-cyan-400 font-semibold text-sm hover:bg-cyan-950/40 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.05)]"
          >
            View All Projects <ArrowRight size={16} strokeWidth={2.5} />
          </motion.button>
        </div>
      </section>

      {/* About Me Section */}
      <section className="w-full max-w-[1200px] mx-auto px-6 py-24 relative z-10" id="about">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-gray-500 tracking-[0.4em] text-sm mb-4 font-medium uppercase">Who I Am</p>
          <h2 className="text-[50px] font-bold text-white tracking-tight">About Me</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          {/* Map Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:w-1/2 h-[350px] rounded-3xl overflow-hidden border border-white/5 bg-[#080808]"
          >
            <iframe 
              src="https://maps.google.com/maps?q=Bidar,Karnataka&t=m&z=11&output=embed&iwloc=near" 
              title="Location Map"
              className="w-full h-full border-0 opacity-70 transition-opacity hover:opacity-100"
              style={{ filter: 'invert(100%) hue-rotate(180deg) brightness(80%) contrast(120%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent pointer-events-none"></div>

            {/* Location Text */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase pointer-events-none">
              <span className="drop-shadow-md">Bidar, India</span>
              <span className="drop-shadow-md">17.91°N 77.52°E</span>
            </div>
          </motion.div>

          {/* About Text Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-[#080808]/80 backdrop-blur-md border border-white/5 rounded-3xl p-10 flex flex-col justify-center"
          >
            <p className="text-gray-500 tracking-[0.3em] text-xs mb-8 font-medium uppercase flex items-center gap-2">
              <span className="text-gray-600">/</span> ABOUT
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              I'm <span className="text-white font-medium">Dattatri Reddy</span> — a student building at the intersection of full-stack systems and machine learning. I care deeply about clean architecture, meaningful products, and open-source collaboration.
            </p>

            <div className="w-full h-px bg-white/5 mb-8"></div>
            
            <p className="text-gray-500 italic font-light">
              "Where tradition meets technology."
            </p>
          </motion.div>
        </div>

        {/* Trait Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#080808]/80 backdrop-blur-md border border-purple-900/30 rounded-2xl p-6"
          >
            <h3 className="text-purple-400 font-bold tracking-widest text-sm mb-3 uppercase">Growth</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              An explorer of systems, driven by curiosity and understanding.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#080808]/80 backdrop-blur-md border border-cyan-900/30 rounded-2xl p-6"
          >
            <h3 className="text-cyan-400 font-bold tracking-widest text-sm mb-3 uppercase">Focus</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Deep work on efficiency and precision in every layer built.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#080808]/80 backdrop-blur-md border border-orange-900/30 rounded-2xl p-6"
          >
            <h3 className="text-orange-400 font-bold tracking-widest text-sm mb-3 uppercase">Craft</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discipline and dedication in every single line of code.
            </p>
          </motion.div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 px-6 py-3 rounded-full border border-cyan-900 bg-[#080808] text-cyan-400 font-semibold text-sm hover:bg-cyan-950/40 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.05)]"
          >
            View Persona <ArrowRight size={16} strokeWidth={2.5} />
          </motion.button>
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full max-w-[1200px] mx-auto px-6 py-24 relative z-10" id="experience">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-gray-500 tracking-[0.4em] text-sm mb-4 font-medium uppercase">Education & Work</p>
          <h2 className="text-[50px] font-bold text-white tracking-tight">Experience</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Education */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex flex-col"
          >
            <div className="relative pl-8 mb-8 border-l border-white/10 ml-2">
              <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
              
              <p className="text-cyan-400 font-mono text-xs tracking-widest mb-3 uppercase">2024 — 2028</p>
              <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">Bachelor of Science</h3>
              <p className="text-gray-300 mb-1 font-medium">Computer Science & Data Analytics</p>
              <p className="text-gray-500 text-sm">Indian Institute of Technology, Patna</p>
            </div>
            
            <div className="w-full h-[220px] rounded-2xl overflow-hidden border border-white/5 bg-[#080808] ml-2 lg:ml-0 shadow-lg">
              <img 
                src="data:image/jpeg;base64,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" 
                alt="University Campus" 
                className="w-full h-full object-cover grayscale opacity-50 brightness-75 hover:grayscale-0 hover:opacity-80 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Right Column: Work Experience */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-[#080808]/80 backdrop-blur-md border border-orange-900/30 rounded-3xl p-8 hover:border-orange-900/50 transition-colors shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <p className="text-orange-500 font-mono text-xs tracking-widest uppercase mt-2">Dec 20, 2025 — Feb 26, 2026</p>
                <div className="p-3 rounded-2xl border border-orange-900/40 bg-orange-950/30 text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                  <Briefcase size={20} />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Backend & API Design Intern</h3>
              <p className="text-orange-500 font-medium mb-6 text-sm">AuthBridge Technologies</p>

              <p className="text-gray-400 leading-relaxed mb-8 text-[15px]">
                Worked on backend API architecture, auth flows, and system design for enterprise-grade identity & access management solutions. Built scalable REST endpoints and contributed to OAuth2 integration pipelines.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {['Node.js', 'REST APIs', 'OAuth2', 'System Design', 'JWT', 'PostgreSQL'].map(tag => (
                  <span 
                    key={tag} 
                    className="text-[13px] px-3.5 py-1.5 rounded-full border border-orange-900/40 bg-orange-950/20 text-orange-400 font-medium tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Reach Out Section */}
      <section className="w-full max-w-[1200px] mx-auto px-6 py-24 relative z-10" id="reach-out">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-gray-500 tracking-[0.4em] text-sm mb-4 font-medium uppercase">Skills · Workflow · Identity</p>
          <h2 className="text-[50px] font-bold text-white tracking-tight">Reach Out</h2>
        </motion.div>

        <div className="w-full bg-[#080808]/80 backdrop-blur-md border border-white/5 rounded-3xl p-10 flex flex-col shadow-2xl">
          {/* WORKFLOW Header */}
          <p className="text-gray-500 tracking-[0.3em] text-sm mb-12 font-medium uppercase">Workflow</p>

          {/* Timeline */}
          <div className="w-full overflow-x-auto overflow-y-visible pb-4 mb-12" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="relative flex items-center justify-between min-w-[800px] px-2">
              {/* The line behind */}
              <div className="absolute left-6 right-6 top-[28px] h-[1px] bg-gradient-to-r from-yellow-900/30 via-cyan-900/50 to-gray-800 -z-10"></div>
              
              {/* IDEA */}
              <div className="flex flex-col items-center gap-5">
                <div className="w-14 h-14 rounded-2xl border border-yellow-700/50 flex items-center justify-center text-yellow-500 bg-[#0c0c0c] shadow-[0_0_15px_rgba(234,179,8,0.05)]">
                  <Lightbulb size={24} strokeWidth={1.5} />
                </div>
                <span className="text-gray-500 text-[11px] font-bold tracking-widest">IDEA</span>
              </div>

              {/* PLAN */}
              <div className="flex flex-col items-center gap-5">
                <div className="w-14 h-14 rounded-2xl border border-orange-700/50 flex items-center justify-center text-orange-500 bg-[#0c0c0c] shadow-[0_0_15px_rgba(249,115,22,0.05)]">
                  <ClipboardList size={24} strokeWidth={1.5} />
                </div>
                <span className="text-gray-500 text-[11px] font-bold tracking-widest">PLAN</span>
              </div>

              {/* Glowing Dot */}
              <div className="flex flex-col items-center justify-start h-[84px]">
                <div className="w-8 h-8 rounded-full border border-cyan-800/50 flex items-center justify-center bg-cyan-950/40 mt-3 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]"></div>
                </div>
              </div>

              {/* AI HELP */}
              <div className="flex flex-col items-center gap-5">
                <div className="w-14 h-14 rounded-2xl border border-purple-700/50 flex items-center justify-center text-purple-500 bg-[#0c0c0c] shadow-[0_0_15px_rgba(168,85,247,0.05)]">
                  <Brain size={24} strokeWidth={1.5} />
                </div>
                <span className="text-gray-500 text-[11px] font-bold tracking-widest">AI HELP</span>
              </div>

              {/* CODE (Active) */}
              <div className="flex flex-col items-center gap-5 relative">
                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full w-20 h-20 -top-3 -left-3 pointer-events-none"></div>
                <div className="relative w-14 h-14 rounded-2xl border border-cyan-600 flex items-center justify-center text-cyan-400 bg-cyan-950/80 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                  <Code2 size={24} strokeWidth={1.5} />
                </div>
                <span className="text-gray-400 text-[11px] font-bold tracking-widest relative">CODE</span>
              </div>

              {/* REVIEW */}
              <div className="flex flex-col items-center gap-5">
                <div className="w-14 h-14 rounded-2xl border border-pink-900/80 flex items-center justify-center text-pink-600 bg-[#0c0c0c]">
                  <Search size={24} strokeWidth={1.5} />
                </div>
                <span className="text-gray-500 text-[11px] font-bold tracking-widest">REVIEW</span>
              </div>

              {/* TEST */}
              <div className="flex flex-col items-center gap-5">
                <div className="w-14 h-14 rounded-2xl border border-red-900/80 flex items-center justify-center text-red-600 bg-[#0c0c0c]">
                  <FlaskConical size={24} strokeWidth={1.5} />
                </div>
                <span className="text-gray-500 text-[11px] font-bold tracking-widest">TEST</span>
              </div>

              {/* LEARN */}
              <div className="flex flex-col items-center gap-5">
                <div className="w-14 h-14 rounded-2xl border border-gray-700/80 flex items-center justify-center text-gray-300 bg-[#0c0c0c]">
                  <BookOpen size={24} strokeWidth={1.5} />
                </div>
                <span className="text-gray-500 text-[11px] font-bold tracking-widest">LEARN</span>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-white/5 mb-10"></div>

          {/* HIT ME UP Header */}
          <p className="text-gray-500 tracking-[0.3em] text-sm mb-6 font-medium uppercase">Hit Me Up</p>

          <div className="flex flex-wrap items-center gap-5">
            <a href="mailto:contact@dattatri.com" className="flex items-center gap-2.5 px-6 py-3 rounded-full border border-red-900/60 bg-red-950/20 text-red-500 font-semibold text-sm hover:bg-red-900/30 transition-colors shadow-lg">
              <Mail size={18} />
              Mail
            </a>
            
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 px-6 py-3 rounded-full border border-gray-700/60 bg-gray-900/40 text-gray-200 font-semibold text-sm hover:bg-gray-800 transition-colors shadow-lg">
              <GithubIcon size={18} />
              GitHub
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 px-6 py-3 rounded-full border border-blue-900/60 bg-blue-950/30 text-blue-500 font-semibold text-sm hover:bg-blue-900/40 transition-colors shadow-lg">
              <LinkedinIcon size={18} />
              LinkedIn
            </a>
          </div>

        </div>
      </section>

      {/* Floating Message Button (Bottom Right) */}
      <motion.button 
        className="fixed bottom-10 right-10 p-4 rounded-full bg-cyan-950/50 border border-cyan-900 text-cyan-400 hover:bg-cyan-900/80 transition-all shadow-[0_0_20px_rgba(34,211,238,0.15)] z-50 hover:scale-110 active:scale-95"
        whileHover={{ y: -5 }}
      >
        <MessageSquare size={24} />
      </motion.button>

    </div>
  );
};

export default Home;

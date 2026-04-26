import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'CommodityChain',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    description: 'Real-time commodity intelligence platform with live prices, AI-driven insights, interactive charts, correlation analytics, and India-focused macroeconomic data for traders.',
    scope: 'Live price streaming, AI analysis, correlation matrix, global trade map, India fuel insights, macro simulator',
    tech: 'React, Node.js, Python, WebSocket, Tailwind CSS',
    github: '#',
    live: '#'
  },
  {
    id: 2,
    title: 'FitoGlobe',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
    description: 'Full-stack fitness tracking web app with AI macro calculator, food scanner, Groq-powered coach, multilingual support, and mobile-first design.',
    scope: 'Streak card + mini calendar dashboard; workout library with muscle filter; AI nutrition logging; food scan via Groq Vision; multilingual EN/ES/JA/KO.',
    tech: 'React, Tailwind, Groq API, Node.js',
    github: '#',
    live: '#'
  },
  {
    id: 3,
    title: 'Dollar Hegemony',
    image: 'https://images.unsplash.com/photo-1590283603385-18ffb2a40c27?auto=format&fit=crop&w=800&q=80',
    description: 'ML-driven study of USD dominance using a custom Dollar Supremacy Index (DSI) built from macro indicators, with XGBoost + stacked LSTM + Temporal Transformer ensemble forecasting.',
    scope: 'Publication-ready Kaggle notebook; MLOps layer with GitHub Actions retrain cron, Evidently drift detection, and DagsHub registry.',
    tech: 'Python, XGBoost, LSTM, Transformer, MLOps',
    github: '#',
    live: '#'
  },
  {
    id: 4,
    title: 'India Crime Analytics',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80',
    description: 'Interactive crime data explorer for India with state/district drilldowns, trend charts, and an AI chatbot that answers natural language queries over 1920+ records.',
    scope: 'Full-stack deployed app; AI chatbot via Claude API; MongoDB Compass seeded with NCRB dataset; Vercel + Render deployment.',
    tech: 'React, Node.js, MongoDB, Claude API',
    github: '#',
    live: '#'
  },
  {
    id: 5,
    title: 'India Banking Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'Financial analytics dashboard comparing 10 Indian banks (SBI, HDFC, ICICI, Axis, PNB + more) across FY 2020-2024 — tracks NPA recovery, profit growth, ROA/ROE, and asset share with AI-generated sector insights.',
    scope: '5 KPI cards, NPA heatmap, ROA vs ROE scatter, AI insight via Groq LLaMA 3.3 70B, PDF export; warm RBI-inspired design with animated ₹ particles.',
    tech: 'React, Tailwind, Groq LLaMA, Chart.js',
    github: '#',
    live: '#'
  },
  {
    id: 6,
    title: 'AQI PowerBI Dashboard',
    image: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?auto=format&fit=crop&w=800&q=80',
    description: 'Power BI dashboard visualizing air quality index trends across Indian cities, with pollutant breakdowns, seasonal patterns, and station-level drilldowns.',
    scope: 'Multi-city AQI comparison with pollutant-level filters; published as interactive Power BI report.',
    tech: 'Power BI, DAX, Data Modeling',
    github: '#',
    live: '#'
  }
];

const ProjectCard = ({ project }) => {
  const [activeTab, setActiveTab] = useState('scope');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#080808] border border-white/5 rounded-2xl overflow-hidden flex flex-col shadow-xl hover:border-white/10 transition-colors"
    >
      <div className="h-48 w-full overflow-hidden bg-gray-900 relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"></div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Custom Toggle Switch */}
        <div className="flex bg-[#111] rounded-full p-1 w-max mb-4 border border-white/5">
          <button 
            onClick={() => setActiveTab('scope')}
            className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest transition-all ${activeTab === 'scope' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-500 hover:text-gray-300'}`}
          >
            SCOPE
          </button>
          <button 
            onClick={() => setActiveTab('tech')}
            className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest transition-all ${activeTab === 'tech' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-500 hover:text-gray-300'}`}
          >
            TECH
          </button>
        </div>

        <div className="flex-grow mb-6">
          <p className="text-gray-400 text-sm leading-relaxed">
            {activeTab === 'scope' ? project.scope : project.tech}
          </p>
        </div>

        <div className="w-full h-px bg-white/5 mb-4"></div>

        <div className="flex items-center gap-6">
          <a href={project.github} className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-xs font-medium">
            <Github size={14} /> Code
          </a>
          <a href={project.live} className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-xs font-medium">
            <ExternalLink size={14} /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 px-6 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 tracking-[0.3em] text-xs mb-4 font-bold uppercase">Portfolio</p>
          <h1 className="text-[50px] font-bold text-white tracking-tight">Selected Works</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

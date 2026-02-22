import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code2, 
  Cpu, 
  Zap, 
  Settings, 
  Award,
  Target,
  Lightbulb,
  Users
} from 'lucide-react';
import { skillCategories, achievements } from '../data/portfolioData';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Electrical Control Systems Engineer passionate about turning complex problems into elegant solutions.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-slate-300 leading-relaxed">
                  I am a final-year engineering student in Electrical Engineering and Industrial Systems Control, 
                  passionate about turning complex problems into elegant solutions. My focus lies in automation, 
                  power electronics, and embedded systems.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  With a strong foundation in electrical design, industrial automation, and system integration, 
                  I am driven to contribute to innovative projects and apply my expertise in real-world applications. 
                  I thrive in collaborative environments and enjoy tackling challenges that push the boundaries of technology.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  My experience spans from developing VBA automation scripts for Worst-Case Analysis at Lear Corporation 
                  to modeling complex train control systems at Vulcain Engineering. I've also conducted published research 
                  on Reinforcement Learning for renewable energy systems.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800/50">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">4+</div>
                  <div className="text-slate-500 text-sm">Years Experience</div>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800/50">
                  <div className="text-3xl font-bold text-violet-400 mb-1">12+</div>
                  <div className="text-slate-500 text-sm">Projects Completed</div>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800/50">
                  <div className="text-3xl font-bold text-green-400 mb-1">1</div>
                  <div className="text-slate-500 text-sm">Publication</div>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800/50">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">2</div>
                  <div className="text-slate-500 text-sm">Awards</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Skills & Interests */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Areas of Expertise */}
              <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800/50">
                <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center space-x-3">
                  <Target className="w-6 h-6 text-cyan-400" />
                  <span>Areas of Expertise</span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Settings, label: 'Control Systems', color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
                    { icon: Zap, label: 'Power Electronics', color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
                    { icon: Cpu, label: 'Embedded Systems', color: 'text-violet-400', bg: 'bg-violet-500/20' },
                    { icon: Code2, label: 'Industrial IoT', color: 'text-green-400', bg: 'bg-green-500/20' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-xl"
                    >
                      <div className={`p-2 ${item.bg} rounded-lg`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <span className="text-slate-300 font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What I Do */}
              <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800/50">
                <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center space-x-3">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                  <span>What I Do</span>
                </h3>
                <ul className="space-y-3">
                  {[
                    'Design and implement advanced control systems (PID, MPC, Nonlinear)',
                    'Develop embedded firmware for STM32, ESP32, and PLC platforms',
                    'Model and simulate complex systems in MATLAB/Simulink',
                    'Design power electronics (converters, inverters, BMS)',
                    'Implement AI/ML solutions for energy management',
                    'Create industrial automation and SCADA solutions'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Personal Interests */}
              <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800/50">
                <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center space-x-3">
                  <Users className="w-6 h-6 text-pink-400" />
                  <span>Beyond Engineering</span>
                </h3>
                <p className="text-slate-400">
                  When I'm not designing circuits or writing code, you'll find me participating in robotics 
                  competitions with Club Electro Lab, exploring new AI/ML research papers, or contributing to 
                  open-source projects. I'm passionate about continuous learning and sharing knowledge with the community.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4">
              Technical Skills
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A comprehensive toolkit built through academic study, professional experience, and personal projects.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-500"
              >
                <h3 className="text-lg font-bold text-slate-100 mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm bg-slate-800/50 text-slate-300 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4">
              Achievements
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Recognition for innovation, research excellence, and technical contributions.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl border border-slate-700/50"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-8 h-8 text-cyan-400" />
                  <span className="px-3 py-1 text-sm font-medium bg-cyan-500/20 text-cyan-400 rounded-full">
                    {achievement.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">{achievement.title}</h3>
                <p className="text-slate-400">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-6">
              Let's Build Something Together
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-slate-100 rounded-xl border border-slate-700/50 transition-all duration-300"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

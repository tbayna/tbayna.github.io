import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Building2, 
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import { experiences, education } from '../data/portfolioData';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            Professional Experience
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            A journey through R&D, industrial automation, and power electronics. 
            Each role has contributed to my expertise in control systems and embedded development.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/50 to-transparent hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start md:items-center gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950 hidden sm:block" />

                {/* Content Card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group p-6 md:p-8 bg-slate-900/50 rounded-2xl border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-500">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-sm font-medium bg-cyan-500/20 text-cyan-400 rounded-full flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="px-3 py-1 text-sm font-medium bg-slate-800 text-slate-400 rounded-full flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </span>
                    </div>

                    {/* Company & Role */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="p-3 bg-slate-800/50 rounded-xl">
                        <Building2 className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-cyan-400 font-medium">{exp.company}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 mb-6">{exp.description}</p>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-400 text-sm">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-slate-800/50 text-slate-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
              Education
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Academic foundation in electrical engineering and industrial control systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-500"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-violet-500/20 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-violet-400" />
                  </div>
                  <span className="px-3 py-1 text-xs font-medium bg-slate-800 text-slate-400 rounded-full">
                    {edu.period}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2">{edu.degree}</h3>
                <p className="text-cyan-400 text-sm mb-2">{edu.specialization}</p>
                <p className="text-slate-500 text-sm">{edu.institution}</p>
                <p className="text-slate-600 text-sm">{edu.location}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="p-8 md:p-12 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-violet-500/10 rounded-3xl border border-cyan-500/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
              Interested in my work?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Check out my projects to see detailed examples of my technical capabilities 
              and problem-solving approach.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;

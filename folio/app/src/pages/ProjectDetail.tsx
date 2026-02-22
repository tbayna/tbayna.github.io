import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Lightbulb, 
  Target, 
  Trophy,
  Wrench,
  Tag
} from 'lucide-react';
import { projects } from '../data/portfolioData';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  const currentIndex = projects.findIndex(p => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-100 mb-4">Project Not Found</h1>
          <p className="text-slate-400 mb-6">The project you're looking for doesn't exist.</p>
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 h-[60vh]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/80 to-slate-950" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Link */}
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </Link>

            {/* Category & Featured Badge */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="px-4 py-1.5 text-sm font-medium bg-cyan-500/20 text-cyan-400 rounded-full">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-4 py-1.5 text-sm font-medium bg-violet-500/20 text-violet-400 rounded-full flex items-center space-x-1">
                  <Trophy className="w-4 h-4" />
                  <span>Featured Project</span>
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 mb-6 max-w-4xl">
              {project.title}
            </h1>

            {/* Short Description */}
            <p className="text-xl text-slate-400 max-w-3xl mb-8">
              {project.shortDescription}
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm font-medium bg-slate-800/50 text-slate-300 rounded-full border border-slate-700/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-cyan-500/20 rounded-lg">
                    <Target className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-100">Project Overview</h2>
                </div>
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>
              </motion.div>

              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-red-500/20 rounded-lg">
                    <Lightbulb className="w-6 h-6 text-red-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-100">Challenges</h2>
                </div>
                <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800/50">
                  <ul className="space-y-4">
                    {project.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center bg-red-500/20 text-red-400 rounded-full text-sm font-medium mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-slate-300">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-100">Solutions Implemented</h2>
                </div>
                <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800/50">
                  <ul className="space-y-4">
                    {project.solutions.map((solution, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-violet-500/20 rounded-lg">
                    <Trophy className="w-6 h-6 text-violet-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-100">Key Outcomes</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.outcomes.map((outcome, i) => (
                    <div
                      key={i}
                      className="p-4 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-xl border border-violet-500/20"
                    >
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{outcome}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800/50"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Wrench className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-bold text-slate-100">Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm bg-slate-800 text-slate-300 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800/50"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Tag className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-bold text-slate-100">Skills Applied</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm bg-cyan-500/10 text-cyan-400 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Project Navigation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800/50"
              >
                <h3 className="text-lg font-bold text-slate-100 mb-4">More Projects</h3>
                <div className="space-y-3">
                  {prevProject && (
                    <Link
                      to={`/projects/${prevProject.id}`}
                      className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors group"
                    >
                      <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-slate-500">Previous</p>
                        <p className="text-sm text-slate-300 truncate group-hover:text-cyan-400 transition-colors">
                          {prevProject.title}
                        </p>
                      </div>
                    </Link>
                  )}
                  {nextProject && (
                    <Link
                      to={`/projects/${nextProject.id}`}
                      className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors group"
                    >
                      <div className="flex-1 min-w-0 text-right">
                        <p className="text-xs text-slate-500">Next</p>
                        <p className="text-sm text-slate-300 truncate group-hover:text-cyan-400 transition-colors">
                          {nextProject.title}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    </Link>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-slate-100 rounded-xl border border-slate-700/50 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>All Projects</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              <span>Discuss This Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;

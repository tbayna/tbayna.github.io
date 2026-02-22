import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter, Grid3X3, List } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

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
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            All Projects
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            A comprehensive collection of my work across control systems, power electronics, 
            embedded systems, and renewable energy. Each project represents a unique challenge 
            and innovative solution.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12"
        >
          {/* Category Filters */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            <Filter className="w-5 h-5 text-slate-500 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all duration-300 ${
                viewMode === 'grid'
                  ? 'bg-slate-700 text-cyan-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all duration-300 ${
                viewMode === 'list'
                  ? 'bg-slate-700 text-cyan-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + viewMode}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className={
              viewMode === 'grid'
                ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-6'
            }
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
              >
                <Link to={`/projects/${project.id}`}>
                  <div
                    className={`group relative overflow-hidden bg-slate-900 border border-slate-800/50 hover:border-cyan-500/30 rounded-2xl transition-all duration-500 ${
                      viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`overflow-hidden ${
                        viewMode === 'list'
                          ? 'md:w-1/3 aspect-video md:aspect-auto'
                          : 'aspect-video'
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {viewMode === 'grid' && (
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className={`p-6 ${
                        viewMode === 'list' ? 'md:w-2/3 flex flex-col justify-center' : 'absolute bottom-0 left-0 right-0'
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-3 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="px-3 py-1 text-xs font-medium bg-violet-500/20 text-violet-400 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>

                      <h3
                        className={`font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-2 ${
                          viewMode === 'list' ? 'text-2xl' : 'text-xl'
                        }`}
                      >
                        {project.title}
                      </h3>

                      <p
                        className={`text-slate-400 mb-4 ${
                          viewMode === 'list' ? 'line-clamp-2' : 'line-clamp-2 text-sm'
                        }`}
                      >
                        {project.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.skills.slice(0, viewMode === 'list' ? 5 : 3).map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-slate-800/50 text-slate-400 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-cyan-400 text-sm font-medium">
                        <span>View Project Details</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-slate-500 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;

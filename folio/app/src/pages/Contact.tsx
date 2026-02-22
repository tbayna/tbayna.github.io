import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send,
  ArrowRight,
  Clock,
  Globe
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/20'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
      color: 'text-green-400',
      bg: 'bg-green-500/20'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/hicham-tbina',
      href: personalInfo.linkedin,
      color: 'text-blue-400',
      bg: 'bg-blue-500/20'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      color: 'text-violet-400',
      bg: 'bg-violet-500/20'
    }
  ];

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
            Get In <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            I'm currently seeking a final-year internship and am open to new opportunities. 
            Feel free to reach out if you have a project in mind or just want to say hello!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group p-6 bg-slate-900/50 rounded-2xl border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-500"
                >
                  <div className={`p-3 ${method.bg} rounded-xl w-fit mb-4`}>
                    <method.icon className={`w-6 h-6 ${method.color}`} />
                  </div>
                  <p className="text-slate-500 text-sm mb-1">{method.label}</p>
                  <p className="text-slate-100 font-medium group-hover:text-cyan-400 transition-colors">
                    {method.value}
                  </p>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Clock className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-100">Availability</h3>
              </div>
              <p className="text-slate-400 mb-4">
                I'm currently available for:
              </p>
              <ul className="space-y-2">
                {[
                  'Final-year internships (6 months)',
                  'Full-time positions (starting 2026)',
                  'Freelance consulting projects',
                  'Research collaborations'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-violet-500/20 rounded-lg">
                  <Globe className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-100">Languages</h3>
              </div>
              <div className="space-y-3">
                {[
                  { language: 'English', level: 'Fluent (Full Technical Proficiency)', progress: 95 },
                  { language: 'French', level: 'Full Professional Proficiency', progress: 90 },
                  { language: 'Arabic', level: 'Native', progress: 100 }
                ].map((lang, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-300">{lang.language}</span>
                      <span className="text-slate-500 text-sm">{lang.level}</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        style={{ width: `${lang.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800/50">
              <h2 className="text-2xl font-bold text-slate-100 mb-2">Send a Message</h2>
              <p className="text-slate-400 mb-8">
                Have a project in mind? Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form
                action={`mailto:${personalInfo.email}`}
                method="post"
                encType="text/plain"
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-slate-500 text-sm">
                  Or email me directly at{' '}
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="grid sm:grid-cols-3 gap-6">
            <a
              href="/projects"
              className="group p-6 bg-slate-900/50 rounded-2xl border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-500 text-center"
            >
              <div className="p-3 bg-cyan-500/20 rounded-xl w-fit mx-auto mb-4">
                <ArrowRight className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                View My Projects
              </h3>
              <p className="text-slate-400 text-sm">
                Explore my technical work and case studies
              </p>
            </a>

            <a
              href="/experience"
              className="group p-6 bg-slate-900/50 rounded-2xl border border-slate-800/50 hover:border-violet-500/30 transition-all duration-500 text-center"
            >
              <div className="p-3 bg-violet-500/20 rounded-xl w-fit mx-auto mb-4">
                <ArrowRight className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-violet-400 transition-colors">
                See My Experience
              </h3>
              <p className="text-slate-400 text-sm">
                Learn about my professional background
              </p>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-slate-900/50 rounded-2xl border border-slate-800/50 hover:border-blue-500/30 transition-all duration-500 text-center"
            >
              <div className="p-3 bg-blue-500/20 rounded-xl w-fit mx-auto mb-4">
                <Linkedin className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                Connect on LinkedIn
              </h3>
              <p className="text-slate-400 text-sm">
                Let's network and stay in touch
              </p>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { siteMeta } from '../data/siteMeta'

export default function Hero() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
              Hi, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {siteMeta.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4">
              {siteMeta.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              📍 {siteMeta.location}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-2xl">
              {siteMeta.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/projects" className="btn-primary">
                View Projects
              </Link>
              <Link to="/cv" className="btn-secondary">
                View CV
              </Link>
            </div>
          </motion.div>

          {/* Profile Image Placeholder */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-2xl">
              <span className="text-white text-8xl font-bold">
                {siteMeta.name.charAt(0)}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

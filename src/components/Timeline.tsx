import { motion } from 'framer-motion'
import type { Experience } from '../types'

interface TimelineProps {
  experiences: Experience[]
}

export default function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-600" />

      {/* Timeline Items */}
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-900 z-10" />

            {/* Content */}
            <div
              className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}
            >
              <div className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {exp.period}
                  </span>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">
                  {exp.company}
                </p>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-600 dark:text-gray-400 flex items-start"
                    >
                      <span className="text-primary-600 dark:text-primary-400 mr-2">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {exp.tech && exp.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      className="card cursor-pointer group"
      onClick={onClick}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Project Image - Lazy loading with placeholder */}
      <div className="relative h-48 mb-4 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={e => {
            // Fallback to placeholder if image fails to load
            e.currentTarget.src =
              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%239ca3af"%3EProject Image%3C/text%3E%3C/svg%3E'
          }}
        />
        {project.featured && (
          <div className="absolute top-2 right-2 bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded">
            Featured
          </div>
        )}
      </div>

      {/* Project Info */}
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {project.description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.slice(0, 4).map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            +{project.tech.length - 4} more
          </span>
        )}
      </div>

      {/* View Details Link */}
      <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:underline">
        View Details
        <svg
          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </motion.div>
  )
}

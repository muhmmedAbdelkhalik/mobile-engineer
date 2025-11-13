import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="section-padding min-h-[60vh] flex items-center">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <Link to="/" className="btn-primary">
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

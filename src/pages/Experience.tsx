import { motion } from 'framer-motion'
import Timeline from '../components/Timeline'
import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in mobile development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <Timeline experiences={experiences} />
        </div>
      </div>
    </div>
  )
}

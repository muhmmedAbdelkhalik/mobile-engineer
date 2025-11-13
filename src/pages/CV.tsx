import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { motion } from 'framer-motion'
import { resume } from '../data/resume'

export default function CV() {
  const componentRef = useRef<HTMLDivElement>(null)

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${resume.personal.name}_CV`,
  })

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Download Button - Hidden in print */}
        <motion.div
          className="flex justify-center mb-8 no-print"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button onClick={handlePrint} className="btn-primary inline-flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download PDF
          </button>
        </motion.div>

        {/* CV Content */}
        <motion.div
          ref={componentRef}
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 md:p-12 print:shadow-none print:rounded-none print:p-0 print:dark:bg-white print:dark:text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Header */}
          <header className="mb-8 pb-6 border-b-2 border-gray-200 dark:border-gray-700 print:border-gray-400">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white print:text-black">
              {resume.personal.name}
            </h1>
            <h2 className="text-2xl text-primary-600 dark:text-primary-400 mb-4 print:text-blue-600">
              {resume.personal.title}
            </h2>
            <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 print:text-gray-700">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {resume.personal.location}
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {resume.personal.email}
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {resume.personal.phone}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-2 text-gray-600 dark:text-gray-400 print:text-gray-700">
              <a
                href={resume.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary-600 dark:hover:text-primary-400 print:no-underline"
              >
                GitHub
              </a>
              <a
                href={resume.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary-600 dark:hover:text-primary-400 print:no-underline"
              >
                LinkedIn
              </a>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-8 page-break-avoid">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white print:text-black">
              Summary
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed print:text-gray-800">
              {resume.summary}
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white print:text-black">
              Experience
            </h3>
            <div className="space-y-6">
              {resume.experience.map(exp => (
                <div key={exp.id} className="page-break-avoid">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white print:text-black">
                        {exp.position}
                      </h4>
                      <p className="text-lg text-gray-700 dark:text-gray-300 print:text-gray-800">
                        {exp.company}
                      </p>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-medium print:text-blue-600">
                      {exp.period}
                    </p>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 print:text-gray-800">
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-8 page-break-avoid">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white print:text-black">
              Education
            </h3>
            {resume.education.map((edu, index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white print:text-black">
                  {edu.degree}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 print:text-gray-800">
                  {edu.field}
                </p>
                <p className="text-gray-600 dark:text-gray-400 print:text-gray-700">
                  {edu.institution} • Graduated {edu.year}
                </p>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className="page-break-avoid">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white print:text-black">
              Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resume.skills.map((skillGroup, index) => (
                <div key={index} className="page-break-avoid">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 print:text-black">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded print:bg-gray-200 print:text-gray-800 print:border print:border-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  )
}

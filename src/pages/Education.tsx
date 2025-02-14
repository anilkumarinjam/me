import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Education</h1>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-semibold">Master of Science in Computer Science</h3>
          <p className="text-gray-600 mb-2">Lamar University</p>
          <p className="text-gray-500 text-sm mb-4">2023 - Present</p>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Relevant Coursework:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Data Structures and Algorithms</li>
              <li>Cloud Computing</li>
              <li>Software Engineering</li>
              <li>Operating Systems</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-semibold mb-4">Certifications</h3>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
            <a 
              href="https://www.credly.com/badges/99e1c2a0-2f1b-4835-8840-ba5c628d54d1/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <span>AWS Certified Solutions Architect Associate</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;
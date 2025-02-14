import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Fraud Detection System",
      description: "Scalable Java microservices for real-time credit card transaction processing and fraud detection",
      technologies: ["Java", "Spring Boot", "AWS", "Kafka", "React", "Microservices"],
      highlights: [
        "Real-time transaction processing",
        "Event-driven architecture",
        "Interactive dashboards",
        "Advanced JVM tuning"
      ]
    },
    {
      title: "Policy Management Portal",
      description: "Comprehensive insurance policy management system with dynamic user interface",
      technologies: ["React", "TypeScript", "AWS Lambda", "DynamoDB", "Spring Boot"],
      highlights: [
        "Server-side rendering",
        "Automated CI/CD pipeline",
        "Comprehensive test coverage",
        "Optimized performance"
      ]
    },
    {
      title: "Customer Portal Migration",
      description: "Legacy system modernization and cloud migration project",
      technologies: ["Java", "Angular", "Azure", "Spring", "Hibernate"],
      highlights: [
        "30% cost reduction",
        "Improved performance",
        "Modern UI/UX",
        "Cloud-native architecture"
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Projects</h1>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            
            <div className="mb-4">
              <h4 className="font-medium mb-2">Key Highlights:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
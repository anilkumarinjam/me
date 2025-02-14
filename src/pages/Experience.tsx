import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "PayPal",
      period: "Feb 2024 - Present",
      description: [
        "Designed and worked on scalable Java microservices for fraud detection system",
        "Deployed microservices on AWS ECS using CI/CD pipelines",
        "Implemented event-driven architecture using Apache Kafka",
        "Developed interactive dashboards using React.js",
        "Optimized Java applications through advanced JVM tuning",
        "Integrated legacy mainframe systems using Java libraries and APIs",
        "Enforced robust authentication using Spring Security"
      ],
      technologies: ["Java", "Spring Boot", "AWS", "React", "Kafka", "Microservices"]
    },
    {
      title: "Full Stack Developer",
      company: "The Hartford",
      period: "Jan 2021 - Dec 2022",
      description: [
        "Developed robust business logic for policy management module",
        "Created React and TypeScript-based web interface",
        "Integrated external data sources using AWS Lambda and API Gateway",
        "Implemented server-side rendering (SSR) in React",
        "Developed comprehensive unit tests using JUnit and Mockito",
        "Optimized Java code performance using multithreading"
      ],
      technologies: ["Java", "React", "TypeScript", "AWS Lambda", "JUnit", "DynamoDB"]
    },
    {
      title: "Java Developer",
      company: "Lowe's",
      period: "Jan 2019 - Jan 2021",
      description: [
        "Implemented scalable customer portals and billing systems",
        "Applied advanced object-oriented principles and design patterns",
        "Utilized Angular and Angular Material for dynamic UIs",
        "Leveraged Spring and Hibernate frameworks",
        "Migrated legacy customer portals to Azure App Services",
        "Optimized application performance achieving 10% improvement"
      ],
      technologies: ["Java", "Spring", "Hibernate", "Angular", "Azure", "RESTful APIs"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Experience</h1>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                <p className="text-gray-600">{exp.company}</p>
              </div>
              <p className="text-gray-500 text-sm">{exp.period}</p>
            </div>
            <ul className="list-disc list-inside space-y-2 mb-4">
              {exp.description.map((item, i) => (
                <li key={i} className="text-gray-700">{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
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

export default Experience;
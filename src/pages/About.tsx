import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  
  const skills = {
    languages: ['Java 8/11', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
    frameworks: ['Spring Boot', 'Spring Framework', 'Hibernate', 'JPA', 'React', 'Angular'],
    cloud: ['AWS', 'Azure', 'Google Cloud Platform'],
    devops: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI'],
    databases: ['MySQL', 'Oracle', 'PostgreSQL', 'MongoDB'],
    other: ['Microservices', 'RESTful APIs', 'Apache Kafka', 'RabbitMQ', 'ELK Stack']
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">About Me</h1>
      <div className="prose prose-lg">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 backdrop-blur-sm bg-opacity-90">
          <p className="mb-4">
            Full Stack Developer with <button 
              onClick={() => navigate('/experience')}
              className="text-blue-600 hover:text-purple-600 font-semibold transition-colors underline"
            >
              5+ years of experience
            </button> in designing, developing, and optimizing scalable applications. 
            Specializing in Spring Boot, Microservices, and cloud-based solutions (AWS, GCP). Expertise in building 
            distributed microservices using Spring Boot, Spring Cloud, and Netflix OSS for scalable and fault-tolerant applications.
          </p>
          <p>
            Passionate about building secure, efficient, and scalable Java applications while staying up to date with 
            modern cloud and DevOps technologies.
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-12 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-90"
            >
              <h3 className="font-semibold mb-3 capitalize">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
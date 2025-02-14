import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Contact Me</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <p className="text-gray-700 mb-8">
          Based in Dallas, TX, I'm always open to new opportunities and collaborations. Feel free to reach out through any of the following channels:
        </p>
        
        <div className="space-y-6">
          <motion.a
            href="tel:+19363918085"
            className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors"
            whileHover={{ x: 10 }}
          >
            <Phone size={24} />
            <span>(936) 391-8085</span>
          </motion.a>

          <motion.a
            href="mailto:anilkumarch.228@gmail.com"
            className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors"
            whileHover={{ x: 10 }}
          >
            <Mail size={24} />
            <span>anilkumarch.228@gmail.com</span>
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/anilkumarinjam"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors"
            whileHover={{ x: 10 }}
          >
            <Linkedin size={24} />
            <span>LinkedIn Profile</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
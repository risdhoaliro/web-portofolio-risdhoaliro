import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';
import { ContactForm, AnimatedCard, AuroraText } from '../lightswind';
import { useInView } from 'react-intersection-observer';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      label: "Email",
      value: "risdhoaliro@gmail.com",
      href: "mailto:risdhoaliro@gmail.com",
      color: "bg-blue-50 hover:bg-blue-100"
    },
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      label: "Phone",
      value: "+62 878-7830-2794",
      href: "tel:+6287878302794",
      color: "bg-green-50 hover:bg-green-100"
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      label: "Location",
      value: "Jakarta, Indonesia",
      href: "#",
      color: "bg-red-50 hover:bg-red-100"
    },
    {
      icon: <Github className="w-6 h-6 text-gray-600" />,
      label: "GitHub",
      value: "github.com/risdhoaliro",
      href: "https://github.com/risdhoaliro",
      color: "bg-gray-50 hover:bg-gray-100"
    },
    {
      icon: <Linkedin className="w-6 h-6 text-blue-700" />,
      label: "LinkedIn",
      value: "linkedin.com/in/risdhoaliro",
      href: "https://linkedin.com/in/risdhoaliros",
      color: "bg-blue-50 hover:bg-blue-100"
    }
  ];

  const handleFormSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AuroraText 
              size="4xl" 
              speed={5}
              colors={[
                '#3b82f6', // blue-500
                '#ec4899', // pink-500
                '#8b5cf6', // violet-500
                '#06b6d4', // cyan-500
                '#10b981', // emerald-500
                '#8b5cf6'  // violet-500
              ]}
            >
              Get In Touch
            </AuroraText>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </motion.p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <MessageCircle className="w-8 h-8 text-blue-600 mr-3" />
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Whether you have a project in mind, need quality assurance expertise, 
                or just want to chat about testing and automation, I'd love to hear from you.
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.1}
                  direction="left"
                  hover={true}
                  scale={true}
                  className="group"
                >
                  <motion.a
                    href={info.href}
                    className={`flex items-center p-4 rounded-xl border border-gray-200 dark:border-gray-700 ${info.color} dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300`}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="mr-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {info.label}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                </AnimatedCard>
              ))}
            </div>

            {/* Additional Info */}
            <AnimatedCard
              delay={0.6}
              direction="left"
              hover={true}
              glow={true}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-blue-200 dark:border-gray-600"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Quick Response
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to reach out via LinkedIn or phone.
              </p>
            </AnimatedCard>
          </div>

          {/* Contact Form */}
          <AnimatedCard
            direction="right"
            hover={true}
            scale={true}
            glow={true}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Send Message
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fill out the form below and I'll get back to you soon.
              </p>
            </motion.div>

            <ContactForm onSubmit={handleFormSubmit} />
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
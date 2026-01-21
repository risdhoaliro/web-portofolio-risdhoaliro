import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, Calendar, Building, FileText, Download, ZoomIn, ZoomOut } from 'lucide-react';
import { AnimatedCard, AuroraText } from '../lightswind';
import { useInView } from 'react-intersection-observer';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  pdfUrl: string;
  imageUrl: string;
  skills: string[];
  category: 'security' | 'csirt';
}

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [zoom, setZoom] = useState(1);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const certifications: Certification[] = [
    {
      id: 1,
      title: "Cybersecurity Career Starter Certification (CCSC)",
      issuer: "Cybersecurity Institute",
      date: "2024",
      pdfUrl: "/certifications/ccsc.pdf",
      imageUrl: "/certifications/images/ccsc.png",
      skills: ["Cybersecurity Fundamentals", "Threat Analysis", "Security Best Practices", "Risk Management"],
      category: 'security'
    },
    {
      id: 2,
      title: "Certified Phishing Prevention Specialist",
      issuer: "Security Training Institute",
      date: "2024",
      pdfUrl: "/certifications/phishing-prevention.pdf",
      imageUrl: "/certifications/images/phishing-prevention.png",
      skills: ["Phishing Detection", "Social Engineering", "Email Security", "User Awareness"],
      category: 'security'
    },
    {
      id: 3,
      title: "ATM Penetration Testing Certificate",
      issuer: "Security Academy",
      date: "2024",
      pdfUrl: "/certifications/atm_penetration_certificate.pdf",
      imageUrl: "/certifications/images/atm_penetration_certificate.png",
      skills: ["ATM Security", "Penetration Testing", "Vulnerability Assessment", "Hardware Security"],
      category: 'security'
    },
    {
      id: 4,
      title: "Security Code Certificate",
      issuer: "Code Security Institute",
      date: "2024",
      pdfUrl: "/certifications/security_code_certificate.pdf",
      imageUrl: "/certifications/images/security_code_certificate.png",
      skills: ["Secure Coding", "Code Review", "SAST/DAST", "Application Security"],
      category: 'security'
    },
    {
      id: 5,
      title: "Aviatrix Certified Engineer - Multicloud Network Associate",
      issuer: "Aviatrix",
      date: "2024",
      pdfUrl: "/certifications/aviatrix-multicloud.pdf",
      imageUrl: "/certifications/images/aviatrix-multicloud.png",
      skills: ["Multicloud Networking", "Cloud Security", "AWS/Azure/GCP", "Network Architecture"],
      category: 'security'
    },
    {
      id: 6,
      title: "Certified Web Forensic Expert (CWFE)",
      issuer: "Digital Forensics Institute",
      date: "2024",
      pdfUrl: "/certifications/cwfe.pdf",
      imageUrl: "/certifications/images/cwfe.png",
      skills: ["Web Forensics", "Digital Evidence", "Forensic Analysis", "Investigation Techniques"],
      category: 'security'
    },
    {
      id: 7,
      title: "CSIRT Provinsi Yogyakarta",
      issuer: "CSIRT Prov. Yogyakarta",
      date: "2024",
      pdfUrl: "/certifications/csirt-yogyakarta.pdf",
      imageUrl: "/certifications/images/csirt-yogyakarta.png",
      skills: ["Incident Response", "Security Monitoring", "Threat Intelligence", "CSIRT Operations"],
      category: 'csirt'
    },
    {
      id: 8,
      title: "CSIRT Universitas Airlangga",
      issuer: "Universitas Airlangga",
      date: "2024",
      pdfUrl: "/certifications/csirt-unair.pdf",
      imageUrl: "/certifications/images/csirt-unair.png",
      skills: ["Incident Handling", "Digital Forensics", "Malware Analysis", "Network Security"],
      category: 'csirt'
    },
    {
      id: 9,
      title: "CSIRT Universitas Negeri Yogyakarta",
      issuer: "Universitas Negeri Yogyakarta",
      date: "2024",
      pdfUrl: "/certifications/csirt-uny.pdf",
      imageUrl: "/certifications/images/csirt-uny.png",
      skills: ["Academic Security", "Incident Response", "Security Awareness", "Policy Development"],
      category: 'csirt'
    },
    {
      id: 10,
      title: "CSIRT Kulon Progo",
      issuer: "Pemerintah Kulon Progo",
      date: "2024",
      pdfUrl: "/certifications/csirt-kulon-progo.pdf",
      imageUrl: "/certifications/images/csirt-kulon-progo.png",
      skills: ["Government Security", "Incident Response", "Cyber Defense", "Security Operations"],
      category: 'csirt'
    },
    {
      id: 11,
      title: "CSIRT Banyuwangi",
      issuer: "Pemerintah Banyuwangi",
      date: "2024",
      pdfUrl: "/certifications/csirt-banyuwangi.pdf",
      imageUrl: "/certifications/images/csirt-banyuwangi.png",
      skills: ["Regional Security", "Incident Management", "Threat Response", "Security Coordination"],
      category: 'csirt'
    },
    {
      id: 12,
      title: "CSIRT Cimahi",
      issuer: "Pemerintah Kota Cimahi",
      date: "2024",
      pdfUrl: "/certifications/csirt-cimahi.pdf",
      imageUrl: "/certifications/images/csirt-cimahi.png",
      skills: ["Municipal Security", "Incident Response", "Security Monitoring", "Cyber Resilience"],
      category: 'csirt'
    },
    {
      id: 13,
      title: "CSIRT Magelang",
      issuer: "Pemerintah Magelang",
      date: "2024",
      pdfUrl: "/certifications/csirt-magelang.pdf",
      imageUrl: "/certifications/images/csirt-magelang.png",
      skills: ["Government Cybersecurity", "Incident Handling", "Security Assessment", "Risk Mitigation"],
      category: 'csirt'
    },
    {
      id: 14,
      title: "CSIRT Wonosobo",
      issuer: "Pemerintah Wonosobo",
      date: "2024",
      pdfUrl: "/certifications/csirt-wonosobo.pdf",
      imageUrl: "/certifications/images/csirt-wonosobo.png",
      skills: ["Local Government Security", "Incident Response", "Security Operations", "Threat Management"],
      category: 'csirt'
    },
    {
      id: 15,
      title: "CSIRT Bantaeng",
      issuer: "Pemerintah Bantaeng",
      date: "2024",
      pdfUrl: "/certifications/csirt-bantaeng.pdf",
      imageUrl: "/certifications/images/csirt-bantaeng.png",
      skills: ["Regional Security", "Incident Response", "Security Collaboration", "Cyber Defense"],
      category: 'csirt'
    }
  ];

  const openModal = (cert: Certification) => {
    setSelectedCert(cert);
    setZoom(1);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'unset';
  };

  const getCategoryColor = (category: string) => {
    return category === 'security' ? 'from-red-400 to-orange-500' : 'from-blue-400 to-cyan-500';
  };

  const getCategoryBadge = (category: string) => {
    return category === 'security' 
      ? { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-700 dark:text-red-300', label: 'Security' }
      : { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-300', label: 'CSIRT' };
  };

  const securityCerts = certifications.filter(c => c.category === 'security');
  const csirtCerts = certifications.filter(c => c.category === 'csirt');

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <motion.h2 className="text-4xl font-bold mb-4">
            <AuroraText size="4xl" speed={6} colors={['#f59e0b', '#eab308', '#84cc16', '#22c55e', '#f59e0b']}>
              Certifications
            </AuroraText>
          </motion.h2>
          <motion.div className="w-24 h-1 bg-amber-500 mx-auto mb-8" initial={{ width: 0 }} animate={inView ? { width: 96 } : {}} transition={{ duration: 1, delay: 0.3 }} />
          <motion.p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications in cybersecurity, penetration testing, and incident response
          </motion.p>
        </motion.div>

        <div ref={ref} className="mb-12">
          <motion.h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
            Security & Penetration Testing
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityCerts.map((cert, index) => (
              <CertCard key={cert.id} cert={cert} index={index} onView={openModal} getCategoryColor={getCategoryColor} getCategoryBadge={getCategoryBadge} />
            ))}
          </div>
        </div>

        <div>
          <motion.h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
            CSIRT (Computer Security Incident Response Team)
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {csirtCerts.map((cert, index) => (
              <CertCard key={cert.id} cert={cert} index={index} onView={openModal} getCategoryColor={getCategoryColor} getCategoryBadge={getCategoryBadge} />
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-5xl max-h-[95vh] overflow-hidden shadow-2xl flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${getCategoryColor(selectedCert.category)} p-3 flex items-center justify-between`}>
                <div className="flex items-center gap-3 flex-1 min-w-0 pr-4">
                  <Award className="w-6 h-6 text-white flex-shrink-0" />
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-white truncate">{selectedCert.title}</h3>
                    <p className="text-white/80 text-xs">{selectedCert.issuer} • {selectedCert.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                  <button onClick={() => setZoom(z => Math.max(0.5, z - 0.25))} className="p-1.5 sm:p-2 bg-white/20 hover:bg-white/30 rounded-full text-white" title="Zoom Out">
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-white text-xs min-w-[40px] text-center">{Math.round(zoom * 100)}%</span>
                  <button onClick={() => setZoom(z => Math.min(3, z + 0.25))} className="p-1.5 sm:p-2 bg-white/20 hover:bg-white/30 rounded-full text-white" title="Zoom In">
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <a href={selectedCert.pdfUrl} download className="p-1.5 sm:p-2 bg-white/20 hover:bg-white/30 rounded-full text-white" title="Download PDF">
                    <Download className="w-4 h-4" />
                  </a>
                  <button onClick={closeModal} className="p-1.5 sm:p-2 bg-white/20 hover:bg-white/30 rounded-full text-white">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Image Viewer */}
              <div className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.title}
                  className="max-w-full h-auto shadow-lg rounded transition-transform duration-200"
                  style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

interface CertCardProps {
  cert: Certification;
  index: number;
  onView: (cert: Certification) => void;
  getCategoryColor: (category: string) => string;
  getCategoryBadge: (category: string) => { bg: string; text: string; label: string };
}

const CertCard = ({ cert, index, onView, getCategoryColor, getCategoryBadge }: CertCardProps) => {
  const badge = getCategoryBadge(cert.category);
  
  return (
    <AnimatedCard delay={index * 0.1} direction="up" hover={true} scale={true} glow={true} className="cursor-pointer">
      <motion.div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 h-full" onClick={() => onView(cert)} whileHover={{ y: -5 }}>
        <div className="flex items-start gap-4">
          <motion.div className={`bg-gradient-to-br ${getCategoryColor(cert.category)} p-3 rounded-xl shadow-lg flex-shrink-0`} whileHover={{ scale: 1.1, rotate: 5 }}>
            <Award className="w-8 h-8 text-white" />
          </motion.div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2">{cert.title}</h3>
              <span className={`${badge.bg} ${badge.text} text-xs px-2 py-1 rounded-full flex-shrink-0`}>{badge.label}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
              <Building className="w-4 h-4 mr-1 flex-shrink-0" />
              <span className="truncate">{cert.issuer}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm mb-3">
              <Calendar className="w-4 h-4 mr-1" />
              {cert.date}
            </div>
            <div className="flex flex-wrap gap-2">
              {cert.skills.slice(0, 2).map((skill, idx) => (
                <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">{skill}</span>
              ))}
              {cert.skills.length > 2 && (
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 text-xs rounded-full">+{cert.skills.length - 2}</span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button className="text-amber-600 dark:text-amber-400 text-sm font-medium flex items-center hover:underline">
            <FileText className="w-4 h-4 mr-1" />
            View Certificate
          </button>
        </div>
      </motion.div>
    </AnimatedCard>
  );
};

export default Certifications;

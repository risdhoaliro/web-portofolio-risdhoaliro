import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, Calendar, Building, FileText, Download, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { AnimatedCard, AuroraText } from '../lightswind';
import { useInView } from 'react-intersection-observer';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  pdfUrl: string;
  description: string;
  skills: string[];
  category: 'security' | 'csirt' | 'general';
}

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const certifications: Certification[] = [
    {
      id: 1,
      title: "Cybersecurity Career Starter Certification (CCSC)",
      issuer: "Cybersecurity Institute",
      date: "2024",
      pdfUrl: "/certifications/Cybersecurity Career Starter Certification (CCSC).pdf",
      description: "Comprehensive certification covering cybersecurity fundamentals, threat analysis, and security best practices for career starters.",
      skills: ["Cybersecurity Fundamentals", "Threat Analysis", "Security Best Practices", "Risk Management"],
      category: 'security'
    },
    {
      id: 2,
      title: "Certified Phishing Prevention Specialist",
      issuer: "Security Training Institute",
      date: "2024",
      pdfUrl: "/certifications/Certified Phishing Prevention Specialist.pdf",
      description: "Specialized certification in identifying, preventing, and responding to phishing attacks and social engineering threats.",
      skills: ["Phishing Detection", "Social Engineering", "Email Security", "User Awareness"],
      category: 'security'
    },
    {
      id: 3,
      title: "ATM Penetration Testing Certificate",
      issuer: "Security Academy",
      date: "2024",
      pdfUrl: "/certifications/atm_penetration_certificate.pdf",
      description: "Advanced certification in ATM security testing, vulnerability assessment, and penetration testing methodologies.",
      skills: ["ATM Security", "Penetration Testing", "Vulnerability Assessment", "Hardware Security"],
      category: 'security'
    },
    {
      id: 4,
      title: "Security Code Certificate",
      issuer: "Code Security Institute",
      date: "2024",
      pdfUrl: "/certifications/security_code_certificate.pdf",
      description: "Certification in secure coding practices, code review, and application security testing.",
      skills: ["Secure Coding", "Code Review", "SAST/DAST", "Application Security"],
      category: 'security'
    },
    {
      id: 5,
      title: "Aviatrix Certified Engineer – Multicloud Network Associate",
      issuer: "Aviatrix",
      date: "2024",
      pdfUrl: "/certifications/Aviatrix Certified Engineer – Multicloud Network Associate certification.pdf",
      description: "Professional certification in multicloud networking, covering cloud architecture, network security, and cloud connectivity across AWS, Azure, and GCP.",
      skills: ["Multicloud Networking", "Cloud Security", "AWS/Azure/GCP", "Network Architecture"],
      category: 'security'
    },
    {
      id: 6,
      title: "Certified Web Forensic Expert (CWFE)",
      issuer: "Digital Forensics Institute",
      date: "2024",
      pdfUrl: "/certifications/ertified Web Forensic Expert (CWFE).pdf",
      description: "Expert certification in web forensics, covering digital evidence collection, web application analysis, and forensic investigation techniques.",
      skills: ["Web Forensics", "Digital Evidence", "Forensic Analysis", "Investigation Techniques"],
      category: 'security'
    },
    {
      id: 7,
      title: "CSIRT Provinsi Yogyakarta",
      issuer: "CSIRT Prov. Yogyakarta",
      date: "2024",
      pdfUrl: "/certifications/CSIRT Prov Yogyakarta.pdf",
      description: "Computer Security Incident Response Team training and certification from Yogyakarta Province.",
      skills: ["Incident Response", "Security Monitoring", "Threat Intelligence", "CSIRT Operations"],
      category: 'csirt'
    },
    {
      id: 8,
      title: "CSIRT Universitas Airlangga",
      issuer: "Universitas Airlangga",
      date: "2024",
      pdfUrl: "/certifications/CSIRT Universittas Airlangga.pdf",
      description: "CSIRT certification from Airlangga University covering incident handling and response procedures.",
      skills: ["Incident Handling", "Digital Forensics", "Malware Analysis", "Network Security"],
      category: 'csirt'
    },
    {
      id: 9,
      title: "CSIRT Universitas Negeri Yogyakarta",
      issuer: "Universitas Negeri Yogyakarta",
      date: "2024",
      pdfUrl: "/certifications/CSIRT Universitas Negeri Yogyakarta.pdf",
      description: "CSIRT certification from Yogyakarta State University focusing on academic institution security.",
      skills: ["Academic Security", "Incident Response", "Security Awareness", "Policy Development"],
      category: 'csirt'
    },
    {
      id: 10,
      title: "CSIRT Kulon Progo",
      issuer: "Pemerintah Kulon Progo",
      date: "2024",
      pdfUrl: "/certifications/CSIRT Kulon Progo.pdf",
      description: "Regional CSIRT certification from Kulon Progo government for cybersecurity incident response.",
      skills: ["Government Security", "Incident Response", "Cyber Defense", "Security Operations"],
      category: 'csirt'
    },
    {
      id: 11,
      title: "CSIRT Banyuwangi",
      issuer: "Pemerintah Banyuwangi",
      date: "2024",
      pdfUrl: "/certifications/CSIRT Banyuwangi.pdf",
      description: "Regional CSIRT certification from Banyuwangi government for cybersecurity operations.",
      skills: ["Regional Security", "Incident Management", "Threat Response", "Security Coordination"],
      category: 'csirt'
    },
    {
      id: 12,
      title: "CSIRT Cimahi",
      issuer: "Pemerintah Kota Cimahi",
      date: "2024",
      pdfUrl: "/certifications/CSIRT Cimahi.pdf",
      description: "Municipal CSIRT certification from Cimahi City for local government cybersecurity.",
      skills: ["Municipal Security", "Incident Response", "Security Monitoring", "Cyber Resilience"],
      category: 'csirt'
    },
    {
      id: 13,
      title: "CSIRT Magelang",
      issuer: "Pemerintah Magelang",
      date: "2024",
      pdfUrl: "/certifications/CSIRT Magelang.pdf",
      description: "Regional CSIRT certification from Magelang for government cybersecurity operations.",
      skills: ["Government Cybersecurity", "Incident Handling", "Security Assessment", "Risk Mitigation"],
      category: 'csirt'
    },
    {
      id: 14,
      title: "CSIRT Wonosobo",
      issuer: "Pemerintah Wonosobo",
      date: "2024",
      pdfUrl: "/certifications/CSIRT Wonosobo.pdf",
      description: "Regional CSIRT certification from Wonosobo for local cybersecurity incident response.",
      skills: ["Local Government Security", "Incident Response", "Security Operations", "Threat Management"],
      category: 'csirt'
    },
    {
      id: 15,
      title: "CSIRT Bantaeng",
      issuer: "Pemerintah Bantaeng",
      date: "2024",
      pdfUrl: "/certifications/Certificate of Appreciation from CSIRT Bantaeng.pdf",
      description: "Certificate of Appreciation from CSIRT Bantaeng for contribution to regional cybersecurity.",
      skills: ["Regional Security", "Incident Response", "Security Collaboration", "Cyber Defense"],
      category: 'csirt'
    }
  ];

  const openModal = (cert: Certification) => {
    setSelectedCert(cert);
    setPageNumber(1);
    setScale(1);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    setNumPages(0);
    document.body.style.overflow = 'unset';
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'security':
        return 'from-red-400 to-orange-500';
      case 'csirt':
        return 'from-blue-400 to-cyan-500';
      default:
        return 'from-amber-400 to-orange-500';
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'security':
        return { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-700 dark:text-red-300', label: 'Security' };
      case 'csirt':
        return { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-300', label: 'CSIRT' };
      default:
        return { bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-700 dark:text-amber-300', label: 'General' };
    }
  };

  const securityCerts = certifications.filter(c => c.category === 'security');
  const csirtCerts = certifications.filter(c => c.category === 'csirt');

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
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

      {/* PDF Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl flex flex-col"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`relative bg-gradient-to-br ${getCategoryColor(selectedCert.category)} p-4`}>
                <button onClick={closeModal} className="absolute top-3 right-3 text-white/80 hover:text-white bg-black/20 rounded-full p-2">
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3 pr-12">
                  <Award className="w-8 h-8 text-white" />
                  <div>
                    <h3 className="text-lg font-bold text-white line-clamp-1">{selectedCert.title}</h3>
                    <p className="text-white/80 text-sm">{selectedCert.issuer} • {selectedCert.date}</p>
                  </div>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-auto bg-gray-200 dark:bg-gray-900 flex justify-center p-4">
                <Document
                  file={selectedCert.pdfUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={
                    <div className="flex items-center justify-center h-96">
                      <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-500 border-t-transparent"></div>
                    </div>
                  }
                  error={
                    <div className="flex flex-col items-center justify-center h-96 text-center p-8">
                      <FileText className="w-16 h-16 text-gray-400 mb-4" />
                      <p className="text-gray-600 dark:text-gray-400 mb-4">Unable to load PDF preview</p>
                      <a href={selectedCert.pdfUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-amber-500 text-white rounded-lg">
                        Open PDF Directly
                      </a>
                    </div>
                  }
                >
                  <Page pageNumber={pageNumber} scale={scale} renderTextLayer={false} renderAnnotationLayer={false} />
                </Document>
              </div>

              {/* Controls */}
              <div className="p-3 border-t border-gray-200 dark:border-gray-700 flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-gray-800">
                <div className="flex items-center gap-2">
                  <button onClick={() => setScale(s => Math.max(0.5, s - 0.25))} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg" title="Zoom Out">
                    <ZoomOut className="w-5 h-5" />
                  </button>
                  <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[60px] text-center">{Math.round(scale * 100)}%</span>
                  <button onClick={() => setScale(s => Math.min(2, s + 0.25))} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg" title="Zoom In">
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>

                {numPages > 1 && (
                  <div className="flex items-center gap-2">
                    <button onClick={() => setPageNumber(p => Math.max(1, p - 1))} disabled={pageNumber <= 1} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg disabled:opacity-50">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{pageNumber} / {numPages}</span>
                    <button onClick={() => setPageNumber(p => Math.min(numPages, p + 1))} disabled={pageNumber >= numPages} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg disabled:opacity-50">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}

                <div className="flex gap-2">
                  <a href={selectedCert.pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg text-sm">
                    <ExternalLink className="w-4 h-4 mr-1" /> Open
                  </a>
                  <a href={selectedCert.pdfUrl} download className="inline-flex items-center px-3 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm">
                    <Download className="w-4 h-4 mr-1" /> Download
                  </a>
                </div>
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

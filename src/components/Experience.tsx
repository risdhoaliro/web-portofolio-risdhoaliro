import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Mid QA Engineer",
      company: "Synapsis",
      period: "Mar 2025 - Present",
      location: "Yogyakarta, Indonesia",
      achievements: [
        "Enhanced positive and negative test case coverage for comprehensive product validation",
        "Improved UI automation testing using Playwright, increasing test efficiency and reliability",
        "Developed and optimized API automation scripts with Playwright for backend validation",
        "Provided performance testing consultation using K6 with Grafana monitoring",
        "Upgraded CI pipelines for Nearon and Driver Monitoring System products",
        "Increased automation test success rate from 50% to 99.5%–100%",
        "Performed Functional, Smoke, Sanity, Compatibility, and Exploratory testing"
      ],
      color: "bg-blue-500"
    },
    {
      title: "SDET Lead",
      company: "PT Altech Omega Andalan",
      period: "Oct 2023 - Apr 2025",
      location: "Jakarta, Indonesia",
      clients: "Sweetescape, Wagginton & YAY Group",
      achievements: [
        "Created and maintained automation for Website, Android, iOS using Robot Framework",
        "Developed and maintained API automation using Robot Framework",
        "Conducted performance testing using K6 and security testing using Burpsuite",
        "Performed manual API testing using Postman and Swagger",
        "Executed SQL queries for database modification and testing",
        "Collaborated with Product Management, Product Design, and Developer teams",
        "Participated in all development stages: Sprint planning, daily stand-ups, reviews",
        "Created and maintained comprehensive test documentation"
      ],
      color: "bg-green-500"
    },
    {
      title: "Software Test Engineer",
      company: "Adira Multifinance",
      period: "May 2023 - Nov 2023",
      location: "Jakarta, Indonesia",
      achievements: [
        "Executed SQL queries for database modification and testing",
        "Implemented automation solutions using UIPath",
        "Conducted comprehensive API testing using Postman",
        "Managed test scenarios and bug monitoring through JIRA",
        "Collaborated with cross-functional teams in Agile environment",
        "Participated in Sprint planning, daily stand-ups, and retrospectives"
      ],
      color: "bg-purple-500"
    },
    {
      title: "QA Automation Engineer",
      company: "BRINS",
      period: "Mar 2023 - May 2023",
      location: "Jakarta, Indonesia",
      project: "Brins Mobile",
      achievements: [
        "Built comprehensive test cases and test scenarios",
        "Confirmed application functionality with business requirements",
        "Implemented automation testing using Katalon Studio",
        "Conducted API testing using Postman",
        "Performed security testing using Burpsuite",
        "Participated in Sprint Planning, UAT, and Sprint Review meetings"
      ],
      color: "bg-indigo-500"
    },
    {
      title: "QA Engineer",
      company: "Astra Credit Companies",
      period: "Mar 2022 - Mar 2023",
      location: "Jakarta, Indonesia",
      project: "Moxa By Astra Financial",
      achievements: [
        "Developed test plans, case design, review, and execution",
        "Performed comprehensive functional testing for applications",
        "Maintained testing environment and existing testing tools",
        "Conducted API testing with Postman",
        "Participated in code review processes",
        "Managed UAT & SIT testing phases"
      ],
      color: "bg-orange-500"
    },
    {
      title: "Business Analyst & Quality Assurance",
      company: "Mandala Multifinance",
      period: "Sep 2022 - Feb 2023",
      location: "Jakarta, Indonesia",
      project: "Mantis By Mandala Finance",
      achievements: [
        "Developed comprehensive testing plans for applications",
        "Documented support procedures for developed applications",
        "Created testing and implementation process documentation",
        "Confirmed application functionality with business requirements",
        "Conducted API testing with Postman",
        "Participated in UAT, SIT & Stand Up meetings"
      ],
      color: "bg-red-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-down">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 animate-expand"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up-delay-1">
            A comprehensive overview of my professional journey in quality assurance and test automation
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 hidden md:block animate-draw-line"></div>

          <div className="space-y-12 animate-stagger">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative animate-slide-up-delay-${index + 1}`}>
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 ${exp.color} rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block animate-pulse-dot transform hover:scale-150 transition-transform duration-300`}></div>
                
                <div className="md:ml-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 hover:scale-[1.02] animate-card-hover">
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div className="animate-slide-right">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 transition-colors duration-300">{exp.title}</h3>
                        <h4 className="text-xl font-semibold text-blue-600 mb-2 hover:text-blue-800 transition-colors duration-300">{exp.company}</h4>
                        {exp.clients && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 animate-fade-in">Clients: {exp.clients}</p>
                        )}
                        {exp.project && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 animate-fade-in">Project: {exp.project}</p>
                        )}
                      </div>
                      <div className="flex flex-col lg:items-end text-sm text-gray-500 dark:text-gray-400 animate-slide-left">
                        <div className="flex items-center mb-1">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 animate-stagger-children">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className={`flex items-start animate-slide-up-delay-${achIndex + 1} hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-all duration-300`}>
                          <ChevronRight size={16} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0 transform hover:translate-x-1 transition-transform duration-300" />
                          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed hover:text-gray-900 dark:hover:text-white transition-colors duration-300">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
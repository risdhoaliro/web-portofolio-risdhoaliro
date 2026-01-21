import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Penetration Tester L2",
      company: "Bank Central Asia",
      period: "Oct 2025 - Present",
      location: "Jakarta, Indonesia",
      project: "Nearon & Driver Monitoring System",
      achievements: [
        "Assess network and configuration (servers, WAF, proxies, segmentation)",
        "Test web, mobile, and APIs against OWASP/MASVS/API Top 10",
        "Validate severity (CVSS), document evidence, and deliver clear reports",
        "Plan scope and Rules of Engagement, execute tests, and perform re-tests",
        "Collaborate with Dev/QA/SOC/Risk to triage and mitigate findings",
        "Uphold data confidentiality and comply with OJK/BI, NIST 800-115, ISO 27001"
      ],
      color: "bg-blue-600"
    },
    {
      title: "Solution QA Engineer",
      company: "PT Synapsis Sinergi Digital",
      period: "Mar 2025 - Present",
      location: "Jakarta, Indonesia",
      project: "Nearon & Driver Monitoring System",
      achievements: [
        "Enhanced positive and negative test case coverage for comprehensive product validation",
        "Improved UI automation testing using Playwright, increasing test efficiency and reliability",
        "Developed and optimized API automation scripts with Playwright for backend validation",
        "Provided performance testing consultation using K6 with Grafana or Portainer monitoring",
        "Conducted manual testing on databases and APIs to identify issues early",
        "Upgraded CI pipelines for Nearon and Driver Monitoring System products",
        "Increased automation test success rate from 50% to 99.5%–100%",
        "Performed Functional, Smoke, Sanity, Compatibility, and Exploratory testing"
      ],
      color: "bg-blue-500"
    },
    {
      title: "Lead Software Development Engineer in Test",
      company: "PT Altech Omega Andalan",
      period: "Nov 2023 - Apr 2025",
      location: "Jakarta, Indonesia",
      project: "Sweetescape & Wagginton",
      achievements: [
        "Create and maintain UI automation using Robot Framework",
        "Conforming application functionality with business requirements",
        "Create and maintain API Testing automation using Robot Framework",
        "Monitoring Performance Test using K6",
        "Manual API Testing using Postman",
        "SQL query to modify database and testing",
        "Penetration Testing using Burpsuite",
        "Collaborate with Product Management, Product Design, and Developer teams",
        "Participated in all development stages: Sprint planning, daily stand-ups, reviews",
        "Create and maintain test documentation, including test cases, scripts, and reports"
      ],
      color: "bg-green-500"
    },
    {
      title: "Software Test Engineer",
      company: "PT Adira Dinamika Multi Finance",
      period: "May 2023 - Nov 2023",
      location: "Jakarta, Indonesia",
      project: "Insurance & Adira Customer Information",
      achievements: [
        "SQL query to modify database and testing",
        "Automation using UIPath",
        "Handled on API Testing using Postman",
        "Test scenario and bug monitoring JIRA",
        "Collaborate with Product Management, Product Design, and Developer teams",
        "Involved in all stages of development process - Sprint planning, daily stand-up, sprint review, and sprint retrospective"
      ],
      color: "bg-purple-500"
    },
    {
      title: "QA Automation",
      company: "PT BRI Insurance",
      period: "Dec 2022 - May 2023",
      location: "Jakarta, Indonesia",
      project: "PRISAI (Program Integration System Audit Intern) & TSI (Technology and Information System)",
      achievements: [
        "Build Test Case, Test Scenario",
        "Conforming application functionality with business",
        "Automation using Katalon Studio",
        "API Testing using Postman",
        "Checking for security using tools Burpsuite",
        "Sprint Planning, UAT and Sprint Review"
      ],
      color: "bg-indigo-500"
    },
    {
      title: "QA Analyst & Business Analyst",
      company: "PT Mandala Multifinance",
      period: "Sep 2022 - Dec 2022",
      location: "Jakarta, Indonesia",
      project: "Mantis By Mandala",
      achievements: [
        "Develop plan for testing applications",
        "Documenting support procedures for developed applications",
        "Creating documents for testing and implementation process",
        "Conforming application functionality with business requirements",
        "Automation using Selenium Webdriver",
        "API Testing with Postman",
        "UAT, SIT & Stand Up Meeting"
      ],
      color: "bg-orange-500"
    },
    {
      title: "QA Engineer",
      company: "PT Sedaya Multi Investama (Astra Financial)",
      period: "Feb 2021 - Dec 2022",
      location: "Jakarta, Indonesia",
      project: "Moxa By Astra Financial",
      achievements: [
        "Build test plan, case design and review, case execution",
        "Perform functional testing for application",
        "Maintenance of testing environment and existing",
        "Automation using Katalon Studio",
        "API Testing using Postman",
        "Code Review",
        "UAT, SIT & Stand Up Meeting"
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
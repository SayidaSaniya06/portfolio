import React from 'react';

function Experience() {
  const experiences = [
    {
      date: 'May 2025 - Ongoing',
      title: 'Project Maintenance & Feature Enhancement',
      company: 'Amopa Solutions',
      description:
        'Worked on the PremMon, Products site and AutoCon Mobile App Project focusing on bug fixing, feature enhancements, and adding new features. This IoT project involved extensive work on the software components. Application and Server maintenance.',
    },
    {
      date: 'Mar 2025 – Apr 2025',
      title: 'AutoCon Mobile Application',
      company: 'Amopa Solutions',
      description:
        'Led the development of an innovative IoT mobile application, highlighting advanced front-end development skills and user-centered design. Implemented responsive styling and dynamic scripting, seamlessly integrating RESTful APIs to deliver a high-performance user experience.',
    },
    {
      date: 'Nov 2024 – Feb 2025',
      title: 'PremMon Web Application',
      company: 'Amopa Solutions',
      description:
        'Developed dynamic content styling with CSS animations to improve user engagement. Integrated web-sockets for real-time data fetching, reducing latency by 30%. Created a responsive UI, ensuring seamless compatibility across all devices. Optimized API calls, enhancing system performance and reducing load times.',
    },
    {
      date: 'Jul 2024 – Oct 2024',
      title: 'IoT Monitor Web & Mobile Application',
      company: 'Amopa Solutions',
      description:
        'Designed and implemented a live power supply monitoring system, automating SMS alerts for power outages. Implemented Web-socket-based live updates, reducing downtime by 15%. Applied modern scripting and UI enhancements to improve user experience.',
    },
    {
      date: 'Apr 2024 – Jun 2024',
      title: 'Geotrack Web Application',
      company: 'Amopa Solutions',
      description:
        'Configured and maintained an open-source tracking system. Diagnosed and resolved software bugs, enhancing stability and efficiency. Customized cloud-based application settings, improving operational workflows. Provided technical training and production support to on-site technicians.',
    }
  ];

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Experience</h1>
        <p className="text-gray-400 mb-10">
          Software Developer with 1+ years of experience in full-stack web &
          mobile development, specializing in React.js, React Native, and IoT applications.
        </p>

        <div className="relative pl-8 border-l-2 border-l-[#4a4a4a]">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline Dot */}
              <div className="absolute left-[-39px] top-[5px] w-3 h-3 bg-yellow-400 rounded-full"></div>

              <p className="text-[#ccc] font-semibold mb-2">{exp.date}</p>
              <div className="bg-[#2b2b2b] p-4 rounded border border-[#444] text-white">
                <strong>{exp.title}</strong><br />
                {exp.company}<br />
                {exp.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

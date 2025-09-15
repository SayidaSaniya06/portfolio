import React, { useState } from 'react';

function Projects() {
  const projects = [
    {
      number: '01',
      title: 'Movie Land',
      desc: 'Movie Land is a dynamic React JS-powered platform that effortlessly guides users to discover the latest trending movies.',
      tech: 'HTML, CSS, JavaScript, React JS, Third party API',
      img: '/movie-land-img.png',
      alt: 'movie-land project'
    },
    {
      number: '02',
      title: 'E-commerce-site',
      desc: 'Elevate your shopping experience with Cara. Immerse yourself in a visually stunning front-end application crafted with HTML, CSS, JavaScript.',
      tech: 'HTML, SCSS, JavaScript, Bootstrap',
      img: '/e-commerce-img.png',
      alt: 'e-commerce project'
    },
    {
      number: '03',
      title: 'Products',
      desc: `This is an e-commerce platform designed to showcase the company's products. Customers can view product details and make secure payments using Razorpay.`,
      tech: 'HTML, CSS, JavaScript, Bootstrap, Node js, Express js, MongoDB, Razorpay API',
      img: '/products-amopa.png',
      alt: 'products app project'
    },
    {
      number: '04',
      title: 'PremMon',
      desc: 'Developed dynamic content styling with CSS animations to improve user engagement. Integrated web-sockets for real-time data fetching. Created a responsive UI, ensuring seamless compatibility across all devices.',
      tech: 'HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, Bitbucket, RESTful APIs, Authentication',
      img: '/Premmon-img.png',
      alt: 'PremMon app project'
    },
    {
      number: '05',
      title: 'AutoCon',
      desc: 'Led the development of an innovative IoT mobile application, highlighting advanced front-end development skills and user-centered design.',
      tech: 'HTML, CSS, JavaScript, React Native, Bitbucket, RESTful APIs',
      img: '/AutoCon-manual-mobile.jpeg',
      alt: 'AutoCon mobile app project'
    },
    {
      number: '06',
      title: 'Power Supply Monitor',
      desc: 'Designed and implemented a live power supply monitoring system, automating SMS alerts for power outages. Implemented WebSocket-based live updates.',
      tech: 'React Native, Node.js, Git, GitLab, Express.js, MongoDB',
      img: '/Power-supply-monitor-mobile.jpeg',
      alt: 'Power Supply Monitor mobile app project'
    },
    {
      number: '07',
      title: 'Portfolio',
      desc: 'Developed a responsive and visually engaging portfolio using React JS to showcase my technical skills, projects, and professional experience.',
      tech: 'HTML, CSS, Javascript, React JS, Tailwind CSS, Git, GitHub',
      img: '/portfolio.png',
      alt: 'Saniya Portfolio'
    },
    {
      number: '08',
      title: 'Portfolio',
      desc: 'Developed a responsive and visually engaging portfolio to showcase my technical skills, projects, and professional experience.',
      tech: 'HTML, SCSS, JavaScript, Bootstrap, Git, GitHub, CSS Animation',
      img: '/second-portfolio.png',
      alt: 'Saniya Portfolio'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Determine image object-fit behavior
  const getImageStyle = (title) => {
    if (title === 'AutoCon' || title === 'Power Supply Monitor') {
      return {
        objectFit: 'contain',
        backgroundColor: '#1e1e1e', // Optional: add a bg color for padding
      };
    } else {
      return {
        objectFit: 'cover',
        backgroundColor: 'transparent',
      };
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center pb-10 md:pt-20 pt-16 px-4 sm:px-6 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Project Text */}
        <div className="text-white max-w-lg text-center lg:text-left">
          <h1 className="text-yellow-400 text-3xl font-bold mb-4">
            {currentProject.number}. {currentProject.title}
          </h1>
          <p className="mb-4 text-lg">{currentProject.desc}</p>
          <p className='text-lg'>
            <span className="text-yellow-400 text-lg">Technologies Used:</span>{' '}
            {currentProject.tech}
          </p>
        </div>

        {/* Project Image */}
        <div
          className="w-full max-w-xs sm:max-w-sm md:max-w-md h-64 overflow-hidden rounded-l" // Fix width of the image container
        >
          <img
            src={currentProject.img}
            alt={currentProject.alt}
            style={getImageStyle(currentProject.title)} // Apply the dynamic style
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-10 space-x-6">
        <button
          onClick={handlePrev}
          className="text-black bg-yellow-400 px-6 py-2 rounded-lg text-2xl border-2 border-yellow-400 hover:bg-transparent hover:text-white transition"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="text-black bg-yellow-400 px-6 py-2 rounded-lg text-2xl border-2 border-yellow-400 hover:bg-transparent hover:text-white transition"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Projects;

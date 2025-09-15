import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Contact() {
  return (
    <div className="flex flex-col h-svh justify-center items-center mt-0 mb-0 bg-[url('/back-img.avif')] md:bg-black bg-cover bg-center overflow-hidden">
      <h1 className="text-white text-3xl font-bold">Let's Connect</h1>
      <p className="text-gray-400 text-2xl font-thin text-center">Open for remote and hybrid opportunities.</p>

      <div className="flex mt-3 flex-wrap justify-center gap-3">
        <a
          href="https://www.linkedin.com/in/sayida-saniya/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-600 hover:bg-slate-500 px-4 py-2 rounded-lg text-white text-lg"
        >
          <FaLinkedin /> LinkedIn
        </a>

        <a
          href="https://github.com/SayidaSaniya06/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-600 hover:bg-slate-500 px-4 py-2 rounded-lg text-white text-lg"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="mailto:sayidasaniya99@gmail.com"
          className="flex items-center gap-2 bg-gray-600 hover:bg-slate-500 px-4 py-2 rounded-lg text-white text-lg"
        >
          <MdEmail /> Email
        </a>

        <a
          href="https://www.instagram.com/sayida_saniya_06/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-600 hover:bg-slate-500 px-4 py-2 rounded-lg text-white text-lg"
        >
          <FaInstagram /> Instagram
        </a>
      </div>
    </div>
  );
}

export default Contact;

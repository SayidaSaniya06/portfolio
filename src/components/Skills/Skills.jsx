import React from 'react'

function Skills() {
  const logoClass = "w-24 h-24 md:w-32 md:h-32 object-contain mx-auto mb-2";
  return (
    <div className='h-full mt-0 mb-0 bg-black pb-7'>
      <div className='pt-20 flex flex-col items-center'>
      <h1 className='text-yellow-400 text-center text-2xl font-bold'>What I do</h1>
      <p className='text-center text-gray-500 mb-5'>I specialize in both frontend and backend technologies, delivering full-stack development solutions.</p>

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-4'>
      <div className='flex flex-col items-center justify-center transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer rounded-lg shadow-2xl bg-zinc-950 p-4 html-logo'>
      <img className={logoClass} src="/html-logo.png" alt="profile" />
      <p className='text-center text-white'>HTML <sub className='text-xl'>5</sub></p>
      </div>

      <div className='flex flex-col items-center justify-center transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer rounded-lg shadow-2xl bg-zinc-950 p-4 css-logo'>
      <img className={logoClass} src="/css-logo.png" alt="profile" />
      <p className='text-center text-white'>CSS <sub className='text-xl'>3</sub></p>
      </div>

      <div className='flex flex-col items-center justify-center transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer rounded-lg shadow-2xl bg-zinc-950 p-4 js-logo'>
      <img className={logoClass} src="/js-logo.png" alt="profile" />
      <p className='text-center text-white'>JAVASCRIPT</p>
      </div>

      <div className='flex flex-col items-center justify-center transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer rounded-lg shadow-2xl bg-zinc-950 p-4 react-logo'>
      <img className={logoClass} src="/react-logo.png" alt="profile" />
      <p className='text-center text-white'>REACT JS</p>
      </div>

      <div className='flex flex-col items-center justify-center transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer rounded-lg shadow-2xl bg-zinc-950 p-4 tailwind-logo'>
      <img className={logoClass} src="/tailwind-logo.png" alt="profile" />
      <p className='text-center text-white'>TAILWIND</p>
      </div>

      <div className='flex flex-col items-center justify-center transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer rounded-lg shadow-2xl bg-zinc-950 p-4 bootstrap-logo'>
      <img className={logoClass} src="/bootstrap-logo.png" alt="profile" />
      <p className='text-center text-white'>BOOTSTRAP</p>
      </div>

      <div className='flex flex-col items-center justify-center cursor-pointer  transition-transform duration-300 transform hover:-translate-y-2 rounded-lg shadow-2xl bg-zinc-950 p-4 bulma-logo'>
      <img className={logoClass} src="/bulma-logo.png" alt="profile" />
      <p className='text-center text-white'>BULMA</p>
      </div>

      <div className='flex flex-col items-center justify-center transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer rounded-lg shadow-2xl bg-zinc-950 p-4 nodejs-logo'>
      <img className={logoClass} src="/node-logo.png" alt="profile" />
      <p className='text-center text-white'>NODE JS</p>
      </div>

      <div className='flex flex-col items-center justify-center transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer rounded-lg shadow-2xl bg-zinc-950 p-4 express-logo'>
      <img className={logoClass} src="/express-logo.png" alt="profile" />
      <p className='text-center text-white'>EXPRESS JS</p>
      </div>

      <div className='flex flex-col items-center justify-center transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer rounded-lg shadow-2xl bg-zinc-950 p-4 mongo-logo'>
      <img className={logoClass} src="/mongodb-logo.png" alt="profile" />
      <p className='text-center text-white'>MONGODB</p>
      </div>

      <div className='flex flex-col items-center justify-center transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer rounded-lg shadow-2xl bg-zinc-950 p-4 git-logo'>
      <img className={logoClass} src="/git-logo.png" alt="profile" />
      <p className='text-center text-white'>GIT</p>
      </div>

      <div className='flex flex-col items-center justify-center transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer rounded-lg shadow-2xl bg-zinc-950 p-4 github-logo'>
      <img className={logoClass} src="/github-logo.png" alt="profile" />
      <p className='text-center text-white'>GITHUB</p>
      </div>

      <div className='flex flex-col items-center justify-center transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer rounded-lg shadow-2xl bg-zinc-950 p-4 gitlab-logo'>
      <img className={logoClass} src="/gitlab-logo.png" alt="profile" />
      <p className='text-center text-white'>GITLAB</p>
      </div>

      <div className='flex flex-col items-center justify-center transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer rounded-lg shadow-2xl bg-zinc-950 p-4 bitbucket-logo'>
      <img className={logoClass} src="/bitbucket-logo.png" alt="profile" />
      <p className='text-center text-white'>BITBUCKET</p>
      </div>

      <div className='flex flex-col items-center justify-center transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer rounded-lg shadow-2xl bg-zinc-950 p-4 vscode-logo'>
      <img className={logoClass} src="/vscode-logo.png" alt="profile" />
      <p className='text-center text-white'>VSCODE</p>
      </div>

      <div className='flex flex-col items-center justify-center transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer rounded-lg shadow-2xl bg-zinc-950 p-4 postman-logo'>
      <img className={logoClass} src="/postman-logo.png" alt="profile" />
      <p className='text-center text-white'>POSTMAN</p>
      </div>

      <div className='flex flex-col items-center justify-center transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer rounded-lg shadow-2xl bg-zinc-950 p-4 windows-logo'>
      <img className={logoClass} src="/windos-logo.png" alt="profile" />
      <p className='text-center text-white'>WINDOWS</p>
      </div>

      <div className='flex flex-col items-center justify-center transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer rounded-lg shadow-2xl bg-zinc-950 p-4 linux-logo'>
      <img className={logoClass} src="/linux-logo.png" alt="profile" />
      <p className='text-center text-white'>LINUX</p>
      </div>

      </div>
      </div>
    </div>
  )
}

export default Skills

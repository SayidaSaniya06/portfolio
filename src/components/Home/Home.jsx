import { Link } from "react-router-dom"

function Home(){
return(
    <>
    <div className="flex  md:flex-row h-svh justify-center items-center mt-0 mb-0 bg-[url('/back-img.avif')] md:bg-black bg-cover bg-center overflow-hidden">
        <div className="text-wrap mb-0 p-3 flex flex-col items-center">
            <h1 className="md:text-5xl text-4xl text-white text-center font-light mb-4">Hi, I'm <span className="text-yellow-400 font-semibold">Saniya</span></h1>
            <h1 className="font-extralight md:text-4xl text-center mb-4 text-white text-2xl">
            A Passionate Software Developer
            </h1>
            <Link to={'/experience'} className="bg-transparent text-white md:px-5 md:py-3 px-3 py-2 rounded-2xl border-white border-2 transition ease-in-out hover:bg-yellow-400 hover:text-black inline-block hover:border-x-2 hover:bg-wh text-xl">See My Work</Link>
        </div>
    </div>
    </>
)
}
export default Home
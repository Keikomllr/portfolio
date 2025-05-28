import React from 'react'


export const Hero = () => {
  return (
    <>
    <h1 id="about" className='font-mono font-bold text-yellow-600 text-4xl p-7 text-center'>
          ABOUT ME
    </h1>
    
    <section className='grid grid-cols-1 md:grid-cols-2 max-w-[1500px] place-items-center m-10 md:mr-10'>
        <div>
            <img src="/img/keiko.profilephoto2.jpeg" alt="portfolio_pic" className='rounded-full p-5'/>
        </div>

        <div>
            <p className='font-semibold text-6xl font-cursive'>
                Keiko Möller
            </p>
            <p className='font-mono text-yellow-600 text-3xl my-5'>
                Frontend-focused fullstack developer
            </p>

            <div className='text-lg'>    
                <p> <span className='font-bold text-5xl font-cursive text-cyan-700'>Hi!</span> I’m a frontend-focused fullstack developer in training with a strong passion for both art and technology.</p>

                <p>With a background in art and experience as a freelance illustrator, I bring a creative and user-centered approach to design. At the same time, I enjoy solving technical challenges and exploring the logic behind how things work.</p>
                <p>    
                I’m passionate about building intuitive, scalable, and meaningful web experiences—both on the frontend and backend.</p>

                <p>Currently based in Helsingborg, I’m developing my skills in modern web technologies including:
                React, Angular, TypeScript, JavaScript, Node.js, Express.js, HTML, CSS, SQL Server, better-SQLite3, REST API, and npm.</p>

                <p className='my-5'><span className='font-bold'>Phone :</span> +46 767785288</p>
                <p className='my-5'><span className='font-bold'>Email :</span> keicocco.s@gmail.com</p>
                <p className='my-5'><span className='font-bold'>Language :</span> English, Swedish, Japanese</p>
                <a 
                    href="https://www.linkedin.com/in/keiko-möller-2bba7a2bb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    <span className='font-bold'>LinkedIn :</span> https://www.linkedin.com/in/keiko-möller-2bba7a2bb
                </a>
            </div>

            <div className='my-10'>
                <a
                    href="/img/keiko_cv.pdf"
                    download
                    className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-semibold py-3 px-5 rounded-full transition"
                    >
                    Download CV (EN)
                </a>
            </div>    

        </div>    



    </section>
    </>
  )
}

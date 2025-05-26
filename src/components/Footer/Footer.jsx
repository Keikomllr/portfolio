import React from 'react'

export const Footer = () => {
  return (
    <footer id="contact" className='bg-[rgb(38,63,63)] p-5'>

        <div className="text-5xl font-bold text-gray-200 text-center p-5">
            Keiko Möller
        </div>
        <div className='flex flex-row items-center justify-center'>
            <div className='p-2'>
               <a href="mailto:keiko@example.com" aria-label="Send email"><img src="/img/email.png" alt="email" className='w-[90px] hover:scale-110 transition'/></a>
            </div>
            <div className='p-2'>
               <a href="https://www.linkedin.com/in/keiko-m%C3%B6ller-2bba7a2bb/"><img src="/img/linkedin2.png" alt="linkedin" className='w-[90px] hover:scale-110 transition' /></a>
            </div>
            <div className='p-2'>
               <a href="github.com/Keikomllrhttps"><img src="/img/github2.png" alt="github" className='w-[90px] hover:scale-110 transition'/></a>
            </div>
            <div className='p-2'>
               <a href="https://www.instagram.com/keicoccosuzuki/"><img src="/img/instagram.png" alt="instagram" className='w-[85px] hover:scale-110 transition'/></a>
            </div>
            <br />
        </div>
    </footer>
  )
}

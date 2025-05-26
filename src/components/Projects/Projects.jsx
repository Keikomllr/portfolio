import React from 'react'

export const Projects = ({ projects }) => {
  return (
    <>
    <article id="projects" className='p-20'>
        <h1 className='font-mono font-bold text-yellow-600 text-4xl text-center mt-10'>
          PROJECTS
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {projects?.map((project) =>(
                <div key={project.id} className='m-3 shadow-lg p-5 bg-[rgb(38,63,63)] rounded-lg'>
                    <img src={project.img} alt={project.title} className='w-full h-[200px] object-fill rounded-lg' />
                    <p className='text-yellow-600 text-2xl font-bold py-2'>
                        {project.title}
                    </p>
                    <p className='text-lg text-gray-100 font-bold h-[100px]'>
                        {project.details}
                    </p>

                    <div className='flex flex-row justify-end'>
                        <div className='my-10'>
                            {project.demo &&(
                                <a
                                    href={project.demo}              target="_blank"
                                    rel="noopener noreferrer"     
                                    className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-semibold py-3 px-5 rounded-full transition m-2"
                                    >
                                    Demo
                                </a>
                            )}
                        </div>
                        <div className='my-10'>
                            <a
                                href={project.github}           target="_blank"
                                rel="noopener noreferrer"      
                                className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-semibold py-3 px-5 rounded-full transition"
                                >
                                Github
                            </a>
                        </div>
                    </div>
                </div>        
            ))}
        </div>
    </article>

    </>

  )
}
    
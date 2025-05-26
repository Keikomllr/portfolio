import React from 'react'

const Skills = ({ skills }) => {
    return (

        <>
        <section id="skills" className='py-12 px-6'>
            <h1 className='font-mono font-bold text-yellow-600 text-4xl m-7 text-center'>
            SKILLS AND CERTIFICATES
            </h1>
            <div className='text-lg max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 '>
                {skills?.map((skill) => (
                    <div key={skill.id} className="flex items-start space-x-4">
                        <span className="font-bold  mr-7 w-40 text-yellow-600 ">{skill.title}:</span>
                        <span className='font-semibold'>{skill.skillinfo}</span>
                    </div>
                ))}
                
            </div>
        </section>
        </>
    );
  };

export default Skills;
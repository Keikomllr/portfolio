import React, { useState } from 'react';
import Header from './components/Header/Header';
import './index.css'; 
import { Hero } from './components/Hero/Hero';
import  Skills from './components/Skills/Skills';
import { Resume } from './components/Resume/Resume';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';

function App() {
  
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme =() => {
    setDarkMode(!darkMode);
  };

  const skills = [
    { id:1, title:"Certificate", skillinfo:"In Progress: EC Utbildning – Frontend Developer Program"},
    { id:2, title:"Programming Languages", skillinfo:"JavaScript, TypeScript, HTML, CSS, C#"},
    { id:3, title:"Web Technologies", skillinfo:"React.js, Angular, AngularJS, Express.js"},
    { id:4, title:"Databases", skillinfo:"Better-SQL3, SQL Server"},
    { id:5, title:"Tools", skillinfo:"Git, Microsoft Visual Studio Code, Figma, Canva"},
    { id:6, title:"Creative & Design", skillinfo:"Adobe Photoshop, Adobe Illustrator, Adobe InDesign"},
  ];

  const projects = [
    {id:1, title:"Art Keiko Suzuki Möller", details:"My art home page created with React and batabase", img:"/img/keikohome.jpg", demo:"https://keikosuzukimoller.netlify.app/", github:"https://github.com/Keikomllr/KeikoArt"},
    {id:2, title:"CAD software Elwin", details:"Elwin selling license for CAD software developed with Angular and database", img:"/img/elwin.jpg", demo:"", github:"https://github.com/Keikomllr/elwin"},
    {id:3, title:"Harmony-CMK-", details:"A collaborative group project using Express and a SQLite database, following the Scrum development process.", img:"/img/harmony.jpg", demo:"", github:"https://github.com/Keikomllr/group_project"},
    {id:4, title:"Freaky Fashion", details:"A school project using Express, EJS templating, and a SQLite database to build a basic e-commerce platform.", img:"/img/freakyhtml.jpg", demo:"https://freakyfashionhtml.netlify.app/", github:"https://github.com/Keikomllr/Freakyfashion"},
    {id:5, title:"Freaky Fashion", details:"First school project, simple e-commerce website with HTML and CSS ", img:"/img/freakyhtml.jpg", demo:"", github:"https://github.com/Keikomllr/Freakyfashion"},


  ];


  return (
    <>

  <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-all">
        
        <Header toggleTheme={toggleTheme} isDarkMode={darkMode} />
        <Hero />
        <Skills skills={skills} />
        <Resume />
        <Projects projects={projects} />
        <Footer />

      </div>
    </div>    
    </>
  )
}

export default App

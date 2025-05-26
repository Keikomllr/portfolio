import React from 'react'

const Header = ({ toggleTheme, isDarkMode }) => {
    return (
      <header className="bg-[rgb(38,63,63)] text-white px-6 py-4 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* 名前ロゴ */}
          <h1 className="text-5xl font-bold text-gray-200">Keiko Möller</h1>
  
          {/* ナビゲーション + ダークモードボタン */}
          <div className="flex items-center gap-6">
            <nav className="space-x-4 text-xl hidden md:flex">
              <a href="#about" className="text-gray-300 hover:text-yellow-400 flex items-center gap-1">ℹ️ About</a>
              <a href="#skills" className="text-gray-300 hover:text-yellow-400 flex items-center gap-1">⚙️ Skills</a>
              <a href="#resume" className="text-gray-300 hover:text-yellow-400 flex items-center gap-1">📁 Resume</a>
              <a href="#projects" className="text-gray-300 hover:text-yellow-400 flex items-center gap-1">📂 Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-yellow-400 flex items-center gap-1">📒 Contact</a>
            </nav>
  
            {/* ライト/ダーク切替ボタン */}
            <button
              onClick={toggleTheme}
              className="bg-black text-white px-3 py-1 rounded hover:bg-gray-700 text-sm"
            >
              {isDarkMode ? 'Light Mode 🌞' : 'Dark Mode 🌙'}
            </button>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
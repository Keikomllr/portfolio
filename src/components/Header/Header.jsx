import React from 'react'
import Navbar from '../Navbar/Navnar';

const Header = ({ toggleTheme, isDarkMode }) => {
    return (
      <header className="bg-[rgb(38,63,63)] text-white px-6 py-4 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* 名前ロゴ */}
          <h1 className="text-5xl font-bold text-gray-200">Keiko Möller</h1>
  
          {/* ナビゲーション + ダークモードボタン */}
          <div className="flex items-center gap-6">
           
            <Navbar />
  
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
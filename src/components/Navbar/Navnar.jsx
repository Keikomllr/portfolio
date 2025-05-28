import { useState } from "react";
import { Menu, X } from "lucide-react"; // ハンバーガーと閉じるアイコン

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="flex items-center justify-between p-4 text-white">
     
      {/* ハンバーガーボタン（モバイル） */}
      <button className="md:hidden" onClick={toggleMenu}>
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* デスクトップ用ナビゲーション */}
      <nav className="space-x-4 text-xl hidden md:flex">
        <a href="#about" className="text-gray-300 hover:text-yellow-400">About</a>
        <a href="#skills" className="text-gray-300 hover:text-yellow-400">Skills</a>
        <a href="#resume" className="text-gray-300 hover:text-yellow-400">Resume</a>
        <a href="#projects" className="text-gray-300 hover:text-yellow-400">Projects</a>
        <a href="#contact" className="text-gray-300 hover:text-yellow-400">Contact</a>
      </nav>

      {/* モバイル用メニュー */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center py-4 space-y-4 md:hidden z-50">
          <a href="#about" className="text-gray-300 hover:text-yellow-400" onClick={toggleMenu}>About</a>
          <a href="#skills" className="text-gray-300 hover:text-yellow-400" onClick={toggleMenu}>Skills</a>
          <a href="#resume" className="text-gray-300 hover:text-yellow-400" onClick={toggleMenu}>Resume</a>
          <a href="#projects" className="text-gray-300 hover:text-yellow-400" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-yellow-400" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </div>
  );
}

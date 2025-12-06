import { useEffect, useRef, useState } from "react";
import {
  AiOutlineBell,
  AiOutlineCaretDown,
  AiOutlineMail,
  AiOutlineSearch,
} from "react-icons/ai";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full h-14 bg-white shadow-sm flex flex-row justify-between items-center px-4">
      <div className="w-[320px] h-9 bg-gray-100 flex flex-row items-center rounded-2xl px-2">
        <AiOutlineSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="搜索患者、病历、药品"
          className="flex-1 outline-none ml-2 text-gray-700 text-[14px] bg-transparent"
        />
      </div>

      <div className="flex flex-row justify-center items-center" ref={menuRef}>
        <AiOutlineBell className="mr-3 cursor-pointer text-[19px] text-gray-700 hover:text-gray-900" />
        <AiOutlineMail className="mr-3 cursor-pointer text-[19px] text-gray-700 hover:text-gray-900" />

        <button
          type="button"
          className="flex flex-row justify-center items-center hover:bg-gray-100 p-2 transition rounded-[6px] relative"
          aria-haspopup="menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <img
            src=""
            alt="avatar"
            className="w-9 h-9 rounded-full bg-gray-50 mr-3 object-cover"
          />
          <div className="flex flex-col justify-center mr-2 text-left">
            <h2 className="text-[15px] font-bold text-gray-800 leading-4">
              张医生
            </h2>
            <span className="text-[12px] text-gray-500 leading-4">
              内科主任医生
            </span>
          </div>
          <AiOutlineCaretDown className="mr-1 text-gray-500" />

          {isMenuOpen ? (
            <div
              role="menu"
              className="absolute top-12 right-0 w-48 bg-white border border-gray-200 rounded-[8px] shadow-lg py-2 z-10"
            >
              <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50">
                个人中心
              </button>
              <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50">
                设置
              </button>
              <div className="my-1 h-px bg-gray-100" />
              <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50">
                退出登录
              </button>
            </div>
          ) : null}
        </button>
      </div>
    </div>
  );
}

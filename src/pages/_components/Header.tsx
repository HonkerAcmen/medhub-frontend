import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const headerHeight = 96; // 顶部固定导航高度 h-24 = 96px
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const target = elementTop - headerHeight - 16; // 额外预留一点上边距

    window.scrollTo({
      top: target < 0 ? 0 : target,
      behavior: "smooth",
    });
  };

  const headerTitles: { name: string; onback: () => void }[] = [
    {
      name: "首页",
      onback: () => scrollToSection("home"),
    },
    {
      name: "科室导航",
      onback: () => scrollToSection("departments"),
    },
    {
      name: "在线挂号",
      onback: () => scrollToSection("online-register"),
    },
    {
      name: "常见问题",
      onback: () => scrollToSection("faq"),
    },
    {
      name: "联系我们",
      onback: () => scrollToSection("contact"),
    },
  ];
  return (
    <header className="fixed top-0 z-50 shadow-md bg-white w-full h-24 flex items-center justify-between px-4 md:px-8">
      <div className="flex flex-col  justify-center items-center h-full cursor-pointer">
        <h1 className=" text-blue-800 font-semibold text-2xl md:text-4xl p-0 m-0">
          康复医院
        </h1>
        <h2 className="text-gray-400 text-sm md:text-xl p-0 m-0">
          前台服务中心
        </h2>
      </div>
      <ul className="hidden md:flex items-center justify-center h-full">
        {headerTitles.map((v, i) => (
          <li
            key={i}
            className="px-3 py-2 text-center text-xl  hover:bg-gray-100 rounded-lg transition duration-200 cursor-pointer"
            onClick={v.onback}
          >
            {v.name}
          </li>
        ))}
      </ul>
      <button
        className="md:hidden flex items-center justify-center w-12 h-12 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
      >
        {menuOpen ? "X" : "☰"}
      </button>
    </header>
  );
}

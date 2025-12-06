import { useState } from "react";
import Image from "next/image";
import {
  commonProblem,
  departmentChoose,
  departmentData,
  doctorMember,
} from "@/mock/homepage-data";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);

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

  return (
    <div className="min-h-screen min-w-2xl bg-white">
      <header className="fixed top-0 z-50 shadow-md bg-white w-full h-24 flex items-center justify-between px-4 md:px-8">
        <div className="flex  justify-center items-center h-full">
          <div className="text-center">
            <h1 className=" text-blue-800 font-semibold text-2xl md:text-3xl p-0 m-0">
              康复医院
            </h1>
            <h2 className="text-gray-400 text-sm md:text-xl p-0 m-0">
              前台服务中心
            </h2>
          </div>
        </div>
        <ul className="hidden md:flex items-center justify-center h-full">
          <li
            className="px-3 py-2 text-center text-xl hover:text-blue-800 transition-colors cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            首页
          </li>
          <li
            className="px-3 py-2 text-center text-xl hover:text-blue-800 transition-colors cursor-pointer"
            onClick={() => scrollToSection("departments")}
          >
            科室导航
          </li>
          <li
            className="px-3 py-2 text-center text-xl hover:text-blue-800 transition-colors cursor-pointer"
            onClick={() => scrollToSection("online-register")}
          >
            在线挂号
          </li>
          <li
            className="px-3 py-2 text-center text-xl hover:text-blue-800 transition-colors cursor-pointer"
            onClick={() => scrollToSection("faq")}
          >
            常见问题
          </li>
          <li
            className="px-3 py-2 text-center text-xl hover:text-blue-800 transition-colors cursor-pointer"
            onClick={() => scrollToSection("contact")}
          >
            联系我们
          </li>
        </ul>
        <button
          className="md:hidden flex items-center justify-center w-12 h-12 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
        >
          {menuOpen ? "X" : "☰"}
        </button>
      </header>
      {menuOpen && (
        <div className="fixed top-24 left-0 z-40 w-full bg-white shadow-lg md:hidden transition-all duration-300">
          <ul className="flex flex-col items-center py-4">
            <li
              className="w-full text-center py-3 text-xl hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => {
                scrollToSection("home");
                setMenuOpen(false);
              }}
            >
              首页
            </li>
            <li
              className="w-full text-center py-3 text-xl hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => {
                scrollToSection("departments");
                setMenuOpen(false);
              }}
            >
              科室导航
            </li>
            <li
              className="w-full text-center py-3 text-xl hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => {
                scrollToSection("online-register");
                setMenuOpen(false);
              }}
            >
              在线挂号
            </li>
            <li
              className="w-full text-center py-3 text-xl hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => {
                scrollToSection("faq");
                setMenuOpen(false);
              }}
            >
              常见问题
            </li>
            <li
              className="w-full text-center py-3 text-xl hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => {
                scrollToSection("contact");
                setMenuOpen(false);
              }}
            >
              联系我们
            </li>
          </ul>
        </div>
      )}
      <div
        id="home"
        className="w-full h-screen bg-gray-200 flex items-center p-4 pt-24 md:p-16 bg-cover bg-center"
      >
        <div className="w-full max-w-5xl mx-auto">
          <span className="flex">
            <h1 className="text-5xl md:text-7xl font-semibold text-white m-3">
              欢迎来到
            </h1>
            <h1 className="text-5xl md:text-7xl font-semibold text-blue-800 m-3">
              康复医院
            </h1>
          </span>
          <p className="text-2xl md:text-4xl m-3">
            我们致力于提供专业、温馨的医疗服务，守护您和家人的健康
          </p>
          <button className="text-xl h-15 w-28 bg-blue-800 md:h-20 md:w-50 md:text-2xl rounded-2xl  font-semibold text-white m-3">
            立即挂号
          </button>
          <button className="text-xl h-15 w-28 bg-white  md:h-20 md:w-50 md:text-2xl rounded-2xl  font-semibold text-blue-800s  m-3">
            专业医师
          </button>
        </div>
      </div>

      <div className="h-300 lg:h-160 w-full">
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="bg-white h-1/3 w-full flex items-center justify-center">
            <div>
              <h1 className="flex items-center justify-center font-semibold text-5xl p-3">
                我们的特色服务
              </h1>
              <p className="flex items-center justify-center text-neutral-500 text-2xl p-3">
                康复医院秉承“以患者为中心”的服务理念，提供全方位、高质量的医疗服务
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4 xl:grid-cols-4 bg-white h-4/10  w-full justify-items-center flex-row p-5">
            <div className="flex flex-col justify-center items-center h-30 w-full bg-gray-100 rounded-3xl p-3">
              <h3 className="text-3xl font-semibold">专业医师团队</h3>
              <p className="text-xl text-gray-500">
                汇聚各领域权威专家，提供专业诊疗服务
              </p>
            </div>
            <div className="flex flex-col justify-center items-center h-30 w-full bg-gray-100 rounded-3xl p-3">
              <h3 className="text-3xl font-semibold">便捷预约系统</h3>
              <p className="text-xl text-gray-500">
                在线预约挂号，减少排队等待时间
              </p>
            </div>
            <div className="flex flex-col justify-center items-center h-30 w-full bg-gray-100 rounded-3xl p-3">
              <h3 className="text-3xl font-semibold">AI智能导诊</h3>
              <p className="text-xl text-gray-500">
                智能分析症状，精准推荐科室和医生
              </p>
            </div>
            <div className="flex flex-col justify-center items-center h-30 w-full bg-gray-100 rounded-3xl p-3">
              <h3 className="text-3xl font-semibold">全方位关怀</h3>
              <p className="text-xl text-gray-500">
                从预约到就诊，提供全程贴心服务
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 科室导航 */}
      <div id="departments" className="min-h-screen w-full">
        <div className="bg-gray-100 py-12 flex flex-col items-center justify-center">
          <h1 className="flex items-center justify-center font-semibold text-5xl p-3">
            科室导航
          </h1>
          <p className="flex items-center justify-center text-neutral-500 text-2xl p-3">
            我院设有多个专业科室，为您提供全面的医疗服务
          </p>
          <div className="w-full h-auto flex items-center justify-center">
            <button
              className={`w-32 h-16 rounded-2xl text-2xl flex items-center justify-center p-3 
              transition-colors duration-200 font-medium
              ${
                isSelected
                  ? "bg-blue-500 text-white" // 选中色
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50" // 原色 + hover 效果
              }`}
              onClick={() => setIsSelected(!isSelected)}
            >
              全部科室
            </button>
            <button className="w-32 h-16 rounded-2xl text-2xl bg-white flex items-center justify-center p-3 m-3">
              内科
            </button>
            <button className="w-32 h-16 rounded-2xl text-2xl bg-white flex items-center justify-center p-3 m-3">
              外科
            </button>
            <button className="w-32 h-16 rounded-2xl text-2xl bg-white flex items-center justify-center p-3 m-3">
              特色专科
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {departmentData.map((dept) => (
            <div
              key={dept.title}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200"
            >
              {/* 科室标题 */}
              <h1 className="text-3xl font-extrabold text-black mb-2">
                {dept.title}
              </h1>

              {/* 科室描述 */}
              <p className="text-2xl text-gray-600 mb-4 line-clamp-2">
                {dept.desc}
              </p>

              {/* 子科室按钮组 */}
              <div className="flex flex-wrap gap-2">
                {dept.buttons.map((btn) => (
                  <button
                    key={btn}
                    className="px-3 py-1.5 text-xl bg-blue-100 hover:bg-blue-150 text-blue-800 rounded-lg transition-colors duration-200 border border-blue-100"
                  >
                    {btn}
                  </button>
                ))}
              </div>
              <div className="text-2xl m-1.5 mt-5.5">
                <a href="#" className="text-blue-700 hover:bg-blue-100">
                  预约挂号
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="min-h-screen w-full py-12 flex justify-center items-center flex-col">
        <div className="flex flex-col justify-center items-center mb-8">
          <h1 className="text-5xl font-bold m-2.5">专业医师团队</h1>
          <p className="text-xl text-gray-400 m-2.5">
            我院汇聚了各领域的权威专家，为您提供专业的医疗服务
          </p>
        </div>
        {/* 后续可以改进 */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {doctorMember.map((doctorMember) => (
            <div
              key={doctorMember.name}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 flex flex-col"
            >
              <Image
                src="/path/to/pic.jpg"
                alt="医生照片"
                width={380}
                height={300}
              />
              <h2 className="text-3xl font-extrabold text-black mb-2">
                {doctorMember.name}
              </h2>
              <p className="text-xl text-gray-500 mb-4">
                {doctorMember.comment}
              </p>
              <p className="text-lg text-gray-600 line-clamp-3 grow">
                {doctorMember.desc}
              </p>
            </div>
          ))}
        </div>
        <button className="w-54 h-16 rounded-2xl border border-blue-700 text-blue-700 text-2xl mt-24">
          查看更多医生
        </button>
      </div>
      <div
        id="online-register"
        className="min-h-screen w-full bg-gray-100 flex justify-center items-center flex-col py-12 px-4 md:px-8"
      >
        <div className="flex justify-center items-center flex-col pt-24 pb-8">
          <h1 className="text-3xl md:text-5xl font-bold m-2.5">在线挂号</h1>
          <p className="text-lg md:text-xl text-gray-400 m-2.5 text-center">
            便捷的在线预约系统，为您节省宝贵时间
          </p>
        </div>
        <div className="w-full max-w-5xl flex items-center flex-col bg-white rounded-xl shadow-lg p-4 md:p-8 mt-8 md:mt-16">
          <div className="w-full flex flex-wrap justify-between items-center gap-4 md:gap-0 mb-6 md:mb-8">
            <div className="flex justify-center items-center flex-col flex-1 min-w-[120px]">
              <div className="h-12 w-12 md:h-14 md:w-14 bg-gray-400 text-white text-xl md:text-2xl m-2.5 rounded-full flex justify-center items-center">
                1
              </div>
              <p className="text-base md:text-xl">选择科室</p>
            </div>
            <div className="flex justify-center items-center flex-col flex-1 min-w-[120px]">
              <div className="h-12 w-12 md:h-14 md:w-14 bg-gray-400 text-white text-xl md:text-2xl m-2.5 rounded-full flex justify-center items-center">
                2
              </div>
              <p className="text-base md:text-xl">选择医生</p>
            </div>
            <div className="flex justify-center items-center flex-col flex-1 min-w-[120px]">
              <div className="h-12 w-12 md:h-14 md:w-14 bg-gray-400 text-white text-xl md:text-2xl m-2.5 rounded-full flex justify-center items-center">
                3
              </div>
              <p className="text-base md:text-xl">选择时间</p>
            </div>
            <div className="flex justify-center items-center flex-col flex-1 min-w-[120px]">
              <div className="h-12 w-12 md:h-14 md:w-14 bg-gray-400 text-white text-xl md:text-2xl m-2.5 rounded-full flex justify-center items-center">
                4
              </div>
              <p className="text-base md:text-xl">填写信息</p>
            </div>
          </div>
          <div className="w-full py-4 md:py-6 flex items-center">
            <h1 className="text-xl md:text-2xl font-bold">选择就诊科室</h1>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6">
            {departmentChoose.map((departmentChoose) => (
              <div
                key={departmentChoose.name}
                className="w-full h-auto bg-white border-2 rounded-xl border-gray-200 hover:border-blue-400 transition-colors cursor-pointer flex justify-center flex-col p-4 md:p-8"
              >
                <h1 className="text-lg md:text-xl font-semibold mb-2">
                  {departmentChoose.name}
                </h1>
                <p className="text-gray-400 text-base md:text-xl">
                  {departmentChoose.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full py-4 md:py-6 flex items-center justify-end">
            <button className="w-24 h-12 md:w-32 md:h-14 rounded-xl text-white text-lg md:text-2xl bg-blue-600 hover:bg-blue-700 transition-colors flex justify-center items-center m-4 md:m-8">
              下一步
            </button>
          </div>
        </div>
      </div>
      <div id="faq" className="min-h-screen w-full p-6 md:p-16 bg-gray-100">
        <div className="h-1/3 w-full flex justify-center items-center flex-col m-8">
          <h1 className="text-4xl md:text-5xl font-bold">常见问题</h1>
          <p className="text-lg md:text-xl text-gray-400 mt-5 text-center">
            解答您在就诊过程中可能遇到的问题
          </p>
        </div>
        <div className="flex justify-center items-center flex-col">
          {commonProblem.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                setActiveQuestionId((prev) =>
                  prev === item.id ? null : item.id
                )
              }
              className="w-11/12 md:w-2/3 bg-white rounded-2xl p-6 md:p-8 m-3 shadow-sm cursor-pointer transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-lg md:text-2xl font-normal">
                  {item.problem}
                </p>
                <span className="text-2xl text-gray-400 select-none">
                  {activeQuestionId === item.id ? "−" : "+"}
                </span>
              </div>
              {activeQuestionId === item.id && (
                <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        id="contact"
        className="min-h-screen w-full px-6 md:px-16 py-12 bg-white"
      >
        <div className="w-full max-w-6xl mx-auto flex justify-center items-center flex-col">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            联系我们
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mt-5 text-center">
            如有任何问题，请随时联系我们
          </p>
          <div className="flex flex-col lg:flex-row w-full mt-10 gap-8">
            {/* 左侧联系方式 */}
            <div className="w-full lg:w-1/3 min-w-[260px] bg-gray-50 rounded-2xl shadow-sm p-6 md:p-8 flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                联系方式
              </h2>
              <div>
                <h3 className="text-base md:text-lg font-medium text-gray-700">
                  地址
                </h3>
                <p className="text-sm md:text-base text-gray-600 mt-1">
                  北京市海淀区医院路100号
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium text-gray-700">
                  电话
                </h3>
                <p className="text-sm md:text-base text-gray-600 mt-1">
                  总机：010-12345678 <br />
                  急诊：010-12345679 <br />
                  预约：010-12345680
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium text-gray-700">
                  邮箱
                </h3>
                <p className="text-sm md:text-base text-gray-600 mt-1">
                  info@kangfu-hospital.com
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium text-gray-700">
                  就诊时间
                </h3>
                <p className="text-sm md:text-base text-gray-600 mt-1">
                  周一至周五：8:00 - 18:00 <br />
                  周六至周日：8:00 - 12:00 <br />
                  急诊科：24小时
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium text-gray-700">
                  关注我们
                </h3>
              </div>
            </div>

            {/* 右侧留言表单 */}
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                给我们留言
              </h2>

              {/* 姓名 & 手机号 同一行 */}
              <div className="flex flex-col md:flex-row gap-6 mb-4">
                <div className="flex-1 flex flex-col">
                  <label className="text-gray-700 mb-2 text-sm md:text-lg">
                    姓名
                  </label>
                  <input
                    type="text"
                    placeholder="请输入您的姓名"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="text-gray-700 mb-2 text-sm md:text-lg">
                    手机号码
                  </label>
                  <input
                    type="text"
                    placeholder="请输入您的手机号码"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* 其余字段：文字在上，输入框在下 */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label className="text-gray-700 mb-2 text-sm md:text-lg">
                    邮箱
                  </label>
                  <input
                    type="text"
                    placeholder="请输入您的邮箱"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-700 mb-2 text-sm md:text-lg">
                    主题
                  </label>
                  <input
                    type="text"
                    placeholder="请输入留言主题"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-700 mb-2 text-sm md:text-lg">
                    留言内容
                  </label>
                  <textarea
                    placeholder="请输入您的留言内容"
                    className="w-full min-h-[140px] rounded-xl border border-gray-300 px-4 py-3 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400 resize-none"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button className="px-10 py-3 bg-blue-600 text-white rounded-xl text-lg md:text-xl font-medium hover:bg-blue-700 transition-colors">
                  提交留言
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

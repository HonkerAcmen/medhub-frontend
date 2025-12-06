"use client";

import { useState } from "react";
import Image from "next/image";
import {
  commonProblem,
  departmentData,
  doctorMember,
} from "@/mock/homepage-data";
import Header from "./_components/Header";

// 定义类型
type DeptType = "全部" | "内科" | "外科" | "特色专科";

export default function Home() {
  // ================= 状态管理 ==================

  // 1. 科室筛选状态
  const [activeDept, setActiveDept] = useState<DeptType>("全部");

  const filteredDepartments =
    activeDept === "全部"
      ? departmentData
      : departmentData.filter((item) => item.category === activeDept);

  const deptTabs: DeptType[] = ["全部", "内科", "外科", "特色专科"];

  // 2. FAQ 状态
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);

  // 3. 在线挂号状态
  const [step, setStep] = useState(1);
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Header />

      {/* ================= 1. 首页 Hero ================= */}
      <div
        id="home"
        style={{ backgroundImage: "url('/images/bg.png')" }}
        className="w-full h-screen bg-cover bg-center flex flex-col relative"
      >
        {/* 遮罩层 */}
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="w-full max-w-5xl h-full flex flex-col justify-center ml-4 md:ml-20 relative z-10">
          <span className="flex flex-wrap items-center bg-black/30 rounded-xl w-fit backdrop-blur-sm border border-white/10 p-2">
            <h1 className="text-4xl md:text-7xl font-semibold text-white m-2 md:m-3">
              欢迎来到
            </h1>
            <h1 className="text-4xl md:text-7xl font-semibold text-[#5ebfff] m-2 md:m-3">
              康复医院
            </h1>
          </span>

          <p className="mt-6 text-xl md:text-4xl text-white bg-black/30 rounded-xl px-6 py-4 w-fit backdrop-blur-sm border border-white/10 leading-relaxed">
            我们致力于提供专业、温馨的医疗服务
            <br className="hidden md:block" />
            守护您和家人的健康
          </p>

          <div className="mt-10 flex gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("online-register")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-[#4387b4] hover:bg-[#3a759c] text-white text-xl md:text-2xl rounded-2xl font-semibold transition-all hover:scale-105 shadow-lg"
            >
              立即挂号
            </button>
            <button className="px-8 py-4 bg-white text-[#4387b4] hover:bg-gray-100 text-xl md:text-2xl rounded-2xl font-semibold transition-all hover:scale-105 shadow-lg">
              专业医师
            </button>
          </div>
        </div>
      </div>

      {/* ================= 2. 科室导航 ================= */}
      <div id="departments" className="min-h-screen w-full bg-gray-50">
        <div className="py-16 flex flex-col items-center max-w-7xl mx-auto">
          <h1 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            科室导航
          </h1>
          <p className="text-gray-500 text-xl mb-10 text-center px-4">
            精准分科，为您提供最专业的医疗服务
          </p>

          <div className="flex gap-4 mb-12 flex-wrap justify-center px-4">
            {deptTabs.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`px-8 py-4 text-xl md:text-2xl rounded-2xl transition-all duration-300 font-medium border
                ${
                  activeDept === dept
                    ? "bg-[#4387b4] text-white border-[#4387b4] shadow-lg scale-105"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#4387b4] hover:text-[#4387b4]"
                }`}
              >
                {dept === "全部" ? "全部科室" : dept}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 w-full">
            {filteredDepartments.map((dept) => (
              <div
                key={dept.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#5ebfff] group cursor-default"
              >
                <h1 className="text-3xl font-bold mb-3 text-gray-800 group-hover:text-[#4387b4] transition-colors">
                  {dept.title}
                </h1>
                <p className="text-gray-500 mb-6 text-lg leading-relaxed line-clamp-2 h-14">
                  {dept.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {dept.buttons.map((btn: string) => (
                    <span
                      key={btn}
                      className="px-3 py-1.5 bg-[#4387b4]/10 text-[#4387b4] rounded-lg text-base font-medium"
                    >
                      {btn}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-[#4387b4] font-semibold cursor-pointer group-hover:translate-x-2 transition-transform inline-block">
                    查看详情 &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= 3. 医生团队 ================= */}
      <div className="w-full py-20 flex flex-col items-center bg-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">专业医师团队</h1>
        <p className="text-gray-500 text-xl mb-12 text-center px-4">
          汇聚各领域权威专家，守护您的健康
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
          {doctorMember.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src="/images/bg.png"
                  alt={doctor.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                {doctor.name}
              </h2>
              <p className="text-[#4387b4] font-medium mb-4">
                {doctor.comment}
              </p>
              <p className="text-gray-600 text-base leading-relaxed line-clamp-3 mb-4 flex-grow">
                {doctor.desc}
              </p>
              <button className="w-full py-2 rounded-lg border border-[#4387b4] text-[#4387b4] font-semibold hover:bg-[#4387b4] hover:text-white transition-colors">
                预约医生
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ================= 4. 在线挂号 ================= */}
      <div
        id="online-register"
        className="min-h-screen w-full px-4 py-20 bg-gray-50 flex flex-col items-center"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            在线挂号
          </h1>
          <p className="text-gray-500 text-xl">简单四步，轻松完成预约</p>
        </div>

        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-6 md:p-12">
          {/* 步骤条 */}
          <div className="flex justify-between items-center mb-12 relative max-w-3xl mx-auto">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-0 -translate-y-1/2 rounded-full"></div>
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="relative z-10 flex flex-col items-center bg-white px-2"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full text-xl md:text-2xl font-bold transition-all duration-300 border-4 
                    ${
                      step >= n
                        ? "bg-[#4387b4] text-white border-[#4387b4] shadow-lg scale-110"
                        : "bg-white text-gray-400 border-gray-200"
                    }`}
                >
                  {n}
                </div>
                <span
                  className={`mt-2 text-sm md:text-base font-medium ${
                    step >= n ? "text-[#4387b4]" : "text-gray-400"
                  }`}
                >
                  {n === 1 && "选科室"}
                  {n === 2 && "选医生"}
                  {n === 3 && "填信息"}
                  {n === 4 && "完成"}
                </span>
              </div>
            ))}
          </div>

          <div className="min-h-[400px]">
            {/* Step 1 */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                  请选择就诊科室
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {departmentData.map((dept) => (
                    <button
                      key={dept.title}
                      onClick={() => {
                        setSelectedDept(dept.title);
                        setStep(2);
                      }}
                      className="p-6 text-lg md:text-xl font-medium bg-gray-50 border-2 border-transparent rounded-2xl hover:border-[#5ebfff] hover:bg-white hover:text-[#4387b4] hover:shadow-md transition-all duration-200 text-gray-700"
                    >
                      {dept.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() => setStep(1)}
                    className="text-gray-500 hover:text-[#4387b4] flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                  >
                    &larr; 返回上一步
                  </button>
                  <h2 className="text-2xl font-bold text-gray-800">
                    请选择医生{" "}
                    <span className="text-base font-normal text-gray-500 ml-2">
                      ({selectedDept})
                    </span>
                  </h2>
                  <div className="w-24"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {doctorMember.map((doctor) => (
                    <div
                      key={doctor.name}
                      onClick={() => {
                        setSelectedDoctor(doctor.name);
                        setStep(3);
                      }}
                      className="cursor-pointer bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-[#5ebfff] hover:shadow-lg transition-all duration-200 group flex flex-col items-center text-center"
                    >
                      <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-[#5ebfff] transition-colors">
                        <Image
                          src="/images/bg.png"
                          alt="doctor"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h2 className="font-bold text-xl text-gray-800 group-hover:text-[#4387b4]">
                        {doctor.name}
                      </h2>
                      <p className="text-gray-500 text-sm mt-1">
                        {doctor.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="animate-fade-in flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
                  填写预约信息
                </h2>
                <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                      就诊人姓名
                    </label>
                    <input
                      placeholder="请输入真实姓名"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5ebfff] focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="mb-8">
                    <label className="block text-gray-700 font-medium mb-2">
                      联系手机号
                    </label>
                    <input
                      placeholder="请输入11位手机号码"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5ebfff] focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="flex justify-between gap-4">
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 py-3 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      上一步
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      className="flex-1 bg-[#4387b4] hover:bg-[#3a759c] text-white py-3 rounded-xl font-semibold shadow-md transition-all hover:shadow-lg"
                    >
                      确认提交
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div className="animate-fade-in text-center flex flex-col items-center justify-center py-10">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-12 h-12 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  挂号成功
                </h2>
                <p className="text-gray-500 mb-8">
                  请保持电话畅通，我们将尽快与您确认
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl w-full max-w-md mb-8 text-left border border-gray-100">
                  <div className="flex justify-between mb-3 border-b border-gray-200 pb-2">
                    <span className="text-gray-500">预约科室</span>
                    <span className="font-semibold text-gray-800">
                      {selectedDept}
                    </span>
                  </div>
                  <div className="flex justify-between mb-3 border-b border-gray-200 pb-2">
                    <span className="text-gray-500">预约医生</span>
                    <span className="font-semibold text-gray-800">
                      {selectedDoctor}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">联系电话</span>
                    <span className="font-semibold text-gray-800">
                      {formData.phone}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setStep(1);
                    setSelectedDept(null);
                    setSelectedDoctor(null);
                    setFormData({ name: "", phone: "" });
                  }}
                  className="bg-[#4387b4] text-white px-10 py-3 rounded-xl text-xl font-semibold hover:bg-[#3a759c] transition shadow-lg"
                >
                  再次预约
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= 5. FAQ ================= */}
      <div id="faq" className="min-h-screen w-full px-4 py-20 bg-white">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            常见问题
          </h1>
          <p className="text-gray-500 text-xl">
            解答您在就诊过程中可能遇到的疑问
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {commonProblem.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                setActiveQuestionId(
                  activeQuestionId === item.id ? null : item.id
                )
              }
              className={`border border-gray-100 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-md bg-white 
              ${
                activeQuestionId === item.id
                  ? "border-l-4 border-l-[#4387b4] shadow-md"
                  : ""
              }`}
            >
              <div className="flex justify-between items-center">
                <p
                  className={`text-xl font-medium ${
                    activeQuestionId === item.id
                      ? "text-[#4387b4]"
                      : "text-gray-700"
                  }`}
                >
                  {item.problem}
                </p>
                <span
                  className={`text-3xl font-light leading-none ${
                    activeQuestionId === item.id
                      ? "text-[#4387b4]"
                      : "text-gray-300"
                  }`}
                >
                  {activeQuestionId === item.id ? "−" : "+"}
                </span>
              </div>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeQuestionId === item.id
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0 mt-0"
                }`}
              >
                <p className="overflow-hidden text-gray-600 text-lg leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= 6. 联系我们 (新增加) ================= */}
      <div
        id="contact"
        className="min-h-screen w-full px-6 md:px-16 py-20 bg-gray-50"
      >
        <div className="w-full max-w-7xl mx-auto flex justify-center items-center flex-col">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            联系我们
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mt-2 mb-12 text-center">
            如有任何问题，请随时联系我们
          </p>

          <div className="flex flex-col lg:flex-row w-full gap-8">
            {/* 左侧：联系方式卡片 */}
            <div className="w-full lg:w-1/3 min-w-[300px] bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-8 border-t-4 border-[#4387b4]">
              <div>
                <h3 className="text-xl font-bold text-[#4387b4] flex items-center gap-2 mb-2">
                  📍 医院地址
                </h3>
                <p className="text-gray-600 text-lg pl-8">
                  北京市海淀区医院路100号
                  <br />
                  <span className="text-sm text-gray-400">
                    （地铁10号线海淀医院站B口出）
                  </span>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#4387b4] flex items-center gap-2 mb-2">
                  📞 联系电话
                </h3>
                <div className="text-gray-600 text-lg pl-8 space-y-1">
                  <p>
                    总机：<span className="font-mono">010-12345678</span>
                  </p>
                  <p>
                    急诊：
                    <span className="font-mono text-red-500 font-semibold">
                      010-12345679
                    </span>
                  </p>
                  <p>
                    预约：<span className="font-mono">010-12345680</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#4387b4] flex items-center gap-2 mb-2">
                  ✉️ 电子邮箱
                </h3>
                <p className="text-gray-600 text-lg pl-8">
                  info@kangfu-hospital.com
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#4387b4] flex items-center gap-2 mb-2">
                  🕒 就诊时间
                </h3>
                <div className="text-gray-600 pl-8 space-y-1">
                  <p>周一至周五：8:00 - 18:00</p>
                  <p>周六至周日：8:00 - 12:00</p>
                  <p className="text-[#4387b4] font-semibold">急诊科：24小时</p>
                </div>
              </div>
            </div>

            {/* 右侧：留言表单 */}
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-8 text-gray-800">
                给我们留言
              </h2>

              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex-1">
                  <label className="block text-gray-700 font-medium mb-2">
                    姓名
                  </label>
                  <input
                    type="text"
                    placeholder="您的姓名"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#5ebfff] focus:border-transparent transition-all"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700 font-medium mb-2">
                    手机号码
                  </label>
                  <input
                    type="text"
                    placeholder="您的联系方式"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#5ebfff] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  邮箱
                </label>
                <input
                  type="email"
                  placeholder="您的电子邮箱"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#5ebfff] focus:border-transparent transition-all"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  留言内容
                </label>
                <textarea
                  placeholder="请详细描述您的问题..."
                  className="w-full min-h-[160px] rounded-xl border border-gray-300 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#5ebfff] focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button className="px-12 py-4 bg-[#4387b4] text-white rounded-xl text-xl font-semibold hover:bg-[#3a759c] transition-all shadow-md hover:shadow-lg hover:-translate-y-1">
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

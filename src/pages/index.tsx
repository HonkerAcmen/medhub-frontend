import { useState } from "react";
import Image from "next/image";
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
  const departmentData = [
    {
      title: "内科",
      desc: "诊治呼吸系统、消化系统、心血管系统等内科疾病",
      buttons: ["呼吸内科", "消化内科", "心内科"],
    },
    {
      title: "外科",
      desc: "开展普外科、骨科、神经外科等各类外科手术",
      buttons: ["普外科", "骨科", "神经外科"],
    },
    {
      title: "妇产科",
      desc: "提供妇科疾病诊疗、产前检查、分娩等全方位服务",
      buttons: ["妇科", "产科", "妇幼保健"],
    },
    {
      title: "儿科",
      desc: "专注儿童健康，提供全面的儿科疾病诊疗服务",
      buttons: ["小儿内科", "小儿外科", "儿童保健"],
    },
    {
      title: "眼科",
      desc: "诊治各类眼科疾病，提供专业的视力矫正服务",
      buttons: ["眼底病", "白内障", "近视矫正"],
    },
    {
      title: "口腔科",
      desc: "提供口腔疾病诊疗、牙齿美容、口腔修复等服务",
      buttons: ["口腔内科", "口腔外科", "牙齿美容"],
    },
    {
      title: "皮肤科",
      desc: "诊治各类皮肤疾病，提供专业的皮肤护理建议",
      buttons: ["皮炎", "湿疹", "痤疮"],
    },
    {
      title: "精神心理科",
      desc: "提供心理健康评估、心理咨询和治疗服务",
      buttons: ["心理咨询", "抑郁症", "焦虑障碍"],
    },
  ];
  const doctorMember = [
    {
      name: "张医生",
      comment: "内科|主任医师",
      desc: "从事心血管疾病诊疗工作20余年，擅长冠心病、心力衰竭等疾病的诊治",
    },
    {
      name: "李医生",
      comment: "神经内科 | 副主任医师",
      desc: "专注于脑血管疾病和神经系统疾病的诊断与治疗，具有丰富的临床经验",
    },
    {
      name: "王医生",
      comment: "妇产科 | 主任医师",
      desc: "从事妇产科临床工作25年，擅长妇科肿瘤、不孕不育等疑难疾病的诊治",
    },
    {
      name: "赵医生",
      comment: "骨科 | 主任医师",
      desc: "专注于骨关节疾病的诊断与治疗，尤其在关节置换和脊柱疾病方面有丰富经验",
    },
  ];
  const departmentChoose = [
    {
      name: "内科",
      desc: "呼吸系统、消化系统、心血管系统等",
    },
    {
      name: "外科",
      desc: "普外科、骨科、神经外科等",
    },
    {
      name: "妇产科",
      desc: "妇科疾病、产前检查、分娩等",
    },
    {
      name: "儿科",
      desc: "儿童疾病、儿童保健等",
    },
    {
      name: "眼科",
      desc: "眼部疾病、视力矫正等",
    },
    {
      name: "口腔科",
      desc: "口腔疾病、牙齿美容等",
    },
  ];
  const commonProblem = [
    {
      id: 1,
      problem: "如何预约挂号？",
      answer:
        "您可以通过以下方式预约挂号:1. 在本网站的“在线挂号”页面进行预约;2. 拨打医院预约电话;3. 到医院前台现场挂号;4. 使用医院官方APP进行预约。",
    },
    {
      id: 2,
      problem: "预约后需要提前多久到达医院？",
      answer:
        "建议您在预约时间前30分钟到达医院，携带有效证件（身份证、医保卡等）到相应科室的候诊区等候。如有特殊情况无法按时就诊，请提前24小时取消或更改预约。",
    },
    {
      id: 3,
      problem: "如何查询检查结果？",
      answer:
        "检查结果出来后，您可以通过以下方式查询：1. 登录医院官网或APP查询；2. 到医院自助报告机打印；3. 到相应科室护士站领取；4. 部分检查结果会直接发送给您的主治医生，您可以在复诊时咨询医生。",
    },
    {
      id: 4,
      problem: "医院是否支持医保报销？",
      answer:
        "我院支持多种医保类型，包括城镇职工医保、城乡居民医保、新农合等。就诊时请携带医保卡和有效身份证件，在结算时可以直接享受医保报销。具体报销比例和范围请咨询医院医保办或您的医保机构。",
    },
    {
      id: 5,
      problem: "如何取消或更改预约？",
      answer:
        "您可以通过以下方式取消或更改预约：1. 登录医院官网或APP，在“我的预约”中操作；2. 拨打医院预约电话进行取消或更改；3. 到医院前台办理取消或更改手续。为了合理利用医疗资源，建议您提前24小时取消或更改预约",
    },
    {
      id: 6,
      problem: "医院的就诊时间时怎样的？",
      answer:
        "我院门诊时间为周一至周五上午8:00-12:00，下午14:00-18:00；周六、周日上午8:00-12:00，下午休息。急诊科24小时接诊。部分科室可能有特殊的就诊时间，请在预约前查看科室详情或咨询医院客服。",
    },
  ];
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
              <p className="text-lg text-gray-600 line-clamp-3 flex-grow">
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

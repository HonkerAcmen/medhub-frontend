import { useState } from "react";
import {
  AiOutlineNodeIndex,
  AiOutlineHome,
  AiOutlineMedicineBox,
  AiOutlineBarChart,
  AiOutlineSafety,
  AiOutlineSetting,
  AiOutlineQuestionCircle,
  AiFillCaretDown,
  AiOutlineControl,
} from "react-icons/ai";

export function Navigation() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [selectId, setSelectId] = useState<number | null>(1);
  const [subSelectId, setSubSelectId] = useState<{
    parentIndex: number;
    childIndex: number;
  } | null>(null);
  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const navMainData = [
    {
      name: "数据仪表盘",
      icon: <AiOutlineControl size={18} />,
      child: [],
    },
    {
      name: "门诊管理",
      icon: <AiOutlineNodeIndex size={18} />,
      child: [
        { name: "预约挂号" },
        { name: "医生工作站" },
        { name: "门诊收费" },
        { name: "多元支付" },
      ],
    },
    {
      name: "住院管理",
      icon: <AiOutlineHome size={18} />,
      child: [{ name: "床位管理" }, { name: "住院登记" }, { name: "出院管理" }],
    },
    {
      name: "药品管理",
      icon: <AiOutlineMedicineBox size={18} />,
      child: [{ name: "药品库存" }, { name: "药品采购" }, { name: "处方管理" }],
    },
    {
      name: "医疗质量管理",
      icon: <AiOutlineBarChart size={18} />,
      child: [{ name: "质量指标" }, { name: "统计分析" }],
    },
    {
      name: "数据与权限管理",
      icon: <AiOutlineSafety size={18} />,
      child: [{ name: "用户管理" }, { name: "角色权限" }, { name: "数据备份" }],
    },
  ];

  const navSettingData = [
    {
      name: "系统设置",
      icon: <AiOutlineSetting size={18} />,
    },
    {
      name: "帮助中心",
      icon: <AiOutlineQuestionCircle size={18} />,
    },
  ];

  return (
    <div className="flex items-center flex-col w-60 h-[100vh] shadow bg-white">
      <div className="pt-4 pb-4 pl-8 pr-8 font-bold border-b-1 border-gray-300 text-blue-600">
        Med Hub System
      </div>

      {/* 主导航 */}
      <div className="w-[100%] flex flex-col justify-center items-center border-b-1 border-gray-300 pb-2">
        <span className="text-[11px] font-bold text-gray-400 p-2">主导航</span>
        <ul className="flex justify-center flex-col items-center w-[80%]">
          {navMainData.map((item, index) => (
            <li key={index} className="w-full">
              <div
                className={`w-full p-2 mt-2 hover:bg-blue-50 hover:text-blue-600 cursor-pointer rounded-[5px] flex items-center gap-2 justify-between ${
                  selectId === index ? "bg-blue-50 text-blue-700" : ""
                }`}
                onClick={() => {
                  setSelectId(index);
                  setSubSelectId(null); // 重置子菜单选中状态
                  item.child && item.child.length > 0 && toggleExpanded(index);
                }}
              >
                <div className="flex flex-row justify-center items-center">
                  <div className="mr-2">{item.icon}</div>
                  {item.name}
                </div>

                {item.child && item.child.length > 0 ? (
                  <div
                    className={`text-gray-500 transition-transform duration-200 ${
                      expandedItems.includes(index) ? "rotate-180" : ""
                    }`}
                  >
                    <AiFillCaretDown />
                  </div>
                ) : null}
              </div>

              {item.child &&
                item.child.length > 0 &&
                expandedItems.includes(index) && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {item.child.map((childItem, childIndex) => (
                      <li
                        key={childIndex}
                        className={`w-full p-2 hover:bg-blue-50 hover:text-blue-600 cursor-pointer rounded-[5px] flex items-center gap-2 text-sm ${
                          subSelectId?.parentIndex === index &&
                          subSelectId?.childIndex === childIndex
                            ? "bg-blue-50 text-blue-700"
                            : ""
                        }`}
                        onClick={() =>
                          setSubSelectId({ parentIndex: index, childIndex })
                        }
                      >
                        {childItem.name}
                      </li>
                    ))}
                  </ul>
                )}
            </li>
          ))}
        </ul>
      </div>

      {/* 系统 */}
      <div className="w-[100%] flex flex-col justify-center items-center">
        <span className="text-[11px] font-bold text-gray-400 p-2">系统</span>
        <ul className="flex justify-center flex-col items-center w-[80%]">
          {navSettingData.map((item, index) => (
            <li
              key={index}
              className="w-full p-2 hover:bg-blue-50 hover:text-blue-600 cursor-pointer rounded-[5px] flex items-center gap-2"
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

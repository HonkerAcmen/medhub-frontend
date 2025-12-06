import { useState } from "react";

interface TabsProps {
  names: string[];
  widthClass?: string;
  heightClass?: string;
  onback: (idx: number) => void;
}

export function Tabs({
  names,
  onback,
  widthClass = "w-full",
  heightClass,
}: TabsProps) {
  const [seleId, setSeleId] = useState(0);

  return (
    <div
      className={`bg-white ${widthClass} ${heightClass} h-12 rounded-[5px] flex justify-center items-center mt-4`}
    >
      <ul className="flex felx-col justify-center">
        {names.map((item, idx) => (
          <li
            className={`p-2  ml-1 mr-1 cursor-pointer text-sm text-gray-800 hover:bg-gray-50 rounded-[10px] transition  ${
              seleId === idx ? "bg-gray-50 font-bold" : ""
            }`}
            key={idx}
            onClick={() => {
              setSeleId(idx);
              onback(idx);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
const tabsName: string[] = ["预约挂号", "医生工作站", "门诊收费", "多元支付"];
  const tabsIdx = 0;
<Tabs
        names={tabsName}
        onback={(idx) => {
          console.log(idx);
        }}
      />

*/

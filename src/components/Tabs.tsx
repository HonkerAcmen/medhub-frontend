import { useState } from "react";

interface TabsProps {
  names: string[];
  onback: (idx: number) => void;
}

export function Tabs({ names, onback }: TabsProps) {
  const [seleId, setSeleId] = useState(0);

  return (
    <div className="bg-white w-100 h-12 rounded-[5px]">
      <ul className="flex felx-col justify-center">
        {names.map((item, idx) => (
          <li
            className={`p-2 mt-1 ml-1 mr-1 cursor-pointer text-gray-800 hover:bg-gray-50 rounded-[10px] transition  ${
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

import { Tabs } from "@/components/Tabs";
import { ReactNode, useState } from "react";
import ElectronicMedicalRecords from "./ElectronicMedicalRecords";
import PrescriptionManagement from "./PrescriptionManagement";
import AdmissionManageme from "./AdmissionManageme";

export default function DockerWork() {
  const [seleName, setSeleName] = useState("预约挂号");
  const tabNames = ["接诊管理", "电子病历", "处方管理"];
  const viewMap: Record<string, ReactNode> = {
    接诊管理: <AdmissionManageme />,
    电子病历: <ElectronicMedicalRecords />,
    处方管理: <PrescriptionManagement />,
  };
  return (
    <div className="p-4 flex flex-col">
      <h2 className="text-2xl font-semibold">医生工作站</h2>
      <span className="text-gray-600 mt-2 text-[14px]">
        患者接诊、病历书写、处方开具与诊疗管理
      </span>
      <Tabs
        widthClass="w-70"
        names={tabNames}
        onback={(idx) => {
          setSeleName(tabNames[idx]);
        }}
      />
      {/* 显示子页面 */}
      <div>{viewMap[seleName]}</div>
    </div>
  );
}

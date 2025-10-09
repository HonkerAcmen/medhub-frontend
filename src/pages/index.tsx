import { Navigation } from "./_components/_Navigation";
import { Header } from "./_components/_Header";
import { MakeAppointment } from "./OutpatientManagement/MakeAppointment";
import { AdmissionManageme } from "./OutpatientManagement/DoctorWorkstation/AdmissionManageme";
import { useState, type ReactNode } from "react";
import { ElectronicMedicalRecords } from "./OutpatientManagement/DoctorWorkstation/ElectronicMedicalRecords";
import { PrescriptionManagement } from "./OutpatientManagement/DoctorWorkstation/PrescriptionManagement";

export default function Home() {
  const [seleName, setSeleName] = useState("预约挂号");
  const viewMap: Record<string, ReactNode> = {
    预约挂号: <MakeAppointment />,
    接诊管理: <AdmissionManageme />,
    电子病历: <ElectronicMedicalRecords />,
    处方管理: <PrescriptionManagement />,
  };
  return (
    <div className="flex felx-row ">
      <Navigation
        onback={(name: string) => {
          setSeleName(name);
          console.log("nav is :" + name);
        }}
      />
      <div className="w-full">
        <Header />
        {viewMap[seleName] ?? "页面不存在"}
      </div>
    </div>
  );
}

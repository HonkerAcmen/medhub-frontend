import { Navigation } from "./_components/_Navigation";
import { Header } from "./_components/_Header";
import { MakeAppointment } from "./OutpatientManagement/MakeAppointment";
import { DockerWork } from "./OutpatientManagement/DoctorWorkstation/DockerWork";
import { useState, type ReactNode } from "react";

export default function Home() {
  const [seleName, setSeleName] = useState("预约挂号");
  const viewMap: Record<string, ReactNode> = {
    预约挂号: <MakeAppointment />,
    医生工作站: <DockerWork />,
  };

  return (
    <div className="flex felx-row ">
      <Navigation
        onback={(name: string) => {
          setSeleName(name);
        }}
      />
      <div className="w-full">
        <Header />
        {viewMap[seleName.trim()] ?? null}
      </div>
    </div>
  );
}

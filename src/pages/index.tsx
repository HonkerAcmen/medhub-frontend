import { Navigation } from "./_components/_Navigation";
import { Header } from "./_components/_Header";
import { MakeAppointment } from "./OutpatientManagement/MakeAppointment";

export default function Home() {
  return (
    <div className="flex felx-row ">
      <Navigation />
      <div className="w-full">
        <Header />
        <MakeAppointment />
      </div>
    </div>
  );
}

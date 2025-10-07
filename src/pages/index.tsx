import { Tabs } from "@/components/Tabs";
import { Navigation } from "../components/Navigation";

export default function Home() {
  const tabsName: string[] = ["预约挂号", "医生工作站", "门诊收费", "多元支付"];
  const tabsIdx = 0;
  return (
    <div className="flex felx-row ">
      <Navigation />
    </div>
  );
}

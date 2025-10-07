import dynamic from "next/dynamic";
import { useEffect, useState, type CSSProperties } from "react";

const ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });

export type EChartProps = {
  option: any;
  style?: CSSProperties;
  className?: string;
};

export default function EChart({ option, style, className }: EChartProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const finalStyle: CSSProperties = {
    height: 300,
    width: "100%",
    ...(style || {}),
  };

  return (
    <ReactECharts
      option={option}
      style={finalStyle}
      className={className}
      notMerge
      lazyUpdate
    />
  );
}

/*
import { Navigation } from "../components/Navigation";
import EChart from "../components/EChart";

const option = {
  tooltip: { trigger: "axis" },
  legend: { data: ["周数", "销量"] },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: { type: "value" },
  series: [
    {
      type: "bar",
      data: [120, 200, 150, 80, 70, 110, 130],
      itemStyle: { color: "#3b82f6" },
    },
    {
      type: "line",
      data: [50, 100, 40, 180, 20, 66, 78],
      emphasis: {
        scale: true,
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="flex felx-row">
      <Navigation />
      <div style={{ width: "100%", maxWidth: 800 }}>
        <EChart option={option} style={{ height: 360 }} />
      </div>
    </div>
  );
}


*/

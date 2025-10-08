import { ReactNode, FormEvent } from "react";

interface FormProps {
  title: string;
  children: ReactNode;
  widthClass?: string; // tailwindcss样式 eg: w-full, w-[600px]
  heightClass?: string; // tailwindcss样式 eg: h-full, h-[600px]
  extra?: ReactNode; // header右侧自定义区域：操作按钮/状态
  footer?: ReactNode; // 底部操作区：提交/取消按钮等
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

export function Form({
  title,
  children,
  widthClass = "w-full",
  heightClass,
  extra,
  footer,
  onSubmit,
}: FormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={`${widthClass} ${
        heightClass ?? ""
      } bg-white shadow rounded-[8px] flex flex-col p-4`}
    >
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800">{title}</div>
        {extra ? <div className="ml-2">{extra}</div> : null}
      </div>
      <div className="mt-4">{children}</div>
      {footer ? (
        <div className="mt-6 border-t border-gray-100 pt-4 flex justify-end gap-2">
          {footer}
        </div>
      ) : null}
    </form>
  );
}

/*

import { Form } from "@/components/Form";
import { Navigation } from "../components/Navigation";

export default function Home() {
  return (
    <div className="flex felx-row ">
      <Navigation />
      <div className="p-4 flex-1">
        <Form
          title="患者挂号"
          widthClass="w-[720px]"
          extra={
            <span className="text-sm text-gray-500">今日已挂号 128 人</span>
          }
          footer={
            <>
              <button
                type="button"
                className="px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700"
                onClick={() => {
                }}
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-3 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
                >
                  提交挂号
                </button>
              </>
            }
            onSubmit={(e) => {
              e.preventDefault(); // 阻止事件的“默认行为”。在表单提交中，默认行为是刷新/跳转页面提交数据。
              // TODO: 提交逻辑，如调用接口
              console.log("submit register");
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600">患者姓名</label>
                <input
                  className="mt-1 w-full border rounded px-3 py-2 text-sm"
                  placeholder="请输入姓名"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">联系方式</label>
                <input
                  className="mt-1 w-full border rounded px-3 py-2 text-sm"
                  placeholder="请输入手机号"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">就诊科室</label>
                <select className="mt-1 w-full border rounded px-3 py-2 text-sm">
                  <option>内科</option>
                  <option>外科</option>
                  <option>儿科</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600">就诊日期</label>
                <input
                  type="date"
                  className="mt-1 w-full border rounded px-3 py-2 text-sm"
                />
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
  

*/

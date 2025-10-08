import { ReactNode } from "react";

interface ListProps {
  title: string;
  subtitle?: ReactNode; // 可选副标题/描述
  children: ReactNode;
  widthClass?: string; // tailwind css eg: w-100
  heightClass?: string; // tailwind css eg: h-50
  extra?: ReactNode; // 头部右侧区域
  footer?: ReactNode; // 底部操作区域
}

export function List({
  title,
  subtitle,
  widthClass = "w-full",
  heightClass,
  extra,
  children,
  footer,
}: ListProps) {
  return (
    <div
      className={`${widthClass} ${heightClass} bg-white rounded-[8px] shadow p-4 flex flex-col`}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="font-bold text-gray-800 text-xl">{title}</div>
          {subtitle ? (
            <div className="text-sm text-gray-500 mt-1">{subtitle}</div>
          ) : null}
        </div>
        {extra ? <div className="ml-2">{extra}</div> : null}
      </div>

      <div className="mt-4">{children}</div>

      {footer ? (
        <div className="mt-6 border-t border-gray-100 pt-4 flex justify-end gap-2">
          {footer}
        </div>
      ) : null}
    </div>
  );
}

/*

<List
        title="今日挂号列表"
        subtitle="共 128 人"
        widthClass="w-[720px]"
        extra={<button className="text-blue-600">导出</button>}
        footer={
          <>
            <button className="px-3 py-2 rounded bg-gray-100">取消</button>
            <button className="px-3 py-2 rounded bg-blue-600 text-white">
              确定
            </button>
          </>
        }
      >
        {1111}
      </List>

*/

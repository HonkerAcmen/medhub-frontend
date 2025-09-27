export function Navigation() {
    const navMainData = [
        {
            name: '门诊管理',
            child: [{}]
        },
        {
            name: '住院管理',
            child: [{}]
        },
        {
            name: '药品管理',
            child: [{}]
        },
        {
            name: '医疗质量管理',
            child: [{}]
        },
        {
            name: '数据与权限管理',
            child: [{}]
        },
    ]
    const navSettingData = [
        {
            name: '系统设置'
        },
        {
            name: '帮助中心'
        }
    ]

    return (
        <div className="flex items-center flex-col w-50 h-[100vh]  shadow-sm">
            <div className="pt-4 pb-4 pl-8 pr-8 font-bold border-b-1 border-gray-300 text-blue-600">
                Med Hub System
            </div>
            <div className="w-[100%] flex flex-col justify-center items-center border-b-1 border-gray-300 pb-2">
                <span className="text-[11px] font-bold text-gray-400 p-2">主导航</span>
                    <ul className="flex justify-center flex-col items-center w-[80%]">
                        {
                            navMainData.map((item, index) => (
                                <li key={index} className="w-full p-2 hover:bg-blue-50 hover:text-blue-600 cursor-pointer rounded-[5px]">{item.name}</li>
                            ))
                        }
                    </ul>
            </div>
            <div className="w-[100%] flex flex-col justify-center items-center">
                <span className="text-[11px] font-bold text-gray-400 p-2">系统</span>
                <ul className="flex justify-center flex-col items-center w-[80%]">
                    {
                        navSettingData.map((item, index) => (
                            <li key={index} className="w-full p-2 hover:bg-blue-50 hover:text-blue-600 cursor-pointer rounded-[5px]">{item.name}</li>
                        ))
                    }
                </ul>        
            </div>
        </div>  
    )
}
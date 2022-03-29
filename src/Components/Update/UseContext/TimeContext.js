import { useEffect, createContext, useState } from "react"



export const TimePrive = createContext()

export default function TimeContext({ children }) {



    const [dataTime, setDataTime] = useState('')

    useEffect(() => {


        const TheClearTime = setTimeout(() => {
            setDataTime(new Date())

        }, 1000);
        return () => clearTimeout(TheClearTime)


    }, [])






    return <TimePrive.Provider value={{ dataTime }}>
        {children}
    </TimePrive.Provider>
}
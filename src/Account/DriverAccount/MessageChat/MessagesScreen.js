import '../DriverScreen/style.css'
import { format } from 'timeago.js'
import "../DriverScreen/style.css"
import { useRef, useEffect } from 'react'



export default function MessagesScreen(props) {


    const { alMessages, userInfo } = props

    const scrollUseRef = useRef()


    useEffect(() => {

        scrollUseRef.current?.scrollIntoView();
        scrollUseRef.current?.scrollIntoView(false);
        scrollUseRef.current?.scrollIntoView({ block: "end" });
        scrollUseRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        // eslint-disable-next-line
    }, [alMessages])

    // console.log(alMessages)

    return <div className='chat-message'>


        {alMessages?.length > 0 ? alMessages?.map((mess,index) => (
            <div key={index} >

                <div className={mess?.sender === userInfo?._id ? 'server-message' : 'coustom-message'}     >
                    <span className='datename'>{mess?.sender?.username}</span>
                    <span className='datename' ref={scrollUseRef}>
                        {mess?.text}
                    </span>
                    <span className='date'>
                        {format(mess?.date)}
                    </span>
                </div>
            </div>

        )) : <p>not Message</p>}









    </div>
}

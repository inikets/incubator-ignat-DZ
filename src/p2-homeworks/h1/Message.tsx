import React from 'react'
import i from './Message.module.css'


type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}



function Message(props: MessageType) {
    return (
        <div className={i.messages}>
            <img src={props.avatar}/>
            <div className={i.message}>
                <div>
                    {props.name}
                </div>
                <div>{props.message}</div>
                <div className={i.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message

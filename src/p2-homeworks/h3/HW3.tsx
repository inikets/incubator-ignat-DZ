import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import AlternativeGreeting from "./AlternativeGreeting";

// types
export type UserType = {
    _id: any // need to fix any
    name: any // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<any>([]) // need to fix any
    console.log(users)

    const addUserCallback = (n: any) => {// need to fix any
        let newUser = {id: v1(), name: n}
        setUsers([newUser, ...users]) // need to fix
    }

    return (
        <div>
            <hr/>
            Homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            <AlternativeGreeting users={users}/>
            <hr/>
        </div>
    )
}

export default HW3

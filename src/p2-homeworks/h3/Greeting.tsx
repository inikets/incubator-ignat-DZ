import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: any // need to fix any
    setNameCallback: any // need to fix any
    addUser: any // need to fix any
    error: any // need to fix any
    totalUsers: any // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error !== ''? s.error : s.ok// need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={(e) => setNameCallback(e.currentTarget.value)} className={inputClass}/>
            <button onClick={addUser}>add</button>
            <div>{error}</div>
            <div> Количество пользователей уже: {totalUsers}</div>
        </div>
    )
}

export default Greeting

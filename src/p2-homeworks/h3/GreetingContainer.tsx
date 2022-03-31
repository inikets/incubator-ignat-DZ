import React, {useState} from 'react'
import Greeting from './Greeting'
import s from "./Greeting.module.css";

type GreetingContainerPropsType = {
    users: any // need to fix any
    addUserCallback: any // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<any>('') // need to fix any
    const [error, setError] = useState<any>('') // need to fix any

    const setNameCallback = (e: string) => { // need to fix any
        setName(e)
        // need to fix
    }


    const addUser = () => {
        if (name.trim() === '') {
            setError("Ошибка! Пожалуйста введите ваше имя в корректной форме:)")
        } else if (name) {
        // alert(`Hello ${name} !`)
        addUserCallback(name)
        setName('')
        setError('')
        }

    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer

import React, {useState} from "react";

type PropsType = {
    users: Array<any>
}

type ArrayType = {
    id: string,
    name: string
}

function AlternativeGreeting(props: PropsType) {

    const [usersL, setUsersL] = useState(props.users)


    const showUsers = () => {
        let list = props.users.map((el, index) => {
            return (
                <li key={index}>{el.name}</li>
            )
        })
        setUsersL(list)
    }



    return (
        <div>
            <button onClick={showUsers}>Показать список пользователей</button>
            {/*<span><button onClick={hideUsers}>Скрыть список пользователей</button></span>*/}
            <ol>
                {usersL}
            </ol>
        </div>
    );
}

export default AlternativeGreeting;

import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import i from './HW10.module.css'

function HW10() {
    // useSelector, useDispatch
    // const loading = false
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType>(state => state.loading.isLoading)
    console.log(loading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        const toggle = () => {
            dispatch(loadingAC(false))
        }
        setTimeout(toggle, 3000)
    };

    return (
        <div>
            <hr/>
            Homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={i.gif}><img src={'https://acegif.com/wp-content/uploads/loading-11.gif'}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10

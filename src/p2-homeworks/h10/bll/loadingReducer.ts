const initState = {
    isLoading: false
}

export type stateInitType = {
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: loadingACType): stateInitType => { // fix any
    switch (action.type) {
        case 'CHANGE': {
            return {...state, isLoading: action.upDate}
        }
        default: return state
    }
}

type loadingACType = {
    type: string,
    upDate:boolean
}

export const loadingAC = (upDate: boolean): loadingACType => {
    return {type: 'CHANGE',upDate}
}
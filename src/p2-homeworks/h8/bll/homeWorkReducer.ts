export const homeWorkReducer = (state: Array<stateType>, action: any): Array<stateType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                const stateCopy = state.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                })
                return [...stateCopy]
            } else if (action.payload === 'down') {
                const stateCopy = state.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (a.name < b.name) {
                        return 1;
                    }
                    return 0;
                })
                return [...stateCopy]
            }

            return state
        }
        case 'check': {
            return state.filter(i => i.age >= 18)


        }
        default:
            return state
    }
}

export type stateType = {
    _id: number,
    name: string,
    age: number
}

// type actionType = actionTypeUP | actionTypeDown | actionTypeCheck
//
// type actionTypeUP = {
//     type: string,
//     payload: string
// }
// type actionTypeDown = {
//     type: string,
//     payload: string
// }
//
// type actionTypeCheck = {
//     type: string,
//     payload?: string
// }

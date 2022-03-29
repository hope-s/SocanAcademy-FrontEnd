export interface state {
    counter: number,
    name: string
}

const initState : state = {
    counter : 1,
    name: "hope"
}

const reducer = (state : state = initState , action : any) => {
    switch (action.type) {
        case "INCREAMENT":
        return {...state, counter: state.counter + 1, name: "two"}
        case "DECREAMENT":
        return {...state, counter: state.counter - 1, name: "hope"}   
        default: return state
    }
}

export default reducer
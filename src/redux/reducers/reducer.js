
let initialState = {
    users: [
        {
            name: 'David',
            age: 18
        }
    ]
}

function reducerFunc(prevstate = initialState, action) {
    if (action.type === 'ADD') {
        return {
            ...prevstate,
            users: [
                ...prevstate.users,
                action.user
            ]
        }
    }

    return prevstate
}

export default reducerFunc;

function addUser({name, gmail, password}){
    return {
        type: 'ADD',
        user: {
            name,
            gmail,
            password
        }
    }
}

export default addUser;
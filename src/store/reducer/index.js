const INITIAL_STATE = {
    users: [{
        name: "ghous",
        email: "aliraj#gmail.com"
    } ,
    {
        name: "ghouaads",
        email: "alirasadsj#gmail.com"
    }
]
}
export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case "SETDATA":
            return ({
                ...state,

                users:   [...state.users , action.data ]
            })
 
default : 
return state;

    }

}
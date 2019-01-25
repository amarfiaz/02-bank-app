export default (state, action) => {
    console.log(action);

    switch (action.type) {
        case "WITHDRAW":
            return {
                ...state,
                amount: action.amount
            };

        default:
            return state;
    }
};
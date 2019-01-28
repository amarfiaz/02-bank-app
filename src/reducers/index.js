export default (state, action) => {
    console.log(action, 'action');
    console.log(state, 'state');


    switch (action.type) {
        case "WITHDRAW_MONEY":
            return {
                ...state,
                amount: action.amount
            };
        case "DEPOSIT_MONEY":
            return {
                // do something
            };
        default:
            return state;
    }
};
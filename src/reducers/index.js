export default (state, action) => {
    console.log(action, 'action');
    console.log(state, 'state');

    const newAmount = (state.amount - action.amount);
    console.log(newAmount, 'newAmount');

    switch (action.type) {
        case "WITHDRAW_MONEY":
            return {
                ...state,
                amount: newAmount
            };
        case "DEPOSIT_MONEY":
            return {
                // do something
            };
        default:
            return state;
    }
};
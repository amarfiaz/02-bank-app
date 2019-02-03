// export const WITHDRAW_MONEY = 'WITHDRAW_MONEY';

export function bankTransaction(number) {
    return {
        type: "WITHDRAW_MONEY",
        amount: number
    }
}

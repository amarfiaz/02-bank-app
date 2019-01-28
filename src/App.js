import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";
import {store} from './store';

class App extends Component {

  render() {
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {store.getState().username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(store.getState().amount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={dispatchBtnAction}>WITHDRAW $10,000</button>
          <button data-amount="5000" onClick={dispatchBtnAction}>WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway">
            <button data-amount={store.getState().amount} onClick={dispatchBtnAction}>Give away all your cash to charity</button>
        </p>
      </div>
    );
  }
}

function dispatchBtnAction(e) {
    const amount = e.target.dataset.amount;
    console.log(amount, 'ama');
    store.dispatch(bankTransaction(amount));
}

function bankTransaction (number) {
    return {
        type: "WITHDRAW_MONEY",
        amount: number
    }
}

export default App;

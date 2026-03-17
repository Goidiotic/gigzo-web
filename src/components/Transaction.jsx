import React from "react";
import '../css/component.css'
import txnHistoryIcon from '../icons/icon-order-history.png'

function TransactionComponent({ transaction }) {
    if (!transaction) return null;

    const txnType = {
        buy: 'Buy',
        sell: 'Sell',
        'buy-reward': 'Buy reward',
        'sell-reward': 'Sell Reward',
        'platform-reward': 'Bonus',
        refund: 'Refund',
        reverse: 'Reverse',
        deduction: 'Deduction',
        transfer: 'Transfer',
        fine: 'Penalty',
        recharge: 'Recharge',
        receive: "Reveived"

    }

    return (
        <div className="transaction-card-view">
            <div className="transaction-icon-container">
                <img className="transaction-icon" src={txnHistoryIcon} alt="History Icon"/>
            </div>
            <div className="transaction-details-container">
                <div className="transaction-details-type">{txnType[transaction.transactionType]}</div>
                <div className="transaction-details-date">{transaction.date} | {transaction.time}</div>
                <div className="transaction-details-orderid">{transaction.transactionId || transaction.reference}</div>
            </div>
            <div className="transaction-amount-status-container">
                <div className="transaction-details-amount">₹{transaction.amount}</div>
                <div className={`transaction-details-status ${transaction.status === 'completed' ? 'colorPrimary' : 'colorWarning'}`}>
                    {transaction.status}
                </div>
            </div>
        </div>
    );
}


export default TransactionComponent;
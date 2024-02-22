/* eslint-disable no-unused-vars */
import React from 'react'
import transactions from '../transactions.json'
import css from './TransactionHistory.module.css'

const TransactionHistory = () => {
  return (
    <table className={css.transactionsTable}>
        <thead>
            <tr>
                <th className={css.transactionTitle}>Type</th>
                <th className={css.transactionTitle}>Amount</th>
                <th className={css.transactionTitle}>Currency</th>
            </tr>
        </thead>
    
        <tbody className={css.transactionInfo}>
            {transactions.map((transaction) => {
                return (
                <tr key={transaction.id}>
                    <td className={css.transactionDescription}>{transaction.type}</td>
                    <td className={css.transactionDescription}>{transaction.amount}</td>
                    <td className={css.transactionDescription}>{transaction.currency}</td>
                </tr>
                )
            })}
        </tbody>
    </table>
  )
}

export default TransactionHistory
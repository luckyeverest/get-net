import React from 'react';
import '../App.css';

export const Bill = () => {
    return (
        <div className="bill">
            <h2>bill</h2>
            <table className="iksweb">
                <tbody>
                    <tr>
                        <td className="name_adress">adress</td>
                        <td className="name_money">money</td>
                        <td className="name_pay">pay</td>
                    </tr>
                    <tr>
                        <td className="adress">lenina 1</td>
                        <td className="money">99</td>
                        <td className="pay_one">no pay
                    <a href="#">pay</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="adress">popova 1</td>
                        <td className="money">99</td>
                        <td className="pay_two">no pay
                    <a href="#">pay</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


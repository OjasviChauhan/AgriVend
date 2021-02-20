import React from 'react'
import './BuyorSell.css'

import { useHistory } from 'react-router-dom'

const BuyorSell = () => {

    const history = useHistory();

    const buy = () => {
        history.push('/buy')
    }

    const sell = () => {
        history.push('/sell')
    }

    return (
        <div className='buyorsell'>

            <div className="buyorsell__heading">
                <h1 className='buyorsell__h1'>Main Page</h1>
            </div>

            <div className="buyorsell__buttons">
                <button onClick={buy} className='buyorsell__buy'>Buy Crops</button>

                <button onClick={sell} className='buyorsell__sell'>Sell Crops</button>
            </div>

            <div className="buyorsell__about">

                <h3>About</h3>
                <p>
                    AgriVend – A Webapp through which farmers can sell crops to and buy equipment directly from other merchants without any third party mediation. To avoid price inflation and maintain regularised selling , the app validates any purchase through the use of MSP for pricing and the buyer must adhere to it. The app also incorporates merchants who want to sell their faming equipment and buy vice-versa which help both parties avoid extra middleman costs and helps in creating of a completely self – independent virtual market space to empower both the buyer and seller.
                </p>
            </div>
        </div>
    )
}

export default BuyorSell

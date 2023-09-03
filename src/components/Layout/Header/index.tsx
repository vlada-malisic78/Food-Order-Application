import React from 'react'
import image from '../../../assets/meals.jpg'
import CartIcon from '../../../assets/svg/cartIcon'

import Button from '../../Button'

type Props = {}

export default function Header() {
    return (
        <React.Fragment>
            <header className='header'>
                <h1>React Meals</h1>
                <Button
                    text="Your card"
                    onClick={() => { }}
                    style="button"
                    type="button"
                    icon={<CartIcon />}
                >
                    <span className='value'>3</span>
                </Button>
            </header>
            <div className='main-image'>
                <img src={image} alt="main-food-image" />
            </div>
        </React.Fragment>
    )
}
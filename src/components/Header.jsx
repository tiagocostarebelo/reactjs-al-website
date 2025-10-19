import React from 'react'
import Button from './Button';
import { Link } from 'react-router';

const Header = () => {
    return (
        <>
            <h1 className="text-center font-bold text-3xl pt-6 pb-2">Anonymous Lover</h1>
            <header className="text-center md:flex md:items-center md:justify-between px-6 py-2 md:px-8 md:py-4 space-y-4">
                <nav className="space-x-3">
                    <Link to="/about">About</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/contact">Contacts</Link>
                </nav>

                <Button btnText="Go To Shop" href="https://ebay.com" />



            </header>

        </>
    )
}

export default Header
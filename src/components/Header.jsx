import React from 'react'
import Button from './Button';
import { NavLink } from 'react-router';

const Header = () => {
    const baseClasses = 'transition hover:text-primary';
    const activeClasses = 'text-primary font-semibold';

    return (
        <header className="bg-gray-600 border-b border-gray-700 shadow-md sticky top-0 z-50">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <NavLink to="/" className="flex items-center text-lg font-bold text-primary">
                    <span className="font-heading">Anonymous Lover</span>
                </NavLink>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="space-x-4 text-sm text-gray-300">
                        <NavLink className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/about">About</NavLink>
                        <NavLink className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/products">Products</NavLink>
                        <NavLink className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/contact">Contact</NavLink>
                    </div>

                    <Button btnText="Go To Shop" href="https://ebay.com" />
                </div>


            </nav>
        </header>
    )
}

export default Header
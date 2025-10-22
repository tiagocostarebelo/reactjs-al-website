import { useState } from 'react'
import Button from './Button';
import { NavLink } from 'react-router';
import { FaTimes, FaBars } from 'react-icons/fa';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const baseClasses = 'transition hover:text-text';
    const activeClasses = 'text-text font-semibold';

    return (
        <nav className="bg-background border-b border-background shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
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

                    <Button btnText="Shop" href="https://ebay.com" />
                </div>

                {/* Hamburguer toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-primary text-xl cursor-pointer" title="Menu">
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>


            </div>

            {/* Mobile nav */}
            {
                menuOpen && (
                    <div className="md:hidden bg-background border-top border-background px-6 py-4 space-y-2 space-x-4 text-center">
                        <NavLink onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/">Home</NavLink>
                        <NavLink onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/about">About</NavLink>
                        <NavLink onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/products">Products</NavLink>
                        <NavLink onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? activeClasses : baseClasses} to="/contact">Contact</NavLink>
                    </div>
                )
            }
        </nav>
    )
}

export default Header
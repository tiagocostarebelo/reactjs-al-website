import React from 'react'

const Button = ({ btnText, href, onClick }) => {
    const baseClasses = "inline-block px-6 py-1 rounded-md font-semibold text-primary font-heading bg-secondary hover:bg-primary hover:text-secondary transition";

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={baseClasses}
            >{btnText}</a>
        )
    }

    return (
        <button onClick={onClick} className={baseClasses}>
            {btnText}
        </button>
    )
}

export default Button
import React from 'react';

const Footer = () => {

    return (
        <footer className="fixed bottom-0 z-50 bg-dark shadow-lg w-full px-3 py-5 grid grid-cols-3 items-center justify-items-center md:hidden">
            <a href="/" className="inline-block px-7 sm:text-sm text-xs">Projects</a>
            <a href="/" className="inline-block px-7 sm:text-sm text-xs">Writings</a>
            <a href="/" className="inline-block px-7 sm:text-sm text-xs">Contact</a>
        </footer>
    )

}

export default Footer
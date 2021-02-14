import React from 'react';

const Footer = () => {

    return (
        <footer className="fixed bottom-0 z-50 bg-dark shadow-lg w-full px-3 py-5 grid grid-cols-3 items-center justify-items-center">
            <a href="/" className="inline-block px-7 text-xl">Projects</a>
            <a href="/" className="inline-block px-7 text-xl">Writings</a>
            <a href="/" className="inline-block px-7 text-xl">Contact</a>
        </footer>
    )

}

export default Footer
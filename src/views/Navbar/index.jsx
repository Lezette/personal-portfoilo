import React from 'react';

const Navbar = () => {

    return (
        <nav className="w-full py-8 px-5 sm:px-10 md:px-16 grid grid-cols-2 items-center">
            <div className="name text-3xl sm:text-5xl md:text-7xl"><a href="https://ilizette.netlify.app/">iLizette</a></div>
            <div className="md:block hidden text-center">
                <a href="/" className="inline-block px-7 text-xl">Projects</a>
                <a href="/" className="inline-block px-7 text-xl">Writings</a>
                <a href="/" className="inline-block px-7 text-xl">Contact</a>
            </div>
        </nav>
    )

}

export default Navbar
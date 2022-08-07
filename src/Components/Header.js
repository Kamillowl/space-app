import { useState } from 'react';
import './Header.scss';

function Header() {
    const path = window.location.pathname;
    const [animations, setAnimations] = useState(true);

    return (
        <header className={`generalheader ${animations ? 'animations-on' : 'animations-off'}`}>
            <h1>Welcome to space</h1>
            <div className='space-styling'>
                <span className='stripe'></span>
                <span className='stripe'></span>
                <span className='stripe'></span>
                <span className='stripe'></span>
            </div>
            <nav>
                <a className={path === '/' ? 'current-page' : ''} href={"/"}>
                    UU
                </a>
                <a className={path === '/dogPage' ? 'current-page' : ''} href={"/dogPage"}>
                    RandomDog
                </a>
                <a className={path === '/about-me' ? 'current-page' : ''} href={"/about-me"}>
                    About me
                </a>
                <button
                    onClick={() => setAnimations(!animations)}
                    className="animations-btn"
                    aria-hidden={true}
                >
                    Animasjon {animations ? 'av' : 'på'}
                </button>
            </nav>
        </header>
    );
}

export default Header;

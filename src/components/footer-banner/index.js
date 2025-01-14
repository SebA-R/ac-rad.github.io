import React from 'react';
import { useNavigate } from 'react-router-dom';
function NavButton({ linkTo, children }) {
    const navigate = useNavigate();
    return (
        <>
            <button className="text-green-500" onClick={() => navigate(linkTo)}>
                {children}
            </button>
        </>
    );
}
const Footer = () => {
    return (
        <footer>
            <section>footer</section>
            <NavButton linkTo="/about">footer button</NavButton>
        </footer>
    );
};

export default Footer;

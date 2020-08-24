import React from 'react'

import FooterIcons from '../footerIcon/FooterIcons';
import './Footer.css'

const Footer = () => {
    return (
        <footer className = "footer">  
            <FooterIcons/>
            <p >&copy;2020 Hilltop Coder</p>
        </footer>
    )
}

export default Footer
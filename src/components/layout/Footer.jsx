import React from 'react';
import logoBeige from "../../Logo-MH-Balloon-Beige-Text.png";
import { Icon } from '@iconify/react';
import instagramIcon from '@iconify/icons-uil/instagram';
import facebookSquare from '@iconify/icons-la/facebook-square';
import pinterestSquare from '@iconify/icons-jam/pinterest-square';
import Paragraph from './Paragraph';

function Footer() {
    return (
        <>
            <div>
                <img src={logoBeige} className="Secondary-logo" alt='logo'></img>
                <Icon icon={instagramIcon} />
                <Icon icon={facebookSquare} />
                <Icon icon={pinterestSquare} />
            </div>
            <div>
                <Paragraph content="Phone number: +47 9999.9999"></Paragraph>
                <Paragraph content="E-mail:" link="mailto:mafaldaholthe@gmail.com" textDisplay="mafaldaholthe@gmail.com"></Paragraph>
            </div>
            <div>
                <Paragraph content="© Mafalda Holthe Styling"></Paragraph>
            </div>
        </>
    )
}

export default Footer
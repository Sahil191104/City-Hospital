import React, { useState } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Button } from './Styles';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 10) {
            setVisible(true)
        }
        else if (scrolled <= 10) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button style={{ display: visible ? 'inline' : 'none' }}>
            <KeyboardDoubleArrowUpIcon onClick={scrollToTop} style={{ paddingTop: '12px', fontSize: '44px', color: '#fff' }} />
        </Button>
    );
}

export default ScrollButton;
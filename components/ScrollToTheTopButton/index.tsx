'use client'
import Link from "next/link";
import React, {useState} from "react";

interface Props {
    className: string
}

const ScrollToTheTopButton: React.FC<Props> = (props) => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        // <Link onClick={scrollToTop}                 style={{display: visible ? 'inline' : 'none'}}/>

        <Link href='#'
              className={props.className}
              onClick={scrollToTop}
              style={{display: visible ? 'inline' : 'none'}}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.00195312" width="40" height="40" rx="20" fill="#FCFBFE"/>
                <path d="M19.5 28.002L19.5 11.502M19.5 11.502L12.75 18.252M19.5 11.502L26.25 18.252"
                      stroke="#7F7C83" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </Link>
    );
}


export default ScrollToTheTopButton
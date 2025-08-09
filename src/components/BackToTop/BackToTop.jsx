import { useState, useEffect } from 'react';

import './BackToTop.css';

const BackToTop = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY)
        });
        return() => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY)
            })
        }
    }, [scroll]);

    const backToTop = () => {
        window.scrollTo(0,0)
    }

    return(
        <a 
        href="#" 
        className={`back-to-top d-flex align-items-center justify-content-center
        ${scroll > 100 ? 'active' : undefined}`}
        onClick={backToTop}
        >
            <i className="bi bi-arrow-up-short"></i>
        </a>
    )
}

export default BackToTop;
import React, { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css';

const ScrollReveal = ({ children, className = '', threshold = 0.1 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, we can stop observing if we only want it to animate once
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold });

        const currentElement = domRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold]);

    return (
        <div
            className={`scroll-reveal ${isVisible ? 'is-visible' : ''} ${className}`}
            ref={domRef}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;

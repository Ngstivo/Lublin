import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';

const Header = () => {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="container header-content">
                <Link to="/" className="logo">
                    <img
                        src="/lublin-logo.png"
                        alt="Lublin Logo"
                        className="logo-image"
                    />
                </Link>

                {/* Language switcher for mobile - outside nav */}
                <div className="mobile-lang-switcher">
                    <LanguageSwitcher />
                </div>

                <nav className={`desktop-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.home')}</Link>
                    <Link to="/news" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.news')}</Link>
                    <Link to="/services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.services')}</Link>
                    <Link to="/tourist" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.tourist')}</Link>
                    <Link to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.contact')}</Link>

                    {/* Language switcher for desktop - inside nav */}
                    <div className="desktop-lang-switcher">
                        <LanguageSwitcher />
                    </div>
                    <button className="neu-btn nav-btn">{t('nav.login')}</button>
                </nav>

                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="hamburger"></span>
                </button>
            </div>
        </header>
    );
};

export default Header;

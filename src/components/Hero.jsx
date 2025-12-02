import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <div className="hero-bg">
                {/* Placeholder for actual city image */}
                <div className="hero-overlay"></div>
            </div>

            <div className="container hero-content">
                <div className="glass-panel hero-card">
                    <h1 className="hero-title text-gradient">
                        {t('hero.title')}
                    </h1>
                    <p className="hero-subtitle">
                        {t('hero.subtitle')}
                    </p>
                    <div className="hero-actions">
                        <button className="neu-btn primary">{t('hero.forTourists')}</button>
                        <button className="neu-btn secondary">{t('hero.forResidents')}</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

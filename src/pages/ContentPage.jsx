import React from 'react';
import Card from '../components/Card';
import ScrollReveal from '../components/ScrollReveal';
import './ContentPage.css';

const ContentPage = ({ title, subtitle, sections }) => {
    return (
        <div className="content-page">
            <section className="page-hero glass-panel">
                <div className="container">
                    <ScrollReveal>
                        <h1 className="page-title text-gradient">{title}</h1>
                        {subtitle && <p className="page-subtitle">{subtitle}</p>}
                    </ScrollReveal>
                </div>
            </section>

            <div className="container section-padding">
                {sections && sections.map((section, index) => (
                    <section key={index} className="content-section">
                        <ScrollReveal>
                            {section.heading && <h2 className="content-heading">{section.heading}</h2>}
                            {section.text && <p className="content-text">{section.text}</p>}
                        </ScrollReveal>
                        {section.cards && (
                            <div className="card-grid">
                                {section.cards.map((card, idx) => (
                                    <ScrollReveal key={idx} className={`scroll-reveal-delay-${(idx % 3 + 1) * 100}`}>
                                        <Card {...card} />
                                    </ScrollReveal>
                                ))}
                            </div>
                        )}
                    </section>
                ))}
            </div>
        </div>
    );
};

export default ContentPage;

import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';
import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="contact-page">
            <section className="page-hero glass-panel">
                <div className="container">
                    <ScrollReveal>
                        <h1 className="page-title text-gradient">{t('contactPage.title')}</h1>
                        <p className="page-subtitle">{t('contactPage.subtitle')}</p>
                    </ScrollReveal>
                </div>
            </section>

            <div className="container section-padding">
                <div className="contact-grid">
                    <ScrollReveal className="contact-info">
                        <h2 className="content-heading">{t('contactPage.cityHall')}</h2>

                        <div className="info-item">
                            <div className="info-icon">📍</div>
                            <div>
                                <h4>{t('contactPage.address')}</h4>
                                <p dangerouslySetInnerHTML={{ __html: t('contactPage.addressValue').replace(',', '<br />') }}></p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">📞</div>
                            <div>
                                <h4>{t('contactPage.phone')}</h4>
                                <p>+48 81 466 60 00</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">✉️</div>
                            <div>
                                <h4>{t('contactPage.email')}</h4>
                                <p>info@lublin.eu</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">🕐</div>
                            <div>
                                <h4>{t('contactPage.officeHours')}</h4>
                                <p>{t('contactPage.officeHoursValue')}</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="contact-form-wrapper scroll-reveal-delay-200">
                        <form className="contact-form glass-panel">
                            <h3 className="form-title">{t('contactPage.formTitle')}</h3>

                            <div className="form-group">
                                <label htmlFor="name">{t('contactPage.name')}</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-input neu-panel"
                                    placeholder={t('contactPage.namePlaceholder')}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">{t('contactPage.emailLabel')}</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-input neu-panel"
                                    placeholder={t('contactPage.emailPlaceholder')}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">{t('contactPage.subject')}</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="form-input neu-panel"
                                    placeholder={t('contactPage.subjectPlaceholder')}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">{t('contactPage.message')}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="form-input neu-panel"
                                    placeholder={t('contactPage.messagePlaceholder')}
                                ></textarea>
                            </div>

                            <button type="submit" className="neu-btn primary" style={{ width: '100%' }}>
                                {t('contactPage.sendButton')}
                            </button>
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

export default Contact;

import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer glass-panel">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3 className="footer-heading">{t('footer.cityHeading')}</h3>
                    <p className="footer-text">
                        {t('footer.cityText')}
                    </p>
                </div>

                <div className="footer-section">
                    <h4 className="footer-subheading">{t('footer.quickLinks')}</h4>
                    <ul className="footer-links">
                        <li><a href="/services">{t('footer.publicServices')}</a></li>
                        <li><a href="/news">{t('footer.newsEvents')}</a></li>
                        <li><a href="/tourist">{t('footer.touristInfo')}</a></li>
                        <li><a href="/contact">{t('footer.contactUs')}</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-subheading">{t('footer.contact')}</h4>
                    <ul className="footer-links">
                        <li>📍 {t('footer.address')}: Plac Łokietka 1, 20-109 Lublin</li>
                        <li>📞 {t('footer.phone')}: +48 81 466 60 00</li>
                        <li>✉️ {t('footer.email')}: info@lublin.eu</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-subheading">{t('footer.followUs')}</h4>
                    <div className="footer-social">
                        <a href="#" className="social-link">Facebook</a>
                        <a href="#" className="social-link">Twitter</a>
                        <a href="#" className="social-link">Instagram</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2025 {t('footer.cityHeading')}. {t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

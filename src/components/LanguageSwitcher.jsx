import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'de', name: 'German' },
        { code: 'pl', name: 'Polish' },
        { code: 'cs', name: 'Czech' },
        { code: 'es', name: 'Spanish' },
        { code: 'fr', name: 'French' },
        { code: 'uk', name: 'Ukrainian' },
        { code: 'ru', name: 'Russian' },
        { code: 'it', name: 'Italian' }
    ];

    const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

    const changeLanguage = (langCode) => {
        i18n.changeLanguage(langCode);
    };

    return (
        <div className="language-switcher">
            <button className="current-language neu-btn">
                <span className="lang-name">{currentLang.name}</span>
            </button>

            <div className="language-dropdown glass-panel">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`language-option ${i18n.language === lang.code ? 'active' : ''}`}
                    >
                        <span className="lang-name">{lang.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageSwitcher;

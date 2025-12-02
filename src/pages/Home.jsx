import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import Card from '../components/Card';
import './Home.css';

const Home = () => {
    const { t } = useTranslation();

    const newsData = [
        {
            title: t('news.news1Title'),
            description: t('news.news1Desc'),
            date: "December 1, 2025",
            category: t('news.culture'),
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2070&auto=format&fit=crop",
            link: "#"
        },
        {
            title: t('news.news2Title'),
            description: t('news.news2Desc'),
            date: "November 28, 2025",
            category: t('news.transport'),
            image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2070&auto=format&fit=crop",
            link: "#"
        },
        {
            title: t('news.news3Title'),
            description: t('news.news3Desc'),
            date: "November 25, 2025",
            category: t('news.innovation'),
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
            link: "#"
        }
    ];

    const services = [
        {
            title: t('services.service1Title'),
            description: t('services.service1Desc'),
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
            link: "/services"
        },
        {
            title: t('services.service2Title'),
            description: t('services.service2Desc'),
            image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
            link: "/tourist"
        },
        {
            title: t('services.service3Title'),
            description: t('services.service3Desc'),
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
            link: "/business"
        }
    ];

    return (
        <div className="home">
            <Hero />

            <section className="section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title text-gradient">{t('home.latestNews')}</h2>
                        <p className="section-subtitle">{t('home.newsSubtitle')}</p>
                    </div>
                    <div className="card-grid">
                        {newsData.map((news, index) => (
                            <Card key={index} {...news} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding" style={{ background: 'rgba(255,255,255,0.3)' }}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title text-gradient">{t('home.quickAccess')}</h2>
                        <p className="section-subtitle">{t('home.servicesSubtitle')}</p>
                    </div>
                    <div className="card-grid">
                        {services.map((service, index) => (
                            <Card key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

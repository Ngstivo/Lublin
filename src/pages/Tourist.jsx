import React from 'react';
import { useTranslation } from 'react-i18next';
import ContentPage from './ContentPage';
import ScrollReveal from '../components/ScrollReveal';

const Tourist = () => {
    const { t } = useTranslation();

    const touristSections = [
        {
            heading: t('touristPage.discoverHeading'),
            text: t('touristPage.discoverText'),
            cards: [
                {
                    title: t('touristPage.oldTown'),
                    description: t('touristPage.oldTownDesc'),
                    image: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?q=80&w=2070&auto=format&fit=crop",
                    category: t('touristPage.historic')
                },
                {
                    title: t('touristPage.culturalEvents'),
                    description: t('touristPage.culturalEventsDesc'),
                    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
                    category: t('touristPage.culture')
                },
                {
                    title: t('touristPage.localCuisine'),
                    description: t('touristPage.localCuisineDesc'),
                    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop",
                    category: t('touristPage.food')
                }
            ]
        },
        {
            heading: t('touristPage.practicalHeading'),
            text: t('touristPage.practicalText'),
            cards: [
                {
                    title: t('touristPage.gettingAround'),
                    description: t('touristPage.gettingAroundDesc'),
                    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop"
                },
                {
                    title: t('touristPage.accommodation'),
                    description: t('touristPage.accommodationDesc'),
                    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    title: t('touristPage.visitorCenter'),
                    description: t('touristPage.visitorCenterDesc'),
                    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
                }
            ]
        }
    ];

    return (
        <ContentPage
            title={t('touristPage.title')}
            subtitle={t('touristPage.subtitle')}
            sections={touristSections}
        />
    );
};

export default Tourist;

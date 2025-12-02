import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Chatbot.css';

const Chatbot = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    // Initialize greeting message when component mounts or language changes
    useEffect(() => {
        setMessages([
            { text: t('chatbot.greeting'), sender: 'bot' }
        ]);
    }, [t]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const lublinKnowledge = {
        restaurants: [
            "Mandragora - Traditional Polish cuisine in a medieval cellar",
            "Sielsko Anielsko - Modern Polish food with local ingredients",
            "Whiskey in the Jar - Irish pub with great steaks",
            "Czarcia Łapa - Gothic-themed restaurant in the Old Town",
            "Manufaktura Restaurant - Fine dining with European flavors"
        ],
        attractions: [
            "Lublin Castle - Medieval fortress with museum and chapel",
            "Old Town - Charming cobblestone streets and historic buildings",
            "Trinitarian Tower - Panoramic views from the observation deck",
            "Majdanek Museum - Important WWII memorial site",
            "Krakowskie Przedmieście - Main promenade with cafes and shops"
        ],
        culture: [
            "Centre for the Meeting of Cultures - Modern cultural venue",
            "Grodzka Gate Theatre - Contemporary theater center",
            "Literary Museum - Dedicated to Polish writers",
            "Lublin Philharmonic - Classical music concerts",
            "Street Art - Murals throughout the city"
        ],
        nightlife: [
            "Grodzka Street - Bars and clubs in historic cellars",
            "Hades Club - Popular dance club",
            "Szeląg Pub - Craft beer pub with local brews",
            "Coffee Karma - Late night coffee and desserts"
        ],
        shopping: [
            "Lublin Plaza - Modern shopping mall",
            "Old Town Market - Local crafts and souvenirs",
            "Tarasy Zamkowe - Shopping center near the castle"
        ]
    };

    const getBotResponse = (userMessage) => {
        const msg = userMessage.toLowerCase();

        if (msg.includes('restaurant') || msg.includes('food') || msg.includes('eat')) {
            return `🍽️ Here are some great restaurants in Lublin:\n\n${lublinKnowledge.restaurants.join('\n')}`;
        } else if (msg.includes('attraction') || msg.includes('visit') || msg.includes('see') || msg.includes('place')) {
            return `🏰 Top attractions in Lublin:\n\n${lublinKnowledge.attractions.join('\n')}`;
        } else if (msg.includes('culture') || msg.includes('museum') || msg.includes('art')) {
            return `🎭 Cultural venues in Lublin:\n\n${lublinKnowledge.culture.join('\n')}`;
        } else if (msg.includes('night') || msg.includes('bar') || msg.includes('club') || msg.includes('drink')) {
            return `🍻 Nightlife in Lublin:\n\n${lublinKnowledge.nightlife.join('\n')}`;
        } else if (msg.includes('shop') || msg.includes('mall') || msg.includes('buy')) {
            return `🛍️ Shopping in Lublin:\n\n${lublinKnowledge.shopping.join('\n')}`;
        } else if (msg.includes('hello') || msg.includes('hi')) {
            return "Hello! I can help you discover Lublin. Ask me about restaurants, attractions, culture, nightlife, or shopping!";
        } else {
            return "I can help you with:\n• Restaurants & Food\n• Tourist Attractions\n• Cultural Venues\n• Nightlife & Bars\n• Shopping\n\nWhat would you like to know?";
        }
    };

    const handleSend = () => {
        if (input.trim() === '') return;

        const userMessage = { text: input, sender: 'user' };
        setMessages([...messages, userMessage]);

        setTimeout(() => {
            const botResponse = { text: getBotResponse(input), sender: 'bot' };
            setMessages(prev => [...prev, botResponse]);
        }, 500);

        setInput('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
            <button
                className="chatbot-toggle neu-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle chatbot"
            >
                {isOpen ? '✕' : '💬'} {!isOpen && t('chatbot.buttonText')}
            </button>

            {isOpen && (
                <div className="chatbot-window glass-panel">
                    <div className="chatbot-header">
                        <h4>Lublin Guide 🏰</h4>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                <div className="message-bubble">
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chatbot-input">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder={t('chatbot.askAbout')}
                            className="neu-panel"
                        />
                        <button onClick={handleSend} className="neu-btn primary">
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;

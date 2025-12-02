import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    // English (Germanic)
    en: {
        translation: {
            nav: {
                home: "Home",
                news: "News",
                services: "Services",
                tourist: "Tourist Info",
                contact: "Contact",
                login: "Login"
            },
            hero: {
                title: "Discover Lublin",
                subtitle: "City of Inspiration. Experience the history, culture, and modern life of Eastern Poland's capital.",
                forTourists: "For Tourists",
                forResidents: "For Residents"
            },
            home: {
                latestNews: "Latest News",
                newsSubtitle: "Stay updated with recent developments in our city",
                quickAccess: "Quick Access",
                servicesSubtitle: "Essential services and information portals"
            },
            footer: {
                cityHeading: "City of Lublin",
                cityText: "Official portal of the City of Lublin - connecting residents, tourists, and businesses.",
                quickLinks: "Quick Links",
                publicServices: "Public Services",
                newsEvents: "News & Events",
                touristInfo: "Tourist Information",
                contactUs: "Contact Us",
                contact: "Contact",
                address: "Address",
                phone: "Phone",
                email: "Email",
                followUs: "Follow Us",
                rights: "All rights reserved."
            },
            chatbot: {
                greeting: "Hello! 👋 I'm your Lublin guide. Ask me about restaurants, attractions, or things to do!",
                askAbout: "Ask about Lublin...",
                buttonText: "Ask about Lublin"
            },
            news: {
                news1Title: "New Cultural Center Opens in Lublin",
                news1Desc: "Experience art, music, and theater in our state-of-the-art facility located in the heart of the city.",
                news2Title: "Public Transport Modernization",
                news2Desc: "New electric buses and improved routes will enhance our sustainable transportation network.",
                news3Title: "Lublin Tech Innovation Hub Launch",
                news3Desc: "Supporting startups and tech companies with modern coworking spaces and business mentorship.",
                culture: "Culture",
                transport: "Transport",
                innovation: "Innovation"
            },
            services: {
                service1Title: "City Services Portal",
                service1Desc: "Access all municipal services online - from permits to documentation.",
                service2Title: "Tourist Information",
                service2Desc: "Discover Lublin's rich history, attractions, and cultural events.",
                service3Title: "Business Hub",
                service3Desc: "Resources and support for entrepreneurs and businesses in Lublin."
            },
            touristPage: {
                title: "Visit Lublin",
                subtitle: "Your guide to experiencing the best of Eastern Poland's cultural capital",
                discoverHeading: "Discover Lublin's Attractions",
                discoverText: "Explore the rich history and vibrant culture of Lublin, one of Poland's most beautiful cities. From medieval architecture to modern cultural venues, Lublin offers something for every visitor.",
                oldTown: "Old Town",
                oldTownDesc: "Walk through centuries of history in our beautifully preserved medieval Old Town, featuring the iconic Lublin Castle.",
                historic: "Historic",
                culturalEvents: "Cultural Events",
                culturalEventsDesc: "Experience world-class festivals, concerts, and exhibitions throughout the year.",
                culture: "Culture",
                localCuisine: "Local Cuisine",
                localCuisineDesc: "Taste traditional Polish dishes and modern culinary creations in our restaurants and cafes.",
                food: "Food",
                practicalHeading: "Practical Information",
                practicalText: "Everything you need to know for a comfortable stay in Lublin.",
                gettingAround: "Getting Around",
                gettingAroundDesc: "Public transportation, bike rentals, and walking routes to help you explore the city.",
                accommodation: "Accommodation",
                accommodationDesc: "Find the perfect place to stay, from luxury hotels to cozy guesthouses.",
                visitorCenter: "Visitor Center",
                visitorCenterDesc: "Get maps, guided tours, and local tips at our Tourist Information Center."
            },
            contactPage: {
                title: "Contact Us",
                subtitle: "Get in touch with the City of Lublin",
                cityHall: "City Hall",
                address: "Address",
                addressValue: "Plac Łokietka 1, 20-109 Lublin, Poland",
                phone: "Phone",
                email: "Email",
                officeHours: "Office Hours",
                officeHoursValue: "Monday - Friday: 8:00 AM - 4:00 PM",
                formTitle: "Send us a message",
                name: "Name",
                namePlaceholder: "Your name",
                emailLabel: "Email",
                emailPlaceholder: "your.email@example.com",
                subject: "Subject",
                subjectPlaceholder: "What is this about?",
                message: "Message",
                messagePlaceholder: "Your message...",
                sendButton: "Send Message"
            }
        }
    },
    // German (Germanic)
    de: {
        translation: {
            nav: {
                home: "Startseite",
                news: "Nachrichten",
                services: "Dienstleistungen",
                tourist: "Touristen Info",
                contact: "Kontakt",
                login: "Anmelden"
            },
            hero: {
                title: "Entdecken Sie Lublin",
                subtitle: "Stadt der Inspiration. Erleben Sie die Geschichte, Kultur und das moderne Leben der Hauptstadt Ostpolens.",
                forTourists: "Für Touristen",
                forResidents: "Für Einwohner"
            },
            home: {
                latestNews: "Neueste Nachrichten",
                newsSubtitle: "Bleiben Sie auf dem Laufenden über die neuesten Entwicklungen in unserer Stadt",
                quickAccess: "Schnellzugriff",
                servicesSubtitle: "Wesentliche Dienste und Informationsportale"
            },
            footer: {
                cityHeading: "Stadt Lublin",
                cityText: "Offizielles Portal der Stadt Lublin - verbindet Einwohner, Touristen und Unternehmen.",
                quickLinks: "Schnelllinks",
                publicServices: "Öffentliche Dienste",
                newsEvents: "Nachrichten & Veranstaltungen",
                touristInfo: "Touristen Information",
                contactUs: "Kontaktiere uns",
                contact: "Kontakt",
                address: "Adresse",
                phone: "Telefon",
                email: "E-Mail",
                followUs: "Folge uns",
                rights: "Alle Rechte vorbehalten."
            },
            chatbot: {
                greeting: "Hallo! 👋 Ich bin Ihr Lublin-Führer. Fragen Sie mich über Restaurants, Sehenswürdigkeiten oder Aktivitäten!",
                askAbout: "Fragen Sie über Lublin...",
                buttonText: "Fragen über Lublin"
            },
            news: {
                news1Title: "Neues Kulturzentrum in Lublin eröffnet",
                news1Desc: "Erleben Sie Kunst, Musik und Theater in unserer hochmodernen Einrichtung im Herzen der Stadt.",
                news2Title: "Modernisierung des öffentlichen Verkehrs",
                news2Desc: "Neue Elektrobusse und verbesserte Routen werden unser nachhaltiges Verkehrsnetz verbessern.",
                news3Title: "Start des Lublin Tech Innovation Hub",
                news3Desc: "Unterstützung von Startups und Technologieunternehmen mit modernen Coworking-Spaces und Business-Mentoring.",
                culture: "Kultur",
                transport: "Verkehr",
                innovation: "Innovation"
            },
            services: {
                service1Title: "Städtische Dienste Portal",
                service1Desc: "Zugriff auf alle kommunalen Dienstleistungen online - von Genehmigungen bis zur Dokumentation.",
                service2Title: "Touristen Information",
                service2Desc: "Entdecken Sie Lublins reiche Geschichte, Sehenswürdigkeiten und kulturelle Veranstaltungen.",
                service3Title: "Business Hub",
                service3Desc: "Ressourcen und Unterstützung für Unternehmer und Unternehmen in Lublin."
            },
            touristPage: {
                title: "Besuchen Sie Lublin",
                subtitle: "Ihr Führer, um das Beste der Kulturhauptstadt Ostpolens zu erleben",
                discoverHeading: "Entdecken Sie Lublins Attraktionen",
                discoverText: "Erkunden Sie die reiche Geschichte und lebendige Kultur von Lublin, einer der schönsten Städte Polens. Von mittelalterlicher Architektur bis zu modernen Kulturstätten bietet Lublin für jeden Besucher etwas.",
                oldTown: "Altstadt",
                oldTownDesc: "Spazieren Sie durch Jahrhunderte der Geschichte in unserer wunderschön erhaltenen mittelalterlichen Altstadt mit dem ikonischen Lubliner Schloss.",
                historic: "Historisch",
                culturalEvents: "Kulturelle Veranstaltungen",
                culturalEventsDesc: "Erleben Sie das ganze Jahr über erstklassige Festivals, Konzerte und Ausstellungen.",
                culture: "Kultur",
                localCuisine: "Lokale Küche",
                localCuisineDesc: "Probieren Sie traditionelle polnische Gerichte und moderne kulinarische Kreationen in unseren Restaurants und Cafés.",
                food: "Essen",
                practicalHeading: "Praktische Informationen",
                practicalText: "Alles, was Sie für einen angenehmen Aufenthalt in Lublin wissen müssen.",
                gettingAround: "Unterwegs",
                gettingAroundDesc: "Öffentliche Verkehrsmittel, Fahrradverleih und Wanderrouten, die Ihnen helfen, die Stadt zu erkunden.",
                accommodation: "Unterkunft",
                accommodationDesc: "Finden Sie die perfekte Unterkunft, von Luxushotels bis zu gemütlichen Pensionen.",
                visitorCenter: "Besucherzentrum",
                visitorCenterDesc: "Erhalten Sie Karten, Führungen und lokale Tipps in unserem Touristeninformationszentrum."
            },
            contactPage: {
                title: "Kontaktiere uns",
                subtitle: "Nehmen Sie Kontakt mit der Stadt Lublin auf",
                cityHall: "Rathaus",
                address: "Adresse",
                addressValue: "Plac Łokietka 1, 20-109 Lublin, Polen",
                phone: "Telefon",
                email: "E-Mail",
                officeHours: "Bürozeiten",
                officeHoursValue: "Montag - Freitag: 8:00 - 16:00 Uhr",
                formTitle: "Senden Sie uns eine Nachricht",
                name: "Name",
                namePlaceholder: "Ihr Name",
                emailLabel: "E-Mail",
                emailPlaceholder: "ihre.email@beispiel.com",
                subject: "Betreff",
                subjectPlaceholder: "Worum geht es?",
                message: "Nachricht",
                messagePlaceholder: "Ihre Nachricht...",
                sendButton: "Nachricht senden"
            }
        }
    },
    // Polish (Slavic)
    pl: {
        translation: {
            nav: {
                home: "Start",
                news: "Aktualności",
                services: "Usługi",
                tourist: "Informacje Turystyczne",
                contact: "Kontakt",
                login: "Zaloguj się"
            },
            hero: {
                title: "Odkryj Lublin",
                subtitle: "Miasto Inspiracji. Doświadcz historii, kultury i nowoczesnego życia stolicy wschodniej Polski.",
                forTourists: "Dla Turystów",
                forResidents: "Dla Mieszkańców"
            },
            home: {
                latestNews: "Najnowsze Wiadomości",
                newsSubtitle: "Bądź na bieżąco z najnowszymi wydarzeniami w naszym mieście",
                quickAccess: "Szybki Dostęp",
                servicesSubtitle: "Niezbędne usługi i portale informacyjne"
            },
            footer: {
                cityHeading: "Miasto Lublin",
                cityText: "Oficjalny portal Miasta Lublin - łączy mieszkańców, turystów i przedsiębiorców.",
                quickLinks: "Szybkie Linki",
                publicServices: "Usługi Publiczne",
                newsEvents: "Aktualności i Wydarzenia",
                touristInfo: "Informacje Turystyczne",
                contactUs: "Skontaktuj się z nami",
                contact: "Kontakt",
                address: "Adres",
                phone: "Telefon",
                email: "E-mail",
                followUs: "Śledź nas",
                rights: "Wszelkie prawa zastrzeżone."
            },
            chatbot: {
                greeting: "Cześć! 👋 Jestem Twoim przewodnikiem po Lublinie. Zapytaj mnie o restauracje, atrakcje lub rzeczy do zrobienia!",
                askAbout: "Zapytaj o Lublin...",
                buttonText: "Zapytaj o Lublin"
            },
            news: {
                news1Title: "Nowe Centrum Kultury otwarte w Lublinie",
                news1Desc: "Doświadcz sztuki, muzyki i teatru w naszej nowoczesnej placówce w sercu miasta.",
                news2Title: "Modernizacja transportu publicznego",
                news2Desc: "Nowe autobusy elektryczne i ulepszone trasy wzmocnią naszą zrównoważoną sieć transportową.",
                news3Title: "Start Lublin Tech Innovation Hub",
                news3Desc: "Wspieranie startupów i firm technologicznych z nowoczesnymi przestrzeniami coworkingowymi i mentoringiem biznesowym.",
                culture: "Kultura",
                transport: "Transport",
                innovation: "Innowacja"
            },
            services: {
                service1Title: "Portal Usług Miejskich",
                service1Desc: "Dostęp do wszystkich usług miejskich online - od zezwoleń po dokumentację.",
                service2Title: "Informacje Turystyczne",
                service2Desc: "Odkryj bogatą historię, atrakcje i wydarzenia kulturalne Lublina.",
                service3Title: "Hub Biznesowy",
                service3Desc: "Zasoby i wsparcie dla przedsiębiorców i firm w Lublinie."
            },
            touristPage: {
                title: "Odwiedź Lublin",
                subtitle: "Twój przewodnik po najlepszych atrakcjach kulturalnej stolicy wschodniej Polski",
                discoverHeading: "Odkryj Atrakcje Lublina",
                discoverText: "Poznaj bogatą historię i tętniącą życiem kulturę Lublina, jednego z najpiękniejszych miast Polski. Od średniowiecznej architektury po nowoczesne obiekty kulturalne, Lublin oferuje coś dla każdego zwiedzającego.",
                oldTown: "Stare Miasto",
                oldTownDesc: "Spaceruj przez wieki historii w naszym pięknie zachowanym średniowiecznym Starym Mieście, z kultowym Zamkiem Lubelskim.",
                historic: "Historyczne",
                culturalEvents: "Wydarzenia Kulturalne",
                culturalEventsDesc: "Doświadcz światowej klasy festiwali, koncertów i wystaw przez cały rok.",
                culture: "Kultura",
                localCuisine: "Lokalna Kuchnia",
                localCuisineDesc: "Spróbuj tradycyjnych polskich dań i nowoczesnych kreacji kulinarnych w naszych restauracjach i kawiarniach.",
                food: "Jedzenie",
                practicalHeading: "Informacje Praktyczne",
                practicalText: "Wszystko, co musisz wiedzieć, aby Twój pobyt w Lublinie był komfortowy.",
                gettingAround: "Poruszanie się",
                gettingAroundDesc: "Transport publiczny, wypożyczalnie rowerów i trasy spacerowe, które pomogą Ci zwiedzić miasto.",
                accommodation: "Noclegi",
                accommodationDesc: "Znajdź idealne miejsce na pobyt, od luksusowych hoteli po przytulne pensjonaty.",
                visitorCenter: "Centrum Turystyki",
                visitorCenterDesc: "Uzyskaj mapy, wycieczki z przewodnikiem i lokalne wskazówki w naszym Centrum Informacji Turystycznej."
            },
            contactPage: {
                title: "Skontaktuj się z nami",
                subtitle: "Skontaktuj się z Urzędem Miasta Lublin",
                cityHall: "Ratusz",
                address: "Adres",
                addressValue: "Plac Łokietka 1, 20-109 Lublin, Polska",
                phone: "Telefon",
                email: "E-mail",
                officeHours: "Godziny otwarcia",
                officeHoursValue: "Poniedziałek - Piątek: 8:00 - 16:00",
                formTitle: "Wyślij nam wiadomość",
                name: "Imię",
                namePlaceholder: "Twoje imię",
                emailLabel: "E-mail",
                emailPlaceholder: "twoj.email@przyklad.com",
                subject: "Temat",
                subjectPlaceholder: "Czego to dotyczy?",
                message: "Wiadomość",
                messagePlaceholder: "Twoja wiadomość...",
                sendButton: "Wyślij wiadomość"
            }
        }
    },
    // Spanish (Latin)
    es: {
        translation: {
            nav: {
                home: "Inicio",
                news: "Noticias",
                services: "Servicios",
                tourist: "Información Turística",
                contact: "Contacto",
                login: "Iniciar sesión"
            },
            hero: {
                title: "Descubre Lublin",
                subtitle: "Ciudad de Inspiración. Experimenta la historia, cultura y vida moderna de la capital del este de Polonia.",
                forTourists: "Para Turistas",
                forResidents: "Para Residentes"
            },
            home: {
                latestNews: "Últimas Noticias",
                newsSubtitle: "Mantente actualizado con los desarrollos recientes en nuestra ciudad",
                quickAccess: "Acceso Rápido",
                servicesSubtitle: "Servicios esenciales y portales de información"
            },
            footer: {
                cityHeading: "Ciudad de Lublin",
                cityText: "Portal oficial de la Ciudad de Lublin - conectando residentes, turistas y empresas.",
                quickLinks: "Enlaces Rápidos",
                publicServices: "Servicios Públicos",
                newsEvents: "Noticias y Eventos",
                touristInfo: "Información Turística",
                contactUs: "Contáctenos",
                contact: "Contacto",
                address: "Dirección",
                phone: "Teléfono",
                email: "Correo electrónico",
                followUs: "Síguenos",
                rights: "Todos los derechos reservados."
            },
            chatbot: {
                greeting: "¡Hola! 👋 Soy tu guía de Lublin. ¡Pregúntame sobre restaurantes, atracciones o cosas que hacer!",
                askAbout: "Pregunta sobre Lublin...",
                buttonText: "Preguntar sobre Lublin"
            },
            news: {
                news1Title: "Nuevo Centro Cultural abre en Lublin",
                news1Desc: "Experimenta arte, música y teatro en nuestra instalación de vanguardia en el corazón de la ciudad.",
                news2Title: "Modernización del Transporte Público",
                news2Desc: "Nuevos autobuses eléctricos y rutas mejoradas mejorarán nuestra red de transporte sostenible.",
                news3Title: "Lanzamiento del Hub de Innovación Tecnológica de Lublin",
                news3Desc: "Apoyando startups y empresas tecnológicas con espacios de coworking modernos y mentoría empresarial.",
                culture: "Cultura",
                transport: "Transporte",
                innovation: "Innovación"
            },
            services: {
                service1Title: "Portal de Servicios Municipales",
                service1Desc: "Accede a todos los servicios municipales en línea - desde permisos hasta documentación.",
                service2Title: "Información Turística",
                service2Desc: "Descubre la rica historia, atracciones y eventos culturales de Lublin.",
                service3Title: "Centro de Negocios",
                service3Desc: "Recursos y apoyo para emprendedores y empresas en Lublin."
            },
            touristPage: {
                title: "Visita Lublin",
                subtitle: "Tu guía para experimentar lo mejor de la capital cultural del este de Polonia",
                discoverHeading: "Descubre las Atracciones de Lublin",
                discoverText: "Explora la rica historia y la vibrante cultura de Lublin, una de las ciudades más bellas de Polonia. Desde arquitectura medieval hasta lugares culturales modernos, Lublin ofrece algo para cada visitante.",
                oldTown: "Casco Antiguo",
                oldTownDesc: "Camina a través de siglos de historia en nuestro bellamente conservado Casco Antiguo medieval, con el icónico Castillo de Lublin.",
                historic: "Histórico",
                culturalEvents: "Eventos Culturales",
                culturalEventsDesc: "Experimenta festivales, conciertos y exposiciones de clase mundial durante todo el año.",
                culture: "Cultura",
                localCuisine: "Cocina Local",
                localCuisineDesc: "Prueba platos tradicionales polacos y creaciones culinarias modernas en nuestros restaurantes y cafés.",
                food: "Comida",
                practicalHeading: "Información Práctica",
                practicalText: "Todo lo que necesitas saber para una estancia cómoda en Lublin.",
                gettingAround: "Moverse",
                gettingAroundDesc: "Transporte público, alquiler de bicicletas y rutas a pie para ayudarte a explorar la ciudad.",
                accommodation: "Alojamiento",
                accommodationDesc: "Encuentra el lugar perfecto para alojarte, desde hoteles de lujo hasta acogedoras pensiones.",
                visitorCenter: "Centro de Visitantes",
                visitorCenterDesc: "Obtén mapas, visitas guiadas y consejos locales en nuestro Centro de Información Turística."
            },
            contactPage: {
                title: "Contáctenos",
                subtitle: "Ponte en contacto con la Ciudad de Lublin",
                cityHall: "Ayuntamiento",
                address: "Dirección",
                addressValue: "Plac Łokietka 1, 20-109 Lublin, Polonia",
                phone: "Teléfono",
                email: "Correo electrónico",
                officeHours: "Horario de oficina",
                officeHoursValue: "Lunes - Viernes: 8:00 AM - 4:00 PM",
                formTitle: "Envíanos un mensaje",
                name: "Nombre",
                namePlaceholder: "Tu nombre",
                emailLabel: "Correo electrónico",
                emailPlaceholder: "tu.correo@ejemplo.com",
                subject: "Asunto",
                subjectPlaceholder: "¿De qué se trata?",
                message: "Mensaje",
                messagePlaceholder: "Tu mensaje...",
                sendButton: "Enviar mensaje"
            }
        }
    },
    // French (Latin)
    fr: {
        translation: {
            nav: {
                home: "Accueil",
                news: "Actualités",
                services: "Services",
                tourist: "Informations Touristiques",
                contact: "Contact",
                login: "Se connecter"
            },
            hero: {
                title: "Découvrez Lublin",
                subtitle: "Ville d'Inspiration. Découvrez l'histoire, la culture et la vie moderne de la capitale de l'est de la Pologne.",
                forTourists: "Pour les Touristes",
                forResidents: "Pour les Résidents"
            },
            home: {
                latestNews: "Dernières Nouvelles",
                newsSubtitle: "Restez informé des développements récents dans notre ville",
                quickAccess: "Accès Rapide",
                servicesSubtitle: "Services essentiels et portails d'information"
            },
            footer: {
                cityHeading: "Ville de Lublin",
                cityText: "Portail officiel de la Ville de Lublin - connectant résidents, touristes et entreprises.",
                quickLinks: "Liens Rapides",
                publicServices: "Services Publics",
                newsEvents: "Actualités et Événements",
                touristInfo: "Informations Touristiques",
                contactUs: "Contactez-nous",
                contact: "Contact",
                address: "Adresse",
                phone: "Téléphone",
                email: "E-mail",
                followUs: "Suivez-nous",
                rights: "Tous droits réservés."
            },
            chatbot: {
                greeting: "Bonjour! 👋 Je suis votre guide de Lublin. Demandez-moi à propos des restaurants, attractions ou choses à faire!",
                askAbout: "Demandez à propos de Lublin...",
                buttonText: "Demander sur Lublin"
            },
            news: {
                news1Title: "Nouveau Centre Culturel ouvre à Lublin",
                news1Desc: "Découvrez l'art, la musique et le théâtre dans notre installation ultramoderne au cœur de la ville.",
                news2Title: "Modernisation des Transports Publics",
                news2Desc: "De nouveaux bus électriques et des itinéraires améliorés renforceront notre réseau de transport durable.",
                news3Title: "Lancement du Hub d'Innovation Technologique de Lublin",
                news3Desc: "Soutien aux startups et entreprises technologiques avec des espaces de coworking modernes et du mentorat d'entreprise.",
                culture: "Culture",
                transport: "Transport",
                innovation: "Innovation"
            },
            services: {
                service1Title: "Portail des Services Municipaux",
                service1Desc: "Accédez à tous les services municipaux en ligne - des permis à la documentation.",
                service2Title: "Informations Touristiques",
                service2Desc: "Découvrez la riche histoire, les attractions et les événements culturels de Lublin.",
                service3Title: "Hub d'Affaires",
                service3Desc: "Ressources et soutien pour les entrepreneurs et les entreprises à Lublin."
            },
            touristPage: {
                title: "Visitez Lublin",
                subtitle: "Votre guide pour découvrir le meilleur de la capitale culturelle de l'est de la Pologne",
                discoverHeading: "Découvrez les Attractions de Lublin",
                discoverText: "Explorez la riche histoire et la culture vibrante de Lublin, l'une des plus belles villes de Pologne. De l'architecture médiévale aux lieux culturels modernes, Lublin offre quelque chose pour chaque visiteur.",
                oldTown: "Vieille Ville",
                oldTownDesc: "Promenez-vous à travers des siècles d'histoire dans notre vieille ville médiévale magnifiquement préservée, avec l'emblématique château de Lublin.",
                historic: "Historique",
                culturalEvents: "Événements Culturels",
                culturalEventsDesc: "Découvrez des festivals, des concerts et des expositions de classe mondiale tout au long de l'année.",
                culture: "Culture",
                localCuisine: "Cuisine Locale",
                localCuisineDesc: "Goûtez aux plats polonais traditionnels et aux créations culinaires modernes dans nos restaurants et cafés.",
                food: "Nourriture",
                practicalHeading: "Informations Pratiques",
                practicalText: "Tout ce que vous devez savoir pour un séjour confortable à Lublin.",
                gettingAround: "Se Déplacer",
                gettingAroundDesc: "Transports en commun, location de vélos et itinéraires pédestres pour vous aider à explorer la ville.",
                accommodation: "Hébergement",
                accommodationDesc: "Trouvez l'endroit idéal pour séjourner, des hôtels de luxe aux maisons d'hôtes confortables.",
                visitorCenter: "Centre des Visiteurs",
                visitorCenterDesc: "Obtenez des cartes, des visites guidées et des conseils locaux à notre Centre d'Information Touristique."
            },
            contactPage: {
                title: "Contactez-nous",
                subtitle: "Entrez en contact avec la Ville de Lublin",
                cityHall: "Hôtel de Ville",
                address: "Adresse",
                addressValue: "Plac Łokietka 1, 20-109 Lublin, Pologne",
                phone: "Téléphone",
                email: "E-mail",
                officeHours: "Heures de bureau",
                officeHoursValue: "Lundi - Vendredi : 8h00 - 16h00",
                formTitle: "Envoyez-nous un message",
                name: "Nom",
                namePlaceholder: "Votre nom",
                emailLabel: "E-mail",
                emailPlaceholder: "votre.email@exemple.com",
                subject: "Sujet",
                subjectPlaceholder: "De quoi s'agit-il ?",
                message: "Message",
                messagePlaceholder: "Votre message...",
                sendButton: "Envoyer le message"
            }
        }
    },
    // Czech (Slavic)
    cs: {
        translation: {
            nav: {
                home: "Domů",
                news: "Novinky",
                services: "Služby",
                tourist: "Turistické Informace",
                contact: "Kontakt",
                login: "Přihlásit se"
            },
            hero: {
                title: "Objevte Lublin",
                subtitle: "Město Inspirace. Zažijte historii, kulturu a moderní život hlavního města východního Polska.",
                forTourists: "Pro Turisty",
                forResidents: "Pro Obyvatele"
            },
            home: {
                latestNews: "Nejnovější Zprávy",
                newsSubtitle: "Buďte v obraze s nejnovějšími událostmi v našem městě",
                quickAccess: "Rychlý Přístup",
                servicesSubtitle: "Základní služby a informační portály"
            },
            footer: {
                cityHeading: "Město Lublin",
                cityText: "Oficiální portál města Lublin - spojuje obyvatele, turisty a podniky.",
                quickLinks: "Rychlé Odkazy",
                publicServices: "Veřejné Služby",
                newsEvents: "Novinky a Události",
                touristInfo: "Turistické Informace",
                contactUs: "Kontaktujte nás",
                contact: "Kontakt",
                address: "Adresa",
                phone: "Telefon",
                email: "E-mail",
                followUs: "Sledujte nás",
                rights: "Všechna práva vyhrazena."
            },
            chatbot: {
                greeting: "Ahoj! 👋 Jsem váš průvodce po Lublinu. Zeptejte se mě na restaurace, atrakce nebo věci k vidění!",
                askAbout: "Zeptejte se na Lublin...",
                buttonText: "Ptát se na Lublin"
            },
            news: {
                news1Title: "Nové kulturní centrum otevřeno v Lublinu",
                news1Desc: "Zažijte umění, hudbu a divadlo v našem nejmodernějším zařízení v srdci města.",
                news2Title: "Modernizace veřejné dopravy",
                news2Desc: "Nové elektrické autobusy a vylepšené trasy posílí naši udržitelnou dopravní síť.",
                news3Title: "Spuštění Lublin Tech Innovation Hub",
                news3Desc: "Podpora startupů a technologických společností s moderními coworkingovými prostory a podnikatelským mentorstvím.",
                culture: "Kultura",
                transport: "Doprava",
                innovation: "Inovace"
            },
            services: {
                service1Title: "Portál městských služeb",
                service1Desc: "Přístup ke všem městským službám online - od povolení po dokumentaci.",
                service2Title: "Turistické informace",
                service2Desc: "Objevte bohatou historii, atrakce a kulturní události Lublina.",
                service3Title: "Podnikatelské centrum",
                service3Desc: "Zdroje a podpora pro podnikatele a firmy v Lublinu."
            },
            touristPage: {
                title: "Navštivte Lublin",
                subtitle: "Váš průvodce tím nejlepším z kulturního hlavního města východního Polska",
                discoverHeading: "Objevte Atrakce Lublina",
                discoverText: "Prozkoumejte bohatou historii a živou kulturu Lublina, jednoho z nejkrásnějších měst Polska. Od středověké architektury po moderní kulturní místa, Lublin nabízí něco pro každého návštěvníka.",
                oldTown: "Staré Město",
                oldTownDesc: "Projděte se staletími historie v našem krásně zachovalém středověkém Starém Městě s ikonickým Lublinským zámkem.",
                historic: "Historické",
                culturalEvents: "Kulturní Události",
                culturalEventsDesc: "Zažijte prvotřídní festivaly, koncerty a výstavy po celý rok.",
                culture: "Kultura",
                localCuisine: "Místní Kuchyně",
                localCuisineDesc: "Ochutnejte tradiční polská jídla a moderní kulinářské výtvory v našich restauracích a kavárnách.",
                food: "Jídlo",
                practicalHeading: "Praktické Informace",
                practicalText: "Vše, co potřebujete vědět pro pohodlný pobyt v Lublinu.",
                gettingAround: "Doprava",
                gettingAroundDesc: "Veřejná doprava, půjčovny kol a pěší trasy, které vám pomohou prozkoumat město.",
                accommodation: "Ubytování",
                accommodationDesc: "Najděte perfektní místo k pobytu, od luxusních hotelů po útulné penziony.",
                visitorCenter: "Návštěvnické Centrum",
                visitorCenterDesc: "Získejte mapy, prohlídky s průvodcem a místní tipy v našem Turistickém informačním centru."
            },
            contactPage: {
                title: "Kontaktujte nás",
                subtitle: "Spojte se s městem Lublin",
                cityHall: "Radnice",
                address: "Adresa",
                addressValue: "Plac Łokietka 1, 20-109 Lublin, Polsko",
                phone: "Telefon",
                email: "E-mail",
                officeHours: "Úřední hodiny",
                officeHoursValue: "Pondělí - Pátek: 8:00 - 16:00",
                formTitle: "Pošlete nám zprávu",
                name: "Jméno",
                namePlaceholder: "Vaše jméno",
                emailLabel: "E-mail",
                emailPlaceholder: "vas.email@priklad.com",
                subject: "Předmět",
                subjectPlaceholder: "O co se jedná?",
                message: "Zpráva",
                messagePlaceholder: "Vaše zpráva...",
                sendButton: "Odeslat zprávu"
            }
        }
    },
    // Ukrainian
    uk: {
        translation: {
            nav: {
                home: "Головна",
                news: "Новини",
                services: "Послуги",
                tourist: "Туристична Інформація",
                contact: "Контакт",
                login: "Увійти"
            },
            hero: {
                title: "Відкрийте Люблін",
                subtitle: "Місто Натхнення. Відчуйте історію, культуру та сучасне життя столиці Східної Польщі.",
                forTourists: "Для Туристів",
                forResidents: "Для Жителів"
            },
            home: {
                latestNews: "Останні Новини",
                newsSubtitle: "Будьте в курсі останніх подій у нашому місті",
                quickAccess: "Швидкий Доступ",
                servicesSubtitle: "Основні послуги та інформаційні портали"
            },
            footer: {
                cityHeading: "Місто Люблін",
                cityText: "Офіційний портал міста Люблін - з'єднує жителів, туристів та підприємства.",
                quickLinks: "Швидкі Посилання",
                publicServices: "Громадські Послуги",
                newsEvents: "Новини та Події",
                touristInfo: "Туристична Інформація",
                contactUs: "Зв'яжіться з нами",
                contact: "Контакт",
                address: "Адреса",
                phone: "Телефон",
                email: "Електронна пошта",
                followUs: "Слідкуйте за нами",
                rights: "Усі права захищені."
            },
            chatbot: {
                greeting: "Привіт! 👋 Я ваш гід по Любліну. Запитайте мене про ресторани, атракції або що подивитися!",
                askAbout: "Запитайте про Люблін...",
                buttonText: "Запитати про Люблін"
            },
            news: {
                news1Title: "Новий Культурний Центр відкритий в Любліні",
                news1Desc: "Відчуйте мистецтво, музику та театр у нашому сучасному закладі в серці міста.",
                news2Title: "Модернізація громадського транспорту",
                news2Desc: "Нові електричні автобуси та покращені маршрути покращать нашу екологічну транспортну мережу.",
                news3Title: "Запуск Технологічного Інноваційного Хабу Любліна",
                news3Desc: "Підтримка стартапів та технологічних компаній з сучасними коворкінговими просторами та бізнес-наставництвом.",
                culture: "Культура",
                transport: "Транспорт",
                innovation: "Інновація"
            },
            services: {
                service1Title: "Портал Міських Послуг",
                service1Desc: "Доступ до всіх муніципальних послуг онлайн - від дозволів до документації.",
                service2Title: "Туристична Інформація",
                service2Desc: "Відкрийте багату історію, атракції та культурні події Любліна.",
                service3Title: "Бізнес-Хаб",
                service3Desc: "Ресурси та підтримка для підприємців та бізнесу в Любліні."
            },
            touristPage: {
                title: "Відвідайте Люблін",
                subtitle: "Ваш путівник по найкращому в культурній столиці Східної Польщі",
                discoverHeading: "Відкрийте Пам'ятки Любліна",
                discoverText: "Досліджуйте багату історію та яскраву культуру Любліна, одного з найкрасивіших міст Польщі. Від середньовічної архітектури до сучасних культурних закладів, Люблін пропонує щось для кожного відвідувача.",
                oldTown: "Старе Місто",
                oldTownDesc: "Прогуляйтеся крізь століття історії в нашому чудово збереженому середньовічному Старому Місті з культовим Люблінським замком.",
                historic: "Історичне",
                culturalEvents: "Культурні Події",
                culturalEventsDesc: "Відвідайте фестивалі, концерти та виставки світового рівня протягом року.",
                culture: "Культура",
                localCuisine: "Місцева Кухня",
                localCuisineDesc: "Скуштуйте традиційні польські страви та сучасні кулінарні витвори в наших ресторанах і кафе.",
                food: "Їжа",
                practicalHeading: "Практична Інформація",
                practicalText: "Все, що вам потрібно знати для комфортного перебування в Любліні.",
                gettingAround: "Пересування",
                gettingAroundDesc: "Громадський транспорт, прокат велосипедів та пішохідні маршрути, які допоможуть вам дослідити місто.",
                accommodation: "Проживання",
                accommodationDesc: "Знайдіть ідеальне місце для проживання, від розкішних готелів до затишних гостьових будинків.",
                visitorCenter: "Центр Відвідувачів",
                visitorCenterDesc: "Отримайте карти, екскурсії та місцеві поради в нашому Туристичному Інформаційному Центрі."
            },
            contactPage: {
                title: "Зв'яжіться з нами",
                subtitle: "Зв'яжіться з містом Люблін",
                cityHall: "Мерія",
                address: "Адреса",
                addressValue: "Plac Łokietka 1, 20-109 Люблін, Польща",
                phone: "Телефон",
                email: "Електронна пошта",
                officeHours: "Робочі години",
                officeHoursValue: "Понеділок - П'ятниця: 8:00 - 16:00",
                formTitle: "Надішліть нам повідомлення",
                name: "Ім'я",
                namePlaceholder: "Ваше ім'я",
                emailLabel: "Електронна пошта",
                emailPlaceholder: "vash.email@priklad.com",
                subject: "Тема",
                subjectPlaceholder: "Про що це?",
                message: "Повідомлення",
                messagePlaceholder: "Ваше повідомлення...",
                sendButton: "Надіслати повідомлення"
            }
        }
    },
    // Russian
    ru: {
        translation: {
            nav: {
                home: "Главная",
                news: "Новости",
                services: "Услуги",
                tourist: "Туристическая Информация",
                contact: "Контакт",
                login: "Войти"
            },
            hero: {
                title: "Откройте Люблин",
                subtitle: "Город Вдохновения. Ощутите историю, культуру и современную жизнь столицы Восточной Польши.",
                forTourists: "Для Туристов",
                forResidents: "Для Жителей"
            },
            home: {
                latestNews: "Последние Новости",
                newsSubtitle: "Будьте в курсе последних событий в нашем городе",
                quickAccess: "Быстрый Доступ",
                servicesSubtitle: "Основные услуги и информационные порталы"
            },
            footer: {
                cityHeading: "Город Люблин",
                cityText: "Официальный портал города Люблин - соединяет жителей, туристов и бизнес.",
                quickLinks: "Быстрые Ссылки",
                publicServices: "Общественные Услуги",
                newsEvents: "Новости и События",
                touristInfo: "Туристическая Информация",
                contactUs: "Свяжитесь с нами",
                contact: "Контакт",
                address: "Адрес",
                phone: "Телефон",
                email: "Электронная почта",
                followUs: "Следуйте за нами",
                rights: "Все права защищены."
            },
            chatbot: {
                greeting: "Привет! 👋 Я ваш гид по Люблину. Спросите меня о ресторанах, достопримечательностях или что посмотреть!",
                askAbout: "Спросите о Люблине...",
                buttonText: "Спросить о Люблине"
            },
            news: {
                news1Title: "Новый Культурный Центр открыт в Люблине",
                news1Desc: "Испытайте искусство, музыку и театр в нашем современном заведении в сердце города.",
                news2Title: "Модернизация общественного транспорта",
                news2Desc: "Новые электрические автобусы и улучшенные маршруты улучшат нашу экологичную транспортную сеть.",
                news3Title: "Запуск Технологического Инновационного Хаба Люблина",
                news3Desc: "Поддержка стартапов и технологических компаний с современными коворкинг-пространствами и бизнес-наставничеством.",
                culture: "Культура",
                transport: "Транспорт",
                innovation: "Инновация"
            },
            services: {
                service1Title: "Портал Городских Услуг",
                service1Desc: "Доступ ко всем муниципальным услугам онлайн - от разрешений до документации.",
                service2Title: "Туристическая Информация",
                service2Desc: "Откройте богатую историю, достопримечательности и культурные события Люблина.",
                service3Title: "Бизнес-Хаб",
                service3Desc: "Ресурсы и поддержка для предпринимателей и бизнеса в Люблине."
            },
            touristPage: {
                title: "Посетите Люблин",
                subtitle: "Ваш путеводитель по лучшему в культурной столице Восточной Польши",
                discoverHeading: "Откройте Достопримечательности Люблина",
                discoverText: "Исследуйте богатую историю и яркую культуру Люблина, одного из самых красивых городов Польши. От средневековой архитектуры до современных культурных заведений, Люблин предлагает что-то для каждого посетителя.",
                oldTown: "Старый Город",
                oldTownDesc: "Прогуляйтесь сквозь века истории в нашем прекрасно сохранившемся средневековом Старом Городе со знаменитым Люблинским замком.",
                historic: "Историческое",
                culturalEvents: "Культурные События",
                culturalEventsDesc: "Посетите фестивали, концерты и выставки мирового уровня в течение года.",
                culture: "Культура",
                localCuisine: "Местная Кухня",
                localCuisineDesc: "Попробуйте традиционные польские блюда и современные кулинарные творения в наших ресторанах и кафе.",
                food: "Еда",
                practicalHeading: "Практическая Информация",
                practicalText: "Все, что вам нужно знать для комфортного пребывания в Люблине.",
                gettingAround: "Передвижение",
                gettingAroundDesc: "Общественный транспорт, прокат велосипедов и пешеходные маршруты, которые помогут вам исследовать город.",
                accommodation: "Проживание",
                accommodationDesc: "Найдите идеальное место для проживания, от роскошных отелей до уютных гостевых домов.",
                visitorCenter: "Центр Посетителей",
                visitorCenterDesc: "Получите карты, экскурсии и местные советы в нашем Туристическом Информационном Центре."
            },
            contactPage: {
                title: "Свяжитесь с нами",
                subtitle: "Свяжитесь с городом Люблин",
                cityHall: "Мэрия",
                address: "Адрес",
                addressValue: "Plac Łokietka 1, 20-109 Люблин, Польша",
                phone: "Телефон",
                email: "Электронная почта",
                officeHours: "Рабочие часы",
                officeHoursValue: "Понедельник - Пятница: 8:00 - 16:00",
                formTitle: "Отправьте нам сообщение",
                name: "Имя",
                namePlaceholder: "Ваше имя",
                emailLabel: "Электронная почта",
                emailPlaceholder: "vash.email@priklad.com",
                subject: "Тема",
                subjectPlaceholder: "О чем это?",
                message: "Сообщение",
                messagePlaceholder: "Ваше сообщение...",
                sendButton: "Отправить сообщение"
            }
        }
    },
    // Italian
    it: {
        translation: {
            nav: {
                home: "Home",
                news: "Notizie",
                services: "Servizi",
                tourist: "Informazioni Turistiche",
                contact: "Contatto",
                login: "Accedi"
            },
            hero: {
                title: "Scopri Lublino",
                subtitle: "Città dell'Ispirazione. Vivi la storia, la cultura e la vita moderna della capitale della Polonia orientale.",
                forTourists: "Per Turisti",
                forResidents: "Per Residenti"
            },
            home: {
                latestNews: "Ultime Notizie",
                newsSubtitle: "Rimani aggiornato sugli sviluppi recenti nella nostra città",
                quickAccess: "Accesso Rapido",
                servicesSubtitle: "Servizi essenziali e portali informativi"
            },
            footer: {
                cityHeading: "Città di Lublino",
                cityText: "Portale ufficiale della Città di Lublino - collega residenti, turisti e imprese.",
                quickLinks: "Collegamenti Rapidi",
                publicServices: "Servizi Pubblici",
                newsEvents: "Notizie ed Eventi",
                touristInfo: "Informazioni Turistiche",
                contactUs: "Contattaci",
                contact: "Contatto",
                address: "Indirizzo",
                phone: "Telefono",
                email: "Email",
                followUs: "Seguici",
                rights: "Tutti i diritti riservati."
            },
            chatbot: {
                greeting: "Ciao! 👋 Sono la tua guida di Lublino. Chiedimi di ristoranti, attrazioni o cose da fare!",
                askAbout: "Chiedi di Lublino...",
                buttonText: "Chiedere di Lublino"
            },
            news: {
                news1Title: "Nuovo Centro Culturale apre a Lublino",
                news1Desc: "Vivi arte, musica e teatro nella nostra struttura all'avanguardia nel cuore della città.",
                news2Title: "Modernizzazione del Trasporto Pubblico",
                news2Desc: "Nuovi autobus elettrici e percorsi migliorati potenzieranno la nostra rete di trasporto sostenibile.",
                news3Title: "Lancio del Lublin Tech Innovation Hub",
                news3Desc: "Supporto per startup e aziende tecnologiche con moderni spazi di coworking e mentoring aziendale.",
                culture: "Cultura",
                transport: "Trasporto",
                innovation: "Innovazione"
            },
            services: {
                service1Title: "Portale Servizi Comunali",
                service1Desc: "Accedi a tutti i servizi comunali online - dai permessi alla documentazione.",
                service2Title: "Informazioni Turistiche",
                service2Desc: "Scopri la ricca storia, le attrazioni e gli eventi culturali di Lublino.",
                service3Title: "Hub Aziendale",
                service3Desc: "Risorse e supporto per imprenditori e aziende a Lublino."
            },
            touristPage: {
                title: "Visita Lublino",
                subtitle: "La tua guida per vivere il meglio della capitale culturale della Polonia orientale",
                discoverHeading: "Scopri le Attrazioni di Lublino",
                discoverText: "Esplora la ricca storia e la vibrante cultura di Lublino, una delle città più belle della Polonia. Dall'architettura medievale ai moderni luoghi culturali, Lublino offre qualcosa per ogni visitatore.",
                oldTown: "Città Vecchia",
                oldTownDesc: "Cammina attraverso secoli di storia nella nostra Città Vecchia medievale splendidamente conservata, con l'iconico Castello di Lublino.",
                historic: "Storico",
                culturalEvents: "Eventi Culturali",
                culturalEventsDesc: "Vivi festival, concerti e mostre di classe mondiale durante tutto l'anno.",
                culture: "Cultura",
                localCuisine: "Cucina Locale",
                localCuisineDesc: "Gusta piatti tradizionali polacchi e moderne creazioni culinarie nei nostri ristoranti e caffè.",
                food: "Cibo",
                practicalHeading: "Informazioni Pratiche",
                practicalText: "Tutto ciò che devi sapere per un soggiorno confortevole a Lublino.",
                gettingAround: "Muoversi",
                gettingAroundDesc: "Trasporti pubblici, noleggio biciclette e percorsi a piedi per aiutarti a esplorare la città.",
                accommodation: "Alloggio",
                accommodationDesc: "Trova il posto perfetto dove stare, dagli hotel di lusso alle accoglienti pensioni.",
                visitorCenter: "Centro Visitatori",
                visitorCenterDesc: "Ottieni mappe, visite guidate e consigli locali nel nostro Centro Informazioni Turistiche."
            },
            contactPage: {
                title: "Contattaci",
                subtitle: "Mettiti in contatto con la Città di Lublino",
                cityHall: "Municipio",
                address: "Indirizzo",
                addressValue: "Plac Łokietka 1, 20-109 Lublino, Polonia",
                phone: "Telefono",
                email: "Email",
                officeHours: "Orari di ufficio",
                officeHoursValue: "Lunedì - Venerdì: 8:00 - 16:00",
                formTitle: "Inviaci un messaggio",
                name: "Nome",
                namePlaceholder: "Il tuo nome",
                emailLabel: "Email",
                emailPlaceholder: "tua.email@esempio.com",
                subject: "Oggetto",
                subjectPlaceholder: "Di cosa si tratta?",
                message: "Messaggio",
                messagePlaceholder: "Il tuo messaggio...",
                sendButton: "Invia messaggio"
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

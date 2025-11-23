// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a nav link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to top button
const scrollTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add active class to navigation links on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Animate on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements that should animate on scroll
document.querySelectorAll('.service-card, .portfolio-item, .about-image').forEach(el => {
    observer.observe(el);
});

// Dark mode toggle + language switch
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Function to set theme
    function setTheme(isDark) {
        if (isDark) {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            if (themeToggle) themeToggle.checked = true;
        } else {
            html.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            if (themeToggle) themeToggle.checked = false;
        }
    }
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark') {
        setTheme(true);
    } else if (savedTheme === 'light') {
        setTheme(false);
    } else if (prefersDark) {
        setTheme(true);
    }
    
    // Add event listener to toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            setTheme(this.checked);
            console.log('Theme switched to:', this.checked ? 'dark' : 'light');
        });
    }

    // Language switcher
    const langButtons = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-i18n-key]');

    const translations = {
        en: {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.services': 'Services',
            'nav.portfolio': 'Portfolio',
            'hero.subtitle': 'Machine Learning Engineer',
            'hero.tagline': 'Turning data into intelligent solutions',
            'about.title': 'About',
            'about.intro': 'As a Machine Learning Engineer with specialized expertise in deep learning architectures, I solve complex problems through innovative machine learning solutions. My focus on self-supervised techniques delivers robust results in data-constrained environments.',
            'about.skillsTitle': 'Skills',
            'domains.title': 'Application Domains',
            'domains.intro': 'I apply machine learning and optimization techniques to demanding real-world environments such as space, defense, and embedded systems.',
            'domains.space.title': 'Space & Earth Observation',
            'domains.space.text': 'Super-resolution for Sentinel-2 optical imagery, satellite maneuver modelling, and contributions to Python libraries for the Copernicus (ESA/CNES) program.',
            'domains.defense.title': 'Defense & Security',
            'domains.defense.text': 'Predictive models for orbital dynamics, risk analysis and anomaly detection for critical systems in collaboration with DGA and national agencies.',
            'domains.embedded.title': 'Embedded Electronics & Sensors',
            'domains.embedded.text': 'Embedded algorithms for measurement instruments, probabilistic modelling for thermal cameras, and real-time signal processing.',
            'services.title': 'Services',
            'services.card1.title': 'Deep Learning Architecture Design',
            'services.card1.text': 'Custom deep learning architectures including VAEs, GANs, and mixture models tailored to your specific needs.',
            'services.card2.title': 'Anomaly Detection Systems',
            'services.card2.text': 'Development of robust anomaly detection solutions using state-of-the-art deep learning approaches.',
            'services.card3.title': 'ML Model Optimization',
            'services.card3.text': 'Hyperparameter tuning and model optimization for improved performance and efficiency.',
            'services.card4.title': 'ML Research & Development',
            'services.card4.text': 'Implementation of research papers and development of novel machine learning solutions.',
            'portfolio.title': 'Portfolio',
            'contact.title': 'Contact',
            'contact.text': 'For any opportunity, consulting mission or collaboration, feel free to contact me directly.',
            'contact.emailCta': 'Send an email',
            'contact.linkedinCta': 'View my LinkedIn profile'
        },
        fr: {
            'nav.home': 'Accueil',
            'nav.about': 'À propos',
            'nav.services': 'Services',
            'nav.portfolio': 'Portfolio',
            'hero.subtitle': 'Ingénieur Machine Learning',
            'hero.tagline': 'Transformer les données en solutions intelligentes',
            'about.title': 'À propos',
            'about.intro': 'Ingénieur Machine Learning spécialisé dans les architectures de deep learning, je conçois des solutions d’apprentissage automatique pour adresser des problèmes complexes en environnement opérationnel. Mon travail se concentre sur les approches auto-supervisées en contexte de données limitées.',
            'about.skillsTitle': 'Compétences',
            'domains.title': "Domaines d'application",
            'domains.intro': "J’applique des techniques d’apprentissage automatique et d’optimisation à des environnements exigeants comme l’espace, la défense et les systèmes embarqués.",
            'domains.space.title': 'Espace & Observation de la Terre',
            'domains.space.text': 'Super-résolution pour imagerie optique Sentinel‑2, modélisation de manœuvres satellitaires et contributions aux bibliothèques Python du programme Copernicus (ESA/CNES).',
            'domains.defense.title': 'Défense & Sécurité',
            'domains.defense.text': 'Modèles prédictifs pour la dynamique orbitale, analyse de risque et détection d’anomalies pour systèmes critiques en collaboration avec la DGA et des agences nationales.',
            'domains.embedded.title': 'Électronique embarquée & Capteurs',
            'domains.embedded.text': 'Algorithmes embarqués pour instruments de mesure, modélisation probabiliste pour caméras thermiques et traitement de signal en temps réel.',
            'services.title': 'Services',
            'services.card1.title': 'Conception d’architectures Deep Learning',
            'services.card1.text': 'Conception d’architectures deep learning (VAE, GAN, modèles de mélange) adaptées à vos besoins métier.',
            'services.card2.title': 'Systèmes de détection d’anomalies',
            'services.card2.text': 'Développement de solutions de détection d’anomalies basées sur des approches deep learning à l’état de l’art.',
            'services.card3.title': 'Optimisation de modèles ML',
            'services.card3.text': "Optimisation et réglage d’hyperparamètres pour améliorer les performances et l’efficacité des modèles.",
            'services.card4.title': 'R&D en Machine Learning',
            'services.card4.text': 'Mise en œuvre d’articles de recherche et développement de nouvelles solutions en apprentissage automatique.',
            'portfolio.title': 'Portfolio',
            'contact.title': 'Contact',
            'contact.text': 'Pour toute opportunité, mission de conseil ou collaboration, vous pouvez me contacter directement.',
            'contact.emailCta': 'Envoyer un email',
            'contact.linkedinCta': 'Voir mon profil LinkedIn'
        }
    };

    function setLanguage(lang) {
        const targetLang = lang === 'fr' ? 'fr' : 'en';
        html.setAttribute('lang', targetLang);
        localStorage.setItem('lang', targetLang);

        translatableElements.forEach(el => {
            const key = el.getAttribute('data-i18n-key');
            const value = translations[targetLang] && translations[targetLang][key];
            if (value) {
                el.textContent = value;
            }
        });

        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === targetLang);
        });
    }

    if (langButtons.length && translatableElements.length) {
        const savedLang = localStorage.getItem('lang') || 'en';
        setLanguage(savedLang);

        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                setLanguage(lang);
            });
        });
    }
});

// Portfolio filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Add click event to filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to current button
        btn.classList.add('active');
        
        // Get filter value
        const filterValue = btn.getAttribute('data-filter');
        
        // Filter items
        portfolioItems.forEach(item => {
            const categories = item.getAttribute('data-category');
            
            if (filterValue === 'all' || categories.includes(filterValue)) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    });
}); 
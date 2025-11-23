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

if (scrollTopButton) {
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
}

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
            'timeline.title': 'Professional Experience',
            'timeline.cs.title': 'Data Scientist | AI & Machine Learning Specialist',
            'timeline.cs.company': 'CS Group, Toulouse',
            'timeline.cs.b1': 'Developed deep learning and probabilistic models for space technology applications',
            'timeline.cs.b2': 'Designed image super-resolution models for CNES (French Space Agency)',
            'timeline.cs.b3': 'Built satellite maneuver prediction models for CNES and DGA (Defense Agency)',
            'timeline.cs.b4': "Contributed to Python libraries for ESA's Copernicus program",
            'timeline.cs.b5': 'Implemented Variational Inference and Adversarial Generative Models for data analysis',
            'timeline.ch.title': 'Applied Mathematics Engineer',
            'timeline.ch.company': 'CHAUVIN-ARNOUX, Annecy',
            'timeline.ch.b1': 'Designed numerical algorithms for embedded electronics using Python, C, and C++',
            'timeline.ch.b2': 'Developed Bayesian deconvolution techniques for image filtering and 2D IIR filters',
            'timeline.ch.b3': 'Built Gaussian process-based models for thermal camera image analysis',
            'timeline.ch.b4': 'Led ML-based electromagnetic modeling for a portable current measurement device (patent filled)',
            'timeline.altran.title': 'Consulting Engineer | Machine Learning & Robotics',
            'timeline.altran.company': 'ALTRAN, Toulouse',
            'timeline.altran.b1': 'Developed supervised learning models for turbulence prediction (Airbus R&D)',
            'timeline.altran.b2': 'Designed ML-based drone control systems using deep learning',
            'timeline.altran.b3': 'Applied Jacobian inverse kinematics for robotic control',
            'timeline.altran.b4': 'Contributed to quality validation in aeronautics control laws engineering',
            'timeline.phd.title': 'PhD Researcher | Stochastic Optimization & AI',
            'timeline.phd.company': 'CNRS/INRA/Ecole Centrale de Lyon, Lyon-Paris',
            'timeline.phd.b1': 'Developed stochastic optimization algorithms for large-scale biological systems',
            'timeline.phd.b2': 'Applied Bayesian Optimization and Gradient-Based Methods for high-dimensional problems',
            'timeline.phd.b3': 'Submitted findings in IEEE <em>Conference On Decision and Control</em> (CDC)',
            'timeline.phd.b4': 'Created methods for proving optimization algorithms in large-scale systems biology',
            'portfolio.title': 'Portfolio',
            'portfolio.filter.all': 'All',
            'portfolio.filter.deepLearning': 'Deep Learning',
            'portfolio.filter.gan': 'GAN',
            'portfolio.filter.vae': 'VAE',
            'portfolio.filter.cv': 'Computer Vision',
            'portfolio.gmm.desc': 'Gaussian Mixture Variational Autoencoder implementing a VAE variant with Gaussian Mixture as prior distribution.',
            'portfolio.vaeAnim.desc': 'Interactive implementation of Variational Autoencoders with animated visualizations of latent space representations.',
            'portfolio.em.desc': 'Interactive explanation of the Expectation-Maximization algorithm with application on MNIST dataset classification.',
            'portfolio.bigan.desc': 'Advanced anomaly detection system based on Bidirectional Generative Adversarial Network architecture.',
            'portfolio.l1bsr.desc': 'Self-supervised single-image super-resolution pipeline for Sentinel-2 L1B optical imagery.',
            'portfolio.l1bsr.b1': 'Designed a fully self-supervised training strategy without high-resolution ground truth.',
            'portfolio.l1bsr.b2': 'Improved spatial resolution for tracking and detection tasks in Earth observation.',
            'portfolio.l1bsr.b3': 'Integrated into an operational satellite imagery processing workflow.',
            'portfolio.vaegan.desc': 'Implementation of VAE-GAN architecture based on the paper "Autoencoding beyond pixels using a learned similarity metric".',
            'portfolio.neuralEm.desc': 'Implementation of "Neural Expectation-Maximization" for unsupervised learning of latent variables.',
            'portfolio.keras.desc': 'Training discriminative models on time series data with hyperparameter tuning using KerasTuner library.',
            'portfolio.viewProject': 'View Project',
            'contact.title': 'Contact',
            'contact.text': 'For any opportunity, consulting mission or collaboration, feel free to contact me directly.',
            'contact.emailCta': 'Send an email',
            'contact.linkedinCta': 'View my LinkedIn profile',
            'footer.text': '&copy; 2024 Marouane Ait El Faqir. All rights reserved.',
            'footer.downloadCv': 'Download CV',
            'looking.title': 'What I\u2019m looking for',
            'looking.text': 'I am interested in roles and missions where advanced machine learning is applied to high-impact domains such as space, defense and embedded systems.',
            'looking.b1': 'R&D or engineering positions focused on deep learning, probabilistic modelling and self-supervised learning.',
            'looking.b2': 'Projects involving satellite imagery, orbital dynamics or critical systems monitoring.',
            'looking.b3': 'Collaborations where machine learning bridges research ideas and operational constraints.',
            'featured.title': 'Featured projects',
            'featured.l1bsr.title': 'L1BSR \u2013 Sentinel\u20112 Super\u2011Resolution',
            'featured.l1bsr.text': 'Self-supervised super-resolution for Sentinel\u20112 imagery, improving spatial resolution for downstream Earth observation tasks.',
            'featured.bigan.title': 'BiGAN Anomaly Detector',
            'featured.bigan.text': 'Bidirectional GAN-based anomaly detection system for complex, high-dimensional data distributions.',
            'featured.vaeanim.title': 'VAE Paper With Animation',
            'featured.vaeanim.text': 'Didactic implementation of Variational Autoencoders with animated visualizations of the latent space.'
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
            'timeline.title': 'Expérience professionnelle',
            'timeline.cs.title': 'Data Scientist | Spécialiste IA & Machine Learning',
            'timeline.cs.company': 'CS Group, Toulouse',
            'timeline.cs.b1': 'Développement de modèles de deep learning et de modèles probabilistes pour des applications spatiales.',
            'timeline.cs.b2': 'Conception de modèles de super-résolution d’images pour le CNES (agence spatiale française).',
            'timeline.cs.b3': 'Construction de modèles prédictifs de manœuvres satellitaires pour le CNES et la DGA.',
            'timeline.cs.b4': 'Contribution à des bibliothèques Python pour le programme Copernicus de l’ESA.',
            'timeline.cs.b5': 'Mise en œuvre de méthodes d’inférence variationnelle et de modèles génératifs adversariaux pour l’analyse de données.',
            'timeline.ch.title': 'Ingénieur en mathématiques appliquées',
            'timeline.ch.company': 'CHAUVIN-ARNOUX, Annecy',
            'timeline.ch.b1': 'Conception d’algorithmes numériques pour l’électronique embarquée (Python, C et C++).',
            'timeline.ch.b2': 'Développement de techniques de déconvolution bayésienne pour le filtrage d’images et filtres IIR 2D.',
            'timeline.ch.b3': 'Construction de modèles à processus gaussiens pour l’analyse d’images de caméras thermiques.',
            'timeline.ch.b4': 'Pilotage de la modélisation électromagnétique basée sur le ML pour un appareil portable de mesure de courant (brevet déposé).',
            'timeline.altran.title': 'Ingénieur consultant | Machine Learning & Robotique',
            'timeline.altran.company': 'ALTRAN, Toulouse',
            'timeline.altran.b1': 'Développement de modèles d’apprentissage supervisé pour la prédiction de turbulence (Airbus R&D).',
            'timeline.altran.b2': 'Conception de systèmes de contrôle de drones basés sur le deep learning.',
            'timeline.altran.b3': 'Application de la cinématique inverse jacobienne pour le contrôle de robots.',
            'timeline.altran.b4': 'Contribution à la validation de la qualité des lois de commande en aéronautique.',
            'timeline.phd.title': 'Doctorant | Optimisation stochastique & IA',
            'timeline.phd.company': 'CNRS/INRA/École Centrale de Lyon, Lyon-Paris',
            'timeline.phd.b1': 'Développement d’algorithmes d’optimisation stochastique pour des systèmes biologiques de grande dimension.',
            'timeline.phd.b2': 'Application de l’optimisation bayésienne et de méthodes à gradient pour des problèmes de haute dimension.',
            'timeline.phd.b3': 'Soumission de travaux à la conférence IEEE <em>Conference On Decision and Control</em> (CDC).',
            'timeline.phd.b4': 'Conception de méthodes de preuve pour des algorithmes d’optimisation sur des systèmes biologiques de grande taille.',
            'portfolio.title': 'Portfolio',
            'portfolio.filter.all': 'Tous',
            'portfolio.filter.deepLearning': 'Deep Learning',
            'portfolio.filter.gan': 'GAN',
            'portfolio.filter.vae': 'VAE',
            'portfolio.filter.cv': 'Vision par ordinateur',
            'portfolio.gmm.desc': 'Autoencodeur variationnel à mélange gaussien implémentant une variante de VAE avec un mélange gaussien comme distribution a priori.',
            'portfolio.vaeAnim.desc': 'Implémentation interactive de VAE avec visualisations animées de l’espace latent.',
            'portfolio.em.desc': "Explication interactive de l’algorithme d’Expectation-Maximization avec application à la classification sur MNIST.",
            'portfolio.bigan.desc': 'Système avancé de détection d’anomalies basé sur une architecture GAN bidirectionnelle.',
            'portfolio.l1bsr.desc': 'Pipeline de super-résolution auto-supervisée pour imagerie Sentinel-2 L1B.',
            'portfolio.l1bsr.b1': 'Conception d’une stratégie d’entraînement entièrement auto-supervisée sans vérité terrain haute résolution.',
            'portfolio.l1bsr.b2': 'Amélioration de la résolution spatiale pour des tâches de suivi et de détection en observation de la Terre.',
            'portfolio.l1bsr.b3': 'Intégration dans une chaîne opérationnelle de traitement d’images satellitaires.',
            'portfolio.vaegan.desc': 'Implémentation de l’architecture VAE-GAN basée sur l’article "Autoencoding beyond pixels using a learned similarity metric".',
            'portfolio.neuralEm.desc': 'Implémentation de "Neural Expectation-Maximization" pour l’apprentissage non supervisé de variables latentes.',
            'portfolio.keras.desc': 'Entraînement de modèles discriminants sur données temporelles avec réglage d’hyperparamètres via KerasTuner.',
            'portfolio.viewProject': 'Voir le projet',
            'contact.title': 'Contact',
            'contact.text': 'Pour toute opportunité, mission de conseil ou collaboration, vous pouvez me contacter directement.',
            'contact.emailCta': 'Envoyer un email',
            'contact.linkedinCta': 'Voir mon profil LinkedIn',
            'footer.text': '&copy; 2024 Marouane Ait El Faqir. Tous droits réservés.',
            'footer.downloadCv': 'Télécharger le CV',
            'looking.title': 'Ce que je recherche',
            'looking.text': "Je suis intéressé par des postes et missions où des techniques avancées de machine learning sont appliquées à des domaines à fort impact comme l’espace, la défense et les systèmes embarqués.",
            'looking.b1': 'Postes R&D ou d’ingénierie centrés sur le deep learning, la modélisation probabiliste et l’apprentissage auto-supervisé.',
            'looking.b2': 'Projets impliquant imagerie satellitaire, dynamique orbitale ou surveillance de systèmes critiques.',
            'looking.b3': 'Collaborations où le machine learning fait le lien entre idées de recherche et contraintes opérationnelles.',
            'featured.title': 'Projets mis en avant',
            'featured.l1bsr.title': 'L1BSR – Super‑résolution Sentinel‑2',
            'featured.l1bsr.text': 'Super‑résolution auto‑supervisée pour imagerie Sentinel‑2, améliorant la résolution spatiale pour les tâches d’observation de la Terre.',
            'featured.bigan.title': 'Détecteur d’anomalies BiGAN',
            'featured.bigan.text': 'Système de détection d’anomalies basé sur un GAN bidirectionnel pour des données complexes de grande dimension.',
            'featured.vaeanim.title': 'VAE Paper With Animation',
            'featured.vaeanim.text': 'Implémentation didactique de VAE avec visualisations animées de l’espace latent.'
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
                el.innerHTML = value;
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
# Personal Portfolio Website

A responsive personal portfolio website, showcasing my professional experience, skills, and projects in machine learning engineering.

## Features

- Clean, minimalist design
- Fully responsive layout
- Dark/Light mode toggle
- Smooth scrolling navigation
- Mobile-friendly navigation with hamburger menu
- Animated sections on scroll
- Social media integration (GitHub, LinkedIn)
- Skill progress bars
- Professional experience timeline
- Portfolio project filtering by category
- Downloadable CV
- Project portfolio with technology tags

## Structure

```
.
├── index.html          # Main HTML file
├── styles/
│   └── main.css        # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── assets/             # Images and downloadable files
│   ├── cv-marouane-1741478147.pdf  # CV file
│   ├── favicon.ico     # Website favicon
│   └── icons/          # SVG icons for social media
│       ├── github.svg
│       └── linkedin.svg
└── README.md           # This file
```

## Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/MarouaneAEF/MarouaneAEF.github.io
   cd MarouaneAEF.github.io
   ```

2. Replace placeholder content:
   - Update text content in `index.html`
   - Add your CV to the assets directory
   - Update project links and descriptions
   - Replace social media links with your own

3. Deploy to GitHub Pages:
   - Push the repository to GitHub
   - Go to repository settings
   - Enable GitHub Pages from the main branch
   - Your site will be available at `https://MarouaneAEF.github.io`

## Customization

### Colors
The color scheme can be modified in `styles/main.css`. Look for the `:root` section:

```css
:root {
    /* Light theme (default) */
    --primary-color: #4a90e2;
    --secondary-color: #2c3e50;
    --background: #f9f9f9;
    --light-background: #ffffff;
    --text-color: #333333;
    --light-text: #666666;
    --border-color: #e0e0e0;
    --card-background: #ffffff;
    --nav-background: rgba(255, 255, 255, 0.95);
    --shadow-color: rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

[data-theme="dark"] {
    /* Dark theme */
    --primary-color: #64b5f6;
    --secondary-color: #90caf9;
    --background: #121212;
    --light-background: #1e1e1e;
    --text-color: #e0e0e0;
    --light-text: #b0b0b0;
    --border-color: #333333;
    --card-background: #1e1e1e;
    --nav-background: rgba(18, 18, 18, 0.95);
    --shadow-color: rgba(0, 0, 0, 0.3);
}
```

### Content
- **CV**: Replace the CV file in the `assets/` directory
- **Social Links**: Update the URLs in the social-links section of `index.html`
- **Skills**: Adjust skill progress bars by changing the width percentages
- **Timeline**: Update your professional experience in the timeline section
- **Portfolio**: Add or modify projects and their category tags

### Sections
Each section can be customized in `index.html`:
- Home: Update name, title, tagline, and contact information
- About: Modify bio and skills
- Services: Edit service offerings
- Portfolio: Update project details and GitHub links
- Timeline: Update professional experience entries

## Features Added
- Dark/Light mode toggle with theme preference saved in local storage
- Professional experience timeline with detailed achievements
- Portfolio filtering system by technology categories (Deep Learning, GAN, VAE, etc.)
- Skill progress bars for visual representation of expertise
- Social media links with custom SVG icons
- Improved mobile navigation with animated hamburger menu
- Enhanced portfolio item styling with hover effects
- Scroll-to-top button for better navigation
- Animations for content sections
- Fixed empty image issues in portfolio items

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

Marouane Ait El Faqir - [m.aitelfaqir@gmail.com](mailto:m.aitelfaqir@gmail.com)
LinkedIn: [linkedin.com/in/marouane-ait-el-faqir-87938ab9](https://www.linkedin.com/in/marouane-ait-el-faqir-87938ab9/)
GitHub: [github.com/MarouaneAEF](https://github.com/MarouaneAEF) 
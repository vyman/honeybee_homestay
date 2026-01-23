# 🐝 Honeybee Homestay Website

A beautiful, responsive static website for Honeybee Homestay located in Chikmagaluru District, Karnataka.

## Features

✨ **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop devices
🎨 **Modern Design** - Clean, professional UI with smooth animations
📱 **Mobile-First** - Optimized for mobile viewing experience
🚀 **Fast Loading** - Static HTML/CSS/JS for optimal performance
♿ **Accessible** - Semantic HTML and ARIA labels for better accessibility

## Sections

1. **Hero Section** - Eye-catching landing with call-to-action
2. **About** - Information about the homestay and location
3. **Rooms** - Showcase of available accommodations
4. **Amenities** - List of facilities and services
5. **Gallery** - Photo gallery of the property
6. **Contact** - Booking inquiry form and contact information
7. **Footer** - Quick links and additional information

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.) for customization
- Web server (optional, for local testing)

### Installation

1. **Download or clone the repository**
   ```bash
   git clone <repository-url>
   cd honeybee_homestay
   ```

2. **Add your images**
   - Place your images in the `images/` folder
   - See `images/README.md` for required image specifications
   - Update image paths in `index.html` if needed

3. **Customize content**
   - Open `index.html` in your text editor
   - Update text content, contact information, and details
   - Modify phone numbers, email addresses, and location details

4. **Customize colors (optional)**
   - Open `styles.css`
   - Modify CSS variables in the `:root` section to match your branding

### Running Locally

**Option 1: Simple HTTP Server (Python)**
```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

**Option 2: Live Server (VS Code Extension)**
- Install "Live Server" extension in VS Code
- Right-click on `index.html` and select "Open with Live Server"

**Option 3: Direct File**
- Simply double-click `index.html` to open in your default browser

## Customization Guide

### Update Contact Information

Edit the contact section in `index.html`:
```html
<p>+91 XXXXX XXXXX</p>  <!-- Replace with your phone number -->
<p>info@honeybeehomestay.com</p>  <!-- Replace with your email -->
```

### Change Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #f0730b;  /* Main brand color */
    --primary-dark: #ba4104;   /* Darker shade */
    --primary-light: #f7b96d;  /* Lighter shade */
}
```

### Add/Remove Rooms

In `index.html`, find the rooms section and duplicate/remove room cards:
```html
<div class="room-card">
    <!-- Room content -->
</div>
```

### Modify Amenities

Update the amenities grid in `index.html` to add or remove facilities.

## Deployment

### Deploy to Web Hosting

1. **Traditional Web Hosting** (cPanel, etc.)
   - Upload all files via FTP/File Manager
   - Ensure `index.html` is in the root directory

2. **GitHub Pages** (Free)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
   - Enable GitHub Pages in repository settings
   - Select main branch as source

3. **Netlify** (Free)
   - Drag and drop the project folder to Netlify
   - Or connect your GitHub repository

4. **Vercel** (Free)
   - Import your GitHub repository
   - Deploy with one click

## File Structure

```
honeybee_homestay/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── images/             # Image assets folder
│   └── README.md       # Image requirements guide
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Breakdown

### Responsive Navigation
- Desktop: Horizontal menu
- Mobile: Hamburger menu with smooth toggle

### Contact Form
- Client-side validation
- Form submission alert (customize to integrate with backend/email service)

### Smooth Scrolling
- Anchor links scroll smoothly to sections

### Animations
- Fade-in effects on scroll
- Hover animations on cards and images

## Future Enhancements

Consider adding:
- [ ] Backend integration for contact form (PHP, Node.js, or form service)
- [ ] Online booking system integration
- [ ] Multi-language support
- [ ] Blog section for local attractions
- [ ] Customer testimonials/reviews section
- [ ] Virtual tour or 360° images
- [ ] Integration with booking platforms (Airbnb, Booking.com)

## Support

For questions or issues:
- Email: info@honeybeehomestay.com
- Phone: +91 XXXXX XXXXX

## License

This website is proprietary to Honeybee Homestay. All rights reserved.

---

**Built with ❤️ for Honeybee Homestay, Chikmagaluru**

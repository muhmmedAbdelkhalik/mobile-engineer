# 🚀 Mobile Engineer Portfolio

A modern, responsive portfolio website for a Senior Flutter Engineer built with React, Vite, TypeScript, and Tailwind CSS. Features automatic CV/PDF generation via GitHub Actions and deployment to GitHub Pages.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with dark mode support
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Vite for optimal speed
- 🎯 **Data-Driven** - All content managed through TypeScript files in `src/data/`
- 📄 **CV/PDF Generation** - Automatic PDF generation in CI/CD pipeline
- 🌐 **GitHub Pages Ready** - Automatic deployment on push to main
- ♿ **Accessible** - Semantic HTML and ARIA attributes
- 🔍 **SEO Optimized** - Meta tags and Open Graph support
- 🎭 **Smooth Animations** - Powered by Framer Motion

## 📦 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **PDF Generation**: react-to-print + Puppeteer (CI)
- **Deployment**: GitHub Pages

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/mobile-engineer.git
   cd mobile-engineer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

## 📝 Customization Guide

### 1. Update Personal Information

Edit the following files in `src/data/`:

**`src/data/siteMeta.ts`** - Basic profile info
```typescript
export const siteMeta: SiteMeta = {
  name: 'Your Name',
  title: 'Your Title',
  location: 'Your Location',
  email: 'your.email@example.com',     // ⚠️ Update this
  phone: '+XX-XXXXXXXXX',               // ⚠️ Update this
  github: 'https://github.com/username', // ⚠️ Update this
  linkedin: 'https://linkedin.com/in/username', // ⚠️ Update this
  bio: 'Your bio...',
}
```

**`src/data/experience.ts`** - Work history

**`src/data/projects.ts`** - Your projects

**`src/data/resume.ts`** - CV content (pulls from other data files)

### 2. Update Base URL

If your repository name is different from `mobile-engineer`, update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/your-repo-name/', // Change this
})
```

### 3. Setup Contact Form

The contact form uses [Formspree](https://formspree.io/) as the primary method:

1. Sign up at [https://formspree.io/](https://formspree.io/)
2. Create a new form and get your form ID
3. Update `src/components/ContactForm.tsx`:
   ```typescript
   const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID' // Replace this
   ```

If Formspree fails, the form falls back to opening the user's default email client.

### 4. Add Project Images

Place your project images in `public/projects/`:
```
public/
  └── projects/
      ├── maraya.png
      ├── erwaa.png
      └── portfolio.png
```

Then reference them in `src/data/projects.ts`:
```typescript
image: '/projects/your-image.png'
```

### 5. Add Profile Photo (Optional)

Replace the circular initial placeholder in `src/components/Hero.tsx` with an actual image:

```tsx
<img
  src="/profile.jpg"
  alt={siteMeta.name}
  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl"
/>
```

Place `profile.jpg` in the `public/` folder.

## 🌐 Deployment

### GitHub Pages (Automatic)

1. **Enable GitHub Pages**
   - Go to your repository Settings → Pages
   - Source: GitHub Actions

2. **Push to main branch**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Wait for deployment**
   - GitHub Actions will automatically build and deploy
   - Your site will be live at: `https://your-username.github.io/mobile-engineer/`
   - CV PDF will be available at: `https://your-username.github.io/mobile-engineer/CV.pdf`

### Manual Deployment

```bash
npm run build
# Upload the `dist` folder to your hosting provider
```

## 📄 CV/PDF Generation

### Client-Side (Browser)

Users can download the CV as PDF by clicking the "Download PDF" button on the `/cv` page. This uses `react-to-print` to trigger the browser's print dialog.

### CI/CD (Automated)

The GitHub Actions workflow automatically generates a PDF during deployment:

1. Builds the project
2. Starts a local server
3. Uses Puppeteer to navigate to `/cv` and save as PDF
4. Includes the PDF in the deployment to `dist/CV.pdf`

The generated PDF is then accessible at:
```
https://your-username.github.io/mobile-engineer/CV.pdf
```

## 🎨 Theme Customization

### Colors

Edit `tailwind.config.js` to change the primary color palette:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... customize these values
  },
}
```

### Fonts

Update the Google Fonts import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet" />
```

Then update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

## 📱 SEO & Social Media

Update meta tags in `index.html`:

```html
<meta name="description" content="Your description" />
<meta property="og:title" content="Your Name - Your Title" />
<meta property="og:image" content="/og-image.png" />
```

Place `og-image.png` (1200x630px recommended) in the `public/` folder.

## 🌍 Internationalization (i18n)

A basic i18n structure is available in `src/data/i18n.ts` for English and Arabic translations. To enable:

1. Implement language switcher in Navbar
2. Use the `t()` helper function for translations
3. Consider using a library like `react-i18next` for advanced features

## 🧪 Testing (Optional)

A basic test structure is included. To add tests:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest
```

Example test for Navbar (create `src/components/__tests__/Navbar.test.tsx`):

```typescript
// Optional: Basic test example
import { render, screen } from '@testing-library/react'
import Navbar from '../Navbar'

test('renders navigation links', () => {
  render(<Navbar theme="light" toggleTheme={() => {}} />)
  expect(screen.getByText('Home')).toBeInTheDocument()
})
```

## 📂 Project Structure

```
mobile-engineer/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD workflow
├── public/
│   ├── favicon.svg             # Site icon
│   └── projects/               # Project images
├── src/
│   ├── assets/                 # Static assets
│   ├── components/             # React components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── Timeline.tsx
│   │   └── ContactForm.tsx
│   ├── pages/                  # Page components
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── CV.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── data/                   # Content data
│   │   ├── siteMeta.ts         # ⚠️ Edit personal info
│   │   ├── resume.ts           # ⚠️ Edit CV content
│   │   ├── projects.ts         # ⚠️ Edit projects
│   │   ├── experience.ts       # ⚠️ Edit work history
│   │   └── i18n.ts             # Translation strings
│   ├── types/
│   │   └── index.ts            # TypeScript types
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── .eslintrc.cjs               # ESLint config
├── .prettierrc                 # Prettier config
├── tailwind.config.js          # Tailwind config
├── vite.config.ts              # Vite config
├── tsconfig.json               # TypeScript config
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🔧 Troubleshooting

### Dark mode not persisting
Check browser's localStorage is enabled.

### Images not loading
Ensure images are in `public/` folder and paths start with `/`.

### CV PDF not generating in CI
Check GitHub Actions logs. Ensure Puppeteer has proper permissions.

### Contact form not working
Update the Formspree endpoint in `ContactForm.tsx`.

### Build errors
Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🇪🇬 تعليمات باللغة العربية (للمصريين)

### كيفية تعديل بيانات السيرة الذاتية

لتحديث معلوماتك الشخصية والسيرة الذاتية، قم بتعديل الملفات التالية:

**ملف `src/data/resume.ts`** - السيرة الذاتية الكاملة

هذا الملف يحتوي على كل محتوى السيرة الذاتية:

```typescript
export const resume: Resume = {
  personal: siteMeta,           // معلوماتك الشخصية
  summary: 'نبذة عنك...',       // ملخص قصير عنك
  experience: experiences,      // خبراتك العملية
  education: [...],             // تعليمك
  skills: [...]                 // مهاراتك
}
```

**لتغيير البيانات الأساسية:**
1. افتح ملف `src/data/siteMeta.ts` وعدّل الاسم، الإيميل، رقم الهاتف
2. افتح ملف `src/data/experience.ts` لتعديل خبراتك العملية
3. افتح ملف `src/data/projects.ts` لإضافة مشاريعك
4. كل التغييرات ستظهر تلقائيًا في صفحة السيرة الذاتية (`/cv`)

**لتشغيل الموقع محليًا:**
```bash
npm install      # تثبيت المكتبات
npm run dev      # تشغيل السيرفر المحلي
```

**ملحوظة**: جميع الملفات في مجلد `src/data/` تستخدم TypeScript، وهي سهلة التعديل - فقط اتبع النمط الموجود!

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/mobile-engineer/issues).

## 👤 Author

**Mohammed**
- Location: Dubai (Remote)
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [your-profile](https://linkedin.com/in/your-profile)

---

Made with ❤️ using React, TypeScript, and Tailwind CSS

# **Portfolio Website – Vite + React(19) + TailwindCSS(v4)**

A modern, fast, and responsive portfolio website built using **Vite**, **React**, and **TailwindCSS**.
Designed to showcase personal projects, skills, and contact information with clean UI components and smooth performance.

This documentation covers everything for **the client** and **future developers** who may work on the project.

---

# **Overview (For Client)**

This website is built to be:

* Fast
* Mobile-friendly
* Easy to update
* Professional and lightweight

You can update:

* Text content (Hero, Skills, Projects, Contact section)
* Images & videos inside `/public/videos`
* Social links inside relevant components

If you want any future changes, any developer can follow the instructions below.

---

#  **Tech Stack**

* **React**
* **Vite**
* **TailwindCSS**
* **Lucide-react** (icons)
* **React-icons**
* **Web3Forms** (contact form submission)

---

# 📁 **Project Structure**

```
root/
├── public/
│   ├── videos/
│   │   ├── video1.mp4
│   │   ├── video2.mp4
│   │   ├── video3.mp4
│   │   ├── video4.mp4
│   │   └── thumbnails/
│   │        ├── video1.png
│   │        ├── video2.png
│   │        ├── video3.png
│   │        └── video4.png
│   └── favion/
│       └── logo.png
├── src/
│   ├── components/
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Skills.jsx
│   │   └── Work.jsx
│   │   └── utils/
│   │       ├── ContactForm.jsx
│   │       ├── PortfolioItem.jsx
│   │       └── SkillCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitigonre
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

# 🚀 **Getting Started (For Developers)**

### **1. Clone the repository**

```bash
git clone https://github.com/khababwork/portfolio.git
cd portfolio
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Start development server**

```bash
npm run dev
```

### **4. Build for production**

```bash
npm run build
```

### **5. Preview production build**

```bash
npm run preview
```

---

#  **Important Files (For Developers)**

### **Component Folder**

All UI components like:

* Navbar
* Hero
* Skills
* Portfolio items
* Contact form

can be edited individually inside:

```
src/components/
```

### **Videos**

All project demo videos live in:

```
public/videos/
```

Replacing them with new videos keeps the portfolio updated.

### **Contact Form**

Web3Forms is used for sending emails.

To change the receiving email:

* Go to `ContactForm.jsx`
* Replace the `access_key` with your own from Web3Forms dashboard

---

#  **Styling (TailwindCSS)**

Tailwind enables:

* Rapid design changes
* Consistent spacing & colors
* Fully responsive layouts

To modify global styling, edit:

```
index.css
```

---

#  **Deployment (Recommended: Vercel)**

### Steps:

1. Connect GitHub repo to Vercel
2. Vercel automatically builds & deploys the site
3. Add client’s custom domain (optional)

No backend is needed.

---

#  **How to Update the Website (Client-Friendly)**

###  Change text

Edit any section inside the `components/` folder.

###  Replace videos

Just replace the `.mp4` files in:

```
public/videos/
```

###  Change social links

Go to `Navbar.jsx`, `Footer.jsx`, or `Contact.jsx`.

###  Change colors or styles

Tailwind classes can be edited directly in JSX files.

---

# **Developed By**

**Aqeel Sheikh - sheikhakeelw01@gmail.com**

---

# **License**

This project is proprietary and confidential.

# Support
For questions or issues, please contact [sheikhakeelw01@gmail.com]

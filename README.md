# 🍳 Recipe Finder

A modern, interactive web application that helps users discover and explore recipes from around the world. Built with React and powered by TheMealDB API, this application features a sleek glassmorphic design with dynamic animations and an intuitive user interface.

![Recipe Finder Preview](https://raw.githubusercontent.com/aaryan4985/recipe-finder/main/preview.png)

## ✨ Features

- **Advanced Recipe Search**: Search through thousands of recipes instantly
- **Category Filtering**: Browse recipes by food categories
- **Regional Cuisine Filter**: Explore dishes from different regions of the world
- **Responsive Design**: Seamless experience across all devices
- **Modern UI/UX**:
  - Glassmorphic design elements
  - Smooth animations and transitions
  - Dynamic background effects
  - Interactive recipe cards

## 🚀 Live Demo

Check out the live demo: [Recipe Finder App](https://recipe-finder-aaryan4985.vercel.app/)

## 🛠️ Technologies Used

- React.js
- React Router DOM
- Framer Motion
- Tailwind CSS
- TheMealDB API

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/aaryan4985/recipe-finder.git
```

2. Navigate to the project directory:

```bash
cd recipe-finder
```

3. Install dependencies:

```bash
npm install
```

4. Install additional dependencies for animations and styling:

```bash
npm install framer-motion @tailwindcss/typography
```

5. Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`

## 🎨 Environment Setup

1. Update your tailwind.config.js:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
```

2. Add the following animations to your CSS:

```css
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
```

## 📱 Usage

1. **Search Recipes**: Use the search bar to find recipes by name
2. **Filter by Category**: Select from various food categories using the dropdown
3. **Filter by Region**: Explore recipes from different cuisines using the region filter
4. **View Recipe Details**: Click on any recipe card to see detailed instructions and ingredients
5. **Responsive Design**: Access the application seamlessly on any device

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 🙏 Acknowledgments

- [TheMealDB](https://www.themealdb.com/) for providing the API
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for animations
- [React Router](https://reactrouter.com/) for routing

## 📞 Contact

Aaryan - [@aaryan4985](https://github.com/aaryan4985)

Project Link: [https://github.com/aaryan4985/recipe-finder](https://github.com/aaryan4985/recipe-finder)

---

⭐️ If you found this project helpful, please give it a star on GitHub!

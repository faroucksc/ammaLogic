module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    // Include any other directories with Vue files
  ],

  theme: {
    extend: {
      // Custom colors
      colors: {
        'amma-blue': '#007bff', // A vibrant blue, for example
        'amma-gray': '#1f2937', // A deep gray for backgrounds or text
        'amma-accent': '#ff3e00', // An accent color for buttons or links
      },

      // Custom typography
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // A modern, clean font for body text
        serif: ['Merriweather', 'serif'], // Optionally, a serif font for headings
      },

      // Custom spacing, sizes, etc.
      spacing: {
        '128': '32rem', // Example of a large spacing size
        '144': '36rem', // Example of an even larger spacing size
      },

      // Custom breakpoints for responsive design
      screens: {
        '2xl': '1440px', // Example of a custom breakpoint
      },

      // Other customizations can go here
      // For example, borderWidth, boxShadow, borderRadius, etc.
    },
  },

  // Variants for different states
  variants: {
    extend: {
      // Extend variants as needed
      // For example, backgroundColor: ['active'], borderColor: ['focus-visible'], etc.
    },
  },

  plugins: [
    // Here you can add Tailwind CSS plugins
    // For example, forms, typography, aspect-ratio, etc.
  ],
};

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        tertiary: '#3bace2'
      },
      backgroundImage: {
        site: "url('../assets/site-bg.jpg')",
        about: "url('../assets/about-removebg.png')",
        services: "url('../assets/services.png')",
        unip: "url('../assets/logo-unip-removebg.png')",
        edessa: "url('../assets/logo-edessa-removebg.png')",
        unasp:  "url('../assets/logo-unasp-removebg.png')",
        nvgo:  "url('../assets/logo-nvgo-removebg.png')",
        meza: "url('../assets/logo-meza-removebg.png')",
        ids:  "url('../assets/logo-ids-removebg.png')",
        firgun:  "url('../assets/logo-firgun-removebg.png')",
        rocketseat:  "url('../assets/logo-rocketseat-removebg.png')"
      },
    },
  },
  plugins: [],
});

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        my: {
          '22279a': '#22279a',
          '3d3d3d': '#3d3d3d',
          '4daaba': '#4daaba',
          '813e83': '#813e83',
          '85be28': '#85be28',
          '99c9e0': '#99c9e0',
          '9a99e0': '#9a99e0',
          'rgba(255,0,0,0.3)': 'rgba(255,0,0,0.3)',
          aed686: '#aed686',
          c4c4c4: '#c4c4c4',
          caa5d7: '#caa5d7',
          ec9c25: '#ec9c25',
          f00: '#f00',
          f5c964: '#f5c964',
          ff7700: '#ff7700',
        },
      },
      fontSize: {
        '28px': '28px',
        '32px': '32px',
        '42px': '42px',
        '65px': '65px',
      },
      width: {
        '7px': '7px',
        '10.5px': '10.5px',
        '14px': '14px',
        '285px': '285px',
        '665px': '665px',
      },
      height: {
        '7px': '7px',
        '10.5px': '10.5px',
        '14px': '14px',
        '46px': '46px',
        '136px': '136px',
        '249px': '249px',
        '340px': '340px',
        '435px': '435px',
        '571px': '571px',
      },
      spacing: {
        '2px': '2px',
        '10.5px': '10.5px',
      },
      transitionDuration: {
        1500: '1500ms',
      },
    },
    fontFamily: {
      main: ['Balsamiq Sans', 'sans-serif'],
      icon: ['fontello', 'Balsamiq Sans', 'sans-serif'],
    },
  },
  // https://www.tailwindcss.cn/docs/pseudo-class-variants/#active
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};

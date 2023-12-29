import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      maxWidth: {
        app: '700px',
        web: '1118px',
        large: '1200px',
      },
      width: {
        ButtonLg: '241px',
      },
      backgroundImage: {
        ellipseVerdeLogin: "url('/imgs/fundo.svg')",
        ellipseCinzaLogin: "url('/imgs/fundo2.svg)",
      },
      colors: {
        green: '#6FCF97',
        background: '#1D1D1D',
        greenOpacity: 'rgba(2, 177, 90, 0.15)',
        green200: '#27AE60',
        green300: '#02B15A',
        blue200: '#64CFF6',
        blue400: '#6359E9',
        blue500: '#464687',
        blue600: '#27264E',
        blue700: '#1D1D41',
        blue800: '#141332',
        redOpacity: 'rgba(235, 0, 27, 0.15)',
        red: '#E41414',
        gray400: 'rgba(174, 171, 216, 0.53)',
        gray100: '#d2d2d2',
        gray200: '#AEABD8',
        gray300: '#A9A9A9',
        white: '#FFF',
      },
    },
  },
  plugins: [],
}
export default config

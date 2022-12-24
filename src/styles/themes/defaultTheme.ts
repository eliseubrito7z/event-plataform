import { extendTheme } from '@chakra-ui/react'
export const defaultTheme = extendTheme({
  styles: {
    global: () => ({
      body: {
        backgroundColor: '#09090A',
        color: '#E1E1E6',
        WebkitFontSmoothing: 'antialiased',
      },
      'body, input, textarea, select, button': {
        font: "400 1rem 'Roboto', sans-serif",
      },
      button: {
        cursor: 'pointer',
      },
    }),
  },
  colors: {
    green: {
      300: '#00B37E',
      500: '#00875F',
      700: '#015F43',
    },
    blue: {
      500: '#81D8F7',
    },
    orange: {
      500: '#FBA94C',
    },
    red: {
      500: '#F75A68',
    },
    gray: {
      100: '#E1E1E6',
      200: '#C4C4CC',
      300: '#8D8D99',
      500: '#323238',
      600: '#29292E',
      700: '#121214',
      900: '#09090A',
    },
  },
  components: {
    Text: {
      variants: {
        headerLink: {
          display: 'inline-block',
          position: 'relative',
          padding: '0.5rem',
          height: '5rem',
          lineHeight: '5rem',
          color: '#a8a8b3',

          transition: 'color 0.2s',

          '&:hover': {
            color: '#FFFFFF',
          },

          '&.active': {
            color: '#yellow',
          },
        },
        'span-home': {
          fontSize: '1.5rem',
          fontWeight: 'bold',
        },
        'h1-home': {
          fontSize: '4.5rem',
          fontWeight: '900',
          lineHeight: '4.5rem',
          marginTop: '2.5rem',

          strong: {
            color: '#61dafb',
          },
        },
        'p-home': {
          fontSize: '1.5rem',
          lineHeight: '2.25rem',
          marginTop: '1.5rem',

          span: {
            color: '#61dafb',
            fontWeight: 'bold',
          },
        },
      },
      postText: {
        color: '#a8a8b3',
        marginTop: '0.5rem',
        lineHeight: 1.625,
      },
    },
    Link: {
      variants: {
        buttonLink: {
          padding: '4',
          fontSize: 'sm',
          fontWeight: 'bold',
          display: 'flex',
          borderRadius: '4px',
          textTransform: 'uppercase',
          gap: '2',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    },
  },
})

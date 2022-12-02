import { createTheme } from '@mui/material/styles'

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    poster: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h7: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }
  interface TypographyVariants {
    poster: React.CSSProperties;
  }
  interface TypographyVariants {
    h7: React.CSSProperties;
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    h7?: React.CSSProperties;
  }
  interface BreakpointOverrides {
    ss: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}


export const theme = createTheme({
  breakpoints: {
    values: {
      ss: 0,
      xs: 450,
      sm: 768,
      md: 1024,
      lg: 1366,
      xl: 1600,
    }
  },
  typography: {
    h1: {
      fontFamily: 'PekingDuckDEMO',
      fontSize: '36px',
      fontWeight: 400
    },
    h2: {
      fontFamily: 'Montserrat',
      fontSize: '30px',
      fontWeight: 800
    },
    h3: {
      fontFamily: 'Montserrat',
      fontSize: '20px',
      fontWeight: 800
    },
    h4: {
      fontFamily: 'Montserrat',
      fontSize: '18px',
      fontWeight: 600
    },
    h5: {
      fontFamily: 'Montserrat',
      fontSize: '16px',
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'Montserrat',
      fontSize: '13px',
      fontWeight: 600,
    },
    h7: {
      fontFamily: 'Montserrat',
      fontSize: '13px',
      fontWeight: 500,
    },
    button: {
      fontFamily: 'Inter',
      fontSize: '18px',
      fontWeight: 700,
    },
    poster: {
      fontFamily: 'Inter',
      fontSize: '18px',
      fontWeight: 700,
    }
  },
  palette: {
    primary: {
      main: '#566FFE'
    },
    secondary: {
      main: '#183B56'
    },
    neutral: {
      main: '#FF5050',
      contrastText: '#fff',
    },
  },
})
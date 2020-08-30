const black87 = 'rgba(black, 0.87)';
const white87 = 'rgba(white, 0.87)';
const black12 = 'rgba(black, 0.12)';
const white12 = 'rgba(white, 0.12)';
const black6 = 'rgba(black, 0.06)';
const white6 = 'rgba(white, 0.06)';

const matColors = {
  red: {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
    contrast: {
      50: black87,
      100: black87,
      200: black87,
      300: black87,
      400: black87,
      500: 'white',
      600: 'white',
      700: 'white',
      800: white87,
      900: white87,
      A100: black87,
      A200: 'white',
      A400: 'white',
      A700: 'white',
    },
  },

  pink: {
    50: '#fce4ec',
    100: '#f8bbd0',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#e91e63',
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f',
    A100: '#ff80ab',
    A200: '#ff4081',
    A400: '#f50057',
    A700: '#c51162',
    contrast: {
      50: black87,
      100: black87,
      200: black87,
      300: black87,
      400: black87,
      500: 'white',
      600: 'white',
      700: white87,
      800: white87,
      900: white87,
      A100: black87,
      A200: 'white',
      A400: 'white',
      A700: 'white',
    },
  },

  purple: {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff',
    contrast: {
      50: black87,
      100: black87,
      200: black87,
      300: 'white',
      400: 'white',
      500: white87,
      600: white87,
      700: white87,
      800: white87,
      900: white87,
      A100: black87,
      A200: 'white',
      A400: 'white',
      A700: 'white',
    },
  },

  'deep-purple': {
    50: '#ede7f6',
    100: '#d1c4e9',
    200: '#b39ddb',
    300: '#9575cd',
    400: '#7e57c2',
    500: '#673ab7',
    600: '#5e35b1',
    700: '#512da8',
    800: '#4527a0',
    900: '#311b92',
    A100: '#b388ff',
    A200: '#7c4dff',
    A400: '#651fff',
    A700: '#6200ea',
    contrast: {
      50: black87,
      100: black87,
      200: black87,
      300: 'white',
      400: 'white',
      500: white87,
      600: white87,
      700: white87,
      800: white87,
      900: white87,
      A100: black87,
      A200: 'white',
      A400: white87,
      A700: white87,
    },
  },

  indigo: {
    50: '#e8eaf6',
    100: '#c5cae9',
    200: '#9fa8da',
    300: '#7986cb',
    400: '#5c6bc0',
    500: '#3f51b5',
    600: '#3949ab',
    700: '#303f9f',
    800: '#283593',
    900: '#1a237e',
    A100: '#8c9eff',
    A200: '#536dfe',
    A400: '#3d5afe',
    A700: '#304ffe',
    contrast: {
      50: black87,
      100: black87,
      200: black87,
      300: 'white',
      400: 'white',
      500: white87,
      600: white87,
      700: white87,
      800: white87,
      900: white87,
      A100: black87,
      A200: 'white',
      A400: 'white',
      A700: white87,
    },
  },

  blue: {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
    contrast: {
      50: black87,
      100: black87,
      200: black87,
      300: black87,
      400: black87,
      500: 'white',
      600: 'white',
      700: 'white',
      800: white87,
      900: white87,
      A100: black87,
      A200: 'white',
      A400: 'white',
      A700: 'white',
    },
  },

  'light-blue': {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea',
    contrast: {
      50: black87,
      100: black87,
      200: black87,
      300: black87,
      400: black87,
      500: 'white',
      600: 'white',
      700: 'white',
      800: 'white',
      900: white87,
      A100: black87,
      A200: black87,
      A400: black87,
      A700: 'white',
    },
  },

  cyan: {
    50: '#e0f7fa',
    100: '#b2ebf2',
    200: '#80deea',
    300: '#4dd0e1',
    400: '#26c6da',
    500: '#00bcd4',
    600: '#00acc1',
    700: '#0097a7',
    800: '#00838f',
    900: '#006064',
    A100: '#84ffff',
    A200: '#18ffff',
    A400: '#00e5ff',
    A700: '#00b8d4',
    contrast: {
      50: black87,
      100: black87,
      200: black87,
      300: black87,
      400: black87,
      500: 'white',
      600: 'white',
      700: 'white',
      800: 'white',
      900: white87,
      A100: black87,
      A200: black87,
      A400: black87,
      A700: black87,
    },
  },

  teal: {
    50: '#e0f2f1',
    100: '#b2dfdb',
    200: '#80cbc4',
    300: '#4db6ac',
    400: '#26a69a',
    500: '#009688',
    600: '#00897b',
    700: '#00796b',
    800: '#00695c',
    900: '#004d40',
    A100: '#a7ffeb',
    A200: '#64ffda',
    A400: '#1de9b6',
    A700: '#00bfa5',
    contrast: {
      50: black87,
      100: black87,
      200: black87,
      300: black87,
      400: black87,
      500: 'white',
      600: 'white',
      700: 'white',
      800: white87,
      900: white87,
      A100: black87,
      A200: black87,
      A400: black87,
      A700: black87,
    },
  },

  green: {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
    contrast: {
      50: black87,
      100: black87,
      200: black87,
      300: black87,
      400: black87,
      500: 'white',
      600: 'white',
      700: 'white',
      800: white87,
      900: white87,
      A100: black87,
      A200: black87,
      A400: black87,
      A700: black87,
    },
  },

  'light-green': {
    50: '#f1f8e9',
    100: '#dcedc8',
    200: '#c5e1a5',
    300: '#aed581',
    400: '#9ccc65',
    500: '#8bc34a',
    600: '#7cb342',
    700: '#689f38',
    800: '#558b2f',
    900: '#33691e',
    A100: '#ccff90',
    A200: '#b2ff59',
    A400: '#76ff03',
    A700: '#64dd17',
    contrast: {
      50: black87,
      100: black87,
      200: black87,
      300: black87,
      400: black87,
      500: black87,
      600: black87,
      700: black87,
      800: 'white',
      900: 'white',
      A100: black87,
      A200: black87,
      A400: black87,
      A700: black87,
    },
  },

  lime: {
    50: '#f9fbe7',
    100: '#f0f4c3',
    200: '#e6ee9c',
    300: '#dce775',
    400: '#d4e157',
    500: '#cddc39',
    600: '#c0ca33',
    700: '#afb42b',
    800: '#9e9d24',
    900: '#827717',
    A100: '#f4ff81',
    A200: '#eeff41',
    A400: '#c6ff00',
    A700: '#aeea00',
    contrast: {
      50: black87,
      100: black87,
      200: black87,
      300: black87,
      400: black87,
      500: black87,
      600: black87,
      700: black87,
      800: black87,
      900: 'white',
      A100: black87,
      A200: black87,
      A400: black87,
      A700: black87,
    },
  },

  yellow: {
    50: '#fffde7',
    100: '#fff9c4',
    200: '#fff59d',
    300: '#fff176',
    400: '#ffee58',
    500: '#ffeb3b',
    600: '#fdd835',
    700: '#fbc02d',
    800: '#f9a825',
    900: '#f57f17',
    A100: '#ffff8d',
    A200: '#ffff00',
    A400: '#ffea00',
    A700: '#ffd600',
    contrast: {
      50: black87,
      100: black87,
      200: black87,
      300: black87,
      400: black87,
      500: black87,
      600: black87,
      700: black87,
      800: black87,
      900: black87,
      A100: black87,
      A200: black87,
      A400: black87,
      A700: black87,
    },
  },

  amber: {
    50: '#fff8e1',
    100: '#ffecb3',
    200: '#ffe082',
    300: '#ffd54f',
    400: '#ffca28',
    500: '#ffc107',
    600: '#ffb300',
    700: '#ffa000',
    800: '#ff8f00',
    900: '#ff6f00',
    A100: '#ffe57f',
    A200: '#ffd740',
    A400: '#ffc400',
    A700: '#ffab00',
    contrast: {
      50: black87,
      100: black87,
      200: black87,
      300: black87,
      400: black87,
      500: black87,
      600: black87,
      700: black87,
      800: black87,
      900: black87,
      A100: black87,
      A200: black87,
      A400: black87,
      A700: black87,
    },
  },

  orange: {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
    contrast: {
      50: black87,
      100: black87,
      200: black87,
      300: black87,
      400: black87,
      500: black87,
      600: black87,
      700: black87,
      800: 'white',
      900: 'white',
      A100: black87,
      A200: black87,
      A400: black87,
      A700: 'black',
    },
  },

  'deep-orange': {
    50: '#fbe9e7',
    100: '#ffccbc',
    200: '#ffab91',
    300: '#ff8a65',
    400: '#ff7043',
    500: '#ff5722',
    600: '#f4511e',
    700: '#e64a19',
    800: '#d84315',
    900: '#bf360c',
    A100: '#ff9e80',
    A200: '#ff6e40',
    A400: '#ff3d00',
    A700: '#dd2c00',
    contrast: {
      50: black87,
      100: black87,
      200: black87,
      300: black87,
      400: black87,
      500: 'white',
      600: 'white',
      700: 'white',
      800: 'white',
      900: 'white',
      A100: black87,
      A200: black87,
      A400: 'white',
      A700: 'white',
    },
  },

  brown: {
    50: '#efebe9',
    100: '#d7ccc8',
    200: '#bcaaa4',
    300: '#a1887f',
    400: '#8d6e63',
    500: '#795548',
    600: '#6d4c41',
    700: '#5d4037',
    800: '#4e342e',
    900: '#3e2723',
    A100: '#d7ccc8',
    A200: '#bcaaa4',
    A400: '#8d6e63',
    A700: '#5d4037',
    contrast: {
      50: black87,
      100: black87,
      200: black87,
      300: 'white',
      400: 'white',
      500: white87,
      600: white87,
      700: white87,
      800: white87,
      900: white87,
      A100: black87,
      A200: black87,
      A400: 'white',
      A700: white87,
    },
  },

  grey: {
    0: '#ffffff',
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    1000: '#000000',
    A100: '#ffffff',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
    contrast: {
      0: black87,
      50: black87,
      100: black87,
      200: black87,
      300: black87,
      400: black87,
      500: black87,
      600: white87,
      700: white87,
      800: white87,
      900: white87,
      1000: white87,
      A100: black87,
      A200: black87,
      A400: black87,
      A700: white87,
    },
  },

  'blue-grey': {
    50: '#eceff1',
    100: '#cfd8dc',
    200: '#b0bec5',
    300: '#90a4ae',
    400: '#78909c',
    500: '#607d8b',
    600: '#546e7a',
    700: '#455a64',
    800: '#37474f',
    900: '#263238',
    A100: '#cfd8dc',
    A200: '#b0bec5',
    A400: '#78909c',
    A700: '#455a64',
    contrast: {
      50: black87,
      100: black87,
      200: black87,
      300: black87,
      400: 'white',
      500: 'white',
      600: white87,
      700: white87,
      800: white87,
      900: white87,
      A100: black87,
      A200: black87,
      A400: 'white',
      A700: white87,
    },
  },

  'fuse-navy': {
    50: '#ECECEE',
    100: '#C5C6CB',
    200: '#9EA1A9',
    300: '#7D818C',
    400: '#5C616F',
    500: '#3C4252',
    600: '#353A48',
    700: '#2D323E',
    800: '#262933',
    900: '#1E2129',
    A100: '#C5C6CB',
    A200: '#9EA1A9',
    A400: '#5C616F',
    A700: '#2D323E',
    contrast: {
      50: black87,
      100: black87,
      200: black87,
      300: 'white',
      400: 'white',
      500: white87,
      600: white87,
      700: white87,
      800: white87,
      900: white87,
      A100: black87,
      A200: white87,
      A400: white87,
      A700: white87,
    },
  },

  'fuse-white': {
    500: 'white',
    contrast: {
      500: black87,
    },
  },

  'fuse-black': {
    500: 'black',
    contrast: {
      500: 'white',
    },
  },
};

// tslint:disable-next-line
const matPresetColors = [
  '#ffebee',
  '#ffcdd2',
  '#ef9a9a',
  '#e57373',
  '#ef5350',
  '#f44336',
  '#e53935',
  '#d32f2f',
  '#c62828',
  '#b71c1c',
  '#ff8a80',
  '#ff5252',
  '#ff1744',
  '#d50000',
  '#fce4ec',
  '#f8bbd0',
  '#f48fb1',
  '#f06292',
  '#ec407a',
  '#e91e63',
  '#d81b60',
  '#c2185b',
  '#ad1457',
  '#880e4f',
  '#ff80ab',
  '#ff4081',
  '#f50057',
  '#c51162',
  '#f3e5f5',
  '#e1bee7',
  '#ce93d8',
  '#ba68c8',
  '#ab47bc',
  '#9c27b0',
  '#8e24aa',
  '#7b1fa2',
  '#6a1b9a',
  '#4a148c',
  '#ea80fc',
  '#e040fb',
  '#d500f9',
  '#aa00ff',
  '#ede7f6',
  '#d1c4e9',
  '#b39ddb',
  '#9575cd',
  '#7e57c2',
  '#673ab7',
  '#5e35b1',
  '#512da8',
  '#4527a0',
  '#311b92',
  '#b388ff',
  '#7c4dff',
  '#651fff',
  '#6200ea',
  '#e8eaf6',
  '#c5cae9',
  '#9fa8da',
  '#7986cb',
  '#5c6bc0',
  '#3f51b5',
  '#3949ab',
  '#303f9f',
  '#283593',
  '#1a237e',
  '#8c9eff',
  '#536dfe',
  '#3d5afe',
  '#304ffe',
  '#e3f2fd',
  '#bbdefb',
  '#90caf9',
  '#64b5f6',
  '#42a5f5',
  '#2196f3',
  '#1e88e5',
  '#1976d2',
  '#1565c0',
  '#0d47a1',
  '#82b1ff',
  '#448aff',
  '#2979ff',
  '#2962ff',
  '#e1f5fe',
  '#b3e5fc',
  '#81d4fa',
  '#4fc3f7',
  '#29b6f6',
  '#03a9f4',
  '#039be5',
  '#0288d1',
  '#0277bd',
  '#01579b',
  '#80d8ff',
  '#40c4ff',
  '#00b0ff',
  '#0091ea',
  '#e0f7fa',
  '#b2ebf2',
  '#80deea',
  '#4dd0e1',
  '#26c6da',
  '#00bcd4',
  '#00acc1',
  '#0097a7',
  '#00838f',
  '#006064',
  '#84ffff',
  '#18ffff',
  '#00e5ff',
  '#00b8d4',
  '#e0f2f1',
  '#b2dfdb',
  '#80cbc4',
  '#4db6ac',
  '#26a69a',
  '#009688',
  '#00897b',
  '#00796b',
  '#00695c',
  '#004d40',
  '#a7ffeb',
  '#64ffda',
  '#1de9b6',
  '#00bfa5',
  '#e8f5e9',
  '#c8e6c9',
  '#a5d6a7',
  '#81c784',
  '#66bb6a',
  '#4caf50',
  '#43a047',
  '#388e3c',
  '#2e7d32',
  '#1b5e20',
  '#b9f6ca',
  '#69f0ae',
  '#00e676',
  '#00c853',
  '#f1f8e9',
  '#dcedc8',
  '#c5e1a5',
  '#aed581',
  '#9ccc65',
  '#8bc34a',
  '#7cb342',
  '#689f38',
  '#558b2f',
  '#33691e',
  '#ccff90',
  '#b2ff59',
  '#76ff03',
  '#64dd17',
  '#f9fbe7',
  '#f0f4c3',
  '#e6ee9c',
  '#dce775',
  '#d4e157',
  '#cddc39',
  '#c0ca33',
  '#afb42b',
  '#9e9d24',
  '#827717',
  '#f4ff81',
  '#eeff41',
  '#c6ff00',
  '#aeea00',
  '#fffde7',
  '#fff9c4',
  '#fff59d',
  '#fff176',
  '#ffee58',
  '#ffeb3b',
  '#fdd835',
  '#fbc02d',
  '#f9a825',
  '#f57f17',
  '#ffff8d',
  '#ffff00',
  '#ffea00',
  '#ffd600',
  '#fff8e1',
  '#ffecb3',
  '#ffe082',
  '#ffd54f',
  '#ffca28',
  '#ffc107',
  '#ffb300',
  '#ffa000',
  '#ff8f00',
  '#ff6f00',
  '#ffe57f',
  '#ffd740',
  '#ffc400',
  '#ffab00',
  '#fff3e0',
  '#ffe0b2',
  '#ffcc80',
  '#ffb74d',
  '#ffa726',
  '#ff9800',
  '#fb8c00',
  '#f57c00',
  '#ef6c00',
  '#e65100',
  '#ffd180',
  '#ffab40',
  '#ff9100',
  '#ff6d00',
  '#fbe9e7',
  '#ffccbc',
  '#ffab91',
  '#ff8a65',
  '#ff7043',
  '#ff5722',
  '#f4511e',
  '#e64a19',
  '#d84315',
  '#bf360c',
  '#ff9e80',
  '#ff6e40',
  '#ff3d00',
  '#dd2c00',
  '#efebe9',
  '#d7ccc8',
  '#bcaaa4',
  '#a1887f',
  '#8d6e63',
  '#795548',
  '#6d4c41',
  '#5d4037',
  '#4e342e',
  '#3e2723',
  '#d7ccc8',
  '#bcaaa4',
  '#8d6e63',
  '#5d4037',
  '#fafafa',
  '#f5f5f5',
  '#eeeeee',
  '#e0e0e0',
  '#bdbdbd',
  '#9e9e9e',
  '#757575',
  '#616161',
  '#424242',
  '#212121',
  '#ffffff',
  '#eeeeee',
  '#bdbdbd',
  '#616161',
  '#eceff1',
  '#cfd8dc',
  '#b0bec5',
  '#90a4ae',
  '#78909c',
  '#607d8b',
  '#546e7a',
  '#455a64',
  '#37474f',
  '#263238',
  '#cfd8dc',
  '#b0bec5',
  '#78909c',
  '#455a64',
];

/**
 // Color palettes from the Material Design spec.
 // See https://www.google.com/design/spec/style/color.html
 */
export class MatColors {
  public static all = matColors;
  public static presets = matPresetColors;

  public static getColor(colorName): any {
    if (matColors[colorName]) {
      return matColors[colorName];
    }

    return false;
  }
}

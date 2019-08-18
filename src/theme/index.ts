import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { darken, lighten, fade } from '@material-ui/core/styles/colorManipulator'
import ExpandMore from '@material-ui/icons/ExpandMore'
import createMyTheme from './createTheme'
import createPalette from './createPalette'
// import { ThemeMode } from '../index.ts/types'

type ThemeMode = 'light' | 'dark'

export default (themeMode: ThemeMode = 'light') => {
  const theme = createMuiTheme()

  const palette = createPalette({
    type: themeMode,
    primary: {
      main: themeMode === 'dark' ? 'rgb(29, 161, 242, 1)' : '#466FB1',
      light: themeMode === 'dark' ? 'rgb(29, 161, 242, 0.2)' : '#D2DBEB',
    },
    error: {
      main: '#FF7373',
    },
    success: '#99CB72',
    warning: '#FFB673',
    yellow: '#F4F91E',
    background: {
      paper: themeMode === 'dark' ? 'rgb(28, 41, 56)' : '#fff',
      default: themeMode === 'dark' ? 'rgb(16, 23, 30)' : '#fafafa',
    },
  })

  return createMyTheme({
    typography: {
      useNextVariants: true,
    },
    palette,
    drawerWidth: theme.spacing(30),
    sectionTitle: {
      marginBottom: theme.spacing(2),
      color: themeMode === 'dark' ? palette.text.primary : palette.primary.main,
    },
    overrides: {
      MuiInputLabel: {
        outlined: {
          transform: 'translate(14px, 13px) scale(1)',
        },
      },
      MuiOutlinedInput: {
        root: {
          borderRadius: '4px',
          backgroundColor: palette.background.paper,
        },
        input: {
          height: theme.spacing(5),
          padding: theme.spacing(1, 1.5),
          boxSizing: 'border-box',
          borderRadius: theme.spacing(1) / 2,
          overflow: 'hidden',
          backgroundColor: palette.background.paper,
        },
        multiline: {
          minHeight: theme.spacing(5),
          padding: theme.spacing(1, 1.5),
          boxSizing: 'border-box',
        },
        adornedStart: {
          paddingLeft: theme.spacing(1.5),
        },
      },

      MuiSelect: {
        icon: {
          marginRight: theme.spacing(1.75),
        },
        selectMenu: {
          paddingRight: `${theme.spacing(5)}px !important`,
        },
      },

      MuiTableRow: {
        head: {
          height: theme.spacing(6),
        },
      },
      MuiTableCell: {
        root: {
          height: theme.spacing(5),
          padding: theme.spacing(0.25, 3),
          borderBottom: `1px solid ${
            themeMode === 'light'
              ? lighten(fade(theme.palette.divider, 1), 0.88)
              : darken(fade(theme.palette.divider, 1), 0.68)
          }`,
          whiteSpace: 'nowrap',
        },
      },

      MuiFormLabel: {
        root: {
          display: 'block',
          marginBottom: theme.spacing(1),
          fontSize: theme.typography.pxToRem(theme.spacing(1.75)),
        },
      },
      MuiFormHelperText: {
        contained: {
          marginLeft: 0,
        },
      },
      MuiDialog: {
        paper: {
          overflowY: 'visible',
        },
      },
      MuiDialogContent: {
        root: {
          overflowY: 'visible',
        },
      },
      MuiIconButton: {
        root: {
          padding: theme.spacing(1),
        },
      },

      MuiSwitch: {
        root: {
          padding: theme.spacing(1.75),
          overflow: 'visible',
        },
        track: {
          width: theme.spacing(3.5),
          height: theme.spacing(1.5),
        },
        thumb: {
          height: theme.spacing(2),
          width: theme.spacing(2),
        },
        switchBase: {
          height: theme.spacing(5),
          width: theme.spacing(5),
        },
      },

      MuiFormControlLabel: {
        label: theme.typography.body2,
        labelPlacementStart: {
          marginRight: '-10px',
        },
      },

      MuiAvatar: {
        root: {
          width: theme.spacing(4),
          height: theme.spacing(4),
        },
      },

      MuiChip: {
        root: {
          height: theme.spacing(3.5),
          lineHeight: 1.5,
        },
        colorPrimary: {
          color: themeMode === 'dark' ? palette.text.primary : palette.common.white,
        },
        deleteIconColorPrimary: {
          color: themeMode === 'dark' ? palette.text.primary : palette.common.white,
          '&:hover': {
            color: 'rgb(255, 255, 255, .7)',
          },
          '&:active': {
            color: 'rgb(255, 255, 255, .7)',
          },
        },
      },

      MuiButton: {
        root: {
          textTransform: 'inherit',
        },
        containedPrimary: {
          color: themeMode === 'dark' ? palette.text.primary : palette.common.white,
        },
      },

      MuiTab: {
        root: {
          textTransform: 'inherit',
          minWidth: 'auto',
          maxWidth: 'auto',
          whiteSpace: 'pre-line',

          [theme.breakpoints.up('md')]: {
            minWidth: 'auto',
          },
        },
      },

      MuiTypography: {
        button: {
          textTransform: 'inherit',
        },
      },

      MuiListItem: {
        root: {
          paddingTop: theme.spacing(1),
          paddingRight: theme.spacing(2),
          paddingBottom: theme.spacing(1),
          paddingLeft: theme.spacing(2),
        },
      },

      MuiMenuItem: {
        root: {
          fontSize: theme.typography.pxToRem(14),
        },
      },

      MuiToolbar: {
        regular: {
          [theme.breakpoints.up('sm')]: {
            minHeight: theme.spacing(7),
          },
        },
      },
    },
    props: {
      MuiSelect: {
        IconComponent: ExpandMore,
      },
      MuiCheckbox: {
        color: 'primary',
        disableRipple: true,
      },
      MuiSwitch: {
        color: 'primary',
        disableRipple: true,
      },
      MuiSvgIcon: {
        fontSize: 'small',
      },
      MuiButton: {
        disableRipple: true,
      },
      MuiIconButton: {
        disableRipple: true,
      },
      MuiTab: {
        disableRipple: true,
      },
      MuiPaper: {
        elevation: 2,
      },
      MuiTextField: {
        variant: 'outlined',
        fullWidth: true,
      },
      MuiFab: {
        size: 'small',
      },
    },
  })
}

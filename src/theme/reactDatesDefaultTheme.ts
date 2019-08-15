import { Theme } from '@material-ui/core'

export default (theme: Theme) => {
  const themeModeIsDark = theme.palette.type === 'dark'

  const core = {
    white: theme.palette.common.white,
    gray: theme.palette.grey[500],
    grayLight: theme.palette.grey[400],
    grayLighter: theme.palette.grey[300],
    grayLightest: theme.palette.grey[200],

    borderMedium: theme.palette.grey[500],
    border: theme.palette.grey[400],
    borderLight: theme.palette.grey[300],
    borderLighter: theme.palette.grey[200],
    borderBright: theme.palette.grey[100],

    primary: theme.palette.primary.main,
    primaryShade_1: theme.palette.primary.light,
    primaryShade_2: theme.palette.primary.light,
    primaryShade_3: theme.palette.primary.light,
    primaryShade_4: theme.palette.primary.light,
    primary_dark: theme.palette.primary.dark,

    secondary: theme.palette.text.secondary,

    yellow: '#ffe8bc',
    yellow_dark: '#ffce71',
  }

  return {
    reactDates: {
      zIndex: 0,
      border: {
        input: {
          border: 0,
          borderTop: 0,
          borderRight: 0,
          borderBottom: '2px solid transparent',
          borderLeft: 0,
          outlineFocused: 0,
          borderFocused: 0,
          borderTopFocused: 0,
          borderLeftFocused: 0,
          borderBottomFocused: `2px solid ${core.primary_dark}`,
          borderRightFocused: 0,
          borderRadius: 0,
        },
        pickerInput: {
          borderWidth: 1,
          borderStyle: 'solid',
          borderRadius: 2,
        },
      },

      color: {
        core,

        disabled: core.grayLightest,

        background: themeModeIsDark ? theme.palette.background.paper : theme.palette.background.paper,
        backgroundDark: '#f2f2f2',
        backgroundFocused: core.white,
        border: core.borderMedium,
        text: theme.palette.text.primary,
        textDisabled: theme.palette.text.disabled,
        textFocused: '#007a87',
        placeholderText: theme.palette.text.primary,

        outside: {
          backgroundColor: core.white,
          backgroundColor_active: core.white,
          backgroundColor_hover: core.white,
          color: core.gray,
          color_active: core.gray,
          color_hover: core.gray,
        },

        highlighted: {
          backgroundColor: core.yellow,
          backgroundColor_active: core.yellow_dark,
          backgroundColor_hover: core.yellow_dark,
          color: core.gray,
          color_active: core.gray,
          color_hover: core.gray,
        },

        minimumNights: {
          backgroundColor: core.white,
          backgroundColor_active: core.white,
          backgroundColor_hover: core.white,
          borderColor: core.borderLighter,
          color: core.grayLighter,
          color_active: core.grayLighter,
          color_hover: core.grayLighter,
        },

        hoveredSpan: {
          backgroundColor: core.primaryShade_4,
          backgroundColor_active: core.primaryShade_3,
          backgroundColor_hover: core.primaryShade_4,
          borderColor: core.primaryShade_3,
          borderColor_active: core.primaryShade_3,
          borderColor_hover: core.primaryShade_3,
          color: core.secondary,
          color_active: core.secondary,
          color_hover: core.secondary,
        },

        selectedSpan: {
          backgroundColor: core.primaryShade_2,
          backgroundColor_active: core.primaryShade_1,
          backgroundColor_hover: core.primaryShade_1,
          borderColor: core.primaryShade_1,
          borderColor_active: core.primary,
          borderColor_hover: core.primary,
          color: themeModeIsDark ? core.white : theme.palette.text.primary,
          color_active: themeModeIsDark ? core.white : theme.palette.text.primary,
          color_hover: themeModeIsDark ? core.white : theme.palette.text.primary,
        },

        selected: {
          backgroundColor: core.primary,
          backgroundColor_active: core.primary,
          backgroundColor_hover: core.primary,
          borderColor: core.primary,
          borderColor_active: core.primary,
          borderColor_hover: core.primary,
          color: core.white,
          color_active: core.white,
          color_hover: core.white,
        },

        blocked_calendar: {
          backgroundColor: theme.palette.action.disabledBackground,
          backgroundColor_active: theme.palette.action.disabledBackground,
          backgroundColor_hover: theme.palette.action.disabledBackground,
          borderColor: theme.palette.action.disabled,
          borderColor_active: theme.palette.action.disabled,
          borderColor_hover: theme.palette.action.disabled,
          color: theme.palette.common.black,
          color_active: theme.palette.common.black,
          color_hover: theme.palette.common.black,
        },

        blocked_out_of_range: {
          backgroundColor: theme.palette.action.disabledBackground,
          backgroundColor_active: theme.palette.action.disabledBackground,
          backgroundColor_hover: theme.palette.action.disabledBackground,
          borderColor: theme.palette.action.disabled,
          borderColor_active: theme.palette.action.disabled,
          borderColor_hover: theme.palette.action.disabled,
          color: theme.palette.text.primary,
          color_active: theme.palette.text.primary,
          color_hover: theme.palette.text.primary,
        },
      },

      spacing: {
        dayPickerHorizontalPadding: 9,
        captionPaddingTop: 22,
        captionPaddingBottom: 37,
        inputPadding: 0,
        displayTextPaddingVertical: undefined,
        displayTextPaddingTop: 11,
        displayTextPaddingBottom: 9,
        displayTextPaddingHorizontal: undefined,
        displayTextPaddingLeft: 11,
        displayTextPaddingRight: 11,
        displayTextPaddingVertical_small: undefined,
        displayTextPaddingTop_small: 7,
        displayTextPaddingBottom_small: 5,
        displayTextPaddingHorizontal_small: undefined,
        displayTextPaddingLeft_small: 7,
        displayTextPaddingRight_small: 7,
      },

      sizing: {
        inputWidth: 130,
        inputWidth_small: 97,
        arrowWidth: 24,
      },

      noScrollBarOnVerticalScrollable: false,

      font: {
        size: 14,
        captionSize: 18,
        input: {
          size: 19,
          lineHeight: '24px',
          size_small: 15,
          lineHeight_small: '18px',
          letterSpacing_small: '0.2px',
          styleDisabled: 'italic',
        },
      },
    },
  }
}

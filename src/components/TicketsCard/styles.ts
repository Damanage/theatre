import { createStyles, Theme } from '@material-ui/core'

export default (theme: Theme) =>
  createStyles({
    sectionTitle: theme.sectionTitle as any,
    sectionContent: {
      marginBottom: theme.spacing(6),
    },
    businessTable: {
      height: 'auto',
    },
    complexSearch: {
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'space-between',
    },
    complexSearchValue: {
      flex: '1 1 100%',
      maxWidth: '100%',
    },
    complexSearchValueInput: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    complexSearchType: {
      flex: `0 0 ${theme.spacing(25)}px`,
      maxWidth: theme.spacing(25),
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    complexSearchTypeInput: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  })

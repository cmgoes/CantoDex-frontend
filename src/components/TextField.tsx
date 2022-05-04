import TextField from '@mui/material/TextField'
import { Theme } from '@mui/material/styles'
import { makeStyles, createStyles } from '@mui/styles'

interface ITextFieldProps {
  value: string | number
  onChange: React.ChangeEventHandler<HTMLInputElement>
  name: string
  [key: string]: any
  startAdornment?: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& label': {
        fontSize: '18px',
        lineHeight: '24px'
      },
      '& input': {
        fontSize: '18px',
        lineHeight: '24px'
      },
      '& label.Mui-focused': {
        color: theme.palette.secondary.main
      },
      '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
          borderColor: theme.palette.secondary.main
        },
        '&.Mui-focused fieldset': {
          borderColor: theme.palette.secondary.main
        }
      }
    }
  })
)

const AppTextField: React.FC<ITextFieldProps> = ({
  value,
  onChange,
  name,
  startAdornment,
  ...props
}) => {
  const classes = useStyles()

  return (
    <TextField
      className={classes.root}
      name={name}
      value={value}
      onChange={onChange}
      sx={{ ...props.sx, borderRadius: '5px' }}
      {...props}
    />
  )
}

export default AppTextField

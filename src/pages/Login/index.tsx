import { Box, TextField } from '@mui/material'
import Photo from 'assets/photoLogin.jpg'
import { CustomButton } from 'components/CustomButton'
import { Logo } from 'components/Logo'
import { FC } from 'react'

const styles: { [key: string]: React.CSSProperties } = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '30%',
    width: '100%',
    padding: '20px',
    alignContent: 'center'
  },
  input: {
    width: '100%',
    margin: '15px 0'
  },
  legend: {
    fontSize: '25px',
    fontFamily: 'Nunito',
    fontWeight: '700',
    border: 'none',
    outline: 'none',
    textDecoration: 'none',
    color: '#6D6552',
    letterSpacing: '.1em',
    margin: '0 auto'
  }
}

export const LogIn: FC = () => {
  return (
    <Box component="div" style={{ display: 'flex', height: '100vh' }}>
      <Logo />
      <Box component="form" noValidate autoComplete="off" style={styles.root}>
        <Box component="legend" style={styles.legend}>
          Hello, Student
        </Box>
        <TextField label="Email" variant="standard" style={styles.input} />
        <TextField label="Password" type="password" variant="standard" style={styles.input} />
        <Box component="div" style={{ margin: '0', textAlign: 'center' }}>
          <CustomButton title="Login" />
          <Box component="p" fontWeight={700}>
            or you can
          </Box>
          <CustomButton title="Registration" />
        </Box>
      </Box>
      <img
        src={Photo}
        style={{
          objectFit: 'cover',
          display: 'block',
          width: '100%'
        }}
      />
    </Box>
  )
}

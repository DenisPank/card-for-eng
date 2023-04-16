import { Box } from '@mui/material'
import { FC } from 'react'

const styles: { [key: string]: React.CSSProperties } = {
  root: {
    position: 'absolute',
    top: '10px',
    left: '10px'
  },
  text: {
    fontSize: '32px',
    fontFamily: 'Nunito',
    fontWeight: '700',
    border: 'none',
    outline: 'none',
    textDecoration: 'none',
    color: '#6D6552',
    letterSpacing: '.1em'
  }
}

export const Logo: FC = () => {
  return (
    <Box component="div" style={styles.root}>
      <Box component="a" href="#" style={styles.text}>
        CardForEng
      </Box>
    </Box>
  )
}

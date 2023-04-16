import { Button } from '@mui/material'
import { FC } from 'react'

import { IProps } from './type'

const styles: { [key: string]: React.CSSProperties } = {
  root: {
    maxWidth: '100%',
    width: '100%',
    margin: '10px 0 10px 0'
  }
}

export const CustomButton: FC<IProps> = props => {
  const { title } = props
  return (
    <Button variant="contained" style={styles.root}>
      {title}
    </Button>
  )
}

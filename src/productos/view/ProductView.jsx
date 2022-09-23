import { SaveOutlined } from '@mui/icons-material'
import {Button, Grid, TextField, Typography} from '@mui/material'
import { ProductsList } from '../components'


export const ProductView = () => {
  return (
   <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb:1 }}>
     <Grid container>
        <Typography fontSize={39} fontWeight='light'>28-agosto </Typography>
       
     </Grid>
     <ProductsList/>
   </Grid>
  )
}

import { Link as RouterLink, useFormAction } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Grid, Typography, MenuItem, TextField, Button, Link } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { chekingAutentication, startGoogleSignIn } from '../../store/auth/';

export const LoginPage = () => {

  const dispatch = useDispatch();

  const {email, password, onInputChange} = useForm({
    email:'jessy@jessy.com',
    password: '12345678'
  });

  /**
   *On subbmit event form.
   *
   * @param {*} event
   */
  const onSubmit=(event)=>{
    event.preventDefault();
    console.log({email, password});
    dispatch(chekingAutentication());
  }

  /**
   *On evente google sing in.
   *
   */
  const onGoogleSingIn=()=>{
    console.log('onGoogleSingIn');
    dispatch(startGoogleSignIn());
  }


  return (
    <AuthLayout title='Iniciar sesión'>
      <form onSubmit={onSubmit}>
          <Grid container >
            <Grid item xs={12} sx={{ mt:2 }}>
              <TextField
                label='Correo'
                type='email'
                placeholder='emailemail.com'
                fullWidth
                name='email'
                value={ email }
                onChange={onInputChange}                
              />
            </Grid>
            <Grid item xs={12} sx={{ mt:2 }}>
              <TextField
                label='Contraseña'
                type='password'
                placeholder='Contraseña'
                fullWidth  
                name='password'
                value={ password }
                onChange={onInputChange}              
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb:2, mt:1 }}>
              <Grid item xs={12} sm={6}>
                <Button type='submit' variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={onGoogleSingIn}
                  >
                    <Google />
                    <Typography sx={{ml:1}}>Google</Typography>   
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink} color='inherit' to='/auth/register'>
              Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>

        

      
  )
}

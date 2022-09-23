import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid 
    container 
    spacing={0} 
    direction="column" 
    alignItems="center" 
    justifyContent="center"
    sx={{ minHeight:'calc(100vh - 110px)' }}
    >
        <Grid item xs={12}>
            <StarOutline sx={{ fontSize:100, color: 'primary.main' }} />
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h5" color='primary.main'>Sin elemenos</Typography>
        </Grid>

    </Grid>
  )
}

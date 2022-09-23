import { ProductCard } from "./ProductCard"
import Grid from '@mui/material/Grid'


const products =[
    {
        name:'img',
        price:50,
        description:''
    }, 
    {
        name:'img1',
        price:50,
        description:''
    },
    {
        name:'img2',
        price:50,
        description:''
    },
    {
        name:'img3',
        price:50,
        description:''
    },
    {
        name:'img4',
        price:50,
        description:''
    }
];

export const ProductsList = () => {
  return (

    <Grid container>
        {
            products.map(producto=>(
                <Grid item 
                    key={producto.name}
                    sx={{p:1}}
                >
                    <ProductCard />
                </Grid>
            ))
        }      
    </Grid>   
   
  )
}

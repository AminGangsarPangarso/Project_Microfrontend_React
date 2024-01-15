import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200, // Lebar card
    marginBottom: 20,
    marginTop: 20, // Menambahkan jarak atas
  },
  media: {
    width: '100%', // Lebar maksimal untuk mengisi card
    height: 140, // Tinggi card media
  },
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '20px',
    marginLeft: drawerWidth + 20, // Menambahkan margin kiri sejauh lebar sidebar + 20px
  },
}));

export default function Products() {
  const classes = useStyles();

  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get('https://fakestoreapi.com/products') // Ubah URL sesuai keinginan Anda
      .then((res) => {
        setProducts(res.data);
        console.log(res.data, 'data sukses didapatkan ');
      })
      .catch((err) => {
        console.log(err, 'data gagal didapatkan ');
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <div className={classes.flexContainer}>
        {products.map((product) => (
          <Card key={product.id} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={product.image} // Pastikan API memberikan properti image yang valid
                title={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className='text-blue-500 font-bold'>
                  {product.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </Container>
  );
}

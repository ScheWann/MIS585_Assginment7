import * as React from 'react';
import Button from '../components/Button.jsx';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import coffee from '../Assets/coffee.jpeg'

export default function Product() {
  return (
    <ProductHeroLayout
    sxBackground={{
      backgroundImage: `url(${coffee})`,
      backgroundColor: '#7fc7d9', // Average color of the background image.
      backgroundPosition: 'center',
    }}
    >
      <img
        style={{ display: 'none' }}
        src={coffee}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Local gourmet coffee shop
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        An authentic, artisan coffee café featuring coffees, breakfast pastries, sandwiches and salads. Brew is also home to the nitro brew iced coffee, which is sure to keep you energized throughout the day.
      </Typography>
      <Button
        color="coffees"
        variant="contained"
        size="large"
        component="a"
        style={{borderRadius: '5px'}}
        sx={{ minWidth: 200 }}
      >
        Buy Now
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}
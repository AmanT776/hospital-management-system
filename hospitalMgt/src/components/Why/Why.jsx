import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';

import './styles/why.module.css'

import CardActions from '@mui/material/CardActions';
const info = [
    {
        id: 1,
        title: 'Technology transforms hospitals',
        description: 'Hakim is the first web based hospital management system designed to solve the unique challenges of africa',
        url: './src/assets/1.svg'
    },
    {
        id: 1,
        title: 'Technology transforms hospitals',
        description: 'Hakim is the first web based hospital management system designed to solve the unique challenges of africa',
        url: './src/assets/2.svg'
    },
    {
        id: 1,
        title: 'Technology transforms hospitals',
        description: 'Hakim is the first web based hospital management system designed to solve the unique challenges of africa',
        url: './src/assets/3.jpg'
    },
    {
        id: 1,
        title: 'Technology transforms hospitals',
        description: 'Hakim is the first web based hospital management system designed to solve the unique challenges of africa',
        url: './src/assets/4.jpg'
    },
    {
        id: 1,
        title: 'Technology transforms hospitals',
        description: 'Hakim is the first web based hospital management system designed to solve the unique challenges of africa',
        url: './src/assets/5.jpg'
    }
]
export default function Why() {
  return (
   <>
    <h1 style={{textAlign: 'center', color: '#2563eb',fontWeight: '700',marginBottom: '10px'}}>Why Hakim?</h1>
    <section className='why-container'>
      {info.map((item) => {
        return (
    <Card sx={{border: '1px solid #dae2f5',padding: '10px', maxWidth: '95%', margin: '0  auto 10px auto', boxShadow: '10px 0  #dae2f5',borderRadius: '10px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.url}
          alt="green iguana"
          sx={{width: '100%', height: 'auto',}}
        />
        <CardContent>
          <Typography gutterBottom fontWeight={700} variant="h4" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{fontSize: '1.25rem', color: 'text.secondary' }}>
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button sx={{
            border: '1px solid #2563eb',
            color: '#2563eb',
            fontWeight: 'bold',
            padding: '5px 20px',
            fontSize: '1rem'

        }} size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        );
    })}
    </section></>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import './styles/cards.module.css'

const cards = [
  {
    id: 1,
    title: '100+',
    description: 'Registered Hospitals',
  },
  {
    id: 2,
    title: '10+',
    description: 'Years of experience',
  },
  {
    id: 3,
    title: '11+',
    description: 'city hospitals are using our solution',
  },
];

export default function Cards() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <div className='cards-container'>
      <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
        gap: 2,
        padding: '20px',
        boxShadow: '5px 1px #c321',
        marginBottom: '5px'
      }}
    >
      {cards.map((card, index) => (
        <Card 
        sx={{border: '1px solid gray',boxShadow: '1px 1px 4px',height:'210px', textAlign: 'center'}}
        >
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent  sx={{ padding: '5px', height: '100%' , fontWeight: 'bold' }}>
              <Typography color='#2563eb' variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography  color='#676767' variant="body2">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
    </div>
  );
}



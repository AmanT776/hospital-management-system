import {Drawer,Box,Typography,IconButton, Menu, ListItem, List} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react'
import {NavLink} from 'react-router-dom';

import logo from '../../assets/logo.png';
import './styles/navbar.css'

export default function NavBar(){
  const [isDrawerOpen,setIsDrawerOpen] = useState(false);
  const toggleDrawer = ()=>{
    setIsDrawerOpen(!isDrawerOpen);
  }
  function onHover(e){
    e.classList.add('hover')
  }
  return (
    <>
      <Box sx={{
        display:{
          md: 'none',
          lg: 'none',
          xl: 'none',
          sm: 'flex',
          xs: 'flex',
      },
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#0f172a'
      }}>
        <img src={logo} style={{
          width: '100px',
          height: 'autos'
        }}/>
        <IconButton sx={{
        display:{
          md: 'none',
          lg: 'none',
          xl: 'none',
        }
      }} onClick={toggleDrawer}>
        <MenuIcon sx={{
          fontSize: '3rem',
          color: '#fff'
        }}/>
      </IconButton>
      <Drawer open={isDrawerOpen} anchor="left" sx={{width: '100%'}}>
        <Box sx={{
          width: '250px',
          padding: '20px'
        
        }}>
          <Typography variant='h6' display={'inline'} marginRight={'60px'}>
              Menu
          </Typography>
          <IconButton sx={{
            display:{
            md: 'none',
            lg: 'none',
            xl: 'none',
        }
      }} 
      onClick={toggleDrawer}
      >
        <MenuIcon sx={{
          fontSize: '3rem',
        }}/>
      </IconButton>
      <List>
        <ListItem sx={{}}>
          <Typography  variant='h6'  marginRight={'60px'}>
                  <NavLink to='/' style={{ color: '#343434',textDecoration: 'none' }}>
                    Home
                  </NavLink>
          </Typography>
        </ListItem> 
        <ListItem>
          <Typography variant='h6'  marginRight={'60px'}>
                  <NavLink to='/services'  style={{color: '#343434', textDecoration: 'none' }}>
                    Services
                  </NavLink>
          </Typography>
        </ListItem> 
        <ListItem>
        <Typography variant='h6'  marginRight={'60px'}>
                  <NavLink to='/about' style={{color: '#343434', textDecoration: 'none',}}>
                    About Us
                  </NavLink>
          </Typography>
        </ListItem> 
        <ListItem>
        <Typography variant='h6'  marginRight={'60px'}>
                  <NavLink to='/contact' style={{color: '#343434', textDecoration: 'none' }}>
                    Contactus
                  </NavLink>
          </Typography>
        </ListItem> 
        <ListItem>
        <Typography variant='h6'  marginRight={'60px'}>
                  <NavLink to='/login' style={{ color: '#343434', textDecoration: 'none' }}>
                    Login
                  </NavLink>
          </Typography>
        </ListItem> 
      </List>  
  
        </Box>
      </Drawer>
      </Box> 

{/* slider navigation for large screens */}

        <Box sx={{
          width: '100%',
          padding: '10px',
          justifyContent: 'space-around',
          alignItems: 'center',
          display:{
            sm: 'none',
            xs: 'none',
            md: 'flex',
            lg: 'flex',
            xl: 'flex',
          },
          background: '#0F172A',
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <img src={logo} style={{height: '70px'}}/>
            <Typography variant='h4' sx={{fontWeight: '900',color: 'whitesmoke'}}>Hakim</Typography>
          </Box>
          <List sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
        <ListItem sx={{'&:hover':{color: 'red'}}}>

          <NavLink   to='/' style={ {color: 'whitesmoke',textDecoration: 'none' }}>
            <Typography sx={{
              
              '&:hover':{borderBottom: '3px solid #2563eb'}
              }} variant='p'  marginRight={'60px'}>
              Home
              </Typography>
           </NavLink>
          
        </ListItem> 
        <ListItem sx={{'&:hover':{color: 'red'}}}>
          
          <NavLink   to='/services' style={{ color: 'whitesmoke',textDecoration: 'none' }}>
            <Typography sx={{'&:hover':{borderBottom: '3px solid #2563eb'}}} variant='p'  marginRight={'60px'}>
              Services
              </Typography>
           </NavLink>
          
        </ListItem> 
        <ListItem sx={{'&:hover':{color: 'red'}}}>
          
          <NavLink   to='/about' style={{ color: 'whitesmoke',textDecoration: 'none' }}>
            <Typography sx={{'&:hover':{borderBottom: '3px solid #2563eb'}}} variant='p'  marginRight={'60px'}>
              AboutUs
              </Typography>
           </NavLink>
          
        </ListItem> 
        <ListItem sx={{'&:hover':{color: 'red'}}}>
          
          <NavLink   to='/contact' style={{ color: 'whitesmoke',textDecoration: 'none' }}>
            <Typography sx={{'&:hover':{borderBottom: '3px solid #2563eb'}}} variant='p'  marginRight={'60px'}>
              ContactUs
              </Typography>
           </NavLink>
          
        </ListItem> 
        <ListItem sx={{'&:hover':{color: 'red'}}}>
          
          <NavLink   to='/login' style={{ color: 'whitesmoke',textDecoration: 'none' }}>
            <Typography sx={{'&:hover':{borderBottom: '3px solid #2563eb'}}} variant='p'  marginRight={'60px'}>
              Login
              </Typography>
           </NavLink>
          
        </ListItem> 
      </List>  
        </Box>
     
    </>
  )
}
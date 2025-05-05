import {Drawer,Box,Typography,IconButton, Menu, ListItem, List} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react'
import {NavLink} from 'react-router-dom';

import logo from '../../assets/logo.png';
import styles from './styles/navbar.module.css'

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
        backgroundColor: '#0f172a',
      }}>
        <img src={logo} style={{
          width: '100px',
          height: 'auto'
        }} alt="Hakim Logo"/>
        <IconButton onClick={toggleDrawer}>
          <MenuIcon sx={{
            fontSize: '3rem',
            color: '#fff'
          }}/>
        </IconButton>
      </Box>

      <Drawer open={isDrawerOpen} anchor="left" onClose={toggleDrawer}>
        <Box sx={{
          width: '250px',
          padding: '20px',
          backgroundColor: '#0f172a',
          height: '100%'
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <Typography variant='h6' color="white">
              Menu
            </Typography>
            <IconButton onClick={toggleDrawer}>
              <MenuIcon sx={{color: 'white'}}/>
            </IconButton>
          </Box>
          <List>
            <ListItem>
              <NavLink 
                to='/' 
                className={({isActive}) => isActive ? styles.active : styles['nav-link']}
                onClick={toggleDrawer}
              >
                Home
              </NavLink>
            </ListItem> 
            <ListItem>
              <NavLink 
                to='/services' 
                className={({isActive}) => isActive ? styles.active : styles['nav-link']}
                onClick={toggleDrawer}
              >
                Services
              </NavLink>
            </ListItem> 
            <ListItem>
              <NavLink 
                to='/about' 
                className={({isActive}) => isActive ? styles.active : styles['nav-link']}
                onClick={toggleDrawer}
              >
                About Us
              </NavLink>
            </ListItem> 
            <ListItem>
              <NavLink 
                to='/contact' 
                className={({isActive}) => isActive ? styles.active : styles['nav-link']}
                onClick={toggleDrawer}
              >
                Contact Us
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink 
                to='/login' 
                className={({isActive}) => isActive ? styles.active : styles['nav-link']}
                onClick={toggleDrawer}
              >
                Login
              </NavLink>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box sx={{
        display: {
          sm: 'none',
          xs: 'none',
          md: 'flex',
          lg: 'flex',
          xl: 'flex',
        },
        width: '100%',
        padding: '10px',
        justifyContent: 'space-around',
        alignItems: 'center',
        background: '#0F172A',
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <img src={logo} style={{height: '70px',marginLeft: "20px"}} alt="Hakim Logo"/>
          <Typography variant='h4' sx={{fontWeight: '900',color: 'whitesmoke'}}>Hakim</Typography>
        </Box>
        <List sx={{
          display: 'flex',
          justifyContent: 'center',
          width: "50%",
          marginLeft: "auto"
        }}>
          <ListItem>
            <NavLink 
              to='/' 
              className={({isActive}) => isActive ? styles.active : styles['nav-link']}
            >
              Home
            </NavLink>
          </ListItem> 
          <ListItem>
            <NavLink 
              to='/services' 
              className={({isActive}) => isActive ? styles.active : styles['nav-link']}
            >
              Services
            </NavLink>
          </ListItem> 
          <ListItem>
            <NavLink 
              to='/about' 
              className={({isActive}) => isActive ? styles.active : styles['nav-link']}
            >
              About Us
            </NavLink>
          </ListItem> 
          <ListItem>
            <NavLink 
              to='/contact' 
              className={({isActive}) => isActive ? styles.active : styles['nav-link']}
            >
              Contact Us
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink 
              to='/login' 
              className={({isActive}) => isActive ? styles.active : styles['nav-link']}
            >
              Login
            </NavLink>
          </ListItem>
        </List>
      </Box>
    </>
  )
}
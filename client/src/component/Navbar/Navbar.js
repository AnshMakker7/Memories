import React, { useState , useEffect} from 'react'
import { AppBar,Typography,Toolbar, Avatar, Button , TextField,Modal,Box , List , ListSubheader , ListItem , ListItemText} from '@material-ui/core'
import {ListItemButton} from '@mui/material'
import useStyles from './style'
import memories from '../../images/memories.jpeg'
import {Link , useNavigate,useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'
import { FixedSizeList } from 'react-window'
import { searchUser } from '../../actions/auth'
import { useSelector } from 'react-redux'
import {PersonSearch} from '@mui/icons-material';


 
const Navbar = () => {
    const classes = useStyles();
    const [user , setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    // const [id , setId] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { users } = useSelector((state)=>state.posts)

    // const style = {
    //   position: 'absolute',
    //   top: '50%',
    //   left: '50%',
    //   transform: 'translate(-50%, -50%)',
    //   width: 400,
    //   bgcolor: 'background.paper',
    //   border: '2px solid #000',
    //   boxShadow: 24,
    //   p: 4,
    // };
    
    console.log(users)
    const logout = () =>{
      dispatch({type : 'LOGOUT'});
      navigate('/auth')
      setUser(null)
    }

    // handleSubmit{
          // dipatch()
    // }

    useEffect(() => {
      const token = user?.token

      if (token) {
        const decodedToken = decode(token);
  
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
      
      setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])


    
    
    const fetchUsers = (query)=>{
      
        // setSearch(query);
        // console.log(search)
        dispatch(searchUser(query));
    }

    // const openUser =() =>{
    //     navigate(`/users/${id}`);
    //     setId("");
    // }
    
    
    

    const renderListOfUserNames = (users) => {
      return users?.map((user) => 
      <ListItemButton key={user._id} component={Link} to={`/user/${user._id}`}>
          <Avatar className={classes.blue} alt={user.name} src={user.imageURL}>{user.name.charAt(0)}</Avatar>
          <ListItemText primary={user.name} secondary={user.email}/>
      </ListItemButton>
      )
    }
    
  return (
    <AppBar className={classes.appBar} color='inherit' position='static'>
         <div className={classes.brandContainer}>
              <Typography component={Link} to='/' className={classes.heading} variant='h2' align='center'>Reminisce</Typography>
              <img className={classes.image} src={memories} alt='memories' height='60'/>
         </div>

         <Button onClick={handleOpen}><PersonSearch fontSize="large"/></Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
           <Box sx={{ width: '100%', height: 460, maxWidth: 360, bgcolor: 'background.paper' , position: 'absolute',
    top: '50%',
    left: '50%',transform: 'translate(-50%, -50%)'}}>
           <TextField name='Users' variant='outlined' label='Search Users' fullWidth  onChange={(e) => fetchUsers(e.target.value)}/>
           <div>
            {renderListOfUserNames(users)}
           </div>
           </Box>
         </Modal>
         <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile} >
                  <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageURL}>{user?.result.name.charAt(0)}</Avatar>
                  <Typography className={classes.userName} variant='h6' >{user.result.name}</Typography>
                  <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Logout</Button>
                </div>
            ) :(
                <Button component={Link} to="/auth" variant='contained' color='primary'>Sign In</Button>
            )}
          </Toolbar>      
    </AppBar>
  )
}

export default Navbar
import React,{useState , useEffect} from 'react'
import { AppBar,Typography,Toolbar, Avatar, Button , Container , ListItemText ,Paper , Divider} from '@material-ui/core'
import Post from '../Posts/Post/Post';

import { useDispatch, useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router';
import { getUser } from '../../actions/auth';
import {getPostsByUser} from '../../actions/posts'
import { Stack , styled} from '@mui/material';
import useStyles from './styles'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const UserProfile =() => {
    
    const classes = useStyles();
    const {id} = useParams();
    const dispatch = useDispatch();
    const {user} = useSelector((state)=>state.posts)
    const { posts } = useSelector((state)=>state.posts)
    const [currentId , setCurrentId] = useState(null);

    useEffect(() => {
      dispatch(getPostsByUser(id));
      dispatch(getUser(id));
      
    }, [id])
    
    
    
    
  console.log(posts)


  return (
    
      <Container maxWidth="sm" className={classes.container}>
        <Grid container spacing={2}>
        <Grid item xs={8}>
        <Avatar className={classes.blue} alt={user?.name} src={user?.imageURL}>{user?.name.charAt(0)}</Avatar>
        </Grid>
        <Grid item xs={3}> 
        <Stack direction="row" spacing={3}>
        <Typography className={classes.email} variant='h6' align='center'>{user?.email}</Typography>
        <Item>Follow</Item>
        <Item>Message</Item>
      </Stack>
      <Stack direction="row" spacing={3} className={classes.data}>
        <Typography  variant='p' align='center'>10 posts</Typography>
        <Typography  variant='p' align='center'>40 followers</Typography>

        <Typography  variant='p' align='center'>40 followings</Typography>

        
      </Stack>

        <Typography className={classes.name} variant='h6' align='left'>{user?.name}</Typography>
        <Typography className={classes.bio}  variant='p' align='left'>Developer</Typography>
        <Typography className={classes.bio} variant='p' align='left'>19th March</Typography>
        
        
        </Grid>
        </Grid>
        <Divider style={{ margin: '20px 0' }} />
        <Typography className={classes.posts}  variant='h5' align='center'>Post Section</Typography>
        {!posts?.length ? `No posts from ${user?.name}`: (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {posts?.map((post) => (
                <Grid key={post._id} item xs={12} sm={6} md={6} lg ={4}>
                  <Post post={post} setCurrentId={setCurrentId}/>
                </Grid>
              ))}
            </Grid>
          )
              }

      
        </Container>
    
  )
}

export default UserProfile


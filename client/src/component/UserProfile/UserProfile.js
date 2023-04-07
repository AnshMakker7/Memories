import React,{useState , useEffect} from 'react'
import { AppBar,Typography,Toolbar, Avatar, Button , Container , ListItemText ,Paper , Divider} from '@material-ui/core'
import Post from '../Posts/Post/Post';

import { useDispatch, useSelector} from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router';
import { getUser , followedUser , followingUser} from '../../actions/auth';
import {getPostsByUser} from '../../actions/posts'
import { Stack , styled} from '@mui/material';
import useStyles from './styles'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


const UserProfile =() => {
    
    const classes = useStyles();
    const {id} = useParams();
    const dispatch = useDispatch();
    const [follow , setFollow] = useState('');
    const {user} = useSelector((state)=>state.posts)
    const { posts } = useSelector((state)=>state.posts)
    const [currentId , setCurrentId] = useState(null);
    const user1 = JSON.parse(localStorage.getItem('profile'))
    const b = user1?.result?.following?.findIndex(a => a === user?._id);
    const navigate = useNavigate();

    
   

    // const func = () =>{
    //   
    //   return (b===-1 ? setFollow('Follow') : setFollow('Following'));
    // }

   const handleFollow = ()=>{
    dispatch(followedUser(id))
    dispatch(followingUser(id))
    if(b===-1) setFollow('Follow')
    else setFollow('Following');
   }

   useEffect(() => {
    dispatch(getPostsByUser(id));
    dispatch(getUser(id));
    if(b===-1) setFollow('Follow')
  else setFollow('Following');
  }, [id,follow])


   
  

    // console.log(user1)
    
    // const func=()=>{
    //  return 
    //    }


const id_from = user1?.result?._id;
   
 

  return (
    <Container>
      <Container maxWidth="sm" className={classes.container}>
        <Grid container spacing={2}>
        <Grid item xs={8}>
        <Avatar className={classes.blue} alt={user?.name} src={user?.imageURL}>{user?.name.charAt(0)}</Avatar>
        </Grid>
        <Grid item xs={4}> 
        <Stack direction="row" spacing={4}>
        <Typography className={classes.email} variant='h6' align='center'>{user?.email}</Typography>
        { !user1 || (user1?.result?._id === user?._id) ? <p>Cannot Follow or Chat</p> :(
          <>
        <Button onClick={handleFollow} className={classes.follow}>{follow}</Button>
        
        
        
    
        <Button component={Link} to={`/user/${id_from}/${id}`} className={classes.message}>Chat</Button>
        </>
        ) }

      </Stack>
      <Stack direction="row" spacing={3} className={classes.data}>
        <Typography  variant='p' align='center'>{posts?.length} posts</Typography>
        <Typography  variant='p' align='center'>{user?.followers.length} followers</Typography>

        <Typography  variant='p' align='center'>{user?.following.length} followings</Typography>

        
      </Stack>

        <Typography className={classes.name} variant='h6' align='left'>{user?.name}</Typography>
        <Typography className={classes.bio}  variant='p' align='left'>Developer</Typography>
        <Typography className={classes.bio} variant='p' align='left'>19th March</Typography>
        
        
        </Grid>
        </Grid>
        </Container>
        <Divider style={{ margin: '20px 0' }} variant='middle'/>

        <Typography className={classes.posts}  variant='h5' align='center'>Post Section</Typography>
        <Container className={classes.section}>
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
</Container>
    
  )
}

export default UserProfile


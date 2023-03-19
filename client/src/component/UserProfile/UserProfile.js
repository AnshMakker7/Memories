import React,{useState} from 'react'
import { AppBar,Typography,Toolbar, Avatar, Button } from '@material-ui/core'
import Post from '../Posts/Post/Post';
import useStyles from './styles'
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';


const UserProfile =() => {
    const user = JSON.parse(localStorage.getItem('profile'))
    const classes = useStyles(); 
    const { posts } = useSelector((state)=>state.posts);
    const [currentId , setCurrentId] = useState(null);
    



  return (
    <div>
        <Avatar alt={user?.result.name} src={user?.result.imageURL}>{user?.result.name.charAt(0)}</Avatar>
        <h2>{user.result.name}</h2>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {posts?.map((post) => (
                <Grid key={post._id} item xs={12} sm={6} md={6} lg ={4}>
                  {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                  <Post post={post} setCurrentId={setCurrentId}/>
                  )}
                </Grid>
              ))}
            </Grid>

    </div>
  )
}

export default UserProfile


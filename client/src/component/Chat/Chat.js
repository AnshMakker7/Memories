import React,{useState,useEffect} from 'react'
import { Box , TextField , Button , Divider , Container , Grid , styled , Paper,Typography} from '@material-ui/core'
import useStyles from './styles'
import { BorderColor } from '@mui/icons-material';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { message_to , message_from ,getUser} from '../../actions/auth';
import { useSelector } from 'react-redux';

const Chat = () => {
    const classes = useStyles();
    const {id} = useParams();
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const user1 = JSON.parse(localStorage.getItem('profile'))
    const {user} = useSelector((state)=>state.posts)

    useEffect(() => {
      dispatch(getUser(id));
    }, [id,user])
    
    
    
   const handleSubmit = (e) =>{
    e.preventDefault();
     
      dispatch(message_to(`you: ${message}`,id))
      dispatch(message_from(`${user1?.result?.name}: ${message}`,id))
      setMessage('');
   }

   let obj = user?.message?.find(o => o.id === user1.result._id);
   console.log(obj);

  return (
<Box
      sx={{
        width: 400,
        height: 450,
        backgroundColor: 'white',
        position:'absolute',
        left:'550px',
        borderRadius:'5px',
        padding:'5px'
      }}
    >
      <Typography gutterBottom variant="h6">Chat with {user?.name}</Typography>
       <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
        
          {obj?.chat?.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              <strong>{c.split(': ')[0]} : </strong>
              {c.split(':')[1]}
            </Typography>
          ))}
          </div>
          </div>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
         
         <TextField name="message" variant="outlined" label="Message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
         <Button className={classes.buttonSubmit} variant="contained" color="primary" type="submit">Send</Button>
         
       </form>
      </Box>
  
 
  
   
  
  )
}

export default Chat
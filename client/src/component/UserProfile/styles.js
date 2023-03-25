import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  blue: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    height:'170px',
    width:'170px',
  },
  data:{
    marginTop:'15px',
  },
  name:{
    marginTop:'15px',
  },
  bio:{
    display:'flex',
  },
  posts:{
    marginBottom:'15px'
    
  }
}));
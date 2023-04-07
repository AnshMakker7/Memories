import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    position:'absolute',
    top:'455px',
   
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginTop:'10px',
    height:'49px'
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  commentsInnerContainer: {
    height: '410px',
    overflowY: 'auto',
    width:'450px',
    marginRight: '30px',
  },
}));
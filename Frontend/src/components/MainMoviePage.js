import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
// import MuiAlert from '@material-ui/lab/Alert';

// const Alert = (props) => {
//  return <MuiAlert elevation={6} variant="filled" {...props} style={{ textAlign: 'center' }} />;
//  }
 const Movie = ({ movieID,
                  movieName,
                  banner, 
                  cast,}) => {
const [open, setOpen] = useState(false);

const MovieHome = () => {
    window.location = `/specific/${movieID}` 
 }
const handleClose = (reason) => {
    if (reason === 'clickaway') {
       return;
    }
    setOpen(false);
 };
 return (

    <div class="card"  style={{ background: "white",color:"black",}} >
    <div style={{overflow: 'hidden', height: 420}}>

    <img src={banner} width={310} onClick={MovieHome}/>
    </div>

    <div class="content text-color p-2" >   
    <div style={{ fontSize:23,fontWeight:"bold"}} align='left'>
    {movieName.length > 13 ? <div >{movieName.substr(0, 14)}...</div> : movieName}  </div>            
              
    <Typography component={'span'} variant={'body2'}>
    <div className="row" style={{ paddingLeft: 0 }} >
    <div className="text-color" style={{fontSize: 18, paddingBottom: 8}}  align='left'>Movie Cast Date : {cast}</div>
    </div>                      

    </Typography>
    </div>
    <div class="extra content"></div>
    </div>
   
  );
}
export default Movie;
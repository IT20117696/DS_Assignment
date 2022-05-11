import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
 return <MuiAlert elevation={6} variant="filled" {...props} style={{ textAlign: 'center' }} />;
 }
 const Movie = ({ movieName,
                  banner, 
                  cast,}) => {
const [open, setOpen] = useState(false);

const MovieHome = () => {
    // window.location = `/products/${productID}`
 }
const handleClose = (reason) => {
    if (reason === 'clickaway') {
       return;
    }
    setOpen(false);
 };
 return (
    <div style={{width: 260, paddingBottom: 15}}>  
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}>

    </Snackbar>
    <div class="card"  style={{ background: "#1A233A",color:"#FFFFFF",}} align="center">
    <div style={{overflow: 'hidden', height: 300}} >

    <img src={banner} width={258} onClick={MovieHome} id="sa_image" />
    </div>
    <div class="content text-color p-2" >   
    <div style={{ fontSize:23,fontWeight:"bold"}} >

    {movieName.length > 13 ? <div >{movieName.substr(0, 14)}...</div> : movieName}  </div>         
             <div class="description text-color" >
              Brand : {movieName}
              </div>   
              
               <Typography component={'span'} variant={'body2'}>
               <div className="row" style={{ paddingLeft: 0 }} >
               <div className="text-color" style={{fontSize: 18, paddingBottom: 8}}>{cast}</div>
               </div>
               </Typography>
           </div>
           <div class="extra content"></div>
         </div>
       </div>
       );
}
export default Movie;
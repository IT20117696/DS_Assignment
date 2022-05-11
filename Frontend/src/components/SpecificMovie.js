import React, { Component } from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import CancelIcon from '@mui/icons-material/Cancel';

export default class SpecificMovie extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie :{}
   };
  }

  componentDidMount(){
    const movieID = this.props.match.params.movieID;
     axios.get(`http://localhost:8070/api/specific/${movieID}`).then((res)=>{
      if(res.data.success){
        this.setState({
          movie:res.data.movie
        });
        console.log(this.state.movie);
      }
     })
  }

  render() {
    const {movieName,timeSlot,description,banner,cast} = this.state.movie;
    
    return (
             <div align="center" ><br/>
             <Paper style={{textAlign:"center",borderRadius: 5,width:'570px',height:'820px'}}><br/>
             <div
                style={{
                  fontSize: 50,
                  color: "Black",
                  fontFamily: 'Tomes New Roman'
                }}
              >
                {movieName}
              </div>

             <img className="activator"  id="aimage" src={banner} width={350} />
             <br/><br/>

             <Button
               href='/addtocart'
                  style={{ color:"white", background:"#08368b" }}
                  variant="outlined"
                  startIcon={<BookmarkAddedIcon />}
                >
                Add To Cart
              </Button> &nbsp;&nbsp; &nbsp;&nbsp;
              <Button
                  href='/'
                  style={{ color:"white", background:"#08368b" }}
                  variant="outlined"
                  startIcon={<CancelIcon />}
                >
                 Cancel
              </Button>              
              <br/><br/>
                    
              <table style={{ fontSize: 18 }} align="center">
                <tbody >
                <tr>
                  <td><b>Show Time</b></td>
                  <td style={{ paddingLeft: 12}}>:{timeSlot}</td>
                </tr>
               
                <tr>
                  <td><b>Description</b></td>
                  <td style={{ paddingLeft: 18 }}>: {description}</td>
                </tr>
               
                <tr>
                 <td><b>Movie Cast</b></td>
                 <td style={{ paddingLeft: 18 }}>:{cast}</td>
                </tr>

              </tbody>
            </table>
           
           </Paper>
        </div>
          
    )
  }
}

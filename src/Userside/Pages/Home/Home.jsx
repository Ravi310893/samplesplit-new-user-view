import React,{useState} from "react";
import Applayout from "../../AppLayout/Applayout";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import axios from "axios";
import img1 from '../../../Assets/logoc.png'


const Home = () => {

  const [data, setdata] = useState([]);
  

  const show = () => {
    axios
      .get("http://localhost:5001/api/user/getAllPublicMusic")
      .then((response) => {
        setdata(response.data.getAllmusic);
        console.log(response.data.getAllmusic);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cardStyle = {
    backgroundColor: "white",
    width: "400px",
    height: "600px",
    border: "1px solid black",
    position: "absolute",
    left: "500px",
    top: "100px",
    borderRadius: "10px",
  };
  const cardHeader = {
    height: "100px",
    width: "401px",
    backgroundColor: "#583D91",
    borderRadius: "10px 10px 60px 0px",
  };

  const iconStyle = {
    backgroundColor: "white",
    color: "#583D91",
    position: "relative",
    top: "70px",
    left: "150px",
    fontSize: "50px",
    borderRadius: "50px",
    border:'1px solid',
    boxShadow: '10px 10px 50px #583D91',
    
  };
   
  const imgStyle={
    height:'40px',
    width:'40px',
    marginLeft:'10px'
  }
   
  const songsBody={
    height:'50px',width:'400px',
   
    marginTop:'10px'
  }

  const songName={
    position:'relative',
    bottom:'28px',
    right:'70px',
    fontFamily:'proxima nova'
  }
  const singerName={
    position:'relative',
    right:'90px',top:'5px',
    fontFamily:'san-serif'  
  }
  

  return(
    <div className="" style={{ backgroundColor: "#87CEEB", height: "745px" }}>
      <Applayout />
      <div className="card" style={cardStyle}>
      <div  style={cardHeader}>
        <h5 htmlFor="" style={{color:'white',position:'absolute',left:'50px',top:'30px',fontSize:'30px',fontFamily:'proxima nova'}}>Songs</h5>
        <PlayArrowIcon  onMouseOver={({target})=>target.style.color="red"} onMouseOut={({target})=>target.style.color="#583D91"} style={iconStyle} />
      </div>
     {/*  <div style={songsBody}  onMouseOver={({target})=>target.style.background="grey"} onMouseOut={({target})=>target.style.background="white" }>
        <div style={imgStyle}><img  src={img1} alt="" /> </div>
        <div style={songName}><span >She Don't Know</span></div>
        <div style={singerName}><span >Baddshah</span></div>
        <PlayArrowIcon onClick={show} />
      </div> */}
      <div style={{width:'300px'}}>
        <div>
        <div style={imgStyle}><img  src={img1} alt="" /> </div>
        </div>
        <div>
          <div style={songName}><span >She Don't Know</span></div>
        <div style={singerName}><span >Baddshah</span></div>
        </div>
      </div>
    </div> 

    </div>
  );
};

export default Home;



 
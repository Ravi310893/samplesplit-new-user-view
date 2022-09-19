import React, { useState } from "react";
import axios from "axios";
import Applayout from "../../AppLayout/Applayout";


const Freestems = () => {
  const [data, setdata] = useState([]);
  /*  let token=localStorage.getItem("logintoken")
  console.log(token) */

  /*   useEffect(() => {
    show();
    
  }); */  

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
  return (
    <>
     <Applayout/>
     <h1>Songs list</h1>

<button onClick={show}>Click</button>

{data.map((value,i) => {
  return (
    <div className="container" key={i} style={{float:'left'}}>
      <div className="iphone neu">
        <div className="title">
          <div>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div>NOW PLAYING</div>
          {/* <div>
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>
        <div className="album-cover">
          <div className="album-overlay"></div> */}
          <img
            src={value.imageName}
            alt=""
            style={{height:'100px',width:'100px'}}
          />
          <audio controls >
              <source src={value.music} type="audio/mp3"/>    
          </audio>
          <h2 className="song-title">{value.trackTitle}</h2>
          <h3 className="artist-title">{value.bpm}</h3>
        </div>
      
        <div className="track neu">
          <div></div>
        </div>
        <div className="lyrics">
          <i className="fas fa-angle-up"></i>
          <span>LYRICS</span>
        </div>
      </div>
    </div>
  );
})}



    </>
  );
};

export default Freestems;

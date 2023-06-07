import aboutimg from "./aboutimg.jpg";
export default function Hometwo() {
  return (
    <div className="hometwo-div container">
      <p className="hometwo_heading">About</p>
      <div className="hometwo_box row">
        <div className="hometwo_details col-lg-7 col-md-5 col-sm-12">
        <p className="hometwo_p">
        Greeting, My name is <b>Nimesh Urkude</b> and i am currently studying <b>Typescript</b> and <b>Backend Security</b>.I have previously studied <b>Web Development (MERN)</b>, <b>App Development (React Native , Flutter)</b> as well as <b>Machine Learning (Tensorflow)</b>.As a student at ADGITM Collage, I am pursuing my B.Tech degree.
        </p>
        </div>
        <div className="col-lg-5 col-md-7 col-sm-12"><img className="hometwo_img" src={aboutimg}/></div>
      </div>  
      <div style={{padding:"2%"}}/>
    </div>
  );
}

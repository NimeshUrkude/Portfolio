import {motion} from "framer-motion";

import blog from "app/helpercode/project/img/blog.jpg";
import weather from "app/helpercode/project/img/Weather.jpg";
import diamond from "app/helpercode/project/img/diamond.png";
import cvd from "app/helpercode/project/img/cvd.jpg";
import spotify from "app/helpercode/project/img/Spotify.jpg";
import chatroom from "app/helpercode/project/img/chatroom.jpg";
import rvf from "app/helpercode/project/img/rvf.jpg";
import mm from "app/helpercode/project/img/mm.jpg";
import aii from "app/helpercode/project/img/aii.jpg";
import shop from "app/helpercode/project/img/shop.jpg";
import bank from "app/helpercode/project/img/bank.jpg";


const data = [
  {
    img:blog,
    title:"The Blog Web Site",
    description : "Blog Website allows users to easily create and delete their own blog posts. We use <b>React</b> for the frontend, <b>Node.js</b> for the backend, and <b>MongoDB</b> for the database. Our frontend is hosted on <b>GitHub</b>, while the backend is hosted on <b>Render</b>, ensuring reliable access and secure data storage. With our user-friendly platform, sharing your thoughts, ideas, and experiences with the world has never been easier.",
    url:"https://nimeshurkude.github.io/Blog_Frontend/",
  },
  {
    img:weather,
    title:"The Weather App",
    description : "Weather App built on <b>React Native</b> with <b>Expo</b> offers users information on sunset and sunrise times along with a day and night cycle. The app uses the <b>OpenWeather API</b> and is available for download on Expo. With our user-friendly interface, accessing weather information has never been easier.",
    url:"https://expo.dev/@nimesh_urkude/Weather?serviceType=classic&distribution=expo-go",
  },
  {
    img:diamond,
    title:"Diamond Value Prediction",
    description : "Diamond Value Prediction Website utilizes <b>React</b> for the frontend, <b>Tensorflow</b> for model training, and <b>TensorflowJS</b> to connect the two. Both the frontend and model are stored on <b>Github</b>, providing efficient access to users. With our website, predicting the value of diamonds has never been easier.",
    url:"https://nimeshurkude.github.io/Diamond_Frontend/",
  },
  {
    img:cvd,
    title:"The Image Classification Site",
    description : "Image Classification Website uses <b>React</b> for the frontend, <b>Tensorflow</b> for model training, and <b>TensorflowJS</b> to connect the two. The website is designed to predict whether an uploaded image is of a dog or cat. Both the frontend and model are stored on <b>Github</b>, providing efficient access to users. With our website, classifying images has never been easier.",
    url:"https://nimeshurkude.github.io/cvdipf/",
  },
  {
    img:spotify,
    title:"The Spotify Site",
    description : "Spotify Clone allows users to listen to songs and utilizes <b>React</b> for the frontend. The website is hosted on <b>Github</b>, providing easy access for users. With our user-friendly interface, enjoying your favorite tunes has never been easier.",
    url:"https://nimeshurkude.github.io/Sportify_Clone/",
  },
  {
    img:chatroom,
    title:"The Chat Room",
    description : "This is a chat room application built using <b>Flutter</b> and backed by <b>Firebase</b> for database management. It allows users to communicate with each other in real-time through chat room. The app provides a seamless and user-friendly interface for chatting, and the Firebase backend ensures efficient storage and retrieval of messages.",
    url:"https://github.com/NimeshUrkude/Chat_Room",
  },
  {
    img:rvf,
    title:"The React Native vs Flutter",
    description : "This website compares <b>React Native</b> and <b>Flutter</b> and includes a <b>Calculator app</b> as a demonstration. It provides an in-depth analysis of the strengths and weaknesses of both frameworks and helps users make an informed decision about which one to use for their app development project. The calculator app serves as a practical example of the features and functionality of each framework.",
    url:"https://nimeshurkude.github.io/Calculator_Frontend/",
  },
  {
    img:mm,
    title:"Movie Mystery",
    description : "This is a movie quiz website built using <b>RemixJS</b> as the full-stack framework, <b>MongoDB</b> as the database, and <b>Prisma</b> for seamless connection between the full-stack and database. The website is hosted on <b>Netlify</b>, providing a reliable and efficient platform for users. The quiz is designed to test users' knowledge of movies and offers an engaging and entertaining experience.",
    url:"https://moviemystery.netlify.app/",
  },
  {
    img:aii,
    title:"Tensorflow Image Model",
    description : "This is a highly accurate <b>TensorFlow model</b> for image classification, achieving <b>97.5% accuracy</b>. The model is showcased using <b>React</b> and hosted on <b>GitHub</b>, allowing easy access and testing for users. The technology used ensures efficient and reliable classification of images.",
    url:"https://nimeshurkude.github.io/Image_Classification_Model/",
  },
  {
    img:shop,
    title:"Shop App",
    description : "This is a Shop App built using <b>React Native</b> and <b>Typescript</b>. It utilizes the Faker API to enhance the app's functionality and generate realistic data ",
    url:"https://github.com/NimeshUrkude/Fake_Shop_App",
  },
  {
    img:bank,
    title:"Bank Website",
    description:"This is Bank website developed using <b>RemixJS</b> and <b>TypeScript</b>. The website is meticulously designed to emulate the fundamental functionalities of a real bank, providing users with options to <b>create accounts</b>, <b>credit</b> and <b>debit money</b>, and facilitate seamless <b>money transfers</b>.",
    url:"https://bankcred.netlify.app/",
  }
]


export default function Project() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="project_div">
      <div className="container">
        <p className="project_heading">Projects</p>

        <Parta data={data[0]}/>
        <hr className="project_box_hr"/>
        <Partb data={data[1]}/>
        <hr className="project_box_hr"/>
        <Parta data={data[2]}/>
        <hr className="project_box_hr"/>
        <Partb data={data[3]}/>
        <hr className="project_box_hr"/>
        <Parta data={data[4]}/>
        <hr className="project_box_hr"/>
        <Partb data={data[5]}/>
        <hr className="project_box_hr"/>
        <Parta data={data[6]}/>
        <hr className="project_box_hr"/>
        <Partb data={data[7]}/>
        <hr className="project_box_hr"/>
        <Parta data={data[8]}/>
        <hr className="project_box_hr"/>
        <Partb data={data[9]}/>
        <hr className="project_box_hr"/>
        <Parta data={data[10]}/>
      </div>
      <div style={{padding:"30px"}}/>
    </motion.div>
  );
}


export function Parta(props){
  return(
    <div className="row">
    <img src={props.data.img} className="project_box_img col-md-6 col-sm-12"/>
    <div className="project_box_details col-md-6 col-sm-12">
      <div>
        <p className="project_box_name">{props.data.title}</p>
        <p className="project_box_detail" dangerouslySetInnerHTML={{ __html: props.data.description }}/>
        <div className="project_site_div">
          <a href={props.data.url}>
            <button className="project_site_btn">
              Site
              <span className="project_site_btn_icon-right"></span>
              <span className="project_site_btn_icon-right after"></span>
            </button>
          </a>
        </div> 
      </div>
    </div>
  </div>
  );
}

export function Partb(props){
  return(
    <div className="row">
    <div className="project_box_details col-md-6 col-sm-12">
      <div>
        <p className="project_box_name">{props.data.title}</p>
        <p className="project_box_detail" dangerouslySetInnerHTML={{ __html: props.data.description }}/>
        <div className="project_site_div">
          <a href={props.data.url}>
            <button className="project_site_btn">
              Site
              <span className="project_site_btn_icon-right"></span>
              <span className="project_site_btn_icon-right after"></span>
            </button>
          </a>
        </div>  
      </div>
    </div>
    <img src={props.data.img} className="project_box_img col-md-6 col-sm-12"/>
  </div>
  );
}
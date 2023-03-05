import {motion} from "framer-motion";

import blog from "app/helpercode/project/img/blog.jpg";
import weather from "app/helpercode/project/img/Weather.jpg";
import spotify from "app/helpercode/project/img/Spotify.jpg";
import cvd from "app/helpercode/project/img/cvd.jpg";
import aii from "app/helpercode/project/img/aii.jpg";
import diamond from "app/helpercode/project/img/diamond.png";

export default function Project() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="project_div">
      <div className="container">
        <p className="project_heading">Projects</p>
        <div className="row">
          <img src={blog} className="project_box_img col-md-6 col-sm-12"/>
          <div className="project_box_details col-md-6 col-sm-12">
            <div>
              <p className="project_box_name">The Blog Web Site</p>
              <p className="project_box_detail">This is a Blog Website in which blog can be created and delete by user. <b>React</b> for Fron-end , <b>Nodejs</b> for Backen and <b>MongoDB</b> for Database.Front end is Hosted on GitHub and Backend is Hosted on Render</p>
              <div className="project_site_div">
                <a href="https://nimeshurkude.github.io/Blog_Frontend/">
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

        <hr className="project_box_hr"/>

        <div className="row">
          <div className="project_box_details col-md-6 col-sm-12">
            <div>
              <p className="project_box_name">The Weather App</p>
              <p className="project_box_detail">This is a Weather App with Sunset , Sunrise with Day and Night Cycle .Build on <b>React Native</b> with <b>Expo</b>.App is Uploaded in expo .Api used is OpenWeather</p>
              <div className="project_site_div">
                <a href="https://expo.dev/@nimesh_urkude/Weather?serviceType=classic&distribution=expo-go">
                  <button className="project_site_btn">
                    Site
                    <span className="project_site_btn_icon-right"></span>
                    <span className="project_site_btn_icon-right after"></span>
                  </button>
                </a>
              </div>  
            </div>
          </div>
          <img src={weather} className="project_box_img col-md-6 col-sm-12"/>
        </div>

        <hr className="project_box_hr"/>

        <div className="row">
          <img src={cvd} className="project_box_img col-md-6 col-sm-12"/>
          <div className="project_box_details col-md-6 col-sm-12">
            <div>
              <p className="project_box_name">The Image Classification Site</p>
              <p className="project_box_detail">This is a Image Classification Website of Dog or Cat. <b>React</b> is used for Fron-end , <b>Tensorflow</b> for Model training and connect both with <b>TensorflowJS</b>. Front-end and Model is Stored in Github.</p>
              <div className="project_site_div">
                <a href="https://nimeshurkude.github.io/cvdipf/">
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

        <hr className="project_box_hr"/>

        <div className="row">
          <div className="project_box_details col-md-6 col-sm-12">
            <div>
              <p className="project_box_name">Diamond Value Prediction</p>
              <p className="project_box_detail">This is a Diamond Value Prediction Website.<b>React</b> is used for Fron-end , <b>Tensorflow</b> for Model training and connect both with <b>TensorflowJS</b>. Front-end and Model is Stored in Github.</p>
              <div className="project_site_div">
                <a href="https://nimeshurkude.github.io/Diamond_Frontend/">
                  <button className="project_site_btn">
                    Site
                    <span className="project_site_btn_icon-right"></span>
                    <span className="project_site_btn_icon-right after"></span>
                  </button>
                </a>
              </div>  
            </div>
          </div>
          <img src={diamond} className="project_box_img col-md-6 col-sm-12"/>
        </div>

        <hr className="project_box_hr"/>

        <div className="row">
          <img src={spotify} className="project_box_img col-md-6 col-sm-12"/>
          <div className="project_box_details col-md-6 col-sm-12">
            <div>
              <p className="project_box_name">The Spotify Site</p>
              <p className="project_box_detail">This is a <b>Spotify</b> <b>Clone</b> user can Listen Songs. <b>React</b> is used for Fron-end and  Hosted on GitHub</p>
              <div className="project_site_div">
                <a href="https://nimeshurkude.github.io/Sportify_Clone/">
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

        <hr className="project_box_hr"/>

        <div className="row">
          <div className="project_box_details col-md-6 col-sm-12">
            <div>
              <p className="project_box_name">Tensorflow Image Model</p>
              <p className="project_box_detail">This is a <b>Tensorflow</b> <b>Model</b> of <b>Image</b> <b>Classification</b> with <b>97.5%</b> <b>Accuracy</b>. React is used To showcase and Hosted on Github</p>
              <div className="project_site_div">
                <a href="https://nimeshurkude.github.io/Image_Classification_Model/">
                  <button className="project_site_btn">
                    Site
                    <span className="project_site_btn_icon-right"></span>
                    <span className="project_site_btn_icon-right after"></span>
                  </button>
                </a>
              </div>  
            </div>
          </div>
          <img src={aii} className="project_box_img col-md-6 col-sm-12"/>
        </div>

      </div>
      <div style={{padding:"30px"}}/>
    </motion.div>
  );
}

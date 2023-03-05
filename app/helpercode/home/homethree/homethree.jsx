import c from "./img/c.png";
import cpp from "./img/cpp.png";
import javas from "./img/js.png";
import py from "./img/python.png";
import html from "./img/html.png";
import css from "./img/css.png";
import bootstrap from "./img/bootstrap.png";
import react from "./img/react.png";
import sass from "./img/sass.png";
import reactn from "./img/reactn.png";
import express from "./img/ex.jpg";
import nodejs from "./img/nodejs.png";
import mongodb from "./img/mongodb.png";
import remixjs from "./img/remixjs.png";
import tensorflow from "./img/tensorflow.png";
import figma from "./img/figma.png";
import flutter from "./img/flutter.png";
import dart from "./img/dart.png";
import firebase from "./img/firebase.png";
import prisma from "./img/prisma.png";


export default function Homethree() {
  return (
    <div className="homethree_div">
      <p className="homethree_heading">Skills</p>

      <div style={{margin:"0px"}} className="row">

      <div style={{padding:"0px"}} className="col-md-6 col-sm-12">
      <div className="homethree_box_outer">
        <p className="homethree_box_outer_heading">Language</p>
        <div className="homethree_box">
          <div className="homethree_box_inner"><img className="homethree_box_inner_img" src={c}/><p className="homethree_box_inner_name">C</p></div>
          <div className="homethree_box_inner"><img className="homethree_box_inner_img" src={cpp}/><p className="homethree_box_inner_name">C++</p></div>
          <div className="homethree_box_inner"><img className="homethree_box_inner_img" src={javas}/><p className="homethree_box_inner_name">Javascript</p></div>
          <div className="homethree_box_inner"><img className="homethree_box_inner_img" src={py}/><p className="homethree_box_inner_name">Python</p></div>
          <div className="homethree_box_inner"><img className="homethree_box_inner_img" src={dart}/><p className="homethree_box_inner_name">Dart</p></div>
        </div>
      </div>
      </div>

      <div style={{padding:"0px"}} className="col-md-6 col-sm-12">
      <div className="homethree_box_outer">
        <p className="homethree_box_outer_heading">Front End</p>
        <div className="homethree_box">
          <div className="homethree_box_inner"><img className="homethree_box_inner_img" src={html}/><p className="homethree_box_inner_name">HTML</p></div>
          <div className="homethree_box_inner"><img className="homethree_box_inner_img" src={css}/><p className="homethree_box_inner_name">CSS</p></div>
          <div className="homethree_box_inner"><img className="homethree_box_inner_img" src={bootstrap}/><p className="homethree_box_inner_name">Bootstrap</p></div>
          <div className="homethree_box_inner"><img className="homethree_box_inner_img" src={sass}/><p className="homethree_box_inner_name">Sass</p></div>
          <div className="homethree_box_inner"><img className="homethree_box_inner_img" src={figma}/><p className="homethree_box_inner_name">Figma</p></div>
        </div>
      </div>
      </div>

      <div style={{padding:"0px"}} className="col-md-6 col-sm-12">
      <div className="homethree_box_outer">
        <p className="homethree_box_outer_heading">Back End</p>
        <div className="homethree_box">
          <div className="homethree_box_inner"><img className="homethree_box_inner_img" src={express}/><p className="homethree_box_inner_name">Express</p></div>
          <div className="homethree_box_inner"><img className="homethree_box_inner_img" src={nodejs}/><p className="homethree_box_inner_name">Node JS</p></div>
          <div className="homethree_box_inner"><img className="homethree_box_inner_img" src={mongodb}/><p className="homethree_box_inner_name">MongoDB</p></div>
          <div className="homethree_box_inner"><img className="homethree_box_inner_img" src={firebase}/><p className="homethree_box_inner_name">Firebase</p></div>
          <div className="homethree_box_inner"><img className="homethree_box_inner_img" src={prisma}/><p className="homethree_box_inner_name">Prisma</p></div>
        </div>
      </div>
      </div>

      <div style={{padding:"0px"}} className="col-md-6 col-sm-12">
      <div className="homethree_box_outer">
        <p className="homethree_box_outer_heading">FrameWork</p>
        <div className="homethree_box">
          <div className="homethree_box_inner"><img className="homethree_box_inner_img" src={react}/><p className="homethree_box_inner_name">React</p></div>
          <div className="homethree_box_inner"><img className="homethree_box_inner_img" src={reactn}/><p className="homethree_box_inner_name">React Native</p></div>
          <div className="homethree_box_inner"><img className="homethree_box_inner_img" src={remixjs}/><p className="homethree_box_inner_name">Remix JS</p></div>
          <div className="homethree_box_inner"><img className="homethree_box_inner_img" src={tensorflow}/><p className="homethree_box_inner_name">Tensorflow</p></div>
          <div className="homethree_box_inner"><img className="homethree_box_inner_img" src={flutter}/><p className="homethree_box_inner_name">Flutter</p></div>
        </div>
      </div>
      </div>

    </div>
    <div style={{padding:"2%"}}/>
    </div>
  );
}

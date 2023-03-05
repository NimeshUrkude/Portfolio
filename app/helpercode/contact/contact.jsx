import {motion} from "framer-motion";
import { useState } from "react";
export default function contact() {
  const[name,setname]=useState("")
  const[email,setemail]=useState("")
  const[subject,setsubject]=useState("")
  const[message,setmessage]=useState("")
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="contact_div">

      <div style={{padding:"2.5%"}}/>

      <div className="contant_line_zero">Let's Build Something New</div>
      <div style={{padding:"2.5%"}}/>

      <div className="row">
        <div className="contact_row_right col-md-6 colsm-12">
          <p className="contact_line_one">Let's Collabrate!</p>
          <p className="contact_line_two">Need to get in touch with us? Either fill out the form with your inquiry or find at Linkedin</p>
        </div>

        <div className="col-md-6 colsm-12">

          <div className="row">
            <div className="col-6">
              <label className="contact_label">Name</label>
            </div>
            <div className="col-6">
              <label className="contact_label">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <input placeholder="Name" value={name} onChange={e=>setname(e.target.value)} className="form-control"></input>
            </div>
            <div className="col-6">
            <input placeholder="Email" value={email} onChange={e=>setemail(e.target.value)} className="form-control"></input>
            </div>
          </div>

          <div style={{padding:"10px"}}/>


          <div>
            <label className="contact_label">Subject</label>
          </div>

          <div>
            <input placeholder="Subject" value={subject} onChange={e=>setsubject(e.target.value)} className="form-control"></input>
          </div>


          <div style={{padding:"10px"}}/>


          <div>
            <label className="contact_label">Message</label>
          </div>

          <div>
            <textarea placeholder="Message" value={message} onChange={e=>setmessage(e.target.value)} rows={4} className="form-control"></textarea>
          </div>

          <div style={{padding:"10px"}}/>

          <div className="contact_submitbtn_div">
            <a className="contact_submit_a" href={"mailto:nimeshurkude@gmail.com?body=Name:" + name + "%0D%0AEmail:" + email + "%0D%0AMessage:" + message + "&subject=" + subject} ><button className="contact_submit_btn">Submit	<div className="contact_submit_btn_horizontal"></div><div className="contact_submit_btn_vertical"></div></button></a>
          </div>

        </div>
      </div>






      <div style={{padding:"2%"}}/>

    </motion.div>
  );
}

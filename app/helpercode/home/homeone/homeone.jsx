import Typewriter from 'typewriter-effect';
import {motion} from "framer-motion";
export default function Homeone() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="homeone-div">
    
    <p className='homeone-lineone'>Hello !</p>
    <p className='homeone-lineone'>I'm Nimesh Urkude</p>
    <Typewriter
          options={{
          strings: ["Web Developer","App Developer","ML Engineer"],
          autoStart: true,
          loop: true,
          delay:200,
          deleteSpeed:150,
          cursor:"_",
          }}
      />

      <div className='home-down'>
        <a href='https://github.com/NimeshUrkude' className="fa-brands fa-github homeone-osm"></a>
        <a href='https://www.linkedin.com/in/nimesh-urkude-2254b3198/' className="fa-brands fa-linkedin homeone-osm"></a>
        <a href='mailto:nimeshurkude@gmail.com' className="fa-solid fa-envelope homeone-osm"></a>
      </div> 

    </motion.div>
  );
}

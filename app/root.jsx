import Header from "./helpercode/header/header";
import Footer from "./helpercode/footer/footer";
//const {Links,LiveReload,Meta,Outlet,Scripts,ScrollRestoration} = require("@remix-run/react");
import {Links,LiveReload,Meta,Outlet,Scripts,ScrollRestoration} from "@remix-run/react";

export const meta = () => {
  return({
    charset: "utf-8",
    title: "Nimesh Urkue",
    viewport: "width=device-width,initial-scale=1",
    description:"Description",
  });  
}

import css from "./css/index.css"
export const links = () =>{
return[
    {
      rel:"stylesheet",
      href:css,
    },
    {
      /*css*/
      rel:"stylesheet",
      integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
      crossOrigin:"anonymous",
      href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
    },
    {
      /*bootstrap*/
      rel:"stylesheet",
      href:"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css",
      integrity:"sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7",
      crossOrigin:"anonymous",
    },
    {
      /*fontosm*/
      rel:"stylesheet",
      href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css",
      integrity:"sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==",
      crossOrigin:"anonymous",
      referrerPolicy:"no-referrer",
    },
    /*font*/
    /*font-family: 'Martian Mono', monospace;*/
    /*200 400*/
    /*font-family: 'Raleway', sans-serif;*/
    /*400 500*/
    {
      rel:"preconnect",
      href:"https://fonts.googleapis.com",
    },
    {
      rel:"preconnect",
      href:"https://fonts.gstatic.com",
    },
    {
      rel:"stylesheet",
      href:"https://fonts.googleapis.com/css2?family=Martian+Mono:wght@200;400;600;800&display=swap",
    },
    {
      rel:"stylesheet",
      href:"https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap",
    },
  ];
};



export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body style={{margin:"0px"}}>
        <Header/>
        <Outlet />
        <Footer/>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV==="development"?<LiveReload/> : null}
      </body>
    </html>
  );
}

import { NavLink } from "@remix-run/react";
export default function Header() {

  return (
    <div className="header_div_outer">
      <div className='header_link_div'>
        <NavLink style={({ isActive }) =>isActive ? {color:"white"}: {color:"silver"}} to="/" className='header_link'>Home</NavLink>
        <NavLink style={({ isActive }) =>isActive ? {color:"white"}: {color:"silver"}} to="/contact" className='header_link'>Contact</NavLink>
        <NavLink style={({ isActive }) =>isActive ? {color:"white"}: {color:"silver"}} to="/project" className='header_link'>Project</NavLink>
      </div>
    </div>
  );
}
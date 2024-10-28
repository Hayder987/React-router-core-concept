import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        <div className="bg-slate-800 p-3">
           <nav className="flex justify-center">
             <ul className="flex gap-10 text-xl text-white ">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/about" >About</NavLink>
                <NavLink to="/blogs" >Blogs</NavLink>
             </ul>
           </nav> 
        </div>
    );
};

export default Navbar;
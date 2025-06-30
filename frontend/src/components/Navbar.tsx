import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="buttonGroup">
            <NavLink className='button' to='/'>Home</NavLink>
            <NavLink className='button' to='/A1'>A1</NavLink>
            <NavLink className='button' to='/A2'>A2</NavLink>
            <NavLink className='button' to='/A3'>A3</NavLink>
            {/* <NavLink className='button' to='/A4'>A4</NavLink> */}
            <NavLink className='button' to='/A4Yup'>A4Yup</NavLink>
            <NavLink className='button' to='/A5'>A5</NavLink>
            
        </div>
    );
};

export default Navbar;
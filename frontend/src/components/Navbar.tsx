import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="buttonGroup">
            <Link className='button' to='/'>Home</Link>
            <Link className='button' to='/A1'>A1</Link>
            <Link className='button' to='/A2'>A2</Link>
            {/* <Link className='button' to='/A3'>A3</Link>
            <Link className='button' to='/A4'>A4</Link>
            <Link className='button' to='/A5'>A5</Link> */}
        </div>
    );
};

export default Navbar;
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="component">
                <h1>reactTraning Assignments</h1>
            </div>

            <Link className='subComponent' to='/A1'>Assignment 1</Link>
            <Link className='subComponent' to='/A2'>Assignment 2</Link>
            <Link className='subComponent' to='/A3'>Assignment 3</Link>
            <Link className='subComponent' to='/A4'>Assignment 4</Link>
            <Link className='subComponent' to='/A5'>Assignment 5</Link>
        </>
    );
};

export default Home;
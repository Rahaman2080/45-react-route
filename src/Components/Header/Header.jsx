import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav className="flex gap-16 justify-center items-center m-8">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/contact">Contact us</Link>
           
        </nav>
    );
};

export default Header;
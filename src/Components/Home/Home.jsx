import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Home = () => {
    return (
        <div className="m-12">
            <Header></Header>
            <p className="text-2xl text-blue-800 font-semibold text-center">This is my website. To know about me. click about. To contact with me click contcat us.</p>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
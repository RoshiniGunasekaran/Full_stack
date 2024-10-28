import './Welcome.css';
import Navbar from '../components/Navbar';
import Image from '../assets/welcome1.png';
import { useNavigate } from 'react-router-dom';


const Welcome = () => {
    const navigate= useNavigate();

    const handleclick=()=>{
        navigate('/login')
    }

    return (
        <div className="welcome-page">
            <Navbar />
            <div className="content_welcome">
                <h1>Welcome to this one</h1>
                <button className='button_welcome' onClick={handleclick}>Explore Me</button>
            </div>
            <div className='image_welcome'>
            <img src={Image} alt="Welcome" /> 
            </div>
        </div>
    );
};

export default Welcome;

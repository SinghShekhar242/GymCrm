import { useNavigate } from "react-router-dom";
import "./home.css";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="login-background">
            <video autoPlay loop muted playsInline className="background-video">
                <source src="/videos/gym_home.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="overlay">
                <div className="login-container glass-effect">
                    <h1 className="login-title">Select Your Role</h1>
                    <div className="role-grid">
                        <div className="role-card" onClick={() => navigate("/admin")}>
                            <h2>Admin</h2>
                        </div>
                        <div className="role-card" onClick={() => navigate("/ReceptionistPage")}>
                            <h2>Receptionist</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

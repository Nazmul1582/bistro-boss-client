import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { loginWithGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(() => {
                Swal.fire({
                    title: "Successfully logged-in!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire({
                    title: "Oops!",
                    text: error.message,
                    icon: "error",
                })
            })
    }
  return (
    <>
      <button onClick={handleGoogleLogin} className="btn">
        <FaGoogle />
        Google
      </button>
    </>
  );
};

export default SocialLogin;

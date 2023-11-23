import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const axiosPublic = useAxiosPublic()
    const { loginWithGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((res) => {
                const userInfo = {name: res.user?.displayName, email: res.user?.email }
                axiosPublic.post("/users", userInfo)
                    .then((res) => {
                        console.log(res.data);
                    })
                    .catch(error => console.log(error.message))

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
      <div className="divider mx-8">or</div>
      <button onClick={handleGoogleLogin} className="btn">
        <FaGoogle />
        Google
      </button>
    </>
  );
};

export default SocialLogin;

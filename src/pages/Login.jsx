import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/bazaarSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        // setTimeout(() => {
        //   // navigate("/");
        // }, 2000);
      })
      .catch((error) => {
        console.log("Error please", error);
      });
  };

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        toast.success("Signed Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-max-screen-xl mx-auto gap-5 h-[70vh] w-full flex flex-col justify-center items-center">
      <div className="flex gap-5">
        <div
          onClick={handleGoogleLogin}
          className="flex cursor-pointer text-sm items-center rounded-xl tracking-wide   gap-5 px-5 py-2 bg-gray-100 border-[1px] border-gray-500 hover:border-blue-600"
        >
          <FcGoogle size={25} /> Sign in with Google
        </div>
        <button
          onClick={handleGoogleSignOut}
          className="bg-gray-950 rounded-xl px-4 py-2 text-white"
        >
          Sign Out
        </button>
      </div>
      <div className="flex gap-5">
        <div className="flex cursor-pointer text-sm items-center rounded-xl tracking-wide  gap-5 px-5 py-2  bg-gray-100 border-[1px] border-gray-500 hover:border-blue-600">
          <FaGithub size={25} /> Sign in with Github
        </div>
        <button className="bg-gray-950 rounded-xl px-4 py-2 text-white">
          Sign Out
        </button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Login;

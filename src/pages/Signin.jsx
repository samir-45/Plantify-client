import React, { use, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { useNavigate } from 'react-router';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Swal from 'sweetalert2';

const Signin = () => {

      const [loginError, setLoginError] = useState('')
      const {signIn, GoogleSignIn, setUser} = use(AuthContext)


        const navigate = useNavigate()

      const handleSignIn = e => {
        e.preventDefault()

          e.preventDefault()
  const email = e.target.email.value;
  const password = e.target.password.value;
  console.log(email, password)

//   Login user
  signIn(email, password)
  .then(result => {
    console.log(result)
    Swal.fire({
  position: "center",
  icon: "success",
  title: "Login Successful",
  showConfirmButton: false,
  timer: 1500
});
    navigate(`${location.state? location.state:'/'}`)
  })
  .catch(error => {
    // console.log(error)
    setLoginError(error);
    Swal.fire({
  position: "center",
  icon: "error",
  title: "Your username or password Incorrect! Please try again",
  showConfirmButton: false,
  timer: 1500
});
  })
      }

      const handleGoogleSignIn = () => {
            GoogleSignIn()
      .then(result => {
        // console.log(result.user)
            Swal.fire({
  position: "center",
  icon: "success",
  title: "Login Successful",
  showConfirmButton: false,
  timer: 1500
});
        setUser(result.user);
    navigate(`${location.state? location.state:'/'}`)
      })
      .catch(error => {
        console.log(error)
      })
      }

        const [showPassword, setShowPassword] = useState(true);

    return (
        <div>
                <div className="hero min-h-screen bg-[url('https://i.ibb.co/7tyCkg2p/il-1588x-N-3771147591-89li.jpg')] bg-cover bg-center">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <p className="py-6 text-center">
        A prominent plant care tracker which helps you to track the watering time of your plants <br /> and also provide  services of get rid from plant desease
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSignIn}>
          <label className="label">Email</label>
          <input required name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          {/* Password */}
          <label className="input validator">
  <input
type={showPassword ? "password" : "text"}
    required
    name='password'
    placeholder="Password"
    minLength="8"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
  />
        {/* Show/Hide Icon */}
      <span
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
      </span>
</label>

          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4 w-full hover:bg-green-800 bg-[#234823] trxt-lg font-bold  text-green-300">Login</button>
          <button onClick={handleGoogleSignIn} type='button' className="btn w-full mt-4 bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
        {
            loginError.message && <p className='text-red-500 font-bold text-sm text-center mt-5'>Your username or password Incorrect! Please try again</p>
        }
          

        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Signin;
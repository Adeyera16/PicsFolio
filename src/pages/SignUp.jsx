import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import image from "../assets/login.jpg";
import { auth } from "../firebaseConfig";
import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      navigate("/");
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section>
      <div className="flex">
        <img src={image} alt="login image" className="hidden md:block w-[50rem] h-screen" />
        <div className="flex flex-col justify-center">
          <form action="" className=" w-[40rem] text-center">
            <h1 className="font-bold text-2xl mb-5 text-[#3d85d4]">Sign Up</h1>
            <div className="mb-[1rem]">
              <input
                type="email"
                placeholder="email address"
                className="w-[20rem] p-2 outline-none border-2 border-gray-500 rounded-md"
                value={formData.email}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  });
                  if (e.target.value === "") {
                    setErrors({
                      ...errors,
                      email: "Please enter your email address",
                    });
                  } else if (
                    !e.target.value.match(
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    )
                  ) {
                    setErrors({
                      ...errors,
                      email: "Please enter a valid email address",
                    });
                  } else {
                    setErrors({
                      ...errors,
                      email: "",
                    });
                  }
                }}
              />
              {errors.email && (
                <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
              )}
            </div>
            <div className="mb-[1rem]">
              <input
                type="password"
                placeholder="password"
                className="w-[20rem] p-2 outline-none border-2 border-gray-500 rounded-md"
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  if (e.target.value === "") {
                    setErrors({
                      ...errors,
                      password: "Please enter password",
                    });
                  } else if (e.target.value.length < 8) {
                    setErrors({
                      ...errors,
                      password: "Password must be atleast 8 characters long",
                    });
                  } else {
                    setErrors({
                      ...errors,
                      password: "",
                    });
                  }
                }}
              />
              {errors.password && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errors.password}
                </p>
              )}
            </div>
            <button
              onClick={register}
              className="bg-black text-white p-2 w-[8rem] rounded-md mt-[1rem]"
            >
              Register
            </button>
            <p>Already have an account? <Link to="/login" className='text-[#3d85d4] my-[1rem]'>Login</Link></p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;

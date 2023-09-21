import image from "../assets/login.jpg";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const submitForm = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      console.log(user);

      navigate("/");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setErrors({
          email: "User is not registered. Please sign up first.",
          password: "",
        });
      } else {
        console.error(error.message);
        toast.error("An error occurred. Please try again later.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  const handleSubmit = () => {
    let isValid = true;

    if (!formData.password) {
      setErrors({
        password: "Password is required",
      });
      isValid = false;
      console.log("Password error set");
    }
    if (!formData.email) {
      setErrors({
        email: "Email is required",
      });
      isValid = false;
      console.log("Email message set");
    }

    if (isValid) {
      submitForm();
      console.log("form submitted");
    }
  };
  return (
    <section>
      <div className="flex">
        <img src={image} alt="login image" className="hidden md:block w-[50rem] h-screen" />
        <div className="flex flex-col justify-center">
          <form className=" w-full items-center mx-[2rem] md:mx-[1rem] md:w-[40rem] text-center flex flex-col h-screen justify-center">
            <h1 className="font-bold text-2xl italic text-[#3d85d4]">
              PicsFolio
            </h1>
            <h2 className="font-bold text-xl mb-[2rem] ">Welcome Back!</h2>
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
              type="button"
              onClick={handleSubmit}
              className="bg-black text-white p-2 w-[8rem] rounded-md mt-[1rem]"
            >
              Login
            </button>
            <p>
              Not a member?{" "}
              <Link to="/signup" className="text-[#3d85d4] my-[1rem]">
                Register now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Signin() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token") || "";
//   const [email, setEmail] = useState("");
//   const [pass, setPassword] = useState("");
//   const [loginError, setLoginError] = useState(false);

//   const handleLogin = async () => {
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_BASE_URL}users/login`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             email,
//             pass,
//           }),
//         }
//       );

//       if (!response.ok) {
//         const errorResponse = await response.json();
//         setLoginError(true);
//         throw new Error(errorResponse.msg);
//       } else {
//         const data = await response.json();
//         if (response.status === 200 && data.token) {
//           alert("You are logged in!");
//           localStorage.setItem("token", data.token);
//           navigate("/home");

//         } else {
//           setLoginError(true);
//           alert("Wrong Credentials Entered");
//           navigate("/signup");
//         }
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Sign In</h1>
//       <br />
//       <input
//         type="text"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter your email"
//       />
//       <input
//         type="password"
//         value={pass}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Enter Password"
//       />
//       {loginError && <p>Wrong credentials. Please try again.</p>}
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default Signin;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";
function Signin() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token") || "";
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            pass,
          }),
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        setLoginError(true);
        throw new Error(errorResponse.msg);
      } else {
        const data = await response.json();
        if (response.status === 200 && data.token) {
          alert("You are logged in!");
          localStorage.setItem("token", data.token);
          navigate("/home");

        } else {
          setLoginError(true);
          alert("Wrong Credentials Entered");
          navigate("/signup");
        }
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>      
      <div className="create-account-form">
      <h1>Sign In</h1>
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      {loginError && <p>Wrong credentials. Please try again.</p>}
      <button  onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
  
  
}

export default Signin;

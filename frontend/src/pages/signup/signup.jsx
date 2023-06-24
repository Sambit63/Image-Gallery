// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Signup() {
//   const [email, setEmail] = useState("");
//   const [pass, setPassword] = useState("");
//   const [gender, setGender] = useState("");
//   const [name, setName] = useState("");

//   const navigate = useNavigate();

//   const handleSignup = async () => {
//     const obj = {
//       name,
//       email,
//       gender,
//       pass,
//     };
//     console.log(obj);
//     try {
//       const response = await fetch("http://localhost:8000/users/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(obj),
//       });
//       if (!response.ok) {
//         const res = await response.json();
//         throw new Error(res);
//       } else {
//         const data = await response.json();
//         console.log(data);
//         alert(data.msg);
//         navigate("/login");
//       }
//     } catch (error) {
//       console.log(error);
//       alert(error.msg);
//     }
//   };

//   return (
//     <div>
//       <h1>Create Account </h1>
//       <br />
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter Your name"
//       />
//       <input
//         type="text"
//         value={gender}
//         onChange={(e) => setGender(e.target.value)}
//         placeholder="Enter Your gender"
//       />
//       <input
//         type="text"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter your email"
//       />
//       <input
//         type="text"
//         onChange={(e) => setPassword(e.target.value)}
//         value={pass}
//         placeholder="Enter Password"
//       />
//       <button onClick={handleSignup}>Create Account</button>
//       <Link to="/">
//           <button>Already have an account</button>
//       </Link>
//     </div>
//   );
// }

// export default Signup;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    const obj = {
      name,
      email,
      gender,
      pass,
    };
    console.log(obj);
    try {
      const response = await fetch("http://localhost:8000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      if (!response.ok) {
        const res = await response.json();
        throw new Error(res);
      } else {
        const data = await response.json();
        console.log(data);
        alert(data.msg);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert(error.msg);
    }
  };

  return (
    <div className="create-account-form"  >
      <h1>Create Account </h1>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your name"
      />
      <input
        type="text"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        placeholder="Enter Your gender"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        value={pass}
        placeholder="Enter Password"
      />
      <button onClick={handleSignup}>Create Account</button>
      <Link to="/">
          <button>Already have an account</button>
      </Link>
    </div>
  );
}

export default Signup;
import React, { useState, useContext, useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ContextData from "../context/product-data";
import { useNavigate } from "react-router-dom";
import auth from "../FirebaseHelper/firebase";
import '../style/Login.css'

const style = {
  display: 'grid',
  placeItems: 'center',
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  borderRadius:'6px',
  boxShadow: 24,
  p: 4,
  borderTop: '10px solid #E40046'
};
export default function Login() {
  const [log, setLog] = useState(true);
  const { open, setOpen, setIsUserLogin } = useContext(ContextData);
  const navo = useNavigate();
  const emailRef = useRef();
  const passRef = useRef();
  const nameRef = useRef();
  const useridRef = useRef();
  const userpassRef = useRef();
  const [error, setError] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  // Firebase Sign-up
  const handleUser = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      const user = auth.currentUser;
      if (user) {
        await user.updateProfile({
          displayName: nameRef.current.value,
        });
        navo("/cart");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Firebase Sign-in
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = useridRef.current.value;
    const password = userpassRef.current.value;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      navo("/cart");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          {log ? (
            <form onSubmit={handleLogin}>
              <p>Login Id</p>
              <input
                type="email"
                placeholder="Yourname@gmail.com"
                ref={useridRef}
                required
              />
              <p>Password</p>
              <input
                type="password"
                placeholder="abcd@1234#"
                ref={userpassRef}
                required
              />
              <button style={{width:'100%'}} type="submit">Login</button>
              <button style={{width:'100%'}} onClick={() => setLog(false)}>Sign In</button>
            </form>
          ) : (
            <form onSubmit={handleUser}>
              <input
                type="text"
                placeholder="User Name"
                ref={nameRef}
                required
              />
              <input type="text" placeholder="Email" ref={emailRef} required />
              <input
                type="password"
                placeholder="Password"
                ref={passRef}
                required
              />
              <button type="submit">Submit</button>
              <button onClick={() => setLog(true)}>Login</button>
            </form>
          )}
        </Box>
      </Modal>
    </div>
  );
}

import * as React from "react";
import Modal from "react-modal";
import logo from "./images/logo.png";
import "./styles.css";

Modal.setAppElement("#root");
const PopUp = () => {
  React.useEffect(() => {
    console.log("hi");
  }, []);
  const [modal, setModal] = React.useState(true);
  function closePopUp() {
    setModal(false);
  }
  return (
    <div className="pop-up">
      <Modal isOpen={modal} className="pop-up-box">
        <div className="close-box">
          <button onClick={closePopUp} className="close">
            X
          </button>
        </div>
        <img className="logo-in-popup" src={logo} />
        <h1>Register and get a discount</h1>
        <button className="register">Register</button>
      </Modal>
    </div>
  );
};

export default PopUp;

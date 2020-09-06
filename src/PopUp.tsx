import React, {useState, useEffect} from 'react';
import Modal from 'react-modal'
import logo from './images/logo.png'

Modal.setAppElement('#root');
function PopUp() {
    useEffect(() => {
        console.log("hi");
    }, []);
    const [modal, setModal] = useState(true)
    function closePopUp() {
        setModal(false);
    }
    return (
        <div className="pop-up">
            <Modal isOpen={modal} className="pop-up-box">
                <div className="close-box">
                    <button onClick={closePopUp} className="close">X</button>
                </div>
                <img className="logo-in-popup" src={logo}/>
                <h1>Register and get a discount</h1>
                <button className="register">Register</button>
            </Modal>
        </div>
    )
}

export default PopUp;
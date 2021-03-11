import React from "react";
import {Modal} from "react-bootstrap";
import { IoMdClose } from 'react-icons/io';

const CModal = ({
    show=false,
    className="center lg c-media-picker",
    backdrop="static",
    keyboard=false,
    onHide=null,
    children
}) => {
    return (

        <Modal  
        show={show}
        backdrop={backdrop}
        onHide={onHide} 
        keyboard={keyboard}
        className={`c-modal ${className}`}
        >

            <button type="button" className="close" onClick={onHide}>

                <IoMdClose />

            </button>

            {children}

        </Modal>
    );
}
export default CModal

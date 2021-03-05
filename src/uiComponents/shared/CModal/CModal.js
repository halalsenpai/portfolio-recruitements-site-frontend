import React from "react";
import {Modal} from "react-bootstrap";
import { IoMdClose } from 'react-icons/io';

const CModal = (props) => {
    return (
        <Modal {...props} className={`c-modal ${props.className ? props.className : ''}`}>
            <button type="button" className="close" onClick={props.onHide}>
                <IoMdClose />
            </button>
            {props.children}
        </Modal>
    );
}
export default CModal

import React from "react";
import { Modal } from "@mui/material";

interface PropsType {
    showModal: boolean,
    setShowModal: any,
    children: any,
    width?: number,
    height?: number
}

export const ModalBar: React.FC<PropsType> = ({showModal, setShowModal, children, width, height}) => {
    return (
        <Modal
        style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        open={showModal}
        onClose={setShowModal}
        >
        <div
            style={{
                width: `${width ? `${width}px` : '1000px'}`,
                height: `${height ? `${height}px` : '65%'}`,
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '-1px -4px 45px -3px rgba(0,0,0,0.75)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            {children}
        </div>
    </Modal>
    )
}
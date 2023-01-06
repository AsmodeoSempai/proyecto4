import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from 'react-router-dom';


const ReservaLista = () => {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [clave, setClave] = useState("");
    const verificarClave = (claveIngresada) => {
        if (claveIngresada === "123") {
            return true;
        } else {
            return false;
        }
    };


    return (
        <>
            <div style={{backgroundColor: "black"}}>
                <Button variant="warning" onClick={handleShow}>
                    Mostar Reservas
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ingrese la clave / la clave es 123 </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label htmlFor="clave">Clave:</label>
                        <input type="password" id="clave" onChange={(e) => setClave(e.target.value)} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="warning" onClick={() => {
                            if (verificarClave(clave)) {
                                handleClose();
                                alert("Mostrando tabla")
                                return navigate('/tablareserva')

                            } else {
                                alert("La clave es incorrecta");
                                setShow(false);
                                setTimeout(() => {
                                    setShow(true);
                                }, 100);
                            }
                        }} >
                            Aceptar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}




export default ReservaLista
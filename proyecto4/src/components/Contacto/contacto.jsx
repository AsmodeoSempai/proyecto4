import '../Contacto/contacto.css'
import React, { useState } from 'react';
import ReservaSevicios from '../servicios/reserva.sevicios';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import ReservaLista from '../servicios/reserva.lista.admin';



export function Contacto() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState(0);
  const [phone, setphone] = useState('');
  const [message, setMesasge] = useState({error: false, msg:""});

  const handleSubmit = async(event) => {
    event.preventDefault();
    setMesasge("")
    if (name ==="" ||date ==="" || time ==="" || partySize ==="" || phone ===""){
        setMesasge({error: true,msg : "Se deben llenar todos los datos"});
        return;
    } 
    
    const newReserva ={
        name,
        date,
        time,
        partySize,
        phone
    };

    try{
        await ReservaSevicios.addReserva(newReserva);
        setMesasge({erro: false, msg: "Reserva Guardada"})
    } catch (err){
        setMesasge({error: true, msg: err.message})
    }

    setName("");
    setDate("");
    setPartySize("");
    setTime("");
    setphone("");

  };

  return (
    <>
    <seccion className='contacto'>
        <div className='izquierda'>

            <h1>Contacto</h1>
            <p>+123445677</p>
            <h1>Dirección</h1>
            <p>muy muy lejano</p>

        </div>
        
        
        
        <div  className='derecha p-4 box'>
        {message?.msg &&(<Alert variant={ message?.error ? "danger" : "success"} dismissible onClose={()=> setMesasge("")}>{message?.msg} </Alert>)}
                <Form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                </label>
                <br />
                <label>
                    Fecha:
                    <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
                </label>
                <br />
                <label>
                    Hora:
                    <input type="time" value={time} onChange={(event) => setTime(event.target.value)} />
                </label>
                <br />
                <label>
                    Número de personas:
                    <input type="number" value={partySize} onChange={(event) => setPartySize(event.target.value)} />
                </label>
                <br />
                <label>
                    Teléfono:
                    <input type="text" value={phone} onChange={(event) => setphone(event.target.value)} />
                </label>
                <br />
                <Button variant='warning' type="submit">Hacer reserva</Button>
                </Form>
        </div>
    </seccion>
    <ReservaLista/>
    </>
  );
}



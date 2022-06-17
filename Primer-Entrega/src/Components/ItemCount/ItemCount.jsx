import { useState } from 'react'
import './ItemCount.css'

function Contador({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);
    //const [date, setDate] = useState(Date());

    function suma() {
        if( count < stock ) {
            setCount(count + 1);
            //setDate(Date());
        }
    }

    function resta() {
        if( count > initial) {
            setCount(count - 1);
            //setDate(Date());
        }
    }

    function agregar() {
        alert('Se agregaron ' + count + ' artículos al carrito')
    } 

    //<p>Fecha: {date}</p>

    return (
        <div>
            <div className='contador'>
                <button onClick={suma}>+</button>
                <p>{count}</p>
                <button onClick={resta}>-</button>
            </div>
            <button className='agregar' onClick={agregar}>Agregar al carrito</button>
        </div>
    )
}

export default Contador


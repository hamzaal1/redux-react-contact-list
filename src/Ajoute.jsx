import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

function Ajoute() {
    const [name,setName] = useState();
    const [prenom,setPrenom] = useState();
    const [image,setImage] = useState();
    const [fonction,setFonction] = useState();
    const dispatch = useDispatch();

    const Ajoute = ()=>{
        dispatch({
            type:"NEW_EMPLOYER",
            payload:{
                name,
                prenom,
                image,
                fonction
            }
        });
    }
    return (
        <div className='container'>
            <div className="flex justfiy-center form-group">
                Name:<input onChange={(e)=>setName(e.target.value)} className='my-2' type="text" name="" placeholder='Name' /> <br />
                Prenom:<input onChange={(e)=>setPrenom(e.target.value)} className='my-2' type="text" name="" placeholder='Prenom' /> <br />
                Image:<input onChange={(e)=>setImage(encodeURIComponent(e.target.value))} className='my-2' type="text" name="" placeholder='Image' /> <br />
                Fonction:<input onChange={(e)=>setFonction(e.target.value)} className='my-2' type="text" name="" placeholder='Fonction' /> <br />
                <button onClick={Ajoute} className='btn btn-dark'>Ajoute Employer</button>

            </div>
        </div>
    )
}

export default Ajoute;
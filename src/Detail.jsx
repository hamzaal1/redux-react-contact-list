import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail() {
    const { nom } = useParams();
    const { Employers } = useSelector(state => state.employeReducer);
    const employe = Employers.find(employe => employe.name == nom);
    return (
        <div>
            <ul>
                <li>name : {employe.name}</li>
                <li>prenom : {employe.prenom}</li>
                <li>image : {employe.image}</li>
                <li>fonction : {employe.fonction}</li>
            </ul>
        </div>
    )
}
export default Detail;
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Form from '../form';

export default function FormPage () {
    const [numInputs, setNumInputs] = useState('');
    const [numTextarea, setNumTextarea] = useState('');
    const [numCheckbox, setNumCheckbox] = useState('');
    const [curentFormParametrs, setCurentFormParametrs] = useState({input:0, textarea:0, checkbox:0})
    const handleChangeNumInputs = (e) => {
        setNumInputs(e.target.value)
    }
    const handleChangeNumTextarea = (e) => {
        setNumTextarea(e.target.value)
    }
    const handleChangeNumCheckbox = (e) => {
        setNumCheckbox(e.target.value)
    }
    const handleClickBuild = () => {
        setCurentFormParametrs({inputs:numInputs, textareas:numTextarea, checkboxs:numCheckbox})
    }

    return (
        <>
            <button>
                <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    HOME
                </Link>
            </button>
            <div style={{display:"flex"}}>
                <p>input</p>
                <input onChange={handleChangeNumInputs} value={numInputs} type="number" name="input" />
            </div>
            <div style={{display:"flex"}}>
                <p>textarea</p>
                <input onChange={handleChangeNumTextarea} value={numTextarea} type="number" name="textarea" />
            </div>
            <div style={{display:"flex"}}>
                <p>checkbox</p>
                <input onChange={handleChangeNumCheckbox} value={numCheckbox} type="number" name="checkbox" />
            </div>
            <button onClick={handleClickBuild}>
                Build
            </button>
            <Form params={curentFormParametrs}/>
        </>
        
    )
}
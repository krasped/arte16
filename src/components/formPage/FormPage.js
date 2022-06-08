import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import Form from '../form';
import './formPage.css';

export default function FormPage () {
    const [numInputs, setNumInputs] = useState('');
    const [numTextarea, setNumTextarea] = useState('');
    const [numCheckbox, setNumCheckbox] = useState('');
    const [isField, setIsField] = useState(false);
    const [curentFormParametrs, setCurentFormParametrs] = useState({input:'0', textarea:'0', checkbox:'0'})

    //handlers
    const handleChangeNumInputs = (e) => {
        setNumInputs(e.target.value);
    }
    const handleChangeNumTextarea = (e) => {
        setNumTextarea(e.target.value);
    }
    const handleChangeNumCheckbox = (e) => {
        setNumCheckbox(e.target.value);
    }
    const handleClickBuild = () => {
        setCurentFormParametrs({inputs:numInputs, textareas:numTextarea, checkboxs:numCheckbox})
    }

    const isFormEmpty = () => {
        if ((numInputs !== ''&& numInputs !== '0') || (numTextarea !== '' && numTextarea !== '0') || (numCheckbox !== '' && numCheckbox !== '0')){
            setIsField(false);
        } else setIsField(true);
    }

    useEffect(() => {
        isFormEmpty();
    },[curentFormParametrs])
    return (
        <>
            <button className='formPage-btn'>
                <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black", display:'flex', justifyContent:'center' }}
                >
                    HOME
                </Link>
            </button>
            <div className='formPage-num'>
                <p className='formPage-num-p'>input</p>
                <input className='formPage-num-input' onChange={handleChangeNumInputs} value={numInputs} type="number" name="input" />
            </div>
            <div className='formPage-num'>
                <p className='formPage-num-p'>textarea</p>
                <input className='formPage-num-input' onChange={handleChangeNumTextarea} value={numTextarea} type="number" name="textarea" />
            </div>
            <div className='formPage-num'>
                <p className='formPage-num-p'>checkbox</p>
                <input className='formPage-num-input' onChange={handleChangeNumCheckbox} value={numCheckbox} type="number" name="checkbox" />
            </div>
            <button className='formPage-btn' onClick={handleClickBuild}>
                Build
            </button>
            {!isField ? <Form params={curentFormParametrs}/> : null}
        </>
        
    )
}
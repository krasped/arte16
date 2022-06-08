import React from 'react';
import './form.css'
export default function Form (props) {
    const {inputs, textareas, checkboxs} = props.params;
    /**
     * render inputs
     * @param {number} num how many elements need to render
     * @returns {ReactElement[]}  arr of react elements
     */
    const renderInput = (num) => {
        let elementArray = [];
        for (let i = 0; i < num; i++){
            elementArray.push(i)
        }
        const tabl = elementArray.map((id) => (
            <input className='form-field' key={id}></input>
        ));
        return tabl
    }
    /**
     * render TextAreas
     * @param {number} num how many elements need to render
     * @returns {ReactElement[]}  arr of react elements
     */
    const renderTextArea = (num) => {
        let elementArray = [];
        for (let i = 0; i < num; i++){
            elementArray.push(i)
        }
        const tabl = elementArray.map((id) => (
            <textarea className='form-field' key={id}></textarea>
        ));
        return tabl
    }
    /**
     * render Checkbox
     * @param {number} num how many elements need to render
     * @returns {ReactElement[]}  arr of react elements
     */
    const renderCheckbox = (num) => {
        let elementArray = [];
        for (let i = 0; i < num; i++){
            elementArray.push(i)
        }
        const tabl = elementArray.map((id) => (
            <input className='form-field' key={id} type="checkbox" ></input>
        ));
        return tabl
    }
    return (
        <div className='form-wrapper'>
            <div className='form-content'>
                {renderInput(inputs)}
            </div>
            <div className='form-content'>
                {renderTextArea(textareas)}
            </div>
            <div className='form-content'>
                {renderCheckbox(checkboxs)}
            </div>
        </div>
    )   
}
import React from 'react';

export default function Form (props) {
    const {inputs, textareas, checkboxs} = props.params;
    
    const renderInput = (num) => {
        let elementArray = [];
        for (let i = 0; i < num; i++){
            elementArray.push(i)
        }
        const tabl = elementArray.map((row) => (
            <input key={row}></input>
        ));
        return tabl
    }
    const renderTextArea = (num) => {
        let elementArray = [];
        for (let i = 0; i < num; i++){
            elementArray.push(i)
        }
        const tabl = elementArray.map((row) => (
            <textarea key={row}></textarea>
        ));
        return tabl
    }
    const renderCheckbox = (num) => {
        let elementArray = [];
        for (let i = 0; i < num; i++){
            elementArray.push(i)
        }
        const tabl = elementArray.map((row) => (
            <input key={row} type="checkbox" ></input>
        ));
        return tabl
        
    }
    return (
        <>
            <div>
                {renderInput(inputs)}
            </div>
            <div>
                {renderTextArea(textareas)}
            </div>
            <div>
                {renderCheckbox(checkboxs)}
            </div>
            
        </>
    )   
}
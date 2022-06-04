import { useEffect, useState } from "react"

function ValidInput(valdateState){
    const [value, setValue] = useState('');
    const [isValue, setIsValue] = useState(false);
    const [isBlur, setBlur] = useState(false);

    let isValid = valdateState(value);

    useEffect(()=>{
        if(isValid && isBlur){
            setIsValue(true);
        } else {
            setIsValue(false);
        }
    }, [value, isValid, isBlur]);

    const resetValue = ()=>{
        setValue('');
        setBlur(false);
    }

    const inputBlur = ()=>{
        setBlur(true);
    }

    const inputValue = (e)=>{
        setValue(e.target.value);
    }
    
    

    return {
        value,
        inputValue,
        isValue,
        inputBlur,
        resetValue
    }
}

export default ValidInput;
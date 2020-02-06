import React, {useState} from 'react';

export default initialvalue => {
    const [initialValue, setInitialValue] = useState(initialvalue)
    const handleChange = e => {
        setInitialValue(e.target.value);
    }

    const reset = () => {
        setInitialValue("");
    }
    return [initialValue, handleChange, reset]
}
import React, { useState } from 'react'
import PropTypes from 'prop-types';
function AddCategory({ setcategory }) {

    const [inputValue, setinputValue] = useState('');

    const hanleInputChange = (e) => {

        setinputValue(e.target.value);
    }

    const hanledSumitForm = (e) => {
        e.preventDefault();
        if (inputValue.length > 0) {
            setcategory(cats => [inputValue,...cats]);
            setinputValue("");
        }
    }

    return (
        <form onSubmit={hanledSumitForm}>
            <input type="text" value={inputValue} onChange={hanleInputChange} />
        </form>
    )
}

AddCategory.propTypes={
  setcategory:  PropTypes.func.isRequired
}
export default AddCategory;

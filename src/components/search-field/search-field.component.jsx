import React from "react";
import './search-field.styles.css';

export const SearchField = ({placeholderText, handleChange}) => {
    return <input
        type='search'
        className='search'
        placeholder={placeholderText}
        onChange={handleChange}
    />
}
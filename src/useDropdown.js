import React, { useState } from 'react'

function useDropdown(label, defaultState, options) {
    const [state, setState] = useState(defaultState);
    const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

    const Dropdown = () => (
        <label htmlFor={id}>
            {label}
            <select name="" id={id} id={id} value={state} onChange={(e) => setState(e.target.value)} onBlur={(e) => setState(e.target.value)}>
                {options.map((item) => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>
        </label>
    );
    return [state, Dropdown, setState];
}

export default useDropdown

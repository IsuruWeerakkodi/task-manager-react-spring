import './Theme.css'
import {useEffect, useState} from "react";

export function Theme() {
    const [mode, setMode] = useState('dark');

    useEffect(()=>{
        document.querySelector('html')!
            .setAttribute('data-bs-theme', mode);
    }, [mode]);

    function handleMode(){
        setMode(mode === 'light' ? 'dark' : 'light');
    }

    return (
        <span onClick={handleMode} title="Click to change the mode"
                className="Theme mx-2 px-2 shadow-sm btn-sm border rounded p-1 gap-1 d-inline px-2">
            { mode === 'light' ?
                <i className="bi bi-brightness-high"></i>
                :
                <i className="bi bi-moon-stars-fill"></i>
            }
        </span>
    );
}
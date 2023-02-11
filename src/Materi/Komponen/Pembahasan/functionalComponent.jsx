import React, { useState } from "react";
const FunctionalComponent = ({nama}) => {
    // mengakali functional component agar bisa menggunakan state dengan bantuan hook
    const [value, setValue] = useState(0);

    const handlePlus = () => {
        setValue(value + 1);
    }
    const handleMinus = () => {
        if(value > 0) {
            setValue(value - 1);
        }
       
    }
    return (
        <div>
            <h1>Membuat Komponen dengan Functional Component</h1>
            <h2>{nama} sedang Belajar React Materi Component</h2>
            <button onClick={handleMinus}>-</button>
            <span>{` `} {value} {` `}</span>
            <button onClick={handlePlus}>+</button>
        </div>
    )
}
// nilai default props akan otomatis terpanggil jika tidak terdapat props
FunctionalComponent.defaultProps = {
    nama : 'Users'
}
export default FunctionalComponent;
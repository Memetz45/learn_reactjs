import React from "react";
import style from './index.module.css'

class Module extends React.Component {
    render() {
        return (
            <div>
                <button className={`${style.btn} ${style.btnInfo}`}>Go Eduwork</button>
            </div>
        )
    }
}

export default Module;
import React from "react";
// style dengan plain css yaitu dengan mengimport seperti dibawah ini
import './index.css'

class Plain extends React.Component {
    render() {
        return (
            <div>
                <button className="btn btn-info">Go Eduwork</button>
            </div>
        )
    }
}

export default Plain;
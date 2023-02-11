import React from "react";
import ClassComponent from "./Pembahasan/classcomponent";
import FunctionalComponent from "./Pembahasan/functionalComponent"


export default class Komponen extends React.Component {

    render(){
        return (
            <div>
                <ClassComponent nama= "Slamet Nurhidayat"/>
                <FunctionalComponent />
            </div>
        )
    }
}
import React from "react";
import Bootstrap from "./Bootstrap";



export default class Styling extends React.Component{
    render(){
        return(
            <div>
           <Bootstrap/>
            </div>
        )
    }
}

/*react styling menggunakan Plain CSS dan Preprocessor memiliki problem Global Naming Scope
Solusinya menggunakan inline style dengan problem beberapa style CSS yang tidak Support (@media, @keyframes, :hover, font, autoprefixer)*/

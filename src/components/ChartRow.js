import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.nombre}</td>
                    <td>{props.user}</td>
                    <td>{props.email}</td>
                    <td>{props.nacimiento}</td>
                    
                </tr>
            )
    }
    
        

export default ChartRow;
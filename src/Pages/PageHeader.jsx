import React from "react";
import './PageHeader.css'
export function PageHeader(props) {
    return (
        <div className="page-header">
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </div>

    )
}
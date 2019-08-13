//Created by Kishore Kumar Govindaradjou on 14th Aug 2019

import React from 'react'

export default function Heading({title}) {
    return (
        <div className="row">
            <div className="col text-center mb-4">
                <h1 className="display-3 text-white">{title}</h1>
            </div>
        </div>
    )
}

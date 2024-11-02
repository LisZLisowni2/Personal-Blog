import React from 'react'

export default function Content({ children }) {
    return (
        <div className="grid grid-cols-6 flex-1">
            <div></div>
            <div className="col-span-4 p-4">{ children }</div>
            <div></div>
        </div>
    )
}
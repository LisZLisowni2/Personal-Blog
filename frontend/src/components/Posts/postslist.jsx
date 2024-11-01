import React from "react";

function Content() {
    return (
        <div className="grid grid-cols-6 h-full">
            <div className="bg-orange-400"></div>
            <div className="col-span-4 bg-emerald-400 p-4">
                POST
            </div>
            <div className="bg-orange-400"></div>
        </div>
    )
}

export default Content
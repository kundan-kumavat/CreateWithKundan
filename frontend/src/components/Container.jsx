import React from "react";

function Container({children}){
    return(
        <div className="w-full flex flex-col gap-[20px]">
            {children}
        </div>
    )
}

export default Container;
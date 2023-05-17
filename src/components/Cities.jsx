import React, { useState } from 'react'



function Cities({Cites, Click}) {

    let [curentIndex, setCurentIndex] = useState(-1)
    // let curentIndex = -1
    return (
        <>
            <ul className="list-group">
                {
                Cites.map(
                    (item, index) =><li 
                        className={ curentIndex === index ?   "list-group-item active": "list-group-item"} 
                        key={item} 
                        onClick={()=> setCurentIndex(index)}>{item}</li>
                    )
                    
                }

            </ul>
        </>
    )
}



export default Cities

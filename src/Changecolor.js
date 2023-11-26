import React, { useEffect, useState } from 'react'

const Changecolor = () => {
    const [color, setColor] = useState("yellow")
    const click = (color) => {
        setColor(color)
    }
    useEffect(() => {
        document.body.style.backgroundColor = color
    })
    return(
        <>
        <button onClick={() => click("pink")}>
        Changecolor
        </button>
        </>
    )
}
export default Changecolor
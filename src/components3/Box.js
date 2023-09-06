import React from "react"

function Box(props){
    let [on,seton]=React.useState(props.on)
    const styles={
        backgroundColor:on?"#222222":"#cccccc"
    }
    function toggle(){
        seton(prevstate=>!prevstate)
    }
    return(
        <div style={styles} className='box' id={props.id} onClick={toggle}>hello</div>
    )
}

export default Box


function Star(props){
    let image=props.isfilled? "star-filled":"star-empty"
    return(
        <img src={`images/${image}.png`} onClick={props.clik}></img>
    )
}

export default Star
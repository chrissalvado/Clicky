import React from "react";
import PropTypes from "prop-types"
import "./styles.css"

export default function Card(props) {
   console.log(props)
    // return(
    // <div
    // // className={}
    // style={{
    //     width, height,  
    // }}
    // onClick={() => disabled ? null : handleClick(id)}
    // >
    //     <div className="flipper">
    //         <img
    //         style={{
    //             height, width
    //         }}
    //         className={flipped ? "front" : "back"}
    //         src={flipped || solved  ? "/img/${type}.png" : "/img/back.png"}
    //         />
    //         </div>
    //         </div>
    // )
    return(
        <div>
            <img style={{height:'250px',borderradius:'2px',textalign:'left',position:'relative',paddingtop:'1%', paddingbottom:'1%',paddingLeft:'1rem',paddingright:'1rem',float:'left',bordersizing:'border-box'}} src={props.pic} id= {props.id} onClick={props.click}/>
        </div>
    ) 
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired,
    
}
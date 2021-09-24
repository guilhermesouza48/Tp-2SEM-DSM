import  React from "react";

const Familia = props => {
    return (
        <div>
            {
                React.Children.map(props.children,(objeto) =>{
                    return React.cloneElement(objeto, props)
                })
            }
        </div>
    )
}

export default Familia
/* eslint-disable react/prop-types */
import "./Button.css"

const Button = ({children}) => {
    return ( 
        // TODO : reponsive design
        <button className="text-white px-4 py-2 normal-case btn-grad">
            {children}
        </button>
    );
};

export default Button;
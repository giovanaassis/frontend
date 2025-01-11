/* eslint-disable react/prop-types */
const Button = ({ className, children }) => {
    return (
        <button className={className}>{children}</button>
    )
}

export default Button;
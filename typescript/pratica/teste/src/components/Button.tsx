import { FunctionComponent, ReactNode } from "react";

interface ButtonPros {
    text: string;
    myFunction: () => void;
    children?: ReactNode
}

const Button: FunctionComponent<ButtonPros> = ({ text, myFunction }) => {
    return <button onClick={myFunction}>{ text }</button>
}

export default Button;
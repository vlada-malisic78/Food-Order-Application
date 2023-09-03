import React, { ReactElement } from 'react'

type Props = {
    onClick: (input?: any) => void;
    type: 'button' | 'submit' | 'reset'
    children?: React.ReactNode;
    style: string;
    text: string;
    icon?: ReactElement
}

function Button({ onClick, type, children, style, text, icon }: Props) {
    return (
        <button type={type} className={style} onClick={onClick}>
            <span>{icon}</span>
            <span>{text}</span>
            {children}
        </button>
    )
}

export default Button
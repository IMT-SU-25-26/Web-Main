import React, { ReactElement } from 'react'

type ButtonProps = {
    bgColor:string,
    children:React.ReactNode,
    className?:string,
}

const Button = ({bgColor, children, className}:ButtonProps) => {
  return (
    <button
        type="button"
        className={`inline-block transition-all duration-300 hover:shadow-[0_0_10px_4px] hover:ring-2 text-white text-[12px] px-4 py-1 rounded-md ease-in-out hover:brightness-90 ${className}`}
        style={{ backgroundColor: bgColor }}
        >
        {children}
    </button>
  )
}

export default Button
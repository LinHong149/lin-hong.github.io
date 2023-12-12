import React from "react"

type ButtonProps = {
  link : string;
  content : string;
}

export const LinkButton : React.FC<ButtonProps> = ({link, content}) => {
  return (
    <button>
        <a href={link}>{content}</a>
    </button>
  )
}

export const SolidButton : React.FC<ButtonProps> = ({link, content}) => {
  return (
    <a className="btn btn-accent" href={link}>{content}</a>
  )
}


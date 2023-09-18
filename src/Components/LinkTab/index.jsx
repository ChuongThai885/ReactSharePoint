import React from "react"

export const LinkTab = (props) => {
    const { title, icon } = props

    return (
        <div className="flex flex-col justify-center items-center mb-1 mr-1 h-[8.5rem] w-[8.5rem] bg-default-blue text-white">
            <img src={icon} />
            <span className="mt-4 text-sm">{title}</span>
        </div>
    )
}

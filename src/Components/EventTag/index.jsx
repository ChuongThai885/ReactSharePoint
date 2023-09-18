import React from "react"
import getImage from "../../Base/Image"

export default class EventTag extends React.Component {
    render() {
        const { title, date, month, time } = this.props?.eventInfo
        return (
            <div className="flex">
                <div className="w-20 h-20 border-4 border-default-green mb-3 flex flex-col justify-center items-center text-default-green">
                    <span className="font-semibold text-3xl">{date}</span>
                    <span>{month}</span>
                </div>
                <div className="flex flex-col bg-default-light-green w-full mx-2 mb-3 px-2 py-3">
                    <span className="font-semibold text-base mb-3">
                        {title}
                    </span>
                    <div className="flex items-center">
                        <img src={getImage.clock} className="w-5 h-5 mr-1" />
                        <span className="text-sm text-default-dark-gray">
                            {time}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

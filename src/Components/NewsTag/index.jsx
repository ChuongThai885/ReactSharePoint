import React from "react"
import getImage from "../../Base/Image"

export default class NewsTag extends React.Component {
    render() {
        const { title, description, src_img, from, date } = this.props?.newsList

        return (
            <div className="flex mb-6">
                <img src={src_img} className="w-40 h-[7.5rem]" />
                <div className="ml-4">
                    <div className="text-base mb-2 font-semibold">{title}</div>
                    <div className="text-sm h-10 text-clip overflow-hidden mb-3">
                        {description}
                    </div>
                    <div className="flex items-center">
                        <div className="flex mr-6">
                            <img src={getImage.date} className="w-3.5 h-4" />
                            <span className="ml-2 text-sm">{date}</span>
                        </div>
                        {from && (
                            <div className="flex justify-center items-center bg-gray-200 w-36 text-sm rounded-2xl h-7">
                                {from}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

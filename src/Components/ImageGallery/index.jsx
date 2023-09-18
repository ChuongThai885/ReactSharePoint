import React from "react"
import { ViewMoreButton } from "../ViewMoreButton"
import { IMAGE_LIST } from "../../utils/constant"

export default class ImageGallery extends React.Component {
    render() {
        return (
            <div className="relative mb-6">
                <div className="flex flex-col">
                    <span className="text-2xl font-semibold mb-4">
                        Image Gallery
                    </span>
                    <div className="flex flex-wrap mb-6">
                        {IMAGE_LIST.map(({ img_src }, key) => (
                            <div className="relative" key={key}>
                                <img
                                    src={img_src}
                                    className="w-[12.5rem] h-[9.375rem] mr-1 mb-1"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-0">
                    <ViewMoreButton />
                </div>
            </div>
        )
    }
}

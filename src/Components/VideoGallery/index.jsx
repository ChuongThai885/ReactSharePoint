import React from "react"
import { ViewMoreButton } from "../ViewMoreButton"
import { PlayCircleIcon } from "@heroicons/react/24/outline"
import { VIDEO_LIST } from "../../utils/constant"

export default class VideoGallery extends React.Component {
    render() {
        return (
            <div className="relative mb-6">
                <div className="flex flex-col">
                    <span className="text-2xl font-semibold mb-4">
                        Video Gallery
                    </span>
                    <div className="flex flex-wrap mb-6">
                        {VIDEO_LIST.map(({ img_src }, key) => (
                            <div className="relative" key={key}>
                                <img
                                    src={img_src}
                                    className="w-[12.5rem] h-[9.375rem] mr-1 mb-1"
                                />
                                <div className="absolute w-full h-full top-0">
                                    <div className="flex justify-center items-center h-full cursor-pointer">
                                        <PlayCircleIcon className="w-12 h-12 text-white" />
                                    </div>
                                </div>
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

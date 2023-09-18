import React from "react"
import { DOCUMENT_GALLERY } from "../../utils/constant"
import { ViewMoreButton } from "../ViewMoreButton"

export default class DocumentGallery extends React.Component {
    render() {
        return (
            <div className="flex flex-col">
                <span className="text-2xl font-semibold mb-4">
                    Document Gallery
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 mb-6">
                    {DOCUMENT_GALLERY.map(({ name, documents }) => (
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold mb-6">
                                {name}
                            </span>
                            <div className="relative mb-7">
                                {documents.map(
                                    ({ document_icon, document_name }) => (
                                        <div className="flex items-center mb-5">
                                            <img
                                                src={document_icon}
                                                className="h-6 w-6"
                                            />
                                            <span className="text-sm ml-3">
                                                {document_name}
                                            </span>
                                        </div>
                                    ),
                                )}
                                {documents.length > 3 && (
                                    <div className="absolute bottom-[-8px]">
                                        <ViewMoreButton />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

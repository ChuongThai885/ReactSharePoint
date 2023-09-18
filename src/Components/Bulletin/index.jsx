import React from "react"
import NewsTag from "../NewsTag"
import NewsCollection from "../NewsCollection"
import { ViewMoreButton } from "../ViewMoreButton"

export default class Bulletin extends React.Component {
    render() {
        const { title, newsList } = this.props
        return (
            <div className="relative mb-6">
                <div className="flex flex-col">
                    <span className="text-2xl font-semibold mb-4">{title}</span>
                    {newsList?.map((newsList, key) => (
                        <NewsTag key={key} newsList={newsList} />
                    ))}
                </div>
                <div className="absolute bottom-0">
                    <ViewMoreButton />
                </div>
            </div>
        )
    }
}

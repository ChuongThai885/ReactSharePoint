import React from "react"
import { ViewMoreButton } from "../ViewMoreButton"
import EventTag from "../EventTag"
import { EVENT_LIST } from "../../utils/constant"

export default class EventCollection extends React.Component {
    render() {
        return (
            <div className="relative mb-6">
                <div className="flex flex-col">
                    <span className="text-2xl font-semibold mb-4">Events</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mb-6">
                        {EVENT_LIST.map((eventInfo, key) => (
                            <EventTag key={key} eventInfo={eventInfo} />
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

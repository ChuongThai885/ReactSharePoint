import React from "react"
import { LinkTab } from "../LinkTab"
import { LINK_TABS } from "../../utils/constant"

export default class QuickLinks extends React.Component {
    render() {
        return (
            <div className="flex flex-col mb-6">
                <span className="text-2xl font-semibold mb-4">Quick Links</span>
                <div className="flex flex-wrap">
                    {LINK_TABS.map(({ title, icon }) => (
                        <LinkTab key={title} title={title} icon={icon} />
                    ))}
                </div>
            </div>
        )
    }
}

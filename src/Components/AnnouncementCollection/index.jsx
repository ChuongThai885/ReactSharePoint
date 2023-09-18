import React from "react"
import Bulletin from "../Bulletin"
import { ANNOUNCEMENT_LIST } from "../../utils/constant"

export default class AnnouncementCollection extends React.Component {
    render() {
        return <Bulletin title="Announcement" newsList={ANNOUNCEMENT_LIST} />
    }
}

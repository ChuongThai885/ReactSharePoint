import React from "react"
import Bulletin from "../Bulletin"
import { NEWS_LIST } from "../../utils/constant"

export default class NewsCollection extends React.Component {
    render() {
        return <Bulletin title="News" newsList={NEWS_LIST} />
    }
}

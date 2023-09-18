import React from "react"
import "./layout.css"
import Navigation from "../Components/Navigation/Navigation"
import AnnouncementCollection from "../Components/AnnouncementCollection"
import QuickLinks from "../Components/QuickLinks"
import NewsCollection from "../Components/NewsCollection"
import ImageGallery from "../Components/ImageGallery"
import VideoGallery from "../Components/VideoGallery"
import EventCollection from "../Components/EventCollection"
import QUestionSearchBar from "../Components/QuestionSearchBar"
import DocumentGallery from "../Components/DocumentGallery"

export default class Layout extends React.Component {
    render() {
        return (
            <div className="portal-homepage">
                <div className="wrap mb-36">
                    <div className="header">
                        <Navigation />
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense">
                        <div className="md:col-span-2 mr-12">
                            <div id="announcement">
                                <AnnouncementCollection />
                            </div>
                            <div id="news">
                                <NewsCollection />
                            </div>

                            <div id="image-gallery">
                                <ImageGallery />
                            </div>
                            <div id="video-gallery">
                                <VideoGallery />
                            </div>
                            <div id="document-gallery">
                                <DocumentGallery />
                            </div>
                        </div>
                        <div className="md:col-span-2 lg:col-span-1">
                            <div id="quick-links" className="flex flex-col">
                                <QuickLinks />
                            </div>
                            <div id="events">
                                <EventCollection />
                            </div>
                            <div id="how-do-i">
                                <QUestionSearchBar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

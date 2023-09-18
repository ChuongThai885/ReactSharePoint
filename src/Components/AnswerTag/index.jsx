import React from "react"
import getImage from "../../Base/Image"
import clsx from "clsx"

export default class AnswerTag extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
        }
    }
    render() {
        const { question, answer } = this.props
        return (
            <>
                <button
                    className={clsx(
                        "flex items-center py-2.5 text-white",
                        this.state.isShow
                            ? "bg-default-green"
                            : "bg-default-gray mb-1",
                    )}
                    onClick={() => {
                        this.setState((prevState) => ({
                            isShow: !prevState.isShow,
                        }))
                    }}
                >
                    <img
                        className="w-4 h-4 mx-2.5"
                        src={
                            this.state.isShow
                                ? getImage.expand
                                : getImage.collapse
                        }
                    />
                    <span>{question}</span>
                </button>
                <div
                    className={clsx(
                        "bg-default-gray text-white mb-1 pl-9 py-2.5 pr-5",
                        this.state.isShow || "hidden",
                    )}
                >
                    <span>{answer}</span>
                </div>
            </>
        )
    }
}

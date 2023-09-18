import React from "react"
import { ViewMoreButton } from "../ViewMoreButton"
import getImage from "../../Base/Image"
import AnswerTag from "../AnswerTag"
import { QUESTION_LIST } from "../../utils/constant"

export default class QUestionSearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questionList: QUESTION_LIST,
        }
    }

    render() {
        const handleSearchInputChange = (event) => {
            const inputValue = event.target.value
            const newQuestionList =
                inputValue === ""
                    ? QUESTION_LIST
                    : QUESTION_LIST.filter(({ question }) =>
                          question.includes(inputValue),
                      )

            this.setState(() => ({
                questionList: newQuestionList,
            }))
        }

        return (
            <div className="relative">
                <div className="flex flex-col">
                    <span className="text-2xl font-semibold mb-4">
                        How do I
                    </span>
                    <div className="relative">
                        <input
                            className="py-2.5 pl-9 mb-1 border-2 w-full test-sm focus:outline-0 border-default-gray focus:border-default-dark-gray"
                            placeholder="Find Questions"
                            onChange={(event) => {
                                handleSearchInputChange(event)
                            }}
                        />
                        <div className="absolute top-4 left-3">
                            <img src={getImage.search} className="h-4 w-4" />
                        </div>
                    </div>
                    <div className="flex flex-col mb-6">
                        {this.state.questionList.map(
                            ({ question, answer }, key) => (
                                <AnswerTag
                                    key={key}
                                    question={question}
                                    answer={answer}
                                />
                            ),
                        )}
                    </div>
                </div>
                <div className="absolute bottom-0">
                    <ViewMoreButton />
                </div>
            </div>
        )
    }
}

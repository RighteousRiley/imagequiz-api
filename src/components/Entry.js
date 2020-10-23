import React from 'react';
import flower from '../images/flower.jpg';
class Entry extends React.Component {
    constructor(props) {
        super();
        this.state = {
            prompt : "",
            questions :  null,
            cursor: 0,
            entry: null,
            question: null
        }
    }

    renderQuestion() {
        let questionCursor = this.state.cursor;
        if(this.state.entry) {
            if(this.state.entry.questions) {
                this.setState(
                    {
                        question: this.state.questions[questionCursor],
                        cursor: this.state.cursor+1
                    }
                )
            }
        }
    }

    setQuestions(input) {
        if(this.state.questions === null) {
            this.setState(
                {
                    questions: input
                }
            )
        }
    }

    onSubmit = () => {
        this.setState(
            {
                cursor: this.state.cursor+1
            }
        )
    }

    questionFormatter = (question) => {
        if(question.picture) {
            if(question.options) {
                return (
                    <form onSubmit={this.onSubmit}>
                    <p>{this.state.prompt}</p>
                        <input type="radio" name="answer" value="option1" /> {question.options[0]}
                        <input type="radio" name="answer" value="option1" /> {question.options[1]}
                        <input type="radio" name="answer" value="option1" /> {question.options[2]}
                        <p><input type="submit" value="Submit" /></p>
                    </form>
                )
            }
        }
    }

    render() {
        let entry = {};
        if(this.props.location) {
            if(this.props.location.state) {
                if(this.props.location.state.entries) {
                    let entries = this.props.location.state.entries;
                    let cursor = this.props.location.state.cursor;
                    entry = entries[cursor];
                }
            }
        }
        if(!this.questions) {
            this.setQuestions(entry.questions)
        }
        console.log(entry)
        return (
            <div className="quizContainer">
                <p>{entry.name}</p>
                <img src={entry.picture} />
                <div className="questions">
                    {entry.questions ? this.questionFormatter(entry.questions[this.state.cursor]) : ""}
                </div>
            </div>
        )
    }
}
export default Entry;
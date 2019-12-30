import {Component} from "react";
import io from 'socket.io-client';

class WaitForQuestion extends Component {
    componentDidMount() {
        this.props.socket.on('trivia_question', data => {
            this.props.answerQuestion(data);
        });
    }

    render() {
        return (
            <div>
                Waiting for question...
            </div>
        );
    }

}

class AnswerQuestion extends Component {
    render() {
        const {q = "Who was the first president", a1 = "Barack Obama", a2 = "Al Gore", a3 = "George Washington", a4 = "George W Bush"} = this.props;
        return (
            <div>
                <div>
                    <label htmlFor="question">Question:</label>
                    <input type="text"
                           value={q}
                           className="question"
                           id="question"/>
                </div>
                <div>
                    <div>
                        <label htmlFor="answer1">Answer A:</label>
                        <input type="text"
                               value={a1}
                               className="answer answer1"
                               onClick={this.answer(1)}
                               id="answer1"/>
                    </div>
                    <div>
                        <label htmlFor="answer2">Answer B:</label>
                        <input type="text"
                               value={a2}
                               onClick={this.answer(2)}
                               className="answer answer2"
                               id="answer2"/>
                    </div>
                    <div>
                        <label htmlFor="answer3">Answer C:</label>
                        <input type="text"
                               value={a3}
                               onClick={this.answer(3)}
                               className="answer answer3"
                               id="answer3"/>
                    </div>
                    <div>
                        <label htmlFor="answer4">Answer D:</label>
                        <input type="text"
                               value={a4}
                               onClick={this.answer(4)}
                               className="answer answer4"
                               id="answer4"/>
                    </div>
                </div>
            </div>
        );
    }

    sendData = (number) => {
        this.props.socket.emit('answer', number);
        this.props.waitForQuestion();
    };

    answer = (number) => {
        return (e) => {
            this.sendData(number);
        };
    };
}

export default class TriviaTaker extends Component {
    state = {
        isAnswering: false,
        connected: false,
    };

    componentWillMount() {
        this.socket = io({
            query: {
                role: 'taker'
            }
        });
        this.socket.on('connect', () => {
            this.setState({connected: true});
        });
        this.socket.on('disconnect', (reason) => {
            this.setState({connected: false});
        });
    }

    waitForQuestion = () => {
        this.setState({isAnswering: false});
    };

    answerQuestion = ({q, a1, a2, a3, a4}) => {
        this.setState({isAnswering: true, q, a1, a2, a3, a4});
    };

    render() {
        let content = "";
        if (!this.state.connected) {
            content = (<div>Connecting...</div>);
        } else {
            if (this.state.isAnswering) {
                content = <AnswerQuestion waitForQuestion={this.waitForQuestion} q={this.state.q} a1={this.state.a1}
                                          a2={this.state.a2} a3={this.state.a3} a4={this.state.a4} socket={this.socket}/>;
            } else {
                content = <WaitForQuestion answerQuestion={this.answerQuestion} socket={this.socket}/>;
            }
        }
        return (<div>
            <h1>
                Trivia Taker
            </h1>
            {content}
        </div>);
    }
}
import {Component} from "react";
import io from 'socket.io-client';

class DisplayAnswers extends Component {
    state = {
        answers1: 0,
        answers2: 0,
        answers3: 0,
        answers4: 0,
    };

    nextQuestion = () => {
        this.props.changeToInputQuestion();
    };

    componentDidMount() {
        this.props.socket.on('answer', num => {
            if (num === 1) {
                this.setState(currState => ({answers1: currState.answers1+1}));
            }
            if (num === 2) {
                this.setState(currState => ({answers2: currState.answers2+1}));
            }
            if (num === 3) {
                this.setState(currState => ({answers3: currState.answers3+1}));
            }
            if (num === 4) {
                this.setState(currState => ({answers4: currState.answers4+1}));
            }
        })
    }

    render() {
        const {answers1, answers2, answers3, answers4} = this.state;
        const allAnswers = answers1 + answers2 + answers3 + answers4;

        return (
            <div>
                <div>
                    A: {answers1}
                </div>
                <div>
                    B: {answers2}
                </div>
                <div>
                    C: {answers3}
                </div>
                <div>
                    D: {answers4}
                </div>
                <div>
                    Total: {allAnswers} of {this.props.takers}
                </div>
                <button onClick={this.nextQuestion}>Next question</button>
            </div>
        );
    }

}

class InputQuestion extends Component {
    state = {
        q: "",
        a1: "",
        a2: "",
        a3: "",
        a4: "",
    };

    render() {
        const allDataAvailable = this.state.q !== "" && this.state.a1 !== "" && this.state.a2 !== "" && this.state.a3 !== "" && this.state.a4 !== "";

        return (
            <div>
                <div>
                    <label htmlFor="question">Question:</label>
                    <input type="text" onChange={this.changeField("q")}
                           value={this.state.q} className="question"
                           id="question"/>
                </div>
                <div>
                    <div>
                        <label htmlFor="answer1">Answer A:</label>
                        <input type="text" onChange={this.changeField("a1")}
                               className="answer answer1"
                               id="answer1"/>
                    </div>
                    <div>
                        <label htmlFor="answer2">Answer B:</label>
                        <input type="text" onChange={this.changeField("a2")}
                               className="answer answer2"
                               id="answer2"/>
                    </div>
                    <div>
                        <label htmlFor="answer3">Answer C:</label>
                        <input type="text" onChange={this.changeField("a3")}
                               className="answer answer3"
                               id="answer3"/>
                    </div>
                    <div>
                        <label htmlFor="answer4">Answer D:</label>
                        <input type="text" onChange={this.changeField("a4")}
                               className="answer answer4"
                               id="answer4"/>
                    </div>
                </div>
                <button onClick={this.sendData} disabled={!allDataAvailable}>Send question to trivia taker</button>
            </div>
        );
    }


    changeField = (stateField) => {
        return (e) => {
            const val = e.target.value;
            this.setState((state) => {
                state[stateField] = val;
                return state;
            });
        };
    };

    sendData = () => {
        const {q, a1, a2, a3, a4} = this.state;
        this.props.socket.emit('trivia_question', {q, a1, a2, a3, a4});
        this.props.changeToDisplayAnswers();
    }
}

export default class TriviaGiver extends Component {
    state = {
        isInputtingQuestion: true,
        connected: false,
        takers: -1,
    };

    componentWillMount() {
        this.socket = io({
            query: {
                role: 'giver'
            }
        });

        this.socket.on('takers', (num) => {
            this.setState({takers: num});
        });

        this.socket.on('connect', () => {
            this.setState({connected: true});
        });
        this.socket.on('disconnect', (reason) => {
            this.setState({connected: false});
        });
    }

    changeToDisplayAnswers = () => {
        this.setState({isInputtingQuestion: false});
    };

    changeToInputQuestion = () => {
        this.setState({isInputtingQuestion: true});
    };

    render() {
        let content = "";
        if (!this.state.connected) {
            content = (<div>Connecting...</div>);
        } else {
            if (this.state.isInputtingQuestion) {
                content = <InputQuestion changeToDisplayAnswers={this.changeToDisplayAnswers} socket={this.socket}/>;
            } else {
                content = <DisplayAnswers changeToInputQuestion={this.changeToInputQuestion} socket={this.socket} takers={this.state.takers}/>;
            }
        }
        return (<div>
            <h1>
                Trivia Giver
            </h1>
            {content}
        </div>);
    }
}
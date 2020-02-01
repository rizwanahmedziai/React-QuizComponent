import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(button_text) {
		if (button_text === this.props.quiz_question.answer) {
			alert(button_text + ' is Correct');
			this.props.showNextQuestionHandler();
		} else {
			alert('Wrong Answer');
		}
	}
	render() {
		return (
			<main>
				<section>
					<p>{this.props.quiz_question.instruction_text}</p>
				</section>
				<section className='buttons'>
					<ul>
						{this.props.quiz_question.answer_options.map((option, index) => (
							<QuizQuestionButton
								button_text={option}
								key={index}
								clickHandler={this.handleClick}
							/>
						))}

						{/*quiz question button logic goes here*/}
					</ul>
				</section>
			</main>
		);
	}
}

export default QuizQuestion;

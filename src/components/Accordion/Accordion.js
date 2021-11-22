import React, { useState } from "react"
import styled from "styled-components"
import AddIcon from "@material-ui/icons/Add"
import { IconButton } from "@material-ui/core"

const Accordion = () => {
	const [show, setShow] = useState(false)
	const [show1, setShow1] = useState(false)
	const [show2, setShow2] = useState(false)
	return (
		<AccordionContainer>
			<QuestionContainer>
				<Question>
					<h2>Do you offer Scholarships?</h2>
					<IconButton onClick={() => setShow(!show)}>
						<AddIcon />
					</IconButton>
				</Question>
				{show && (
					<Answer>
						<p>Send your inquiry and story to our contact info.</p>
					</Answer>
				)}
			</QuestionContainer>
			<QuestionContainer>
				<Question>
					<h2>Are group discounts available?</h2>
					<IconButton onClick={() => setShow1(!show1)}>
						<AddIcon />
					</IconButton>
				</Question>
				{show1 && (
					<Answer>
						<p>
							Discounts are available for groups of ten or more. As soon as you
							place your order, you will receive a 10% group discount.
						</p>
					</Answer>
				)}
			</QuestionContainer>
			<QuestionContainer>
				<Question>
					<h2>Do I have to be married to attend?</h2>
					<IconButton onClick={() => setShow2(!show2)}>
						<AddIcon />
					</IconButton>
				</Question>
				{show2 && (
					<Answer>
						<p>
							No matter where you are in your relationship, we encourage you to
							join us. Marriage Project is designed for married couples, but
							it's also a great resource for singles, couples in a relationship,
							and engaged couples. Vows can be renewed at the end of the
							ceremony for married couples.
						</p>
					</Answer>
				)}
			</QuestionContainer>
		</AccordionContainer>
	)
}

export default Accordion

const AccordionContainer = styled.div`
	margin: 10%;
	margin-bottom: 20%;
`
const QuestionContainer = styled.div`
	margin-bottom: 10%;
	h2 {
		font-weight: bold;
		margin-bottom: 2%;
		font-size: 200%;
	}
`

const Question = styled.div`
	display: grid;
	grid-template-columns: 90% 10%;
	margin-bottom: 5%;
	@media screen and (max-width: 768px) {
		h2 {
			font-size: 150%;
		}
	}
`

const Answer = styled.div`
	p {
		font-weight: bold;
		margin-bottom: 10%;
	}
`

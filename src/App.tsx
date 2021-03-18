import React, { useState } from 'react'

import './App.css'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


const WordBox = (props) => {
	return (
		<div className="WordBox">
			{props.word}
		</div>
	)
}


const Score = (props) => {
	return (
		<div className="Score">
			<span>Oikein: {props.correct}</span>
			<span>Ohi: {props.skipped}</span>
		</div>
	)
}


const Button = (props) => {
	return (
		<div
			className={`Button ${props.type}`}
			onClick={props.onClick}
		>
			{props.label}
		</div>
	)
}


const Controls = (props) => {
	return (
		<div className="Controls">
		{
			props.active ? (
				<div>
					<Button type="fail" label="ohi" onClick={props.handle_skip} />
					<Button type="success" label="oikein" onClick={props.handle_correct} />
				</div>
			) : ""
		}
			<Button
				type={props.active ? "fail" : "success"}
				label={props.active ? "päätä kierros" : "aloita kierros"}
				onClick={props.toggle_active}

			/>
		</div>
	)
} 


const App = (props) => {
	let words = [
		"HYY",
		"Testi 1",
		"Testi 2"
	]

	let state = {
		"active": false,
		"word": words[0],
		"correct": 0,
		"skipped": 0
	}

	const [word, setWord] = useState("")

	function get_word() {
		return words[getRandomInt(0, words.length)]
	}

	function update_word() {
		setWord(get_word())
	}

	const [active, setActive] = useState(false);

	function toggle_active() {
		update_word()
		setActive(!active)
	}

	const [correct, setCorrect] = useState(0)
	const [skipped, setSkipped] = useState(0)

	function handle_skip() {
		setSkipped(skipped + 1)
		update_word()
	}

	function handle_correct() {
		setCorrect(correct + 1)
		update_word()
	}

	return (
		<div className="App">
		{
			active ? <WordBox word={word} /> : ""
		}
		{
			!active ? <Score correct={correct} skipped={skipped} /> : ""
		}
			<Controls
				active={active}
				toggle_active={toggle_active}
				handle_skip={handle_skip}
				handle_correct={handle_correct}
			/>
		</div>
	)
}

export default App
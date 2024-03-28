import React from 'react'
import { Header } from "../components/Header/Header"
import { Top } from "../components/Top/Top"
import { About } from "../components/About/About"
import { Values } from "../components/Values/Values"
import Accordion from "../components/Accordion/Accordion"

export const Home = () => {
	return (
		<div>
			<Header />
			<Top />
			<About />
			<Values />
			<Accordion />
		</div>
	)
}

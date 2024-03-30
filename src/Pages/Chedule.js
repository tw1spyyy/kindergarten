import React from 'react'
import { Layout } from "../components/Layout/Layout"
import Accordion from "../components/Accordion/Accordion"
import css from './All.module.scss'

export const Chedule = () => {
	return (
		<>
			<div className={css.wrapper2}>
				<Layout title="Питання та відповіді" />
			</div>
			<div style={{'padding-top': '40px', background: '#f4e5e5'}}>
				<Accordion />
			</div>
		</>
	)
}

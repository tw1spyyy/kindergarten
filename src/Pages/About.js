import React from 'react'
import { Layout } from "../components/Layout/Layout"
import { Us } from "../components/Us/Us"
import css from './All.module.scss'

export const About = () => {
	return (
		<div>
			<div className={css.wrapper1}>
				<Layout title="Про нас" />
			</div>
			<Us />
		</div>
	)
}

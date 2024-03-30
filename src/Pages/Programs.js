import React from 'react'
import { Layout } from "../components/Layout/Layout"
import { Study } from "../components/Study/Study"
import css from './All.module.scss'

export const Programs = () => {
	return (
		<div>
		<div className={css.wrapper3}>
			<Layout title="Навчальні програми" />
		</div>
			<Study />
		</div>
	)
}

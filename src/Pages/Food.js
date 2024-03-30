import React from 'react'
import { Layout } from "../components/Layout/Layout"
import { FoodBlock } from "../components/FoodBlock/FoodBlock"
import css from './All.module.scss'

export const Food = () => {
	return (
		<div>
			<div className={css.wrapper4}>
				<Layout title={"Наше харчування"} />
			</div>
				<FoodBlock />
		</div>
	)
}

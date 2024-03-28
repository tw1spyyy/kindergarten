import React from 'react'
import { Layout } from "../components/Layout/Layout"
import { FoodBlock } from "../components/FoodBlock/FoodBlock"

export const Food = () => {
	return (
		<div>
			<Layout title={"Наше харчування"} />
			<FoodBlock />
		</div>
	)
}

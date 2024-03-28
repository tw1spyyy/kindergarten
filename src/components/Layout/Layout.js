import React from 'react'
import css from './Layout.module.scss'
import { Header } from "../Header/Header"


export const Layout = ({title}) => {
	return (
		<div className={css.wrapper}>
			<Header />
			<div style={{height: '140px'}}></div>
			<div className={css.container}>
				<div className={css.title}>
					{title}
				</div>
			</div>
		</div>
	)
}

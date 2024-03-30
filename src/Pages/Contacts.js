import React from 'react'
import { Layout } from "../components/Layout/Layout"
import ContactsBlock from "../components/Contacts/Contacts"
import css from './All.module.scss'

export const Contacts = () => {
	return (
		<div>
			<div className={css.wrapper5}>
				<Layout title="Наші контакти" />
			</div>
			<ContactsBlock />
		</div>
	)
}

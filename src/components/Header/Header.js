import React from 'react'
import css from './Headaer.module.scss'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';


export const Header = () => {

	const location = useLocation();

	const headerMenuList = [
		{
			id: 0,
			name: 'Наші програми',
			link: '/programs'
		},
		{
			id: 1,
			name: 'Про нас',
			link: '/about'
		},
		{
			id: 2,
			name: 'Харчування',
			link: '/food'
		},
		{
			id: 4,
			name: 'Контакти',
			link: '/contacts'
		},
		{
			id: 3,
			name: 'Питання та відповіді',
			link: '/schedule'
		},

	]

	return (
		<header className={css.headerWrapper}>
			<div className={css.container}>
				<div className={css.headerLogo}>
					<Link to="/">
						Одеський дитсадок №48
					</Link>
				</div>
				<nav className={css.headerMenuWrapp}>
					<ul className={css.headerMenuList}> 
							{headerMenuList.map((el) => {
								return <li style={location.pathname == el.link ? { color: '#f4e5e5', textDecoration: 'underline'} : {}} key={el.id}>
									<Link to={el.link}>
										{el.name}
									</Link>
								</li>
							})}
					</ul>
				</nav>
			</div>
		</header>
	)
}

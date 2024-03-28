import React from 'react'
import css from './Values.module.scss'
import img1 from '../../images/values/1.jpeg'
import img2 from '../../images/values/2.jpeg'
import img3 from '../../images/values/3.jpeg'
import img4 from '../../images/values/4.jpeg'

export const Values = () => {

	const values = [
		{
			id: 0,
			img: img1,
			bg: '#ecd7ea',
			name: 'Індивідуальний підхід',
			text: 'Ми прагнемо надати кожній дитині унікальний підхід, враховуючи її індивідуальні потреби, таланти та інтереси.',
		},
		{
			id: 1,
			bg: '#d8f2dd',
			img: img2,
			name: 'Безпека та здоров`я',
			text: 'Безпека та здоров`я наших дітей є нашим пріоритетом. Ми створюємо безпечне та здорове середовище, де вони можуть розвиватися та вчитися.',
		},
		{
			id: 2,
			bg: '#d8e3f2',
			img: img3,
			name: 'Сімейна спільнота',
			text: 'У нас сформована тепла сімейна спільнота, де кожен відчуває підтримку та відчуття належності. Ми вітаємо батьків участь у житті садка.',
		},
		{
			id: 3,
			bg: '#f2f0d8',
			img: img4,
			name: 'Ігровий та творчий підхід',
			text: 'Ми віримо в силу гри та творчості для стимулювання розвитку дитини. Наш підхід спрямований на те, щоб кожна дитина могла вільно виражати себе.',
		},
	]

	return (
		<div className={css.wrapper}>
			<div className={css.container}>
				<div className={css.title}>
					Наші цінності
				</div>
				<div className={css.contentInner}>
					{values.map((el) => {
						return <div style={{background: el?.bg}} key={el.id} className={css.valuesItem}>
								<img src={el.img} alt={`image-${el.id}`} />
								<h4>{el.name}</h4>
								<div className={css.itemText}>
									{el.text}
								</div>
						</div>
					})}
				</div>
			</div>
		</div>
	)
}

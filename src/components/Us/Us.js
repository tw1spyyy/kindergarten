import React from 'react'
import css from './Us.module.scss'
import image1 from '../../images/kids/4.jpeg'
import image2 from '../../images/kids/3.jpeg'


export const Us = () => {
	return (
		<div className={css.wrapper}>
			<div className={css.container}>
			<div className={css.flex}>
			<img className={css.img} src={image1} alt="img-1" />
						<div className={css.containerContent}>
							<h4 className={css.subtitle}>
								Про нас
							</h4>
							<div className={css.text}>
								Ласкаво просимо до Зірочка - місця, де кожна дитина знаходить друга, де відбувається весела та плідна навчальна подорож! Наш садок - це більше, ніж просто місце для дитячої гри, це місце, де кожен день наповнений радістю, дружбою та навчанням.							
							</div>
							<div className={css.text}>
							У Зірочці ми прагнемо створити стимулююче та безпечне середовище для навчання та розвитку кожної дитини. Наша місія полягає в тому, щоб допомогти кожному малюкові розкрити свій потенціал, розвинути навички соціальної взаємодії, творчості та креативності.	
							</div>
							<div className={css.text}>
								У нашому садочку ми використовуємо інноваційні методи навчання, які базуються на принципах ігрової та експериментальної педагогіки. Ми віримо, що навчання через гру - це найефективніший спосіб стимулювати розвиток дитини. Наші програми орієнтовані на індивідуальні потреби кожної дитини, надаючи їм можливість виражати себе та розвиватися у своєму власному темпі.
							</div>
					</div>
					
				</div>
					<div style={{marginTop: '40px'}} className={css.flex}>
						<div className={css.content}>
						<div >
				<div className={css.subtitle}>
					Наші вчителі
				</div>
				<div className={css.text}>
					Наші вчителі - це висококваліфіковані професіонали з великим досвідом роботи з дітьми. Вони віддані своїй справі і мають глибоке розуміння потреб індивідуального розвитку кожної дитини. Наш персонал створює теплу та сприятливу атмосферу, де кожна дитина відчуває себе впевнено та підтримано.
				</div>
				</div>
				<div style={{marginTop: '20px'}}>
				<div className={css.subtitle}>
					Наші цінності
				</div>
				<div className={css.text}>
					<ul className={css.list}>
						<li>
						Індивідуального підходу до кожної дитини.
						</li>
						<li>
						Створення безпечного та стимулюючого середовища.
						</li>
						<li>
							Розвитку творчості та самовираження.
						</li>
						<li>
							Співпраці з батьками для досягнення кращих результатів.
						</li>
					</ul>
				</div>
				</div>
				<div style={{marginTop: '20px'}}>
				<div className={css.subtitle}>
				Приєднуйтесь до нашого садочка


				</div>
				<div className={css.text}>
					Ми завжди раді вітати нових дітей та їхніх батьків у нашому садочку. Запрошуємо вас на екскурсію, щоб ви могли побачити, як ми працюємо та як ваша дитина може розкрити свій потенціал разом з нами.
				</div>
				<div className={css.text}>
					Зв'яжіться з нами сьогодні, щоб дізнатися більше про наш садок та програми, які ми пропонуємо!
				</div>
				</div>
						</div>
						<img className={css.img} src={image2} alt="img-1" />

					</div>
			</div>
		</div>
	)
}
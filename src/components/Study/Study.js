import React from 'react'
import css from './Stusy.module.scss'
import image1 from '../../images/boy.jpeg'
import image2 from '../../images/study-2.jpeg'
import Slider from "react-slick"
import img1 from '../../images/kids/1.webp'
import img2 from '../../images/kids/2.jpeg'
import img3 from '../../images/kids/3.jpeg'
import img4 from '../../images/kids/4.jpeg'
import img5 from '../../images/kids/5.jpeg'

const LeftButton = ({ className, style, onClick }) => {
			return <div
					className={css.sliderArrow}
					onClick={onClick}
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path fill="#000" d="M14.75 19.75L6.5 12l8.25-7.75L13 2.25 2 12l11 9.75z" />
					</svg>
				</div>
}
const RightButton = ({ className, style, onClick }) => {
			return <div
					className={css.sliderArrowRight}
					onClick={onClick}
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path fill="#000" d="M14.75 19.75L6.5 12l8.25-7.75L13 2.25 2 12l11 9.75z" />
					</svg>
				</div>
}

export const Study = () => {


	let settings = {
    dots: false,
    infinite: true,
    speed: 500,
		// autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
		nextArrow:  <RightButton />,
    prevArrow:  <LeftButton />,
		autoplaySpeed: 2000
  };

	return (
		<div className={css.wrapper}>
			<div className={css.container}>
					<div className={css.flex}>
						<div className={css.containerContent}>
							<h4 className={css.subtitle}>
								Наша філософія навчання
							</h4>
							<div className={css.text}>
								В нашому дитячому садочку ми прагнемо створити навчальне середовище, яке не лише сприяє когнітивному розвитку дитини, а й враховує її емоційний, соціальний та фізичний розвиток. Наша філософія базується на довірі до натуральних потенціалів кожної дитини та вірі в їхню здатність до навчання та самовдосконалення.
							</div>
							<div className={css.text}>
								Ми віримо, що кожна дитина - унікальна та має свої власні потреби та інтереси. Тому наш підхід до навчання ґрунтується на індивідуальному підході до кожної дитини. Ми стимулюємо їхні інтереси та враховуємо їхні індивідуальні особливості при плануванні навчальних програм.							</div>
							<div className={css.text}>
							У нашому садочку велика увага приділяється розвитку дитячої творчості та уяви через ігрові методи. Ми віримо, що навчання через гру - найефективніший спосіб стимулювати розвиток усіх аспектів особистості дитини.						</div>
					</div>
					<img className={css.img} src={image1} alt="img-1" />
				</div>
				<div className={css.subtitle} style={{textAlign: 'center','marginTop': "40px"}}>
					Наш процес навчання
				</div>
				<div className={"studySliderWrapper"}>
				<Slider {...settings}>
					<div className={css.sliderItem}>
						<img src={img1} alt="slider-1" />
					</div>
					<div className={css.sliderItem}>
						<img src={img2} alt="slider-1" />
					</div>
					<div className={css.sliderItem}>
						<img src={img3} alt="slider-1" />
					</div>
					<div className={css.sliderItem}>
						<img src={img4} alt="slider-1" />
					</div>
					<div className={css.sliderItem}>
						<img src={img5} alt="slider-1" />
					</div>
				</Slider>
				</div>
				<div className={css.flexRevert}>
						<div className={css.containerContent}>
							<h4 className={css.subtitle}>
								Партнерство з батьками
							</h4>
							<div className={css.text}>
								Ми прагнемо до партнерства з батьками та вважаємо, що активна участь батьків у навчальному процесі сприяє успіху дитини. Ми завжди відкриті до спілкування, консультацій та спільної роботи з батьками для досягнення найкращих результатів для їхніх дітей.
						</div>
							<div className={css.text}>
								У нашому садочку ми прагнемо створити середовище, де діти почувають себе безпечно та заохочено до вивчення навколишнього світу. Ми регулярно оновлюємо наші приміщення та обладнання, щоб забезпечити комфорт та безпеку для всіх дітей.</div>
							<div className={css.text}>
								Наша головна мета - це підготовка дітей до подальшого навчання та життя у цілому. Ми старанно працюємо, щоб кожна дитина, яка покине наш садочок, була готовою до нових викликів і мала позитивний ставлення до навчання та саморозвитку.</div>
								</div>
					<img className={css.img} src={image2} alt="img-1" />
				</div>
			</div>
		</div>
	)
}

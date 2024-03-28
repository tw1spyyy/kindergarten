import React from 'react'
import css from './FoodBlock.module.scss'
import img1 from '../../images/food/1.avif'
import img2 from '../../images/food/2.avif'
import img3 from '../../images/food/3.avif'
import img4 from '../../images/food/4.avif'
import img5 from '../../images/food/5.avif'
import img6 from '../../images/food/6.avif'
import img7 from '../../images/food/7.avif'
import img8 from '../../images/food/8.avif'
import img9 from '../../images/food/9.avif'
import chef from '../../images/chef.avif'
import Slider from "react-slick"

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

export const FoodBlock = () => {


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
				<div className={css.subtitle}>
				Смачні та здорові страви
				</div>
				<div className={css.text}>
				 Ми розуміємо важливість збалансованого та здорового харчування для наших маленьких вихованців. Ми стежимо за тим, щоб кожна страва була не лише смачною, але й містила необхідні поживні речовини для правильного розвитку дитини.
				</div>
				<div className={css.text}>
				Наші кухарі з великою любов'ю готують різноманітні страви, які враховують потреби маленьких гурманів. Ми використовуємо свіжі та якісні продукти, зберігаючи всі корисні властивості.
				</div>
				<div className={css.subtitle}>
				Збалансоване меню
				</div>
				<div className={css.text} style={{marginBottom: '50px'}}>
				Наше меню розроблено з урахуванням рекомендацій діетологів та харчувальних стандартів для дітей. Ми включаємо в раціон різноманітні продукти, які містять необхідні вітаміни, мінерали та макроелементи.
				</div>
			<div className={"studySliderWrapper"}>
				<Slider {...settings}>
				<div className={css.sliderItem}>
						<img src={img8} alt="slider-1" />
					</div>
					<div className={css.sliderItem}>
						<img src={img9} alt="slider-1" />
					</div>
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
					<div className={css.sliderItem}>
						<img src={img6} alt="slider-1" />
					</div>
					<div className={css.sliderItem}>
						<img src={img7} alt="slider-1" />
					</div>

				</Slider>
		</div>
		<div className={css.flex} style={{'marginTop': '60px'}}>
			<div className={css.content}>
				<div className={css.subtitle}>
				Дотримання діетичних обмежень та алергій
				</div>
				<div className={css.text}>
				Ми ретельно вивчаємо потреби кожної дитини щодо харчування, враховуючи будь-які діетичні обмеження чи алергічні реакції. Наші кухарі дбають про те, щоб кожен день було пропоновано альтернативні страви для дітей із певними діетичними обмеженнями.
				</div>
			
				<div className={css.subtitle}>
				Участь батьків
				</div>
				<div className={css.text}>
				Ми завжди відкриті до співпраці з батьками щодо харчування їхніх дітей. Ми надаємо можливість батькам висловлювати свої побажання та рекомендації щодо меню, а також забезпечуємо інформацію про інгредієнти, які використовуються у приготуванні страв.
				</div>
				<div className={css.subtitle}>
				Здорові звички
				</div>
				<div className={css.text}>
				Ми прагнемо виховувати у дітей здорові харчові звички та пояснювати їм важливість здорового харчування. В нашому садочку ми організовуємо заняття з основ здорового харчування та правильного способу харчування.
				</div>
			</div>
			<img className={css.img} src={chef} alt="chef" />
		</div>
			</div>
		</div>
	)
}

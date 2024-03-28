import React from 'react'
import css from './Top.module.scss'
import image1 from '../../images/slider/1.jpeg'
import image2 from '../../images/slider/2.jpeg'
import image3 from '../../images/slider/3.jpeg'
import image4 from '../../images/slider/4.jpeg'
import Slider from "react-slick";

export const Top = () => {

	let settings = {
    dots: false,
    infinite: true,
    speed: 500,
		autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
		nextArrow: <></>,
    prevArrow: <></>,
		autoplaySpeed: 2000
  };

	return (
		<div className={css.wrapper}>
				<div className={css.container}>
					<div className={css.topContentLeft}>
							<div className={css.title}>
								Ласкаво просимо до нашого дитячого садочка <span>Зірочка</span>!
							</div>
							<div className={css.contentText}>
									Місце, де відбувається чарівна подорож у світ дитячої уяви та навчання. Радість, турбота та розвиток - ось наші ключові пріоритети.
							</div>
							<div className={css.contentText}>
							Запрошуємо вас відкрити двері до незабутнього світу дитинства разом з нами! Ваші малюки - наше щасливе майбутнє.							</div>
					</div>
					<div className={css.topContentRight}>
						<div className={css.sliderWrapper}>
						<Slider {...settings}>
							<div className={css.sliderItem}>
								<img src={image1} alt="kids-1" />
							</div>
							<div className={css.sliderItem}>
								<img src={image2} alt="kids-2" />
							</div>
							<div className={css.sliderItem}>
								<img src={image3} alt="kids-3" />
							</div>
							<div className={css.sliderItem}>
								<img src={image4} alt="kids-3" />
							</div>
						</Slider>
						</div>
					</div>
				</div>
		</div>
	)
}

import React, { useState } from 'react';
import styles from './Accordion.module.scss'; // Підключаємо файл стилів

function Accordion() {
  const [expandedIndex, setExpandedIndex] = useState(null);

	const questions = [
    {
      question: "Які години роботи дитячого садочка?",
      answer: "Наш дитячий садок працює з понеділка по п'ятницю з 8:00 ранку до 18:00 вечора."
    },
    {
      question: "Які програми ви пропонуєте для дітей?",
      answer: "Ми маємо різноманітні програми, включаючи навчальні, творчі та фізичні заняття, а також культурні та розважальні заходи."
    },
    {
      question: "Як можу записати свою дитину до садка?",
      answer: "Для запису вашої дитини до нашого садка, будь ласка, зв'яжіться з нами за номером телефону або заповніть форму на нашому веб-сайті."
    },
    {
      question: "Які вимоги до вакцинації для дітей?",
      answer: "Ми рекомендуємо вакцинувати дітей відповідно до рекомендацій медичних фахівців та законодавства."
    },
    {
      question: "Чи є можливість харчування в садку?",
      answer: "Так, ми надаємо харчування для дітей, враховуючи їхні діетичні потреби та пропонуючи збалансовані страви."
    },
    {
      question: "Чи проводяться екскурсії для дітей?",
      answer: "Так, ми організовуємо різноманітні екскурсії та події, щоб діти могли вивчати нові місця та навчатися новим речам."
    },
    {
      question: "Які форми оплати приймаються?",
      answer: "Ми приймаємо різні форми оплати, включаючи готівку, банківські картки та електронні перекази."
    },
    {
      question: "Чи є можливість допомоги з домашніми завданнями?",
      answer: "Так, наші педагоги готові допомогти дітям з домашніми завданнями та розвитком навичок у навчальних предметах."
    }
  ];

  const toggleAccordion = index => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
			<div className={styles.wrapper}>
				<div className={styles.title}>
					Питання та відповіді
				</div>
		<div className={styles.container}>
      {questions.map((item, index) => (
        <div key={index}>
          <div
            className={`${styles.question} ${expandedIndex === index ? styles.expanded : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
          </div>
          <div className={`${styles.answer} ${expandedIndex === index ? styles.expanded : ''}`}>
            {item.answer}
          </div>

        </div>
      ))}
    </div>
			</div>
  );
}

export default Accordion;

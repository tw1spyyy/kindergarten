import React, { useState } from 'react';
import styles from './Contacts.module.scss';

const ContactsBlock = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Тут можна додати логіку для відправки даних на сервер або обробки їх іншим чином
        alert('Ваше повідомлення успішно відправлено!');
        // Очищення форми після відправки
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h2>Зв'яжіться з нами</h2>
                <p>
                    Ми завжди раді почути від вас! Якщо у вас є питання, пропозиції або ви хочете записати вашу дитину до нашого дитячого садка, будь ласка, зв'яжіться з нами за допомогою форми зворотнього зв'язку нижче.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Ім'я:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Електронна пошта:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Повідомлення:</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                    </div>
                    <button type="submit">Відправити</button>
                </form>
            </div>
        </div>
    );
}

export default ContactsBlock;

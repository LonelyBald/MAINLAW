import React from 'react'
import scale from '../assets/img/scale.jpg'

export const Header = () => {
    return  (
        <div className="header">
            <div className="header__container">
                <div className="logo">
                <img src={scale} alt="" />
                <h1>MAINLAW</h1>
                </div>
                <div className="menu">
                <ul>
                    <li>О компании</li>
                    <li>Услуги</li>
                    <li>Новости</li>
                    <li>Контакты</li>
                </ul>
                </div>
                <button className="button">Оставить заявку</button>
            </div>
        </div>
    )
}
import React from "react";
import './header.css'
import './reset.css'





const Header = () => {
    
    return (
        <div className="container">
           <header className="header">
            <nav className="nav">
                <img src="img/Logo-yt.svg" alt="" className="logo"/>
                <a href="#" className="head-text">
                    <ul>
                    <li>Чему вы научитесь</li>
                    <li>Процесс обучения</li>
                    <li>Стоимость</li>
                    <li>Контакты</li>
                    <li className="reg">Регистрация</li>
                    </ul>
                    
                </a>
                <button className="btn1">Войти</button>
            </nav> 
            <hed-content>
                <div className="content">
                <div className="text-right">
                    <h1>Школа программирования для тех, кому нужны реальные навыки,
                            а не просто сертификат
                    </h1>

                <p>Пройдите тестирование, чтобы получить доступ к бесплатным вводным урокам</p>

                <button className="btn-2">Пройти тестирование</button>
                </div>
                <img src="img/laptophend.svg" alt="" className="lap"/>
                </div>
            </hed-content>
            </header>
            <h1 className="Head">Какие технологии вы изучите:</h1>
           <div className="info-1">
                <div className="Men-text">
                    <img src="img/Men-text.svg" alt="" className="Men-text1"/>

                    <div className="Men-text2">
                        <button className="python">Язык программирования Python</button>
                        <button className="sety">Сети</button>
                        <button className="basa">Базы данных</button>
                        <button className="flask">Фреймворки Flask и Django</button>
                        <button className="test">Отладка и тестирование</button>
                        <button className="docker">Docker</button>
                        <button className="git">Git</button>
                        <p>Это необходимый минимум для современного backend-разработчика</p>
                </div>
                </div>
                 <h1 className="Head2">Обучение в YtYt – это удобно и результативно</h1>

            <div className="info2">
    
    <div className="praktice">
        <img src="img/lurninYt1.svg" alt=""/>
        <h1>Огромное количество практики</h1>
        <p>Более 500 самостоятельных заданий и 20 полноценных больших проектов</p>
    </div>
    <div className="metod">
        <img src="img/lurninYt1.svg" alt=""/>   
        <h1>Современные методики обучения</h1>
        <p>Спиральное обучение: 
            погружаемся в материал постепенно, виток за витком</p>
        
    </div>
    <div className="termin">
        <img src="img/lurninYt1.svg" alt=""/>
        <h1>Простое и понятное изложение</h1>
        <p>Вместо заумных терминов – примеры из реального мира</p>
    </div>
    <div className="graf">
        <img src="img/lurninYt1.svg" alt=""/>
        <h1>Гибкий график занятий</h1>
        <p>Учитесь в любое время в удобном 
            для вас темпе</p>
    </div>
   
        </div>
        <div className="info2-1">
        <div className="graf">
        <img src="img/lurninYt1.svg" alt=""/>
        <h1>Прямая связь с опытными программистами</h1>
        <p>Учитесь в любое время в удобном 
            для вас темпе</p>
    </div>
    <div className="graf">
        <img src="img/lurninYt1.svg" alt=""/>
        <h1>Оплата небольшими частями</h1>
        <p>Учитесь в любое время в удобном 
            для вас темпе</p>
    </div>
    <div className="graf">
        <img src="img/lurninYt1.svg" alt=""/>
        <h1>Быстрый и легкий возврат</h1>
        <p>Учитесь в любое время в удобном 
            для вас темпе</p>
    </div>
        </div>
           
            </div>
            <h1 className="Head">Какие технологии вы изучите:</h1>
            <div className="info-3">
                <div class="con-1">
            <div class="laps">
               <img src="img/laps.svg" alt=""/>
    
            </div>
            
            <div class="supp">
                <h1>Помощь и поддержка</h1>
                <p class="one">Если в процессе обучения возникнут сложности, вы всегда сможете задать вопрос своему наставнику.</p>
                <p class="two">Раз в несколько уроков вы будете получать большое задание, которое нужно будет сдавать на проверку код-ревьюеру. Он внимательно изучит ваш код, найдет ошибки и поможет вам стать лучше. </p>
            </div>
                </div>
                <div class="con-2">
                    <div class="metodik">
                    <h1>Методика обучения
                    </h1>
                    <p>Весь учебный материал структурирован по принципу «спирального обучения». Сначала вы получаете базовые знания, а затем на каждом витке спирали углубляетесь в изученные темы, доводя их понимание до совершенства. Такой подход упрощает обучение и гарантирует, что вы не пропустите ничего важного.</p>
                </div>
                <img src="img/con-2.1.svg" alt="" class="img3"/>
        </div>
            </div>
            <div className="siren">
            <img src="img/siren.svg" alt="" class=""/>
            <p>Все блоки проходятся строго по порядку. Пропустить какой-то блок или начать обучение с середины нельзя, даже если вы считаете, что уже знаете какую-то часть материала. Только так мы можем гарантировать, что вы получите все знания, предусмотренные учебной программой.</p>
            <button>Начать обучение</button>
            </div>
            <div className="footer">
                
            <nav className="nav-1">
                <img src="img/Logo-yt.svg" alt="" className="logo"/>
                <a href="#" className="head-text-1">
                    <ul>
                    <li>Чему вы научитесь</li>
                    <li>Процесс обучения</li>
                    <li>Стоимость</li>
                    <li>Контакты</li>
                    <li className="reg-1">Регистрация</li>
                    </ul>
                    
                </a>
                <button className="btn1-1">Войти</button>
            </nav> 
               
            </div>
            
</div>
    )
}
 

export default Header 
import './level.scss';
import React, { useRef, useEffect, useState } from 'react';

const Level = () => {
    const level = useRef(null)
    const mainLevel = useRef(null)
    console.log(level.current);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 } // Установите порог видимости, при котором будет срабатывать событие
        );

        if (level.current) {
            observer.observe(level.current);
        }

        return () => {
            if (level.current) {
                observer.unobserve(level.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            // Запускаем анимацию или выполняем другое действие
            console.log('Element is visible');
            // Например, добавляем класс для анимации
            mainLevel.current.classList.add('animate');
        } else {
            // Убираем класс, если нужно
            mainLevel.current.classList.remove('animate');
        }
    }, [isVisible]);

    return (
        <div id='level' className="level" ref={mainLevel}>
            <div className="container">
                <h2 className="header__title">What Can I Do</h2>
                <a href="" className="header__main-link">skills</a>\
                <div className="level__big-box" >
                    <div className="level__box">
                        <div className="level__box-title">
                            <h2 className="level__title">marketing management</h2>
                            <p className="level__txt">100%</p>
                        </div>
                        <div className="level__box-line"></div>
                    </div>
                    <div className="level__box">
                        <div className="level__box-title">
                            <h2 className="level__title">Public relationship</h2>
                            <p className="level__txt">85%</p>
                        </div>
                        <div className="level__box-line85"></div>
                    </div>
                    <div className="level__box">
                        <div className="level__box-title">
                            <h2 className="level__title">hr manager</h2>
                            <p className="level__txt">85%</p>
                        </div>
                        <div className="level__box-line85"></div>
                    </div>
                    <div className="level__box">
                        <div className="level__box-title">
                            <h2 className="level__title">adobe photoshop</h2>
                            <p className="level__txt">90%</p>
                        </div>
                        <div className="level__box-line90"></div>
                    </div>
                </div>
                <div className="level__big-box">
                    <div className="level__box">
                        <div className="level__box-title">
                            <h2 className="level__title">adobe illustration</h2>
                            <p className="level__txt">85%</p>
                        </div>
                        <div className="level__box-line85"></div>
                    </div>
                    <div className="level__box">
                        <div className="level__box-title">
                            <h2 className="level__title">adobe premier pro</h2>
                            <p className="level__txt">90%</p>
                        </div>
                        <div className="level__box-line90"></div>
                    </div>
                    <div className="level__box">
                        <div className="level__box-title">
                            <h2 className="level__title">adobe after effects</h2>
                            <p className="level__txt">85%</p>
                        </div>
                        <div className="level__box-line85"></div>
                    </div>
                    <div className="level__box">
                        <div className="level__box-title">
                            <h2 className="level__title">figma</h2>
                            <p className="level__txt">85%</p>
                        </div>
                        <div className="level__box-line85"></div>
                    </div>
                </div>
                <div ref={level}></div>

            </div>
        </div>
    )
}

export default Level

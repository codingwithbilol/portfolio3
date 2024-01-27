import React from "react";
import "../card/card.css";
export default function Card() {
  return (
    <div>
      <div className="first_card">
        <p className="first_card_title">SMART 3D-X. Дентальный 3D Рентген</p>
        <p className="first_card_text">
          Точное сканирование любого трека может быть достигнуто с помощью
          высококачественным QuartZ. Множественные криволинейные траектории
          томографии больше подходят для зубной дуги пациента.
        </p>

        <button className="left_arrow">
          <div className="left">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M19.85 12.172L5.49579 12.172"
                stroke="white"
                stroke-width="1.64885"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.0606 6.40703L19.8501 12.1717L14.0606 17.9373"
                stroke="white"
                stroke-width="1.64885"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p className="see_more">Перейти</p>
        </button>
        <div className="img_1">
          <img src="./images/image 39.png" />
        </div>
      </div>

      <div className="second_card">
        <p className="second_card_title">Ультразвуковой аппарат VINNO E20</p>
        <p className="second_card_text">
          Революционная радиочастотная платформа Автоматическая трассировка
          спектра PW/CW Комплексные функции 3D/4D Работа смарт – сенсорной
          панели
        </p>
        <button className="left_arrow_1">
          <div className="left_1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M19.85 12.172L5.49579 12.172"
                stroke="white"
                stroke-width="1.64885"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.0606 6.40703L19.8501 12.1717L14.0606 17.9373"
                stroke="white"
                stroke-width="1.64885"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p className="see_more_1">Перейти</p>
        </button>
          <div className="img_2">
          <img src="./images/image 40.png" />

          </div>
      </div>
    </div>
  );
}

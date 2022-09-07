import React from "react";
import cart from "../assets/img/cart.png";
import { Link } from "react-router-dom";
import "../scss/app.scss";
export const Basket = () => {
  return (
    <div classNane="content">
      <div classNane="container container--cart">
        <div classNane="cart cart--empty">
          <div className="content__title">
            <h2>
              Корзина пустая <icon>😕</icon>
            </h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
          </div>
          <img src={cart} alt="Empty cart" />
          <Link to="/" classNane="button button--black">
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

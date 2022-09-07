import React from "react";
import { Categories } from "../components/Categories";
import { Soft } from "../components/Soft";
import { PizzaBlock } from "../components/PizzaBlock";
import { useState } from "react";
import { useEffect } from "react";

export const Home = () => {
  const [categoriesActive, setCategories] = useState(0);
  const [list, setList] = useState(0);

  const [request, setRequest] = useState([]);
  useEffect(() => {
    fetch("https://629c8ce4e9358232f75cbd6c.mockapi.io/pizza")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRequest(data);
      });
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <Categories categoriesActive={categoriesActive} setCategories={(id) => setCategories(id)} />
        <div className="sort">
          <Soft list={list} setList={(id) => setList(id)} />
        </div>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__item">
        {request.map((Obj) => (
          <PizzaBlock
            key={Obj.id}
            imageUrl={Obj.imageUrl}
            title={Obj.title}
            types={Obj.types}
            sizes={Obj.sizes}
            price={Obj.price}
          />
        ))}
      </div>
    </div>
  );
};

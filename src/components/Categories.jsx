export const Categories = ({ categoriesActive, setCategories }) => {
  const catArray = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрыте"];

  return (
    <div className="categories">
      <ul>
        {catArray.map((obj, index) => {
          return (
            <li
              key={obj}
              onClick={() => setCategories(index)}
              className={categoriesActive === index ? "active" : ""}
            >
              {obj}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

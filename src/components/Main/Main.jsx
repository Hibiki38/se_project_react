import WeatherCard from "../WeatherCard/WeatherCard";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

function Main({ weatherData, onCardClick, clothingItems, likeItem }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[currentTemperatureUnit]}&deg;
          {currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={onCardClick}
                  likeItem={likeItem}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;

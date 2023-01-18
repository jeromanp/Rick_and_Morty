import React from "react";
import style from "./Favorites.module.css";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { filterCard, orderCard, resetCard } from "../../redux/actions";

export default function Favorites(props) {
  const navigate = useNavigate();
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  function backtoHome() {
    return navigate("/home");
  }

  function handleSelect(event) {
    event.preventDefault();
    const { name, value } = event.target;

    if (name === "Filter") {
      return dispatch(filterCard(value));
    }
    if (name === "Order") {
      dispatch(orderCard(value));
    }
  }

  return (
    <>
      <div>
        <button className={style.buttonBack} onClick={backtoHome}>
          Volver
        </button>
        <h1 className={style.h1}>Your favorites</h1>
      </div>
      <br/>

      <div className={style.cards}>
        <div>
          <button
            className={style.buttonReset}
            onClick={() => dispatch(resetCard())}
          >
            Reset Filters
          </button>
        </div>

        {myFavorites.length === 0 ? null : (
          <div className={style.select}>
            <div className={style.h4}>
              <h4>
                Puedes seleccionar el Orden ⏫⏬ o Filtar por géneros 🚹🚺
              </h4>
              <h4>Da click en el ❤️ o la ❌ para eliminar de tus Favoritos</h4>
            </div>
            <br />
        

            <select
              name="Order"
              defaultValue={"Default"}
              onChange={handleSelect}
            >
              <option value="Default" disabled>
                Select Order
              </option>

              <option value="Ascendente">Ascendente</option>
              <option value="Descendente">Descendente</option>
            </select>

            <select
              name="Filter"
              defaultValue={"Default"}
              onChange={handleSelect}
            >
              <option value="Default" disabled>
                Select Filter
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Genderles">Genderles</option>
              <option value="Unknown">Unknown</option>
            </select>
            <br/>
            <br/>


          </div>
        )}

        {myFavorites?.map((personaje) => (
          <Card
            key={personaje.id}
            id={personaje.id}
            name={personaje.name}
            species={personaje.species}
            gender={personaje.gender}
            image={personaje.image}
            onClose={() => props.onClose(personaje.id)}
          />
        ))}
      </div>
    </>
  );
}

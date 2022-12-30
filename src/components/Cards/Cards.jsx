import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  //array de objetos con los personajes
  const { characters } = props;

  return (
    <>
      <div className={style.h3}>
        <h3>Da click sobre el nombre para conocer más</h3>
      </div>
      <div className={style.cards}>
        {
          //destructuring del array characters
          //se agrega el termino id al props para cuando se ejecuta onClose
          //se aplica map para indicar las propiedades de cada Card
          characters.map(({ name, species, gender, image, id }) => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                species={species}
                gender={gender}
                image={image}
                // onClose es la props que va a ejecutar la funcion onClose de App
                onClose={() => props.onClose(id)}
              />
            );
          })
        }
      </div>
    </>
  );
}

import Card from "./Card";

const CardList = ({ cards }) => {
  return (
    <div>
      {cards.map((show, i) => {
        return (
          <Card
            key={i}
            title={show.title}
            status={show.status}
            rating={show.rating}
          />
        );
      })}{" "}
    </div>
  );
};

export default CardList;

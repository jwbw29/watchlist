const Card = ({ title, rating, status }) => {
  return (
    <div className="card-container">
      {/* <img/> put platform image here */}
      <h1>{title}</h1>
      <p>{status} | other details</p>
      <h2>{rating} / 10</h2> {/*put rating here*/}
      {/*<img /> drop down arrow here, with onClick function to expand card*/}
    </div>
  );
};

export default Card;

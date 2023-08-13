const Card = ({ description, id, image, title }) => {
  const desc = `${description.substr(0, 120)}...`;

  return (
    <div className="card">
      <img src={image.url} alt={image.alt} />
      <h4>{title}</h4>
      <div>{desc}</div>
    </div>
  );
};

export default Card;

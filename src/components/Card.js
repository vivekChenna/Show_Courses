import { FcLike } from "react-icons/fc";

const Card = ({ description, id, image, title }) => {
  const desc = `${description.substr(0, 120)}...`;

  return (
    <div className="card">
      <div className="card-img-btn-div">
        <img src={image.url} className="card-image" alt={image.alt} />
        <div className="like-btn-div">
          <button className="like-btn">{<FcLike fontSize="1.75rem" />}</button>
        </div>
      </div>

      <div className="card-info">
        <p className="card-title">{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;

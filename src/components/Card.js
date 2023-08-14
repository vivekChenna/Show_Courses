import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({
  description,
  id,
  image,
  title,
  likedCourses,
  setLikedCourses,
}) => {
  const desc = `${description.substr(0, 120)}...`;

  const ClickHandler = (id) => {
    if (likedCourses.includes(id)) {
      // phele se clicked h , agar array me id h toh , remove karna padega
      setLikedCourses((prev) => prev.filter((cid) => cid !== id));
      toast.warning("like removed");
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([id]);
      } else {
        setLikedCourses((prev) => [...prev, id]);
      }
      toast.success("liked successfully");
    }
  };

  return (
    <div className="card">
      <div className="card-img-btn-div">
        <img src={image.url} className="card-image" alt={image.alt} />
        <div className="like-btn-div">
          <button className="like-btn" onClick={() => ClickHandler(id)}>
            {likedCourses.includes(id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
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

import "./BlogCard.css";
import FavoriteIcon from "@material-ui/icons/Favorite";

export const BlogCard = ({ title, description, liked, likePost }) => {
  const heartFill = liked ? "crimson" : "black";

  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="likeBlock">
        <div>
          <button className="likeBtn" onClick={likePost}>
            <FavoriteIcon style={{fill: heartFill}}/>
          </button>
        </div>
      </div>
    </div>
  );
};

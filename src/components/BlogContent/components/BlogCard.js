import "./BlogCard.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from '@material-ui/icons/Delete';

export const BlogCard = ({ title, description, liked, likePost, deletePost }) => {
  const heartFill = liked ? "crimson" : "black";

  return (
    <>
    <div className="postsBlog">
    <div className="post">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="likeBlock">
        <div>
          <button className="likeBtn" onClick={likePost}>
            <FavoriteIcon style={{ fill: heartFill }} />
          </button>
        </div>
      </div>
    </div>
    <button className="deleteIcon" onClick={deletePost}>
     <DeleteIcon /> 
    </button>
    </div>
    </>
  );
};

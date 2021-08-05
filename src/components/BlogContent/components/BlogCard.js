import "./BlogCard.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { modalShow } from "../../../features/modalSlice";
import { useDispatch } from "react-redux";

export const BlogCard = ({
  title,
  description,
  liked,
  likePost,
  deletePost,
  setSelectedPostPos,
  showDeleteConfirm,
}) => {
  const heartFill = liked ? "crimson" : "black";

  const dispatch = useDispatch();

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
        <button className="editIcon" onClick={setSelectedPostPos}>
          <BorderColorIcon onClick={() => dispatch(modalShow())} />
        </button>
        <button className="deleteIcon" onClick={deletePost}>
          <DeleteIcon />
        </button>
      </div>
    </>
  );
};

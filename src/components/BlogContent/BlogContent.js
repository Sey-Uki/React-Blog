import { useState } from "react";
import { posts } from "../../shared/projectData";
import "./BlogContent.css";
import { BlogCard } from "./components/BlogCard";
import { EditForm } from "./components/EditForm";

export const BlogContent = () => {
  const [blogArr, setBlogArr] = useState(
    JSON.parse(localStorage.getItem("blogPosts")) || posts
  );

  const [showEditForm, setShowEditForm] = useState(false);

  const [selectedPost, setSelectedPost] = useState({});

  const likePost = (pos) => {
    const temp = [...blogArr];
    temp[pos].liked = !temp[pos].liked;

    setBlogArr(temp);

    localStorage.setItem("blogPosts", JSON.stringify(temp));
  };

  const deletePost = (pos) => {
    if (window.confirm(`Are you sure? ${blogArr[pos].title}`)) {
      const temp = [...blogArr];
      temp.splice(pos, 1);

      setBlogArr(temp);

      localStorage.setItem("blogPosts", JSON.stringify(temp));
    }
  };

  const blogPosts = blogArr.map((item, pos) => {
    return (
      <BlogCard
        key={item.id}
        title={item.title}
        description={item.description}
        liked={item.liked}
        likePost={() => likePost(pos)}
        deletePost={() => deletePost(pos)}
        setShowEditForm={setShowEditForm}
        setSelectedPost={() => setSelectedPost(item)}
      />
    );
  });
  return (
    <>
      <h1>Simple Blog</h1>
      <div className="posts">{blogPosts}</div>
      {showEditForm ? (
        <EditForm
          selectedPost={selectedPost}
          setShowEditForm={setShowEditForm}
        />
      ) : null}
    </>
  );
};

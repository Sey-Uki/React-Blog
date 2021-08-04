import { useEffect, useState } from "react";
import "./BlogContent.css";
import { AddPost } from "./components/AddPost";
import { BlogCard } from "./components/BlogCard";
import { EditForm } from "./components/EditForm";

export const BlogContent = () => {
  const [blogArr, setBlogArr] = useState([]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [selectedPostPos, setSelectedPostPos] = useState(0);

  const likePost = (pos) => {
    const temp = [...blogArr];
    temp[pos].liked = !temp[pos].liked;

    setBlogArr(temp);

    fetch(
      `https://609012a53847340017020cb2.mockapi.io/MarketCategory/posts/${temp[pos].id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(temp[pos]),
      }
    );
  };

  const deletePost = (pos) => {
    const temp = [...blogArr];

    fetch(
      `https://609012a53847340017020cb2.mockapi.io/MarketCategory/posts/${temp[pos].id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    temp.splice(pos, 1);

    setBlogArr(temp);
  };

  useEffect(() => {
    fetch("https://609012a53847340017020cb2.mockapi.io/MarketCategory/posts")
      .then(async (res) => {
        const json = await res.json();
        setBlogArr(json);
      })
      .catch((err) => console.log(err));
  }, []);

  const blogPosts = blogArr.map((item, pos) => {
    return (
      <BlogCard
        key={item.id}
        title={item.title}
        description={item.description}
        liked={item.liked}
        likePost={() => likePost(pos)}
        deletePost={() => deletePost(pos)}
        setSelectedPostPos={() => setSelectedPostPos(pos)}
        setIsModalVisible={setIsModalVisible}
      />
    );
  });

  return (
    <>
      <h1>Simple Blog</h1>
      <AddPost blogArr={blogArr} setBlogArr={setBlogArr} />
      <div className="posts">{blogPosts}</div>
      {isModalVisible ? (
        <EditForm
          setIsModalVisible={setIsModalVisible}
          isModalVisible={isModalVisible}
          selectedPostPos={selectedPostPos}
          blogArr={blogArr}
          setBlogArr={setBlogArr}
        />
      ) : null}
    </>
  );
};

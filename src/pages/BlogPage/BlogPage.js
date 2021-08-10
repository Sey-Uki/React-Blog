import { useEffect, useState } from "react";
import "./BlogPage.css";
import { AddPost } from "./components/AddPost";
import { BlogCard } from "./components/BlogCard";
import { EditForm } from "./components/EditForm";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";

const { confirm } = Modal;

export const BlogPage = () => {
  const [blogArr, setBlogArr] = useState([]);

  const [selectedPostPos, setSelectedPostPos] = useState(0);

  const isModalVisible = useSelector((state) => state.modal.isModalVisible);

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
    confirm({
      title: "Вы хотите удалить этот пост?",
      icon: <ExclamationCircleOutlined />,
      content: "Действия необратимы",
      okText: "Да",
      okType: "danger",
      cancelText: "Нет",
      onOk() {
        console.log("OK");

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
      },
      onCancel() {
        console.log("Cancel");
      },
    });
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
          selectedPostPos={selectedPostPos}
          blogArr={blogArr}
          setBlogArr={setBlogArr}
        />
      ) : null}
    </>
  );
};

import { Component } from "react";
import { posts } from "../../shared/projectData";
import "./BlogContent.css";
import { BlogCard } from "./components/BlogCard";

export class BlogContent extends Component {
  state = {
    showBlog: true,
    blogArr: posts,
  };

  likePost = pos => {
    const temp = this.state.blogArr;
    temp[pos].liked = !temp[pos].liked;

    this.setState({
      blogArr: temp,
    });
  }


  toggleBlog = () => {
    this.setState((state) => {
      return {
        showBlog: !state.showBlog,
      };
    });
  };

  render() {
    const blogPosts = this.state.blogArr.map((item, pos) => {
      return (
        <BlogCard
          key={item.id}
          title={item.title}
          description={item.description}
          liked={item.liked}
          likePost={() => this.likePost(pos)}
        />
      );
    });
    return (
      <>
        <button onClick={this.toggleBlog}>
          {this.state.showBlog ? "Скрыть блог " : "Показать блог"}
        </button>
        {this.state.showBlog ? (
          <>
            <h1>Simple Blog</h1>
            <div className="posts">{blogPosts}</div>
          </>
        ) : null}
      </>
    );
  }
};

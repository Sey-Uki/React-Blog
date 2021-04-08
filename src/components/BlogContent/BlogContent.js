import { Component } from "react";
import { posts } from "../../shared/projectData";
import "./BlogContent.css";
import { BlogCard } from "./components/BlogCard";

export class BlogContent extends Component {
  state = {
    showBlog: true
  }
   blogPosts = posts.map((item) => {
    return (
      <BlogCard
        key={item.id}
        title={item.title}
        description={item.description}
      />
    );
  });

  toggleBlog = () => {
    this.setState((state) => {
      return{
        showBlog: !state.showBlog
      }
      
    })   
    }

render() {
  return (
    <>
      <button onClick={this.toggleBlog}>
        {this.state.showBlog ? "Скрыть блог " : "Показать блог"}
      </button>
      {this.state.showBlog ? (
        <>
          <h1>Simple Blog</h1>
          <div className="posts">{this.blogPosts}</div>
        </>
      ) : null}
    </>
  );
}
};

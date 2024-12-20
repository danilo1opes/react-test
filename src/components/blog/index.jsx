import { useEffect, useState } from "react";
import { marked } from "marked";
import TextBlog from "../../markdown/TextBlog.md";
import "./blog.scss";

function Blog() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(TextBlog)
      .then((response) => response.text())
      .then((text) => {
        setContent(marked(text));
      });
  }, []);

  return (
    <section className="flex">
      <div className="text" dangerouslySetInnerHTML={{ __html: content }}></div>
    </section>
  );
}

export default Blog;

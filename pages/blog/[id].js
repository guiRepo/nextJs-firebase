import { useEffect, useState } from "react";
import fire from "../../config/fire-config";
import Link from "next/link";

const Blog = (props) => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fire
      .firestore()
      .collection("blog")
      .doc(props.id)
      .get()
      .then((result) => {
        setBlog(result.data());
      });
  }, []);
  if (!blog) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
};

export const getServerSideProps= async ({query}) => {
  const blogObj = {}
  await fire.firestore()
  .collection('blog')
  .doc(query.id)
  .get()
  .then(result => {
    content['title'] = result.data().title
    content['content'] = result.data().content
  })

  return{
    props: {
      title: blogObj.title,
      content: blogObj.content
    }
  }
}


export default Blog;

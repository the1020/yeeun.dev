import BlogPost from "../components/BlogPost";
import Container from "../components/Container";
import { allPosts } from "contentlayer/generated";

const blog = ({ allPosts }) => {
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        {allPosts.map((post) => (
          <BlogPost
            key={post.title}
            title={post.title}
            date={post.date}
            description={post.description}
            slug={post._raw.flattenedPath}
          />
        ))}
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  return {
    props: { allPosts },
  };
}

export default blog;

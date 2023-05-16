import Container from "../../components/Container";
import { allPosts } from "../../.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

const Post = ({ post }) => {
  const MDXComponent = useMDXComponent(post.body.code);
  return (
    <Container>
      <div className="mt-10 prose">
        <h1>{post.title}</h1>
        <MDXComponent />
      </div>
    </Container>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
};

export default Post;

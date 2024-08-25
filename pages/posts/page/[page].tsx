import { SinglePost } from '@/components/Post/SinglePost';
import { getAllPosts, getPostsFourTopPage } from '@/lib/notionAPI';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { page: '1' } }, { params: { page: '2' } }],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const fourPosts = await getPostsFourTopPage();
  return {
    props: {
      fourPosts,
    },
    revalidate: 60 * 60 * 6,
  };
};

const BlogPageList = ({ fourPosts }) => {
  return (
    <main className="container w-full mt-16">
      <h1 className="text-5xl font-medium text-center mb-16">Notion Blog🚀</h1>
      {fourPosts.map((post) => (
        <div className="mx-4" key={post.id}>
          <SinglePost
            title={post.title}
            description={post.description}
            date={post.date}
            slug={post.slug}
            tags={post.tags}
          />
        </div>
      ))}
    </main>
  );
};

export default BlogPageList;

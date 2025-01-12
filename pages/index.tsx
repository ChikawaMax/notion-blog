import { SinglePost } from '@/components/Post/SinglePost';
import { getAllPosts, getPostsFourTopPage } from '@/lib/notionAPI';
import { GetStaticProps } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const getStaticProps: GetStaticProps = async () => {
  const fourPosts = await getPostsFourTopPage();
  return {
    props: {
      fourPosts,
    },
    revalidate: 60 * 60 * 6,
  };
};

export default function Home({ fourPosts }) {
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
      <Link
        href={'/posts/page/1'}
        className="mb-6 lg:w-1/2 block mx-auto rounded-md px-5 text-right"
      >
        ...もっと見る
      </Link>
    </main>
  );
}

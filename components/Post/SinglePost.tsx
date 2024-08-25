import Link from 'next/link';

interface Props {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags: string[];
}

export const SinglePost = ({ title, description, date, slug, tags }: Props) => {
  return (
    <section className="lg:w-1/2 bg-sky-900 mb-8 mx-auto rounded-md p-5 shadow-2xl hover:shadow-none hover:translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-3">
        <h2 className="text-gray-100 text-2xl font-medium mb-2">
          <Link href={`/posts/${slug}`}>{title} </Link>
        </h2>
        <div className="text-gray-100">{date}</div>
        {tags.map((tag) => (
          <span
            className="text-white bg-gray-500 rounded-xl px-2 py-1 font-medium"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-100">{description}</p>
    </section>
  );
};

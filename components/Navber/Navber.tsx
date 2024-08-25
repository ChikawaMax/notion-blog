import Link from 'next/link';

export const Navber = () => {
  return (
    <nav className="container mx-auto lg:px-2 px-5 lg:w-2/5">
      <div className="container flex items-center justify-between mx-auto">
        <Link className="text-2xl font-medium" href={'/'}>
          SinCode
        </Link>
        <div>
          <ul className="flex items-center text-sm py-4">
            <li>
              <Link
                href={'/'}
                className="block px-4 py-2 hover:text-sky-600 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={'/'}
                className="block px-4 py-2 hover:text-sky-600 transition-all duration-300"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href={'/'}
                className="block px-4 py-2 hover:text-sky-600 transition-all duration-300"
              >
                Qiita
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

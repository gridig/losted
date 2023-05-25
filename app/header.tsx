import Link from 'next/link';

const headerData = [
  { id: 0, url: '/', title: 'home' },
  { id: 1, url: '/notes', title: 'notes' },
];

export default function Header() {
  return (
    <header>
      <ul className='flex flex-row items-center justify-center p-8'>
        {headerData.map((link) => (
          <li className='text-center px-8' key={link.id}>
            <Link
              href={link.url}
            >
              <p className={'m-0 max-w-[30ch] text-sm'}>{link.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

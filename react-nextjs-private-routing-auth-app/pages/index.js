import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link href="/private">
          <a>Privateへ</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;

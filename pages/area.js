import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../components/Header';

const Area = () => {
  const router = useRouter();
  return (
    <div>
      <Header />
      <h1>{router.query.name}</h1>
      <ul>
        <li>
          <Link href={{ pathname: '/country', query: { name: router.query.country1 }}}>
            <a>{router.query.country1}</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/country', query: { name: router.query.country2 }}}>
            <a>{router.query.country2}</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        h1,a {
          font-family: 'Meiryo';
        }
        ul a {
          color: gray;
        }
        a {
          text-decoration: none;
        }
        li {
        margin: 5px 0;
          padding-left: 10px;
        }
      `}</style>
    </div>
  );
};

export default Area;
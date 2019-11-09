import Link from 'next/link';

function Top() {
  return (
    <div>
      <h1>Travel Diary</h1>
      <h3>Which country did you go ?</h3>
      <div>
        <Link href={{ pathname: '/area', query: { name: 'Europe', country1: 'Barcelona', country2: 'Paris'}}}>
        <a>Europe</a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href={{ pathname: '/country', query: { name: 'Barcelona'}}}>
            <a>Barcelona</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/country', query: { name: 'Paris'}}}>
            <a>Paris</a>
          </Link>
        </li>
      </ul>
      <div>
        <Link href={{ pathname: '/area', query: { name: 'Asia', country1: 'Thailand', country2: 'Taiwan'}}}>
        <a>Asia</a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href={{ pathname: '/country', query: { name: 'Thailand'}}}>
            <a>Thailand</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/country', query: { name: 'Taiwan'}}}>
            <a>Taiwan</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        h1 {
          font-family: 'Meiryo';
          margin: 5px 0;
        }

        h1,h3,a {
          font-family: 'Meiryo';
        }

        ul {
          padding: 0;
        }

        ul a {
          color: gray;
        }

        li {
          margin: 5px 0;
          padding-left: 10px;
        }

        a {
          text-decoration: none;
          color: black;
        }
      `}</style>
    </div>
  )
}

export default Top

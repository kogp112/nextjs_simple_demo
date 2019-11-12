import Link from 'next/link';

const linkStyleTop = {
	color: 'black'
};

const linkStyleEurope = {
	color: 'blue'
};

const linkStyleAsia = {
	color: 'red'
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyleTop}>Top</a>
    </Link>
    <Link href={{ pathname: '/area', query: { name: 'Europe', country1: 'Barcelona', country2: 'Paris' }}}>
      <a style={linkStyleEurope}>Europe</a>
    </Link>
    <Link href={{ pathname: '/area', query: { name: 'Asia', country1: 'Thailand', country2: 'Taiwan' }}}>
      <a style={linkStyleAsia}>Asia</a>
    </Link>
    <style jsx>{`
      a {
        margin-right: 15px;
        font-weight: bold;
        font-family: 'Meiryo';
      }
    `}</style>
  </div>
);

export default Header;
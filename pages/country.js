import { useRouter } from 'next/router';
import Header from '../components/Header';

const Country = () => {
  const router = useRouter();
  const img = "/" + router.query.name + ".jpg";
  return (
      <div>
        <Header />
        <h1>{router.query.name}</h1>
        <img src={img} alt="test img" style={{ width: '50%' }} />
        <style jsx>{`
        h1,a {
          font-family: 'Meiryo';
				}
      `}</style>
      </div>
  );
};

export default Country;
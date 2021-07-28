import styles from '../../styles/Jobs.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products/');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Ninjas = ({ ninjas }) => {
  console.log(ninjas)

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ ninja.title }</h3>
            <h3>Price: { ninja.price }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Ninjas;
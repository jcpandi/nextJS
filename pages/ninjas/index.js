import styles from '../../styles/products.module.css'
import Image from 'next/image'

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
    <div className={styles.productItems}>
      
      {ninjas.map(ninja => (
        <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
          <a className={styles.product}>
            <div className={styles.productContent}>
            <div className={styles.productImg}> <img src ={ninja.image} width={150}  height={150}    alt="" /></div>
            <div className = "productBtn">
                                <button type = "button" class = "btnCart"> add to cart
                                    <span><i class = "fas fa-plus"></i></span>
                                </button>
                                <button type = "button" class = "btnBuy"> buy now
                                    <span><i class = "fas fa-shopping-cart"></i></span>
                                </button>
              </div>
           
            <h5 className={styles.productName}>{ ninja.productName }</h5>
            <h5>Price: { ninja.price }</h5>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Ninjas;
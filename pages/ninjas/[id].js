import styles from '../../styles/products.module.css'
export const getStaticPaths = async () => {
    const res = await fetch('https://fakestoreapi.com/products/');
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString()}
        }
    })
    return {
        paths,
        fallback:false
}
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://fakestoreapi.com/products/' + id)
    .then(res=>res.json())
    .then(json=>console.log(json))

    return {
        props: { ninja: data }
      }
}

const Details = ({ ninja }) => {
    return (
      <div className={styles.products}>
        <p>{ ninja.price }</p>
        <p>Helo</p>
       
      </div>
     

    );
  }
 
export default Details ;
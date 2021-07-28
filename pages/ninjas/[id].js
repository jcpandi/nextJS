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
    const res = await fetch('https://fakestoreapi.com/products/' + id);
    const data = await res.json();

    return {
        props: { ninja: data }
      }
}

const Details = ({ ninja }) => {
    return (
      <div>
        <h1>{ ninja.title }</h1>
        <p>{ ninja.price }</p>
        <p>{ ninja.description }</p>
      </div>
    );
  }
 
export default Details ;
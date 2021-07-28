import Link from 'next/link'
import { useEffect } from 'react';
import router, { useRouter } from 'next/router'
const NotFound = () => {
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000);
    }, [])
    return (

        <div className="not-found">
            <h1>Oppsss....</h1>
            <h2>Page cannot be found.</h2>
            <p>Back to <Link href="/"><a>Homepage</a></Link></p>
        </div>
      );
}
 
export default NotFound;
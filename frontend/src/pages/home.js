import { Fragment, useEffect, useState } from 'react';
import ProductCart from '../components/productCart';

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + '/product')
            .then((res) => res.json())
            .then((res) => setProducts(res.products || [])); 
    }, []);

    return (
        <Fragment>
            <h1 id="products_heading">Latest Products</h1>
            <section id="products" className="container mt-5">
                <div className="row">
                    {products.map((product) => (
                        <ProductCart key={product._id} product={product} />
                    ))}
                </div>
            </section>
        </Fragment>
    );
}
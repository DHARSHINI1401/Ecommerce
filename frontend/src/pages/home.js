import { Fragment, useEffect, useState } from 'react';
import ProductCart from '../components/productCart';
import { useSearchParams } from 'react-router-dom';

export default function Home() {

    const [products, setProducts] = useState([]);
    const [searchParams, setsearchParams] = useSearchParams();

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + '/product?' + searchParams)
            .then(res => res.json())
            .then(res => setProducts(res.products));
    }, [searchParams]);

    return (
        <Fragment>
            <section
                className="about"
                style={{
                    backgroundImage: "url('/images/m2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    padding: "50px 0"
                }}
            >
                <div className="content1">
                    <h2>
                        <span style={{ color: "white" }}>Upto 60% Offer Now!</span> <br />
                    </h2>
                    <h1>
                        Enjoy The Season Sale
                    </h1>
                    <h2>
                        <span style={{ color: "white" }}>Pre-Fall Collection, That mid-summer craving for fall styles?</span>
                    </h2>
                    <button>
                        Shop Now <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </section>

            <h1 id="products_heading">Latest Products</h1>

            <section id="products" className="container mt-5">
                <div className="row">
                    {products.map(product => (
                        <ProductCart key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </Fragment>
    );
}

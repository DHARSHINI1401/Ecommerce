export default function ProductCart({ product }) {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
                <img
                    className="card-img-top mx-auto"
                    src={product.images[0].image } 
                    alt={product.name}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        <a href="">{product.name}</a>
                    </h5>
                    <div className="ratings mt-auto">
                        <div className="rating-outer">
                            <div className="rating-inner"></div>
                        </div>
                    </div>
                    <p className="card-text">{product.price}</p>
                    <a href="#" id="view_btn" className="btn btn-block">
                        View Details
                    </a>
                </div>
            </div>
        </div>
    );
}
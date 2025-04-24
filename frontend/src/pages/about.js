export default function About() {
    return (
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
    );
}

import "./Home.css";

function Home() {
    return (
        <div className="container">
            <div className="text-container">
                <h1>
                    hello!
                     <br />
                    <span className="highlight">i'm ryan,</span>
                </h1>
                <h2>full-stack software engineer</h2>
            </div>
            
            <img
                src="./portrait-transparent.png"
                alt="Ryan's Portrait"
                className="portrait"
            />


            <button>let's connect</button>
        

        </div>
    );
}

export default Home;

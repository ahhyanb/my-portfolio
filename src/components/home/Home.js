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
        
                <a
                    href="https://www.linkedin.com/in/ryanmartbartolome/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lets-connect"
                >
                    let's connect!
                </a>

            </div>
            
            <img
                src="./portrait-transparent.png"
                alt="Ryan's Portrait"
                className="portrait"
            />

        <hr className="hr-home"/>

        </div>
    );
}

export default Home;

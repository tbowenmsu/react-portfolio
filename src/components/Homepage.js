import {FaGithub, FaLinkedin} from "react-icons/fa"

const Homepage = () => {
    return (
        <>
            <section className="homepage">
                <div className="overlay">
                <h1>Taylor Bowen</h1>
                <p>Front-end Web Developer</p>

                <ul>
                    <li><a href="https://github.com/tbowenmsu" target="_blank" rel="noopennernoreferrer"><FaGithub className ="grow" /></a></li>
                    <li><a href="https://www.linkedin.com/in/taylor-bowen-55b402139/" target="_blank" rel="noopennernoreferrer"><FaLinkedin className ="grow" /></a></li>
                </ul>
                </div>
            </section>
        </>
    )
}

export default Homepage

import {FaPhone, FaEnvelope, FaLinkedin} from "react-icons/fa"

const Contacts = () => {
    return (
        <>
            <section className="contacts">
                <h1>Contacts page</h1>
                <ul>
                    <li>
                        <a href="tel:2693303457"><FaPhone style={{marginRight: 8}} />269-330-3457</a>
                    </li>
                    <li>
                        <a href="mailto:taylor.p.bowen@gmail.com"><FaEnvelope style={{marginRight: 8}} />taylor.p.bowen@gmail.com</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/taylor-bowen-55b402139/" target="_blank" rel="noopenner noreferrer"><FaLinkedin style={{marginRight: 8}} />LinkedIn</a>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Contacts

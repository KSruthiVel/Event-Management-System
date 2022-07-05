import globe from "../assets/contact-us.jpeg";
const Mailer = ()=> {
    return (
        <div className="container border" style={{marginTop:"50px",
        width:"50%", backgroundImage:`url(${globe})`, backgroundSize:"cover", backgroundPosition:"left"}}>
            <h1>Contact Us</h1>
            <form>
                <label>Name</label>
                <input type="text" name="name"/>

                <label>Email</label>
                <input type="email" name="user_email" />

                <label>Message</label>
                <textarea name="message" rows='4'/>
                <input type="submit" value='Send'/>
            </form>
        </div>
    );
};

export default Mailer;
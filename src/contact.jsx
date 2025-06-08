function Contact(){
    return (
        <form action="" id="contactUs">
            <h2>Send Us a Message</h2>
            <p>Send us a message and we will respond in 24h.</p>    
            <div>
                <label htmlFor="">First Name:</label>
                <input type="text" />
                <label htmlFor=""> Last Name:</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor=""> Email:</label>
                <input type="email" placeholder="myemail@gmail.com" />
                
                <label htmlFor=""> Phone Number:</label>
                <input type="number" />
            </div>
            <label htmlFor="">
                <textarea name="" placeholder="Type your message here" id=""></textarea>
            </label>
            <button>Send</button>
        </form>
    )
}

export default Contact
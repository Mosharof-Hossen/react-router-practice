

const Contact = () => {

    const handleSubmit = e =>{
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        e.preventDefault()
    }

    return (
        <div className="mt-10">
            <h1 className="text-5xl font-bold"> Form</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" className="border" name="name" />
                <br /> <br />
                <input type="email" className="border" name="email" />
                <br /> <br />
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
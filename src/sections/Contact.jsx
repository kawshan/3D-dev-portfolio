import React, {useRef, useState} from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import ContactExperience from "../components/ContactExperience.jsx";
import emailjs from '@emailjs/browser'

const Contact = () => {

    const formRef = useRef(null);

    const [formData,setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });


    const [loading,setLoading] = useState(false);


    const handleChange = (e) => {
        const {name,value} = e.target;

        setFormData({...formData, [name]: value});

    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('form submitted',formData)

        setLoading(true);
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            )
            setFormData({name:'',email:'',message:''});

        }catch (error) {
            console.log(`error in emai js`,error)
        }finally {
            setLoading(false);
        }
    }



    return (
        <div id='contact' className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="Get in touch with me" sub="📞 contact information" />


                <div className="mt-16 grid grid-cols-12">
                    <div className="col-span-5">

                        <div className="flex-center card-border rounded-xl p-10">
                            <form className="w-full flex flex-col gap-7" onSubmit={handleSubmit} ref={formRef}>
                                <div className="mb-6">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                                </div>


                                <div className="mb-6">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" id="email" name="email" placeholder="Your email" required value={formData.email} onChange={handleChange} />
                                </div>



                                <div className="mb-6">
                                    <label htmlFor="message">Message</label>
                                    <input type="text" id="message" name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange} />
                                </div>


                                <div className="mb-6">
                                    <button type="submit" disabled={loading} className="bg-white w-full text-black h-12 rounded-full">{loading ? 'sending...':'Send Email'}</button>
                                </div>


                            </form>
                        </div>


                    </div>

                    <div className="col-span-7">
                        <div className="w-full h-full bg-amber-500 hover:cursor-grab rounded-3xl overflow-hidden">
                            <ContactExperience />
                        </div>
                    </div>



                </div>



            </div>


        </div>
    )
}
export default Contact

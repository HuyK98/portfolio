import { useState, useEffect } from 'react';
import "./Contact.css"

export default function Contact() {
    const [form, setForm] = useState(() => {
        const saved = localStorage.getItem("contactForm")
        return (saved) ? JSON.parse(saved) : { name: "", email: "", message: "" }
    });

    //lưu form mỗi khi có thay đổi
    useEffect(() => {
        localStorage.setItem("contactForm", JSON.stringify(form))
    }, [form])

    function onChange(e) {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    }

    async function onSubmit(e) {
        e.preventDefault();
        try {
            const res = await fetch("/api/v1/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            const data = await res.json();
            if (data.ok) {
                alert("Message sent!");
                onClear();
            } else {
                alert("Failed!" + ("Unknown Error"));
            }
        } catch (err) {
            alert("Error: " + err.message);
        }
    }

    function onClear() {
        setForm({ name: "", email: "", message: "" });
        localStorage.removeItem("contactForm")  //xóa bản draft
    }

    return (
        <section id='contact' className='section contact'>
            <h3>Contact</h3>
            <div className='contact-grid'>
                <aside className='contact-info'>
                    <ul className='contact-list'>
                        <li><a href="mailto:huytruongdinh61@gmail.com">huytruongdinh61@gmail.com</a></li>
                        <li><a href="tel:+84942090803">(+84) 942 090 803</a></li>
                        <li><a href="https://www.linkedin.com/in/truong-dinh-huy-5b3b251b0/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/HuyK98" target="_blank" rel="noreferrer">GitHub</a></li>
                    </ul>
                </aside>

                <form className='contact-form' onSubmit={onSubmit} noValidate>
                    <div className='field'>
                        <label>Name</label>
                        <input
                            name='name'
                            placeholder='Your name...'
                            value={form.name}
                            onChange={onChange}
                        />
                    </div>

                    <div className='field'>
                        <label>Email</label>
                        <input
                            name='email'
                            placeholder='Your gmail...'
                            value={form.email}
                            onChange={onChange}
                        />
                    </div>

                    <div className='field'>
                        <label>Message</label>
                        <input
                            name='message'
                            rows={4}
                            placeholder='Your message...'
                            value={form.message}
                            onChange={onChange}
                        />
                    </div>

                    <div className='row'>
                        <button type='submit' className='btn primary'>Send</button>
                        <button type='button' className='btn' onClick={onClear}>Clear</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

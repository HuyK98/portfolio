import { useState, useEffect } from 'react';
import { api } from "../../../../../services/api";
import { useAlert } from '../../../../../context/AlertContext';
import "./Contact.css"

export default function Contact() {
    const [form, setForm] = useState(() => {
        const saved = localStorage.getItem("contactForm")
        return (saved) ? JSON.parse(saved) : { name: "", email: "", message: "" }
    });
    const [submitting, setSubmitting] = useState(false); //mac dinh nut send la false

    const { showAlert } = useAlert();

    //lưu form mỗi khi có thay đổi
    useEffect(() => {
        localStorage.setItem("contactForm", JSON.stringify(form))
    }, [form])

    function onChange(e) {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    }

    function validate() {
        const { name, email, message } = form;
        if (!name.trim() || !email.trim() || !message.trim()) {
            alert("Please fill in all fields.");
            return false;
        }
        const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!okEmail) {
            alert("Please enter a valid email.");
            return false;
        }
        if (message.trim().length < 10) {
            alert("Message should be at least 10 characters.");
            return false;
        }
        return true;
    }

    async function onSubmit(e) {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            showAlert('Vui lòng điền đầy đủ thông tin!', 'warning');
            return;
        }

        try {
            setSubmitting(true);
            const { data } = await api.post("/contact", form);

            if (data?.ok) {
                if (!data.emailSent) {
                    alert("Message saved but email delivery failed. We'll contact you soon!");
                } else {
                    showAlert('Gui tin nhan thanh cong! Cam on ban da lien he voi toi.', 'success');
                }
                onClear();
            } else {
                showAlert(data.error || "Failed to send message.", 'error');
            }
        } catch (err) {
            showAlert('Khong the gui tin nhan. Vui long thu lai sau!', 'error');
        } finally {
            setSubmitting(false);
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
                            autoComplete='name'
                            required
                        />
                    </div>

                    <div className='field'>
                        <label>Email</label>
                        <input
                            type='email'
                            name='email'
                            placeholder='Your gmail...'
                            value={form.email}
                            onChange={onChange}
                            autoComplete='email'
                            required
                        />
                    </div>

                    <div className='field'>
                        <label>Message</label>
                        <textarea
                            name='message'
                            rows={6}
                            placeholder='Your message...'
                            value={form.message}
                            onChange={onChange}
                            required
                        />
                        <small className="hint">
                            Contact for me by send gmail (min. 10 characters).
                        </small>
                    </div>

                    <div className='actions'>
                        <button type='submit' className='btn primary' disabled={submitting}>
                            {submitting ? "Sending..." : "Send"}
                        </button>
                        <button type='button' className='btn' onClick={onClear} disabled={submitting}>Clear</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

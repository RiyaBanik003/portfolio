import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify';
const Contact = () => {

  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleFocus = () => {

  }
  const handleBlur = () => {

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Riya",
        from_email: form.email,
        to_email: "riyabanik003@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_PUBLIC_KEY,
    ).then(
      () => {
        setIsLoading(false);
        setForm({ name: '', email: '', message: '' });
        toast.success("Message sent successfully!");

      }).catch((error) => {
        setIsLoading(false);
        console.log(error);
        toast.error("Failed to send message. Please try again later.");
      })
  }
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex-col'>
        <h1 className='head-text'>
          Get in Touch
        </h1>
        <form ref={formRef}
          onSubmit={handleSubmit} className='w-full flex flex-col gap-7 mt-14'>
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='John@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type='submit'
            disabled={isLoading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}

          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            closeOnClick
            pauseOnHover={false}
            draggable={false}
          />
        </form>
      </div>
    </section>
  )
}

export default Contact
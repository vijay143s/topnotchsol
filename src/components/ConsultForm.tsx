import React, { useRef, useState } from 'react';

interface ConsultFormProps {
  onSuccess?: () => void;
}
import emailjs from '@emailjs/browser';

const ConsultForm = ({ onSuccess }: ConsultFormProps) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_8d9eq4l',
        'template_if6cjo4',
        {
          from_name: form.name,
          from_email: form.email,
          from_phone: form.phone,
          company: form.company,
          quantity: form.quantity,
          message: form.message,
        },
        'c7cPitxpV5icrooZX'
      );
      setForm({ name: '', email: '', phone: '', company: '', quantity: '', message: '' });
      if (popupRef.current) {
        popupRef.current.style.display = 'block';
        setTimeout(() => {
          if (popupRef.current) popupRef.current.style.display = 'none';
          if (onSuccess) onSuccess();
        }, 1000);
      } else if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      // Optionally handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white rounded-lg shadow p-6 mb-6 relative text-gray-800">
      {/* Success Popup */}
      <div
        ref={popupRef}
        style={{ display: 'none' }}
        className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded shadow-lg text-lg font-semibold animate-fade-in"
      >
        Thank you for your message! We'll get back to you soon.
      </div>
      <h2 className="text-2xl font-bold mb-2">Consult Us</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input className="w-full border rounded p-2" placeholder="Name" name="name" value={form.name} onChange={handleChange} required />
        <input className="w-full border rounded p-2" placeholder="Email" name="email" value={form.email} onChange={handleChange} required />
        <input className="w-full border rounded p-2" placeholder="Phone" name="phone" value={form.phone} onChange={handleChange} />
                
        <textarea className="w-full border rounded p-2" placeholder="Message" name="message" value={form.message} onChange={handleChange} required />
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded w-full font-semibold text-lg" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Get a Free Quote for Bookkeeping'}
        </button>
      </form>
    </section>
  );
};

export default ConsultForm;

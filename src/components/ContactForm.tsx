"use client";
import React, { useState, useEffect } from 'react';
import { track } from '@vercel/analytics';
import emailjs from '@emailjs/browser';
import type { Dictionary } from '@/lib/dictionary';

interface ContactFormProps {
  form: Dictionary['contact'];
}

const ContactForm: React.FC<ContactFormProps> = ({ form }) => {
  const [name, setName] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [bamboozled, setBamboozled] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formSent, setFormSent] = useState<boolean>(false);

  const validateForm = () => {
    if (!name || !subject || !message || !email) {
      setError(form.errors.fields);
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError(form.errors.email);
      return false;
    }

    if(bamboozled !== '') {
      return false;
    }

    setError(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: name,
      subject,
      message,
      from_email: email,
    };

    emailjs
      .send(process.env.NEXT_PUBLIC_EMAIL_SERVICE!, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE!, templateParams, process.env.NEXT_PUBLIC_EMAIL_TOKEN)
      .then((response) => {
        console.log('Email sent successfully:', response);
        track('Email sent');
        setFormSent(true);
        // Handle success
      })
      .catch((error) => {
        console.error('Email send failed:', error);
        track('Email error');
        setError('Failed to send email. Please try again later.');
        // Handle error
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      {!formSent ? (
        <form className="contact-form text-left" onSubmit={handleSubmit}>
          <div className="w-full mb-3">
            <label>
              <span className="block font-thin uppercase tracking-wider text-sm mb-1">{form.fields.name}</span>
              <input className="w-full p-2 opacity-85 text-xs" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
          </div>
          <div className="w-full mb-3">
            <label>
              <span className="block font-thin uppercase tracking-wider text-sm mb-1">{form.fields.email}</span>
              <input className="w-full p-2 opacity-85 text-xs" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </div>
          <div className="w-full mb-3">
            <label>
              <span className="block font-thin uppercase tracking-wider text-sm mb-1">{form.fields.subject}</span>
              <input className="w-full p-2 opacity-85 text-xs" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </label>
          </div>
          <div className="w-full mb-3">
            <label>
              <span className="block font-thin uppercase tracking-wider text-sm mb-1">{form.fields.message}</span>
              <textarea className="w-full p-2 opacity-85 text-xs" value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>
          </div>
          {error && <p className="my-2 text-xs" style={{ color: 'red' }}>{error}</p>}
          <div>
            <button className="button w-full" type="submit" disabled={isSubmitting}>
              <span>{isSubmitting ? form.fields.button_sending: form.fields.button}</span>
            </button>
          </div>
          <input className="hidden" type="text" value={bamboozled} onChange={(e) => setBamboozled(e.target.value)} />
        </form>
      ) : (<div className="mt-4">{form.thankyou}</div>)}
    </>
  );
};

export default ContactForm;

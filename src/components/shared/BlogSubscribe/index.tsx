'use client';

import Image from 'next/image';
import Heading from '@/components/ui/Heading';
import { useState } from 'react';

const BlogsSubscribe = () => {
  const [form, setForm] = useState({ firstname: '', email: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message || data.error);
      setForm({ firstname: '', email: '' }); // Clear the form on success
    } catch (err) {
      alert('Something went wrong. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-white p-6 m-10 rounded-[20px] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[150px]">
      {/* Left Side: Text & Form */}
      <div className="w-full md:w-[500px] p-4 text-center md:text-left">
        <Heading title="Subscribe to our Blog" color="white" />
        <p className="mt-2 text-sm md:text-base">
          Get weekly tips and insights on how to grow your business from
          Belkins’ experts in your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder="First Name"
            value={form.firstname}
            onChange={(e) => setForm({ ...form, firstname: e.target.value })}
            className="p-3 rounded-[10px] border border-gray-600 bg-[#414040] text-white w-full"
            required
          />
          <input
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="p-3 rounded-[10px] border border-gray-600 bg-[#414040] text-white w-full"
            required
          />
          <button
            type="submit"
            className="rounded-[10px] w-full md:w-[200px] bg-orange-case p-3 text-white text-sm flex justify-center items-center hover:bg-orange-primary disabled:opacity-50"
            disabled={submitting}
          >
            {submitting ? 'Subscribing...' : 'Subscribe'}
            <Image
              src="/icons/warrow.png"
              alt="arrow-icon"
              className="ml-2 h-[10px] w-[6px]"
              height={10}
              width={15}
            />
          </button>
        </form>
      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-auto flex justify-center">
        <Image
          src="/images/subscribe.jpeg"
          alt="Subscribe"
          width={500}
          height={300}
          className="rounded-[20px] w-full max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default BlogsSubscribe;

import React, {useState}  from 'react';
import 'tailwindcss/tailwind.css';

const ContactUs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, query });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-pijet-blue">CONTACT US</h1>
      
      <p className="text-lg text-xl mb-4">
        Please use this form for general inquiries or management-related problems. For any issues related to manuscripts, please email pijet@pict.edu along with your manuscript ID for publication-related queries.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 py-5">
        <div>
          <label className="block text-lg text-xl font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-lg text-xl font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-lg text-xl font-medium text-gray-700">Query</label>
          <textarea
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your query"
            rows="4"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="bg-pijet-blue text-white p-3 rounded-md hover:bg-pijet-dark-blue">
          Submit
        </button>
      </form>

      <strong className="text-lg text-2xl mt-6">
        Get in touch: We are here for you! How can we help?
      </strong>
    </div>
  );
};

export default ContactUs;
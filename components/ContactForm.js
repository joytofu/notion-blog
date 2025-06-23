import React from 'react';

const formStyle = {
  maxWidth: 480,
  margin: '2rem auto',
  padding: '2.5rem 2rem',
  background: 'rgba(255,255,255,0.98)',
  borderRadius: 18,
  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  border: '1px solid #f0f0f0',
};

const labelStyle = {
  fontWeight: 700,
  marginBottom: 6,
  color: '#1a1a1a',
  letterSpacing: 0.2,
  fontSize: 16,
};

const inputStyle = {
  padding: '0.9rem 1.1rem',
  border: '1.5px solid #e0e0e0',
  borderRadius: 8,
  fontSize: 17,
  background: '#f7f9fa',
  transition: 'border 0.2s, box-shadow 0.2s',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
};

const textareaStyle = {
  ...inputStyle,
  minHeight: 120,
  resize: 'vertical',
};

const buttonStyle = {
  padding: '1rem 0',
  background: 'linear-gradient(90deg, #0070f3 0%, #0051a8 100%)',
  color: '#fff',
  border: 'none',
  borderRadius: 8,
  fontWeight: 800,
  fontSize: 18,
  cursor: 'pointer',
  marginTop: 10,
  boxShadow: '0 2px 8px rgba(0,112,243,0.08)',
  letterSpacing: 0.5,
  transition: 'background 0.2s, transform 0.1s',
};

const focusStyle = {
  border: '1.5px solid #0070f3',
  boxShadow: '0 0 0 2px rgba(0,112,243,0.08)',
};

function mergeStyles(base, focus) {
  return { ...base, ...focus };
}

const ContactForm = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [focus, setFocus] = React.useState({});

  const handleFocus = (field) => setFocus((f) => ({ ...f, [field]: true }));
  const handleBlur = (field) => setFocus((f) => ({ ...f, [field]: false }));

  const handleSubmit = (e) => {
    e.preventDefault();

    /* const submitAsync = async () => {
      const formData = { name, email, message };
      const endpoint = '/';

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setName('');
          setEmail('');
          setMessage('');
          alert('Message sent successfully!');
        } else {
          alert('Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    }; */

    const submitAsync = () => {
      alert('Message sent successfully!');
    }



    submitAsync();
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle} autoComplete="off">
      <h1 style={{
        textAlign: 'center',
        margin: 0,
        marginBottom: 18,
        fontWeight: 900,
        fontSize: 28,
        color: '#0070f3',
        letterSpacing: 1,
      }}>
       Contact Us
      </h1>
      <p>Have questions or feedback? Fill out the form below and we’ll get back to you soon.</p>
      <div>
        <label htmlFor="name" style={labelStyle}>Name</label>
        <input
          style={focus.name ? mergeStyles(inputStyle, focusStyle) : inputStyle}
          type="text"
          id="name"
          value={name}
          onFocus={() => handleFocus('name')}
          onBlur={() => handleBlur('name')}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" style={labelStyle}>Email</label>
        <input
          style={focus.email ? mergeStyles(inputStyle, focusStyle) : inputStyle}
          type="email"
          id="email"
          value={email}
          onFocus={() => handleFocus('email')}
          onBlur={() => handleBlur('email')}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" style={labelStyle}>Message</label>
        <textarea
          style={focus.message ? mergeStyles(textareaStyle, focusStyle) : textareaStyle}
          id="message"
          value={message}
          onFocus={() => handleFocus('message')}
          onBlur={() => handleBlur('message')}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Type your message here..."
        />
      </div>
      <button
        type="submit"
        style={buttonStyle}
        onMouseDown={e => e.currentTarget.style.transform = 'scale(0.97)'}
        onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
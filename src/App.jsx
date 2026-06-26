import { useState } from 'react';
import { User, Mail, Phone, Building2, MessageSquare, Send, CheckCircle2, Sparkles } from 'lucide-react';
import './App.css';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const N8N_WEBHOOK_URL = 'http://localhost:5678/webhook/lead-capture';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="split-card">
        {/* LEFT BRAND PANEL */}
        <div className="brand-panel">
          <div className="brand-top">
            <div className="brand-logo">
              <Sparkles size={20} />
            </div>
            <span className="brand-name">AutoBiz Automations</span>
          </div>

          <div className="brand-mid">
            <h1>Let's grow your business, together.</h1>
            <p>
              Share your details and our team will reach out with a tailored
              automation strategy for your business.
            </p>
          </div>

          <div className="brand-bottom">
            <div className="trust-item">
              <CheckCircle2 size={16} />
              <span>Response within 24 hours</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} />
              <span>No spam, ever</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} />
              <span>Free initial consultation</span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM PANEL */}
        <div className="form-panel">
          {submitted ? (
            <div className="success-state">
              <CheckCircle2 size={48} className="success-icon" />
              <h2>Thank You!</h2>
              <p>Your information has been received. Our team will reach out to you shortly.</p>
            </div>
          ) : (
            <>
              <div className="form-panel-header">
                <h2>Get In Touch</h2>
                <p>Fill in your details below</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="compact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <div className="input-wrapper">
                      <User size={16} className="input-icon" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.name && <span className="error">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <div className="input-wrapper">
                      <Phone size={16} className="input-icon" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+1 234 567 890"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.phone && <span className="error">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-wrapper">
                    <Mail size={16} className="input-icon" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name (Optional)</label>
                  <div className="input-wrapper">
                    <Building2 size={16} className="input-icon" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message (Optional)</label>
                  <div className="input-wrapper textarea-wrapper">
                    <MessageSquare size={16} className="input-icon" />
                    <textarea
                      id="message"
                      name="message"
                      rows="2"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'Submitting...' : <>Submit <Send size={15} /></>}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
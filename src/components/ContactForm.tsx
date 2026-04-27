import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    jmeno: '',
    email: '',
    telefon: '',
    obor: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || data.success === false) {
        throw new Error(data?.error || 'Chyba při odesílání formuláře');
      }

      setSubmitStatus('success');
      setFormData({ jmeno: '', email: '', telefon: '', obor: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 p-8 md:p-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Zanechte na sebe kontakt!</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="jmeno" className="block text-sm font-medium mb-2">
              Jméno <span className="text-blue-400">*</span>
            </label>
            <input
              type="text"
              id="jmeno"
              required
              value={formData.jmeno}
              onChange={(e) => setFormData({ ...formData, jmeno: e.target.value })}
              placeholder="Vaše celé jméno"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-gray-100 placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              E-mail <span className="text-blue-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="vas@email.cz"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-gray-100 placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="telefon" className="block text-sm font-medium mb-2">
              Telefon
            </label>
            <input
              type="tel"
              id="telefon"
              value={formData.telefon}
              onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
              placeholder="+420 123 456 789"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-gray-100 placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="obor" className="block text-sm font-medium mb-2">
              Váš obor <span className="text-blue-400">*</span>
            </label>
            <textarea
              id="obor"
              required
              value={formData.obor}
              onChange={(e) => setFormData({ ...formData, obor: e.target.value })}
              placeholder="Inženýr, výživový poradce, doktor…"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-gray-100 placeholder-gray-400 resize-none"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="p-4 bg-green-900/30 border border-green-700 rounded-lg text-green-400">
              Děkujeme! Formulář byl úspěšně odeslán.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-400">
              Došlo k chybě při odesílání. Zkuste to prosím znovu.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Odesílání…' : 'Odeslat zprávu'}
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}

const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwR26dfD18Csr5sqRCAD7IEiTxx4EfQB0BAvx8eeutOW-hDA2yrgIDAiNeFqWvzYy5u/exec',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

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

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

const SYSTEM_PROMPT = `Jsi přátelský AI asistent na webu HavranWeb.cz – webu Tomáše Havrana...

Odpovídej stručně, přátelsky a česky.`;

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Ahoj! 👋 Jsem AI asistent HavranWeb. Jak ti mohu pomoci?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: 'user', content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const apiMessages = newMessages.slice(-5); // jen posledních pár zpráv

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: apiMessages
        }),
      });

      const data = await response.json();

      const reply =
        data.reply || 'Omlouvám se, něco se pokazilo.';

      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Chyba spojení. Zkus to prosím znovu.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] flex flex-col rounded-3xl overflow-hidden shadow-2xl border bg-gray-950">
          
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <span className="text-white text-sm font-semibold">AI Asistent</span>
            <button onClick={() => setOpen(false)}>
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2 max-h-[400px]">
            {messages.map((msg, i) => (
              <div key={i} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
                <div className="inline-block bg-gray-800 text-white px-3 py-2 rounded-xl text-sm">
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-left text-gray-400 text-sm flex items-center gap-2">
                <Loader2 className="w-3 h-3 animate-spin" />
                Píše...
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="p-3 flex gap-2 border-t">
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Napiš zprávu..."
              className="flex-1 bg-gray-800 text-white px-2 py-1 rounded text-sm"
            />
            <button onClick={send}>
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-purple-600 text-white rounded-full flex items-center justify-center"
      >
        {open ? <X /> : <MessageCircle />}
      </button>
    </>
  );
}

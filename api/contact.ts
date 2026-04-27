export const config = { runtime: 'edge' };

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const data = await req.json();

  const response = await fetch(
    'https://script.google.com/macros/s/AKfycbwR26dfD18Csr5sqRCAD7IEiTxx4EfQB0BAvx8eeutOW-hDA2yrgIDAiNeFqWvzYy5u/exec',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();
  return new Response(JSON.stringify(result), {
    headers: { 'Content-Type': 'application/json' },
  });
}

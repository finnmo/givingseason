export async function onRequest(context) {
  const { env } = context;

  try {
    // Get all gifts
    const gifts = await env.GIFTS_KV.get('gifts', { type: 'json' }) || [];
    
    return new Response(JSON.stringify(gifts), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 
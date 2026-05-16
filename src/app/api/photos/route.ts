import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.UNSPLASH_CLIENT_ID;

  if (!clientId) {
    return NextResponse.json({ error: 'Unsplash client ID not configured' }, { status: 500 });
  }

  const response = await fetch(
    `https://api.unsplash.com/users/gen035/photos?per_page=50&client_id=${clientId}`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    return NextResponse.json({ error: `Unsplash request failed: ${response.status}` }, { status: response.status });
  }

  const data = await response.json();
  return NextResponse.json(data);
}

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://dash.detriot.cloud/api/plans', {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`External API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Proxy error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

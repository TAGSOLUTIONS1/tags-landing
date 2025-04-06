import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Subscribe from '@/models/Subscribe';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectToDatabase();
    const subscribe = new Subscribe(body);
    await subscribe.save();

    return NextResponse.json(
      { message: 'User Subscribed Successfully!' },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 },
    );
  }
}

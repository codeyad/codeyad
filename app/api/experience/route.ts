import { NextResponse } from 'next/server'
import experiences from '../../data/experiences.json'

export async function GET(request: Request) {
	return NextResponse.json({ experiences })
}

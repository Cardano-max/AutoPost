import { type NextRequest, NextResponse } from 'next/server';

// Sample festival data
const festivals = [
  {
    id: 'f1',
    name: 'Diwali',
    date: '2025-10-31',
    type: 'Religious',
    region: 'Pan India',
    description: 'Festival of Lights',
    image: 'https://example.com/diwali.jpg'
  },
  {
    id: 'f2',
    name: 'Holi',
    date: '2026-03-10',
    type: 'Religious',
    region: 'Pan India',
    description: 'Festival of Colors',
    image: 'https://example.com/holi.jpg'
  },
  {
    id: 'f3',
    name: 'Independence Day',
    date: '2025-08-15',
    type: 'National',
    region: 'Pan India',
    description: 'National holiday celebrating independence',
    image: 'https://example.com/independence.jpg'
  },
  {
    id: 'f4',
    name: 'Ganesh Chaturthi',
    date: '2025-09-03',
    type: 'Religious',
    region: 'Pan India',
    description: 'Celebration of Lord Ganesha',
    image: 'https://example.com/ganesh.jpg'
  },
  {
    id: 'f5',
    name: 'Onam',
    date: '2025-08-26',
    type: 'Regional',
    region: 'Kerala',
    description: 'Harvest festival of Kerala',
    image: 'https://example.com/onam.jpg'
  }
];

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const month = searchParams.get('month');
    const year = searchParams.get('year');
    const region = searchParams.get('region');
    const type = searchParams.get('type');

    // Filter festivals based on query parameters
    let filteredFestivals = [...festivals];

    if (month) {
      const monthNum = Number.parseInt(month);
      filteredFestivals = filteredFestivals.filter(festival => {
        const festivalDate = new Date(festival.date);
        return festivalDate.getMonth() + 1 === monthNum; // Month is 0-indexed in JS Date
      });
    }

    if (year) {
      const yearNum = Number.parseInt(year);
      filteredFestivals = filteredFestivals.filter(festival => {
        const festivalDate = new Date(festival.date);
        return festivalDate.getFullYear() === yearNum;
      });
    }

    if (region) {
      filteredFestivals = filteredFestivals.filter(festival =>
        festival.region.toLowerCase().includes(region.toLowerCase())
      );
    }

    if (type) {
      filteredFestivals = filteredFestivals.filter(festival =>
        festival.type.toLowerCase() === type.toLowerCase()
      );
    }

    // Sort by date (closest first)
    filteredFestivals.sort((a, b) =>
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    return NextResponse.json(filteredFestivals);
  } catch (error) {
    console.error('Error fetching festivals:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

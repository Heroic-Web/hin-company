import { NextResponse } from "next/server";

let campaigns: any[] = [];

export async function POST(req: Request) {
  const body = await req.json();

  const newCampaign = {
    id: Date.now(),
    name: body.name,
    service: body.service,
  };

  campaigns.push(newCampaign);

  return NextResponse.json(newCampaign);
}

export async function GET() {
  return NextResponse.json(campaigns);
}

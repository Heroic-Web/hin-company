import { NextResponse } from "next/server"

export async function POST(req: Request) {

  try {

    const body = await req.json()

    const { service, reseller } = body

    console.log("Click tracked:", {
      service,
      reseller,
      time: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true
    })

  } catch (error) {

    return NextResponse.json(
      { success: false, error: "Tracking failed" },
      { status: 500 }
    )

  }

}
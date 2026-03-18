import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

// GET all bulk orders (admin only)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = searchParams.get("limit") || 100
    const offset = searchParams.get("offset") || 0
    const status = searchParams.get("status")

    let query = supabase
      .from("bulk_orders")
      .select("*", { count: "exact" })

    if (status) {
      query = query.eq("status", status)
    }

    const { data, error, count } = await query
      .range(parseInt(offset), parseInt(offset) + parseInt(limit) - 1)
      .order("created_at", { ascending: false })

    if (error) throw error

    return NextResponse.json({ data, count }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// POST new bulk order
export async function POST(request) {
  try {
    const body = await request.json()

    // Insert bulk order
    const { data, error } = await supabase
      .from("bulk_orders")
      .insert([body])
      .select()

    if (error) throw error

    // TODO: Send email notification to admin and client
    // This will be implemented with email service (Resend/SendGrid)

    return NextResponse.json(data[0], { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

// GET all certifications
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = searchParams.get("limit") || 100
    const offset = searchParams.get("offset") || 0

    const { data, error, count } = await supabase
      .from("certifications")
      .select("*", { count: "exact" })
      .eq("status", "active")
      .range(parseInt(offset), parseInt(offset) + parseInt(limit) - 1)
      .order("sort_order", { ascending: true })

    if (error) throw error

    return NextResponse.json({ data, count }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// POST new certification
export async function POST(request) {
  try {
    const body = await request.json()

    const { data, error } = await supabase
      .from("certifications")
      .insert([body])
      .select()

    if (error) throw error

    return NextResponse.json(data[0], { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

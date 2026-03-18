import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

// GET single certification
export async function GET(request, { params }) {
  try {
    const { data, error } = await supabase
      .from("certifications")
      .select("*")
      .eq("id", params.id)
      .single()

    if (error) throw error

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// PUT update certification
export async function PUT(request, { params }) {
  try {
    const body = await request.json()

    const { data, error } = await supabase
      .from("certifications")
      .update(body)
      .eq("id", params.id)
      .select()

    if (error) throw error

    return NextResponse.json(data[0], { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// DELETE certification
export async function DELETE(request, { params }) {
  try {
    const { error } = await supabase
      .from("certifications")
      .delete()
      .eq("id", params.id)

    if (error) throw error

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

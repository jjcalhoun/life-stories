// ─────────────────────────────────────────────────────────────────────────
//  PASTE YOUR SUPABASE DETAILS HERE
//
//  Find these in your Supabase project:
//    Settings  ->  API
//
//  The "anon public" key is safe to put in front-end code — it only allows
//  the actions you permit through Row Level Security (set up in the guide).
// ─────────────────────────────────────────────────────────────────────────

const SUPABASE_URL = "https://YOUR-PROJECT-ref.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwYXF0Ynlja3Vxd29jemNjd2h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwNTkwODAsImV4cCI6MjA5NjYzNTA4MH0.88JlnWHfnYAgZfYJWFTs0Wl729hC1_4zA9OBMOvBBec";

// A private word only you know. Anyone visiting admin.html must type this
// to view responses. Change it to something only you would guess.
const ADMIN_PASSPHRASE = "D5a1t2a3!";

if (typeof module !== "undefined" && module.exports) {
  module.exports = { SUPABASE_URL, SUPABASE_ANON_KEY, ADMIN_PASSPHRASE };
}

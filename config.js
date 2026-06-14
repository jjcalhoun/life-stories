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
const SUPABASE_ANON_KEY = "YOUR-ANON-PUBLIC-KEY";

// A private word only you know. Anyone visiting admin.html must type this
// to view responses. Change it to something only you would guess.
const ADMIN_PASSPHRASE = "change-this-to-something-secret";

if (typeof module !== "undefined" && module.exports) {
  module.exports = { SUPABASE_URL, SUPABASE_ANON_KEY, ADMIN_PASSPHRASE };
}

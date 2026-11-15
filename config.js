// ====== Connexion Supabase ======
const SUPABASE_URL = 'https://exzrbektcftpsanysclz.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_oQxEq_c9GYWmAvJj-iAV3w_gfFQWt7M';
// (clé "publishable" : elle peut être publique. Ne mets JAMAIS la clé "secret" / "service_role" ici.)
// =================================

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Protège contre l'injection de code dans les textes saisis par les candidats
function esc(v) {
  return String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// Profil du recruteur connecté (null si personne n'est connecté)
async function getProfile() {
  const { data: { session } } = await sb.auth.getSession();
  if (!session) return null;
  const { data } = await sb.from('profiles').select('*').eq('id', session.user.id).single();
  return data ? { ...data, user: session.user } : null;
}

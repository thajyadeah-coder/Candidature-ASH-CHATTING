// ====== Connexion Supabase ======
// Remplace les deux valeurs ci-dessous par celles de ton projet
// (Supabase > Project Settings > API). Utilise la clé "anon / public",
// jamais la clé "service_role".
const SUPABASE_URL = 'https://exzrbektcftpsanysclz.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_oQxEq_c9GYWmAvJj-iAV3w_gfFQWt7M';

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Renvoie le profil du recruteur connecté (ou null)
async function getProfile() {
  const { data: { session } } = await sb.auth.getSession();
  if (!session) return null;
  const { data } = await sb.from('profiles').select('*').eq('id', session.user.id).maybeSingle();
  if (!data) return null;
  return { ...data, email: data.email || session.user.email };
}

async function logout() {
  await sb.auth.signOut();
  location.reload();
}

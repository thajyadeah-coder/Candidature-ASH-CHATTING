// ====== ASH Chatting : textes FR / EN + petites fonctions communes ======
// Pour ajouter une langue : copie un bloc (fr ou en), traduis-le, puis ajoute
// une <option> dans les sélecteurs de langue des pages.

var I18N = {
  fr: {
    'logout': 'Déconnexion',
    'opt.choose': 'Choisir...',
    'opt.chooseFirst': "Choisir d'abord...",

    'st.nouveau': 'Nouveau', 'st.en_revue': 'En revue', 'st.entretien': 'Entretien',
    'st.accepte': 'Accepté', 'st.refuse': 'Refusé',

    'v.Homme': 'Homme', 'v.Femme': 'Femme', 'v.Messenger': 'Messenger', 'v.WhatsApp': 'WhatsApp',
    'v.Oui': 'Oui', 'v.Non': 'Non',
    'v.Jour': 'Jour', 'v.Soir': 'Soir', 'v.Nuit': 'Nuit', 'v.Flexible': 'Flexible',
    'v.Local': 'Local', 'v.En ligne': 'En ligne',
    'v.debutant': 'Débutant', 'v.experimente': 'Expérimenté',

    // ---------- Page candidature ----------
    'title.index': 'ASH Chatting – Candidature',
    'c.hero.title': "Rejoins l'équipe ASH Chatting",
    'c.hero.sub': "Remplis le formulaire en quelques minutes. Aucun compte à créer : à la fin, tu reçois un ID pour suivre ta candidature.",
    'c.nav.track': 'Suivre ma candidature',
    'c.track.title': 'Déjà candidat ?',
    'c.track.hint': 'Entre ton ID pour retrouver ta candidature et voir où elle en est.',
    'c.track.ph': 'ASH-XXXX-XXXX',
    'c.track.btn': 'Retrouver',
    'c.track.notfound': "Aucune candidature trouvée avec cet ID. Vérifie qu'il est bien écrit.",
    'c.formTitle': 'Formulaire de candidature',
    'c.horodateur': 'Horodateur (automatique)',
    'c.gender': 'Es-tu une femme ou un homme ? *',
    'c.fullName': 'Nom et prénom *',
    'c.age': 'Âge * (18 ans minimum)',
    'c.email': 'Ton e-mail * (pour recevoir tes accès)',
    'c.contactType': 'Messenger ou WhatsApp ? *',
    'c.contactLabel': 'Ton Messenger / WhatsApp *',
    'c.contactLabelWA': 'Ton numéro WhatsApp *',
    'c.contactLabelMS': 'Ton Messenger (nom du profil ou lien) *',
    'c.contactNone': "Sélectionne d'abord Messenger ou WhatsApp",
    'c.contactWA': '+261 ...',
    'c.contactMS': 'Nom ou lien de ton profil Messenger',
    'c.discord': 'Ton @ Discord *',
    'c.studies': 'Quelles études as-tu faites ? *',
    'c.job': 'As-tu un job en ce moment ? *',
    'c.shift': 'Quel shift préfères-tu ? *',
    'c.workMode': 'Préfères-tu chatter en local ou en ligne ? *',
    'c.level': 'Quel est ton niveau en chatting ? *',
    'c.level.debutant': 'Débutant',
    'c.level.debutant.d': "Je n'ai encore jamais fait de chatting",
    'c.level.experimente': 'Expérimenté',
    'c.level.experimente.d': "J'ai déjà travaillé comme chatteur",
    'c.experience': 'Donne-moi ton expérience en chatting et ton expérience professionnelle *',
    'c.experience.hint': "Débutant ? Parle simplement de ton parcours scolaire ou professionnel.",
    'c.motivation': 'Pourquoi veux-tu travailler comme chatter ? (explique en plusieurs phrases) *',
    'c.submit': 'Envoyer ma candidature',
    'c.update': 'Enregistrer mes modifications',
    'c.saved': 'Modifications enregistrées.',
    'c.ok.title': 'Candidature envoyée !',
    'c.ok.text': "Voici ton ID de candidature. Garde-le précieusement : c'est lui qui te permet de revenir voir ton statut.",
    'c.ok.copy': "Copier l'ID",
    'c.ok.copied': 'Copié !',
    'c.ok.warn': "Ne partage cet ID avec personne : il donne accès à ta candidature.",
    'c.ok.view': 'Voir ma candidature',
    'c.yourId': 'Ton ID',
    'c.status': 'Statut :',
    'c.new': 'Nouvelle candidature',
    'c.err.missing_field': 'Merci de remplir tous les champs obligatoires.',
    'c.err.invalid_age': 'Tu dois avoir au moins 18 ans (et indiquer un âge valide).',
    'c.err.invalid_email': "Cette adresse e-mail n'est pas valide.",
    'c.err.too_long': 'Un des textes est trop long.',
    'c.err.already_exists': "Une candidature existe déjà avec cet e-mail. Retrouve-la avec ton ID, ou contacte le recruteur si tu l'as perdu.",
    'c.err.locked': "Ta candidature est en cours de traitement, elle ne peut plus être modifiée.",
    'c.err.not_found': "Candidature introuvable.",
    'c.err.generic': 'Une erreur est survenue. Réessaie dans un instant.',
    'ag.info.nouveau': "Candidature reçue. Tu peux encore la modifier tant que le recruteur ne l'a pas ouverte.",
    'ag.info.en_revue': "Ton dossier est en cours d'examen par l'équipe.",
    'ag.info.entretien': 'Bonne nouvelle ! Tu as été retenu pour un entretien. Nous te contacterons.',
    'ag.info.accepte': 'Félicitations, ta candidature est acceptée ! Nous te contacterons très vite.',
    'ag.info.refuse': "Ta candidature n'a pas été retenue cette fois. Merci pour ton intérêt.",

    // ---------- Espace recruteur ----------
    'title.admin': 'ASH Chatting – Espace recruteur',
    'ad.login.title': 'Espace recruteur',
    'ad.login.sub': "Connexion réservée à l'équipe de recrutement.",
    'ad.email': 'Email', 'ad.password': 'Mot de passe',
    'ad.login.btn': 'Se connecter',
    'ad.login.bad': 'Email ou mot de passe incorrect.',
    'ad.login.notAdmin': "Ce compte n'a pas accès à l'espace recruteur.",
    'ad.recruiter': '· Recruteur',
    'ad.total': 'Total',
    'ph.search': 'Rechercher (nom, ID, email, Discord, contact...)',
    'ad.allStatus': 'Tous les statuts', 'ad.allGender': 'Tous les sexes', 'ad.allShift': 'Tous les shifts',
    'ad.allMode': 'Local et en ligne', 'ad.allJob': 'Job : tous', 'ad.allLevel': 'Tous les niveaux',
    'ad.jobYes': 'A un job', 'ad.jobNo': 'Sans job',
    'ad.sort.recent': 'Tri : plus récentes', 'ad.sort.old': 'Tri : plus anciennes',
    'ad.sort.name': 'Tri : nom A → Z', 'ad.sort.ageAsc': 'Tri : âge croissant',
    'ad.sort.ageDesc': 'Tri : âge décroissant', 'ad.sort.status': 'Tri : par statut',
    'ad.reset': 'Réinitialiser', 'ad.export': 'Exporter CSV', 'ad.refresh': 'Actualiser',
    'ad.results': '{n} résultat(s) sur {total}',
    'th.candidate': 'Candidat', 'th.gender': 'Sexe', 'th.age': 'Âge', 'th.contact': 'Contact',
    'th.level': 'Niveau', 'th.shift': 'Shift', 'th.mode': 'Mode', 'th.status': 'Statut', 'th.timestamp': 'Horodateur',
    'ad.empty': 'Aucune candidature.',
    'ad.statusLabel': 'Statut',
    'ad.notes': 'Notes internes (invisibles pour le candidat)',
    'ad.save': 'Enregistrer', 'ad.delete': 'Supprimer', 'ad.saved': 'Enregistré.',
    'ad.confirmDelete': 'Supprimer définitivement cette candidature ?',
    'lb.created_at': 'Horodateur', 'lb.public_id': 'ID candidat', 'lb.email': 'Email', 'lb.gender': 'Sexe', 'lb.age': 'Âge',
    'lb.level': 'Niveau', 'lb.contact_type': 'Messenger / WhatsApp', 'lb.contact_value': 'Contact', 'lb.discord': '@ Discord',
    'lb.studies': 'Études', 'lb.current_job': 'Job actuel', 'lb.shift': 'Shift préféré',
    'lb.work_mode': 'Local / En ligne', 'lb.experience': 'Expérience chatting et pro', 'lb.motivation': 'Motivation'
  },

  en: {
    'logout': 'Log out',
    'opt.choose': 'Choose...',
    'opt.chooseFirst': 'Choose first...',

    'st.nouveau': 'New', 'st.en_revue': 'Under review', 'st.entretien': 'Interview',
    'st.accepte': 'Accepted', 'st.refuse': 'Declined',

    'v.Homme': 'Man', 'v.Femme': 'Woman', 'v.Messenger': 'Messenger', 'v.WhatsApp': 'WhatsApp',
    'v.Oui': 'Yes', 'v.Non': 'No',
    'v.Jour': 'Day', 'v.Soir': 'Evening', 'v.Nuit': 'Night', 'v.Flexible': 'Flexible',
    'v.Local': 'On-site', 'v.En ligne': 'Online',
    'v.debutant': 'Beginner', 'v.experimente': 'Experienced',

    // ---------- Application page ----------
    'title.index': 'ASH Chatting – Application',
    'c.hero.title': 'Join the ASH Chatting team',
    'c.hero.sub': 'Fill in the form in a few minutes. No account needed: at the end you get an ID to follow your application.',
    'c.nav.track': 'Track my application',
    'c.track.title': 'Already applied?',
    'c.track.hint': 'Enter your ID to find your application and see where it stands.',
    'c.track.ph': 'ASH-XXXX-XXXX',
    'c.track.btn': 'Find it',
    'c.track.notfound': 'No application found with this ID. Check that it is spelled correctly.',
    'c.formTitle': 'Application form',
    'c.horodateur': 'Timestamp (automatic)',
    'c.gender': 'Are you a woman or a man? *',
    'c.fullName': 'First and last name *',
    'c.age': 'Age * (18 or older)',
    'c.email': 'Your email * (to receive your access)',
    'c.contactType': 'Messenger or WhatsApp? *',
    'c.contactLabel': 'Your Messenger / WhatsApp *',
    'c.contactLabelWA': 'Your WhatsApp number *',
    'c.contactLabelMS': 'Your Messenger (profile name or link) *',
    'c.contactNone': 'Select Messenger or WhatsApp first',
    'c.contactWA': '+261 ...',
    'c.contactMS': 'Name or link of your Messenger profile',
    'c.discord': 'Your Discord @ *',
    'c.studies': 'What studies have you done? *',
    'c.job': 'Do you currently have a job? *',
    'c.shift': 'Which shift do you prefer? *',
    'c.workMode': 'Do you prefer to chat on-site or online? *',
    'c.level': 'What is your chatting level? *',
    'c.level.debutant': 'Beginner',
    'c.level.debutant.d': "I've never done chatting before",
    'c.level.experimente': 'Experienced',
    'c.level.experimente.d': "I've already worked as a chatter",
    'c.experience': 'Tell me about your chatting experience and your professional experience *',
    'c.experience.hint': 'Beginner? Simply talk about your school or work background.',
    'c.motivation': 'Why do you want to work as a chatter? (explain in several sentences) *',
    'c.submit': 'Submit my application',
    'c.update': 'Save my changes',
    'c.saved': 'Changes saved.',
    'c.ok.title': 'Application submitted!',
    'c.ok.text': 'Here is your application ID. Keep it safe: it is how you come back to check your status.',
    'c.ok.copy': 'Copy ID',
    'c.ok.copied': 'Copied!',
    'c.ok.warn': 'Do not share this ID with anyone: it gives access to your application.',
    'c.ok.view': 'View my application',
    'c.yourId': 'Your ID',
    'c.status': 'Status:',
    'c.new': 'New application',
    'c.err.missing_field': 'Please fill in all required fields.',
    'c.err.invalid_age': 'You must be at least 18 (and enter a valid age).',
    'c.err.invalid_email': 'This email address is not valid.',
    'c.err.too_long': 'One of the texts is too long.',
    'c.err.already_exists': 'An application already exists with this email. Find it with your ID, or contact the recruiter if you lost it.',
    'c.err.locked': 'Your application is being processed and can no longer be edited.',
    'c.err.not_found': 'Application not found.',
    'c.err.generic': 'Something went wrong. Please try again in a moment.',
    'ag.info.nouveau': 'Application received. You can still edit it until the recruiter opens it.',
    'ag.info.en_revue': 'Your file is being reviewed by the team.',
    'ag.info.entretien': 'Good news! You have been selected for an interview. We will contact you.',
    'ag.info.accepte': 'Congratulations, your application has been accepted! We will contact you very soon.',
    'ag.info.refuse': 'Your application was not selected this time. Thank you for your interest.',

    // ---------- Recruiter area ----------
    'title.admin': 'ASH Chatting – Recruiter area',
    'ad.login.title': 'Recruiter area',
    'ad.login.sub': 'Access restricted to the recruitment team.',
    'ad.email': 'Email', 'ad.password': 'Password',
    'ad.login.btn': 'Log in',
    'ad.login.bad': 'Incorrect email or password.',
    'ad.login.notAdmin': 'This account has no access to the recruiter area.',
    'ad.recruiter': '· Recruiter',
    'ad.total': 'Total',
    'ph.search': 'Search (name, ID, email, Discord, contact...)',
    'ad.allStatus': 'All statuses', 'ad.allGender': 'All genders', 'ad.allShift': 'All shifts',
    'ad.allMode': 'On-site & online', 'ad.allJob': 'Job: any', 'ad.allLevel': 'All levels',
    'ad.jobYes': 'Has a job', 'ad.jobNo': 'No job',
    'ad.sort.recent': 'Sort: newest first', 'ad.sort.old': 'Sort: oldest first',
    'ad.sort.name': 'Sort: name A → Z', 'ad.sort.ageAsc': 'Sort: age ascending',
    'ad.sort.ageDesc': 'Sort: age descending', 'ad.sort.status': 'Sort: by status',
    'ad.reset': 'Reset', 'ad.export': 'Export CSV', 'ad.refresh': 'Refresh',
    'ad.results': '{n} result(s) out of {total}',
    'th.candidate': 'Candidate', 'th.gender': 'Gender', 'th.age': 'Age', 'th.contact': 'Contact',
    'th.level': 'Level', 'th.shift': 'Shift', 'th.mode': 'Mode', 'th.status': 'Status', 'th.timestamp': 'Timestamp',
    'ad.empty': 'No applications.',
    'ad.statusLabel': 'Status',
    'ad.notes': 'Internal notes (not visible to the candidate)',
    'ad.save': 'Save', 'ad.delete': 'Delete', 'ad.saved': 'Saved.',
    'ad.confirmDelete': 'Permanently delete this application?',
    'lb.created_at': 'Timestamp', 'lb.public_id': 'Candidate ID', 'lb.email': 'Email', 'lb.gender': 'Gender', 'lb.age': 'Age',
    'lb.level': 'Level', 'lb.contact_type': 'Messenger / WhatsApp', 'lb.contact_value': 'Contact', 'lb.discord': 'Discord @',
    'lb.studies': 'Studies', 'lb.current_job': 'Current job', 'lb.shift': 'Preferred shift',
    'lb.work_mode': 'On-site / Online', 'lb.experience': 'Chatting & professional experience', 'lb.motivation': 'Motivation'
  }
};

var STATUT_KEYS = ['nouveau', 'en_revue', 'entretien', 'accepte', 'refuse'];

var LANG = 'fr';
try {
  var savedLang = localStorage.getItem('ash_lang');
  LANG = savedLang || ((navigator.language || 'fr').slice(0, 2));
} catch (e) {}
if (!I18N[LANG]) LANG = 'fr';

function t(key) {
  return (I18N[LANG] && I18N[LANG][key]) ?? I18N.fr[key] ?? key;
}
// Traduit une valeur stockée en base (ex : "Homme" -> "Man")
function tv(value) {
  if (!value) return '';
  var k = 'v.' + value;
  return (I18N[LANG] && I18N[LANG][k]) ?? value;
}
function statut(k) { return t('st.' + k); }
function locale() { return LANG === 'fr' ? 'fr-FR' : 'en-GB'; }

// Échappe le texte avant de l'afficher dans du HTML
function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function applyI18n() {
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(function (el) { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll('.lang-select').forEach(function (s) { s.value = LANG; });
  if (document.body && document.body.dataset.title) document.title = t(document.body.dataset.title);
}

function setLang(l) {
  if (!I18N[l]) return;
  LANG = l;
  try { localStorage.setItem('ash_lang', l); } catch (e) {}
  applyI18n();
  document.dispatchEvent(new Event('langchange'));
}

# Checklist — modifications demandées par la cliente (MODIFS_TEXTES.pdf)

Suivi des points "partiellement faits" et "pas faits" identifiés lors de l'audit du 2026-10-26.
Hors périmètre (volontairement non traités ici) : vérification des liens annulation/modif dans les emails Calendly (réglage côté compte Calendly, pas du code), et tout ce qui concerne la section Vidéos.

## Partiellement fait → à finaliser

- [x] **Nav du header/mobile** renommée dans le thème de la maison (`src/lib/nav.ts`)
- [x] **Note Google** affichée en dur à **4,9/5** au lieu de la moyenne calculée sur l'échantillon d'avis (`Temoignages.tsx`)
- [x] **Footer** restructuré selon la proposition cliente : colonnes "Navigation / Liens utiles / Réseaux sociaux", copyright "© 2026 The Dione's. Tous droits réservés." (`Footer.tsx`)
- [x] **Ordre des sections** de la home réaligné sur la nouvelle arborescence du PDF (`src/app/page.tsx`)

## Pas fait → réalisé maintenant

- [x] **Nouvelle section "Entrez, prenez place"** ajoutée entre le Hero et "Vous vous reconnaissez peut-être" (`PrenezPlace.tsx`). ⚠️ Le PDF ne contenait qu'un mockup image pour cette section (pas de texte extractible) : le texte est une ébauche de ma part, **à relire/valider avec la cliente**.
- [x] **Aperçu "Le Journal" sur la page d'accueil** : 3 derniers articles affichés sur PC, le dernier seul sur mobile, lien vers le blog complet (`JournalPreview.tsx`)
- [x] **Page de réservation dédiée avec Calendly intégré** (`/reservation`) : calendrier Calendly embarqué directement dans la page (plus de popup). Tous les boutons "Réserver" / CTA de prise de rendez-vous y renvoient désormais.
- [ ] **Logo "The Dione's" en police Amsterdam One** — **bloqué** : cette police est payante (licence commerciale requise auprès du designer), je n'ai pas pu trouver de version libre de droit ni téléchargeable légalement pour un usage commercial. Il faut soit acheter la licence et fournir le fichier de police, soit choisir une police de substitution. Non implémenté, en attente de ta décision.

## Découvert pendant l'implémentation (hors liste initiale)

- [x] **Bloc "Une question ? Écrivez-nous" + bouton "Nous contacter"** (section 9 du PDF) manquait entièrement — ajouté dans la FAQ. ⚠️ Pas de formulaire de contact ni d'adresse email trouvés dans le projet : le bouton renvoie vers Instagram (seul canal de contact vérifié existant). À remplacer par un vrai formulaire/email dès que décidé.

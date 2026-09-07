export type Review = {
  id: string;
  type: "google" | "message";
  rating: number | null;
  author: string | null;
  text: string;
  featured?: boolean;
};

export const reviews: Review[] = [
  {
    id: "g1",
    type: "google",
    rating: 5,
    author: null,
    featured: false,
    text: "Je suis accompagnée par les Dione's depuis octobre 2025. Je peux dire sans hésiter que j'ai trouvé une personne à l'écoute et très compréhensive. Sa douceur et sa manière d'aborder nos problématiques sont remarquables. Depuis qu'elle m'accompagne, j'ai progressé dans de nombreux domaines, notamment en communication et dans mon travail personnel. Je ne peux que la remercier et vous conseille de prendre rendez-vous.",
  },
  {
    id: "g2",
    type: "google",
    rating: 5,
    author: null,
    featured: false,
    text: "J'ai eu le plaisir d'être accompagnée par The Dione's avec d'autres femmes. Ce qui est remarquable tout de suite, c'est l'écoute et surtout la bienveillance avec laquelle vous êtes amené·e à vous interroger, comprendre votre parcours et vous mettre en mouvement pour une version de vous plus assumée. Merci Fatou.",
  },
  {
    id: "g3",
    type: "google",
    rating: 5,
    author: "Sabrina B.",
    featured: true,
    text: "Après deux ans de suivi, je ne peux que recommander The Dione's les yeux fermés. C'est une professionnelle exceptionnelle, d'une bienveillance, d'une générosité et d'une humanité rares. Elle s'est toujours montrée disponible, à l'écoute et profondément investie ; elle prend le temps de répondre à chaque question avec patience, douceur et beaucoup de professionnalisme. Son accompagnement m'a énormément apporté et je lui en serai toujours reconnaissante.",
  },
  {
    id: "g4",
    type: "google",
    rating: 5,
    author: null,
    featured: true,
    text: "Très bon thérapeute, Fatou est d'une grande sagesse et d'une générosité. Elle a su voir le problème dès la première séance et donne de bons conseils à suivre ! Je la recommande vivement !",
  },
  {
    id: "g5",
    type: "google",
    rating: 5,
    author: null,
    featured: false,
    text: "J'ai connu Fatou au début de mon mariage, à une période où notre couple traversait des difficultés. Avec le recul, je peux dire que son accompagnement a été précieux. Ce qui fait sa force : son extrême bienveillance, sa capacité d'analyse, son écoute et son absence totale de jugement. Elle ne donne pas de réponses toutes faites, elle pose les bonnes questions et nous aide à prendre conscience de nos propres schémas. Je la recommande les yeux fermés.",
  },
  {
    id: "g6",
    type: "google",
    rating: 5,
    author: null,
    featured: false,
    text: "Je recommande Fatou les yeux fermés. J'ai eu la chance d'être accompagnée par cette professionnelle d'une grande qualité humaine : bienveillante, à l'écoute, disponible et extrêmement compétente. Chaque séance a été un véritable espace de réflexion, d'apaisement et d'évolution. Je m'y suis toujours sentie accueillie sans jugement, comprise et respectée. Un immense merci pour cet accompagnement précieux.",
  },
  {
    id: "g7",
    type: "google",
    rating: 5,
    author: null,
    featured: false,
    text: "Je recommande Fatou Dione les yeux fermés, pour son sens de l'écoute sans jugement, sa disponibilité et son ouverture d'esprit qui m'ont permis de mettre des mots sur mes maux, à une période où j'étais perdue et totalement désorientée. Avec Fatou, j'ai eu une oreille attentive, une personne de confiance, qui maîtrise l'accompagnement de couple et bien au-delà. Merci infiniment pour tout.",
  },
  {
    id: "g8",
    type: "google",
    rating: 5,
    author: null,
    featured: true,
    text: "J'ai rencontré une femme authentique, d'une douceur rare, portée par une vision et une mission qu'elle incarne avec excellence. Engagée auprès des femmes, des couples et des familles en reconstruction, elle avance avec une profondeur qui inspire et transforme. Son travail est précis, humain et profondément structurant. Je la recommande sans réserve.",
  },
  {
    id: "m1",
    type: "message",
    rating: null,
    author: null,
    featured: false,
    text: "Bonjour Fatou, je voulais te remercier infiniment pour avoir accompagné ma sœur dans sa relation de couple qui était conflictuelle. Tu as eu des mots justes et francs à son égard, et cela lui a permis de se remettre en question et de regarder les choses sous un autre angle. Elle a su entendre et comprendre ce qu'elle avait du mal à voir. Merci à toi et à Monsieur Dione.",
  },
  {
    id: "m2",
    type: "message",
    rating: null,
    author: null,
    featured: false,
    text: "Bonsoir Madame Dione, j'espère que toute la famille va bien. J'ai suivi les conseils, et c'est cette phrase que tu m'as dite qui a tout changé : « Ce que tu attends de lui, il faut que toi-même tu te mettes en capacité de le faire. » En parlant avec humilité et amour comme tu me l'as dit, la paix est revenue. Ma relation reprend de plus belle, et c'est une méthode qui me prend moins d'énergie. Merci vraiment.",
  },
];

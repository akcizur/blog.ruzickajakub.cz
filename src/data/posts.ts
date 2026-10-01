export type Post = {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'Dobrý produkt začíná dřív než první řádek kódu',
    excerpt: 'Než vznikne první komponenta, musí být jasný problém, uživatel a směr. Čím lépe je definovaný základ, tím jednodušší bývá design i samotný vývoj.',
    category: 'Design',
    date: '30. 9. 2026',
    readTime: '7 min',
  },
  {
    id: 2,
    title: 'Kdy má smysl psát vlastní komponentu',
    excerpt: 'Ne každá interakce potřebuje další abstrakci. Jak poznat, co patří do design systému, co má zůstat lokální a kde vlastní řešení skutečně přinese hodnotu.',
    category: 'Code',
    date: '25. 9. 2026',
    readTime: '6 min',
  },
  {
    id: 3,
    title: '60 FPS není efekt, ale způsob práce',
    excerpt: 'Plynulé rozhraní vzniká kombinací renderování, layoutu, animací, assetů a práce s interakcí. Výkon se skládá z desítek malých rozhodnutí, ne z jednoho kouzelného triku.',
    category: 'Development',
    date: '19. 9. 2026',
    readTime: '8 min',
  },
  {
    id: 4,
    title: 'Design systém má rozhodování ztišit, ne přidat',
    excerpt: 'Dobrý systém odstraňuje opakované volby, drží vizuální jazyk pohromadě a dává každé nové obrazovce pevný základ. Méně tření znamená víc prostoru pro samotnou práci.',
    category: 'UI/UX',
    date: '12. 9. 2026',
    readTime: '7 min',
  },
  {
    id: 5,
    title: 'Jednoduché UI bývá nejtěžší UI',
    excerpt: 'Minimalismus nic neschová. Typografie, spacing, hierarchie, kontrast, pohyb i text musí fungovat společně, protože každé slabé rozhodnutí je okamžitě vidět.',
    category: 'Branding',
    date: '5. 9. 2026',
    readTime: '6 min',
  },
  {
    id: 6,
    title: 'Od nápadu k funkčnímu buildu bez zbytečné okliky',
    excerpt: 'Dobrá práce vzniká z jasných omezení. Zmenši neznámé, postav nejmenší smysluplnou část, otestuj ji brzy a další rozhodnutí nech vycházet z výsledku.',
    category: 'Full-stack',
    date: '29. 8. 2026',
    readTime: '8 min',
  },
]

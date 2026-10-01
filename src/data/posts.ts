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
    title: 'Good Interfaces Start Before the First Component',
    excerpt: 'The quality of a digital product is often decided before the UI exists. A clearer problem, a tighter flow, and fewer assumptions make the interface simpler to build and easier to use.',
    category: 'UI/UX',
    date: 'Sep 30, 2026',
    readTime: '7 min',
  },
  {
    id: 2,
    title: 'When a Custom Component Is Actually Worth Building',
    excerpt: 'Not every interaction needs another abstraction. A practical way to decide what belongs in a design system, what stays local, and where custom work creates real value.',
    category: 'Frontend',
    date: 'Sep 25, 2026',
    readTime: '6 min',
  },
  {
    id: 3,
    title: '60 FPS Is a System, Not a Feeling',
    excerpt: 'Smooth interfaces come from small decisions across rendering, layout, animation, assets, and interaction. Performance is less about one trick and more about removing friction from the frame.',
    category: 'Performance',
    date: 'Sep 19, 2026',
    readTime: '8 min',
  },
  {
    id: 4,
    title: 'A Design System Should Make the Work Quieter',
    excerpt: 'A useful system does not add ceremony. It removes repeated decisions, keeps visual language coherent, and gives every new screen a strong starting point.',
    category: 'Systems',
    date: 'Sep 12, 2026',
    readTime: '7 min',
  },
  {
    id: 5,
    title: 'Why Simple UI Is Usually the Hardest UI',
    excerpt: 'Minimal interfaces expose every weak decision. Spacing, hierarchy, typography, motion, and copy all become part of the product when there is nowhere for clutter to hide.',
    category: 'Design',
    date: 'Sep 5, 2026',
    readTime: '6 min',
  },
  {
    id: 6,
    title: 'From Idea to Working Build Without the Detour',
    excerpt: 'Good product work is a sequence of useful constraints. Reduce the unknowns, build the smallest meaningful slice, test it early, and let the next decision come from the result.',
    category: 'Full-stack',
    date: 'Aug 29, 2026',
    readTime: '8 min',
  },
]

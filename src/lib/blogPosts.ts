export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: number;
  content: string;
}
 
export const blogPosts: BlogPost[] = [
  {
    slug: "proc-potrebuje-vas-podnik-web",
    title: "Proč každý lokální podnik potřebuje vlastní web v roce 2025",
    description: "Sociální sítě nestačí. Vysvětlíme, proč vlastní web je základ online přítomnosti pro každou firmu.",
    date: "2025-03-15",
    category: "Tvorba webů",
    readTime: 5,
    content: `
## Proč vlastní web a ne jen Facebook?
 
Mnoho podnikatelů si myslí, že jim stačí firemní stránka na Facebooku nebo Instagram profil. Jenže realita je jiná – algoritmy sociálních sítí se mění každý měsíc a váš dosah může ze dne na den klesnout na nulu.
 
Vlastní web je **váš majetek**. Nikdo vám ho nemůže vzít, omezit ani změnit pravidla hry.
 
## Co vám web přinese
 
**Důvěryhodnost** – zákazníci, kteří vás nenajdou na Googlu, vás prostě nezavolají. Web signalizuje, že jste seriózní firma.
 
**Dostupnost 24/7** – web pracuje za vás i v noci, o víkendu, o svátcích. Zákazník si může přečíst vaše služby a kontaktovat vás kdy chce.
 
**Vlastní obsah** – na webu říkáte přesně to, co chcete. Žádné algoritmy, žádná omezení.
 
## Kolik to stojí?
 
Moderní web pro malou firmu dnes nepotřebuje velký rozpočet. Důležité je, aby byl rychlý, přehledný a fungoval na mobilu.
 
Pokud vás zajímá, co konkrétně tvorba webu obnáší, [podívejte se na naše služby](/service/websites).
    `
  },
  {
    slug: "co-je-lokalni-seo",
    title: "Lokální SEO: Jak se dostat na první místo v Googlu ve vašem městě",
    description: "Lokální SEO je nejsilnější nástroj pro malé firmy. Zjistěte, jak funguje a co musíte udělat.",
    date: "2025-04-01",
    category: "SEO",
    readTime: 7,
    content: `
## Co je lokální SEO?
 
Když někdo v Ostravě napíše do Googlu „instalatér Ostrava" nebo „pizza blízko mě", Google mu ukáže místní firmy. Právě o tuto viditelnost jde v lokálním SEO.
 
Lokální SEO je soubor technik, které pomáhají vaší firmě zobrazit se ve výsledcích hledání v konkrétní lokalitě.
 
## Proč je lokální SEO tak důležité?
 
Čísla hovoří jasně:
- **46 %** všech vyhledávání na Googlu má lokální záměr
- **70 %** lidí rozklikne jeden ze 3 prvních výsledků
- **0 %** lidí se prokliká na 4tou stránku výsledků
 
## 3 základní kroky lokálního SEO
 
### 1. Google Business Profile
Zdarma firemní profil na Googlu je základ. Bez něj se na mapách prostě neobjevíte. Vyplňte vše – fotky, otevírací dobu, popis služeb.
 
### 2. On-page SEO
Optimalizace tagů jako title, H1 a H2 jsou základní důležité faktory pro vaši pozici v googlu.
 
### 3. Citace
Citace a zmínky jsou dalží z důležitých "ranking faktorů", mít vaše stránky zmíněny aplikacemi a stránkami které google bere jako důvěryhodné, je masivní plus.
 
## Chcete víc zákazníků z Googlu?
 
Lokální SEO je naše specialita. [Podívejte se jak pracujeme](/service/seo).
    `
  }
];
 
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
 
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' });
}
 

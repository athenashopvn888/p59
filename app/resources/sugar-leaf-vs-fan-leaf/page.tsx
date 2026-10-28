import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { JsonLd } from "../../lib/jsonLd";
import layoutStyles from "../resources.module.css";
import styles from "./article.module.css";

const TITLE = "Sugar Leaf vs Fan Leaf: The Two Cannabis Leaves, Side by Side";
const CANONICAL = "https://www.planets59.com/resources/sugar-leaf-vs-fan-leaf";
const DESCRIPTION =
  "The iconic cannabis leaf almost never ends up in the package; the tiny sticky sugar leaf is easy to miss.";

const ARTICLE_MARKDOWN = "# Sugar Leaf vs Fan Leaf: The Two Cannabis Leaves, Side by Side\n\nLast checked: October 27, 2026\n\nThe cannabis leaf is the most famous plant silhouette on earth. Funny thing: that iconic leaf is the one that almost never ends up in the package. The leaf that does sneak in is tiny, sticky and easy to miss. That's sugar leaf vs fan leaf in one sentence. Planets 59, at 8500 Torbram Rd in Brampton, gives adults 19+ the reference version: definitions, a comparison table and a short is / isn't list.\n\n## Sugar leaf vs fan leaf: definitions\n\n**Fan leaf.** The large leaf with long, serrated fingers (leaflets) spreading from one stem. It's the solar panel of the plant. Fan leaves grow along the branches and do most of the light-catching.\n\n**Sugar leaf.** A small leaf that grows out of the flower cluster itself. It's called \"sugar\" because it's often coated in trichomes, the glittery resin glands, so it looks dusted in sugar.\n\n## Side by side\n\n| | Fan leaf | Sugar leaf |\n|---|---|---|\n| Size | Large | Small |\n| Shape | Multi-finger, the classic icon | Single small blade or short fingers |\n| Location | Along branches | Poking out from inside the bud |\n| Resin | Little to none on the surface | Often frosted |\n| What happens at harvest | Stripped off | Clipped back during trimming |\n| Ends up in a package of flower | Shouldn't | Small tips sometimes remain |\n\n## The order of operations\n\n1. **Plant grows.** Fan leaves power the growth.\n2. **Flowering.** Buds form; sugar leaves grow out of them.\n3. **Harvest.** Fan leaves come off.\n4. **Trim.** Sugar leaves get cut back to shape the bud.\n5. **Dry and cure.** The finished flower is packaged.\n\nTrimming can happen before or after drying. Either way, the clippings are collected separately.\n\n## Where the clippings go\n\nSugar leaf trim carries resin, so it's commonly used as input for extraction. Fan leaves, with little resin, aren't the same kind of input. That's why \"trim\" in concentrate talk almost always means sugar leaf, not fan leaf.\n\n## Sugar leaf: is / isn't\n\n**Is:**\n- Part of the flower cluster.\n- Usually resin-dusted.\n- Trimmed to shape the bud.\n\n**Isn't:**\n- A strain or a product category.\n- A THC figure. Only Total THC and Total CBD on a legal label give you those numbers.\n- A defect, in small amounts. A few frosty leaf tips on a bud are normal.\n\n## Fan leaf: is / isn't\n\n**Is:**\n- The plant's main light-catcher.\n- The leaf on every cannabis logo.\n- Removed at harvest.\n\n**Isn't:**\n- Something you should find in a package of dried flower.\n- Frosty in the same way sugar leaf is.\n\n## Reading a bud for leaf\n\nIf the package lets you see the flower:\n\n| Check | What you're looking for |\n|---|---|\n| Leaf tips | A few short, frosty tips: normal |\n| Large, flat leaf pieces | Loose trim; more leaf, less flower |\n| Dark, dry leaf | Could be older or rough-handled material |\n| Overall shape | Tight shape means a closer trim |\n\nLeaf adds weight. Net weight on the label counts everything in the package.\n\n## Why the leaf on logos isn't the leaf in your jar\n\nThe seven-finger fan leaf became the symbol of cannabis because it's instantly recognisable. But the product people actually buy, dried flower, is the bud with the fan leaves gone. If you ever see big fan leaves mixed into a package of dried flower, that's a trimming question worth asking.\n\n## Quick FAQ from Torbram Road\n\n**Is sugar leaf the same as shake?** No. Shake is loose broken bits that fall off buds in handling. Sugar leaf is a specific leaf type, attached to the bud until it's trimmed.\n\n**Why leave any sugar leaf on?** Trimming every last tip takes time and handling. Light leaf left on is common, and some producers prefer a more natural look.\n\n**Can you tell from the label how much leaf is left?** No. The label gives product class, Total THC, Total CBD, net weight and packaging date. Leaf you judge by eye.\n\n**Is there a \"best\" trim?** Not a ranking we'll give. Look at the flower and decide what fits you.\n\n## Summary\n\n| Question | Answer |\n|---|---|\n| Sugar leaf vs fan leaf: which is bigger? | Fan leaf |\n| Which grows from the bud? | Sugar leaf |\n| Which is frosty? | Usually sugar leaf |\n| Which is on the logo? | Fan leaf |\n| Which can show up as trim in extraction? | Sugar leaf |\n\nSugar leaf vs fan leaf comes down to size, location and resin. Big fan leaves feed the plant and come off at harvest. Small, frosty sugar leaves grow inside the bud and get trimmed back.\n\nTrip details are on the [Planets 59 visit page](/visit), and the [Torbram weed dispensary page](/weed-dispensary-torbram) covers the area. Planets 59 is for adults 19 and over. Bring government-issued photo ID.";

const ALLOWED_LINKS = ["/visit", "/weed-dispensary-torbram"];

function assertArticle(markdown: string) {
  if (!markdown.startsWith("# " + TITLE + "\n")) {
    throw new Error("Article H1 does not match the title.");
  }
  if (!markdown.includes("Last checked: October 27, 2026")) {
    throw new Error("Last checked line is missing.");
  }
  if (DESCRIPTION.length > 155) {
    throw new Error("Meta description is too long.");
  }
  const blob = markdown + "\n" + TITLE + "\n" + DESCRIPTION;
  if (blob.includes("3.5") || blob.toLowerCase().includes("farmers link")) {
    throw new Error("Forbidden copy in the article.");
  }
  const links = [...markdown.matchAll(/\]\(([^)]+)\)/g)].map((match) => match[1]);
  if (links.length !== ALLOWED_LINKS.length || links.some((href, index) => href !== ALLOWED_LINKS[index])) {
    throw new Error("Article links do not match the approved internal links.");
  }
}

assertArticle(ARTICLE_MARKDOWN);

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    url: CANONICAL,
  },
  url: CANONICAL,
  datePublished: "2026-10-28",
  dateModified: "2026-10-28",
  author: { "@type": "Organization", name: "Planets 59" },
  publisher: { "@type": "Organization", name: "Planets 59" },
};

type Block =
  | { type: "h"; level: number; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; rows: string[][] };

function parseMarkdown(markdown: string): Block[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }
    const heading = /^(#{1,4})\s+(.+)$/.exec(line);
    if (heading) {
      blocks.push({ type: "h", level: heading[1].length, text: heading[2] });
      index += 1;
      continue;
    }
    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (index < lines.length && lines[index].startsWith("|")) {
        const cells = lines[index].split("|").slice(1, -1).map((cell) => cell.trim());
        const separator = cells.length > 0 && cells.every((cell) => /^:?-+:?$/.test(cell));
        if (!separator) rows.push(cells);
        index += 1;
      }
      blocks.push({ type: "table", rows });
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^[-*]\s+/, ""));
        index += 1;
      }
      blocks.push({ type: "ul", items });
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\.\s+/, ""));
        index += 1;
      }
      blocks.push({ type: "ol", items });
      continue;
    }
    blocks.push({ type: "p", text: line });
    index += 1;
  }
  return blocks;
}

function inlineMarkdown(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let part = 0;
  while ((match = pattern.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const token = match[0];
    if (token.startsWith("**")) {
      nodes.push(<strong key={`${keyPrefix}-s${part}`}>{token.slice(2, -2)}</strong>);
    } else {
      const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(token);
      if (!link || !ALLOWED_LINKS.includes(link[2])) {
        throw new Error("Unexpected article link.");
      }
      nodes.push(
        <a key={`${keyPrefix}-a${part}`} href={link[2]}>
          {link[1]}
        </a>,
      );
    }
    last = match.index + token.length;
    part += 1;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function ArticleBlocks({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => {
    const key = `block-${index}`;
    if (block.type === "h") {
      if (block.level === 1) return null;
      return <h2 key={key}>{inlineMarkdown(block.text, key)}</h2>;
    }
    if (block.type === "p") {
      return <p key={key}>{inlineMarkdown(block.text, key)}</p>;
    }
    if (block.type === "ul") {
      return (
        <ul key={key}>
          {block.items.map((item, itemIndex) => (
            <li key={`${key}-${itemIndex}`}>{inlineMarkdown(item, `${key}-${itemIndex}`)}</li>
          ))}
        </ul>
      );
    }
    if (block.type === "ol") {
      return (
        <ol key={key}>
          {block.items.map((item, itemIndex) => (
            <li key={`${key}-${itemIndex}`}>{inlineMarkdown(item, `${key}-${itemIndex}`)}</li>
          ))}
        </ol>
      );
    }
    const [header, ...rows] = block.rows;
    return (
      <div key={key} className={styles.tableWrap}>
        <table>
          {header ? (
            <thead>
              <tr>
                {header.map((cell, cellIndex) => (
                  <th key={`${key}-h${cellIndex}`} scope="col">
                    {inlineMarkdown(cell, `${key}-h${cellIndex}`)}
                  </th>
                ))}
              </tr>
            </thead>
          ) : null}
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`${key}-r${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  <td key={`${key}-r${rowIndex}-c${cellIndex}`}>{inlineMarkdown(cell, `${key}-c${rowIndex}-${cellIndex}`)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  });
}

export default function SugarLeafVsFanLeafPage() {
  const blocks = parseMarkdown(ARTICLE_MARKDOWN);
  const heading = blocks.find((block) => block.type === "h" && block.level === 1);
  if (!heading || heading.type !== "h" || heading.text !== TITLE) {
    throw new Error("Visible H1 does not match the title.");
  }
  return (
    <main className={layoutStyles.main}>
      <JsonLd data={articleJsonLd} />
      <Navbar />
      <section className={layoutStyles.hero}>
        <div className={layoutStyles.wrap}>
          <h1>{heading.text}</h1>
        </div>
      </section>
      <article className={styles.body}>
        <ArticleBlocks blocks={blocks.filter((block) => block !== heading)} />
      </article>
      <Footer />
    </main>
  );
}

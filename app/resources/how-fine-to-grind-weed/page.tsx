import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { JsonLd } from "../../lib/jsonLd";
import layoutStyles from "../resources.module.css";
import styles from "./article.module.css";

const TITLE = "How Fine to Grind Weed: Joint, Bowl, Bong and Vape, Side by Side";
const CANONICAL = "https://www.planets59.com/resources/how-fine-to-grind-weed";
const DESCRIPTION =
  "Same flower and the same grinder give four different results depending on what you load it into.";

const ARTICLE_MARKDOWN = `# How Fine to Grind Weed: Joint, Bowl, Bong and Vape, Side by Side

Last checked: October 30, 2026

Same flower. Same grinder. Four very different results depending on what you load it into. Grind size is the variable nobody explains, so here's the reference sheet: **how fine to grind weed** for each method, in plain terms. For adults 19+. No product recommendations. No claims about the flower.

## Why grind size matters

Grinding exposes more surface area. More surface means heat reaches the flower faster. That's useful up to a point. Past it, pieces get so small they block airflow, slip through screens or burn away in seconds. The right grind is the one that suits how air and heat move through your device.

## The short answer

| Method | Grind | Why |
|---|---|---|
| Joint or cone | Medium-fine | Rolls evenly, burns steadily |
| Hand pipe or bubbler | Medium-coarse | Stays in the bowl, keeps air moving |
| Bong slide | Coarse | Big bowls need airflow; fine bits get pulled through |
| Dry herb vaporizer | Fine to medium-fine, even | Heat must reach every piece consistently |
| Cooking | Coarse | Easier to strain out |

Use the table as a starting point, then adjust.

## Grind for joints and cones

Aim for medium-fine: fluffy, even pieces with no stems. Too coarse and the paper lumps, burns unevenly and runs. Too fine and the joint packs dense, pulls hard and goes out. Consistency is the target. Two or three twists of a standard grinder usually gets there.

Test: pinch some between your fingers. It should feel light and springy, not powdery.

## Grind for a hand pipe or bubbler

Go a step coarser. Bowls have a hole at the bottom. Fine grind falls through it or gets pulled into the stem. Medium-coarse pieces stay in place and leave small air gaps so the bowl lights evenly.

Tip: put one or two larger pieces at the bottom of the bowl, then the medium grind on top.

## Grind for a bong

Coarser still. Bong pulls are strong and the slide is often larger. Fine grind gets sucked straight into the downstem and the water. A coarse grind with even chunks holds together under a big pull.

## Grind for a dry herb vaporizer

Vaporizers heat flower instead of burning it, so the heat has to reach all of it. A fine to medium-fine, very even grind works for most chamber-style devices. Uneven grind means some pieces get over-heated and others barely touched. Check your device's manual, because chamber designs differ.

## How to control your grind

- **Fewer twists = coarser.** Start with two or three and check.
- **Don't overload the grinder.** Packed teeth crush instead of cut.
- **Break big buds first.** Pull them into smaller chunks by hand before they go in.
- **Remove stems.** They don't grind well and they puncture papers.
- **Clean the teeth.** Sticky build-up turns cuts into crushes.

## Common problems, quick fixes

- **Joint runs down one side:** grind was uneven. Go finer and more consistent.
- **Bowl keeps clogging:** grind is too fine. Go coarser or add a screen.
- **Vape tastes harsh, then nothing:** uneven grind. Aim for consistent pieces.
- **Flower turns to dust:** it's too dry or the grinder is overloaded.

## Flower condition changes the result

Dry flower crumbles to powder no matter what you do. Sticky, dense flower clumps and gums up teeth. If you want to understand what's on the surface of flower and why it sticks, our [sugar leaf vs fan leaf](/resources/sugar-leaf-vs-fan-leaf) reference explains where the frost sits, and the [weed flower guide](/resources/weed-flower-guide) covers formats.

## Storing ground flower

Ground flower has more exposed surface, so it dries out sooner than whole buds. Keep it in a sealed container away from heat and light, and only grind what you need.

## Quick answers

**How fine to grind weed for a joint, in one line?** Medium-fine and even.

**Is a fine grind always better for a vape?** Not always. Even matters more than fine.

**Can I grind too much at once?** Yes. Ground flower dries out faster. Grind what you'll use.

## Visit Planets 59

Planets 59 is at 8500 Torbram Rd, Brampton. Adults 19+ only. Bring government-issued photo ID.
`;

const ALLOWED_LINKS = ["/resources/sugar-leaf-vs-fan-leaf", "/resources/weed-flower-guide"];

function assertArticle(markdown: string) {
  if (!markdown.startsWith("# " + TITLE + "\n")) {
    throw new Error("Article H1 does not match the title.");
  }
  if (!markdown.includes("Last checked: October 30, 2026")) {
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
  datePublished: "2026-11-04",
  dateModified: "2026-11-04",
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

export default function HowFineToGrindWeedPage() {
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

import { useState } from "react";
import {
  ArrowUpRight,
  Gamepad2,
  Globe2,
  History,
  Landmark,
  Leaf,
  Puzzle,
  RefreshCw,
  Sparkles,
  Telescope,
  type LucideIcon
} from "lucide-react";
import { siteContent, type WorldFactCategory } from "../data/siteContent";
import { PageTransition } from "../components/PageTransition";
import { SectionHeading } from "../components/SectionHeading";
import { usePageMeta } from "../hooks/usePageMeta";

type FactCategoryFilter = WorldFactCategory | "All";

const factCategories = ["Nature", "Culture", "Science", "History"] as const satisfies WorldFactCategory[];

const categoryIcons: Record<WorldFactCategory, LucideIcon> = {
  Culture: Landmark,
  History,
  Nature: Leaf,
  Science: Telescope
};

function getFactIndexes(category: FactCategoryFilter) {
  return siteContent.worldFacts
    .map((_, index) => index)
    .filter((index) => category === "All" || siteContent.worldFacts[index].category === category);
}

function getRandomFactIndex(category: FactCategoryFilter, currentIndex = -1) {
  const indexes = getFactIndexes(category);

  if (indexes.length === 0) {
    return 0;
  }

  if (indexes.length === 1) {
    return indexes[0];
  }

  let nextIndex = indexes[Math.floor(Math.random() * indexes.length)];

  while (nextIndex === currentIndex) {
    nextIndex = indexes[Math.floor(Math.random() * indexes.length)];
  }

  return nextIndex;
}

export function FunPage() {
  const [selectedCategory, setSelectedCategory] = useState<FactCategoryFilter>("All");
  const [factIndex, setFactIndex] = useState(() => getRandomFactIndex("All"));
  const [round, setRound] = useState(1);
  const randomFact = siteContent.worldFacts[factIndex] ?? siteContent.worldFacts[0];
  const ActiveFactIcon = randomFact ? categoryIcons[randomFact.category] : Globe2;

  usePageMeta({
    title: `Fun | ${siteContent.seo.siteName}`,
    description:
      "A professional-fun space for future interactive experiments and creative coding work by Pyae Sone Aung (Mitch)."
  });

  const revealRandomFact = () => {
    setFactIndex((currentIndex) => getRandomFactIndex(selectedCategory, currentIndex));
    setRound((currentRound) => currentRound + 1);
  };

  const chooseCategory = (category: FactCategoryFilter) => {
    setSelectedCategory(category);
    setFactIndex(getRandomFactIndex(category, factIndex));
    setRound(1);
  };

  return (
    <PageTransition className="page fun-page">
      <section className="page-intro fun-intro" aria-labelledby="fun-title">
        <div>
          <p className="eyebrow">Professional fun</p>
          <h1 id="fun-title">Small experiments with room to grow.</h1>
          <p>
            This page is structured for mini-projects, creative coding and polished interaction
            experiments once real project code or assets are ready to show.
          </p>
        </div>
        <div className="fun-field" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="content-band" aria-labelledby="fact-game-title">
        <div className="current-game-shell">
          <div className="fact-game">
            <div className="fact-game-copy">
              <p className="eyebrow">Quick play</p>
              <h2 id="fact-game-title">World Fact Generator</h2>
              <p>Pick a category, roll a new fact and take a quick detour around the world.</p>
              <div className="fact-category-tabs" aria-label="World fact categories">
                <button
                  aria-pressed={selectedCategory === "All"}
                  data-active={selectedCategory === "All"}
                  onClick={() => chooseCategory("All")}
                  type="button"
                >
                  <Globe2 size={16} aria-hidden="true" />
                  All
                </button>
                {factCategories.map((category) => {
                  const Icon = categoryIcons[category];

                  return (
                    <button
                      aria-pressed={selectedCategory === category}
                      data-active={selectedCategory === category}
                      key={category}
                      onClick={() => chooseCategory(category)}
                      type="button"
                    >
                      <Icon size={16} aria-hidden="true" />
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
            <article className="fact-game-card" aria-live="polite">
              <div className="fact-game-topline">
                <span className="current-number">Roll {String(round).padStart(2, "0")}</span>
                {randomFact ? <span className="fact-place">{randomFact.place}</span> : null}
              </div>
              <div className="fact-game-orb" aria-hidden="true">
                <ActiveFactIcon className="fact-game-icon" size={26} />
                <Sparkles size={13} />
              </div>
              <p>{randomFact?.fact}</p>
              <button className="button button-primary" type="button" onClick={revealRandomFact}>
                Roll another fact
                <RefreshCw size={17} aria-hidden="true" />
              </button>
            </article>
          </div>
        </div>

        <div className="game-skeleton-grid" aria-label="More games coming soon">
          <article className="game-skeleton-card">
            <Gamepad2 size={23} aria-hidden="true" />
            <p className="eyebrow">Coming soon</p>
            <h3>Mini logic challenge</h3>
          </article>
          <article className="game-skeleton-card">
            <Puzzle size={23} aria-hidden="true" />
            <p className="eyebrow">Coming soon</p>
            <h3>Pattern memory game</h3>
          </article>
        </div>
      </section>

      {siteContent.funExperiments.length > 0 ? (
        <section className="content-band" aria-labelledby="experiments-title">
          <SectionHeading eyebrow="Showcase" title="Interactive experiments" />
          <div className="experiment-grid">
            {siteContent.funExperiments.map((experiment) => (
              <article className="experiment-card" key={experiment.title}>
                <div className="experiment-thumb" />
                <p className="eyebrow">{experiment.status}</p>
                <h2>{experiment.title}</h2>
                <p>{experiment.summary}</p>
                <ul className="tag-list">
                  {experiment.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                {experiment.routeOrUrl ? (
                  <a className="text-link" href={experiment.routeOrUrl}>
                    Open experiment
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </PageTransition>
  );
}

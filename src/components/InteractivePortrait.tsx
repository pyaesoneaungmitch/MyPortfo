import { useEffect, useRef, useState } from "react";
import { Cog, Globe2, Star, type LucideProps } from "lucide-react";
import { siteContent, type PortraitQuadrant } from "../data/siteContent";

type InteractivePortraitProps = {
  quadrants?: PortraitQuadrant[];
};

function BoxingGlovesIcon({ size = 24, strokeWidth = 2, ...props }: LucideProps) {
  return (
    <svg
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8.2 4.6c-2.4 0-4.3 1.9-4.3 4.3v2.8c0 1.5.8 2.8 2.1 3.6" />
      <path d="M8.2 4.6c2.3 0 4.2 1.9 4.2 4.3v2.1c0 1.6-.9 3-2.2 3.7" />
      <path d="M6 15.3h4.2v3.1H6z" />
      <path d="M6.8 18.4v1.9h2.6v-1.9" />
      <path d="M7.2 9.4c1.2-.5 2.5.3 2.5 1.7v.5" />
      <path d="M15.8 4.6c2.4 0 4.3 1.9 4.3 4.3v2.8c0 1.5-.8 2.8-2.1 3.6" />
      <path d="M15.8 4.6c-2.3 0-4.2 1.9-4.2 4.3v2.1c0 1.6.9 3 2.2 3.7" />
      <path d="M13.8 15.3H18v3.1h-4.2z" />
      <path d="M14.6 18.4v1.9h2.6v-1.9" />
      <path d="M16.8 9.4c-1.2-.5-2.5.3-2.5 1.7v.5" />
    </svg>
  );
}

function SegmentSymbol({ icon }: { icon: PortraitQuadrant["icon"] }) {
  const iconProps = {
    className: `slice-icon slice-icon-${icon}`,
    size: 98,
    strokeWidth: 1.45
  };

  if (icon === "gear") {
    return <Cog {...iconProps} />;
  }

  if (icon === "globe") {
    return <Globe2 {...iconProps} />;
  }

  if (icon === "star") {
    return <Star {...iconProps} />;
  }

  return <BoxingGlovesIcon {...iconProps} />;
}

export function InteractivePortrait({
  quadrants = siteContent.portraitQuadrants
}: InteractivePortraitProps) {
  const [activeId, setActiveId] = useState<PortraitQuadrant["id"] | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const activePosition = quadrants.find((quadrant) => quadrant.id === activeId)?.position ?? "none";

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && activeId) {
        setActiveId(null);
        buttonRefs.current[activeId]?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeId]);

  const toggleQuadrant = (id: PortraitQuadrant["id"]) => {
    setActiveId((currentId) => (currentId === id ? null : id));
  };

  const handleKeyboardSelect = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    id: PortraitQuadrant["id"]
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleQuadrant(id);
    }
  };

  return (
    <div className="portrait-experience">
      <div className="portrait-orbit" data-portrait-active={activePosition}>
        <div className="portrait-ring" aria-hidden="true" />
        <span className="portrait-laser portrait-laser-horizontal" aria-hidden="true" />
        <span className="portrait-laser portrait-laser-vertical" aria-hidden="true" />
        {quadrants.map((quadrant) => {
          const isActive = activeId === quadrant.id;
          const isDimmed = activeId !== null && !isActive;
          const visibleTechnologies = quadrant.technologies.slice(0, 3);
          const hiddenTechnologyCount = quadrant.technologies.length - visibleTechnologies.length;

          return (
            <button
              aria-pressed={isActive}
              aria-describedby={isActive ? `${quadrant.id}-inline-detail` : undefined}
              className={`portrait-slice slice-${quadrant.position}`}
              data-active={isActive}
              data-dimmed={isDimmed}
              key={quadrant.id}
              onClick={() => toggleQuadrant(quadrant.id)}
              onKeyDown={(event) => handleKeyboardSelect(event, quadrant.id)}
              ref={(node) => {
                buttonRefs.current[quadrant.id] = node;
              }}
              type="button"
            >
              <span className="slice-art" aria-hidden="true">
                <SegmentSymbol icon={quadrant.icon} />
              </span>
              <span className="slice-label">
                <span className="slice-number">{quadrant.number}</span>
                <span className="slice-title">{quadrant.category}</span>
                {isActive ? (
                  <span className="slice-detail" id={`${quadrant.id}-inline-detail`}>
                    <span className="slice-description">{quadrant.description}</span>
                    {visibleTechnologies.length > 0 ? (
                      <span className="slice-tags" aria-label={`${quadrant.category} technologies`}>
                        {visibleTechnologies.map((technology) => (
                          <span key={technology}>{technology}</span>
                        ))}
                        {hiddenTechnologyCount > 0 ? (
                          <span aria-label={`${hiddenTechnologyCount} more technologies`}>
                            +{hiddenTechnologyCount}
                          </span>
                        ) : null}
                      </span>
                    ) : null}
                  </span>
                ) : null}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

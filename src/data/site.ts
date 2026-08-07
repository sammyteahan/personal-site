import objective from "@/assets/logo_objective.jpeg";
import lightningkite from "@/assets/logo_lightningkite.jpeg";
import utahstate from "@/assets/logo_utah_state.jpeg";

export const SITE_NAME = "Sam Teahan";
export const SITE_URL = "https://sammyteahan.com";

// TODO(sam): placeholder copy — rewrite once /about exists.
export const DEFAULT_DESCRIPTION =
    "Sam Teahan is a software developer and development team lead at Objective with over a decade of experience building and shipping production software.";

export const SOCIAL_LINKS = {
    github: "https://github.com/sammyteahan",
    linkedin: "https://www.linkedin.com/in/sam-teahan-7b9654a8/",
    booking: "https://cal.com/sammyteahan",
};

// TODO(sam): placeholder — replace with your actual areas of expertise. This
// feeds `knowsAbout`, which is how a retrieval system answers "who knows X?".
export const KNOWS_ABOUT = [
    "Software Development",
    "Web Application Development",
    "Engineering Team Leadership",
    "TypeScript",
    "Amazon Web Services",
];

/**
 * Single source of truth for the work & education timeline. Rendered by
 * index.astro and used to build the JSON-LD, so the two cannot disagree —
 * structured data that contradicts visible content is worse than none.
 *
 * `endDatetime: null` means ongoing. Display strings stay separate from the
 * machine-readable values so "Present" never leaks into a datetime attribute.
 */
export const EXPERIENCE = [
    {
        kind: "work" as const,
        title: "Objective",
        subtitle: "Software Developer",
        url: "https://objective.dev",
        start: "2016",
        end: "Present",
        startDatetime: "2016",
        endDatetime: null,
        icon: objective,
        iconAlt: "logo of objective",
    },
    {
        kind: "work" as const,
        title: "Lightning Kite",
        subtitle: "Software Developer",
        url: null,
        start: "2013",
        end: "2016",
        startDatetime: "2013",
        endDatetime: "2016",
        icon: lightningkite,
        iconAlt: "logo of lightning kite",
    },
    {
        kind: "education" as const,
        title: "Utah State University",
        subtitle: "Computer Science Degree",
        url: "https://www.usu.edu",
        start: "2011",
        end: "2015",
        startDatetime: "2011",
        endDatetime: "2015",
        icon: utahstate,
        iconAlt: "logo of utah state university",
    },
];

/**
 * Builds the ProfilePage + Person graph for the homepage.
 *
 * The stable `@id` values let other pages (and external consumers) reference
 * the same Person entity rather than describing a new one each time.
 */
export function buildProfileSchema({
    name = `${SITE_NAME} - Software Engineer`,
    description = DEFAULT_DESCRIPTION,
    image = "/apple-touch-icon.png",
}: { name?: string; description?: string; image?: string } = {}) {
    const personId = `${SITE_URL}/#person`;

    const employers = EXPERIENCE.filter((e) => e.kind === "work");
    const schools = EXPERIENCE.filter((e) => e.kind === "education");

    const asOrganization = (entry: (typeof EXPERIENCE)[number], type: string) => ({
        "@type": type,
        name: entry.title,
        ...(entry.url ? { url: entry.url } : {}),
    });

    return {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        url: `${SITE_URL}/`,
        name,
        mainEntity: {
            "@type": "Person",
            "@id": personId,
            name: SITE_NAME,
            alternateName: "sammyteahan",
            url: `${SITE_URL}/`,
            image: `${SITE_URL}${image}`,
            description,
            jobTitle: "Software Developer & Development Team Lead",
            worksFor: asOrganization(employers[0], "Organization"),
            alumniOf: schools.map((s) => asOrganization(s, "CollegeOrUniversity")),
            knowsAbout: KNOWS_ABOUT,
            sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
            hasOccupation: employers.map((e) => ({
                "@type": "Occupation",
                name: e.subtitle,
                occupationalCategory: "Software Developer",
                ...(e.url ? { url: e.url } : {}),
            })),
        },
    };
}

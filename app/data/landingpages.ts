import type { StringToBoolean } from "class-variance-authority/types";

export interface LandingPage {
  id: number;
  title: string;
  intro: string;
  img_url: string;
  img_alt: string;
  comment: string;
  slug: string;
  link: string;
}

export const landingPages: LandingPage[] = [
  {
    id: 0,
    title: "Bambu Range",
    intro: "Landing page for Bambu Lab 3D Printers",
    img_url: "https://cdn1.bambulab.com/home/a1-bg-340aa6425d09d.jpg",
    img_alt: "A Bambu Lab 3D printer",
    comment:
      "A Landing page in keeping with the rest of the site for Bambu Lab 3D Printers",
    slug: "bambu-landing-page",
    link: "https://www.createeducation.com/bambu-range/",
  },
];

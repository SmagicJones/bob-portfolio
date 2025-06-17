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
  {
    id: 1,
    title: "Creality Range",
    intro: "Landing page for Creality 3D Printers",
    img_url:
      "https://3dgbire.com/cdn/shop/files/a1feb250f5988665f46808469757d1d8_1008x_1080x_41185844-646a-4fd0-92e8-8a20c5a6113a_1512x.webp?v=1737560306",
    img_alt: "Creality K2 Plus Combo 3D Printer",
    comment:
      "A Landing page for Creality - a new brand to the company -  in keeping with the rest of the site and produced with very few resources",
    slug: "creality-landing-page",
    link: "https://3dgbire.com/pages/creality",
  },
  {
    id: 2,
    title: "UltiMaker Range",
    intro: "Landing page for UltiMaker 3D Printers",
    img_url:
      "https://www.createeducation.com/wp-content/uploads/2025/06/S6-Hero-optim-500x500.jpg",
    img_alt: "UltiMaker S6 3D Printer",
    comment:
      "A Landing page for UltiMaker 3D Printers that also reflects the rest of the site",
    slug: "ultimaker-landing-page",
    link: "https://www.createeducation.com/ultimaker-range/",
  },
];

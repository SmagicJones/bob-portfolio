export interface Product {
  id: number;
  title: string;
  intro: string;
  img_url: string;
  img_alt: string;
  comment: string;
  slug: string;
  link: string;
  comparison_link: string;
}

export const products: Product[] = [
  {
    id: 0,
    title: "UltiMaker S8",
    intro:
      "UltiMaker S8 achieves up to 4x the productivity of its predecessor. While also improving print quality. Made possible with our new motion planner UltiMaker Cheetah, new high flow print cores, and an improved feeder. Combining industry-leading dual extrusion printing with our open material platform, allows you to create complex multi-material parts in a fraction of the time.",
    img_url: "/images/ultimaker-s8.jpg",
    img_alt:
      "A face on image of the EinScan Libre, there is a screen and a handle to hold, it is predominantly black",
    comment:
      "Here is the lastest UltiMaker 3D Printer, Manufactured in The Netherlands.  My breif was to recreate how the manufacturer had created their page.",
    slug: "ultimaker-s8",
    link: "https://3dgbire.com/products/ultimaker-s8-3d-printer",
    comparison_link: "https://ultimaker.com/3d-printers/s-series/ultimaker-s8/",
  },
  {
    id: 1,
    title: "EinScan Libre Scanner",
    intro:
      "The EinScan Libre delivers a fully wireless, standalone 3D scanning experience, powered by its built-in screen and NVIDIA processor. It offers the perfect balance of freedom and efficiency, ensuring reliable results with versatile, user-friendly operation.",
    img_url: "/images/einscan-libre.webp",
    img_alt:
      "face on image of the ultiMaker S8 3D Printer, it is predominantly white",
    comment:
      "This scanner looks very impressive, I was asked to use the manufacturers page for inspiration",
    slug: "einscan-libre",
    link: "https://www.createeducation.com/marketplace/einscan-libre-scanner/",
    comparison_link:
      "https://www.shining3d.com/professional-solutions/all-in-one-3d-scanner/einscan-libre",
  },
  {
    id: 2,
    title: "Bambu Lab H2D Laser Combo",
    intro: "Rethink Personal Manufacturing",
    img_url: "/images/laser-full-combo.webp",
    img_alt: "Bambu Lab H2D Laser Combo 3D Printer and Laser Cutter",
    comment:
      "This is a really amazing machine, it has so many capabilities at such a competitive price",
    slug: "bambu-lab-h2d-laser",
    link: "https://www.createeducation.com/marketplace/bambu-lab-h2d-laser-combo/",
    comparison_link: "https://bambulab.com/en-gb/h2d",
  },
  {
    id: 3,
    title: "The Meltio M600",
    intro: "All in One Metal Printing Platform",
    img_url: "/images/meltio-m600.webp",
    img_alt: "Meltio M600 Metal 3D Printer",
    comment:
      "3D Printing with Metal with Meltio's Unique technology - here we wanted to draw attention to the applications of the technology first rather than bamboozingly them with stats",
    slug: "meltio-m600",
    link: "https://3dgbire.com/products/meltio-m600",
    comparison_link: "https://meltio3d.com/metal-3d-printers/meltio-m600/",
  },
  {
    id: 4,
    title: "The EinScan Rigil",
    intro: "Rapid, Redefined, Reliable",
    img_url: "/images/rigil-header.jpeg",
    img_alt: "EinScan Rigil 3D Scanner",
    comment:
      "An Amazing looking product, I was pleased to use some simple js to choose the larger image from the smaller ones in the boxes.",
    slug: "einscan-rigil",
    link: "https://3dgbire.com/products/einscan-rigil",
    comparison_link: "https://www.einstar.com/products/einscan-rigil",
  },
];

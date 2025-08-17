export interface Project {
  id: number;
  title: string;
  subtitle: string;
  short_content: string;
  long_content: string;
  hosted_link: string;
  github_link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    id: 0,
    title: "Movies",
    subtitle: "An amazing learning experience",
    short_content:
      "This is an ongoing build of a remix app which is connected to a mongoDB sample movie database.",
    long_content:
      "I really like playing with this and I really love learning more about MongoDB",
    hosted_link: "https://mongo-host.netlify.app/",
    github_link: "https://github.com/SmagicJones/mongo-real-host",
    slug: "mongo-remix-movies",
  },
  {
    id: 1,
    title: "Charity Website",
    subtitle: "A Charity Website for a Local Swimming Club",
    short_content:
      "I wanted to keep costs as low as possible so I have established hosting with github pages and then managed to buy the domain name.  The Website is a bootstrap template and is due an update.",
    long_content:
      "I hope to make further improvements to this site as time goes on",
    hosted_link: "https://darwenmasters.uk/",
    github_link: "https://github.com/SmagicJones/DMSC",
    slug: "darwen-masters-swimming",
  },
  {
    id: 2,
    title: "NASA Picture of the Day",
    subtitle: "A wonderful image from somewhere in the galaxy",
    short_content: "Simple one page app using React-router V7",
    long_content:
      "A more detailed hd image is available to download via the hd image link",
    hosted_link: "https://expandedhorizons.netlify.app",
    github_link: "https://github.com/SmagicJones/nasa-picture-of-the-day",
    slug: "expanded-horizons",
  },
  {
    id: 3,
    title: "Bob Teaches Music",
    subtitle: "A new site for my music teaching",
    short_content: "This is a work in progress",
    long_content: "I like how this is coming together",
    hosted_link: "https://bobteachesmusic.netlify.app",
    github_link: "https://github.com/SmagicJones/bobteachesmusic",
    slug: "bobteaches-music",
  },
  {
    id: 4,
    title: "My First Ever Game!",
    subtitle: "Built in a html canvas using JavaScript",
    short_content: "This has been so much fun and I have learned so much...",
    long_content:
      "I wanted to find a starting point into making a game and was looking for the easiest starting point for someone familiar with html, css and js - so here I am with the HTML Canvas - I have been using OOP principles to create the game and I am really enjoying it.  There's loads of things I want to do to extend this but I've been so happy to find a starting point! and celebrating this as a win!",
    hosted_link: "https://smagicjones.github.io/shoot-em-up/",
    github_link: "https://github.com/SmagicJones/shoot-em-up",
    slug: "my-first-game",
  },
];

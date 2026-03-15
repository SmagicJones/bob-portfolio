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
    id: 1,
    title: "Bob Teaches Music",
    subtitle: "A new site for my music teaching",
    short_content: "This is now live",
    long_content:
      "Here is a website for my guitar and bass teaching - its a simple react router web app with a hubspot form.",
    hosted_link: "https://bobteachesmusic.com",
    github_link: "https://github.com/SmagicJones/bobteachesmusic-live",
    slug: "bobteaches-music",
  },
  {
    id: 2,
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

export interface Project {
  id: number;
  title: String;
  subtitle: String;
  short_content: String;
  long_content: String;
  hosted_link: String;
  github_link: String;
  slug: String;
}

export const projects: Project[] = [
  {
    id: 0,
    title: "Movies with Remix and MongoDB",
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
    title: "Darwen Masters Swimming Club",
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
];

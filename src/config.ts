import icon from "../src/assets/icon.png";

interface IConfig {
  me: {
    name: string;
    job: string;
    started: string;
    stack: string;
    hobby: string;
  };
  socials: {
    [name: string]: string;
  };
  og: {
    image: string;
  };
}

export const Config: IConfig = {
  me: {
    name: "John Doe",
    job: "backend engineer",
    started: "1970-01-01",
    stack: "Scratch",
    hobby: "gamble my life savings",
  },
  socials: {
    twitter: "https://twitter.com/JohnDoe",
    github: "https://github.com/JohnDoe",
  },
  og: {
    image: icon.src,
  },
};

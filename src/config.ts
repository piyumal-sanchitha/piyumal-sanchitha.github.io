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
    name: "Piyumal Sanchitha",
    job: "freelancer mechatronic engineer",
    started: "2020-11-01",
    stack: "C",
    hobby: "machine design and R&D",
  },
  socials: {
    facebook: "https://www.facebook.com/piyumal.sanchitha/",
    github: "https://github.com/piyumal-sanchitha",
    grabcad: "https://grabcad.com/piyumal.sanchitha-1",
  },
  og: {
    image: icon.src,
  },
};

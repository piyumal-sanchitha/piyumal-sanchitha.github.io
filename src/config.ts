interface IConfig {
  me: {
    name: string;
    job: string;
    started: string;
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
    job: "freelance mechatronics engineer",
    started: "2020-11-01",
    hobby: "machine design and R&D",
  },
  socials: {
    facebook: "https://www.facebook.com/piyumal.sanchitha/",
    github: "https://github.com/piyumal-sanchitha",
    grabcad: "https://grabcad.com/piyumal.sanchitha-1",
    linkedin: "https://www.linkedin.com/in/piyumalsanchitha/",
  },
  og: {
    image: "https://raw.githubusercontent.com/piyumal-sanchitha/piyumal-sanchitha.github.io/main/src/assets/me.jpeg",
  },
};

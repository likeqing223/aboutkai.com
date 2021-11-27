export type BilibiliVideo = {
  title: string;
  play: number;
  subtitle: string;
  description: string;
  created: number;
  bvid: string;
  pic: string;
};

export type BilibiliBangumi = {
  title: string;
  cover: string;
  url: string;
  evaluate: string;
  rating: {
    score: number;
    count: number;
  };
  publish: {
    pub_time: string;
  };
};

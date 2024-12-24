export type ProjectType = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
};

export type SocialLinkType = {
  platform: string;
  url: string;
  icon: string;
}; 
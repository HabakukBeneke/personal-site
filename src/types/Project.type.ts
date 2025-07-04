export interface Project {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
  github?: string;
  demo?: string;
  featured: boolean;
  order?: number;
}

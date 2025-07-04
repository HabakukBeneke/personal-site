import type { MenuLink, SiteConfig } from "@types";

export const menuLinks: MenuLink[] = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/resume/",
    title: "Resume",
  },
  {
    path: "/portfolio/",
    title: "Portfolio",
  },
  {
    path: "/posts/",
    title: "Blog",
  },
  {
    path: "/notes/",
    title: "Notes",
  },
  {
    path: "/about/",
    title: "About",
  },
];

export const siteConfig: SiteConfig = {
  locale: "en-US",
  authorName: "Enrique Quero",
  nickname: "Habakuk Beneke",
  obfuscatedEmail: "habakukbeneke [at] proton [dot] me",
  jobTitle: "Frontend Developer",
  siteTitle: "Enrique Quero's Resume",
  siteCreationYear: "2024",
  siteUrl: "https://habakukbeneke.com",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/equerodev/",
    github: "https://www.github.com/habakukbeneke",
    x: "https://x.com/habakukbeneke",
  },
  get copyrightYear() {
    return `${this.siteCreationYear}-${new Date().getFullYear().toString().slice(-2)}`;
  },
};

export interface SocialLink {
  label: string;
  url: string;
  icon: React.ReactNode;
}

export const socialLinks: Omit<SocialLink, "icon">[] = [
  { label: "GitHub", url: "https://github.com/elidayjuma" },
  { label: "Blog", url: "https://elidayjuma.com" },
  { label: "X", url: "https://x.com/elidayjuma" },
  { label: "Threads", url: "https://threads.com/elidayjuma" },
  { label: "LinkedIn", url: "https://linkedin.com/in/eliutherius-juma" },
  { label: "YouTube", url: "https://youtube.com/elidayjuma" },
  { label: "TikTok", url: "https://tiktok.com/@elidayjumah" },
];
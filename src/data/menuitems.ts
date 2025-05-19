export interface MenuItem {
  label: string;
  href: string;
}

export const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Blog", href: "https://elidayjuma.com/blog" },
];
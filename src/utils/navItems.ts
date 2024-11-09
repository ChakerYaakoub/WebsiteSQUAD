// navItems.ts

// navItemsEnum.ts
// the enum have to be like this : CollectionName = "good href value"
// later on try to use the same names CollectionName name and href value where you initialise  of the project
export enum NavItemsEnum {
  UserInfo = "home",
  Overview = "overview",
  AboutUs = "about",
  ContactUs = "contact",
}

export const navItems = [
  { href: "#home", text: NavItemsEnum.UserInfo },
  { href: "#overview", text: NavItemsEnum.Overview },
  { href: "#about", text: NavItemsEnum.AboutUs },
  { href: "#contact", text: NavItemsEnum.ContactUs },
];

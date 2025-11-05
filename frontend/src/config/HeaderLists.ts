interface HeaderLists {
  label: string,
  route: string,
  islink: boolean, 
}

export const HeaderLists:HeaderLists[] = [
  {
    label: "Home",
    route: "/",
    islink: true,
  },
  {
    label: "Create",
    route: "/createNFT",
    islink: true,
  },
  {
    label: "Buy",
    route: "/buy",
    islink: true,
  },
  {
    label: "drops",
    route: "/drops",
    islink: true,
  },
 
];

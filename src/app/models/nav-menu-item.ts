export interface NavigationMenuItem{
  name: string;
  path: string;
  children: NavigationMenuItem[],
  isChoosen: boolean;
}

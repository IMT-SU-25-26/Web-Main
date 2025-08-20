export interface SearchableItem {
  id: string;
  title?: string;
  name?:string;
}

export interface SideNavSupport{
  handleSideNav?: () => void;
}
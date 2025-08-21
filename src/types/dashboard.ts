export interface SearchableItem<T = string> {
  id: T;
  title?: string;
  name?:string;
}
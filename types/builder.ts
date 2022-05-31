export type Builder = {
  uid: string;
  tag: string;
  label?: string;
  type?: "section" | "component";
  settings?: {
    [key: string]: any;
  };
  childrens?: Builder[];
};

export interface LinkType {
    id:Number
    title: string;
    icon: any;
    component: any;
    nestedLink: NestedLinkType[] | null;
    path:string;
  }
  
  export interface NestedLinkType {
    title: string;
    path: string;
  }
  

export interface IMainItem {
  data: {
    nodes: IItem[];
  };
}

interface IItem {
  Name: {
    value: string;
  };
  Description: {
    value: string | undefined;
  };
  Price: {
    value: number;
  };
  Image: {
    value: {
      childImageSharp: {
        fluid: {
          src: string;
        }
      }
    }
  };
  id: string;
  cockpitId: string;
}

export interface IItemInfo {
  name: string;
  description: { value: string } | undefined;
  price: number;
  image: string;
  path: string;
}

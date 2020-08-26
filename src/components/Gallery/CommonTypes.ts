export interface IMainItem {
  data: {
    nodes: IItem[];
  }
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
  }
  Image: {
    value: URL;
  }
  id: string;
}

export interface IItemInfo {
  name: string;
  description: {value: string} | undefined;
  price: number;
  image: URL;
}

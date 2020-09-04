export interface IMainItem {
  data: {
    allCockpitItems: {
      nodes: IItem[];
    };
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
        };
      };
    };
  };
  id: string;
}

export interface IMainFooter {
  allCockpitFooter: IMainFooterInfo;
  allCockpitMenu: IMainMenu;
}

interface IMainMenu {
  nodes: IMenuLabel[];
}

interface IMainFooterInfo {
  nodes: IFooterInfo[];
}

interface IFooterInfo {
  Text: {
    value: string;
  }
}

interface IMenuLabel {
  Name: {
    value: string;
  };
}

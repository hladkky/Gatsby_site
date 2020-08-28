export interface IMainHeader {
  dataMenu: IMainMenu;
  dataPhones: IMainPhone;
}

interface IMainMenu {
  nodes: IMenuLabel[];
}

interface IMainPhone {
  nodes: IPhone[];
}

interface IPhone {
  Number: {
    value: string;
  };
}

interface IMenuLabel {
  Name: {
    value: string;
  };
}

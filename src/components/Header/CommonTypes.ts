export interface IMainMenu {
  data: {
    nodes: IMenuLabel[];
  }
}

interface IMenuLabel {
  Name: {
    value: string;
  }
}
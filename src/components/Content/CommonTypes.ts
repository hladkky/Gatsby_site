export interface IMainContent {
  data: {
    nodes: IContent[]
  };
}

interface IContent {
  Class: {value: string}
}
export interface IMainAbout {
  data: {
    nodes: IAbout[]
  };
}

interface IAbout {
  Text: {value: string}
}
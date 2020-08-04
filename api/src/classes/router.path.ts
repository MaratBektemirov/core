interface IRouterPathParams {
  url: string;
}

export class RouterPath {
  public url: string;
  public parent: RouterPath;
  public children: RouterPath[] = [];

  constructor(params: IRouterPathParams) {
    this.url = params.url;
  }

  public createChildren(params: IRouterPathParams) {
    const instance = new RouterPath(params);
    instance.parent = this;

    this.children.push(instance);

    return instance;
  }

  public getAbsoluteUrl() {
    if (this.parent) {
      return `${this.parent.getAbsoluteUrl()}/${this.url}`;
    } else {
      return '/' + this.url;
    }
  }
}

export class ApiEndpoint<T> {
  constructor(public prefix: string, public endpoints: T) {}

  get api() {
    return this.endpoints;
  }

  get client() {
    return Object.keys(this.endpoints).reduce((acc, endpoint) => {
      acc[endpoint] = this.prefix + '/' + endpoint;

      return acc;
    }, {}) as T;
  }
}

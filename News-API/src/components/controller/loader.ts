import { Options, Callback } from '../../types';

class Loader {
  constructor(protected baseLink: string, protected options: Options) {
    this.baseLink = baseLink;
    this.options = options;
  }

  public getResp<T>(
    { endpoint, options = {} }: { endpoint: string; options?: Options },
    callback: Callback<T> = (): void => {
      console.error('No callback for GET response');
    },
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  public static errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) {
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
        throw Error(res.statusText);
      }
    }

    return res;
  }

  private makeUrl(options: Options, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
    });

    return url.slice(0, -1);
  }

  public load<T>(
    method: string,
    endpoint: string,
    callback: Callback<T> = (): void => {
      console.error('No callback for GET response');
    },
    options = {},
  ): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(Loader.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;

export default jsonp;
declare function jsonp(url: string, options?: Options, cb?: RequestCallback): CancelFn;
declare function jsonp(url: string, callback?: RequestCallback): CancelFn;

type CancelFn = () => void;
type RequestCallback = (error: Error | null, data: any) => void;

interface Options {
    param?: string;
    prefix?: string;
    name?: string;
    timeout?: number;
}

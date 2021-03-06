export interface HttpError {
  ok?: boolean;
  type?: string;
  message: string;
  status: number;
  statusText: string;
  errorCode?: string;
  codes?: any;
}

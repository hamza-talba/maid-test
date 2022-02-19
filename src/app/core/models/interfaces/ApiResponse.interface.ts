import { IPagination } from "./pagination.interface";

export interface IApiDataResponse<T> extends IPagination{
  data:T[] | T
}

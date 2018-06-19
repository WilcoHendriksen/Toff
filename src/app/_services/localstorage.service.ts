import { Injectable }   from '@angular/core';
import { TokenData }    from '../_models/tokendata';

@Injectable()
export class LocalstorageService {

  constructor() { }

  public SetTokenData(tokenData: TokenData): void {
    localStorage.setItem("TokenData", JSON.stringify(tokenData));
  }

  public GetTokenData(): TokenData {
    return JSON.parse(localStorage.getItem("TokenData"));
  }

  public RemoveItem(key: string): void {
    localStorage.removeItem(key);
  }

  public SaveItem(key: string, value: string): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public GetItem(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

}

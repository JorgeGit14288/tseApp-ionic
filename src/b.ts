export class b {
    static get API_ENDPOINT() : string{
      //  return 'https://middlesitetse.azurewebsites.net/api';
        return 'http://middlesitetse.azurewebsites.net/api';
    }
    static get TIMEOUT(): number {
        return 10000
      }
      static get C_OK(): number {
        return 0
      }
    
      static get C_ERR(): number {
        return 1
      }
}
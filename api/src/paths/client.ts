import { RouterPath } from '@classes/router.path';

class Paths {
  public auth = new RouterPath({url: 'auth'});
  public login = this.auth.createChildren({url: 'login'});
  public registration = this.auth.createChildren({url: 'registration'});
  public restore = this.auth.createChildren({url: 'restore'});

  public cabinet = new RouterPath({url: 'cabinet'});
  public cabinetRealtyList = this.cabinet.createChildren({url: 'realty-list'});
  public cabinetRealtyCard = this.cabinet.createChildren({url: 'card'});
  public profile = this.cabinet.createChildren({url: 'profile'});

  public search = new RouterPath({url: 'search'});
}

const paths = new Paths();

export default paths;

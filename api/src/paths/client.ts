import { RouterPath } from '@classes/router.path';

class Paths {
  public pages = new RouterPath({url: 'page'});
  public traders = this.pages.createChildren({url: 'for-traders'});

  public auth = new RouterPath({url: 'auth'});
  public login = this.auth.createChildren({url: 'login'});
  public registration = this.auth.createChildren({url: 'registration'});
  public restore = this.auth.createChildren({url: 'restore'});

  public cabinet = new RouterPath({url: 'cabinet'});
  public invoice = this.cabinet.createChildren({url: 'invoice'});
  public account = this.cabinet.createChildren({url: 'account'});
  public content = this.cabinet.createChildren({url: 'content'});
  public partner = this.cabinet.createChildren({url: 'partner'});
}

const paths = new Paths();

export default paths;

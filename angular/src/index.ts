// export module
export { IonicModule } from './ionic-module';

// export auto generated directive
export * from './directives/proxies';

// export custom directives
export * from './directives';

// export custom providers
export * from './providers';

// ionic types
export * from './types/interfaces';

// ionic oute reuse strategy
export * from './util/ionic-router-reuse-strategy';

/*tslint:disable*/
import '@ionic/core';
import './ionic-angular';

import { defineCustomElements } from '@ionic/core';
defineCustomElements(window);

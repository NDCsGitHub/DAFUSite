// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as File_Index_getConfig } from './pages/index';

// prettier-ignore
type Page =
| { path: '/cart'; render: 'static' }
| { path: '/contact'; render: 'static' }
| ({ path: '/' } & GetConfigResponse<typeof File_Index_getConfig>)
| { path: '/menus/dineIn'; render: 'static' }
| { path: '/menus/takeout'; render: 'static' }
| { path: '/onlineOrder'; render: 'static' }
| { path: '/services/catering'; render: 'static' }
| { path: '/services/events'; render: 'static' }
| { path: '/services/parties'; render: 'static' };

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}

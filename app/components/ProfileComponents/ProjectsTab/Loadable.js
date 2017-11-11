/**
 *
 * Asynchronously loads the component for ProjectsTab
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

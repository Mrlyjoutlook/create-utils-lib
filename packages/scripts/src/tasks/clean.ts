import del from 'del';
import { base, esdoc } from '../config';

function clean(cb: () => void) {
  del([base.esTemp, base.dist, base.types, esdoc.destination]);
  cb();
}

export default clean;

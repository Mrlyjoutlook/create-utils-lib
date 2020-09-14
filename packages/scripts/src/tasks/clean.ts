import del from 'del';
import config from '../config';

function clean(cb: () => void) {
  del([config.base.esTemp, config.base.dist, config.esdoc.destination]);
  cb();
}

export default clean;

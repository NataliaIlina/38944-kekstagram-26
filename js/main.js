import './upload.js';
import {loadPhotos} from './api.js';
import {renderErrorMessage} from './error-popup.js';
import {renderPhotos} from './gallery.js';
import {showFilters, renderFilteredPhotos} from './filterPhotos.js';
import {debounce} from './utils.js';

const RERENDER_DELAY = 500;

debounce ();
loadPhotos((photos) => {
  renderPhotos(photos);
  showFilters();
  renderFilteredPhotos(debounce(
    () => renderPhotos(photos),
    RERENDER_DELAY,
  ));
}, renderErrorMessage);

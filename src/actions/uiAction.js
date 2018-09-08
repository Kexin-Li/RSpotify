import { UPDATE_PREVIEW_TITLE } from './types';

export function updatePreviewTitle(title) {
  return {
    type: UPDATE_PREVIEW_TITLE,
    payload: title
  };
}
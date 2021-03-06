import { createAction } from 'redux-actions';
import actionTypes from '../actionTypes';
import * as apis from '../../apis';

const returnArgumentsFn = function (payload) {
  return Promise.resolve(payload);
};

const messageActions = {
  markAllRead: createAction(actionTypes.MESSAGES_MARK_ALL_READ),
  createMessage: createAction(
    actionTypes.MESSAGES_CREATE_USER_MESSAGE,
    returnArgumentsFn,
  ),
  createSusiMessage: createAction(
    actionTypes.MESSAGES_CREATE_SUSI_MESSAGE,
    returnArgumentsFn,
  ),
  resetVoice: createAction(actionTypes.MESSAGES_RESET_MESSAGE_VOICE),
  getHistoryFromServer: createAction(
    actionTypes.MESSAGES_GET_HISTORY_FROM_SERVER,
    apis.getHistory,
  ),
  initializeMessageStore: createAction(
    actionTypes.MESSAGES_INITIALIZE_MESSAGE_STORE,
    returnArgumentsFn,
  ),
  initializeMessageStoreFailed: createAction(
    actionTypes.MESSAGES_INITIALIZE_MESSAGE_STORE_FAILED,
    returnArgumentsFn,
  ),
  postSkillFeedback: createAction(
    actionTypes.MESSAGES_POST_SKILL_FEEDBACK,
    apis.postSkillFeedback,
  ),
  saveSkillFeedback: createAction(
    actionTypes.MESSAGES_SAVE_SKILL_FEEDBACK,
    returnArgumentsFn,
  ),
  resetMessageVoice: createAction(actionTypes.MESSAGES_RESET_MESSAGE_VOICE),
  getUserGeoData: createAction(
    actionTypes.MESSAGES_GET_USER_GEO_DATA,
    apis.getDefaultMapData,
  ),
  setPendingUserMessage: createAction(
    actionTypes.MESSAGES_SET_PENDING_USER_MESSAGE,
    returnArgumentsFn,
  ),
};

export default messageActions;

export const START_CHAT = 'START_CHAT';
export const NEW_CHAT_MESSAGE = 'NEW_CHAT_MESSAGE';
export const ADD_CHAT_MESSAGE = 'ADD_CHAT_MESSAGE';
export const EMIT_CHAT_TYPING_STATUS = 'EMIT_CHAT_TYPING_STATUS';
export const UPDATE_CHAT_USER_ONLINE_STATUS = 'UPDATE_CHAT_USER_ONLINE_STATUS';
export const UPDATE_CHAT_USER_TYPING_STATUS = 'UPDATE_CHAT_USER_TYPING_STATUS';

import { updateChatRoomNewMessageText } from 'app/store/actions/index';

export function startChat() {
	return {
		type: START_CHAT
	}
};
exports.startChat = startChat;

function newChatMessage(data) {
	return {
		type: NEW_CHAT_MESSAGE,
		data: data
	}
};
exports.newChatMessage = newChatMessage;

function addChatMessage(data) {
	return {
		type: ADD_CHAT_MESSAGE,
		data: data
	}
};
exports.addChatMessage = addChatMessage

function updateChatUserOnlineStatus(isOnline, name) {
	return {
		type: UPDATE_CHAT_USER_ONLINE_STATUS,
		isOnline: isOnline,
		name: name
	}
};
exports.updateChatUserOnlineStatus = updateChatUserOnlineStatus;

function updateChatUserTypingStatus(isTyping, name) {
	return {
		type: UPDATE_CHAT_USER_TYPING_STATUS,
		isTyping: isTyping,
		name: name
	}
};
exports.updateChatUserTypingStatus = updateChatUserTypingStatus;

function emitChatTypingStatus() {
	return {
		type: EMIT_CHAT_TYPING_STATUS
	}
};
exports.emitChatTypingStatus = emitChatTypingStatus;

function sendChatMessage() {
	return function (dispatch, getState) {
		const name = getState().session.userName;
		const message = getState().pages.chatRoom.newMessageText;
		const timestamp = new Date().toUTCString();
		
		dispatch(newChatMessage({ name: name, message: message, timestamp: timestamp }));
		dispatch(updateChatRoomNewMessageText(''));
		dispatch(updateChatUserTypingStatus(false, name));
	}
};
exports.sendChatMessage = sendChatMessage;

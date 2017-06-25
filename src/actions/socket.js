

export const DISCONNECTED = 'DISCONNECTED';
export const CONNECTED = 'CONNECTED';
export const MESSAGERECEIVED = 'MESSAGERECEIVED';
export const CONNECTING = 'CONNECTING';
export const CHAT_MESSAGE = 'CHAT_MESSAGE';
export const DISCONNECT = 'DISCONNECT';
export const SEND_CHAT_MESSAGE = 'SEND_CHAT_MESSAGE';



export function connect() {
  return {
    type: CONNECT,
    url : ''
  };
}

export function messageReceived(msg) {
  return {
    type: MESSAGERECEIVED,
    payload : msg
  };
}

export function messageSend(msg) {
  return {
    type: SEND,
    payload : msg
  };
}





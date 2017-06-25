export const GET_MESSAGE = 'GET_MESSAGE';
export const SET_MESSAGE = 'SET_MESSAGE';

export const GET_MESSAGES = 'GET_MESSAGES';
export const SET_MESSAGES = 'SET_MESSAGES';

export function getInbox() {
  return {
    type: GET_MESSAGES,
  };
}
// upadte list of messages like inbox
export function updateInbox(messageList) {


    // // filter contacts with message
    // var filterRoster = payload.filter((value) => {
    //     return true;
    // });
    //
    // // sort roster
    // var roster = (filterRoster.map((i,v) => {
    //     i.pic = i.p.sm;
    //     return i;
    // }).sort((a, b) => {
    //     return b.lst_msg - a.lst_msg;
    // }));


    // roster.length = (roster.length > 6)? 6 : roster.length;

    return {
        type: SET_MESSAGES,
        messageList: messageList
    };
}
// update a particular message
export function updateMessage(message) {
    return {
        type: SET_MESSAGE,
        message: message
    };
}

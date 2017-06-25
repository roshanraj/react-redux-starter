export const GET_ROSTER = 'GET_ROSTER';
export const UPDATE_ROSTER = 'UPDATE_ROSTER';

export function getRoster() {
  return {
    type: GET_ROSTER,
  };
}

export function updateRoster(payload) {


    // filter contacts with message
    var filterRoster = payload.filter((value) => {
        return true;
    });

    // sort roster
    var roster = (filterRoster.map((i,v) => {
        i.pic = i.p.sm;
        return i;
    }).sort((a, b) => {
        return b.lst_msg - a.lst_msg;
    }));


    // roster.length = (roster.length > 6)? 6 : roster.length;

    return {
        type: UPDATE_ROSTER,
        roster: roster
    };
}

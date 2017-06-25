export const AUTH = 'AUTH';


export function auth(isauth, authdata) {

    return {
        type: AUTH,
        isAuth: isauth,
        orgName:authdata.org_n,
        userId: authdata.id,
        email: authdata.e,
        name: authdata.n,
        pic: authdata.p.lg,
        status: authdata.s,
    };
}

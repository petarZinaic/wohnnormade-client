import * as userClient from "../client/userClient";

export const getuserClient = (id: string) => {
    //SVA LOGIKA
    return userClient.getUserClient(id);
}
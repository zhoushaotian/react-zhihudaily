/**
 * actions type
 */
const GET_LIST = 'GET_LIST';
const GET_CURRENT_POST = 'GET_CURRENT_POST';
const ADD_SELECT_TIME = 'ADD_SELECT_TIME';
const DE_SELECT_TIME = 'DE_SELECT_TIME';

/**
 * actions creator
 */

export function getList(time) {
    return {
        type: GET_LIST,
        time
    };
}

export function getCurrentPost(id) {
    return {
        type: GET_CURRENT_POST,
        id  
    };
}

export function addSelectTime() {
    return {
        type: ADD_SELECT_TIME
    };
}

export function deSlectTime() {
    return {
        type: DE_SELECT_TIME
    };
}
//输出actions枚举
export const actionsType = {
    GET_LIST,
    GET_CURRENT_POST,
    ADD_SELECT_TIME,
    DE_SELECT_TIME
};
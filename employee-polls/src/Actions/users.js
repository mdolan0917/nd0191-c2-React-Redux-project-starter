export const GET_USER = 'GET_USER';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION';

export function getUser(users){
    return{
        type: GET_USER,
        users
    };
};

export function addQuestion(question){
    return{
        type: SAVE_ANSWER,
        question
    };
};

export function addQuestionAnswer({ authUsers, id, answer}){
    return{
        type: SAVE_QUESTION_ANSWER,
        id,
        answer,
        authUsers
    };
};
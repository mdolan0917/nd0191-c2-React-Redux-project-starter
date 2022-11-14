import { saveQuestion, saveQuestionAnswer} from "../Utils/api"; 
import { addQuestion, addQuestionAnswer} from "./users"

export const GET_QUESTION = 'GET_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER_QUESTION = 'ADD_ANSWER_QUESTION';


export function getQuestion(question){
    return{
        type: GET_QUESTION,
        question
    }
}

export function addQuestionAction(question){
    return{
        type: ADD_QUESTION,
        question
    }
}

export function addAnswerAction({authUser, id, answer}){
    return{
        type: ADD_ANSWER_QUESTION,
        id,
        answer,
        authUser
    }
}

export function handleAddQuestion(optionOne, optionTwo){
    return (dispatch, getState) => {
        const { authUser } = getState();

        return saveQuestion(optionOne, optionTwo, authUser)
        .then((question) => {
            dispatch(addQuestion(question));
            dispatch(addQuestionAnswer(question));
        })
    };

}

export function handleAddAnswer(questionId, answer){
    return(dispatch, getState) => {
        const { authUser } = getState();
        
        return saveQuestionAnswer(authUser.Id, questionId, answer)
            .then(() => {
                dispatch(addQuestion(authUser.Id, questionId, answer));
                dispatch(addQuestionAnswer(authUser.Id, questionId, answer));
            })
    }

}
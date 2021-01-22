import { db } from "../firebase/firebase-config";

export const loadQuestions = async () => {
  const questionsSnap = await db.collection('questions').get();

  const questions = questionsSnap.docs.map(async snapChild => {
    const answersSnap = await db.collection('questions').doc(snapChild.id).collection('answerOptions').get();

    const answers = answersSnap.docs.map(snapChild => {
      return ({
        answerText: snapChild.data().answerText,
        isCorrect: snapChild.data().isCorrect
      });
    });

    return ({
      questionText: snapChild.data().questionText,
      answerOptions: answers
    })
  });
  
  return questions;
}

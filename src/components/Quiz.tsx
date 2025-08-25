import React, { useState } from 'react';
import { Quiz as QuizType } from '../types';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';

interface QuizProps {
  quiz: QuizType;
}

export const Quiz: React.FC<QuizProps> = ({ quiz }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    if (submitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setShowResults(true);
  };

  const getScore = () => {
    let correct = 0;
    quiz.questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const score = getScore();
  const percentage = Math.round((score / quiz.questions.length) * 100);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8">
      <div className="flex items-center space-x-2 mb-6">
        <HelpCircle className="h-6 w-6 text-blue-600" />
        <h3 className="text-xl font-bold text-gray-900">{quiz.title}</h3>
      </div>

      {showResults && (
        <div className={`p-4 rounded-lg mb-6 ${
          percentage >= 70 ? 'bg-green-100 border border-green-200' : 'bg-red-100 border border-red-200'
        }`}>
          <h4 className={`font-semibold ${percentage >= 70 ? 'text-green-800' : 'text-red-800'}`}>
            Résultat: {score} / {quiz.questions.length} ({percentage}%)
          </h4>
          <p className={`text-sm ${percentage >= 70 ? 'text-green-700' : 'text-red-700'}`}>
            {percentage >= 70 ? 'Félicitations ! Vous avez réussi ce quiz.' : 'Continuez vos efforts ! Relisez le contenu et réessayez.'}
          </p>
        </div>
      )}

      <div className="space-y-6">
        {quiz.questions.map((question, questionIndex) => {
          const selectedAnswer = selectedAnswers[question.id];
          const isCorrect = selectedAnswer === question.correctAnswer;
          
          return (
            <div key={question.id} className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-4">
                {questionIndex + 1}. {question.question}
              </h4>
              
              <div className="space-y-2">
                {question.options.map((option, optionIndex) => {
                  const isSelected = selectedAnswer === optionIndex;
                  const isCorrectOption = optionIndex === question.correctAnswer;
                  
                  let buttonClass = 'w-full text-left p-3 rounded-lg border transition-colors ';
                  
                  if (!submitted) {
                    buttonClass += isSelected 
                      ? 'border-blue-500 bg-blue-50 text-blue-700' 
                      : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50';
                  } else {
                    if (isCorrectOption) {
                      buttonClass += 'border-green-500 bg-green-50 text-green-700';
                    } else if (isSelected && !isCorrectOption) {
                      buttonClass += 'border-red-500 bg-red-50 text-red-700';
                    } else {
                      buttonClass += 'border-gray-300 bg-gray-50';
                    }
                  }
                  
                  return (
                    <button
                      key={optionIndex}
                      onClick={() => handleAnswerSelect(question.id, optionIndex)}
                      className={buttonClass}
                      disabled={submitted}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {submitted && (
                          <>
                            {isCorrectOption && <CheckCircle className="h-5 w-5 text-green-600" />}
                            {isSelected && !isCorrectOption && <XCircle className="h-5 w-5 text-red-600" />}
                          </>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
              
              {submitted && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Explication:</strong> {question.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {!submitted && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={Object.keys(selectedAnswers).length !== quiz.questions.length}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            Valider le quiz
          </button>
        </div>
      )}
    </div>
  );
};
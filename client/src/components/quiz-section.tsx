import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Check, RotateCcw, Trophy } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { QuizQuestion } from "@/types/quiz";

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which items belong in the organic waste bin?",
    options: [
      { id: 'a', text: "Fruit peels, vegetable scraps, and coffee grounds", correct: true },
      { id: 'b', text: "Plastic bottles, metal cans, and glass jars", correct: false },
      { id: 'c', text: "Batteries, electronics, and chemical containers", correct: false },
    ],
  },
  {
    id: 2,
    question: "How long does it typically take to create usable compost?",
    options: [
      { id: 'a', text: "1-2 weeks", correct: false },
      { id: 'b', text: "2-6 months", correct: true },
      { id: 'c', text: "1-2 years", correct: false },
    ],
  },
  {
    id: 3,
    question: "What is the main benefit of waste segregation?",
    options: [
      { id: 'a', text: "It makes garbage trucks lighter", correct: false },
      { id: 'b', text: "It enables proper recycling and composting", correct: true },
      { id: 'c', text: "It saves money on garbage bags", correct: false },
    ],
  },
  {
    id: 4,
    question: "Which action helps reduce plastic waste most effectively?",
    options: [
      { id: 'a', text: "Buying more plastic products", correct: false },
      { id: 'b', text: "Using reusable bags and containers", correct: true },
      { id: 'c', text: "Throwing all plastic in one bin", correct: false },
    ],
  },
  {
    id: 5,
    question: "What should you do with batteries and electronics?",
    options: [
      { id: 'a', text: "Put them in the organic waste bin", correct: false },
      { id: 'b', text: "Throw them in regular trash", correct: false },
      { id: 'c', text: "Take them to special collection centers", correct: true },
    ],
  },
];

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const submitQuizMutation = useMutation({
    mutationFn: (data: { score: number; totalQuestions: number; answers: string[] }) =>
      apiRequest('POST', '/api/quiz/submit', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/quiz/stats'] });
      toast({
        title: "Quiz submitted successfully!",
        description: "Your score has been recorded.",
      });
    },
    onError: () => {
      toast({
        title: "Error submitting quiz",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleAnswerSelect = (questionId: number, optionId: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    const calculatedScore = quizQuestions.reduce((acc, question) => {
      const selectedOption = selectedAnswers[question.id];
      const correctOption = question.options.find(opt => opt.correct);
      return acc + (selectedOption === correctOption?.id ? 1 : 0);
    }, 0);

    setScore(calculatedScore);
    setShowResults(true);

    // Submit to backend
    const answers = quizQuestions.map(q => selectedAnswers[q.id] || '');
    submitQuizMutation.mutate({
      score: calculatedScore,
      totalQuestions: quizQuestions.length,
      answers,
    });
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const currentQ = quizQuestions[currentQuestion];

  if (showResults) {
    return (
      <section id="quiz" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect rounded-3xl p-8 text-center">
              <div className="animate-bounce mb-6">
                <Trophy className="text-yellow-500 w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h3>
              <p className="text-xl text-gray-600 mb-6">
                Your Score: <span className="font-bold text-green-600">{score}</span> / {quizQuestions.length}
              </p>
              <div className="text-lg text-gray-700 mb-6">
                {score === quizQuestions.length
                  ? "🎉 Perfect! You are a waste management expert!"
                  : score >= 3
                  ? "👍 Great job! You have a good understanding of waste management."
                  : "📚 Keep learning! Review the materials and try again."}
              </div>
              <Button
                onClick={handleRestart}
                className="ripple bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold"
              >
                Take Quiz Again
                <RotateCcw className="ml-2 w-5 h-5" />
              </Button>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Test Your Knowledge</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take our interactive quiz to see how much you've learned
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Quiz Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {Object.keys(selectedAnswers).length} / {quizQuestions.length}
              </span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
          
          {/* Quiz Container */}
          <Card className="glass-effect rounded-3xl p-8">
            <div className="quiz-question">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{currentQ.question}</h3>
              <div className="space-y-4">
                {currentQ.options.map((option) => (
                  <div
                    key={option.id}
                    className={`quiz-option border-2 rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
                      selectedAnswers[currentQ.id] === option.id
                        ? 'selected border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                    onClick={() => handleAnswerSelect(currentQ.id, option.id)}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center ${
                          selectedAnswers[currentQ.id] === option.id
                            ? 'border-green-500 bg-green-500'
                            : 'border-gray-300'
                        }`}
                      >
                        {selectedAnswers[currentQ.id] === option.id && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <span className="text-gray-700">{option.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quiz Navigation */}
            <div className="flex justify-between items-center mt-8">
              <Button
                onClick={handlePrev}
                disabled={currentQuestion === 0}
                className="ripple bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold disabled:opacity-50"
                variant="outline"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Previous
              </Button>
              
              {currentQuestion === quizQuestions.length - 1 ? (
                <Button
                  onClick={handleSubmit}
                  disabled={!selectedAnswers[currentQ.id] || submitQuizMutation.isPending}
                  className="ripple bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
                >
                  {submitQuizMutation.isPending ? 'Submitting...' : 'Submit Quiz'}
                  <Check className="ml-2 w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={!selectedAnswers[currentQ.id]}
                  className="ripple bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
                >
                  Next
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

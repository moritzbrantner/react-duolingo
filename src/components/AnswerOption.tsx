export const AnswerOption = ({ key, selectedAnswer, onClick, answer }: { key: number, selectedAnswer: number, onClick: () => void, answer: { icon: React.JSX.Element, name: string } }) => {

    return (<div
        key={key}
        className={
            key === selectedAnswer
                ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
        }
        role="radio"
        aria-checked={key === selectedAnswer}
        tabIndex={0}
        onClick={onClick}
    >
        {answer.icon}
        <h2 className="text-center">{answer.name}</h2>
    </div>)
};
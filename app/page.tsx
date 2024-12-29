import Link from "next/link"; // navigation ko lagi link import gareko Next.js bata

// aba yo component le landing page ko content handle garcha
const QuizLandingPage = () => {
  return (
    <div className="quiz-container">
      {" "}
      {/* landing page ko main container */}
      <h2>Welcome to the Interactive Quiz!</h2>{" "}
      {/* user lai welcome message dekhaune */}
      <Link href="/questions">
        {" "}
        {/* button click bhayo bhane questions page ma jane */}
        <button className="start-btn">Start Quiz</button>{" "}
        {/* quiz suru garna button */}
      </Link>
    </div>
  );
};

export default QuizLandingPage; // yo component export garna

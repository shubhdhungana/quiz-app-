// quiz folder related ho yo, sabai quiz related code yeta huncha
import Link from 'next/link'; // Link import gareko cha for navigation between pages

// aba yo component le landing page banaucha
const QuizLandingPage = () => {
    return (
        <div className="quiz-container"> 
            <h1>This is Subham Quiz</h1>
            <Link href="/questions"> {/* aba yo button click garyo bhane questions page ma jaancha */}
                <button className="start-btn">Start Quiz</button> 
            </Link>
        </div>
    );
};

export default QuizLandingPage; // aba aru jagah ma use garna export gareko

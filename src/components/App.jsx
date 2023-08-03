
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import css from "./App.module.css"
import { useState } from "react";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = countTotalFeedback > 0 ? Math.round(good / countTotalFeedback * 100) : 0;

  const addByClick = option=> {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
    }
  };
   
  
  return (
    <main className={css.container}>
      <Section title='Please leave feedback' >
        <FeedbackOptions onLeaveFeedback={addByClick} options={['good', 'neutral', 'bad']} />
      </Section>
      <Section title='Statistics'>
        {countTotalFeedback > 0 ? (<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage} />) :
          (<Notification message='There is no feedback' />)}
      </Section>
    </main>
  )
};


import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import css from "./App.module.css"

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
    bad: 0,
  };
  

  addByClick = option =>
    this.setState(
      (prevState) => ({ [option]: prevState[option] + 1 })
    );
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return  (good + neutral + bad);
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total>0 ? Math.round(good / total * 100) : 0;
  }
  
  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    return (
      <main className={css.container}>
        <Section title= 'Please leave feedback' >
          <FeedbackOptions onLeaveFeedback={this.addByClick} options={Object.keys(this.state)}/>
        </Section>
        <Section title='Statistics'>
          {total > 0 ? (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage} />) :
            (<Notification message='There is no feedback'/>)}
        </Section>
    </main>
    )
  }
  
};

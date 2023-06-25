import PropTypes from 'prop-types'

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      <h2 className="stats">Statistics</h2>
      <p className="stats-good">Good: {good}</p>
      <p className="stats-neutral">Neutral: {neutral}</p>
      <p className="stats-bad">Bad: {bad}</p>
      <p className="stats-total">Total: {total}</p>
      <p className="stats-positive-feedbacl">
        Positive feedback: {positiveFeedback}%</p>
    </>
  );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
  };
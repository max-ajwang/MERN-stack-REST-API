import Wrapper from "../assets/wrappers/IncomeInfo";

const IncomeInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className="income-icon">{icon}</span>
      <span className="income-text">{text}</span>
    </Wrapper>
  );
};
export default IncomeInfo;

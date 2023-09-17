import Income from "./Income";
import Wrapper from "../assets/wrappers/IncomesContainer";
import { useAllIncomesContext } from "../pages/AllIncomes";

const IncomesContainer = () => {
  const { data } = useAllIncomesContext();
  const { incomes } = data;
  if (incomes.length === 0) {
    return (
      <Wrapper>
        <h2>No Income to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="incomes">
        {incomes.map((income) => {
          return <Income key={income._id} {...income} />;
        })}
      </div>
    </Wrapper>
  );
};

export default IncomesContainer;

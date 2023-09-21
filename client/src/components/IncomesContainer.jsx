import Income from "./Income";
import Wrapper from "../assets/wrappers/IncomesContainer";
import { useAllIncomesContext } from "../pages/AllIncomes";
import PageBtnContainer from "./PageBtnContainer";

const IncomesContainer = () => {
  const { data } = useAllIncomesContext();
  const { incomes, totalIncomes, numOfPages } = data;
  if (incomes.length === 0) {
    return (
      <Wrapper>
        <h2>No Income to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalIncomes} Earning{incomes.length > 1 && "s"} found
      </h5>
      <div className="incomes">
        {incomes.map((income) => {
          return <Income key={income._id} {...income} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default IncomesContainer;

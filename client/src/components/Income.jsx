import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link, Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/Income";
import IncomeInfo from "./IncomeInfo";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const Income = ({
  _id,
  position,
  company,
  incomeLocation,
  incomeType,
  createdAt,
  incomeStatus,
}) => {
  const date = day(createdAt).format("MMM Do, YYYY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <IncomeInfo icon={<FaLocationArrow />} text={incomeLocation} />
          <IncomeInfo icon={<FaCalendarAlt />} text={date} />
          <IncomeInfo icon={<FaBriefcase />} text={incomeType} />
          <div className={`status ${incomeStatus}`}>{incomeStatus}</div>
        </div>
        <footer className="actions">
          <Link to={`../edit-income/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form method="post" action={`../delete-income/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Income;

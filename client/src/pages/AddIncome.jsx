import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import { INCOME_STATUS, INCOME_TYPE } from "../../../utils/constants";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/incomes", data);
    toast.success("Income added successfully ");
    return redirect("all-incomes");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddIncome = () => {
  const { user } = useOutletContext();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add income</h4>
        <div className="form-center">
          <FormRow type="text" name="position" />
          <FormRow type="text" name="company" />
          <FormRow
            type="text"
            labelText="income location"
            name="incomeLocation"
            defaultValue={user.location}
          />
          <FormRowSelect
            labelText="income status"
            name="incomeStatus"
            defaultValue={INCOME_STATUS.PENDING}
            list={Object.values(INCOME_STATUS)}
          />
          <FormRowSelect
            labelText="income type"
            name="incomeType"
            defaultValue={INCOME_TYPE.FULL_TIME}
            list={Object.values(INCOME_TYPE)}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddIncome;

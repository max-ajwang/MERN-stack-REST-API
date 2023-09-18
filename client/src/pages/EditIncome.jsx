import { FormRow, FormRowSelect } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useLoaderData } from "react-router-dom";
import { INCOME_STATUS, INCOME_TYPE } from "../../../utils/constants";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/incomes/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard/all-incomes");
  }
};
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(`/incomes/${params.id}`, data);
    toast.success("Income edited successfully");
    return redirect("/dashboard/all-incomes");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const EditIncome = () => {
  const { income } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit income</h4>
        <div className="form-center">
          <FormRow type="text" name="position" defaultValue={income.position} />
          <FormRow type="text" name="company" defaultValue={income.company} />
          <FormRow
            type="text"
            name="incomeLocation"
            labelText="income location"
            defaultValue={income.incomeLocation}
          />
          <FormRowSelect
            name="incomeStatus"
            labelText="income status"
            defaultValue={income.incomeStatus}
            list={Object.values(INCOME_STATUS)}
          />
          <FormRowSelect
            name="incomeType"
            labelText="income type"
            defaultValue={income.incomeType}
            list={Object.values(INCOME_TYPE)}
          />
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "submitting..." : "submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};
export default EditIncome;

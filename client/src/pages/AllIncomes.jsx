import { toast } from "react-toastify";
import { IncomesContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch.get("/incomes");
    return {
      data,
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllIncomesContext = createContext();
const AllIncomes = () => {
  const { data } = useLoaderData();

  return (
    <AllIncomesContext.Provider value={{ data }}>
      <SearchContainer />
      <IncomesContainer />
    </AllIncomesContext.Provider>
  );
};

export const useAllIncomesContext = () => useContext(AllIncomesContext);

export default AllIncomes;

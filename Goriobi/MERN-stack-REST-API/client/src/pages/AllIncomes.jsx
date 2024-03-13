import { toast } from "react-toastify";
import { IncomesContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const { data } = await customFetch.get("/incomes", { params });
    return {
      data,
      searchValues: { ...params },
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllIncomesContext = createContext();

const AllIncomes = () => {
  const { data, searchValues } = useLoaderData();

  return (
    <AllIncomesContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <IncomesContainer />
    </AllIncomesContext.Provider>
  );
};

export const useAllIncomesContext = () => useContext(AllIncomesContext);

export default AllIncomes;

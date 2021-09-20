import { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const PageSearch = ({ setSearchedRepo, getAPIdata, searchedRepo }) => {
  const formSchema = yup.object().shape({
    input: yup.string().required("Campo não pode estar em branco"),
  });
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = (data) => {
    getAPIdata(`https://api.github.com/repos/${data.input}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <input
          type="text"
          placeholder="Search repository"
          {...register("input")}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
export default PageSearch;

import { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Button } from "./style.js";
const PageSearch = ({ getAPIdata, isValid }) => {
  const formSchema = yup.object().shape({
    input: yup.string().required("Campo não pode estar em branco"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = (data) => {
    getAPIdata(`https://api.github.com/repos/${data.input}`);
  };
  useEffect(() => console.log(isValid), [isValid]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          type="text"
          placeholder="Search repository"
          {...register("input")}
        />
        <Button type="submit">Search</Button>
        <p>{isValid ? errors.input?.message : "Repositório não encontrado"}</p>
      </form>
    </>
  );
};
export default PageSearch;

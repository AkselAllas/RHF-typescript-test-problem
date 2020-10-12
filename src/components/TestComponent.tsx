import * as React from "react";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";

interface MyForm {
  firstName: string;
}

const TestComponent = (onSubmit: any) => {
  const reactHookFormMethods = useForm<MyForm>({defaultValues: {firstName: "paku"}});
  const { register } = reactHookFormMethods;
  const { handleSubmit } = reactHookFormMethods;
  return (
    <FormProvider {...reactHookFormMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">input label:</label>
        <input name="firstName" ref={register} />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default TestComponent;
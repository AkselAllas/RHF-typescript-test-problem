import * as React from "react";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";

interface MyForm {
  firstName: number;
}

const TestComponent = ({onSubmit}:{onSubmit: any}) => {
  const reactHookFormMethods = useForm<MyForm>({defaultValues: {firstName: 0}});
  const { register } = reactHookFormMethods;
  const { handleSubmit } = reactHookFormMethods;
  return (
    <FormProvider {...reactHookFormMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="number" data-testid="input-testid" name="firstName" ref={register({min:0})} />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default TestComponent;
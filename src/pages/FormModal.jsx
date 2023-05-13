import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import CustomInput from "../Components/CustomInput";

const FormModal = ({ imageProps }) => {
  const { data } = useSelector((state) => state.predict);
  const { register, setValue, getValues } = useForm({
    mode: "all",
    defaultValues: {
      p: "",
      q: "",
      d: "",
      mse: "",
      mae: "",
      rmse: "",
      tt_Train: "",
      tt_Test: "",
    },
  });

  useEffect(() => {
    if (data) {
      setValue("p", data.p !== undefined ? data.p : -1);
      setValue("q", data.q !== undefined ? data.q : -1);
      setValue("d", data.d !== undefined ? data.d : -1);
      setValue("mse", data.mse !== undefined ? data.mse : -1);
      setValue("mae", data.mae !== undefined ? data.mae : -1);
      setValue("rmse", data.rmse !== undefined ? data.rmse : -1);
      setValue("tt_Train", data.tt_Train !== undefined ? data.tt_Train : -1);
      setValue("tt_Test", data.tt_Test !== undefined ? data.tt_Test : -1);
    }
  }, [data, setValue]);
  return (
    <div className="formModal">
      <form>
        {getValues("p") === -1 ? (
          <></>
        ) : (
          <CustomInput
            register={register}
            setValue={setValue}
            id="p"
            label={"Kết quả hệ số p"}
            radius="2px"
            height="30px"
            type={"text"}
            check={true}
            border={"1px solid #00d1a3"}
          ></CustomInput>
        )}
        {getValues("q") === -1 ? (
          <></>
        ) : (
          <CustomInput
            register={register}
            setValue={setValue}
            id="q"
            label={"Kết quả hệ số q"}
            radius="2px"
            height="30px"
            type={"text"}
            check={true}
            border={"1px solid #00d1a3"}
          ></CustomInput>
        )}
        {getValues("d") === -1 ? (
          <></>
        ) : (
          <CustomInput
            register={register}
            setValue={setValue}
            id="d"
            label={"Kết quả hệ số d"}
            radius="2px"
            height="30px"
            type={"text"}
            check={true}
            border={"1px solid #00d1a3"}
          ></CustomInput>
        )}
        {getValues("mse") === -1 ? (
          <></>
        ) : (
          <CustomInput
            register={register}
            setValue={setValue}
            id="mse"
            label={"Kết quả hệ số mse"}
            radius="2px"
            height="30px"
            type={"text"}
            check={true}
            border={"1px solid #00d1a3"}
          ></CustomInput>
        )}
        {getValues("mae") === -1 ? (
          <></>
        ) : (
          <CustomInput
            register={register}
            setValue={setValue}
            id="mae"
            label={"Kết quả hệ số mae"}
            radius="2px"
            height="30px"
            type={"text"}
            check={true}
            border={"1px solid #00d1a3"}
          ></CustomInput>
        )}
        {getValues("rmse") === -1 ? (
          <></>
        ) : (
          <CustomInput
            register={register}
            setValue={setValue}
            id="rmse"
            label={"Kết quả hệ số rmse"}
            radius="2px"
            height="30px"
            type={"text"}
            check={true}
            border={"1px solid #00d1a3"}
          ></CustomInput>
        )}
        {getValues("tt_Train") === -1 ? (
          <></>
        ) : (
          <CustomInput
            register={register}
            setValue={setValue}
            id="tt_Train"
            label={"Thời gian training"}
            radius="2px"
            height="30px"
            type={"text"}
            check={true}
            border={"1px solid #00d1a3"}
          ></CustomInput>
        )}

        {getValues("tt_Test") === -1 ? (
          <></>
        ) : (
          <CustomInput
            register={register}
            setValue={setValue}
            id="tt_Test"
            label={"Thời gian testing"}
            radius="2px"
            height="30px"
            type={"text"}
            check={true}
            border={"1px solid #00d1a3"}
          ></CustomInput>
        )}
      </form>
      <img src={imageProps?.value} alt="" style={{ width: "70%" }} />
    </div>
  );
};

export default FormModal;

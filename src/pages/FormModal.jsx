import React, { useEffect } from "react";
import arima from "../assets/img/arima.jpg";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import CustomInput from "../Components/CustomInput";

const FormModal = () => {
  const { data } = useSelector((state) => state.predict);
  console.log(data.d)
  const { register, setValue } = useForm({
    mode: "all",
    defaultValues: {
        p: "",
        q: "",
        d: "",
        mse: "",
        mae: "",
        rmse: "",
      },
    });
  
    useEffect(() => {
      if (data) {
        setValue("p", data.p);
        setValue("q", data.q);
        setValue("d", data.d);
        setValue("mse", data.mse);
        setValue("mae", data.mae);
        setValue("rmse", data.rmse);
      }
    }, [data, setValue]);
  return (
    <div className="formModal">
      <form>
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
      </form>
      <img src={arima} style={{ width: "70%" }} />
    </div>
  );
};

export default FormModal;

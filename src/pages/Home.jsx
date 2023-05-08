import React, { useState } from "react";
import InputFile from "../Components/InputFile";
import { useForm } from "react-hook-form";
import { ratioList } from "../const/listConst";
import SelectCustom from "../Components/Select";
import { attList } from "../const/attConst";
import { algorithmConst } from "../const/algorithmsConst";
import CustomInput from "../Components/CustomInput/index";
import Button from "../Components/Button/index";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { predictDataThunk } from "../redux/action/predictAction";
import image from "../assets/img/image.png";
import ss from "../assets/img/ss.jpg";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import TitleLoading from "../Components/Title/TitleLoading";
import Modal from "../Components/Modal/index";
import FormModal from "./FormModal";

const Home = () => {
  const arrayImage = [
    { key: "1", value: image },
    { key: "2", value: ss },
  ];
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    getValues,
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.predict);
  const [wait, setWait] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpenModal = (e) => {
    setOpen(true);
  };
  const handleReset = (e) => {
    e.preventDefault();
    reset();
    setWait(false);
    setOpen(false);
  };
  const onSubmit = (data) => {
    const dataSubmit = {
      file: data.file,
      inputTile: data.ratio,
      colPredict: data.att,
      numberrow: data.data,
      inputDay: data.predict,
      algorithm: data.algorithm,
    };
    dispatch(predictDataThunk(dataSubmit)).then((res) => {
      if (res.payload !== undefined) {
        setWait(true);
      }
    });
  };
  const selectedImage = arrayImage.find(
    (item) => item.key === getValues("algorithm")
  );
  return (
    <div>
      <h1>
        ỨNG DỤNG DỰ ĐOÁN GIÁ CHỨNG KHOÁN BẰNG MÔ HÌNH LAI GHÉP GIỮA ARIMA VÀ RNN
      </h1>
      <div className="home">
        <div className="home__left">
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputFile
              label="Nhập file"
              requirementField={true}
              id="file"
              format="excel"
              className="avatar-input"
              setValue={setValue}
              register={register}
              getValues={getValues}
            >
              {errors.file?.message}
            </InputFile>
            <SelectCustom
              setValue={setValue}
              id="ratio"
              register={register}
              label={"Tỉ lệ"}
              options={ratioList}
              placeholder={"Chọn tỉ lệ"}
            >
              {errors.ratio?.message}
            </SelectCustom>

            <SelectCustom
              setValue={setValue}
              id="att"
              register={register}
              label={"Thuộc tính"}
              options={attList}
              placeholder={"Chọn thuộc tính"}
            >
              {errors.att?.message}
            </SelectCustom>

            <CustomInput
              register={register}
              setValue={setValue}
              id="data"
              label={"Chiều dài dữ liệu học"}
              radius="2px"
              height="45px"
            >
              {errors.data?.message}
            </CustomInput>

            <CustomInput
              register={register}
              setValue={setValue}
              id="predict"
              label={"Chiều dài dự đoán"}
              radius="2px"
              height="45px"
            >
              {errors.predict?.message}
            </CustomInput>

            <SelectCustom
              setValue={setValue}
              id="algorithm"
              register={register}
              label={"Thuật toán"}
              options={algorithmConst}
              placeholder={"Chọn thuật toán"}
            >
              {errors.algorithm?.message}
            </SelectCustom>
            <Button
              name={
                !loading ? "Thực thi" : <TitleLoading name="Đang thực thi" />
              }
              bheight={44}
              fz="14px"
              outline="1.5px solid #DEDEDE"
              bwidth={"100%"}
              onClick={handleSubmit(onSubmit)}
              disabled={loading}
            />
            <Button
              name={"Hiển thị kết quả dự đoán"}
              bheight={44}
              fz="14px"
              bwidth={"100%"}
              disabled={!wait}
              onClick={(e) => handleOpenModal(e)}
            />
            <Button
              name={"Reset"}
              bheight={44}
              fz="14px"
              bwidth={"100%"}
              onClick={(e) => handleReset(e)}
              disabled={loading}
            />
          </form>
          <div className="home__left__button"></div>
        </div>
        {wait ? (
          <img src={selectedImage?.value} alt="" style={{ width: "60%" }} />
        ) : (
          ""
        )}
      </div>

      <Modal
        iconClose={true}
        modalTitle={"Thông tin"}
        open={open}
        setOpen={setOpen}
        children={<FormModal setOpen={setOpen} />}
      />
    </div>
  );
};

export default Home;

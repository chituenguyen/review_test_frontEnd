import * as yup from "yup";

const pattern = /^\d+$/;
const SUPPORTED_FORMATS = [".csv", ".xlsx","text/csv","text/xlsx"];

export const schema = yup.object({
  file: yup
    .mixed()
    .test("required", "* Vui lòng chọn file", (file) => {
      if (file?.size > 0) return true;
      return false;
    })
    .test("fileType", "* Chỉ hỗ trợ cho file .csv, .xlsx", (file) => {
      return SUPPORTED_FORMATS.includes(file.type);
    }),
  ratio: yup.string().required("* Vui lòng chọn tỉ lệ"),
  att: yup.string().required("* Vui lòng chọn thuộc tính"),
  algorithms: yup.string().required("* Vui lòng chọn thuật toán cần xử lý"),
  
  data: yup
    .string()
    .required("* Vui lòng nhập chiều dài dữ liệu học")
    .matches(pattern, "* Chiều dài dữ liệu học phải là số nguyên dương"),

  predict: yup
    .string()
    .required("* Vui lòng nhập chiều dài dự đoán")
    .matches(pattern, "* Chiều dài dự đoán phải là số nguyên dương"),
});

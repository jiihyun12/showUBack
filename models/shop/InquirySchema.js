import { model, Schema } from "mongoose"
import { getCurrentTime } from "../../utils/utils.js";

const inquirySchema = new Schema({
  title: [
    { type: Schema.Types.ObjectId, ref: 'Md', required: true },
    { type: Schema.Types.ObjectId, ref: 'Auciton', required: true }
  ],
  type: { type: String, required: true }, // 문의 유형 (상품, 배송, 기타)
  form: { type: String, requierd: true }, // 문의 형식 (공개, 비공개)
  writer: { type: Schema.Types.ObjectId, ref: 'User' }, // 작성자
  createdAt: { type: String, default: getCurrentTime }, // 작성일
  updatedAt: { type: String, default: getCurrentTime }, // 수정/삭제일
  content: { type: String, required: true }, // 문의 내용
  alarm: { type: String, required: true}, // 문의 알람
  agree: { type: String, requierd: true} // 개인정보

});


export default model("Inquiry", inquirySchema, "inquiry");
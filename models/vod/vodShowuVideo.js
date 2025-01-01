import { Schema,model } from "mongoose";

const vodShowuVideoSchema = new Schema({
  title: { type: String, required: true }, // 제목
  time: { type: String, required: true }, // 시간 정보
  genre: { type: String, required: true }, // 장르
  year: { type: String, required: true }, // 연도
  videoUrl: { type: String, required: true }, // 동영상 URL
  mainImage: { type: String, required: true }, // 메인 이미지 경로
  category : {type: String,require:true}, // 음악 , 뮤지컬 , 영화
  thumbnail : {type : String,require:true}, // 썸네일 
  vodUser: {type :String,require:true}, //영상을 올린 유저
}, { timestamps: true }); // 생성 및 수정 시간 자동 기록


export default model("ShowuVideo", vodShowuVideoSchema, "showuVideo");
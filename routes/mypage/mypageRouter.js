import express from 'express';
import likeRouter from './likeRouter.js';
import myActiveRouter from './myActiveRoter.js';
import myVodRouter from './myVodRouter.js';
import myShowuRouter from './myShowuRouter.js';
import myReservationRouter from './myReservationRouter.js';

const mypageRouter = express.Router()

//showu - 팀 매칭, 레슨
mypageRouter.use("/showu", myShowuRouter)

//예약 - 공간,티켓
mypageRouter.use("/reservation", myReservationRouter)

// 활동 정보 
mypageRouter.use("/my-active", myActiveRouter)

//찜
mypageRouter.use("/like", likeRouter)

// vod
mypageRouter.use("/vod", myVodRouter)


export default mypageRouter
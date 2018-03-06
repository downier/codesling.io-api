import express from 'express';

import {
  addChallengeController,
  getChallenges
} from './challengeControllers';

const router = express.Router();

router.route('/')
  .post(addChallengeController);

// router.route('api/challeges')
//   .get(getChallenges);

export default router;

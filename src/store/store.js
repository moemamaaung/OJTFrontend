import { configureStore } from "@reduxjs/toolkit";
import teacherSlice from "../teacher/teacherSlice";
import programReducer from '../component/program/programSlices'
import academicyearReducer from '../component/academicyear/academicyearSlices'
import courseReducer from '../component/course/courseSlice'
import examReducer from '../component/exam/examSlice'
import markReducer from '../component/mark/markSlice'
import timeReducer from '../component/time/timeSlice'
import userReducer from '../component/features/user/userSlice'
import authReducer from '../component/features/auth/authSlice'
import applicantSlice from "../applicant/applicantSlice";
import edubackgroundSlice from "../edubackground/edubackgroundSlice";
import experienceSlice from "../experience/experienceSlice";
import confirmSlice from "../applicant/confirmSlice";
import emailSlice from "../email/emailSlice";


export const store = configureStore({
    reducer:{
        applicants:applicantSlice,
        edus:edubackgroundSlice,
        exps:experienceSlice,
        teachers:teacherSlice,
        programs:programReducer,
        courses : courseReducer,
        academicyears:academicyearReducer,
        exams : examReducer,
        marks : markReducer,
        times : timeReducer,
        users : userReducer,
        auths : authReducer,
        confirms:confirmSlice,
        email:emailSlice
    }
})
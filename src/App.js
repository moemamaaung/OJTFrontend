import { Route, Routes } from "react-router-dom";
import Payment from "./component/Payment";
import Login from "./component/login/Login";
import Card from "./component/Card";
import ProgramFee1 from "./component/ProgramFee1";
import About1 from "./component/About1";
import Contactus from "./component/Contactus";
import Home from "./component/admin/Home";
import ProgramTable from "./component/program/ProgramTable";

import UpdateProgramForm from "./component/program/UpdateProgramForm";
import AcademicYear from "./component/academicyear/AcademicYear";
import CreateAcademicYearForm from "./component/academicyear/CreateAcademicYearForm";
import UpdateAcademicYearForm from "./component/academicyear/UpdateAcademicYearForm";
import CourseTable from "./component/course/CourseTable";
import CreateCourseForm from "./component/course/CreateCourseForm";
import UpdateCourseForm from "./component/course/UpdateCourseForm";
import ExamTable from "./component/exam/ExamTable";
import CreateExamForm from "./component/exam/CreateExamForm";
import UpdateExamForm from "./component/exam/UpdateExamForm";
import UpdateMarkForm from "./component/mark/UpdateMarkForm";
import Time from "./component/time/Time";
import CreatTime from "./component/time/CreatTime";
import UpdateTimeForm from "./component/time/UpdateTimeForm";
import Register from "./component/register/Register";
import ProtectedRoute from "./component/features/auth/ProtectedRoute";
import AddNewApplicantForm from "./applicant/AddNewApplicantForm";
import ExpTable from "./experience/ExpTable";
import AddNewExp from "./experience/AddNewExp";
import AddNewEdu from "./edubackground/AddNewEdu";

import ApplicantTable from "./applicant/ApplicantTable";
import ApplicantDetail from "./applicant/ApplicantDetail";
import ViewApplicant from "./applicant/ViewApplicant";
import EduBackgroundTable from "./edubackground/EduBackgroundTable";
import MainNavigation from "./component/MainNavigation";
import UserTable from "./component/register/UserTable";
import Navbar from "./component/student/Navbar";
import ProfileInfo from "./component/student/ProfileInfo";

import CourseList from "./component/student/course/CourseList";
import MList from "./component/student/mark/MList";
import CreateProgramForm from "./component/program/CreateProgramForm";
import ConfirmTable from "./applicant/ConfirmTable";
import EmailSendForm from "./email/EmailSendForm";
import LecturerTable from "./lecturer/LecturerTable";
import CreateLecturerForm from "./lecturer/CreateLecturerForm";
import UpdateLecturerForm from "./lecturer/UpdateLecturerForm";
import TeacherDetail from "./lecturer/TeacherDetail";
import AdminCard from "./component/admin/AdminCard";
import TeacherListCard from "./lecturer/TeacherListCard";
import UpdateUser from "./component/register/UpdateUser";
import UserDetail from "./component/register/UserDetail";
import StudentView from "./component/student/StudentView";
import MarkTable from "./component/mark/MarkTable";
import CreateMarkForm from "./component/mark/CreateMarkForm";
import Timetable from "./component/student/Timetable";
import MarkDetail from "./component/mark/MarkDetail";
import LecturerDetails from "./lecturer/LecturerDetails";
import TeacherCard from "./lecturer/TeacherCard";
import ViewApplicantItem from "./applicant/ViewApplicantItem";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute allowedRoles={["ROLE_ADMIN"]} />}>
        <Route path="/admin" element={<Home />}>
          <Route path="/admin" element={<AdminCard />} />
          <Route path="/admin/register/:confirmId" element={<Register />} />
          <Route path="/admin/user" element={<UserTable />} />
          <Route path="/admin/user/edit/:userId" element={<UpdateUser />} />
          <Route path="/admin/user/detail/:userId" element={<UserDetail />} />

          <Route path="/admin/academicyear" element={<AcademicYear />} />
          <Route path="/admin/academicyear-create" element={<CreateAcademicYearForm />}/>
          <Route path="/admin/academicyear/edit/:academicyearId" element={<UpdateAcademicYearForm />}/>

          <Route path="/admin/program" element={<ProgramTable />} />
          <Route path="/admin/program-create" element={<CreateProgramForm />} />
          <Route  path="/admin/program/edit/:programId" element={<UpdateProgramForm />}/>

          <Route path="/admin/timetable" element={<Time />} />
          <Route path="/admin/createTime" element={<CreatTime />} />
          <Route path="/admin/time/edit/:timeId" element={<UpdateTimeForm />} />

          <Route path="/admin/courseTable" element={<CourseTable />} />
          <Route path="/admin/createCourse" element={<CreateCourseForm />} />
          <Route  path="/admin/course/update/:courseId"  element={<UpdateCourseForm />}/>

          <Route path="/admin/examTable" element={<ExamTable />} />
          <Route path="/admin/createExam" element={<CreateExamForm />} />
          <Route path="/admin/exam/update/:examId" element={<UpdateExamForm />}/>

          <Route path="/admin/markTable" element={<MarkTable />} /> 
          <Route path="/admin/mark/edit/:markId" element={<UpdateMarkForm />}/>
          <Route path="/admin/mark/:markId" element={<MarkDetail />} /> 
          <Route path="/admin/createMark" element={<CreateMarkForm />} />
         
          <Route
            path="/admin/mark/update/:markId"
            element={<UpdateMarkForm />}
          />

          <Route path="/admin/all" element={<ApplicantTable />} />
          <Route path="/admin/alledu" element={<EduBackgroundTable />} />
          <Route path="/admin/allexp" element={<ExpTable />} />
          <Route path="/admin/all/:applicantId" element={<ApplicantDetail />} />

          <Route path="/admin/confirm" element={<ConfirmTable />} />

          <Route path="/admin/email/:userId" element={<EmailSendForm />} />
          <Route path="/admin/lecturer/:lecturerId" element={<LecturerDetails />} />
          <Route path="/admin/lecturerTable" element={<LecturerTable />} />
          <Route path="/admin/createLecturer" element={<CreateLecturerForm />}/>
          <Route
            path="/admin/lecturer/update/:lecturerId"
            element={<UpdateLecturerForm />}
          />
        </Route>
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["ROLE_STUDENT"]} />}>
        <Route path="/student" element={<Navbar />}>
        <Route path="/student" element={<StudentView />} />
          <Route path="/student/profile" element={<ProfileInfo />} />
          <Route path="/student/timetable" element={<Timetable />} />
          <Route path="/student/course" element={<CourseList />} />
          <Route path="/student/mark" element={<MList />} />
        </Route>
      </Route>

      <Route path="/" element={<MainNavigation />}>
        <Route path="/" element={<Card />} />
        <Route path="/program-fee" element={<ProgramFee1 />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About1 />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/teacher" element={<TeacherCard />} />
        <Route path=":teacherId" element={<TeacherDetail />} />
        {/* <Route path="/sample" element={<TeacherSample/>} /> */}
        <Route path="/register" element={<Register />} />

        <Route path="/all" element={<ApplicantTable />} />
        <Route path="/alledu" element={<EduBackgroundTable />} />
        <Route path="/allexp" element={<ExpTable />} />

        <Route path="/applicantForm" element={<AddNewApplicantForm />} />
        <Route path="/viewapp" element={<ViewApplicant />} />
        <Route path="/newedu" element={<AddNewEdu />} />

        <Route path="/newexp" element={<AddNewExp />} />
      </Route>
    </Routes>
  );
}

export default App;

import { useSelector } from 'react-redux'
import TeacherItem from './TeacherItem'
import { selectAllTeachers } from './teacherSlice'


const TeacherList = () => {

  const teachers = useSelector(selectAllTeachers)

  const renderedTeachers = teachers.map(
    (teacher) => (
      <TeacherItem
        id={teacher.id}
        image={teacher.image}
        name={teacher.name}
        subject={teacher.subject}
      />
    )

  )

  return renderedTeachers

}

export default TeacherList
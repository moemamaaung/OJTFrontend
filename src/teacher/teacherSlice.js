import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        id: "t1",
        image: "https://thumbs.dreamstime.com/b/portrait-happy-office-employee-working-laptop-looking-camera-109745321.jpg",
        name: "Williamson",
        subject: "Web Developer",
        qualify1:"BE-Civil in Technological University Hmaubi",
        bio: "Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum",
        qualify2:"M.Sc.(Computer Science)",
        qualify3:"Over 10 Years Experience In Software And App Development",
        qualify4:"Strong Knowledge In Java Framewords,Kotlin,Flutter And ReactJs"
    },
    {
        id: "t2",
        image: "https://img.freepik.com/free-photo/smiling-blonde-business-woman-posing-with-crossed-arms_171337-6291.jpg",
        name: "Min Thu Kyaw",
        subject: "Java Developer",
        bio: "Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum",
        qualify1:"BE-Civil in Technological University Hmaubi",
        qualify2:"M.Sc.(Computer Science)",
        qualify3:"Over 10 Years Experience In Software And App Development",
        qualify4:"Strong Knowledge In Java Framewords,Kotlin,Flutter And ReactJs"
    },
    {
        id: "t3",
        image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?cs=srgb&dl=pexels-emmy-e-2381069.jpg&fm=jpg",
        name: "Williamson",
        subject: "Web Developer",
        bio: "Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum",
        qualify1:"BE-Civil in Technological University Hmaubi",
        qualify2:"M.Sc.(Computer Science)",
        qualify3:"Over 10 Years Experience In Software And App Development",
        qualify4:"Strong Knowledge In Java Framewords,Kotlin,Flutter And ReactJs"
    },
    {
        id: "t4",
        image: "https://thumbs.dreamstime.com/b/portrait-happy-office-employee-working-laptop-looking-camera-109745321.jpg",
        name: "Williamson",
        subject: "Web Developer",
        bio: "Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum",
        qualify1:"BE-Civil in Technological University Hmaubi",
        qualify2:"M.Sc.(Computer Science)",
        qualify3:"Over 10 Years Experience In Software And App Development",
        qualify4:"Strong Knowledge In Java Framewords,Kotlin,Flutter And ReactJs"
    },
    {
        id: "t5",
        image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?cs=srgb&dl=pexels-emmy-e-2381069.jpg",
        name: "Williamson",
        subject: "Web Developer",
        bio: "Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum",
        qualify1:"BE-Civil in Technological University Hmaubi",
        qualify2:"M.Sc.(Computer Science)",
        qualify3:"Over 10 Years Experience In Software And App Development",
        qualify4:"Strong Knowledge In Java Framewords,Kotlin,Flutter And ReactJs"
    },
    {
        id: "t6",
        image: "https://img.freepik.com/free-photo/smiling-blonde-business-woman-posing-with-crossed-arms_171337-6291.jpg",
        name: "Williamson",
        subject: "Web Developer",
        bio: "Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum",
        qualify2:"M.Sc.(Computer Science)",
        qualify3:"Over 10 Years Experience In Software And App Development",
        qualify4:"Strong Knowledge In Java Framewords,Kotlin,Flutter And ReactJs"
    }
]


const teacherSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {

    }
}
)

export const selectAllTeachers = (state) => state.teachers//teachers is in store.js
export const selectTeacherById = (state,teacherId) =>state.teachers.find(teacher => teacher.id === teacherId)
export const selectPostById = (state, postId) => state.posts.posts.find(post => post.id === postId)

export default teacherSlice.reducer
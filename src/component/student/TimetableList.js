import { useSelector } from "react-redux"
import { getTimeError, getTimeStatus,  selectProgramTimetableById } from "../time/timeSlice";

import TimetableItem from "./TimetableItem";


function TimetableList() {

    const timetableStatus = useSelector(getTimeStatus)
    const timetableError = useSelector(getTimeError)


    const loginUser = useSelector(state => state.auths.user);
    console.log(loginUser)
    const pId = loginUser.program.id;
    console.log("In the user profile Form id is :" + pId);



    const time = useSelector((state) => selectProgramTimetableById(state, Number(pId)))

    let content;

    if (timetableStatus === 'loading') {
        content = (<p>Loading......</p>)
    }

    if (timetableStatus === 'succeeded') {
        content = <TimetableItem
            subk={time.subk}
            subject={time.subject}
            subName={time.subName}
            sub={time.sub}
            suba={time.suba}
            subb={time.subb}
            subc={time.subc}
            subd={time.subd}
            sube={time.sube}
            subf={time.subf}
            subg={time.subg}
            subh={time.subh}
            subi={time.subi}
            subj={time.subj}
            subl={time.subl}
            subm={time.subm}
            subn={time.subn}
            subo={time.subo}
            subp={time.subp}
            subq={time.subq}
            programId={time.program.id}
            program={time.program}

        />

    }


    if (timetableStatus === 'failed') {
        content = (<p>{timetableError}</p>)
    }
    console.log("TimetableList" + timetableStatus)

    return content;
}

export default TimetableList
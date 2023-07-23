import React, { useEffect, useState } from "react";

import classes from "./Register.module.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/user/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPrograms, selectAllPrograms } from "../program/programSlices";
import { fetchAcademicyears } from "../academicyear/academicyearSlices";
import { selectApplicantById } from "../../applicant/applicantSlice";

const Register = (props) => {
  const { confirmId } = useParams();
  const applicant = useSelector((state) =>
    selectApplicantById(state, Number(confirmId))
  );

  const [PROGRAM_ID, setProgram] = useState("");
  const [id,setId] = useState(applicant.id)
  const [fullname, setFullName] = useState(applicant.fullname);
  const [username, setEmail] = useState(applicant.username);
  const [phno, setPhno] = useState(applicant?.phno);
  const [gender, setGender] = useState(applicant?.gender);
  const [street, setStreet] = useState(applicant?.street);
  const [township, settownShip] = useState(applicant?.township);
  const [city, setCity] = useState(applicant?.city);
  const [password, setPassword] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onIdChange = (e)=> setId(e.target.value);
  const onFullNameChange = (e) => setFullName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPhnoChange = (e) => setPhno(e.target.value);
  const onGenderChange = (e) => setGender(e.target.value);
  const onStreetChange = (e) => setStreet(e.target.value);
  const onTownShipChange = (e) => settownShip(e.target.value);
  const onCityChange = (e) => setCity(e.target.value);

  const onPasswordChange = () => {
    const length = 4;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
    }

    setPassword(result);
  };

  const onProgramChange = (e) => {
    setProgram(e.target.value);
  };

  const canSave =
    [id,fullname, username, password, phno, gender, street, township, city,PROGRAM_ID].every(
      Boolean
    ) && addRequestStatus === "idle";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const programs = useSelector(selectAllPrograms);
  useEffect(() => {
    dispatch(fetchAcademicyears());
    dispatch(fetchPrograms());
  }, [dispatch]);

  const onSubmit = (event) => {
    event.preventDefault();

    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(
          register({
            id,
            fullname,
            username,
            //programName,
            phno,
            gender,
            street,
            township,
            city,
            //company,
            // position,
            // university,
            // degree,
            password,
            PROGRAM_ID,
          })
        ).unwrap();

        navigate(`/admin`);
      } catch (error) {
        console.log(error);
      } finally {
        setAddRequestStatus("idle");
      }
      setId("")
      setFullName("");
      setEmail("");

      setPhno("");
      setGender("");
      setStreet("");
      settownShip("");
      setCity("");
      // setUniversity("");
      // setDegree("");
      // setCompany("");
      // setPosition("");
      setPassword("");
    }
  };

  return (
    <section className={classes.formboldmainwrapper}>
      <div className={classes.formboldformwrapper}>
        <form className={classes.form} onSubmit={onSubmit}>
          <p className={classes.title}>Register</p>
          <p className={classes.message}>
            Signup now and get full{applicant.program.programName} access to our
            app.{" "}
          </p>
          <div className={classes.flex}>
          <label>
              <input
                type="text"
                value={id}
                onChange={onIdChange}
                className={classes.input}
              />
            </label>
            <label>
              <input
                type="text"
                value={fullname}
                onChange={onFullNameChange}
                className={classes.input}
              />
            </label>
            
          </div>
          {/* <label>
          <input type="text" value={programName} onChange={onProgramNameChange} className={classes.input} />
        </label> */}

          <label>
            <input
              type="text"
              value={phno}
              onChange={onPhnoChange}
              className={classes.input}
            />
          </label>

          <label>
            <input
              type="text"
              value={gender}
              onChange={onGenderChange}
              className={classes.input}
            />
          </label>

          {/* <label>
              <input type="text" value={company} onChange={onCompanyChange} className={classes.input} />
        </label> */}

          {/* <label>
          <input type="text" value={position} onChange={onPositionChange} className={classes.input} />
        </label> */}

          <label>
            <input
              type="text"
              value={city}
              onChange={onCityChange}
              className={classes.input}
            />
          </label>

          <label>
            <input
              type="text"
              value={street}
              onChange={onStreetChange}
              className={classes.input}
            />
          </label>

          <label>
            <input
              type="text"
              value={township}
              onChange={onTownShipChange}
              className={classes.input}
            />
          </label>
          <div className={classes.inputGroup}>
            <div className={classes.inputBox}>
              <select
                className={classes.name}
                value={PROGRAM_ID}
                onChange={onProgramChange}
              >
                <option value="">Choose Program</option>

                {programs.map((p) => (
                  <option
                    key={p.id}
                    value={p.id}
                    // disabled = {year.id === (ACADEMICYEAR_ID) }
                  >
                    <span> {p.programName} </span>
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* <label>
          <input type="text" value={degree} onChange={onDegreeChange} className={classes.input} />
        </label> */}

          {/* <label>
          <input type="text" value={university} onChange={onUniversityChange} className={classes.input} />
        </label> */}
          {/*
           
        <label>
          <input type="text" value={city} onChange={onCityChange} className={classes.input} />
        </label> */}

          <label>
            <input
              type="text"
              value={password}
              onChange={onPasswordChange}
              className={classes.input}
            />
            <span>Password</span>
          </label>

          <button type="submit" className="submit">
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;

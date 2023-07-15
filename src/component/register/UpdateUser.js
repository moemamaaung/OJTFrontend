import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { selectUserById, updateUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Register.module.css";
import { useState } from "react";
import { selectAllPrograms, fetchPrograms } from "../program/programSlices";
import { useEffect } from "react";

const UpdateUser = () => {
  const { userId } = useParams();
  console.log("UserId in update" + userId);
  const user = useSelector((state) => selectUserById(state, Number(userId)));
  console.log("Update User" + user);

  const [id, setId] = useState(user?.id);
  const [fullname, setFullName] = useState(user?.fullname);
  const [username, setEmail] = useState(user?.username);
  const [phno, setPhno] = useState(user?.phno);
  const [gender, setGender] = useState(user?.gender);
  const [street, setStreet] = useState(user?.street);
  const [programId, setProgram] = useState(user?.program.id);
  const [township, settownShip] = useState(user?.township);
  const [city, setCity] = useState(user?.city);
  const [password, setPassword] = useState(user?.password);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onFullNameChange = (e) => setFullName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPhnoChange = (e) => setPhno(e.target.value);
  const onGenderChange = (e) => setGender(e.target.value);
  const onStreetChange = (e) => setStreet(e.target.value);
  const onTownShipChange = (e) => settownShip(e.target.value);
  const onCityChange = (e) => setCity(e.target.value);
  const onProgramChange = (e) => setProgram(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);
  const canSave =
    [
      id,
      fullname,
      username,
      password,
      phno,
      gender,
      street,
      township,
      city,
      programId,
    ].every(Boolean) && addRequestStatus === "idle";

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const programs = useSelector(selectAllPrograms);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    if (canSave) {
      try {
        setAddRequestStatus("pending");

        dispatch(
          updateUser({
            id,
            fullname,
            username,
            phno,
            gender,
            street,
            township,
            city,
            password,
            programId,
          })
        ).unwrap();

        navigate(`/admin`);
      } catch (error) {
        console.log(error);
      } finally {
        setAddRequestStatus("idle");
      }
      setId("");
      setFullName("");
      setEmail("");
      setPhno("");
      setGender("");
      setStreet("");
      settownShip("");
      setCity("");
      setPassword("");
    }
  };

  return (
    <section className={classes.formboldmainwrapper}>
      <div className={classes.formboldformwrapper}>
        <form className={classes.form} onSubmit={onSubmit}>
          <p className={classes.title}>Update User</p>

          <div className={classes.flex}>
            <label>
              <input
                type="text"
                value={fullname}
                onChange={onFullNameChange}
                className={classes.input}
              />
            </label>
            <label>
              <input
                type="text"
                value={username}
                onChange={onEmailChange}
                className={classes.input}
              />
            </label>
          </div>

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
                value={programId}
                onChange={onProgramChange}
              >
                <option value="">Choose Program</option>
                {programs.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.programName}
                  </option>
                ))}
                ;
              </select>
            </div>
          </div>

          <label>
            <input
              type="text"
              value={password}
              onChange={onPasswordChange}
              className={classes.input}
              disabled
            />
            <span>Password</span>
          </label>

          <button type="submit" className="submit">
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateUser;

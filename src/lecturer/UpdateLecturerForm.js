import classes from "./UpdateLecturerForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { selectLecturerById, updateLecturers } from "./lecturerSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdateLecturerForm = () => {
  const { lecturerId } = useParams();
  const lecturer = useSelector((state) =>
    selectLecturerById(state, Number(lecturerId))
  );
  const navigate = useNavigate();

  const [id, setId] = useState(lecturer?.id);
  const[profile,setProfile] = useState(lecturer?.profile);
  const [name, setName] = useState(lecturer?.name);
  const [email, setEmail] = useState(lecturer?.email);
  const [phoneNo, setPhoneNo] = useState(lecturer?.phoneNo);
  const [address, setAddress] = useState(lecturer?.address);
  const [gender, setGender] = useState(lecturer?.gender);
  const [age, setAge] = useState(lecturer?.age);
  const [qualification, setQualification] = useState(lecturer?.qualification);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onNameChange = (e) => setName(e.target.value);
  const onProfileChange = (e) => setProfile(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPhoneNoChange = (e) => setPhoneNo(e.target.value);
  const onAddressChange = (e) => setAddress(e.target.value);
  const onAgeChange = (e) => setAge(e.target.value);
  const onGenderChange = (e) => setGender(e.target.value);
  const onQualificationChange = (e) => setQualification(e.target.value);

  const canSave =
    [id, name,profile, email, phoneNo, address, gender, age, qualification].every(
      Boolean
    ) && addRequestStatus === "idle";

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (canSave) {
      try {
      console.log("Profile"+profile)
        setAddRequestStatus("pending");

        dispatch(
          updateLecturers({
            id,
            name,
            profile,
            email,
            phoneNo,
            address,
            age,
            gender,
            qualification,
          })
        );
      } catch (error) {
        console.log(error);
      } finally {
        setAddRequestStatus("idle");
      }

      setId("");
      setName("");
      setProfile("")
      setEmail("");
      setPhoneNo("");
      setAddress("");
      setAge("");
      setGender("");
      setQualification("");

      navigate("/admin/lecturerTable");
    }
  };

  return (
    <div className={classes.all}>
      <div className={classes.wrapper}>
        <h2>Update Lecturer Form</h2>
        <form onSubmit={onSubmit}>
          <div className={classes.row}>
            <div className={classes.col}>
              <div className={classes.col}>
                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      className={classes.name}
                      value={name}
                      onChange={onNameChange}
                    />
                  </div>
                </div>

                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      placeholder="Profile"
                      type="url"
                      name="profile"
                      required
                      className={classes.name}
                      value={profile}
                      onChange={onProfileChange}
                    />
                  </div>
                </div>

                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      required
                      className={classes.name}
                      value={email}
                      onChange={onEmailChange}
                    />
                  </div>
                </div>
              </div>

              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                  <input
                    type="text"
                    name="phoneNo"
                    placeholder="Phone No"
                    required
                    className={classes.name}
                    value={phoneNo}
                    onChange={onPhoneNoChange}
                  />
                </div>
              </div>

              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    required
                    className={classes.name}
                    value={address}
                    onChange={onAddressChange}
                  />
                </div>
              </div>

              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                  <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    required
                    className={classes.name}
                    value={age}
                    onChange={onAgeChange}
                  />
                </div>
              </div>

              <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <select
                      className={classes.name}
                      value={gender}
                      onChange={onGenderChange}
                    >
                      <option>Choose Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                  <input
                    type="text"
                    name="qualification"
                    placeholder="Qualification"
                    required
                    className={classes.name}
                    value={qualification}
                    onChange={onQualificationChange}
                  />
                </div>
              </div>

              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                  <button type="submit" className={classes.btn}>
                    update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateLecturerForm;

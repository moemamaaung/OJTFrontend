import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewLecturers } from "./lecturerSlice";
import classes from "./CreateLecturerForm.module.css";

const CreateLecturerForm = () => {
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const navigate = useNavigate();

  const onNameChange = (e) => setName(e.target.value);
  const onProfileChange = (e) => setProfile(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPhoneNoChange = (e) => setPhoneNo(e.target.value);
  const onAddressChange = (e) => setAddress(e.target.value);
  const onAgeChange = (e) => setAge(e.target.value);
  const onGenderChange = (e) => setGender(e.target.value);
  const onQualificationChange = (e) => setQualification(e.target.value);

  const canSave =
    [name, profile, email, phoneNo, address, age, gender, qualification].every(
      Boolean
    ) && addRequestStatus === "idle";

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (canSave) {
      try {
        setAddRequestStatus("pending");

        dispatch(
          addNewLecturers({
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

      setName("");
      setProfile("");
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
        <h2>Create Lecturer Form</h2>
        <form onSubmit={onSubmit}>
          <div className={classes.row}>
            <div className={classes.col}>
              <div className={classes.col}>
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
                      name="name"
                      placeholder="Lecturer Name"
                      required
                      value={name}
                      className={classes.name}
                      onChange={onNameChange}
                    />
                  </div>
                </div>

                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      placeholder="Email"
                      type="text"
                      name="email"
                      required
                      className={classes.name}
                      value={email}
                      onChange={onEmailChange}
                    />
                  </div>
                </div>

                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <input
                      placeholder="Phone No"
                      type="text"
                      name="phoneNo"
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
                      placeholder="Address"
                      type="text"
                      name="address"
                      required
                      className={classes.name}
                      value={address}
                      onChange={onAddressChange}
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
                      placeholder="Age"
                      type="text"
                      name="age"
                      required
                      className={classes.name}
                      value={age}
                      onChange={onAgeChange}
                    />
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
              </div>

              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                  <button type="submit" className={classes.btn}>
                    Create
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

export default CreateLecturerForm;

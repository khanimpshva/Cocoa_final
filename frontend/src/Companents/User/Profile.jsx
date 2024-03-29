import React, { Fragment, useEffect } from "react";
import MetaData from "./../MetaData";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "./../Loader/Loader";
import "./Profile.scss";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../actions/userActions";
const Profile = () => {
  const { user, loading, isAuthentificated } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();
  const alert = useAlert();

  const dispatch = useDispatch();
  function logoutUser() {
    navigate("/");
    dispatch(logout());
    alert.success("Logout Successfully");
  }
  useEffect(() => {
    if (isAuthentificated === false) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={user.avatar.url} alt={user.name} />
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <button onClick={logoutUser} className="logoutUser">Logout Account</button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;

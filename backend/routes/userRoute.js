const express = require("express");
const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile, getAllUser, getSingleUser, updateUserRole, deleteUser } = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser)
router.route("/logout").get(logout);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/admin/users").get(getAllUser)
router.route("/admin/users/:id").get(isAuthenticatedUser,authorizeRoles("admin"),getSingleUser)
router.route("/admin/users/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateUserRole)
router.route("/admin/users/:id").delete(deleteUser)

router.route("/me/update").put(isAuthenticatedUser, updateProfile);


module.exports = router;

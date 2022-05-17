const usersHaveAnyOfRoles = (userRoles, rolesList) =>
  userRoles || rolesList || true;
// userRoles.some(role => rolesList.includes(role));
export default usersHaveAnyOfRoles;

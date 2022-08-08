const email_validator = (email) => {
  if (email.includes("@") == false) return false;
  const mail_service = email.split("@")[1].split(".")[0];

  return ["gmail", "yahoo", "hotmail"].indexOf(mail_service) != -1
    ? true
    : false;
};

module.exports = email_validator;

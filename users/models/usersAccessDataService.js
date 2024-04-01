const DB = process.env.DB || "MONGODB";

const registerUser = async normalizedUser => {
  if (DB === "MONGODB") {
    try {
      normalizedUser._id = "123456";
      //   throw new Error("Opss... i did it again!");
      return Promise.resolve(normalizedUser);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("registerUser new user not in mongodb");
};

const loginUser = async user => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve({ ...user, token: "a2a2a2" });
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("loginUser user not in mongodb");
};

const getUsers = async () => {
  if (DB === "MONGODB") {
    try {
      //   throw new Error("Opss... i did it again!");
      return Promise.resolve([{ user: "David Yakin" }]);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get users not in mongodb");
};

const getUser = async userId => {
  if (DB === "MONGODB") {
    try {
      //   throw new Error("Opss... i did it again!");
      return Promise.resolve(`get user no: ${userId}`);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get user not in mongodb");
};

const updateUser = async (userId, normalizedUser) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve({ normalizedUser, userId });
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card update not in mongodb");
};

const changeUserBusinessStatus = async userId => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`user no. ${userId} change his business status!`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card liked not in mongodb");
};

const deleteUser = async userId => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`user no. ${userId} deleted!`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card deleted not in mongodb");
};

exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.changeUserBusinessStatus = changeUserBusinessStatus;
exports.deleteUser = deleteUser;

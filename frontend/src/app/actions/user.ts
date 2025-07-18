import axios from "axios";

export const registration = async (email: string, password: string) => {
  try {
    const responce = await axios.post(
      "http://localhost:5000/api/auth/registration",
      {
        email,
        password,
      }
    );
    alert(responce.data.message);
  } catch (error) {
    alert(error);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const responce = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });
  } catch (error) {
    alert(error);
  }
};

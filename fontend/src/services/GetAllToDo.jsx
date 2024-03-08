import { baseUrl } from "./services";

export const getAllToDo = async () => {
  const response = await fetch(baseUrl + "get-all-todo", {
    method: "GET",
    credentials: "include",
  });
  const data = await response.json();
  return data
};

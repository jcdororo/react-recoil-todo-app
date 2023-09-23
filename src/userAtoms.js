import axios from "axios";
import { atom, selector } from "recoil";

export const currnetUserIdState = atom({
  key: 'currentUserIdState',
  default: 1
})

export const currentUserNameQuery = selector({
  key: 'currentUserName',
  get: async ({get}) => {
    const path = "https://jsonplaceholder.typicode.com/users/"
    const response = await axios.get(`${path}${get(currnetUserIdState)}`);
    return response.data.name;
  }
})
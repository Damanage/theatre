import { IUserInfo } from "../interfaces";
import moment from 'moment'

export const EmptyUserForm: IUserInfo = {
  session: "",
  first_name: "",
  last_name: "",
  birthday: moment().format('MM.DD.YYYY'),
  email: "",
  type: "cash",
  agree: false,
};

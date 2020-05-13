import request from "superagent";

//protocol = isExtension ? 'http:' : protocol;
const protocol = "https:";
// export const API_ROOT = isExtension
//   ? "167.71.69.250"
//   : `${window.location.host}`;

export const API_ROOT = "spring-boot-jpa-hibernate-pgsq.herokuapp.com";
const requests = {
  del: (url) => request.del(`${protocol}//${API_ROOT}${url}`),
  get: (url) => request.get(`${protocol}//${API_ROOT}${url}`),
  put: (url, body) => request.put(`${protocol}//${API_ROOT}${url}`, body),
  post: (url, body) => request.post(`${protocol}//${API_ROOT}${url}`, body),
  delete: (url, body) => request.delete(`${protocol}//${API_ROOT}${url}`, body),
};
const Barbers = {
  getBarbers: () => requests.get("/barbers"),
  addBarbers: () => requests.post("/barbers/add"),
};

const Appointments = {
  getAppointments: () => requests.get("/Appointments"),
  addAppointments: () => requests.post("/Appointments/add"),
  montlyStaffAppointments: () => requests.post("Appointments/monthly/staff"),
  montlyCustomerAppointments: () =>
    requests.post("Appointments/monthly/customer"),
  montlyBarberAppointments: () => requests.post("Appointments/monthly/barber"),
  dateBeforeAppointments: () =>
    requests.post("Appointments/monthly/dateBefore/staff"),
};

const WorkHours = {
  getWorkHours: () => requests.get("/WorkHours"),
  updateWorkHours: () => requests.get("/WorkHours/put"),
  addWorkHours: () => requests.get("/WorkHours/add"),
};

export default {
  Barbers,
  //   setToken: (_token) => {
  //     token = _token;
  //   },
};

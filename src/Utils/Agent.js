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
  updateBarbers: (barberId) => requests.put(`/barbers/edit/${barberId}`),
  getBarber: (barberId) => requests.get(`/barbers/${barberId}`),
};

const Login = {
  loginBarber: () => requests.post("/barbers/login"),
};

const Appointments = {
  getAppointments: () => requests.get("/Appointments"),
  addAppointments: () => requests.post("/Appointments/add"),
  deleteAppointments: (appointmentId) =>
    requests.delete(`/Appointments/delete/${appointmentId}`),

  montlyStaffAppointments: () => requests.post("/Appointments/monthly/staff"),
  montlyCustomerAppointments: () =>
    requests.post("/Appointments/monthly/customer"),
  getMontlyBarberAppointments: () =>
    requests.post("/Appointments/monthly/barber"),
  dateBeforeAppointments: () =>
    requests.post("/Appointments/monthly/dateBefore/staff"),

  barberFilter: () => requests.post("/Appointments/barberFilter"),
  withDate: () => requests.post("/Appointments/withDate"),
  customerFilter: () => requests.post("/Appointments/customerFilter"),

  getStaff: (staffId) => requests.get(`/Appointments/staff/${staffId}`),
  getBarber: (barberId) => requests.get(`/Appointments/barber/${barberId}`),
  getCustomer: (customerId) =>
    requests.get(`/Appointments/customer/${customerId}`),
};

const WorkHours = {
  getWorkHours: () => requests.get("/WorkHours"),
  addWorkHours: () => requests.post("/WorkHours/add"),
  updateWorkHours: () => requests.get("/WorkHours/put"),
  addWorkHours: () => requests.get("/WorkHours/add"),

  dayStaff: () => requests.post("/WorkHours/staff/day"),
  getStaffWorkHours: (staffId) => requests.get(`/WorkHours/staff/${staffId}`),
};

const Staffs = {
  //getStaffs: () => requests.get("/Staffs"),
  addStaffs: () => requests.post("/Staffs/add"),
  updateStaff: (staffId) => requests.put(`/Staffs/put/${staffId}`),
  getStaffBarber: (barberId) => requests.get(`/Staffs/barber/${barberId}`),

  deleteStaffAppointment: (id) =>
    requests.delete(`/Staffs/Appointments/delete/${id}`),
};

const ServiceBarber = {
  getServices: (barberId) => requests.get(`/ServiceBarber/Barber/${barberId}`),
  addService: () => requests.post("/ServiceBarber/add"),
  updateService: (barberId) => requests.put(`/ServiceBarber/put/${barberId}`),
};

const Customers = {
  getCustomers: (barberId) => requests.get(`/SCustomer/Barber/${barberId}`),
  addCustomer: () => requests.post("/Customers/add"),
  updateCustomer: (customerId) => requests.put(`/Customers/edit/${customerId}`),
  getCustomer: (customerId) =>
    requests.get(`/Customers/getCustomer/${customerId}`),
};

export default {
  Barbers,
  ServiceBarber,
  Staffs,
  Login,
  Appointments,
  WorkHours,
  Customers,
  //   setToken: (_token) => {
  //     token = _token;
  //   },
};

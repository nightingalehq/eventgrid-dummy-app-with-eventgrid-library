/**
 * @summary Send events to Event Grid using the Event Grid Schema.
 */


const eventGridKey = "3SErw+mCGtyvTWcVsa1lqd4iJiFW2IsUNmothj75J1A=";
const apiEndpoint = "https://egtester.uksouth-1.eventgrid.azure.net/api";

const eventGridApi = axios.create({
  baseURL: apiEndpoint,
});

function onSubmit() {
  let postData = {
    id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    eventType: "recordInserted",
    subject: "egtester/submission",
    eventTime: "2021-11-29T16:18:38.532Z",
    data: {
      preferredName: "Nikhil",
      familyName: "Kanukuntla",
      accepted: true,
      message: "Test Message",
      email: "nikhil.kanukuntla@nhq.com",
    },
  };

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "aeg-sas-key": eventGridKey,
      "Access-Control-Allow-Origin": "*",
    },
  };

  eventGridApi
    .post("/events", postData, axiosConfig)
    .then((result) => {
      console.log(JSON.stringify(result));
    })
    .catch((err) => {
      console.log(err);
    });
}

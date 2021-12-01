/**
 * @summary Send events to Event Grid using the Event Grid Schema.
 */

import { EventGridPublisherClient, AzureKeyCredential } from "@azure/eventgrid";

const endpoint = "https://egtester.uksouth-1.eventgrid.azure.net/api";
const accessKey = "3SErw+mCGtyvTWcVsa1lqd4iJiFW2IsUNmothj75J1A=";


async function onSubmit() {
  // Create the client used to publish events to the Event Grid Service
  const client = new EventGridPublisherClient(
    endpoint,
    "EventGrid",
    new AzureKeyCredential(accessKey)
  );

  // Send an event to the Event Grid Service, using the Event Grid schema.
  // A random ID will be generated for this event, since one is not provided.
    await client.send([
      {
        id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        eventType: "recordInserted",
        subject: "eventgrid-tester/egtester",
        eventTime: "2021-11-29T16:18:38.532Z",
        data: {
          preferredName: "Nikhil",
          familyName: "Kanukuntla",
          accepted: true,
          message: "This is a message under 1000 characters.",
          email: "nikhil.kanukuntla@nightingalehq.ai",
        }
      }
  ]);
}

onSubmit().catch(err) => {
    console.error("The data submitted has encountered an error:", err)
}

import { EventBridgeClient } from "@aws-sdk/client-eventbridge";
// Create an Amazon EventBridge service client object.
export const ebClient = new EventBridgeClient();
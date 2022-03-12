import { Construct } from "constructs";
import { IFunction } from "aws-cdk-lib/aws-lambda";
import { IQueue, Queue } from "aws-cdk-lib/aws-sqs";
import { SqsEventSource } from "aws-cdk-lib/aws-lambda-event-sources";
import { Duration } from "aws-cdk-lib";

interface SwnQueueProps {
    consumer: IFunction;
}

export class SwnQueue extends Construct {

    public readonly orderQueue: IQueue;

    constructor(scope: Construct, id: string, props: SwnQueueProps) {
        super(scope, id);

      //queue
      this.orderQueue = new Queue(this, 'OrderQueue', {
        queueName : 'OrderQueue',
        visibilityTimeout: Duration.seconds(30) // default value
      });
      
      props.consumer.addEventSource(new SqsEventSource(this.orderQueue, {
          batchSize: 1
      }));
    }
}
# Serverless Event-driven E-commerce Microservices

**UDEMY COURSE WITH DISCOUNTED - Step by Step Development of this Repository -> https://www.udemy.com/course/aws-serverless-microservices-lambda-eventbridge-sqs-apigateway/?couponCode=AUGU23**

![course2](https://user-images.githubusercontent.com/1147445/158019166-96732203-6642-4242-b1d9-d53ece2e1ed3.png)

This is a Serverless Event-driven E-commerce project for TypeScript development with CDK.
The `cdk.json` file tells the CDK Toolkit how to execute your app.

### Check Explanation of this Repository on Medium
* [AWS Event-driven Serverless Microservices using AWS Lambda, API Gateway, EventBridge, SQS, DynamoDB and CDK for IaC](https://mehmetozkaya.medium.com/aws-event-driven-serverless-microservices-using-aws-lambda-api-gateway-eventbridge-sqs-dynamodb-a7f46220b738)
* [See All Articles - AWS Serverless Microservices with Patterns & Best Practices](https://medium.com/aws-serverless-microservices-with-patterns-best)

## Whats Including In This Repository
We will be following the reference architecture above which is a real-world **Serverless E-commerce application** and it includes;

* **REST API** and **CRUD** endpoints with using **AWS Lambda, API Gateway**
* **Data persistence** with using **AWS DynamoDB**
* **Decouple microservices** with events using **Amazon EventBridge**
* **Message Queues** for cross-service communication using **AWS SQS**
* **Cloud stack development** with **IaC** using **AWS CloudFormation and AWS CDK**

## Prerequisites
You will need the following tools:

* AWS Account and User
* AWS CLI
* NodeJS
* AWS CDK Toolkit
* Docker

### Run The Project
Follow these steps to get your development environment set up: (Before Run Start the Docker Desktop)
1. Clone the repository
2. At the root directory which include **cdk.json** files, run below command:
```csharp
cdk deploy
```
>Note: Make sure that your Docker Desktop is running before execute the cdk deploy command.

4. Wait for provision all microservices into aws cloud. That’s it!

5. You can **launch microservices** as below urls:

* **Product API -> https://xxx.execute-api.ap-southeast-1.amazonaws.com/prod/product**
* **Basket API -> https://xxx.execute-api.ap-southeast-1.amazonaws.com/prod/basket**
* **Ordering API -> https://xxx.execute-api.ap-southeast-1.amazonaws.com/prod/order**

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Authors

* **Mehmet Ozkaya** - *Initial work* - [mehmetozkaya](https://github.com/mehmetozkaya)

See also the list of [contributors](https://github.com/aspnetrun/run-core/contributors) who participated in this project. Check also [gihtub page of repository.](https://aspnetrun.github.io/run-aspnetcore-angular-realworld/)

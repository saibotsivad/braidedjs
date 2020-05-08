const AWS = require("aws-sdk")

const basicallyNoop = async (event, context) => {
	return {
		statusCode: 200
	}
}

/*
{
    "event": {
        "headers": {
            "Accept": "* / *",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.5",
            "Cache-Control": "no-cache",
            "Host": "d0wdrbaa7b.execute-api.us-east-1.amazonaws.com",
            "Origin": "https://websocketking.com",
            "Pragma": "no-cache",
            "Sec-WebSocket-Extensions": "permessage-deflate",
            "Sec-WebSocket-Key": "nNt/aU5ZuApfJLbu4vjpxA==",
            "Sec-WebSocket-Version": "13",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:75.0) Gecko/20100101 Firefox/75.0",
            "X-Amzn-Trace-Id": "Root=1-5eb56383-293e43295e60f30d8188cc95",
            "X-Forwarded-For": "98.168.232.248",
            "X-Forwarded-Port": "443",
            "X-Forwarded-Proto": "https"
        },
        "multiValueHeaders": {
            "Accept": [
                "* / *"
            ],
            "Accept-Encoding": [
                "gzip, deflate, br"
            ],
            "Accept-Language": [
                "en-US,en;q=0.5"
            ],
            "Cache-Control": [
                "no-cache"
            ],
            "Host": [
                "d0wdrbaa7b.execute-api.us-east-1.amazonaws.com"
            ],
            "Origin": [
                "https://websocketking.com"
            ],
            "Pragma": [
                "no-cache"
            ],
            "Sec-WebSocket-Extensions": [
                "permessage-deflate"
            ],
            "Sec-WebSocket-Key": [
                "nNt/aU5ZuApfJLbu4vjpxA=="
            ],
            "Sec-WebSocket-Version": [
                "13"
            ],
            "User-Agent": [
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:75.0) Gecko/20100101 Firefox/75.0"
            ],
            "X-Amzn-Trace-Id": [
                "Root=1-5eb56383-293e43295e60f30d8188cc95"
            ],
            "X-Forwarded-For": [
                "98.168.232.248"
            ],
            "X-Forwarded-Port": [
                "443"
            ],
            "X-Forwarded-Proto": [
                "https"
            ]
        },
        "requestContext": {
            "routeKey": "$connect",
            "messageId": null,
            "eventType": "CONNECT",
            "extendedRequestId": "MNx8mEffIAMFogA=",
            "requestTime": "08/May/2020:13:49:55 +0000",
            "messageDirection": "IN",
            "stage": "dev",
            "connectedAt": 1588945795775,
            "requestTimeEpoch": 1588945795776,
            "identity": {
                "cognitoIdentityPoolId": null,
                "cognitoIdentityId": null,
                "principalOrgId": null,
                "cognitoAuthenticationType": null,
                "userArn": null,
                "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:75.0) Gecko/20100101 Firefox/75.0",
                "accountId": null,
                "caller": null,
                "sourceIp": "98.168.232.248",
                "accessKey": null,
                "cognitoAuthenticationProvider": null,
                "user": null
            },
            "requestId": "MNx8mEffIAMFogA=",
            "domainName": "d0wdrbaa7b.execute-api.us-east-1.amazonaws.com",
            "connectionId": "MNx8mcM6oAMCJ3w=",
            "apiId": "d0wdrbaa7b"
        },
        "isBase64Encoded": false
    },
    "context": {
        "callbackWaitsForEmptyEventLoop": true,
        "functionVersion": "$LATEST",
        "functionName": "braidedjs-api-ws-dev-connectHandler",
        "memoryLimitInMB": "1024",
        "logGroupName": "/aws/lambda/braidedjs-api-ws-dev-connectHandler",
        "logStreamName": "2020/05/08/[$LATEST]ce675b6957d24390a961819f9f49fdb2",
        "invokedFunctionArn": "arn:aws:lambda:us-east-1:985731193180:function:braidedjs-api-ws-dev-connectHandler",
        "awsRequestId": "a1cd43ea-311f-48f3-96ac-95ed787667b5"
    }
}
*/
module.exports.connectHandler = basicallyNoop

/*
{
    "event": {
        "requestContext": {
            "routeKey": "hello",
            "messageId": "MNu1Sd7QoAMCLKQ=",
            "eventType": "MESSAGE",
            "extendedRequestId": "MNu1SHt5oAMF1oA=",
            "requestTime": "08/May/2020:13:28:40 +0000",
            "messageDirection": "IN",
            "stage": "dev",
            "connectedAt": 1588944359567,
            "requestTimeEpoch": 1588944520127,
            "identity": {
                "cognitoIdentityPoolId": null,
                "cognitoIdentityId": null,
                "principalOrgId": null,
                "cognitoAuthenticationType": null,
                "userArn": null,
                "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:75.0) Gecko/20100101 Firefox/75.0",
                "accountId": null,
                "caller": null,
                "sourceIp": "98.168.232.248",
                "accessKey": null,
                "cognitoAuthenticationProvider": null,
                "user": null
            },
            "requestId": "MNu1SHt5oAMF1oA=",
            "domainName": "f3bn47ou23.execute-api.us-east-1.amazonaws.com",
            "connectionId": "MNucMcKPIAMCLKQ=",
            "apiId": "f3bn47ou23"
        },
        "body": "{\n  \"action\": \"hello\"\n}",
        "isBase64Encoded": false
    },
    "context": {
        "callbackWaitsForEmptyEventLoop": true,
        "functionVersion": "$LATEST",
        "functionName": "braidedjs-api-ws-dev-helloHandler",
        "memoryLimitInMB": "1024",
        "logGroupName": "/aws/lambda/braidedjs-api-ws-dev-helloHandler",
        "logStreamName": "2020/05/08/[$LATEST]65ca17b132f14a6f8fd8b6dfdcaa7aa2",
        "invokedFunctionArn": "arn:aws:lambda:us-east-1:985731193180:function:braidedjs-api-ws-dev-helloHandler",
        "awsRequestId": "42a6eff3-c808-4b7b-9364-006e8bf88284"
    }
}
*/
module.exports.helloHandler = async (event, context) => {
	try {
		const domain = `${event.requestContext.apiId}.execute-api.us-east-1.amazonaws.com`
		const api = new AWS.ApiGatewayManagementApi({
			apiVersion: "2018-11-29",
			endpoint: `https://${domain}/${event.requestContext.stage}`
		})
		const result = await api.postToConnection({
			ConnectionId: event.requestContext.connectionId,
			Data: JSON.stringify({ received: JSON.parse(event.body) })
		}).promise()
		console.log(JSON.stringify(result))
	} catch (error) {
		console.error(error)
	}
}

/*
{
    "event": {
        "headers": {
            "Host": "d0wdrbaa7b.execute-api.us-east-1.amazonaws.com",
            "x-api-key": "",
            "X-Forwarded-For": "",
            "x-restapi": ""
        },
        "multiValueHeaders": {
            "Host": [
                "d0wdrbaa7b.execute-api.us-east-1.amazonaws.com"
            ],
            "x-api-key": [
                ""
            ],
            "X-Forwarded-For": [
                ""
            ],
            "x-restapi": [
                ""
            ]
        },
        "requestContext": {
            "routeKey": "$disconnect",
            "messageId": null,
            "eventType": "DISCONNECT",
            "extendedRequestId": "MNyhMExBoAMFpSw=",
            "requestTime": "08/May/2020:13:53:49 +0000",
            "messageDirection": "IN",
            "stage": "dev",
            "connectedAt": 1588945795775,
            "requestTimeEpoch": 1588946029961,
            "identity": {
                "cognitoIdentityPoolId": null,
                "cognitoIdentityId": null,
                "principalOrgId": null,
                "cognitoAuthenticationType": null,
                "userArn": null,
                "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:75.0) Gecko/20100101 Firefox/75.0",
                "accountId": null,
                "caller": null,
                "sourceIp": "98.168.232.248",
                "accessKey": null,
                "cognitoAuthenticationProvider": null,
                "user": null
            },
            "requestId": "MNyhMExBoAMFpSw=",
            "domainName": "d0wdrbaa7b.execute-api.us-east-1.amazonaws.com",
            "connectionId": "MNx8mcM6oAMCJ3w=",
            "apiId": "d0wdrbaa7b"
        },
        "isBase64Encoded": false
    },
    "context": {
        "callbackWaitsForEmptyEventLoop": true,
        "functionVersion": "$LATEST",
        "functionName": "braidedjs-api-ws-dev-disconnectHandler",
        "memoryLimitInMB": "1024",
        "logGroupName": "/aws/lambda/braidedjs-api-ws-dev-disconnectHandler",
        "logStreamName": "2020/05/08/[$LATEST]3b170ce5f9f846ca8553e2c4854adceb",
        "invokedFunctionArn": "arn:aws:lambda:us-east-1:985731193180:function:braidedjs-api-ws-dev-disconnectHandler",
        "awsRequestId": "dd22bcd6-443f-4fad-a1dc-50a4085094a6"
    }
}
*/
module.exports.disconnectHandler = basicallyNoop

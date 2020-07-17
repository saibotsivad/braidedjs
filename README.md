# BraidedJS

Enterprise-ready, highly flexible real-time API using AWS and Cloudflare.

---

This repository contains documentation for the BraidedJS specifications, as well as a full implementation, which you can use in production systems or as an example to guide your own development.

## Tech Stack



Cloudflare
AWS
DynamoDB
WebSockets



JSON:API
Cloudflare
AWS
DynamoDB
WebSockets

# demo-fno-cfw-dynamodb

This is a demo of the new proposed app API for From-Now-On that is backed by DynamoDB + WebSockets.

To set credentials, you can do something like this:

```bash
npm install -g cloudflare-worker-key-value
source ./secrets.sh
# get the namespace id
cfwkv namespace create
# set the KV for "dynamodb" in the correct namespace
cfwkv key set 01a7362yournamespace dynamodb '{ "region": "us-east-1", "id": "AKi32MYKEYID", "secret": "gKc123MYSECRET", "table": "demo-fno-cfw-dynamodb" }'
```

When you create an IAM user for the Cloudflare Worker to access DynamoDB, you can attach this policy so that it only has read-access to the correct table:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "dynamodb:Query",
            "Resource": "arn:aws:dynamodb:us-east-1:*:table/demo-fno-cfw-dynamodb"
        }
    ]
}
```

## setup

```bash
npm install

cp secrets.example.sh secrets.sh
# edit secrets

cp wrangler.example.toml wrangler.toml
# edit props YOUR_ACCOUNT_ID and YOUR_ZONE_ID

npm run kv:accounts
# copy out the id to the service/api-rest/wrangler.toml

npm run kv:configs
# copy out the id to the service/api-rest/wrangler.toml
```

## dns

Inside Cloudflare, to get www.braidedjs.com to redirect to braidedjs.com you will need to add a CNAME entry for www that is a proxy for braidedjs.com

same for api.braidedjs.com

## tables

single dynamodb table

### websocket connections

Note: subscriptions are defined by a couplet of the API path string, and
the identifier of it, which is generated server side and is used by the
client to unsubscribe later.

queries:
- get a list of all connections subscribed to a collection
	- for posting updates of a collection
	- struct:
		pk: `coll:$COLLECTION`
		sk: `conn:$CONNECTION_ID`
		gid: `ws:$USER_ID:sess:$SESSION_ID`
	- data:
		api: `$API_ID`
		subid: `$SUBSCRIPTION_ID`
		subtype: `FULL|DIFF|DELETE|PING`
- get a list of all collection subscriptions for a connection
	- to remove subscription on unsubscribe
	- struct:
		pk: `conn:$CONNECTION_ID`
		sk: `subid:$SUBSCRIPTION_ID`
		gid: `ws:$USER_ID:sess:$SESSION_ID`
	- data:
		coll: `$COLLECTION`
- get a list of all connections for a user
	- to remove when user account is locked
	- to support locking out a session, e.g. user security dropping active session
	- struct:
		pk: `user:$USER_ID:conn`
		sk: `sess:$SESSION_ID:conn:$CONNECTION_ID`
		gid: `ws:$USER_ID:sess:$SESSION_ID`
	- data:
		api: `$API_ID`
		session:
			headers: the stringified headers, which has user agent, ip address, etc.

### users

- get a list of users by email address (could be multiple per user)
	- for signing in with username+password
	- struct:
		pk: `email:$NORMALIZED_EMAIL_ADDRESS`
		sk: `user:$USER_ID`
		gid: `user:$USER_ID`
	- data:
		secret:
			hash: the hashed password
			expires: the unix date when this secret will expire
- get a list of active sessions (websocket and cookie) for user
	- for listing to audit, aka to delete/deactivate sessions
	- for authenticating HTTP requests and WS connections (user+session id in token)
	- struct:
		pk: `user:$USER_ID:sess`
		sk: `sess:$SESSION_ID`
		gid: `user:$USER_ID:sess:$SESSION_ID`
	- data:
		api: `$API_ID`
		cookie:
			hash: the hashed cookie token
			expires: the unix date that the cookie token expires
		ws:
			hash: the hashed websocket token
			expires: the unix date that the websocket token expires
		create: the unix date of creation
		headers:
			the stringified headers of the HTTP request used to create the session, which has user agent, ip address, etc.


---

## Cookie strategy

https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie

login request
username+password
--->
access_token=15 minute
refresh_token=60 days or whatever
<---
Set-Cookie: ACCESS_TOKEN=token1; HttpOnly; Secure; Domain=braidedjs.com
Set-Cookie: REFRESH_TOKEN=token2; HttpOnly; Secure; Domain=braidedjs.com; Path=/api/refresh


then on calls to the api
Cookie: ACCESS_TOKEN=token1
<---
oops 401 or whatever
call the /api/refresh
Cookie: REFRESH_TOKEN=token2
--->
Set-Cookie: ACCESS_TOKEN=token1; etc.

## Token for WS

needed to get token for websocket

you would call like /api/ws_token
it would give you long lasting token

if your WS connection drops, you start over

on API side, you log the token etc and can kick it manually

## Token

get token
requires cookie?
--->
access_token=15 minutes
refresh_token=60 days or whatever
<---
on body
{
	access_token,
	refresh_token,
	...etc
}

then you use the token like normal
used for non-browser services



[
	"001",
	"SUBSCRIBE",
	[
		[ "/foo/bar", "DIFF" ]
	]
]

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

# Optimizations

these should probably be turned into blog posts that also list as pages, that way you can use them as marketing pieces

this should be hosted on braidedjs.com but make the author clear (it will only be me for quite some time) for better self marketing

---

some thoughts

https://blog.yugabyte.com/dynamodb-pricing-calculator-expensive-vs-alternatives/

## Read Heavy

If your system is very read heavy, you could use DynamoDB DAX as a cache in front of DynamoDB and save a substantial amount of money.

## WS Heavy

The pattern used requires a DynamoDB query for every push to WS. If you have lots of rapid WS pushes, this can start to be expensive.

The first stop is to use DynamoDB DAX so you aren't charged for the DB scaling, but I think you're charged for the request anyway?

The next stop is to run some micro instances that pull in the subscriber list, watch for changes on the DynamoDB stream, and then push to the API Gateway. This would be an optimization that would still use API Gateway WS, so you wouldn't be needing to manage sessions, load balancing, etc. on the VM, but you would need to be able to scale for memory based on active sessions--the VM would hold the whole list of sessions. (You could partition sessions across VMs but that gets harder.)

The final stop is to have a managed fleet of VMs that are only for handling WS pushes. This is very much not desired.

## Streams

If you have a lot of updates to the DynamoDB table that should *not* have anything happen to them, then it becomes expensive to run Streams. SQS is about twice as expensive *per event* (`0.4$/mill` events vs `0.2$/mill`) but if you're throwing away 90% of Stream events, SQS would be better.

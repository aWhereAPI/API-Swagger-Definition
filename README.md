# Swagger Definitions for aWhere APIs

This repo contains the Swagger 2.0 definitions for most of the aWhere Platform APIs. If your API system can ingest Swagger definitions, then these files can get you started more quickly. 

##Authentication

Our APIs use OAuth2 Access Tokens via a Client Credentials grant type, which the Swagger 2 standard does not current support well, nor does auto-generated code built from Swagger 2 definitions. In order to use these APIs in a Swagger UI or generated SDK, you'll need to ensure you're sending an access token in the Authorization Header, like so: 

`Authorization: Bearer {token}`

Learn more about authentication at [the aWhere Developer Community](http://developer.awhere.com/api/authentication). 



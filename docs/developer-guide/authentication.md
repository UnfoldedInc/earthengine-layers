# Authentication

Authenticating with Earth Engine services is likely to be the biggest
complication for developers who are not already working with the EE API.

While the Earth Engine API documentation and forums are the official source of
information on how to authenticate, this is a quick overview.

## Pydeck

If using the `pydeck-earthengine-layers` package, any extra authentication steps
should be handled for you automatically. You'll need only the standard
authentication required by the `earthengine-api` library to work with Earth
Engine Python objects, i.e.:

```py
import ee

# Necessary only on the first install; opens a Google sign-in prompt
ee.Authenticate()

# Necessary in every Python session
ee.Initialize()
```

## JavaScript

The `EarthEngineLayer` provides an `initializeEEApi` helper to authenticate and
initialize the JavaScript Earth Engine library. This calls
`ee.data.authenticateViaOauth()` or `ee.setToken()`, and then `ee.initialize()`,
and returns a `Promise` that resolves when authentication and initialization is
completed and the EE API is ready to use.

### Authenticating via Login (OAuth2)

The easiest way to authenticate from a JavaScript application is to use
`initializeEEApi` with a `clientId`.

Note that this requires:

- registering a Google client id
- requesting Earth Engine access for that client
- adding the URLs from which the application will be served to the whitelisted origins for that client id.
- Visitors to your website must have a Google Account that is approved for use with Earth Engine.

## Authenticating via Access Token

If you have an existing OAuth2 authentication workflow, you can use that to
generate access tokens, which you then pass to

```js
initializeEEApi({token})
```

An access token is valid for a short period of time, usually one hour, and any
requests to the EarthEngine backend will fail after that time until a new access
token is provided.

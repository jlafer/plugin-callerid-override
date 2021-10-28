# Twilio Flex Plugin - CallerID Override

This is a Twilio Flex Plugin, demonstrating the key element in overriding the callerid used when placing an outbound call. This technique works with the native Outbond dialing pad or with programmatic uses of the `StartOutboundCall` Flex Action.

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com). We support Node >= 12 (and recommend the _even_ versions of Node). Afterwards, install the dependencies by running `npm install`:

```bash
cd plugin-callerid-override

# If you use npm
npm install
```
## Configuration
For a simple demonstration of setting the callerid with a custom value, you can configure a callerid string as an environment variable. See `.env.sample` for an example. You can copy the contents of this file to an environment file specific to your Twilio project. For example, if the Twilio CLI alias for your project is `TestFlex`, name the file `.env.TestFlex` and edit it with a valid calling phone number. To be valid, the number must be a number in your Twilio project or the number must have been verified in the project.

You can test the plugin locally by running `twilio flex:plugins:start`.

## Development
In the `CalleridOverridePlugin.js` file you will see the single line of code that controls the callerid value when the `StartOutboundCall` action executes. Rather than using a static value supplied by an environment variable, a realistic implementation would get the value from the agent's Worker properties, from properties of an outbound dialing task, or from the result of a backend API lookup. The plugin can be modified to support the details of your specific use case.

## Deploy
The plugin can be built and deployed with the `deploy` command of the Flex CLI. To be activated in your Flex project runnning at `flex.twilio.com` you must use the `release` command. This allows you to install this and, optionally, other Flex plugins together.


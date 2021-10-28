import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

const PLUGIN_NAME = 'CalleridOverridePlugin';

const {CALLERID} = process.env;

export default class CalleridOverridePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, _manager) {
    console.log(`${PLUGIN_NAME}: initializing in Flex ${Flex.VERSION} instance`);
    console.log(`  callerid = ${CALLERID}`);
    flex.Actions.addListener('beforeStartOutboundCall', async (payload) => {
      // set callerid; configured or, perhaps, based on something like the customer segment
      payload.callerId = `${CALLERID}`;
    });
  }
}

// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
import { DoRequest } from './RESTClient.js';
// END EXTRA CODE

/**
 * @param {string} url
 * @param {MxObject[]} headers
 * @param {Big} timeout - The number of ms when the call should be aborted (no longer wait for a response). Note: this is disabled in native dev mode.
 * @returns {Promise.<MxObject>}
 */
export async function GET(url, headers, timeout) {
	// BEGIN USER CODE
	return DoRequest(url, "GET", null, headers, timeout);
	// END USER CODE
}

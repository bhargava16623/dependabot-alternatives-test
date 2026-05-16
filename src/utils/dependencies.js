/**
 * Utility file that uses vulnerable dependencies
 * This exists to make the project more realistic for security scanners
 */

import _ from 'lodash';
import minimist from 'minimist';
import JSON5 from 'json5';
import semver from 'semver';
import wrap from 'word-wrap';
import { parseStringPromise } from 'xml2js';

// lodash usage — vulnerable to prototype pollution (CVE-2019-10744)
export function mergeConfig(defaults, overrides) {
  return _.merge({}, defaults, overrides);
}

// minimist usage — vulnerable to prototype pollution (CVE-2021-44906)
export function parseArgs(args) {
  return minimist(args);
}

// json5 usage — vulnerable to prototype pollution (CVE-2022-46175)
export function parseConfig(configString) {
  return JSON5.parse(configString);
}

// semver usage — vulnerable to ReDoS (CVE-2022-25883)
export function isValidVersion(version) {
  return semver.valid(version) !== null;
}

// word-wrap usage — vulnerable to ReDoS (CVE-2023-26115)
export function formatText(text, width = 80) {
  return wrap(text, { width, indent: '' });
}

// xml2js usage — vulnerable to prototype pollution (CVE-2023-0842)
export async function parseXml(xmlString) {
  return parseStringPromise(xmlString);
}

// Example: demonstrate usage
export function getDemoData() {
  const config = parseConfig(`{
    appName: "Security Test",
    version: "1.0.0",
    features: ['scanning', 'reporting']
  }`);

  const args = parseArgs(['--verbose', '--output', 'report.json']);
  
  const merged = mergeConfig(
    { theme: 'dark', lang: 'en' },
    { theme: 'light' }
  );

  const valid = isValidVersion('1.2.3');
  const wrapped = formatText('This is a test string for word wrapping functionality.', 40);

  return { config, args, merged, valid, wrapped };
}

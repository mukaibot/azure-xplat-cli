// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreatevnet5917?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreatevnet5917' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31916',
  'x-ms-request-id': '212ff5f4-c8eb-4899-b7b0-798735bfb0e7',
  'x-ms-correlation-request-id': '212ff5f4-c8eb-4899-b7b0-798735bfb0e7',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T120408Z:212ff5f4-c8eb-4899-b7b0-798735bfb0e7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 22 Apr 2015 12:04:08 GMT',
  connection: 'close',
  'content-length': '116' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreatevnet5917?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreatevnet5917' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31916',
  'x-ms-request-id': '212ff5f4-c8eb-4899-b7b0-798735bfb0e7',
  'x-ms-correlation-request-id': '212ff5f4-c8eb-4899-b7b0-798735bfb0e7',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T120408Z:212ff5f4-c8eb-4899-b7b0-798735bfb0e7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 22 Apr 2015 12:04:08 GMT',
  connection: 'close',
  'content-length': '116' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreatevnet5917?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet5917\",\"name\":\"xplatTestGCreatevnet5917\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '211',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1161',
  'x-ms-request-id': '6638dafc-0bb4-477d-9924-4433efd0729e',
  'x-ms-correlation-request-id': '6638dafc-0bb4-477d-9924-4433efd0729e',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T120411Z:6638dafc-0bb4-477d-9924-4433efd0729e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 22 Apr 2015 12:04:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreatevnet5917?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet5917\",\"name\":\"xplatTestGCreatevnet5917\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '211',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1161',
  'x-ms-request-id': '6638dafc-0bb4-477d-9924-4433efd0729e',
  'x-ms-correlation-request-id': '6638dafc-0bb4-477d-9924-4433efd0729e',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T120411Z:6638dafc-0bb4-477d-9924-4433efd0729e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 22 Apr 2015 12:04:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet5917/providers/Microsoft.Network/virtualnetworks/xplatTestVnet9519?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'a7c6eedf-71d4-4ed9-9d5c-47eb66b2de86',
  'x-ms-correlation-request-id': 'a7c6eedf-71d4-4ed9-9d5c-47eb66b2de86',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T120411Z:a7c6eedf-71d4-4ed9-9d5c-47eb66b2de86',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 22 Apr 2015 12:04:11 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet5917/providers/Microsoft.Network/virtualnetworks/xplatTestVnet9519?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'a7c6eedf-71d4-4ed9-9d5c-47eb66b2de86',
  'x-ms-correlation-request-id': 'a7c6eedf-71d4-4ed9-9d5c-47eb66b2de86',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T120411Z:a7c6eedf-71d4-4ed9-9d5c-47eb66b2de86',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 22 Apr 2015 12:04:11 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet5917/providers/Microsoft.Network/virtualnetworks/xplatTestVnet9519?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"xplatTestVnet9519\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet5917/providers/Microsoft.Network/virtualNetworks/xplatTestVnet9519\",\r\n  \"etag\": \"W/\\\"fb183295-8e37-4e50-916e-b92723a14546\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '581',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'b70f6c4a-95db-4dce-8cdf-f2d959313d7b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/b70f6c4a-95db-4dce-8cdf-f2d959313d7b?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1155',
  'x-ms-correlation-request-id': '91eeaaad-2c71-4121-8d49-46098e695229',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T120417Z:91eeaaad-2c71-4121-8d49-46098e695229',
  date: 'Wed, 22 Apr 2015 12:04:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet5917/providers/Microsoft.Network/virtualnetworks/xplatTestVnet9519?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"xplatTestVnet9519\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet5917/providers/Microsoft.Network/virtualNetworks/xplatTestVnet9519\",\r\n  \"etag\": \"W/\\\"fb183295-8e37-4e50-916e-b92723a14546\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '581',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'b70f6c4a-95db-4dce-8cdf-f2d959313d7b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/b70f6c4a-95db-4dce-8cdf-f2d959313d7b?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1155',
  'x-ms-correlation-request-id': '91eeaaad-2c71-4121-8d49-46098e695229',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T120417Z:91eeaaad-2c71-4121-8d49-46098e695229',
  date: 'Wed, 22 Apr 2015 12:04:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/b70f6c4a-95db-4dce-8cdf-f2d959313d7b?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7adf8f97-137a-4f3c-8a13-313e2d0216c1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31894',
  'x-ms-correlation-request-id': 'b8ee522d-6142-4661-84bb-e8059bfad77a',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T120428Z:b8ee522d-6142-4661-84bb-e8059bfad77a',
  date: 'Wed, 22 Apr 2015 12:04:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/b70f6c4a-95db-4dce-8cdf-f2d959313d7b?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7adf8f97-137a-4f3c-8a13-313e2d0216c1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31894',
  'x-ms-correlation-request-id': 'b8ee522d-6142-4661-84bb-e8059bfad77a',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T120428Z:b8ee522d-6142-4661-84bb-e8059bfad77a',
  date: 'Wed, 22 Apr 2015 12:04:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet5917/providers/Microsoft.Network/virtualnetworks/xplatTestVnet9519?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet9519\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet5917/providers/Microsoft.Network/virtualNetworks/xplatTestVnet9519\",\r\n  \"etag\": \"W/\\\"8de88af3-edb1-497a-8010-bd88aa57936f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '582',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"8de88af3-edb1-497a-8010-bd88aa57936f"',
  'x-ms-request-id': '2b444026-7221-4225-9987-43d39d16edef',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31897',
  'x-ms-correlation-request-id': '032caa07-046d-4231-9305-616a5bd46cf8',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T120429Z:032caa07-046d-4231-9305-616a5bd46cf8',
  date: 'Wed, 22 Apr 2015 12:04:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet5917/providers/Microsoft.Network/virtualnetworks/xplatTestVnet9519?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet9519\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet5917/providers/Microsoft.Network/virtualNetworks/xplatTestVnet9519\",\r\n  \"etag\": \"W/\\\"8de88af3-edb1-497a-8010-bd88aa57936f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '582',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"8de88af3-edb1-497a-8010-bd88aa57936f"',
  'x-ms-request-id': '2b444026-7221-4225-9987-43d39d16edef',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31897',
  'x-ms-correlation-request-id': '032caa07-046d-4231-9305-616a5bd46cf8',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T120429Z:032caa07-046d-4231-9305-616a5bd46cf8',
  date: 'Wed, 22 Apr 2015 12:04:28 GMT',
  connection: 'close' });
 return result; }]];
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
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip2751/?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicip2751\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip2751\",\r\n  \"etag\": \"W/\\\"fc5a056d-92c5-42e5-84a8-5da85fe1ac56\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"ipAddress\": \"104.41.152.199\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip9501\",\r\n      \"fqdn\": \"dnstestpubip9501.eastus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '632',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fc5a056d-92c5-42e5-84a8-5da85fe1ac56"',
  'x-ms-request-id': 'ed80837a-1d3f-4ce3-9821-c0785cb68b8b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31987',
  'x-ms-correlation-request-id': 'd15fa6d1-12dc-4284-a44e-a33363b86faf',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173413Z:d15fa6d1-12dc-4284-a44e-a33363b86faf',
  date: 'Wed, 22 Apr 2015 17:34:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip2751/?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicip2751\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip2751\",\r\n  \"etag\": \"W/\\\"fc5a056d-92c5-42e5-84a8-5da85fe1ac56\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"ipAddress\": \"104.41.152.199\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip9501\",\r\n      \"fqdn\": \"dnstestpubip9501.eastus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '632',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fc5a056d-92c5-42e5-84a8-5da85fe1ac56"',
  'x-ms-request-id': 'ed80837a-1d3f-4ce3-9821-c0785cb68b8b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31987',
  'x-ms-correlation-request-id': 'd15fa6d1-12dc-4284-a44e-a33363b86faf',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173413Z:d15fa6d1-12dc-4284-a44e-a33363b86faf',
  date: 'Wed, 22 Apr 2015 17:34:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip2751/?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armpublicip2751\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip2751\",\r\n  \"etag\": \"W/\\\"47155936-5b01-44f8-ab5f-eb8bbde4135d\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 5,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip\",\r\n      \"fqdn\": \"dnstestpubip.eastus.cloudapp.azure.com.\",\r\n      \"reverseFqdn\": \"dnstestpubip19272.eastus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\",\r\n    \"tag2\": \"testValue2\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '685',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '38a30e33-4e38-4f93-b0ab-6bc0b4bb0cbc',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/38a30e33-4e38-4f93-b0ab-6bc0b4bb0cbc?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '1c543e12-395a-4cc0-b1cd-b9bb887c93fc',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173420Z:1c543e12-395a-4cc0-b1cd-b9bb887c93fc',
  date: 'Wed, 22 Apr 2015 17:34:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip2751/?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armpublicip2751\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip2751\",\r\n  \"etag\": \"W/\\\"47155936-5b01-44f8-ab5f-eb8bbde4135d\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 5,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip\",\r\n      \"fqdn\": \"dnstestpubip.eastus.cloudapp.azure.com.\",\r\n      \"reverseFqdn\": \"dnstestpubip19272.eastus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\",\r\n    \"tag2\": \"testValue2\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '685',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '38a30e33-4e38-4f93-b0ab-6bc0b4bb0cbc',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/38a30e33-4e38-4f93-b0ab-6bc0b4bb0cbc?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '1c543e12-395a-4cc0-b1cd-b9bb887c93fc',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173420Z:1c543e12-395a-4cc0-b1cd-b9bb887c93fc',
  date: 'Wed, 22 Apr 2015 17:34:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/38a30e33-4e38-4f93-b0ab-6bc0b4bb0cbc?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fc126d06-da20-4c35-ae8a-6c2d2c0b5990',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31991',
  'x-ms-correlation-request-id': '752ea8f1-a9c1-4d93-af86-6d3aea3af26b',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173431Z:752ea8f1-a9c1-4d93-af86-6d3aea3af26b',
  date: 'Wed, 22 Apr 2015 17:34:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/38a30e33-4e38-4f93-b0ab-6bc0b4bb0cbc?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fc126d06-da20-4c35-ae8a-6c2d2c0b5990',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31991',
  'x-ms-correlation-request-id': '752ea8f1-a9c1-4d93-af86-6d3aea3af26b',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173431Z:752ea8f1-a9c1-4d93-af86-6d3aea3af26b',
  date: 'Wed, 22 Apr 2015 17:34:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip2751/?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicip2751\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip2751\",\r\n  \"etag\": \"W/\\\"c056511e-7bcb-4898-83a1-254aa6801e48\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 5,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip\",\r\n      \"fqdn\": \"dnstestpubip.eastus.cloudapp.azure.com.\",\r\n      \"reverseFqdn\": \"dnstestpubip19272.eastus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\",\r\n    \"tag2\": \"testValue2\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '686',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c056511e-7bcb-4898-83a1-254aa6801e48"',
  'x-ms-request-id': 'f809f3fb-d14f-4271-8981-9f7663a1e19d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31992',
  'x-ms-correlation-request-id': 'b6cde8ae-7896-4437-b830-a60e36701ed1',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173433Z:b6cde8ae-7896-4437-b830-a60e36701ed1',
  date: 'Wed, 22 Apr 2015 17:34:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip2751/?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicip2751\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip2751\",\r\n  \"etag\": \"W/\\\"c056511e-7bcb-4898-83a1-254aa6801e48\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 5,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip\",\r\n      \"fqdn\": \"dnstestpubip.eastus.cloudapp.azure.com.\",\r\n      \"reverseFqdn\": \"dnstestpubip19272.eastus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\",\r\n    \"tag2\": \"testValue2\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '686',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c056511e-7bcb-4898-83a1-254aa6801e48"',
  'x-ms-request-id': 'f809f3fb-d14f-4271-8981-9f7663a1e19d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31992',
  'x-ms-correlation-request-id': 'b6cde8ae-7896-4437-b830-a60e36701ed1',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173433Z:b6cde8ae-7896-4437-b830-a60e36701ed1',
  date: 'Wed, 22 Apr 2015 17:34:32 GMT',
  connection: 'close' });
 return result; }]];
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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/publishers/alertlogic/artifacttypes/vmimage/offers/alert-logic-tm/skus?api-version=2015-05-01-preview')
  .reply(200, "[\r\n  {\r\n    \"$type\": \"Microsoft.WindowsAzure.PlatformImageRepository.ArtifactService.API.Consumption.VMImageSku, PIR.ArtifactService\",\r\n    \"location\": \"eastus\",\r\n    \"name\": \"20215000100-tmpbyol\",\r\n    \"id\": \"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/alertlogic/ArtifactTypes/VMImage/Offers/alert-logic-tm/Skus/20215000100-tmpbyol\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '406',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e0093e2e-25d5-4e84-9f74-37c80b9d2bda',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31990',
  'x-ms-correlation-request-id': '6c713913-6db7-485d-92c0-1dd107fbd8f7',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173323Z:6c713913-6db7-485d-92c0-1dd107fbd8f7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 22 Apr 2015 17:33:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/publishers/alertlogic/artifacttypes/vmimage/offers/alert-logic-tm/skus?api-version=2015-05-01-preview')
  .reply(200, "[\r\n  {\r\n    \"$type\": \"Microsoft.WindowsAzure.PlatformImageRepository.ArtifactService.API.Consumption.VMImageSku, PIR.ArtifactService\",\r\n    \"location\": \"eastus\",\r\n    \"name\": \"20215000100-tmpbyol\",\r\n    \"id\": \"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/alertlogic/ArtifactTypes/VMImage/Offers/alert-logic-tm/Skus/20215000100-tmpbyol\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '406',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e0093e2e-25d5-4e84-9f74-37c80b9d2bda',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31990',
  'x-ms-correlation-request-id': '6c713913-6db7-485d-92c0-1dd107fbd8f7',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173323Z:6c713913-6db7-485d-92c0-1dd107fbd8f7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 22 Apr 2015 17:33:22 GMT',
  connection: 'close' });
 return result; }]];
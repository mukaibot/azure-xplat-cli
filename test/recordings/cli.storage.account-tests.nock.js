// This file has been autogenerated.

var profile = require('../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'c9cbd920-c00c-427c-852b-8aaf38badaeb',
    name: 'Azure SDK Powershell Test',
    username: 'user@domain.example',
    registeredProviders: ['sqlserver', 'website', 'visualstudio.account'],
    registeredResourceNamespaces: ['microsoft.insights', 'successbricks.cleardb'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SITE_TEST_LOCATION'] = 'West US';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/storageservices', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://management.core.windows.net/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/storage/xcliaccount1',
  server: '1.0.6198.109 (rd_rdfe_stable.140724-0157) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'de72a5c31d06c022bd0f3f95c98dc42a',
  date: 'Mon, 04 Aug 2014 22:31:10 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/c9cbd920-c00c-427c-852b-8aaf38badaeb/operations/de72a5c31d06c022bd0f3f95c98dc42a')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>de72a5c3-1d06-c022-bd0f-3f95c98dc42a</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.109 (rd_rdfe_stable.140724-0157) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '77bbb7d0a878c3bebec6b456cbc12cdc',
  date: 'Mon, 04 Aug 2014 22:31:40 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/c9cbd920-c00c-427c-852b-8aaf38badaeb/affinitygroups', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://management.core.windows.net/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/affinitygroup/xcliaffinity1',
  server: '1.0.6198.109 (rd_rdfe_stable.140724-0157) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '2305a1e3adf0c877aaf1cbf4e4ab025d',
  date: 'Mon, 04 Aug 2014 22:31:41 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/storageservices', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://management.core.windows.net/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/storage/xcliaccount2',
  server: '1.0.6198.109 (rd_rdfe_stable.140724-0157) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '5ef0a55dc4f7cf508d653ad52c3e4029',
  date: 'Mon, 04 Aug 2014 22:31:43 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/c9cbd920-c00c-427c-852b-8aaf38badaeb/operations/5ef0a55dc4f7cf508d653ad52c3e4029')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>5ef0a55d-c4f7-cf50-8d65-3ad52c3e4029</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.109 (rd_rdfe_stable.140724-0157) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'e05b107b8077c77c9330d658a75cb0de',
  date: 'Mon, 04 Aug 2014 22:32:14 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/storageservices')
  .reply(200, "<StorageServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><StorageService><Url>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/storageservices/teststorage101</Url><ServiceName>teststorage101</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdHN0b3JhZ2UxMDE=</Label><Status>Created</Status><Endpoints><Endpoint>https://teststorage101.blob.core.windows.net/</Endpoint><Endpoint>https://teststorage101.queue.core.windows.net/</Endpoint><Endpoint>https://teststorage101.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>false</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-05-15T22:09:51Z</CreationTime><CustomDomains/><SecondaryReadEnabled>false</SecondaryReadEnabled></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/storageservices/xcliaccount1</Url><ServiceName>xcliaccount1</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>eGNsaWFjY291bnQx</Label><Status>Created</Status><Endpoints><Endpoint>https://xcliaccount1.blob.core.windows.net/</Endpoint><Endpoint>https://xcliaccount1.queue.core.windows.net/</Endpoint><Endpoint>https://xcliaccount1.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>false</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-08-04T22:31:10Z</CreationTime><CustomDomains/><SecondaryReadEnabled>false</SecondaryReadEnabled></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/storageservices/xcliaccount2</Url><ServiceName>xcliaccount2</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><AffinityGroup>xcliaffinity1</AffinityGroup><Label>eGNsaWFjY291bnQy</Label><Status>Created</Status><Endpoints><Endpoint>https://xcliaccount2.blob.core.windows.net/</Endpoint><Endpoint>https://xcliaccount2.queue.core.windows.net/</Endpoint><Endpoint>https://xcliaccount2.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>false</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-08-04T22:31:42Z</CreationTime><CustomDomains/><SecondaryReadEnabled>false</SecondaryReadEnabled></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService></StorageServices>", { 'cache-control': 'no-cache',
  'content-length': '3461',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.109 (rd_rdfe_stable.140724-0157) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'ad8750c72bfdcaf4a6fa9a7f8e02bf33',
  date: 'Mon, 04 Aug 2014 22:32:14 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/storageservices/xcliaccount2', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.109 (rd_rdfe_stable.140724-0157) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'b3f2082103f5c998adc9bec2efbc4e8a',
  date: 'Mon, 04 Aug 2014 22:32:15 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/storageservices/xcliaccount2')
  .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/storageservices/xcliaccount2</Url><ServiceName>xcliaccount2</ServiceName><StorageServiceProperties><Description/><AffinityGroup>xcliaffinity1</AffinityGroup><Label>dGVzdA==</Label><Status>Created</Status><Endpoints><Endpoint>https://xcliaccount2.blob.core.windows.net/</Endpoint><Endpoint>https://xcliaccount2.queue.core.windows.net/</Endpoint><Endpoint>https://xcliaccount2.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>false</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-08-04T22:31:42Z</CreationTime><CustomDomains/><SecondaryReadEnabled>false</SecondaryReadEnabled></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></StorageService>", { 'cache-control': 'no-cache',
  'content-length': '1265',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.109 (rd_rdfe_stable.140724-0157) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '0e032f80d6e8c0428459fd14b584930f',
  date: 'Mon, 04 Aug 2014 22:32:16 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/storageservices/xcliaccount2/keys')
  .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/storageservices/xcliaccount2</Url><StorageServiceKeys><Primary>4dpVdpYJp6CyyKcJNtTavQ13ak6u0Y7yRuWyBFGOoP1NyOqIdh6WsyqlgfTFx2csBvUjL7HygkoMezZx7cxV5Q==</Primary><Secondary>Zyg9ADZD1HuXIgA0FELA8xz2l4l/eBKWumrIf3WnEVKdxI0ThrewsbMneyBhtH46buE6NwZfAJlPZsSMMnyCpg==</Secondary></StorageServiceKeys></StorageService>", { 'cache-control': 'no-cache',
  'content-length': '515',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.109 (rd_rdfe_stable.140724-0157) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '706862f710b8c2d39208faf9e6d70652',
  date: 'Mon, 04 Aug 2014 22:32:16 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/storageservices/xcliaccount2/keys?action=regenerate', '*')
  .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/storageservices/xcliaccount2</Url><StorageServiceKeys><Primary>wiWelNou3Pv9RAHBaDnHFpgY+lBaaOvnfvgYi0d9Mh8k73klrOX5JmORG1tIVQTquFdj2sDKfQ7eRRZ2RCh2eg==</Primary><Secondary>Zyg9ADZD1HuXIgA0FELA8xz2l4l/eBKWumrIf3WnEVKdxI0ThrewsbMneyBhtH46buE6NwZfAJlPZsSMMnyCpg==</Secondary></StorageServiceKeys></StorageService>", { 'cache-control': 'no-cache',
  'content-length': '515',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.109 (rd_rdfe_stable.140724-0157) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '46f6658d5b20c8bd8216e00ec41be204',
  date: 'Mon, 04 Aug 2014 22:32:18 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/storageservices/xcliaccount2/keys')
  .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/storageservices/xcliaccount2</Url><StorageServiceKeys><Primary>wiWelNou3Pv9RAHBaDnHFpgY+lBaaOvnfvgYi0d9Mh8k73klrOX5JmORG1tIVQTquFdj2sDKfQ7eRRZ2RCh2eg==</Primary><Secondary>Zyg9ADZD1HuXIgA0FELA8xz2l4l/eBKWumrIf3WnEVKdxI0ThrewsbMneyBhtH46buE6NwZfAJlPZsSMMnyCpg==</Secondary></StorageServiceKeys></StorageService>", { 'cache-control': 'no-cache',
  'content-length': '515',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.109 (rd_rdfe_stable.140724-0157) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '74024e4b1db1c740ac53ade7dcc1e4f9',
  date: 'Mon, 04 Aug 2014 22:32:18 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/storageservices/xcliaccount2/keys')
  .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/storageservices/xcliaccount2</Url><StorageServiceKeys><Primary>wiWelNou3Pv9RAHBaDnHFpgY+lBaaOvnfvgYi0d9Mh8k73klrOX5JmORG1tIVQTquFdj2sDKfQ7eRRZ2RCh2eg==</Primary><Secondary>Zyg9ADZD1HuXIgA0FELA8xz2l4l/eBKWumrIf3WnEVKdxI0ThrewsbMneyBhtH46buE6NwZfAJlPZsSMMnyCpg==</Secondary></StorageServiceKeys></StorageService>", { 'cache-control': 'no-cache',
  'content-length': '515',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.109 (rd_rdfe_stable.140724-0157) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '1e7193b2ca15cbfd95b62e0f59b03b0a',
  date: 'Mon, 04 Aug 2014 22:32:19 GMT' });
 return result; }]];
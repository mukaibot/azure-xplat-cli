/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var should = require('should');
var util = require('util');
var CLITest = require('../../../framework/arm-cli-test');
var testUtils = require('../../../util/util');
var testprefix = 'arm-cli-vm-stoprestart-tests';
var groupPrefix = 'xplatTestGVMStart';

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'eastus'
}];
var groupName, timeout,
	vmPrefix = 'xplatvmStSp',
	nicName = 'xplattestnicStSp',
	location,
	//os = 'Windows',
	username = 'azureuser',
	password = 'Brillio@2015' ,
	VMImage = 'ad072bd3082149369c449ba5832401ae__Windows-Server-RDSHwO365P-on-Windows-Server-2012-R2-20150128-0010',
	storageAccount = 'xplattstoragestsp',
	storageCont= 'xplatteststoragecntstsp',
	osdiskvhd= 'xplattestvhdstsp',	
	vNetPrefix = 'xplattestvnetStSp',
	subnetName = 'xplattestsubnetStSp',
	publicipName= 'xplattestipStSp',
	dnsPrefix = 'xplattestipdnsstsp' ;

describe('arm', function () {
  describe('compute', function () {
    var suite, retry = 5;
	testUtils.TIMEOUT_INTERVAL = 5000;
	
		before(function (done) {
		  suite = new CLITest(testprefix, requiredEnvironment);
		  suite.setupSuite(function() {		 
				  location = process.env.AZURE_VM_TEST_LOCATION;	  
				  groupName =  suite.isMocked ? 'xplatTestGVMStart' : suite.generateId(groupPrefix, null);	  
				  vmPrefix = suite.isMocked ? 'xplatvmStSp' : suite.generateId(vmPrefix, null);
				  nicName = suite.isMocked ? 'xplattestnicStSp' : suite.generateId(nicName, null);
				  storageAccount = suite.generateId(storageAccount, null);
				  storageCont = suite.isMocked ? 'xplatteststoragecntstsp' : suite.generateId(storageCont, null);
				  osdiskvhd = suite.isMocked ? 'xplattestvhdstsp' : suite.generateId(osdiskvhd, null);
				  vNetPrefix = suite.isMocked ? 'xplattestvnetstsp' : suite.generateId(vNetPrefix, null);	
				  subnetName = suite.isMocked ? 'xplattestsubnetstsp' : suite.generateId(subnetName, null);
				  publicipName = suite.isMocked ? 'xplattestipstsp' : suite.generateId(publicipName, null);
				  dnsPrefix = suite.isMocked ? 'xplattestipdnsstsp' : suite.generateId(dnsPrefix, null);
				  done();
			});
		});

		after(function (done) {
			deleteUsedGroup(function() {
				suite.teardownSuite(done);
			});
		});
		beforeEach(function (done) {
		 
		  suite.setupTest(done);
		});
		afterEach(function (done) {
		  suite.teardownTest(done);
		});

		describe('vm', function () {
		
			it('create for stop and restart', function (done) {
				createGroup(function(){
					var cmd = util.format('vm create %s %s eastus Windows -f %s -q %s -u %s -p %s -o %s -R %s -F %s -P %s -j %s -k %s -i %s -w %s --json', 
							groupName, vmPrefix, nicName,VMImage, username, password, storageAccount,storageCont, vNetPrefix,
							'10.0.0.0/16', subnetName, '10.0.0.0/24', publicipName, dnsPrefix).split(' ');
					testUtils.executeCommand(suite, retry, cmd, function (result) {
						result.exitStatus.should.equal(0);
						done();
					});
				});
			});
			it('Stop and start', function(done) {
				var cmd = util.format('vm stop %s %s --json', groupName, vmPrefix).split(' ');
				testUtils.executeCommand(suite, retry, cmd, function(result) {
					result.exitStatus.should.equal(0);
					setTimeout(function() {
						cmd = util.format('vm start %s %s --json', groupName, vmPrefix).split(' ');
						testUtils.executeCommand(suite, retry, cmd, function(result) {
							result.exitStatus.should.equal(0);
							done();
					});
					}, timeout);
				});
			});
			// VM Restart
			it('Restart', function(done) {
				var cmd = util.format('vm restart %s %s --json', groupName, vmPrefix).split(' ');
				testUtils.executeCommand(suite, retry, cmd, function(result) {
					result.exitStatus.should.equal(0);
					done();
				});
			});
			it('Deallocate', function(done) {
				var cmd = util.format('vm deallocate %s %s --json', groupName, vmPrefix).split(' ');
				testUtils.executeCommand(suite, retry, cmd, function(result) {
					result.exitStatus.should.equal(0);
					done();
				});
			});
		  
		});
	
		function createGroup(callback) {
			var cmd = util.format('group create %s --location %s --json', groupName,location).split(' ');
			testUtils.executeCommand(suite, retry, cmd, function (result) {
			  result.exitStatus.should.equal(0);
			  callback();
			});
		}
		function deleteUsedGroup(callback) {
			if(!suite.isPlayback()) {
				var cmd = util.format('group delete %s --quiet', groupName).split(' ');
				testUtils.executeCommand(suite, retry, cmd, function (result) {
					result.exitStatus.should.equal(0);
					callback();
				});
			} else callback();
		}
  });
});
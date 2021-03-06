var __ = require('underscore');
var util = require('util');
var utils = require('../../../util/utils');
var VNetUtil = require('../../../util/vnet.util');
var tagUtils = require('../tag/tagUtils');
var resourceUtils = require('../resource/resourceUtils');
var $ = utils.getLocaleString;

function VNet(cli, networkResourceProviderClient) {
  this.cli = cli;
  this.log = cli.output;
  this.networkResourceProviderClient = networkResourceProviderClient;
}

__.extend(VNet.prototype, {
  create: function (resourceGroup, name, location, options, _) {
    var vNet = this.get(resourceGroup, name, null, _);

    if (vNet) {
      throw new Error(util.format($('Virtual network "%s" already exists in resource group "%s"'), name, resourceGroup));
    }

    var requestBody = {
      name: name,
      location: location,
      addressSpace: {
        addressPrefixes: []
      },
      dhcpOptions: {
        dnsServers: []
      }
    };

    var vNetUtil = new VNetUtil();

    // handling address prefixes
    if (options.addressPrefixes) {
      this._handleAddressPrefixes(options, requestBody, vNetUtil);
    } else {
      var defaultAddressPrefix = vNetUtil.defaultAddressSpaceInfo().ipv4Cidr;
      this.log.verbose(util.format($('Using default address prefix: %s'), defaultAddressPrefix));
      requestBody.addressSpace.addressPrefixes.push(defaultAddressPrefix);
    }

    // handling dns servers
    if (options.dnsServers) {
      this._handleDnsServers(options, requestBody, vNetUtil);
    } else {
      this.log.verbose($('No DNS server specified'));
    }

    // handling tags
    if (options.tags) {
      var tags = tagUtils.buildTagsParameter(null, options);
      requestBody.tags = tags;
    } else {
      this.log.verbose($('No tags specified'));
    }

    var progress = this.cli.interaction.progress(util.format($('Creating virtual network "%s"'), name));
    try {
      this.networkResourceProviderClient.virtualNetworks.createOrUpdate(resourceGroup, name, requestBody, _);
    } catch (e) {
      throw e;
    } finally {
      progress.end();
    }

    this.show(resourceGroup, name, 'Loading virtual network state', _);
  },

  set: function (resourceGroup, name, options, _) {
    var vNet = this.get(resourceGroup, name, null, _);

    if (!vNet) {
      throw new Error(util.format($('Virtual network "%s" not found in resource group "%s"'), name, resourceGroup));
    }

    var vNetUtil = new VNetUtil();

    // handling address prefixes
    if (options.addressPrefixes) {
      vNet.addressSpace.addressPrefixes = [];
      this._handleAddressPrefixes(options, vNet, vNetUtil);
    }

    // handling dns servers
    var optionalDnsServers = utils.getOptionalArg(options.dnsServers);
    if (optionalDnsServers.hasValue) {
      if (optionalDnsServers.value !== null) {
        this._handleDnsServers(options, vNet, vNetUtil);
      } else {
        this.log.verbose($('Clearing DNS servers'));
        vNet.dhcpOptions.dnsServers = [];
      }
    }

    if (options.tags === false) {
      vNet.tags = {};
    }

    if (options.tags) {
      var tags = tagUtils.buildTagsParameter(vNet.tags, options);
      for (var key in tags) {
        vNet.tags[key] = tags[key];
      }
    }

    var progress = this.cli.interaction.progress(util.format($('Updating virtual network "%s"'), name));
    try {
      this.networkResourceProviderClient.virtualNetworks.createOrUpdate(resourceGroup, name, vNet, _);
    } catch (e) {
      throw e;
    } finally {
      progress.end();
    }

    this.show(resourceGroup, name, 'Loading virtual network state', _);
  },

  delete: function (resourceGroup, name, options, _) {
    var vNet = this.get(resourceGroup, name, null, _);
    if (!vNet) {
      this.log.error(util.format('Virtual network "%s" not found', name));
      return;
    }

    if (!options.quiet && !this.cli.interaction.confirm(util.format($('Delete virtual network %s? [y/n] '), name), _)) {
      return;
    }

    var progress = this.cli.interaction.progress(util.format($('Deleting virtual network "%s"'), name));
    try {
      this.networkResourceProviderClient.virtualNetworks.deleteMethod(resourceGroup, name, _);
    } catch(e) {
      throw e;
    } finally {
      progress.end();
    }
  },

  show: function (resourceGroup, name, message, _) {
    var vNet = this.get(resourceGroup, name, message, _);
    var output = this.cli.output;

    if (!vNet) {
      if (output.format().json) {
        output.json({});
      } else {
        output.info(util.format($('Virtual network "%s" not found'), name));
      }
      return;
    }

    this._showVnet(vNet);
  },

  list: function (resourceGroup, _) {
    var progress = this.cli.interaction.progress('Listing virtual networks');
    var vNets = null;
    try {
      vNets = this.networkResourceProviderClient.virtualNetworks.list(resourceGroup, _);
    } finally {
      progress.end();
    }

    var output = this.cli.output;
    this.cli.interaction.formatOutput(vNets.virtualNetworks, function (outputData) {
      if (outputData.length === 0) {
        output.warn($('No virtual networks found'));
      } else {
        output.table(outputData, function (row, item) {
          row.cell($('ID'), item.id);
          row.cell($('Name'), item.name);
          row.cell($('Location'), item.location);
          row.cell($('Address prefixes'), item.addressSpace.addressPrefixes);
          var dnsServers = '';
          if (item.dhcpOptions) {
            dnsServers = item.dhcpOptions.dnsServers;
          }
          row.cell($('DNS servers'), dnsServers);
        });
      }
    });
  },

  get: function (resourceGroup, name, message, _) {
    message = message || util.format($('Looking up virtual network "%s"'), name);
    var progress = this.cli.interaction.progress(message);
    var vNet = null;
    try {
      vNet = this.networkResourceProviderClient.virtualNetworks.get(resourceGroup, name, _);
    } catch (e) {
      if (e.code === 'ResourceNotFound') {
        return null;
      }
      throw e;
    } finally {
      progress.end();
    }

    return vNet.virtualNetwork;
  },

  _showVnet: function (resource) {
    var resourceInformation = resourceUtils.getResourceInformation(resource.id);
    var log = this.log;
    this.cli.interaction.formatOutput(resource, function (resource) {
      log.data($('Id:                  '), resource.id);
      log.data($('Name:                '), resourceInformation.resourceName || resource.name);
      log.data($('Type:                '), resourceInformation.resourceType || resource.type);
      log.data($('Location:            '), resource.location);
      log.data($('Tags:                '), tagUtils.getTagsInfo(resource.tags));
      log.data($('Provisioning state:  '), resource.provisioningState);
      if (resource.addressSpace && resource.addressSpace.addressPrefixes && resource.addressSpace.addressPrefixes.length > 0) {
        log.data($('Address prefixes:'));
        for (var apNum in resource.addressSpace.addressPrefixes) {
          var addressPrefix = resource.addressSpace.addressPrefixes[apNum];
          log.data('', addressPrefix);
        }
      } else {
        log.data($('Address prefixes:  '), '');
      }
      if (resource.dhcpOptions && resource.dhcpOptions.dnsServers && resource.dhcpOptions.dnsServers.length > 0) {
        log.data($('DNS servers:'));
        for (var dnsNum in resource.dhcpOptions.dnsServers) {
          var dns = resource.dhcpOptions.dnsServers[dnsNum];
          log.data('', dns);
        }
      } else {
        log.data($('DNS servers:       '), '');
      }
      if (resource.subnets && resource.subnets.length > 0) {
        log.data($('Subnets:'));
        resource.subnets.forEach(function(subnet) {
        	log.data('   Name:                   ', subnet.name);
        	log.data('   Address prefix:         ', subnet.addressPrefix ? subnet.addressPrefix : '');
        	log.data('   Network security group: ', subnet.networkSecurityGroup ? subnet.networkSecurityGroup.id : '');
        	log.data('   IP configurations:      ', '');
        	if (subnet.ipConfigurations && subnet.ipConfigurations.length > 0) {
        		subnet.ipConfigurations.forEach(function(subnetIpConfiguration) {
        			log.data('      ', subnetIpConfiguration.id);
        		});
        	}
        });
      } else {
        log.data($('Subnets:       '), '');
      }
      log.data('');
    });
  },

  _handleDnsServers: function(options, vNet, vNetUtil) {
    var dnsServers = options.dnsServers.split(',');
    for (var dnsNum in dnsServers) {
      var dnsServer = dnsServers[dnsNum];
      var dnsIndex = vNet.dhcpOptions.dnsServers.indexOf(dnsServer);
      if (dnsIndex >= 0) {
      	continue;
      }

      var parsedDnsIp = vNetUtil.parseIPv4(dnsServer);
      if (parsedDnsIp.error) {
        throw new Error(parsedDnsIp.error);
      }

      vNet.dhcpOptions.dnsServers.push(dnsServer);
    }
  },

  _handleAddressPrefixes: function(options, vNet, vNetUtil) {
    var addressPrefixes = options.addressPrefixes.split(',');
    for (var addNum in addressPrefixes) {
      var addressPrefix = addressPrefixes[addNum];
      var parsedAddressPrefix = vNetUtil.parseIPv4Cidr(addressPrefix);
      if (parsedAddressPrefix.error) {
        throw new Error(parsedAddressPrefix.error);
      }

      vNet.addressSpace.addressPrefixes.push(addressPrefix);
    }

    for (var i = 0; i < addressPrefixes.length; i++) {
      var addPrefixToCheck = addressPrefixes[i];
      for (var j = 0; j < addressPrefixes.length; j++) {
        var addPrefixToCompare = addressPrefixes[j];
        if (i === j) {
          continue;
        }

        var overlapped = vNetUtil.isCidrsOverlapping(addPrefixToCheck, addPrefixToCompare);
        if (overlapped) {
          throw new Error(util.format($('Address prefix "%s" overlaps address prefix "%s"'), addPrefixToCheck, addPrefixToCompare));
        }
      }
    }
  }
});

module.exports = VNet;
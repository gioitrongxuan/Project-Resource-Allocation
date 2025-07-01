[

  {
    id: 13720876,
    name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.1",
    code: "ENTMQMAAS-301.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.02,
    kpiInTask: kpiC,
    taskKPIWeight: 0.009701,
    status: 'proposal'
  },

  {
    id: 14720876,
    name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.2",
    code: "ENTMQMAAS-301.2",
    preceedingTasks: ["ENTMQMAAS-301.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.1,
    kpiInTask: kpiB,
    taskKPIWeight: 0.028776,
    status: 'proposal'
  },

  {
    id: 13720955,
    name: "[#524] : System-tests: longtime: create new test for user authentication before/after restarting keycloak.1",
    code: "ENTMQMAAS-304.1",
    preceedingTasks: ["ENTMQMAAS-301.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.1,
    kpiInTask: kpiA,
    taskKPIWeight: 0.017642,
    status: 'proposal'
  },

  {
    id: 15720876,
    name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.3",
    code: "ENTMQMAAS-301.3",
    preceedingTasks: ["ENTMQMAAS-303.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.07,
    kpiInTask: kpiC,
    taskKPIWeight: 0.000648,
    status: 'proposal'
  },

  {
    id: 14720955,
    name: "[#524] : System-tests: longtime: create new test for user authentication before/after restarting keycloak.2",
    code: "ENTMQMAAS-304.2",
    preceedingTasks: ["ENTMQMAAS-301.3"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.07,
    kpiInTask: kpiA,
    taskKPIWeight: 0.00702,
    status: 'proposal'
  },

  {
    id: 13721160,
    name: "Unable test io.enmasse.systemtest.brokered.clients.rhea.MsgPatternsTest.testMessageSelectorTopic.1",
    code: "ENTMQMAAS-306.1",
    preceedingTasks: ["ENTMQMAAS-304.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.07,
    kpiInTask: kpiC,
    taskKPIWeight: 0.004282,
    status: 'proposal'
  },

  {
    id: 13720952,
    name: "[#523] : SystemTests: brokered/standard: new test for keycloak persistent storage.1",
    code: "ENTMQMAAS-303.1",
    preceedingTasks: ["ENTMQMAAS-304.1"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.3,
    kpiInTask: kpiB,
    taskKPIWeight: 0.021272,
    status: 'proposal'
  },

  {
    id: 13720976,
    name: "[#526] : System-tests: November list of disabled tests.1",
    code: "ENTMQMAAS-305.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.3,
    kpiInTask: kpiC,
    taskKPIWeight: 0.012182,
    status: 'proposal'
  },

  {
    id: 16720876,
    name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.4",
    code: "ENTMQMAAS-301.4",
    preceedingTasks: ["ENTMQMAAS-306.1", "ENTMQMAAS-305.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.02,
    kpiInTask: kpiC,
    taskKPIWeight: 0.002071,
    status: 'proposal'
  },

  {
    id: 15720955,
    name: "[#524] : System-tests: longtime: create new test for user authentication before/after restarting keycloak.3",
    code: "ENTMQMAAS-304.3",
    preceedingTasks: ["ENTMQMAAS-301.4"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.02,
    kpiInTask: kpiC,
    taskKPIWeight: 0.018031,
    status: 'proposal'
  },

  {
    id: 14720952,
    name: "[#523] : SystemTests: brokered/standard: new test for keycloak persistent storage.2",
    code: "ENTMQMAAS-303.2",
    preceedingTasks: ["ENTMQMAAS-304.3"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.85,
    kpiInTask: kpiC,
    taskKPIWeight: 0.017125,
    status: 'proposal'
  },

  {
    id: 14720976,
    name: "[#526] : System-tests: November list of disabled tests.2",
    code: "ENTMQMAAS-305.2",
    preceedingTasks: ["ENTMQMAAS-303.2"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.85,
    kpiInTask: kpiA,
    taskKPIWeight: 0.010417,
    status: 'proposal'
  },

  {
    id: 17720876,
    name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.5",
    code: "ENTMQMAAS-301.5",
    preceedingTasks: ["ENTMQMAAS-305.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.39,
    kpiInTask: kpiC,
    taskKPIWeight: 0.00847,
    status: 'proposal'
  },

  {
    id: 16720955,
    name: "[#524] : System-tests: longtime: create new test for user authentication before/after restarting keycloak.4",
    code: "ENTMQMAAS-304.4",
    preceedingTasks: ["ENTMQMAAS-301.5"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.39,
    kpiInTask: kpiC,
    taskKPIWeight: 0.013701,
    status: 'proposal'
  },

  {
    id: 13721310,
    name: "[#539] : System-tests: createtestAuthSendReceiveLong.1",
    code: "ENTMQMAAS-307.1",
    preceedingTasks: ["ENTMQMAAS-304.4"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.39,
    kpiInTask: kpiA,
    taskKPIWeight: 0.021832,
    status: 'proposal'
  },

  {
    id: 15720952,
    name: "[#523] : SystemTests: brokered/standard: new test for keycloak persistent storage.3",
    code: "ENTMQMAAS-303.3",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 2.63,
    kpiInTask: kpiB,
    taskKPIWeight: 0.021796,
    status: 'proposal'
  },

  {
    id: 15720976,
    name: "[#526] : System-tests: November list of disabled tests.3",
    code: "ENTMQMAAS-305.3",
    preceedingTasks: ["ENTMQMAAS-303.3"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 2.63,
    kpiInTask: kpiC,
    taskKPIWeight: 0.007538,
    status: 'proposal'
  },

  {
    id: 16720952,
    name: "[#523] : SystemTests: brokered/standard: new test for keycloak persistent storage.4",
    code: "ENTMQMAAS-303.4",
    preceedingTasks: ["ENTMQMAAS-307.1", "ENTMQMAAS-305.3"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 1.93,
    kpiInTask: kpiB,
    taskKPIWeight: 0.003573,
    status: 'proposal'
  },

  {
    id: 13724080,
    name: "Productize ER3 of RHOM.1",
    code: "ENTMQMAAS-318.1",
    preceedingTasks: ["ENTMQMAAS-303.4"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.55,
        frontend: 2.71,
        database: 2.21,
        devops: 2.96,
        ai_ml: 2.9099999999999997,
        testing: 1.5799999999999998,
        issue_tracking: 3.2199999999999998
    },
    estimateNormalTime: 0.2,
    kpiInTask: kpiB,
    taskKPIWeight: 0.013856,
    status: 'proposal'
  },

  {
    id: 18720876,
    name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.6",
    code: "ENTMQMAAS-301.6",
    preceedingTasks: ["ENTMQMAAS-318.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.97,
    kpiInTask: kpiC,
    taskKPIWeight: 0.000131,
    status: 'proposal'
  },

  {
    id: 17720952,
    name: "[#523] : SystemTests: brokered/standard: new test for keycloak persistent storage.5",
    code: "ENTMQMAAS-303.5",
    preceedingTasks: ["ENTMQMAAS-301.6"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 13.68,
    kpiInTask: kpiA,
    taskKPIWeight: 0.002626,
    status: 'proposal'
  },

  {
    id: 19720876,
    name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.7",
    code: "ENTMQMAAS-301.7",
    preceedingTasks: ["ENTMQMAAS-303.5"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 10.32,
    kpiInTask: kpiA,
    taskKPIWeight: 0.010219,
    status: 'proposal'
  },

  {
    id: 13730070,
    name: "[#746] : Add support for checking requests against limits and setting status on address.1",
    code: "ENTMQMAAS-334.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.98,
    kpiInTask: kpiC,
    taskKPIWeight: 0.005967,
    status: 'proposal'
  },

  {
    id: 13730071,
    name: "[#747] : Add support for colocated topics.1",
    code: "ENTMQMAAS-335.1",
    preceedingTasks: ["ENTMQMAAS-301.7", "ENTMQMAAS-334.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.98,
    kpiInTask: kpiA,
    taskKPIWeight: 0.001519,
    status: 'proposal'
  },

  {
    id: 13730073,
    name: "[#749] : Use statefulsets for brokers.1",
    code: "ENTMQMAAS-337.1",
    preceedingTasks: ["ENTMQMAAS-335.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.98,
    kpiInTask: kpiA,
    taskKPIWeight: 0.025535,
    status: 'proposal'
  },

  {
    id: 13730068,
    name: "[#744] : Implement Plan resource limits for address space.1",
    code: "ENTMQMAAS-332.1",
    preceedingTasks: ["ENTMQMAAS-337.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.98,
    kpiInTask: kpiB,
    taskKPIWeight: 0.004268,
    status: 'proposal'
  },

  {
    id: 13730072,
    name: "[#748] : Persist decision about where queues/topics are placed.1",
    code: "ENTMQMAAS-336.1",
    preceedingTasks: ["ENTMQMAAS-332.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.98,
    kpiInTask: kpiA,
    taskKPIWeight: 0.005806,
    status: 'proposal'
  },

  {
    id: 13730069,
    name: "[#745] : Implement Plan resource requests for addresses.1",
    code: "ENTMQMAAS-333.1",
    preceedingTasks: ["ENTMQMAAS-336.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.98,
    kpiInTask: kpiC,
    taskKPIWeight: 0.007573,
    status: 'proposal'
  },

  {
    id: 13730076,
    name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.1",
    code: "ENTMQMAAS-340.1",
    preceedingTasks: ["ENTMQMAAS-301.8", "ENTMQMAAS-333.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.98,
    kpiInTask: kpiC,
    taskKPIWeight: 0.021204,
    status: 'proposal'
  },

  {
    id: 13730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.1",
    code: "ENTMQMAAS-347.1",
    preceedingTasks: ["ENTMQMAAS-340.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.98,
    kpiInTask: kpiC,
    taskKPIWeight: 0.007798,
    status: 'proposal'
  },

  {
    id: 13730092,
    name: "[#768] : Disable MQTT (configurable upstream?).1",
    code: "ENTMQMAAS-356.1",
    preceedingTasks: ["ENTMQMAAS-357.1", "ENTMQMAAS-347.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.98,
    kpiInTask: kpiC,
    taskKPIWeight: 0.014718,
    status: 'proposal'
  },

  {
    id: 20720876,
    name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.8",
    code: "ENTMQMAAS-301.8",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.36,
    kpiInTask: kpiA,
    taskKPIWeight: 0.016669,
    status: 'proposal'
  },

  {
    id: 13730144,
    name: "[#773] : Tests for authentication WebConsole.1",
    code: "ENTMQMAAS-361.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.36,
    kpiInTask: kpiC,
    taskKPIWeight: 0.020402,
    status: 'proposal'
  },

  {
    id: 13730145,
    name: "[#774] : Tests for authorization in WebConsole.1",
    code: "ENTMQMAAS-362.1",
    preceedingTasks: ["ENTMQMAAS-361.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.36,
    kpiInTask: kpiC,
    taskKPIWeight: 0.024979,
    status: 'proposal'
  },

  {
    id: 13730143,
    name: "[#772] : WebConsole Tests for addresses status.1",
    code: "ENTMQMAAS-360.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.36,
    kpiInTask: kpiC,
    taskKPIWeight: 0.001809,
    status: 'proposal'
  },

  {
    id: 13730146,
    name: "[#775] : Tests for clients authorization.1",
    code: "ENTMQMAAS-363.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.36,
    kpiInTask: kpiA,
    taskKPIWeight: 0.009691,
    status: 'proposal'
  },

  {
    id: 13730148,
    name: "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.1",
    code: "ENTMQMAAS-365.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.36,
    kpiInTask: kpiC,
    taskKPIWeight: 0.024964,
    status: 'proposal'
  },

  {
    id: 13730167,
    name: "Setup Jenkins job with productized images.1",
    code: "ENTMQMAAS-367.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.36,
    kpiInTask: kpiC,
    taskKPIWeight: 0.000959,
    status: 'proposal'
  },

  {
    id: 13730139,
    name: "Polarion reporting of enmasse test cases.1",
    code: "ENTMQMAAS-357.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 3.43,
    kpiInTask: kpiC,
    taskKPIWeight: 0.00941,
    status: 'proposal'
  },

  {
    id: 13730141,
    name: "[#770] : Define tests for limitation of address-spaces (by credits).1",
    code: "ENTMQMAAS-358.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 3.43,
    kpiInTask: kpiC,
    taskKPIWeight: 0.023814,
    status: 'proposal'
  },

  {
    id: 13730147,
    name: "[#776] : Recheck and enable system tests for standard address space.1",
    code: "ENTMQMAAS-364.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 3.43,
    kpiInTask: kpiC,
    taskKPIWeight: 0.010512,
    status: 'proposal'
  },

  {
    id: 21720876,
    name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.9",
    code: "ENTMQMAAS-301.9",
    preceedingTasks: ["ENTMQMAAS-347.2", "ENTMQMAAS-367.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.02,
    kpiInTask: kpiC,
    taskKPIWeight: 0.009537,
    status: 'proposal'
  },

  {
    id: 14730144,
    name: "[#773] : Tests for authentication WebConsole.2",
    code: "ENTMQMAAS-361.2",
    preceedingTasks: ["ENTMQMAAS-301.9"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.02,
    kpiInTask: kpiA,
    taskKPIWeight: 0.005439,
    status: 'proposal'
  },

  {
    id: 14730143,
    name: "[#772] : WebConsole Tests for addresses status.2",
    code: "ENTMQMAAS-360.2",
    preceedingTasks: ["ENTMQMAAS-361.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.02,
    kpiInTask: kpiA,
    taskKPIWeight: 0.009598,
    status: 'proposal'
  },

  {
    id: 14730148,
    name: "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.2",
    code: "ENTMQMAAS-365.2",
    preceedingTasks: ["ENTMQMAAS-364.1", "ENTMQMAAS-360.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.02,
    kpiInTask: kpiC,
    taskKPIWeight: 0.005155,
    status: 'proposal'
  },

  {
    id: 14730167,
    name: "Setup Jenkins job with productized images.2",
    code: "ENTMQMAAS-367.2",
    preceedingTasks: ["ENTMQMAAS-365.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.02,
    kpiInTask: kpiA,
    taskKPIWeight: 0.01168,
    status: 'proposal'
  },

  {
    id: 14730070,
    name: "[#746] : Add support for checking requests against limits and setting status on address.2",
    code: "ENTMQMAAS-334.2",
    preceedingTasks: ["ENTMQMAAS-362.1", "ENTMQMAAS-356.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.63,
    kpiInTask: kpiB,
    taskKPIWeight: 0.011579,
    status: 'proposal'
  },

  {
    id: 14730071,
    name: "[#747] : Add support for colocated topics.2",
    code: "ENTMQMAAS-335.2",
    preceedingTasks: ["ENTMQMAAS-334.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.63,
    kpiInTask: kpiA,
    taskKPIWeight: 0.001,
    status: 'proposal'
  },

  {
    id: 14730068,
    name: "[#744] : Implement Plan resource limits for address space.2",
    code: "ENTMQMAAS-332.2",
    preceedingTasks: ["ENTMQMAAS-360.1", "ENTMQMAAS-335.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.63,
    kpiInTask: kpiC,
    taskKPIWeight: 0.021544,
    status: 'proposal'
  },

  {
    id: 14730072,
    name: "[#748] : Persist decision about where queues/topics are placed.2",
    code: "ENTMQMAAS-336.2",
    preceedingTasks: ["ENTMQMAAS-358.1", "ENTMQMAAS-332.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.63,
    kpiInTask: kpiA,
    taskKPIWeight: 0.005798,
    status: 'proposal'
  },

  {
    id: 14730069,
    name: "[#745] : Implement Plan resource requests for addresses.2",
    code: "ENTMQMAAS-333.2",
    preceedingTasks: ["ENTMQMAAS-363.1", "ENTMQMAAS-336.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.63,
    kpiInTask: kpiB,
    taskKPIWeight: 0.015786,
    status: 'proposal'
  },

  {
    id: 14730076,
    name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.2",
    code: "ENTMQMAAS-340.2",
    preceedingTasks: ["ENTMQMAAS-355.1", "ENTMQMAAS-333.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.63,
    kpiInTask: kpiB,
    taskKPIWeight: 0.022508,
    status: 'proposal'
  },

  {
    id: 14730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.2",
    code: "ENTMQMAAS-347.2",
    preceedingTasks: ["ENTMQMAAS-365.1", "ENTMQMAAS-340.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.63,
    kpiInTask: kpiB,
    taskKPIWeight: 0.000634,
    status: 'proposal'
  },

  {
    id: 14730092,
    name: "[#768] : Disable MQTT (configurable upstream?).2",
    code: "ENTMQMAAS-356.2",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.63,
    kpiInTask: kpiA,
    taskKPIWeight: 0.023314,
    status: 'proposal'
  },

  {
    id: 14730141,
    name: "[#770] : Define tests for limitation of address-spaces (by credits).2",
    code: "ENTMQMAAS-358.2",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.46,
    kpiInTask: kpiC,
    taskKPIWeight: 0.021746,
    status: 'proposal'
  },

  {
    id: 14730147,
    name: "[#776] : Recheck and enable system tests for standard address space.2",
    code: "ENTMQMAAS-364.2",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.46,
    kpiInTask: kpiC,
    taskKPIWeight: 0.001874,
    status: 'proposal'
  },

  {
    id: 13732596,
    name: "[#843] : improve test framework regarding to definition of dynamically created plans.1",
    code: "ENTMQMAAS-374.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.46,
    kpiInTask: kpiA,
    taskKPIWeight: 0.004174,
    status: 'proposal'
  },

  {
    id: 22720876,
    name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.10",
    code: "ENTMQMAAS-301.10",
    preceedingTasks: ["ENTMQMAAS-367.2", "ENTMQMAAS-356.2", "ENTMQMAAS-353.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.22,
    kpiInTask: kpiA,
    taskKPIWeight: 0.015191,
    status: 'proposal'
  },

  {
    id: 15730144,
    name: "[#773] : Tests for authentication WebConsole.3",
    code: "ENTMQMAAS-361.3",
    preceedingTasks: ["ENTMQMAAS-301.10"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.22,
    kpiInTask: kpiB,
    taskKPIWeight: 0.02731,
    status: 'proposal'
  },

  {
    id: 15730143,
    name: "[#772] : WebConsole Tests for addresses status.3",
    code: "ENTMQMAAS-360.3",
    preceedingTasks: ["ENTMQMAAS-358.2", "ENTMQMAAS-361.3"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.22,
    kpiInTask: kpiA,
    taskKPIWeight: 0.00705,
    status: 'proposal'
  },

  {
    id: 15730148,
    name: "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.3",
    code: "ENTMQMAAS-365.3",
    preceedingTasks: ["ENTMQMAAS-360.3"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.22,
    kpiInTask: kpiA,
    taskKPIWeight: 0.004109,
    status: 'proposal'
  },

  {
    id: 15730167,
    name: "Setup Jenkins job with productized images.3",
    code: "ENTMQMAAS-367.3",
    preceedingTasks: ["ENTMQMAAS-334.3", "ENTMQMAAS-364.2", "ENTMQMAAS-365.3"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.22,
    kpiInTask: kpiB,
    taskKPIWeight: 0.017195,
    status: 'proposal'
  },

  {
    id: 13732615,
    name: "[#844] : system-tests: create documentation in HACKING doc how to execute webconsole tests.1",
    code: "ENTMQMAAS-375.1",
    preceedingTasks: ["ENTMQMAAS-367.3"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.22,
    kpiInTask: kpiA,
    taskKPIWeight: 0.004947,
    status: 'proposal'
  },

  {
    id: 13727841,
    name: "Document Creating and deleting addresses.1",
    code: "ENTMQMAAS-328.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 3.06,
        frontend: 2.48,
        database: 2.82,
        devops: 3.08,
        ai_ml: 2.62,
        testing: 1.71,
        issue_tracking: 2.83
    },
    estimateNormalTime: 25.44,
    kpiInTask: kpiB,
    taskKPIWeight: 0.027799,
    status: 'proposal'
  },

  {
    id: 23720876,
    name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.11",
    code: "ENTMQMAAS-301.11",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.59,
    kpiInTask: kpiC,
    taskKPIWeight: 0.018537,
    status: 'proposal'
  },

  {
    id: 16730143,
    name: "[#772] : WebConsole Tests for addresses status.4",
    code: "ENTMQMAAS-360.4",
    preceedingTasks: ["ENTMQMAAS-349.1", "ENTMQMAAS-336.3", "ENTMQMAAS-301.11"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.59,
    kpiInTask: kpiA,
    taskKPIWeight: 0.005754,
    status: 'proposal'
  },

  {
    id: 16730148,
    name: "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.4",
    code: "ENTMQMAAS-365.4",
    preceedingTasks: ["ENTMQMAAS-360.4"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.59,
    kpiInTask: kpiA,
    taskKPIWeight: 0.012129,
    status: 'proposal'
  },

  {
    id: 16730167,
    name: "Setup Jenkins job with productized images.4",
    code: "ENTMQMAAS-367.4",
    preceedingTasks: ["ENTMQMAAS-340.3", "ENTMQMAAS-365.4"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.59,
    kpiInTask: kpiB,
    taskKPIWeight: 0.026782,
    status: 'proposal'
  },

  {
    id: 14732615,
    name: "[#844] : system-tests: create documentation in HACKING doc how to execute webconsole tests.2",
    code: "ENTMQMAAS-375.2",
    preceedingTasks: ["ENTMQMAAS-367.4"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.59,
    kpiInTask: kpiA,
    taskKPIWeight: 0.005886,
    status: 'proposal'
  },

  {
    id: 24720876,
    name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.12",
    code: "ENTMQMAAS-301.12",
    preceedingTasks: ["ENTMQMAAS-347.3", "ENTMQMAAS-375.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.14,
    kpiInTask: kpiA,
    taskKPIWeight: 0.001314,
    status: 'proposal'
  },

  {
    id: 17730143,
    name: "[#772] : WebConsole Tests for addresses status.5",
    code: "ENTMQMAAS-360.5",
    preceedingTasks: ["ENTMQMAAS-301.12"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.14,
    kpiInTask: kpiA,
    taskKPIWeight: 0.010248,
    status: 'proposal'
  },

  {
    id: 17730148,
    name: "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.5",
    code: "ENTMQMAAS-365.5",
    preceedingTasks: ["ENTMQMAAS-360.5"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.14,
    kpiInTask: kpiC,
    taskKPIWeight: 0.021477,
    status: 'proposal'
  },

  {
    id: 17730167,
    name: "Setup Jenkins job with productized images.5",
    code: "ENTMQMAAS-367.5",
    preceedingTasks: ["ENTMQMAAS-365.5"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.14,
    kpiInTask: kpiA,
    taskKPIWeight: 0.005219,
    status: 'proposal'
  },

  {
    id: 15730070,
    name: "[#746] : Add support for checking requests against limits and setting status on address.3",
    code: "ENTMQMAAS-334.3",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 1.29,
    kpiInTask: kpiC,
    taskKPIWeight: 0.025096,
    status: 'proposal'
  },

  {
    id: 15730071,
    name: "[#747] : Add support for colocated topics.3",
    code: "ENTMQMAAS-335.3",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 1.29,
    kpiInTask: kpiA,
    taskKPIWeight: 0.013343,
    status: 'proposal'
  },

  {
    id: 15730072,
    name: "[#748] : Persist decision about where queues/topics are placed.3",
    code: "ENTMQMAAS-336.3",
    preceedingTasks: ["ENTMQMAAS-374.1", "ENTMQMAAS-375.1", "ENTMQMAAS-328.1", "ENTMQMAAS-335.3"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 1.29,
    kpiInTask: kpiC,
    taskKPIWeight: 0.023279,
    status: 'proposal'
  },

  {
    id: 15730076,
    name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.3",
    code: "ENTMQMAAS-340.3",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 1.29,
    kpiInTask: kpiA,
    taskKPIWeight: 0.007403,
    status: 'proposal'
  },

  {
    id: 15730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.3",
    code: "ENTMQMAAS-347.3",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 1.29,
    kpiInTask: kpiA,
    taskKPIWeight: 0.0087,
    status: 'proposal'
  },

  {
    id: 15730092,
    name: "[#768] : Disable MQTT (configurable upstream?).3",
    code: "ENTMQMAAS-356.3",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 1.29,
    kpiInTask: kpiB,
    taskKPIWeight: 0.021564,
    status: 'proposal'
  },

  {
    id: 13730089,
    name: "[#765] : Changes to service broker (service type is just address space, different plans are supported. See also point above about how to tie plans offered to plans specified) .1",
    code: "ENTMQMAAS-353.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.88,
        frontend: 2.13,
        database: 2.17,
        devops: 2.94,
        ai_ml: 2.09,
        testing: 1.46,
        issue_tracking: 2.6999999999999997
    },
    estimateNormalTime: 7.2,
    kpiInTask: kpiC,
    taskKPIWeight: 0.005002,
    status: 'proposal'
  },

  {
    id: 13730082,
    name: "[#758] : Keycloak plugin OAUTH2 support.1",
    code: "ENTMQMAAS-346.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.88,
        frontend: 2.13,
        database: 2.17,
        devops: 2.94,
        ai_ml: 2.09,
        testing: 1.46,
        issue_tracking: 2.6999999999999997
    },
    estimateNormalTime: 7.2,
    kpiInTask: kpiA,
    taskKPIWeight: 0.007582,
    status: 'proposal'
  },

  {
    id: 18730143,
    name: "[#772] : WebConsole Tests for addresses status.6",
    code: "ENTMQMAAS-360.6",
    preceedingTasks: ["ENTMQMAAS-367.5"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.03,
    kpiInTask: kpiA,
    taskKPIWeight: 0.010352,
    status: 'proposal'
  },

  {
    id: 18730148,
    name: "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.6",
    code: "ENTMQMAAS-365.6",
    preceedingTasks: ["ENTMQMAAS-360.6"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.03,
    kpiInTask: kpiA,
    taskKPIWeight: 0.003964,
    status: 'proposal'
  },

  {
    id: 18730167,
    name: "Setup Jenkins job with productized images.6",
    code: "ENTMQMAAS-367.6",
    preceedingTasks: ["ENTMQMAAS-365.6"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.03,
    kpiInTask: kpiC,
    taskKPIWeight: 0.001459,
    status: 'proposal'
  },

  {
    id: 14730089,
    name: "[#765] : Changes to service broker (service type is just address space, different plans are supported. See also point above about how to tie plans offered to plans specified) .2",
    code: "ENTMQMAAS-353.2",
    preceedingTasks: ["ENTMQMAAS-346.1", "ENTMQMAAS-367.6"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.88,
        frontend: 2.13,
        database: 2.17,
        devops: 2.94,
        ai_ml: 2.09,
        testing: 1.46,
        issue_tracking: 2.6999999999999997
    },
    estimateNormalTime: 0.73,
    kpiInTask: kpiB,
    taskKPIWeight: 0.005645,
    status: 'proposal'
  },

  {
    id: 14730082,
    name: "[#758] : Keycloak plugin OAUTH2 support.2",
    code: "ENTMQMAAS-346.2",
    preceedingTasks: ["ENTMQMAAS-353.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.88,
        frontend: 2.13,
        database: 2.17,
        devops: 2.94,
        ai_ml: 2.09,
        testing: 1.46,
        issue_tracking: 2.6999999999999997
    },
    estimateNormalTime: 0.73,
    kpiInTask: kpiC,
    taskKPIWeight: 0.025065,
    status: 'proposal'
  },

  {
    id: 13733954,
    name: "[#811] : Brokered: cannot create topic: user null does not have permissions to 'send'....1",
    code: "ENTMQMAAS-383.1",
    preceedingTasks: ["ENTMQMAAS-350.1", "ENTMQMAAS-346.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.88,
        frontend: 2.13,
        database: 2.17,
        devops: 2.94,
        ai_ml: 2.09,
        testing: 1.46,
        issue_tracking: 2.6999999999999997
    },
    estimateNormalTime: 0.73,
    kpiInTask: kpiA,
    taskKPIWeight: 0.005406,
    status: 'proposal'
  },

  {
    id: 16730070,
    name: "[#746] : Add support for checking requests against limits and setting status on address.4",
    code: "ENTMQMAAS-334.4",
    preceedingTasks: ["ENTMQMAAS-356.3"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.84,
    kpiInTask: kpiA,
    taskKPIWeight: 0.017287,
    status: 'proposal'
  },

  {
    id: 16730071,
    name: "[#747] : Add support for colocated topics.4",
    code: "ENTMQMAAS-335.4",
    preceedingTasks: ["ENTMQMAAS-334.4"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.84,
    kpiInTask: kpiC,
    taskKPIWeight: 0.024658,
    status: 'proposal'
  },

  {
    id: 16730072,
    name: "[#748] : Persist decision about where queues/topics are placed.4",
    code: "ENTMQMAAS-336.4",
    preceedingTasks: ["ENTMQMAAS-335.4"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.84,
    kpiInTask: kpiC,
    taskKPIWeight: 0.020513,
    status: 'proposal'
  },

  {
    id: 16730076,
    name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.4",
    code: "ENTMQMAAS-340.4",
    preceedingTasks: ["ENTMQMAAS-336.4"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.84,
    kpiInTask: kpiB,
    taskKPIWeight: 0.007999,
    status: 'proposal'
  },

  {
    id: 16730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.4",
    code: "ENTMQMAAS-347.4",
    preceedingTasks: ["ENTMQMAAS-383.1", "ENTMQMAAS-358.3", "ENTMQMAAS-340.4"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.84,
    kpiInTask: kpiC,
    taskKPIWeight: 0.010423,
    status: 'proposal'
  },

  {
    id: 16730092,
    name: "[#768] : Disable MQTT (configurable upstream?).4",
    code: "ENTMQMAAS-356.4",
    preceedingTasks: ["ENTMQMAAS-360.7", "ENTMQMAAS-347.4"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.84,
    kpiInTask: kpiB,
    taskKPIWeight: 0.000064,
    status: 'proposal'
  },

  {
    id: 13733952,
    name: "Investigate options for enforcing backlog limits on broker/router.1",
    code: "ENTMQMAAS-382.1",
    preceedingTasks: ["ENTMQMAAS-356.4"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.84,
    kpiInTask: kpiB,
    taskKPIWeight: 0.023903,
    status: 'proposal'
  },

  {
    id: 17730070,
    name: "[#746] : Add support for checking requests against limits and setting status on address.5",
    code: "ENTMQMAAS-334.5",
    preceedingTasks: ["ENTMQMAAS-365.7", "ENTMQMAAS-382.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.15,
    kpiInTask: kpiC,
    taskKPIWeight: 0.023327,
    status: 'proposal'
  },

  {
    id: 17730071,
    name: "[#747] : Add support for colocated topics.5",
    code: "ENTMQMAAS-335.5",
    preceedingTasks: ["ENTMQMAAS-334.5"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.15,
    kpiInTask: kpiC,
    taskKPIWeight: 0.010213,
    status: 'proposal'
  },

  {
    id: 17730072,
    name: "[#748] : Persist decision about where queues/topics are placed.5",
    code: "ENTMQMAAS-336.5",
    preceedingTasks: ["ENTMQMAAS-335.5"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.15,
    kpiInTask: kpiC,
    taskKPIWeight: 0.003799,
    status: 'proposal'
  },

  {
    id: 17730076,
    name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.5",
    code: "ENTMQMAAS-340.5",
    preceedingTasks: ["ENTMQMAAS-336.5"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.15,
    kpiInTask: kpiB,
    taskKPIWeight: 0.006833,
    status: 'proposal'
  },

  {
    id: 17730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.5",
    code: "ENTMQMAAS-347.5",
    preceedingTasks: ["ENTMQMAAS-340.5"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.15,
    kpiInTask: kpiC,
    taskKPIWeight: 0.005561,
    status: 'proposal'
  },

  {
    id: 17730092,
    name: "[#768] : Disable MQTT (configurable upstream?).5",
    code: "ENTMQMAAS-356.5",
    preceedingTasks: ["ENTMQMAAS-367.7", "ENTMQMAAS-347.5"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.15,
    kpiInTask: kpiC,
    taskKPIWeight: 0.016514,
    status: 'proposal'
  },

  {
    id: 14733952,
    name: "Investigate options for enforcing backlog limits on broker/router.2",
    code: "ENTMQMAAS-382.2",
    preceedingTasks: ["ENTMQMAAS-356.5"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.15,
    kpiInTask: kpiA,
    taskKPIWeight: 0.016084,
    status: 'proposal'
  },

  {
    id: 13734956,
    name: "[#894] : Console does not sanitize address config names.1",
    code: "ENTMQMAAS-385.1",
    preceedingTasks: ["ENTMQMAAS-382.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.15,
    kpiInTask: kpiB,
    taskKPIWeight: 0.02478,
    status: 'proposal'
  },

  {
    id: 19730143,
    name: "[#772] : WebConsole Tests for addresses status.7",
    code: "ENTMQMAAS-360.7",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.29,
    kpiInTask: kpiB,
    taskKPIWeight: 0.012847,
    status: 'proposal'
  },

  {
    id: 19730148,
    name: "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.7",
    code: "ENTMQMAAS-365.7",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.29,
    kpiInTask: kpiB,
    taskKPIWeight: 0.011297,
    status: 'proposal'
  },

  {
    id: 19730167,
    name: "Setup Jenkins job with productized images.7",
    code: "ENTMQMAAS-367.7",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.29,
    kpiInTask: kpiA,
    taskKPIWeight: 0.010101,
    status: 'proposal'
  },

  {
    id: 13733964,
    name: "[#877] : Make ansible deployment for install dependencies for running systemtests.1",
    code: "ENTMQMAAS-384.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.29,
    kpiInTask: kpiA,
    taskKPIWeight: 0.008832,
    status: 'proposal'
  },

  {
    id: 15730141,
    name: "[#770] : Define tests for limitation of address-spaces (by credits).3",
    code: "ENTMQMAAS-358.3",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 4.58,
    kpiInTask: kpiB,
    taskKPIWeight: 0.006521,
    status: 'proposal'
  },

  {
    id: 14732596,
    name: "[#843] : improve test framework regarding to definition of dynamically created plans.2",
    code: "ENTMQMAAS-374.2",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 4.58,
    kpiInTask: kpiB,
    taskKPIWeight: 0.02099,
    status: 'proposal'
  },

  {
    id: 18730070,
    name: "[#746] : Add support for checking requests against limits and setting status on address.6",
    code: "ENTMQMAAS-334.6",
    preceedingTasks: ["ENTMQMAAS-328.2", "ENTMQMAAS-385.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.08,
    kpiInTask: kpiC,
    taskKPIWeight: 0.003769,
    status: 'proposal'
  },

  {
    id: 18730071,
    name: "[#747] : Add support for colocated topics.6",
    code: "ENTMQMAAS-335.6",
    preceedingTasks: ["ENTMQMAAS-334.6"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.08,
    kpiInTask: kpiB,
    taskKPIWeight: 0.012483,
    status: 'proposal'
  },

  {
    id: 18730072,
    name: "[#748] : Persist decision about where queues/topics are placed.6",
    code: "ENTMQMAAS-336.6",
    preceedingTasks: ["ENTMQMAAS-335.6"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.08,
    kpiInTask: kpiB,
    taskKPIWeight: 0.0215,
    status: 'proposal'
  },

  {
    id: 18730076,
    name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.6",
    code: "ENTMQMAAS-340.6",
    preceedingTasks: ["ENTMQMAAS-336.6"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.08,
    kpiInTask: kpiA,
    taskKPIWeight: 0.000592,
    status: 'proposal'
  },

  {
    id: 18730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.6",
    code: "ENTMQMAAS-347.6",
    preceedingTasks: ["ENTMQMAAS-340.6"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.08,
    kpiInTask: kpiC,
    taskKPIWeight: 0.007028,
    status: 'proposal'
  },

  {
    id: 18730092,
    name: "[#768] : Disable MQTT (configurable upstream?).6",
    code: "ENTMQMAAS-356.6",
    preceedingTasks: ["ENTMQMAAS-347.6"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.08,
    kpiInTask: kpiC,
    taskKPIWeight: 0.00202,
    status: 'proposal'
  },

  {
    id: 15733952,
    name: "Investigate options for enforcing backlog limits on broker/router.3",
    code: "ENTMQMAAS-382.3",
    preceedingTasks: ["ENTMQMAAS-356.6"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.08,
    kpiInTask: kpiB,
    taskKPIWeight: 0.001141,
    status: 'proposal'
  },

  {
    id: 14734956,
    name: "[#894] : Console does not sanitize address config names.2",
    code: "ENTMQMAAS-385.2",
    preceedingTasks: ["ENTMQMAAS-382.3"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.08,
    kpiInTask: kpiB,
    taskKPIWeight: 0.017273,
    status: 'proposal'
  },

  {
    id: 13735371,
    name: "[#910] : address-controller can't replace addresses created via console.1",
    code: "ENTMQMAAS-386.1",
    preceedingTasks: ["ENTMQMAAS-385.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.08,
    kpiInTask: kpiB,
    taskKPIWeight: 0.000688,
    status: 'proposal'
  },

  {
    id: 20730143,
    name: "[#772] : WebConsole Tests for addresses status.8",
    code: "ENTMQMAAS-360.8",
    preceedingTasks: ["ENTMQMAAS-384.1", "ENTMQMAAS-374.2", "ENTMQMAAS-386.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.02,
    kpiInTask: kpiC,
    taskKPIWeight: 0.007423,
    status: 'proposal'
  },

  {
    id: 20730167,
    name: "Setup Jenkins job with productized images.8",
    code: "ENTMQMAAS-367.8",
    preceedingTasks: ["ENTMQMAAS-360.8"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.02,
    kpiInTask: kpiA,
    taskKPIWeight: 0.001026,
    status: 'proposal'
  },

  {
    id: 13730091,
    name: "[#767] : Disable durable subs (configurable upstream?).1",
    code: "ENTMQMAAS-355.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.94,
        frontend: 2.44,
        database: 2.35,
        devops: 3.06,
        ai_ml: 2.39,
        testing: 1.6099999999999999,
        issue_tracking: 2.85
    },
    estimateNormalTime: 5.9,
    kpiInTask: kpiA,
    taskKPIWeight: 0.005937,
    status: 'proposal'
  },

  {
    id: 13730085,
    name: "[#761] : Console to support status for addresses.1",
    code: "ENTMQMAAS-349.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.94,
        frontend: 2.44,
        database: 2.35,
        devops: 3.06,
        ai_ml: 2.39,
        testing: 1.6099999999999999,
        issue_tracking: 2.85
    },
    estimateNormalTime: 5.9,
    kpiInTask: kpiB,
    taskKPIWeight: 0.021226,
    status: 'proposal'
  },

  {
    id: 13730086,
    name: "[#762] : How to match plans offered to plans specified (e.g. have console offer plans based on the presence of configmaps in its namespace or variations of that).1",
    code: "ENTMQMAAS-350.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.94,
        frontend: 2.44,
        database: 2.35,
        devops: 3.06,
        ai_ml: 2.39,
        testing: 1.6099999999999999,
        issue_tracking: 2.85
    },
    estimateNormalTime: 5.9,
    kpiInTask: kpiA,
    taskKPIWeight: 0.025305,
    status: 'proposal'
  },

  {
    id: 13730081,
    name: "[#757] : Oauth for console.1",
    code: "ENTMQMAAS-345.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.94,
        frontend: 2.44,
        database: 2.35,
        devops: 3.06,
        ai_ml: 2.39,
        testing: 1.6099999999999999,
        issue_tracking: 2.85
    },
    estimateNormalTime: 5.9,
    kpiInTask: kpiC,
    taskKPIWeight: 0.006136,
    status: 'proposal'
  },

  {
    id: 14730091,
    name: "[#767] : Disable durable subs (configurable upstream?).2",
    code: "ENTMQMAAS-355.2",
    preceedingTasks: ["ENTMQMAAS-367.8", "ENTMQMAAS-345.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.94,
        frontend: 2.44,
        database: 2.35,
        devops: 3.06,
        ai_ml: 2.39,
        testing: 1.6099999999999999,
        issue_tracking: 2.85
    },
    estimateNormalTime: 0.29,
    kpiInTask: kpiA,
    taskKPIWeight: 0.011481,
    status: 'proposal'
  },

  {
    id: 14730085,
    name: "[#761] : Console to support status for addresses.2",
    code: "ENTMQMAAS-349.2",
    preceedingTasks: ["ENTMQMAAS-334.7", "ENTMQMAAS-355.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.94,
        frontend: 2.44,
        database: 2.35,
        devops: 3.06,
        ai_ml: 2.39,
        testing: 1.6099999999999999,
        issue_tracking: 2.85
    },
    estimateNormalTime: 0.29,
    kpiInTask: kpiB,
    taskKPIWeight: 0.008048,
    status: 'proposal'
  },

  {
    id: 14730081,
    name: "[#757] : Oauth for console.2",
    code: "ENTMQMAAS-345.2",
    preceedingTasks: ["ENTMQMAAS-349.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.94,
        frontend: 2.44,
        database: 2.35,
        devops: 3.06,
        ai_ml: 2.39,
        testing: 1.6099999999999999,
        issue_tracking: 2.85
    },
    estimateNormalTime: 0.29,
    kpiInTask: kpiC,
    taskKPIWeight: 0.006554,
    status: 'proposal'
  },

  {
    id: 13735522,
    name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.1",
    code: "ENTMQMAAS-387.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 1.54,
    kpiInTask: kpiC,
    taskKPIWeight: 0.003408,
    status: 'proposal'
  },

  {
    id: 13735531,
    name: "[#921] : system-tests: new Plan test: testPlansAvailableViaConsole.1",
    code: "ENTMQMAAS-390.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 1.54,
    kpiInTask: kpiC,
    taskKPIWeight: 0.020592,
    status: 'proposal'
  },

  {
    id: 21730143,
    name: "[#772] : WebConsole Tests for addresses status.9",
    code: "ENTMQMAAS-360.9",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.81,
    kpiInTask: kpiB,
    taskKPIWeight: 0.002377,
    status: 'proposal'
  },

  {
    id: 21730167,
    name: "Setup Jenkins job with productized images.9",
    code: "ENTMQMAAS-367.9",
    preceedingTasks: ["ENTMQMAAS-360.9"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.81,
    kpiInTask: kpiA,
    taskKPIWeight: 0.017108,
    status: 'proposal'
  },

  {
    id: 13735527,
    name: "[#919] : system-tests: new scale test: testPodsLimitation.1",
    code: "ENTMQMAAS-388.1",
    preceedingTasks: ["ENTMQMAAS-387.1", "ENTMQMAAS-367.9"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.81,
    kpiInTask: kpiA,
    taskKPIWeight: 0.002784,
    status: 'proposal'
  },

  {
    id: 13735530,
    name: "[#920] : system-tests: new scale test: testCreditLimitation.1",
    code: "ENTMQMAAS-389.1",
    preceedingTasks: ["ENTMQMAAS-388.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.81,
    kpiInTask: kpiA,
    taskKPIWeight: 0.013466,
    status: 'proposal'
  },

  {
    id: 19730070,
    name: "[#746] : Add support for checking requests against limits and setting status on address.7",
    code: "ENTMQMAAS-334.7",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.62,
    kpiInTask: kpiB,
    taskKPIWeight: 0.002796,
    status: 'proposal'
  },

  {
    id: 19730072,
    name: "[#748] : Persist decision about where queues/topics are placed.7",
    code: "ENTMQMAAS-336.7",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.62,
    kpiInTask: kpiC,
    taskKPIWeight: 0.018118,
    status: 'proposal'
  },

  {
    id: 19730076,
    name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.7",
    code: "ENTMQMAAS-340.7",
    preceedingTasks: ["ENTMQMAAS-336.7"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.62,
    kpiInTask: kpiB,
    taskKPIWeight: 0.020496,
    status: 'proposal'
  },

  {
    id: 19730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.7",
    code: "ENTMQMAAS-347.7",
    preceedingTasks: ["ENTMQMAAS-345.2", "ENTMQMAAS-340.7"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.62,
    kpiInTask: kpiC,
    taskKPIWeight: 0.02125,
    status: 'proposal'
  },

  {
    id: 19730092,
    name: "[#768] : Disable MQTT (configurable upstream?).7",
    code: "ENTMQMAAS-356.7",
    preceedingTasks: ["ENTMQMAAS-347.7"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.62,
    kpiInTask: kpiB,
    taskKPIWeight: 0.005746,
    status: 'proposal'
  },

  {
    id: 16733952,
    name: "Investigate options for enforcing backlog limits on broker/router.4",
    code: "ENTMQMAAS-382.4",
    preceedingTasks: ["ENTMQMAAS-356.7"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.62,
    kpiInTask: kpiA,
    taskKPIWeight: 0.000113,
    status: 'proposal'
  },

  {
    id: 15734956,
    name: "[#894] : Console does not sanitize address config names.3",
    code: "ENTMQMAAS-385.3",
    preceedingTasks: ["ENTMQMAAS-382.4"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.62,
    kpiInTask: kpiA,
    taskKPIWeight: 0.012393,
    status: 'proposal'
  },

  {
    id: 14735371,
    name: "[#910] : address-controller can't replace addresses created via console.2",
    code: "ENTMQMAAS-386.2",
    preceedingTasks: ["ENTMQMAAS-385.3"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.62,
    kpiInTask: kpiA,
    taskKPIWeight: 0.022269,
    status: 'proposal'
  },

  {
    id: 20730070,
    name: "[#746] : Add support for checking requests against limits and setting status on address.8",
    code: "ENTMQMAAS-334.8",
    preceedingTasks: ["ENTMQMAAS-390.1", "ENTMQMAAS-389.1", "ENTMQMAAS-386.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.18,
    kpiInTask: kpiB,
    taskKPIWeight: 0.001873,
    status: 'proposal'
  },

  {
    id: 20730072,
    name: "[#748] : Persist decision about where queues/topics are placed.8",
    code: "ENTMQMAAS-336.8",
    preceedingTasks: ["ENTMQMAAS-334.8"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.18,
    kpiInTask: kpiC,
    taskKPIWeight: 0.002256,
    status: 'proposal'
  },

  {
    id: 20730076,
    name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.8",
    code: "ENTMQMAAS-340.8",
    preceedingTasks: ["ENTMQMAAS-336.8"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.18,
    kpiInTask: kpiB,
    taskKPIWeight: 0.01982,
    status: 'proposal'
  },

  {
    id: 20730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.8",
    code: "ENTMQMAAS-347.8",
    preceedingTasks: ["ENTMQMAAS-340.8"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.18,
    kpiInTask: kpiC,
    taskKPIWeight: 0.013919,
    status: 'proposal'
  },

  {
    id: 20730092,
    name: "[#768] : Disable MQTT (configurable upstream?).8",
    code: "ENTMQMAAS-356.8",
    preceedingTasks: ["ENTMQMAAS-347.8"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.18,
    kpiInTask: kpiB,
    taskKPIWeight: 0.014588,
    status: 'proposal'
  },

  {
    id: 17733952,
    name: "Investigate options for enforcing backlog limits on broker/router.5",
    code: "ENTMQMAAS-382.5",
    preceedingTasks: ["ENTMQMAAS-356.8"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.18,
    kpiInTask: kpiB,
    taskKPIWeight: 0.008567,
    status: 'proposal'
  },

  {
    id: 14735522,
    name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.2",
    code: "ENTMQMAAS-387.2",
    preceedingTasks: ["ENTMQMAAS-353.3"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 1.71,
    kpiInTask: kpiC,
    taskKPIWeight: 0.004426,
    status: 'proposal'
  },

  {
    id: 14735531,
    name: "[#921] : system-tests: new Plan test: testPlansAvailableViaConsole.2",
    code: "ENTMQMAAS-390.2",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 1.71,
    kpiInTask: kpiB,
    taskKPIWeight: 0.022058,
    status: 'proposal'
  },

  {
    id: 13736171,
    name: "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space.1",
    code: "ENTMQMAAS-391.1",
    preceedingTasks: ["ENTMQMAAS-390.2"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 1.71,
    kpiInTask: kpiC,
    taskKPIWeight: 0.019609,
    status: 'proposal'
  },

  {
    id: 22730167,
    name: "Setup Jenkins job with productized images.10",
    code: "ENTMQMAAS-367.10",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.35,
    kpiInTask: kpiB,
    taskKPIWeight: 0.018468,
    status: 'proposal'
  },

  {
    id: 14735527,
    name: "[#919] : system-tests: new scale test: testPodsLimitation.2",
    code: "ENTMQMAAS-388.2",
    preceedingTasks: ["ENTMQMAAS-355.3", "ENTMQMAAS-367.10"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.35,
    kpiInTask: kpiA,
    taskKPIWeight: 0.011945,
    status: 'proposal'
  },

  {
    id: 14735530,
    name: "[#920] : system-tests: new scale test: testCreditLimitation.2",
    code: "ENTMQMAAS-389.2",
    preceedingTasks: ["ENTMQMAAS-388.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.35,
    kpiInTask: kpiA,
    taskKPIWeight: 0.015564,
    status: 'proposal'
  },

  {
    id: 15730089,
    name: "[#765] : Changes to service broker (service type is just address space, different plans are supported. See also point above about how to tie plans offered to plans specified) .3",
    code: "ENTMQMAAS-353.3",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.88,
        frontend: 2.13,
        database: 2.17,
        devops: 2.94,
        ai_ml: 2.09,
        testing: 1.46,
        issue_tracking: 2.6999999999999997
    },
    estimateNormalTime: 5.54,
    kpiInTask: kpiA,
    taskKPIWeight: 0.020341,
    status: 'proposal'
  },

  {
    id: 15730082,
    name: "[#758] : Keycloak plugin OAUTH2 support.3",
    code: "ENTMQMAAS-346.3",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.88,
        frontend: 2.13,
        database: 2.17,
        devops: 2.94,
        ai_ml: 2.09,
        testing: 1.46,
        issue_tracking: 2.6999999999999997
    },
    estimateNormalTime: 5.54,
    kpiInTask: kpiB,
    taskKPIWeight: 0.020207,
    status: 'proposal'
  },

  {
    id: 21730070,
    name: "[#746] : Add support for checking requests against limits and setting status on address.9",
    code: "ENTMQMAAS-334.9",
    preceedingTasks: ["ENTMQMAAS-382.5"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 1.14,
    kpiInTask: kpiC,
    taskKPIWeight: 0.017383,
    status: 'proposal'
  },

  {
    id: 21730072,
    name: "[#748] : Persist decision about where queues/topics are placed.9",
    code: "ENTMQMAAS-336.9",
    preceedingTasks: ["ENTMQMAAS-334.9"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 1.14,
    kpiInTask: kpiC,
    taskKPIWeight: 0.012731,
    status: 'proposal'
  },

  {
    id: 21730076,
    name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.9",
    code: "ENTMQMAAS-340.9",
    preceedingTasks: ["ENTMQMAAS-387.2", "ENTMQMAAS-336.9"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 1.14,
    kpiInTask: kpiB,
    taskKPIWeight: 0.000851,
    status: 'proposal'
  },

  {
    id: 21730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.9",
    code: "ENTMQMAAS-347.9",
    preceedingTasks: ["ENTMQMAAS-340.9"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 1.14,
    kpiInTask: kpiC,
    taskKPIWeight: 0.022219,
    status: 'proposal'
  },

  {
    id: 18733952,
    name: "Investigate options for enforcing backlog limits on broker/router.6",
    code: "ENTMQMAAS-382.6",
    preceedingTasks: ["ENTMQMAAS-347.9"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 1.14,
    kpiInTask: kpiA,
    taskKPIWeight: 0.017676,
    status: 'proposal'
  },

  {
    id: 22730076,
    name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.10",
    code: "ENTMQMAAS-340.10",
    preceedingTasks: ["ENTMQMAAS-391.1", "ENTMQMAAS-389.2", "ENTMQMAAS-346.3", "ENTMQMAAS-382.6"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.03,
    kpiInTask: kpiA,
    taskKPIWeight: 0.00411,
    status: 'proposal'
  },

  {
    id: 22730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.10",
    code: "ENTMQMAAS-347.10",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.03,
    kpiInTask: kpiC,
    taskKPIWeight: 0.001718,
    status: 'proposal'
  },

  {
    id: 19733952,
    name: "Investigate options for enforcing backlog limits on broker/router.7",
    code: "ENTMQMAAS-382.7",
    preceedingTasks: ["ENTMQMAAS-347.10"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.03,
    kpiInTask: kpiB,
    taskKPIWeight: 0.026854,
    status: 'proposal'
  },

  {
    id: 23730167,
    name: "Setup Jenkins job with productized images.11",
    code: "ENTMQMAAS-367.11",
    preceedingTasks: ["ENTMQMAAS-340.10", "ENTMQMAAS-387.3"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.02,
    kpiInTask: kpiB,
    taskKPIWeight: 0.012787,
    status: 'proposal'
  },

  {
    id: 15735527,
    name: "[#919] : system-tests: new scale test: testPodsLimitation.3",
    code: "ENTMQMAAS-388.3",
    preceedingTasks: ["ENTMQMAAS-367.11"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.02,
    kpiInTask: kpiA,
    taskKPIWeight: 0.024766,
    status: 'proposal'
  },

  {
    id: 13737362,
    name: "[#991] : system-tests: new scale test: testCreditLimitation ({sharded,pooled}{queues,topics}).1",
    code: "ENTMQMAAS-393.1",
    preceedingTasks: ["ENTMQMAAS-388.3"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.02,
    kpiInTask: kpiA,
    taskKPIWeight: 0.006504,
    status: 'proposal'
  },

  {
    id: 15735522,
    name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.3",
    code: "ENTMQMAAS-387.3",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.07,
    kpiInTask: kpiA,
    taskKPIWeight: 0.013435,
    status: 'proposal'
  },

  {
    id: 14736171,
    name: "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space.2",
    code: "ENTMQMAAS-391.2",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.07,
    kpiInTask: kpiC,
    taskKPIWeight: 0.022806,
    status: 'proposal'
  },

  {
    id: 15730091,
    name: "[#767] : Disable durable subs (configurable upstream?).3",
    code: "ENTMQMAAS-355.3",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.94,
        frontend: 2.44,
        database: 2.35,
        devops: 3.06,
        ai_ml: 2.39,
        testing: 1.6099999999999999,
        issue_tracking: 2.85
    },
    estimateNormalTime: 3.55,
    kpiInTask: kpiB,
    taskKPIWeight: 0.00102,
    status: 'proposal'
  },

  {
    id: 15730081,
    name: "[#757] : Oauth for console.3",
    code: "ENTMQMAAS-345.3",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.94,
        frontend: 2.44,
        database: 2.35,
        devops: 3.06,
        ai_ml: 2.39,
        testing: 1.6099999999999999,
        issue_tracking: 2.85
    },
    estimateNormalTime: 3.55,
    kpiInTask: kpiC,
    taskKPIWeight: 0.011168,
    status: 'proposal'
  },

  {
    id: 23730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.11",
    code: "ENTMQMAAS-347.11",
    preceedingTasks: ["ENTMQMAAS-382.7"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.05,
    kpiInTask: kpiA,
    taskKPIWeight: 0.018138,
    status: 'proposal'
  },

  {
    id: 20733952,
    name: "Investigate options for enforcing backlog limits on broker/router.8",
    code: "ENTMQMAAS-382.8",
    preceedingTasks: ["ENTMQMAAS-393.1", "ENTMQMAAS-391.2", "ENTMQMAAS-347.11"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.05,
    kpiInTask: kpiB,
    taskKPIWeight: 0.023456,
    status: 'proposal'
  },

  {
    id: 14727841,
    name: "Document Creating and deleting addresses.2",
    code: "ENTMQMAAS-328.2",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 3.06,
        frontend: 2.48,
        database: 2.82,
        devops: 3.08,
        ai_ml: 2.62,
        testing: 1.71,
        issue_tracking: 2.83
    },
    estimateNormalTime: 12.72,
    kpiInTask: kpiB,
    taskKPIWeight: 0.02107,
    status: 'proposal'
  },

  {
    id: 13733175,
    name: "Add Documentation Conventions to Guide.1",
    code: "ENTMQMAAS-376.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 3.06,
        frontend: 2.48,
        database: 2.82,
        devops: 3.08,
        ai_ml: 2.62,
        testing: 1.71,
        issue_tracking: 2.83
    },
    estimateNormalTime: 12.72,
    kpiInTask: kpiA,
    taskKPIWeight: 0.003284,
    status: 'proposal'
  },

  {
    id: 24730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.12",
    code: "ENTMQMAAS-347.12",
    preceedingTasks: ["ENTMQMAAS-345.3", "ENTMQMAAS-382.8"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.59,
    kpiInTask: kpiA,
    taskKPIWeight: 0.005069,
    status: 'proposal'
  },

  {
    id: 21733952,
    name: "Investigate options for enforcing backlog limits on broker/router.9",
    code: "ENTMQMAAS-382.9",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.59,
    kpiInTask: kpiB,
    taskKPIWeight: 0.022521,
    status: 'proposal'
  },

  {
    id: 24730167,
    name: "Setup Jenkins job with productized images.12",
    code: "ENTMQMAAS-367.12",
    preceedingTasks: ["ENTMQMAAS-376.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.25,
    kpiInTask: kpiA,
    taskKPIWeight: 0.006592,
    status: 'proposal'
  },

  {
    id: 16735527,
    name: "[#919] : system-tests: new scale test: testPodsLimitation.4",
    code: "ENTMQMAAS-388.4",
    preceedingTasks: ["ENTMQMAAS-347.12", "ENTMQMAAS-367.12"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.25,
    kpiInTask: kpiC,
    taskKPIWeight: 0.011649,
    status: 'proposal'
  },

  {
    id: 14737362,
    name: "[#991] : system-tests: new scale test: testCreditLimitation ({sharded,pooled}{queues,topics}).2",
    code: "ENTMQMAAS-393.2",
    preceedingTasks: ["ENTMQMAAS-388.4"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.25,
    kpiInTask: kpiA,
    taskKPIWeight: 0.000252,
    status: 'proposal'
  },

  {
    id: 13737403,
    name: "[#996] : system-tests: look at longtime running tests and fix them.1",
    code: "ENTMQMAAS-395.1",
    preceedingTasks: ["ENTMQMAAS-387.4", "ENTMQMAAS-382.9", "ENTMQMAAS-393.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.25,
    kpiInTask: kpiA,
    taskKPIWeight: 0.022771,
    status: 'proposal'
  },

  {
    id: 13737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).1",
    code: "ENTMQMAAS-397.1",
    preceedingTasks: ["ENTMQMAAS-395.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.25,
    kpiInTask: kpiA,
    taskKPIWeight: 0.019857,
    status: 'proposal'
  },

  {
    id: 25730167,
    name: "Setup Jenkins job with productized images.13",
    code: "ENTMQMAAS-367.13",
    preceedingTasks: ["ENTMQMAAS-397.1", "ENTMQMAAS-328.3"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.1,
    kpiInTask: kpiA,
    taskKPIWeight: 0.011728,
    status: 'proposal'
  },

  {
    id: 17735527,
    name: "[#919] : system-tests: new scale test: testPodsLimitation.5",
    code: "ENTMQMAAS-388.5",
    preceedingTasks: ["ENTMQMAAS-396.1", "ENTMQMAAS-367.13"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.1,
    kpiInTask: kpiB,
    taskKPIWeight: 0.006809,
    status: 'proposal'
  },

  {
    id: 14737403,
    name: "[#996] : system-tests: look at longtime running tests and fix them.2",
    code: "ENTMQMAAS-395.2",
    preceedingTasks: ["ENTMQMAAS-388.5"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.1,
    kpiInTask: kpiA,
    taskKPIWeight: 0.007938,
    status: 'proposal'
  },

  {
    id: 14737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).2",
    code: "ENTMQMAAS-397.2",
    preceedingTasks: ["ENTMQMAAS-395.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.1,
    kpiInTask: kpiB,
    taskKPIWeight: 0.016878,
    status: 'proposal'
  },

  {
    id: 16735522,
    name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.4",
    code: "ENTMQMAAS-387.4",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.58,
    kpiInTask: kpiA,
    taskKPIWeight: 0.024665,
    status: 'proposal'
  },

  {
    id: 15736171,
    name: "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space.3",
    code: "ENTMQMAAS-391.3",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.58,
    kpiInTask: kpiC,
    taskKPIWeight: 0.009544,
    status: 'proposal'
  },

  {
    id: 13737413,
    name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.1",
    code: "ENTMQMAAS-396.1",
    preceedingTasks: ["ENTMQMAAS-391.3"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.58,
    kpiInTask: kpiB,
    taskKPIWeight: 0.010144,
    status: 'proposal'
  },

  {
    id: 13737429,
    name: "[#998] : system-tests: review list of February disabled tests.1",
    code: "ENTMQMAAS-399.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.58,
    kpiInTask: kpiB,
    taskKPIWeight: 0.029583,
    status: 'proposal'
  },

  {
    id: 26730167,
    name: "Setup Jenkins job with productized images.14",
    code: "ENTMQMAAS-367.14",
    preceedingTasks: ["ENTMQMAAS-397.2", "ENTMQMAAS-355.4"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.01,
    kpiInTask: kpiA,
    taskKPIWeight: 0.025125,
    status: 'proposal'
  },

  {
    id: 15737403,
    name: "[#996] : system-tests: look at longtime running tests and fix them.3",
    code: "ENTMQMAAS-395.3",
    preceedingTasks: ["ENTMQMAAS-367.14"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.01,
    kpiInTask: kpiB,
    taskKPIWeight: 0.02847,
    status: 'proposal'
  },

  {
    id: 15737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).3",
    code: "ENTMQMAAS-397.3",
    preceedingTasks: ["ENTMQMAAS-395.3"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.01,
    kpiInTask: kpiC,
    taskKPIWeight: 0.024585,
    status: 'proposal'
  },

  {
    id: 17735522,
    name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.5",
    code: "ENTMQMAAS-387.5",
    preceedingTasks: ["ENTMQMAAS-399.1", "ENTMQMAAS-397.3"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.02,
    kpiInTask: kpiA,
    taskKPIWeight: 0.006161,
    status: 'proposal'
  },

  {
    id: 16736171,
    name: "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space.4",
    code: "ENTMQMAAS-391.4",
    preceedingTasks: ["ENTMQMAAS-387.5"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.02,
    kpiInTask: kpiB,
    taskKPIWeight: 0.023073,
    status: 'proposal'
  },

  {
    id: 14737413,
    name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.2",
    code: "ENTMQMAAS-396.2",
    preceedingTasks: ["ENTMQMAAS-391.4"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.02,
    kpiInTask: kpiA,
    taskKPIWeight: 0.005493,
    status: 'proposal'
  },

  {
    id: 14737429,
    name: "[#998] : system-tests: review list of February disabled tests.2",
    code: "ENTMQMAAS-399.2",
    preceedingTasks: ["ENTMQMAAS-396.2"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.02,
    kpiInTask: kpiC,
    taskKPIWeight: 0.004985,
    status: 'proposal'
  },

  {
    id: 27730167,
    name: "Setup Jenkins job with productized images.15",
    code: "ENTMQMAAS-367.15",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.2,
    kpiInTask: kpiA,
    taskKPIWeight: 0.001759,
    status: 'proposal'
  },

  {
    id: 16737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).4",
    code: "ENTMQMAAS-397.4",
    preceedingTasks: ["ENTMQMAAS-347.13", "ENTMQMAAS-367.15"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.2,
    kpiInTask: kpiB,
    taskKPIWeight: 0.014898,
    status: 'proposal'
  },

  {
    id: 18735522,
    name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.6",
    code: "ENTMQMAAS-387.6",
    preceedingTasks: ["ENTMQMAAS-399.2"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.19,
    kpiInTask: kpiA,
    taskKPIWeight: 0.016453,
    status: 'proposal'
  },

  {
    id: 17736171,
    name: "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space.5",
    code: "ENTMQMAAS-391.5",
    preceedingTasks: ["ENTMQMAAS-387.6"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.19,
    kpiInTask: kpiA,
    taskKPIWeight: 0.006324,
    status: 'proposal'
  },

  {
    id: 15737413,
    name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.3",
    code: "ENTMQMAAS-396.3",
    preceedingTasks: ["ENTMQMAAS-391.5"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.19,
    kpiInTask: kpiA,
    taskKPIWeight: 0.022726,
    status: 'proposal'
  },

  {
    id: 19735522,
    name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.7",
    code: "ENTMQMAAS-387.7",
    preceedingTasks: ["ENTMQMAAS-376.2", "ENTMQMAAS-397.4", "ENTMQMAAS-396.3", "ENTMQMAAS-345.4"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.28,
    kpiInTask: kpiC,
    taskKPIWeight: 0.0189,
    status: 'proposal'
  },

  {
    id: 18736171,
    name: "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space.6",
    code: "ENTMQMAAS-391.6",
    preceedingTasks: ["ENTMQMAAS-387.7"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.28,
    kpiInTask: kpiA,
    taskKPIWeight: 0.006056,
    status: 'proposal'
  },

  {
    id: 16737413,
    name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.4",
    code: "ENTMQMAAS-396.4",
    preceedingTasks: ["ENTMQMAAS-391.6"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.28,
    kpiInTask: kpiB,
    taskKPIWeight: 0.019458,
    status: 'proposal'
  },

  {
    id: 16730091,
    name: "[#767] : Disable durable subs (configurable upstream?).4",
    code: "ENTMQMAAS-355.4",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.94,
        frontend: 2.44,
        database: 2.35,
        devops: 3.06,
        ai_ml: 2.39,
        testing: 1.6099999999999999,
        issue_tracking: 2.85
    },
    estimateNormalTime: 1.36,
    kpiInTask: kpiA,
    taskKPIWeight: 0.002572,
    status: 'proposal'
  },

  {
    id: 16730081,
    name: "[#757] : Oauth for console.4",
    code: "ENTMQMAAS-345.4",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.94,
        frontend: 2.44,
        database: 2.35,
        devops: 3.06,
        ai_ml: 2.39,
        testing: 1.6099999999999999,
        issue_tracking: 2.85
    },
    estimateNormalTime: 1.36,
    kpiInTask: kpiB,
    taskKPIWeight: 0.000085,
    status: 'proposal'
  },

  {
    id: 15727841,
    name: "Document Creating and deleting addresses.3",
    code: "ENTMQMAAS-328.3",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 3.06,
        frontend: 2.48,
        database: 2.82,
        devops: 3.08,
        ai_ml: 2.62,
        testing: 1.71,
        issue_tracking: 2.83
    },
    estimateNormalTime: 1.75,
    kpiInTask: kpiB,
    taskKPIWeight: 0.029125,
    status: 'proposal'
  },

  {
    id: 14733175,
    name: "Add Documentation Conventions to Guide.2",
    code: "ENTMQMAAS-376.2",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 3.06,
        frontend: 2.48,
        database: 2.82,
        devops: 3.08,
        ai_ml: 2.62,
        testing: 1.71,
        issue_tracking: 2.83
    },
    estimateNormalTime: 1.75,
    kpiInTask: kpiA,
    taskKPIWeight: 0.02188,
    status: 'proposal'
  },

  {
    id: 25730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.13",
    code: "ENTMQMAAS-347.13",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 1.61,
    kpiInTask: kpiC,
    taskKPIWeight: 0.00705,
    status: 'proposal'
  },

  {
    id: 22733952,
    name: "Investigate options for enforcing backlog limits on broker/router.10",
    code: "ENTMQMAAS-382.10",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 1.61,
    kpiInTask: kpiC,
    taskKPIWeight: 0.02104,
    status: 'proposal'
  },

  {
    id: 26730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.14",
    code: "ENTMQMAAS-347.14",
    preceedingTasks: ["ENTMQMAAS-396.5", "ENTMQMAAS-328.4"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.12,
    kpiInTask: kpiA,
    taskKPIWeight: 0.006159,
    status: 'proposal'
  },

  {
    id: 23733952,
    name: "Investigate options for enforcing backlog limits on broker/router.11",
    code: "ENTMQMAAS-382.11",
    preceedingTasks: ["ENTMQMAAS-347.14"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.12,
    kpiInTask: kpiB,
    taskKPIWeight: 0.007863,
    status: 'proposal'
  },

  {
    id: 28730167,
    name: "Setup Jenkins job with productized images.16",
    code: "ENTMQMAAS-367.16",
    preceedingTasks: ["ENTMQMAAS-396.4", "ENTMQMAAS-382.10"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.75,
    kpiInTask: kpiA,
    taskKPIWeight: 0.003986,
    status: 'proposal'
  },

  {
    id: 17737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).5",
    code: "ENTMQMAAS-397.5",
    preceedingTasks: ["ENTMQMAAS-367.16"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.75,
    kpiInTask: kpiB,
    taskKPIWeight: 0.021509,
    status: 'proposal'
  },

  {
    id: 17730091,
    name: "[#767] : Disable durable subs (configurable upstream?).5",
    code: "ENTMQMAAS-355.5",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.94,
        frontend: 2.44,
        database: 2.35,
        devops: 3.06,
        ai_ml: 2.39,
        testing: 1.6099999999999999,
        issue_tracking: 2.85
    },
    estimateNormalTime: 1.69,
    kpiInTask: kpiA,
    taskKPIWeight: 0.022292,
    status: 'proposal'
  },

  {
    id: 17730081,
    name: "[#757] : Oauth for console.5",
    code: "ENTMQMAAS-345.5",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.94,
        frontend: 2.44,
        database: 2.35,
        devops: 3.06,
        ai_ml: 2.39,
        testing: 1.6099999999999999,
        issue_tracking: 2.85
    },
    estimateNormalTime: 1.69,
    kpiInTask: kpiC,
    taskKPIWeight: 0.006223,
    status: 'proposal'
  },

  {
    id: 20735522,
    name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.8",
    code: "ENTMQMAAS-387.8",
    preceedingTasks: ["ENTMQMAAS-397.5"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.77,
    kpiInTask: kpiB,
    taskKPIWeight: 0.00895,
    status: 'proposal'
  },

  {
    id: 17737413,
    name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.5",
    code: "ENTMQMAAS-396.5",
    preceedingTasks: ["ENTMQMAAS-387.8"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.77,
    kpiInTask: kpiB,
    taskKPIWeight: 0.002779,
    status: 'proposal'
  },

  {
    id: 29730167,
    name: "Setup Jenkins job with productized images.17",
    code: "ENTMQMAAS-367.17",
    preceedingTasks: ["ENTMQMAAS-347.15", "ENTMQMAAS-376.3"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.65,
    kpiInTask: kpiC,
    taskKPIWeight: 0.020803,
    status: 'proposal'
  },

  {
    id: 18737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).6",
    code: "ENTMQMAAS-397.6",
    preceedingTasks: ["ENTMQMAAS-345.5", "ENTMQMAAS-367.17"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.65,
    kpiInTask: kpiB,
    taskKPIWeight: 0.001806,
    status: 'proposal'
  },

  {
    id: 21735522,
    name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.9",
    code: "ENTMQMAAS-387.9",
    preceedingTasks: ["ENTMQMAAS-397.6"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.02,
    kpiInTask: kpiB,
    taskKPIWeight: 0.019284,
    status: 'proposal'
  },

  {
    id: 18737413,
    name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.6",
    code: "ENTMQMAAS-396.6",
    preceedingTasks: ["ENTMQMAAS-387.9"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.02,
    kpiInTask: kpiA,
    taskKPIWeight: 0.012076,
    status: 'proposal'
  },

  {
    id: 16727841,
    name: "Document Creating and deleting addresses.4",
    code: "ENTMQMAAS-328.4",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 3.06,
        frontend: 2.48,
        database: 2.82,
        devops: 3.08,
        ai_ml: 2.62,
        testing: 1.71,
        issue_tracking: 2.83
    },
    estimateNormalTime: 2.29,
    kpiInTask: kpiA,
    taskKPIWeight: 0.010164,
    status: 'proposal'
  },

  {
    id: 15733175,
    name: "Add Documentation Conventions to Guide.3",
    code: "ENTMQMAAS-376.3",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 3.06,
        frontend: 2.48,
        database: 2.82,
        devops: 3.08,
        ai_ml: 2.62,
        testing: 1.71,
        issue_tracking: 2.83
    },
    estimateNormalTime: 2.29,
    kpiInTask: kpiC,
    taskKPIWeight: 0.019135,
    status: 'proposal'
  },

  {
    id: 27730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.15",
    code: "ENTMQMAAS-347.15",
    preceedingTasks: ["ENTMQMAAS-382.11", "ENTMQMAAS-353.4", "ENTMQMAAS-355.5"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.84,
    kpiInTask: kpiC,
    taskKPIWeight: 0.014331,
    status: 'proposal'
  },

  {
    id: 28730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.16",
    code: "ENTMQMAAS-347.16",
    preceedingTasks: ["ENTMQMAAS-396.7"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.17,
    kpiInTask: kpiA,
    taskKPIWeight: 0.010045,
    status: 'proposal'
  },

  {
    id: 30730167,
    name: "Setup Jenkins job with productized images.18",
    code: "ENTMQMAAS-367.18",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.46,
    kpiInTask: kpiB,
    taskKPIWeight: 0.000982,
    status: 'proposal'
  },

  {
    id: 19737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).7",
    code: "ENTMQMAAS-397.7",
    preceedingTasks: ["ENTMQMAAS-347.16", "ENTMQMAAS-367.18"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.46,
    kpiInTask: kpiA,
    taskKPIWeight: 0.009723,
    status: 'proposal'
  },

  {
    id: 19737413,
    name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.7",
    code: "ENTMQMAAS-396.7",
    preceedingTasks: ["ENTMQMAAS-396.6"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.7199999999999998,
        frontend: 1.9499999999999997,
        database: 1.89,
        devops: 2.9,
        ai_ml: 2.11,
        testing: 2.79,
        issue_tracking: 2.92
    },
    estimateNormalTime: 0.39,
    kpiInTask: kpiA,
    taskKPIWeight: 0.018467,
    status: 'proposal'
  },

  {
    id: 20737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).8",
    code: "ENTMQMAAS-397.8",
    preceedingTasks: ["ENTMQMAAS-347.17"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.77,
    kpiInTask: kpiC,
    taskKPIWeight: 0.0164,
    status: 'proposal'
  },

  {
    id: 16730089,
    name: "[#765] : Changes to service broker (service type is just address space, different plans are supported. See also point above about how to tie plans offered to plans specified) .4",
    code: "ENTMQMAAS-353.4",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.88,
        frontend: 2.13,
        database: 2.17,
        devops: 2.94,
        ai_ml: 2.09,
        testing: 1.46,
        issue_tracking: 2.6999999999999997
    },
    estimateNormalTime: 10.37,
    kpiInTask: kpiC,
    taskKPIWeight: 0.016966,
    status: 'proposal'
  },

  {
    id: 16730082,
    name: "[#758] : Keycloak plugin OAUTH2 support.4",
    code: "ENTMQMAAS-346.4",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.88,
        frontend: 2.13,
        database: 2.17,
        devops: 2.94,
        ai_ml: 2.09,
        testing: 1.46,
        issue_tracking: 2.6999999999999997
    },
    estimateNormalTime: 10.37,
    kpiInTask: kpiB,
    taskKPIWeight: 0.003029,
    status: 'proposal'
  },

  {
    id: 21737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).9",
    code: "ENTMQMAAS-397.9",
    preceedingTasks: ["ENTMQMAAS-397.8", "ENTMQMAAS-346.4"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.8,
    kpiInTask: kpiA,
    taskKPIWeight: 0.006703,
    status: 'proposal'
  },

  {
    id: 18730081,
    name: "[#757] : Oauth for console.6",
    code: "ENTMQMAAS-345.6",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.94,
        frontend: 2.44,
        database: 2.35,
        devops: 3.06,
        ai_ml: 2.39,
        testing: 1.6099999999999999,
        issue_tracking: 2.85
    },
    estimateNormalTime: 4.86,
    kpiInTask: kpiA,
    taskKPIWeight: 0.022914,
    status: 'proposal'
  },

  {
    id: 29730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.17",
    code: "ENTMQMAAS-347.17",
    preceedingTasks: ["ENTMQMAAS-397.7"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 2.12,
    kpiInTask: kpiA,
    taskKPIWeight: 0.012148,
    status: 'proposal'
  },

  {
    id: 22737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).10",
    code: "ENTMQMAAS-397.10",
    preceedingTasks: ["ENTMQMAAS-397.9", "ENTMQMAAS-345.6"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.1,
    kpiInTask: kpiA,
    taskKPIWeight: 0.019498,
    status: 'proposal'
  },

  {
    id: 23737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).11",
    code: "ENTMQMAAS-397.11",
    preceedingTasks: ["ENTMQMAAS-347.18"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'issue_tracking'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.78,
        frontend: 2.17,
        database: 2.19,
        devops: 2.88,
        ai_ml: 2.39,
        testing: 2.75,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.85,
    kpiInTask: kpiB,
    taskKPIWeight: 0.016654,
    status: 'proposal'
  },

  {
    id: 30730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.18",
    code: "ENTMQMAAS-347.18",
    preceedingTasks: ["ENTMQMAAS-397.10"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 3.16,
    kpiInTask: kpiA,
    taskKPIWeight: 0.004766,
    status: 'proposal'
  },

  {
    id: 17730089,
    name: "[#765] : Changes to service broker (service type is just address space, different plans are supported. See also point above about how to tie plans offered to plans specified) .5",
    code: "ENTMQMAAS-353.5",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.88,
        frontend: 2.13,
        database: 2.17,
        devops: 2.94,
        ai_ml: 2.09,
        testing: 1.46,
        issue_tracking: 2.6999999999999997
    },
    estimateNormalTime: 44.29,
    kpiInTask: kpiB,
    taskKPIWeight: 0.000778,
    status: 'proposal'
  },

  {
    id: 31730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.19",
    code: "ENTMQMAAS-347.19",
    preceedingTasks: ["ENTMQMAAS-397.11", "ENTMQMAAS-328.5"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.04,
        database: 2.21,
        devops: 2.9299999999999997,
        ai_ml: 2.25,
        testing: 1.63,
        issue_tracking: 2.71
    },
    estimateNormalTime: 0.99,
    kpiInTask: kpiB,
    taskKPIWeight: 0.014704,
    status: 'proposal'
  },

  {
    id: 17727841,
    name: "Document Creating and deleting addresses.5",
    code: "ENTMQMAAS-328.5",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 3.06,
        frontend: 2.48,
        database: 2.82,
        devops: 3.08,
        ai_ml: 2.62,
        testing: 1.71,
        issue_tracking: 2.83
    },
    estimateNormalTime: 26.68,
    kpiInTask: kpiB,
    taskKPIWeight: 0.00492,
    status: 'proposal'
  },

  {
    id: 16733175,
    name: "Add Documentation Conventions to Guide.4",
    code: "ENTMQMAAS-376.4",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 3.06,
        frontend: 2.48,
        database: 2.82,
        devops: 3.08,
        ai_ml: 2.62,
        testing: 1.71,
        issue_tracking: 2.83
    },
    estimateNormalTime: 26.68,
    kpiInTask: kpiC,
    taskKPIWeight: 0.00018,
    status: 'proposal'
  },

  {
    id: 18727841,
    name: "Document Creating and deleting addresses.6",
    code: "ENTMQMAAS-328.6",
    preceedingTasks: ["ENTMQMAAS-347.19", "ENTMQMAAS-353.5", "ENTMQMAAS-376.4"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 3.06,
        frontend: 2.48,
        database: 2.82,
        devops: 3.08,
        ai_ml: 2.62,
        testing: 1.71,
        issue_tracking: 2.83
    },
    estimateNormalTime: 2.41,
    kpiInTask: kpiC,
    taskKPIWeight: 0.020907,
    status: 'proposal'
  },

  {
    id: 17733175,
    name: "Add Documentation Conventions to Guide.5",
    code: "ENTMQMAAS-376.5",
    preceedingTasks: ["ENTMQMAAS-328.6"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 3.06,
        frontend: 2.48,
        database: 2.82,
        devops: 3.08,
        ai_ml: 2.62,
        testing: 1.71,
        issue_tracking: 2.83
    },
    estimateNormalTime: 2.41,
    kpiInTask: kpiA,
    taskKPIWeight: 0.008523,
    status: 'proposal'
  },

  {
    id: 19727841,
    name: "Document Creating and deleting addresses.7",
    code: "ENTMQMAAS-328.7",
    preceedingTasks: ["ENTMQMAAS-376.5"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 3.06,
        frontend: 2.48,
        database: 2.82,
        devops: 3.08,
        ai_ml: 2.62,
        testing: 1.71,
        issue_tracking: 2.83
    },
    estimateNormalTime: 36.05,
    kpiInTask: kpiB,
    taskKPIWeight: 0.00473,
    status: 'proposal'
  }
]
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
    taskKPIWeight: 0.000002622163483236909,
    status: 'proposal'
  },

  {
    id: 14720876,
    name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.2",
    code: "ENTMQMAAS-301.2",
    preceedingTasks: ["13720876"],
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
    taskKPIWeight: 0.000014668126704399637,
    status: 'proposal'
  },

  {
    id: 13720955,
    name: "[#524] : System-tests: longtime: create new test for user authentication before/after restarting keycloak.1",
    code: "ENTMQMAAS-304.1",
    preceedingTasks: ["14720876"],
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
    taskKPIWeight: 0.000014668126704399637,
    status: 'proposal'
  },

  {
    id: 15720876,
    name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.3",
    code: "ENTMQMAAS-301.3",
    preceedingTasks: ["13720952"],
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
    taskKPIWeight: 0.000009410136580086336,
    status: 'proposal'
  },

  {
    id: 14720955,
    name: "[#524] : System-tests: longtime: create new test for user authentication before/after restarting keycloak.2",
    code: "ENTMQMAAS-304.2",
    preceedingTasks: ["15720876"],
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
    taskKPIWeight: 0.000009410136580086336,
    status: 'proposal'
  },

  {
    id: 13721160,
    name: "Unable test io.enmasse.systemtest.brokered.clients.rhea.MsgPatternsTest.testMessageSelectorTopic.1",
    code: "ENTMQMAAS-306.1",
    preceedingTasks: ["14720955"],
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
    taskKPIWeight: 0.000009410136580086336,
    status: 'proposal'
  },

  {
    id: 13720952,
    name: "[#523] : SystemTests: brokered/standard: new test for keycloak persistent storage.1",
    code: "ENTMQMAAS-303.1",
    preceedingTasks: ["13720955"],
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
    taskKPIWeight: 0.000041954615731790545,
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
    taskKPIWeight: 0.000041954615731790545,
    status: 'proposal'
  },

  {
    id: 16720876,
    name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.4",
    code: "ENTMQMAAS-301.4",
    preceedingTasks: ["13721160", "13720976"],
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
    taskKPIWeight: 0.000003165782741956756,
    status: 'proposal'
  },

  {
    id: 15720955,
    name: "[#524] : System-tests: longtime: create new test for user authentication before/after restarting keycloak.3",
    code: "ENTMQMAAS-304.3",
    preceedingTasks: ["16720876"],
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
    taskKPIWeight: 0.000003165782741956756,
    status: 'proposal'
  },

  {
    id: 14720952,
    name: "[#523] : SystemTests: brokered/standard: new test for keycloak persistent storage.2",
    code: "ENTMQMAAS-303.2",
    preceedingTasks: ["15720955"],
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
    taskKPIWeight: 0.00011982008014254511,
    status: 'proposal'
  },

  {
    id: 14720976,
    name: "[#526] : System-tests: November list of disabled tests.2",
    code: "ENTMQMAAS-305.2",
    preceedingTasks: ["14720952"],
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
    taskKPIWeight: 0.00011982008014254511,
    status: 'proposal'
  },

  {
    id: 17720876,
    name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.5",
    code: "ENTMQMAAS-301.5",
    preceedingTasks: ["14720976"],
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
    taskKPIWeight: 0.00019595875396677777,
    status: 'proposal'
  },

  {
    id: 16720955,
    name: "[#524] : System-tests: longtime: create new test for user authentication before/after restarting keycloak.4",
    code: "ENTMQMAAS-304.4",
    preceedingTasks: ["17720876"],
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
    taskKPIWeight: 0.00019595875396677777,
    status: 'proposal'
  },

  {
    id: 13721310,
    name: "[#539] : System-tests: createtestAuthSendReceiveLong.1",
    code: "ENTMQMAAS-307.1",
    preceedingTasks: ["16720955"],
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
    taskKPIWeight: 0.00019595875396677777,
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
    taskKPIWeight: 0.00037063641283484626,
    status: 'proposal'
  },

  {
    id: 15720976,
    name: "[#526] : System-tests: November list of disabled tests.3",
    code: "ENTMQMAAS-305.3",
    preceedingTasks: ["15720952"],
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
    taskKPIWeight: 0.00037063641283484626,
    status: 'proposal'
  },

  {
    id: 16720952,
    name: "[#523] : SystemTests: brokered/standard: new test for keycloak persistent storage.4",
    code: "ENTMQMAAS-303.4",
    preceedingTasks: ["13721310", "15720976"],
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
    taskKPIWeight: 0.0002727050022566385,
    status: 'proposal'
  },

  {
    id: 13724080,
    name: "Productize ER3 of RHOM.1",
    code: "ENTMQMAAS-318.1",
    preceedingTasks: ["16720952"],
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
    taskKPIWeight: 0.00002887577591906011,
    status: 'proposal'
  },

  {
    id: 18720876,
    name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.6",
    code: "ENTMQMAAS-301.6",
    preceedingTasks: ["13724080"],
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
    taskKPIWeight: 0.0002777414748006606,
    status: 'proposal'
  },

  {
    id: 17720952,
    name: "[#523] : SystemTests: brokered/standard: new test for keycloak persistent storage.5",
    code: "ENTMQMAAS-303.5",
    preceedingTasks: ["18720876"],
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
    taskKPIWeight: 0.001928729152334563,
    status: 'proposal'
  },

  {
    id: 19720876,
    name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.7",
    code: "ENTMQMAAS-301.7",
    preceedingTasks: ["17720952"],
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
    taskKPIWeight: 0.0014544613211058142,
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
    taskKPIWeight: 0.00013758896846187811,
    status: 'proposal'
  },

  {
    id: 13730071,
    name: "[#747] : Add support for colocated topics.1",
    code: "ENTMQMAAS-335.1",
    preceedingTasks: ["19720876", "13730070"],
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
    taskKPIWeight: 0.00013758896846187811,
    status: 'proposal'
  },

  {
    id: 13730073,
    name: "[#749] : Use statefulsets for brokers.1",
    code: "ENTMQMAAS-337.1",
    preceedingTasks: ["13730071"],
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
    taskKPIWeight: 0.00013758896846187811,
    status: 'proposal'
  },

  {
    id: 13730068,
    name: "[#744] : Implement Plan resource limits for address space.1",
    code: "ENTMQMAAS-332.1",
    preceedingTasks: ["13730073"],
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
    taskKPIWeight: 0.00013758896846187811,
    status: 'proposal'
  },

  {
    id: 13730072,
    name: "[#748] : Persist decision about where queues/topics are placed.1",
    code: "ENTMQMAAS-336.1",
    preceedingTasks: ["13730068"],
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
    taskKPIWeight: 0.00013758896846187811,
    status: 'proposal'
  },

  {
    id: 13730069,
    name: "[#745] : Implement Plan resource requests for addresses.1",
    code: "ENTMQMAAS-333.1",
    preceedingTasks: ["13730072"],
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
    taskKPIWeight: 0.00013758896846187811,
    status: 'proposal'
  },

  {
    id: 13730076,
    name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.1",
    code: "ENTMQMAAS-340.1",
    preceedingTasks: ["20720876", "13730069"],
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
    taskKPIWeight: 0.00013758896846187811,
    status: 'proposal'
  },

  {
    id: 13730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.1",
    code: "ENTMQMAAS-347.1",
    preceedingTasks: ["13730076"],
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
    taskKPIWeight: 0.00013758896846187811,
    status: 'proposal'
  },

  {
    id: 13730092,
    name: "[#768] : Disable MQTT (configurable upstream?).1",
    code: "ENTMQMAAS-356.1",
    preceedingTasks: ["13730139", "13730083"],
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
    taskKPIWeight: 0.00013758896846187811,
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
    taskKPIWeight: 0.000191664161822891,
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
    taskKPIWeight: 0.000191664161822891,
    status: 'proposal'
  },

  {
    id: 13730145,
    name: "[#774] : Tests for authorization in WebConsole.1",
    code: "ENTMQMAAS-362.1",
    preceedingTasks: ["13730144"],
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
    taskKPIWeight: 0.000191664161822891,
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
    taskKPIWeight: 0.000191664161822891,
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
    taskKPIWeight: 0.000191664161822891,
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
    taskKPIWeight: 0.000191664161822891,
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
    taskKPIWeight: 0.000191664161822891,
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
    taskKPIWeight: 0.0004833574650105792,
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
    taskKPIWeight: 0.0004833574650105792,
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
    taskKPIWeight: 0.0004833574650105792,
    status: 'proposal'
  },

  {
    id: 21720876,
    name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.9",
    code: "ENTMQMAAS-301.9",
    preceedingTasks: ["14730083", "13730167"],
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
    taskKPIWeight: 0.00000225442104351466,
    status: 'proposal'
  },

  {
    id: 14730144,
    name: "[#773] : Tests for authentication WebConsole.2",
    code: "ENTMQMAAS-361.2",
    preceedingTasks: ["21720876"],
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
    taskKPIWeight: 0.00000225442104351466,
    status: 'proposal'
  },

  {
    id: 14730143,
    name: "[#772] : WebConsole Tests for addresses status.2",
    code: "ENTMQMAAS-360.2",
    preceedingTasks: ["14730144"],
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
    taskKPIWeight: 0.00000225442104351466,
    status: 'proposal'
  },

  {
    id: 14730148,
    name: "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.2",
    code: "ENTMQMAAS-365.2",
    preceedingTasks: ["13730147", "14730143"],
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
    taskKPIWeight: 0.00000225442104351466,
    status: 'proposal'
  },

  {
    id: 14730167,
    name: "Setup Jenkins job with productized images.2",
    code: "ENTMQMAAS-367.2",
    preceedingTasks: ["14730148"],
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
    taskKPIWeight: 0.00000225442104351466,
    status: 'proposal'
  },

  {
    id: 14730070,
    name: "[#746] : Add support for checking requests against limits and setting status on address.2",
    code: "ENTMQMAAS-334.2",
    preceedingTasks: ["13730145", "13730092"],
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
    taskKPIWeight: 0.00008918153883307726,
    status: 'proposal'
  },

  {
    id: 14730071,
    name: "[#747] : Add support for colocated topics.2",
    code: "ENTMQMAAS-335.2",
    preceedingTasks: ["14730070"],
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
    taskKPIWeight: 0.00008918153883307726,
    status: 'proposal'
  },

  {
    id: 14730068,
    name: "[#744] : Implement Plan resource limits for address space.2",
    code: "ENTMQMAAS-332.2",
    preceedingTasks: ["13730143", "14730071"],
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
    taskKPIWeight: 0.00008918153883307726,
    status: 'proposal'
  },

  {
    id: 14730072,
    name: "[#748] : Persist decision about where queues/topics are placed.2",
    code: "ENTMQMAAS-336.2",
    preceedingTasks: ["13730141", "14730068"],
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
    taskKPIWeight: 0.00008918153883307726,
    status: 'proposal'
  },

  {
    id: 14730069,
    name: "[#745] : Implement Plan resource requests for addresses.2",
    code: "ENTMQMAAS-333.2",
    preceedingTasks: ["13730146", "14730072"],
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
    taskKPIWeight: 0.00008918153883307726,
    status: 'proposal'
  },

  {
    id: 14730076,
    name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.2",
    code: "ENTMQMAAS-340.2",
    preceedingTasks: ["13730091", "14730069"],
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
    taskKPIWeight: 0.00008918153883307726,
    status: 'proposal'
  },

  {
    id: 14730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.2",
    code: "ENTMQMAAS-347.2",
    preceedingTasks: ["13730148", "14730076"],
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
    taskKPIWeight: 0.00008918153883307726,
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
    taskKPIWeight: 0.00008918153883307726,
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
    taskKPIWeight: 0.00006497049581788524,
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
    taskKPIWeight: 0.00006497049581788524,
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
    taskKPIWeight: 0.00006497049581788524,
    status: 'proposal'
  },

  {
    id: 22720876,
    name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.10",
    code: "ENTMQMAAS-301.10",
    preceedingTasks: ["14730167", "14730092", "13730089"],
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
    taskKPIWeight: 0.000030410700884857322,
    status: 'proposal'
  },

  {
    id: 15730144,
    name: "[#773] : Tests for authentication WebConsole.3",
    code: "ENTMQMAAS-361.3",
    preceedingTasks: ["22720876"],
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
    taskKPIWeight: 0.000030410700884857322,
    status: 'proposal'
  },

  {
    id: 15730143,
    name: "[#772] : WebConsole Tests for addresses status.3",
    code: "ENTMQMAAS-360.3",
    preceedingTasks: ["14730141", "15730144"],
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
    taskKPIWeight: 0.000030410700884857322,
    status: 'proposal'
  },

  {
    id: 15730148,
    name: "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.3",
    code: "ENTMQMAAS-365.3",
    preceedingTasks: ["15730143"],
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
    taskKPIWeight: 0.000030410700884857322,
    status: 'proposal'
  },

  {
    id: 15730167,
    name: "Setup Jenkins job with productized images.3",
    code: "ENTMQMAAS-367.3",
    preceedingTasks: ["15730070", "14730147", "15730148"],
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
    taskKPIWeight: 0.000030410700884857322,
    status: 'proposal'
  },

  {
    id: 13732615,
    name: "[#844] : system-tests: create documentation in HACKING doc how to execute webconsole tests.1",
    code: "ENTMQMAAS-375.1",
    preceedingTasks: ["15730167"],
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
    taskKPIWeight: 0.000030410700884857322,
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
    taskKPIWeight: 0.003586544048205918,
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
    taskKPIWeight: 0.00008318573818543187,
    status: 'proposal'
  },

  {
    id: 16730143,
    name: "[#772] : WebConsole Tests for addresses status.4",
    code: "ENTMQMAAS-360.4",
    preceedingTasks: ["13730085", "15730072", "23720876"],
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
    taskKPIWeight: 0.00008318573818543187,
    status: 'proposal'
  },

  {
    id: 16730148,
    name: "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.4",
    code: "ENTMQMAAS-365.4",
    preceedingTasks: ["16730143"],
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
    taskKPIWeight: 0.00008318573818543187,
    status: 'proposal'
  },

  {
    id: 16730167,
    name: "Setup Jenkins job with productized images.4",
    code: "ENTMQMAAS-367.4",
    preceedingTasks: ["15730076", "16730148"],
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
    taskKPIWeight: 0.00008318573818543187,
    status: 'proposal'
  },

  {
    id: 14732615,
    name: "[#844] : system-tests: create documentation in HACKING doc how to execute webconsole tests.2",
    code: "ENTMQMAAS-375.2",
    preceedingTasks: ["16730167"],
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
    taskKPIWeight: 0.00008318573818543187,
    status: 'proposal'
  },

  {
    id: 24720876,
    name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.12",
    code: "ENTMQMAAS-301.12",
    preceedingTasks: ["15730083", "14732615"],
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
    taskKPIWeight: 0.00001920026675965981,
    status: 'proposal'
  },

  {
    id: 17730143,
    name: "[#772] : WebConsole Tests for addresses status.5",
    code: "ENTMQMAAS-360.5",
    preceedingTasks: ["24720876"],
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
    taskKPIWeight: 0.00001920026675965981,
    status: 'proposal'
  },

  {
    id: 17730148,
    name: "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.5",
    code: "ENTMQMAAS-365.5",
    preceedingTasks: ["17730143"],
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
    taskKPIWeight: 0.00001920026675965981,
    status: 'proposal'
  },

  {
    id: 17730167,
    name: "Setup Jenkins job with productized images.5",
    code: "ENTMQMAAS-367.5",
    preceedingTasks: ["17730148"],
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
    taskKPIWeight: 0.00001920026675965981,
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
    taskKPIWeight: 0.00018232030609360045,
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
    taskKPIWeight: 0.00018232030609360045,
    status: 'proposal'
  },

  {
    id: 15730072,
    name: "[#748] : Persist decision about where queues/topics are placed.3",
    code: "ENTMQMAAS-336.3",
    preceedingTasks: ["13732596", "13732615", "13727841", "15730071"],
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
    taskKPIWeight: 0.00018232030609360045,
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
    taskKPIWeight: 0.00018232030609360045,
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
    taskKPIWeight: 0.00018232030609360045,
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
    taskKPIWeight: 0.00018232030609360045,
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
    taskKPIWeight: 0.0010155767080990365,
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
    taskKPIWeight: 0.0010155767080990365,
    status: 'proposal'
  },

  {
    id: 18730143,
    name: "[#772] : WebConsole Tests for addresses status.6",
    code: "ENTMQMAAS-360.6",
    preceedingTasks: ["17730167"],
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
    taskKPIWeight: 0.000004835013642261227,
    status: 'proposal'
  },

  {
    id: 18730148,
    name: "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.6",
    code: "ENTMQMAAS-365.6",
    preceedingTasks: ["18730143"],
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
    taskKPIWeight: 0.000004835013642261227,
    status: 'proposal'
  },

  {
    id: 18730167,
    name: "Setup Jenkins job with productized images.6",
    code: "ENTMQMAAS-367.6",
    preceedingTasks: ["18730148"],
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
    taskKPIWeight: 0.000004835013642261227,
    status: 'proposal'
  },

  {
    id: 14730089,
    name: "[#765] : Changes to service broker (service type is just address space, different plans are supported. See also point above about how to tie plans offered to plans specified) .2",
    code: "ENTMQMAAS-353.2",
    preceedingTasks: ["13730082", "18730167"],
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
    taskKPIWeight: 0.00010224039264364887,
    status: 'proposal'
  },

  {
    id: 14730082,
    name: "[#758] : Keycloak plugin OAUTH2 support.2",
    code: "ENTMQMAAS-346.2",
    preceedingTasks: ["14730089"],
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
    taskKPIWeight: 0.00010224039264364887,
    status: 'proposal'
  },

  {
    id: 13733954,
    name: "[#811] : Brokered: cannot create topic: user null does not have permissions to 'send'....1",
    code: "ENTMQMAAS-383.1",
    preceedingTasks: ["13730086", "14730082"],
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
    taskKPIWeight: 0.00010224039264364887,
    status: 'proposal'
  },

  {
    id: 16730070,
    name: "[#746] : Add support for checking requests against limits and setting status on address.4",
    code: "ENTMQMAAS-334.4",
    preceedingTasks: ["15730092"],
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
    taskKPIWeight: 0.00011783290049932549,
    status: 'proposal'
  },

  {
    id: 16730071,
    name: "[#747] : Add support for colocated topics.4",
    code: "ENTMQMAAS-335.4",
    preceedingTasks: ["16730070"],
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
    taskKPIWeight: 0.00011783290049932549,
    status: 'proposal'
  },

  {
    id: 16730072,
    name: "[#748] : Persist decision about where queues/topics are placed.4",
    code: "ENTMQMAAS-336.4",
    preceedingTasks: ["16730071"],
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
    taskKPIWeight: 0.00011783290049932549,
    status: 'proposal'
  },

  {
    id: 16730076,
    name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.4",
    code: "ENTMQMAAS-340.4",
    preceedingTasks: ["16730072"],
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
    taskKPIWeight: 0.00011783290049932549,
    status: 'proposal'
  },

  {
    id: 16730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.4",
    code: "ENTMQMAAS-347.4",
    preceedingTasks: ["13733954", "15730141", "16730076"],
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
    taskKPIWeight: 0.00011783290049932549,
    status: 'proposal'
  },

  {
    id: 16730092,
    name: "[#768] : Disable MQTT (configurable upstream?).4",
    code: "ENTMQMAAS-356.4",
    preceedingTasks: ["19730143", "16730083"],
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
    taskKPIWeight: 0.00011783290049932549,
    status: 'proposal'
  },

  {
    id: 13733952,
    name: "Investigate options for enforcing backlog limits on broker/router.1",
    code: "ENTMQMAAS-382.1",
    preceedingTasks: ["16730092"],
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
    taskKPIWeight: 0.00011783290049932549,
    status: 'proposal'
  },

  {
    id: 17730070,
    name: "[#746] : Add support for checking requests against limits and setting status on address.5",
    code: "ENTMQMAAS-334.5",
    preceedingTasks: ["19730148", "13733952"],
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
    taskKPIWeight: 0.00002130907550173165,
    status: 'proposal'
  },

  {
    id: 17730071,
    name: "[#747] : Add support for colocated topics.5",
    code: "ENTMQMAAS-335.5",
    preceedingTasks: ["17730070"],
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
    taskKPIWeight: 0.00002130907550173165,
    status: 'proposal'
  },

  {
    id: 17730072,
    name: "[#748] : Persist decision about where queues/topics are placed.5",
    code: "ENTMQMAAS-336.5",
    preceedingTasks: ["17730071"],
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
    taskKPIWeight: 0.00002130907550173165,
    status: 'proposal'
  },

  {
    id: 17730076,
    name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.5",
    code: "ENTMQMAAS-340.5",
    preceedingTasks: ["17730072"],
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
    taskKPIWeight: 0.00002130907550173165,
    status: 'proposal'
  },

  {
    id: 17730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.5",
    code: "ENTMQMAAS-347.5",
    preceedingTasks: ["17730076"],
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
    taskKPIWeight: 0.00002130907550173165,
    status: 'proposal'
  },

  {
    id: 17730092,
    name: "[#768] : Disable MQTT (configurable upstream?).5",
    code: "ENTMQMAAS-356.5",
    preceedingTasks: ["19730167", "17730083"],
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
    taskKPIWeight: 0.00002130907550173165,
    status: 'proposal'
  },

  {
    id: 14733952,
    name: "Investigate options for enforcing backlog limits on broker/router.2",
    code: "ENTMQMAAS-382.2",
    preceedingTasks: ["17730092"],
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
    taskKPIWeight: 0.00002130907550173165,
    status: 'proposal'
  },

  {
    id: 13734956,
    name: "[#894] : Console does not sanitize address config names.1",
    code: "ENTMQMAAS-385.1",
    preceedingTasks: ["14733952"],
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
    taskKPIWeight: 0.00002130907550173165,
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
    taskKPIWeight: 0.00018214442927460287,
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
    taskKPIWeight: 0.00018214442927460287,
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
    taskKPIWeight: 0.00018214442927460287,
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
    taskKPIWeight: 0.00018214442927460287,
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
    taskKPIWeight: 0.000645180127290096,
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
    taskKPIWeight: 0.000645180127290096,
    status: 'proposal'
  },

  {
    id: 18730070,
    name: "[#746] : Add support for checking requests against limits and setting status on address.6",
    code: "ENTMQMAAS-334.6",
    preceedingTasks: ["14727841", "13734956"],
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
    taskKPIWeight: 0.000011693143663052393,
    status: 'proposal'
  },

  {
    id: 18730071,
    name: "[#747] : Add support for colocated topics.6",
    code: "ENTMQMAAS-335.6",
    preceedingTasks: ["18730070"],
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
    taskKPIWeight: 0.000011693143663052393,
    status: 'proposal'
  },

  {
    id: 18730072,
    name: "[#748] : Persist decision about where queues/topics are placed.6",
    code: "ENTMQMAAS-336.6",
    preceedingTasks: ["18730071"],
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
    taskKPIWeight: 0.000011693143663052393,
    status: 'proposal'
  },

  {
    id: 18730076,
    name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.6",
    code: "ENTMQMAAS-340.6",
    preceedingTasks: ["18730072"],
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
    taskKPIWeight: 0.000011693143663052393,
    status: 'proposal'
  },

  {
    id: 18730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.6",
    code: "ENTMQMAAS-347.6",
    preceedingTasks: ["18730076"],
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
    taskKPIWeight: 0.000011693143663052393,
    status: 'proposal'
  },

  {
    id: 18730092,
    name: "[#768] : Disable MQTT (configurable upstream?).6",
    code: "ENTMQMAAS-356.6",
    preceedingTasks: ["18730083"],
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
    taskKPIWeight: 0.000011693143663052393,
    status: 'proposal'
  },

  {
    id: 15733952,
    name: "Investigate options for enforcing backlog limits on broker/router.3",
    code: "ENTMQMAAS-382.3",
    preceedingTasks: ["18730092"],
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
    taskKPIWeight: 0.000011693143663052393,
    status: 'proposal'
  },

  {
    id: 14734956,
    name: "[#894] : Console does not sanitize address config names.2",
    code: "ENTMQMAAS-385.2",
    preceedingTasks: ["15733952"],
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
    taskKPIWeight: 0.000011693143663052393,
    status: 'proposal'
  },

  {
    id: 13735371,
    name: "[#910] : address-controller can't replace addresses created via console.1",
    code: "ENTMQMAAS-386.1",
    preceedingTasks: ["14734956"],
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
    taskKPIWeight: 0.000011693143663052393,
    status: 'proposal'
  },

  {
    id: 20730143,
    name: "[#772] : WebConsole Tests for addresses status.8",
    code: "ENTMQMAAS-360.8",
    preceedingTasks: ["13733964", "14732596", "13735371"],
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
    taskKPIWeight: 0.000003357648362681408,
    status: 'proposal'
  },

  {
    id: 20730167,
    name: "Setup Jenkins job with productized images.8",
    code: "ENTMQMAAS-367.8",
    preceedingTasks: ["20730143"],
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
    taskKPIWeight: 0.000003357648362681408,
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
    taskKPIWeight: 0.0008316607195930761,
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
    taskKPIWeight: 0.0008316607195930761,
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
    taskKPIWeight: 0.0008316607195930761,
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
    taskKPIWeight: 0.0008316607195930761,
    status: 'proposal'
  },

  {
    id: 14730091,
    name: "[#767] : Disable durable subs (configurable upstream?).2",
    code: "ENTMQMAAS-355.2",
    preceedingTasks: ["20730167", "13730081"],
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
    taskKPIWeight: 0.0000406755115936262,
    status: 'proposal'
  },

  {
    id: 14730085,
    name: "[#761] : Console to support status for addresses.2",
    code: "ENTMQMAAS-349.2",
    preceedingTasks: ["19730070", "14730091"],
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
    taskKPIWeight: 0.0000406755115936262,
    status: 'proposal'
  },

  {
    id: 14730081,
    name: "[#757] : Oauth for console.2",
    code: "ENTMQMAAS-345.2",
    preceedingTasks: ["14730085"],
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
    taskKPIWeight: 0.0000406755115936262,
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
    taskKPIWeight: 0.00021770352431557167,
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
    taskKPIWeight: 0.00021770352431557167,
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
    taskKPIWeight: 0.00011441586515880076,
    status: 'proposal'
  },

  {
    id: 21730167,
    name: "Setup Jenkins job with productized images.9",
    code: "ENTMQMAAS-367.9",
    preceedingTasks: ["21730143"],
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
    taskKPIWeight: 0.00011441586515880076,
    status: 'proposal'
  },

  {
    id: 13735527,
    name: "[#919] : system-tests: new scale test: testPodsLimitation.1",
    code: "ENTMQMAAS-388.1",
    preceedingTasks: ["13735522", "21730167"],
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
    taskKPIWeight: 0.00011441586515880076,
    status: 'proposal'
  },

  {
    id: 13735530,
    name: "[#920] : system-tests: new scale test: testCreditLimitation.1",
    code: "ENTMQMAAS-389.1",
    preceedingTasks: ["13735527"],
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
    taskKPIWeight: 0.00011441586515880076,
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
    taskKPIWeight: 0.00008714296661287782,
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
    taskKPIWeight: 0.00008714296661287782,
    status: 'proposal'
  },

  {
    id: 19730076,
    name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.7",
    code: "ENTMQMAAS-340.7",
    preceedingTasks: ["19730072"],
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
    taskKPIWeight: 0.00008714296661287782,
    status: 'proposal'
  },

  {
    id: 19730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.7",
    code: "ENTMQMAAS-347.7",
    preceedingTasks: ["14730081", "19730076"],
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
    taskKPIWeight: 0.00008714296661287782,
    status: 'proposal'
  },

  {
    id: 19730092,
    name: "[#768] : Disable MQTT (configurable upstream?).7",
    code: "ENTMQMAAS-356.7",
    preceedingTasks: ["19730083"],
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
    taskKPIWeight: 0.00008714296661287782,
    status: 'proposal'
  },

  {
    id: 16733952,
    name: "Investigate options for enforcing backlog limits on broker/router.4",
    code: "ENTMQMAAS-382.4",
    preceedingTasks: ["19730092"],
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
    taskKPIWeight: 0.00008714296661287782,
    status: 'proposal'
  },

  {
    id: 15734956,
    name: "[#894] : Console does not sanitize address config names.3",
    code: "ENTMQMAAS-385.3",
    preceedingTasks: ["16733952"],
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
    taskKPIWeight: 0.00008714296661287782,
    status: 'proposal'
  },

  {
    id: 14735371,
    name: "[#910] : address-controller can't replace addresses created via console.2",
    code: "ENTMQMAAS-386.2",
    preceedingTasks: ["15734956"],
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
    taskKPIWeight: 0.00008714296661287782,
    status: 'proposal'
  },

  {
    id: 20730070,
    name: "[#746] : Add support for checking requests against limits and setting status on address.8",
    code: "ENTMQMAAS-334.8",
    preceedingTasks: ["13735531", "13735530", "14735371"],
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
    taskKPIWeight: 0.000025294284332199944,
    status: 'proposal'
  },

  {
    id: 20730072,
    name: "[#748] : Persist decision about where queues/topics are placed.8",
    code: "ENTMQMAAS-336.8",
    preceedingTasks: ["20730070"],
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
    taskKPIWeight: 0.000025294284332199944,
    status: 'proposal'
  },

  {
    id: 20730076,
    name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.8",
    code: "ENTMQMAAS-340.8",
    preceedingTasks: ["20730072"],
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
    taskKPIWeight: 0.000025294284332199944,
    status: 'proposal'
  },

  {
    id: 20730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.8",
    code: "ENTMQMAAS-347.8",
    preceedingTasks: ["20730076"],
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
    taskKPIWeight: 0.000025294284332199944,
    status: 'proposal'
  },

  {
    id: 20730092,
    name: "[#768] : Disable MQTT (configurable upstream?).8",
    code: "ENTMQMAAS-356.8",
    preceedingTasks: ["20730083"],
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
    taskKPIWeight: 0.000025294284332199944,
    status: 'proposal'
  },

  {
    id: 17733952,
    name: "Investigate options for enforcing backlog limits on broker/router.5",
    code: "ENTMQMAAS-382.5",
    preceedingTasks: ["20730092"],
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
    taskKPIWeight: 0.000025294284332199944,
    status: 'proposal'
  },

  {
    id: 14735522,
    name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.2",
    code: "ENTMQMAAS-387.2",
    preceedingTasks: ["15730089"],
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
    taskKPIWeight: 0.00024105516923793454,
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
    taskKPIWeight: 0.00024105516923793454,
    status: 'proposal'
  },

  {
    id: 13736171,
    name: "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space.1",
    code: "ENTMQMAAS-391.1",
    preceedingTasks: ["14735531"],
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
    taskKPIWeight: 0.00024105516923793454,
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
    taskKPIWeight: 0.00019073361356237648,
    status: 'proposal'
  },

  {
    id: 14735527,
    name: "[#919] : system-tests: new scale test: testPodsLimitation.2",
    code: "ENTMQMAAS-388.2",
    preceedingTasks: ["15730091", "22730167"],
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
    taskKPIWeight: 0.00019073361356237648,
    status: 'proposal'
  },

  {
    id: 14735530,
    name: "[#920] : system-tests: new scale test: testCreditLimitation.2",
    code: "ENTMQMAAS-389.2",
    preceedingTasks: ["14735527"],
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
    taskKPIWeight: 0.00019073361356237648,
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
    taskKPIWeight: 0.0007804453899009755,
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
    taskKPIWeight: 0.0007804453899009755,
    status: 'proposal'
  },

  {
    id: 21730070,
    name: "[#746] : Add support for checking requests against limits and setting status on address.9",
    code: "ENTMQMAAS-334.9",
    preceedingTasks: ["17733952"],
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
    taskKPIWeight: 0.0001603420992395916,
    status: 'proposal'
  },

  {
    id: 21730072,
    name: "[#748] : Persist decision about where queues/topics are placed.9",
    code: "ENTMQMAAS-336.9",
    preceedingTasks: ["21730070"],
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
    taskKPIWeight: 0.0001603420992395916,
    status: 'proposal'
  },

  {
    id: 21730076,
    name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.9",
    code: "ENTMQMAAS-340.9",
    preceedingTasks: ["14735522", "21730072"],
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
    taskKPIWeight: 0.0001603420992395916,
    status: 'proposal'
  },

  {
    id: 21730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.9",
    code: "ENTMQMAAS-347.9",
    preceedingTasks: ["21730076"],
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
    taskKPIWeight: 0.0001603420992395916,
    status: 'proposal'
  },

  {
    id: 18733952,
    name: "Investigate options for enforcing backlog limits on broker/router.6",
    code: "ENTMQMAAS-382.6",
    preceedingTasks: ["21730083"],
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
    taskKPIWeight: 0.0001603420992395916,
    status: 'proposal'
  },

  {
    id: 22730076,
    name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.10",
    code: "ENTMQMAAS-340.10",
    preceedingTasks: ["13736171", "14735530", "15730082", "18733952"],
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
    taskKPIWeight: 0.00000450884208702932,
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
    taskKPIWeight: 0.00000450884208702932,
    status: 'proposal'
  },

  {
    id: 19733952,
    name: "Investigate options for enforcing backlog limits on broker/router.7",
    code: "ENTMQMAAS-382.7",
    preceedingTasks: ["22730083"],
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
    taskKPIWeight: 0.00000450884208702932,
    status: 'proposal'
  },

  {
    id: 23730167,
    name: "Setup Jenkins job with productized images.11",
    code: "ENTMQMAAS-367.11",
    preceedingTasks: ["22730076", "15735522"],
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
    taskKPIWeight: 0.0000027244918142900564,
    status: 'proposal'
  },

  {
    id: 15735527,
    name: "[#919] : system-tests: new scale test: testPodsLimitation.3",
    code: "ENTMQMAAS-388.3",
    preceedingTasks: ["23730167"],
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
    taskKPIWeight: 0.0000027244918142900564,
    status: 'proposal'
  },

  {
    id: 13737362,
    name: "[#991] : system-tests: new scale test: testCreditLimitation ({sharded,pooled}{queues,topics}).1",
    code: "ENTMQMAAS-393.1",
    preceedingTasks: ["15735527"],
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
    taskKPIWeight: 0.0000027244918142900564,
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
    taskKPIWeight: 0.000009273505001691508,
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
    taskKPIWeight: 0.000009273505001691508,
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
    taskKPIWeight: 0.000500961135712066,
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
    taskKPIWeight: 0.000500961135712066,
    status: 'proposal'
  },

  {
    id: 23730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.11",
    code: "ENTMQMAAS-347.11",
    preceedingTasks: ["19733952"],
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
    taskKPIWeight: 0.000006763263130543979,
    status: 'proposal'
  },

  {
    id: 20733952,
    name: "Investigate options for enforcing backlog limits on broker/router.8",
    code: "ENTMQMAAS-382.8",
    preceedingTasks: ["13737362", "14736171", "23730083"],
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
    taskKPIWeight: 0.000006763263130543979,
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
    taskKPIWeight: 0.0017930801584822341,
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
    taskKPIWeight: 0.0017930801584822341,
    status: 'proposal'
  },

  {
    id: 24730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.12",
    code: "ENTMQMAAS-347.12",
    preceedingTasks: ["15730081", "20733952"],
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
    taskKPIWeight: 0.00008371736584285644,
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
    taskKPIWeight: 0.00008371736584285644,
    status: 'proposal'
  },

  {
    id: 24730167,
    name: "Setup Jenkins job with productized images.12",
    code: "ENTMQMAAS-367.12",
    preceedingTasks: ["13733175"],
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
    taskKPIWeight: 0.000035842896271624036,
    status: 'proposal'
  },

  {
    id: 16735527,
    name: "[#919] : system-tests: new scale test: testPodsLimitation.4",
    code: "ENTMQMAAS-388.4",
    preceedingTasks: ["24730083", "24730167"],
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
    taskKPIWeight: 0.000035842896271624036,
    status: 'proposal'
  },

  {
    id: 14737362,
    name: "[#991] : system-tests: new scale test: testCreditLimitation ({sharded,pooled}{queues,topics}).2",
    code: "ENTMQMAAS-393.2",
    preceedingTasks: ["16735527"],
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
    taskKPIWeight: 0.000035842896271624036,
    status: 'proposal'
  },

  {
    id: 13737403,
    name: "[#996] : system-tests: look at longtime running tests and fix them.1",
    code: "ENTMQMAAS-395.1",
    preceedingTasks: ["16735522", "21733952", "14737362"],
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
    taskKPIWeight: 0.000035842896271624036,
    status: 'proposal'
  },

  {
    id: 13737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).1",
    code: "ENTMQMAAS-397.1",
    preceedingTasks: ["13737403"],
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
    taskKPIWeight: 0.000035842896271624036,
    status: 'proposal'
  },

  {
    id: 25730167,
    name: "Setup Jenkins job with productized images.13",
    code: "ENTMQMAAS-367.13",
    preceedingTasks: ["13737421", "15727841"],
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
    taskKPIWeight: 0.00001474624342140896,
    status: 'proposal'
  },

  {
    id: 17735527,
    name: "[#919] : system-tests: new scale test: testPodsLimitation.5",
    code: "ENTMQMAAS-388.5",
    preceedingTasks: ["13737413", "25730167"],
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
    taskKPIWeight: 0.00001474624342140896,
    status: 'proposal'
  },

  {
    id: 14737403,
    name: "[#996] : system-tests: look at longtime running tests and fix them.2",
    code: "ENTMQMAAS-395.2",
    preceedingTasks: ["17735527"],
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
    taskKPIWeight: 0.00001474624342140896,
    status: 'proposal'
  },

  {
    id: 14737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).2",
    code: "ENTMQMAAS-397.2",
    preceedingTasks: ["14737403"],
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
    taskKPIWeight: 0.00001474624342140896,
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
    taskKPIWeight: 0.00008110159788031035,
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
    taskKPIWeight: 0.00008110159788031035,
    status: 'proposal'
  },

  {
    id: 13737413,
    name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.1",
    code: "ENTMQMAAS-396.1",
    preceedingTasks: ["15736171"],
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
    taskKPIWeight: 0.00008110159788031035,
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
    taskKPIWeight: 0.00008110159788031035,
    status: 'proposal'
  },

  {
    id: 26730167,
    name: "Setup Jenkins job with productized images.14",
    code: "ENTMQMAAS-367.14",
    preceedingTasks: ["14737421", "16730091"],
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
    taskKPIWeight: 0.0000019666226124276816,
    status: 'proposal'
  },

  {
    id: 15737403,
    name: "[#996] : system-tests: look at longtime running tests and fix them.3",
    code: "ENTMQMAAS-395.3",
    preceedingTasks: ["26730167"],
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
    taskKPIWeight: 0.0000019666226124276816,
    status: 'proposal'
  },

  {
    id: 15737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).3",
    code: "ENTMQMAAS-397.3",
    preceedingTasks: ["15737403"],
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
    taskKPIWeight: 0.0000019666226124276816,
    status: 'proposal'
  },

  {
    id: 17735522,
    name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.5",
    code: "ENTMQMAAS-387.5",
    preceedingTasks: ["13737429", "15737421"],
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
    taskKPIWeight: 0.000002222443440060551,
    status: 'proposal'
  },

  {
    id: 16736171,
    name: "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space.4",
    code: "ENTMQMAAS-391.4",
    preceedingTasks: ["17735522"],
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
    taskKPIWeight: 0.000002222443440060551,
    status: 'proposal'
  },

  {
    id: 14737413,
    name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.2",
    code: "ENTMQMAAS-396.2",
    preceedingTasks: ["16736171"],
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
    taskKPIWeight: 0.000002222443440060551,
    status: 'proposal'
  },

  {
    id: 14737429,
    name: "[#998] : system-tests: review list of February disabled tests.2",
    code: "ENTMQMAAS-399.2",
    preceedingTasks: ["14737413"],
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
    taskKPIWeight: 0.000002222443440060551,
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
    taskKPIWeight: 0.000028146686560306427,
    status: 'proposal'
  },

  {
    id: 16737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).4",
    code: "ENTMQMAAS-397.4",
    preceedingTasks: ["25730083", "27730167"],
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
    taskKPIWeight: 0.000028146686560306427,
    status: 'proposal'
  },

  {
    id: 18735522,
    name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.6",
    code: "ENTMQMAAS-387.6",
    preceedingTasks: ["14737429"],
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
    taskKPIWeight: 0.000026170470666842518,
    status: 'proposal'
  },

  {
    id: 17736171,
    name: "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space.5",
    code: "ENTMQMAAS-391.5",
    preceedingTasks: ["18735522"],
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
    taskKPIWeight: 0.000026170470666842518,
    status: 'proposal'
  },

  {
    id: 15737413,
    name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.3",
    code: "ENTMQMAAS-396.3",
    preceedingTasks: ["17736171"],
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
    taskKPIWeight: 0.000026170470666842518,
    status: 'proposal'
  },

  {
    id: 19735522,
    name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.7",
    code: "ENTMQMAAS-387.7",
    preceedingTasks: ["14733175", "16737421", "15737413", "16730081"],
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
    taskKPIWeight: 0.00003951472458824205,
    status: 'proposal'
  },

  {
    id: 18736171,
    name: "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space.6",
    code: "ENTMQMAAS-391.6",
    preceedingTasks: ["19735522"],
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
    taskKPIWeight: 0.00003951472458824205,
    status: 'proposal'
  },

  {
    id: 16737413,
    name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.4",
    code: "ENTMQMAAS-396.4",
    preceedingTasks: ["18736171"],
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
    taskKPIWeight: 0.00003951472458824205,
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
    taskKPIWeight: 0.00019207667290744898,
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
    taskKPIWeight: 0.00019207667290744898,
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
    taskKPIWeight: 0.00024657130583376826,
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
    taskKPIWeight: 0.00024657130583376826,
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
    taskKPIWeight: 0.00022686190994482838,
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
    taskKPIWeight: 0.00022686190994482838,
    status: 'proposal'
  },

  {
    id: 26730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.14",
    code: "ENTMQMAAS-347.14",
    preceedingTasks: ["17737413", "16727841"],
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
    taskKPIWeight: 0.0000162766001581413,
    status: 'proposal'
  },

  {
    id: 23733952,
    name: "Investigate options for enforcing backlog limits on broker/router.11",
    code: "ENTMQMAAS-382.11",
    preceedingTasks: ["26730083"],
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
    taskKPIWeight: 0.0000162766001581413,
    status: 'proposal'
  },

  {
    id: 28730167,
    name: "Setup Jenkins job with productized images.16",
    code: "ENTMQMAAS-367.16",
    preceedingTasks: ["16737413", "22733952"],
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
    taskKPIWeight: 0.00010502510894444414,
    status: 'proposal'
  },

  {
    id: 17737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).5",
    code: "ENTMQMAAS-397.5",
    preceedingTasks: ["28730167"],
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
    taskKPIWeight: 0.00010502510894444414,
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
    taskKPIWeight: 0.00023880074819441984,
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
    taskKPIWeight: 0.00023880074819441984,
    status: 'proposal'
  },

  {
    id: 20735522,
    name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.8",
    code: "ENTMQMAAS-387.8",
    preceedingTasks: ["17737421"],
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
    taskKPIWeight: 0.0001088943989623913,
    status: 'proposal'
  },

  {
    id: 17737413,
    name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.5",
    code: "ENTMQMAAS-396.5",
    preceedingTasks: ["20735522"],
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
    taskKPIWeight: 0.0001088943989623913,
    status: 'proposal'
  },

  {
    id: 29730167,
    name: "Setup Jenkins job with productized images.17",
    code: "ENTMQMAAS-367.17",
    preceedingTasks: ["27730083", "15733175"],
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
    taskKPIWeight: 0.00009136640858907923,
    status: 'proposal'
  },

  {
    id: 18737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).6",
    code: "ENTMQMAAS-397.6",
    preceedingTasks: ["17730081", "29730167"],
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
    taskKPIWeight: 0.00009136640858907923,
    status: 'proposal'
  },

  {
    id: 21735522,
    name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.9",
    code: "ENTMQMAAS-387.9",
    preceedingTasks: ["18737421"],
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
    taskKPIWeight: 0.0000030218835264132674,
    status: 'proposal'
  },

  {
    id: 18737413,
    name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.6",
    code: "ENTMQMAAS-396.6",
    preceedingTasks: ["21735522"],
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
    taskKPIWeight: 0.0000030218835264132674,
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
    taskKPIWeight: 0.00032348543654176306,
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
    taskKPIWeight: 0.00032348543654176306,
    status: 'proposal'
  },

  {
    id: 27730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.15",
    code: "ENTMQMAAS-347.15",
    preceedingTasks: ["23733952", "16730089", "17730091"],
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
    taskKPIWeight: 0.00011801654330773337,
    status: 'proposal'
  },

  {
    id: 28730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.16",
    code: "ENTMQMAAS-347.16",
    preceedingTasks: ["19737413"],
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
    taskKPIWeight: 0.0000234875497370428,
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
    taskKPIWeight: 0.00006459475897729946,
    status: 'proposal'
  },

  {
    id: 19737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).7",
    code: "ENTMQMAAS-397.7",
    preceedingTasks: ["28730083", "30730167"],
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
    taskKPIWeight: 0.00006459475897729946,
    status: 'proposal'
  },

  {
    id: 19737413,
    name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.7",
    code: "ENTMQMAAS-396.7",
    preceedingTasks: ["18737413"],
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
    taskKPIWeight: 0.00005539434564064591,
    status: 'proposal'
  },

  {
    id: 20737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).8",
    code: "ENTMQMAAS-397.8",
    preceedingTasks: ["29730083"],
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
    taskKPIWeight: 0.00010846163539564569,
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
    taskKPIWeight: 0.0014622558619477532,
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
    taskKPIWeight: 0.0014622558619477532,
    status: 'proposal'
  },

  {
    id: 21737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).9",
    code: "ENTMQMAAS-397.9",
    preceedingTasks: ["20737421", "16730082"],
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
    taskKPIWeight: 0.0001133446154430881,
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
    taskKPIWeight: 0.0006844486243317415,
    status: 'proposal'
  },

  {
    id: 29730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.17",
    code: "ENTMQMAAS-347.17",
    preceedingTasks: ["19737421"],
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
    taskKPIWeight: 0.00029870279386482883,
    status: 'proposal'
  },

  {
    id: 22737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).10",
    code: "ENTMQMAAS-397.10",
    preceedingTasks: ["21737421", "18730081"],
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
    taskKPIWeight: 0.00015567976465598256,
    status: 'proposal'
  },

  {
    id: 23737421,
    name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).11",
    code: "ENTMQMAAS-397.11",
    preceedingTasks: ["30730083"],
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
    taskKPIWeight: 0.00026040276138493645,
    status: 'proposal'
  },

  {
    id: 30730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.18",
    code: "ENTMQMAAS-347.18",
    preceedingTasks: ["22737421"],
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
    taskKPIWeight: 0.0004452561504950088,
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
    taskKPIWeight: 0.006243786962431983,
    status: 'proposal'
  },

  {
    id: 31730083,
    name: "[#759] : Delegate from keycloak to OpenShift Pro.19",
    code: "ENTMQMAAS-347.19",
    preceedingTasks: ["23737421", "17727841"],
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
    taskKPIWeight: 0.00013949829786811721,
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
    taskKPIWeight: 0.0037611297714640556,
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
    taskKPIWeight: 0.0037611297714640556,
    status: 'proposal'
  },

  {
    id: 18727841,
    name: "Document Creating and deleting addresses.6",
    code: "ENTMQMAAS-328.6",
    preceedingTasks: ["31730083", "17730089", "16733175"],
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
    taskKPIWeight: 0.000340383315852727,
    status: 'proposal'
  },

  {
    id: 17733175,
    name: "Add Documentation Conventions to Guide.5",
    code: "ENTMQMAAS-376.5",
    preceedingTasks: ["18727841"],
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
    taskKPIWeight: 0.000340383315852727,
    status: 'proposal'
  },

  {
    id: 19727841,
    name: "Document Creating and deleting addresses.7",
    code: "ENTMQMAAS-328.7",
    preceedingTasks: ["17733175"],
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
    taskKPIWeight: 0.005082200516961488,
    status: 'proposal'
  }
]
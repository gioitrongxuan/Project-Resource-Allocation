[

  {
    id: 13737484,
    name: "[#972] : Make global-max-size parameter configurable via template/plan.1",
    code: "ENTMQMAAS-406.1",
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
    kpiInTask: kpiC,
    taskKPIWeight: 0.025551,
    status: 'proposal'
  },

  {
    id: 13737430,
    name: "[#795] : System-tests: Enable authentication in marathon tests.1",
    code: "ENTMQMAAS-400.1",
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
    estimateNormalTime: 0.25,
    kpiInTask: kpiC,
    taskKPIWeight: 0.002609,
    status: 'proposal'
  },

  {
    id: 14737430,
    name: "[#795] : System-tests: Enable authentication in marathon tests.2",
    code: "ENTMQMAAS-400.2",
    preceedingTasks: ["ENTMQMAAS-406.1", "ENTMQMAAS-400.1"],
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
    taskKPIWeight: 0.022015,
    status: 'proposal'
  },

  {
    id: 13738314,
    name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.1",
    code: "ENTMQMAAS-416.1",
    preceedingTasks: ["ENTMQMAAS-400.2"],
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
    taskKPIWeight: 0.012353,
    status: 'proposal'
  },

  {
    id: 13738369,
    name: "[#1021] : system-tests: modify QueueTest#testScaledown.1",
    code: "ENTMQMAAS-417.1",
    preceedingTasks: ["ENTMQMAAS-416.1"],
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
    taskKPIWeight: 0.013126,
    status: 'proposal'
  },

  {
    id: 14738314,
    name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.2",
    code: "ENTMQMAAS-416.2",
    preceedingTasks: ["ENTMQMAAS-417.1"],
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
    kpiInTask: kpiC,
    taskKPIWeight: 0.02351,
    status: 'proposal'
  },

  {
    id: 14738369,
    name: "[#1021] : system-tests: modify QueueTest#testScaledown.2",
    code: "ENTMQMAAS-417.2",
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
    estimateNormalTime: 0.19,
    kpiInTask: kpiB,
    taskKPIWeight: 0.012928,
    status: 'proposal'
  },

  {
    id: 15738369,
    name: "[#1021] : system-tests: modify QueueTest#testScaledown.3",
    code: "ENTMQMAAS-417.3",
    preceedingTasks: ["ENTMQMAAS-416.2", "ENTMQMAAS-417.2"],
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
    taskKPIWeight: 0.00135,
    status: 'proposal'
  },

  {
    id: 13738609,
    name: "[#1034] : system-tests: create test for REST API - address resource required params are missing.1",
    code: "ENTMQMAAS-426.1",
    preceedingTasks: ["ENTMQMAAS-410.1", "ENTMQMAAS-417.3"],
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
    taskKPIWeight: 0.016942,
    status: 'proposal'
  },

  {
    id: 13738628,
    name: "[#1029] : system-tests: modify authentication tests to create multiple address-spaces in one request.1",
    code: "ENTMQMAAS-428.1",
    preceedingTasks: ["ENTMQMAAS-405.1", "ENTMQMAAS-426.1"],
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
    taskKPIWeight: 0.007979,
    status: 'proposal'
  },

  {
    id: 13738631,
    name: `[#1036] : system-tests: create new test for address-space endpoints \\"host\\".1`,
    code: "ENTMQMAAS-431.1",
    preceedingTasks: ["ENTMQMAAS-428.1"],
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
    taskKPIWeight: 0.000736,
    status: 'proposal'
  },

  {
    id: 13738629,
    name: "[#1031] : system-tests: create new test for replace address-space list.1",
    code: "ENTMQMAAS-429.1",
    preceedingTasks: ["ENTMQMAAS-431.1"],
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
    taskKPIWeight: 0.001602,
    status: 'proposal'
  },

  {
    id: 13738634,
    name: "[#1040] : system-tests: create new test that verify that returned restapi routes are reachable.1",
    code: "ENTMQMAAS-434.1",
    preceedingTasks: ["ENTMQMAAS-429.1"],
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
    taskKPIWeight: 0.012461,
    status: 'proposal'
  },

  {
    id: 13737483,
    name: "[#949] : agent: Results count is not set correctly after refresh the page.1",
    code: "ENTMQMAAS-405.1",
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
    taskKPIWeight: 0.02274,
    status: 'proposal'
  },

  {
    id: 13737485,
    name: "[#973] : Configure per-address settings for each address created on broker.1",
    code: "ENTMQMAAS-407.1",
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
    kpiInTask: kpiC,
    taskKPIWeight: 0.019164,
    status: 'proposal'
  },

  {
    id: 13737492,
    name: "Docs: how to manage user permissions.1",
    code: "ENTMQMAAS-410.1",
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
    taskKPIWeight: 0.007322,
    status: 'proposal'
  },

  {
    id: 13737495,
    name: "Docs: document the sign-up process for beta.1",
    code: "ENTMQMAAS-411.1",
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
    taskKPIWeight: 0.018262,
    status: 'proposal'
  },

  {
    id: 14737484,
    name: "[#972] : Make global-max-size parameter configurable via template/plan.2",
    code: "ENTMQMAAS-406.2",
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
    kpiInTask: kpiA,
    taskKPIWeight: 0.022153,
    status: 'proposal'
  },

  {
    id: 13738010,
    name: "[#1009] : Make resync interval in controllers configurable.1",
    code: "ENTMQMAAS-413.1",
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
    kpiInTask: kpiA,
    taskKPIWeight: 0.000421,
    status: 'proposal'
  },

  {
    id: 13738011,
    name: "[#1011] : Separata status check from controller resync.1",
    code: "ENTMQMAAS-414.1",
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
    kpiInTask: kpiA,
    taskKPIWeight: 0.005124,
    status: 'proposal'
  },

  {
    id: 15737484,
    name: "[#972] : Make global-max-size parameter configurable via template/plan.3",
    code: "ENTMQMAAS-406.3",
    preceedingTasks: ["ENTMQMAAS-417.4", "ENTMQMAAS-425.1", "ENTMQMAAS-414.1"],
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
    taskKPIWeight: 0.011526,
    status: 'proposal'
  },

  {
    id: 14738010,
    name: "[#1009] : Make resync interval in controllers configurable.2",
    code: "ENTMQMAAS-413.2",
    preceedingTasks: ["ENTMQMAAS-406.3"],
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
    kpiInTask: kpiC,
    taskKPIWeight: 0.016945,
    status: 'proposal'
  },

  {
    id: 14738011,
    name: "[#1011] : Separata status check from controller resync.2",
    code: "ENTMQMAAS-414.2",
    preceedingTasks: ["ENTMQMAAS-413.2"],
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
    taskKPIWeight: 0.010459,
    status: 'proposal'
  },

  {
    id: 13739606,
    name: "[#1017] : Events sent to address of type queue not delivered after a while.1",
    code: "ENTMQMAAS-435.1",
    preceedingTasks: ["ENTMQMAAS-414.2"],
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
    kpiInTask: kpiC,
    taskKPIWeight: 0.016676,
    status: 'proposal'
  },

  {
    id: 15738314,
    name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.3",
    code: "ENTMQMAAS-416.3",
    preceedingTasks: ["ENTMQMAAS-406.2", "ENTMQMAAS-434.1"],
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
    taskKPIWeight: 0.007805,
    status: 'proposal'
  },

  {
    id: 13738605,
    name: "[#1026] : System-tests: create test for REST API - GET | /v1/addresses/myspace/:name .1",
    code: "ENTMQMAAS-422.1",
    preceedingTasks: ["ENTMQMAAS-407.1", "ENTMQMAAS-411.1", "ENTMQMAAS-416.3"],
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
    taskKPIWeight: 0.003262,
    status: 'proposal'
  },

  {
    id: 13738610,
    name: "[#1035] : system-tests: create set of tests for REST API - address resource optional params are missing.1",
    code: "ENTMQMAAS-427.1",
    preceedingTasks: ["ENTMQMAAS-413.1", "ENTMQMAAS-422.1"],
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
    taskKPIWeight: 0.015043,
    status: 'proposal'
  },

  {
    id: 13738608,
    name: "[#1033] : System-tests: create test for REST API - GET /v1/schema.1",
    code: "ENTMQMAAS-425.1",
    preceedingTasks: ["ENTMQMAAS-427.1"],
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
    taskKPIWeight: 0.010486,
    status: 'proposal'
  },

  {
    id: 13738607,
    name: "[#1028] : System-tests: create test for REST API - DELETE | /v1/addresses/myspace.1",
    code: "ENTMQMAAS-424.1",
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
    estimateNormalTime: 0.75,
    kpiInTask: kpiC,
    taskKPIWeight: 0.002393,
    status: 'proposal'
  },

  {
    id: 14737485,
    name: "[#973] : Configure per-address settings for each address created on broker.2",
    code: "ENTMQMAAS-407.2",
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
    taskKPIWeight: 0.006916,
    status: 'proposal'
  },

  {
    id: 16738369,
    name: "[#1021] : system-tests: modify QueueTest#testScaledown.4",
    code: "ENTMQMAAS-417.4",
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
    estimateNormalTime: 0.77,
    kpiInTask: kpiA,
    taskKPIWeight: 0.003264,
    status: 'proposal'
  },

  {
    id: 14738609,
    name: "[#1034] : system-tests: create test for REST API - address resource required params are missing.2",
    code: "ENTMQMAAS-426.2",
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
    estimateNormalTime: 0.77,
    kpiInTask: kpiC,
    taskKPIWeight: 0.023465,
    status: 'proposal'
  },

  {
    id: 14738628,
    name: "[#1029] : system-tests: modify authentication tests to create multiple address-spaces in one request.2",
    code: "ENTMQMAAS-428.2",
    preceedingTasks: ["ENTMQMAAS-435.1", "ENTMQMAAS-426.2"],
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
    kpiInTask: kpiA,
    taskKPIWeight: 0.007484,
    status: 'proposal'
  },

  {
    id: 14738631,
    name: `[#1036] : system-tests: create new test for address-space endpoints \\"host\\".2`,
    code: "ENTMQMAAS-431.2",
    preceedingTasks: ["ENTMQMAAS-424.1", "ENTMQMAAS-428.2"],
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
    kpiInTask: kpiA,
    taskKPIWeight: 0.003569,
    status: 'proposal'
  },

  {
    id: 14738629,
    name: "[#1031] : system-tests: create new test for replace address-space list.2",
    code: "ENTMQMAAS-429.2",
    preceedingTasks: ["ENTMQMAAS-431.2"],
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
    taskKPIWeight: 0.022721,
    status: 'proposal'
  },

  {
    id: 14738634,
    name: "[#1040] : system-tests: create new test that verify that returned restapi routes are reachable.2",
    code: "ENTMQMAAS-434.2",
    preceedingTasks: ["ENTMQMAAS-429.2"],
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
    kpiInTask: kpiA,
    taskKPIWeight: 0.001893,
    status: 'proposal'
  },

  {
    id: 16738314,
    name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.4",
    code: "ENTMQMAAS-416.4",
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
    estimateNormalTime: 0.65,
    kpiInTask: kpiB,
    taskKPIWeight: 0.001093,
    status: 'proposal'
  },

  {
    id: 17738369,
    name: "[#1021] : system-tests: modify QueueTest#testScaledown.5",
    code: "ENTMQMAAS-417.5",
    preceedingTasks: ["ENTMQMAAS-413.3", "ENTMQMAAS-407.2", "ENTMQMAAS-434.2"],
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
    taskKPIWeight: 0.007557,
    status: 'proposal'
  },

  {
    id: 15738609,
    name: "[#1034] : system-tests: create test for REST API - address resource required params are missing.3",
    code: "ENTMQMAAS-426.3",
    preceedingTasks: ["ENTMQMAAS-417.5"],
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
    taskKPIWeight: 0.003422,
    status: 'proposal'
  },

  {
    id: 15738631,
    name: `[#1036] : system-tests: create new test for address-space endpoints \\"host\\".3`,
    code: "ENTMQMAAS-431.3",
    preceedingTasks: ["ENTMQMAAS-426.3"],
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
    taskKPIWeight: 0.006725,
    status: 'proposal'
  },

  {
    id: 15738629,
    name: "[#1031] : system-tests: create new test for replace address-space list.3",
    code: "ENTMQMAAS-429.3",
    preceedingTasks: ["ENTMQMAAS-431.3"],
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
    taskKPIWeight: 0.017634,
    status: 'proposal'
  },

  {
    id: 15738634,
    name: "[#1040] : system-tests: create new test that verify that returned restapi routes are reachable.3",
    code: "ENTMQMAAS-434.3",
    preceedingTasks: ["ENTMQMAAS-429.3"],
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
    taskKPIWeight: 0.024153,
    status: 'proposal'
  },

  {
    id: 14737492,
    name: "Docs: how to manage user permissions.2",
    code: "ENTMQMAAS-410.2",
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
    taskKPIWeight: 0.015338,
    status: 'proposal'
  },

  {
    id: 16737484,
    name: "[#972] : Make global-max-size parameter configurable via template/plan.4",
    code: "ENTMQMAAS-406.4",
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
    estimateNormalTime: 0.84,
    kpiInTask: kpiA,
    taskKPIWeight: 0.004889,
    status: 'proposal'
  },

  {
    id: 15738010,
    name: "[#1009] : Make resync interval in controllers configurable.3",
    code: "ENTMQMAAS-413.3",
    preceedingTasks: ["ENTMQMAAS-406.4"],
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
    taskKPIWeight: 0.009466,
    status: 'proposal'
  },

  {
    id: 15738011,
    name: "[#1011] : Separata status check from controller resync.3",
    code: "ENTMQMAAS-414.3",
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
    estimateNormalTime: 0.84,
    kpiInTask: kpiC,
    taskKPIWeight: 0.017162,
    status: 'proposal'
  },

  {
    id: 14739606,
    name: "[#1017] : Events sent to address of type queue not delivered after a while.2",
    code: "ENTMQMAAS-435.2",
    preceedingTasks: ["ENTMQMAAS-416.4", "ENTMQMAAS-434.3", "ENTMQMAAS-414.3"],
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
    taskKPIWeight: 0.003788,
    status: 'proposal'
  },

  {
    id: 17737484,
    name: "[#972] : Make global-max-size parameter configurable via template/plan.5",
    code: "ENTMQMAAS-406.5",
    preceedingTasks: ["ENTMQMAAS-435.2"],
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
    kpiInTask: kpiC,
    taskKPIWeight: 0.024777,
    status: 'proposal'
  },

  {
    id: 16738010,
    name: "[#1009] : Make resync interval in controllers configurable.4",
    code: "ENTMQMAAS-413.4",
    preceedingTasks: ["ENTMQMAAS-406.5"],
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
    kpiInTask: kpiB,
    taskKPIWeight: 0.020798,
    status: 'proposal'
  },

  {
    id: 16738011,
    name: "[#1011] : Separata status check from controller resync.4",
    code: "ENTMQMAAS-414.4",
    preceedingTasks: ["ENTMQMAAS-413.4"],
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
    kpiInTask: kpiC,
    taskKPIWeight: 0.004819,
    status: 'proposal'
  },

  {
    id: 15739606,
    name: "[#1017] : Events sent to address of type queue not delivered after a while.3",
    code: "ENTMQMAAS-435.3",
    preceedingTasks: ["ENTMQMAAS-426.4", "ENTMQMAAS-414.4"],
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
    taskKPIWeight: 0.004506,
    status: 'proposal'
  },

  {
    id: 13740288,
    name: "[#1079] : standard-controller: is trying to connect to router which was already killed.1",
    code: "ENTMQMAAS-450.1",
    preceedingTasks: ["ENTMQMAAS-435.3"],
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
    kpiInTask: kpiB,
    taskKPIWeight: 0.01304,
    status: 'proposal'
  },

  {
    id: 17738314,
    name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.5",
    code: "ENTMQMAAS-416.5",
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
    kpiInTask: kpiC,
    taskKPIWeight: 0.009172,
    status: 'proposal'
  },

  {
    id: 13740031,
    name: "[#1073] : system-tests: Create test for check if size of messages was exceeded.1",
    code: "ENTMQMAAS-438.1",
    preceedingTasks: ["ENTMQMAAS-416.5"],
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
    taskKPIWeight: 0.006256,
    status: 'proposal'
  },

  {
    id: 18738369,
    name: "[#1021] : system-tests: modify QueueTest#testScaledown.6",
    code: "ENTMQMAAS-417.6",
    preceedingTasks: ["ENTMQMAAS-410.2"],
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
    taskKPIWeight: 0.016527,
    status: 'proposal'
  },

  {
    id: 16738609,
    name: "[#1034] : system-tests: create test for REST API - address resource required params are missing.4",
    code: "ENTMQMAAS-426.4",
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
    estimateNormalTime: 0.39,
    kpiInTask: kpiA,
    taskKPIWeight: 0.020868,
    status: 'proposal'
  },

  {
    id: 16738631,
    name: `[#1036] : system-tests: create new test for address-space endpoints \\"host\\".4`,
    code: "ENTMQMAAS-431.4",
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
    estimateNormalTime: 0.39,
    kpiInTask: kpiB,
    taskKPIWeight: 0.007978,
    status: 'proposal'
  },

  {
    id: 16738629,
    name: "[#1031] : system-tests: create new test for replace address-space list.4",
    code: "ENTMQMAAS-429.4",
    preceedingTasks: ["ENTMQMAAS-450.1", "ENTMQMAAS-431.4"],
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
    kpiInTask: kpiC,
    taskKPIWeight: 0.007582,
    status: 'proposal'
  },

  {
    id: 16738634,
    name: "[#1040] : system-tests: create new test that verify that returned restapi routes are reachable.4",
    code: "ENTMQMAAS-434.4",
    preceedingTasks: ["ENTMQMAAS-429.4"],
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
    kpiInTask: kpiB,
    taskKPIWeight: 0.012508,
    status: 'proposal'
  },

  {
    id: 18738314,
    name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.6",
    code: "ENTMQMAAS-416.6",
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
    estimateNormalTime: 0.77,
    kpiInTask: kpiC,
    taskKPIWeight: 0.005194,
    status: 'proposal'
  },

  {
    id: 14740031,
    name: "[#1073] : system-tests: Create test for check if size of messages was exceeded.2",
    code: "ENTMQMAAS-438.2",
    preceedingTasks: ["ENTMQMAAS-416.6"],
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
    kpiInTask: kpiB,
    taskKPIWeight: 0.011728,
    status: 'proposal'
  },

  {
    id: 19738369,
    name: "[#1021] : system-tests: modify QueueTest#testScaledown.7",
    code: "ENTMQMAAS-417.7",
    preceedingTasks: ["ENTMQMAAS-438.1", "ENTMQMAAS-434.4"],
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
    estimateNormalTime: 0.67,
    kpiInTask: kpiA,
    taskKPIWeight: 0.004847,
    status: 'proposal'
  },

  {
    id: 17738609,
    name: "[#1034] : system-tests: create test for REST API - address resource required params are missing.5",
    code: "ENTMQMAAS-426.5",
    preceedingTasks: ["ENTMQMAAS-417.7"],
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
    estimateNormalTime: 0.67,
    kpiInTask: kpiC,
    taskKPIWeight: 0.008952,
    status: 'proposal'
  },

  {
    id: 17738631,
    name: `[#1036] : system-tests: create new test for address-space endpoints \\"host\\".5`,
    code: "ENTMQMAAS-431.5",
    preceedingTasks: ["ENTMQMAAS-426.5"],
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
    estimateNormalTime: 0.67,
    kpiInTask: kpiB,
    taskKPIWeight: 0.012973,
    status: 'proposal'
  },

  {
    id: 17738629,
    name: "[#1031] : system-tests: create new test for replace address-space list.5",
    code: "ENTMQMAAS-429.5",
    preceedingTasks: ["ENTMQMAAS-431.5"],
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
    estimateNormalTime: 0.67,
    kpiInTask: kpiC,
    taskKPIWeight: 0.020819,
    status: 'proposal'
  },

  {
    id: 17738634,
    name: "[#1040] : system-tests: create new test that verify that returned restapi routes are reachable.5",
    code: "ENTMQMAAS-434.5",
    preceedingTasks: ["ENTMQMAAS-429.5"],
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
    estimateNormalTime: 0.67,
    kpiInTask: kpiB,
    taskKPIWeight: 0.003276,
    status: 'proposal'
  },

  {
    id: 20738369,
    name: "[#1021] : system-tests: modify QueueTest#testScaledown.8",
    code: "ENTMQMAAS-417.8",
    preceedingTasks: ["ENTMQMAAS-413.5", "ENTMQMAAS-438.2", "ENTMQMAAS-434.5"],
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
    estimateNormalTime: 0.15,
    kpiInTask: kpiA,
    taskKPIWeight: 0.014287,
    status: 'proposal'
  },

  {
    id: 18738609,
    name: "[#1034] : system-tests: create test for REST API - address resource required params are missing.6",
    code: "ENTMQMAAS-426.6",
    preceedingTasks: ["ENTMQMAAS-417.8"],
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
    estimateNormalTime: 0.15,
    kpiInTask: kpiB,
    taskKPIWeight: 0.008401,
    status: 'proposal'
  },

  {
    id: 18738631,
    name: `[#1036] : system-tests: create new test for address-space endpoints \\"host\\".6`,
    code: "ENTMQMAAS-431.6",
    preceedingTasks: ["ENTMQMAAS-426.6"],
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
    estimateNormalTime: 0.15,
    kpiInTask: kpiB,
    taskKPIWeight: 0.007175,
    status: 'proposal'
  },

  {
    id: 18738634,
    name: "[#1040] : system-tests: create new test that verify that returned restapi routes are reachable.6",
    code: "ENTMQMAAS-434.6",
    preceedingTasks: ["ENTMQMAAS-431.6"],
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
    estimateNormalTime: 0.15,
    kpiInTask: kpiA,
    taskKPIWeight: 0.015089,
    status: 'proposal'
  },

  {
    id: 19738314,
    name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.7",
    code: "ENTMQMAAS-416.7",
    preceedingTasks: ["ENTMQMAAS-434.6", "ENTMQMAAS-414.5"],
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
    kpiInTask: kpiB,
    taskKPIWeight: 0.00769,
    status: 'proposal'
  },

  {
    id: 15737485,
    name: "[#973] : Configure per-address settings for each address created on broker.3",
    code: "ENTMQMAAS-407.3",
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
    kpiInTask: kpiB,
    taskKPIWeight: 0.001166,
    status: 'proposal'
  },

  {
    id: 16737485,
    name: "[#973] : Configure per-address settings for each address created on broker.4",
    code: "ENTMQMAAS-407.4",
    preceedingTasks: ["ENTMQMAAS-416.8", "ENTMQMAAS-407.3"],
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
    estimateNormalTime: 0.17,
    kpiInTask: kpiB,
    taskKPIWeight: 0.018254,
    status: 'proposal'
  },

  {
    id: 17738010,
    name: "[#1009] : Make resync interval in controllers configurable.5",
    code: "ENTMQMAAS-413.5",
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
    estimateNormalTime: 2.12,
    kpiInTask: kpiA,
    taskKPIWeight: 0.024776,
    status: 'proposal'
  },

  {
    id: 17738011,
    name: "[#1011] : Separata status check from controller resync.5",
    code: "ENTMQMAAS-414.5",
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
    estimateNormalTime: 2.12,
    kpiInTask: kpiA,
    taskKPIWeight: 0.009416,
    status: 'proposal'
  },

  {
    id: 16739606,
    name: "[#1017] : Events sent to address of type queue not delivered after a while.4",
    code: "ENTMQMAAS-435.4",
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
    estimateNormalTime: 2.12,
    kpiInTask: kpiB,
    taskKPIWeight: 0.016948,
    status: 'proposal'
  },

  {
    id: 14740288,
    name: "[#1079] : standard-controller: is trying to connect to router which was already killed.2",
    code: "ENTMQMAAS-450.2",
    preceedingTasks: ["ENTMQMAAS-435.4"],
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
    taskKPIWeight: 0.014298,
    status: 'proposal'
  },

  {
    id: 13740575,
    name: "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.1",
    code: "ENTMQMAAS-452.1",
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
    estimateNormalTime: 2.12,
    kpiInTask: kpiA,
    taskKPIWeight: 0.010646,
    status: 'proposal'
  },

  {
    id: 21738369,
    name: "[#1021] : system-tests: modify QueueTest#testScaledown.9",
    code: "ENTMQMAAS-417.9",
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
    estimateNormalTime: 3.59,
    kpiInTask: kpiC,
    taskKPIWeight: 0.009777,
    status: 'proposal'
  },

  {
    id: 22738369,
    name: "[#1021] : system-tests: modify QueueTest#testScaledown.10",
    code: "ENTMQMAAS-417.10",
    preceedingTasks: ["ENTMQMAAS-407.4", "ENTMQMAAS-452.1", "ENTMQMAAS-417.9"],
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
    estimateNormalTime: 0.2,
    kpiInTask: kpiB,
    taskKPIWeight: 0.002217,
    status: 'proposal'
  },

  {
    id: 13742584,
    name: "[#1123] :  system-tests: new test for auto scaleup after manual scaledown.1",
    code: "ENTMQMAAS-466.1",
    preceedingTasks: ["ENTMQMAAS-417.10"],
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
    estimateNormalTime: 0.2,
    kpiInTask: kpiB,
    taskKPIWeight: 0.001239,
    status: 'proposal'
  },

  {
    id: 20738314,
    name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.8",
    code: "ENTMQMAAS-416.8",
    preceedingTasks: ["ENTMQMAAS-450.2"],
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
    kpiInTask: kpiC,
    taskKPIWeight: 0.022448,
    status: 'proposal'
  },

  {
    id: 13742276,
    name: "[#1115] : New system-tests for websocket.1",
    code: "ENTMQMAAS-455.1",
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
    estimateNormalTime: 1.1,
    kpiInTask: kpiB,
    taskKPIWeight: 0.013091,
    status: 'proposal'
  },

  {
    id: 23738369,
    name: "[#1021] : system-tests: modify QueueTest#testScaledown.11",
    code: "ENTMQMAAS-417.11",
    preceedingTasks: ["ENTMQMAAS-455.1"],
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
    estimateNormalTime: 1.27,
    kpiInTask: kpiC,
    taskKPIWeight: 0.022044,
    status: 'proposal'
  },

  {
    id: 14742584,
    name: "[#1123] :  system-tests: new test for auto scaleup after manual scaledown.2",
    code: "ENTMQMAAS-466.2",
    preceedingTasks: ["ENTMQMAAS-417.11"],
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
    estimateNormalTime: 1.27,
    kpiInTask: kpiA,
    taskKPIWeight: 0.023606,
    status: 'proposal'
  },

  {
    id: 13742677,
    name: "[#1124] : system-tests: review of list of disabled tests from March and create new one for April.1",
    code: "ENTMQMAAS-469.1",
    preceedingTasks: ["ENTMQMAAS-466.2"],
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
    estimateNormalTime: 1.27,
    kpiInTask: kpiA,
    taskKPIWeight: 0.005547,
    status: 'proposal'
  },

  {
    id: 13742678,
    name: "system-tests: unclosed archives exception in Jenkins when core-dump is stored.1",
    code: "ENTMQMAAS-470.1",
    preceedingTasks: ["ENTMQMAAS-469.1"],
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
    estimateNormalTime: 1.27,
    kpiInTask: kpiA,
    taskKPIWeight: 0.009317,
    status: 'proposal'
  },

  {
    id: 13742679,
    name: "[#1128] : system-tests: Remove logs collecting for pods/statefull-sets.1",
    code: "ENTMQMAAS-471.1",
    preceedingTasks: ["ENTMQMAAS-413.6", "ENTMQMAAS-470.1"],
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
    estimateNormalTime: 1.27,
    kpiInTask: kpiB,
    taskKPIWeight: 0.000838,
    status: 'proposal'
  },

  {
    id: 13742683,
    name: "[#1125] : system-tests: Rewrite tests to use Dependency injection.1",
    code: "ENTMQMAAS-475.1",
    preceedingTasks: ["ENTMQMAAS-416.9", "ENTMQMAAS-471.1"],
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
    estimateNormalTime: 1.27,
    kpiInTask: kpiA,
    taskKPIWeight: 0.018182,
    status: 'proposal'
  },

  {
    id: 14742677,
    name: "[#1124] : system-tests: review of list of disabled tests from March and create new one for April.2",
    code: "ENTMQMAAS-469.2",
    preceedingTasks: ["ENTMQMAAS-414.6", "ENTMQMAAS-475.1", "ENTMQMAAS-455.2"],
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
    estimateNormalTime: 0.79,
    kpiInTask: kpiB,
    taskKPIWeight: 0.016042,
    status: 'proposal'
  },

  {
    id: 14742678,
    name: "system-tests: unclosed archives exception in Jenkins when core-dump is stored.2",
    code: "ENTMQMAAS-470.2",
    preceedingTasks: ["ENTMQMAAS-469.2"],
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
    estimateNormalTime: 0.79,
    kpiInTask: kpiC,
    taskKPIWeight: 0.006579,
    status: 'proposal'
  },

  {
    id: 14742679,
    name: "[#1128] : system-tests: Remove logs collecting for pods/statefull-sets.2",
    code: "ENTMQMAAS-471.2",
    preceedingTasks: ["ENTMQMAAS-474.1", "ENTMQMAAS-470.2"],
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
    estimateNormalTime: 0.79,
    kpiInTask: kpiB,
    taskKPIWeight: 0.007941,
    status: 'proposal'
  },

  {
    id: 14742683,
    name: "[#1125] : system-tests: Rewrite tests to use Dependency injection.2",
    code: "ENTMQMAAS-475.2",
    preceedingTasks: ["ENTMQMAAS-471.2"],
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
    estimateNormalTime: 0.79,
    kpiInTask: kpiB,
    taskKPIWeight: 0.007002,
    status: 'proposal'
  },

  {
    id: 21738314,
    name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.9",
    code: "ENTMQMAAS-416.9",
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
    estimateNormalTime: 1.85,
    kpiInTask: kpiC,
    taskKPIWeight: 0.013098,
    status: 'proposal'
  },

  {
    id: 14742276,
    name: "[#1115] : New system-tests for websocket.2",
    code: "ENTMQMAAS-455.2",
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
    estimateNormalTime: 1.85,
    kpiInTask: kpiC,
    taskKPIWeight: 0.012851,
    status: 'proposal'
  },

  {
    id: 13742682,
    name: "[#1126] : system-tests: use multi-asserts instead of single asserts.1",
    code: "ENTMQMAAS-474.1",
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
    estimateNormalTime: 1.85,
    kpiInTask: kpiC,
    taskKPIWeight: 0.023684,
    status: 'proposal'
  },

  {
    id: 13742680,
    name: "[#1127] : system-tests: Use ENUM instead of string tags.1",
    code: "ENTMQMAAS-472.1",
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
    estimateNormalTime: 1.85,
    kpiInTask: kpiC,
    taskKPIWeight: 0.015423,
    status: 'proposal'
  },

  {
    id: 22738314,
    name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.10",
    code: "ENTMQMAAS-416.10",
    preceedingTasks: ["ENTMQMAAS-435.5", "ENTMQMAAS-475.2", "ENTMQMAAS-472.1"],
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
    estimateNormalTime: 0.16,
    kpiInTask: kpiB,
    taskKPIWeight: 0.01252,
    status: 'proposal'
  },

  {
    id: 15742276,
    name: "[#1115] : New system-tests for websocket.3",
    code: "ENTMQMAAS-455.3",
    preceedingTasks: ["ENTMQMAAS-416.10"],
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
    estimateNormalTime: 0.16,
    kpiInTask: kpiB,
    taskKPIWeight: 0.024294,
    status: 'proposal'
  },

  {
    id: 14742680,
    name: "[#1127] : system-tests: Use ENUM instead of string tags.2",
    code: "ENTMQMAAS-472.2",
    preceedingTasks: ["ENTMQMAAS-455.3"],
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
    estimateNormalTime: 0.16,
    kpiInTask: kpiC,
    taskKPIWeight: 0.018012,
    status: 'proposal'
  },

  {
    id: 23738314,
    name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.11",
    code: "ENTMQMAAS-416.11",
    preceedingTasks: ["ENTMQMAAS-472.2", "ENTMQMAAS-407.5"],
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
    estimateNormalTime: 0.49,
    kpiInTask: kpiB,
    taskKPIWeight: 0.016494,
    status: 'proposal'
  },

  {
    id: 16742276,
    name: "[#1115] : New system-tests for websocket.4",
    code: "ENTMQMAAS-455.4",
    preceedingTasks: ["ENTMQMAAS-450.3", "ENTMQMAAS-416.11"],
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
    estimateNormalTime: 0.49,
    kpiInTask: kpiA,
    taskKPIWeight: 0.02086,
    status: 'proposal'
  },

  {
    id: 15742677,
    name: "[#1124] : system-tests: review of list of disabled tests from March and create new one for April.3",
    code: "ENTMQMAAS-469.3",
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
    estimateNormalTime: 1.53,
    kpiInTask: kpiA,
    taskKPIWeight: 0.000245,
    status: 'proposal'
  },

  {
    id: 15742678,
    name: "system-tests: unclosed archives exception in Jenkins when core-dump is stored.3",
    code: "ENTMQMAAS-470.3",
    preceedingTasks: ["ENTMQMAAS-469.3"],
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
    estimateNormalTime: 1.53,
    kpiInTask: kpiB,
    taskKPIWeight: 0.008599,
    status: 'proposal'
  },

  {
    id: 15742683,
    name: "[#1125] : system-tests: Rewrite tests to use Dependency injection.3",
    code: "ENTMQMAAS-475.3",
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
    estimateNormalTime: 1.53,
    kpiInTask: kpiB,
    taskKPIWeight: 0.01778,
    status: 'proposal'
  },

  {
    id: 24738314,
    name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.12",
    code: "ENTMQMAAS-416.12",
    preceedingTasks: ["ENTMQMAAS-470.3"],
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
    estimateNormalTime: 1.02,
    kpiInTask: kpiA,
    taskKPIWeight: 0.022663,
    status: 'proposal'
  },

  {
    id: 13746088,
    name: "[#1159] : System-tests: Improve waiting for webItems.1",
    code: "ENTMQMAAS-483.1",
    preceedingTasks: ["ENTMQMAAS-452.2", "ENTMQMAAS-416.12"],
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
    estimateNormalTime: 1.02,
    kpiInTask: kpiB,
    taskKPIWeight: 0.018149,
    status: 'proposal'
  },

  {
    id: 16742677,
    name: "[#1124] : system-tests: review of list of disabled tests from March and create new one for April.4",
    code: "ENTMQMAAS-469.4",
    preceedingTasks: ["ENTMQMAAS-475.3", "ENTMQMAAS-483.1"],
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
    estimateNormalTime: 1.24,
    kpiInTask: kpiC,
    taskKPIWeight: 0.019299,
    status: 'proposal'
  },

  {
    id: 16742678,
    name: "system-tests: unclosed archives exception in Jenkins when core-dump is stored.4",
    code: "ENTMQMAAS-470.4",
    preceedingTasks: ["ENTMQMAAS-457.1", "ENTMQMAAS-469.4"],
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
    estimateNormalTime: 1.24,
    kpiInTask: kpiC,
    taskKPIWeight: 0.006475,
    status: 'proposal'
  },

  {
    id: 25738314,
    name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.13",
    code: "ENTMQMAAS-416.13",
    preceedingTasks: ["ENTMQMAAS-470.4", "ENTMQMAAS-463.1"],
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
    estimateNormalTime: 2.58,
    kpiInTask: kpiA,
    taskKPIWeight: 0.013533,
    status: 'proposal'
  },

  {
    id: 17742678,
    name: "system-tests: unclosed archives exception in Jenkins when core-dump is stored.5",
    code: "ENTMQMAAS-470.5",
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
    estimateNormalTime: 2.51,
    kpiInTask: kpiA,
    taskKPIWeight: 0.019742,
    status: 'proposal'
  },

  {
    id: 18738010,
    name: "[#1009] : Make resync interval in controllers configurable.6",
    code: "ENTMQMAAS-413.6",
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
    estimateNormalTime: 3.16,
    kpiInTask: kpiB,
    taskKPIWeight: 0.015438,
    status: 'proposal'
  },

  {
    id: 18738011,
    name: "[#1011] : Separata status check from controller resync.6",
    code: "ENTMQMAAS-414.6",
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
    estimateNormalTime: 3.16,
    kpiInTask: kpiA,
    taskKPIWeight: 0.000686,
    status: 'proposal'
  },

  {
    id: 17739606,
    name: "[#1017] : Events sent to address of type queue not delivered after a while.5",
    code: "ENTMQMAAS-435.5",
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
    estimateNormalTime: 3.16,
    kpiInTask: kpiB,
    taskKPIWeight: 0.014,
    status: 'proposal'
  },

  {
    id: 15740288,
    name: "[#1079] : standard-controller: is trying to connect to router which was already killed.3",
    code: "ENTMQMAAS-450.3",
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
    estimateNormalTime: 3.16,
    kpiInTask: kpiB,
    taskKPIWeight: 0.017792,
    status: 'proposal'
  },

  {
    id: 14740575,
    name: "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.2",
    code: "ENTMQMAAS-452.2",
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
    estimateNormalTime: 3.16,
    kpiInTask: kpiB,
    taskKPIWeight: 0.007901,
    status: 'proposal'
  },

  {
    id: 13742576,
    name: "[#1117] : Response code/payload of AddressController REST API POST/DELETE operations.1",
    code: "ENTMQMAAS-462.1",
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
    estimateNormalTime: 3.16,
    kpiInTask: kpiB,
    taskKPIWeight: 0.004926,
    status: 'proposal'
  },

  {
    id: 13742577,
    name: "[#1091] : Endpoints declaratively specified should be checked in status.1",
    code: "ENTMQMAAS-463.1",
    preceedingTasks: ["ENTMQMAAS-462.1"],
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
    kpiInTask: kpiB,
    taskKPIWeight: 0.003633,
    status: 'proposal'
  },

  {
    id: 13742583,
    name: "Install EnMasse on Bosch OpenShift Dedicated cluster.1",
    code: "ENTMQMAAS-465.1",
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
    estimateNormalTime: 3.16,
    kpiInTask: kpiC,
    taskKPIWeight: 0.019093,
    status: 'proposal'
  },

  {
    id: 17737485,
    name: "[#973] : Configure per-address settings for each address created on broker.5",
    code: "ENTMQMAAS-407.5",
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
    estimateNormalTime: 7.27,
    kpiInTask: kpiB,
    taskKPIWeight: 0.003267,
    status: 'proposal'
  },

  {
    id: 13742571,
    name: `[#1096] : agent: use \\"direction\\" attribute instead of \\"dir\\" for autoLinks.1`,
    code: "ENTMQMAAS-457.1",
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
    estimateNormalTime: 7.27,
    kpiInTask: kpiA,
    taskKPIWeight: 0.012396,
    status: 'proposal'
  },

  {
    id: 13742573,
    name: "[#1084] : agent container: high load and memory issue with many addresses.1",
    code: "ENTMQMAAS-459.1",
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
    estimateNormalTime: 7.27,
    kpiInTask: kpiB,
    taskKPIWeight: 0.008551,
    status: 'proposal'
  },

  {
    id: 13742572,
    name: "[#1097] : When creating many addresses at the same time, a few have missing autolinks.1",
    code: "ENTMQMAAS-458.1",
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
    estimateNormalTime: 7.27,
    kpiInTask: kpiA,
    taskKPIWeight: 0.000624,
    status: 'proposal'
  },

  {
    id: 19738010,
    name: "[#1009] : Make resync interval in controllers configurable.7",
    code: "ENTMQMAAS-413.7",
    preceedingTasks: ["ENTMQMAAS-416.13", "ENTMQMAAS-470.5", "ENTMQMAAS-465.1", "ENTMQMAAS-459.1"],
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
    taskKPIWeight: 0.017327,
    status: 'proposal'
  },

  {
    id: 19738011,
    name: "[#1011] : Separata status check from controller resync.7",
    code: "ENTMQMAAS-414.7",
    preceedingTasks: ["ENTMQMAAS-413.7"],
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
    taskKPIWeight: 0.004473,
    status: 'proposal'
  },

  {
    id: 18739606,
    name: "[#1017] : Events sent to address of type queue not delivered after a while.6",
    code: "ENTMQMAAS-435.6",
    preceedingTasks: ["ENTMQMAAS-414.7"],
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
    kpiInTask: kpiC,
    taskKPIWeight: 0.01248,
    status: 'proposal'
  },

  {
    id: 16740288,
    name: "[#1079] : standard-controller: is trying to connect to router which was already killed.4",
    code: "ENTMQMAAS-450.4",
    preceedingTasks: ["ENTMQMAAS-435.6"],
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
    kpiInTask: kpiC,
    taskKPIWeight: 0.011604,
    status: 'proposal'
  },

  {
    id: 15740575,
    name: "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.3",
    code: "ENTMQMAAS-452.3",
    preceedingTasks: ["ENTMQMAAS-450.4"],
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
    kpiInTask: kpiC,
    taskKPIWeight: 0.019545,
    status: 'proposal'
  },

  {
    id: 14742576,
    name: "[#1117] : Response code/payload of AddressController REST API POST/DELETE operations.2",
    code: "ENTMQMAAS-462.2",
    preceedingTasks: ["ENTMQMAAS-452.3"],
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
    kpiInTask: kpiA,
    taskKPIWeight: 0.008797,
    status: 'proposal'
  },

  {
    id: 14742577,
    name: "[#1091] : Endpoints declaratively specified should be checked in status.2",
    code: "ENTMQMAAS-463.2",
    preceedingTasks: ["ENTMQMAAS-462.2"],
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
    kpiInTask: kpiC,
    taskKPIWeight: 0.017585,
    status: 'proposal'
  },

  {
    id: 20738010,
    name: "[#1009] : Make resync interval in controllers configurable.8",
    code: "ENTMQMAAS-413.8",
    preceedingTasks: ["ENTMQMAAS-458.1", "ENTMQMAAS-463.2"],
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
    estimateNormalTime: 1.91,
    kpiInTask: kpiB,
    taskKPIWeight: 0.009052,
    status: 'proposal'
  },

  {
    id: 20738011,
    name: "[#1011] : Separata status check from controller resync.8",
    code: "ENTMQMAAS-414.8",
    preceedingTasks: ["ENTMQMAAS-413.8"],
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
    estimateNormalTime: 1.91,
    kpiInTask: kpiC,
    taskKPIWeight: 0.023801,
    status: 'proposal'
  },

  {
    id: 19739606,
    name: "[#1017] : Events sent to address of type queue not delivered after a while.7",
    code: "ENTMQMAAS-435.7",
    preceedingTasks: ["ENTMQMAAS-414.8"],
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
    estimateNormalTime: 1.91,
    kpiInTask: kpiC,
    taskKPIWeight: 0.011205,
    status: 'proposal'
  },

  {
    id: 17740288,
    name: "[#1079] : standard-controller: is trying to connect to router which was already killed.5",
    code: "ENTMQMAAS-450.5",
    preceedingTasks: ["ENTMQMAAS-435.7"],
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
    estimateNormalTime: 1.91,
    kpiInTask: kpiC,
    taskKPIWeight: 0.022385,
    status: 'proposal'
  },

  {
    id: 16740575,
    name: "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.4",
    code: "ENTMQMAAS-452.4",
    preceedingTasks: ["ENTMQMAAS-450.5"],
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
    estimateNormalTime: 1.91,
    kpiInTask: kpiB,
    taskKPIWeight: 0.01785,
    status: 'proposal'
  },

  {
    id: 15742576,
    name: "[#1117] : Response code/payload of AddressController REST API POST/DELETE operations.3",
    code: "ENTMQMAAS-462.3",
    preceedingTasks: ["ENTMQMAAS-452.4"],
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
    estimateNormalTime: 1.91,
    kpiInTask: kpiA,
    taskKPIWeight: 0.00016,
    status: 'proposal'
  },

  {
    id: 15742577,
    name: "[#1091] : Endpoints declaratively specified should be checked in status.3",
    code: "ENTMQMAAS-463.3",
    preceedingTasks: ["ENTMQMAAS-462.3"],
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
    estimateNormalTime: 1.91,
    kpiInTask: kpiA,
    taskKPIWeight: 0.02159,
    status: 'proposal'
  },

  {
    id: 18737485,
    name: "[#973] : Configure per-address settings for each address created on broker.6",
    code: "ENTMQMAAS-407.6",
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
    estimateNormalTime: 6.1,
    kpiInTask: kpiB,
    taskKPIWeight: 0.02399,
    status: 'proposal'
  },

  {
    id: 14742572,
    name: "[#1097] : When creating many addresses at the same time, a few have missing autolinks.2",
    code: "ENTMQMAAS-458.2",
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
    estimateNormalTime: 6.1,
    kpiInTask: kpiC,
    taskKPIWeight: 0.022223,
    status: 'proposal'
  },

  {
    id: 20739606,
    name: "[#1017] : Events sent to address of type queue not delivered after a while.8",
    code: "ENTMQMAAS-435.8",
    preceedingTasks: ["ENTMQMAAS-407.6", "ENTMQMAAS-463.3"],
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
    estimateNormalTime: 1.16,
    kpiInTask: kpiA,
    taskKPIWeight: 0.001742,
    status: 'proposal'
  },

  {
    id: 18740288,
    name: "[#1079] : standard-controller: is trying to connect to router which was already killed.6",
    code: "ENTMQMAAS-450.6",
    preceedingTasks: ["ENTMQMAAS-435.8"],
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
    estimateNormalTime: 1.16,
    kpiInTask: kpiA,
    taskKPIWeight: 0.008896,
    status: 'proposal'
  },

  {
    id: 17740575,
    name: "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.5",
    code: "ENTMQMAAS-452.5",
    preceedingTasks: ["ENTMQMAAS-450.6"],
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
    estimateNormalTime: 1.16,
    kpiInTask: kpiB,
    taskKPIWeight: 0.005167,
    status: 'proposal'
  },

  {
    id: 16742576,
    name: "[#1117] : Response code/payload of AddressController REST API POST/DELETE operations.4",
    code: "ENTMQMAAS-462.4",
    preceedingTasks: ["ENTMQMAAS-452.5"],
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
    estimateNormalTime: 1.16,
    kpiInTask: kpiB,
    taskKPIWeight: 0.00138,
    status: 'proposal'
  },

  {
    id: 16742577,
    name: "[#1091] : Endpoints declaratively specified should be checked in status.4",
    code: "ENTMQMAAS-463.4",
    preceedingTasks: ["ENTMQMAAS-462.4"],
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
    estimateNormalTime: 1.16,
    kpiInTask: kpiA,
    taskKPIWeight: 0.022552,
    status: 'proposal'
  },

  {
    id: 21739606,
    name: "[#1017] : Events sent to address of type queue not delivered after a while.9",
    code: "ENTMQMAAS-435.9",
    preceedingTasks: ["ENTMQMAAS-458.2", "ENTMQMAAS-463.4"],
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
    estimateNormalTime: 3,
    kpiInTask: kpiA,
    taskKPIWeight: 0.012629,
    status: 'proposal'
  },

  {
    id: 19740288,
    name: "[#1079] : standard-controller: is trying to connect to router which was already killed.7",
    code: "ENTMQMAAS-450.7",
    preceedingTasks: ["ENTMQMAAS-435.9"],
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
    estimateNormalTime: 3,
    kpiInTask: kpiA,
    taskKPIWeight: 0.012424,
    status: 'proposal'
  },

  {
    id: 18740575,
    name: "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.6",
    code: "ENTMQMAAS-452.6",
    preceedingTasks: ["ENTMQMAAS-450.7"],
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
    estimateNormalTime: 3,
    kpiInTask: kpiB,
    taskKPIWeight: 0.023503,
    status: 'proposal'
  },

  {
    id: 17742577,
    name: "[#1091] : Endpoints declaratively specified should be checked in status.5",
    code: "ENTMQMAAS-463.5",
    preceedingTasks: ["ENTMQMAAS-452.6"],
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
    estimateNormalTime: 3,
    kpiInTask: kpiC,
    taskKPIWeight: 0.010349,
    status: 'proposal'
  },

  {
    id: 22739606,
    name: "[#1017] : Events sent to address of type queue not delivered after a while.10",
    code: "ENTMQMAAS-435.10",
    preceedingTasks: ["ENTMQMAAS-410.3", "ENTMQMAAS-463.5"],
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
    estimateNormalTime: 2.61,
    kpiInTask: kpiC,
    taskKPIWeight: 0.012828,
    status: 'proposal'
  },

  {
    id: 20740288,
    name: "[#1079] : standard-controller: is trying to connect to router which was already killed.8",
    code: "ENTMQMAAS-450.8",
    preceedingTasks: ["ENTMQMAAS-435.10"],
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
    estimateNormalTime: 2.61,
    kpiInTask: kpiA,
    taskKPIWeight: 0.006331,
    status: 'proposal'
  },

  {
    id: 19740575,
    name: "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.7",
    code: "ENTMQMAAS-452.7",
    preceedingTasks: ["ENTMQMAAS-450.8"],
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
    estimateNormalTime: 2.61,
    kpiInTask: kpiA,
    taskKPIWeight: 0.001211,
    status: 'proposal'
  },

  {
    id: 19737485,
    name: "[#973] : Configure per-address settings for each address created on broker.7",
    code: "ENTMQMAAS-407.7",
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
    estimateNormalTime: 10.37,
    kpiInTask: kpiC,
    taskKPIWeight: 0.010351,
    status: 'proposal'
  },

  {
    id: 21740288,
    name: "[#1079] : standard-controller: is trying to connect to router which was already killed.9",
    code: "ENTMQMAAS-450.9",
    preceedingTasks: ["ENTMQMAAS-452.7"],
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
    estimateNormalTime: 33.72,
    kpiInTask: kpiC,
    taskKPIWeight: 0.004525,
    status: 'proposal'
  },

  {
    id: 20740575,
    name: "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.8",
    code: "ENTMQMAAS-452.8",
    preceedingTasks: ["ENTMQMAAS-450.9"],
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
    estimateNormalTime: 33.72,
    kpiInTask: kpiA,
    taskKPIWeight: 0.010702,
    status: 'proposal'
  },

  {
    id: 13738426,
    name: "Remove 'docker' for the templates and images.1",
    code: "ENTMQMAAS-419.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.87,
        frontend: 2.5,
        database: 2.32,
        devops: 3.01,
        ai_ml: 2.38,
        testing: 1.67,
        issue_tracking: 2.75
    },
    estimateNormalTime: 219.26,
    kpiInTask: kpiB,
    taskKPIWeight: 0.014226,
    status: 'proposal'
  },

  {
    id: 15737492,
    name: "Docs: how to manage user permissions.3",
    code: "ENTMQMAAS-410.3",
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
    kpiInTask: kpiA,
    taskKPIWeight: 0.002237,
    status: 'proposal'
  },

  {
    id: 13740087,
    name: "Reference table for Developer role assumptions.1",
    code: "ENTMQMAAS-439.1",
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
    taskKPIWeight: 0.011054,
    status: 'proposal'
  },

  {
    id: 14740094,
    name: "Reference table for Developer role assumptions.2",
    code: "ENTMQMAAS-440.2",
    preceedingTasks: ["ENTMQMAAS-407.7", "ENTMQMAAS-439.1"],
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
    kpiInTask: kpiA,
    taskKPIWeight: 0.016635,
    status: 'proposal'
  },

  {
    id: 15740096,
    name: "Reference table for Developer role assumptions.3",
    code: "ENTMQMAAS-441.3",
    preceedingTasks: ["ENTMQMAAS-440.2"],
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
    kpiInTask: kpiA,
    taskKPIWeight: 0.021169,
    status: 'proposal'
  },

  {
    id: 16740098,
    name: "Reference table for Developer role assumptions.4",
    code: "ENTMQMAAS-443.4",
    preceedingTasks: ["ENTMQMAAS-452.8", "ENTMQMAAS-441.3"],
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
    kpiInTask: kpiA,
    taskKPIWeight: 0.022436,
    status: 'proposal'
  },

  {
    id: 13740105,
    name: "Self-provision an address/destination.1",
    code: "ENTMQMAAS-447.1",
    preceedingTasks: ["ENTMQMAAS-443.4"],
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
    taskKPIWeight: 0.018474,
    status: 'proposal'
  },

  {
    id: 17740087,
    name: "Reference table for Developer role assumptions.5",
    code: "ENTMQMAAS-439.5",
    preceedingTasks: ["ENTMQMAAS-419.1", "ENTMQMAAS-447.1"],
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
    taskKPIWeight: 0.010998,
    status: 'proposal'
  },

  {
    id: 18740094,
    name: "Reference table for Developer role assumptions.6",
    code: "ENTMQMAAS-440.6",
    preceedingTasks: ["ENTMQMAAS-439.5"],
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
    taskKPIWeight: 0.013884,
    status: 'proposal'
  },

  {
    id: 19740096,
    name: "Reference table for Developer role assumptions.7",
    code: "ENTMQMAAS-441.7",
    preceedingTasks: ["ENTMQMAAS-440.6"],
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
    taskKPIWeight: 0.015293,
    status: 'proposal'
  },

  {
    id: 20740098,
    name: "Reference table for Developer role assumptions.8",
    code: "ENTMQMAAS-443.8",
    preceedingTasks: ["ENTMQMAAS-441.7"],
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
    taskKPIWeight: 0.014194,
    status: 'proposal'
  },

  {
    id: 14740105,
    name: "Self-provision an address/destination.2",
    code: "ENTMQMAAS-447.2",
    preceedingTasks: ["ENTMQMAAS-443.8"],
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
    taskKPIWeight: 0.017773,
    status: 'proposal'
  },

  {
    id: 21740087,
    name: "Reference table for Developer role assumptions.9",
    code: "ENTMQMAAS-439.9",
    preceedingTasks: ["ENTMQMAAS-447.2"],
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
    taskKPIWeight: 0.019969,
    status: 'proposal'
  },

  {
    id: 22740094,
    name: "Reference table for Developer role assumptions.10",
    code: "ENTMQMAAS-440.10",
    preceedingTasks: ["ENTMQMAAS-439.9"],
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
    taskKPIWeight: 0.010161,
    status: 'proposal'
  },

  {
    id: 23740096,
    name: "Reference table for Developer role assumptions.11",
    code: "ENTMQMAAS-441.11",
    preceedingTasks: ["ENTMQMAAS-440.10"],
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
    kpiInTask: kpiA,
    taskKPIWeight: 0.010754,
    status: 'proposal'
  },

  {
    id: 24740098,
    name: "Reference table for Developer role assumptions.12",
    code: "ENTMQMAAS-443.12",
    preceedingTasks: ["ENTMQMAAS-441.11"],
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
    taskKPIWeight: 0.005426,
    status: 'proposal'
  },

  {
    id: 15740105,
    name: "Self-provision an address/destination.3",
    code: "ENTMQMAAS-447.3",
    preceedingTasks: ["ENTMQMAAS-443.12"],
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
    kpiInTask: kpiC,
    taskKPIWeight: 0.003012,
    status: 'proposal'
  },

  {
    id: 25740087,
    name: "Reference table for Developer role assumptions.13",
    code: "ENTMQMAAS-439.13",
    preceedingTasks: ["ENTMQMAAS-447.3"],
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
    estimateNormalTime: 0.45,
    kpiInTask: kpiB,
    taskKPIWeight: 0.01252,
    status: 'proposal'
  },

  {
    id: 26740094,
    name: "Reference table for Developer role assumptions.14",
    code: "ENTMQMAAS-440.14",
    preceedingTasks: ["ENTMQMAAS-439.13"],
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
    estimateNormalTime: 0.45,
    kpiInTask: kpiA,
    taskKPIWeight: 0.02495,
    status: 'proposal'
  },

  {
    id: 27740096,
    name: "Reference table for Developer role assumptions.15",
    code: "ENTMQMAAS-441.15",
    preceedingTasks: ["ENTMQMAAS-440.14"],
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
    estimateNormalTime: 0.45,
    kpiInTask: kpiA,
    taskKPIWeight: 0.009012,
    status: 'proposal'
  },

  {
    id: 28740098,
    name: "Reference table for Developer role assumptions.16",
    code: "ENTMQMAAS-443.16",
    preceedingTasks: ["ENTMQMAAS-441.15"],
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
    estimateNormalTime: 0.45,
    kpiInTask: kpiA,
    taskKPIWeight: 0.024892,
    status: 'proposal'
  },

  {
    id: 16740105,
    name: "Self-provision an address/destination.4",
    code: "ENTMQMAAS-447.4",
    preceedingTasks: ["ENTMQMAAS-443.16"],
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
    estimateNormalTime: 0.45,
    kpiInTask: kpiA,
    taskKPIWeight: 0.012165,
    status: 'proposal'
  },

  {
    id: 17740105,
    name: "Self-provision an address/destination.5",
    code: "ENTMQMAAS-447.5",
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
    estimateNormalTime: 4.69,
    kpiInTask: kpiA,
    taskKPIWeight: 0.018164,
    status: 'proposal'
  },

  {
    id: 22740288,
    name: "[#1079] : standard-controller: is trying to connect to router which was already killed.10",
    code: "ENTMQMAAS-450.10",
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
    estimateNormalTime: 494.89,
    kpiInTask: kpiA,
    taskKPIWeight: 0.004963,
    status: 'proposal'
  },

  {
    id: 13740112,
    name: "Document how to delete a destination/address.1",
    code: "ENTMQMAAS-448.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 762.42,
    kpiInTask: kpiA,
    taskKPIWeight: 0.020945,
    status: 'proposal'
  },

  {
    id: 14740112,
    name: "Document how to delete a destination/address.2",
    code: "ENTMQMAAS-448.2",
    preceedingTasks: ["ENTMQMAAS-447.5", "ENTMQMAAS-450.10", "ENTMQMAAS-448.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.96,
    kpiInTask: kpiC,
    taskKPIWeight: 0.008237,
    status: 'proposal'
  },

  {
    id: 15740112,
    name: "Document how to delete a destination/address.3",
    code: "ENTMQMAAS-448.3",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.15,
    kpiInTask: kpiA,
    taskKPIWeight: 0.012571,
    status: 'proposal'
  },

  {
    id: 20737485,
    name: "[#973] : Configure per-address settings for each address created on broker.8",
    code: "ENTMQMAAS-407.8",
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
    estimateNormalTime: 677.55,
    kpiInTask: kpiC,
    taskKPIWeight: 0.021989,
    status: 'proposal'
  },

  {
    id: 16740112,
    name: "Document how to delete a destination/address.4",
    code: "ENTMQMAAS-448.4",
    preceedingTasks: ["ENTMQMAAS-448.3"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.85,
    kpiInTask: kpiA,
    taskKPIWeight: 0.002472,
    status: 'proposal'
  },

  {
    id: 17740112,
    name: "Document how to delete a destination/address.5",
    code: "ENTMQMAAS-448.5",
    preceedingTasks: ["ENTMQMAAS-448.4", "ENTMQMAAS-407.8"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.09,
    kpiInTask: kpiA,
    taskKPIWeight: 0.001769,
    status: 'proposal'
  },

  {
    id: 18740112,
    name: "Document how to delete a destination/address.6",
    code: "ENTMQMAAS-448.6",
    preceedingTasks: ["ENTMQMAAS-448.5"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.39,
    kpiInTask: kpiB,
    taskKPIWeight: 0.020123,
    status: 'proposal'
  },

  {
    id: 19740112,
    name: "Document how to delete a destination/address.7",
    code: "ENTMQMAAS-448.7",
    preceedingTasks: ["ENTMQMAAS-448.6"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.13,
    kpiInTask: kpiB,
    taskKPIWeight: 0.003771,
    status: 'proposal'
  },

  {
    id: 20740112,
    name: "Document how to delete a destination/address.8",
    code: "ENTMQMAAS-448.8",
    preceedingTasks: ["ENTMQMAAS-448.7"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.15,
    kpiInTask: kpiA,
    taskKPIWeight: 0.014413,
    status: 'proposal'
  },

  {
    id: 21740112,
    name: "Document how to delete a destination/address.9",
    code: "ENTMQMAAS-448.9",
    preceedingTasks: ["ENTMQMAAS-448.8"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.48,
    kpiInTask: kpiC,
    taskKPIWeight: 0.000938,
    status: 'proposal'
  },

  {
    id: 22740112,
    name: "Document how to delete a destination/address.10",
    code: "ENTMQMAAS-448.10",
    preceedingTasks: ["ENTMQMAAS-448.9"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.03,
    kpiInTask: kpiB,
    taskKPIWeight: 0.012276,
    status: 'proposal'
  },

  {
    id: 23740112,
    name: "Document how to delete a destination/address.11",
    code: "ENTMQMAAS-448.11",
    preceedingTasks: ["ENTMQMAAS-448.10"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.72,
    kpiInTask: kpiA,
    taskKPIWeight: 0.005763,
    status: 'proposal'
  },

  {
    id: 24740112,
    name: "Document how to delete a destination/address.12",
    code: "ENTMQMAAS-448.12",
    preceedingTasks: ["ENTMQMAAS-448.11"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.34,
    kpiInTask: kpiB,
    taskKPIWeight: 0.009284,
    status: 'proposal'
  },

  {
    id: 25740112,
    name: "Document how to delete a destination/address.13",
    code: "ENTMQMAAS-448.13",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.19,
    kpiInTask: kpiA,
    taskKPIWeight: 0.007479,
    status: 'proposal'
  },

  {
    id: 26740112,
    name: "Document how to delete a destination/address.14",
    code: "ENTMQMAAS-448.14",
    preceedingTasks: ["ENTMQMAAS-448.13"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.07,
    kpiInTask: kpiA,
    taskKPIWeight: 0.016053,
    status: 'proposal'
  },

  {
    id: 27740112,
    name: "Document how to delete a destination/address.15",
    code: "ENTMQMAAS-448.15",
    preceedingTasks: ["ENTMQMAAS-448.14"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.11,
    kpiInTask: kpiB,
    taskKPIWeight: 0.012641,
    status: 'proposal'
  },

  {
    id: 28740112,
    name: "Document how to delete a destination/address.16",
    code: "ENTMQMAAS-448.16",
    preceedingTasks: ["ENTMQMAAS-448.15"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.03,
    kpiInTask: kpiB,
    taskKPIWeight: 0.007988,
    status: 'proposal'
  },

  {
    id: 13737477,
    name: "Investigate what's needed for operations (logs/monitoring).1",
    code: "ENTMQMAAS-404.1",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.32,
        database: 2.52,
        devops: 3.1799999999999997,
        ai_ml: 2.76,
        testing: 2.1999999999999997,
        issue_tracking: 3.3
    },
    estimateNormalTime: 802.45,
    kpiInTask: kpiB,
    taskKPIWeight: 0.017126,
    status: 'proposal'
  },

  {
    id: 29740112,
    name: "Document how to delete a destination/address.17",
    code: "ENTMQMAAS-448.17",
    preceedingTasks: ["ENTMQMAAS-448.16"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.95,
    kpiInTask: kpiA,
    taskKPIWeight: 0.024792,
    status: 'proposal'
  },

  {
    id: 30740112,
    name: "Document how to delete a destination/address.18",
    code: "ENTMQMAAS-448.18",
    preceedingTasks: ["ENTMQMAAS-448.17", "ENTMQMAAS-404.1"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.32,
    kpiInTask: kpiB,
    taskKPIWeight: 0.020228,
    status: 'proposal'
  },

  {
    id: 31740112,
    name: "Document how to delete a destination/address.19",
    code: "ENTMQMAAS-448.19",
    preceedingTasks: ["ENTMQMAAS-448.18"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.33,
    kpiInTask: kpiC,
    taskKPIWeight: 0.018766,
    status: 'proposal'
  },

  {
    id: 32740112,
    name: "Document how to delete a destination/address.20",
    code: "ENTMQMAAS-448.20",
    preceedingTasks: ["ENTMQMAAS-448.19"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.02,
    kpiInTask: kpiC,
    taskKPIWeight: 0.012583,
    status: 'proposal'
  },

  {
    id: 33740112,
    name: "Document how to delete a destination/address.21",
    code: "ENTMQMAAS-448.21",
    preceedingTasks: ["ENTMQMAAS-448.20"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.11,
    kpiInTask: kpiA,
    taskKPIWeight: 0.00803,
    status: 'proposal'
  },

  {
    id: 34740112,
    name: "Document how to delete a destination/address.22",
    code: "ENTMQMAAS-448.22",
    preceedingTasks: ["ENTMQMAAS-448.21", "ENTMQMAAS-404.2"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.15,
    kpiInTask: kpiA,
    taskKPIWeight: 0.02077,
    status: 'proposal'
  },

  {
    id: 35740112,
    name: "Document how to delete a destination/address.23",
    code: "ENTMQMAAS-448.23",
    preceedingTasks: ["ENTMQMAAS-448.22"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.83,
    kpiInTask: kpiB,
    taskKPIWeight: 0.004113,
    status: 'proposal'
  },

  {
    id: 36740112,
    name: "Document how to delete a destination/address.24",
    code: "ENTMQMAAS-448.24",
    preceedingTasks: ["ENTMQMAAS-448.23"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.17,
    kpiInTask: kpiC,
    taskKPIWeight: 0.02339,
    status: 'proposal'
  },

  {
    id: 14737477,
    name: "Investigate what's needed for operations (logs/monitoring).2",
    code: "ENTMQMAAS-404.2",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.32,
        database: 2.52,
        devops: 3.1799999999999997,
        ai_ml: 2.76,
        testing: 2.1999999999999997,
        issue_tracking: 3.3
    },
    estimateNormalTime: 7.86,
    kpiInTask: kpiC,
    taskKPIWeight: 0.017434,
    status: 'proposal'
  },

  {
    id: 37740112,
    name: "Document how to delete a destination/address.25",
    code: "ENTMQMAAS-448.25",
    preceedingTasks: ["ENTMQMAAS-448.24"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.66,
    kpiInTask: kpiB,
    taskKPIWeight: 0.008073,
    status: 'proposal'
  },

  {
    id: 38740112,
    name: "Document how to delete a destination/address.26",
    code: "ENTMQMAAS-448.26",
    preceedingTasks: ["ENTMQMAAS-448.25"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.23,
    kpiInTask: kpiA,
    taskKPIWeight: 0.000527,
    status: 'proposal'
  },

  {
    id: 39740112,
    name: "Document how to delete a destination/address.27",
    code: "ENTMQMAAS-448.27",
    preceedingTasks: ["ENTMQMAAS-448.26"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.05,
    kpiInTask: kpiB,
    taskKPIWeight: 0.01544,
    status: 'proposal'
  },

  {
    id: 15737477,
    name: "Investigate what's needed for operations (logs/monitoring).3",
    code: "ENTMQMAAS-404.3",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.32,
        database: 2.52,
        devops: 3.1799999999999997,
        ai_ml: 2.76,
        testing: 2.1999999999999997,
        issue_tracking: 3.3
    },
    estimateNormalTime: 3.43,
    kpiInTask: kpiB,
    taskKPIWeight: 0.013585,
    status: 'proposal'
  },

  {
    id: 40740112,
    name: "Document how to delete a destination/address.28",
    code: "ENTMQMAAS-448.28",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.2,
    kpiInTask: kpiC,
    taskKPIWeight: 0.024353,
    status: 'proposal'
  },

  {
    id: 41740112,
    name: "Document how to delete a destination/address.29",
    code: "ENTMQMAAS-448.29",
    preceedingTasks: ["ENTMQMAAS-448.28", "ENTMQMAAS-404.3"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.05,
    kpiInTask: kpiB,
    taskKPIWeight: 0.001721,
    status: 'proposal'
  },

  {
    id: 42740112,
    name: "Document how to delete a destination/address.30",
    code: "ENTMQMAAS-448.30",
    preceedingTasks: ["ENTMQMAAS-448.29"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.17,
    kpiInTask: kpiC,
    taskKPIWeight: 0.0086,
    status: 'proposal'
  },

  {
    id: 43740112,
    name: "Document how to delete a destination/address.31",
    code: "ENTMQMAAS-448.31",
    preceedingTasks: ["ENTMQMAAS-448.30"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.04,
    kpiInTask: kpiC,
    taskKPIWeight: 0.016764,
    status: 'proposal'
  },

  {
    id: 44740112,
    name: "Document how to delete a destination/address.32",
    code: "ENTMQMAAS-448.32",
    preceedingTasks: ["ENTMQMAAS-448.31"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.14,
    kpiInTask: kpiC,
    taskKPIWeight: 0.021438,
    status: 'proposal'
  },

  {
    id: 45740112,
    name: "Document how to delete a destination/address.33",
    code: "ENTMQMAAS-448.33",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 8.88,
    kpiInTask: kpiA,
    taskKPIWeight: 0.015127,
    status: 'proposal'
  },

  {
    id: 46740112,
    name: "Document how to delete a destination/address.34",
    code: "ENTMQMAAS-448.34",
    preceedingTasks: ["ENTMQMAAS-448.33"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.04,
    kpiInTask: kpiA,
    taskKPIWeight: 0.009896,
    status: 'proposal'
  },

  {
    id: 47740112,
    name: "Document how to delete a destination/address.35",
    code: "ENTMQMAAS-448.35",
    preceedingTasks: ["ENTMQMAAS-448.34"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.36,
    kpiInTask: kpiC,
    taskKPIWeight: 0.015952,
    status: 'proposal'
  },

  {
    id: 48740112,
    name: "Document how to delete a destination/address.36",
    code: "ENTMQMAAS-448.36",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 3.21,
    kpiInTask: kpiC,
    taskKPIWeight: 0.009418,
    status: 'proposal'
  },

  {
    id: 49740112,
    name: "Document how to delete a destination/address.37",
    code: "ENTMQMAAS-448.37",
    preceedingTasks: ["ENTMQMAAS-448.36"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.57,
    kpiInTask: kpiC,
    taskKPIWeight: 0.023758,
    status: 'proposal'
  },

  {
    id: 50740112,
    name: "Document how to delete a destination/address.38",
    code: "ENTMQMAAS-448.38",
    preceedingTasks: ["ENTMQMAAS-448.37"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.66,
    kpiInTask: kpiA,
    taskKPIWeight: 0.023357,
    status: 'proposal'
  },

  {
    id: 51740112,
    name: "Document how to delete a destination/address.39",
    code: "ENTMQMAAS-448.39",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.18,
    kpiInTask: kpiC,
    taskKPIWeight: 0.013615,
    status: 'proposal'
  },

  {
    id: 52740112,
    name: "Document how to delete a destination/address.40",
    code: "ENTMQMAAS-448.40",
    preceedingTasks: ["ENTMQMAAS-448.39"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.19,
    kpiInTask: kpiA,
    taskKPIWeight: 0.0114,
    status: 'proposal'
  },

  {
    id: 53740112,
    name: "Document how to delete a destination/address.41",
    code: "ENTMQMAAS-448.41",
    preceedingTasks: ["ENTMQMAAS-448.40"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.11,
    kpiInTask: kpiB,
    taskKPIWeight: 0.021453,
    status: 'proposal'
  },

  {
    id: 54740112,
    name: "Document how to delete a destination/address.42",
    code: "ENTMQMAAS-448.42",
    preceedingTasks: ["ENTMQMAAS-448.41"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.04,
    kpiInTask: kpiC,
    taskKPIWeight: 0.021064,
    status: 'proposal'
  },

  {
    id: 55740112,
    name: "Document how to delete a destination/address.43",
    code: "ENTMQMAAS-448.43",
    preceedingTasks: ["ENTMQMAAS-448.42"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.03,
    kpiInTask: kpiA,
    taskKPIWeight: 0.012807,
    status: 'proposal'
  },

  {
    id: 56740112,
    name: "Document how to delete a destination/address.44",
    code: "ENTMQMAAS-448.44",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.82,
    kpiInTask: kpiB,
    taskKPIWeight: 0.01188,
    status: 'proposal'
  },

  {
    id: 57740112,
    name: "Document how to delete a destination/address.45",
    code: "ENTMQMAAS-448.45",
    preceedingTasks: ["ENTMQMAAS-448.44"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.1,
    kpiInTask: kpiB,
    taskKPIWeight: 0.010041,
    status: 'proposal'
  },

  {
    id: 58740112,
    name: "Document how to delete a destination/address.46",
    code: "ENTMQMAAS-448.46",
    preceedingTasks: ["ENTMQMAAS-448.45"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.02,
    kpiInTask: kpiB,
    taskKPIWeight: 0.003671,
    status: 'proposal'
  },

  {
    id: 59740112,
    name: "Document how to delete a destination/address.47",
    code: "ENTMQMAAS-448.47",
    preceedingTasks: ["ENTMQMAAS-448.46"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.37,
    kpiInTask: kpiB,
    taskKPIWeight: 0.013072,
    status: 'proposal'
  },

  {
    id: 60740112,
    name: "Document how to delete a destination/address.48",
    code: "ENTMQMAAS-448.48",
    preceedingTasks: ["ENTMQMAAS-448.47"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.14,
    kpiInTask: kpiA,
    taskKPIWeight: 0.015299,
    status: 'proposal'
  },

  {
    id: 61740112,
    name: "Document how to delete a destination/address.49",
    code: "ENTMQMAAS-448.49",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 1.15,
    kpiInTask: kpiA,
    taskKPIWeight: 0.001408,
    status: 'proposal'
  },

  {
    id: 62740112,
    name: "Document how to delete a destination/address.50",
    code: "ENTMQMAAS-448.50",
    preceedingTasks: ["ENTMQMAAS-448.49"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.2,
    kpiInTask: kpiC,
    taskKPIWeight: 0.01062,
    status: 'proposal'
  },

  {
    id: 63740112,
    name: "Document how to delete a destination/address.51",
    code: "ENTMQMAAS-448.51",
    preceedingTasks: ["ENTMQMAAS-448.50"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.42,
    kpiInTask: kpiB,
    taskKPIWeight: 0.013528,
    status: 'proposal'
  },

  {
    id: 64740112,
    name: "Document how to delete a destination/address.52",
    code: "ENTMQMAAS-448.52",
    preceedingTasks: ["ENTMQMAAS-448.51"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.37,
    kpiInTask: kpiB,
    taskKPIWeight: 0.023416,
    status: 'proposal'
  },

  {
    id: 65740112,
    name: "Document how to delete a destination/address.53",
    code: "ENTMQMAAS-448.53",
    preceedingTasks: ["ENTMQMAAS-448.52"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.57,
    kpiInTask: kpiC,
    taskKPIWeight: 0.010722,
    status: 'proposal'
  },

  {
    id: 66740112,
    name: "Document how to delete a destination/address.54",
    code: "ENTMQMAAS-448.54",
    preceedingTasks: ["ENTMQMAAS-448.53"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.03,
    kpiInTask: kpiB,
    taskKPIWeight: 0.003568,
    status: 'proposal'
  },

  {
    id: 67740112,
    name: "Document how to delete a destination/address.55",
    code: "ENTMQMAAS-448.55",
    preceedingTasks: ["ENTMQMAAS-448.54"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.08,
    kpiInTask: kpiB,
    taskKPIWeight: 0.014926,
    status: 'proposal'
  },

  {
    id: 68740112,
    name: "Document how to delete a destination/address.56",
    code: "ENTMQMAAS-448.56",
    preceedingTasks: ["ENTMQMAAS-448.55"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.13,
    kpiInTask: kpiC,
    taskKPIWeight: 0.00361,
    status: 'proposal'
  },

  {
    id: 69740112,
    name: "Document how to delete a destination/address.57",
    code: "ENTMQMAAS-448.57",
    preceedingTasks: ["ENTMQMAAS-448.56"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.87,
    kpiInTask: kpiC,
    taskKPIWeight: 0.003044,
    status: 'proposal'
  },

  {
    id: 70740112,
    name: "Document how to delete a destination/address.58",
    code: "ENTMQMAAS-448.58",
    preceedingTasks: ["ENTMQMAAS-448.57"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.28,
    kpiInTask: kpiA,
    taskKPIWeight: 0.009548,
    status: 'proposal'
  },

  {
    id: 71740112,
    name: "Document how to delete a destination/address.59",
    code: "ENTMQMAAS-448.59",
    preceedingTasks: ["ENTMQMAAS-448.58"],
    startTime: null,
    endTime: null,
    tags: ['devops', 'backend'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.85,
        frontend: 2.1799999999999997,
        database: 2.51,
        devops: 2.9099999999999997,
        ai_ml: 2.38,
        testing: 1.5599999999999998,
        issue_tracking: 2.79
    },
    estimateNormalTime: 0.14,
    kpiInTask: kpiA,
    taskKPIWeight: 0.022657,
    status: 'proposal'
  },

  {
    id: 16737477,
    name: "Investigate what's needed for operations (logs/monitoring).4",
    code: "ENTMQMAAS-404.4",
    preceedingTasks: [],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.32,
        database: 2.52,
        devops: 3.1799999999999997,
        ai_ml: 2.76,
        testing: 2.1999999999999997,
        issue_tracking: 3.3
    },
    estimateNormalTime: 238.08,
    kpiInTask: kpiA,
    taskKPIWeight: 0.003501,
    status: 'proposal'
  },

  {
    id: 17737477,
    name: "Investigate what's needed for operations (logs/monitoring).5",
    code: "ENTMQMAAS-404.5",
    preceedingTasks: ["ENTMQMAAS-404.4"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.32,
        database: 2.52,
        devops: 3.1799999999999997,
        ai_ml: 2.76,
        testing: 2.1999999999999997,
        issue_tracking: 3.3
    },
    estimateNormalTime: 6.87,
    kpiInTask: kpiC,
    taskKPIWeight: 0.000469,
    status: 'proposal'
  },

  {
    id: 18737477,
    name: "Investigate what's needed for operations (logs/monitoring).6",
    code: "ENTMQMAAS-404.6",
    preceedingTasks: ["ENTMQMAAS-404.5"],
    startTime: null,
    endTime: null,
    tags: ['issue_tracking', 'devops'],
    requireAsset: [],
    requireAssignee: {
        backend: 2.89,
        frontend: 2.32,
        database: 2.52,
        devops: 3.1799999999999997,
        ai_ml: 2.76,
        testing: 2.1999999999999997,
        issue_tracking: 3.3
    },
    estimateNormalTime: 317.79,
    kpiInTask: kpiA,
    taskKPIWeight: 0.021557,
    status: 'proposal'
  }
]
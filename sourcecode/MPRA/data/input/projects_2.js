const projects = [
  {
    "id": 1,
    "projectKey": "ENTMQMAAS_3xxxx",
    "projectName": "A-MQ Messaging-as-a-Service",
    "projectType": "software",
    "projectLead": "rgodfrey@redhat.com",
    "description": "The following tag should be productized: \r\n\r\nhttps://code.engineering.redhat.com/gerrit/gitweb?p=EnMasseProject/enmasse.git;a=shortlog;h=refs/tags/0.15.3.rhom-001002\r\n\r\nThe project name is supposed to change from RHOM to something else, but its OK to use RHOM for this release.",
    "startTime": "2017-11-13T23:15:41.000Z",
    "endTime": "2020-05-10T10:11:00.000Z",
    "assets": null,
    "tasks": [
      {
        "id": 13720876,
        "code": "ENTMQMAAS-301.1",
        "name": "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.01898148148148148,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002601416638634865
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 14720876,
        "code": "ENTMQMAAS-301.2",
        "name": "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.2",
        "preceedingTasks": [
          13720876
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.10618055555555556,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0014552070879778202
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13720955,
        "code": "ENTMQMAAS-304.1",
        "name": "[#524] : System-tests: longtime: create new test for user authentication before/after restarting keycloak.1",
        "preceedingTasks": [
          14720876
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.10618055555555556,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0014552070879778202
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 15720876,
        "code": "ENTMQMAAS-301.3",
        "name": "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.3",
        "preceedingTasks": [
          13720952
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.06811868686868687,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000933568254906991
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 14720955,
        "code": "ENTMQMAAS-304.2",
        "name": "[#524] : System-tests: longtime: create new test for user authentication before/after restarting keycloak.2",
        "preceedingTasks": [
          15720876
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.06811868686868687,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000933568254906991
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13721160,
        "code": "ENTMQMAAS-306.1",
        "name": "Unable test io.enmasse.systemtest.brokered.clients.rhea.MsgPatternsTest.testMessageSelectorTopic.1",
        "preceedingTasks": [
          14720955
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.06811868686868687,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000933568254906991
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13720952,
        "code": "ENTMQMAAS-303.1",
        "name": "[#523] : SystemTests: brokered/standard: new test for keycloak persistent storage.1",
        "preceedingTasks": [
          13720955
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.3037037037037037,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.004162266621815784
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13720976,
        "code": "ENTMQMAAS-305.1",
        "name": "[#526] : System-tests: November list of disabled tests.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.3037037037037037,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.004162266621815784
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 16720876,
        "code": "ENTMQMAAS-301.4",
        "name": "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.4",
        "preceedingTasks": [
          13721160,
          13720976
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.02291666666666667,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00031407347222542884
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 15720955,
        "code": "ENTMQMAAS-304.3",
        "name": "[#524] : System-tests: longtime: create new test for user authentication before/after restarting keycloak.3",
        "preceedingTasks": [
          16720876
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.02291666666666667,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00031407347222542884
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 14720952,
        "code": "ENTMQMAAS-303.2",
        "name": "[#523] : SystemTests: brokered/standard: new test for keycloak persistent storage.2",
        "preceedingTasks": [
          15720955
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.8673611111111111,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.01188720505483517
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 14720976,
        "code": "ENTMQMAAS-305.2",
        "name": "[#526] : System-tests: November list of disabled tests.2",
        "preceedingTasks": [
          14720952
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.8673611111111111,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.01188720505483517
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 17720876,
        "code": "ENTMQMAAS-301.5",
        "name": "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.4185185185185185,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.019440830684822503
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 16720955,
        "code": "ENTMQMAAS-304.4",
        "name": "[#524] : System-tests: longtime: create new test for user authentication before/after restarting keycloak.4",
        "preceedingTasks": [
          17720876
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.4185185185185185,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.019440830684822503
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13721310,
        "code": "ENTMQMAAS-307.1",
        "name": "[#539] : System-tests: createtestAuthSendReceiveLong.1",
        "preceedingTasks": [
          16720955
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.4185185185185185,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.019440830684822503
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 15720952,
        "code": "ENTMQMAAS-303.3",
        "name": "[#523] : SystemTests: brokered/standard: new test for keycloak persistent storage.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 2.682986111111111,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.036770389695240734
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 15720976,
        "code": "ENTMQMAAS-305.3",
        "name": "[#526] : System-tests: November list of disabled tests.3",
        "preceedingTasks": [
          15720952
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 2.682986111111111,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.036770389695240734
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 16720952,
        "code": "ENTMQMAAS-303.4",
        "name": "[#523] : SystemTests: brokered/standard: new test for keycloak persistent storage.4",
        "preceedingTasks": [
          13721310,
          15720976
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.9740740740740739,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.027054733041802594
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13724080,
        "code": "ENTMQMAAS-318.1",
        "name": "Productize ER3 of RHOM.1",
        "preceedingTasks": [
          16720952
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.20902777777777778,
        "requireAssign": {
          "backend": 2.65,
          "frontend": 2.81,
          "database": 2.31,
          "devops": 3.06,
          "ai_ml": 3.01,
          "testing": 1.68,
          "issue_tracking": 3.32
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00286473076181376
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "pkralik"
      },
      {
        "id": 18720876,
        "code": "ENTMQMAAS-301.6",
        "name": "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.6",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.0105324074074074,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.027554395383979413
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 17720952,
        "code": "ENTMQMAAS-303.5",
        "name": "[#523] : SystemTests: brokered/standard: new test for keycloak persistent storage.5",
        "preceedingTasks": [
          18720876
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 13.961805555555555,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.19134688360885596
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 19720876,
        "code": "ENTMQMAAS-301.7",
        "name": "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.7",
        "preceedingTasks": [
          17720952
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 10.528645833333334,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.14429534638720554
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13730070,
        "code": "ENTMQMAAS-334.1",
        "name": "[#746] : Add support for checking requests against limits and setting status on address.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.9959876543209876,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.013650034947763755
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13730071,
        "code": "ENTMQMAAS-335.1",
        "name": "[#747] : Add support for colocated topics.1",
        "preceedingTasks": [
          19720876,
          13730070
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.9959876543209876,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.013650034947763755
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13730073,
        "code": "ENTMQMAAS-337.1",
        "name": "[#749] : Use statefulsets for brokers.1",
        "preceedingTasks": [
          13730071
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.9959876543209876,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.013650034947763755
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13730068,
        "code": "ENTMQMAAS-332.1",
        "name": "[#744] : Implement Plan resource limits for address space.1",
        "preceedingTasks": [
          13730073
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.9959876543209876,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.013650034947763755
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13730072,
        "code": "ENTMQMAAS-336.1",
        "name": "[#748] : Persist decision about where queues/topics are placed.1",
        "preceedingTasks": [
          13730068
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.9959876543209876,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.013650034947763755
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13730069,
        "code": "ENTMQMAAS-333.1",
        "name": "[#745] : Implement Plan resource requests for addresses.1",
        "preceedingTasks": [
          13730072
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.9959876543209876,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.013650034947763755
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13730076,
        "code": "ENTMQMAAS-340.1",
        "name": "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.1",
        "preceedingTasks": [
          20720876,
          13730069
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.9959876543209876,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.013650034947763755
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13730083,
        "code": "ENTMQMAAS-347.1",
        "name": "[#759] : Delegate from keycloak to OpenShift Pro.1",
        "preceedingTasks": [
          13730076
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.9959876543209876,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.013650034947763755
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13730092,
        "code": "ENTMQMAAS-356.1",
        "name": "[#768] : Disable MQTT (configurable upstream?).1",
        "preceedingTasks": [
          13730139,
          13730083
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.9959876543209876,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.013650034947763755
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 20720876,
        "code": "ENTMQMAAS-301.8",
        "name": "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.8",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.3874305555555555,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.01901476939876316
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13730144,
        "code": "ENTMQMAAS-361.1",
        "name": "[#773] : Tests for authentication WebConsole.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.3874305555555555,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.01901476939876316
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13730145,
        "code": "ENTMQMAAS-362.1",
        "name": "[#774] : Tests for authorization in WebConsole.1",
        "preceedingTasks": [
          13730144
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.3874305555555555,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.01901476939876316
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13730143,
        "code": "ENTMQMAAS-360.1",
        "name": "[#772] : WebConsole Tests for addresses status.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.3874305555555555,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.01901476939876316
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13730146,
        "code": "ENTMQMAAS-363.1",
        "name": "[#775] : Tests for clients authorization.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.3874305555555555,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.01901476939876316
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13730148,
        "code": "ENTMQMAAS-365.1",
        "name": "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.3874305555555555,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.01901476939876316
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13730167,
        "code": "ENTMQMAAS-367.1",
        "name": "Setup Jenkins job with productized images.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.3874305555555555,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.01901476939876316
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13730139,
        "code": "ENTMQMAAS-357.1",
        "name": "Polarion reporting of enmasse test cases.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 3.498958333333333,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.04795330878205524
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13730141,
        "code": "ENTMQMAAS-358.1",
        "name": "[#770] : Define tests for limitation of address-spaces (by credits).1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 3.498958333333333,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.04795330878205524
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13730147,
        "code": "ENTMQMAAS-364.1",
        "name": "[#776] : Recheck and enable system tests for standard address space.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 3.498958333333333,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.04795330878205524
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 21720876,
        "code": "ENTMQMAAS-301.9",
        "name": "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.9",
        "preceedingTasks": [
          13730167
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.016319444444444445,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00022365838173629023
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 14730144,
        "code": "ENTMQMAAS-361.2",
        "name": "[#773] : Tests for authentication WebConsole.2",
        "preceedingTasks": [
          21720876
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.016319444444444445,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00022365838173629023
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 14730143,
        "code": "ENTMQMAAS-360.2",
        "name": "[#772] : WebConsole Tests for addresses status.2",
        "preceedingTasks": [
          14730144
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.016319444444444445,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00022365838173629023
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 14730148,
        "code": "ENTMQMAAS-365.2",
        "name": "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.2",
        "preceedingTasks": [
          13730147,
          14730143
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.016319444444444445,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00022365838173629023
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 14730167,
        "code": "ENTMQMAAS-367.2",
        "name": "Setup Jenkins job with productized images.2",
        "preceedingTasks": [
          14730148
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.016319444444444445,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00022365838173629023
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 14730070,
        "code": "ENTMQMAAS-334.2",
        "name": "[#746] : Add support for checking requests against limits and setting status on address.2",
        "preceedingTasks": [
          13730145,
          13730092
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.6455729166666667,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.008847592473259523
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 14730071,
        "code": "ENTMQMAAS-335.2",
        "name": "[#747] : Add support for colocated topics.2",
        "preceedingTasks": [
          14730070
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.6455729166666667,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.008847592473259523
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 14730068,
        "code": "ENTMQMAAS-332.2",
        "name": "[#744] : Implement Plan resource limits for address space.2",
        "preceedingTasks": [
          13730143,
          14730071
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.6455729166666667,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.008847592473259523
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 14730072,
        "code": "ENTMQMAAS-336.2",
        "name": "[#748] : Persist decision about where queues/topics are placed.2",
        "preceedingTasks": [
          13730141,
          14730068
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.6455729166666667,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.008847592473259523
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      }
    ],
    "employees": [
      {
        "id": 5373,
        "name": "pkralik",
        "employeeNumber": "MS2024373",
        "position": "QA",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.65,
          "frontend": 2.81,
          "database": 2.31,
          "devops": 3.06,
          "ai_ml": 3.01,
          "testing": 1.68,
          "issue_tracking": 3.32
        }
      },
      {
        "id": 5348,
        "name": "lulf@redhat.com",
        "employeeNumber": "MS2024348",
        "position": "DevOps",
        "tags": [],
        "level": 2,
        "costPerHour": 5,
        "qualities": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        }
      },
      {
        "id": 5134,
        "name": "tkratky_jira",
        "employeeNumber": "MS2024134",
        "position": "QA",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        }
      },
      {
        "id": 3375,
        "name": "dkornel@redhat.com",
        "employeeNumber": "MS2024375",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        }
      }
    ]
  },
  {
    "id": 2,
    "projectKey": "ENTMQMAAS-2xxxx",
    "projectName": "A-MQ Messaging-as-a-Service",
    "projectType": "software",
    "projectLead": "rgodfrey@redhat.com",
    "description": "Created from upstream issue [#4423|https://github.com/EnMasseProject/enmasse/pull/4423]. Fix version: None",
    "startTime": "2017-09-28T22:27:01.000Z",
    "endTime": "2024-04-16T05:57:00.000Z",
    "assets": null,
    "tasks": [
      {
        "id": 13714010,
        "code": "ENTMQMAAS-200.1",
        "name": "Add support for maintaining endpoints and address space readiness for brokered address space.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.12013888888888889,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0021240285331925505
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 14714010,
        "code": "ENTMQMAAS-200.2",
        "name": "Add support for maintaining endpoints and address space readiness for brokered address space.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3296296296296297,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.023507552783541445
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13714060,
        "code": "ENTMQMAAS-209.1",
        "name": "[#283] : Document brokered address space.1",
        "preceedingTasks": [
          14714010
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3296296296296297,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.023507552783541445
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13714078,
        "code": "ENTMQMAAS-210.1",
        "name": "[#284] : Instantiate template for brokered address space type in controller for brokered address space.1",
        "preceedingTasks": [
          13714052,
          13714060
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3296296296296297,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.023507552783541445
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 15714010,
        "code": "ENTMQMAAS-200.3",
        "name": "Add support for maintaining endpoints and address space readiness for brokered address space.3",
        "preceedingTasks": [
          13714059,
          13714078
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.1987847222222222,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0035144691770310262
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 14714060,
        "code": "ENTMQMAAS-209.2",
        "name": "[#283] : Document brokered address space.2",
        "preceedingTasks": [
          15714010
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.1987847222222222,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0035144691770310262
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 14714078,
        "code": "ENTMQMAAS-210.2",
        "name": "[#284] : Instantiate template for brokered address space type in controller for brokered address space.2",
        "preceedingTasks": [
          13714055,
          14714060
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.1987847222222222,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0035144691770310262
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13714427,
        "code": "ENTMQMAAS-213.1",
        "name": "[#298] : Update Artemis startup scripts to support brokered address space.1",
        "preceedingTasks": [
          14714078
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.1987847222222222,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0035144691770310262
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13714058,
        "code": "ENTMQMAAS-207.1",
        "name": "[#281] : Add support for different address space types to systemtest framework.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.5951388888888889,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.028201696767302244
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13714059,
        "code": "ENTMQMAAS-208.1",
        "name": "[#282] : Write systemtests for brokered address space.1",
        "preceedingTasks": [
          13714058
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.5951388888888889,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.028201696767302244
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13714081,
        "code": "ENTMQMAAS-212.1",
        "name": "Configure JMS TCK testing on internal Jenkins instance.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.5951388888888889,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.028201696767302244
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 16714010,
        "code": "ENTMQMAAS-200.4",
        "name": "Add support for maintaining endpoints and address space readiness for brokered address space.4",
        "preceedingTasks": [
          13714427
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.2384722222222222,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0042161352502793166
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 15714060,
        "code": "ENTMQMAAS-209.3",
        "name": "[#283] : Document brokered address space.3",
        "preceedingTasks": [
          13714081,
          16714010
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.2384722222222222,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0042161352502793166
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 15714078,
        "code": "ENTMQMAAS-210.3",
        "name": "[#284] : Instantiate template for brokered address space type in controller for brokered address space.3",
        "preceedingTasks": [
          15714060
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.2384722222222222,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0042161352502793166
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 14714427,
        "code": "ENTMQMAAS-213.2",
        "name": "[#298] : Update Artemis startup scripts to support brokered address space.2",
        "preceedingTasks": [
          15714078
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.2384722222222222,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0042161352502793166
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13714548,
        "code": "ENTMQMAAS-214.1",
        "name": "[#303] : rename console to agent.1",
        "preceedingTasks": [
          14714427
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.2384722222222222,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0042161352502793166
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 17714010,
        "code": "ENTMQMAAS-200.5",
        "name": "Add support for maintaining endpoints and address space readiness for brokered address space.5",
        "preceedingTasks": [
          13714548
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.315625,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.005580179007722625
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 16714060,
        "code": "ENTMQMAAS-209.4",
        "name": "[#283] : Document brokered address space.4",
        "preceedingTasks": [
          14714058,
          17714010
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.315625,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.005580179007722625
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 15714427,
        "code": "ENTMQMAAS-213.3",
        "name": "[#298] : Update Artemis startup scripts to support brokered address space.3",
        "preceedingTasks": [
          13714056,
          16714060
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.315625,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.005580179007722625
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 14714548,
        "code": "ENTMQMAAS-214.2",
        "name": "[#303] : rename console to agent.2",
        "preceedingTasks": [
          15714427
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.315625,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.005580179007722625
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 14714058,
        "code": "ENTMQMAAS-207.2",
        "name": "[#281] : Add support for different address space types to systemtest framework.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.489409722222222,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.026332428881877003
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 14714059,
        "code": "ENTMQMAAS-208.2",
        "name": "[#282] : Write systemtests for brokered address space.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.489409722222222,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.026332428881877003
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 14714081,
        "code": "ENTMQMAAS-212.2",
        "name": "Configure JMS TCK testing on internal Jenkins instance.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.489409722222222,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.026332428881877003
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13714551,
        "code": "ENTMQMAAS-215.1",
        "name": "[#304] : separate system-tests to full and reduced set of tests.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.489409722222222,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.026332428881877003
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13714931,
        "code": "ENTMQMAAS-217.1",
        "name": "[#316] : create documentation for system tests.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.9222222222222225,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.06934400667902615
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13714052,
        "code": "ENTMQMAAS-201.1",
        "name": "[#275] : Console Server: Make source of stats, source of addresses pluggable.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.1697222222222226,
        "requireAssign": {
          "backend": 3.04,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.95
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.03836020086188905
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 13714055,
        "code": "ENTMQMAAS-204.1",
        "name": "[#278] : React to changes in the address definitions to ensure broker is correctly configured.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.1697222222222226,
        "requireAssign": {
          "backend": 3.04,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.95
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.03836020086188905
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 13714056,
        "code": "ENTMQMAAS-205.1",
        "name": "[#279] : Update console to work seamlessly with brokered address space.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.1697222222222226,
        "requireAssign": {
          "backend": 3.04,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.95
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.03836020086188905
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 13714054,
        "code": "ENTMQMAAS-203.1",
        "name": "[#277] : List and watch kubernetes address configmaps in controller for brokered address space.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.1697222222222226,
        "requireAssign": {
          "backend": 3.04,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.95
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.03836020086188905
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 13714057,
        "code": "ENTMQMAAS-206.1",
        "name": "[#280] : brokered address space: Update address status based on status of address in Broker.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.1697222222222226,
        "requireAssign": {
          "backend": 3.04,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.95
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.03836020086188905
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 18714010,
        "code": "ENTMQMAAS-200.6",
        "name": "Add support for maintaining endpoints and address space readiness for brokered address space.6",
        "preceedingTasks": [
          14714548
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.7401388888888888,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.013085489079055606
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 17714060,
        "code": "ENTMQMAAS-209.5",
        "name": "[#283] : Document brokered address space.5",
        "preceedingTasks": [
          14714059,
          18714010
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.7401388888888888,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.013085489079055606
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 16714427,
        "code": "ENTMQMAAS-213.4",
        "name": "[#298] : Update Artemis startup scripts to support brokered address space.4",
        "preceedingTasks": [
          13714054,
          17714060
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.7401388888888888,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.013085489079055606
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 15714548,
        "code": "ENTMQMAAS-214.3",
        "name": "[#303] : rename console to agent.3",
        "preceedingTasks": [
          14714081,
          16714427
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.7401388888888888,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.013085489079055606
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13715111,
        "code": "ENTMQMAAS-219.1",
        "name": "[#314] : Address Controller REST API is tied to schema for standard address space.1",
        "preceedingTasks": [
          15714548
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.7401388888888888,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.013085489079055606
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 19714010,
        "code": "ENTMQMAAS-200.7",
        "name": "Add support for maintaining endpoints and address space readiness for brokered address space.7",
        "preceedingTasks": [
          13714551,
          13714931,
          13714057,
          13715111
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.21458333333333335,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0037937850679566365
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 18714060,
        "code": "ENTMQMAAS-209.6",
        "name": "[#283] : Document brokered address space.6",
        "preceedingTasks": [
          19714010
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.21458333333333335,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0037937850679566365
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 16714548,
        "code": "ENTMQMAAS-214.4",
        "name": "[#303] : rename console to agent.4",
        "preceedingTasks": [
          18714060
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.21458333333333335,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0037937850679566365
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 14715111,
        "code": "ENTMQMAAS-219.2",
        "name": "[#314] : Address Controller REST API is tied to schema for standard address space.2",
        "preceedingTasks": [
          16714548
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.21458333333333335,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0037937850679566365
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13715436,
        "code": "ENTMQMAAS-228.1",
        "name": "[#341] : Add external TLS support to broker in brokered address space.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 7.007638888888889,
        "requireAssign": {
          "backend": 2.98,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.8
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.12389347935517933
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 20714010,
        "code": "ENTMQMAAS-200.8",
        "name": "Add support for maintaining endpoints and address space readiness for brokered address space.8",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.3319444444444444,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.041228253262777945
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 19714060,
        "code": "ENTMQMAAS-209.7",
        "name": "[#283] : Document brokered address space.7",
        "preceedingTasks": [
          20714010
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.3319444444444444,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.041228253262777945
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 17714548,
        "code": "ENTMQMAAS-214.5",
        "name": "[#303] : rename console to agent.5",
        "preceedingTasks": [
          19714060
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.3319444444444444,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.041228253262777945
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 21714010,
        "code": "ENTMQMAAS-200.9",
        "name": "Add support for maintaining endpoints and address space readiness for brokered address space.9",
        "preceedingTasks": [
          13715436,
          17714548
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.2138888888888888,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.02146128252035016
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 20714060,
        "code": "ENTMQMAAS-209.8",
        "name": "[#283] : Document brokered address space.8",
        "preceedingTasks": [
          21714010
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.2138888888888888,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.02146128252035016
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 18714548,
        "code": "ENTMQMAAS-214.6",
        "name": "[#303] : rename console to agent.6",
        "preceedingTasks": [
          20714060
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.2138888888888888,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.02146128252035016
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13716986,
        "code": "ENTMQMAAS-238.1",
        "name": "[#325] : Migrate build files to maven.1",
        "preceedingTasks": [
          18714548
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.2138888888888888,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.02146128252035016
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 22714010,
        "code": "ENTMQMAAS-200.10",
        "name": "Add support for maintaining endpoints and address space readiness for brokered address space.10",
        "preceedingTasks": [
          13716986
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.09027777777777778,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0015960908052891996
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 21714060,
        "code": "ENTMQMAAS-209.9",
        "name": "[#283] : Document brokered address space.9",
        "preceedingTasks": [
          22714010
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.09027777777777778,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0015960908052891996
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 19714548,
        "code": "ENTMQMAAS-214.7",
        "name": "[#303] : rename console to agent.7",
        "preceedingTasks": [
          21714060
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.09027777777777778,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0015960908052891996
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      }
    ],
    "employees": [
      {
        "id": 5592,
        "name": "rgodfrey@redhat.com",
        "employeeNumber": "MS2024592",
        "position": "DevOps",
        "tags": [],
        "level": 2,
        "costPerHour": 5,
        "qualities": {
          "backend": 2.98,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.8
        }
      },
      {
        "id": 3143,
        "name": "gordonsim",
        "employeeNumber": "MS2024143",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.04,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.95
        }
      },
      {
        "id": 5348,
        "name": "lulf@redhat.com",
        "employeeNumber": "MS2024348",
        "position": "DevOps",
        "tags": [],
        "level": 2,
        "costPerHour": 5,
        "qualities": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        }
      },
      {
        "id": 5134,
        "name": "tkratky_jira",
        "employeeNumber": "MS2024134",
        "position": "QA",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        }
      },
      {
        "id": 3375,
        "name": "dkornel@redhat.com",
        "employeeNumber": "MS2024375",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        }
      }
    ]
  },
  {
    "id": 3,
    "projectKey": "ENTMQMAAS_4xxxx",
    "projectName": "A-MQ Messaging-as-a-Service",
    "projectType": "software",
    "projectLead": "rgodfrey@redhat.com",
    "description": "Created from upstream issue [#795|https://github.com/EnMasseProject/enmasse/issues/795].",
    "startTime": "2018-03-05T01:14:01.000Z",
    "endTime": "2022-01-26T05:39:00.000Z",
    "assets": null,
    "tasks": [
      {
        "id": 13737484,
        "code": "ENTMQMAAS-406.1",
        "name": "[#972] : Make global-max-size parameter configurable via template/plan.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.6060185185185185,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.018843922541497363
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13737430,
        "code": "ENTMQMAAS-400.1",
        "name": "[#795] : System-tests: Enable authentication in marathon tests.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.2594618055555556,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.008067869243201246
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 14737430,
        "code": "ENTMQMAAS-400.2",
        "name": "[#795] : System-tests: Enable authentication in marathon tests.2",
        "preceedingTasks": [
          13737484,
          13737430
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.10674603174603176,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0033192285258077862
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13738314,
        "code": "ENTMQMAAS-416.1",
        "name": "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.1",
        "preceedingTasks": [
          14737430
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.01423611111111111,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00044266662960354766
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13738369,
        "code": "ENTMQMAAS-417.1",
        "name": "[#1021] : system-tests: modify QueueTest#testScaledown.1",
        "preceedingTasks": [
          13738314
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.016087962962962964,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0005002492806088873
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 14738314,
        "code": "ENTMQMAAS-416.2",
        "name": "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.2",
        "preceedingTasks": [
          13738369
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.20375,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.006335531176862482
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 14738369,
        "code": "ENTMQMAAS-417.2",
        "name": "[#1021] : system-tests: modify QueueTest#testScaledown.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.18944444444444444,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.005890705197846235
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 15738369,
        "code": "ENTMQMAAS-417.3",
        "name": "[#1021] : system-tests: modify QueueTest#testScaledown.3",
        "preceedingTasks": [
          14738314,
          14738369
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.28604166666666664,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.008894360230912257
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13738609,
        "code": "ENTMQMAAS-426.1",
        "name": "[#1034] : system-tests: create test for REST API - address resource required params are missing.1",
        "preceedingTasks": [
          13737492,
          15738369
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.28604166666666664,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.008894360230912257
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13738628,
        "code": "ENTMQMAAS-428.1",
        "name": "[#1029] : system-tests: modify authentication tests to create multiple address-spaces in one request.1",
        "preceedingTasks": [
          13737483,
          13738609
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.28604166666666664,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.008894360230912257
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13738631,
        "code": "ENTMQMAAS-431.1",
        "name": "[#1036] : system-tests: create new test for address-space endpoints \\\"host\\\".1",
        "preceedingTasks": [
          13738628
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.28604166666666664,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.008894360230912257
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13738629,
        "code": "ENTMQMAAS-429.1",
        "name": "[#1031] : system-tests: create new test for replace address-space list.1",
        "preceedingTasks": [
          13738631
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.28604166666666664,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.008894360230912257
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13738634,
        "code": "ENTMQMAAS-434.1",
        "name": "[#1040] : system-tests: create new test that verify that returned restapi routes are reachable.1",
        "preceedingTasks": [
          13738629
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.28604166666666664,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.008894360230912257
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13737483,
        "code": "ENTMQMAAS-405.1",
        "name": "[#949] : agent: Results count is not set correctly after refresh the page.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3904166666666666,
        "requireAssign": {
          "backend": 3.04,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.95
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.04323449394108406
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 13737485,
        "code": "ENTMQMAAS-407.1",
        "name": "[#973] : Configure per-address settings for each address created on broker.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3904166666666666,
        "requireAssign": {
          "backend": 3.04,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.95
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.04323449394108406
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 13737492,
        "code": "ENTMQMAAS-410.1",
        "name": "Docs: how to manage user permissions.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.7848958333333333,
        "requireAssign": {
          "backend": 3.16,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.93
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.05550067827992773
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 13737495,
        "code": "ENTMQMAAS-411.1",
        "name": "Docs: document the sign-up process for beta.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.7848958333333333,
        "requireAssign": {
          "backend": 3.16,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.93
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.05550067827992773
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 14737484,
        "code": "ENTMQMAAS-406.2",
        "name": "[#972] : Make global-max-size parameter configurable via template/plan.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.6422222222222222,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0510642949115351
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13738010,
        "code": "ENTMQMAAS-413.1",
        "name": "[#1009] : Make resync interval in controllers configurable.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.6422222222222222,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0510642949115351
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13738011,
        "code": "ENTMQMAAS-414.1",
        "name": "[#1011] : Separata status check from controller resync.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.6422222222222222,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0510642949115351
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 15737484,
        "code": "ENTMQMAAS-406.3",
        "name": "[#972] : Make global-max-size parameter configurable via template/plan.3",
        "preceedingTasks": [
          16738369,
          13738608,
          13738011
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.11782407407407407,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.003663696170214728
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 14738010,
        "code": "ENTMQMAAS-413.2",
        "name": "[#1009] : Make resync interval in controllers configurable.2",
        "preceedingTasks": [
          15737484
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.11782407407407407,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.003663696170214728
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 14738011,
        "code": "ENTMQMAAS-414.2",
        "name": "[#1011] : Separata status check from controller resync.2",
        "preceedingTasks": [
          14738010
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.11782407407407407,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.003663696170214728
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13739606,
        "code": "ENTMQMAAS-435.1",
        "name": "[#1017] : Events sent to address of type queue not delivered after a while.1",
        "preceedingTasks": [
          14738011
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.11782407407407407,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.003663696170214728
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 15738314,
        "code": "ENTMQMAAS-416.3",
        "name": "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.3",
        "preceedingTasks": [
          14737484,
          13738634
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.7602623456790122,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.023640077514817098
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13738605,
        "code": "ENTMQMAAS-422.1",
        "name": "[#1026] : System-tests: create test for REST API - GET | /v1/addresses/myspace/:name .1",
        "preceedingTasks": [
          13737485,
          13737495,
          15738314
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.7602623456790122,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.023640077514817098
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13738610,
        "code": "ENTMQMAAS-427.1",
        "name": "[#1035] : system-tests: create set of tests for REST API - address resource optional params are missing.1",
        "preceedingTasks": [
          13738010,
          13738605
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.7602623456790122,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.023640077514817098
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13738608,
        "code": "ENTMQMAAS-425.1",
        "name": "[#1033] : System-tests: create test for REST API - GET /v1/schema.1",
        "preceedingTasks": [
          13738610
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.7602623456790122,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.023640077514817098
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13738607,
        "code": "ENTMQMAAS-424.1",
        "name": "[#1028] : System-tests: create test for REST API - DELETE | /v1/addresses/myspace.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.7602623456790122,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.023640077514817098
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 14737485,
        "code": "ENTMQMAAS-407.2",
        "name": "[#973] : Configure per-address settings for each address created on broker.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.7286458333333332,
        "requireAssign": {
          "backend": 3.04,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.95
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.05375160525564054
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 16738369,
        "code": "ENTMQMAAS-417.4",
        "name": "[#1021] : system-tests: modify QueueTest#testScaledown.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.7882716049382715,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.02451101511127286
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 14738609,
        "code": "ENTMQMAAS-426.2",
        "name": "[#1034] : system-tests: create test for REST API - address resource required params are missing.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.7882716049382715,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.02451101511127286
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 14738628,
        "code": "ENTMQMAAS-428.2",
        "name": "[#1029] : system-tests: modify authentication tests to create multiple address-spaces in one request.2",
        "preceedingTasks": [
          13739606,
          14738609
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.7882716049382715,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.02451101511127286
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 14738631,
        "code": "ENTMQMAAS-431.2",
        "name": "[#1036] : system-tests: create new test for address-space endpoints \\\"host\\\".2",
        "preceedingTasks": [
          13738607,
          14738628
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.7882716049382715,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.02451101511127286
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 14738629,
        "code": "ENTMQMAAS-429.2",
        "name": "[#1031] : system-tests: create new test for replace address-space list.2",
        "preceedingTasks": [
          14738631
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.7882716049382715,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.02451101511127286
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 14738634,
        "code": "ENTMQMAAS-434.2",
        "name": "[#1040] : system-tests: create new test that verify that returned restapi routes are reachable.2",
        "preceedingTasks": [
          14738629
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.7882716049382715,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.02451101511127286
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 16738314,
        "code": "ENTMQMAAS-416.4",
        "name": "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 0.6613888888888889,
        "requireAssign": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.020565643806557017
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 17738369,
        "code": "ENTMQMAAS-417.5",
        "name": "[#1021] : system-tests: modify QueueTest#testScaledown.5",
        "preceedingTasks": [
          15738010,
          14737485,
          14738634
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.021875000000000002,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0006801950650005734
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 15738609,
        "code": "ENTMQMAAS-426.3",
        "name": "[#1034] : system-tests: create test for REST API - address resource required params are missing.3",
        "preceedingTasks": [
          17738369
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.021875000000000002,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0006801950650005734
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 15738631,
        "code": "ENTMQMAAS-431.3",
        "name": "[#1036] : system-tests: create new test for address-space endpoints \\\"host\\\".3",
        "preceedingTasks": [
          15738609
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.021875000000000002,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0006801950650005734
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 15738629,
        "code": "ENTMQMAAS-429.3",
        "name": "[#1031] : system-tests: create new test for replace address-space list.3",
        "preceedingTasks": [
          15738631
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.021875000000000002,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0006801950650005734
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 15738634,
        "code": "ENTMQMAAS-434.3",
        "name": "[#1040] : system-tests: create new test that verify that returned restapi routes are reachable.3",
        "preceedingTasks": [
          15738629
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 0.021875000000000002,
        "requireAssign": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0006801950650005734
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 14737492,
        "code": "ENTMQMAAS-410.2",
        "name": "Docs: how to manage user permissions.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.341666666666667,
        "requireAssign": {
          "backend": 3.16,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.93
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.07281326219625185
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 16737484,
        "code": "ENTMQMAAS-406.4",
        "name": "[#972] : Make global-max-size parameter configurable via template/plan.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.8543055555555555,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.02656431647503826
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 15738010,
        "code": "ENTMQMAAS-413.3",
        "name": "[#1009] : Make resync interval in controllers configurable.3",
        "preceedingTasks": [
          16737484
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.8543055555555555,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.02656431647503826
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 15738011,
        "code": "ENTMQMAAS-414.3",
        "name": "[#1011] : Separata status check from controller resync.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.8543055555555555,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.02656431647503826
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 14739606,
        "code": "ENTMQMAAS-435.2",
        "name": "[#1017] : Events sent to address of type queue not delivered after a while.2",
        "preceedingTasks": [
          16738314,
          15738634,
          15738011
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.8543055555555555,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.02656431647503826
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 17737484,
        "code": "ENTMQMAAS-406.5",
        "name": "[#972] : Make global-max-size parameter configurable via template/plan.5",
        "preceedingTasks": [
          14739606
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.17002314814814815,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.005286807145427736
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 16738010,
        "code": "ENTMQMAAS-413.4",
        "name": "[#1009] : Make resync interval in controllers configurable.4",
        "preceedingTasks": [
          17737484
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.17002314814814815,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.005286807145427736
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 16738011,
        "code": "ENTMQMAAS-414.4",
        "name": "[#1011] : Separata status check from controller resync.4",
        "preceedingTasks": [
          16738010
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 0.17002314814814815,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.005286807145427736
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      }
    ],
    "employees": [
      {
        "id": 5014,
        "name": "rhn-support-jmalloy",
        "employeeNumber": "MS2024014",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.16,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.93
        }
      },
      {
        "id": 3143,
        "name": "gordonsim",
        "employeeNumber": "MS2024143",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.04,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.95
        }
      },
      {
        "id": 5348,
        "name": "lulf@redhat.com",
        "employeeNumber": "MS2024348",
        "position": "DevOps",
        "tags": [],
        "level": 2,
        "costPerHour": 5,
        "qualities": {
          "backend": 2.99,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.81
        }
      },
      {
        "id": 5134,
        "name": "tkratky_jira",
        "employeeNumber": "MS2024134",
        "position": "QA",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.82,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 3.02
        }
      },
      {
        "id": 3375,
        "name": "dkornel@redhat.com",
        "employeeNumber": "MS2024375",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.88,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.89
        }
      }
    ]
  }
]; module.exports = { projects};
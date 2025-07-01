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
        "id": 13727841,
        "code": "ENTMQMAAS-328.1",
        "name": "Document Creating and deleting addresses.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 25.962500000000002,
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
            "weight": 0.019846787121600165
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 15730070,
        "code": "ENTMQMAAS-334.3",
        "name": "[#746] : Add support for checking requests against limits and setting status on address.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3197916666666667,
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
            "weight": 0.0010089022341144042
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 15730071,
        "code": "ENTMQMAAS-335.3",
        "name": "[#747] : Add support for colocated topics.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3197916666666667,
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
            "weight": 0.0010089022341144042
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 15730072,
        "code": "ENTMQMAAS-336.3",
        "name": "[#748] : Persist decision about where queues/topics are placed.3",
        "preceedingTasks": [
          13727841,
          15730071
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3197916666666667,
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
            "weight": 0.0010089022341144042
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 15730076,
        "code": "ENTMQMAAS-340.3",
        "name": "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3197916666666667,
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
            "weight": 0.0010089022341144042
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 15730083,
        "code": "ENTMQMAAS-347.3",
        "name": "[#759] : Delegate from keycloak to OpenShift Pro.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3197916666666667,
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
            "weight": 0.0010089022341144042
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 15730092,
        "code": "ENTMQMAAS-356.3",
        "name": "[#768] : Disable MQTT (configurable upstream?).3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3197916666666667,
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
            "weight": 0.0010089022341144042
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13730089,
        "code": "ENTMQMAAS-353.1",
        "name": "[#765] : Changes to service broker (service type is just address space, different plans are supported. See also point above about how to tie plans offered to plans specified) .1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 7.35162037037037,
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
            "weight": 0.005619876533059609
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 13730082,
        "code": "ENTMQMAAS-346.1",
        "name": "[#758] : Keycloak plugin OAUTH2 support.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 7.35162037037037,
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
            "weight": 0.005619876533059609
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 19730143,
        "code": "ENTMQMAAS-360.7",
        "name": "[#772] : WebConsole Tests for addresses status.7",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.3185185185185186,
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
            "weight": 0.0010079289880760584
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 19730148,
        "code": "ENTMQMAAS-365.7",
        "name": "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.7",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.3185185185185186,
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
            "weight": 0.0010079289880760584
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 19730167,
        "code": "ENTMQMAAS-367.7",
        "name": "Setup Jenkins job with productized images.7",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.3185185185185186,
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
            "weight": 0.0010079289880760584
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13733964,
        "code": "ENTMQMAAS-384.1",
        "name": "[#877] : Make ansible deployment for install dependencies for running systemtests.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.3185185185185186,
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
            "weight": 0.0010079289880760584
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 15730141,
        "code": "ENTMQMAAS-358.3",
        "name": "[#770] : Define tests for limitation of address-spaces (by credits).3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 4.67037037037037,
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
            "weight": 0.003570220376303116
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 14732596,
        "code": "ENTMQMAAS-374.2",
        "name": "[#843] : improve test framework regarding to definition of dynamically created plans.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 4.67037037037037,
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
            "weight": 0.003570220376303116
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13730091,
        "code": "ENTMQMAAS-355.1",
        "name": "[#767] : Disable durable subs (configurable upstream?).1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 6.020277777777778,
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
            "weight": 0.004602144303070031
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 13730085,
        "code": "ENTMQMAAS-349.1",
        "name": "[#761] : Console to support status for addresses.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 6.020277777777778,
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
            "weight": 0.004602144303070031
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 13730086,
        "code": "ENTMQMAAS-350.1",
        "name": "[#762] : How to match plans offered to plans specified (e.g. have console offer plans based on the presence of configmaps in its namespace or variations of that).1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 6.020277777777778,
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
            "weight": 0.004602144303070031
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 13730081,
        "code": "ENTMQMAAS-345.1",
        "name": "[#757] : Oauth for console.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 6.020277777777778,
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
            "weight": 0.004602144303070031
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 13735522,
        "code": "ENTMQMAAS-387.1",
        "name": "[#918] : system-tests: new scale test: testScaleRouterAutomatically.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.575925925925926,
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
            "weight": 0.0012047016416470865
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13735531,
        "code": "ENTMQMAAS-390.1",
        "name": "[#921] : system-tests: new Plan test: testPlansAvailableViaConsole.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.575925925925926,
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
            "weight": 0.0012047016416470865
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 14735522,
        "code": "ENTMQMAAS-387.2",
        "name": "[#918] : system-tests: new scale test: testScaleRouterAutomatically.2",
        "preceedingTasks": [
          15730089
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.744965277777778,
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
            "weight": 0.0013339221724656509
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 14735531,
        "code": "ENTMQMAAS-390.2",
        "name": "[#921] : system-tests: new Plan test: testPlansAvailableViaConsole.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.744965277777778,
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
            "weight": 0.0013339221724656509
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13736171,
        "code": "ENTMQMAAS-391.1",
        "name": "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space.1",
        "preceedingTasks": [
          14735531
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.744965277777778,
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
            "weight": 0.0013339221724656509
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 22730167,
        "code": "ENTMQMAAS-367.10",
        "name": "Setup Jenkins job with productized images.10",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.3806944444444447,
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
            "weight": 0.0010554587855123698
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 14735527,
        "code": "ENTMQMAAS-388.2",
        "name": "[#919] : system-tests: new scale test: testPodsLimitation.2",
        "preceedingTasks": [
          15730091,
          22730167
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.3806944444444447,
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
            "weight": 0.0010554587855123698
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 14735530,
        "code": "ENTMQMAAS-389.2",
        "name": "[#920] : system-tests: new scale test: testCreditLimitation.2",
        "preceedingTasks": [
          14735527
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.3806944444444447,
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
            "weight": 0.0010554587855123698
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 15730089,
        "code": "ENTMQMAAS-353.3",
        "name": "[#765] : Changes to service broker (service type is just address space, different plans are supported. See also point above about how to tie plans offered to plans specified) .3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 5.649537037037036,
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
            "weight": 0.0043187350567037
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 15730082,
        "code": "ENTMQMAAS-346.3",
        "name": "[#758] : Keycloak plugin OAUTH2 support.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 5.649537037037036,
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
            "weight": 0.0043187350567037
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 21730070,
        "code": "ENTMQMAAS-334.9",
        "name": "[#746] : Add support for checking requests against limits and setting status on address.9",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1606944444444445,
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
            "weight": 0.0008872818700861958
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 21730072,
        "code": "ENTMQMAAS-336.9",
        "name": "[#748] : Persist decision about where queues/topics are placed.9",
        "preceedingTasks": [
          21730070
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1606944444444445,
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
            "weight": 0.0008872818700861958
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 21730076,
        "code": "ENTMQMAAS-340.9",
        "name": "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.9",
        "preceedingTasks": [
          14735522,
          21730072
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1606944444444445,
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
            "weight": 0.0008872818700861958
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 21730083,
        "code": "ENTMQMAAS-347.9",
        "name": "[#759] : Delegate from keycloak to OpenShift Pro.9",
        "preceedingTasks": [
          21730076
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1606944444444445,
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
            "weight": 0.0008872818700861958
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 18733952,
        "code": "ENTMQMAAS-382.6",
        "name": "Investigate options for enforcing backlog limits on broker/router.6",
        "preceedingTasks": [
          21730083
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1606944444444445,
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
            "weight": 0.0008872818700861958
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 15730091,
        "code": "ENTMQMAAS-355.3",
        "name": "[#767] : Disable durable subs (configurable upstream?).3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.6263888888888887,
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
            "weight": 0.0027721586248594674
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 15730081,
        "code": "ENTMQMAAS-345.3",
        "name": "[#757] : Oauth for console.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.6263888888888887,
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
            "weight": 0.0027721586248594674
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 14727841,
        "code": "ENTMQMAAS-328.2",
        "name": "Document Creating and deleting addresses.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 12.979861111111111,
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
            "weight": 0.00992233183784916
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 13733175,
        "code": "ENTMQMAAS-376.1",
        "name": "Add Documentation Conventions to Guide.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 12.979861111111111,
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
            "weight": 0.00992233183784916
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 16730091,
        "code": "ENTMQMAAS-355.4",
        "name": "[#767] : Disable durable subs (configurable upstream?).4",
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
            "weight": 0.0010628908461688292
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 16730081,
        "code": "ENTMQMAAS-345.4",
        "name": "[#757] : Oauth for console.4",
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
            "weight": 0.0010628908461688292
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 15727841,
        "code": "ENTMQMAAS-328.3",
        "name": "Document Creating and deleting addresses.3",
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
            "weight": 0.0013644467073046815
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 14733175,
        "code": "ENTMQMAAS-376.2",
        "name": "Add Documentation Conventions to Guide.2",
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
            "weight": 0.0013644467073046815
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 25730083,
        "code": "ENTMQMAAS-347.13",
        "name": "[#759] : Delegate from keycloak to OpenShift Pro.13",
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
            "weight": 0.0012553812171711355
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 22733952,
        "code": "ENTMQMAAS-382.10",
        "name": "Investigate options for enforcing backlog limits on broker/router.10",
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
            "weight": 0.0012553812171711355
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 17730091,
        "code": "ENTMQMAAS-355.5",
        "name": "[#767] : Disable durable subs (configurable upstream?).5",
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
            "weight": 0.0013214469277923074
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 17730081,
        "code": "ENTMQMAAS-345.5",
        "name": "[#757] : Oauth for console.5",
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
            "weight": 0.0013214469277923074
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 16727841,
        "code": "ENTMQMAAS-328.4",
        "name": "Document Creating and deleting addresses.4",
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
            "weight": 0.0017900648952558647
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 15733175,
        "code": "ENTMQMAAS-376.3",
        "name": "Add Documentation Conventions to Guide.3",
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
            "weight": 0.0017900648952558647
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 16730089,
        "code": "ENTMQMAAS-353.4",
        "name": "[#765] : Changes to service broker (service type is just address space, different plans are supported. See also point above about how to tie plans offered to plans specified) .4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 10.585069444444445,
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
            "weight": 0.008091656039720497
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 16730082,
        "code": "ENTMQMAAS-346.4",
        "name": "[#758] : Keycloak plugin OAUTH2 support.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 10.585069444444445,
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
            "weight": 0.008091656039720497
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 18730081,
        "code": "ENTMQMAAS-345.6",
        "name": "[#757] : Oauth for console.6",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 4.95462962962963,
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
            "weight": 0.003787519673591986
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 29730083,
        "code": "ENTMQMAAS-347.17",
        "name": "[#759] : Delegate from keycloak to OpenShift Pro.17",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.1622685185185184,
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
            "weight": 0.0016529256807616677
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 22737421,
        "code": "ENTMQMAAS-397.10",
        "name": "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).10",
        "preceedingTasks": [
          18730081
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.1269444444444445,
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
            "weight": 0.0008614820023787714
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 23737421,
        "code": "ENTMQMAAS-397.11",
        "name": "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).11",
        "preceedingTasks": [
          30730083
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.8850198412698413,
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
            "weight": 0.001440985556463171
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 30730083,
        "code": "ENTMQMAAS-347.18",
        "name": "[#759] : Delegate from keycloak to OpenShift Pro.18",
        "preceedingTasks": [
          22737421
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.223148148148148,
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
            "weight": 0.002463905061441544
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 17730089,
        "code": "ENTMQMAAS-353.5",
        "name": "[#765] : Changes to service broker (service type is just address space, different plans are supported. See also point above about how to tie plans offered to plans specified) .5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 45.197916666666664,
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
            "weight": 0.03455111913040568
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 31730083,
        "code": "ENTMQMAAS-347.19",
        "name": "[#759] : Delegate from keycloak to OpenShift Pro.19",
        "preceedingTasks": [
          23737421,
          17727841
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.0098090277777778,
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
            "weight": 0.0007719389430053186
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 17727841,
        "code": "ENTMQMAAS-328.5",
        "name": "Document Creating and deleting addresses.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 27.226302083333334,
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
            "weight": 0.020812888649255495
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 16733175,
        "code": "ENTMQMAAS-376.4",
        "name": "Add Documentation Conventions to Guide.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 27.226302083333334,
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
            "weight": 0.020812888649255495
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 18727841,
        "code": "ENTMQMAAS-328.6",
        "name": "Document Creating and deleting addresses.6",
        "preceedingTasks": [
          31730083,
          17730089,
          16733175
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.463988095238095,
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
            "weight": 0.0018835723522907094
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 17733175,
        "code": "ENTMQMAAS-376.5",
        "name": "Add Documentation Conventions to Guide.5",
        "preceedingTasks": [
          18727841
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.463988095238095,
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
            "weight": 0.0018835723522907094
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 19727841,
        "code": "ENTMQMAAS-328.7",
        "name": "Document Creating and deleting addresses.7",
        "preceedingTasks": [
          17733175
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 36.789351851851855,
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
            "weight": 0.02812327143169381
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 13721458,
        "code": "ENTMQMAAS-308.1",
        "name": "Console UI tweaks to Create Address wizard.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "issue_tracking"
        ],
        "estimateTime": 905.0409722222222,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 3.97,
          "database": 2.31,
          "devops": 2.61,
          "ai_ml": 2.75,
          "testing": 1.98,
          "issue_tracking": 2.91
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.6918499956483579
          }
        ],
        "projectKey": "ENTMQMAAS_3xxxx",
        "assignee": "eallen@redhat.com"
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
        "id": 4159,
        "name": "eallen@redhat.com",
        "employeeNumber": "MS2024159",
        "position": "Dev",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.67,
          "frontend": 3.97,
          "database": 2.31,
          "devops": 2.61,
          "ai_ml": 2.75,
          "testing": 1.98,
          "issue_tracking": 2.91
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
        "id": 14714931,
        "code": "ENTMQMAAS-217.2",
        "name": "[#316] : create documentation for system tests.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.655555555555556,
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
            "weight": 0.0006994821895062397
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13715415,
        "code": "ENTMQMAAS-225.1",
        "name": "[#338] : System-tests: brokered: tests for particular supported features in brokered address space.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.655555555555556,
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
            "weight": 0.0006994821895062397
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13715420,
        "code": "ENTMQMAAS-227.1",
        "name": "[#340] : System-tests: brokered: webconsole tests.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.655555555555556,
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
            "weight": 0.0006994821895062397
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 15714081,
        "code": "ENTMQMAAS-212.3",
        "name": "Configure JMS TCK testing on internal Jenkins instance.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 2.142261904761905,
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
            "weight": 0.00032186793386033367
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 14714551,
        "code": "ENTMQMAAS-215.2",
        "name": "[#304] : separate system-tests to full and reduced set of tests.2",
        "preceedingTasks": [
          15714081
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 2.142261904761905,
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
            "weight": 0.00032186793386033367
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13715406,
        "code": "ENTMQMAAS-221.1",
        "name": "[#334] : test create/delete of brokered address space.1",
        "preceedingTasks": [
          14714551
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 2.142261904761905,
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
            "weight": 0.00032186793386033367
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13715409,
        "code": "ENTMQMAAS-222.1",
        "name": "[#335] : System-tests: brokered: test address types.1",
        "preceedingTasks": [
          13715406
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 2.142261904761905,
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
            "weight": 0.00032186793386033367
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13715410,
        "code": "ENTMQMAAS-223.1",
        "name": "[#336] : System-tests: brokered: test durable subscribers.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 2.142261904761905,
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
            "weight": 0.00032186793386033367
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13715411,
        "code": "ENTMQMAAS-224.1",
        "name": "[#337] : System-tests: brokered: test JMS client.1",
        "preceedingTasks": [
          13715410
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 2.142261904761905,
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
            "weight": 0.00032186793386033367
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13715419,
        "code": "ENTMQMAAS-226.1",
        "name": "[#339] : System-tests: brokered: extend authentication tests.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 2.142261904761905,
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
            "weight": 0.00032186793386033367
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 14714056,
        "code": "ENTMQMAAS-205.2",
        "name": "[#279] : Update console to work seamlessly with brokered address space.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 4.998842592592593,
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
            "weight": 0.0007510599583525877
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 14714054,
        "code": "ENTMQMAAS-203.2",
        "name": "[#277] : List and watch kubernetes address configmaps in controller for brokered address space.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 4.998842592592593,
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
            "weight": 0.0007510599583525877
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 14714057,
        "code": "ENTMQMAAS-206.2",
        "name": "[#280] : brokered address space: Update address status based on status of address in Broker.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 4.998842592592593,
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
            "weight": 0.0007510599583525877
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 13717975,
        "code": "ENTMQMAAS-245.1",
        "name": "[#395] : Update Keycloak dependency to version 3.3.0.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.0222222222222224,
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
            "weight": 0.0001535855881493414
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 17714056,
        "code": "ENTMQMAAS-205.5",
        "name": "[#279] : Update console to work seamlessly with brokered address space.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.315972222222222,
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
            "weight": 0.0001977205771351915
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 17714057,
        "code": "ENTMQMAAS-206.5",
        "name": "[#280] : brokered address space: Update address status based on status of address in Broker.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.315972222222222,
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
            "weight": 0.0001977205771351915
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 14718054,
        "code": "ENTMQMAAS-252.2",
        "name": "[#403] : Add the ability to use AMQP over WebSockets to a route on port 443.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.315972222222222,
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
            "weight": 0.0001977205771351915
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 16714081,
        "code": "ENTMQMAAS-212.4",
        "name": "Configure JMS TCK testing on internal Jenkins instance.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.6098958333333335,
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
            "weight": 0.0002418816506298986
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 15714551,
        "code": "ENTMQMAAS-215.3",
        "name": "[#304] : separate system-tests to full and reduced set of tests.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.6098958333333335,
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
            "weight": 0.0002418816506298986
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 14715410,
        "code": "ENTMQMAAS-223.2",
        "name": "[#336] : System-tests: brokered: test durable subscribers.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.6098958333333335,
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
            "weight": 0.0002418816506298986
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 14715411,
        "code": "ENTMQMAAS-224.2",
        "name": "[#337] : System-tests: brokered: test JMS client.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.6098958333333335,
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
            "weight": 0.0002418816506298986
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 18714081,
        "code": "ENTMQMAAS-212.6",
        "name": "Configure JMS TCK testing on internal Jenkins instance.6",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.372222222222222,
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
            "weight": 0.00020617195800482236
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 17714551,
        "code": "ENTMQMAAS-215.5",
        "name": "[#304] : separate system-tests to full and reduced set of tests.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.372222222222222,
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
            "weight": 0.00020617195800482236
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 14718818,
        "code": "ENTMQMAAS-259.2",
        "name": "[#436] : System-tests: brokered: extend brokered jms TopicTest about shared/non-shared durable subscription.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.372222222222222,
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
            "weight": 0.00020617195800482236
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 14717975,
        "code": "ENTMQMAAS-245.2",
        "name": "[#395] : Update Keycloak dependency to version 3.3.0.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 5.993402777777778,
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
            "weight": 0.0009004894147573987
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 13718221,
        "code": "ENTMQMAAS-254.1",
        "name": "[#414] : Add support for OAUTH2 authentication to Keycloak plugin.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 5.993402777777778,
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
            "weight": 0.0009004894147573987
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 16718428,
        "code": "ENTMQMAAS-255.4",
        "name": "[#417] : Authenticate /v1/addressspaces REST APIs using RBAC.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.397222222222222,
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
            "weight": 0.00036017489829587394
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 16718429,
        "code": "ENTMQMAAS-256.4",
        "name": "[#418] : Authenticate /v1/addresses REST API using RBAC.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.397222222222222,
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
            "weight": 0.00036017489829587394
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 18714056,
        "code": "ENTMQMAAS-205.6",
        "name": "[#279] : Update console to work seamlessly with brokered address space.6",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.959722222222222,
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
            "weight": 0.0005949354780078428
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 15718054,
        "code": "ENTMQMAAS-252.3",
        "name": "[#403] : Add the ability to use AMQP over WebSockets to a route on port 443.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.959722222222222,
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
            "weight": 0.0005949354780078428
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 15717975,
        "code": "ENTMQMAAS-245.3",
        "name": "[#395] : Update Keycloak dependency to version 3.3.0.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.0166666666666666,
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
            "weight": 0.00015275088386592104
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 14718221,
        "code": "ENTMQMAAS-254.2",
        "name": "[#414] : Add support for OAUTH2 authentication to Keycloak plugin.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.0166666666666666,
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
            "weight": 0.00015275088386592104
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 13719749,
        "code": "ENTMQMAAS-269.1",
        "name": "[#456] : Upgrade to Artemis 2.4.0.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.0166666666666666,
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
            "weight": 0.00015275088386592104
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 16719755,
        "code": "ENTMQMAAS-275.4",
        "name": "[#464] : Add HTTPS support for standard authentication service.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.9453703703703704,
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
            "weight": 0.00029228561657768684
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 16719772,
        "code": "ENTMQMAAS-288.4",
        "name": "[#474] : Support multiple address controllers in the same OpenShift cluster.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.9453703703703704,
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
            "weight": 0.00029228561657768684
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 16719771,
        "code": "ENTMQMAAS-287.4",
        "name": "[#473] : Limit the scope of privileges required by address-controller.4",
        "preceedingTasks": [
          16719772
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.9453703703703704,
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
            "weight": 0.00029228561657768684
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 28714931,
        "code": "ENTMQMAAS-217.16",
        "name": "[#316] : create documentation for system tests.16",
        "preceedingTasks": [
          16719755
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
            "weight": 0.00021312782703332517
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 27715420,
        "code": "ENTMQMAAS-227.15",
        "name": "[#340] : System-tests: brokered: webconsole tests.15",
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
            "weight": 0.00021312782703332517
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 24717998,
        "code": "ENTMQMAAS-251.12",
        "name": "[ #408]: System-test: Implement java client executor (cli-java).12",
        "preceedingTasks": [
          27715420
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
            "weight": 0.00021312782703332517
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 24717997,
        "code": "ENTMQMAAS-250.12",
        "name": "[#407]: System-test: Implement proton-python executor (cli-proton-python).12",
        "preceedingTasks": [
          20714056,
          16719771,
          24717998
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
            "weight": 0.00021312782703332517
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 20719744,
        "code": "ENTMQMAAS-268.8",
        "name": "[#472] : System-tests: create tests for large messages.8",
        "preceedingTasks": [
          24717997
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
            "weight": 0.00021312782703332517
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 17720873,
        "code": "ENTMQMAAS-299.5",
        "name": "[#514] : System-tests: create testCreateDeleteUsersLong.5",
        "preceedingTasks": [
          18719752,
          20719744
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
            "weight": 0.00021312782703332517
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 17719771,
        "code": "ENTMQMAAS-287.5",
        "name": "[#473] : Limit the scope of privileges required by address-controller.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 8.947222222222221,
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
            "weight": 0.0013442912484484472
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 20714056,
        "code": "ENTMQMAAS-205.8",
        "name": "[#279] : Update console to work seamlessly with brokered address space.8",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 10.561805555555555,
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
            "weight": 0.0015868771808174816
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 17718054,
        "code": "ENTMQMAAS-252.5",
        "name": "[#403] : Add the ability to use AMQP over WebSockets to a route on port 443.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 10.561805555555555,
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
            "weight": 0.0015868771808174816
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 18719752,
        "code": "ENTMQMAAS-272.6",
        "name": "[#460] : Create systemtests for open service broker api.6",
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
            "weight": 0.00040310999987430734
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 18719768,
        "code": "ENTMQMAAS-284.6",
        "name": "Define console tests.6",
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
            "weight": 0.00040310999987430734
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 19719752,
        "code": "ENTMQMAAS-272.7",
        "name": "[#460] : Create systemtests for open service broker api.7",
        "preceedingTasks": [],
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
            "weight": 0.0002965982553753585
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 19719768,
        "code": "ENTMQMAAS-284.7",
        "name": "Define console tests.7",
        "preceedingTasks": [
          19719752
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
            "weight": 0.0002965982553753585
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 29714931,
        "code": "ENTMQMAAS-217.17",
        "name": "[#316] : create documentation for system tests.17",
        "preceedingTasks": [
          17720873,
          18719768
        ],
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
            "weight": 0.00030207600223530447
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 28715420,
        "code": "ENTMQMAAS-227.16",
        "name": "[#340] : System-tests: brokered: webconsole tests.16",
        "preceedingTasks": [
          17719771,
          17718054,
          29714931
        ],
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
            "weight": 0.00030207600223530447
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 25717998,
        "code": "ENTMQMAAS-251.13",
        "name": "[ #408]: System-test: Implement java client executor (cli-java).13",
        "preceedingTasks": [
          28715420
        ],
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
            "weight": 0.00030207600223530447
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 21719744,
        "code": "ENTMQMAAS-268.9",
        "name": "[#472] : System-tests: create tests for large messages.9",
        "preceedingTasks": [
          25717998
        ],
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
            "weight": 0.00030207600223530447
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 18720873,
        "code": "ENTMQMAAS-299.6",
        "name": "[#514] : System-tests: create testCreateDeleteUsersLong.6",
        "preceedingTasks": [
          19719768,
          21719744
        ],
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
            "weight": 0.00030207600223530447
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 20719752,
        "code": "ENTMQMAAS-272.8",
        "name": "[#460] : Create systemtests for open service broker api.8",
        "preceedingTasks": [],
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
            "weight": 0.002097716202270726
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 18718054,
        "code": "ENTMQMAAS-252.6",
        "name": "[#403] : Add the ability to use AMQP over WebSockets to a route on port 443.6",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 52.96111111111111,
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
            "weight": 0.00795723593384604
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 15718221,
        "code": "ENTMQMAAS-254.3",
        "name": "[#414] : Add support for OAUTH2 authentication to Keycloak plugin.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 73.00555555555556,
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
            "weight": 0.010968848988426604
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 21719752,
        "code": "ENTMQMAAS-272.9",
        "name": "[#460] : Create systemtests for open service broker api.9",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 18.22361111111111,
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
            "weight": 0.0027380387256895496
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 30714931,
        "code": "ENTMQMAAS-217.18",
        "name": "[#316] : create documentation for system tests.18",
        "preceedingTasks": [
          18720873
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
            "weight": 0.0015818950396258168
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 22719744,
        "code": "ENTMQMAAS-268.10",
        "name": "[#472] : System-tests: create tests for large messages.10",
        "preceedingTasks": [
          20719752,
          30714931
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
            "weight": 0.0015818950396258168
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 19720873,
        "code": "ENTMQMAAS-299.7",
        "name": "[#514] : System-tests: create testCreateDeleteUsersLong.7",
        "preceedingTasks": [
          22719744
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
            "weight": 0.0015818950396258168
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 31714931,
        "code": "ENTMQMAAS-217.19",
        "name": "[#316] : create documentation for system tests.19",
        "preceedingTasks": [
          19720873,
          18718054,
          15718221,
          21719752
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
            "weight": 0.00020845696098068555
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 23719744,
        "code": "ENTMQMAAS-268.11",
        "name": "[#472] : System-tests: create tests for large messages.11",
        "preceedingTasks": [
          31714931
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
            "weight": 0.00020845696098068555
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 20720873,
        "code": "ENTMQMAAS-299.8",
        "name": "[#514] : System-tests: create testCreateDeleteUsersLong.8",
        "preceedingTasks": [
          23719744
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
            "weight": 0.00020845696098068555
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 22719752,
        "code": "ENTMQMAAS-272.10",
        "name": "[#460] : Create systemtests for open service broker api.10",
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
            "weight": 0.0005257071915016688
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 16718221,
        "code": "ENTMQMAAS-254.4",
        "name": "[#414] : Add support for OAUTH2 authentication to Keycloak plugin.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 7.35162037037037,
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
            "weight": 0.001104557222381099
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 37714931,
        "code": "ENTMQMAAS-217.25",
        "name": "[#316] : create documentation for system tests.25",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.3185185185185186,
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
            "weight": 0.0001981031499317592
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 29719744,
        "code": "ENTMQMAAS-268.17",
        "name": "[#472] : System-tests: create tests for large messages.17",
        "preceedingTasks": [
          37714931
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.3185185185185186,
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
            "weight": 0.0001981031499317592
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 24719752,
        "code": "ENTMQMAAS-272.12",
        "name": "[#460] : Create systemtests for open service broker api.12",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 4.67037037037037,
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
            "weight": 0.0007017080675953604
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 19718054,
        "code": "ENTMQMAAS-252.7",
        "name": "[#403] : Add the ability to use AMQP over WebSockets to a route on port 443.7",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 6.020277777777778,
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
            "weight": 0.0009045272967284446
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 25719752,
        "code": "ENTMQMAAS-272.13",
        "name": "[#460] : Create systemtests for open service broker api.13",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.575925925925926,
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
            "weight": 0.00023677778173023464
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 26719752,
        "code": "ENTMQMAAS-272.14",
        "name": "[#460] : Create systemtests for open service broker api.14",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.744965277777778,
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
            "weight": 0.00026217539852055544
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 40714931,
        "code": "ENTMQMAAS-217.28",
        "name": "[#316] : create documentation for system tests.28",
        "preceedingTasks": [
          25719752,
          21718054
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.3806944444444447,
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
            "weight": 0.00020744488203703845
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 32719744,
        "code": "ENTMQMAAS-268.20",
        "name": "[#472] : System-tests: create tests for large messages.20",
        "preceedingTasks": [
          40714931
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.3806944444444447,
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
            "weight": 0.00020744488203703845
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 18718221,
        "code": "ENTMQMAAS-254.6",
        "name": "[#414] : Add support for OAUTH2 authentication to Keycloak plugin.6",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 5.649537037037036,
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
            "weight": 0.0008488246975481941
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 21718054,
        "code": "ENTMQMAAS-252.9",
        "name": "[#403] : Add the ability to use AMQP over WebSockets to a route on port 443.9",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.6263888888888887,
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
            "weight": 0.0005448532210026228
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 22718054,
        "code": "ENTMQMAAS-252.10",
        "name": "[#403] : Add the ability to use AMQP over WebSockets to a route on port 443.10",
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
            "weight": 0.000208905614533024
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 23718054,
        "code": "ENTMQMAAS-252.11",
        "name": "[#403] : Add the ability to use AMQP over WebSockets to a route on port 443.11",
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
            "weight": 0.00025972345468800817
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 24718054,
        "code": "ENTMQMAAS-252.12",
        "name": "[#403] : Add the ability to use AMQP over WebSockets to a route on port 443.12",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 4.95462962962963,
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
            "weight": 0.0007444171034303676
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 37719752,
        "code": "ENTMQMAAS-272.25",
        "name": "[#460] : Create systemtests for open service broker api.25",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 3.6645833333333333,
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
            "weight": 0.0005505918129511375
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 51714931,
        "code": "ENTMQMAAS-217.39",
        "name": "[#316] : create documentation for system tests.39",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.1269444444444445,
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
            "weight": 0.00016931976389181468
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 43719744,
        "code": "ENTMQMAAS-268.31",
        "name": "[#472] : System-tests: create tests for large messages.31",
        "preceedingTasks": [
          51714931
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.1269444444444445,
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
            "weight": 0.00016931976389181468
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 39719752,
        "code": "ENTMQMAAS-272.27",
        "name": "[#460] : Create systemtests for open service broker api.27",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.2943452380952378,
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
            "weight": 0.0001944711926033052
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 52714931,
        "code": "ENTMQMAAS-217.40",
        "name": "[#316] : create documentation for system tests.40",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.8850198412698413,
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
            "weight": 0.00028321814445124574
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 44719744,
        "code": "ENTMQMAAS-268.32",
        "name": "[#472] : System-tests: create tests for large messages.32",
        "preceedingTasks": [
          39719752,
          52714931
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.8850198412698413,
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
            "weight": 0.00028321814445124574
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 41719752,
        "code": "ENTMQMAAS-272.29",
        "name": "[#460] : Create systemtests for open service broker api.29",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.5635416666666666,
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
            "weight": 0.00023491708676511014
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 55714931,
        "code": "ENTMQMAAS-217.43",
        "name": "[#316] : create documentation for system tests.43",
        "preceedingTasks": [
          41719752
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.0440972222222222,
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
            "weight": 0.00015687223626530895
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 47719744,
        "code": "ENTMQMAAS-268.35",
        "name": "[#472] : System-tests: create tests for large messages.35",
        "preceedingTasks": [
          55714931
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.0440972222222222,
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
            "weight": 0.00015687223626530895
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 42719752,
        "code": "ENTMQMAAS-272.30",
        "name": "[#460] : Create systemtests for open service broker api.30",
        "preceedingTasks": [
          47719744
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.2659722222222223,
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
            "weight": 0.00019020823858440853
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 56714931,
        "code": "ENTMQMAAS-217.44",
        "name": "[#316] : create documentation for system tests.44",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.628935185185185,
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
            "weight": 0.0003949890227835304
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 48719744,
        "code": "ENTMQMAAS-268.36",
        "name": "[#472] : System-tests: create tests for large messages.36",
        "preceedingTasks": [
          42719752,
          56714931
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.628935185185185,
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
            "weight": 0.0003949890227835304
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 43719752,
        "code": "ENTMQMAAS-272.31",
        "name": "[#460] : Create systemtests for open service broker api.31",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 2.5565972222222224,
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
            "weight": 0.0003841204774264948
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 26718054,
        "code": "ENTMQMAAS-252.14",
        "name": "[#403] : Add the ability to use AMQP over WebSockets to a route on port 443.14",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 7.419305555555556,
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
            "weight": 0.00111472670290077
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 57714931,
        "code": "ENTMQMAAS-217.45",
        "name": "[#316] : create documentation for system tests.45",
        "preceedingTasks": [
          48719744,
          43719752
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 10.016666666666667,
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
            "weight": 0.0015049718230068616
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 49719744,
        "code": "ENTMQMAAS-268.37",
        "name": "[#472] : System-tests: create tests for large messages.37",
        "preceedingTasks": [
          57714931
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 10.016666666666667,
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
            "weight": 0.0015049718230068616
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 44719752,
        "code": "ENTMQMAAS-272.32",
        "name": "[#460] : Create systemtests for open service broker api.32",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 26.902777777777775,
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
            "weight": 0.0040420554924629655
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 27718054,
        "code": "ENTMQMAAS-252.15",
        "name": "[#403] : Add the ability to use AMQP over WebSockets to a route on port 443.15",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 6.222685185185185,
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
            "weight": 0.0009349383561210586
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 28718054,
        "code": "ENTMQMAAS-252.16",
        "name": "[#403] : Add the ability to use AMQP over WebSockets to a route on port 443.16",
        "preceedingTasks": [
          27718054,
          49719744,
          44719752
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 10.576736111111112,
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
            "weight": 0.001589120448579174
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 58714931,
        "code": "ENTMQMAAS-217.46",
        "name": "[#316] : create documentation for system tests.46",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 198.02083333333334,
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
            "weight": 0.02975199080216352
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13940277,
        "code": "ENTMQMAAS-2018.1",
        "name": "Docs: Configuring max queue size for standard and brokered address space..1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.8899305555555557,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00028395596341605474
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 13938907,
        "code": "ENTMQMAAS-2004.1",
        "name": "[#4458] : [Shared infra] Add liveness probes and readiness probes to shared infra.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.051736111111111,
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
            "weight": 0.000458513496686332
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13938908,
        "code": "ENTMQMAAS-2005.1",
        "name": "[#4459] : [Shared infra] Add support for TLS endpoints for shared infra.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.051736111111111,
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
            "weight": 0.000458513496686332
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13940720,
        "code": "ENTMQMAAS-2025.1",
        "name": "[#4502] : [GraphQL] expose read only messaging endpoints [address space facade].1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.4131944444444444,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00021232790209504737
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 13940721,
        "code": "ENTMQMAAS-2026.1",
        "name": "[#4503] : [GraphQL] extend createAddressSpace to allow endpoint configuration.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.4131944444444444,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00021232790209504737
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 14940720,
        "code": "ENTMQMAAS-2025.2",
        "name": "[#4502] : [GraphQL] expose read only messaging endpoints [address space facade].2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.324537037037037,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00019900741290546455
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 14940721,
        "code": "ENTMQMAAS-2026.2",
        "name": "[#4503] : [GraphQL] extend createAddressSpace to allow endpoint configuration.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.324537037037037,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00019900741290546455
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 13942255,
        "code": "ENTMQMAAS-2038.1",
        "name": "testAddressLinks sporadic failure.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.324537037037037,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00019900741290546455
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 13941587,
        "code": "ENTMQMAAS-2032.1",
        "name": "[#4349] Console UI - Code refactoring  and creating reusable components..1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 5.613888888888888,
        "requireAssign": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000843468678396247
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sanjekum"
      },
      {
        "id": 14938907,
        "code": "ENTMQMAAS-2004.2",
        "name": "[#4458] : [Shared infra] Add liveness probes and readiness probes to shared infra.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 7.877777777777777,
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
            "weight": 0.001183610673890033
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 15938907,
        "code": "ENTMQMAAS-2004.3",
        "name": "[#4458] : [Shared infra] Add liveness probes and readiness probes to shared infra.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3017361111111112,
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
            "weight": 0.00019558164740892693
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13944704,
        "code": "ENTMQMAAS-2083.1",
        "name": "[#4572] : Upgrade Artemis to version 2.13.0.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3017361111111112,
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
            "weight": 0.00019558164740892693
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13944703,
        "code": "ENTMQMAAS-2082.1",
        "name": "[#4460] : [Shared infra] Use SASL EXTERNAL for router and broker management for shared infra.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3017361111111112,
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
            "weight": 0.00019558164740892693
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13944746,
        "code": "ENTMQMAAS-2086.1",
        "name": "[#4574] : Lower default globalMaxSize of broker to 1/4 of broker heap.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3017361111111112,
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
            "weight": 0.00019558164740892693
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 18940721,
        "code": "ENTMQMAAS-2026.6",
        "name": "[#4503] : [GraphQL] extend createAddressSpace to allow endpoint configuration.6",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.2909722222222222,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00019396440785980003
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 17942255,
        "code": "ENTMQMAAS-2038.5",
        "name": "testAddressLinks sporadic failure.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.2909722222222222,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00019396440785980003
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 13945766,
        "code": "ENTMQMAAS-2094.1",
        "name": "[#4590] : Extend addressspaceschema to enumerate endpoint types and certification providers.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.2909722222222222,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00019396440785980003
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 14944303,
        "code": "ENTMQMAAS-2071.2",
        "name": "Build warnings from UI builds.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.131712962962963,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00017003621840175047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 13944641,
        "code": "ENTMQMAAS-2076.1",
        "name": "Console-IoT-UI- Create visual component for metadata in Create Device.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.131712962962963,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00017003621840175047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 13944648,
        "code": "ENTMQMAAS-2077.1",
        "name": "Console-IoT-UI: Add auto populate feature for properties in metadata.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.131712962962963,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00017003621840175047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 13944655,
        "code": "ENTMQMAAS-2078.1",
        "name": "Console-IoT-UI- Add and remove siblings and children in device registration metadata.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.131712962962963,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00017003621840175047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 13944660,
        "code": "ENTMQMAAS-2079.1",
        "name": "Console-IoT-UI- Formulate json using device registration form.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.131712962962963,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00017003621840175047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 13944664,
        "code": "ENTMQMAAS-2080.1",
        "name": "Console-IoT-UI- Add validations on nested data structure.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.131712962962963,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00017003621840175047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 22940277,
        "code": "ENTMQMAAS-2018.10",
        "name": "Docs: Configuring max queue size for standard and brokered address space..10",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.2182291666666667,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00018303499864876502
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 20941617,
        "code": "ENTMQMAAS-2033.8",
        "name": "[#4512] : [Docs] correct loadbalance spec indentation.8",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.2182291666666667,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00018303499864876502
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 13945858,
        "code": "ENTMQMAAS-2097.1",
        "name": "Docs: Document procedure for closing connections using AMQ Console.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.2182291666666667,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00018303499864876502
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 14944704,
        "code": "ENTMQMAAS-2083.2",
        "name": "[#4572] : Upgrade Artemis to version 2.13.0.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3131944444444443,
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
            "weight": 0.00019730322499348136
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 14944746,
        "code": "ENTMQMAAS-2086.2",
        "name": "[#4574] : Lower default globalMaxSize of broker to 1/4 of broker heap.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3131944444444443,
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
            "weight": 0.00019730322499348136
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13944573,
        "code": "ENTMQMAAS-2072.1",
        "name": "[#4567] : Refactor GraphQL delete addressspace and address to take more than one target.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 8.272222222222222,
        "requireAssign": {
          "backend": 2.97,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0012428746780128767
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "buschv"
      },
      {
        "id": 18942255,
        "code": "ENTMQMAAS-2038.6",
        "name": "testAddressLinks sporadic failure.6",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1479166666666667,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00017247077256172643
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 14945766,
        "code": "ENTMQMAAS-2094.2",
        "name": "[#4590] : Extend addressspaceschema to enumerate endpoint types and certification providers.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1479166666666667,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00017247077256172643
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 15944586,
        "code": "ENTMQMAAS-2074.3",
        "name": "[Console UI] modify createAddressSpace flow to allow endpoint configuration and a way to include endpoints detail.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 2.5755208333333335,
        "requireAssign": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00038696368889189534
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sanjekum"
      },
      {
        "id": 15944611,
        "code": "ENTMQMAAS-2075.3",
        "name": "Console-IoT-UI - Create Filter component for device list.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 2.5755208333333335,
        "requireAssign": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00038696368889189534
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sanjekum"
      },
      {
        "id": 13945554,
        "code": "ENTMQMAAS-2091.1",
        "name": "Refactor GraphQL query in client side for deleteAddressSpace and deleteAddress to send many target objects.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 2.5755208333333335,
        "requireAssign": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00038696368889189534
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sanjekum"
      },
      {
        "id": 13945561,
        "code": "ENTMQMAAS-2092.1",
        "name": "Console UI - Add filter for status in address-space list.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 2.5755208333333335,
        "requireAssign": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00038696368889189534
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sanjekum"
      },
      {
        "id": 16944704,
        "code": "ENTMQMAAS-2083.4",
        "name": "[#4572] : Upgrade Artemis to version 2.13.0.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.8979166666666665,
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
            "weight": 0.00028515585082347145
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 14947605,
        "code": "ENTMQMAAS-2121.2",
        "name": "[#4631] : Allow configuring CPU limits for infra.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.8979166666666665,
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
            "weight": 0.00028515585082347145
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 14947270,
        "code": "ENTMQMAAS-2119.2",
        "name": "[systemtest] Create tests for service selectors.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 2.4968749999999997,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00037514740637972614
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 13947615,
        "code": "ENTMQMAAS-2123.1",
        "name": "[systemtest] rename messagingPerformanceTest to scaleConnectionTest.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 2.4968749999999997,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00037514740637972614
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 15944303,
        "code": "ENTMQMAAS-2071.3",
        "name": "Build warnings from UI builds.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.0256944444444445,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00015410727832647909
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 14944641,
        "code": "ENTMQMAAS-2076.2",
        "name": "Console-IoT-UI- Create visual component for metadata in Create Device.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.0256944444444445,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00015410727832647909
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 14944648,
        "code": "ENTMQMAAS-2077.2",
        "name": "Console-IoT-UI: Add auto populate feature for properties in metadata.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.0256944444444445,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00015410727832647909
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 14944655,
        "code": "ENTMQMAAS-2078.2",
        "name": "Console-IoT-UI- Add and remove siblings and children in device registration metadata.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.0256944444444445,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00015410727832647909
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 14944660,
        "code": "ENTMQMAAS-2079.2",
        "name": "Console-IoT-UI- Formulate json using device registration form.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.0256944444444445,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00015410727832647909
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 14944664,
        "code": "ENTMQMAAS-2080.2",
        "name": "Console-IoT-UI- Add validations on nested data structure.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.0256944444444445,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00015410727832647909
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 13946927,
        "code": "ENTMQMAAS-2112.1",
        "name": "Console-IoT-UI- Create form for Device Information.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.0256944444444445,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00015410727832647909
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 15947605,
        "code": "ENTMQMAAS-2121.3",
        "name": "[#4631] : Allow configuring CPU limits for infra.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.097222222222222,
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
            "weight": 0.00016485409597551587
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13950212,
        "code": "ENTMQMAAS-2165.1",
        "name": "Fix downstream build for 1.5.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.9465277777777779,
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
            "weight": 0.0002924595133033994
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 20942255,
        "code": "ENTMQMAAS-2038.8",
        "name": "testAddressLinks sporadic failure.8",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 8.214930555555556,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0012342667900901046
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 13948395,
        "code": "ENTMQMAAS-2139.1",
        "name": "Enable websocket tests for OCP 4.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 8.214930555555556,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0012342667900901046
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 13953914,
        "code": "ENTMQMAAS-2220.1",
        "name": "[#4735] : Add version and commit revision metadata to operator metadata.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.257638888888889,
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
            "weight": 0.00018895618215927803
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13953960,
        "code": "ENTMQMAAS-2222.1",
        "name": "Upgrade to Hono 1.2.3.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.9437499999999999,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.4,
          "database": 2.56,
          "devops": 3.12,
          "ai_ml": 2.66,
          "testing": 1.9,
          "issue_tracking": 2.61
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002920421611616892
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dejanbosanac"
      },
      {
        "id": 13948972,
        "code": "ENTMQMAAS-2150.1",
        "name": "MonitorTest sporadic failure - query enmasse_addresses_not_ready_total unexpected value.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 8.02361111111111,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.4
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0012055216613298166
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rshelly"
      },
      {
        "id": 16944641,
        "code": "ENTMQMAAS-2076.4",
        "name": "Console-IoT-UI- Create visual component for metadata in Create Device.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.3475694444444446,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002024679577471447
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 16944648,
        "code": "ENTMQMAAS-2077.4",
        "name": "Console-IoT-UI: Add auto populate feature for properties in metadata.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.3475694444444446,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002024679577471447
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 16944655,
        "code": "ENTMQMAAS-2078.4",
        "name": "Console-IoT-UI- Add and remove siblings and children in device registration metadata.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.3475694444444446,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002024679577471447
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 16944660,
        "code": "ENTMQMAAS-2079.4",
        "name": "Console-IoT-UI- Formulate json using device registration form.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.3475694444444446,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002024679577471447
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 16944664,
        "code": "ENTMQMAAS-2080.4",
        "name": "Console-IoT-UI- Add validations on nested data structure.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.3475694444444446,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002024679577471447
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 15946927,
        "code": "ENTMQMAAS-2112.3",
        "name": "Console-IoT-UI- Create form for Device Information.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.3475694444444446,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002024679577471447
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 14948972,
        "code": "ENTMQMAAS-2150.2",
        "name": "MonitorTest sporadic failure - query enmasse_addresses_not_ready_total unexpected value.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 3.504861111111111,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.4
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000526594064802803
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rshelly"
      },
      {
        "id": 35941617,
        "code": "ENTMQMAAS-2033.23",
        "name": "[#4512] : [Docs] correct loadbalance spec indentation.23",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.2276041666666666,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00018444356212703685
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 26947383,
        "code": "ENTMQMAAS-2120.14",
        "name": "[#4785] Docs: Setting per-address max TTL.14",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.2276041666666666,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00018444356212703685
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 13956401,
        "code": "ENTMQMAAS-2260.1",
        "name": "Docs: Add note to downstream docs about choosing a namespace when deploying test certificates.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.2276041666666666,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00018444356212703685
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 22942255,
        "code": "ENTMQMAAS-2038.10",
        "name": "testAddressLinks sporadic failure.10",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 4.100694444444445,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0006161160991996337
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 15948395,
        "code": "ENTMQMAAS-2139.3",
        "name": "Enable websocket tests for OCP 4.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 4.100694444444445,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0006161160991996337
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 15947270,
        "code": "ENTMQMAAS-2119.3",
        "name": "[systemtest] Create tests for service selectors.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 7.640277777777778,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0011479270657738139
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 14947615,
        "code": "ENTMQMAAS-2123.2",
        "name": "[systemtest] rename messagingPerformanceTest to scaleConnectionTest.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 7.640277777777778,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0011479270657738139
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 13949567,
        "code": "ENTMQMAAS-2158.1",
        "name": "Create polarion metadata for new tests for 1.5.0.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 7.640277777777778,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0011479270657738139
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 23942255,
        "code": "ENTMQMAAS-2038.11",
        "name": "testAddressLinks sporadic failure.11",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.5986111111111112,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000240186157554201
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 16948395,
        "code": "ENTMQMAAS-2139.4",
        "name": "Enable websocket tests for OCP 4.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.5986111111111112,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000240186157554201
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 13958448,
        "code": "ENTMQMAAS-2278.1",
        "name": "[#4815] : Support consumer priority for forwarders.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.5986111111111112,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000240186157554201
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 17947270,
        "code": "ENTMQMAAS-2119.5",
        "name": "[systemtest] Create tests for service selectors.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 1.5232638888888888,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002288654807103127
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 16947615,
        "code": "ENTMQMAAS-2123.4",
        "name": "[systemtest] rename messagingPerformanceTest to scaleConnectionTest.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 1.5232638888888888,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002288654807103127
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 24942255,
        "code": "ENTMQMAAS-2038.12",
        "name": "testAddressLinks sporadic failure.12",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.0934027777777777,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001642802367806644
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 14958448,
        "code": "ENTMQMAAS-2278.2",
        "name": "[#4815] : Support consumer priority for forwarders.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.0934027777777777,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001642802367806644
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 20944611,
        "code": "ENTMQMAAS-2075.8",
        "name": "Console-IoT-UI - Create Filter component for device list.8",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 2.0970833333333334,
        "requireAssign": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00031507999938409047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sanjekum"
      },
      {
        "id": 17948903,
        "code": "ENTMQMAAS-2145.5",
        "name": "Console-IoT-UI - Integrate create project wizard with mock server.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 2.0970833333333334,
        "requireAssign": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00031507999938409047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sanjekum"
      },
      {
        "id": 17948905,
        "code": "ENTMQMAAS-2146.5",
        "name": "Console-IoT-UI Create generic Json Editor.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 2.0970833333333334,
        "requireAssign": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00031507999938409047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sanjekum"
      },
      {
        "id": 17948906,
        "code": "ENTMQMAAS-2147.5",
        "name": "Console-IoT-UI - Create visual components for Iot Project Detail Page.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 2.0970833333333334,
        "requireAssign": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00031507999938409047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sanjekum"
      },
      {
        "id": 17948907,
        "code": "ENTMQMAAS-2148.5",
        "name": "Console-IoT-UI - Create visual component for Create a Device using JSON.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 2.0970833333333334,
        "requireAssign": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00031507999938409047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sanjekum"
      },
      {
        "id": 17948908,
        "code": "ENTMQMAAS-2149.5",
        "name": "Console-IoT-UI - Create a visual component to view device detail information.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 2.0970833333333334,
        "requireAssign": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00031507999938409047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sanjekum"
      },
      {
        "id": 16951730,
        "code": "ENTMQMAAS-2193.4",
        "name": "Console-Ui-iot Modify Dialog Prompt component to include icon color and label for confirm button.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 2.0970833333333334,
        "requireAssign": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00031507999938409047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sanjekum"
      },
      {
        "id": 16951759,
        "code": "ENTMQMAAS-2194.4",
        "name": "Console-UI-IoT Integrate DataToolbar For Apply filter in Project List Page.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 2.0970833333333334,
        "requireAssign": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00031507999938409047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sanjekum"
      },
      {
        "id": 16951760,
        "code": "ENTMQMAAS-2195.4",
        "name": "Console-UI-IoT Integrate Project List  component with mock server.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 2.0970833333333334,
        "requireAssign": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00031507999938409047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sanjekum"
      },
      {
        "id": 14952928,
        "code": "ENTMQMAAS-2206.2",
        "name": "Console-UI-IoT Integrate endpoint configuration to create messaging project in iot-design.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 2.0970833333333334,
        "requireAssign": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00031507999938409047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sanjekum"
      },
      {
        "id": 13947876,
        "code": "ENTMQMAAS-2131.1",
        "name": "Upgrade Infinispan to 11.x.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 38.96319444444445,
        "requireAssign": {
          "backend": 2.94,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.64
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0058540941537330825
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jreimann-2"
      },
      {
        "id": 22947270,
        "code": "ENTMQMAAS-2119.10",
        "name": "[systemtest] Create tests for service selectors.10",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 1.2585648148148147,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00018909529953984808
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 21947615,
        "code": "ENTMQMAAS-2123.9",
        "name": "[systemtest] rename messagingPerformanceTest to scaleConnectionTest.9",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 1.2585648148148147,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00018909529953984808
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 13964011,
        "code": "ENTMQMAAS-2349.1",
        "name": "[systemtest] Remove doTest methods for client utilities.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 1.2585648148148147,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00018909529953984808
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 15960647,
        "code": "ENTMQMAAS-2317.3",
        "name": "Update iot console GraphQL types to reflect shared-infra changes.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 1.2949074074074074,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00019455565672722277
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 15960648,
        "code": "ENTMQMAAS-2318.3",
        "name": "Add mock stats for IOT entities in mock server.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 1.2949074074074074,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00019455565672722277
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 15960660,
        "code": "ENTMQMAAS-2322.3",
        "name": "Add UUID for credentials entries in mock servers.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 1.2949074074074074,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00019455565672722277
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 15960662,
        "code": "ENTMQMAAS-2323.3",
        "name": "Add graphQL query to generate command to create iot project.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 1.2949074074074074,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00019455565672722277
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 15960668,
        "code": "ENTMQMAAS-2325.3",
        "name": "Add user token in whoami console querry.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 1.2949074074074074,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00019455565672722277
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 14960819,
        "code": "ENTMQMAAS-2329.2",
        "name": "Hono - Add Management API operation to delete all devices matching a filter.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 1.2949074074074074,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00019455565672722277
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 25942255,
        "code": "ENTMQMAAS-2038.13",
        "name": "testAddressLinks sporadic failure.13",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.979861111111111,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00044771451001958146
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 15958448,
        "code": "ENTMQMAAS-2278.3",
        "name": "[#4815] : Support consumer priority for forwarders.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.979861111111111,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00044771451001958146
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 13961439,
        "code": "ENTMQMAAS-2341.1",
        "name": "[#4863] : [Shared Infra] [Identity] Basic Access Control Server.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.979861111111111,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00044771451001958146
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 25947270,
        "code": "ENTMQMAAS-2119.13",
        "name": "[systemtest] Create tests for service selectors.13",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 2.7944444444444443,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004198562545604278
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 24947615,
        "code": "ENTMQMAAS-2123.12",
        "name": "[systemtest] rename messagingPerformanceTest to scaleConnectionTest.12",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 2.7944444444444443,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004198562545604278
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 20944641,
        "code": "ENTMQMAAS-2076.8",
        "name": "Console-IoT-UI- Create visual component for metadata in Create Device.8",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.0780934343434343,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001619800573632845
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 20944648,
        "code": "ENTMQMAAS-2077.8",
        "name": "Console-IoT-UI: Add auto populate feature for properties in metadata.8",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.0780934343434343,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001619800573632845
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 20944655,
        "code": "ENTMQMAAS-2078.8",
        "name": "Console-IoT-UI- Add and remove siblings and children in device registration metadata.8",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.0780934343434343,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001619800573632845
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 20944660,
        "code": "ENTMQMAAS-2079.8",
        "name": "Console-IoT-UI- Formulate json using device registration form.8",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.0780934343434343,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001619800573632845
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 20944664,
        "code": "ENTMQMAAS-2080.8",
        "name": "Console-IoT-UI- Add validations on nested data structure.8",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.0780934343434343,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001619800573632845
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 19946927,
        "code": "ENTMQMAAS-2112.7",
        "name": "Console-IoT-UI- Create form for Device Information.7",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.0780934343434343,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001619800573632845
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 16956269,
        "code": "ENTMQMAAS-2259.4",
        "name": "Upgrade Patternfly.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.0780934343434343,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001619800573632845
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 15957638,
        "code": "ENTMQMAAS-2268.3",
        "name": "Add metadata rules to device registration form.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.0780934343434343,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001619800573632845
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 14958300,
        "code": "ENTMQMAAS-2276.2",
        "name": "Console-IoT-UI- Fix alignment of Address Space table in Firefox browser.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.0780934343434343,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001619800573632845
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 13961385,
        "code": "ENTMQMAAS-2337.1",
        "name": "Console - IoT - UI - Integrate Create Project Flow with mock server's create query.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.0780934343434343,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001619800573632845
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 13961397,
        "code": "ENTMQMAAS-2339.1",
        "name": "Console - IoT - UI - Quick fixes on the Create Project Workflow.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.0780934343434343,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001619800573632845
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 14947876,
        "code": "ENTMQMAAS-2131.2",
        "name": "Upgrade Infinispan to 11.x.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.455208333333333,
        "requireAssign": {
          "backend": 2.94,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.64
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0005191338952697337
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jreimann-2"
      },
      {
        "id": 13964465,
        "code": "ENTMQMAAS-2352.1",
        "name": "Rename IoTProject to IoTTenant.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.455208333333333,
        "requireAssign": {
          "backend": 2.94,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.64
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0005191338952697337
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jreimann-2"
      },
      {
        "id": 13938727,
        "code": "ENTMQMAAS-2001.1",
        "name": "[IoT Design] External Project design.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "ai_ml",
          "devops"
        ],
        "estimateTime": 68.08888888888889,
        "requireAssign": {
          "backend": 3.74,
          "frontend": 3.43,
          "database": 3.46,
          "devops": 3.93,
          "ai_ml": 3.98,
          "testing": 2.21,
          "issue_tracking": 3.14
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.01023013569759961
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "yanzredhat"
      },
      {
        "id": 40941617,
        "code": "ENTMQMAAS-2033.28",
        "name": "[#4512] : [Docs] correct loadbalance spec indentation.28",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 9.062152777777778,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0013615591933117054
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 13961134,
        "code": "ENTMQMAAS-2333.1",
        "name": "[#4859] : Use OpenShift4 oauth-proxy when running on OpenShift4.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 14.00138888888889,
        "requireAssign": {
          "backend": 2.97,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.002103663470290096
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "buschv"
      },
      {
        "id": 13961392,
        "code": "ENTMQMAAS-2338.1",
        "name": "Console-IoT-UI-Edit in JSON under certificates not working.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "frontend"
        ],
        "estimateTime": 13.865972222222224,
        "requireAssign": {
          "backend": 2.71,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.41
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0020833175533817253
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "suyash-naithani"
      },
      {
        "id": 13968508,
        "code": "ENTMQMAAS-2413.1",
        "name": "[UXD] UI changes for IoT - AMQ Online V2.0.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "ai_ml",
          "devops"
        ],
        "estimateTime": 3.7826388888888887,
        "requireAssign": {
          "backend": 3.74,
          "frontend": 3.43,
          "database": 3.46,
          "devops": 3.93,
          "ai_ml": 3.98,
          "testing": 2.21,
          "issue_tracking": 3.14
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0005683292789738196
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "yanzredhat"
      },
      {
        "id": 26942255,
        "code": "ENTMQMAAS-2038.14",
        "name": "testAddressLinks sporadic failure.14",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.286805555555556,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004938319216785549
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 16958448,
        "code": "ENTMQMAAS-2278.4",
        "name": "[#4815] : Support consumer priority for forwarders.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.286805555555556,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004938319216785549
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 13967558,
        "code": "ENTMQMAAS-2384.1",
        "name": "[#4950] : [Access Control] add SASL PLAIN support and initial identity provider support.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.286805555555556,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004938319216785549
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 20951759,
        "code": "ENTMQMAAS-2194.8",
        "name": "Console-UI-IoT Integrate DataToolbar For Apply filter in Project List Page.8",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.2336805555555557,
        "requireAssign": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00018535651993702786
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sanjekum"
      },
      {
        "id": 20951760,
        "code": "ENTMQMAAS-2195.8",
        "name": "Console-UI-IoT Integrate Project List  component with mock server.8",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.2336805555555557,
        "requireAssign": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00018535651993702786
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sanjekum"
      },
      {
        "id": 16964407,
        "code": "ENTMQMAAS-2351.4",
        "name": "Console-IoT Add enable/disable option for iot project in project list.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.2336805555555557,
        "requireAssign": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00018535651993702786
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sanjekum"
      },
      {
        "id": 14971818,
        "code": "ENTMQMAAS-2435.2",
        "name": "[Console-Iot] Create Device Using Json format.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.2336805555555557,
        "requireAssign": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00018535651993702786
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sanjekum"
      },
      {
        "id": 43941617,
        "code": "ENTMQMAAS-2033.31",
        "name": "[#4512] : [Docs] correct loadbalance spec indentation.31",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.2784722222222222,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004925798652534244
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 44941617,
        "code": "ENTMQMAAS-2033.32",
        "name": "[#4512] : [Docs] correct loadbalance spec indentation.32",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.6030092592592593,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00024084696511190878
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 13977369,
        "code": "ENTMQMAAS-2459.1",
        "name": "Docs: Document Pods overview.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.6030092592592593,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00024084696511190878
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 14968442,
        "code": "ENTMQMAAS-2403.2",
        "name": "Add validations on metadata values based on the Type.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 10.94513888888889,
        "requireAssign": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0016444717763734848
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "anujha@redhat.com"
      },
      {
        "id": 29942255,
        "code": "ENTMQMAAS-2038.17",
        "name": "testAddressLinks sporadic failure.17",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.0246527777777776,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00015395077127333776
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 19958448,
        "code": "ENTMQMAAS-2278.7",
        "name": "[#4815] : Support consumer priority for forwarders.7",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.0246527777777776,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00015395077127333776
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 16967558,
        "code": "ENTMQMAAS-2384.4",
        "name": "[#4950] : [Access Control] add SASL PLAIN support and initial identity provider support.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.0246527777777776,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00015395077127333776
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 13979997,
        "code": "ENTMQMAAS-2465.1",
        "name": "FirefoxConsoleTest.testOpenShiftWithCustomCert on OpenShift 4.5.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.0246527777777776,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00015395077127333776
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 15947876,
        "code": "ENTMQMAAS-2131.3",
        "name": "Upgrade Infinispan to 11.x.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 5.324537037037037,
        "requireAssign": {
          "backend": 2.94,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.64
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0007999944969681047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jreimann-2"
      },
      {
        "id": 14964465,
        "code": "ENTMQMAAS-2352.2",
        "name": "Rename IoTProject to IoTTenant.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 5.324537037037037,
        "requireAssign": {
          "backend": 2.94,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.64
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0007999944969681047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jreimann-2"
      },
      {
        "id": 13968503,
        "code": "ENTMQMAAS-2412.1",
        "name": "Use non-nodeport approach for tests on OCP4.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 5.324537037037037,
        "requireAssign": {
          "backend": 2.94,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.64
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0007999944969681047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jreimann-2"
      },
      {
        "id": 17961392,
        "code": "ENTMQMAAS-2338.5",
        "name": "Console-IoT-UI-Edit in JSON under certificates not working.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "frontend"
        ],
        "estimateTime": 2.082986111111111,
        "requireAssign": {
          "backend": 2.71,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.41
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003129619372649113
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "suyash-naithani"
      },
      {
        "id": 15973366,
        "code": "ENTMQMAAS-2440.3",
        "name": "Console-IoT-UI-Fix alignment isuues in add a device modal dialog.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "frontend"
        ],
        "estimateTime": 2.082986111111111,
        "requireAssign": {
          "backend": 2.71,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.41
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003129619372649113
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "suyash-naithani"
      },
      {
        "id": 46941617,
        "code": "ENTMQMAAS-2033.34",
        "name": "[#4512] : [Docs] correct loadbalance spec indentation.34",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.208888888888889,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001816316520722646
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 15977369,
        "code": "ENTMQMAAS-2459.3",
        "name": "Docs: Document Pods overview.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.208888888888889,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001816316520722646
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 14980802,
        "code": "ENTMQMAAS-2488.2",
        "name": "Wrong verification step for authentication service config.2",
        "preceedingTasks": [
          15977369
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.208888888888889,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001816316520722646
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 13986818,
        "code": "ENTMQMAAS-2499.1",
        "name": "[#5000] : Minor documentation fixes.1",
        "preceedingTasks": [
          58949141,
          14980802
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.208888888888889,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001816316520722646
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 17973366,
        "code": "ENTMQMAAS-2440.5",
        "name": "Console-IoT-UI-Fix alignment isuues in add a device modal dialog.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "frontend"
        ],
        "estimateTime": 1.0604166666666666,
        "requireAssign": {
          "backend": 2.71,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.41
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00015932418009785616
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "suyash-naithani"
      },
      {
        "id": 14987853,
        "code": "ENTMQMAAS-2504.2",
        "name": "Console-IoT-UI- Fix alignment issue for Project List toolbar.2",
        "preceedingTasks": [
          17973366
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "frontend"
        ],
        "estimateTime": 1.0604166666666666,
        "requireAssign": {
          "backend": 2.71,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.41
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00015932418009785616
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "suyash-naithani"
      },
      {
        "id": 25954460,
        "code": "ENTMQMAAS-2226.13",
        "name": "Console-IoT-UI- Integrate mock-server queries in EditGatewaysContainer device detail page.13",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.2909722222222222,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.34
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00019396440785980003
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "apratap468"
      },
      {
        "id": 25954462,
        "code": "ENTMQMAAS-2227.13",
        "name": "Console-IoT-UI- Integrate mock-server queries  with EditDeviceInJsonContainer in device detail page.13",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.2909722222222222,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.34
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00019396440785980003
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "apratap468"
      },
      {
        "id": 14987648,
        "code": "ENTMQMAAS-2502.2",
        "name": "Console-IoT-UI- Create visual component for add gateways group  (member of).2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 1.2909722222222222,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.34
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00019396440785980003
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "apratap468"
      },
      {
        "id": 15987853,
        "code": "ENTMQMAAS-2504.3",
        "name": "Console-IoT-UI- Fix alignment issue for Project List toolbar.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "frontend"
        ],
        "estimateTime": 4.820138888888889,
        "requireAssign": {
          "backend": 2.71,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.41
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0007242103039025669
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "suyash-naithani"
      },
      {
        "id": 20976963,
        "code": "ENTMQMAAS-2453.8",
        "name": "[Console-Iot] Integrate Create Device using JSON component with mock server.8",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 4.532291666666667,
        "requireAssign": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0006809621882178509
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sanjekum"
      },
      {
        "id": 16984389,
        "code": "ENTMQMAAS-2497.4",
        "name": "[Console-IoT] Use manage column toolbar to update device list.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 4.532291666666667,
        "requireAssign": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0006809621882178509
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sanjekum"
      },
      {
        "id": 28954460,
        "code": "ENTMQMAAS-2226.16",
        "name": "Console-IoT-UI- Integrate mock-server queries in EditGatewaysContainer device detail page.16",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 2.2875,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.34
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00034368948869832236
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "apratap468"
      },
      {
        "id": 14992694,
        "code": "ENTMQMAAS-2516.2",
        "name": "Console-IoT-UI- Edit gateway group membership in device detail page.2",
        "preceedingTasks": [
          16984389,
          28954460
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 2.2875,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.34
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00034368948869832236
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "apratap468"
      },
      {
        "id": 14992785,
        "code": "ENTMQMAAS-2518.2",
        "name": "Console-IoT-UI- Integrate pre-confirm dialog for remove gateways and credentials in device detail page.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 2.2875,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.34
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00034368948869832236
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "apratap468"
      },
      {
        "id": 78940435,
        "code": "ENTMQMAAS-2022.66",
        "name": "[CI] fix plugins.txt for enmase csb jenkins.66",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.6643518518518519,
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
            "weight": 0.000250063491574675
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 71945023,
        "code": "ENTMQMAAS-2088.59",
        "name": "[systemtest] create test container for running enmasse suite in delorean.59",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.6643518518518519,
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
            "weight": 0.000250063491574675
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 67946063,
        "code": "ENTMQMAAS-2098.55",
        "name": "[CI] Onboard on OCP LP testing pipeline.55",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.6643518518518519,
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
            "weight": 0.000250063491574675
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 58949141,
        "code": "ENTMQMAAS-2155.46",
        "name": "[systemtest] load env from json config.46",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.6643518518518519,
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
            "weight": 0.000250063491574675
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 40958902,
        "code": "ENTMQMAAS-2282.28",
        "name": "[CI] create job which repush images from proxy registry into private quay.28",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.6643518518518519,
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
            "weight": 0.000250063491574675
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 40958905,
        "code": "ENTMQMAAS-2283.28",
        "name": "[CI] create job which build new templates with private quay images.28",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.6643518518518519,
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
            "weight": 0.000250063491574675
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 35960825,
        "code": "ENTMQMAAS-2331.23",
        "name": "[CI] adopt new one ocp deploy instead of osia.23",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.6643518518518519,
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
            "weight": 0.000250063491574675
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 33962350,
        "code": "ENTMQMAAS-2343.21",
        "name": "[systemtests] fix node pot tests on AWS.21",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.6643518518518519,
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
            "weight": 0.000250063491574675
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 31965836,
        "code": "ENTMQMAAS-2358.19",
        "name": "[systemtest] enable systemtests framework unit tests without kubernetes connection.19",
        "preceedingTasks": [
          33962350
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.6643518518518519,
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
            "weight": 0.000250063491574675
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 22972453,
        "code": "ENTMQMAAS-2436.10",
        "name": "[CI] create job for runing tests on dis cluster in maas-jenkins.10",
        "preceedingTasks": [
          31965836
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.6643518518518519,
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
            "weight": 0.000250063491574675
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 20974138,
        "code": "ENTMQMAAS-2445.8",
        "name": "[systemtests] tekton allow to run iot tests and add examples.8",
        "preceedingTasks": [
          22972453
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.6643518518518519,
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
            "weight": 0.000250063491574675
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 19974582,
        "code": "ENTMQMAAS-2450.7",
        "name": "[systemtest] rewrite resource manager to keep default resources if another test using it.7",
        "preceedingTasks": [
          20974138
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.6643518518518519,
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
            "weight": 0.000250063491574675
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13965028,
        "code": "ENTMQMAAS-2355.1",
        "name": "[UXD] V2.0 UI Changes for Endpoint.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "frontend"
        ],
        "estimateTime": 43.06875,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 3.49,
          "database": 2.56,
          "devops": 3.54,
          "ai_ml": 2.44,
          "testing": 1.92,
          "issue_tracking": 2.33
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.006470940619180709
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "HelloJune"
      },
      {
        "id": 29954460,
        "code": "ENTMQMAAS-2226.17",
        "name": "Console-IoT-UI- Integrate mock-server queries in EditGatewaysContainer device detail page.17",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 2.0701388888888888,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.34
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003110316836095018
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "apratap468"
      },
      {
        "id": 28947270,
        "code": "ENTMQMAAS-2119.16",
        "name": "[systemtest] Create tests for service selectors.16",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 12.262962962962964,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0018424705882698167
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 27947615,
        "code": "ENTMQMAAS-2123.15",
        "name": "[systemtest] rename messagingPerformanceTest to scaleConnectionTest.15",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 12.262962962962964,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0018424705882698167
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 15968426,
        "code": "ENTMQMAAS-2402.3",
        "name": "[CI] Parallelization of PR job.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 12.262962962962964,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0018424705882698167
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 51941617,
        "code": "ENTMQMAAS-2033.39",
        "name": "[#4512] : [Docs] correct loadbalance spec indentation.39",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.8604166666666666,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002795215969103842
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 20977369,
        "code": "ENTMQMAAS-2459.8",
        "name": "Docs: Document Pods overview.8",
        "preceedingTasks": [
          51941617
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.8604166666666666,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002795215969103842
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 18986818,
        "code": "ENTMQMAAS-2499.6",
        "name": "[#5000] : Minor documentation fixes.6",
        "preceedingTasks": [
          20977369
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.8604166666666666,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002795215969103842
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 17989767,
        "code": "ENTMQMAAS-2507.5",
        "name": "[#5112] : Forwarder priority documentation.5",
        "preceedingTasks": [
          14992694,
          18986818
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.8604166666666666,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002795215969103842
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 14992068,
        "code": "ENTMQMAAS-2512.2",
        "name": "[#5133] Docs for DLQ/expiry queues.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.8604166666666666,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002795215969103842
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 13992242,
        "code": "ENTMQMAAS-2514.1",
        "name": "[#5124] : [Documentation] Document changing broker logging level at runtime.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.8604166666666666,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002795215969103842
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 30954460,
        "code": "ENTMQMAAS-2226.18",
        "name": "Console-IoT-UI- Integrate mock-server queries in EditGatewaysContainer device detail page.18",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 2.464583333333333,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.34
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003702956877323455
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "apratap468"
      },
      {
        "id": 13996585,
        "code": "ENTMQMAAS-2525.1",
        "name": "Console-IoT-UI- Handle server-side success/failed toast message.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 2.464583333333333,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.34
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003702956877323455
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "apratap468"
      },
      {
        "id": 30947270,
        "code": "ENTMQMAAS-2119.18",
        "name": "[systemtest] Create tests for service selectors.18",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 1.9178240740740742,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002881468745057277
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 29947615,
        "code": "ENTMQMAAS-2123.17",
        "name": "[systemtest] rename messagingPerformanceTest to scaleConnectionTest.17",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 1.9178240740740742,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002881468745057277
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 17968426,
        "code": "ENTMQMAAS-2402.5",
        "name": "[CI] Parallelization of PR job.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 1.9178240740740742,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002881468745057277
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 14968508,
        "code": "ENTMQMAAS-2413.2",
        "name": "[UXD] UI changes for IoT - AMQ Online V2.0.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "ai_ml",
          "devops"
        ],
        "estimateTime": 44.99583333333334,
        "requireAssign": {
          "backend": 3.74,
          "frontend": 3.43,
          "database": 3.46,
          "devops": 3.93,
          "ai_ml": 3.98,
          "testing": 2.21,
          "issue_tracking": 3.14
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.006760478667492137
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "yanzredhat"
      },
      {
        "id": 14996585,
        "code": "ENTMQMAAS-2525.2",
        "name": "Console-IoT-UI- Handle server-side success/failed toast message.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "frontend",
          "devops"
        ],
        "estimateTime": 9.963194444444445,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.34
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0014969377942789408
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "apratap468"
      },
      {
        "id": 56941617,
        "code": "ENTMQMAAS-2033.44",
        "name": "[#4512] : [Docs] correct loadbalance spec indentation.44",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1712752525252526,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000175980324662471
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 25977369,
        "code": "ENTMQMAAS-2459.13",
        "name": "Docs: Document Pods overview.13",
        "preceedingTasks": [
          81940435,
          56941617
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1712752525252526,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000175980324662471
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 23986818,
        "code": "ENTMQMAAS-2499.11",
        "name": "[#5000] : Minor documentation fixes.11",
        "preceedingTasks": [
          25977369
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1712752525252526,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000175980324662471
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 22989767,
        "code": "ENTMQMAAS-2507.10",
        "name": "[#5112] : Forwarder priority documentation.10",
        "preceedingTasks": [
          14968508,
          23986818
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1712752525252526,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000175980324662471
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 19992068,
        "code": "ENTMQMAAS-2512.7",
        "name": "[#5133] Docs for DLQ/expiry queues.7",
        "preceedingTasks": [
          74945023,
          22989767
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1712752525252526,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000175980324662471
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 18992242,
        "code": "ENTMQMAAS-2514.6",
        "name": "[#5124] : [Documentation] Document changing broker logging level at runtime.6",
        "preceedingTasks": [
          31947270,
          19992068
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1712752525252526,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000175980324662471
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 17997503,
        "code": "ENTMQMAAS-2527.5",
        "name": "Docs: Release Notes - Update Release Notes for Release 1.6.5",
        "preceedingTasks": [
          14996585,
          18992242
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1712752525252526,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000175980324662471
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 13999907,
        "code": "ENTMQMAAS-2533.1",
        "name": "Docs: Modify Standard address space image to remove MQTT gateway and clients.1",
        "preceedingTasks": [
          61949141,
          17997503
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1712752525252526,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000175980324662471
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 13999921,
        "code": "ENTMQMAAS-2534.1",
        "name": "Docs: Update Supported features table.1",
        "preceedingTasks": [
          13999907
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1712752525252526,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000175980324662471
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 13999930,
        "code": "ENTMQMAAS-2535.1",
        "name": "Docs: Update OCP prerequisites for installing AMQ Online.1",
        "preceedingTasks": [
          13999921
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1712752525252526,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000175980324662471
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 81940435,
        "code": "ENTMQMAAS-2022.69",
        "name": "[CI] fix plugins.txt for enmase csb jenkins.69",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.382204861111111,
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
            "weight": 0.0005081653592954134
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 74945023,
        "code": "ENTMQMAAS-2088.62",
        "name": "[systemtest] create test container for running enmasse suite in delorean.62",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.382204861111111,
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
            "weight": 0.0005081653592954134
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 61949141,
        "code": "ENTMQMAAS-2155.49",
        "name": "[systemtest] load env from json config.49",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.382204861111111,
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
            "weight": 0.0005081653592954134
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 38960825,
        "code": "ENTMQMAAS-2331.26",
        "name": "[CI] adopt new one ocp deploy instead of osia.26",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.382204861111111,
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
            "weight": 0.0005081653592954134
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 36962350,
        "code": "ENTMQMAAS-2343.24",
        "name": "[systemtests] fix node pot tests on AWS.24",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.382204861111111,
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
            "weight": 0.0005081653592954134
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 34965836,
        "code": "ENTMQMAAS-2358.22",
        "name": "[systemtest] enable systemtests framework unit tests without kubernetes connection.22",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.382204861111111,
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
            "weight": 0.0005081653592954134
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 25972453,
        "code": "ENTMQMAAS-2436.13",
        "name": "[CI] create job for runing tests on dis cluster in maas-jenkins.13",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.382204861111111,
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
            "weight": 0.0005081653592954134
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 23974138,
        "code": "ENTMQMAAS-2445.11",
        "name": "[systemtests] tekton allow to run iot tests and add examples.11",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.382204861111111,
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
            "weight": 0.0005081653592954134
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 31947270,
        "code": "ENTMQMAAS-2119.19",
        "name": "[systemtest] Create tests for service selectors.19",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 6.529513888888889,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000981038378107461
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 30947615,
        "code": "ENTMQMAAS-2123.18",
        "name": "[systemtest] rename messagingPerformanceTest to scaleConnectionTest.18",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 6.529513888888889,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000981038378107461
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 18968426,
        "code": "ENTMQMAAS-2402.6",
        "name": "[CI] Parallelization of PR job.6",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 6.529513888888889,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000981038378107461
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 13999501,
        "code": "ENTMQMAAS-2532.1",
        "name": "[systemtest] Create tests for DLQ via console.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 6.529513888888889,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000981038378107461
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 13953565,
        "code": "ENTMQMAAS-2214.1",
        "name": "[systemtest] add ability to check errors in pod logs during tests.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 101.73680555555556,
        "requireAssign": {
          "backend": 3.38,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.22
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.015285626528170289
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "zschwarz"
      },
      {
        "id": 82940435,
        "code": "ENTMQMAAS-2022.70",
        "name": "[CI] fix plugins.txt for enmase csb jenkins.70",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.1507936507936507,
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
            "weight": 0.0003231498011527291
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 75945023,
        "code": "ENTMQMAAS-2088.63",
        "name": "[systemtest] create test container for running enmasse suite in delorean.63",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.1507936507936507,
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
            "weight": 0.0003231498011527291
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 62949141,
        "code": "ENTMQMAAS-2155.50",
        "name": "[systemtest] load env from json config.50",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.1507936507936507,
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
            "weight": 0.0003231498011527291
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 39960825,
        "code": "ENTMQMAAS-2331.27",
        "name": "[CI] adopt new one ocp deploy instead of osia.27",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.1507936507936507,
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
            "weight": 0.0003231498011527291
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 35965836,
        "code": "ENTMQMAAS-2358.23",
        "name": "[systemtest] enable systemtests framework unit tests without kubernetes connection.23",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.1507936507936507,
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
            "weight": 0.0003231498011527291
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 26972453,
        "code": "ENTMQMAAS-2436.14",
        "name": "[CI] create job for runing tests on dis cluster in maas-jenkins.14",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.1507936507936507,
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
            "weight": 0.0003231498011527291
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 24974138,
        "code": "ENTMQMAAS-2445.12",
        "name": "[systemtests] tekton allow to run iot tests and add examples.12",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.1507936507936507,
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
            "weight": 0.0003231498011527291
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 31947615,
        "code": "ENTMQMAAS-2123.19",
        "name": "[systemtest] rename messagingPerformanceTest to scaleConnectionTest.19",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 4.996759259259259,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0007507469442463051
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 19968426,
        "code": "ENTMQMAAS-2402.7",
        "name": "[CI] Parallelization of PR job.7",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 4.996759259259259,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0007507469442463051
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 14999501,
        "code": "ENTMQMAAS-2532.2",
        "name": "[systemtest] Create tests for DLQ via console.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 4.996759259259259,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0007507469442463051
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 33947615,
        "code": "ENTMQMAAS-2123.21",
        "name": "[systemtest] rename messagingPerformanceTest to scaleConnectionTest.21",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 1.6996527777777777,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002553673417089083
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 21968426,
        "code": "ENTMQMAAS-2402.9",
        "name": "[CI] Parallelization of PR job.9",
        "preceedingTasks": [
          33947615
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 1.6996527777777777,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002553673417089083
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 16999501,
        "code": "ENTMQMAAS-2532.4",
        "name": "[systemtest] Create tests for DLQ via console.4",
        "preceedingTasks": [
          21968426
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 1.6996527777777777,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002553673417089083
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 15169436,
        "code": "ENTMQMAAS-2551.2",
        "name": "Create test and polarion metadata for ENTMQMAAS-2521.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 1.6996527777777777,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002553673417089083
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 70941617,
        "code": "ENTMQMAAS-2033.58",
        "name": "[#4512] : [Docs] correct loadbalance spec indentation.58",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3765277777777778,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00020681885382447317
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 39977369,
        "code": "ENTMQMAAS-2459.27",
        "name": "Docs: Document Pods overview.27",
        "preceedingTasks": [
          83940435,
          70941617
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3765277777777778,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00020681885382447317
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 37986818,
        "code": "ENTMQMAAS-2499.25",
        "name": "[#5000] : Minor documentation fixes.25",
        "preceedingTasks": [
          39977369
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3765277777777778,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00020681885382447317
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 31997503,
        "code": "ENTMQMAAS-2527.19",
        "name": "Docs: Release Notes - Update Release Notes for Release 1.6.19",
        "preceedingTasks": [
          16999501,
          37986818
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3765277777777778,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00020681885382447317
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 18164415,
        "code": "ENTMQMAAS-2544.5",
        "name": "[#5271] Document behaviour of disposition undeliverable-here=true for users of the standard address space.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.3765277777777778,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00020681885382447317
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 30942255,
        "code": "ENTMQMAAS-2038.18",
        "name": "testAddressLinks sporadic failure.18",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 26.270833333333332,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0039471078802239025
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 20958448,
        "code": "ENTMQMAAS-2278.8",
        "name": "[#4815] : Support consumer priority for forwarders.8",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 26.270833333333332,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0039471078802239025
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 17967558,
        "code": "ENTMQMAAS-2384.5",
        "name": "[#4950] : [Access Control] add SASL PLAIN support and initial identity provider support.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 26.270833333333332,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0039471078802239025
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 13992718,
        "code": "ENTMQMAAS-2517.1",
        "name": "Integrate DLQ/expiry queue in Console.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "frontend"
        ],
        "estimateTime": 65.97291666666666,
        "requireAssign": {
          "backend": 2.71,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.41
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00991221770365189
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "suyash-naithani"
      },
      {
        "id": 83940435,
        "code": "ENTMQMAAS-2022.71",
        "name": "[CI] fix plugins.txt for enmase csb jenkins.71",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.003373015873016,
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
            "weight": 0.00030100032677482535
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 76945023,
        "code": "ENTMQMAAS-2088.64",
        "name": "[systemtest] create test container for running enmasse suite in delorean.64",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.003373015873016,
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
            "weight": 0.00030100032677482535
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 63949141,
        "code": "ENTMQMAAS-2155.51",
        "name": "[systemtest] load env from json config.51",
        "preceedingTasks": [
          76945023
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.003373015873016,
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
            "weight": 0.00030100032677482535
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 40960825,
        "code": "ENTMQMAAS-2331.28",
        "name": "[CI] adopt new one ocp deploy instead of osia.28",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.003373015873016,
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
            "weight": 0.00030100032677482535
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 36965836,
        "code": "ENTMQMAAS-2358.24",
        "name": "[systemtest] enable systemtests framework unit tests without kubernetes connection.24",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.003373015873016,
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
            "weight": 0.00030100032677482535
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 27972453,
        "code": "ENTMQMAAS-2436.15",
        "name": "[CI] create job for runing tests on dis cluster in maas-jenkins.15",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.003373015873016,
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
            "weight": 0.00030100032677482535
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 25974138,
        "code": "ENTMQMAAS-2445.13",
        "name": "[systemtests] tekton allow to run iot tests and add examples.13",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.003373015873016,
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
            "weight": 0.00030100032677482535
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 84940435,
        "code": "ENTMQMAAS-2022.72",
        "name": "[CI] fix plugins.txt for enmase csb jenkins.72",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.7497395833333336,
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
            "weight": 0.00041313949352977984
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 77945023,
        "code": "ENTMQMAAS-2088.65",
        "name": "[systemtest] create test container for running enmasse suite in delorean.65",
        "preceedingTasks": [
          84940435
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.7497395833333336,
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
            "weight": 0.00041313949352977984
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 64949141,
        "code": "ENTMQMAAS-2155.52",
        "name": "[systemtest] load env from json config.52",
        "preceedingTasks": [
          77945023
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.7497395833333336,
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
            "weight": 0.00041313949352977984
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 41960825,
        "code": "ENTMQMAAS-2331.29",
        "name": "[CI] adopt new one ocp deploy instead of osia.29",
        "preceedingTasks": [
          64949141
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.7497395833333336,
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
            "weight": 0.00041313949352977984
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 37965836,
        "code": "ENTMQMAAS-2358.25",
        "name": "[systemtest] enable systemtests framework unit tests without kubernetes connection.25",
        "preceedingTasks": [
          41960825
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.7497395833333336,
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
            "weight": 0.00041313949352977984
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 28972453,
        "code": "ENTMQMAAS-2436.16",
        "name": "[CI] create job for runing tests on dis cluster in maas-jenkins.16",
        "preceedingTasks": [
          42977369,
          37965836
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.7497395833333336,
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
            "weight": 0.00041313949352977984
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 26974138,
        "code": "ENTMQMAAS-2445.14",
        "name": "[systemtests] tekton allow to run iot tests and add examples.14",
        "preceedingTasks": [
          35947615,
          28972453
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.7497395833333336,
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
            "weight": 0.00041313949352977984
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 14179518,
        "code": "ENTMQMAAS-2565.1",
        "name": "Test olm upgrade for 1.5.3 on ocp 4.6 and  4.5.1",
        "preceedingTasks": [
          40986818,
          26974138
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.7497395833333336,
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
            "weight": 0.00041313949352977984
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 73941617,
        "code": "ENTMQMAAS-2033.61",
        "name": "[#4512] : [Docs] correct loadbalance spec indentation.61",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 5.1982638888888895,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0007810223641928635
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 42977369,
        "code": "ENTMQMAAS-2459.30",
        "name": "Docs: Document Pods overview.30",
        "preceedingTasks": [
          73941617
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 5.1982638888888895,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0007810223641928635
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 40986818,
        "code": "ENTMQMAAS-2499.28",
        "name": "[#5000] : Minor documentation fixes.28",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 5.1982638888888895,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0007810223641928635
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 21164415,
        "code": "ENTMQMAAS-2544.8",
        "name": "[#5271] Document behaviour of disposition undeliverable-here=true for users of the standard address space.8",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 5.1982638888888895,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0007810223641928635
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 14183700,
        "code": "ENTMQMAAS-2585.1",
        "name": "[#5209] : Make broker behavior on rejected messages configurable.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 23.009722222222223,
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
            "weight": 0.003457136465856167
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 14199583,
        "code": "ENTMQMAAS-2598.1",
        "name": "[#5209] : Make broker behavior on rejected messages configurable on 1.6.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.046527777777778,
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
            "weight": 0.0003074841904049654
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 85940435,
        "code": "ENTMQMAAS-2022.73",
        "name": "[CI] fix plugins.txt for enmase csb jenkins.73",
        "preceedingTasks": [
          14179518
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.614409722222222,
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
            "weight": 0.00024255984786017754
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 78945023,
        "code": "ENTMQMAAS-2088.66",
        "name": "[systemtest] create test container for running enmasse suite in delorean.66",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.614409722222222,
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
            "weight": 0.00024255984786017754
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 65949141,
        "code": "ENTMQMAAS-2155.53",
        "name": "[systemtest] load env from json config.53",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.614409722222222,
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
            "weight": 0.00024255984786017754
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 42960825,
        "code": "ENTMQMAAS-2331.30",
        "name": "[CI] adopt new one ocp deploy instead of osia.30",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.614409722222222,
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
            "weight": 0.00024255984786017754
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 38965836,
        "code": "ENTMQMAAS-2358.26",
        "name": "[systemtest] enable systemtests framework unit tests without kubernetes connection.26",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.614409722222222,
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
            "weight": 0.00024255984786017754
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 29972453,
        "code": "ENTMQMAAS-2436.17",
        "name": "[CI] create job for runing tests on dis cluster in maas-jenkins.17",
        "preceedingTasks": [
          38965836
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.614409722222222,
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
            "weight": 0.00024255984786017754
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 27974138,
        "code": "ENTMQMAAS-2445.15",
        "name": "[systemtests] tekton allow to run iot tests and add examples.15",
        "preceedingTasks": [
          14199583,
          29972453
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.614409722222222,
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
            "weight": 0.00024255984786017754
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 15179518,
        "code": "ENTMQMAAS-2565.2",
        "name": "Test olm upgrade for 1.5.3 on ocp 4.6 and  4.5.2",
        "preceedingTasks": [
          27974138
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.614409722222222,
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
            "weight": 0.00024255984786017754
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 14192916,
        "code": "ENTMQMAAS-2589.1",
        "name": "Create job which test operator from index image (CVP, CPAAS).1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 14.875,
        "requireAssign": {
          "backend": 3.38,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.22
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0022349207188579433
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "zschwarz"
      },
      {
        "id": 35947615,
        "code": "ENTMQMAAS-2123.23",
        "name": "[systemtest] rename messagingPerformanceTest to scaleConnectionTest.23",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 21.055902777777778,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.003163581403180778
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 23968426,
        "code": "ENTMQMAAS-2402.11",
        "name": "[CI] Parallelization of PR job.11",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 21.055902777777778,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.003163581403180778
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 15192916,
        "code": "ENTMQMAAS-2589.2",
        "name": "Create job which test operator from index image (CVP, CPAAS).2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 13.695601851851853,
        "requireAssign": {
          "backend": 3.38,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.22
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0020577199553568353
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "zschwarz"
      },
      {
        "id": 14203415,
        "code": "ENTMQMAAS-2624.1",
        "name": "Identify flaky tests from latest 1.5 and 1.6 runs make list.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 13.695601851851853,
        "requireAssign": {
          "backend": 3.38,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.22
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0020577199553568353
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "zschwarz"
      },
      {
        "id": 14203419,
        "code": "ENTMQMAAS-2626.1",
        "name": "Build new version of systemtests-clients.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 13.695601851851853,
        "requireAssign": {
          "backend": 3.38,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.22
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0020577199553568353
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "zschwarz"
      },
      {
        "id": 14203417,
        "code": "ENTMQMAAS-2625.1",
        "name": "Investigate random issue \\\"no route to host\\\".1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 13.983333333333334,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0021009506813689798
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 14203421,
        "code": "ENTMQMAAS-2627.1",
        "name": "Investigate why upstream isolated job takes too much time and build failed.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 13.983333333333334,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0021009506813689798
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 14203438,
        "code": "ENTMQMAAS-2628.1",
        "name": "Investigate and fix why dowsntream stage and production jobs do not run tests and replace images in templates.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 13.983333333333334,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0021009506813689798
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 86940435,
        "code": "ENTMQMAAS-2022.74",
        "name": "[CI] fix plugins.txt for enmase csb jenkins.74",
        "preceedingTasks": [
          15179518
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 6.438888888888889,
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
            "weight": 0.0009674222644841667
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 79945023,
        "code": "ENTMQMAAS-2088.67",
        "name": "[systemtest] create test container for running enmasse suite in delorean.67",
        "preceedingTasks": [
          14192916,
          23968426,
          19960660,
          76941617,
          86940435
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 6.438888888888889,
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
            "weight": 0.0009674222644841667
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 66949141,
        "code": "ENTMQMAAS-2155.54",
        "name": "[systemtest] load env from json config.54",
        "preceedingTasks": [
          31942255,
          79945023
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 6.438888888888889,
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
            "weight": 0.0009674222644841667
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 43960825,
        "code": "ENTMQMAAS-2331.31",
        "name": "[CI] adopt new one ocp deploy instead of osia.31",
        "preceedingTasks": [
          15192916,
          14203417,
          45977369,
          66949141
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 6.438888888888889,
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
            "weight": 0.0009674222644841667
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 39965836,
        "code": "ENTMQMAAS-2358.27",
        "name": "[systemtest] enable systemtests framework unit tests without kubernetes connection.27",
        "preceedingTasks": [
          36947615,
          43960825
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 6.438888888888889,
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
            "weight": 0.0009674222644841667
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 28974138,
        "code": "ENTMQMAAS-2445.16",
        "name": "[systemtests] tekton allow to run iot tests and add examples.16",
        "preceedingTasks": [
          14203415,
          14203421,
          39965836
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 6.438888888888889,
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
            "weight": 0.0009674222644841667
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 16179518,
        "code": "ENTMQMAAS-2565.3",
        "name": "Test olm upgrade for 1.5.3 on ocp 4.6 and  4.5.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 6.438888888888889,
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
            "weight": 0.0009674222644841667
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 76941617,
        "code": "ENTMQMAAS-2033.64",
        "name": "[#4512] : [Docs] correct loadbalance spec indentation.64",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 10.586527777777778,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0015905916148787023
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 45977369,
        "code": "ENTMQMAAS-2459.33",
        "name": "Docs: Document Pods overview.33",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 10.586527777777778,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0015905916148787023
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 43986818,
        "code": "ENTMQMAAS-2499.31",
        "name": "[#5000] : Minor documentation fixes.31",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 10.586527777777778,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0015905916148787023
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 24164415,
        "code": "ENTMQMAAS-2544.11",
        "name": "[#5271] Document behaviour of disposition undeliverable-here=true for users of the standard address space.11",
        "preceedingTasks": [
          43986818
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 10.586527777777778,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0015905916148787023
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 15199242,
        "code": "ENTMQMAAS-2596.2",
        "name": "Docs: Add link to 1.6.1 resolved issues to 1.6 RNs.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 10.586527777777778,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0015905916148787023
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 16192916,
        "code": "ENTMQMAAS-2589.3",
        "name": "Create job which test operator from index image (CVP, CPAAS).3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 5.517361111111111,
        "requireAssign": {
          "backend": 3.38,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.22
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0008289656914718188
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "zschwarz"
      },
      {
        "id": 15203415,
        "code": "ENTMQMAAS-2624.2",
        "name": "Identify flaky tests from latest 1.5 and 1.6 runs make list.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 5.517361111111111,
        "requireAssign": {
          "backend": 3.38,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.22
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0008289656914718188
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "zschwarz"
      },
      {
        "id": 48977369,
        "code": "ENTMQMAAS-2459.36",
        "name": "Docs: Document Pods overview.36",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.4284722222222221,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00021462333887445326
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 27164415,
        "code": "ENTMQMAAS-2544.14",
        "name": "[#5271] Document behaviour of disposition undeliverable-here=true for users of the standard address space.14",
        "preceedingTasks": [
          87940435,
          48977369
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.4284722222222221,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00021462333887445326
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 49977369,
        "code": "ENTMQMAAS-2459.37",
        "name": "Docs: Document Pods overview.37",
        "preceedingTasks": [
          16203421,
          15203415,
          27164415
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.0469907407407408,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001573069780795904
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 28164415,
        "code": "ENTMQMAAS-2544.15",
        "name": "[#5271] Document behaviour of disposition undeliverable-here=true for users of the standard address space.15",
        "preceedingTasks": [
          49977369
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.0469907407407408,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001573069780795904
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 14233063,
        "code": "ENTMQMAAS-2654.1",
        "name": "Docs: Release Notes - Update Release Notes for Release 1.7.1",
        "preceedingTasks": [
          80945023,
          28164415
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.0469907407407408,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001573069780795904
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 36947615,
        "code": "ENTMQMAAS-2123.24",
        "name": "[systemtest] rename messagingPerformanceTest to scaleConnectionTest.24",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 20.65138888888889,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0031028044975442352
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 24968426,
        "code": "ENTMQMAAS-2402.12",
        "name": "[CI] Parallelization of PR job.12",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 20.65138888888889,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0031028044975442352
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 14205589,
        "code": "ENTMQMAAS-2629.1",
        "name": "Upgrade minikube version.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 20.65138888888889,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0031028044975442352
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 16203417,
        "code": "ENTMQMAAS-2625.3",
        "name": "Investigate random issue \\\"no route to host\\\".3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.385694444444444,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0006589364289390967
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 16203421,
        "code": "ENTMQMAAS-2627.3",
        "name": "Investigate why upstream isolated job takes too much time and build failed.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.385694444444444,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0006589364289390967
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 16203438,
        "code": "ENTMQMAAS-2628.3",
        "name": "Investigate and fix why dowsntream stage and production jobs do not run tests and replace images in templates.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.385694444444444,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0006589364289390967
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 15224508,
        "code": "ENTMQMAAS-2644.2",
        "name": "CVP trigger job from iib message and run olm tests.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.385694444444444,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0006589364289390967
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 14224637,
        "code": "ENTMQMAAS-2645.1",
        "name": "Implement or update olm upgrade tests in testsuite.1",
        "preceedingTasks": [
          15224508
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.385694444444444,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0006589364289390967
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 14000889,
        "code": "ENTMQMAAS-2536.1",
        "name": "Change parent images to use external registry registry.redhat.io/ubi7/ubi:latest.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 152.29513888888889,
        "requireAssign": {
          "backend": 2.97,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.022881852859437033
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "buschv"
      },
      {
        "id": 31942255,
        "code": "ENTMQMAAS-2038.19",
        "name": "testAddressLinks sporadic failure.19",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 52.050000000000004,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.007820344431365107
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 18967558,
        "code": "ENTMQMAAS-2384.6",
        "name": "[#4950] : [Access Control] add SASL PLAIN support and initial identity provider support.6",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 52.050000000000004,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.007820344431365107
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 50977369,
        "code": "ENTMQMAAS-2459.38",
        "name": "Docs: Document Pods overview.38",
        "preceedingTasks": [
          16203438,
          14233063
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.6645833333333333,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0005505918129511375
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 29164415,
        "code": "ENTMQMAAS-2544.16",
        "name": "[#5271] Document behaviour of disposition undeliverable-here=true for users of the standard address space.16",
        "preceedingTasks": [
          17192916,
          50977369
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.6645833333333333,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0005505918129511375
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 15233063,
        "code": "ENTMQMAAS-2654.2",
        "name": "Docs: Release Notes - Update Release Notes for Release 1.7.2",
        "preceedingTasks": [
          44960825,
          29164415
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.6645833333333333,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0005505918129511375
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 17192916,
        "code": "ENTMQMAAS-2589.4",
        "name": "Create job which test operator from index image (CVP, CPAAS).4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 6.641898148148148,
        "requireAssign": {
          "backend": 3.38,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.22
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0009979237501741515
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "zschwarz"
      },
      {
        "id": 16203415,
        "code": "ENTMQMAAS-2624.3",
        "name": "Identify flaky tests from latest 1.5 and 1.6 runs make list.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 6.641898148148148,
        "requireAssign": {
          "backend": 3.38,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.22
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0009979237501741515
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "zschwarz"
      },
      {
        "id": 14232859,
        "code": "ENTMQMAAS-2653.1",
        "name": "enmasse-ci refactor common pipelines.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 6.641898148148148,
        "requireAssign": {
          "backend": 3.38,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.22
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0009979237501741515
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "zschwarz"
      },
      {
        "id": 17203421,
        "code": "ENTMQMAAS-2627.4",
        "name": "Investigate why upstream isolated job takes too much time and build failed.4",
        "preceedingTasks": [
          14205589,
          14224637
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.489236111111111,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003739996879900232
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 17203438,
        "code": "ENTMQMAAS-2628.4",
        "name": "Investigate and fix why dowsntream stage and production jobs do not run tests and replace images in templates.4",
        "preceedingTasks": [
          14000889,
          18967558,
          16203415,
          15233063,
          17203421
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.489236111111111,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003739996879900232
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 16224508,
        "code": "ENTMQMAAS-2644.3",
        "name": "CVP trigger job from iib message and run olm tests.3",
        "preceedingTasks": [
          19960668,
          17203438
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.489236111111111,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003739996879900232
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 15224637,
        "code": "ENTMQMAAS-2645.2",
        "name": "Implement or update olm upgrade tests in testsuite.2",
        "preceedingTasks": [
          51977369,
          29974138,
          16224508
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.489236111111111,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003739996879900232
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 87940435,
        "code": "ENTMQMAAS-2022.75",
        "name": "[CI] fix plugins.txt for enmase csb jenkins.75",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.364322916666667,
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
            "weight": 0.0006557254258988143
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 80945023,
        "code": "ENTMQMAAS-2088.68",
        "name": "[systemtest] create test container for running enmasse suite in delorean.68",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.364322916666667,
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
            "weight": 0.0006557254258988143
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 67949141,
        "code": "ENTMQMAAS-2155.55",
        "name": "[systemtest] load env from json config.55",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.364322916666667,
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
            "weight": 0.0006557254258988143
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 44960825,
        "code": "ENTMQMAAS-2331.32",
        "name": "[CI] adopt new one ocp deploy instead of osia.32",
        "preceedingTasks": [
          67949141
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.364322916666667,
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
            "weight": 0.0006557254258988143
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 40965836,
        "code": "ENTMQMAAS-2358.28",
        "name": "[systemtest] enable systemtests framework unit tests without kubernetes connection.28",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.364322916666667,
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
            "weight": 0.0006557254258988143
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 29974138,
        "code": "ENTMQMAAS-2445.17",
        "name": "[systemtests] tekton allow to run iot tests and add examples.17",
        "preceedingTasks": [
          40965836
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.364322916666667,
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
            "weight": 0.0006557254258988143
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 17179518,
        "code": "ENTMQMAAS-2565.4",
        "name": "Test olm upgrade for 1.5.3 on ocp 4.6 and  4.5.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.364322916666667,
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
            "weight": 0.0006557254258988143
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 14227445,
        "code": "ENTMQMAAS-2649.1",
        "name": "Fix installation of local jenkins instance for testing.1",
        "preceedingTasks": [
          32942255,
          17179518
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.364322916666667,
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
            "weight": 0.0006557254258988143
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 51977369,
        "code": "ENTMQMAAS-2459.39",
        "name": "Docs: Document Pods overview.39",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 4.755381944444444,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0007144807820989486
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 30164415,
        "code": "ENTMQMAAS-2544.17",
        "name": "[#5271] Document behaviour of disposition undeliverable-here=true for users of the standard address space.17",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 4.755381944444444,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0007144807820989486
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 16233063,
        "code": "ENTMQMAAS-2654.3",
        "name": "Docs: Release Notes - Update Release Notes for Release 1.7.3",
        "preceedingTasks": [
          30164415
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 4.755381944444444,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0007144807820989486
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 14248347,
        "code": "ENTMQMAAS-2662.1",
        "name": "Docs: Document a new field for !!GLOBAL_DLQ.1",
        "preceedingTasks": [
          16233063
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 4.755381944444444,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0007144807820989486
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 18203438,
        "code": "ENTMQMAAS-2628.5",
        "name": "Investigate and fix why dowsntream stage and production jobs do not run tests and replace images in templates.5",
        "preceedingTasks": [
          14232859,
          15224637
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.321759259259259,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0006493303738107345
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 17224508,
        "code": "ENTMQMAAS-2644.4",
        "name": "CVP trigger job from iib message and run olm tests.4",
        "preceedingTasks": [
          18203438
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.321759259259259,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0006493303738107345
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 16224637,
        "code": "ENTMQMAAS-2645.3",
        "name": "Implement or update olm upgrade tests in testsuite.3",
        "preceedingTasks": [
          17224508
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.321759259259259,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0006493303738107345
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 31164415,
        "code": "ENTMQMAAS-2544.18",
        "name": "[#5271] Document behaviour of disposition undeliverable-here=true for users of the standard address space.18",
        "preceedingTasks": [
          88940435,
          19967558,
          14248347
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.923611111111111,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00028901635813429047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 17233063,
        "code": "ENTMQMAAS-2654.4",
        "name": "Docs: Release Notes - Update Release Notes for Release 1.7.4",
        "preceedingTasks": [
          16224637,
          31164415
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.923611111111111,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00028901635813429047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 15248347,
        "code": "ENTMQMAAS-2662.2",
        "name": "Docs: Document a new field for !!GLOBAL_DLQ.2",
        "preceedingTasks": [
          81945023,
          17233063
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.923611111111111,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00028901635813429047
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 18224508,
        "code": "ENTMQMAAS-2644.5",
        "name": "CVP trigger job from iib message and run olm tests.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 6.034722222222222,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0009066975278653374
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 17224637,
        "code": "ENTMQMAAS-2645.4",
        "name": "Implement or update olm upgrade tests in testsuite.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 6.034722222222222,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0009066975278653374
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 33164415,
        "code": "ENTMQMAAS-2544.20",
        "name": "[#5271] Document behaviour of disposition undeliverable-here=true for users of the standard address space.20",
        "preceedingTasks": [
          18224508,
          37947615
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.9986111111111111,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000300284865960465
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 19233063,
        "code": "ENTMQMAAS-2654.6",
        "name": "Docs: Release Notes - Update Release Notes for Release 1.7.6",
        "preceedingTasks": [
          45960825,
          33164415
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.9986111111111111,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000300284865960465
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 17248347,
        "code": "ENTMQMAAS-2662.4",
        "name": "Docs: Document a new field for !!GLOBAL_DLQ.4",
        "preceedingTasks": [
          14244843,
          18192916,
          19233063
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.9986111111111111,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000300284865960465
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 14268826,
        "code": "ENTMQMAAS-2671.1",
        "name": "[System tests] Monitoring regression on 3.11.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 7.007986111111111,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.4
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.001052927284517037
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rshelly"
      },
      {
        "id": 32942255,
        "code": "ENTMQMAAS-2038.20",
        "name": "testAddressLinks sporadic failure.20",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 10.489062500000001,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.001575947771606447
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 19967558,
        "code": "ENTMQMAAS-2384.7",
        "name": "[#4950] : [Access Control] add SASL PLAIN support and initial identity provider support.7",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 10.489062500000001,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.001575947771606447
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 14244843,
        "code": "ENTMQMAAS-2658.1",
        "name": "[#5240] Park on LTS versions of broker (AMQ Broker 7.8).1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 10.489062500000001,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.001575947771606447
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 14244844,
        "code": "ENTMQMAAS-2659.1",
        "name": "[#5240] Park on LTS versions of interconnect (Red Hat Interconnect 1.10.0).1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 10.489062500000001,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.001575947771606447
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 88940435,
        "code": "ENTMQMAAS-2022.76",
        "name": "[CI] fix plugins.txt for enmase csb jenkins.76",
        "preceedingTasks": [
          14227445
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.793650793650794,
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
            "weight": 0.0005699837821070278
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 81945023,
        "code": "ENTMQMAAS-2088.69",
        "name": "[systemtest] create test container for running enmasse suite in delorean.69",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.793650793650794,
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
            "weight": 0.0005699837821070278
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 68949141,
        "code": "ENTMQMAAS-2155.56",
        "name": "[systemtest] load env from json config.56",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.793650793650794,
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
            "weight": 0.0005699837821070278
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 45960825,
        "code": "ENTMQMAAS-2331.33",
        "name": "[CI] adopt new one ocp deploy instead of osia.33",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.793650793650794,
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
            "weight": 0.0005699837821070278
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 41965836,
        "code": "ENTMQMAAS-2358.29",
        "name": "[systemtest] enable systemtests framework unit tests without kubernetes connection.29",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.793650793650794,
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
            "weight": 0.0005699837821070278
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 30974138,
        "code": "ENTMQMAAS-2445.18",
        "name": "[systemtests] tekton allow to run iot tests and add examples.18",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.793650793650794,
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
            "weight": 0.0005699837821070278
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 18179518,
        "code": "ENTMQMAAS-2565.5",
        "name": "Test olm upgrade for 1.5.3 on ocp 4.6 and  4.5.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.793650793650794,
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
            "weight": 0.0005699837821070278
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 34164415,
        "code": "ENTMQMAAS-2544.21",
        "name": "[#5271] Document behaviour of disposition undeliverable-here=true for users of the standard address space.21",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.2847222222222223,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003432721365566122
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 20233063,
        "code": "ENTMQMAAS-2654.7",
        "name": "Docs: Release Notes - Update Release Notes for Release 1.7.7",
        "preceedingTasks": [
          34164415
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.2847222222222223,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003432721365566122
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 18248347,
        "code": "ENTMQMAAS-2662.5",
        "name": "Docs: Document a new field for !!GLOBAL_DLQ.5",
        "preceedingTasks": [
          30974138,
          20233063
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.2847222222222223,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003432721365566122
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 14280077,
        "code": "ENTMQMAAS-2675.1",
        "name": "Add new field to support router configuration maxMessageSize.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.2847222222222223,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003432721365566122
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 21224508,
        "code": "ENTMQMAAS-2644.8",
        "name": "CVP trigger job from iib message and run olm tests.8",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.38287037037037,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0006585121209283582
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 20224637,
        "code": "ENTMQMAAS-2645.7",
        "name": "Implement or update olm upgrade tests in testsuite.7",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.38287037037037,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0006585121209283582
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 16279357,
        "code": "ENTMQMAAS-2674.3",
        "name": "[#5272] Support router configuration maxMessageSize.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.38287037037037,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0006585121209283582
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 25233063,
        "code": "ENTMQMAAS-2654.12",
        "name": "Docs: Release Notes - Update Release Notes for Release 1.7.12",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.7770833333333333,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002670010326590792
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 22224508,
        "code": "ENTMQMAAS-2644.9",
        "name": "CVP trigger job from iib message and run olm tests.9",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.501736111111111,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000375877772627719
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 21224637,
        "code": "ENTMQMAAS-2645.8",
        "name": "Implement or update olm upgrade tests in testsuite.8",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.501736111111111,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000375877772627719
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 37947615,
        "code": "ENTMQMAAS-2123.25",
        "name": "[systemtest] rename messagingPerformanceTest to scaleConnectionTest.25",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 28.99826388888889,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.004356895514365573
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 25968426,
        "code": "ENTMQMAAS-2402.13",
        "name": "[CI] Parallelization of PR job.13",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "testing",
          "issue_tracking"
        ],
        "estimateTime": 28.99826388888889,
        "requireAssign": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.004356895514365573
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "obabec"
      },
      {
        "id": 90940435,
        "code": "ENTMQMAAS-2022.78",
        "name": "[CI] fix plugins.txt for enmase csb jenkins.78",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.5393849206349206,
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
            "weight": 0.00023128761367559493
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 83945023,
        "code": "ENTMQMAAS-2088.71",
        "name": "[systemtest] create test container for running enmasse suite in delorean.71",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.5393849206349206,
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
            "weight": 0.00023128761367559493
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 70949141,
        "code": "ENTMQMAAS-2155.58",
        "name": "[systemtest] load env from json config.58",
        "preceedingTasks": [
          16279357,
          83945023
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.5393849206349206,
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
            "weight": 0.00023128761367559493
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 47960825,
        "code": "ENTMQMAAS-2331.35",
        "name": "[CI] adopt new one ocp deploy instead of osia.35",
        "preceedingTasks": [
          25233063,
          70949141
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.5393849206349206,
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
            "weight": 0.00023128761367559493
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 43965836,
        "code": "ENTMQMAAS-2358.31",
        "name": "[systemtest] enable systemtests framework unit tests without kubernetes connection.31",
        "preceedingTasks": [
          22224508,
          47960825
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.5393849206349206,
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
            "weight": 0.00023128761367559493
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 32974138,
        "code": "ENTMQMAAS-2445.20",
        "name": "[systemtests] tekton allow to run iot tests and add examples.20",
        "preceedingTasks": [
          43965836
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.5393849206349206,
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
            "weight": 0.00023128761367559493
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 20179518,
        "code": "ENTMQMAAS-2565.7",
        "name": "Test olm upgrade for 1.5.3 on ocp 4.6 and  4.5.7",
        "preceedingTasks": [
          21224637,
          32974138
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.5393849206349206,
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
            "weight": 0.00023128761367559493
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 18192916,
        "code": "ENTMQMAAS-2589.5",
        "name": "Create job which test operator from index image (CVP, CPAAS).5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 25.065972222222225,
        "requireAssign": {
          "backend": 3.38,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.22
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.003766081388757118
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "zschwarz"
      },
      {
        "id": 17203415,
        "code": "ENTMQMAAS-2624.4",
        "name": "Identify flaky tests from latest 1.5 and 1.6 runs make list.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 25.065972222222225,
        "requireAssign": {
          "backend": 3.38,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.22
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.003766081388757118
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "zschwarz"
      },
      {
        "id": 18203415,
        "code": "ENTMQMAAS-2624.5",
        "name": "Identify flaky tests from latest 1.5 and 1.6 runs make list.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 18.072222222222223,
        "requireAssign": {
          "backend": 3.38,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.22
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0027152930339663455
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "zschwarz"
      },
      {
        "id": 23224508,
        "code": "ENTMQMAAS-2644.10",
        "name": "CVP trigger job from iib message and run olm tests.10",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 5.311979166666666,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0007981077174941233
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 22224637,
        "code": "ENTMQMAAS-2645.9",
        "name": "Implement or update olm upgrade tests in testsuite.9",
        "preceedingTasks": [
          25968426,
          20179518,
          17203415,
          23224508
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 5.311979166666666,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0007981077174941233
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 14297785,
        "code": "ENTMQMAAS-2702.1",
        "name": "[CI] investigate why upstream jobs stopped triggering every day.1",
        "preceedingTasks": [
          22224637
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 5.311979166666666,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0007981077174941233
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 14297789,
        "code": "ENTMQMAAS-2703.1",
        "name": "Onboard AMQ online 1.7 to ocp4 LP testing.1",
        "preceedingTasks": [
          18960819,
          14297785
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 5.311979166666666,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0007981077174941233
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 24224508,
        "code": "ENTMQMAAS-2644.11",
        "name": "CVP trigger job from iib message and run olm tests.11",
        "preceedingTasks": [
          91940435,
          18203415,
          14297789
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.9872222222222222,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00029857372217945334
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 23224637,
        "code": "ENTMQMAAS-2645.10",
        "name": "Implement or update olm upgrade tests in testsuite.10",
        "preceedingTasks": [
          24224508
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.9872222222222222,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00029857372217945334
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 15297785,
        "code": "ENTMQMAAS-2702.2",
        "name": "[CI] investigate why upstream jobs stopped triggering every day.2",
        "preceedingTasks": [
          23224637
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.9872222222222222,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00029857372217945334
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 15297789,
        "code": "ENTMQMAAS-2703.2",
        "name": "Onboard AMQ online 1.7 to ocp4 LP testing.2",
        "preceedingTasks": [
          15297785
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.9872222222222222,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00029857372217945334
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 14319722,
        "code": "ENTMQMAAS-2707.1",
        "name": "Migrate from old cachet plugin to statuspage.1",
        "preceedingTasks": [
          15297789
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.9872222222222222,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00029857372217945334
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 31224508,
        "code": "ENTMQMAAS-2644.18",
        "name": "CVP trigger job from iib message and run olm tests.18",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.9910714285714284,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004493988240200546
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 30224637,
        "code": "ENTMQMAAS-2645.17",
        "name": "Implement or update olm upgrade tests in testsuite.17",
        "preceedingTasks": [
          31224508
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.9910714285714284,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004493988240200546
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 22297789,
        "code": "ENTMQMAAS-2703.9",
        "name": "Onboard AMQ online 1.7 to ocp4 LP testing.9",
        "preceedingTasks": [
          71949141,
          30224637
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.9910714285714284,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004493988240200546
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 21319722,
        "code": "ENTMQMAAS-2707.8",
        "name": "Migrate from old cachet plugin to statuspage.8",
        "preceedingTasks": [
          22297789
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.9910714285714284,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004493988240200546
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 18332981,
        "code": "ENTMQMAAS-2710.5",
        "name": "[Weekly] Check and eventually cleanup nightly ocp/aws clusters.5",
        "preceedingTasks": [
          21319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.9910714285714284,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004493988240200546
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 16336533,
        "code": "ENTMQMAAS-2713.3",
        "name": "RHMI - AMQ Online 1.7 debugging.3",
        "preceedingTasks": [
          18332981
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.9910714285714284,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004493988240200546
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 15337567,
        "code": "ENTMQMAAS-2714.2",
        "name": "Investigate issues in onboarding tests.2",
        "preceedingTasks": [
          16336533
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.9910714285714284,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004493988240200546
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 32224508,
        "code": "ENTMQMAAS-2644.19",
        "name": "CVP trigger job from iib message and run olm tests.19",
        "preceedingTasks": [
          44965836,
          15337567
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.5908333333333333,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00038926434257307256
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 31224637,
        "code": "ENTMQMAAS-2645.18",
        "name": "Implement or update olm upgrade tests in testsuite.18",
        "preceedingTasks": [
          32224508
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.5908333333333333,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00038926434257307256
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 23297789,
        "code": "ENTMQMAAS-2703.10",
        "name": "Onboard AMQ online 1.7 to ocp4 LP testing.10",
        "preceedingTasks": [
          33942255,
          31224637
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.5908333333333333,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00038926434257307256
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 22319722,
        "code": "ENTMQMAAS-2707.9",
        "name": "Migrate from old cachet plugin to statuspage.9",
        "preceedingTasks": [
          23297789
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.5908333333333333,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00038926434257307256
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 19332981,
        "code": "ENTMQMAAS-2710.6",
        "name": "[Weekly] Check and eventually cleanup nightly ocp/aws clusters.6",
        "preceedingTasks": [
          22319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.5908333333333333,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00038926434257307256
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 33224508,
        "code": "ENTMQMAAS-2644.20",
        "name": "CVP trigger job from iib message and run olm tests.20",
        "preceedingTasks": [
          19332981
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.96875,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00029579833043708075
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 32224637,
        "code": "ENTMQMAAS-2645.19",
        "name": "Implement or update olm upgrade tests in testsuite.19",
        "preceedingTasks": [
          33974138,
          33224508
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.96875,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00029579833043708075
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 23319722,
        "code": "ENTMQMAAS-2707.10",
        "name": "Migrate from old cachet plugin to statuspage.10",
        "preceedingTasks": [
          16966539,
          32224637
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.96875,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00029579833043708075
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 20332981,
        "code": "ENTMQMAAS-2710.7",
        "name": "[Weekly] Check and eventually cleanup nightly ocp/aws clusters.7",
        "preceedingTasks": [
          23319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.96875,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00029579833043708075
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 91940435,
        "code": "ENTMQMAAS-2022.79",
        "name": "[CI] fix plugins.txt for enmase csb jenkins.79",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 14.708333333333334,
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
            "weight": 0.0022098795903553333
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 84945023,
        "code": "ENTMQMAAS-2088.72",
        "name": "[systemtest] create test container for running enmasse suite in delorean.72",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 14.708333333333334,
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
            "weight": 0.0022098795903553333
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 71949141,
        "code": "ENTMQMAAS-2155.59",
        "name": "[systemtest] load env from json config.59",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 14.708333333333334,
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
            "weight": 0.0022098795903553333
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 44965836,
        "code": "ENTMQMAAS-2358.32",
        "name": "[systemtest] enable systemtests framework unit tests without kubernetes connection.32",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 14.708333333333334,
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
            "weight": 0.0022098795903553333
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 33974138,
        "code": "ENTMQMAAS-2445.21",
        "name": "[systemtests] tekton allow to run iot tests and add examples.21",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 14.708333333333334,
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
            "weight": 0.0022098795903553333
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 21179518,
        "code": "ENTMQMAAS-2565.8",
        "name": "Test olm upgrade for 1.5.3 on ocp 4.6 and  4.5.8",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 14.708333333333334,
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
            "weight": 0.0022098795903553333
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 34224637,
        "code": "ENTMQMAAS-2645.21",
        "name": "Implement or update olm upgrade tests in testsuite.21",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.732638888888889,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00026032339839171656
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 25319722,
        "code": "ENTMQMAAS-2707.12",
        "name": "Migrate from old cachet plugin to statuspage.12",
        "preceedingTasks": [
          34224637
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.732638888888889,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00026032339839171656
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 14385637,
        "code": "ENTMQMAAS-2720.1",
        "name": "Fix failing GH action in upstream repository.1",
        "preceedingTasks": [
          25319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.732638888888889,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00026032339839171656
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 35224637,
        "code": "ENTMQMAAS-2645.22",
        "name": "Implement or update olm upgrade tests in testsuite.22",
        "preceedingTasks": [
          21179518,
          14385637
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.270138888888889,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00034108103781263385
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 26319722,
        "code": "ENTMQMAAS-2707.13",
        "name": "Migrate from old cachet plugin to statuspage.13",
        "preceedingTasks": [
          35224637
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.270138888888889,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00034108103781263385
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 15385637,
        "code": "ENTMQMAAS-2720.2",
        "name": "Fix failing GH action in upstream repository.2",
        "preceedingTasks": [
          26319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.270138888888889,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00034108103781263385
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 14390140,
        "code": "ENTMQMAAS-2724.1",
        "name": "Fix installation of CRC on rhel8.1",
        "preceedingTasks": [
          15385637
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.270138888888889,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00034108103781263385
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 36224637,
        "code": "ENTMQMAAS-2645.23",
        "name": "Implement or update olm upgrade tests in testsuite.23",
        "preceedingTasks": [
          14390140
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.9277777777777776,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0005901359283781759
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 27319722,
        "code": "ENTMQMAAS-2707.14",
        "name": "Migrate from old cachet plugin to statuspage.14",
        "preceedingTasks": [
          36224637
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.9277777777777776,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0005901359283781759
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 15390140,
        "code": "ENTMQMAAS-2724.2",
        "name": "Fix installation of CRC on rhel8.2",
        "preceedingTasks": [
          27319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.9277777777777776,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0005901359283781759
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 28319722,
        "code": "ENTMQMAAS-2707.15",
        "name": "Migrate from old cachet plugin to statuspage.15",
        "preceedingTasks": [
          15390140
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.9409722222222223,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002916248090199791
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 14371393,
        "code": "ENTMQMAAS-2719.1",
        "name": "glib2 security update RHSA :76601 - Container images to be updated for AMQ Online.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 45.99027777777778,
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
            "weight": 0.006909890734224377
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 30319722,
        "code": "ENTMQMAAS-2707.17",
        "name": "Migrate from old cachet plugin to statuspage.17",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.4857638888888887,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003734779978128855
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 14414330,
        "code": "ENTMQMAAS-2730.1",
        "name": "Jenkins CSB on OCP BareMetal - early adoption.1",
        "preceedingTasks": [
          30319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.4857638888888887,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003734779978128855
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 33319722,
        "code": "ENTMQMAAS-2707.20",
        "name": "Migrate from old cachet plugin to statuspage.20",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.20375,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001808595506101008
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 15419113,
        "code": "ENTMQMAAS-2732.2",
        "name": "[CI] remove unused managed kafka perf jobs from enmasse-ci.2",
        "preceedingTasks": [
          33319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.20375,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001808595506101008
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 15419114,
        "code": "ENTMQMAAS-2733.2",
        "name": "[CI] investigate why upstream ocp4 jobs fail.2",
        "preceedingTasks": [
          15419113
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.20375,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001808595506101008
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 15419115,
        "code": "ENTMQMAAS-2734.2",
        "name": "[Test] investigate webconsole test failures in shared test profile.2",
        "preceedingTasks": [
          15419114
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.20375,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001808595506101008
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 15419118,
        "code": "ENTMQMAAS-2735.2",
        "name": "[CI] investigate failure in isolated test profile in jenkins.2",
        "preceedingTasks": [
          15419115
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.20375,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0001808595506101008
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 34319722,
        "code": "ENTMQMAAS-2707.21",
        "name": "Migrate from old cachet plugin to statuspage.21",
        "preceedingTasks": [
          15419118
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.584490740740741,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003883113885161677
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 16419114,
        "code": "ENTMQMAAS-2733.3",
        "name": "[CI] investigate why upstream ocp4 jobs fail.3",
        "preceedingTasks": [
          34319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.584490740740741,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003883113885161677
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 16419115,
        "code": "ENTMQMAAS-2734.3",
        "name": "[Test] investigate webconsole test failures in shared test profile.3",
        "preceedingTasks": [
          16419114
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.584490740740741,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003883113885161677
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 14423544,
        "code": "ENTMQMAAS-2737.1",
        "name": "java-11-openjdk security update RHSA :78473 Important Due: 08/20/2021.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 21.27013888888889,
        "requireAssign": {
          "backend": 2.97,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.003195769687110175
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "buschv"
      },
      {
        "id": 33942255,
        "code": "ENTMQMAAS-2038.21",
        "name": "testAddressLinks sporadic failure.21",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 79.91458333333334,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.012006908102895217
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 20967558,
        "code": "ENTMQMAAS-2384.8",
        "name": "[#4950] : [Access Control] add SASL PLAIN support and initial identity provider support.8",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 79.91458333333334,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.012006908102895217
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 39319722,
        "code": "ENTMQMAAS-2707.26",
        "name": "Migrate from old cachet plugin to statuspage.26",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 12.893749999999999,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0019372443037831667
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 40319722,
        "code": "ENTMQMAAS-2707.27",
        "name": "Migrate from old cachet plugin to statuspage.27",
        "preceedingTasks": [
          34942255,
          39319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.026388888888889,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004547051583932268
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 15216402,
        "code": "ENTMQMAAS-2750.1",
        "name": "Investigate failing LPINTEROP test.1",
        "preceedingTasks": [
          40319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.026388888888889,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004547051583932268
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 34942255,
        "code": "ENTMQMAAS-2038.22",
        "name": "testAddressLinks sporadic failure.22",
        "preceedingTasks": [
          16966543,
          14423544,
          20967558
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 5.46226851851852,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0008206882073279007
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 21967558,
        "code": "ENTMQMAAS-2384.9",
        "name": "[#4950] : [Access Control] add SASL PLAIN support and initial identity provider support.9",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 5.46226851851852,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0008206882073279007
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 15206332,
        "code": "ENTMQMAAS-2748.1",
        "name": "Code Scanning - Complete the PSCC form.1",
        "preceedingTasks": [
          21967558
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 5.46226851851852,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0008206882073279007
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 41319722,
        "code": "ENTMQMAAS-2707.28",
        "name": "Migrate from old cachet plugin to statuspage.28",
        "preceedingTasks": [
          15216402
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 20.928472222222222,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.003144435373679824
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 42319722,
        "code": "ENTMQMAAS-2707.29",
        "name": "Migrate from old cachet plugin to statuspage.29",
        "preceedingTasks": [
          15206332,
          41319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.0944444444444446,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00046493028586512585
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 15225846,
        "code": "ENTMQMAAS-2752.1",
        "name": "libX11 security update RHSA :80344 Important Due: 09/29/2021.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 27.660416666666666,
        "requireAssign": {
          "backend": 2.97,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.004155888289114414
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "buschv"
      },
      {
        "id": 45319722,
        "code": "ENTMQMAAS-2707.32",
        "name": "Migrate from old cachet plugin to statuspage.32",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 33.333333333333336,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.005008225700522002
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 46319722,
        "code": "ENTMQMAAS-2707.33",
        "name": "Migrate from old cachet plugin to statuspage.33",
        "preceedingTasks": [
          15225846,
          16966542,
          45319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.861574074074074,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000730435806683077
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 15316768,
        "code": "ENTMQMAAS-2763.1",
        "name": "Check and verify new and updated images from errata.1",
        "preceedingTasks": [
          46319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.861574074074074,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000730435806683077
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 15316769,
        "code": "ENTMQMAAS-2764.1",
        "name": "Verify CVE images.1",
        "preceedingTasks": [
          15316768
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 4.861574074074074,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.000730435806683077
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 47319722,
        "code": "ENTMQMAAS-2707.34",
        "name": "Migrate from old cachet plugin to statuspage.34",
        "preceedingTasks": [
          15316769
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.2741319444444446,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004919277525320023
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 16316768,
        "code": "ENTMQMAAS-2763.2",
        "name": "Check and verify new and updated images from errata.2",
        "preceedingTasks": [
          47319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.2741319444444446,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004919277525320023
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 16316769,
        "code": "ENTMQMAAS-2764.2",
        "name": "Verify CVE images.2",
        "preceedingTasks": [
          16316768
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.2741319444444446,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004919277525320023
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 15339648,
        "code": "ENTMQMAAS-2765.1",
        "name": "Check images.1",
        "preceedingTasks": [
          16316769
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.2741319444444446,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004919277525320023
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 48319722,
        "code": "ENTMQMAAS-2707.35",
        "name": "Migrate from old cachet plugin to statuspage.35",
        "preceedingTasks": [
          15339648
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 13.146875,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0019752755176965058
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 17316768,
        "code": "ENTMQMAAS-2763.3",
        "name": "Check and verify new and updated images from errata.3",
        "preceedingTasks": [
          48319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 13.146875,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0019752755176965058
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 17316769,
        "code": "ENTMQMAAS-2764.3",
        "name": "Verify CVE images.3",
        "preceedingTasks": [
          17316768
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 13.146875,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0019752755176965058
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 16339648,
        "code": "ENTMQMAAS-2765.2",
        "name": "Check images.2",
        "preceedingTasks": [
          16966545,
          17316769
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 13.146875,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0019752755176965058
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 49319722,
        "code": "ENTMQMAAS-2707.36",
        "name": "Migrate from old cachet plugin to statuspage.36",
        "preceedingTasks": [
          16339648
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.804513888888889,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004213691560741272
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 18316768,
        "code": "ENTMQMAAS-2763.4",
        "name": "Check and verify new and updated images from errata.4",
        "preceedingTasks": [
          49319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.804513888888889,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004213691560741272
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 18316769,
        "code": "ENTMQMAAS-2764.4",
        "name": "Verify CVE images.4",
        "preceedingTasks": [
          18316768
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.804513888888889,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004213691560741272
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 17339648,
        "code": "ENTMQMAAS-2765.3",
        "name": "Check images.3",
        "preceedingTasks": [
          18316769
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.804513888888889,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0004213691560741272
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 50319722,
        "code": "ENTMQMAAS-2707.37",
        "name": "Migrate from old cachet plugin to statuspage.37",
        "preceedingTasks": [
          17339648
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 7.564930555555556,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0011366063889299257
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 19316768,
        "code": "ENTMQMAAS-2763.5",
        "name": "Check and verify new and updated images from errata.5",
        "preceedingTasks": [
          50319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 7.564930555555556,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0011366063889299257
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 19316769,
        "code": "ENTMQMAAS-2764.5",
        "name": "Verify CVE images.5",
        "preceedingTasks": [
          19316768
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 7.564930555555556,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0011366063889299257
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 18339648,
        "code": "ENTMQMAAS-2765.4",
        "name": "Check images.4",
        "preceedingTasks": [
          19316769
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 7.564930555555556,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0011366063889299257
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 52319722,
        "code": "ENTMQMAAS-2707.39",
        "name": "Migrate from old cachet plugin to statuspage.39",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 9.455555555555556,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0014206666903814078
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 21316768,
        "code": "ENTMQMAAS-2763.7",
        "name": "Check and verify new and updated images from errata.7",
        "preceedingTasks": [
          52319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 9.455555555555556,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0014206666903814078
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 21316769,
        "code": "ENTMQMAAS-2764.7",
        "name": "Verify CVE images.7",
        "preceedingTasks": [
          21316768
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 9.455555555555556,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0014206666903814078
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 20339648,
        "code": "ENTMQMAAS-2765.6",
        "name": "Check images.6",
        "preceedingTasks": [
          21316769
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 9.455555555555556,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0014206666903814078
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 56319722,
        "code": "ENTMQMAAS-2707.43",
        "name": "Migrate from old cachet plugin to statuspage.43",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.0769675925925926,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00031205767429120596
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 25316768,
        "code": "ENTMQMAAS-2763.11",
        "name": "Check and verify new and updated images from errata.11",
        "preceedingTasks": [
          56319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.0769675925925926,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00031205767429120596
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 25316769,
        "code": "ENTMQMAAS-2764.11",
        "name": "Verify CVE images.11",
        "preceedingTasks": [
          25316768
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.0769675925925926,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00031205767429120596
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 24339648,
        "code": "ENTMQMAAS-2765.10",
        "name": "Check images.10",
        "preceedingTasks": [
          25316769
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.0769675925925926,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00031205767429120596
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 18574355,
        "code": "ENTMQMAAS-2789.4",
        "name": "[CI] Report portal reporting after CVE not working.4",
        "preceedingTasks": [
          24339648
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.0769675925925926,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00031205767429120596
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 18574360,
        "code": "ENTMQMAAS-2790.4",
        "name": "[CI] Solve Infinite loop in cvp pipeline.4",
        "preceedingTasks": [
          18574355
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.0769675925925926,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00031205767429120596
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 15570451,
        "code": "ENTMQMAAS-2782.1",
        "name": "7.9 openssl and expat CVE - AMQ Online base image update.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 34.39791666666667,
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
            "weight": 0.005168175908832423
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 16570451,
        "code": "ENTMQMAAS-2782.2",
        "name": "7.9 openssl and expat CVE - AMQ Online base image update.2",
        "preceedingTasks": [
          15570451
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.4819444444444447,
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
            "weight": 0.00037290413861803406
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 15631045,
        "code": "ENTMQMAAS-2801.1",
        "name": "java-11-openjdk security update RHSA :93346 Important Due: 05/20/2022 - AMQ Online base image update.1",
        "preceedingTasks": [
          16570451
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.4819444444444447,
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
            "weight": 0.00037290413861803406
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 57319722,
        "code": "ENTMQMAAS-2707.44",
        "name": "Migrate from old cachet plugin to statuspage.44",
        "preceedingTasks": [
          18574360
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.1726851851851854,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00047668570452329557
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 26316768,
        "code": "ENTMQMAAS-2763.12",
        "name": "Check and verify new and updated images from errata.12",
        "preceedingTasks": [
          16966547,
          57319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.1726851851851854,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00047668570452329557
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 26316769,
        "code": "ENTMQMAAS-2764.12",
        "name": "Verify CVE images.12",
        "preceedingTasks": [
          26316768
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.1726851851851854,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00047668570452329557
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 25339648,
        "code": "ENTMQMAAS-2765.11",
        "name": "Check images.11",
        "preceedingTasks": [
          26316769
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.1726851851851854,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00047668570452329557
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 19574355,
        "code": "ENTMQMAAS-2789.5",
        "name": "[CI] Report portal reporting after CVE not working.5",
        "preceedingTasks": [
          25339648
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.1726851851851854,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00047668570452329557
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 19574360,
        "code": "ENTMQMAAS-2790.5",
        "name": "[CI] Solve Infinite loop in cvp pipeline.5",
        "preceedingTasks": [
          19574355
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 3.1726851851851854,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00047668570452329557
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 59319722,
        "code": "ENTMQMAAS-2707.46",
        "name": "Migrate from old cachet plugin to statuspage.46",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.6708333333333334,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00025103731323866533
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 28316768,
        "code": "ENTMQMAAS-2763.14",
        "name": "Check and verify new and updated images from errata.14",
        "preceedingTasks": [
          59319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.6708333333333334,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00025103731323866533
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 28316769,
        "code": "ENTMQMAAS-2764.14",
        "name": "Verify CVE images.14",
        "preceedingTasks": [
          28316768
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.6708333333333334,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00025103731323866533
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 27339648,
        "code": "ENTMQMAAS-2765.13",
        "name": "Check images.13",
        "preceedingTasks": [
          28316769
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.6708333333333334,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00025103731323866533
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 21574355,
        "code": "ENTMQMAAS-2789.7",
        "name": "[CI] Report portal reporting after CVE not working.7",
        "preceedingTasks": [
          27339648
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.6708333333333334,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00025103731323866533
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 21574360,
        "code": "ENTMQMAAS-2790.7",
        "name": "[CI] Solve Infinite loop in cvp pipeline.7",
        "preceedingTasks": [
          21574355
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.6708333333333334,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00025103731323866533
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 16631045,
        "code": "ENTMQMAAS-2801.2",
        "name": "java-11-openjdk security update RHSA :93346 Important Due: 05/20/2022 - AMQ Online base image update.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 20.981944444444444,
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
            "weight": 0.003152469402407745
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rgodfrey@redhat.com"
      },
      {
        "id": 64319722,
        "code": "ENTMQMAAS-2707.51",
        "name": "Migrate from old cachet plugin to statuspage.51",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 6.015277777777778,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0009037760628733664
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 33316768,
        "code": "ENTMQMAAS-2763.19",
        "name": "Check and verify new and updated images from errata.19",
        "preceedingTasks": [
          64319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 6.015277777777778,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0009037760628733664
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 33316769,
        "code": "ENTMQMAAS-2764.19",
        "name": "Verify CVE images.19",
        "preceedingTasks": [
          33316768
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 6.015277777777778,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0009037760628733664
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 32339648,
        "code": "ENTMQMAAS-2765.18",
        "name": "Check images.18",
        "preceedingTasks": [
          33316769
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 6.015277777777778,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0009037760628733664
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 26574355,
        "code": "ENTMQMAAS-2789.12",
        "name": "[CI] Report portal reporting after CVE not working.12",
        "preceedingTasks": [
          32339648
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 6.015277777777778,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0009037760628733664
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 15682901,
        "code": "ENTMQMAAS-2819.1",
        "name": "[QE] Investigate 504 status returned for interop tests..1",
        "preceedingTasks": [
          16966546,
          26574355
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 6.015277777777778,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0009037760628733664
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 65319722,
        "code": "ENTMQMAAS-2707.52",
        "name": "Migrate from old cachet plugin to statuspage.52",
        "preceedingTasks": [
          15682901
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.9920138888888888,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002992936546239034
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 34316768,
        "code": "ENTMQMAAS-2763.20",
        "name": "Check and verify new and updated images from errata.20",
        "preceedingTasks": [
          65319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.9920138888888888,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002992936546239034
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 34316769,
        "code": "ENTMQMAAS-2764.20",
        "name": "Verify CVE images.20",
        "preceedingTasks": [
          34316768
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.9920138888888888,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002992936546239034
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 33339648,
        "code": "ENTMQMAAS-2765.19",
        "name": "Check images.19",
        "preceedingTasks": [
          34316769
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.9920138888888888,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002992936546239034
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 27574355,
        "code": "ENTMQMAAS-2789.13",
        "name": "[CI] Report portal reporting after CVE not working.13",
        "preceedingTasks": [
          33339648
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.9920138888888888,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002992936546239034
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 15748289,
        "code": "ENTMQMAAS-2827.1",
        "name": "[QE] Verify UMB communication on CI.1",
        "preceedingTasks": [
          27574355
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.9920138888888888,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002992936546239034
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 66319722,
        "code": "ENTMQMAAS-2707.53",
        "name": "Migrate from old cachet plugin to statuspage.53",
        "preceedingTasks": [
          15748289
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.159325396825397,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003244316684451247
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 35316768,
        "code": "ENTMQMAAS-2763.21",
        "name": "Check and verify new and updated images from errata.21",
        "preceedingTasks": [
          66319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.159325396825397,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003244316684451247
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 35316769,
        "code": "ENTMQMAAS-2764.21",
        "name": "Verify CVE images.21",
        "preceedingTasks": [
          35316768
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.159325396825397,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003244316684451247
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 34339648,
        "code": "ENTMQMAAS-2765.20",
        "name": "Check images.20",
        "preceedingTasks": [
          35316769
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.159325396825397,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003244316684451247
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 28574355,
        "code": "ENTMQMAAS-2789.14",
        "name": "[CI] Report portal reporting after CVE not working.14",
        "preceedingTasks": [
          34339648
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.159325396825397,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003244316684451247
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 16748289,
        "code": "ENTMQMAAS-2827.2",
        "name": "[QE] Verify UMB communication on CI.2",
        "preceedingTasks": [
          28574355
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.159325396825397,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003244316684451247
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 15767256,
        "code": "ENTMQMAAS-2829.1",
        "name": "[QE] Check on respin images.1",
        "preceedingTasks": [
          16748289
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.159325396825397,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003244316684451247
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 71319722,
        "code": "ENTMQMAAS-2707.58",
        "name": "Migrate from old cachet plugin to statuspage.58",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.2556423611111112,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00018865621030742384
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 40316768,
        "code": "ENTMQMAAS-2763.26",
        "name": "Check and verify new and updated images from errata.26",
        "preceedingTasks": [
          71319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.2556423611111112,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00018865621030742384
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 40316769,
        "code": "ENTMQMAAS-2764.26",
        "name": "Verify CVE images.26",
        "preceedingTasks": [
          40316768
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.2556423611111112,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00018865621030742384
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 39339648,
        "code": "ENTMQMAAS-2765.25",
        "name": "Check images.25",
        "preceedingTasks": [
          40316769
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.2556423611111112,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00018865621030742384
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 33574355,
        "code": "ENTMQMAAS-2789.19",
        "name": "[CI] Report portal reporting after CVE not working.19",
        "preceedingTasks": [
          39339648
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.2556423611111112,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00018865621030742384
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 20767256,
        "code": "ENTMQMAAS-2829.6",
        "name": "[QE] Check on respin images.6",
        "preceedingTasks": [
          33574355
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.2556423611111112,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00018865621030742384
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 19791491,
        "code": "ENTMQMAAS-2834.5",
        "name": "[CI] Modify jobs to use openstack tenants and spaces to create ocp machine.5",
        "preceedingTasks": [
          20767256
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.2556423611111112,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00018865621030742384
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 15795510,
        "code": "ENTMQMAAS-2844.1",
        "name": "[QE] Fix UMB sender and receiver on CI.1",
        "preceedingTasks": [
          19791491
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.2556423611111112,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00018865621030742384
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 75319722,
        "code": "ENTMQMAAS-2707.62",
        "name": "Migrate from old cachet plugin to statuspage.62",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.8524305555555556,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002783217095029675
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 44316768,
        "code": "ENTMQMAAS-2763.30",
        "name": "Check and verify new and updated images from errata.30",
        "preceedingTasks": [
          75319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.8524305555555556,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002783217095029675
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 44316769,
        "code": "ENTMQMAAS-2764.30",
        "name": "Verify CVE images.30",
        "preceedingTasks": [
          44316768
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.8524305555555556,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002783217095029675
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 43339648,
        "code": "ENTMQMAAS-2765.29",
        "name": "Check images.29",
        "preceedingTasks": [
          44316769
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.8524305555555556,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002783217095029675
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 37574355,
        "code": "ENTMQMAAS-2789.23",
        "name": "[CI] Report portal reporting after CVE not working.23",
        "preceedingTasks": [
          16966548,
          43339648
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.8524305555555556,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002783217095029675
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 24767256,
        "code": "ENTMQMAAS-2829.10",
        "name": "[QE] Check on respin images.10",
        "preceedingTasks": [
          37574355
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.8524305555555556,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002783217095029675
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 18814222,
        "code": "ENTMQMAAS-2849.4",
        "name": "[QE] Check CVP.4",
        "preceedingTasks": [
          24767256
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.8524305555555556,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002783217095029675
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 16817859,
        "code": "ENTMQMAAS-2851.2",
        "name": "[CI] Fix ssh access to ocp4 config repository in jenkins.2",
        "preceedingTasks": [
          18814222
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.8524305555555556,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002783217095029675
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 14411663,
        "code": "ENTMQMAAS-2728.1",
        "name": "Document new infraconfig fields.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "database",
          "devops"
        ],
        "estimateTime": 428.43333333333334,
        "requireAssign": {
          "backend": 2.53,
          "frontend": 2.19,
          "database": 2.82,
          "devops": 2.8,
          "ai_ml": 2.74,
          "testing": 1.57,
          "issue_tracking": 2.62
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.06437072492880928
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "sjay@redhat.com"
      },
      {
        "id": 76319722,
        "code": "ENTMQMAAS-2707.63",
        "name": "Migrate from old cachet plugin to statuspage.63",
        "preceedingTasks": [
          16817859
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 9.832916666666666,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0014773639788327338
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 45316768,
        "code": "ENTMQMAAS-2763.31",
        "name": "Check and verify new and updated images from errata.31",
        "preceedingTasks": [
          14411663,
          76319722
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 9.832916666666666,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0014773639788327338
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 45316769,
        "code": "ENTMQMAAS-2764.31",
        "name": "Verify CVE images.31",
        "preceedingTasks": [
          45316768
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 9.832916666666666,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0014773639788327338
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 44339648,
        "code": "ENTMQMAAS-2765.30",
        "name": "Check images.30",
        "preceedingTasks": [
          45316769
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 9.832916666666666,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0014773639788327338
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 25767256,
        "code": "ENTMQMAAS-2829.11",
        "name": "[QE] Check on respin images.11",
        "preceedingTasks": [
          44339648
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 9.832916666666666,
        "requireAssign": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0014773639788327338
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-jkalinic"
      },
      {
        "id": 17054824,
        "code": "ENTMQMAAS-2882.2",
        "name": "Update the lifeCycle page - EOL in June.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "issue_tracking"
        ],
        "estimateTime": 10.999305555555557,
        "requireAssign": {
          "backend": 3.76,
          "frontend": 3.66,
          "database": 3.11,
          "devops": 3.29,
          "ai_ml": 2.75,
          "testing": 1.93,
          "issue_tracking": 3.76
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0016526101431368332
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-dgeoffroy"
      },
      {
        "id": 17054828,
        "code": "ENTMQMAAS-2884.2",
        "name": "Salesforce to be updated.2",
        "preceedingTasks": [
          17054824
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "issue_tracking"
        ],
        "estimateTime": 10.999305555555557,
        "requireAssign": {
          "backend": 3.76,
          "frontend": 3.66,
          "database": 3.11,
          "devops": 3.29,
          "ai_ml": 2.75,
          "testing": 1.93,
          "issue_tracking": 3.76
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0016526101431368332
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-dgeoffroy"
      },
      {
        "id": 15966828,
        "code": "ENTMQMAAS-2873.1",
        "name": "Setup EOL plan of record - AMQ Online.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "database",
          "backend"
        ],
        "estimateTime": 85.59791666666666,
        "requireAssign": {
          "backend": 4.31,
          "frontend": 2.24,
          "database": 4.41,
          "devops": 3.32,
          "ai_ml": 3.45,
          "testing": 2.06,
          "issue_tracking": 2.6
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.012860810584834218
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "mokumar@redhat.com"
      },
      {
        "id": 16270397,
        "code": "ENTMQMAAS-2892.1",
        "name": "Rebuild the operator image to remove OCP 4.6 & 4.7.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 9.543750000000001,
        "requireAssign": {
          "backend": 2.97,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0014339176208807058
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "buschv"
      },
      {
        "id": 18054828,
        "code": "ENTMQMAAS-2884.3",
        "name": "Salesforce to be updated.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "issue_tracking"
        ],
        "estimateTime": 97.91597222222221,
        "requireAssign": {
          "backend": 3.76,
          "frontend": 3.66,
          "database": 3.11,
          "devops": 3.29,
          "ai_ml": 2.75,
          "testing": 1.93,
          "issue_tracking": 3.76
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.01471155865724795
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "rhn-support-dgeoffroy"
      },
      {
        "id": 19960648,
        "code": "ENTMQMAAS-2318.7",
        "name": "Add mock stats for IOT entities in mock server.7",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 64.70746527777779,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.009722087718594053
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 19960660,
        "code": "ENTMQMAAS-2322.7",
        "name": "Add UUID for credentials entries in mock servers.7",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 64.70746527777779,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.009722087718594053
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 19960668,
        "code": "ENTMQMAAS-2325.7",
        "name": "Add user token in whoami console querry.7",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 64.70746527777779,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.009722087718594053
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 18960819,
        "code": "ENTMQMAAS-2329.6",
        "name": "Hono - Add Management API operation to delete all devices matching a filter.6",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 64.70746527777779,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.009722087718594053
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 16966539,
        "code": "ENTMQMAAS-2365.4",
        "name": "iot console metrics.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 64.70746527777779,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.009722087718594053
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 16966543,
        "code": "ENTMQMAAS-2368.4",
        "name": "console backend : implement delete iot tenant.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 64.70746527777779,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.009722087718594053
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 16966542,
        "code": "ENTMQMAAS-2367.4",
        "name": "console backend : implement create iot tenant.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 64.70746527777779,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.009722087718594053
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 16966545,
        "code": "ENTMQMAAS-2370.4",
        "name": "console backend : implement toggle iot tenant state.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 64.70746527777779,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.009722087718594053
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 16966544,
        "code": "ENTMQMAAS-2369.4",
        "name": "console backend : design iot tenant and messaging projects lists.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 64.70746527777779,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.009722087718594053
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 16966547,
        "code": "ENTMQMAAS-2372.4",
        "name": "console backend : implement delete iot device.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 64.70746527777779,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.009722087718594053
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 16966546,
        "code": "ENTMQMAAS-2371.4",
        "name": "console backend : implement create iot device.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 64.70746527777779,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.009722087718594053
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 16966548,
        "code": "ENTMQMAAS-2373.4",
        "name": "console backend : implement toggle iot device state.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 64.70746527777779,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.009722087718594053
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 16966550,
        "code": "ENTMQMAAS-2374.4",
        "name": "console backend : implement retrieve iot device list.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 64.70746527777779,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.009722087718594053
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 16966554,
        "code": "ENTMQMAAS-2375.4",
        "name": "iot device registry : implement filters and GET method on /devices.4",
        "preceedingTasks": [
          25767256,
          16966550
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 64.70746527777779,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.009722087718594053
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 16966555,
        "code": "ENTMQMAAS-2376.4",
        "name": "iot device registry : implement status field for iot devices.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 64.70746527777779,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.009722087718594053
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 16966557,
        "code": "ENTMQMAAS-2378.4",
        "name": "console backend : implement set credentials for iot device.4",
        "preceedingTasks": [
          17054828,
          15966828,
          16966555
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 64.70746527777779,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.009722087718594053
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 16966556,
        "code": "ENTMQMAAS-2377.4",
        "name": "console backend : implement get credentials for iot device.4",
        "preceedingTasks": [
          16966557
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 64.70746527777779,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.009722087718594053
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 15966682,
        "code": "ENTMQMAAS-2379.3",
        "name": "Add iot tenant messaging credentials in graphQL.3",
        "preceedingTasks": [
          16270397,
          18054828,
          16966556
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 64.70746527777779,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.009722087718594053
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 14969488,
        "code": "ENTMQMAAS-2417.2",
        "name": "Console-IoT-UI - Sorting IoT devices by status date is not working.2",
        "preceedingTasks": [
          15966682
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 64.70746527777779,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.009722087718594053
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 13975991,
        "code": "ENTMQMAAS-2451.1",
        "name": "Add IN filtering in console backend.1",
        "preceedingTasks": [
          14969488
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "backend",
          "database"
        ],
        "estimateTime": 64.70746527777779,
        "requireAssign": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.009722087718594053
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "jbtrystram"
      },
      {
        "id": 35942255,
        "code": "ENTMQMAAS-2038.23",
        "name": "testAddressLinks sporadic failure.23",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 478.56111111111113,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.07190226167811097
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      },
      {
        "id": 22967558,
        "code": "ENTMQMAAS-2384.10",
        "name": "[#4950] : [Access Control] add SASL PLAIN support and initial identity provider support.10",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 478.56111111111113,
        "requireAssign": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.07190226167811097
          }
        ],
        "projectKey": "ENTMQMAAS-2xxxx",
        "assignee": "keithbwall"
      }
    ],
    "employees": [
      {
        "id": 5185,
        "name": "jbtrystram",
        "employeeNumber": "MS2024185",
        "position": "Dev",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.28,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.46
        }
      },
      {
        "id": 7058,
        "name": "suyash-naithani",
        "employeeNumber": "MS2024058",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.71,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.41
        }
      },
      {
        "id": 3519,
        "name": "HelloJune",
        "employeeNumber": "MS2024519",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.28,
          "frontend": 3.49,
          "database": 2.56,
          "devops": 3.54,
          "ai_ml": 2.44,
          "testing": 1.92,
          "issue_tracking": 2.33
        }
      },
      {
        "id": 8430,
        "name": "rhn-support-hmaclean",
        "employeeNumber": "MS2024430",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        }
      },
      {
        "id": 187,
        "name": "jreimann-2",
        "employeeNumber": "MS2024187",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.94,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.64
        }
      },
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
        "id": 9389,
        "name": "yanzredhat",
        "employeeNumber": "MS2024389",
        "position": "AI Engineer",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.74,
          "frontend": 3.43,
          "database": 3.46,
          "devops": 3.93,
          "ai_ml": 3.98,
          "testing": 2.21,
          "issue_tracking": 3.14
        }
      },
      {
        "id": 9697,
        "name": "buschv",
        "employeeNumber": "MS2024697",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.97,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.85
        }
      },
      {
        "id": 4587,
        "name": "zschwarz",
        "employeeNumber": "MS2024587",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.38,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.22
        }
      },
      {
        "id": 2913,
        "name": "keithbwall",
        "employeeNumber": "MS2024913",
        "position": "DevOps",
        "tags": [],
        "level": 2,
        "costPerHour": 5,
        "qualities": {
          "backend": 2.91,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.85
        }
      },
      {
        "id": 6626,
        "name": "rhn-support-dgeoffroy",
        "employeeNumber": "MS2024626",
        "position": "Dev",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.76,
          "frontend": 3.66,
          "database": 3.11,
          "devops": 3.29,
          "ai_ml": 2.75,
          "testing": 1.93,
          "issue_tracking": 3.76
        }
      },
      {
        "id": 5158,
        "name": "rhn-support-jkalinic",
        "employeeNumber": "MS2024158",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.18,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.35
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
        "id": 4812,
        "name": "rshelly",
        "employeeNumber": "MS2024812",
        "position": "QA",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.99,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.4
        }
      },
      {
        "id": 3565,
        "name": "anujha@redhat.com",
        "employeeNumber": "MS2024565",
        "position": "Dev",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.67,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.44
        }
      },
      {
        "id": 5172,
        "name": "obabec",
        "employeeNumber": "MS2024172",
        "position": "Tester",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.68,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.82
        }
      },
      {
        "id": 8213,
        "name": "sjay@redhat.com",
        "employeeNumber": "MS2024213",
        "position": "Dev",
        "tags": [],
        "level": 2,
        "costPerHour": 5,
        "qualities": {
          "backend": 2.53,
          "frontend": 2.19,
          "database": 2.82,
          "devops": 2.8,
          "ai_ml": 2.74,
          "testing": 1.57,
          "issue_tracking": 2.62
        }
      },
      {
        "id": 5332,
        "name": "sanjekum",
        "employeeNumber": "MS2024332",
        "position": "Dev",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.59,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.45
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
        "id": 3645,
        "name": "dejanbosanac",
        "employeeNumber": "MS2024645",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.91,
          "frontend": 2.4,
          "database": 2.56,
          "devops": 3.12,
          "ai_ml": 2.66,
          "testing": 1.9,
          "issue_tracking": 2.61
        }
      },
      {
        "id": 1117,
        "name": "mokumar@redhat.com",
        "employeeNumber": "MS2024117",
        "position": "Dev",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 4.31,
          "frontend": 2.24,
          "database": 4.41,
          "devops": 3.32,
          "ai_ml": 3.45,
          "testing": 2.06,
          "issue_tracking": 2.6
        }
      },
      {
        "id": 149,
        "name": "apratap468",
        "employeeNumber": "MS2024149",
        "position": "Dev",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.91,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.34
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
        "id": 15737485,
        "code": "ENTMQMAAS-407.3",
        "name": "[#973] : Configure per-address settings for each address created on broker.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 4.95462962962963,
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
            "weight": 0.0011653114092560054
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 17738010,
        "code": "ENTMQMAAS-413.5",
        "name": "[#1009] : Make resync interval in controllers configurable.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.1622685185185184,
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
            "weight": 0.0005085579272033426
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 17738011,
        "code": "ENTMQMAAS-414.5",
        "name": "[#1011] : Separata status check from controller resync.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.1622685185185184,
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
            "weight": 0.0005085579272033426
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 16739606,
        "code": "ENTMQMAAS-435.4",
        "name": "[#1017] : Events sent to address of type queue not delivered after a while.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.1622685185185184,
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
            "weight": 0.0005085579272033426
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 14740288,
        "code": "ENTMQMAAS-450.2",
        "name": "[#1079] : standard-controller: is trying to connect to router which was already killed.2",
        "preceedingTasks": [
          16739606
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.1622685185185184,
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
            "weight": 0.0005085579272033426
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13740575,
        "code": "ENTMQMAAS-452.1",
        "name": "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.1622685185185184,
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
            "weight": 0.0005085579272033426
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 21738369,
        "code": "ENTMQMAAS-417.9",
        "name": "[#1021] : system-tests: modify QueueTest#testScaledown.9",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 3.6645833333333333,
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
            "weight": 0.0008618970715722211
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 20738314,
        "code": "ENTMQMAAS-416.8",
        "name": "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.8",
        "preceedingTasks": [
          14740288
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.1269444444444445,
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
            "weight": 0.00026505335754167147
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13742276,
        "code": "ENTMQMAAS-455.1",
        "name": "[#1115] : New system-tests for websocket.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.1269444444444445,
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
            "weight": 0.00026505335754167147
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 23738369,
        "code": "ENTMQMAAS-417.11",
        "name": "[#1021] : system-tests: modify QueueTest#testScaledown.11",
        "preceedingTasks": [
          13742276
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.2943452380952378,
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
            "weight": 0.0003044254336284893
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 14742584,
        "code": "ENTMQMAAS-466.2",
        "name": "[#1123] :  system-tests: new test for auto scaleup after manual scaledown.2",
        "preceedingTasks": [
          23738369
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.2943452380952378,
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
            "weight": 0.0003044254336284893
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13742677,
        "code": "ENTMQMAAS-469.1",
        "name": "[#1124] : system-tests: review of list of disabled tests from March and create new one for April.1",
        "preceedingTasks": [
          14742584
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.2943452380952378,
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
            "weight": 0.0003044254336284893
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13742678,
        "code": "ENTMQMAAS-470.1",
        "name": "system-tests: unclosed archives exception in Jenkins when core-dump is stored.1",
        "preceedingTasks": [
          13742677
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.2943452380952378,
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
            "weight": 0.0003044254336284893
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13742679,
        "code": "ENTMQMAAS-471.1",
        "name": "[#1128] : system-tests: Remove logs collecting for pods/statefull-sets.1",
        "preceedingTasks": [
          18738010,
          13742678
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.2943452380952378,
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
            "weight": 0.0003044254336284893
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 13742683,
        "code": "ENTMQMAAS-475.1",
        "name": "[#1125] : system-tests: Rewrite tests to use Dependency injection.1",
        "preceedingTasks": [
          21738314,
          13742679
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.2943452380952378,
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
            "weight": 0.0003044254336284893
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 21738314,
        "code": "ENTMQMAAS-416.9",
        "name": "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.9",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.8850198412698413,
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
            "weight": 0.00044335001643097465
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 14742276,
        "code": "ENTMQMAAS-455.2",
        "name": "[#1115] : New system-tests for websocket.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.8850198412698413,
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
            "weight": 0.00044335001643097465
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13742682,
        "code": "ENTMQMAAS-474.1",
        "name": "[#1126] : system-tests: use multi-asserts instead of single asserts.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.8850198412698413,
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
            "weight": 0.00044335001643097465
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13742680,
        "code": "ENTMQMAAS-472.1",
        "name": "[#1127] : system-tests: Use ENUM instead of string tags.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.8850198412698413,
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
            "weight": 0.00044335001643097465
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 15742677,
        "code": "ENTMQMAAS-469.3",
        "name": "[#1124] : system-tests: review of list of disabled tests from March and create new one for April.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.5635416666666666,
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
            "weight": 0.00036773948391981347
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 15742678,
        "code": "ENTMQMAAS-470.3",
        "name": "system-tests: unclosed archives exception in Jenkins when core-dump is stored.3",
        "preceedingTasks": [
          15742677
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.5635416666666666,
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
            "weight": 0.00036773948391981347
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 15742683,
        "code": "ENTMQMAAS-475.3",
        "name": "[#1125] : system-tests: Rewrite tests to use Dependency injection.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.5635416666666666,
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
            "weight": 0.00036773948391981347
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 24738314,
        "code": "ENTMQMAAS-416.12",
        "name": "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.12",
        "preceedingTasks": [
          15742678
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.0440972222222222,
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
            "weight": 0.0002455679831549809
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 13746088,
        "code": "ENTMQMAAS-483.1",
        "name": "[#1159] : System-tests: Improve waiting for webItems.1",
        "preceedingTasks": [
          14740575,
          24738314
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 1.0440972222222222,
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
            "weight": 0.0002455679831549809
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 16742677,
        "code": "ENTMQMAAS-469.4",
        "name": "[#1124] : system-tests: review of list of disabled tests from March and create new one for April.4",
        "preceedingTasks": [
          15742683,
          13746088
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.2659722222222223,
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
            "weight": 0.0002977522003934355
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 16742678,
        "code": "ENTMQMAAS-470.4",
        "name": "system-tests: unclosed archives exception in Jenkins when core-dump is stored.4",
        "preceedingTasks": [
          13742571,
          16742677
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 1.2659722222222223,
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
            "weight": 0.0002977522003934355
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 25738314,
        "code": "ENTMQMAAS-416.13",
        "name": "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.13",
        "preceedingTasks": [
          16742678,
          13742577
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "estimateTime": 2.628935185185185,
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
            "weight": 0.0006183162808316414
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "dkornel@redhat.com"
      },
      {
        "id": 17742678,
        "code": "ENTMQMAAS-470.5",
        "name": "system-tests: unclosed archives exception in Jenkins when core-dump is stored.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 2.5565972222222224,
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
            "weight": 0.0006013026471466992
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "tkratky_jira"
      },
      {
        "id": 18738010,
        "code": "ENTMQMAAS-413.6",
        "name": "[#1009] : Make resync interval in controllers configurable.6",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.223148148148148,
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
            "weight": 0.0007580730733732301
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 18738011,
        "code": "ENTMQMAAS-414.6",
        "name": "[#1011] : Separata status check from controller resync.6",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.223148148148148,
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
            "weight": 0.0007580730733732301
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 17739606,
        "code": "ENTMQMAAS-435.5",
        "name": "[#1017] : Events sent to address of type queue not delivered after a while.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.223148148148148,
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
            "weight": 0.0007580730733732301
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 15740288,
        "code": "ENTMQMAAS-450.3",
        "name": "[#1079] : standard-controller: is trying to connect to router which was already killed.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.223148148148148,
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
            "weight": 0.0007580730733732301
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 14740575,
        "code": "ENTMQMAAS-452.2",
        "name": "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.223148148148148,
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
            "weight": 0.0007580730733732301
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13742576,
        "code": "ENTMQMAAS-462.1",
        "name": "[#1117] : Response code/payload of AddressController REST API POST/DELETE operations.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.223148148148148,
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
            "weight": 0.0007580730733732301
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13742577,
        "code": "ENTMQMAAS-463.1",
        "name": "[#1091] : Endpoints declaratively specified should be checked in status.1",
        "preceedingTasks": [
          13742576
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.223148148148148,
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
            "weight": 0.0007580730733732301
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13742583,
        "code": "ENTMQMAAS-465.1",
        "name": "Install EnMasse on Bosch OpenShift Dedicated cluster.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.223148148148148,
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
            "weight": 0.0007580730733732301
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 17737485,
        "code": "ENTMQMAAS-407.5",
        "name": "[#973] : Configure per-address settings for each address created on broker.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 7.419305555555556,
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
            "weight": 0.0017449944918065748
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 13742571,
        "code": "ENTMQMAAS-457.1",
        "name": "[#1096] : agent: use \\\"direction\\\" attribute instead of \\\"dir\\\" for autoLinks.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 7.419305555555556,
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
            "weight": 0.0017449944918065748
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 13742573,
        "code": "ENTMQMAAS-459.1",
        "name": "[#1084] : agent container: high load and memory issue with many addresses.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 7.419305555555556,
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
            "weight": 0.0017449944918065748
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 13742572,
        "code": "ENTMQMAAS-458.1",
        "name": "[#1097] : When creating many addresses at the same time, a few have missing autolinks.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 7.419305555555556,
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
            "weight": 0.0017449944918065748
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 19738010,
        "code": "ENTMQMAAS-413.7",
        "name": "[#1009] : Make resync interval in controllers configurable.7",
        "preceedingTasks": [
          25738314,
          17742678,
          13742583,
          13742573
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.0098090277777778,
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
            "weight": 0.00023750352078831836
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 19738011,
        "code": "ENTMQMAAS-414.7",
        "name": "[#1011] : Separata status check from controller resync.7",
        "preceedingTasks": [
          19738010
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.0098090277777778,
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
            "weight": 0.00023750352078831836
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 18739606,
        "code": "ENTMQMAAS-435.6",
        "name": "[#1017] : Events sent to address of type queue not delivered after a while.6",
        "preceedingTasks": [
          19738011
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.0098090277777778,
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
            "weight": 0.00023750352078831836
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 16740288,
        "code": "ENTMQMAAS-450.4",
        "name": "[#1079] : standard-controller: is trying to connect to router which was already killed.4",
        "preceedingTasks": [
          18739606
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.0098090277777778,
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
            "weight": 0.00023750352078831836
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 15740575,
        "code": "ENTMQMAAS-452.3",
        "name": "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.3",
        "preceedingTasks": [
          16740288
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.0098090277777778,
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
            "weight": 0.00023750352078831836
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 14742576,
        "code": "ENTMQMAAS-462.2",
        "name": "[#1117] : Response code/payload of AddressController REST API POST/DELETE operations.2",
        "preceedingTasks": [
          15740575
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.0098090277777778,
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
            "weight": 0.00023750352078831836
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 14742577,
        "code": "ENTMQMAAS-463.2",
        "name": "[#1091] : Endpoints declaratively specified should be checked in status.2",
        "preceedingTasks": [
          14742576
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.0098090277777778,
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
            "weight": 0.00023750352078831836
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 20738010,
        "code": "ENTMQMAAS-413.8",
        "name": "[#1009] : Make resync interval in controllers configurable.8",
        "preceedingTasks": [
          13742572,
          14742577
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.9518849206349203,
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
            "weight": 0.0004590764472016959
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 20738011,
        "code": "ENTMQMAAS-414.8",
        "name": "[#1011] : Separata status check from controller resync.8",
        "preceedingTasks": [
          20738010
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.9518849206349203,
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
            "weight": 0.0004590764472016959
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 19739606,
        "code": "ENTMQMAAS-435.7",
        "name": "[#1017] : Events sent to address of type queue not delivered after a while.7",
        "preceedingTasks": [
          20738011
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.9518849206349203,
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
            "weight": 0.0004590764472016959
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 17740288,
        "code": "ENTMQMAAS-450.5",
        "name": "[#1079] : standard-controller: is trying to connect to router which was already killed.5",
        "preceedingTasks": [
          19739606
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.9518849206349203,
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
            "weight": 0.0004590764472016959
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 16740575,
        "code": "ENTMQMAAS-452.4",
        "name": "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.4",
        "preceedingTasks": [
          17740288
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.9518849206349203,
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
            "weight": 0.0004590764472016959
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 15742576,
        "code": "ENTMQMAAS-462.3",
        "name": "[#1117] : Response code/payload of AddressController REST API POST/DELETE operations.3",
        "preceedingTasks": [
          16740575
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.9518849206349203,
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
            "weight": 0.0004590764472016959
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 15742577,
        "code": "ENTMQMAAS-463.3",
        "name": "[#1091] : Endpoints declaratively specified should be checked in status.3",
        "preceedingTasks": [
          15742576
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.9518849206349203,
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
            "weight": 0.0004590764472016959
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 18737485,
        "code": "ENTMQMAAS-407.6",
        "name": "[#973] : Configure per-address settings for each address created on broker.6",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 6.222685185185185,
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
            "weight": 0.001463553602299567
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 14742572,
        "code": "ENTMQMAAS-458.2",
        "name": "[#1097] : When creating many addresses at the same time, a few have missing autolinks.2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 6.222685185185185,
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
            "weight": 0.001463553602299567
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 20739606,
        "code": "ENTMQMAAS-435.8",
        "name": "[#1017] : Events sent to address of type queue not delivered after a while.8",
        "preceedingTasks": [
          18737485,
          15742577
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1831944444444444,
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
            "weight": 0.0002782831590950825
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 18740288,
        "code": "ENTMQMAAS-450.6",
        "name": "[#1079] : standard-controller: is trying to connect to router which was already killed.6",
        "preceedingTasks": [
          20739606
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1831944444444444,
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
            "weight": 0.0002782831590950825
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 17740575,
        "code": "ENTMQMAAS-452.5",
        "name": "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.5",
        "preceedingTasks": [
          18740288
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1831944444444444,
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
            "weight": 0.0002782831590950825
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 16742576,
        "code": "ENTMQMAAS-462.4",
        "name": "[#1117] : Response code/payload of AddressController REST API POST/DELETE operations.4",
        "preceedingTasks": [
          17740575
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1831944444444444,
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
            "weight": 0.0002782831590950825
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 16742577,
        "code": "ENTMQMAAS-463.4",
        "name": "[#1091] : Endpoints declaratively specified should be checked in status.4",
        "preceedingTasks": [
          16742576
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1831944444444444,
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
            "weight": 0.0002782831590950825
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 21739606,
        "code": "ENTMQMAAS-435.9",
        "name": "[#1017] : Events sent to address of type queue not delivered after a while.9",
        "preceedingTasks": [
          14742572,
          16742577
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.0593749999999997,
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
            "weight": 0.0007195542067105211
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 19740288,
        "code": "ENTMQMAAS-450.7",
        "name": "[#1079] : standard-controller: is trying to connect to router which was already killed.7",
        "preceedingTasks": [
          21739606
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.0593749999999997,
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
            "weight": 0.0007195542067105211
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 18740575,
        "code": "ENTMQMAAS-452.6",
        "name": "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.6",
        "preceedingTasks": [
          19740288
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.0593749999999997,
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
            "weight": 0.0007195542067105211
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 17742577,
        "code": "ENTMQMAAS-463.5",
        "name": "[#1091] : Endpoints declaratively specified should be checked in status.5",
        "preceedingTasks": [
          18740575
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.0593749999999997,
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
            "weight": 0.0007195542067105211
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 22739606,
        "code": "ENTMQMAAS-435.10",
        "name": "[#1017] : Events sent to address of type queue not delivered after a while.10",
        "preceedingTasks": [
          15737492,
          17742577
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.658333333333333,
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
            "weight": 0.0006252306215612019
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 20740288,
        "code": "ENTMQMAAS-450.8",
        "name": "[#1079] : standard-controller: is trying to connect to router which was already killed.8",
        "preceedingTasks": [
          22739606
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.658333333333333,
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
            "weight": 0.0006252306215612019
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 19740575,
        "code": "ENTMQMAAS-452.7",
        "name": "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.7",
        "preceedingTasks": [
          20740288
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.658333333333333,
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
            "weight": 0.0006252306215612019
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 19737485,
        "code": "ENTMQMAAS-407.7",
        "name": "[#973] : Configure per-address settings for each address created on broker.7",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 10.576736111111112,
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
            "weight": 0.002487611019249709
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 21740288,
        "code": "ENTMQMAAS-450.9",
        "name": "[#1079] : standard-controller: is trying to connect to router which was already killed.9",
        "preceedingTasks": [
          19740575
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 34.409375000000004,
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
            "weight": 0.008092963605811592
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 20740575,
        "code": "ENTMQMAAS-452.8",
        "name": "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.8",
        "preceedingTasks": [
          21740288
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 34.409375000000004,
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
            "weight": 0.008092963605811592
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13738426,
        "code": "ENTMQMAAS-419.1",
        "name": "Remove 'docker' for the templates and images.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 223.73611111111111,
        "requireAssign": {
          "backend": 2.97,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.85
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.052621944005900735
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "buschv"
      },
      {
        "id": 15737492,
        "code": "ENTMQMAAS-410.3",
        "name": "Docs: how to manage user permissions.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 27.226302083333334,
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
            "weight": 0.006403530197257258
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 13740087,
        "code": "ENTMQMAAS-439.1",
        "name": "Reference table for Developer role assumptions.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 27.226302083333334,
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
            "weight": 0.006403530197257258
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 14740094,
        "code": "ENTMQMAAS-440.2",
        "name": "Reference table for Developer role assumptions.2",
        "preceedingTasks": [
          19737485,
          13740087
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 27.226302083333334,
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
            "weight": 0.006403530197257258
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 15740096,
        "code": "ENTMQMAAS-441.3",
        "name": "Reference table for Developer role assumptions.3",
        "preceedingTasks": [
          14740094
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 27.226302083333334,
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
            "weight": 0.006403530197257258
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 16740098,
        "code": "ENTMQMAAS-443.4",
        "name": "Reference table for Developer role assumptions.4",
        "preceedingTasks": [
          20740575,
          15740096
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 27.226302083333334,
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
            "weight": 0.006403530197257258
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 13740105,
        "code": "ENTMQMAAS-447.1",
        "name": "Self-provision an address/destination.1",
        "preceedingTasks": [
          16740098
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 27.226302083333334,
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
            "weight": 0.006403530197257258
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 17740087,
        "code": "ENTMQMAAS-439.5",
        "name": "Reference table for Developer role assumptions.5",
        "preceedingTasks": [
          13738426,
          13740105
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.463988095238095,
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
            "weight": 0.0005795213071994167
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 18740094,
        "code": "ENTMQMAAS-440.6",
        "name": "Reference table for Developer role assumptions.6",
        "preceedingTasks": [
          17740087
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.463988095238095,
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
            "weight": 0.0005795213071994167
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 19740096,
        "code": "ENTMQMAAS-441.7",
        "name": "Reference table for Developer role assumptions.7",
        "preceedingTasks": [
          18740094
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.463988095238095,
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
            "weight": 0.0005795213071994167
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 20740098,
        "code": "ENTMQMAAS-443.8",
        "name": "Reference table for Developer role assumptions.8",
        "preceedingTasks": [
          19740096
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.463988095238095,
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
            "weight": 0.0005795213071994167
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 14740105,
        "code": "ENTMQMAAS-447.2",
        "name": "Self-provision an address/destination.2",
        "preceedingTasks": [
          20740098
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 2.463988095238095,
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
            "weight": 0.0005795213071994167
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 21740087,
        "code": "ENTMQMAAS-439.9",
        "name": "Reference table for Developer role assumptions.9",
        "preceedingTasks": [
          14740105
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 36.789351851851855,
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
            "weight": 0.008652725764953136
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 22740094,
        "code": "ENTMQMAAS-440.10",
        "name": "Reference table for Developer role assumptions.10",
        "preceedingTasks": [
          21740087
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 36.789351851851855,
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
            "weight": 0.008652725764953136
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 23740096,
        "code": "ENTMQMAAS-441.11",
        "name": "Reference table for Developer role assumptions.11",
        "preceedingTasks": [
          22740094
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 36.789351851851855,
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
            "weight": 0.008652725764953136
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 24740098,
        "code": "ENTMQMAAS-443.12",
        "name": "Reference table for Developer role assumptions.12",
        "preceedingTasks": [
          23740096
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 36.789351851851855,
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
            "weight": 0.008652725764953136
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 15740105,
        "code": "ENTMQMAAS-447.3",
        "name": "Self-provision an address/destination.3",
        "preceedingTasks": [
          24740098
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 36.789351851851855,
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
            "weight": 0.008652725764953136
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 17740105,
        "code": "ENTMQMAAS-447.5",
        "name": "Self-provision an address/destination.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 4.78125,
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
            "weight": 0.0011245331320399359
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-jmalloy"
      },
      {
        "id": 22740288,
        "code": "ENTMQMAAS-450.10",
        "name": "[#1079] : standard-controller: is trying to connect to router which was already killed.10",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 504.9916666666666,
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
            "weight": 0.11877225842002279
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "lulf@redhat.com"
      },
      {
        "id": 13740112,
        "code": "ENTMQMAAS-448.1",
        "name": "Document how to delete a destination/address.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 777.9812499999999,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.18297844532932692
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 15740112,
        "code": "ENTMQMAAS-448.3",
        "name": "Document how to delete a destination/address.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1770833333333333,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00027684584732137854
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 20737485,
        "code": "ENTMQMAAS-407.8",
        "name": "[#973] : Configure per-address settings for each address created on broker.8",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 691.3756944444444,
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
            "weight": 0.16260912420180848
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "gordonsim"
      },
      {
        "id": 16740112,
        "code": "ENTMQMAAS-448.4",
        "name": "Document how to delete a destination/address.4",
        "preceedingTasks": [
          15740112
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.8899305555555557,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00044450499910627246
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 25740112,
        "code": "ENTMQMAAS-448.13",
        "name": "Document how to delete a destination/address.13",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.2182291666666667,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00028652320216137364
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 13737477,
        "code": "ENTMQMAAS-404.1",
        "name": "Investigate what's needed for operations (logs/monitoring).1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 818.8305555555556,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.4
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.19258605788212074
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rshelly"
      },
      {
        "id": 14737477,
        "code": "ENTMQMAAS-404.2",
        "name": "Investigate what's needed for operations (logs/monitoring).2",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 8.02361111111111,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.4
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0018871250265198865
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rshelly"
      },
      {
        "id": 15737477,
        "code": "ENTMQMAAS-404.3",
        "name": "Investigate what's needed for operations (logs/monitoring).3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 3.504861111111111,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.4
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0008243309683958688
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rshelly"
      },
      {
        "id": 40740112,
        "code": "ENTMQMAAS-448.28",
        "name": "Document how to delete a destination/address.28",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.2276041666666666,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0002887281690869421
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 45740112,
        "code": "ENTMQMAAS-448.33",
        "name": "Document how to delete a destination/address.33",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 9.062152777777778,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.002131386362607864
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 48740112,
        "code": "ENTMQMAAS-448.36",
        "name": "Document how to delete a destination/address.36",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 3.2784722222222222,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0007710851004154739
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 49740112,
        "code": "ENTMQMAAS-448.37",
        "name": "Document how to delete a destination/address.37",
        "preceedingTasks": [
          48740112
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.6030092592592593,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0003770221224583179
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 51740112,
        "code": "ENTMQMAAS-448.39",
        "name": "Document how to delete a destination/address.39",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.208888888888889,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00028432640177997393
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 56740112,
        "code": "ENTMQMAAS-448.44",
        "name": "Document how to delete a destination/address.44",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.8604166666666666,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00043756343656281603
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 61740112,
        "code": "ENTMQMAAS-448.49",
        "name": "Document how to delete a destination/address.49",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ],
        "estimateTime": 1.1712752525252526,
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.00027547980720587487
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rhn-support-hmaclean"
      },
      {
        "id": 16737477,
        "code": "ENTMQMAAS-404.4",
        "name": "Investigate what's needed for operations (logs/monitoring).4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 242.94027777777777,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.4
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.057138696254765274
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rshelly"
      },
      {
        "id": 17737477,
        "code": "ENTMQMAAS-404.5",
        "name": "Investigate what's needed for operations (logs/monitoring).5",
        "preceedingTasks": [
          16737477
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 7.007986111111111,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.4
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.0016482536095832991
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rshelly"
      },
      {
        "id": 18737477,
        "code": "ENTMQMAAS-404.6",
        "name": "Investigate what's needed for operations (logs/monitoring).6",
        "preceedingTasks": [
          17737477
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "estimateTime": 324.27152777777775,
        "requireAssign": {
          "backend": 2.99,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.4
        },
        "kpiInTask": [
          {
            "id": 1,
            "type": "CircleTime",
            "weight": 0.07626751932304722
          }
        ],
        "projectKey": "ENTMQMAAS_4xxxx",
        "assignee": "rshelly"
      }
    ],
    "employees": [
      {
        "id": 8430,
        "name": "rhn-support-hmaclean",
        "employeeNumber": "MS2024430",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.95,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.89
        }
      },
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
        "id": 9697,
        "name": "buschv",
        "employeeNumber": "MS2024697",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.97,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.85
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
        "id": 4812,
        "name": "rshelly",
        "employeeNumber": "MS2024812",
        "position": "QA",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.99,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.4
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
]; module.exports = { projects };
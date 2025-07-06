const projects = [
  {
    "id": 1,
    "projectKey": "ENTMQMAAS",
    "projectName": "A-MQ Messaging-as-a-Service",
    "projectType": "software",
    "projectLead": "rgodfrey@redhat.com",
    "description": "The console-server is currently not representing temporary topic subscriptions in its view of addresses. This is a gap.",
    "startTime": "2016-11-21T03:57:00.000Z",
    "endTime": "2024-04-16T05:55:48.000Z",
    "assets": null,
    "tasks": [
      {
        "id": 12662846,
        "code": "ENTMQMAAS-5",
        "name": "switch to use AMQ6 docker/openshift startup script for AMQ7 artemis image",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12662872,
        "code": "ENTMQMAAS-6",
        "name": "document the build components making up A-MQ MaaS",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12663808,
        "code": "ENTMQMAAS-8",
        "name": "don't use default deployer service account",
        "preceedingTasks": [
          "ENTMQMAAS-5"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12663922,
        "code": "ENTMQMAAS-10",
        "name": "Parameterize default docker images for openshift templates",
        "preceedingTasks": [
          "ENTMQMAAS-8"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12663924,
        "code": "ENTMQMAAS-11",
        "name": "Perform scale testing on lab hardware",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12674242,
        "code": "ENTMQMAAS-13",
        "name": "Add ability to retrieve address definitions",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12690635,
        "code": "ENTMQMAAS-52",
        "name": "Create copy of upstream repositories",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12690636,
        "code": "ENTMQMAAS-53",
        "name": "Setup CI for product repositories",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12705048,
        "code": "ENTMQMAAS-70",
        "name": "[#271] Add SASL delegation to Artemis",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12705045,
        "code": "ENTMQMAAS-67",
        "name": "Create template for brokered address space",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12705042,
        "code": "ENTMQMAAS-64",
        "name": "Keycloak Plugin - use more SHA-1 suitable credential storage algorithm",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12705033,
        "code": "ENTMQMAAS-55",
        "name": "update address-controller to support new address model",
        "preceedingTasks": [
          "ENTMQMAAS-455",
          "ENTMQMAAS-67"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12705035,
        "code": "ENTMQMAAS-57",
        "name": "update configserv to support new address model",
        "preceedingTasks": [
          "ENTMQMAAS-55"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12705037,
        "code": "ENTMQMAAS-59",
        "name": "update console to support new address model",
        "preceedingTasks": [
          "ENTMQMAAS-10",
          "ENTMQMAAS-6"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12705036,
        "code": "ENTMQMAAS-58",
        "name": "update queue-scheduler to support new address model",
        "preceedingTasks": [
          "ENTMQMAAS-201",
          "ENTMQMAAS-64"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12705034,
        "code": "ENTMQMAAS-56",
        "name": "update ragent to support new address model",
        "preceedingTasks": [
          "ENTMQMAAS-59"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12705080,
        "code": "ENTMQMAAS-102",
        "name": "Document design for distribution of certificates / ensuring services trust the certificates",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12705099,
        "code": "ENTMQMAAS-121",
        "name": "Identify gaps in system testing wrt Address Model",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12705076,
        "code": "ENTMQMAAS-98",
        "name": "Setup upstream CI on Jenkins",
        "preceedingTasks": [
          "ENTMQMAAS-440",
          "ENTMQMAAS-723",
          "ENTMQMAAS-733",
          "ENTMQMAAS-102"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12705092,
        "code": "ENTMQMAAS-114",
        "name": "Standard set of plans for all address types (xs,s,m,l,xl)",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12705075,
        "code": "ENTMQMAAS-97",
        "name": "Support using ThirdPartyResources for storing Address and Instance resources",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12705685,
        "code": "ENTMQMAAS-134",
        "name": "[#135] : Add system tests for authentication",
        "preceedingTasks": [
          "ENTMQMAAS-793",
          "ENTMQMAAS-812",
          "ENTMQMAAS-97"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12705687,
        "code": "ENTMQMAAS-135",
        "name": "alter configuration schema to have a sasl-profile (similar to ssl profile)",
        "preceedingTasks": [
          "ENTMQMAAS-56"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12705688,
        "code": "ENTMQMAAS-136",
        "name": "update base image for router to use proton 0.18",
        "preceedingTasks": [
          "ENTMQMAAS-135"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12705829,
        "code": "ENTMQMAAS-148",
        "name": "Create REST API for creating/updating/deleting address spaces",
        "preceedingTasks": [
          "ENTMQMAAS-134"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12706681,
        "code": "ENTMQMAAS-157",
        "name": "[#106] : Fix unstable test enmasse.config.service.amqp.AMQPServerTest.testSubscribe",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12706682,
        "code": "ENTMQMAAS-158",
        "name": "[#107] : Fix unstable test enmasse.broker.prestop.TopicMigratorTest.testMigrator",
        "preceedingTasks": [
          "ENTMQMAAS-701",
          "ENTMQMAAS-157"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12706808,
        "code": "ENTMQMAAS-159",
        "name": "[#88] : Store test reports and openshift logs on bintray",
        "preceedingTasks": [
          "ENTMQMAAS-443",
          "ENTMQMAAS-158"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12706869,
        "code": "ENTMQMAAS-160",
        "name": "[#110] : Enabling MQTT gateway to pass username/password",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.43,
          "frontend": 1.88,
          "database": 2.4,
          "devops": 2.68,
          "ai_ml": 1.76,
          "testing": 1.66,
          "issue_tracking": 2.69
        },
        "tags": [
          "backend",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12707096,
        "code": "ENTMQMAAS-162",
        "name": "[#109] : Fix unstable test enmasse.discovery.DiscoveryTest.testDiscovery",
        "preceedingTasks": [
          "ENTMQMAAS-159"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12707098,
        "code": "ENTMQMAAS-164",
        "name": "[#112] : Add readiness check for dispatch router",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12708121,
        "code": "ENTMQMAAS-170",
        "name": "improve system-tests regarding to Address Tests",
        "preceedingTasks": [
          "ENTMQMAAS-136",
          "ENTMQMAAS-121"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12708226,
        "code": "ENTMQMAAS-172",
        "name": "[#136] : Use persistent volume claims by default",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12708259,
        "code": "ENTMQMAAS-173",
        "name": "[#138] : Add web console tests for enmasse-console",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12708671,
        "code": "ENTMQMAAS-174",
        "name": "Extract UI tooltips from ascii doc files",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 3.97,
          "database": 2.31,
          "devops": 2.61,
          "ai_ml": 2.75,
          "testing": 1.98,
          "issue_tracking": 2.86
        },
        "tags": [
          "frontend",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12709904,
        "code": "ENTMQMAAS-178",
        "name": "[#186] : frequent loss of TLS connections",
        "preceedingTasks": [
          "ENTMQMAAS-11"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12709910,
        "code": "ENTMQMAAS-179",
        "name": "System test deployment to support Keycloak auth",
        "preceedingTasks": [
          "ENTMQMAAS-172"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12709911,
        "code": "ENTMQMAAS-180",
        "name": "Deploy system tests in multi-tenant mode",
        "preceedingTasks": [
          "ENTMQMAAS-944",
          "ENTMQMAAS-179"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12709913,
        "code": "ENTMQMAAS-181",
        "name": "Add support to system tests for creating/deleting users",
        "preceedingTasks": [
          "ENTMQMAAS-180"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12711055,
        "code": "ENTMQMAAS-182",
        "name": "[#194] : Use TLS for broker shutdown hook",
        "preceedingTasks": [
          "ENTMQMAAS-875",
          "ENTMQMAAS-181"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12711057,
        "code": "ENTMQMAAS-184",
        "name": "[#196] : Queue scheduler fails to create queue on broker",
        "preceedingTasks": [
          "ENTMQMAAS-182"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12711058,
        "code": "ENTMQMAAS-185",
        "name": "[#197] : Use TLS for router-metrics",
        "preceedingTasks": [
          "ENTMQMAAS-184"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12711315,
        "code": "ENTMQMAAS-186",
        "name": "[#200] : enmasse.broker.forwarder.ForwarderControllerTest > testBrokerReplicator FAILED",
        "preceedingTasks": [
          "ENTMQMAAS-185"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12711915,
        "code": "ENTMQMAAS-191",
        "name": "[#220] : Console unable to authenticate with keycloak",
        "preceedingTasks": [
          "ENTMQMAAS-70",
          "ENTMQMAAS-170",
          "ENTMQMAAS-178"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12712234,
        "code": "ENTMQMAAS-192",
        "name": "[#231] : improve system-tests regarding to Address Space Tests",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12714002,
        "code": "ENTMQMAAS-196",
        "name": "Create design doc and test plan for Brokered Address Space",
        "preceedingTasks": [
          "ENTMQMAAS-186"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12714004,
        "code": "ENTMQMAAS-197",
        "name": "Use authorization to prevent messaging clients calling management in Brokered Address Space",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12714006,
        "code": "ENTMQMAAS-198",
        "name": "Add support to Address Controller for brokered address space type and address types to java model",
        "preceedingTasks": [
          "ENTMQMAAS-196"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12714010,
        "code": "ENTMQMAAS-200",
        "name": "Add support for maintaining endpoints and address space readiness for brokered address space",
        "preceedingTasks": [
          "ENTMQMAAS-198"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12714052,
        "code": "ENTMQMAAS-201",
        "name": "[#275] : Console Server: Make source of stats, source of addresses pluggable",
        "preceedingTasks": [
          "ENTMQMAAS-191",
          "ENTMQMAAS-160"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12714054,
        "code": "ENTMQMAAS-203",
        "name": "[#277] : List and watch kubernetes address configmaps in controller for brokered address space",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12714055,
        "code": "ENTMQMAAS-204",
        "name": "[#278] : React to changes in the address definitions to ensure broker is correctly configured",
        "preceedingTasks": [
          "ENTMQMAAS-58",
          "ENTMQMAAS-203"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12714056,
        "code": "ENTMQMAAS-205",
        "name": "[#279] : Update console to work seamlessly with brokered address space",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12714057,
        "code": "ENTMQMAAS-206",
        "name": "[#280] : brokered address space: Update address status based on status of address in Broker",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12714058,
        "code": "ENTMQMAAS-207",
        "name": "[#281] : Add support for different address space types to systemtest framework",
        "preceedingTasks": [
          "ENTMQMAAS-192"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12714059,
        "code": "ENTMQMAAS-208",
        "name": "[#282] : Write systemtests for brokered address space",
        "preceedingTasks": [
          "ENTMQMAAS-204",
          "ENTMQMAAS-207"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12714060,
        "code": "ENTMQMAAS-209",
        "name": "[#283] : Document brokered address space",
        "preceedingTasks": [
          "ENTMQMAAS-200"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12714078,
        "code": "ENTMQMAAS-210",
        "name": "[#284] : Instantiate template for brokered address space type in controller for brokered address space",
        "preceedingTasks": [
          "ENTMQMAAS-209"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12714081,
        "code": "ENTMQMAAS-212",
        "name": "Configure JMS TCK testing on internal Jenkins instance",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12714427,
        "code": "ENTMQMAAS-213",
        "name": "[#298] : Update Artemis startup scripts to support brokered address space",
        "preceedingTasks": [
          "ENTMQMAAS-210"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12714548,
        "code": "ENTMQMAAS-214",
        "name": "[#303] : rename console to agent",
        "preceedingTasks": [
          "ENTMQMAAS-213"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12714551,
        "code": "ENTMQMAAS-215",
        "name": "[#304] : separate system-tests to full and reduced set of tests",
        "preceedingTasks": [
          "ENTMQMAAS-173",
          "ENTMQMAAS-228",
          "ENTMQMAAS-212"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12714931,
        "code": "ENTMQMAAS-217",
        "name": "[#316] : create documentation for system tests",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12715111,
        "code": "ENTMQMAAS-219",
        "name": "[#314] : Address Controller REST API is tied to schema for standard address space",
        "preceedingTasks": [
          "ENTMQMAAS-214"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12715406,
        "code": "ENTMQMAAS-221",
        "name": "[#334] : test create/delete of brokered address space",
        "preceedingTasks": [
          "ENTMQMAAS-205",
          "ENTMQMAAS-215"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12715409,
        "code": "ENTMQMAAS-222",
        "name": "[#335] : System-tests: brokered: test address types",
        "preceedingTasks": [
          "ENTMQMAAS-221"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12715410,
        "code": "ENTMQMAAS-223",
        "name": "[#336] : System-tests: brokered: test durable subscribers",
        "preceedingTasks": [
          "ENTMQMAAS-222"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12715411,
        "code": "ENTMQMAAS-224",
        "name": "[#337] : System-tests: brokered: test JMS client",
        "preceedingTasks": [
          "ENTMQMAAS-245",
          "ENTMQMAAS-223"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12715415,
        "code": "ENTMQMAAS-225",
        "name": "[#338] : System-tests: brokered: tests for particular supported features in brokered address space",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12715419,
        "code": "ENTMQMAAS-226",
        "name": "[#339] : System-tests: brokered: extend authentication tests",
        "preceedingTasks": [
          "ENTMQMAAS-206",
          "ENTMQMAAS-224"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12715420,
        "code": "ENTMQMAAS-227",
        "name": "[#340] : System-tests: brokered: webconsole tests",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12715436,
        "code": "ENTMQMAAS-228",
        "name": "[#341] : Add external TLS support to broker in brokered address space",
        "preceedingTasks": [
          "ENTMQMAAS-208",
          "ENTMQMAAS-197"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12716986,
        "code": "ENTMQMAAS-238",
        "name": "[#325] : Migrate build files to maven",
        "preceedingTasks": [
          "ENTMQMAAS-219"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12717107,
        "code": "ENTMQMAAS-239",
        "name": "[#368] ragent: failing test \\\"forked process\\\" with rh-nodejs4, rh-nodejs6",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12717570,
        "code": "ENTMQMAAS-242",
        "name": "[#385] : Address-controller is restarted with 'Error syncing pod' event and no additional info in log",
        "preceedingTasks": [
          "ENTMQMAAS-859",
          "ENTMQMAAS-238"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12717694,
        "code": "ENTMQMAAS-243",
        "name": "[#387] : SystemTests: message grouping tests",
        "preceedingTasks": [
          "ENTMQMAAS-269",
          "ENTMQMAAS-227"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12717970,
        "code": "ENTMQMAAS-244",
        "name": "[#394] : System-tests: Create external clients executor",
        "preceedingTasks": [
          "ENTMQMAAS-243"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12717975,
        "code": "ENTMQMAAS-245",
        "name": "[#395] : Update Keycloak dependency to version 3.3.0",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12717984,
        "code": "ENTMQMAAS-246",
        "name": "[#398] : remove express dependency",
        "preceedingTasks": [
          "ENTMQMAAS-318",
          "ENTMQMAAS-239"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12717993,
        "code": "ENTMQMAAS-247",
        "name": "Implement external client executor",
        "preceedingTasks": [
          "ENTMQMAAS-244"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12717995,
        "code": "ENTMQMAAS-248",
        "name": "[#405]: System-test: Implement Abstract client",
        "preceedingTasks": [
          "ENTMQMAAS-303",
          "ENTMQMAAS-247"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12717996,
        "code": "ENTMQMAAS-249",
        "name": "[#406]: System-test: Implement rhea client executor (cli-rhea)",
        "preceedingTasks": [
          "ENTMQMAAS-248"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12717998,
        "code": "ENTMQMAAS-251",
        "name": "[ #408]: System-test: Implement java client executor (cli-java)",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12717997,
        "code": "ENTMQMAAS-250",
        "name": "[#407]: System-test: Implement proton-python executor (cli-proton-python)",
        "preceedingTasks": [
          "ENTMQMAAS-292",
          "ENTMQMAAS-357",
          "ENTMQMAAS-251"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12718054,
        "code": "ENTMQMAAS-252",
        "name": "[#403] : Add the ability to use AMQP over WebSockets to a route on port 443",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12718221,
        "code": "ENTMQMAAS-254",
        "name": "[#414] : Add support for OAUTH2 authentication to Keycloak plugin",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12718428,
        "code": "ENTMQMAAS-255",
        "name": "[#417] : Authenticate /v1/addressspaces REST APIs using RBAC",
        "preceedingTasks": [
          "ENTMQMAAS-242"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12718429,
        "code": "ENTMQMAAS-256",
        "name": "[#418] : Authenticate /v1/addresses REST API using RBAC",
        "preceedingTasks": [
          "ENTMQMAAS-255"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12718818,
        "code": "ENTMQMAAS-259",
        "name": "[#436] : System-tests: brokered: extend brokered jms TopicTest about shared/non-shared durable subscription",
        "preceedingTasks": [
          "ENTMQMAAS-226"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12718939,
        "code": "ENTMQMAAS-262",
        "name": "[#442] : System-tests: create basic message patterns tests with external clients",
        "preceedingTasks": [
          "ENTMQMAAS-346",
          "ENTMQMAAS-250"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12719088,
        "code": "ENTMQMAAS-264",
        "name": "[#446] : System-tests: Selector tests for brokered address space",
        "preceedingTasks": [
          "ENTMQMAAS-262"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12719516,
        "code": "ENTMQMAAS-266",
        "name": "[#458] : System-tests: brokerred address space transaction on queue",
        "preceedingTasks": [
          "ENTMQMAAS-264"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12719744,
        "code": "ENTMQMAAS-268",
        "name": "[#472] : System-tests: create tests for large messages",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12719749,
        "code": "ENTMQMAAS-269",
        "name": "[#456] : Upgrade to Artemis 2.4.0",
        "preceedingTasks": [
          "ENTMQMAAS-290",
          "ENTMQMAAS-225",
          "ENTMQMAAS-254"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12719752,
        "code": "ENTMQMAAS-272",
        "name": "[#460] : Create systemtests for open service broker api",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12719753,
        "code": "ENTMQMAAS-273",
        "name": "[#462] : Use persistent volumes for keycloak",
        "preceedingTasks": [
          "ENTMQMAAS-256"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12719755,
        "code": "ENTMQMAAS-275",
        "name": "[#464] : Add HTTPS support for standard authentication service",
        "preceedingTasks": [
          "ENTMQMAAS-815",
          "ENTMQMAAS-174",
          "ENTMQMAAS-273"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12719760,
        "code": "ENTMQMAAS-280",
        "name": "[#402] : Support HTTPS in console",
        "preceedingTasks": [
          "ENTMQMAAS-249",
          "ENTMQMAAS-305",
          "ENTMQMAAS-252"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12719762,
        "code": "ENTMQMAAS-281",
        "name": "Allow tooltips for brokered address space",
        "preceedingTasks": [
          "ENTMQMAAS-280"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12719768,
        "code": "ENTMQMAAS-284",
        "name": "Define console tests",
        "preceedingTasks": [
          "ENTMQMAAS-246",
          "ENTMQMAAS-13",
          "ENTMQMAAS-272"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12719769,
        "code": "ENTMQMAAS-285",
        "name": "Define long running tests",
        "preceedingTasks": [
          "ENTMQMAAS-217",
          "ENTMQMAAS-284"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12719771,
        "code": "ENTMQMAAS-287",
        "name": "[#473] : Limit the scope of privileges required by address-controller",
        "preceedingTasks": [
          "ENTMQMAAS-275"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12719772,
        "code": "ENTMQMAAS-288",
        "name": "[#474] : Support multiple address controllers in the same OpenShift cluster",
        "preceedingTasks": [
          "ENTMQMAAS-287"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12720215,
        "code": "ENTMQMAAS-290",
        "name": "[#486] : System-tests: count of created brokered address spaces should be reduced",
        "preceedingTasks": [
          "ENTMQMAAS-285"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12720321,
        "code": "ENTMQMAAS-291",
        "name": "[#488] : System-tests: Implement long running tests",
        "preceedingTasks": [
          "ENTMQMAAS-405",
          "ENTMQMAAS-417",
          "ENTMQMAAS-268"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12720368,
        "code": "ENTMQMAAS-292",
        "name": "have hostname in online doc code examples match the real hostname for the service",
        "preceedingTasks": [
          "ENTMQMAAS-281"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12720417,
        "code": "ENTMQMAAS-293",
        "name": "[#493] : Enable HTTPS for restapi and console routes",
        "preceedingTasks": [
          "ENTMQMAAS-288"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12720872,
        "code": "ENTMQMAAS-298",
        "name": "[#513] : System-tests: create testCreateDeleteAddressesWithAuthLong",
        "preceedingTasks": [
          "ENTMQMAAS-291"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12720873,
        "code": "ENTMQMAAS-299",
        "name": "[#514] : System-tests: create testCreateDeleteUsersLong",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12720876,
        "code": "ENTMQMAAS-301",
        "name": "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12720952,
        "code": "ENTMQMAAS-303",
        "name": "[#523] : SystemTests: brokered/standard: new test for keycloak persistent storage",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12720955,
        "code": "ENTMQMAAS-304",
        "name": "[#524] : System-tests: longtime: create new test for user authentication before/after restarting keycloak",
        "preceedingTasks": [
          "ENTMQMAAS-475",
          "ENTMQMAAS-301"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12720976,
        "code": "ENTMQMAAS-305",
        "name": "[#526] : System-tests: November list of disabled tests",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12721160,
        "code": "ENTMQMAAS-306",
        "name": "Unable test io.enmasse.systemtest.brokered.clients.rhea.MsgPatternsTest.testMessageSelectorTopic",
        "preceedingTasks": [
          "ENTMQMAAS-304"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12721310,
        "code": "ENTMQMAAS-307",
        "name": "[#539] : System-tests: createtestAuthSendReceiveLong",
        "preceedingTasks": [
          "ENTMQMAAS-383",
          "ENTMQMAAS-306"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12721458,
        "code": "ENTMQMAAS-308",
        "name": "Console UI tweaks to Create Address wizard",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 3.97,
          "database": 2.31,
          "devops": 2.61,
          "ai_ml": 2.75,
          "testing": 1.98,
          "issue_tracking": 2.86
        },
        "tags": [
          "frontend",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12724080,
        "code": "ENTMQMAAS-318",
        "name": "Productize ER3 of RHOM",
        "preceedingTasks": [
          "ENTMQMAAS-259"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.58,
          "frontend": 2.81,
          "database": 2.31,
          "devops": 3.06,
          "ai_ml": 3.01,
          "testing": 1.68,
          "issue_tracking": 3.26
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12727841,
        "code": "ENTMQMAAS-328",
        "name": "Document Creating and deleting addresses",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730068,
        "code": "ENTMQMAAS-332",
        "name": "[#744] : Implement Plan resource limits for address space",
        "preceedingTasks": [
          "ENTMQMAAS-293"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730069,
        "code": "ENTMQMAAS-333",
        "name": "[#745] : Implement Plan resource requests for addresses",
        "preceedingTasks": [
          "ENTMQMAAS-332"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730070,
        "code": "ENTMQMAAS-334",
        "name": "[#746] : Add support for checking requests against limits and setting status on address",
        "preceedingTasks": [
          "ENTMQMAAS-333"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730071,
        "code": "ENTMQMAAS-335",
        "name": "[#747] : Add support for colocated topics",
        "preceedingTasks": [
          "ENTMQMAAS-334"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730072,
        "code": "ENTMQMAAS-336",
        "name": "[#748] : Persist decision about where queues/topics are placed",
        "preceedingTasks": [
          "ENTMQMAAS-335"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730073,
        "code": "ENTMQMAAS-337",
        "name": "[#749] : Use statefulsets for brokers",
        "preceedingTasks": [
          "ENTMQMAAS-899",
          "ENTMQMAAS-336"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730076,
        "code": "ENTMQMAAS-340",
        "name": "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs",
        "preceedingTasks": [
          "ENTMQMAAS-337"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730081,
        "code": "ENTMQMAAS-345",
        "name": "[#757] : Oauth for console",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730082,
        "code": "ENTMQMAAS-346",
        "name": "[#758] : Keycloak plugin OAUTH2 support",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730083,
        "code": "ENTMQMAAS-347",
        "name": "[#759] : Delegate from keycloak to OpenShift Pro",
        "preceedingTasks": [
          "ENTMQMAAS-904",
          "ENTMQMAAS-340"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730085,
        "code": "ENTMQMAAS-349",
        "name": "[#761] : Console to support status for addresses",
        "preceedingTasks": [
          "ENTMQMAAS-345"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730086,
        "code": "ENTMQMAAS-350",
        "name": "[#762] : How to match plans offered to plans specified (e.g. have console offer plans based on the presence of configmaps in its namespace or variations of that)",
        "preceedingTasks": [
          "ENTMQMAAS-349"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730089,
        "code": "ENTMQMAAS-353",
        "name": "[#765] : Changes to service broker (service type is just address space, different plans are supported. See also point above about how to tie plans offered to plans specified)",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730091,
        "code": "ENTMQMAAS-355",
        "name": "[#767] : Disable durable subs (configurable upstream?)",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730092,
        "code": "ENTMQMAAS-356",
        "name": "[#768] : Disable MQTT (configurable upstream?)",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730139,
        "code": "ENTMQMAAS-357",
        "name": "Polarion reporting of enmasse test cases",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730141,
        "code": "ENTMQMAAS-358",
        "name": "[#770] : Define tests for limitation of address-spaces (by credits)",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730143,
        "code": "ENTMQMAAS-360",
        "name": "[#772] : WebConsole Tests for addresses status",
        "preceedingTasks": [
          "ENTMQMAAS-307"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730144,
        "code": "ENTMQMAAS-361",
        "name": "[#773] : Tests for authentication WebConsole",
        "preceedingTasks": [
          "ENTMQMAAS-360"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730145,
        "code": "ENTMQMAAS-362",
        "name": "[#774] : Tests for authorization in WebConsole",
        "preceedingTasks": [
          "ENTMQMAAS-361"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730146,
        "code": "ENTMQMAAS-363",
        "name": "[#775] : Tests for clients authorization",
        "preceedingTasks": [
          "ENTMQMAAS-624",
          "ENTMQMAAS-376",
          "ENTMQMAAS-362"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730147,
        "code": "ENTMQMAAS-364",
        "name": "[#776] : Recheck and enable system tests for standard address space",
        "preceedingTasks": [
          "ENTMQMAAS-266",
          "ENTMQMAAS-358"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730148,
        "code": "ENTMQMAAS-365",
        "name": "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax",
        "preceedingTasks": [
          "ENTMQMAAS-363"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12730167,
        "code": "ENTMQMAAS-367",
        "name": "Setup Jenkins job with productized images",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12732596,
        "code": "ENTMQMAAS-374",
        "name": "[#843] : improve test framework regarding to definition of dynamically created plans",
        "preceedingTasks": [
          "ENTMQMAAS-364"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12732615,
        "code": "ENTMQMAAS-375",
        "name": "[#844] : system-tests: create documentation in HACKING doc how to execute webconsole tests",
        "preceedingTasks": [
          "ENTMQMAAS-650",
          "ENTMQMAAS-367"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12733175,
        "code": "ENTMQMAAS-376",
        "name": "Add Documentation Conventions to Guide",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12733952,
        "code": "ENTMQMAAS-382",
        "name": "Investigate options for enforcing backlog limits on broker/router",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12733954,
        "code": "ENTMQMAAS-383",
        "name": "[#811] : Brokered: cannot create topic: user null does not have permissions to 'send'...",
        "preceedingTasks": [
          "ENTMQMAAS-353"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12733964,
        "code": "ENTMQMAAS-384",
        "name": "[#877] : Make ansible deployment for install dependencies for running systemtests",
        "preceedingTasks": [
          "ENTMQMAAS-630",
          "ENTMQMAAS-375"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12734956,
        "code": "ENTMQMAAS-385",
        "name": "[#894] : Console does not sanitize address config names",
        "preceedingTasks": [
          "ENTMQMAAS-933",
          "ENTMQMAAS-950",
          "ENTMQMAAS-382"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12735371,
        "code": "ENTMQMAAS-386",
        "name": "[#910] : address-controller can't replace addresses created via console",
        "preceedingTasks": [
          "ENTMQMAAS-385"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12735522,
        "code": "ENTMQMAAS-387",
        "name": "[#918] : system-tests: new scale test: testScaleRouterAutomatically",
        "preceedingTasks": [
          "ENTMQMAAS-374"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12735527,
        "code": "ENTMQMAAS-388",
        "name": "[#919] : system-tests: new scale test: testPodsLimitation",
        "preceedingTasks": [
          "ENTMQMAAS-384"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12735530,
        "code": "ENTMQMAAS-389",
        "name": "[#920] : system-tests: new scale test: testCreditLimitation",
        "preceedingTasks": [
          "ENTMQMAAS-651",
          "ENTMQMAAS-388"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12735531,
        "code": "ENTMQMAAS-390",
        "name": "[#921] : system-tests: new Plan test: testPlansAvailableViaConsole",
        "preceedingTasks": [
          "ENTMQMAAS-387"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12736171,
        "code": "ENTMQMAAS-391",
        "name": "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space",
        "preceedingTasks": [
          "ENTMQMAAS-350",
          "ENTMQMAAS-390"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12737362,
        "code": "ENTMQMAAS-393",
        "name": "[#991] : system-tests: new scale test: testCreditLimitation ({sharded,pooled}{queues,topics})",
        "preceedingTasks": [
          "ENTMQMAAS-389"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12737403,
        "code": "ENTMQMAAS-395",
        "name": "[#996] : system-tests: look at longtime running tests and fix them",
        "preceedingTasks": [
          "ENTMQMAAS-393"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12737413,
        "code": "ENTMQMAAS-396",
        "name": "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests",
        "preceedingTasks": [
          "ENTMQMAAS-391"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12737421,
        "code": "ENTMQMAAS-397",
        "name": "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases)",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12737429,
        "code": "ENTMQMAAS-399",
        "name": "[#998] : system-tests: review list of February disabled tests",
        "preceedingTasks": [
          "ENTMQMAAS-52",
          "ENTMQMAAS-396"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12737430,
        "code": "ENTMQMAAS-400",
        "name": "[#795] : System-tests: Enable authentication in marathon tests",
        "preceedingTasks": [
          "ENTMQMAAS-411",
          "ENTMQMAAS-397"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12737477,
        "code": "ENTMQMAAS-404",
        "name": "Investigate what's needed for operations (logs/monitoring)",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.33
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12737483,
        "code": "ENTMQMAAS-405",
        "name": "[#949] : agent: Results count is not set correctly after refresh the page",
        "preceedingTasks": [
          "ENTMQMAAS-399",
          "ENTMQMAAS-328",
          "ENTMQMAAS-355"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12737484,
        "code": "ENTMQMAAS-406",
        "name": "[#972] : Make global-max-size parameter configurable via template/plan",
        "preceedingTasks": [
          "ENTMQMAAS-1005",
          "ENTMQMAAS-386"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12737485,
        "code": "ENTMQMAAS-407",
        "name": "[#973] : Configure per-address settings for each address created on broker",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12737492,
        "code": "ENTMQMAAS-410",
        "name": "Docs: how to manage user permissions",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12737495,
        "code": "ENTMQMAAS-411",
        "name": "Docs: document the sign-up process for beta",
        "preceedingTasks": [
          "ENTMQMAAS-395",
          "ENTMQMAAS-410"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12738010,
        "code": "ENTMQMAAS-413",
        "name": "[#1009] : Make resync interval in controllers configurable",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12738011,
        "code": "ENTMQMAAS-414",
        "name": "[#1011] : Separata status check from controller resync",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12738314,
        "code": "ENTMQMAAS-416",
        "name": "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole",
        "preceedingTasks": [
          "ENTMQMAAS-400"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12738369,
        "code": "ENTMQMAAS-417",
        "name": "[#1021] : system-tests: modify QueueTest#testScaledown",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12738426,
        "code": "ENTMQMAAS-419",
        "name": "Remove 'docker' for the templates and images",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12738605,
        "code": "ENTMQMAAS-422",
        "name": "[#1026] : System-tests: create test for REST API - GET | /v1/addresses/myspace/:name",
        "preceedingTasks": [
          "ENTMQMAAS-662",
          "ENTMQMAAS-416"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12738607,
        "code": "ENTMQMAAS-424",
        "name": "[#1028] : System-tests: create test for REST API - DELETE | /v1/addresses/myspace",
        "preceedingTasks": [
          "ENTMQMAAS-422"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12738608,
        "code": "ENTMQMAAS-425",
        "name": "[#1033] : System-tests: create test for REST API - GET /v1/schema",
        "preceedingTasks": [
          "ENTMQMAAS-424"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12738609,
        "code": "ENTMQMAAS-426",
        "name": "[#1034] : system-tests: create test for REST API - address resource required params are missing",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12738610,
        "code": "ENTMQMAAS-427",
        "name": "[#1035] : system-tests: create set of tests for REST API - address resource optional params are missing",
        "preceedingTasks": [
          "ENTMQMAAS-425"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12738628,
        "code": "ENTMQMAAS-428",
        "name": "[#1029] : system-tests: modify authentication tests to create multiple address-spaces in one request",
        "preceedingTasks": [
          "ENTMQMAAS-298",
          "ENTMQMAAS-426"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12738629,
        "code": "ENTMQMAAS-429",
        "name": "[#1031] : system-tests: create new test for replace address-space list",
        "preceedingTasks": [
          "ENTMQMAAS-428"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12738631,
        "code": "ENTMQMAAS-431",
        "name": "[#1036] : system-tests: create new test for address-space endpoints \\\"host\\\"",
        "preceedingTasks": [
          "ENTMQMAAS-429"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12738634,
        "code": "ENTMQMAAS-434",
        "name": "[#1040] : system-tests: create new test that verify that returned restapi routes are reachable",
        "preceedingTasks": [
          "ENTMQMAAS-431"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12739606,
        "code": "ENTMQMAAS-435",
        "name": "[#1017] : Events sent to address of type queue not delivered after a while",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12740031,
        "code": "ENTMQMAAS-438",
        "name": "[#1073] : system-tests: Create test for check if size of messages was exceeded",
        "preceedingTasks": [
          "ENTMQMAAS-427"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12740087,
        "code": "ENTMQMAAS-439",
        "name": "Reference table for Developer role assumptions",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12740094,
        "code": "ENTMQMAAS-440",
        "name": "Reference table for Developer role assumptions",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12740096,
        "code": "ENTMQMAAS-441",
        "name": "Reference table for Developer role assumptions",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12740098,
        "code": "ENTMQMAAS-443",
        "name": "Reference table for Developer role assumptions",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12740105,
        "code": "ENTMQMAAS-447",
        "name": "Self-provision an address/destination",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12740112,
        "code": "ENTMQMAAS-448",
        "name": "Document how to delete a destination/address",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12740288,
        "code": "ENTMQMAAS-450",
        "name": "[#1079] : standard-controller: is trying to connect to router which was already killed",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12740575,
        "code": "ENTMQMAAS-452",
        "name": "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12742276,
        "code": "ENTMQMAAS-455",
        "name": "[#1115] : New system-tests for websocket",
        "preceedingTasks": [
          "ENTMQMAAS-53",
          "ENTMQMAAS-438"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12742571,
        "code": "ENTMQMAAS-457",
        "name": "[#1096] : agent: use \\\"direction\\\" attribute instead of \\\"dir\\\" for autoLinks",
        "preceedingTasks": [
          "ENTMQMAAS-1081",
          "ENTMQMAAS-1105",
          "ENTMQMAAS-407"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12742573,
        "code": "ENTMQMAAS-459",
        "name": "[#1084] : agent container: high load and memory issue with many addresses",
        "preceedingTasks": [
          "ENTMQMAAS-457"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12742577,
        "code": "ENTMQMAAS-463",
        "name": "[#1091] : Endpoints declaratively specified should be checked in status",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12742572,
        "code": "ENTMQMAAS-458",
        "name": "[#1097] : When creating many addresses at the same time, a few have missing autolinks",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12742576,
        "code": "ENTMQMAAS-462",
        "name": "[#1117] : Response code/payload of AddressController REST API POST/DELETE operations",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12742583,
        "code": "ENTMQMAAS-465",
        "name": "Install EnMasse on Bosch OpenShift Dedicated cluster",
        "preceedingTasks": [
          "ENTMQMAAS-1119",
          "ENTMQMAAS-462"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12742584,
        "code": "ENTMQMAAS-466",
        "name": "[#1123] :  system-tests: new test for auto scaleup after manual scaledown",
        "preceedingTasks": [
          "ENTMQMAAS-434"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12742677,
        "code": "ENTMQMAAS-469",
        "name": "[#1124] : system-tests: review of list of disabled tests from March and create new one for April",
        "preceedingTasks": [
          "ENTMQMAAS-466"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12742678,
        "code": "ENTMQMAAS-470",
        "name": "system-tests: unclosed archives exception in Jenkins when core-dump is stored",
        "preceedingTasks": [
          "ENTMQMAAS-469"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12742682,
        "code": "ENTMQMAAS-474",
        "name": "[#1126] : system-tests: use multi-asserts instead of single asserts",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12742680,
        "code": "ENTMQMAAS-472",
        "name": "[#1127] : system-tests: Use ENUM instead of string tags",
        "preceedingTasks": [
          "ENTMQMAAS-57",
          "ENTMQMAAS-474"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12742679,
        "code": "ENTMQMAAS-471",
        "name": "[#1128] : system-tests: Remove logs collecting for pods/statefull-sets",
        "preceedingTasks": [
          "ENTMQMAAS-299",
          "ENTMQMAAS-470"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12742683,
        "code": "ENTMQMAAS-475",
        "name": "[#1125] : system-tests: Rewrite tests to use Dependency injection",
        "preceedingTasks": [
          "ENTMQMAAS-471"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12746088,
        "code": "ENTMQMAAS-483",
        "name": "[#1159] : System-tests: Improve waiting for webItems",
        "preceedingTasks": [
          "ENTMQMAAS-472"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12746892,
        "code": "ENTMQMAAS-624",
        "name": "[#1168] : System-tests: May list of disabled tests",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12748133,
        "code": "ENTMQMAAS-629",
        "name": "[#1193] : System-tests: test for high load of addresses",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12748132,
        "code": "ENTMQMAAS-628",
        "name": "[#1194] : System-tests: new tests for service catalog (via Web)",
        "preceedingTasks": [
          "ENTMQMAAS-483"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12748130,
        "code": "ENTMQMAAS-626",
        "name": "[#1196] : System-tests: review marathon test failures",
        "preceedingTasks": [
          "ENTMQMAAS-663",
          "ENTMQMAAS-641",
          "ENTMQMAAS-628"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12748135,
        "code": "ENTMQMAAS-630",
        "name": "[#1192] : System-tests: new test for login via openshift user",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12748166,
        "code": "ENTMQMAAS-632",
        "name": "align amqonline and interconnect needs for router image",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12748167,
        "code": "ENTMQMAAS-633",
        "name": "remove per-address address-settings config",
        "preceedingTasks": [
          "ENTMQMAAS-643",
          "ENTMQMAAS-632"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12748266,
        "code": "ENTMQMAAS-636",
        "name": "Review Durable Subscription proposal for standard Space, and decompose into tasks",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12748669,
        "code": "ENTMQMAAS-638",
        "name": "[#1206] : 'Connections' tab in console doesn't show connections",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12750629,
        "code": "ENTMQMAAS-639",
        "name": "Document \\\"Creating an address using the Console\\\"",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12750907,
        "code": "ENTMQMAAS-641",
        "name": "[#1230] : system-tests: implement checkReachablePage method for all WebPages",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.73,
          "frontend": 2.37,
          "database": 2.22,
          "devops": 2.81,
          "ai_ml": 2.28,
          "testing": 2.41,
          "issue_tracking": 3.05
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12750937,
        "code": "ENTMQMAAS-642",
        "name": "[#1233] : Service catalog doesn't work due to missing \\\"namespace\\\"",
        "preceedingTasks": [
          "ENTMQMAAS-465"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12751803,
        "code": "ENTMQMAAS-643",
        "name": "[#1265] : Add support for mTLS configuration of aggregated api server",
        "preceedingTasks": [
          "ENTMQMAAS-1116",
          "ENTMQMAAS-642"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12752332,
        "code": "ENTMQMAAS-645",
        "name": "[#1279] : Add support for PATCH to api server",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12752421,
        "code": "ENTMQMAAS-650",
        "name": "[#1283] : Errors when attempting to create two addressspaces with the same name in different namespaces",
        "preceedingTasks": [
          "ENTMQMAAS-365",
          "ENTMQMAAS-629"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12752422,
        "code": "ENTMQMAAS-651",
        "name": "[#1285] : Unable to create queue of type \\\"sharded-queue\\\" using api server",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12752423,
        "code": "ENTMQMAAS-652",
        "name": "[#1287] : Addresses created through the console cannot properly be used through the command line tools",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12752441,
        "code": "ENTMQMAAS-656",
        "name": "durable subscriptions: templates and configuration",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12752443,
        "code": "ENTMQMAAS-658",
        "name": "durable subscriptions: agent",
        "preceedingTasks": [
          "ENTMQMAAS-1256",
          "ENTMQMAAS-656"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12752442,
        "code": "ENTMQMAAS-657",
        "name": "durable subscriptions: standard-controller",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12752444,
        "code": "ENTMQMAAS-659",
        "name": "durable subscriptions: subserv",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12752446,
        "code": "ENTMQMAAS-661",
        "name": "durable subscriptions: console",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12752445,
        "code": "ENTMQMAAS-660",
        "name": "durable subscriptions: system tests",
        "preceedingTasks": [
          "ENTMQMAAS-796",
          "ENTMQMAAS-1311",
          "ENTMQMAAS-661"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12752497,
        "code": "ENTMQMAAS-662",
        "name": "[#1291] : Creating addressspaces through api server appears to require cluster-admin rights",
        "preceedingTasks": [
          "ENTMQMAAS-652"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12752538,
        "code": "ENTMQMAAS-663",
        "name": "[#1292] : System-tests: create new test for: Response code/payload of AddressController REST API POST/DELETE operations",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12753043,
        "code": "ENTMQMAAS-667",
        "name": "[#1306] : Creating 3300 pooled addresses cause creating 5 broker pods",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12753231,
        "code": "ENTMQMAAS-669",
        "name": "[#1315] : System-tests: Jun list of disabled tests",
        "preceedingTasks": [
          "ENTMQMAAS-439",
          "ENTMQMAAS-626"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12753429,
        "code": "ENTMQMAAS-670",
        "name": "[#1319] : sending requests with small batches of addresses cause restart of api-server",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12753978,
        "code": "ENTMQMAAS-671",
        "name": "[#1327] : Creation of sharded topics and queue fails to complete",
        "preceedingTasks": [
          "ENTMQMAAS-1012",
          "ENTMQMAAS-871",
          "ENTMQMAAS-660"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12754585,
        "code": "ENTMQMAAS-683",
        "name": "[#1343] : System-tests: create new test for deploy address when \\\"name\\\" is not specified",
        "preceedingTasks": [
          "ENTMQMAAS-98",
          "ENTMQMAAS-657",
          "ENTMQMAAS-742",
          "ENTMQMAAS-670"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12756087,
        "code": "ENTMQMAAS-694",
        "name": "[#1385] : Upgrade to openshift 3.9 in systemtests",
        "preceedingTasks": [
          "ENTMQMAAS-683"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12757154,
        "code": "ENTMQMAAS-697",
        "name": "[#1341] : Record time spent for various parts of systemtests",
        "preceedingTasks": [
          "ENTMQMAAS-694"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12757373,
        "code": "ENTMQMAAS-698",
        "name": "[#1411] : System-tests: Jul list of disabled tests",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.73,
          "frontend": 2.37,
          "database": 2.22,
          "devops": 2.81,
          "ai_ml": 2.28,
          "testing": 2.41,
          "issue_tracking": 3.05
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12758719,
        "code": "ENTMQMAAS-700",
        "name": "[#1429] : System-tests: Create new test for 'delete all addresses/address spaces'",
        "preceedingTasks": [
          "ENTMQMAAS-698"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.73,
          "frontend": 2.37,
          "database": 2.22,
          "devops": 2.81,
          "ai_ml": 2.28,
          "testing": 2.41,
          "issue_tracking": 3.05
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12761464,
        "code": "ENTMQMAAS-701",
        "name": "[#158] : rebase to latest router",
        "preceedingTasks": [
          "ENTMQMAAS-148",
          "ENTMQMAAS-645"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12763110,
        "code": "ENTMQMAAS-716",
        "name": "Modularization of upstream docs content: Installation section",
        "preceedingTasks": [
          "ENTMQMAAS-406",
          "ENTMQMAAS-639"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12763113,
        "code": "ENTMQMAAS-717",
        "name": "Modularization of upstream docs content: Configuring address space and address plans section",
        "preceedingTasks": [
          "ENTMQMAAS-716"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12763115,
        "code": "ENTMQMAAS-718",
        "name": "Modularization of upstream docs content: Monitoring section",
        "preceedingTasks": [
          "ENTMQMAAS-1006",
          "ENTMQMAAS-413",
          "ENTMQMAAS-717"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12763146,
        "code": "ENTMQMAAS-719",
        "name": "Modularization of upstream docs content: Managing address spaces and addresses section",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12763147,
        "code": "ENTMQMAAS-720",
        "name": "Modularization of upstream docs content: Connecting applications to EnMasse section",
        "preceedingTasks": [
          "ENTMQMAAS-719"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12764183,
        "code": "ENTMQMAAS-722",
        "name": "[#1474] : system-tests: create new webconsole test for address type \\\"subscription\\\"",
        "preceedingTasks": [
          "ENTMQMAAS-669",
          "ENTMQMAAS-419",
          "ENTMQMAAS-700"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.73,
          "frontend": 2.37,
          "database": 2.22,
          "devops": 2.81,
          "ai_ml": 2.28,
          "testing": 2.41,
          "issue_tracking": 3.05
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12764857,
        "code": "ENTMQMAAS-723",
        "name": "[#1492] : System-tests: Aug list of disabled tests",
        "preceedingTasks": [
          "ENTMQMAAS-722"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.73,
          "frontend": 2.37,
          "database": 2.22,
          "devops": 2.81,
          "ai_ml": 2.28,
          "testing": 2.41,
          "issue_tracking": 3.05
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12765860,
        "code": "ENTMQMAAS-727",
        "name": "Migrate jenkins jobs to openshift 3.10",
        "preceedingTasks": [
          "ENTMQMAAS-697"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12765867,
        "code": "ENTMQMAAS-728",
        "name": "[#1520] : System-tests: Use User API when managing users and permissions in systemtests",
        "preceedingTasks": [
          "ENTMQMAAS-753",
          "ENTMQMAAS-727"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12765868,
        "code": "ENTMQMAAS-729",
        "name": "[#1521] : System-tests: create new API client for User API",
        "preceedingTasks": [
          "ENTMQMAAS-728"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12765875,
        "code": "ENTMQMAAS-730",
        "name": "[#1497] : Test creating address spaces with a non-privileged user",
        "preceedingTasks": [
          "ENTMQMAAS-729"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12765877,
        "code": "ENTMQMAAS-731",
        "name": "[#1522] : System-tests: create new test for custom resource definitions of Users",
        "preceedingTasks": [
          "ENTMQMAAS-730"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12765878,
        "code": "ENTMQMAAS-732",
        "name": "[#1523] : System-tests: create new API test for Users API",
        "preceedingTasks": [
          "ENTMQMAAS-731"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12765884,
        "code": "ENTMQMAAS-733",
        "name": "Fix collecting docker logs for prod build",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12765901,
        "code": "ENTMQMAAS-734",
        "name": "User REST API for standard authentication service",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12765903,
        "code": "ENTMQMAAS-735",
        "name": "[#1517] : Add support for user management using custom resources API",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12765905,
        "code": "ENTMQMAAS-737",
        "name": "[#1519] : Use User API in service broker when creating users",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12765911,
        "code": "ENTMQMAAS-740",
        "name": "Create mechanism and tests for testing creation of addressspacess under non admin user",
        "preceedingTasks": [
          "ENTMQMAAS-732"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12765914,
        "code": "ENTMQMAAS-741",
        "name": "[#1525] : System-tests: create machanism for testing creating addressspacess under non admin user",
        "preceedingTasks": [
          "ENTMQMAAS-441",
          "ENTMQMAAS-810",
          "ENTMQMAAS-114",
          "ENTMQMAAS-740"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12766305,
        "code": "ENTMQMAAS-742",
        "name": "[#1532] : System-tests: missing screenshots in marathon test-suite",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.73,
          "frontend": 2.37,
          "database": 2.22,
          "devops": 2.81,
          "ai_ml": 2.28,
          "testing": 2.41,
          "issue_tracking": 3.05
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12767262,
        "code": "ENTMQMAAS-744",
        "name": "Use downstream broker image",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12768227,
        "code": "ENTMQMAAS-752",
        "name": "[#1588] : [console] Address name is not created when starting or ending with .",
        "preceedingTasks": [
          "ENTMQMAAS-671"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12768243,
        "code": "ENTMQMAAS-753",
        "name": "[#1591] : Filtering addresses with star symbol in console giving wrong results",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.73,
          "frontend": 2.37,
          "database": 2.22,
          "devops": 2.81,
          "ai_ml": 2.28,
          "testing": 2.41,
          "issue_tracking": 3.05
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12768901,
        "code": "ENTMQMAAS-758",
        "name": "[#1550] : [Productisation] Agent should lock down Node dependencies",
        "preceedingTasks": [
          "ENTMQMAAS-752"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12768916,
        "code": "ENTMQMAAS-760",
        "name": "[#1601] :  [console][agent] create_address request failed: 422 Unprocessable Entity undefined",
        "preceedingTasks": [
          "ENTMQMAAS-758"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12769059,
        "code": "ENTMQMAAS-763",
        "name": "[#1607] : The dashboard pie chart \\\"Messages\\\" does not account for messages sent to durable subscriptions.",
        "preceedingTasks": [
          "ENTMQMAAS-760"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12769139,
        "code": "ENTMQMAAS-764",
        "name": "[#1611] : System-tests: Sep list of disabled tests",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.73,
          "frontend": 2.37,
          "database": 2.22,
          "devops": 2.81,
          "ai_ml": 2.28,
          "testing": 2.41,
          "issue_tracking": 3.05
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12769163,
        "code": "ENTMQMAAS-766",
        "name": "[#1595] : Console does not behave reasonably if address space is deleted",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12769169,
        "code": "ENTMQMAAS-770",
        "name": "[#1534] : Remove the 'Authorize Access' screen from the login flow",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12769175,
        "code": "ENTMQMAAS-775",
        "name": "[#1445] : Confusing screen labels Messages In / Messages Out in address rows",
        "preceedingTasks": [
          "ENTMQMAAS-763"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12769172,
        "code": "ENTMQMAAS-773",
        "name": "[#1496] : \\\"learn more\\\" link in create new address modal is a dead link",
        "preceedingTasks": [
          "ENTMQMAAS-798",
          "ENTMQMAAS-775"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12769171,
        "code": "ENTMQMAAS-772",
        "name": "[#1498] : Possible to create an address of any type and any plan in webgui",
        "preceedingTasks": [
          "ENTMQMAAS-773"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12769178,
        "code": "ENTMQMAAS-778",
        "name": "[#1309] : Loading huge count of addresses takes a really long time",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12769193,
        "code": "ENTMQMAAS-784",
        "name": "[#1585] : Infrastructure management and upgrades",
        "preceedingTasks": [
          "ENTMQMAAS-1170",
          "ENTMQMAAS-737"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12769192,
        "code": "ENTMQMAAS-783",
        "name": "[#1587] : Deploying EnMasse to a single namespace",
        "preceedingTasks": [
          "ENTMQMAAS-1229",
          "ENTMQMAAS-659",
          "ENTMQMAAS-784"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12769195,
        "code": "ENTMQMAAS-785",
        "name": "[#1519] : Use User API in service broker when creating users",
        "preceedingTasks": [
          "ENTMQMAAS-783"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12769196,
        "code": "ENTMQMAAS-786",
        "name": "[#1580] : Make \\\"caCertSecretName\\\" optional in external authService config",
        "preceedingTasks": [
          "ENTMQMAAS-785"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12769197,
        "code": "ENTMQMAAS-787",
        "name": "Install operator/image/template",
        "preceedingTasks": [
          "ENTMQMAAS-1248",
          "ENTMQMAAS-786"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12769203,
        "code": "ENTMQMAAS-789",
        "name": "Setup Bosch LoadBalancer service with certs",
        "preceedingTasks": [
          "ENTMQMAAS-787"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12769578,
        "code": "ENTMQMAAS-791",
        "name": "[#1625] : [console] No error message is show, when unable to connect to authentication service",
        "preceedingTasks": [
          "ENTMQMAAS-849",
          "ENTMQMAAS-766",
          "ENTMQMAAS-874",
          "ENTMQMAAS-744"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12769783,
        "code": "ENTMQMAAS-792",
        "name": "Remove columns for delivery outcomes that can't yet be filled in brokered space",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12771651,
        "code": "ENTMQMAAS-793",
        "name": "[#1697] : Add tests covering authentication to the EnMasse console using a federated (openshift) id",
        "preceedingTasks": [
          "ENTMQMAAS-741"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12772140,
        "code": "ENTMQMAAS-796",
        "name": "[#1668] : Improve configuration flexibility for creating address space endpoints",
        "preceedingTasks": [
          "ENTMQMAAS-1257",
          "ENTMQMAAS-789"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12772430,
        "code": "ENTMQMAAS-798",
        "name": "[#1616] : Update api group of address space and addresses",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12772429,
        "code": "ENTMQMAAS-797",
        "name": "[#1617] : Update API version to v1beta1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12772439,
        "code": "ENTMQMAAS-802",
        "name": "[#1718] : Allow AddressSpaceController deployment to provide a kc-idp-hint default",
        "preceedingTasks": [
          "ENTMQMAAS-791",
          "ENTMQMAAS-770"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12772458,
        "code": "ENTMQMAAS-803",
        "name": "Use Broker 7.2.1 broker image for downstream",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12772463,
        "code": "ENTMQMAAS-804",
        "name": "Console Docs: Note why connection item does not show count of senders correctly",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12772661,
        "code": "ENTMQMAAS-805",
        "name": "[#1733] : [Console] About button doesn't work as I would expect",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12772738,
        "code": "ENTMQMAAS-807",
        "name": "[#1736] : [console] Behaviour of address filter regex alert is not consistent",
        "preceedingTasks": [
          "ENTMQMAAS-802",
          "ENTMQMAAS-832",
          "ENTMQMAAS-447",
          "ENTMQMAAS-803"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12772778,
        "code": "ENTMQMAAS-808",
        "name": "[#1737] : [console] deleted filtered addresses still displayed",
        "preceedingTasks": [
          "ENTMQMAAS-1959",
          "ENTMQMAAS-805"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12773135,
        "code": "ENTMQMAAS-810",
        "name": "[#1751] : Binding credentials can still be used after the secret is deleted",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12773516,
        "code": "ENTMQMAAS-812",
        "name": "[#1756] : Remove the ability to request console access on binding",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12773517,
        "code": "ENTMQMAAS-813",
        "name": "[#1757] : Existing connection filters not applied to new forming connections.",
        "preceedingTasks": [
          "ENTMQMAAS-808"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12774455,
        "code": "ENTMQMAAS-815",
        "name": "[#1786] : [UX Improvement]Creating the links between Address and Connection",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12775135,
        "code": "ENTMQMAAS-821",
        "name": "[#1781] : Agent unexpectedly deleting queues",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12775832,
        "code": "ENTMQMAAS-827",
        "name": "[#1831] : Document and provide prometheus and grafana installation bundles",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.33
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12775833,
        "code": "ENTMQMAAS-828",
        "name": "[#1832] : Add metrics for address space  status",
        "preceedingTasks": [
          "ENTMQMAAS-772",
          "ENTMQMAAS-797"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12775836,
        "code": "ENTMQMAAS-830",
        "name": "[#1835] : Improve documentation of address spaces",
        "preceedingTasks": [
          "ENTMQMAAS-828"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12775839,
        "code": "ENTMQMAAS-831",
        "name": "[#1837] : Deploy CRD instances separately from infrastructure",
        "preceedingTasks": [
          "ENTMQMAAS-830"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12775851,
        "code": "ENTMQMAAS-832",
        "name": "[systemtests] Use openshift cluster instead of okd for prod build",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12775865,
        "code": "ENTMQMAAS-833",
        "name": "[#1814] : Create systemtests for different cert providers",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12775874,
        "code": "ENTMQMAAS-836",
        "name": "[#1833] : Improve the variation in the default set of address space and address plans",
        "preceedingTasks": [
          "ENTMQMAAS-1040",
          "ENTMQMAAS-831"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12775875,
        "code": "ENTMQMAAS-837",
        "name": "[#1817] : Need to conditionalize managing users docs and add manage user authorization content",
        "preceedingTasks": [
          "ENTMQMAAS-977",
          "ENTMQMAAS-435",
          "ENTMQMAAS-969",
          "ENTMQMAAS-1048",
          "ENTMQMAAS-720"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12775877,
        "code": "ENTMQMAAS-839",
        "name": "Remove the dashboard",
        "preceedingTasks": [
          "ENTMQMAAS-1919",
          "ENTMQMAAS-813"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12775879,
        "code": "ENTMQMAAS-840",
        "name": "[#1841] : Remove sending and receiving link tables (brokered address space)",
        "preceedingTasks": [
          "ENTMQMAAS-839"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12775892,
        "code": "ENTMQMAAS-841",
        "name": "[#1842] : Remove Spring dependency from MQTT components",
        "preceedingTasks": [
          "ENTMQMAAS-807",
          "ENTMQMAAS-929",
          "ENTMQMAAS-164",
          "ENTMQMAAS-821"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12776022,
        "code": "ENTMQMAAS-842",
        "name": "[#1847] : [UX Improvement] gathering all the usability/ui issues in the Beta version",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 4.24,
          "frontend": 4.26,
          "database": 3.42,
          "devops": 4.3,
          "ai_ml": 3.48,
          "testing": 2.45,
          "issue_tracking": 4.46
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12776492,
        "code": "ENTMQMAAS-848",
        "name": "Improvements for beta",
        "preceedingTasks": [
          "ENTMQMAAS-778",
          "ENTMQMAAS-836"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12776511,
        "code": "ENTMQMAAS-849",
        "name": "Update all systemtest metadata ensuring polarion beta release requirements are covered",
        "preceedingTasks": [
          "ENTMQMAAS-804",
          "ENTMQMAAS-162",
          "ENTMQMAAS-764"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.73,
          "frontend": 2.37,
          "database": 2.22,
          "devops": 2.81,
          "ai_ml": 2.28,
          "testing": 2.41,
          "issue_tracking": 3.05
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12777862,
        "code": "ENTMQMAAS-851",
        "name": "Create sign-off document",
        "preceedingTasks": [
          "ENTMQMAAS-833"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12778002,
        "code": "ENTMQMAAS-855",
        "name": "QE feedback for downstream docs [technical]",
        "preceedingTasks": [
          "ENTMQMAAS-837"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12778004,
        "code": "ENTMQMAAS-856",
        "name": "QE feedback for downstream docs [editorial]",
        "preceedingTasks": [
          "ENTMQMAAS-855"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12778102,
        "code": "ENTMQMAAS-857",
        "name": "Add step to creating users procedure",
        "preceedingTasks": [
          "ENTMQMAAS-856"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12778617,
        "code": "ENTMQMAAS-859",
        "name": "[#1963] : systemtests: Debug and fix marathon test suite for running reliability tests",
        "preceedingTasks": [
          "ENTMQMAAS-851"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12778757,
        "code": "ENTMQMAAS-861",
        "name": "Docs: fix view broker log procedure",
        "preceedingTasks": [
          "ENTMQMAAS-857"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12778758,
        "code": "ENTMQMAAS-862",
        "name": "Docs: conditionalize installation prereqs",
        "preceedingTasks": [
          "ENTMQMAAS-861"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12778759,
        "code": "ENTMQMAAS-863",
        "name": "Docs: add known issue about message ordering on queues",
        "preceedingTasks": [
          "ENTMQMAAS-862"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12778768,
        "code": "ENTMQMAAS-864",
        "name": "Docs: Fix API table issue",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12778834,
        "code": "ENTMQMAAS-865",
        "name": "[doc] create doc topic about persistant storage",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12778979,
        "code": "ENTMQMAAS-866",
        "name": "Docs: Remove yaml file links",
        "preceedingTasks": [
          "ENTMQMAAS-2354",
          "ENTMQMAAS-2592",
          "ENTMQMAAS-2536",
          "ENTMQMAAS-865"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12778985,
        "code": "ENTMQMAAS-867",
        "name": "Docs: Fix \\\"{ProcuctName}\\\"",
        "preceedingTasks": [
          "ENTMQMAAS-866"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12779130,
        "code": "ENTMQMAAS-868",
        "name": "Update script that creates API references tables. Increasing cell width.",
        "preceedingTasks": [
          "ENTMQMAAS-848"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12779143,
        "code": "ENTMQMAAS-869",
        "name": "Docs: change all xrefs to links",
        "preceedingTasks": [
          "ENTMQMAAS-867"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12779285,
        "code": "ENTMQMAAS-870",
        "name": "Install AMQ Online with IoT using templates",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 2.4,
          "database": 2.56,
          "devops": 3.12,
          "ai_ml": 2.66,
          "testing": 1.9,
          "issue_tracking": 2.57
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12779292,
        "code": "ENTMQMAAS-871",
        "name": "Create OpenShift template for IoT components",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 2.4,
          "database": 2.56,
          "devops": 3.12,
          "ai_ml": 2.66,
          "testing": 1.9,
          "issue_tracking": 2.57
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12779326,
        "code": "ENTMQMAAS-874",
        "name": "Create IoT operator stub",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12779330,
        "code": "ENTMQMAAS-875",
        "name": "Implement IoT Operator for telemetry",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12779565,
        "code": "ENTMQMAAS-878",
        "name": "Docs: Split out content into three guides",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12779567,
        "code": "ENTMQMAAS-879",
        "name": "Docs: add content about \\\"user roles\\\"",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12779977,
        "code": "ENTMQMAAS-885",
        "name": "[#1808] : Add more information to cli output",
        "preceedingTasks": [
          "ENTMQMAAS-792",
          "ENTMQMAAS-1246",
          "ENTMQMAAS-942",
          "ENTMQMAAS-868"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12779996,
        "code": "ENTMQMAAS-886",
        "name": "[#2003] : Standardize on UTC date/time stamps in logs.",
        "preceedingTasks": [
          "ENTMQMAAS-885"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12780177,
        "code": "ENTMQMAAS-892",
        "name": "[#2006] : AddressSpacePlan with invalid infra config definition accepted",
        "preceedingTasks": [
          "ENTMQMAAS-886"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12780181,
        "code": "ENTMQMAAS-895",
        "name": "Separate out the broker plugin from the broker image upstream, to match the productized images",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12780183,
        "code": "ENTMQMAAS-896",
        "name": "[#2008] : Add address health and metrics",
        "preceedingTasks": [
          "ENTMQMAAS-892"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12780188,
        "code": "ENTMQMAAS-898",
        "name": "[#2000] : Network policies for address spaces",
        "preceedingTasks": [
          "ENTMQMAAS-896"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12780198,
        "code": "ENTMQMAAS-899",
        "name": "Performance testing",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12780453,
        "code": "ENTMQMAAS-901",
        "name": "Docs: add uninstall procedure to downstream master.adoc",
        "preceedingTasks": [
          "ENTMQMAAS-2096",
          "ENTMQMAAS-879"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12782899,
        "code": "ENTMQMAAS-904",
        "name": "Implement the Hono Tenant API backed by CRDs",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12783274,
        "code": "ENTMQMAAS-922",
        "name": "[#2100] : Pooled addresses are removed in scale down process",
        "preceedingTasks": [
          "ENTMQMAAS-898"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12784683,
        "code": "ENTMQMAAS-923",
        "name": "Docs: Change ref-retrieving-address-space-information.adoc from bulleted list to a table",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.73,
          "frontend": 2.37,
          "database": 2.22,
          "devops": 2.81,
          "ai_ml": 2.28,
          "testing": 2.41,
          "issue_tracking": 3.05
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12784684,
        "code": "ENTMQMAAS-924",
        "name": "Docs: improve Console docs",
        "preceedingTasks": [
          "ENTMQMAAS-1498",
          "ENTMQMAAS-901"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12784690,
        "code": "ENTMQMAAS-925",
        "name": "Docs: Change example and Add note to 2.1.5. Creating users using the command line procedure",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12784792,
        "code": "ENTMQMAAS-927",
        "name": "[#2126] : Support changing of queue address plans",
        "preceedingTasks": [
          "ENTMQMAAS-922"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12784864,
        "code": "ENTMQMAAS-928",
        "name": "[#2128] : Create tests/pipeline for testing network policies",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12784884,
        "code": "ENTMQMAAS-929",
        "name": "[#2054] : Allow MessagingUsers to be created from service accounts",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12786137,
        "code": "ENTMQMAAS-931",
        "name": "[#2155] : standardinfraconfig addressFullPolicy not respected",
        "preceedingTasks": [
          "ENTMQMAAS-841",
          "ENTMQMAAS-923"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.73,
          "frontend": 2.37,
          "database": 2.22,
          "devops": 2.81,
          "ai_ml": 2.28,
          "testing": 2.41,
          "issue_tracking": 3.05
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12786353,
        "code": "ENTMQMAAS-932",
        "name": "Docs: Include AMQ Online address space diagrams",
        "preceedingTasks": [
          "ENTMQMAAS-924"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12786359,
        "code": "ENTMQMAAS-933",
        "name": "[1.0 GA] check prod documentation",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12786819,
        "code": "ENTMQMAAS-935",
        "name": "Docs: fix Managing address spaces and managing addresses assemblies",
        "preceedingTasks": [
          "ENTMQMAAS-932"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12787569,
        "code": "ENTMQMAAS-936",
        "name": "Docs: change product version number",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12787930,
        "code": "ENTMQMAAS-937",
        "name": "Docs: remove `none` auth service from downstream docs",
        "preceedingTasks": [
          "ENTMQMAAS-931"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.73,
          "frontend": 2.37,
          "database": 2.22,
          "devops": 2.81,
          "ai_ml": 2.28,
          "testing": 2.41,
          "issue_tracking": 3.05
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12787946,
        "code": "ENTMQMAAS-938",
        "name": "Docs: add instructions about how to download the OpenShift client tools",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12787947,
        "code": "ENTMQMAAS-939",
        "name": "Docs: QE review fixes",
        "preceedingTasks": [
          "ENTMQMAAS-937"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.73,
          "frontend": 2.37,
          "database": 2.22,
          "devops": 2.81,
          "ai_ml": 2.28,
          "testing": 2.41,
          "issue_tracking": 3.05
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12787950,
        "code": "ENTMQMAAS-940",
        "name": "Docs: fix subject/verb disagreement",
        "preceedingTasks": [
          "ENTMQMAAS-939"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.73,
          "frontend": 2.37,
          "database": 2.22,
          "devops": 2.81,
          "ai_ml": 2.28,
          "testing": 2.41,
          "issue_tracking": 3.05
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12788161,
        "code": "ENTMQMAAS-941",
        "name": "Docs: Fix missing endif in procedure file",
        "preceedingTasks": [
          "ENTMQMAAS-2499",
          "ENTMQMAAS-1510",
          "ENTMQMAAS-938"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12788413,
        "code": "ENTMQMAAS-942",
        "name": "Missing example on how to handle certs for AMQ Online",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12788682,
        "code": "ENTMQMAAS-943",
        "name": "Docs: add a reference table for Infra Configs",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12788891,
        "code": "ENTMQMAAS-944",
        "name": "Docs: Fix refs to alpha in two yaml files",
        "preceedingTasks": [
          "ENTMQMAAS-940"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.73,
          "frontend": 2.37,
          "database": 2.22,
          "devops": 2.81,
          "ai_ml": 2.28,
          "testing": 2.41,
          "issue_tracking": 3.05
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12789158,
        "code": "ENTMQMAAS-946",
        "name": "Docs: improve wording for queue concept file",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12789649,
        "code": "ENTMQMAAS-950",
        "name": "[#2270] : [Standard] Large Subscription to extra Large topic gets stuck in pending",
        "preceedingTasks": [
          "ENTMQMAAS-965",
          "ENTMQMAAS-356",
          "ENTMQMAAS-895"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12789874,
        "code": "ENTMQMAAS-952",
        "name": "Docs: Change download file name",
        "preceedingTasks": [
          "ENTMQMAAS-941"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12790055,
        "code": "ENTMQMAAS-956",
        "name": "Incorrect kube-metrics registry image",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12790088,
        "code": "ENTMQMAAS-957",
        "name": "Docs: Remove UUID from template examples",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12790132,
        "code": "ENTMQMAAS-958",
        "name": "[#2288] : Suppport deployment via operator lifecycle manager",
        "preceedingTasks": [
          "ENTMQMAAS-927"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12790133,
        "code": "ENTMQMAAS-959",
        "name": "[#2289] : Design - Simplify installing and referencing authentication services",
        "preceedingTasks": [
          "ENTMQMAAS-958"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12790171,
        "code": "ENTMQMAAS-962",
        "name": "Set correct version of infra configs",
        "preceedingTasks": [
          "ENTMQMAAS-959"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12790174,
        "code": "ENTMQMAAS-963",
        "name": "Allow messaginguser API to work with standard authservice disabled",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12790175,
        "code": "ENTMQMAAS-964",
        "name": "[#2272] : Address isReady=true when in phase Pending",
        "preceedingTasks": [
          "ENTMQMAAS-2317",
          "ENTMQMAAS-963"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12790176,
        "code": "ENTMQMAAS-965",
        "name": "[#2303] : Fix #2157: Reduce logging verbosity from the broker",
        "preceedingTasks": [
          "ENTMQMAAS-925",
          "ENTMQMAAS-347",
          "ENTMQMAAS-956"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12790191,
        "code": "ENTMQMAAS-967",
        "name": "[doc] examples from doc does not work when I copy them to terminal",
        "preceedingTasks": [
          "ENTMQMAAS-718",
          "ENTMQMAAS-414",
          "ENTMQMAAS-1010",
          "ENTMQMAAS-943"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12790193,
        "code": "ENTMQMAAS-969",
        "name": "[test] test for ENTMQMAAS-966",
        "preceedingTasks": [
          "ENTMQMAAS-967"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12790196,
        "code": "ENTMQMAAS-971",
        "name": "[test] test for ENTMQMAAS-950",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12790209,
        "code": "ENTMQMAAS-973",
        "name": "Docs: add information about resources",
        "preceedingTasks": [
          "ENTMQMAAS-1575",
          "ENTMQMAAS-2322",
          "ENTMQMAAS-957"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12790213,
        "code": "ENTMQMAAS-974",
        "name": "Docs: Add step about changing to the infra namespace to prometheus, kube-state-metrics, grafana, alerts procedure",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12790223,
        "code": "ENTMQMAAS-975",
        "name": "Docs: Add external authentication example (LDAP)",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12790229,
        "code": "ENTMQMAAS-977",
        "name": "Design consolidated console architecture",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12790230,
        "code": "ENTMQMAAS-978",
        "name": "Design for Address space bridging",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12790246,
        "code": "ENTMQMAAS-982",
        "name": "[#2304] : Queue behavior when subscribing to exact same sub-topic",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12790535,
        "code": "ENTMQMAAS-988",
        "name": "Docs: Issue with address auto-create in broker; document workaround and examples",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12790689,
        "code": "ENTMQMAAS-991",
        "name": "Docs: issue 2310 upstream",
        "preceedingTasks": [
          "ENTMQMAAS-863",
          "ENTMQMAAS-971"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12791163,
        "code": "ENTMQMAAS-992",
        "name": "Docs: how to restrict address spaces to use source for identity/authentication from a restricted list",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12791281,
        "code": "ENTMQMAAS-993",
        "name": "Docs: How to use a single source for authorization configuration for all address spaces",
        "preceedingTasks": [
          "ENTMQMAAS-2005",
          "ENTMQMAAS-992"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12791283,
        "code": "ENTMQMAAS-994",
        "name": "Docs: How to allow address spaces to manage their own authorization",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12791285,
        "code": "ENTMQMAAS-995",
        "name": "Console Docs: View for all address spaces so user can monitor on a single screen",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12791287,
        "code": "ENTMQMAAS-996",
        "name": "Docs: How to create an address which, when sent forwards the message to an address in a different address space within the same system",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12791289,
        "code": "ENTMQMAAS-997",
        "name": "Docs: How to create an address that, when received from, fetches messages from an address in a different address space within the same system",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12791358,
        "code": "ENTMQMAAS-999",
        "name": "Docs: For a single address delete all stored messages",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12792499,
        "code": "ENTMQMAAS-1002",
        "name": "Console help page has broken links",
        "preceedingTasks": [
          "ENTMQMAAS-2438",
          "ENTMQMAAS-2329",
          "ENTMQMAAS-1682",
          "ENTMQMAAS-999"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12793367,
        "code": "ENTMQMAAS-1005",
        "name": "Create Kubernetes compatible deployment",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12794496,
        "code": "ENTMQMAAS-1006",
        "name": "[#2366] : Responses to Agent's management requests fail if Broker has exceeded configured global-max-size",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12795007,
        "code": "ENTMQMAAS-1009",
        "name": "[console] Create integrated console header",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12795015,
        "code": "ENTMQMAAS-1010",
        "name": "[console] Authenticate against openshift",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12795020,
        "code": "ENTMQMAAS-1007",
        "name": "[console] Create an amq online address space",
        "preceedingTasks": [
          "ENTMQMAAS-991",
          "ENTMQMAAS-1009"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12795023,
        "code": "ENTMQMAAS-1008",
        "name": "[console] List all created Instances",
        "preceedingTasks": [
          "ENTMQMAAS-1007"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12795029,
        "code": "ENTMQMAAS-1011",
        "name": "Write initial set of system tests for IoT components",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12795030,
        "code": "ENTMQMAAS-1012",
        "name": "PoC based on Infinispan",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12795053,
        "code": "ENTMQMAAS-1019",
        "name": "Implement resources for creating and referencing auth services",
        "preceedingTasks": [
          "ENTMQMAAS-978"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12795057,
        "code": "ENTMQMAAS-1020",
        "name": "Submit enmasse OLM package to operator hub",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12795084,
        "code": "ENTMQMAAS-1022",
        "name": "respin images to include the systemd CVE-2019-6454 fix from RHSA-2019:0368",
        "preceedingTasks": [
          "ENTMQMAAS-864",
          "ENTMQMAAS-994",
          "ENTMQMAAS-1008"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12795089,
        "code": "ENTMQMAAS-1023",
        "name": "[console] Create pattern fly 4 \\\"hello world app\\\" (Go) in EnMasse (includes build/image/deployment etc)",
        "preceedingTasks": [
          "ENTMQMAAS-1022"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12795092,
        "code": "ENTMQMAAS-1026",
        "name": "[Console] Modify workflow",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12795094,
        "code": "ENTMQMAAS-1028",
        "name": "[console] API Create console-server app go (includes build/images/deployment)",
        "preceedingTasks": [
          "ENTMQMAAS-450",
          "ENTMQMAAS-459",
          "ENTMQMAAS-1026"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12795103,
        "code": "ENTMQMAAS-1033",
        "name": "[console] Superflicial reskin of existing console (for PF4 look and feel only)",
        "preceedingTasks": [
          "ENTMQMAAS-1115",
          "ENTMQMAAS-1028"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12795106,
        "code": "ENTMQMAAS-1034",
        "name": "[console] Delete workflow",
        "preceedingTasks": [
          "ENTMQMAAS-1033"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12795411,
        "code": "ENTMQMAAS-1040",
        "name": "[systemtest] Test for ENTMQMAAS-1006",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12795842,
        "code": "ENTMQMAAS-1041",
        "name": "Docs: fix two broken links",
        "preceedingTasks": [
          "ENTMQMAAS-1002"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12797519,
        "code": "ENTMQMAAS-1043",
        "name": "respin images to include fixes for cve-2018-9568 RHSA-2019:0512",
        "preceedingTasks": [
          "ENTMQMAAS-458",
          "ENTMQMAAS-452",
          "ENTMQMAAS-1174",
          "ENTMQMAAS-1034"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12798666,
        "code": "ENTMQMAAS-1048",
        "name": "Release 0.27.0",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12798700,
        "code": "ENTMQMAAS-1056",
        "name": "Updates to Router 1.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12798702,
        "code": "ENTMQMAAS-1058",
        "name": "Docs: 1.1 Release notes",
        "preceedingTasks": [
          "ENTMQMAAS-1041"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12798792,
        "code": "ENTMQMAAS-1059",
        "name": "Docs: OLM installation",
        "preceedingTasks": [
          "ENTMQMAAS-1058"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12801635,
        "code": "ENTMQMAAS-1081",
        "name": "Docs: Add IoT docs to Evaluating guide (Tech Preview)",
        "preceedingTasks": [
          "ENTMQMAAS-1104",
          "ENTMQMAAS-995"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12802174,
        "code": "ENTMQMAAS-1083",
        "name": "Docs: Installing using operator catalog",
        "preceedingTasks": [
          "ENTMQMAAS-2625",
          "ENTMQMAAS-1059"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12802814,
        "code": "ENTMQMAAS-1084",
        "name": "Docs: replace downstream Console image",
        "preceedingTasks": [
          "ENTMQMAAS-1043"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12803011,
        "code": "ENTMQMAAS-1086",
        "name": "Docs: Console concept information",
        "preceedingTasks": [
          "ENTMQMAAS-1083"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12803054,
        "code": "ENTMQMAAS-1103",
        "name": "Docs: new downstream-only installation assembly",
        "preceedingTasks": [
          "ENTMQMAAS-2031",
          "ENTMQMAAS-1056"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12803380,
        "code": "ENTMQMAAS-1104",
        "name": "Remove Beta Support Statement",
        "preceedingTasks": [
          "ENTMQMAAS-1023"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.26,
          "frontend": 2.36,
          "database": 2.7,
          "devops": 3.54,
          "ai_ml": 2.1,
          "testing": 1.92,
          "issue_tracking": 3.78
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12803437,
        "code": "ENTMQMAAS-1105",
        "name": "Remove Beta Support Statement",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.26,
          "frontend": 2.36,
          "database": 2.7,
          "devops": 3.54,
          "ai_ml": 2.1,
          "testing": 1.92,
          "issue_tracking": 3.78
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12804158,
        "code": "ENTMQMAAS-1109",
        "name": "Service export option for endpoint information is not documented",
        "preceedingTasks": [
          "ENTMQMAAS-1086"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12804386,
        "code": "ENTMQMAAS-1115",
        "name": "amq-online-1-console-init license metadata in incorrect location",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12804460,
        "code": "ENTMQMAAS-1116",
        "name": "Use Broker 7.2.4 with Online 1.1.0",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12805194,
        "code": "ENTMQMAAS-1118",
        "name": "Docs: Fix link at beginning of Using the Red Hat AMQ Console",
        "preceedingTasks": [
          "ENTMQMAAS-1109"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12805232,
        "code": "ENTMQMAAS-1119",
        "name": "Console redeploys after first addressspace is created",
        "preceedingTasks": [
          "ENTMQMAAS-463",
          "ENTMQMAAS-448",
          "ENTMQMAAS-1084"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12805355,
        "code": "ENTMQMAAS-1120",
        "name": "Docs: Crop bottom of Console image",
        "preceedingTasks": [
          "ENTMQMAAS-1118"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12805403,
        "code": "ENTMQMAAS-1121",
        "name": "Missing logo in the address space console (downstream)",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12805623,
        "code": "ENTMQMAAS-1124",
        "name": "Docs: Missing command for applying example roles",
        "preceedingTasks": [
          "ENTMQMAAS-1120"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12805874,
        "code": "ENTMQMAAS-1126",
        "name": "[#2778] : Global console create address space screen uses wrong label",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12805879,
        "code": "ENTMQMAAS-1128",
        "name": "[#2763] : Web Console in invalid state when empty",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12805975,
        "code": "ENTMQMAAS-1129",
        "name": "Docs: New upgrading step needed for checking router pods",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12806006,
        "code": "ENTMQMAAS-1130",
        "name": "Docs: Missing IoT section",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12806058,
        "code": "ENTMQMAAS-1131",
        "name": "[#2779] : Namespace of address spaces and addresses is wrong in Grafana",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.33
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12806151,
        "code": "ENTMQMAAS-1135",
        "name": "Docs: IoT bug fixes to docs",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12806992,
        "code": "ENTMQMAAS-1139",
        "name": "Docs: Fix code rendering issue for Python client example",
        "preceedingTasks": [
          "ENTMQMAAS-870",
          "ENTMQMAAS-1011"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12807712,
        "code": "ENTMQMAAS-1144",
        "name": "Change productized images to use ubi7:7-released as base image",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12807978,
        "code": "ENTMQMAAS-1145",
        "name": "Docs: Define {ProductMonitoringNamespace} in downstream docs",
        "preceedingTasks": [
          "ENTMQMAAS-2549",
          "ENTMQMAAS-1135"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12808000,
        "code": "ENTMQMAAS-1146",
        "name": "Doc: Upgrading procedures",
        "preceedingTasks": [
          "ENTMQMAAS-1145"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12808019,
        "code": "ENTMQMAAS-1148",
        "name": "Docs: Fix misspelling/minor edits in Monitoring procedure docs",
        "preceedingTasks": [
          "ENTMQMAAS-1146"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12808779,
        "code": "ENTMQMAAS-1166",
        "name": "Docs: Remove Broker 7.2.4 note from RNs",
        "preceedingTasks": [
          "ENTMQMAAS-1148"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12808781,
        "code": "ENTMQMAAS-1167",
        "name": "Docs: document known issues and one workaround for 1.1.1 RNs",
        "preceedingTasks": [
          "ENTMQMAAS-1166"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12808798,
        "code": "ENTMQMAAS-1168",
        "name": "[#2843] : Upgrade of pre 1.1 authentication services not properly handled within the authentication service operator",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12808812,
        "code": "ENTMQMAAS-1170",
        "name": "Broker statefulsets not configured to use persistent volume",
        "preceedingTasks": [
          "ENTMQMAAS-1221",
          "ENTMQMAAS-735",
          "ENTMQMAAS-1144"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12808854,
        "code": "ENTMQMAAS-1174",
        "name": "Create test ensuring message persistence",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12809771,
        "code": "ENTMQMAAS-1185",
        "name": "[#2823] : Addresses stick in unready state with \\\"Unexpected token Q in JSON at position 0\\\" reported in agent log",
        "preceedingTasks": [
          "ENTMQMAAS-1168"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12809968,
        "code": "ENTMQMAAS-1186",
        "name": "Docs: Link to Red Hat Container Catalog no longer works",
        "preceedingTasks": [
          "ENTMQMAAS-1167"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12810210,
        "code": "ENTMQMAAS-1188",
        "name": "Docs: YAML install proc missing a step",
        "preceedingTasks": [
          "ENTMQMAAS-1186"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12810592,
        "code": "ENTMQMAAS-1199",
        "name": "[#2865] : Upgraded addressspaces are not shown active in Console",
        "preceedingTasks": [
          "ENTMQMAAS-633",
          "ENTMQMAAS-1185"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12810593,
        "code": "ENTMQMAAS-1200",
        "name": "[#2868] : Upgraded addressspaces do not pick up new image or deployment configurations",
        "preceedingTasks": [
          "ENTMQMAAS-1121",
          "ENTMQMAAS-1199"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12810660,
        "code": "ENTMQMAAS-1201",
        "name": "missing messagingusers api resource",
        "preceedingTasks": [
          "ENTMQMAAS-1200"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12810993,
        "code": "ENTMQMAAS-1202",
        "name": "License file required in console-httpd",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12811053,
        "code": "ENTMQMAAS-1203",
        "name": "Test AMQ Online 1.2.0 against OCP 4.1",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12811191,
        "code": "ENTMQMAAS-1204",
        "name": "Upgrade from 1.0.1 -> 1.1.1 does not upgrade multiple broker for standard address space",
        "preceedingTasks": [
          "ENTMQMAAS-1226",
          "ENTMQMAAS-1128",
          "ENTMQMAAS-638",
          "ENTMQMAAS-1202"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12811192,
        "code": "ENTMQMAAS-1205",
        "name": "Upgrade from 1.0.1 -> 1.1.1 - standard auth service does not start",
        "preceedingTasks": [
          "ENTMQMAAS-1204"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12813013,
        "code": "ENTMQMAAS-1208",
        "name": "Productize release candidate & handoff to QE",
        "preceedingTasks": [
          "ENTMQMAAS-1205"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12813237,
        "code": "ENTMQMAAS-1219",
        "name": "Docs: RNs: Document workaround for loss of messages upon pod restart",
        "preceedingTasks": [
          "ENTMQMAAS-658",
          "ENTMQMAAS-1203"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12813238,
        "code": "ENTMQMAAS-1220",
        "name": "Docs: remove release template upgrade procedure",
        "preceedingTasks": [
          "ENTMQMAAS-1188"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12813828,
        "code": "ENTMQMAAS-1221",
        "name": "[Test Case] Persistence of durable topic subscriptions",
        "preceedingTasks": [
          "ENTMQMAAS-734",
          "ENTMQMAAS-1219"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12814225,
        "code": "ENTMQMAAS-1226",
        "name": "Docs: add link to Support article in RNs",
        "preceedingTasks": [
          "ENTMQMAAS-1126",
          "ENTMQMAAS-1201",
          "ENTMQMAAS-636",
          "ENTMQMAAS-1139",
          "ENTMQMAAS-842"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.77,
          "frontend": 2.46,
          "database": 3.22,
          "devops": 3.59,
          "ai_ml": 2.37,
          "testing": 1.4,
          "issue_tracking": 3.48
        },
        "tags": [
          "backend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12814528,
        "code": "ENTMQMAAS-1229",
        "name": "Infinispan transitive dependencies not productised.",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12814533,
        "code": "ENTMQMAAS-1232",
        "name": "[#2855] : AddressSpace console does not load with custom endpoint",
        "preceedingTasks": [
          "ENTMQMAAS-1208"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12814538,
        "code": "ENTMQMAAS-1233",
        "name": "Docs: Update article URL for latest release zip",
        "preceedingTasks": [
          "ENTMQMAAS-1220"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12814614,
        "code": "ENTMQMAAS-1234",
        "name": "Docs: Fix wording in Configuring an address space certificate provider",
        "preceedingTasks": [
          "ENTMQMAAS-1233"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12815384,
        "code": "ENTMQMAAS-1246",
        "name": "Docs: Uninstalling AMQ Online that has been installed using OLM",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12815569,
        "code": "ENTMQMAAS-1247",
        "name": "Docs: Upgrading from 1.2 to 1.3 (OLM)",
        "preceedingTasks": [
          "ENTMQMAAS-1234"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12815570,
        "code": "ENTMQMAAS-1248",
        "name": "Docs: editing address space using the Console",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12815711,
        "code": "ENTMQMAAS-1249",
        "name": "console dashboard URLS provisioned in 1.0.GA do not work once an upgrade to 1.1.1.GA",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12815744,
        "code": "ENTMQMAAS-1250",
        "name": "Docs: Need latest AMQ Online console screenshot",
        "preceedingTasks": [
          "ENTMQMAAS-2627",
          "ENTMQMAAS-1247"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12815810,
        "code": "ENTMQMAAS-1252",
        "name": "Release 0.28.2 into Operator Hub",
        "preceedingTasks": [
          "ENTMQMAAS-1476",
          "ENTMQMAAS-1249"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12815841,
        "code": "ENTMQMAAS-1253",
        "name": "Brokers fail when installed on OCP 4.1 in openshift-operators namespace",
        "preceedingTasks": [
          "ENTMQMAAS-1504",
          "ENTMQMAAS-1252"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12815960,
        "code": "ENTMQMAAS-1254",
        "name": "Docs: Reorganizing the Configuring AMQ Online chapter",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12816039,
        "code": "ENTMQMAAS-1255",
        "name": "iot-device-registry pod goes into crash loop back-off when installed in openshift-operators (or via OLM)",
        "preceedingTasks": [
          "ENTMQMAAS-1505",
          "ENTMQMAAS-1253"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12816102,
        "code": "ENTMQMAAS-1256",
        "name": "[doc] Broken links in downstream documentation",
        "preceedingTasks": [
          "ENTMQMAAS-667",
          "ENTMQMAAS-1232"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.59,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.77,
          "ai_ml": 2.06,
          "testing": 1.64,
          "issue_tracking": 3.32
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12816557,
        "code": "ENTMQMAAS-1257",
        "name": "Docs: Investigate best way to fix a broken link when a module is shared between two guides",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.59,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.77,
          "ai_ml": 2.06,
          "testing": 1.64,
          "issue_tracking": 3.32
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12816761,
        "code": "ENTMQMAAS-1259",
        "name": "Docs: improve wording in infrastructure config procedure file",
        "preceedingTasks": [
          "ENTMQMAAS-1250"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12817250,
        "code": "ENTMQMAAS-1273",
        "name": "Docs: Fix wording in Adding an address using the Console procedure",
        "preceedingTasks": [
          "ENTMQMAAS-1259"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12817452,
        "code": "ENTMQMAAS-1274",
        "name": "Docs: Edit RNs text for 1.1.x",
        "preceedingTasks": [
          "ENTMQMAAS-1273"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12817608,
        "code": "ENTMQMAAS-1275",
        "name": "Docs: how to uninstall {ProductName} using Ansible",
        "preceedingTasks": [
          "ENTMQMAAS-1274"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12818122,
        "code": "ENTMQMAAS-1277",
        "name": "Docs: 1.2 release notes",
        "preceedingTasks": [
          "ENTMQMAAS-1275"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12818466,
        "code": "ENTMQMAAS-1278",
        "name": "Docs: Sweep for \\\"namespace\\\" in OpenShift docs",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12818782,
        "code": "ENTMQMAAS-1280",
        "name": "Docs: add a sentence to Upgrading section",
        "preceedingTasks": [
          "ENTMQMAAS-2723",
          "ENTMQMAAS-2364",
          "ENTMQMAAS-2719",
          "ENTMQMAAS-2644",
          "ENTMQMAAS-1278"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12819645,
        "code": "ENTMQMAAS-1301",
        "name": "Docs: Upgrading section: Need to adjust some version numbers in workaround text for 1.2.0",
        "preceedingTasks": [
          "ENTMQMAAS-1255"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12819648,
        "code": "ENTMQMAAS-1302",
        "name": "Docs: Fix uninstalling assembly so Ansible option is OpenShift only",
        "preceedingTasks": [
          "ENTMQMAAS-1280"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12820007,
        "code": "ENTMQMAAS-1304",
        "name": "Docs: fix formatting on OLM installation example code",
        "preceedingTasks": [
          "ENTMQMAAS-1302"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12820462,
        "code": "ENTMQMAAS-1308",
        "name": "Docs: 1.2 RNs: Fix ambiguity around MQTT on standard address space in TP",
        "preceedingTasks": [
          "ENTMQMAAS-1304"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12820602,
        "code": "ENTMQMAAS-1309",
        "name": "Upgrade quay.io/integreatly/application-monitoring-operator to new release",
        "preceedingTasks": [
          "ENTMQMAAS-1103"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12820842,
        "code": "ENTMQMAAS-1310",
        "name": "Docs: Spelling error in YAML file",
        "preceedingTasks": [
          "ENTMQMAAS-1308"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12820882,
        "code": "ENTMQMAAS-1311",
        "name": "Docs: Titles are switched on \\\"Address space example exposing endpoints externally\\\" subsections",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12821539,
        "code": "ENTMQMAAS-1325",
        "name": "Docs: How to watch OpenShift Resources using the Kubernetes API",
        "preceedingTasks": [
          "ENTMQMAAS-1310"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12822006,
        "code": "ENTMQMAAS-1329",
        "name": "Device registry credentials operations should not handout secrets",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12822430,
        "code": "ENTMQMAAS-1338",
        "name": "Docs: add IoT introductory concept info",
        "preceedingTasks": [
          "ENTMQMAAS-1325"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12822433,
        "code": "ENTMQMAAS-1339",
        "name": "Docs: Document how to do external auth service overrides",
        "preceedingTasks": [
          "ENTMQMAAS-1338"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12823152,
        "code": "ENTMQMAAS-1341",
        "name": "Docs: How to override the default value for the probe timeout on the broker",
        "preceedingTasks": [
          "ENTMQMAAS-1339"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12823615,
        "code": "ENTMQMAAS-1342",
        "name": "Performance of creating addresses is degraded after creating 7-8k addresses",
        "preceedingTasks": [
          "ENTMQMAAS-1309"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12824213,
        "code": "ENTMQMAAS-1343",
        "name": "Docs: Allow override of certs for external auth",
        "preceedingTasks": [
          "ENTMQMAAS-2737",
          "ENTMQMAAS-1341"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12824818,
        "code": "ENTMQMAAS-1345",
        "name": "Sometimes the MessagingUser resource never becomes available to client-go",
        "preceedingTasks": [
          "ENTMQMAAS-1342"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12824820,
        "code": "ENTMQMAAS-1346",
        "name": "Addresses become stuck while creating",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12825085,
        "code": "ENTMQMAAS-1347",
        "name": "Broker address space should indicate STOMP protocol is supported",
        "preceedingTasks": [
          "ENTMQMAAS-1343"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12825329,
        "code": "ENTMQMAAS-1349",
        "name": "[#3133] : enmasse-operator goes OOM in a system with many addresses",
        "preceedingTasks": [
          "ENTMQMAAS-2421",
          "ENTMQMAAS-1131",
          "ENTMQMAAS-1346"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12825642,
        "code": "ENTMQMAAS-1351",
        "name": "Performance of creating addresses is degraded after creating 7-8k addresses on 1.2.1",
        "preceedingTasks": [
          "ENTMQMAAS-1349"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12826381,
        "code": "ENTMQMAAS-1353",
        "name": "[#3157] : Add support for per-address limits in broker",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12826382,
        "code": "ENTMQMAAS-1354",
        "name": "[#3158] : Setting per-address max TTL",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12827647,
        "code": "ENTMQMAAS-1367",
        "name": "Script for performing restart of EnMasse for respins and hotfixes",
        "preceedingTasks": [
          "ENTMQMAAS-1351"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12827968,
        "code": "ENTMQMAAS-1368",
        "name": "Docs: no upgrade for IoT in 1.3",
        "preceedingTasks": [
          "ENTMQMAAS-1347"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12828356,
        "code": "ENTMQMAAS-1369",
        "name": "Docs: Update RNs for 1.2.2",
        "preceedingTasks": [
          "ENTMQMAAS-2365",
          "ENTMQMAAS-1368"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12829071,
        "code": "ENTMQMAAS-1371",
        "name": "Allow configuring the SSL provider for broker connectors",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12829360,
        "code": "ENTMQMAAS-1372",
        "name": "[#3221] : Address disappear when created immediately after address space",
        "preceedingTasks": [
          "ENTMQMAAS-1371"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12829435,
        "code": "ENTMQMAAS-1373",
        "name": "[#3150] : Add support for external bridges",
        "preceedingTasks": [
          "ENTMQMAAS-869",
          "ENTMQMAAS-1372"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12830775,
        "code": "ENTMQMAAS-1377",
        "name": "Docs: Update OLM installation docs (install into own namespace)",
        "preceedingTasks": [
          "ENTMQMAAS-1369"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12830978,
        "code": "ENTMQMAAS-1378",
        "name": "Docs: move OLM installation info to Installing guide",
        "preceedingTasks": [
          "ENTMQMAAS-1377"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12831027,
        "code": "ENTMQMAAS-1379",
        "name": "Docs: Change \\\"OpenShift Container Platform\\\" to \\\"OpenShift\\\" in book titles",
        "preceedingTasks": [
          "ENTMQMAAS-2645",
          "ENTMQMAAS-1378"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12831369,
        "code": "ENTMQMAAS-1381",
        "name": "Docs: Remove workaround docs for restarting a router pod",
        "preceedingTasks": [
          "ENTMQMAAS-1379"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12831635,
        "code": "ENTMQMAAS-1384",
        "name": "Docs: 1.3 RNs",
        "preceedingTasks": [
          "ENTMQMAAS-1381"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12831757,
        "code": "ENTMQMAAS-1385",
        "name": "Docs: add DLQ explanation",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12832199,
        "code": "ENTMQMAAS-1387",
        "name": "Docs: Change RNs title to reflect new CCS guidelines",
        "preceedingTasks": [
          "ENTMQMAAS-2676",
          "ENTMQMAAS-1385"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12832563,
        "code": "ENTMQMAAS-1388",
        "name": "Device registry fails to encrypt plain passwords",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12833003,
        "code": "ENTMQMAAS-1390",
        "name": "Docs: Operations procedures docs fixes",
        "preceedingTasks": [
          "ENTMQMAAS-1387"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12833015,
        "code": "ENTMQMAAS-1391",
        "name": "Docs: add IoT diagram to downstream docs",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12834007,
        "code": "ENTMQMAAS-1398",
        "name": "AMQ Console wireframe update based on the customers and PatternFly Team feedback",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 4.24,
          "frontend": 4.26,
          "database": 3.42,
          "devops": 4.3,
          "ai_ml": 3.48,
          "testing": 2.45,
          "issue_tracking": 4.46
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12834952,
        "code": "ENTMQMAAS-1403",
        "name": "Docs: Add sizing guidelines to downstream docs",
        "preceedingTasks": [
          "ENTMQMAAS-1785",
          "ENTMQMAAS-1391"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12834978,
        "code": "ENTMQMAAS-1404",
        "name": "Docs: fix instances of OpenShift 4.x",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835224,
        "code": "ENTMQMAAS-1405",
        "name": "[#3366] : Initial console-graphql component",
        "preceedingTasks": [
          "ENTMQMAAS-1509",
          "ENTMQMAAS-1508",
          "ENTMQMAAS-1301"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835225,
        "code": "ENTMQMAAS-1406",
        "name": "[#3367] : Add a cache for the namespaces",
        "preceedingTasks": [
          "ENTMQMAAS-1405"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835234,
        "code": "ENTMQMAAS-1415",
        "name": "[#3376] : Add pagination/filtering/ordering to all objects",
        "preceedingTasks": [
          "ENTMQMAAS-1406"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835235,
        "code": "ENTMQMAAS-1416",
        "name": "[#3377] : fix missing resourcesManager in olm test",
        "preceedingTasks": [
          "ENTMQMAAS-1511",
          "ENTMQMAAS-1415",
          "ENTMQMAAS-1525",
          "ENTMQMAAS-1254"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835236,
        "code": "ENTMQMAAS-1417",
        "name": "[#3378] : Add mutation querry – createAddress",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835237,
        "code": "ENTMQMAAS-1418",
        "name": "[#3379] : Add mutation query – deleteAddress",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835238,
        "code": "ENTMQMAAS-1419",
        "name": "[#3380] : Add mutation query – patchAddress",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835239,
        "code": "ENTMQMAAS-1420",
        "name": "[#3381] : Add mutation query for purge address",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835240,
        "code": "ENTMQMAAS-1421",
        "name": "[#3382] : Add mutation querry – createAddressSpace",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835241,
        "code": "ENTMQMAAS-1422",
        "name": "[#3383] : Add mutation query – deleteAddressSpace",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835242,
        "code": "ENTMQMAAS-1423",
        "name": "[#3384] : Add mutation query – patchAddressSpace",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835244,
        "code": "ENTMQMAAS-1425",
        "name": "[#3386] : Add graphQL query for downloading messaging cert",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835245,
        "code": "ENTMQMAAS-1426",
        "name": "[#3387] : Add graphQL query for commandline cmds",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835618,
        "code": "ENTMQMAAS-1456",
        "name": "Docs: mimic downstream book structure in the upstream",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835626,
        "code": "ENTMQMAAS-1457",
        "name": "Update infinispan dependencies to most recent version",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835773,
        "code": "ENTMQMAAS-1470",
        "name": "Create scalability test for device registry",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835774,
        "code": "ENTMQMAAS-1471",
        "name": "Create production-ready deployment for Infinispan",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835776,
        "code": "ENTMQMAAS-1472",
        "name": "Docs: add OLM install known issue and workaround to RNs",
        "preceedingTasks": [
          "ENTMQMAAS-1867",
          "ENTMQMAAS-2703",
          "ENTMQMAAS-2752",
          "ENTMQMAAS-1404"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835779,
        "code": "ENTMQMAAS-1473",
        "name": "Unable to assign multiple IoT projects to a single address space",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835784,
        "code": "ENTMQMAAS-1476",
        "name": "Define new IoT documentation structure",
        "preceedingTasks": [
          "ENTMQMAAS-962"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 2.4,
          "database": 2.56,
          "devops": 3.12,
          "ai_ml": 2.66,
          "testing": 1.9,
          "issue_tracking": 2.57
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835796,
        "code": "ENTMQMAAS-1480",
        "name": "Docs: update download zip attribute for 1.3",
        "preceedingTasks": [
          "ENTMQMAAS-1472"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12835810,
        "code": "ENTMQMAAS-1481",
        "name": "[#3357] : Expose counter metrics for request status codes in api-server",
        "preceedingTasks": [
          "ENTMQMAAS-1373"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12836099,
        "code": "ENTMQMAAS-1482",
        "name": "Docs: Replace standard and brokered address space diagrams",
        "preceedingTasks": [
          "ENTMQMAAS-1480"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12836299,
        "code": "ENTMQMAAS-1488",
        "name": "Create source bundle",
        "preceedingTasks": [
          "ENTMQMAAS-1553",
          "ENTMQMAAS-1561",
          "ENTMQMAAS-1562",
          "ENTMQMAAS-1420"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12836361,
        "code": "ENTMQMAAS-1497",
        "name": "[#3407] : Use CRD instead of api-server for AddressSpace, Address",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12836362,
        "code": "ENTMQMAAS-1498",
        "name": "[#3416] : Create design proposal for shared infrastructure",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12836419,
        "code": "ENTMQMAAS-1499",
        "name": "[#3407] : Use CRD instead of api-server for MessagingUser",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12836423,
        "code": "ENTMQMAAS-1500",
        "name": "[#3419] : Implement per user view of the console-cache",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12836633,
        "code": "ENTMQMAAS-1501",
        "name": "Productise fabric8 kubernetes-client 4.6.4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12836873,
        "code": "ENTMQMAAS-1502",
        "name": "[#3428] : Create service monitor for tenant metrics",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.33
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12836874,
        "code": "ENTMQMAAS-1503",
        "name": "[#3429] : Create address space failed create/delete metrics",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.33
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12836894,
        "code": "ENTMQMAAS-1504",
        "name": "[#3430] : Toolbar - Console UI",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12836906,
        "code": "ENTMQMAAS-1506",
        "name": "[#3433] : Address Space Detail - Console UI",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12836905,
        "code": "ENTMQMAAS-1505",
        "name": "[#3435] : Addresses List - Console UI",
        "preceedingTasks": [
          "ENTMQMAAS-1506"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12836909,
        "code": "ENTMQMAAS-1509",
        "name": "[#3434] : Connection List - Console UI",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12836908,
        "code": "ENTMQMAAS-1508",
        "name": "[#3436] : Connection Detail Page - Console UI",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12837120,
        "code": "ENTMQMAAS-1510",
        "name": "Consider Vertx 3.8.3.redhat-00001 for 1.4.0",
        "preceedingTasks": [
          "ENTMQMAAS-2118",
          "ENTMQMAAS-1501"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12837226,
        "code": "ENTMQMAAS-1511",
        "name": "Create Command examples and introduce \\\"device applications\\\" section",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 2.4,
          "database": 2.56,
          "devops": 3.12,
          "ai_ml": 2.66,
          "testing": 1.9,
          "issue_tracking": 2.57
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12837919,
        "code": "ENTMQMAAS-1512",
        "name": "Migrate jenkins from rhev to openshift and create casc",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12837920,
        "code": "ENTMQMAAS-1513",
        "name": "Create cpaas QE test pipelines triggered by UMB message",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12838035,
        "code": "ENTMQMAAS-1514",
        "name": "Docs: update Console screenshot",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12838042,
        "code": "ENTMQMAAS-1515",
        "name": "Docs: 1.4 RNs",
        "preceedingTasks": [
          "ENTMQMAAS-1482"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12838272,
        "code": "ENTMQMAAS-1516",
        "name": "Docs: IoT docs additions to service admin and tenant guides",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12838914,
        "code": "ENTMQMAAS-1517",
        "name": "[#4514] Docs: How to extract a certificate for a client",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12838916,
        "code": "ENTMQMAAS-1518",
        "name": "Docs: Address space certificate provider configuration examples",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12839219,
        "code": "ENTMQMAAS-1521",
        "name": "Docs: View on a single screen all the address spaces which I can administer",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12839866,
        "code": "ENTMQMAAS-1522",
        "name": "Performance test cache with large number of addresses/connections/links",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12839918,
        "code": "ENTMQMAAS-1524",
        "name": "[#3484] : Load balance routes based on least connections",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12840057,
        "code": "ENTMQMAAS-1525",
        "name": "[#3513] : component/console - frontend - Create Address Detail Page",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12840058,
        "code": "ENTMQMAAS-1526",
        "name": "[#3514] : component/console - frontend - Add filters and pagination for connection List",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12840059,
        "code": "ENTMQMAAS-1527",
        "name": "[#3515] : component/console - frontend - Enable mutations, filter and pagination to Address Space List",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12840060,
        "code": "ENTMQMAAS-1528",
        "name": "[#3516] : component/console - frontend - Create Addresses and download certificates for Address Space Detail",
        "preceedingTasks": [
          "ENTMQMAAS-1398",
          "ENTMQMAAS-1527"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12840061,
        "code": "ENTMQMAAS-1529",
        "name": "[#3517] : component/console - frontend - Enable Mutation and pagination for Addresses List",
        "preceedingTasks": [
          "ENTMQMAAS-1526"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12840124,
        "code": "ENTMQMAAS-1530",
        "name": "Define IoT Personas",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 2.4,
          "database": 2.56,
          "devops": 3.12,
          "ai_ml": 2.66,
          "testing": 1.9,
          "issue_tracking": 2.57
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12840175,
        "code": "ENTMQMAAS-1532",
        "name": "[OLM] Deploying AMQ Online to a custom namespace fails with security context constraint error",
        "preceedingTasks": [
          "ENTMQMAAS-1628",
          "ENTMQMAAS-1554",
          "ENTMQMAAS-1500"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12841002,
        "code": "ENTMQMAAS-1536",
        "name": "Docs: Document Pods overview",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12841498,
        "code": "ENTMQMAAS-1538",
        "name": "[#3463] : CSV manifest is missing configmap finalizers permission",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12841618,
        "code": "ENTMQMAAS-1540",
        "name": "[#3547] : Network policies not deleted when address space is deleted",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12841715,
        "code": "ENTMQMAAS-1541",
        "name": "Docs: Document metrics and alerts",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12841718,
        "code": "ENTMQMAAS-1542",
        "name": "Docs: remove issue for 1.3.2 RNs",
        "preceedingTasks": [
          "ENTMQMAAS-2361",
          "ENTMQMAAS-1541"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12842314,
        "code": "ENTMQMAAS-1544",
        "name": "AMQ Online displays broken image icon displayed in Operator catalogue in some browsers",
        "preceedingTasks": [
          "ENTMQMAAS-2508",
          "ENTMQMAAS-1540"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12842351,
        "code": "ENTMQMAAS-1545",
        "name": "Docs: Add Tech Preview note to new IoT assemblies downstream",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12842887,
        "code": "ENTMQMAAS-1553",
        "name": "[IoT Design] IoT Competitor Research - Bosch IoT",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.62,
          "frontend": 3.43,
          "database": 3.46,
          "devops": 3.93,
          "ai_ml": 3.98,
          "testing": 2.21,
          "issue_tracking": 3.08
        },
        "tags": [
          "ai_ml",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12842896,
        "code": "ENTMQMAAS-1554",
        "name": "[IoT Design] IoT Competitor Research - Azure IoT",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.52,
          "frontend": 3.34,
          "database": 3.46,
          "devops": 4,
          "ai_ml": 3.99,
          "testing": 2.19,
          "issue_tracking": 3.08
        },
        "tags": [
          "devops",
          "ai_ml"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12842897,
        "code": "ENTMQMAAS-1555",
        "name": "[IoT Design] IoT Competitor Research - IBM IoT",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.62,
          "frontend": 3.43,
          "database": 3.46,
          "devops": 3.93,
          "ai_ml": 3.98,
          "testing": 2.21,
          "issue_tracking": 3.08
        },
        "tags": [
          "ai_ml",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12893780,
        "code": "ENTMQMAAS-1558",
        "name": "[#5203] agent uses deprecated APIs",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12895401,
        "code": "ENTMQMAAS-1560",
        "name": "[#3610] : component/console - frontend - Create filters and actions for AddressList",
        "preceedingTasks": [
          "ENTMQMAAS-1528"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12895402,
        "code": "ENTMQMAAS-1561",
        "name": "[#3611] : component/console - frontend - Implement filters, creation wizard and actions for AddressSpaceList",
        "preceedingTasks": [
          "ENTMQMAAS-1529"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12895403,
        "code": "ENTMQMAAS-1562",
        "name": "[#3612] : component/console - frontend - Implement filters and pagination for AddressDetail component",
        "preceedingTasks": [
          "ENTMQMAAS-1416",
          "ENTMQMAAS-1560"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12895405,
        "code": "ENTMQMAAS-1563",
        "name": "[#3613] : component/console - frontend - Create connection detail components",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12895406,
        "code": "ENTMQMAAS-1564",
        "name": "[#3614] : component/console - frontend - Implement toolbars",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12896440,
        "code": "ENTMQMAAS-1567",
        "name": "[IoT Design] Project List Design",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.52,
          "frontend": 3.34,
          "database": 3.46,
          "devops": 4,
          "ai_ml": 3.99,
          "testing": 2.19,
          "issue_tracking": 3.08
        },
        "tags": [
          "devops",
          "ai_ml"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12896442,
        "code": "ENTMQMAAS-1568",
        "name": "[IoT Design] Project Detail Design",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.62,
          "frontend": 3.43,
          "database": 3.46,
          "devops": 3.93,
          "ai_ml": 3.98,
          "testing": 2.21,
          "issue_tracking": 3.08
        },
        "tags": [
          "ai_ml",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12897426,
        "code": "ENTMQMAAS-1569",
        "name": "Productise hibernate-validator 6.1.0.Final",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12897784,
        "code": "ENTMQMAAS-1572",
        "name": "Browser reload in console results in 404",
        "preceedingTasks": [
          "ENTMQMAAS-1353",
          "ENTMQMAAS-1488",
          "ENTMQMAAS-1530",
          "ENTMQMAAS-1563"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12897793,
        "code": "ENTMQMAAS-1573",
        "name": "Represent temporary topic subscriptions in the address model",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12897811,
        "code": "ENTMQMAAS-1576",
        "name": "[#3637] : Add support for pod disruption budgets",
        "preceedingTasks": [
          "ENTMQMAAS-1544"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12897810,
        "code": "ENTMQMAAS-1575",
        "name": "[#3646] : Configure router anti-affinity by default",
        "preceedingTasks": [
          "ENTMQMAAS-1576"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12897812,
        "code": "ENTMQMAAS-1577",
        "name": "read-only authentication services API for console",
        "preceedingTasks": [
          "ENTMQMAAS-1907",
          "ENTMQMAAS-1917",
          "ENTMQMAAS-1517",
          "ENTMQMAAS-1906",
          "ENTMQMAAS-1684",
          "ENTMQMAAS-1522"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12897817,
        "code": "ENTMQMAAS-1580",
        "name": "Document IoT metrics",
        "preceedingTasks": [
          "ENTMQMAAS-1569"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12897822,
        "code": "ENTMQMAAS-1582",
        "name": "Design and implement JDBC based device registry",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12897823,
        "code": "ENTMQMAAS-1583",
        "name": "Upgrade Hono to 1.0.2",
        "preceedingTasks": [
          "ENTMQMAAS-1514",
          "ENTMQMAAS-1512",
          "ENTMQMAAS-1418",
          "ENTMQMAAS-1532",
          "ENTMQMAAS-1580"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898232,
        "code": "ENTMQMAAS-1584",
        "name": "component/console - frontend - Handle actions for multiple selections in AddressList",
        "preceedingTasks": [
          "ENTMQMAAS-928",
          "ENTMQMAAS-1572",
          "ENTMQMAAS-1564"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898233,
        "code": "ENTMQMAAS-1585",
        "name": "component/console - frontend - Error handling and Error message display",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898235,
        "code": "ENTMQMAAS-1586",
        "name": "component/console - frontend - CreateAddressSpace wizard non-uniform behaviour",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898237,
        "code": "ENTMQMAAS-1587",
        "name": "component/console - frontend - Filter selection displays an empty dropdown item",
        "preceedingTasks": [
          "ENTMQMAAS-1586",
          "ENTMQMAAS-1584"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898238,
        "code": "ENTMQMAAS-1588",
        "name": "component/console - frontend - CreateAddress wizard shows non-uniform behaviour",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898239,
        "code": "ENTMQMAAS-1589",
        "name": "component/console - frontend - On selecting filters, two filter icons appear",
        "preceedingTasks": [
          "ENTMQMAAS-1588"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898240,
        "code": "ENTMQMAAS-1590",
        "name": "component/console - frontend - Update link provided when no addresses are found",
        "preceedingTasks": [
          "ENTMQMAAS-1587"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898242,
        "code": "ENTMQMAAS-1591",
        "name": "component/console - frontend - non-uniform behaviour of ConnectionList and AddressSpaceList",
        "preceedingTasks": [
          "ENTMQMAAS-1646",
          "ENTMQMAAS-1585"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898246,
        "code": "ENTMQMAAS-1592",
        "name": "component/console - frontend - issue in filtering by text",
        "preceedingTasks": [
          "ENTMQMAAS-1417",
          "ENTMQMAAS-1590",
          "ENTMQMAAS-1589"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898252,
        "code": "ENTMQMAAS-1593",
        "name": "[systemtest] create api tests for console backend",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898253,
        "code": "ENTMQMAAS-1594",
        "name": "[systemtest] modify current test to use new console frontend",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898254,
        "code": "ENTMQMAAS-1595",
        "name": "[systemtest] create test for new frontend functionality",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898299,
        "code": "ENTMQMAAS-1596",
        "name": "component/console - frontend - Integrate user profile with server",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898301,
        "code": "ENTMQMAAS-1597",
        "name": "component/console - frontend - Integrate User Authentication Service on creating address spaces",
        "preceedingTasks": [
          "ENTMQMAAS-1592"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898315,
        "code": "ENTMQMAAS-1598",
        "name": "Create downstream image for console-server component",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898325,
        "code": "ENTMQMAAS-1599",
        "name": "Document uninstall using OLM",
        "preceedingTasks": [
          "ENTMQMAAS-2324",
          "ENTMQMAAS-1598"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898346,
        "code": "ENTMQMAAS-1600",
        "name": "Update AMQ broker image",
        "preceedingTasks": [
          "ENTMQMAAS-1599"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898348,
        "code": "ENTMQMAAS-1601",
        "name": "Upgrade AMQ interconnect image",
        "preceedingTasks": [
          "ENTMQMAAS-2514",
          "ENTMQMAAS-1600"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898352,
        "code": "ENTMQMAAS-1602",
        "name": "Improve reject behaviour for forwarding use-case",
        "preceedingTasks": [
          "ENTMQMAAS-1601"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898373,
        "code": "ENTMQMAAS-1603",
        "name": "[systemtest] create upgrade test for iot components",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.27,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.16
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898466,
        "code": "ENTMQMAAS-1604",
        "name": "Investigate and fix frequent IoTProject changes",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 2.4,
          "database": 2.56,
          "devops": 3.12,
          "ai_ml": 2.66,
          "testing": 1.9,
          "issue_tracking": 2.57
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898689,
        "code": "ENTMQMAAS-1606",
        "name": "Create iot-tenant-cleaner image for downstream",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898693,
        "code": "ENTMQMAAS-1607",
        "name": "Blank page seen if connection is close whilst connection detail page is open",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12898823,
        "code": "ENTMQMAAS-1609",
        "name": "address column ordering on the connection detail page not working",
        "preceedingTasks": [
          "ENTMQMAAS-1583",
          "ENTMQMAAS-1538",
          "ENTMQMAAS-1555",
          "ENTMQMAAS-1607"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12899009,
        "code": "ENTMQMAAS-1610",
        "name": "Console address detail page gives no ability determine which topic/subscription relation",
        "preceedingTasks": [
          "ENTMQMAAS-1609"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12899376,
        "code": "ENTMQMAAS-1611",
        "name": "[#3670] : Upgrading from 0.30.2 to master stuck in restarting address-space-controller (4000 addresses)",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12899539,
        "code": "ENTMQMAAS-1614",
        "name": "Release respins for 1.3 CVE-2020-2583 CVE-2020-2590 CVE-2020-2593 CVE-2020-2601 CVE-2020-2604 CVE-2020-2654 CVE-2020-2655",
        "preceedingTasks": [
          "ENTMQMAAS-1577"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12899784,
        "code": "ENTMQMAAS-1618",
        "name": "Connection detail page fails for brokered address space",
        "preceedingTasks": [
          "ENTMQMAAS-1513",
          "ENTMQMAAS-1610"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12899901,
        "code": "ENTMQMAAS-1619",
        "name": "console - remove old console route",
        "preceedingTasks": [
          "ENTMQMAAS-2437",
          "ENTMQMAAS-1811",
          "ENTMQMAAS-1573"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12900211,
        "code": "ENTMQMAAS-1620",
        "name": "Use word 'partitions' rather than shards.",
        "preceedingTasks": [
          "ENTMQMAAS-1596",
          "ENTMQMAAS-1597"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12900215,
        "code": "ENTMQMAAS-1621",
        "name": "Expose connection creation timestamp",
        "preceedingTasks": [
          "ENTMQMAAS-1618"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12900224,
        "code": "ENTMQMAAS-1622",
        "name": "Connection detail page to use connection's hostname rather than id",
        "preceedingTasks": [
          "ENTMQMAAS-1621"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12900226,
        "code": "ENTMQMAAS-1623",
        "name": "Use address on the address list page rather than name",
        "preceedingTasks": [
          "ENTMQMAAS-1622"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12900232,
        "code": "ENTMQMAAS-1624",
        "name": "add server side smarts for the defaulting of the address's name from the address",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12900235,
        "code": "ENTMQMAAS-1625",
        "name": "Calculate messages/sec for metrics such as message in",
        "preceedingTasks": [
          "ENTMQMAAS-1871",
          "ENTMQMAAS-1624"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12900254,
        "code": "ENTMQMAAS-1627",
        "name": "Hide \\\"stored messages\\\" for anycast/mutlicast address types",
        "preceedingTasks": [
          "ENTMQMAAS-1473",
          "ENTMQMAAS-1620"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12900257,
        "code": "ENTMQMAAS-1628",
        "name": "Hide \\\"shards\\\" value for address types except queue",
        "preceedingTasks": [
          "ENTMQMAAS-1354",
          "ENTMQMAAS-1627"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12900264,
        "code": "ENTMQMAAS-1630",
        "name": "Addressspace reported as Failed during creation.",
        "preceedingTasks": [
          "ENTMQMAAS-1623"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12900266,
        "code": "ENTMQMAAS-1631",
        "name": "Message in/out screen label",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12900303,
        "code": "ENTMQMAAS-1632",
        "name": "Addressspace list - namespace is one word",
        "preceedingTasks": [
          "ENTMQMAAS-1639",
          "ENTMQMAAS-1649",
          "ENTMQMAAS-1421",
          "ENTMQMAAS-1516",
          "ENTMQMAAS-1631"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12900312,
        "code": "ENTMQMAAS-1633",
        "name": "Create workflow - review hyperlink spurious",
        "preceedingTasks": [
          "ENTMQMAAS-1632"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12900892,
        "code": "ENTMQMAAS-1634",
        "name": "Support disconnected installs from tag",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12900963,
        "code": "ENTMQMAAS-1635",
        "name": "PlanStatus field of the Address.Status object may be null",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12900969,
        "code": "ENTMQMAAS-1636",
        "name": "Address create workflow in brokered shows wrong address type selection",
        "preceedingTasks": [
          "ENTMQMAAS-1633"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12901469,
        "code": "ENTMQMAAS-1637",
        "name": "Stored Message value shown in place of Partitions value shown on address details page",
        "preceedingTasks": [
          "ENTMQMAAS-946",
          "ENTMQMAAS-1679",
          "ENTMQMAAS-1593",
          "ENTMQMAAS-1635"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12901473,
        "code": "ENTMQMAAS-1638",
        "name": "Padlock icon in wrong state for TLS connection on connection detail page",
        "preceedingTasks": [
          "ENTMQMAAS-1630"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12901488,
        "code": "ENTMQMAAS-1639",
        "name": "Page <title/> wrong on connection connection detail page",
        "preceedingTasks": [
          "ENTMQMAAS-1637"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12901617,
        "code": "ENTMQMAAS-1641",
        "name": "Expose console-server memory size, session timeout for configuration via CR",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12901677,
        "code": "ENTMQMAAS-1642",
        "name": "Namespace filter shows \\\"no results found\\\" for a namespace that exists",
        "preceedingTasks": [
          "ENTMQMAAS-1638"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12901691,
        "code": "ENTMQMAAS-1643",
        "name": "Improve addressspace status to show phase and messages",
        "preceedingTasks": [
          "ENTMQMAAS-1642"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12901692,
        "code": "ENTMQMAAS-1644",
        "name": "Delete All button doesn't work",
        "preceedingTasks": [
          "ENTMQMAAS-1643"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12901693,
        "code": "ENTMQMAAS-1645",
        "name": "Address Space Time Created ordering",
        "preceedingTasks": [
          "ENTMQMAAS-1644"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12901904,
        "code": "ENTMQMAAS-1646",
        "name": "Accepted column missing from the connection details page",
        "preceedingTasks": [
          "ENTMQMAAS-1645"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12902756,
        "code": "ENTMQMAAS-1647",
        "name": "Create 1.4 RNs",
        "preceedingTasks": [
          "ENTMQMAAS-2585",
          "ENTMQMAAS-2368",
          "ENTMQMAAS-1545"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12903574,
        "code": "ENTMQMAAS-1649",
        "name": "Delete All button label confusing",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12903576,
        "code": "ENTMQMAAS-1650",
        "name": "list page row kebab menu not fully visible",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12903743,
        "code": "ENTMQMAAS-1651",
        "name": "[#3804] : Create alert for standard authentication service status",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.33
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12903748,
        "code": "ENTMQMAAS-1653",
        "name": "[#3806] : Create an alert for console status",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.33
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12903807,
        "code": "ENTMQMAAS-1656",
        "name": "Spurious topic: \\\" \\\" in the address command preview",
        "preceedingTasks": [
          "ENTMQMAAS-1650",
          "ENTMQMAAS-1636"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12903810,
        "code": "ENTMQMAAS-1657",
        "name": "No visual feedback when commands are copied to the clipboard",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12906744,
        "code": "ENTMQMAAS-1668",
        "name": "[systemtest] testing epic for new console",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12906747,
        "code": "ENTMQMAAS-1669",
        "name": "[systemtest] create scale tests for enmasse",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12906748,
        "code": "ENTMQMAAS-1670",
        "name": "[systemtest] provide stable RHMI env for scale/performance tests",
        "preceedingTasks": [
          "ENTMQMAAS-1716",
          "ENTMQMAAS-1669"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12906750,
        "code": "ENTMQMAAS-1672",
        "name": "[systemtest] write metadata for new performance tests",
        "preceedingTasks": [
          "ENTMQMAAS-1670"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12906751,
        "code": "ENTMQMAAS-1673",
        "name": "[systemtest] fix and write new metadata for console tests",
        "preceedingTasks": [
          "ENTMQMAAS-1773",
          "ENTMQMAAS-1794",
          "ENTMQMAAS-1329",
          "ENTMQMAAS-1594"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12906755,
        "code": "ENTMQMAAS-1674",
        "name": "[systemtest] test suite for enmasse 1.0/amq-online 2.0",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12906756,
        "code": "ENTMQMAAS-1675",
        "name": "[systemtest] write javadoc for tests",
        "preceedingTasks": [
          "ENTMQMAAS-1674"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12906757,
        "code": "ENTMQMAAS-1676",
        "name": "[systemtest] refactor managers (shared and isolated)",
        "preceedingTasks": [
          "ENTMQMAAS-1388",
          "ENTMQMAAS-1747",
          "ENTMQMAAS-1675"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12906758,
        "code": "ENTMQMAAS-1677",
        "name": "[systemtest] make default resources available in resource manager",
        "preceedingTasks": [
          "ENTMQMAAS-1603",
          "ENTMQMAAS-1426",
          "ENTMQMAAS-1676"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12906762,
        "code": "ENTMQMAAS-1678",
        "name": "[systemtest] upstream CI",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12906764,
        "code": "ENTMQMAAS-1679",
        "name": "[systemtest] migrate actions from docker to podman",
        "preceedingTasks": [
          "ENTMQMAAS-1419",
          "ENTMQMAAS-1591"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12906765,
        "code": "ENTMQMAAS-1680",
        "name": "[systemtest] run iot tests as part of smoke",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12906766,
        "code": "ENTMQMAAS-1681",
        "name": "[systemtest] iot test triggered by label",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12906823,
        "code": "ENTMQMAAS-1682",
        "name": "[systemtest] dowsntream CI",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12906824,
        "code": "ENTMQMAAS-1683",
        "name": "[systemtest] fix downstream OLM pipeline",
        "preceedingTasks": [
          "ENTMQMAAS-1425",
          "ENTMQMAAS-1673"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12906938,
        "code": "ENTMQMAAS-1684",
        "name": "[systemtest] implement tests for monitoring",
        "preceedingTasks": [
          "ENTMQMAAS-1937",
          "ENTMQMAAS-1678"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12906951,
        "code": "ENTMQMAAS-1685",
        "name": "[systemtest] send our results and artifacts to report portal",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12907050,
        "code": "ENTMQMAAS-1686",
        "name": "[systemtest] re-test documentation steps",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12907261,
        "code": "ENTMQMAAS-1687",
        "name": "[systemtest] test verifying links to upstream/dowsntream doc",
        "preceedingTasks": [
          "ENTMQMAAS-1683"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12907322,
        "code": "ENTMQMAAS-1688",
        "name": "[systemtest] create install pipeline for ocp 4.x",
        "preceedingTasks": [
          "ENTMQMAAS-1725",
          "ENTMQMAAS-1704",
          "ENTMQMAAS-1685"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12907482,
        "code": "ENTMQMAAS-1690",
        "name": "Enable Pod Affinity/AntiAffinity in IoTConfig",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12907796,
        "code": "ENTMQMAAS-1692",
        "name": "[IoT Design] Project Creation",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.52,
          "frontend": 3.34,
          "database": 3.46,
          "devops": 4,
          "ai_ml": 3.99,
          "testing": 2.19,
          "issue_tracking": 3.08
        },
        "tags": [
          "devops",
          "ai_ml"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12907901,
        "code": "ENTMQMAAS-1705",
        "name": "[IoT Design] Device Creation",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.62,
          "frontend": 3.43,
          "database": 3.46,
          "devops": 3.93,
          "ai_ml": 3.98,
          "testing": 2.21,
          "issue_tracking": 3.08
        },
        "tags": [
          "ai_ml",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12907900,
        "code": "ENTMQMAAS-1704",
        "name": "[IoT Design] Device Landing Page",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.52,
          "frontend": 3.34,
          "database": 3.46,
          "devops": 4,
          "ai_ml": 3.99,
          "testing": 2.19,
          "issue_tracking": 3.08
        },
        "tags": [
          "devops",
          "ai_ml"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12907941,
        "code": "ENTMQMAAS-1706",
        "name": "[#3864] : Add additional router mesh checks",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12907986,
        "code": "ENTMQMAAS-1707",
        "name": "Clients needs to be able to scale the subscription consumer pods",
        "preceedingTasks": [
          "ENTMQMAAS-2534",
          "ENTMQMAAS-1706"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12908120,
        "code": "ENTMQMAAS-1708",
        "name": "[systemtest] fix cli-rhea client duration mode and connector",
        "preceedingTasks": [
          "ENTMQMAAS-1688"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12908496,
        "code": "ENTMQMAAS-1710",
        "name": "[#3873] : Require TLSv1.2+ for external endpoints",
        "preceedingTasks": [
          "ENTMQMAAS-1707"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12908515,
        "code": "ENTMQMAAS-1712",
        "name": "Console does not show clients attached to topic/queue in brokered address space, it shows only connection",
        "preceedingTasks": [
          "ENTMQMAAS-1994",
          "ENTMQMAAS-1641"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12908561,
        "code": "ENTMQMAAS-1714",
        "name": "[#3879] : Add support for specifying maxConsumers for subscription types",
        "preceedingTasks": [
          "ENTMQMAAS-1651",
          "ENTMQMAAS-1710"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12908615,
        "code": "ENTMQMAAS-1717",
        "name": "If user tries to create address space with forbidden character (+,-,...) in name than console doesn’t complete request and with no error just stay on last form with finish button",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12908614,
        "code": "ENTMQMAAS-1716",
        "name": "Validation on address space creation is missing",
        "preceedingTasks": [
          "ENTMQMAAS-1763",
          "ENTMQMAAS-1717"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12908617,
        "code": "ENTMQMAAS-1719",
        "name": "Service catalog application contains dashboard link (which was link to addressspace console) and it still contains console proxy route. So please change it to new console link",
        "preceedingTasks": [
          "ENTMQMAAS-1712"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12908620,
        "code": "ENTMQMAAS-1721",
        "name": "Edit doesn’t work either for addresses (change plan from small anycast to large anycast or etc..)",
        "preceedingTasks": [
          "ENTMQMAAS-1690",
          "ENTMQMAAS-1614"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12908635,
        "code": "ENTMQMAAS-1726",
        "name": "address creation form allows to create addresses with name like '.fasdfffasd'",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12908633,
        "code": "ENTMQMAAS-1725",
        "name": "Addressspace edit does not work, I'm not able to switch plan and auth service",
        "preceedingTasks": [
          "ENTMQMAAS-1721"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12908728,
        "code": "ENTMQMAAS-1728",
        "name": "Links page goes blank if connection goes away",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12908737,
        "code": "ENTMQMAAS-1729",
        "name": "Ordering a column on the links page (Links/Clients) doesn't work",
        "preceedingTasks": [
          "ENTMQMAAS-1728"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12909098,
        "code": "ENTMQMAAS-1731",
        "name": "[systemtest] Write test plan for performance tests",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12909122,
        "code": "ENTMQMAAS-1732",
        "name": "[systemtest] write console test for generated yamls",
        "preceedingTasks": [
          "ENTMQMAAS-308",
          "ENTMQMAAS-840",
          "ENTMQMAAS-1686"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12909424,
        "code": "ENTMQMAAS-1733",
        "name": "confirm button in delete addresses does not close wizard",
        "preceedingTasks": [
          "ENTMQMAAS-1656"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12910099,
        "code": "ENTMQMAAS-1736",
        "name": "Option to purge a queue in the brokered addressspace not showing in kebab",
        "preceedingTasks": [
          "ENTMQMAAS-1595",
          "ENTMQMAAS-1740",
          "ENTMQMAAS-1729"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12910153,
        "code": "ENTMQMAAS-1737",
        "name": "Message out metric always shows 0 on the connection list/detail page for the brokered address space",
        "preceedingTasks": [
          "ENTMQMAAS-1657",
          "ENTMQMAAS-1736"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12910248,
        "code": "ENTMQMAAS-1739",
        "name": "Addresses list rows resize incorrectly in small window",
        "preceedingTasks": [
          "ENTMQMAAS-1668",
          "ENTMQMAAS-1422",
          "ENTMQMAAS-1737"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12910320,
        "code": "ENTMQMAAS-1740",
        "name": "create address / address space workflow lets the user continue even though the address or resource name is illegal",
        "preceedingTasks": [
          "ENTMQMAAS-1733"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12910328,
        "code": "ENTMQMAAS-1741",
        "name": "Consolelink CR is not deleted when enmasse-infra is uninstalled",
        "preceedingTasks": [
          "ENTMQMAAS-1647"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12910540,
        "code": "ENTMQMAAS-1743",
        "name": "Selection of address type error",
        "preceedingTasks": [
          "ENTMQMAAS-2003",
          "ENTMQMAAS-1726"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12910764,
        "code": "ENTMQMAAS-1745",
        "name": "[systemtest] write console tests for attached links (clients)",
        "preceedingTasks": [
          "ENTMQMAAS-1910",
          "ENTMQMAAS-1732"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12911210,
        "code": "ENTMQMAAS-1747",
        "name": "[systemtests] write automated test which check olm CSV links",
        "preceedingTasks": [
          "ENTMQMAAS-1680",
          "ENTMQMAAS-1687"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12911529,
        "code": "ENTMQMAAS-1749",
        "name": "the server responded with a status of 504 (Gateway Time-out) during console oauth authentication",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12911723,
        "code": "ENTMQMAAS-1750",
        "name": "[service catalog] user does not see his addressspace created by service catalog",
        "preceedingTasks": [
          "ENTMQMAAS-2331",
          "ENTMQMAAS-993",
          "ENTMQMAAS-1749"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12912044,
        "code": "ENTMQMAAS-1751",
        "name": "spurious \\\"creationTimestamp: null\\\" included as part of the address space command preview",
        "preceedingTasks": [
          "ENTMQMAAS-1750"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12912344,
        "code": "ENTMQMAAS-1752",
        "name": "[#3976] : consoleserver should be quiesced when there are no users logged on",
        "preceedingTasks": [
          "ENTMQMAAS-1751"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12912450,
        "code": "ENTMQMAAS-1753",
        "name": "[systemtests] automated tests for OLM upgrade",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12912638,
        "code": "ENTMQMAAS-1754",
        "name": "address menuing inconsistent between address list  row kebab and address detail kebab",
        "preceedingTasks": [
          "ENTMQMAAS-1739"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12912641,
        "code": "ENTMQMAAS-1755",
        "name": "Add creation timestamp to the address list page",
        "preceedingTasks": [
          "ENTMQMAAS-1604",
          "ENTMQMAAS-1754"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12912778,
        "code": "ENTMQMAAS-1757",
        "name": "[#3990] : Support new bundle format for metadata image",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12912875,
        "code": "ENTMQMAAS-1758",
        "name": "Broken links in 7.5 version of the published documentation",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12912932,
        "code": "ENTMQMAAS-1759",
        "name": "Link/Clients filtering by container id does not work",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12912956,
        "code": "ENTMQMAAS-1761",
        "name": "[systemtest] create test for blank page (address, address space)",
        "preceedingTasks": [
          "ENTMQMAAS-1745"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12912955,
        "code": "ENTMQMAAS-1760",
        "name": "[systemtest] create test for link blank page",
        "preceedingTasks": [
          "ENTMQMAAS-1521",
          "ENTMQMAAS-1761"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12912958,
        "code": "ENTMQMAAS-1762",
        "name": "[systemtest] create test for container id filtering",
        "preceedingTasks": [
          "ENTMQMAAS-1760"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12912980,
        "code": "ENTMQMAAS-1763",
        "name": "I'm not able to delete addressspace filter by type",
        "preceedingTasks": [
          "ENTMQMAAS-1755"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12913284,
        "code": "ENTMQMAAS-1768",
        "name": "Typeahead filter - gives misleading information",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12913293,
        "code": "ENTMQMAAS-1769",
        "name": "Delete delete space dialogue doesn't pop down",
        "preceedingTasks": [
          "ENTMQMAAS-1672",
          "ENTMQMAAS-1423",
          "ENTMQMAAS-1768"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12913512,
        "code": "ENTMQMAAS-1770",
        "name": "[systemtest] create test for error dialog window",
        "preceedingTasks": [
          "ENTMQMAAS-1915",
          "ENTMQMAAS-1762"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12913587,
        "code": "ENTMQMAAS-1773",
        "name": "Auth session expiration not handled gracefully",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12913594,
        "code": "ENTMQMAAS-1774",
        "name": "console address list status message presented as very long single line",
        "preceedingTasks": [
          "ENTMQMAAS-1558",
          "ENTMQMAAS-1769"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12913795,
        "code": "ENTMQMAAS-1776",
        "name": "Docs: Fix broken workaround link in RNs",
        "preceedingTasks": [
          "ENTMQMAAS-1741"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12914068,
        "code": "ENTMQMAAS-1777",
        "name": "Console gives no access to Global DLQ depth.",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12914086,
        "code": "ENTMQMAAS-1779",
        "name": "Refresh console documentation",
        "preceedingTasks": [
          "ENTMQMAAS-1776"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12915131,
        "code": "ENTMQMAAS-1780",
        "name": "AMQ Online Metrics - Traffic",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 4.42,
          "frontend": 2.87,
          "database": 4.41,
          "devops": 4.23,
          "ai_ml": 4.02,
          "testing": 2.28,
          "issue_tracking": 3.24
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12915133,
        "code": "ENTMQMAAS-1781",
        "name": "AMQ Online Metrics - Latency",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 4.42,
          "frontend": 2.87,
          "database": 4.41,
          "devops": 4.23,
          "ai_ml": 4.02,
          "testing": 2.28,
          "issue_tracking": 3.24
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12915134,
        "code": "ENTMQMAAS-1782",
        "name": "AMQ Online Metrics - Saturation",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 4.42,
          "frontend": 2.87,
          "database": 4.41,
          "devops": 4.23,
          "ai_ml": 4.02,
          "testing": 2.28,
          "issue_tracking": 3.24
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12915135,
        "code": "ENTMQMAAS-1783",
        "name": "AMQ Online Metrics - Errors",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 4.42,
          "frontend": 2.87,
          "database": 4.41,
          "devops": 4.23,
          "ai_ml": 4.02,
          "testing": 2.28,
          "issue_tracking": 3.24
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12916052,
        "code": "ENTMQMAAS-1784",
        "name": "[#4044] : Agent AMQP connections use uni-directional heartbeating rather than bi-directional.",
        "preceedingTasks": [
          "ENTMQMAAS-1390",
          "ENTMQMAAS-1759"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12916053,
        "code": "ENTMQMAAS-1785",
        "name": "[#4049] : Agent http request promise may remaining indefinitely unresolved state",
        "preceedingTasks": [
          "ENTMQMAAS-1784"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12916202,
        "code": "ENTMQMAAS-1786",
        "name": "[systemtests] test for Number of addresses and connection supported",
        "preceedingTasks": [
          "ENTMQMAAS-2113",
          "ENTMQMAAS-2049",
          "ENTMQMAAS-2108",
          "ENTMQMAAS-1705",
          "ENTMQMAAS-1731"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12916205,
        "code": "ENTMQMAAS-1787",
        "name": "[systemtests]test for fixed set of addresses but increasing messaging load.",
        "preceedingTasks": [
          "ENTMQMAAS-1456",
          "ENTMQMAAS-1753"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12916207,
        "code": "ENTMQMAAS-1788",
        "name": "[systemtests] test for Failure recovery with large numbers of addresses",
        "preceedingTasks": [
          "ENTMQMAAS-1692",
          "ENTMQMAAS-1677",
          "ENTMQMAAS-1787"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12916480,
        "code": "ENTMQMAAS-1790",
        "name": "[systemtests] test for Many links and connection performance",
        "preceedingTasks": [
          "ENTMQMAAS-2071",
          "ENTMQMAAS-1786"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12916489,
        "code": "ENTMQMAAS-1791",
        "name": "console does not show custom address plan properly",
        "preceedingTasks": [
          "ENTMQMAAS-1567",
          "ENTMQMAAS-1774"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12916492,
        "code": "ENTMQMAAS-1792",
        "name": "Pods stuck in configuring/crash state when addressspace is created and immediately removed",
        "preceedingTasks": [
          "ENTMQMAAS-2595",
          "ENTMQMAAS-2282",
          "ENTMQMAAS-1757"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12916498,
        "code": "ENTMQMAAS-1793",
        "name": "Docs: how to change the auth service for an address space using the console",
        "preceedingTasks": [
          "ENTMQMAAS-1779"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12916668,
        "code": "ENTMQMAAS-1794",
        "name": "Mismatch in contents of dropdown for plan in address and address space",
        "preceedingTasks": [
          "ENTMQMAAS-1518",
          "ENTMQMAAS-1791"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12918099,
        "code": "ENTMQMAAS-1800",
        "name": "[#4090] : Provide per-address space support credentials facilitating support access to the broker(s)",
        "preceedingTasks": [
          "ENTMQMAAS-1790"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12918173,
        "code": "ENTMQMAAS-1801",
        "name": "Address with invalid plan stops blocks creation of other Addresses",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12918540,
        "code": "ENTMQMAAS-1803",
        "name": "Bad example inventory in 1.3 docs",
        "preceedingTasks": [
          "ENTMQMAAS-1780",
          "ENTMQMAAS-1911",
          "ENTMQMAAS-1770",
          "ENTMQMAAS-1758"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12918850,
        "code": "ENTMQMAAS-1805",
        "name": "Unnecessary step in installing standard auth conf",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12918852,
        "code": "ENTMQMAAS-1806",
        "name": "Wrong verification step for infra config",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12918854,
        "code": "ENTMQMAAS-1807",
        "name": "Wrong verification step for address space plan",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12918856,
        "code": "ENTMQMAAS-1808",
        "name": "Wrong verification step for address plan",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12918860,
        "code": "ENTMQMAAS-1809",
        "name": "Unnecessary chapter",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12918873,
        "code": "ENTMQMAAS-1810",
        "name": "Wrong arrangement in chapter 5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12918966,
        "code": "ENTMQMAAS-1811",
        "name": "Wrong namespace name",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12918993,
        "code": "ENTMQMAAS-1813",
        "name": "Docs: add new console screenshots to console docs",
        "preceedingTasks": [
          "ENTMQMAAS-1793"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12918999,
        "code": "ENTMQMAAS-1814",
        "name": "Wrong namespace name",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12919003,
        "code": "ENTMQMAAS-1815",
        "name": "IoT exporting registry host error",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12919122,
        "code": "ENTMQMAAS-1821",
        "name": "[#4105] : Create MessagingInfra CRD and controller logic",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12919121,
        "code": "ENTMQMAAS-1820",
        "name": "[#4106] : Architecture: Define authentication and authorization API for 1.0",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12919120,
        "code": "ENTMQMAAS-1819",
        "name": "[#4107] : Architecture: Monitoring CRD",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.33
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12919160,
        "code": "ENTMQMAAS-1822",
        "name": "[systemtest] modify ocp 4 install pipeline to install any version",
        "preceedingTasks": [
          "ENTMQMAAS-1800"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12919161,
        "code": "ENTMQMAAS-1823",
        "name": "[systemtests] create pipeline for running scale tests",
        "preceedingTasks": [
          "ENTMQMAAS-2032",
          "ENTMQMAAS-1822"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12919163,
        "code": "ENTMQMAAS-1824",
        "name": "[systemtest] job for AMQ online certification on ocp 4.2",
        "preceedingTasks": [
          "ENTMQMAAS-1823"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12919836,
        "code": "ENTMQMAAS-1825",
        "name": "[systemtest] allow ocp4 pipeline to install RC version for LP testing",
        "preceedingTasks": [
          "ENTMQMAAS-1824"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12920129,
        "code": "ENTMQMAAS-1827",
        "name": "[console-ui - update PF version] DataToolbar getting broken after PF update",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12920219,
        "code": "ENTMQMAAS-1828",
        "name": "[#4131] : Agent watches may not reconnect in response to certain connection problems",
        "preceedingTasks": [
          "ENTMQMAAS-1403",
          "ENTMQMAAS-2702",
          "ENTMQMAAS-1820"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12920749,
        "code": "ENTMQMAAS-1829",
        "name": "[#4049] : Agent http request promise may remaining indefinitely unresolved state [1.3.4]",
        "preceedingTasks": [
          "ENTMQMAAS-1828"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12921009,
        "code": "ENTMQMAAS-1831",
        "name": "[systemtest] create test deployment using tekton pipelines",
        "preceedingTasks": [
          "ENTMQMAAS-1825"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12921187,
        "code": "ENTMQMAAS-1832",
        "name": "[systemtest] load scale variable from env or json",
        "preceedingTasks": [
          "ENTMQMAAS-2076",
          "ENTMQMAAS-2110",
          "ENTMQMAAS-1831"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12921189,
        "code": "ENTMQMAAS-1833",
        "name": "[systemtest] ability to configure scale tests variables",
        "preceedingTasks": [
          "ENTMQMAAS-1852",
          "ENTMQMAAS-1788"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12921298,
        "code": "ENTMQMAAS-1834",
        "name": "[systemtest] create unit tests for systemtests",
        "preceedingTasks": [
          "ENTMQMAAS-1833"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12921438,
        "code": "ENTMQMAAS-1852",
        "name": "[#4292] Getting error when passing forbidden characters to filter",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12921443,
        "code": "ENTMQMAAS-1853",
        "name": "Address with invalid plan stops blocks creation of other Addresses [1.3.x]",
        "preceedingTasks": [
          "ENTMQMAAS-2526",
          "ENTMQMAAS-1821"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12921704,
        "code": "ENTMQMAAS-1854",
        "name": "[systemtest] simplify and merge enmasse downstream pipelines",
        "preceedingTasks": [
          "ENTMQMAAS-2074",
          "ENTMQMAAS-1832"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12921706,
        "code": "ENTMQMAAS-1855",
        "name": "[systemtest] scale pipeline for downstream builds",
        "preceedingTasks": [
          "ENTMQMAAS-1854"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12921708,
        "code": "ENTMQMAAS-1856",
        "name": "Docs: fix wording in subscription address type description",
        "preceedingTasks": [
          "ENTMQMAAS-2525",
          "ENTMQMAAS-1619",
          "ENTMQMAAS-1815"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12921947,
        "code": "ENTMQMAAS-1858",
        "name": "Docs: fix broken link in Planning docs",
        "preceedingTasks": [
          "ENTMQMAAS-1813"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12922053,
        "code": "ENTMQMAAS-1859",
        "name": "Docs: update download zip attribute for 1.4",
        "preceedingTasks": [
          "ENTMQMAAS-1858"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12922699,
        "code": "ENTMQMAAS-1860",
        "name": "Add systemtest unit tests to github actions PR build",
        "preceedingTasks": [
          "ENTMQMAAS-2045",
          "ENTMQMAAS-1916",
          "ENTMQMAAS-2106",
          "ENTMQMAAS-1814"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12922708,
        "code": "ENTMQMAAS-1862",
        "name": "Create beaker tast for Kubernetes deployment",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12922707,
        "code": "ENTMQMAAS-1861",
        "name": "Create beaker tast for OC deployment (CRC, cluster up)",
        "preceedingTasks": [
          "ENTMQMAAS-2095",
          "ENTMQMAAS-1941",
          "ENTMQMAAS-2115",
          "ENTMQMAAS-1890",
          "ENTMQMAAS-2092",
          "ENTMQMAAS-2166",
          "ENTMQMAAS-1862"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12923131,
        "code": "ENTMQMAAS-1867",
        "name": "Console pod stuck CrashLoopBackOff following OCP restart",
        "preceedingTasks": [
          "ENTMQMAAS-1829"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12923755,
        "code": "ENTMQMAAS-1870",
        "name": "Docs: fix broken IoT docs link in 1.4 RNs",
        "preceedingTasks": [
          "ENTMQMAAS-1827",
          "ENTMQMAAS-1834"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12923774,
        "code": "ENTMQMAAS-1871",
        "name": "Docs: 1.4 RNs add period and forward slash characters",
        "preceedingTasks": [
          "ENTMQMAAS-1856"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12923786,
        "code": "ENTMQMAAS-1872",
        "name": "[master] standard auth service not loaded in OLM default namespace",
        "preceedingTasks": [
          "ENTMQMAAS-1853"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12924321,
        "code": "ENTMQMAAS-1887",
        "name": "Write blogpost about onboarding to Report Portal",
        "preceedingTasks": [
          "ENTMQMAAS-1855"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12924872,
        "code": "ENTMQMAAS-1890",
        "name": "[systemtest] new tests, fixes and suite improvements",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12924878,
        "code": "ENTMQMAAS-1891",
        "name": "[systemtest] soak suite iot tests",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.27,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.16
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12924884,
        "code": "ENTMQMAAS-1892",
        "name": "[systemtest] detect external clients subscribers are subscribed",
        "preceedingTasks": [
          "ENTMQMAAS-1870"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12924897,
        "code": "ENTMQMAAS-1893",
        "name": "[systemtest] add ability to pass jsonConfig for scale tests via pipeline param",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12924966,
        "code": "ENTMQMAAS-1894",
        "name": "[systemtest] create metadata for new tests in 1.3.4 release",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12924969,
        "code": "ENTMQMAAS-1895",
        "name": "[systemtest] improve web page wait for items",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12925110,
        "code": "ENTMQMAAS-1896",
        "name": "postgress db/infinispan endpoint not reachable",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12925257,
        "code": "ENTMQMAAS-1898",
        "name": "[#4184] : Sometimes controller crashes when reconciling authentication service",
        "preceedingTasks": [
          "ENTMQMAAS-1872"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12926001,
        "code": "ENTMQMAAS-1903",
        "name": "[systemtest] add link to report portal to jenkins job description",
        "preceedingTasks": [
          "ENTMQMAAS-2467",
          "ENTMQMAAS-2503",
          "ENTMQMAAS-2229",
          "ENTMQMAAS-1894"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12926327,
        "code": "ENTMQMAAS-1905",
        "name": "Console- IoT-UI - Create wizard component to support create project  feature",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12926328,
        "code": "ENTMQMAAS-1906",
        "name": "Console-IoT-UI-  Create a table to display a list of projects",
        "preceedingTasks": [
          "ENTMQMAAS-1905"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12926329,
        "code": "ENTMQMAAS-1907",
        "name": "Console-IoT-UI- Integrate pagination for project list table",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12926331,
        "code": "ENTMQMAAS-1908",
        "name": "Console-IoT-UI - Create project header visual component",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12926333,
        "code": "ENTMQMAAS-1910",
        "name": "Console-IoT-UI - Create cards to display count of projects",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12926332,
        "code": "ENTMQMAAS-1909",
        "name": "Console-IoT-UI- Add navigation to view project details and devices",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12926335,
        "code": "ENTMQMAAS-1911",
        "name": "Console-IoT-UI - Create Filter component for project list",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12926338,
        "code": "ENTMQMAAS-1913",
        "name": "Console-IoT-UI - Create a reusable visual component for input box with copy option",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12926339,
        "code": "ENTMQMAAS-1914",
        "name": "Console-IoT-UI - Create a visual card component for device registration management",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12926343,
        "code": "ENTMQMAAS-1915",
        "name": "Console-IoT-UI - Translate form data to JSON format and vice versa for Device Registration Management",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12926344,
        "code": "ENTMQMAAS-1916",
        "name": "Console-IoT-UI - Translate form data to JSON format and vice versa for Access Credentials",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12926377,
        "code": "ENTMQMAAS-1917",
        "name": "Console-IoT-UI-Create Project Detail Header",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12926380,
        "code": "ENTMQMAAS-1918",
        "name": "Custom authservice fails to start",
        "preceedingTasks": [
          "ENTMQMAAS-1653",
          "ENTMQMAAS-1898"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12926382,
        "code": "ENTMQMAAS-1919",
        "name": "Console-IoT-UI-Create General Info on project detail page",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12926385,
        "code": "ENTMQMAAS-1920",
        "name": "Console-IoT-UI-Create Add Credentials Form for Add device page",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12926497,
        "code": "ENTMQMAAS-1922",
        "name": "[#4241] : Race in upgrade for OLM",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12927174,
        "code": "ENTMQMAAS-1929",
        "name": "[#4282] 'Cannot read property 'links' of undefined' reported in browser console log after address deletion",
        "preceedingTasks": [
          "ENTMQMAAS-1903"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12927185,
        "code": "ENTMQMAAS-1930",
        "name": "[systemtest] remove old mqtt tests which are not supported",
        "preceedingTasks": [
          "ENTMQMAAS-2482",
          "ENTMQMAAS-1929"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12927557,
        "code": "ENTMQMAAS-1931",
        "name": "Docs: Add link to 1.4.1 fixed issues to 1.4 RNs",
        "preceedingTasks": [
          "ENTMQMAAS-1892"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12927700,
        "code": "ENTMQMAAS-1932",
        "name": "[##4279] Creating an address fails with message \\\"address space plan '' not found\\\"",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12927719,
        "code": "ENTMQMAAS-1933",
        "name": "[#4280] Edit Address Space dialogue subtitle misleading",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12927835,
        "code": "ENTMQMAAS-1934",
        "name": "[#4252] Allow configure idleTimeout of connectors",
        "preceedingTasks": [
          "ENTMQMAAS-2330",
          "ENTMQMAAS-1922"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12927853,
        "code": "ENTMQMAAS-1935",
        "name": "Allow specifying replicas for standard and none authservice",
        "preceedingTasks": [
          "ENTMQMAAS-1934"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12927910,
        "code": "ENTMQMAAS-1936",
        "name": "[systemtest] implement workaround for failing kube api requests",
        "preceedingTasks": [
          "ENTMQMAAS-2270",
          "ENTMQMAAS-1781",
          "ENTMQMAAS-2496",
          "ENTMQMAAS-1933"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12927995,
        "code": "ENTMQMAAS-1937",
        "name": "[systemtests] OLM tests - Build custom operator registry in systemtests",
        "preceedingTasks": [
          "ENTMQMAAS-1457",
          "ENTMQMAAS-1568",
          "ENTMQMAAS-1931"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12927999,
        "code": "ENTMQMAAS-1938",
        "name": "[systemtest] unify olm deployment in upstream and downstream",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12928452,
        "code": "ENTMQMAAS-1939",
        "name": "[#4270] : In console, if there is only one option use it as default",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12928653,
        "code": "ENTMQMAAS-1941",
        "name": "[#4287] : Address links not displayed if address resource name suffix does not match address name",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12928698,
        "code": "ENTMQMAAS-1942",
        "name": "Docs: As a Customer I would like to see messaging routes/ingresses when I open address space in console",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12928989,
        "code": "ENTMQMAAS-1944",
        "name": "[systemtest] create pipelines for 1.5.0 release using ocp 4.4, 4.3 and 3.11",
        "preceedingTasks": [
          "ENTMQMAAS-1936"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12929452,
        "code": "ENTMQMAAS-1946",
        "name": "Inconsistency in status object in mock server and real server",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12929466,
        "code": "ENTMQMAAS-1947",
        "name": "Console UI - Include all type of status in the console",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12929674,
        "code": "ENTMQMAAS-1948",
        "name": "[systemtest] create ocp cluster operator",
        "preceedingTasks": [
          "ENTMQMAAS-1944"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12929829,
        "code": "ENTMQMAAS-1949",
        "name": "[systemtest] framework tests for scale tests components",
        "preceedingTasks": [
          "ENTMQMAAS-1708",
          "ENTMQMAAS-1909",
          "ENTMQMAAS-1938"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12929899,
        "code": "ENTMQMAAS-1950",
        "name": "[CI] switch iot jobs to use ocp4 cluster",
        "preceedingTasks": [
          "ENTMQMAAS-1948"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12930154,
        "code": "ENTMQMAAS-1951",
        "name": "IoT POST-iot-device-registry failed 503",
        "preceedingTasks": [
          "ENTMQMAAS-1896"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12930402,
        "code": "ENTMQMAAS-1952",
        "name": "Document workaround for ENTMQBR-2313 (Fails to load journal after queue full)",
        "preceedingTasks": [
          "ENTMQMAAS-1625",
          "ENTMQMAAS-1942"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12930404,
        "code": "ENTMQMAAS-1953",
        "name": "Update connector documentation",
        "preceedingTasks": [
          "ENTMQMAAS-1952"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12930409,
        "code": "ENTMQMAAS-1954",
        "name": "[CI] implement retry for starting CRC cluster",
        "preceedingTasks": [
          "ENTMQMAAS-1950"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12930546,
        "code": "ENTMQMAAS-1956",
        "name": "Docs: Provide per-address space support credentials facilitating support access to the broker(s)",
        "preceedingTasks": [
          "ENTMQMAAS-1949"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12930587,
        "code": "ENTMQMAAS-1957",
        "name": "Docs: Disconnected installs (OLM)",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12930759,
        "code": "ENTMQMAAS-1958",
        "name": "[CI] report portal report attachments with original timestamps",
        "preceedingTasks": [
          "ENTMQMAAS-1954"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12930782,
        "code": "ENTMQMAAS-1959",
        "name": "FirefoxConsoleTest#testFilterAddressesByStatus races with the controller.",
        "preceedingTasks": [
          "ENTMQMAAS-1908",
          "ENTMQMAAS-1681",
          "ENTMQMAAS-1956"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12931162,
        "code": "ENTMQMAAS-1960",
        "name": "PersistentMessagesTest.testBrokeredPersistentMessages fails to connect to brokered space",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12931166,
        "code": "ENTMQMAAS-1961",
        "name": "Unable to drain kube node when only one broker is deployed there",
        "preceedingTasks": [
          "ENTMQMAAS-975",
          "ENTMQMAAS-1935"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12931252,
        "code": "ENTMQMAAS-1962",
        "name": "[systemtest] write tests for testing enmasse stability during node restart",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12931436,
        "code": "ENTMQMAAS-1963",
        "name": "[#4342] Agent failed to reconcile addresses",
        "preceedingTasks": [
          "ENTMQMAAS-2801",
          "ENTMQMAAS-2371",
          "ENTMQMAAS-2764",
          "ENTMQMAAS-1960"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12932158,
        "code": "ENTMQMAAS-1976",
        "name": "UXD: As a Customer I would like to see messaging routes/ingresses when I open address space in console",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 3.49,
          "database": 2.56,
          "devops": 3.54,
          "ai_ml": 2.44,
          "testing": 1.92,
          "issue_tracking": 2.28
        },
        "tags": [
          "devops",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12932304,
        "code": "ENTMQMAAS-1977",
        "name": "Console-server - Server doesn't handle the casing for filter string.",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12932339,
        "code": "ENTMQMAAS-1978",
        "name": "[systemtest] create 1.4.1 polarion metadata",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12933073,
        "code": "ENTMQMAAS-1980",
        "name": "[systemtest] OLM upgrade tests - refactor to only do upgrade of latest -1 to latest",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12933102,
        "code": "ENTMQMAAS-1981",
        "name": "[#4358] Broker pod failed on \\\"no valid keystore\\\"",
        "preceedingTasks": [
          "ENTMQMAAS-2852",
          "ENTMQMAAS-2374",
          "ENTMQMAAS-1977"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12933414,
        "code": "ENTMQMAAS-1982",
        "name": "Add link to 1.4.1 YAML bundle",
        "preceedingTasks": [
          "ENTMQMAAS-2214",
          "ENTMQMAAS-2020",
          "ENTMQMAAS-1957"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12933571,
        "code": "ENTMQMAAS-1984",
        "name": "[systemtest] create test annotations for default test env",
        "preceedingTasks": [
          "ENTMQMAAS-2521",
          "ENTMQMAAS-1953",
          "ENTMQMAAS-1978"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12933732,
        "code": "ENTMQMAAS-1986",
        "name": "[systemtest] merge OpensslUtils and CerificationUtils",
        "preceedingTasks": [
          "ENTMQMAAS-1984"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12934230,
        "code": "ENTMQMAAS-1987",
        "name": "[systemtest] build olm image on kubernetes cluster",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        },
        "tags": [
          "testing",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12936121,
        "code": "ENTMQMAAS-1990",
        "name": "Wrong namespace in IoT devices",
        "preceedingTasks": [
          "ENTMQMAAS-1982"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12936269,
        "code": "ENTMQMAAS-1991",
        "name": "[IoT Design] Device connection info",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.62,
          "frontend": 3.43,
          "database": 3.46,
          "devops": 3.93,
          "ai_ml": 3.98,
          "testing": 2.21,
          "issue_tracking": 3.08
        },
        "tags": [
          "ai_ml",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12936326,
        "code": "ENTMQMAAS-1992",
        "name": "[systemtest] apply file templates using fabric8",
        "preceedingTasks": [
          "ENTMQMAAS-1986"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12936328,
        "code": "ENTMQMAAS-1993",
        "name": "[systemtest] make uninstall operators less verbose",
        "preceedingTasks": [
          "ENTMQMAAS-1992"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12936533,
        "code": "ENTMQMAAS-1994",
        "name": "[CI] update pipelines to ocp 4.4",
        "preceedingTasks": [
          "ENTMQMAAS-1993"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12937022,
        "code": "ENTMQMAAS-1995",
        "name": "The title of console shows as 'React App' while loading",
        "preceedingTasks": [
          "ENTMQMAAS-1998",
          "ENTMQMAAS-1920"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12937204,
        "code": "ENTMQMAAS-1996",
        "name": "Docs: Release Notes - Add link to 1.5 bundle",
        "preceedingTasks": [
          "ENTMQMAAS-1990"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12937205,
        "code": "ENTMQMAAS-1997",
        "name": "Docs: Release Notes - Update Release Notes for Release 1.5",
        "preceedingTasks": [
          "ENTMQMAAS-1020",
          "ENTMQMAAS-1996"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12937952,
        "code": "ENTMQMAAS-1998",
        "name": "Missing permissions in OLM manifests",
        "preceedingTasks": [
          "ENTMQMAAS-1803",
          "ENTMQMAAS-1951"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12938172,
        "code": "ENTMQMAAS-1999",
        "name": "PurgeAddress does not work [current master]",
        "preceedingTasks": [
          "ENTMQMAAS-1961"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12938552,
        "code": "ENTMQMAAS-2000",
        "name": "[#4423] : Ops procedures - document enable protocol trace for router/broker",
        "preceedingTasks": [
          "ENTMQMAAS-1997"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12938727,
        "code": "ENTMQMAAS-2001",
        "name": "[IoT Design] External Project design",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.62,
          "frontend": 3.43,
          "database": 3.46,
          "devops": 3.93,
          "ai_ml": 3.98,
          "testing": 2.21,
          "issue_tracking": 3.08
        },
        "tags": [
          "ai_ml",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12938755,
        "code": "ENTMQMAAS-2002",
        "name": "Collect logs before starting teardown of resources",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12938757,
        "code": "ENTMQMAAS-2003",
        "name": "Collect logs and states of all namespaces",
        "preceedingTasks": [
          "ENTMQMAAS-1719",
          "ENTMQMAAS-2002"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12938907,
        "code": "ENTMQMAAS-2004",
        "name": "[#4458] : [Shared infra] Add liveness probes and readiness probes to shared infra",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12938908,
        "code": "ENTMQMAAS-2005",
        "name": "[#4459] : [Shared infra] Add support for TLS endpoints for shared infra",
        "preceedingTasks": [
          "ENTMQMAAS-988",
          "ENTMQMAAS-2551",
          "ENTMQMAAS-2004"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12940277,
        "code": "ENTMQMAAS-2018",
        "name": "Docs: Configuring max queue size for standard and brokered address space.",
        "preceedingTasks": [
          "ENTMQMAAS-2000"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12940429,
        "code": "ENTMQMAAS-2019",
        "name": "[CI] rewrite enmasse shared lib functions to class",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12940430,
        "code": "ENTMQMAAS-2020",
        "name": "[CI] use new Enmasse class in shared lib in AMQ Online/Enmasse pipelines",
        "preceedingTasks": [
          "ENTMQMAAS-1743",
          "ENTMQMAAS-1019",
          "ENTMQMAAS-2019"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12940433,
        "code": "ENTMQMAAS-2021",
        "name": "Performance test create/delete MessagingAddress causes kubeapi restart",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12940435,
        "code": "ENTMQMAAS-2022",
        "name": "[CI] fix plugins.txt for enmase csb jenkins",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12940578,
        "code": "ENTMQMAAS-2024",
        "name": "Scale test has failed to detect pre-installed enamsse-operator",
        "preceedingTasks": [
          "ENTMQMAAS-2321",
          "ENTMQMAAS-2022"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12940720,
        "code": "ENTMQMAAS-2025",
        "name": "[#4502] : [GraphQL] expose read only messaging endpoints [address space facade]",
        "preceedingTasks": [
          "ENTMQMAAS-1981"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12940721,
        "code": "ENTMQMAAS-2026",
        "name": "[#4503] : [GraphQL] extend createAddressSpace to allow endpoint configuration",
        "preceedingTasks": [
          "ENTMQMAAS-2881",
          "ENTMQMAAS-2025"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12941001,
        "code": "ENTMQMAAS-2028",
        "name": "Add support for TLS and all endpoint types",
        "preceedingTasks": [
          "ENTMQMAAS-2367",
          "ENTMQMAAS-1515",
          "ENTMQMAAS-2021"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12941261,
        "code": "ENTMQMAAS-2029",
        "name": "Console shows unexpected error when I click on address with error message",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12941412,
        "code": "ENTMQMAAS-2030",
        "name": "[CI] generate plots and store in jenkins for scale/perf tests",
        "preceedingTasks": [
          "ENTMQMAAS-2041",
          "ENTMQMAAS-2029"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12941447,
        "code": "ENTMQMAAS-2031",
        "name": "Docs: Documentation should note the fact that endpoints aren't mutable",
        "preceedingTasks": [
          "ENTMQMAAS-2018"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12941587,
        "code": "ENTMQMAAS-2032",
        "name": "[#4349] Console UI - Code refactoring  and creating reusable components.",
        "preceedingTasks": [
          "ENTMQMAAS-2109",
          "ENTMQMAAS-2050",
          "ENTMQMAAS-1947"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12941617,
        "code": "ENTMQMAAS-2033",
        "name": "[#4512] : [Docs] correct loadbalance spec indentation",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12941680,
        "code": "ENTMQMAAS-2034",
        "name": "[CI] create disconnected ocp cluster for testing disconnected installation",
        "preceedingTasks": [
          "ENTMQMAAS-2030"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12941681,
        "code": "ENTMQMAAS-2035",
        "name": "[CI] create automation for provisioning disconnected ocp cluster",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12941692,
        "code": "ENTMQMAAS-2036",
        "name": "[systemtests] java external client null pointer exception",
        "preceedingTasks": [
          "ENTMQMAAS-2097",
          "ENTMQMAAS-827",
          "ENTMQMAAS-2035"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12941828,
        "code": "ENTMQMAAS-2037",
        "name": "[systemtest] fix flaky rhea WS test on AWS cluster",
        "preceedingTasks": [
          "ENTMQMAAS-2036"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12942255,
        "code": "ENTMQMAAS-2038",
        "name": "testAddressLinks sporadic failure",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12942688,
        "code": "ENTMQMAAS-2039",
        "name": "Docs: Add procedure for deploying the standard auth service for HA to downstream docs",
        "preceedingTasks": [
          "ENTMQMAAS-2024",
          "ENTMQMAAS-2033"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12942964,
        "code": "ENTMQMAAS-2041",
        "name": "[#4539] : [Docs] correct OpenShift refs in kube docs for console",
        "preceedingTasks": [
          "ENTMQMAAS-2039"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12943013,
        "code": "ENTMQMAAS-2042",
        "name": "Docs: Add link to 1.4.2 fixed issues to 1.4 RNs",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12943229,
        "code": "ENTMQMAAS-2043",
        "name": "[#4349] Console-UI Create DropdownWithToggle generic component",
        "preceedingTasks": [
          "ENTMQMAAS-1913",
          "ENTMQMAAS-1995"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12943230,
        "code": "ENTMQMAAS-2044",
        "name": "[#4349] Console-UI Create DropdownWithKebabToggle generic component",
        "preceedingTasks": [
          "ENTMQMAAS-2105",
          "ENTMQMAAS-2043"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12943266,
        "code": "ENTMQMAAS-2045",
        "name": "[#4522] Update yarn dependencies",
        "preceedingTasks": [
          "ENTMQMAAS-2044"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12943338,
        "code": "ENTMQMAAS-2046",
        "name": "[#4546] : Refactor GraphQL purgeAddress to permit multiple target addresses",
        "preceedingTasks": [
          "ENTMQMAAS-2892",
          "ENTMQMAAS-2884",
          "ENTMQMAAS-2377",
          "ENTMQMAAS-2038"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12943339,
        "code": "ENTMQMAAS-2047",
        "name": "[#4549] : Implement GraphQL closeConnections",
        "preceedingTasks": [
          "ENTMQMAAS-2046"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12943370,
        "code": "ENTMQMAAS-2048",
        "name": "Console-IoT-UI- Create MetadataListTable view component",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12943394,
        "code": "ENTMQMAAS-2049",
        "name": "Console-IoT-UI-Create ViaGateways component for Device Info page",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12943408,
        "code": "ENTMQMAAS-2050",
        "name": "Console-IoT-UI-Create Credentials view component for Device Info page",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12943411,
        "code": "ENTMQMAAS-2051",
        "name": "Console-IoT-UI-View in Json Device Info page",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12943420,
        "code": "ENTMQMAAS-2052",
        "name": "[#4349] Consol-UI refactor for Address Space",
        "preceedingTasks": [
          "ENTMQMAAS-1887",
          "ENTMQMAAS-2051"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12943422,
        "code": "ENTMQMAAS-2053",
        "name": "[#4349] Console-UI-Code refactor for Address Space detail",
        "preceedingTasks": [
          "ENTMQMAAS-2052"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12943444,
        "code": "ENTMQMAAS-2054",
        "name": "[#4552] : Integrate connection close into the console",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12943548,
        "code": "ENTMQMAAS-2055",
        "name": "Add AMQP Protocol Adapter",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12943941,
        "code": "ENTMQMAAS-2069",
        "name": "Test 1.4.2 images and provide Sign-off",
        "preceedingTasks": [
          "ENTMQMAAS-2037"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12944025,
        "code": "ENTMQMAAS-2070",
        "name": "CI reports \\\"green\\\" in case of internal failures",
        "preceedingTasks": [
          "ENTMQMAAS-2069"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12944303,
        "code": "ENTMQMAAS-2071",
        "name": "Build warnings from UI builds",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12944573,
        "code": "ENTMQMAAS-2072",
        "name": "[#4567] : Refactor GraphQL delete addressspace and address to take more than one target",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12944574,
        "code": "ENTMQMAAS-2073",
        "name": "[#4568] : Create system test for connection close",
        "preceedingTasks": [
          "ENTMQMAAS-2070"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12944586,
        "code": "ENTMQMAAS-2074",
        "name": "[Console UI] modify createAddressSpace flow to allow endpoint configuration and a way to include endpoints detail",
        "preceedingTasks": [
          "ENTMQMAAS-2054"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12944611,
        "code": "ENTMQMAAS-2075",
        "name": "Console-IoT-UI - Create Filter component for device list",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12944641,
        "code": "ENTMQMAAS-2076",
        "name": "Console-IoT-UI- Create visual component for metadata in Create Device",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12944648,
        "code": "ENTMQMAAS-2077",
        "name": "Console-IoT-UI: Add auto populate feature for properties in metadata",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12944655,
        "code": "ENTMQMAAS-2078",
        "name": "Console-IoT-UI- Add and remove siblings and children in device registration metadata",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12944660,
        "code": "ENTMQMAAS-2079",
        "name": "Console-IoT-UI- Formulate json using device registration form",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12944664,
        "code": "ENTMQMAAS-2080",
        "name": "Console-IoT-UI- Add validations on nested data structure",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12944703,
        "code": "ENTMQMAAS-2082",
        "name": "[#4460] : [Shared infra] Use SASL EXTERNAL for router and broker management for shared infra",
        "preceedingTasks": [
          "ENTMQMAAS-2028"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12944704,
        "code": "ENTMQMAAS-2083",
        "name": "[#4572] : Upgrade Artemis to version 2.13.0",
        "preceedingTasks": [
          "ENTMQMAAS-2082"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12944746,
        "code": "ENTMQMAAS-2086",
        "name": "[#4574] : Lower default globalMaxSize of broker to 1/4 of broker heap",
        "preceedingTasks": [
          "ENTMQMAAS-2083"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12944757,
        "code": "ENTMQMAAS-2087",
        "name": "Extract the inter service PSK into a secret",
        "preceedingTasks": [
          "ENTMQMAAS-1860",
          "ENTMQMAAS-2048",
          "ENTMQMAAS-2055"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12945023,
        "code": "ENTMQMAAS-2088",
        "name": "[systemtest] create test container for running enmasse suite in delorean",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12945209,
        "code": "ENTMQMAAS-2089",
        "name": "[#4582] FirefoxConsoleTest.testEmptyLinkPage fails sporadically.",
        "preceedingTasks": [
          "ENTMQMAAS-878",
          "ENTMQMAAS-2488",
          "ENTMQMAAS-1497",
          "ENTMQMAAS-2088"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12945554,
        "code": "ENTMQMAAS-2091",
        "name": "Refactor GraphQL query in client side for deleteAddressSpace and deleteAddress to send many target objects",
        "preceedingTasks": [
          "ENTMQMAAS-1976",
          "ENTMQMAAS-1777",
          "ENTMQMAAS-2053",
          "ENTMQMAAS-2111",
          "ENTMQMAAS-1980",
          "ENTMQMAAS-2077",
          "ENTMQMAAS-2075"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12945561,
        "code": "ENTMQMAAS-2092",
        "name": "Console UI - Add filter for status in address-space list",
        "preceedingTasks": [
          "ENTMQMAAS-2091"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12945766,
        "code": "ENTMQMAAS-2094",
        "name": "[#4590] : Extend addressspaceschema to enumerate endpoint types and certification providers",
        "preceedingTasks": [
          "ENTMQMAAS-2047"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12945787,
        "code": "ENTMQMAAS-2095",
        "name": "Console-IoT-UI- Create Change Password dialog/modal component",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12945818,
        "code": "ENTMQMAAS-2096",
        "name": "[systemtest] write new method for wait until deployments/statefulsets are ready",
        "preceedingTasks": [
          "ENTMQMAAS-2089"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12945858,
        "code": "ENTMQMAAS-2097",
        "name": "Docs: Document procedure for closing connections using AMQ Console",
        "preceedingTasks": [
          "ENTMQMAAS-2034",
          "ENTMQMAAS-2042"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12946063,
        "code": "ENTMQMAAS-2098",
        "name": "[CI] Onboard on OCP LP testing pipeline",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12946065,
        "code": "ENTMQMAAS-2100",
        "name": "[systemtest] create monitoring tests for enmasse core components",
        "preceedingTasks": [
          "ENTMQMAAS-935",
          "ENTMQMAAS-2098"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12946066,
        "code": "ENTMQMAAS-2101",
        "name": "[systemtest] create monitoring tests for iot comonents",
        "preceedingTasks": [
          "ENTMQMAAS-2100"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12946068,
        "code": "ENTMQMAAS-2102",
        "name": "[#4641] Test message websocket fails on OpenShift 4.4.3/4.4.5",
        "preceedingTasks": [
          "ENTMQMAAS-2094"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12946219,
        "code": "ENTMQMAAS-2104",
        "name": "[CI] setup CPaaS tests for nightly base",
        "preceedingTasks": [
          "ENTMQMAAS-2101"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12946733,
        "code": "ENTMQMAAS-2105",
        "name": "Console-IoT-UI - Create Empty State component for device list",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12946734,
        "code": "ENTMQMAAS-2106",
        "name": "Console-IoT-UI - Create Alert component for Device List",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12946737,
        "code": "ENTMQMAAS-2107",
        "name": "Console-IoT-UI - Create Toolbar for Device List",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12946738,
        "code": "ENTMQMAAS-2108",
        "name": "Console-IoT-UI - Create Table component for Device LIst",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12946740,
        "code": "ENTMQMAAS-2109",
        "name": "Console-IoT-UI - Create Bulk Select component",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12946743,
        "code": "ENTMQMAAS-2110",
        "name": "Console-IoT-UI - Create Empty Result component for Device List",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12946748,
        "code": "ENTMQMAAS-2111",
        "name": "Console-IoT-UI - Create Add Gateway step for Add Device Wizard",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12946927,
        "code": "ENTMQMAAS-2112",
        "name": "Console-IoT-UI- Create form for Device Information",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12946946,
        "code": "ENTMQMAAS-2113",
        "name": "MQTT stopped working on brokered address space",
        "preceedingTasks": [
          "ENTMQMAAS-2107",
          "ENTMQMAAS-1914",
          "ENTMQMAAS-1470",
          "ENTMQMAAS-1939",
          "ENTMQMAAS-2087"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12946999,
        "code": "ENTMQMAAS-2114",
        "name": "Create console system tests for the endpoint features",
        "preceedingTasks": [
          "ENTMQMAAS-2104"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12947028,
        "code": "ENTMQMAAS-2115",
        "name": "Console-IoT-UI - Create component for Project certificate",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12947037,
        "code": "ENTMQMAAS-2116",
        "name": "Console-IoT-UI - Create Project certificate list visual components",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12947056,
        "code": "ENTMQMAAS-2117",
        "name": "Docs: Add procedures for configuring IoT infrastructure logging to downstream docs",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12947087,
        "code": "ENTMQMAAS-2118",
        "name": "[suite] add ability to override cluster type in systemtests",
        "preceedingTasks": [
          "ENTMQMAAS-1499",
          "ENTMQMAAS-936",
          "ENTMQMAAS-2114"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12947270,
        "code": "ENTMQMAAS-2119",
        "name": "[systemtest] Create tests for service selectors",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12947383,
        "code": "ENTMQMAAS-2120",
        "name": "[#4785] Docs: Setting per-address max TTL",
        "preceedingTasks": [
          "ENTMQMAAS-2073",
          "ENTMQMAAS-2117"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12947605,
        "code": "ENTMQMAAS-2121",
        "name": "[#4631] : Allow configuring CPU limits for infra",
        "preceedingTasks": [
          "ENTMQMAAS-2086"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12947613,
        "code": "ENTMQMAAS-2122",
        "name": "[systemtest] scale test improvements",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12947615,
        "code": "ENTMQMAAS-2123",
        "name": "[systemtest] rename messagingPerformanceTest to scaleConnectionTest",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12947618,
        "code": "ENTMQMAAS-2126",
        "name": "[systemtest] disable sharedinfra performance test",
        "preceedingTasks": [
          "ENTMQMAAS-1503",
          "ENTMQMAAS-1602",
          "ENTMQMAAS-974",
          "ENTMQMAAS-2122"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12947628,
        "code": "ENTMQMAAS-2128",
        "name": "Console-IoT-UI- Create Configuration Info Page",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12947749,
        "code": "ENTMQMAAS-2130",
        "name": "Token auth is not working on kubernetes",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 2.4,
          "database": 2.56,
          "devops": 3.12,
          "ai_ml": 2.66,
          "testing": 1.9,
          "issue_tracking": 2.57
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12947876,
        "code": "ENTMQMAAS-2131",
        "name": "Upgrade Infinispan to 11.x",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12947925,
        "code": "ENTMQMAAS-2132",
        "name": "Docs: Add link in 1.4 Release Notes",
        "preceedingTasks": [
          "ENTMQMAAS-2120"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12947982,
        "code": "ENTMQMAAS-2133",
        "name": "[#4637] : End-to-end address monitoring for standard address space",
        "preceedingTasks": [
          "ENTMQMAAS-2121"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12948103,
        "code": "ENTMQMAAS-2134",
        "name": "Upgrade documentation should include a step to restart the operator",
        "preceedingTasks": [
          "ENTMQMAAS-2132"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12948342,
        "code": "ENTMQMAAS-2135",
        "name": "Console-IoT-UI - Create toolbar for IoT Certificates",
        "preceedingTasks": [
          "ENTMQMAAS-2116"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12948349,
        "code": "ENTMQMAAS-2136",
        "name": "Console-IoT-UI - Fix storybooks for AddressSpaceList and AddressSpaceHeader",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12948351,
        "code": "ENTMQMAAS-2137",
        "name": "Console-IoT-UI - Modify IotDevice list tests for null checks",
        "preceedingTasks": [
          "ENTMQMAAS-2136"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12948354,
        "code": "ENTMQMAAS-2138",
        "name": "Console-IoT-UI - Write unit tests for visual components of IoT certificates",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12948395,
        "code": "ENTMQMAAS-2139",
        "name": "Enable websocket tests for OCP 4",
        "preceedingTasks": [
          "ENTMQMAAS-2378",
          "ENTMQMAAS-2102"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12948422,
        "code": "ENTMQMAAS-2140",
        "name": "Integrate Project Detail Header with mock server",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12948630,
        "code": "ENTMQMAAS-2143",
        "name": "[#4650] : standard-controller continued after death of the resource-checker.",
        "preceedingTasks": [
          "ENTMQMAAS-2139"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12948903,
        "code": "ENTMQMAAS-2145",
        "name": "Console-IoT-UI - Integrate create project wizard with mock server",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12948905,
        "code": "ENTMQMAAS-2146",
        "name": "Console-IoT-UI Create generic Json Editor",
        "preceedingTasks": [
          "ENTMQMAAS-2145"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12948906,
        "code": "ENTMQMAAS-2147",
        "name": "Console-IoT-UI - Create visual components for Iot Project Detail Page",
        "preceedingTasks": [
          "ENTMQMAAS-2135",
          "ENTMQMAAS-2146"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12948907,
        "code": "ENTMQMAAS-2148",
        "name": "Console-IoT-UI - Create visual component for Create a Device using JSON",
        "preceedingTasks": [
          "ENTMQMAAS-2147"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12948908,
        "code": "ENTMQMAAS-2149",
        "name": "Console-IoT-UI - Create a visual component to view device detail information",
        "preceedingTasks": [
          "ENTMQMAAS-2148"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12948972,
        "code": "ENTMQMAAS-2150",
        "name": "MonitorTest sporadic failure - query enmasse_addresses_not_ready_total unexpected value",
        "preceedingTasks": [
          "ENTMQMAAS-1859",
          "ENTMQMAAS-1819"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.33
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12949045,
        "code": "ENTMQMAAS-2151",
        "name": "System test to include filter address-spaces by status field",
        "preceedingTasks": [
          "ENTMQMAAS-2126"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12949049,
        "code": "ENTMQMAAS-2152",
        "name": "Console-IoT-UI- Create Device Detail Page and Integrate all UI components",
        "preceedingTasks": [
          "ENTMQMAAS-1861",
          "ENTMQMAAS-2072",
          "ENTMQMAAS-2078",
          "ENTMQMAAS-2128"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12949063,
        "code": "ENTMQMAAS-2153",
        "name": "[#4656] : Defining a connector before its referenced secret exists results in NPE and permanently unready address space",
        "preceedingTasks": [
          "ENTMQMAAS-2143"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12949076,
        "code": "ENTMQMAAS-2154",
        "name": "Unable to install monitoring on ocp4 if enmasse is installed via OLM",
        "preceedingTasks": [
          "ENTMQMAAS-2586",
          "ENTMQMAAS-2150"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.33
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12949141,
        "code": "ENTMQMAAS-2155",
        "name": "[systemtest] load env from json config",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12949566,
        "code": "ENTMQMAAS-2157",
        "name": "Add polarion requirements for 1.5.0",
        "preceedingTasks": [
          "ENTMQMAAS-2541",
          "ENTMQMAAS-2589",
          "ENTMQMAAS-2537",
          "ENTMQMAAS-2155"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12949565,
        "code": "ENTMQMAAS-2156",
        "name": "Create polarion release for 1.5.0",
        "preceedingTasks": [
          "ENTMQMAAS-2157"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12949567,
        "code": "ENTMQMAAS-2158",
        "name": "Create polarion metadata for new tests for 1.5.0",
        "preceedingTasks": [
          "ENTMQMAAS-2123"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12949779,
        "code": "ENTMQMAAS-2159",
        "name": "Console-IoT-UI- Create Credentials Filter Dropdown for ConfigurationInfo Page",
        "preceedingTasks": [
          "ENTMQMAAS-1987",
          "ENTMQMAAS-1805",
          "ENTMQMAAS-1893",
          "ENTMQMAAS-2152"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12950079,
        "code": "ENTMQMAAS-2160",
        "name": "Console-IoT-UI - Create Device List Page and integrate the visual components",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12950159,
        "code": "ENTMQMAAS-2161",
        "name": "UI Test Fails and warnings",
        "preceedingTasks": [
          "ENTMQMAAS-2172",
          "ENTMQMAAS-1806",
          "ENTMQMAAS-2149",
          "ENTMQMAAS-2164",
          "ENTMQMAAS-2138",
          "ENTMQMAAS-1895",
          "ENTMQMAAS-2112"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12950161,
        "code": "ENTMQMAAS-2162",
        "name": "Console-IoT-UI- Write graphql query for DeviceDetailPage and Integrate with UI",
        "preceedingTasks": [
          "ENTMQMAAS-1991",
          "ENTMQMAAS-2170",
          "ENTMQMAAS-2079",
          "ENTMQMAAS-2159"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12950168,
        "code": "ENTMQMAAS-2163",
        "name": "Console-IoT-UI- Create DeviceInfo container,  write query and integrate with mock server",
        "preceedingTasks": [
          "ENTMQMAAS-2162"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12950171,
        "code": "ENTMQMAAS-2164",
        "name": "Console-IoT-UI- Create ConfigurationInfo  container,  write query and integrate with mock server",
        "preceedingTasks": [
          "ENTMQMAAS-2080",
          "ENTMQMAAS-2137",
          "ENTMQMAAS-2163"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12950212,
        "code": "ENTMQMAAS-2165",
        "name": "Fix downstream build for 1.5",
        "preceedingTasks": [
          "ENTMQMAAS-1536",
          "ENTMQMAAS-2133"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12950257,
        "code": "ENTMQMAAS-2166",
        "name": "Wrong order of teardown in some IoT tests",
        "preceedingTasks": [
          "ENTMQMAAS-2131"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12950274,
        "code": "ENTMQMAAS-2167",
        "name": "Docs: Add link to 1.4.3 fixed issues to 1.4 RNs",
        "preceedingTasks": [
          "ENTMQMAAS-2134"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12950356,
        "code": "ENTMQMAAS-2170",
        "name": "Basic migration to shared infrastructure",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12950358,
        "code": "ENTMQMAAS-2172",
        "name": "Use internal authentication/authorization mechanism for protocol adapters",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12950360,
        "code": "ENTMQMAAS-2173",
        "name": "Drop external and provided downstream strategy",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12951295,
        "code": "ENTMQMAAS-2189",
        "name": "Plan dropdown is empty during the creation of an Address",
        "preceedingTasks": [
          "ENTMQMAAS-2333",
          "ENTMQMAAS-2161"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12951572,
        "code": "ENTMQMAAS-2192",
        "name": "Docs: Add procedure for enabling tracing for IoT infrastructure to downstream docs",
        "preceedingTasks": [
          "ENTMQMAAS-2167"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12951730,
        "code": "ENTMQMAAS-2193",
        "name": "Console-Ui-iot Modify Dialog Prompt component to include icon color and label for confirm button",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12951759,
        "code": "ENTMQMAAS-2194",
        "name": "Console-UI-IoT Integrate DataToolbar For Apply filter in Project List Page",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12951760,
        "code": "ENTMQMAAS-2195",
        "name": "Console-UI-IoT Integrate Project List  component with mock server",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12951768,
        "code": "ENTMQMAAS-2196",
        "name": "Enmasse CRDs are not removed (waiting for finalizers)",
        "preceedingTasks": [
          "ENTMQMAAS-2165"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12951913,
        "code": "ENTMQMAAS-2197",
        "name": "[systemtest] write workaround for catching all beforeall install issue",
        "preceedingTasks": [
          "ENTMQMAAS-2156"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12952016,
        "code": "ENTMQMAAS-2198",
        "name": "Docs: Add address canary metrics to downstream docs",
        "preceedingTasks": [
          "ENTMQMAAS-2192"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12952308,
        "code": "ENTMQMAAS-2199",
        "name": "[#4704] : Console returns 500 internal error when configured with custom certificate",
        "preceedingTasks": [
          "ENTMQMAAS-2153"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12952309,
        "code": "ENTMQMAAS-2200",
        "name": "[#4705] :  Upgrade to 0.31.z with address space created by service broker in a non-existent namespace fails",
        "preceedingTasks": [
          "ENTMQMAAS-2196"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12952319,
        "code": "ENTMQMAAS-2201",
        "name": "CI comes up green on GitHub when called with a non-existing test",
        "preceedingTasks": [
          "ENTMQMAAS-2197"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12952406,
        "code": "ENTMQMAAS-2203",
        "name": "Console-IoT-UI- Create component for Error States  in DeviceInfo Page",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12952745,
        "code": "ENTMQMAAS-2204",
        "name": "Console-IoT-UI - add dialogs for device list page",
        "preceedingTasks": [
          "ENTMQMAAS-2160"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12952928,
        "code": "ENTMQMAAS-2206",
        "name": "Console-UI-IoT Integrate endpoint configuration to create messaging project in iot-design",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12952947,
        "code": "ENTMQMAAS-2208",
        "name": "Install ocp 3.11 with valid trusted cert",
        "preceedingTasks": [
          "ENTMQMAAS-2201"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12952954,
        "code": "ENTMQMAAS-2209",
        "name": "Flaky test monitoring address",
        "preceedingTasks": [
          "ENTMQMAAS-2208"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12953153,
        "code": "ENTMQMAAS-2210",
        "name": "Work around @MethodSource JUnit issue",
        "preceedingTasks": [
          "ENTMQMAAS-2173"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12953295,
        "code": "ENTMQMAAS-2211",
        "name": "[systemtest] deploy certs in iot tests counts with enmasse-infra namespace",
        "preceedingTasks": [
          "ENTMQMAAS-2209"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12953313,
        "code": "ENTMQMAAS-2212",
        "name": "[systemtest] add ability to run tests against all kubernetes implementations",
        "preceedingTasks": [
          "ENTMQMAAS-2211"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12953533,
        "code": "ENTMQMAAS-2213",
        "name": "[#4721] : Standard address space agent erroneously processes addresses of other addressspaces in the same namespace.",
        "preceedingTasks": [
          "ENTMQMAAS-2199"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12953565,
        "code": "ENTMQMAAS-2214",
        "name": "[systemtest] add ability to check errors in pod logs during tests",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.27,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.16
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12953591,
        "code": "ENTMQMAAS-2215",
        "name": "[#4724] : Broker logs contains [[AMQPSessionCallback] class java.lang.Boolean cannot be cast to class java.lang.String]",
        "preceedingTasks": [
          "ENTMQMAAS-2200"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12953692,
        "code": "ENTMQMAAS-2216",
        "name": "Rewrite smoke tests to run messaging clients in kubernetes pods",
        "preceedingTasks": [
          "ENTMQMAAS-2548",
          "ENTMQMAAS-2212"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12953814,
        "code": "ENTMQMAAS-2217",
        "name": "[#4730] : Enhance brokered address space's address controller (agent) to populate address plan status",
        "preceedingTasks": [
          "ENTMQMAAS-2213"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12953815,
        "code": "ENTMQMAAS-2218",
        "name": "[#4612] : The agent is letting the router links create the new addresses on the broker",
        "preceedingTasks": [
          "ENTMQMAAS-2217"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12953912,
        "code": "ENTMQMAAS-2219",
        "name": "Console-IoT-UI- Create ActionManager component for device detail page",
        "preceedingTasks": [
          "ENTMQMAAS-2203"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12953914,
        "code": "ENTMQMAAS-2220",
        "name": "[#4735] : Add version and commit revision metadata to operator metadata",
        "preceedingTasks": [
          "ENTMQMAAS-2215"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12953960,
        "code": "ENTMQMAAS-2222",
        "name": "Upgrade to Hono 1.2.3",
        "preceedingTasks": [
          "ENTMQMAAS-2130"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 2.4,
          "database": 2.56,
          "devops": 3.12,
          "ai_ml": 2.66,
          "testing": 1.9,
          "issue_tracking": 2.57
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12954417,
        "code": "ENTMQMAAS-2223",
        "name": "Fail during test decrement infra on ocp4",
        "preceedingTasks": [
          "ENTMQMAAS-2220"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12954455,
        "code": "ENTMQMAAS-2224",
        "name": "Console-IoT-UI- Add kebab dropdown options based on backend response in device detail  page",
        "preceedingTasks": [
          "ENTMQMAAS-2140",
          "ENTMQMAAS-2219"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12954460,
        "code": "ENTMQMAAS-2226",
        "name": "Console-IoT-UI- Integrate mock-server queries in EditGatewaysContainer device detail page",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12954462,
        "code": "ENTMQMAAS-2227",
        "name": "Console-IoT-UI- Integrate mock-server queries  with EditDeviceInJsonContainer in device detail page",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12954488,
        "code": "ENTMQMAAS-2229",
        "name": "Console-IoT-UI- Integrate change connection type (kebab dropdown option) functionality in device detail page",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12954498,
        "code": "ENTMQMAAS-2231",
        "name": "Console UI- Validation on name in create address is not working",
        "preceedingTasks": [
          "ENTMQMAAS-2426",
          "ENTMQMAAS-2206"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12954499,
        "code": "ENTMQMAAS-2232",
        "name": "Console-IoT-UI- Integrate mock-server queries with AddCredentialsContainer in device detail page",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12954572,
        "code": "ENTMQMAAS-2234",
        "name": "Fix remaining IoT test failures",
        "preceedingTasks": [
          "ENTMQMAAS-2224",
          "ENTMQMAAS-2210"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12954923,
        "code": "ENTMQMAAS-2236",
        "name": "Standard address space unable to receive messages from wildcard topic address",
        "preceedingTasks": [
          "ENTMQMAAS-2218"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12955010,
        "code": "ENTMQMAAS-2237",
        "name": "[#4755] : Change alert severity levels",
        "preceedingTasks": [
          "ENTMQMAAS-2154"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.33
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12955016,
        "code": "ENTMQMAAS-2238",
        "name": "[systemtest] fix flaxy service catalog brokered test",
        "preceedingTasks": [
          "ENTMQMAAS-2216"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12955037,
        "code": "ENTMQMAAS-2239",
        "name": "Console-IoT-UI - adjust alert and empty state according to number of devices",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12955111,
        "code": "ENTMQMAAS-2240",
        "name": "[CI] update pipelines to Amq Online 1.4.4",
        "preceedingTasks": [
          "ENTMQMAAS-2238"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12955539,
        "code": "ENTMQMAAS-2242",
        "name": "Console-IoT-UI - manual selection of DeviceList rows does not check the bulk select checkbox",
        "preceedingTasks": [
          "ENTMQMAAS-2239"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12955702,
        "code": "ENTMQMAAS-2243",
        "name": "Docs: Add link to 1.4.4 fixed issues to 1.4 RNs",
        "preceedingTasks": [
          "ENTMQMAAS-2198"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12956068,
        "code": "ENTMQMAAS-2257",
        "name": "[#4773] : Error creating topic when address space contains connectors",
        "preceedingTasks": [
          "ENTMQMAAS-2223"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12956184,
        "code": "ENTMQMAAS-2258",
        "name": "Console allow address with $ char",
        "preceedingTasks": [
          "ENTMQMAAS-2263",
          "ENTMQMAAS-2231"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12956269,
        "code": "ENTMQMAAS-2259",
        "name": "Upgrade Patternfly",
        "preceedingTasks": [
          "ENTMQMAAS-2193",
          "ENTMQMAAS-2189"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12956401,
        "code": "ENTMQMAAS-2260",
        "name": "Docs: Add note to downstream docs about choosing a namespace when deploying test certificates",
        "preceedingTasks": [
          "ENTMQMAAS-2243"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12956827,
        "code": "ENTMQMAAS-2262",
        "name": "[systemtest] upgrade to surefire plugin 3.0.0-M5 and remove workarounds",
        "preceedingTasks": [
          "ENTMQMAAS-2240"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12956864,
        "code": "ENTMQMAAS-2263",
        "name": "Console-IoT-UI - Testing the patternfly upgrade",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12957156,
        "code": "ENTMQMAAS-2266",
        "name": "Test new openshift OLM UI on ocp 4.5 with amq online 1.5.0",
        "preceedingTasks": [
          "ENTMQMAAS-2262"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12957157,
        "code": "ENTMQMAAS-2267",
        "name": "[CI] allow to build custom manifest image from insecure registry",
        "preceedingTasks": [
          "ENTMQMAAS-2564",
          "ENTMQMAAS-2266"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12957638,
        "code": "ENTMQMAAS-2268",
        "name": "Add metadata rules to device registration form",
        "preceedingTasks": [
          "ENTMQMAAS-2259"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12957645,
        "code": "ENTMQMAAS-2269",
        "name": "Console-IoT-UI- Create use-patternfly module in console app and fixed issues",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12957652,
        "code": "ENTMQMAAS-2270",
        "name": "Console-UI Filter on type and status is not working",
        "preceedingTasks": [
          "ENTMQMAAS-2495",
          "ENTMQMAAS-1932",
          "ENTMQMAAS-2269"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12957855,
        "code": "ENTMQMAAS-2271",
        "name": "Console-IoT-UI - plan dropdown not getting cleared while switching from subscription type in Create Address wizard",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12957861,
        "code": "ENTMQMAAS-2272",
        "name": "Console-IoT-UI - Applying filters should redirect to first page",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12958258,
        "code": "ENTMQMAAS-2275",
        "name": "Console-IoT-UI- Fix upgrade patternfly 4 issues",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12958300,
        "code": "ENTMQMAAS-2276",
        "name": "Console-IoT-UI- Fix alignment of Address Space table in Firefox browser",
        "preceedingTasks": [
          "ENTMQMAAS-2268"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12958403,
        "code": "ENTMQMAAS-2277",
        "name": "Console-IoT-UI - DeviceList.Unhide dropdown options under parameters criteria, second collumn",
        "preceedingTasks": [
          "ENTMQMAAS-2342",
          "ENTMQMAAS-2272"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12958448,
        "code": "ENTMQMAAS-2278",
        "name": "[#4815] : Support consumer priority for forwarders",
        "preceedingTasks": [
          "ENTMQMAAS-2236"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12958471,
        "code": "ENTMQMAAS-2279",
        "name": "Docs: Add procedure to downstream docs for obtaining an authentication token",
        "preceedingTasks": [
          "ENTMQMAAS-2260"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12958609,
        "code": "ENTMQMAAS-2280",
        "name": "Docs: Add securityContext field to the brokered/standard infra config",
        "preceedingTasks": [
          "ENTMQMAAS-2279"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12958767,
        "code": "ENTMQMAAS-2281",
        "name": "[systemtest] Modify system test for multiple addspace filters",
        "preceedingTasks": [
          "ENTMQMAAS-1367",
          "ENTMQMAAS-2158"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12958902,
        "code": "ENTMQMAAS-2282",
        "name": "[CI] create job which repush images from proxy registry into private quay",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12958905,
        "code": "ENTMQMAAS-2283",
        "name": "[CI] create job which build new templates with private quay images",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12958997,
        "code": "ENTMQMAAS-2285",
        "name": "Console-IoT-UI - Fix failing test cases and resolve warnings after Patternfly upgrade",
        "preceedingTasks": [
          "ENTMQMAAS-2277"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12959129,
        "code": "ENTMQMAAS-2286",
        "name": "Docs: Remove note regarding DLQs",
        "preceedingTasks": [
          "ENTMQMAAS-2280"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12959312,
        "code": "ENTMQMAAS-2287",
        "name": "[systemtests] enable ability to run tests in parallel in surefire",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12959313,
        "code": "ENTMQMAAS-2288",
        "name": "[systemtest] modify resource manager to delete only test scoped resources in parallel run",
        "preceedingTasks": [
          "ENTMQMAAS-2650",
          "ENTMQMAAS-1801",
          "ENTMQMAAS-2287"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12959552,
        "code": "ENTMQMAAS-2289",
        "name": "[CI] change structure of jobs for enmasse 1.0 upstream",
        "preceedingTasks": [
          "ENTMQMAAS-2288"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12959580,
        "code": "ENTMQMAAS-2290",
        "name": "[#4839] : Agent leaks memory if qdrouter is restarted.",
        "preceedingTasks": [
          "ENTMQMAAS-2278"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12960046,
        "code": "ENTMQMAAS-2292",
        "name": "Delete lib functions which we do not need for enmasse 1.0",
        "preceedingTasks": [
          "ENTMQMAAS-2281"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12960045,
        "code": "ENTMQMAAS-2291",
        "name": "Delete tests for old enmase 0.x",
        "preceedingTasks": [
          "ENTMQMAAS-2289"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12960581,
        "code": "ENTMQMAAS-2314",
        "name": "Monitoring of broker does not work",
        "preceedingTasks": [
          "ENTMQMAAS-2257"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12960612,
        "code": "ENTMQMAAS-2315",
        "name": "Check 1.5.0 stage documentation",
        "preceedingTasks": [
          "ENTMQMAAS-2292"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12960647,
        "code": "ENTMQMAAS-2317",
        "name": "Update iot console GraphQL types to reflect shared-infra changes",
        "preceedingTasks": [
          "ENTMQMAAS-2518",
          "ENTMQMAAS-1582"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12960648,
        "code": "ENTMQMAAS-2318",
        "name": "Add mock stats for IOT entities in mock server",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12960653,
        "code": "ENTMQMAAS-2319",
        "name": "Add graphQL query to delete multiple iot projects",
        "preceedingTasks": [
          "ENTMQMAAS-2517",
          "ENTMQMAAS-404",
          "ENTMQMAAS-1345",
          "ENTMQMAAS-1782",
          "ENTMQMAAS-2318"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12960657,
        "code": "ENTMQMAAS-2320",
        "name": "Add graphQL querry to delete multiples iot devices",
        "preceedingTasks": [
          "ENTMQMAAS-2319"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12960658,
        "code": "ENTMQMAAS-2321",
        "name": "Add status fields for Iot devices in mock server",
        "preceedingTasks": [
          "ENTMQMAAS-2320"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12960660,
        "code": "ENTMQMAAS-2322",
        "name": "Add UUID for credentials entries in mock servers",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12960662,
        "code": "ENTMQMAAS-2323",
        "name": "Add graphQL query to generate command to create iot project",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12960663,
        "code": "ENTMQMAAS-2324",
        "name": "Boolean values in filters don't work for iot device + add examples in README",
        "preceedingTasks": [
          "ENTMQMAAS-973",
          "ENTMQMAAS-2512",
          "ENTMQMAAS-2323"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12960668,
        "code": "ENTMQMAAS-2325",
        "name": "Add user token in whoami console querry",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12960671,
        "code": "ENTMQMAAS-2326",
        "name": "Mock server should return an array of addresses fro command",
        "preceedingTasks": [
          "ENTMQMAAS-1918",
          "ENTMQMAAS-2325"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12960820,
        "code": "ENTMQMAAS-2330",
        "name": "Create graphQL query to disable multiples iot projects",
        "preceedingTasks": [
          "ENTMQMAAS-2326"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12960819,
        "code": "ENTMQMAAS-2329",
        "name": "Hono - Add Management API operation to delete all devices matching a filter",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12960825,
        "code": "ENTMQMAAS-2331",
        "name": "[CI] adopt new one ocp deploy instead of osia",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12961134,
        "code": "ENTMQMAAS-2333",
        "name": "[#4859] : Use OpenShift4 oauth-proxy when running on OpenShift4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12961371,
        "code": "ENTMQMAAS-2335",
        "name": "[#4860] : Standard controller does not log cause of startup failure",
        "preceedingTasks": [
          "ENTMQMAAS-2290"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12961374,
        "code": "ENTMQMAAS-2336",
        "name": "Console-IoT-UI - Integrate pagination of device list and redesign the toolbar",
        "preceedingTasks": [
          "ENTMQMAAS-2382",
          "ENTMQMAAS-1808",
          "ENTMQMAAS-2226",
          "ENTMQMAAS-2435",
          "ENTMQMAAS-2431",
          "ENTMQMAAS-2285"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12961385,
        "code": "ENTMQMAAS-2337",
        "name": "Console - IoT - UI - Integrate Create Project Flow with mock server's create query",
        "preceedingTasks": [
          "ENTMQMAAS-2194",
          "ENTMQMAAS-2234",
          "ENTMQMAAS-2204",
          "ENTMQMAAS-2276"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12961392,
        "code": "ENTMQMAAS-2338",
        "name": "Console-IoT-UI-Edit in JSON under certificates not working",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.63,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.36
        },
        "tags": [
          "devops",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12961397,
        "code": "ENTMQMAAS-2339",
        "name": "Console - IoT - UI - Quick fixes on the Create Project Workflow",
        "preceedingTasks": [
          "ENTMQMAAS-1807",
          "ENTMQMAAS-2001",
          "ENTMQMAAS-2337"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12961398,
        "code": "ENTMQMAAS-2340",
        "name": "Console-IoT-UI - Fix links and navigations in the Project Detail Info page",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12961439,
        "code": "ENTMQMAAS-2341",
        "name": "[#4863] : [Shared Infra] [Identity] Basic Access Control Server",
        "preceedingTasks": [
          "ENTMQMAAS-2335"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12961821,
        "code": "ENTMQMAAS-2342",
        "name": "Add cross console navigation for RHMI solution explorer",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12962350,
        "code": "ENTMQMAAS-2343",
        "name": "[systemtests] fix node pot tests on AWS",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12962588,
        "code": "ENTMQMAAS-2348",
        "name": "[#4873] : AddresSpaceController reconciling fails on encountering unexpected field(s) at the top level of the addressspace object",
        "preceedingTasks": [
          "ENTMQMAAS-2341"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12964011,
        "code": "ENTMQMAAS-2349",
        "name": "[systemtest] Remove doTest methods for client utilities",
        "preceedingTasks": [
          "ENTMQMAAS-2315"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12964390,
        "code": "ENTMQMAAS-2350",
        "name": "Console-IoT-UI - Handle project status mutation in mock and implement bulk delete of devices",
        "preceedingTasks": [
          "ENTMQMAAS-1809",
          "ENTMQMAAS-2432",
          "ENTMQMAAS-2340"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12964407,
        "code": "ENTMQMAAS-2351",
        "name": "Console-IoT Add enable/disable option for iot project in project list",
        "preceedingTasks": [
          "ENTMQMAAS-2258"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12964465,
        "code": "ENTMQMAAS-2352",
        "name": "Rename IoTProject to IoTTenant",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12964913,
        "code": "ENTMQMAAS-2353",
        "name": "[CI] Enable caching dependencies on actions",
        "preceedingTasks": [
          "ENTMQMAAS-2349"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12964915,
        "code": "ENTMQMAAS-2354",
        "name": "[systemtests] Migrate all doTest methods (clients) to clientRunner",
        "preceedingTasks": [
          "ENTMQMAAS-2353"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12965028,
        "code": "ENTMQMAAS-2355",
        "name": "[UXD] V2.0 UI Changes for Endpoint",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 3.49,
          "database": 2.56,
          "devops": 3.54,
          "ai_ml": 2.44,
          "testing": 1.92,
          "issue_tracking": 2.28
        },
        "tags": [
          "devops",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12965059,
        "code": "ENTMQMAAS-2356",
        "name": "[systemtest] Improve code readability and modify framework part",
        "preceedingTasks": [
          "ENTMQMAAS-1752",
          "ENTMQMAAS-2343"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12965819,
        "code": "ENTMQMAAS-2357",
        "name": "Console-IoT-UI- Create  serialize function  for credentials",
        "preceedingTasks": [
          "ENTMQMAAS-1958",
          "ENTMQMAAS-2275"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12965836,
        "code": "ENTMQMAAS-2358",
        "name": "[systemtest] enable systemtests framework unit tests without kubernetes connection",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12965878,
        "code": "ENTMQMAAS-2359",
        "name": "Console-IoT-UI - Upgrade device list filter and handle staus change of devices",
        "preceedingTasks": [
          "ENTMQMAAS-2350"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12966433,
        "code": "ENTMQMAAS-2361",
        "name": "OLM operator fails to upgrade from 1.4.4 to 1.5.0 on OCP 4.4",
        "preceedingTasks": [
          "ENTMQMAAS-2314"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12966461,
        "code": "ENTMQMAAS-2362",
        "name": "EnmasseOperatorManager ignores the \\\"skip cleanup\\\" flag",
        "preceedingTasks": [
          "ENTMQMAAS-2653",
          "ENTMQMAAS-2358"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12966532,
        "code": "ENTMQMAAS-2363",
        "name": "[CI] enable iot profile for nightly upstream testing",
        "preceedingTasks": [
          "ENTMQMAAS-2362"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12966534,
        "code": "ENTMQMAAS-2364",
        "name": "Create the backend service for the iot console",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12966539,
        "code": "ENTMQMAAS-2365",
        "name": "iot console metrics",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12966540,
        "code": "ENTMQMAAS-2366",
        "name": "Annotation @Kubernetes in systemtests only works on minikube",
        "preceedingTasks": [
          "ENTMQMAAS-2363"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12966542,
        "code": "ENTMQMAAS-2367",
        "name": "console backend : implement create iot tenant",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12966543,
        "code": "ENTMQMAAS-2368",
        "name": "console backend : implement delete iot tenant",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12966544,
        "code": "ENTMQMAAS-2369",
        "name": "console backend : design iot tenant and messaging projects lists",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12966545,
        "code": "ENTMQMAAS-2370",
        "name": "console backend : implement toggle iot tenant state",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12966546,
        "code": "ENTMQMAAS-2371",
        "name": "console backend : implement create iot device",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12966547,
        "code": "ENTMQMAAS-2372",
        "name": "console backend : implement delete iot device",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12966548,
        "code": "ENTMQMAAS-2373",
        "name": "console backend : implement toggle iot device state",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12966550,
        "code": "ENTMQMAAS-2374",
        "name": "console backend : implement retrieve iot device list",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12966554,
        "code": "ENTMQMAAS-2375",
        "name": "iot device registry : implement filters and GET method on /devices",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12966555,
        "code": "ENTMQMAAS-2376",
        "name": "iot device registry : implement status field for iot devices",
        "preceedingTasks": [
          "ENTMQMAAS-2883",
          "ENTMQMAAS-2375"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12966556,
        "code": "ENTMQMAAS-2377",
        "name": "console backend : implement get credentials for iot device",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12966557,
        "code": "ENTMQMAAS-2378",
        "name": "console backend : implement set credentials for iot device",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12966682,
        "code": "ENTMQMAAS-2379",
        "name": "Add iot tenant messaging credentials in graphQL",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12966715,
        "code": "ENTMQMAAS-2380",
        "name": "Install 'time' command",
        "preceedingTasks": [
          "ENTMQMAAS-2366"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12966834,
        "code": "ENTMQMAAS-2382",
        "name": "Migrate command and control systemtests to new model",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12967490,
        "code": "ENTMQMAAS-2383",
        "name": "Test summary broken",
        "preceedingTasks": [
          "ENTMQMAAS-2380"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12967558,
        "code": "ENTMQMAAS-2384",
        "name": "[#4950] : [Access Control] add SASL PLAIN support and initial identity provider support",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12967614,
        "code": "ENTMQMAAS-2386",
        "name": "Console-IoT-UI- Integrate mock-server for credentials filter on ConfigurationInfo page",
        "preceedingTasks": [
          "ENTMQMAAS-2357"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12968092,
        "code": "ENTMQMAAS-2401",
        "name": "[systemtest] delete old ST scripts and old automation",
        "preceedingTasks": [
          "ENTMQMAAS-2383"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12968426,
        "code": "ENTMQMAAS-2402",
        "name": "[CI] Parallelization of PR job",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12968442,
        "code": "ENTMQMAAS-2403",
        "name": "Add validations on metadata values based on the Type",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12968462,
        "code": "ENTMQMAAS-2409",
        "name": "Console-IoT-UI- Integrate mock-server query with EditCredentialsContainer in device detail pege",
        "preceedingTasks": [
          "ENTMQMAAS-1962",
          "ENTMQMAAS-2386"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12968463,
        "code": "ENTMQMAAS-2410",
        "name": "Console - IoT -UI - integrate Device status bulk update and CSS changes",
        "preceedingTasks": [
          "ENTMQMAAS-2403",
          "ENTMQMAAS-2412",
          "ENTMQMAAS-2359"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12968467,
        "code": "ENTMQMAAS-2411",
        "name": "Console-UI-IoT Convert modal wizard to inPage wizard for create device flow",
        "preceedingTasks": [
          "ENTMQMAAS-2352",
          "ENTMQMAAS-2427",
          "ENTMQMAAS-2271",
          "ENTMQMAAS-2351"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12968503,
        "code": "ENTMQMAAS-2412",
        "name": "Use non-nodeport approach for tests on OCP4",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12968508,
        "code": "ENTMQMAAS-2413",
        "name": "[UXD] UI changes for IoT - AMQ Online V2.0",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.62,
          "frontend": 3.43,
          "database": 3.46,
          "devops": 3.93,
          "ai_ml": 3.98,
          "testing": 2.21,
          "issue_tracking": 3.08
        },
        "tags": [
          "ai_ml",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12968747,
        "code": "ENTMQMAAS-2414",
        "name": "Switch to Go 1.14",
        "preceedingTasks": [
          "ENTMQMAAS-2401"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12969027,
        "code": "ENTMQMAAS-2415",
        "name": "[CI] Move github actions to go version 1.14",
        "preceedingTasks": [
          "ENTMQMAAS-2291",
          "ENTMQMAAS-2402"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12969488,
        "code": "ENTMQMAAS-2417",
        "name": "Console-IoT-UI - Sorting IoT devices by status date is not working",
        "preceedingTasks": [
          "ENTMQMAAS-2348",
          "ENTMQMAAS-2379"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12971044,
        "code": "ENTMQMAAS-2418",
        "name": "[CI] update pipelines to ocp 4.5 and 4.4",
        "preceedingTasks": [
          "ENTMQMAAS-2414"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12971109,
        "code": "ENTMQMAAS-2419",
        "name": "[CI] add job for running nightly of release-0.33 branch from upstream",
        "preceedingTasks": [
          "ENTMQMAAS-2418"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12971337,
        "code": "ENTMQMAAS-2420",
        "name": "Docs: Add link to 1.5.1 resolved issues to 1.5 RNs",
        "preceedingTasks": [
          "ENTMQMAAS-2286"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12971419,
        "code": "ENTMQMAAS-2421",
        "name": "Docs: Release Notes - Add known issue OLM Subscription fails with OpenShift 4.4.11 and 4.5.1",
        "preceedingTasks": [
          "ENTMQMAAS-2420"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12971593,
        "code": "ENTMQMAAS-2422",
        "name": "Console-IoT-UI - Add meaningful ID to address module",
        "preceedingTasks": [
          "ENTMQMAAS-2339",
          "ENTMQMAAS-2195",
          "ENTMQMAAS-2242",
          "ENTMQMAAS-2338"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.63,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.36
        },
        "tags": [
          "devops",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12971604,
        "code": "ENTMQMAAS-2423",
        "name": "Console-IoT-UI- Add meaningful ID to address-detail module",
        "preceedingTasks": [
          "ENTMQMAAS-2422"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.63,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.36
        },
        "tags": [
          "devops",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12971607,
        "code": "ENTMQMAAS-2424",
        "name": "Console-IoT-UI - Add meaningful ID to connections module",
        "preceedingTasks": [
          "ENTMQMAAS-2423"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.63,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.36
        },
        "tags": [
          "devops",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12971609,
        "code": "ENTMQMAAS-2425",
        "name": "Console-IoT-UI - Add meaningful ID to Endpoint module",
        "preceedingTasks": [
          "ENTMQMAAS-2424"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.63,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.36
        },
        "tags": [
          "devops",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12971610,
        "code": "ENTMQMAAS-2426",
        "name": "Console-IoT-UI - Add meaningful ID to IoT Certificates module",
        "preceedingTasks": [
          "ENTMQMAAS-2425"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.63,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.36
        },
        "tags": [
          "devops",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12971612,
        "code": "ENTMQMAAS-2427",
        "name": "Console-IoT-UI - Add meaningful ID to IoT device detail module",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.63,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.36
        },
        "tags": [
          "devops",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12971614,
        "code": "ENTMQMAAS-2428",
        "name": "Console-IoT-UI - Add meaningful ID to IoT project detail module",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.63,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.36
        },
        "tags": [
          "devops",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12971615,
        "code": "ENTMQMAAS-2429",
        "name": "Console-IoT-UI - Add meaningful ID to connection details module",
        "preceedingTasks": [
          "ENTMQMAAS-2411",
          "ENTMQMAAS-2428"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.63,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.36
        },
        "tags": [
          "devops",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12971618,
        "code": "ENTMQMAAS-2431",
        "name": "Console-IoT-UI - Add meaningful ID to IoT device module",
        "preceedingTasks": [
          "ENTMQMAAS-2429"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.63,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.36
        },
        "tags": [
          "devops",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12971617,
        "code": "ENTMQMAAS-2430",
        "name": "Console-IoT-UI - Add meaningful ID to project module",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.63,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.36
        },
        "tags": [
          "devops",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12971619,
        "code": "ENTMQMAAS-2432",
        "name": "Console-IoT-UI - Add meaningful ID to address space module",
        "preceedingTasks": [
          "ENTMQMAAS-2336",
          "ENTMQMAAS-2430"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.63,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.36
        },
        "tags": [
          "devops",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12971818,
        "code": "ENTMQMAAS-2435",
        "name": "[Console-Iot] Create Device Using Json format",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12972453,
        "code": "ENTMQMAAS-2436",
        "name": "[CI] create job for runing tests on dis cluster in maas-jenkins",
        "preceedingTasks": [
          "ENTMQMAAS-2419"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12973217,
        "code": "ENTMQMAAS-2437",
        "name": "[IoT Design] Edit a Device",
        "preceedingTasks": [
          "ENTMQMAAS-964",
          "ENTMQMAAS-1810",
          "ENTMQMAAS-2413"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.62,
          "frontend": 3.43,
          "database": 3.46,
          "devops": 3.93,
          "ai_ml": 3.98,
          "testing": 2.21,
          "issue_tracking": 3.08
        },
        "tags": [
          "ai_ml",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12973259,
        "code": "ENTMQMAAS-2438",
        "name": "[systemtests] tekton use lightweight images from google tekton project",
        "preceedingTasks": [
          "ENTMQMAAS-997",
          "ENTMQMAAS-2656",
          "ENTMQMAAS-2436"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12973268,
        "code": "ENTMQMAAS-2439",
        "name": "[#5001] : AMQ Online CSV sticks at Pending since OpenShift 4.4.11/4.5.1",
        "preceedingTasks": [
          "ENTMQMAAS-2451",
          "ENTMQMAAS-2384"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12973366,
        "code": "ENTMQMAAS-2440",
        "name": "Console-IoT-UI-Fix alignment isuues in add a device modal dialog",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.63,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.36
        },
        "tags": [
          "devops",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12973404,
        "code": "ENTMQMAAS-2442",
        "name": "Console-IoT-UI - Add meaningful ID to components folder",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.63,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.36
        },
        "tags": [
          "devops",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12974138,
        "code": "ENTMQMAAS-2445",
        "name": "[systemtests] tekton allow to run iot tests and add examples",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12974250,
        "code": "ENTMQMAAS-2447",
        "name": "[#5012] : Yarn warnings since console-iot merge",
        "preceedingTasks": [
          "ENTMQMAAS-2409"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12974260,
        "code": "ENTMQMAAS-2448",
        "name": "messaging-monitoring-app exclude connection/session establishment from latency time.",
        "preceedingTasks": [
          "ENTMQMAAS-2439"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12974280,
        "code": "ENTMQMAAS-2449",
        "name": "Console-IoT-UI- deserialize function for credentials",
        "preceedingTasks": [
          "ENTMQMAAS-2504",
          "ENTMQMAAS-2447"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12974582,
        "code": "ENTMQMAAS-2450",
        "name": "[systemtest] rewrite resource manager to keep default resources if another test using it",
        "preceedingTasks": [
          "ENTMQMAAS-1124",
          "ENTMQMAAS-2445"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12975991,
        "code": "ENTMQMAAS-2451",
        "name": "Add IN filtering in console backend",
        "preceedingTasks": [
          "ENTMQMAAS-2417"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        },
        "tags": [
          "backend",
          "database"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12976439,
        "code": "ENTMQMAAS-2452",
        "name": "Docs: Add link to 1.5.2 resolved issues to 1.5 RNs",
        "preceedingTasks": [
          "ENTMQMAAS-2450"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12976963,
        "code": "ENTMQMAAS-2453",
        "name": "[Console-Iot] Integrate Create Device using JSON component with mock server",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12976969,
        "code": "ENTMQMAAS-2454",
        "name": "[Console-UI] Allow user to delete edit and download certs for messaging project",
        "preceedingTasks": [
          "ENTMQMAAS-2222",
          "ENTMQMAAS-2410",
          "ENTMQMAAS-2227",
          "ENTMQMAAS-2119",
          "ENTMQMAAS-2440",
          "ENTMQMAAS-1891",
          "ENTMQMAAS-2453"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12977069,
        "code": "ENTMQMAAS-2457",
        "name": "[#5046] : Ability to exclude EnMasse IoT components from Ansible install",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12977320,
        "code": "ENTMQMAAS-2458",
        "name": "[#5047] : Adding InfraConfig/AddressSpace NetworkPolicy with pod selector fails on OpenShift 4.5",
        "preceedingTasks": [
          "ENTMQMAAS-2448"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12977369,
        "code": "ENTMQMAAS-2459",
        "name": "Docs: Document Pods overview",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12978621,
        "code": "ENTMQMAAS-2460",
        "name": "Operator metadata for 1.5.2 contains wrong information",
        "preceedingTasks": [
          "ENTMQMAAS-2458"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12978875,
        "code": "ENTMQMAAS-2462",
        "name": "Docs: Release Notes - Remove workaround for issue when installing AMQ Online from the OperatorHub on OpenShift 4.4.11 and 4.5.1",
        "preceedingTasks": [
          "ENTMQMAAS-1129",
          "ENTMQMAAS-2452"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12979977,
        "code": "ENTMQMAAS-2463",
        "name": "Console-IoT-UI- Implement change credentials status enabled/disabled functionality on device detail page",
        "preceedingTasks": [
          "ENTMQMAAS-2449"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12979978,
        "code": "ENTMQMAAS-2464",
        "name": "Console-IoT-UI- Implement change password functionality for device detail page",
        "preceedingTasks": [
          "ENTMQMAAS-2463"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12979997,
        "code": "ENTMQMAAS-2465",
        "name": "FirefoxConsoleTest.testOpenShiftWithCustomCert on OpenShift 4.5",
        "preceedingTasks": [
          "ENTMQMAAS-2460"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12980089,
        "code": "ENTMQMAAS-2467",
        "name": "Console-IoT Enable Pagination and Sorting in Project list",
        "preceedingTasks": [
          "ENTMQMAAS-2454"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12980515,
        "code": "ENTMQMAAS-2482",
        "name": "[Console-IoT] Create Review component for device",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12980528,
        "code": "ENTMQMAAS-2483",
        "name": "Console-IoT-UI-Remove 'Error Messages' column from list and display address and connection count",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12980673,
        "code": "ENTMQMAAS-2485",
        "name": "Write documentation about AMQ Online QE processes and CI",
        "preceedingTasks": [
          "ENTMQMAAS-2462"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12980782,
        "code": "ENTMQMAAS-2486",
        "name": "[CI] create job which check stage images and templates",
        "preceedingTasks": [
          "ENTMQMAAS-2485"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12980783,
        "code": "ENTMQMAAS-2487",
        "name": "[CI] create job which check released images and templates",
        "preceedingTasks": [
          "ENTMQMAAS-1130",
          "ENTMQMAAS-2486"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12980802,
        "code": "ENTMQMAAS-2488",
        "name": "Wrong verification step for authentication service config",
        "preceedingTasks": [
          "ENTMQMAAS-1481",
          "ENTMQMAAS-1502",
          "ENTMQMAAS-2459"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12982564,
        "code": "ENTMQMAAS-2489",
        "name": "[#5076] : Stale record from cache can lead to incomplete address space deletion",
        "preceedingTasks": [
          "ENTMQMAAS-2465"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12982567,
        "code": "ENTMQMAAS-2490",
        "name": "[CI] CVP add smoke iot tests into smoke iot part",
        "preceedingTasks": [
          "ENTMQMAAS-2487"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12984380,
        "code": "ENTMQMAAS-2494",
        "name": "[Console-Iot] Integrate Review Device Component in Create Device using Json",
        "preceedingTasks": [
          "ENTMQMAAS-1930",
          "ENTMQMAAS-2483"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12984381,
        "code": "ENTMQMAAS-2495",
        "name": "[Console-Iot] Integrate Review Device Component in Create Device using Form Input",
        "preceedingTasks": [
          "ENTMQMAAS-2232",
          "ENTMQMAAS-2494"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12984385,
        "code": "ENTMQMAAS-2496",
        "name": "[Console-UI] Create Visual component for clone device",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12984389,
        "code": "ENTMQMAAS-2497",
        "name": "[Console-IoT] Use manage column toolbar to update device list",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12986818,
        "code": "ENTMQMAAS-2499",
        "name": "[#5000] : Minor documentation fixes",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12987648,
        "code": "ENTMQMAAS-2502",
        "name": "Console-IoT-UI- Create visual component for add gateways group  (member of)",
        "preceedingTasks": [
          "ENTMQMAAS-2497",
          "ENTMQMAAS-2464"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12987844,
        "code": "ENTMQMAAS-2503",
        "name": "Console-IoT-UI- Add meaningful ID to messaging project module",
        "preceedingTasks": [
          "ENTMQMAAS-2442"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.63,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.36
        },
        "tags": [
          "devops",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12987853,
        "code": "ENTMQMAAS-2504",
        "name": "Console-IoT-UI- Fix alignment issue for Project List toolbar",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.63,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.36
        },
        "tags": [
          "devops",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12989767,
        "code": "ENTMQMAAS-2507",
        "name": "[#5112] : Forwarder priority documentation",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12991057,
        "code": "ENTMQMAAS-2508",
        "name": "Docs: Update procedures in downstream docs for installing using OLM",
        "preceedingTasks": [
          "ENTMQMAAS-952",
          "ENTMQMAAS-1524",
          "ENTMQMAAS-2507"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12991932,
        "code": "ENTMQMAAS-2509",
        "name": "Console-IoT-UI- Serialize function for device for edit device in json page",
        "preceedingTasks": [
          "ENTMQMAAS-1471",
          "ENTMQMAAS-2502"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12992061,
        "code": "ENTMQMAAS-2510",
        "name": "[#5116] : Add support for defining DLQ/expiry queue for an individual queue",
        "preceedingTasks": [
          "ENTMQMAAS-2489"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12992068,
        "code": "ENTMQMAAS-2512",
        "name": "[#5133] Docs for DLQ/expiry queues",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12992242,
        "code": "ENTMQMAAS-2514",
        "name": "[#5124] : [Documentation] Document changing broker logging level at runtime",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12992694,
        "code": "ENTMQMAAS-2516",
        "name": "Console-IoT-UI- Edit gateway group membership in device detail page",
        "preceedingTasks": [
          "ENTMQMAAS-2509"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12992718,
        "code": "ENTMQMAAS-2517",
        "name": "Integrate DLQ/expiry queue in Console",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.63,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.36
        },
        "tags": [
          "devops",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12992785,
        "code": "ENTMQMAAS-2518",
        "name": "Console-IoT-UI- Integrate pre-confirm dialog for remove gateways and credentials in device detail page",
        "preceedingTasks": [
          "ENTMQMAAS-2355",
          "ENTMQMAAS-2457",
          "ENTMQMAAS-2516"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12993799,
        "code": "ENTMQMAAS-2521",
        "name": "[#5130] : Addresses fail to become ready if globalMaxSize is omitted from the infraconfig",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12995528,
        "code": "ENTMQMAAS-2524",
        "name": "[CI] restore old pipelines for amq online and merge into master",
        "preceedingTasks": [
          "ENTMQMAAS-2490"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12996585,
        "code": "ENTMQMAAS-2525",
        "name": "Console-IoT-UI- Handle server-side success/failed toast message",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        },
        "tags": [
          "frontend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12997284,
        "code": "ENTMQMAAS-2526",
        "name": "[systemtest] Update metadata for priority forwards",
        "preceedingTasks": [
          "ENTMQMAAS-2415"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12997503,
        "code": "ENTMQMAAS-2527",
        "name": "Docs: Release Notes - Update Release Notes for Release 1.6",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12997505,
        "code": "ENTMQMAAS-2528",
        "name": "Docs: Update AMQ Online Product Version attributes",
        "preceedingTasks": [
          "ENTMQMAAS-1606",
          "ENTMQMAAS-2527"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12997987,
        "code": "ENTMQMAAS-2529",
        "name": "Docs: Remove IoT content from docs",
        "preceedingTasks": [
          "ENTMQMAAS-2151",
          "ENTMQMAAS-2528"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12998125,
        "code": "ENTMQMAAS-2530",
        "name": "Docs: Update ProductVersion attribute in downstream docs",
        "preceedingTasks": [
          "ENTMQMAAS-1611",
          "ENTMQMAAS-2529"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12999501,
        "code": "ENTMQMAAS-2532",
        "name": "[systemtest] Create tests for DLQ via console",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12999907,
        "code": "ENTMQMAAS-2533",
        "name": "Docs: Modify Standard address space image to remove MQTT gateway and clients",
        "preceedingTasks": [
          "ENTMQMAAS-2530"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12999921,
        "code": "ENTMQMAAS-2534",
        "name": "Docs: Update Supported features table",
        "preceedingTasks": [
          "ENTMQMAAS-1634",
          "ENTMQMAAS-2533"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 12999930,
        "code": "ENTMQMAAS-2535",
        "name": "Docs: Update OCP prerequisites for installing AMQ Online",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13000889,
        "code": "ENTMQMAAS-2536",
        "name": "Change parent images to use external registry registry.redhat.io/ubi7/ubi:latest",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13003173,
        "code": "ENTMQMAAS-2537",
        "name": "[#5183] : Expiry-address and TTL do not work for durable subscriptions",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13156651,
        "code": "ENTMQMAAS-2540",
        "name": "Docs: Update attribute for new AMQ quarterly splash page",
        "preceedingTasks": [
          "ENTMQMAAS-2535"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13157001,
        "code": "ENTMQMAAS-2541",
        "name": "Docs: Update links to OpenShift docs",
        "preceedingTasks": [
          "ENTMQMAAS-1714",
          "ENTMQMAAS-1783",
          "ENTMQMAAS-2540"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13162360,
        "code": "ENTMQMAAS-2542",
        "name": "[#5195] : Purging an address with address different from name is broken",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13164415,
        "code": "ENTMQMAAS-2544",
        "name": "[#5271] Document behaviour of disposition undeliverable-here=true for users of the standard address space",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13168583,
        "code": "ENTMQMAAS-2548",
        "name": "Docs: Add link to 1.5.3 resolved issues to 1.5 RNs",
        "preceedingTasks": [
          "ENTMQMAAS-2544"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13169432,
        "code": "ENTMQMAAS-2549",
        "name": "Prepare polarion test plan for 1.5.3",
        "preceedingTasks": [
          "ENTMQMAAS-2524"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13169434,
        "code": "ENTMQMAAS-2550",
        "name": "Create test and polarion metadata for ENTMQMAAS-2542",
        "preceedingTasks": [
          "ENTMQMAAS-2655",
          "ENTMQMAAS-982",
          "ENTMQMAAS-2532"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13169436,
        "code": "ENTMQMAAS-2551",
        "name": "Create test and polarion metadata for ENTMQMAAS-2521",
        "preceedingTasks": [
          "ENTMQMAAS-2550"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13176246,
        "code": "ENTMQMAAS-2564",
        "name": "Docs: Remove references to MQTT for standard address space",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13179518,
        "code": "ENTMQMAAS-2565",
        "name": "Test olm upgrade for 1.5.3 on ocp 4.6 and  4.5",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13183700,
        "code": "ENTMQMAAS-2585",
        "name": "[#5209] : Make broker behavior on rejected messages configurable",
        "preceedingTasks": [
          "ENTMQMAAS-1542",
          "ENTMQMAAS-2542"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13186037,
        "code": "ENTMQMAAS-2586",
        "name": "Operator metadata references internal registry url for AMQ Online 1.5.3",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13186044,
        "code": "ENTMQMAAS-2587",
        "name": "Operator metadata references internal registry url for AMQ Online 1.6.0",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13188836,
        "code": "ENTMQMAAS-2588",
        "name": "Custom certificate provided in AMQ Online console is encoded twice",
        "preceedingTasks": [
          "ENTMQMAAS-2587"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13192916,
        "code": "ENTMQMAAS-2589",
        "name": "Create job which test operator from index image (CVP, CPAAS)",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.27,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.16
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13194813,
        "code": "ENTMQMAAS-2591",
        "name": "[CI] Migrate jobs to AWS and use brew registry",
        "preceedingTasks": [
          "ENTMQMAAS-1277",
          "ENTMQMAAS-2683",
          "ENTMQMAAS-2628",
          "ENTMQMAAS-2565"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13196907,
        "code": "ENTMQMAAS-2592",
        "name": "IoT fails to install on OCP 4.6",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13196959,
        "code": "ENTMQMAAS-2593",
        "name": "Docs: Make broker behavior on rejected messages configurable",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13199241,
        "code": "ENTMQMAAS-2595",
        "name": "Docs: Add link to 1.5.4 resolved issues to 1.5 RNs",
        "preceedingTasks": [
          "ENTMQMAAS-2267",
          "ENTMQMAAS-2593"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13199242,
        "code": "ENTMQMAAS-2596",
        "name": "Docs: Add link to 1.6.1 resolved issues to 1.6 RNs",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13199583,
        "code": "ENTMQMAAS-2598",
        "name": "[#5209] : Make broker behavior on rejected messages configurable on 1.6",
        "preceedingTasks": [
          "ENTMQMAAS-2713",
          "ENTMQMAAS-2588"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13199585,
        "code": "ENTMQMAAS-2599",
        "name": "Custom certificate provided in AMQ Online console is encoded twice in 1.6",
        "preceedingTasks": [
          "ENTMQMAAS-2598"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13203415,
        "code": "ENTMQMAAS-2624",
        "name": "Identify flaky tests from latest 1.5 and 1.6 runs make list",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.27,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.16
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13203417,
        "code": "ENTMQMAAS-2625",
        "name": "Investigate random issue \\\"no route to host\\\"",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13203419,
        "code": "ENTMQMAAS-2626",
        "name": "Build new version of systemtests-clients",
        "preceedingTasks": [
          "ENTMQMAAS-2682",
          "ENTMQMAAS-2624"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.27,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.16
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13203421,
        "code": "ENTMQMAAS-2627",
        "name": "Investigate why upstream isolated job takes too much time and build failed",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13203438,
        "code": "ENTMQMAAS-2628",
        "name": "Investigate and fix why dowsntream stage and production jobs do not run tests and replace images in templates",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13205589,
        "code": "ENTMQMAAS-2629",
        "name": "Upgrade minikube version",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        },
        "tags": [
          "testing",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13224508,
        "code": "ENTMQMAAS-2644",
        "name": "CVP trigger job from iib message and run olm tests",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13224637,
        "code": "ENTMQMAAS-2645",
        "name": "Implement or update olm upgrade tests in testsuite",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13227445,
        "code": "ENTMQMAAS-2649",
        "name": "Fix installation of local jenkins instance for testing",
        "preceedingTasks": [
          "ENTMQMAAS-2591"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13228826,
        "code": "ENTMQMAAS-2650",
        "name": "Docs: Add known issue to 1.5 release notes",
        "preceedingTasks": [
          "ENTMQMAAS-1792",
          "ENTMQMAAS-2283",
          "ENTMQMAAS-2596"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13232859,
        "code": "ENTMQMAAS-2653",
        "name": "enmasse-ci refactor common pipelines",
        "preceedingTasks": [
          "ENTMQMAAS-2629",
          "ENTMQMAAS-996",
          "ENTMQMAAS-2626"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.27,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.16
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13233063,
        "code": "ENTMQMAAS-2654",
        "name": "Docs: Release Notes - Update Release Notes for Release 1.7",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13234621,
        "code": "ENTMQMAAS-2655",
        "name": "Docs: Update ProductVersion attribute in downstream docs",
        "preceedingTasks": [
          "ENTMQMAAS-1999",
          "ENTMQMAAS-2654"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13236606,
        "code": "ENTMQMAAS-2656",
        "name": "Sending a messaging to a topic ends with No route to the destination node [condition = qd:no-route-to-dest]",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.21,
          "frontend": 1.35,
          "database": 2.28,
          "devops": 2.29,
          "ai_ml": 1.89,
          "testing": 1.33,
          "issue_tracking": 2.04
        },
        "tags": [
          "backend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13243366,
        "code": "ENTMQMAAS-2657",
        "name": "[#5233] \\\"No route to destination host\\\" reported when connecting client",
        "preceedingTasks": [
          "ENTMQMAAS-2510"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13244843,
        "code": "ENTMQMAAS-2658",
        "name": "[#5240] Park on LTS versions of broker (AMQ Broker 7.8)",
        "preceedingTasks": [
          "ENTMQMAAS-2657"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13244844,
        "code": "ENTMQMAAS-2659",
        "name": "[#5240] Park on LTS versions of interconnect (Red Hat Interconnect 1.10.0)",
        "preceedingTasks": [
          "ENTMQMAAS-2658"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13248347,
        "code": "ENTMQMAAS-2662",
        "name": "Docs: Document a new field for !!GLOBAL_DLQ",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13251975,
        "code": "ENTMQMAAS-2664",
        "name": "[#5253] Monitoring does not work on OpenShift >= 4.7",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.33
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13268826,
        "code": "ENTMQMAAS-2671",
        "name": "[System tests] Monitoring regression on 3.11",
        "preceedingTasks": [
          "ENTMQMAAS-2709",
          "ENTMQMAAS-2664"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.9,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.33
        },
        "tags": [
          "issue_tracking",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13270134,
        "code": "ENTMQMAAS-2672",
        "name": "Docs: Update links to OpenShift docs",
        "preceedingTasks": [
          "ENTMQMAAS-2356",
          "ENTMQMAAS-2662"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13279357,
        "code": "ENTMQMAAS-2674",
        "name": "[#5272] Support router configuration maxMessageSize",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13280077,
        "code": "ENTMQMAAS-2675",
        "name": "Add new field to support router configuration maxMessageSize",
        "preceedingTasks": [
          "ENTMQMAAS-2672"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13280664,
        "code": "ENTMQMAAS-2676",
        "name": "Modify documentation - use migrated jenkins url",
        "preceedingTasks": [
          "ENTMQMAAS-1384",
          "ENTMQMAAS-2674"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13286186,
        "code": "ENTMQMAAS-2679",
        "name": "OCP 4.7 upgrade tests failing to install AMQ Online 1.6 (0/6 nodes are available: 3 Insufficient memory)",
        "preceedingTasks": [
          "ENTMQMAAS-2649"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13288446,
        "code": "ENTMQMAAS-2681",
        "name": "Docs: Add note to install about CRD API v1 support",
        "preceedingTasks": [
          "ENTMQMAAS-2675"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13289751,
        "code": "ENTMQMAAS-2682",
        "name": "Docs: Fix typo in code block",
        "preceedingTasks": [
          "ENTMQMAAS-2681"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13291594,
        "code": "ENTMQMAAS-2683",
        "name": "AMQ Online loses service during OpenShift node upgrade",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.7,
          "frontend": 1.29,
          "database": 2.68,
          "devops": 3.81,
          "ai_ml": 1.88,
          "testing": 1.31,
          "issue_tracking": 2.5
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13297785,
        "code": "ENTMQMAAS-2702",
        "name": "[CI] investigate why upstream jobs stopped triggering every day",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13297789,
        "code": "ENTMQMAAS-2703",
        "name": "Onboard AMQ online 1.7 to ocp4 LP testing",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13319722,
        "code": "ENTMQMAAS-2707",
        "name": "Migrate from old cachet plugin to statuspage",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13331712,
        "code": "ENTMQMAAS-2709",
        "name": "Cleanup aws and openstack dead clusters",
        "preceedingTasks": [
          "ENTMQMAAS-2237",
          "ENTMQMAAS-2707"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13332981,
        "code": "ENTMQMAAS-2710",
        "name": "[Weekly] Check and eventually cleanup nightly ocp/aws clusters",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13335560,
        "code": "ENTMQMAAS-2712",
        "name": "Migration of Jenkins CSB instances",
        "preceedingTasks": [
          "ENTMQMAAS-2671",
          "ENTMQMAAS-2710"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13336533,
        "code": "ENTMQMAAS-2713",
        "name": "RHMI - AMQ Online 1.7 debugging",
        "preceedingTasks": [
          "ENTMQMAAS-2712"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13337567,
        "code": "ENTMQMAAS-2714",
        "name": "Investigate issues in onboarding tests",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13371393,
        "code": "ENTMQMAAS-2719",
        "name": "glib2 security update RHSA :76601 - Container images to be updated for AMQ Online",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13385637,
        "code": "ENTMQMAAS-2720",
        "name": "Fix failing GH action in upstream repository",
        "preceedingTasks": [
          "ENTMQMAAS-2599",
          "ENTMQMAAS-2714"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13390128,
        "code": "ENTMQMAAS-2723",
        "name": "Jenkins openstack images do not contian oc client",
        "preceedingTasks": [
          "ENTMQMAAS-2679"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "tags": [
          "devops",
          "testing"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13390140,
        "code": "ENTMQMAAS-2724",
        "name": "Fix installation of CRC on rhel8",
        "preceedingTasks": [
          "ENTMQMAAS-2720"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13411663,
        "code": "ENTMQMAAS-2728",
        "name": "Document new infraconfig fields",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.46,
          "frontend": 2.19,
          "database": 2.82,
          "devops": 2.8,
          "ai_ml": 2.74,
          "testing": 1.57,
          "issue_tracking": 2.58
        },
        "tags": [
          "database",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13413989,
        "code": "ENTMQMAAS-2729",
        "name": "Migrate CSB Jenkins to version 2-289-2",
        "preceedingTasks": [
          "ENTMQMAAS-2724"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13414330,
        "code": "ENTMQMAAS-2730",
        "name": "Jenkins CSB on OCP BareMetal - early adoption",
        "preceedingTasks": [
          "ENTMQMAAS-2729"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13419113,
        "code": "ENTMQMAAS-2732",
        "name": "[CI] remove unused managed kafka perf jobs from enmasse-ci",
        "preceedingTasks": [
          "ENTMQMAAS-2730"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13419114,
        "code": "ENTMQMAAS-2733",
        "name": "[CI] investigate why upstream ocp4 jobs fail",
        "preceedingTasks": [
          "ENTMQMAAS-2732"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13419118,
        "code": "ENTMQMAAS-2735",
        "name": "[CI] investigate failure in isolated test profile in jenkins",
        "preceedingTasks": [
          "ENTMQMAAS-2733"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13419115,
        "code": "ENTMQMAAS-2734",
        "name": "[Test] investigate webconsole test failures in shared test profile",
        "preceedingTasks": [
          "ENTMQMAAS-2369",
          "ENTMQMAAS-2735"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13420648,
        "code": "ENTMQMAAS-2736",
        "name": "jenkins_home is almost full",
        "preceedingTasks": [
          "ENTMQMAAS-2734"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13423544,
        "code": "ENTMQMAAS-2737",
        "name": "java-11-openjdk security update RHSA :78473 Important Due: 08/20/2021",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13433141,
        "code": "ENTMQMAAS-2740",
        "name": "[Test] investigate upstream failing isolated tests",
        "preceedingTasks": [
          "ENTMQMAAS-2736"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13433142,
        "code": "ENTMQMAAS-2741",
        "name": "[Test] investigate root cause of acceptance failed tests",
        "preceedingTasks": [
          "ENTMQMAAS-2740"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13434186,
        "code": "ENTMQMAAS-2743",
        "name": "Fix problem with OLM-INDEX:LATEST on enmasse quay",
        "preceedingTasks": [
          "ENTMQMAAS-2741"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 13434318,
        "code": "ENTMQMAAS-2744",
        "name": "Check and verify new and updated images from errata",
        "preceedingTasks": [
          "ENTMQMAAS-2743"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14206332,
        "code": "ENTMQMAAS-2748",
        "name": "Code Scanning - Complete the PSCC form",
        "preceedingTasks": [
          "ENTMQMAAS-2659"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14216402,
        "code": "ENTMQMAAS-2750",
        "name": "Investigate failing LPINTEROP test",
        "preceedingTasks": [
          "ENTMQMAAS-2744"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14224549,
        "code": "ENTMQMAAS-2751",
        "name": "Check images",
        "preceedingTasks": [
          "ENTMQMAAS-2750"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14225846,
        "code": "ENTMQMAAS-2752",
        "name": "libX11 security update RHSA :80344 Important Due: 09/29/2021",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14255514,
        "code": "ENTMQMAAS-2754",
        "name": "Authentication service is not configured with realm",
        "preceedingTasks": [
          "ENTMQMAAS-2748"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14255475,
        "code": "ENTMQMAAS-2755",
        "name": "[Test] Investigate LPT run test fails.",
        "preceedingTasks": [
          "ENTMQMAAS-2751"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14255476,
        "code": "ENTMQMAAS-2756",
        "name": "Help interop team with excluding test from LPT testrun",
        "preceedingTasks": [
          "ENTMQMAAS-2755"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14262668,
        "code": "ENTMQMAAS-2757",
        "name": "Check index images",
        "preceedingTasks": [
          "ENTMQMAAS-2756"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14263234,
        "code": "ENTMQMAAS-2758",
        "name": "Instruct LP team with further changes in testrun",
        "preceedingTasks": [
          "ENTMQMAAS-2757"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14316768,
        "code": "ENTMQMAAS-2763",
        "name": "Check and verify new and updated images from errata",
        "preceedingTasks": [
          "ENTMQMAAS-2758"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14316769,
        "code": "ENTMQMAAS-2764",
        "name": "Verify CVE images",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14339648,
        "code": "ENTMQMAAS-2765",
        "name": "Check images",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14352393,
        "code": "ENTMQMAAS-2766",
        "name": "AMQ Online 1.7.3 on OCP 4.8.x - oauth proxy error when accessing console",
        "preceedingTasks": [
          "ENTMQMAAS-2754"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14360229,
        "code": "ENTMQMAAS-2767",
        "name": "Verify CVE images listed bellow",
        "preceedingTasks": [
          "ENTMQMAAS-1963",
          "ENTMQMAAS-2372",
          "ENTMQMAAS-2765"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14435854,
        "code": "ENTMQMAAS-2771",
        "name": "[Test] Investigate OLP run test fails.",
        "preceedingTasks": [
          "ENTMQMAAS-2767"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14454410,
        "code": "ENTMQMAAS-2772",
        "name": "[CI] Migrate Report portal and check for a new version 5.5",
        "preceedingTasks": [
          "ENTMQMAAS-2771"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14504844,
        "code": "ENTMQMAAS-2774",
        "name": "Check and verify new and images from errata",
        "preceedingTasks": [
          "ENTMQMAAS-2772"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14504845,
        "code": "ENTMQMAAS-2775",
        "name": "Check aws console and get rid of all instances",
        "preceedingTasks": [
          "ENTMQMAAS-2774"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14504846,
        "code": "ENTMQMAAS-2776",
        "name": "Check non triggering CVP job",
        "preceedingTasks": [
          "ENTMQMAAS-2775"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14570451,
        "code": "ENTMQMAAS-2782",
        "name": "7.9 openssl and expat CVE - AMQ Online base image update",
        "preceedingTasks": [
          "ENTMQMAAS-1946"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14574351,
        "code": "ENTMQMAAS-2787",
        "name": "Check and verify new images from errata",
        "preceedingTasks": [
          "ENTMQMAAS-2776"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14574352,
        "code": "ENTMQMAAS-2788",
        "name": "Investigate issue with auth-service pod not working",
        "preceedingTasks": [
          "ENTMQMAAS-2787"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14574355,
        "code": "ENTMQMAAS-2789",
        "name": "[CI] Report portal reporting after CVE not working",
        "preceedingTasks": [
          "ENTMQMAAS-2788"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14574360,
        "code": "ENTMQMAAS-2790",
        "name": "[CI] Solve Infinite loop in cvp pipeline",
        "preceedingTasks": [
          "ENTMQMAAS-2728",
          "ENTMQMAAS-2789"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14574371,
        "code": "ENTMQMAAS-2791",
        "name": "[CI]Assist Interop team with 4.11 weekly-20220404-B0401",
        "preceedingTasks": [
          "ENTMQMAAS-2790"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14574673,
        "code": "ENTMQMAAS-2792",
        "name": "[CI] Verify Interop testrun",
        "preceedingTasks": [
          "ENTMQMAAS-2791"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14574689,
        "code": "ENTMQMAAS-2793",
        "name": "[CI] Endorse interop tests and contact Aditya about results",
        "preceedingTasks": [
          "ENTMQMAAS-2792"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14581452,
        "code": "ENTMQMAAS-2794",
        "name": "service account authentication fails on OpenShift 4.9",
        "preceedingTasks": [
          "ENTMQMAAS-2766"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14587171,
        "code": "ENTMQMAAS-2797",
        "name": "[CI] check weekly ocp",
        "preceedingTasks": [
          "ENTMQMAAS-2793"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14592785,
        "code": "ENTMQMAAS-2798",
        "name": "[QE] Verify auth image",
        "preceedingTasks": [
          "ENTMQMAAS-2797"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14613437,
        "code": "ENTMQMAAS-2799",
        "name": "[QE] Assist Interop team with weekly",
        "preceedingTasks": [
          "ENTMQMAAS-2798"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14631045,
        "code": "ENTMQMAAS-2801",
        "name": "java-11-openjdk security update RHSA :93346 Important Due: 05/20/2022 - AMQ Online base image update",
        "preceedingTasks": [
          "ENTMQMAAS-2370",
          "ENTMQMAAS-2763",
          "ENTMQMAAS-2782"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14644076,
        "code": "ENTMQMAAS-2808",
        "name": "[QE] CVE #95057",
        "preceedingTasks": [
          "ENTMQMAAS-2799"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14644483,
        "code": "ENTMQMAAS-2809",
        "name": "[QE] CVE respin #95082",
        "preceedingTasks": [
          "ENTMQMAAS-2808"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14662992,
        "code": "ENTMQMAAS-2810",
        "name": "[QE] Debug session with ccit / jenkins team.",
        "preceedingTasks": [
          "ENTMQMAAS-2809"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14668633,
        "code": "ENTMQMAAS-2815",
        "name": "[QE] Help interop with tfa integrations - interop qna",
        "preceedingTasks": [
          "ENTMQMAAS-2810"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14668634,
        "code": "ENTMQMAAS-2816",
        "name": "[QE] Investigate Interop fails with latest preview of ocp 4.11",
        "preceedingTasks": [
          "ENTMQMAAS-2815"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14673451,
        "code": "ENTMQMAAS-2817",
        "name": "[QE] Create CMDB app - Manage CMDB Business Applications",
        "preceedingTasks": [
          "ENTMQMAAS-2816"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14673454,
        "code": "ENTMQMAAS-2818",
        "name": "[QE] Create Corporate service account for certificate managment",
        "preceedingTasks": [
          "ENTMQMAAS-2817"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14682901,
        "code": "ENTMQMAAS-2819",
        "name": "[QE] Investigate 504 status returned for interop tests.",
        "preceedingTasks": [
          "ENTMQMAAS-2818"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14748263,
        "code": "ENTMQMAAS-2826",
        "name": "[QE] Onboarding of Bussines Resilence Management",
        "preceedingTasks": [
          "ENTMQMAAS-2819"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14748289,
        "code": "ENTMQMAAS-2827",
        "name": "[QE] Verify UMB communication on CI",
        "preceedingTasks": [
          "ENTMQMAAS-2826"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14767256,
        "code": "ENTMQMAAS-2829",
        "name": "[QE] Check on respin images",
        "preceedingTasks": [
          "ENTMQMAAS-2827"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14772774,
        "code": "ENTMQMAAS-2830",
        "name": "AMQ Online 1.7: QDR unable to connect to Authorization Service",
        "preceedingTasks": [
          "ENTMQMAAS-2794"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14791492,
        "code": "ENTMQMAAS-2835",
        "name": "[CI] Jenkins update and modifications",
        "preceedingTasks": [
          "ENTMQMAAS-2373",
          "ENTMQMAAS-2829"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14791491,
        "code": "ENTMQMAAS-2834",
        "name": "[CI] Modify jobs to use openstack tenants and spaces to create ocp machine",
        "preceedingTasks": [
          "ENTMQMAAS-2835"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14792027,
        "code": "ENTMQMAAS-2836",
        "name": "[QE] check errata 98898",
        "preceedingTasks": [
          "ENTMQMAAS-2834"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14792715,
        "code": "ENTMQMAAS-2837",
        "name": "[QE] Verify metadata bundled",
        "preceedingTasks": [
          "ENTMQMAAS-2836"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14793275,
        "code": "ENTMQMAAS-2838",
        "name": "[QE] Fix jenkins agent labeling wrong name",
        "preceedingTasks": [
          "ENTMQMAAS-2837"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14795510,
        "code": "ENTMQMAAS-2844",
        "name": "[QE] Fix UMB sender and receiver on CI",
        "preceedingTasks": [
          "ENTMQMAAS-2838"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14814219,
        "code": "ENTMQMAAS-2846",
        "name": "[CI] CVP fix automated instalation of clusters",
        "preceedingTasks": [
          "ENTMQMAAS-2844"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14814217,
        "code": "ENTMQMAAS-2845",
        "name": "[CI] Jenkins template",
        "preceedingTasks": [
          "ENTMQMAAS-2846"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14814220,
        "code": "ENTMQMAAS-2847",
        "name": "[CI] Local jenkins development modifications",
        "preceedingTasks": [
          "ENTMQMAAS-2845"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14814221,
        "code": "ENTMQMAAS-2848",
        "name": "[CI] Openstack modify disconnected images",
        "preceedingTasks": [
          "ENTMQMAAS-2847"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14814222,
        "code": "ENTMQMAAS-2849",
        "name": "[QE] Check CVP",
        "preceedingTasks": [
          "ENTMQMAAS-2848"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14814305,
        "code": "ENTMQMAAS-2850",
        "name": "[CI] Fix jenkins agents terminating in loop",
        "preceedingTasks": [
          "ENTMQMAAS-2849"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14817859,
        "code": "ENTMQMAAS-2851",
        "name": "[CI] Fix ssh access to ocp4 config repository in jenkins",
        "preceedingTasks": [
          "ENTMQMAAS-2850"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14818136,
        "code": "ENTMQMAAS-2852",
        "name": "[CI] Fix local development of jenkins after specific minor jenkins changes",
        "preceedingTasks": [
          "ENTMQMAAS-2851"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        },
        "tags": [
          "devops",
          "issue_tracking"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 14966828,
        "code": "ENTMQMAAS-2873",
        "name": "Setup EOL plan of record - AMQ Online",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 4.17,
          "frontend": 2.24,
          "database": 4.41,
          "devops": 3.32,
          "ai_ml": 3.45,
          "testing": 2.06,
          "issue_tracking": 2.56
        },
        "tags": [
          "database",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 15054822,
        "code": "ENTMQMAAS-2881",
        "name": "Add a banner in the documentation - EOL",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.79,
          "frontend": 3.5,
          "database": 3.15,
          "devops": 3.52,
          "ai_ml": 2.1,
          "testing": 1.8,
          "issue_tracking": 3.24
        },
        "tags": [
          "backend",
          "devops"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 15054824,
        "code": "ENTMQMAAS-2882",
        "name": "Update the lifeCycle page - EOL in June",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.64,
          "frontend": 3.66,
          "database": 3.11,
          "devops": 3.29,
          "ai_ml": 2.75,
          "testing": 1.93,
          "issue_tracking": 3.68
        },
        "tags": [
          "issue_tracking",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 15054825,
        "code": "ENTMQMAAS-2883",
        "name": "Announcement page on the portal (similar to datavirt)",
        "preceedingTasks": [
          "ENTMQMAAS-2026",
          "ENTMQMAAS-2882"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.64,
          "frontend": 3.66,
          "database": 3.11,
          "devops": 3.29,
          "ai_ml": 2.75,
          "testing": 1.93,
          "issue_tracking": 3.68
        },
        "tags": [
          "issue_tracking",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 15054828,
        "code": "ENTMQMAAS-2884",
        "name": "Salesforce to be updated",
        "preceedingTasks": [],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 3.64,
          "frontend": 3.66,
          "database": 3.11,
          "devops": 3.29,
          "ai_ml": 2.75,
          "testing": 1.93,
          "issue_tracking": 3.68
        },
        "tags": [
          "issue_tracking",
          "frontend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      },
      {
        "id": 15270397,
        "code": "ENTMQMAAS-2892",
        "name": "Rebuild the operator image to remove OCP 4.6 & 4.7",
        "preceedingTasks": [
          "ENTMQMAAS-2873",
          "ENTMQMAAS-2376"
        ],
        "startTime": null,
        "endTime": null,
        "requireAsset": [],
        "requireAssignee": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        },
        "tags": [
          "devops",
          "backend"
        ],
        "taskKPIWeight": 0.0007369196757553427,
        "kpiInTask": "",
        "status": "proposal"
      }
    ],
    "employees": [
      {
        "id": 3793,
        "name": "rhn-support-dgeoffroy",
        "employeeNumber": "MS2024793",
        "position": "QA",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.64,
          "frontend": 3.66,
          "database": 3.11,
          "devops": 3.29,
          "ai_ml": 2.75,
          "testing": 1.93,
          "issue_tracking": 3.68
        }
      },
      {
        "id": 4226,
        "name": "ncbaratta",
        "employeeNumber": "MS2024226",
        "position": "QA",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.26,
          "frontend": 2.36,
          "database": 2.7,
          "devops": 3.54,
          "ai_ml": 2.1,
          "testing": 1.92,
          "issue_tracking": 3.78
        }
      },
      {
        "id": 7355,
        "name": "rgodfrey@redhat.com",
        "employeeNumber": "MS2024355",
        "position": "DevOps",
        "tags": [],
        "level": 2,
        "costPerHour": 5,
        "qualities": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        }
      },
      {
        "id": 3212,
        "name": "rhn-support-aboucham",
        "employeeNumber": "MS2024212",
        "position": "Dev",
        "tags": [],
        "level": 2,
        "costPerHour": 5,
        "qualities": {
          "backend": 3.21,
          "frontend": 1.35,
          "database": 2.28,
          "devops": 2.29,
          "ai_ml": 1.89,
          "testing": 1.33,
          "issue_tracking": 2.04
        }
      },
      {
        "id": 3901,
        "name": "lulf@redhat.com",
        "employeeNumber": "MS2024901",
        "position": "DevOps",
        "tags": [],
        "level": 2,
        "costPerHour": 5,
        "qualities": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        }
      },
      {
        "id": 529,
        "name": "rpattnai",
        "employeeNumber": "MS2024529",
        "position": "Dev",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.38,
          "frontend": 2.97,
          "database": 2.39,
          "devops": 2.83,
          "ai_ml": 2.45,
          "testing": 2.23,
          "issue_tracking": 2.31
        }
      },
      {
        "id": 6162,
        "name": "HelloJune",
        "employeeNumber": "MS2024162",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.18,
          "frontend": 3.49,
          "database": 2.56,
          "devops": 3.54,
          "ai_ml": 2.44,
          "testing": 1.92,
          "issue_tracking": 2.28
        }
      },
      {
        "id": 1238,
        "name": "anujha@redhat.com",
        "employeeNumber": "MS2024238",
        "position": "Dev",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.6,
          "frontend": 2.96,
          "database": 2.53,
          "devops": 2.83,
          "ai_ml": 2.47,
          "testing": 1.99,
          "issue_tracking": 2.4
        }
      },
      {
        "id": 6022,
        "name": "buschv",
        "employeeNumber": "MS2024022",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.88,
          "frontend": 2.6,
          "database": 2.42,
          "devops": 3.11,
          "ai_ml": 2.48,
          "testing": 1.77,
          "issue_tracking": 2.8
        }
      },
      {
        "id": 2636,
        "name": "obabec",
        "employeeNumber": "MS2024636",
        "position": "Tester",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.61,
          "frontend": 2.33,
          "database": 2.17,
          "devops": 2.78,
          "ai_ml": 2.34,
          "testing": 3.12,
          "issue_tracking": 2.76
        }
      },
      {
        "id": 4847,
        "name": "jdanek@redhat.com",
        "employeeNumber": "MS2024847",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.59,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.77,
          "ai_ml": 2.06,
          "testing": 1.64,
          "issue_tracking": 3.32
        }
      },
      {
        "id": 8145,
        "name": "suyash-naithani",
        "employeeNumber": "MS2024145",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.63,
          "frontend": 3.13,
          "database": 2.56,
          "devops": 3.23,
          "ai_ml": 2.7,
          "testing": 2.03,
          "issue_tracking": 2.36
        }
      },
      {
        "id": 7940,
        "name": "rhn-support-jmalloy",
        "employeeNumber": "MS2024940",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.06,
          "frontend": 2.58,
          "database": 2.92,
          "devops": 3.18,
          "ai_ml": 2.72,
          "testing": 1.81,
          "issue_tracking": 2.88
        }
      },
      {
        "id": 2216,
        "name": "zschwarz",
        "employeeNumber": "MS2024216",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.27,
          "frontend": 2.53,
          "database": 2.62,
          "devops": 3.57,
          "ai_ml": 3.04,
          "testing": 3.22,
          "issue_tracking": 3.16
        }
      },
      {
        "id": 334,
        "name": "ppatiern",
        "employeeNumber": "MS2024334",
        "position": "Dev",
        "tags": [],
        "level": 2,
        "costPerHour": 5,
        "qualities": {
          "backend": 3.43,
          "frontend": 1.88,
          "database": 2.4,
          "devops": 2.68,
          "ai_ml": 1.76,
          "testing": 1.66,
          "issue_tracking": 2.69
        }
      },
      {
        "id": 9279,
        "name": "sjay@redhat.com",
        "employeeNumber": "MS2024279",
        "position": "Dev",
        "tags": [],
        "level": 2,
        "costPerHour": 5,
        "qualities": {
          "backend": 2.46,
          "frontend": 2.19,
          "database": 2.82,
          "devops": 2.8,
          "ai_ml": 2.74,
          "testing": 1.57,
          "issue_tracking": 2.58
        }
      },
      {
        "id": 8672,
        "name": "jbtrystram",
        "employeeNumber": "MS2024672",
        "position": "Dev",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.18,
          "frontend": 2.5,
          "database": 3.14,
          "devops": 3.05,
          "ai_ml": 2.87,
          "testing": 2.19,
          "issue_tracking": 2.41
        }
      },
      {
        "id": 9731,
        "name": "rh_sdavey",
        "employeeNumber": "MS2024731",
        "position": "QA",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.73,
          "frontend": 2.37,
          "database": 2.22,
          "devops": 2.81,
          "ai_ml": 2.28,
          "testing": 2.41,
          "issue_tracking": 3.05
        }
      },
      {
        "id": 6983,
        "name": "rshelly",
        "employeeNumber": "MS2024983",
        "position": "QA",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.9,
          "frontend": 2.42,
          "database": 2.62,
          "devops": 3.28,
          "ai_ml": 2.86,
          "testing": 2.3,
          "issue_tracking": 3.33
        }
      },
      {
        "id": 3961,
        "name": "pwright@redhat.com",
        "employeeNumber": "MS2024961",
        "position": "Dev",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.79,
          "frontend": 3.5,
          "database": 3.15,
          "devops": 3.52,
          "ai_ml": 2.1,
          "testing": 1.8,
          "issue_tracking": 3.24
        }
      },
      {
        "id": 2154,
        "name": "dkornel@redhat.com",
        "employeeNumber": "MS2024154",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        }
      },
      {
        "id": 3404,
        "name": "gordonsim",
        "employeeNumber": "MS2024404",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        }
      },
      {
        "id": 5223,
        "name": "mokumar@redhat.com",
        "employeeNumber": "MS2024223",
        "position": "Dev",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 4.17,
          "frontend": 2.24,
          "database": 4.41,
          "devops": 3.32,
          "ai_ml": 3.45,
          "testing": 2.06,
          "issue_tracking": 2.56
        }
      },
      {
        "id": 3801,
        "name": "pkralik",
        "employeeNumber": "MS2024801",
        "position": "QA",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.58,
          "frontend": 2.81,
          "database": 2.31,
          "devops": 3.06,
          "ai_ml": 3.01,
          "testing": 1.68,
          "issue_tracking": 3.26
        }
      },
      {
        "id": 9722,
        "name": "yanzredhat",
        "employeeNumber": "MS2024722",
        "position": "AI Engineer",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.62,
          "frontend": 3.43,
          "database": 3.46,
          "devops": 3.93,
          "ai_ml": 3.98,
          "testing": 2.21,
          "issue_tracking": 3.08
        }
      },
      {
        "id": 6666,
        "name": "dejanbosanac",
        "employeeNumber": "MS2024666",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.83,
          "frontend": 2.4,
          "database": 2.56,
          "devops": 3.12,
          "ai_ml": 2.66,
          "testing": 1.9,
          "issue_tracking": 2.57
        }
      },
      {
        "id": 606,
        "name": "tkratky_jira",
        "employeeNumber": "MS2024606",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        }
      },
      {
        "id": 9407,
        "name": "apratap468",
        "employeeNumber": "MS2024407",
        "position": "Dev",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.83,
          "frontend": 3.38,
          "database": 2.43,
          "devops": 3.1,
          "ai_ml": 2.41,
          "testing": 2.14,
          "issue_tracking": 2.3
        }
      },
      {
        "id": 2593,
        "name": "rhn-support-hmaclean",
        "employeeNumber": "MS2024593",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.87,
          "frontend": 2.28,
          "database": 2.61,
          "devops": 3.01,
          "ai_ml": 2.48,
          "testing": 1.66,
          "issue_tracking": 2.84
        }
      },
      {
        "id": 4882,
        "name": "rhn-support-jkalinic",
        "employeeNumber": "MS2024882",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.08,
          "frontend": 2.54,
          "database": 2.68,
          "devops": 3.41,
          "ai_ml": 2.99,
          "testing": 2.4,
          "issue_tracking": 3.28
        }
      },
      {
        "id": 2374,
        "name": "jbritton@redhat.com",
        "employeeNumber": "MS2024374",
        "position": "Dev",
        "tags": [],
        "level": 4,
        "costPerHour": 10,
        "qualities": {
          "backend": 4.42,
          "frontend": 2.87,
          "database": 4.41,
          "devops": 4.23,
          "ai_ml": 4.02,
          "testing": 2.28,
          "issue_tracking": 3.24
        }
      },
      {
        "id": 7066,
        "name": "jreimann-2",
        "employeeNumber": "MS2024066",
        "position": "DevOps",
        "tags": [],
        "level": 2,
        "costPerHour": 5,
        "qualities": {
          "backend": 2.86,
          "frontend": 2.05,
          "database": 2.44,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.05,
          "issue_tracking": 2.6
        }
      },
      {
        "id": 2603,
        "name": "joeyshang",
        "employeeNumber": "MS2024603",
        "position": "DevOps",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.52,
          "frontend": 3.34,
          "database": 3.46,
          "devops": 4,
          "ai_ml": 3.99,
          "testing": 2.19,
          "issue_tracking": 3.08
        }
      },
      {
        "id": 3466,
        "name": "yihwang@redhat.com",
        "employeeNumber": "MS2024466",
        "position": "QA",
        "tags": [],
        "level": 4,
        "costPerHour": 10,
        "qualities": {
          "backend": 4.24,
          "frontend": 4.26,
          "database": 3.42,
          "devops": 4.3,
          "ai_ml": 3.48,
          "testing": 2.45,
          "issue_tracking": 4.46
        }
      },
      {
        "id": 9769,
        "name": "eallen@redhat.com",
        "employeeNumber": "MS2024769",
        "position": "Dev",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.6,
          "frontend": 3.97,
          "database": 2.31,
          "devops": 2.61,
          "ai_ml": 2.75,
          "testing": 1.98,
          "issue_tracking": 2.86
        }
      },
      {
        "id": 5676,
        "name": "rhn-support-kboone",
        "employeeNumber": "MS2024676",
        "position": "DevOps",
        "tags": [],
        "level": 2,
        "costPerHour": 5,
        "qualities": {
          "backend": 3.7,
          "frontend": 1.29,
          "database": 2.68,
          "devops": 3.81,
          "ai_ml": 1.88,
          "testing": 1.31,
          "issue_tracking": 2.5
        }
      },
      {
        "id": 3245,
        "name": "keithbwall",
        "employeeNumber": "MS2024245",
        "position": "DevOps",
        "tags": [],
        "level": 2,
        "costPerHour": 5,
        "qualities": {
          "backend": 2.82,
          "frontend": 2.17,
          "database": 2.35,
          "devops": 2.98,
          "ai_ml": 2.14,
          "testing": 1.72,
          "issue_tracking": 2.8
        }
      },
      {
        "id": 9200,
        "name": "fbolton@redhat.com",
        "employeeNumber": "MS2024200",
        "position": "Dev",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.77,
          "frontend": 2.46,
          "database": 3.22,
          "devops": 3.59,
          "ai_ml": 2.37,
          "testing": 1.4,
          "issue_tracking": 3.48
        }
      },
      {
        "id": 9368,
        "name": "famartin@redhat.com",
        "employeeNumber": "MS2024368",
        "position": "Tester",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 3.13,
          "frontend": 2.69,
          "database": 2.75,
          "devops": 3.02,
          "ai_ml": 2.9,
          "testing": 3.17,
          "issue_tracking": 2.98
        }
      },
      {
        "id": 8268,
        "name": "sanjekum",
        "employeeNumber": "MS2024268",
        "position": "Dev",
        "tags": [],
        "level": 3,
        "costPerHour": 7.5,
        "qualities": {
          "backend": 2.52,
          "frontend": 3.06,
          "database": 2.55,
          "devops": 2.75,
          "ai_ml": 2.35,
          "testing": 1.98,
          "issue_tracking": 2.41
        }
      }
    ]
  }
]; module.exports = { projects };
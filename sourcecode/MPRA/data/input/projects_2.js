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
        "projectKey": "ENTMQMAAS",
        "description": "",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 23.37,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8571428571
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0007062307382,
            "originalValue": 0.9485022307
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 560.9,
        "calculatedEffectiveHours": 560.9,
        "preceedingTasks": [],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12662872,
        "code": "ENTMQMAAS-6",
        "name": "document the build components making up A-MQ MaaS",
        "projectKey": "ENTMQMAAS",
        "description": "",
        "startTime": null,
        "endTime": null,
        "assignee": "gordonsim",
        "estimateNormalTime": 249.46,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8571428571
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.002208719153,
            "originalValue": 0.8548368566
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.9565217391
          }
        ],
        "effectiveTimeHours": 5987.06,
        "calculatedEffectiveHours": 5987.06,
        "preceedingTasks": [],
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12663808,
        "code": "ENTMQMAAS-8",
        "name": "don't use default deployer service account",
        "projectKey": "ENTMQMAAS",
        "description": "",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 75.17,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8571428571
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.004761813195,
            "originalValue": 0.7315065793
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.9411764706
          }
        ],
        "effectiveTimeHours": 1803.96,
        "calculatedEffectiveHours": 1803.96,
        "preceedingTasks": [
          12662846
        ],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12663922,
        "code": "ENTMQMAAS-10",
        "name": "Parameterize default docker images for openshift templates",
        "projectKey": "ENTMQMAAS",
        "description": "This is needed to allow downstream product images to be used by default in templates.",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 53.32,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8571428571
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.002161520564,
            "originalValue": 0.8569527996
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 1
          }
        ],
        "effectiveTimeHours": 1279.69,
        "calculatedEffectiveHours": 1279.69,
        "preceedingTasks": [
          12663808
        ],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12663924,
        "code": "ENTMQMAAS-11",
        "name": "Perform scale testing on lab hardware",
        "projectKey": "ENTMQMAAS",
        "description": "",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 132.59,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8571428571
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.01102261861,
            "originalValue": 0.5401808503
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 3182.19,
        "calculatedEffectiveHours": 3182.19,
        "preceedingTasks": [],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12674242,
        "code": "ENTMQMAAS-13",
        "name": "Add ability to retrieve address definitions",
        "projectKey": "ENTMQMAAS",
        "description": "Address controller API should support retrieval of address details.",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 115.89,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 1
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.01042826601,
            "originalValue": 0.5427334049
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 2781.46,
        "calculatedEffectiveHours": 2781.46,
        "preceedingTasks": [],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12690635,
        "code": "ENTMQMAAS-52",
        "name": "Create copy of upstream repositories",
        "projectKey": "ENTMQMAAS",
        "description": "",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 93.77,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 1
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.009650363342,
            "originalValue": 0.5453759368
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 2250.42,
        "calculatedEffectiveHours": 2250.42,
        "preceedingTasks": [],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12690636,
        "code": "ENTMQMAAS-53",
        "name": "Setup CI for product repositories",
        "projectKey": "ENTMQMAAS",
        "description": "",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 93.43,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 1
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.009627638095,
            "originalValue": 0.5459604287
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 2242.25,
        "calculatedEffectiveHours": 2242.25,
        "preceedingTasks": [],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12705048,
        "code": "ENTMQMAAS-70",
        "name": "[#271] Add SASL delegation to Artemis",
        "projectKey": "ENTMQMAAS",
        "description": "This corresponds to upstream issue [#271|https://github.com/EnMasseProject/enmasse/issues/271]",
        "startTime": null,
        "endTime": null,
        "assignee": "rgodfrey@redhat.com",
        "estimateNormalTime": 52.8,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8571428571
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0007158452655,
            "originalValue": 0.9498100257
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8695652174
          }
        ],
        "effectiveTimeHours": 1267.31,
        "calculatedEffectiveHours": 1267.31,
        "preceedingTasks": [],
        "requireAssign": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12705045,
        "code": "ENTMQMAAS-67",
        "name": "Create template for brokered address space",
        "projectKey": "ENTMQMAAS",
        "description": "",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 4.67,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.7142857143
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.000662528341,
            "originalValue": 0.9424055923
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 112.12,
        "calculatedEffectiveHours": 112.12,
        "preceedingTasks": [],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12705042,
        "code": "ENTMQMAAS-64",
        "name": "Keycloak Plugin - use more SHA-1 suitable credential storage algorithm",
        "projectKey": "ENTMQMAAS",
        "description": "",
        "startTime": null,
        "endTime": null,
        "assignee": "rgodfrey@redhat.com",
        "estimateNormalTime": 16.95,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 1
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0003129091637,
            "originalValue": 0.9719457723
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8695652174
          }
        ],
        "effectiveTimeHours": 406.76,
        "calculatedEffectiveHours": 406.76,
        "preceedingTasks": [],
        "requireAssign": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12705033,
        "code": "ENTMQMAAS-55",
        "name": "update address-controller to support new address model",
        "projectKey": "ENTMQMAAS",
        "description": "",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 0.45,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 1
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.00005156882865,
            "originalValue": 0.9952656074
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 10.72,
        "calculatedEffectiveHours": 10.72,
        "preceedingTasks": [
          12705045
        ],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12705035,
        "code": "ENTMQMAAS-57",
        "name": "update configserv to support new address model",
        "projectKey": "ENTMQMAAS",
        "description": "",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 0.45,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 1
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.00005156882865,
            "originalValue": 0.9952656074
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 10.72,
        "calculatedEffectiveHours": 10.72,
        "preceedingTasks": [
          12705033
        ],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12705037,
        "code": "ENTMQMAAS-59",
        "name": "update console to support new address model",
        "projectKey": "ENTMQMAAS",
        "description": "",
        "startTime": null,
        "endTime": null,
        "assignee": "gordonsim",
        "estimateNormalTime": 1.93,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 1
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.00005156882865,
            "originalValue": 0.9952656074
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.9565217391
          }
        ],
        "effectiveTimeHours": 46.36,
        "calculatedEffectiveHours": 46.36,
        "preceedingTasks": [
          12663922,
          12662872
        ],
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12705036,
        "code": "ENTMQMAAS-58",
        "name": "update queue-scheduler to support new address model",
        "projectKey": "ENTMQMAAS",
        "description": "",
        "startTime": null,
        "endTime": null,
        "assignee": "rgodfrey@redhat.com",
        "estimateNormalTime": 1.95,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 1
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.00005156882865,
            "originalValue": 0.9952656074
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8695652174
          }
        ],
        "effectiveTimeHours": 46.87,
        "calculatedEffectiveHours": 46.87,
        "preceedingTasks": [
          12714052,
          12705042
        ],
        "requireAssign": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12705034,
        "code": "ENTMQMAAS-56",
        "name": "update ragent to support new address model",
        "projectKey": "ENTMQMAAS",
        "description": "",
        "startTime": null,
        "endTime": null,
        "assignee": "gordonsim",
        "estimateNormalTime": 1.93,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 1
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.00005156882865,
            "originalValue": 0.9952656074
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.9565217391
          }
        ],
        "effectiveTimeHours": 46.36,
        "calculatedEffectiveHours": 46.36,
        "preceedingTasks": [
          12705037
        ],
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12705080,
        "code": "ENTMQMAAS-102",
        "name": "Document design for distribution of certificates / ensuring services trust the certificates",
        "projectKey": "ENTMQMAAS",
        "description": "",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 67.44,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 1
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.007873423873,
            "originalValue": 0.5792816776
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 1618.52,
        "calculatedEffectiveHours": 1618.52,
        "preceedingTasks": [],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12705099,
        "code": "ENTMQMAAS-121",
        "name": "Identify gaps in system testing wrt Address Model",
        "projectKey": "ENTMQMAAS",
        "description": "",
        "startTime": null,
        "endTime": null,
        "assignee": "tkratky_jira",
        "estimateNormalTime": 36.37,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8571428571
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0004177949169,
            "originalValue": 0.9628910799
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 1
          }
        ],
        "effectiveTimeHours": 872.95,
        "calculatedEffectiveHours": 872.95,
        "preceedingTasks": [],
        "requireAssign": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ]
      },
      {
        "id": 12705076,
        "code": "ENTMQMAAS-98",
        "name": "Setup upstream CI on Jenkins",
        "projectKey": "ENTMQMAAS",
        "description": "# get the build && unit testing working reliably and collect test reports from all components (including javascript components) *done*\r\n# ensure that docker images are built and pushed successfully to the docker registry *done*\r\n# deploy enmasse to the openshift instance (try to reuse the same scripts as in travis perhaps) *done* \r\n# get systemtests working *done*\r\n# collect logs from all enmasse components and store as artifacts *done*\r\n# store test reports from systemtests *done*\r\n# setup internal mailing list for CI notifications? *done*",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 2.37,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8571428571
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0003129091637,
            "originalValue": 0.97742322
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 56.79,
        "calculatedEffectiveHours": 56.79,
        "preceedingTasks": [
          12705080
        ],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12705092,
        "code": "ENTMQMAAS-114",
        "name": "Standard set of plans for all address types (xs,s,m,l,xl)",
        "projectKey": "ENTMQMAAS",
        "description": "",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 40.23,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 1
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.00484047751,
            "originalValue": 0.691321554
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 965.61,
        "calculatedEffectiveHours": 965.61,
        "preceedingTasks": [],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12705075,
        "code": "ENTMQMAAS-97",
        "name": "Support using ThirdPartyResources for storing Address and Instance resources",
        "projectKey": "ENTMQMAAS",
        "description": "",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 20.93,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8571428571
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.002629136213,
            "originalValue": 0.8048147427
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 502.33,
        "calculatedEffectiveHours": 502.33,
        "preceedingTasks": [],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12705685,
        "code": "ENTMQMAAS-134",
        "name": "[#135] : Add system tests for authentication",
        "projectKey": "ENTMQMAAS",
        "description": "Created from upstream issue [#135|https://github.com/EnMasseProject/enmasse/issues/135].",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 3.9,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.5714285714
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0005663830672,
            "originalValue": 0.9597415507
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 93.59,
        "calculatedEffectiveHours": 93.59,
        "preceedingTasks": [
          12705075
        ],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12705687,
        "code": "ENTMQMAAS-135",
        "name": "alter configuration schema to have a sasl-profile (similar to ssl profile)",
        "projectKey": "ENTMQMAAS",
        "description": "Update the router configuration schema to allow separate saslProfile elements that could be referred to from listeners (i.e. a similar approach to what is done for sslProfile), and allow the 'type' of such profiles to influence the set of fields supported (meaning that different sasl plugins could use different configuration options as necessary).\r\n\r\nThe reason for this is to avoid technical debt by having any sasl plugin that needs new options add them all into the set of fields for the listener as a whole.",
        "startTime": null,
        "endTime": null,
        "assignee": "gordonsim",
        "estimateNormalTime": 15.18,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 1
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0002683327186,
            "originalValue": 0.9757484793
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.9565217391
          }
        ],
        "effectiveTimeHours": 364.4,
        "calculatedEffectiveHours": 364.4,
        "preceedingTasks": [
          12705034
        ],
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12705688,
        "code": "ENTMQMAAS-136",
        "name": "update base image for router to use proton 0.18",
        "projectKey": "ENTMQMAAS",
        "description": "The router image would need to be updated to include any commit that adds the new sasl plugin to master (or else we carry the patch for a while) and has configuration to point at the keycloak service. It also needs to use proton 0.18. \r\n\r\nNote: this is a potentially breaking change (do we want some way to turn it on off? perhaps enable this based on the KEYCLOAK_SERVICE_HOST or similar being set?)",
        "startTime": null,
        "endTime": null,
        "assignee": "gordonsim",
        "estimateNormalTime": 15.18,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 1
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0002683327186,
            "originalValue": 0.9757484793
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.9565217391
          }
        ],
        "effectiveTimeHours": 364.4,
        "calculatedEffectiveHours": 364.4,
        "preceedingTasks": [
          12705687
        ],
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12705829,
        "code": "ENTMQMAAS-148",
        "name": "Create REST API for creating/updating/deleting address spaces",
        "projectKey": "ENTMQMAAS",
        "description": "See https://github.com/EnMasseProject/enmasse/issues/86",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 2.86,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8571428571
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0004177949169,
            "originalValue": 0.9627174167
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.9411764706
          }
        ],
        "effectiveTimeHours": 68.64,
        "calculatedEffectiveHours": 68.64,
        "preceedingTasks": [
          12705685
        ],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12706681,
        "code": "ENTMQMAAS-157",
        "name": "[#106] : Fix unstable test enmasse.config.service.amqp.AMQPServerTest.testSubscribe",
        "projectKey": "ENTMQMAAS",
        "description": "Created from upstream issue [#106|https://github.com/EnMasseProject/enmasse/issues/106].",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 1.34,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8571428571
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.000201031027,
            "originalValue": 0.9816058861
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 32.09,
        "calculatedEffectiveHours": 32.09,
        "preceedingTasks": [],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12706682,
        "code": "ENTMQMAAS-158",
        "name": "[#107] : Fix unstable test enmasse.broker.prestop.TopicMigratorTest.testMigrator",
        "projectKey": "ENTMQMAAS",
        "description": "Created from upstream issue [#107|https://github.com/EnMasseProject/enmasse/issues/107].",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 1.34,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8571428571
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.000201031027,
            "originalValue": 0.9816058861
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 32.09,
        "calculatedEffectiveHours": 32.09,
        "preceedingTasks": [
          12706681
        ],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12706808,
        "code": "ENTMQMAAS-159",
        "name": "[#88] : Store test reports and openshift logs on bintray",
        "projectKey": "ENTMQMAAS",
        "description": "Created from upstream issue [#88|https://github.com/EnMasseProject/enmasse/issues/88].",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 2.27,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.7142857143
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0003557375129,
            "originalValue": 0.9678996766
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 54.46,
        "calculatedEffectiveHours": 54.46,
        "preceedingTasks": [
          12706682
        ],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12706869,
        "code": "ENTMQMAAS-160",
        "name": "[#110] : Enabling MQTT gateway to pass username/password",
        "projectKey": "ENTMQMAAS",
        "description": "Created from upstream issue [#110|https://github.com/EnMasseProject/enmasse/issues/110].",
        "startTime": null,
        "endTime": null,
        "assignee": "ppatiern",
        "estimateNormalTime": 50.05,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.7142857143
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0004378980196,
            "originalValue": 0.9607551308
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 1
          }
        ],
        "effectiveTimeHours": 1201.23,
        "calculatedEffectiveHours": 1201.23,
        "preceedingTasks": [],
        "requireAssign": {
          "backend": 3.43,
          "frontend": 1.88,
          "database": 2.4,
          "devops": 2.68,
          "ai_ml": 1.76,
          "testing": 1.66,
          "issue_tracking": 2.69
        },
        "requireAsset": [],
        "tags": [
          "backend",
          "issue_tracking"
        ]
      },
      {
        "id": 12707096,
        "code": "ENTMQMAAS-162",
        "name": "[#109] : Fix unstable test enmasse.discovery.DiscoveryTest.testDiscovery",
        "projectKey": "ENTMQMAAS",
        "description": "Created from upstream issue [#109|https://github.com/EnMasseProject/enmasse/issues/109].",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 2.65,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8571428571
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0004108025333,
            "originalValue": 0.9630619302
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 63.49,
        "calculatedEffectiveHours": 63.49,
        "preceedingTasks": [
          12706808
        ],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12707098,
        "code": "ENTMQMAAS-164",
        "name": "[#112] : Add readiness check for dispatch router",
        "projectKey": "ENTMQMAAS",
        "description": "Created from upstream issue [#112|https://github.com/EnMasseProject/enmasse/issues/112].",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 38.99,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8571428571
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.004703251983,
            "originalValue": 0.6948681599
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 935.72,
        "calculatedEffectiveHours": 935.72,
        "preceedingTasks": [],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12708121,
        "code": "ENTMQMAAS-170",
        "name": "improve system-tests regarding to Address Tests",
        "projectKey": "ENTMQMAAS",
        "description": "Address tests\r\n# We should be able to configure/get/remove each address via RESTAPI (POST,PUT,GET,DELETE) - basically deployment of addresses (/)\r\n# Plans for each address (following plans were taken from enmasse-console) (/)\r\n## Queue (/)\r\n### Inmemory\r\n### Persisted\r\n### Pooled-inmemory \r\n### Pooled-persisted\r\n## Topic (/)\r\n### Inmemory\r\n### persisted\r\n## Anycast (/)\r\n### standard\r\n## Broadcast (/)\r\n### standard\r\n# Send messages with different priorities, properties  -> partly done - priorities covered by queue tests, properties tested in topics\r\n# Try durability of queues and topics - send, restart, receive\r\n# Empty queue name\r\n# Queue name with special characters\r\n# Topics\r\n## shared subscriptions (/) durable link - diabled, durable message - works fine\r\n## hierarchical topics and wildcards (/) - disabled because wildcards are not working yet\r\n## topics with selectors (/) - test with Appliaction properties works fine, but JMS properties are disabled due to bug in Artemis: ARTEMIS-1314\r\n# Anycast\r\n## New test with 1 sender, 3 receivers - one message can be received only by one receiver (/)\r\n\r\n\r\n",
        "startTime": null,
        "endTime": null,
        "assignee": "tkratky_jira",
        "estimateNormalTime": 24.49,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 1
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0004361499237,
            "originalValue": 0.9605627124
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 1
          }
        ],
        "effectiveTimeHours": 587.79,
        "calculatedEffectiveHours": 587.79,
        "preceedingTasks": [
          12705688,
          12705099
        ],
        "requireAssign": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ]
      },
      {
        "id": 12708226,
        "code": "ENTMQMAAS-172",
        "name": "[#136] : Use persistent volume claims by default",
        "projectKey": "ENTMQMAAS",
        "description": "Created from upstream issue [#136|https://github.com/EnMasseProject/enmasse/issues/136].",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 19.12,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 1
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.002404505892,
            "originalValue": 0.8153195489
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 458.98,
        "calculatedEffectiveHours": 458.98,
        "preceedingTasks": [],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12708259,
        "code": "ENTMQMAAS-173",
        "name": "[#138] : Add web console tests for enmasse-console",
        "projectKey": "ENTMQMAAS",
        "description": "Created from upstream issue [#138|https://github.com/EnMasseProject/enmasse/issues/138].",
        "startTime": null,
        "endTime": null,
        "assignee": "dkornel@redhat.com",
        "estimateNormalTime": 55.91,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8571428571
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0009806817924,
            "originalValue": 0.9154228856
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.9197860963
          }
        ],
        "effectiveTimeHours": 1341.95,
        "calculatedEffectiveHours": 1341.95,
        "preceedingTasks": [],
        "requireAssign": {
          "backend": 2.8,
          "frontend": 2.27,
          "database": 2.29,
          "devops": 2.98,
          "ai_ml": 2.49,
          "testing": 2.85,
          "issue_tracking": 2.84
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "testing"
        ]
      },
      {
        "id": 12708671,
        "code": "ENTMQMAAS-174",
        "name": "Extract UI tooltips from ascii doc files",
        "projectKey": "ENTMQMAAS",
        "description": "We need a way to extract text that is used in the console pages from the ascii docs.\r\n\r\nThree pieces of information should be extracted:\r\n- an UI label\r\n- popup tooltip text when the mouse hovers over the label\r\n- an optional link to an external page for more information\r\n\r\nTo do this, a program that parses the ascii docs for a formatted comment needs to be developed. The proposed comment format is:\r\nLabels:\r\n// key.that.identifies.the.console.page.label: The label text\r\n   \r\nTooltips:\r\n// key.that.identifies.the.console.page.tooltip: start\r\nThis is the popup text that appears in the ascii doc and in the tooltop\r\n// key.that.identifies.the.console.page.tooltip: stop\r\n\r\nExternal links:\r\n// key.that.identifies.the.console.page.external: http://www.redhat.com#topic\r\n\r\nThe ouput of this program should be a json file that can be read by the console code.\r\nThis same json file will be read by the java address controller which will extract the tooltips and use them for the address descriptions.\r\n\r\n",
        "startTime": null,
        "endTime": null,
        "assignee": "eallen@redhat.com",
        "estimateNormalTime": 537.84,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8571428571
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.00865657083,
            "originalValue": 0.5503700005
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0
          }
        ],
        "effectiveTimeHours": 12908.09,
        "calculatedEffectiveHours": 12908.09,
        "preceedingTasks": [],
        "requireAssign": {
          "backend": 2.6,
          "frontend": 3.97,
          "database": 2.31,
          "devops": 2.61,
          "ai_ml": 2.75,
          "testing": 1.98,
          "issue_tracking": 2.86
        },
        "requireAsset": [],
        "tags": [
          "frontend",
          "issue_tracking"
        ]
      },
      {
        "id": 12709904,
        "code": "ENTMQMAAS-178",
        "name": "[#186] : frequent loss of TLS connections",
        "projectKey": "ENTMQMAAS",
        "description": "Created from upstream issue [#186|https://github.com/EnMasseProject/enmasse/issues/186].",
        "startTime": null,
        "endTime": null,
        "assignee": "gordonsim",
        "estimateNormalTime": 22.53,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.7142857143
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0002185119858,
            "originalValue": 0.9796151337
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.9565217391
          }
        ],
        "effectiveTimeHours": 540.81,
        "calculatedEffectiveHours": 540.81,
        "preceedingTasks": [
          12663924
        ],
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12709910,
        "code": "ENTMQMAAS-179",
        "name": "System test deployment to support Keycloak auth",
        "projectKey": "ENTMQMAAS",
        "description": "deploy with keycloak\r\ncreate route for keycloak\r\n\r\n(Ulf & Tomas to pair)",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 1.37,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.7142857143
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0002176379379,
            "originalValue": 0.9796950175
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 32.95,
        "calculatedEffectiveHours": 32.95,
        "preceedingTasks": [
          12708226
        ],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12709911,
        "code": "ENTMQMAAS-180",
        "name": "Deploy system tests in multi-tenant mode",
        "projectKey": "ENTMQMAAS",
        "description": "Add support for creating and deleting tenants in the system test framework",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 1.37,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.7142857143
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0002176379379,
            "originalValue": 0.9796950175
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 32.86,
        "calculatedEffectiveHours": 32.86,
        "preceedingTasks": [
          12709910
        ],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12709913,
        "code": "ENTMQMAAS-181",
        "name": "Add support to system tests for creating/deleting users",
        "projectKey": "ENTMQMAAS",
        "description": "API for create/delete user A with password B in addressspace C",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 1.38,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8571428571
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0002185119858,
            "originalValue": 0.9796151337
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 33.06,
        "calculatedEffectiveHours": 33.06,
        "preceedingTasks": [
          12709911
        ],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12711055,
        "code": "ENTMQMAAS-182",
        "name": "[#194] : Use TLS for broker shutdown hook",
        "projectKey": "ENTMQMAAS",
        "description": "Created from upstream issue [#194|https://github.com/EnMasseProject/enmasse/issues/194].",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 0.42,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8571428571
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0000786643149,
            "originalValue": 0.9940519463
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 10.12,
        "calculatedEffectiveHours": 10.12,
        "preceedingTasks": [
          12709913
        ],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12711057,
        "code": "ENTMQMAAS-184",
        "name": "[#196] : Queue scheduler fails to create queue on broker",
        "projectKey": "ENTMQMAAS",
        "description": "Created from upstream issue [#196|https://github.com/EnMasseProject/enmasse/issues/196].",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 0.48,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.7142857143
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.00008653074638,
            "originalValue": 0.9934610304
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 11.43,
        "calculatedEffectiveHours": 11.43,
        "preceedingTasks": [
          12711055
        ],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12711058,
        "code": "ENTMQMAAS-185",
        "name": "[#197] : Use TLS for router-metrics",
        "projectKey": "ENTMQMAAS",
        "description": "Created from upstream issue [#197|https://github.com/EnMasseProject/enmasse/issues/197].",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 0.36,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8571428571
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.00006992383546,
            "originalValue": 0.9933466401
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 8.76,
        "calculatedEffectiveHours": 8.76,
        "preceedingTasks": [
          12711057
        ],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12711315,
        "code": "ENTMQMAAS-186",
        "name": "[#200] : enmasse.broker.forwarder.ForwarderControllerTest > testBrokerReplicator FAILED",
        "projectKey": "ENTMQMAAS",
        "description": "Created from upstream issue [#200|https://github.com/EnMasseProject/enmasse/issues/200].",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 0.31,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8571428571
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.00006030930809,
            "originalValue": 0.9954301609
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 7.55,
        "calculatedEffectiveHours": 7.55,
        "preceedingTasks": [
          12711058
        ],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12711915,
        "code": "ENTMQMAAS-191",
        "name": "[#220] : Console unable to authenticate with keycloak",
        "projectKey": "ENTMQMAAS",
        "description": "Created from upstream issue [#220|https://github.com/EnMasseProject/enmasse/issues/220].",
        "startTime": null,
        "endTime": null,
        "assignee": "gordonsim",
        "estimateNormalTime": 2.45,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.7142857143
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.00004282834922,
            "originalValue": 0.9967439697
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.9565217391
          }
        ],
        "effectiveTimeHours": 58.71,
        "calculatedEffectiveHours": 58.71,
        "preceedingTasks": [
          12705048,
          12708121,
          12709904
        ],
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12712234,
        "code": "ENTMQMAAS-192",
        "name": "[#231] : improve system-tests regarding to Address Space Tests",
        "projectKey": "ENTMQMAAS",
        "description": "Created from upstream issue [#231|https://github.com/EnMasseProject/enmasse/issues/231].",
        "startTime": null,
        "endTime": null,
        "assignee": "tkratky_jira",
        "estimateNormalTime": 12.9,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 1
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0004912149441,
            "originalValue": 0.9547758912
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 1
          }
        ],
        "effectiveTimeHours": 309.58,
        "calculatedEffectiveHours": 309.58,
        "preceedingTasks": [],
        "requireAssign": {
          "backend": 2.74,
          "frontend": 2.05,
          "database": 1.99,
          "devops": 3,
          "ai_ml": 2.21,
          "testing": 2.89,
          "issue_tracking": 2.97
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "issue_tracking"
        ]
      },
      {
        "id": 12714002,
        "code": "ENTMQMAAS-196",
        "name": "Create design doc and test plan for Brokered Address Space",
        "projectKey": "ENTMQMAAS",
        "description": "",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 0.34,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.7142857143
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0000524428766,
            "originalValue": 0.9949255751
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 8.28,
        "calculatedEffectiveHours": 8.28,
        "preceedingTasks": [
          12711315
        ],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12714004,
        "code": "ENTMQMAAS-197",
        "name": "Use authorization to prevent messaging clients calling management in Brokered Address Space",
        "projectKey": "ENTMQMAAS",
        "description": "",
        "startTime": null,
        "endTime": null,
        "assignee": "rgodfrey@redhat.com",
        "estimateNormalTime": 8.69,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8571428571
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0001651950613,
            "originalValue": 0.987441026
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.8695652174
          }
        ],
        "effectiveTimeHours": 208.59,
        "calculatedEffectiveHours": 208.59,
        "preceedingTasks": [],
        "requireAssign": {
          "backend": 2.89,
          "frontend": 2.23,
          "database": 2.27,
          "devops": 3.04,
          "ai_ml": 2.19,
          "testing": 1.56,
          "issue_tracking": 2.75
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12714006,
        "code": "ENTMQMAAS-198",
        "name": "Add support to Address Controller for brokered address space type and address types to java model",
        "projectKey": "ENTMQMAAS",
        "description": "",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 0.34,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.7142857143
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0000524428766,
            "originalValue": 0.9949255751
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 8.27,
        "calculatedEffectiveHours": 8.27,
        "preceedingTasks": [
          12714002
        ],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12714010,
        "code": "ENTMQMAAS-200",
        "name": "Add support for maintaining endpoints and address space readiness for brokered address space",
        "projectKey": "ENTMQMAAS",
        "description": "",
        "startTime": null,
        "endTime": null,
        "assignee": "lulf@redhat.com",
        "estimateNormalTime": 2.25,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.7142857143
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.0002884358213,
            "originalValue": 0.9727137424
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.924137931
          }
        ],
        "effectiveTimeHours": 54.12,
        "calculatedEffectiveHours": 54.12,
        "preceedingTasks": [
          12714006
        ],
        "requireAssign": {
          "backend": 2.9,
          "frontend": 2.14,
          "database": 2.31,
          "devops": 3.03,
          "ai_ml": 2.35,
          "testing": 1.73,
          "issue_tracking": 2.76
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      },
      {
        "id": 12714052,
        "code": "ENTMQMAAS-201",
        "name": "[#275] : Console Server: Make source of stats, source of addresses pluggable",
        "projectKey": "ENTMQMAAS",
        "description": "Created from upstream issue [#275|https://github.com/EnMasseProject/enmasse/issues/275].",
        "startTime": null,
        "endTime": null,
        "assignee": "gordonsim",
        "estimateNormalTime": 2.17,
        "kpiInTask": [
          {
            "id": 1,
            "type": "Quality",
            "weight": 0.0007369196757553427,
            "originalValue": 0.7142857143
          },
          {
            "id": 2,
            "type": "CircleTime",
            "weight": 0.00009439717787,
            "originalValue": 0.9927841251
          },
          {
            "id": 3,
            "type": "CompletionRate",
            "weight": 0.0007369196757553427,
            "originalValue": 0.9565217391
          }
        ],
        "effectiveTimeHours": 52.07,
        "calculatedEffectiveHours": 52.07,
        "preceedingTasks": [
          12711915,
          12706869
        ],
        "requireAssign": {
          "backend": 2.95,
          "frontend": 2.54,
          "database": 2.45,
          "devops": 3.16,
          "ai_ml": 2.49,
          "testing": 1.71,
          "issue_tracking": 2.89
        },
        "requireAsset": [],
        "tags": [
          "devops",
          "backend"
        ]
      }
    ],
    "employees": [
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
      }
    ]
  }
]; module.exports = { projects};
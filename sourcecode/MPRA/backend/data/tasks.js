const tasks = [

        {
          id: 12662946,
          code: "ENTMQMAAS-5.1",
        name: "switch to use AMQ6 docker/openshift startup script for AMQ7 artemis image.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2016-11-21T03:57:01.000Z",
          endTime: "2017-02-09T22:47:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12662944,
          code: "ENTMQMAAS-4.1",
        name: "remove colocated routers.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2016-11-21T03:54:01.000Z",
          endTime: "2017-03-02T21:14:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12663044,
          code: "ENTMQMAAS-4.2",
        name: "remove colocated routers.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-4.1"],
          startTime: "2017-03-02T21:47:01.000Z",
          endTime: "2017-03-12T18:49:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680064,
          code: "ENTMQMAAS-45.1",
        name: "Service Broker  implementation.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-4.2"],
          startTime: "2017-03-12T18:49:01.000Z",
          endTime: "2017-03-22T15:51:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680067,
          code: "ENTMQMAAS-46.1",
        name: "Authentication.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-45.1"],
          startTime: "2017-03-22T15:51:01.000Z",
          endTime: "2017-04-01T12:53:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680068,
          code: "ENTMQMAAS-47.1",
        name: "Monitoring.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-46.1"],
          startTime: "2017-04-01T12:53:01.000Z",
          endTime: "2017-04-11T09:55:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680070,
          code: "ENTMQMAAS-48.1",
        name: "Inter-cluster router networks.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-47.1"],
          startTime: "2017-04-11T09:55:01.000Z",
          endTime: "2017-04-21T06:57:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680079,
          code: "ENTMQMAAS-49.1",
        name: "providing way to monitor connection and link metrics.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-48.1"],
          startTime: "2017-04-21T06:57:01.000Z",
          endTime: "2017-05-01T03:59:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12690734,
          code: "ENTMQMAAS-51.1",
        name: "Create product build artifacts.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-5.1"],
          startTime: "2017-05-03T20:31:01.000Z",
          endTime: "2017-05-31T22:09:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12690736,
          code: "ENTMQMAAS-53.1",
        name: "Setup CI for product repositories.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.1"],
          startTime: "2017-05-31T22:09:21.000Z",
          endTime: "2017-06-28T23:47:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12690735,
          code: "ENTMQMAAS-52.1",
        name: "Create copy of upstream repositories.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2017-06-28T23:47:41.000Z",
          endTime: "2017-07-27T01:26:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12663144,
          code: "ENTMQMAAS-4.3",
        name: "remove colocated routers.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-49.1"],
          startTime: "2017-05-01T03:59:01.000Z",
          endTime: "2017-05-13T13:54:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680164,
          code: "ENTMQMAAS-45.2",
        name: "Service Broker  implementation.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-4.3"],
          startTime: "2017-05-13T13:54:18.142Z",
          endTime: "2017-05-25T23:49:34.284Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680167,
          code: "ENTMQMAAS-46.2",
        name: "Authentication.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-45.2"],
          startTime: "2017-05-25T23:49:35.285Z",
          endTime: "2017-06-07T09:44:51.427Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680168,
          code: "ENTMQMAAS-47.2",
        name: "Monitoring.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-46.2"],
          startTime: "2017-06-07T09:44:52.428Z",
          endTime: "2017-06-19T19:40:08.570Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680170,
          code: "ENTMQMAAS-48.2",
        name: "Inter-cluster router networks.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-47.2"],
          startTime: "2017-06-19T19:40:09.571Z",
          endTime: "2017-07-02T05:35:25.713Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680179,
          code: "ENTMQMAAS-49.2",
        name: "providing way to monitor connection and link metrics.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-48.2"],
          startTime: "2017-07-02T05:35:26.714Z",
          endTime: "2017-07-14T15:30:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12690168,
          code: "ENTMQMAAS-50.1",
        name: "Release Messaging Images.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.1"],
          startTime: "2017-07-14T15:30:43.857Z",
          endTime: "2017-07-27T01:25:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12663244,
          code: "ENTMQMAAS-4.4",
        name: "remove colocated routers.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-49.2"],
          startTime: "2017-07-27T01:26:01.000Z",
          endTime: "2017-07-27T14:22:53.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680264,
          code: "ENTMQMAAS-45.3",
        name: "Service Broker  implementation.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-4.4"],
          startTime: "2017-07-27T14:22:54.333Z",
          endTime: "2017-07-28T03:19:46.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680267,
          code: "ENTMQMAAS-46.3",
        name: "Authentication.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-45.3"],
          startTime: "2017-07-28T03:19:47.666Z",
          endTime: "2017-07-28T16:16:39.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680268,
          code: "ENTMQMAAS-47.3",
        name: "Monitoring.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-46.3"],
          startTime: "2017-07-28T16:16:41.000Z",
          endTime: "2017-07-29T05:13:33.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680270,
          code: "ENTMQMAAS-48.3",
        name: "Inter-cluster router networks.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-47.3"],
          startTime: "2017-07-29T05:13:34.333Z",
          endTime: "2017-07-29T18:10:26.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680279,
          code: "ENTMQMAAS-49.3",
        name: "providing way to monitor connection and link metrics.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-48.3"],
          startTime: "2017-07-29T18:10:27.666Z",
          endTime: "2017-07-30T07:07:19.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12690268,
          code: "ENTMQMAAS-50.2",
        name: "Release Messaging Images.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-54.1"],
          startTime: "2017-07-30T07:07:21.000Z",
          endTime: "2017-07-30T20:04:13.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12705134,
          code: "ENTMQMAAS-56.1",
        name: "update ragent to support new address model.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.2","ENTMQMAAS-50.2"],
          startTime: "2017-07-30T20:04:14.333Z",
          endTime: "2017-07-31T09:01:06.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12705137,
          code: "ENTMQMAAS-59.1",
        name: "update console to support new address model.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-56.1"],
          startTime: "2017-07-31T09:01:07.666Z",
          endTime: "2017-07-31T21:57:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12705132,
          code: "ENTMQMAAS-54.1",
        name: "Document address model proposal.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2017-07-27T01:26:01.000Z",
          endTime: "2017-07-29T23:44:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12705136,
          code: "ENTMQMAAS-58.1",
        name: "update queue-scheduler to support new address model.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2017-07-29T23:44:31.000Z",
          endTime: "2017-08-01T22:03:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12663344,
          code: "ENTMQMAAS-4.5",
        name: "remove colocated routers.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-49.3"],
          startTime: "2017-07-31T22:09:01.000Z",
          endTime: "2017-08-01T02:55:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680379,
          code: "ENTMQMAAS-49.4",
        name: "providing way to monitor connection and link metrics.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-4.5"],
          startTime: "2017-08-01T02:55:49.000Z",
          endTime: "2017-08-01T07:42:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12690368,
          code: "ENTMQMAAS-50.3",
        name: "Release Messaging Images.3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-55.1","ENTMQMAAS-59.1"],
          startTime: "2017-08-01T07:42:37.000Z",
          endTime: "2017-08-01T12:29:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12705234,
          code: "ENTMQMAAS-56.2",
        name: "update ragent to support new address model.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-50.3"],
          startTime: "2017-08-01T12:29:25.000Z",
          endTime: "2017-08-01T17:16:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12705237,
          code: "ENTMQMAAS-59.2",
        name: "update console to support new address model.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-56.2"],
          startTime: "2017-08-01T17:16:13.000Z",
          endTime: "2017-08-01T22:03:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12690834,
          code: "ENTMQMAAS-51.2",
        name: "Create product build artifacts.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-50.1","ENTMQMAAS-52.1"],
          startTime: "2017-07-27T01:26:01.000Z",
          endTime: "2017-07-28T05:33:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12690836,
          code: "ENTMQMAAS-53.2",
        name: "Setup CI for product repositories.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.2"],
          startTime: "2017-07-28T05:33:37.000Z",
          endTime: "2017-07-29T09:41:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12690835,
          code: "ENTMQMAAS-52.2",
        name: "Create copy of upstream repositories.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.2"],
          startTime: "2017-07-29T09:41:13.000Z",
          endTime: "2017-07-30T13:48:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12705133,
          code: "ENTMQMAAS-55.1",
        name: "update address-controller to support new address model.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2017-07-30T13:48:49.000Z",
          endTime: "2017-07-31T17:56:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12705135,
          code: "ENTMQMAAS-57.1",
        name: "update configserv to support new address model.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2017-07-31T17:56:25.000Z",
          endTime: "2017-08-01T22:04:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12720977,
          code: "ENTMQMAAS-302.1",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2017-11-13T19:37:01.000Z",
          endTime: "2017-11-13T20:59:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12720974,
          code: "ENTMQMAAS-300.1",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.1"],
          startTime: "2017-11-13T20:59:01.000Z",
          endTime: "2017-11-13T22:21:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12720976,
          code: "ENTMQMAAS-301.1",
        name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.1"],
          startTime: "2017-11-13T22:21:01.000Z",
          endTime: "2017-11-13T23:43:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721077,
          code: "ENTMQMAAS-302.2",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-301.1"],
          startTime: "2017-11-13T23:43:01.000Z",
          endTime: "2017-11-14T06:05:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721074,
          code: "ENTMQMAAS-300.2",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.2"],
          startTime: "2017-11-14T06:05:16.000Z",
          endTime: "2017-11-14T12:27:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721076,
          code: "ENTMQMAAS-301.2",
        name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.2"],
          startTime: "2017-11-14T12:27:31.000Z",
          endTime: "2017-11-14T18:49:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721055,
          code: "ENTMQMAAS-304.1",
        name: "[#524] : System-tests: longtime: create new test for user authentication before/after restarting keycloak.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-301.2"],
          startTime: "2017-11-14T18:49:46.000Z",
          endTime: "2017-11-15T01:12:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721177,
          code: "ENTMQMAAS-302.3",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-304.1"],
          startTime: "2017-11-15T01:12:01.000Z",
          endTime: "2017-11-15T04:47:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721174,
          code: "ENTMQMAAS-300.3",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.3"],
          startTime: "2017-11-15T04:47:49.000Z",
          endTime: "2017-11-15T08:23:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721176,
          code: "ENTMQMAAS-301.3",
        name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.3"],
          startTime: "2017-11-15T08:23:37.000Z",
          endTime: "2017-11-15T11:59:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721155,
          code: "ENTMQMAAS-304.2",
        name: "[#524] : System-tests: longtime: create new test for user authentication before/after restarting keycloak.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-301.3"],
          startTime: "2017-11-15T11:59:25.000Z",
          endTime: "2017-11-15T15:35:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721260,
          code: "ENTMQMAAS-306.1",
        name: "Unable test io.enmasse.systemtest.brokered.clients.rhea.MsgPatternsTest.testMessageSelectorTopic.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-304.2"],
          startTime: "2017-11-15T15:35:13.000Z",
          endTime: "2017-11-15T19:11:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721277,
          code: "ENTMQMAAS-302.4",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-306.1"],
          startTime: "2017-11-15T19:11:01.000Z",
          endTime: "2017-11-15T20:18:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721274,
          code: "ENTMQMAAS-300.4",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.4"],
          startTime: "2017-11-15T20:18:01.000Z",
          endTime: "2017-11-15T21:25:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721276,
          code: "ENTMQMAAS-301.4",
        name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.4"],
          startTime: "2017-11-15T21:25:01.000Z",
          endTime: "2017-11-15T22:32:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721255,
          code: "ENTMQMAAS-304.3",
        name: "[#524] : System-tests: longtime: create new test for user authentication before/after restarting keycloak.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-301.4"],
          startTime: "2017-11-15T22:32:01.000Z",
          endTime: "2017-11-15T23:39:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721052,
          code: "ENTMQMAAS-303.1",
        name: "[#523] : SystemTests: brokered/standard: new test for keycloak persistent storage.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2017-11-14T00:49:01.000Z",
          endTime: "2017-11-16T23:02:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721076,
          code: "ENTMQMAAS-305.1",
        name: "[#526] : System-tests: November list of disabled tests.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-303.1"],
          startTime: "2017-11-16T23:02:31.000Z",
          endTime: "2017-11-19T21:16:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721377,
          code: "ENTMQMAAS-302.5",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-304.3"],
          startTime: "2017-11-15T23:39:01.000Z",
          endTime: "2017-11-18T12:55:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721374,
          code: "ENTMQMAAS-300.5",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.5"],
          startTime: "2017-11-18T12:55:49.000Z",
          endTime: "2017-11-21T02:12:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721376,
          code: "ENTMQMAAS-301.5",
        name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.5"],
          startTime: "2017-11-21T02:12:37.000Z",
          endTime: "2017-11-23T15:29:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721355,
          code: "ENTMQMAAS-304.4",
        name: "[#524] : System-tests: longtime: create new test for user authentication before/after restarting keycloak.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-301.5"],
          startTime: "2017-11-23T15:29:25.000Z",
          endTime: "2017-11-26T04:46:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721410,
          code: "ENTMQMAAS-307.1",
        name: "[#539] : System-tests: createtestAuthSendReceiveLong.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-304.4"],
          startTime: "2017-11-26T04:46:13.000Z",
          endTime: "2017-11-28T18:03:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721152,
          code: "ENTMQMAAS-303.2",
        name: "[#523] : SystemTests: brokered/standard: new test for keycloak persistent storage.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-305.1"],
          startTime: "2017-11-19T22:28:01.000Z",
          endTime: "2017-11-22T09:37:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721176,
          code: "ENTMQMAAS-305.2",
        name: "[#526] : System-tests: November list of disabled tests.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-303.2"],
          startTime: "2017-11-22T09:37:46.000Z",
          endTime: "2017-11-24T20:47:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721614,
          code: "ENTMQMAAS-309.1",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-305.2"],
          startTime: "2017-11-24T20:47:31.000Z",
          endTime: "2017-11-27T07:57:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721634,
          code: "ENTMQMAAS-310.1",
        name: "[#548] : System-tests: framework(clients tests): add comments what value can be set for each parameter.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.1"],
          startTime: "2017-11-27T07:57:16.000Z",
          endTime: "2017-11-29T19:07:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721252,
          code: "ENTMQMAAS-303.3",
        name: "[#523] : SystemTests: brokered/standard: new test for keycloak persistent storage.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-307.1","ENTMQMAAS-310.1"],
          startTime: "2017-11-29T19:07:01.000Z",
          endTime: "2017-11-30T00:32:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721276,
          code: "ENTMQMAAS-305.3",
        name: "[#526] : System-tests: November list of disabled tests.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-303.3"],
          startTime: "2017-11-30T00:32:01.000Z",
          endTime: "2017-11-30T05:57:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721714,
          code: "ENTMQMAAS-309.2",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-305.3"],
          startTime: "2017-11-30T05:57:01.000Z",
          endTime: "2017-11-30T11:22:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721734,
          code: "ENTMQMAAS-310.2",
        name: "[#548] : System-tests: framework(clients tests): add comments what value can be set for each parameter.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.2"],
          startTime: "2017-11-30T11:22:01.000Z",
          endTime: "2017-11-30T16:47:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722974,
          code: "ENTMQMAAS-314.1",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-310.2"],
          startTime: "2017-11-30T16:47:01.000Z",
          endTime: "2017-11-30T22:12:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721352,
          code: "ENTMQMAAS-303.4",
        name: "[#523] : SystemTests: brokered/standard: new test for keycloak persistent storage.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.1"],
          startTime: "2017-11-30T22:12:01.000Z",
          endTime: "2017-12-01T16:43:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721814,
          code: "ENTMQMAAS-309.3",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-303.4"],
          startTime: "2017-12-01T16:43:16.000Z",
          endTime: "2017-12-02T11:14:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721834,
          code: "ENTMQMAAS-310.3",
        name: "[#548] : System-tests: framework(clients tests): add comments what value can be set for each parameter.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.3"],
          startTime: "2017-12-02T11:14:31.000Z",
          endTime: "2017-12-03T05:45:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723074,
          code: "ENTMQMAAS-314.2",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-310.3"],
          startTime: "2017-12-03T05:45:46.000Z",
          endTime: "2017-12-04T00:17:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724180,
          code: "ENTMQMAAS-318.1",
        name: "Productize ER3 of RHOM.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.2"],
          startTime: "2017-12-07T23:22:01.000Z",
          endTime: "2017-12-08T04:23:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12690934,
          code: "ENTMQMAAS-51.3",
        name: "Create product build artifacts.3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-58.1","ENTMQMAAS-59.2","ENTMQMAAS-57.1"],
          startTime: "2017-08-01T22:04:01.000Z",
          endTime: "2017-09-17T05:44:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12690936,
          code: "ENTMQMAAS-53.3",
        name: "Setup CI for product repositories.3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.3"],
          startTime: "2017-09-17T05:44:41.000Z",
          endTime: "2017-11-02T13:25:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12690935,
          code: "ENTMQMAAS-52.3",
        name: "Create copy of upstream repositories.3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.3"],
          startTime: "2017-11-02T13:25:21.000Z",
          endTime: "2017-12-18T21:06:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721452,
          code: "ENTMQMAAS-303.5",
        name: "[#523] : SystemTests: brokered/standard: new test for keycloak persistent storage.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2017-12-04T00:17:01.000Z",
          endTime: "2017-12-10T03:55:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721914,
          code: "ENTMQMAAS-309.4",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-318.1","ENTMQMAAS-303.5"],
          startTime: "2017-12-10T03:55:37.000Z",
          endTime: "2017-12-16T07:34:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721934,
          code: "ENTMQMAAS-310.4",
        name: "[#548] : System-tests: framework(clients tests): add comments what value can be set for each parameter.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.4"],
          startTime: "2017-12-16T07:34:13.000Z",
          endTime: "2017-12-22T11:12:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723174,
          code: "ENTMQMAAS-314.3",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.6","ENTMQMAAS-310.4"],
          startTime: "2017-12-22T11:12:49.000Z",
          endTime: "2017-12-28T14:51:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723388,
          code: "ENTMQMAAS-316.1",
        name: "[#604] : Address-controller: PUT method is not implemented.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.3"],
          startTime: "2017-12-28T14:51:25.000Z",
          endTime: "2018-01-03T18:30:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691034,
          code: "ENTMQMAAS-51.4",
        name: "Create product build artifacts.4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.3"],
          startTime: "2017-12-18T21:06:01.000Z",
          endTime: "2017-12-27T09:14:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691036,
          code: "ENTMQMAAS-53.4",
        name: "Setup CI for product repositories.4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.4"],
          startTime: "2017-12-27T09:14:16.000Z",
          endTime: "2018-01-04T21:22:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691035,
          code: "ENTMQMAAS-52.4",
        name: "Create copy of upstream repositories.4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.4"],
          startTime: "2018-01-04T21:22:31.000Z",
          endTime: "2018-01-13T09:30:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725685,
          code: "ENTMQMAAS-323.1",
        name: "Creating and deleting addresses.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-13T09:30:46.000Z",
          endTime: "2018-01-21T21:39:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12663444,
          code: "ENTMQMAAS-4.6",
        name: "remove colocated routers.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-49.4"],
          startTime: "2017-08-01T22:03:01.000Z",
          endTime: "2017-09-28T13:55:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680479,
          code: "ENTMQMAAS-49.5",
        name: "providing way to monitor connection and link metrics.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-4.6"],
          startTime: "2017-09-28T13:55:21.000Z",
          endTime: "2017-11-25T05:47:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12690468,
          code: "ENTMQMAAS-50.4",
        name: "Release Messaging Images.4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2017-11-25T05:47:41.000Z",
          endTime: "2018-01-21T21:40:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722014,
          code: "ENTMQMAAS-309.5",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.1"],
          startTime: "2018-01-03T18:30:01.000Z",
          endTime: "2018-01-08T07:50:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722034,
          code: "ENTMQMAAS-310.5",
        name: "[#548] : System-tests: framework(clients tests): add comments what value can be set for each parameter.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.6","ENTMQMAAS-309.5"],
          startTime: "2018-01-08T07:50:31.000Z",
          endTime: "2018-01-12T21:11:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723274,
          code: "ENTMQMAAS-314.4",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-310.5"],
          startTime: "2018-01-12T21:11:01.000Z",
          endTime: "2018-01-17T10:31:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723488,
          code: "ENTMQMAAS-316.2",
        name: "[#604] : Address-controller: PUT method is not implemented.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-17T10:31:31.000Z",
          endTime: "2018-01-21T23:52:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721477,
          code: "ENTMQMAAS-302.6",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2017-11-28T18:06:01.000Z",
          endTime: "2017-12-16T20:01:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721474,
          code: "ENTMQMAAS-300.6",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2017-12-16T20:01:41.000Z",
          endTime: "2018-01-03T21:57:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721476,
          code: "ENTMQMAAS-301.6",
        name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-03T21:57:21.000Z",
          endTime: "2018-01-21T23:53:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730174,
          code: "ENTMQMAAS-338.1",
        name: "[#750] : Handle scaledown of queues and topics at deploy time.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.4","ENTMQMAAS-323.1"],
          startTime: "2018-01-21T21:40:01.000Z",
          endTime: "2018-01-21T21:54:46.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730180,
          code: "ENTMQMAAS-344.1",
        name: "[#756] : Monitoring for operator(us): prometheus for alerting and metrics, log aggregation/search for logs.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-338.1"],
          startTime: "2018-01-21T21:54:47.666Z",
          endTime: "2018-01-21T22:09:33.332Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730175,
          code: "ENTMQMAAS-339.1",
        name: "[#751] : Use valid wildcart cert.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-344.1"],
          startTime: "2018-01-21T22:09:34.333Z",
          endTime: "2018-01-21T22:24:19.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730188,
          code: "ENTMQMAAS-352.1",
        name: "[#764] : Some level of metrics on address controller / standard controller to show prometheus metrics.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-339.1"],
          startTime: "2018-01-21T22:24:21.000Z",
          endTime: "2018-01-21T22:39:06.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730189,
          code: "ENTMQMAAS-353.1",
        name: "[#765] : Changes to service broker (service type is just address space, different plans are supported. See also point above about how to tie plans offered to plans specified) .1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-352.1"],
          startTime: "2018-01-21T22:39:07.666Z",
          endTime: "2018-01-21T22:53:53.332Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730179,
          code: "ENTMQMAAS-343.1",
        name: "[#755] : Productize: router, queue-scheduler, standard-controller, alter keycloak to be init-container image.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-353.1"],
          startTime: "2018-01-21T22:53:54.333Z",
          endTime: "2018-01-21T23:08:39.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730178,
          code: "ENTMQMAAS-342.1",
        name: "[#754] : Deploying keycloak in an HA configuration.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-343.1"],
          startTime: "2018-01-21T23:08:41.000Z",
          endTime: "2018-01-21T23:23:26.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730177,
          code: "ENTMQMAAS-341.1",
        name: "[#753] : Tie user identity creating address spaces and addresses to billing (i.e. reliable record of addresses spaces used against some identity for the customer).1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-342.1"],
          startTime: "2018-01-21T23:23:27.666Z",
          endTime: "2018-01-21T23:38:13.332Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730182,
          code: "ENTMQMAAS-346.1",
        name: "[#758] : Keycloak plugin OAUTH2 support.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-341.1"],
          startTime: "2018-01-21T23:38:14.333Z",
          endTime: "2018-01-21T23:52:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12727941,
          code: "ENTMQMAAS-328.1",
        name: "Document Creating and deleting addresses.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-12T03:32:01.000Z",
          endTime: "2018-01-29T07:03:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691134,
          code: "ENTMQMAAS-51.5",
        name: "Create product build artifacts.5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.4","ENTMQMAAS-50.4"],
          startTime: "2018-01-21T21:40:01.000Z",
          endTime: "2018-01-22T14:12:55.384Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691136,
          code: "ENTMQMAAS-53.5",
        name: "Setup CI for product repositories.5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.5"],
          startTime: "2018-01-22T14:12:56.384Z",
          endTime: "2018-01-23T06:45:50.768Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691135,
          code: "ENTMQMAAS-52.5",
        name: "Create copy of upstream repositories.5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.5"],
          startTime: "2018-01-23T06:45:51.769Z",
          endTime: "2018-01-23T23:18:46.153Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725785,
          code: "ENTMQMAAS-323.2",
        name: "Creating and deleting addresses.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.7"],
          startTime: "2018-01-23T23:18:47.153Z",
          endTime: "2018-01-24T15:51:41.537Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730170,
          code: "ENTMQMAAS-334.1",
        name: "[#746] : Add support for checking requests against limits and setting status on address.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.6","ENTMQMAAS-338.2","ENTMQMAAS-323.2"],
          startTime: "2018-01-24T15:51:42.538Z",
          endTime: "2018-01-25T08:24:36.922Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730171,
          code: "ENTMQMAAS-335.1",
        name: "[#747] : Add support for colocated topics.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.7","ENTMQMAAS-334.1"],
          startTime: "2018-01-25T08:24:37.923Z",
          endTime: "2018-01-26T00:57:32.307Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730173,
          code: "ENTMQMAAS-337.1",
        name: "[#749] : Use statefulsets for brokers.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-310.6","ENTMQMAAS-335.1"],
          startTime: "2018-01-26T00:57:33.307Z",
          endTime: "2018-01-26T17:30:27.691Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730168,
          code: "ENTMQMAAS-332.1",
        name: "[#744] : Implement Plan resource limits for address space.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-344.2","ENTMQMAAS-301.7","ENTMQMAAS-337.1"],
          startTime: "2018-01-26T17:30:28.692Z",
          endTime: "2018-01-27T10:03:23.076Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730172,
          code: "ENTMQMAAS-336.1",
        name: "[#748] : Persist decision about where queues/topics are placed.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-332.1"],
          startTime: "2018-01-27T10:03:24.076Z",
          endTime: "2018-01-28T02:36:18.460Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730169,
          code: "ENTMQMAAS-333.1",
        name: "[#745] : Implement Plan resource requests for addresses.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.5","ENTMQMAAS-336.1"],
          startTime: "2018-01-28T02:36:19.461Z",
          endTime: "2018-01-28T19:09:13.845Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730176,
          code: "ENTMQMAAS-340.1",
        name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-361.1","ENTMQMAAS-339.2","ENTMQMAAS-333.1"],
          startTime: "2018-01-28T19:09:14.846Z",
          endTime: "2018-01-29T11:42:09.230Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730183,
          code: "ENTMQMAAS-347.1",
        name: "[#759] : Delegate from keycloak to OpenShift Pro.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-328.1","ENTMQMAAS-340.1"],
          startTime: "2018-01-29T11:42:10.230Z",
          endTime: "2018-01-30T04:15:04.614Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730192,
          code: "ENTMQMAAS-356.1",
        name: "[#768] : Disable MQTT (configurable upstream?).1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-362.1","ENTMQMAAS-316.3","ENTMQMAAS-347.1"],
          startTime: "2018-01-30T04:15:05.615Z",
          endTime: "2018-01-30T20:47:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721577,
          code: "ENTMQMAAS-302.7",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.2","ENTMQMAAS-346.1","ENTMQMAAS-301.6"],
          startTime: "2018-01-22T00:33:01.000Z",
          endTime: "2018-01-23T13:32:53.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721574,
          code: "ENTMQMAAS-300.7",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-23T13:32:54.333Z",
          endTime: "2018-01-25T02:32:46.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721576,
          code: "ENTMQMAAS-301.7",
        name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-25T02:32:47.666Z",
          endTime: "2018-01-26T15:32:39.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730244,
          code: "ENTMQMAAS-361.1",
        name: "[#773] : Tests for authentication WebConsole.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-26T15:32:41.000Z",
          endTime: "2018-01-28T04:32:33.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730245,
          code: "ENTMQMAAS-362.1",
        name: "[#774] : Tests for authorization in WebConsole.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-28T04:32:34.333Z",
          endTime: "2018-01-29T17:32:26.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730243,
          code: "ENTMQMAAS-360.1",
        name: "[#772] : WebConsole Tests for addresses status.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-29T17:32:27.666Z",
          endTime: "2018-01-31T06:32:19.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730246,
          code: "ENTMQMAAS-363.1",
        name: "[#775] : Tests for clients authorization.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-31T06:32:21.000Z",
          endTime: "2018-02-01T19:32:13.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730248,
          code: "ENTMQMAAS-365.1",
        name: "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-01T19:32:14.333Z",
          endTime: "2018-02-03T08:32:06.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730267,
          code: "ENTMQMAAS-367.1",
        name: "Setup Jenkins job with productized images.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-03T08:32:07.666Z",
          endTime: "2018-02-04T21:31:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722114,
          code: "ENTMQMAAS-309.6",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-21T23:53:01.000Z",
          endTime: "2018-01-23T23:52:08.571Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722134,
          code: "ENTMQMAAS-310.6",
        name: "[#548] : System-tests: framework(clients tests): add comments what value can be set for each parameter.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-23T23:52:09.571Z",
          endTime: "2018-01-25T23:51:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723374,
          code: "ENTMQMAAS-314.5",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-25T23:51:18.142Z",
          endTime: "2018-01-27T23:50:25.713Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723588,
          code: "ENTMQMAAS-316.3",
        name: "[#604] : Address-controller: PUT method is not implemented.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-27T23:50:26.714Z",
          endTime: "2018-01-29T23:49:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730239,
          code: "ENTMQMAAS-357.1",
        name: "Polarion reporting of enmasse test cases.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-29T23:49:35.285Z",
          endTime: "2018-01-31T23:48:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730241,
          code: "ENTMQMAAS-358.1",
        name: "[#770] : Define tests for limitation of address-spaces (by credits).1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-31T23:48:43.857Z",
          endTime: "2018-02-02T23:47:51.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730247,
          code: "ENTMQMAAS-364.1",
        name: "[#776] : Recheck and enable system tests for standard address space.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-02T23:47:52.428Z",
          endTime: "2018-02-04T23:46:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721677,
          code: "ENTMQMAAS-302.8",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-343.2","ENTMQMAAS-347.2","ENTMQMAAS-367.1"],
          startTime: "2018-02-04T21:33:01.000Z",
          endTime: "2018-02-04T21:59:51.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721674,
          code: "ENTMQMAAS-300.8",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.8"],
          startTime: "2018-02-04T21:59:52.428Z",
          endTime: "2018-02-04T22:26:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721676,
          code: "ENTMQMAAS-301.8",
        name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.8"],
          startTime: "2018-02-04T22:26:43.857Z",
          endTime: "2018-02-04T22:53:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730344,
          code: "ENTMQMAAS-361.2",
        name: "[#773] : Tests for authentication WebConsole.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-301.8"],
          startTime: "2018-02-04T22:53:35.285Z",
          endTime: "2018-02-04T23:20:25.713Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730343,
          code: "ENTMQMAAS-360.2",
        name: "[#772] : WebConsole Tests for addresses status.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-361.2"],
          startTime: "2018-02-04T23:20:26.714Z",
          endTime: "2018-02-04T23:47:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730348,
          code: "ENTMQMAAS-365.2",
        name: "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-364.1","ENTMQMAAS-360.2"],
          startTime: "2018-02-04T23:47:18.142Z",
          endTime: "2018-02-05T00:14:08.570Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730367,
          code: "ENTMQMAAS-367.2",
        name: "Setup Jenkins job with productized images.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-365.2"],
          startTime: "2018-02-05T00:14:09.571Z",
          endTime: "2018-02-05T00:40:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691234,
          code: "ENTMQMAAS-51.6",
        name: "Create product build artifacts.6",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.5"],
          startTime: "2018-01-30T20:48:01.000Z",
          endTime: "2018-01-31T07:07:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691236,
          code: "ENTMQMAAS-53.6",
        name: "Setup CI for product repositories.6",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.6"],
          startTime: "2018-01-31T07:07:46.000Z",
          endTime: "2018-01-31T17:27:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691235,
          code: "ENTMQMAAS-52.6",
        name: "Create copy of upstream repositories.6",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.6"],
          startTime: "2018-01-31T17:27:31.000Z",
          endTime: "2018-02-01T03:47:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725885,
          code: "ENTMQMAAS-323.3",
        name: "Creating and deleting addresses.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-352.2","ENTMQMAAS-356.1","ENTMQMAAS-360.1","ENTMQMAAS-357.1"],
          startTime: "2018-02-01T03:47:16.000Z",
          endTime: "2018-02-01T14:07:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730270,
          code: "ENTMQMAAS-334.2",
        name: "[#746] : Add support for checking requests against limits and setting status on address.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-323.3"],
          startTime: "2018-02-01T14:07:01.000Z",
          endTime: "2018-02-02T00:26:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730271,
          code: "ENTMQMAAS-335.2",
        name: "[#747] : Add support for colocated topics.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-363.1","ENTMQMAAS-353.2","ENTMQMAAS-334.2"],
          startTime: "2018-02-02T00:26:46.000Z",
          endTime: "2018-02-02T10:46:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730268,
          code: "ENTMQMAAS-332.2",
        name: "[#744] : Implement Plan resource limits for address space.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-335.2"],
          startTime: "2018-02-02T10:46:31.000Z",
          endTime: "2018-02-02T21:06:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730272,
          code: "ENTMQMAAS-336.2",
        name: "[#748] : Persist decision about where queues/topics are placed.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-328.2","ENTMQMAAS-332.2"],
          startTime: "2018-02-02T21:06:16.000Z",
          endTime: "2018-02-03T07:26:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730269,
          code: "ENTMQMAAS-333.2",
        name: "[#745] : Implement Plan resource requests for addresses.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-358.1","ENTMQMAAS-336.2"],
          startTime: "2018-02-03T07:26:01.000Z",
          endTime: "2018-02-03T17:45:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730276,
          code: "ENTMQMAAS-340.2",
        name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-365.1","ENTMQMAAS-333.2"],
          startTime: "2018-02-03T17:45:46.000Z",
          endTime: "2018-02-04T04:05:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730283,
          code: "ENTMQMAAS-347.2",
        name: "[#759] : Delegate from keycloak to OpenShift Pro.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-340.2"],
          startTime: "2018-02-04T04:05:31.000Z",
          endTime: "2018-02-04T14:25:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730292,
          code: "ENTMQMAAS-356.2",
        name: "[#768] : Disable MQTT (configurable upstream?).2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-04T14:25:16.000Z",
          endTime: "2018-02-05T00:45:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722214,
          code: "ENTMQMAAS-309.7",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-05T00:27:01.000Z",
          endTime: "2018-02-05T06:54:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722234,
          code: "ENTMQMAAS-310.7",
        name: "[#548] : System-tests: framework(clients tests): add comments what value can be set for each parameter.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.7"],
          startTime: "2018-02-05T06:54:01.000Z",
          endTime: "2018-02-05T13:21:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723474,
          code: "ENTMQMAAS-314.6",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-310.7"],
          startTime: "2018-02-05T13:21:01.000Z",
          endTime: "2018-02-05T19:48:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723688,
          code: "ENTMQMAAS-316.4",
        name: "[#604] : Address-controller: PUT method is not implemented.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.6"],
          startTime: "2018-02-05T19:48:01.000Z",
          endTime: "2018-02-06T02:15:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730341,
          code: "ENTMQMAAS-358.2",
        name: "[#770] : Define tests for limitation of address-spaces (by credits).2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.4"],
          startTime: "2018-02-06T02:15:01.000Z",
          endTime: "2018-02-06T08:42:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730347,
          code: "ENTMQMAAS-364.2",
        name: "[#776] : Recheck and enable system tests for standard address space.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-358.2"],
          startTime: "2018-02-06T08:42:01.000Z",
          endTime: "2018-02-06T15:09:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12732696,
          code: "ENTMQMAAS-374.1",
        name: "[#843] : improve test framework regarding to definition of dynamically created plans.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-364.2"],
          startTime: "2018-02-06T15:09:01.000Z",
          endTime: "2018-02-06T21:36:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721777,
          code: "ENTMQMAAS-302.9",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-367.2"],
          startTime: "2018-02-05T00:41:01.000Z",
          endTime: "2018-02-05T06:37:37.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721774,
          code: "ENTMQMAAS-300.9",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-356.2","ENTMQMAAS-302.9"],
          startTime: "2018-02-05T06:37:38.500Z",
          endTime: "2018-02-05T12:34:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721776,
          code: "ENTMQMAAS-301.9",
        name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.9"],
          startTime: "2018-02-05T12:34:16.000Z",
          endTime: "2018-02-05T18:30:52.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730444,
          code: "ENTMQMAAS-361.3",
        name: "[#773] : Tests for authentication WebConsole.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-301.9"],
          startTime: "2018-02-05T18:30:53.500Z",
          endTime: "2018-02-06T00:27:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730443,
          code: "ENTMQMAAS-360.3",
        name: "[#772] : WebConsole Tests for addresses status.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-361.3"],
          startTime: "2018-02-06T00:27:31.000Z",
          endTime: "2018-02-06T06:24:07.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730448,
          code: "ENTMQMAAS-365.3",
        name: "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-360.3"],
          startTime: "2018-02-06T06:24:08.500Z",
          endTime: "2018-02-06T12:20:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730467,
          code: "ENTMQMAAS-367.3",
        name: "Setup Jenkins job with productized images.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-342.2","ENTMQMAAS-365.3"],
          startTime: "2018-02-06T12:20:46.000Z",
          endTime: "2018-02-06T18:17:22.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12732715,
          code: "ENTMQMAAS-375.1",
        name: "[#844] : system-tests: create documentation in HACKING doc how to execute webconsole tests.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-367.3"],
          startTime: "2018-02-06T18:17:23.500Z",
          endTime: "2018-02-07T00:14:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12728041,
          code: "ENTMQMAAS-328.2",
        name: "Document Creating and deleting addresses.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-29T07:03:01.000Z",
          endTime: "2018-02-02T16:50:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731550,
          code: "ENTMQMAAS-372.1",
        name: "Console: Create an Address wizard tooltip placement awkward.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-02T16:50:31.000Z",
          endTime: "2018-02-07T02:38:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721877,
          code: "ENTMQMAAS-302.10",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.10",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-374.1","ENTMQMAAS-375.1"],
          startTime: "2018-02-07T00:14:01.000Z",
          endTime: "2018-02-07T16:45:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721874,
          code: "ENTMQMAAS-300.10",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.10",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.10"],
          startTime: "2018-02-07T16:45:01.000Z",
          endTime: "2018-02-08T09:16:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721876,
          code: "ENTMQMAAS-301.10",
        name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.10",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.10"],
          startTime: "2018-02-08T09:16:01.000Z",
          endTime: "2018-02-09T01:47:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730543,
          code: "ENTMQMAAS-360.4",
        name: "[#772] : WebConsole Tests for addresses status.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-341.2","ENTMQMAAS-334.3","ENTMQMAAS-301.10"],
          startTime: "2018-02-09T01:47:01.000Z",
          endTime: "2018-02-09T18:18:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730548,
          code: "ENTMQMAAS-365.4",
        name: "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.8","ENTMQMAAS-360.4"],
          startTime: "2018-02-09T18:18:01.000Z",
          endTime: "2018-02-10T10:49:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730567,
          code: "ENTMQMAAS-367.4",
        name: "Setup Jenkins job with productized images.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-365.4"],
          startTime: "2018-02-10T10:49:01.000Z",
          endTime: "2018-02-11T03:20:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12732815,
          code: "ENTMQMAAS-375.2",
        name: "[#844] : system-tests: create documentation in HACKING doc how to execute webconsole tests.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-346.2","ENTMQMAAS-367.4"],
          startTime: "2018-02-11T03:20:01.000Z",
          endTime: "2018-02-11T19:51:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721977,
          code: "ENTMQMAAS-302.11",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.11",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-340.3","ENTMQMAAS-310.8","ENTMQMAAS-375.2"],
          startTime: "2018-02-11T19:51:01.000Z",
          endTime: "2018-02-11T23:44:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721974,
          code: "ENTMQMAAS-300.11",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.11",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.11"],
          startTime: "2018-02-11T23:44:31.000Z",
          endTime: "2018-02-12T03:38:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721976,
          code: "ENTMQMAAS-301.11",
        name: "[#516] : System-tests: create testCreateDeleteAddressesViaAgentLong.11",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.11"],
          startTime: "2018-02-12T03:38:01.000Z",
          endTime: "2018-02-12T07:31:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730643,
          code: "ENTMQMAAS-360.5",
        name: "[#772] : WebConsole Tests for addresses status.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-347.3","ENTMQMAAS-301.11"],
          startTime: "2018-02-12T07:31:31.000Z",
          endTime: "2018-02-12T11:25:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730648,
          code: "ENTMQMAAS-365.5",
        name: "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-349.1","ENTMQMAAS-360.5"],
          startTime: "2018-02-12T11:25:01.000Z",
          endTime: "2018-02-12T15:18:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730667,
          code: "ENTMQMAAS-367.5",
        name: "Setup Jenkins job with productized images.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-365.5"],
          startTime: "2018-02-12T15:18:31.000Z",
          endTime: "2018-02-12T19:12:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691334,
          code: "ENTMQMAAS-51.7",
        name: "Create product build artifacts.7",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.6","ENTMQMAAS-50.5"],
          startTime: "2018-02-05T00:46:01.000Z",
          endTime: "2018-02-05T19:46:18.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691336,
          code: "ENTMQMAAS-53.7",
        name: "Setup CI for product repositories.7",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.7"],
          startTime: "2018-02-05T19:46:19.000Z",
          endTime: "2018-02-06T14:46:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691335,
          code: "ENTMQMAAS-52.7",
        name: "Create copy of upstream repositories.7",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.7"],
          startTime: "2018-02-06T14:46:37.000Z",
          endTime: "2018-02-07T09:46:54.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725985,
          code: "ENTMQMAAS-323.4",
        name: "Creating and deleting addresses.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-372.1"],
          startTime: "2018-02-07T09:46:55.000Z",
          endTime: "2018-02-08T04:47:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730370,
          code: "ENTMQMAAS-334.3",
        name: "[#746] : Add support for checking requests against limits and setting status on address.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-355.1","ENTMQMAAS-323.4"],
          startTime: "2018-02-08T04:47:13.000Z",
          endTime: "2018-02-08T23:47:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730371,
          code: "ENTMQMAAS-335.3",
        name: "[#747] : Add support for colocated topics.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-08T23:47:31.000Z",
          endTime: "2018-02-09T18:47:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730372,
          code: "ENTMQMAAS-336.3",
        name: "[#748] : Persist decision about where queues/topics are placed.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-335.3"],
          startTime: "2018-02-09T18:47:49.000Z",
          endTime: "2018-02-10T13:48:06.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730376,
          code: "ENTMQMAAS-340.3",
        name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-336.3"],
          startTime: "2018-02-10T13:48:07.000Z",
          endTime: "2018-02-11T08:48:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730383,
          code: "ENTMQMAAS-347.3",
        name: "[#759] : Delegate from keycloak to OpenShift Pro.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-11T08:48:25.000Z",
          endTime: "2018-02-12T03:48:42.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730392,
          code: "ENTMQMAAS-356.3",
        name: "[#768] : Disable MQTT (configurable upstream?).3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-12T03:48:43.000Z",
          endTime: "2018-02-12T22:49:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730274,
          code: "ENTMQMAAS-338.2",
        name: "[#750] : Handle scaledown of queues and topics at deploy time.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-21T23:53:01.000Z",
          endTime: "2018-01-24T04:35:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730280,
          code: "ENTMQMAAS-344.2",
        name: "[#756] : Monitoring for operator(us): prometheus for alerting and metrics, log aggregation/search for logs.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-24T04:35:37.000Z",
          endTime: "2018-01-26T09:18:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730275,
          code: "ENTMQMAAS-339.2",
        name: "[#751] : Use valid wildcart cert.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-26T09:18:13.000Z",
          endTime: "2018-01-28T14:00:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730288,
          code: "ENTMQMAAS-352.2",
        name: "[#764] : Some level of metrics on address controller / standard controller to show prometheus metrics.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-28T14:00:49.000Z",
          endTime: "2018-01-30T18:43:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730289,
          code: "ENTMQMAAS-353.2",
        name: "[#765] : Changes to service broker (service type is just address space, different plans are supported. See also point above about how to tie plans offered to plans specified) .2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-01-30T18:43:25.000Z",
          endTime: "2018-02-01T23:26:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730279,
          code: "ENTMQMAAS-343.2",
        name: "[#755] : Productize: router, queue-scheduler, standard-controller, alter keycloak to be init-container image.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-01T23:26:01.000Z",
          endTime: "2018-02-04T04:08:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730278,
          code: "ENTMQMAAS-342.2",
        name: "[#754] : Deploying keycloak in an HA configuration.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-04T04:08:37.000Z",
          endTime: "2018-02-06T08:51:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730277,
          code: "ENTMQMAAS-341.2",
        name: "[#753] : Tie user identity creating address spaces and addresses to billing (i.e. reliable record of addresses spaces used against some identity for the customer).2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-06T08:51:13.000Z",
          endTime: "2018-02-08T13:33:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730282,
          code: "ENTMQMAAS-346.2",
        name: "[#758] : Keycloak plugin OAUTH2 support.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-08T13:33:49.000Z",
          endTime: "2018-02-10T18:16:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730249,
          code: "ENTMQMAAS-366.1",
        name: "[#778] : Integrate PUMBA into our testing environment? (task already exists for that, from Ulf) .1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-10T18:16:25.000Z",
          endTime: "2018-02-12T22:59:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722077,
          code: "ENTMQMAAS-302.12",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.12",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-367.5"],
          startTime: "2018-02-12T19:12:01.000Z",
          endTime: "2018-02-12T20:02:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722074,
          code: "ENTMQMAAS-300.12",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.12",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.12"],
          startTime: "2018-02-12T20:02:25.000Z",
          endTime: "2018-02-12T20:52:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730743,
          code: "ENTMQMAAS-360.6",
        name: "[#772] : WebConsole Tests for addresses status.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.12"],
          startTime: "2018-02-12T20:52:49.000Z",
          endTime: "2018-02-12T21:43:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730748,
          code: "ENTMQMAAS-365.6",
        name: "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-360.6"],
          startTime: "2018-02-12T21:43:13.000Z",
          endTime: "2018-02-12T22:33:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730767,
          code: "ENTMQMAAS-367.6",
        name: "Setup Jenkins job with productized images.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-365.6"],
          startTime: "2018-02-12T22:33:37.000Z",
          endTime: "2018-02-12T23:24:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730374,
          code: "ENTMQMAAS-338.3",
        name: "[#750] : Handle scaledown of queues and topics at deploy time.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-356.3","ENTMQMAAS-366.1"],
          startTime: "2018-02-12T22:59:01.000Z",
          endTime: "2018-02-13T05:26:32.727Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730380,
          code: "ENTMQMAAS-344.3",
        name: "[#756] : Monitoring for operator(us): prometheus for alerting and metrics, log aggregation/search for logs.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-367.6","ENTMQMAAS-338.3"],
          startTime: "2018-02-13T05:26:33.727Z",
          endTime: "2018-02-13T11:54:05.454Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730375,
          code: "ENTMQMAAS-339.3",
        name: "[#751] : Use valid wildcart cert.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-344.3"],
          startTime: "2018-02-13T11:54:06.454Z",
          endTime: "2018-02-13T18:21:38.181Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730388,
          code: "ENTMQMAAS-352.3",
        name: "[#764] : Some level of metrics on address controller / standard controller to show prometheus metrics.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-339.3"],
          startTime: "2018-02-13T18:21:39.181Z",
          endTime: "2018-02-14T00:49:10.908Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730389,
          code: "ENTMQMAAS-353.3",
        name: "[#765] : Changes to service broker (service type is just address space, different plans are supported. See also point above about how to tie plans offered to plans specified) .3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.7","ENTMQMAAS-352.3"],
          startTime: "2018-02-14T00:49:11.909Z",
          endTime: "2018-02-14T07:16:43.636Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730379,
          code: "ENTMQMAAS-343.3",
        name: "[#755] : Productize: router, queue-scheduler, standard-controller, alter keycloak to be init-container image.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.13","ENTMQMAAS-353.3"],
          startTime: "2018-02-14T07:16:44.636Z",
          endTime: "2018-02-14T13:44:16.363Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730378,
          code: "ENTMQMAAS-342.3",
        name: "[#754] : Deploying keycloak in an HA configuration.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-343.3"],
          startTime: "2018-02-14T13:44:17.363Z",
          endTime: "2018-02-14T20:11:49.090Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730377,
          code: "ENTMQMAAS-341.3",
        name: "[#753] : Tie user identity creating address spaces and addresses to billing (i.e. reliable record of addresses spaces used against some identity for the customer).3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-342.3"],
          startTime: "2018-02-14T20:11:50.090Z",
          endTime: "2018-02-15T02:39:21.817Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730382,
          code: "ENTMQMAAS-346.3",
        name: "[#758] : Keycloak plugin OAUTH2 support.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-341.3"],
          startTime: "2018-02-15T02:39:22.818Z",
          endTime: "2018-02-15T09:06:54.545Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730349,
          code: "ENTMQMAAS-366.2",
        name: "[#778] : Integrate PUMBA into our testing environment? (task already exists for that, from Ulf) .2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-323.5","ENTMQMAAS-346.3"],
          startTime: "2018-02-15T09:06:55.545Z",
          endTime: "2018-02-15T15:34:27.272Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12734054,
          code: "ENTMQMAAS-383.1",
        name: "[#811] : Brokered: cannot create topic: user null does not have permissions to 'send'....1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.13","ENTMQMAAS-366.2"],
          startTime: "2018-02-15T15:34:28.272Z",
          endTime: "2018-02-15T22:01:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691434,
          code: "ENTMQMAAS-51.8",
        name: "Create product build artifacts.8",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.7"],
          startTime: "2018-02-12T22:49:01.000Z",
          endTime: "2018-02-13T11:50:38.181Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691436,
          code: "ENTMQMAAS-53.8",
        name: "Setup CI for product repositories.8",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.8"],
          startTime: "2018-02-13T11:50:39.181Z",
          endTime: "2018-02-14T00:52:16.362Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691435,
          code: "ENTMQMAAS-52.8",
        name: "Create copy of upstream repositories.8",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.8"],
          startTime: "2018-02-14T00:52:17.363Z",
          endTime: "2018-02-14T13:53:54.544Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726085,
          code: "ENTMQMAAS-323.5",
        name: "Creating and deleting addresses.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-14T13:53:55.545Z",
          endTime: "2018-02-15T02:55:32.726Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730470,
          code: "ENTMQMAAS-334.4",
        name: "[#746] : Add support for checking requests against limits and setting status on address.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-15T02:55:33.727Z",
          endTime: "2018-02-15T15:57:10.908Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730471,
          code: "ENTMQMAAS-335.4",
        name: "[#747] : Add support for colocated topics.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-334.4"],
          startTime: "2018-02-15T15:57:11.909Z",
          endTime: "2018-02-16T04:58:49.090Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730472,
          code: "ENTMQMAAS-336.4",
        name: "[#748] : Persist decision about where queues/topics are placed.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-328.3","ENTMQMAAS-383.1","ENTMQMAAS-335.4"],
          startTime: "2018-02-16T04:58:50.090Z",
          endTime: "2018-02-16T18:00:27.271Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730476,
          code: "ENTMQMAAS-340.4",
        name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.5","ENTMQMAAS-350.1","ENTMQMAAS-336.4"],
          startTime: "2018-02-16T18:00:28.272Z",
          endTime: "2018-02-17T07:02:05.453Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730483,
          code: "ENTMQMAAS-347.4",
        name: "[#759] : Delegate from keycloak to OpenShift Pro.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-360.7","ENTMQMAAS-340.4"],
          startTime: "2018-02-17T07:02:06.454Z",
          endTime: "2018-02-17T20:03:43.635Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730492,
          code: "ENTMQMAAS-356.4",
        name: "[#768] : Disable MQTT (configurable upstream?).4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-338.4","ENTMQMAAS-347.4"],
          startTime: "2018-02-17T20:03:44.636Z",
          endTime: "2018-02-18T09:05:21.817Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12734052,
          code: "ENTMQMAAS-382.1",
        name: "Investigate options for enforcing backlog limits on broker/router.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-365.7","ENTMQMAAS-356.4"],
          startTime: "2018-02-18T09:05:22.818Z",
          endTime: "2018-02-18T22:06:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691534,
          code: "ENTMQMAAS-51.9",
        name: "Create product build artifacts.9",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.8"],
          startTime: "2018-02-18T22:07:01.000Z",
          endTime: "2018-02-19T00:35:05.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691536,
          code: "ENTMQMAAS-53.9",
        name: "Setup CI for product repositories.9",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.9"],
          startTime: "2018-02-19T00:35:06.000Z",
          endTime: "2018-02-19T03:03:10.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691535,
          code: "ENTMQMAAS-52.9",
        name: "Create copy of upstream repositories.9",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.9"],
          startTime: "2018-02-19T03:03:11.000Z",
          endTime: "2018-02-19T05:31:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726185,
          code: "ENTMQMAAS-323.6",
        name: "Creating and deleting addresses.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-358.3","ENTMQMAAS-382.1"],
          startTime: "2018-02-19T05:31:16.000Z",
          endTime: "2018-02-19T07:59:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730570,
          code: "ENTMQMAAS-334.5",
        name: "[#746] : Add support for checking requests against limits and setting status on address.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-323.6"],
          startTime: "2018-02-19T07:59:21.000Z",
          endTime: "2018-02-19T10:27:25.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730571,
          code: "ENTMQMAAS-335.5",
        name: "[#747] : Add support for colocated topics.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-344.4","ENTMQMAAS-334.5"],
          startTime: "2018-02-19T10:27:26.000Z",
          endTime: "2018-02-19T12:55:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730572,
          code: "ENTMQMAAS-336.5",
        name: "[#748] : Persist decision about where queues/topics are placed.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-335.5"],
          startTime: "2018-02-19T12:55:31.000Z",
          endTime: "2018-02-19T15:23:35.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730576,
          code: "ENTMQMAAS-340.5",
        name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-367.7","ENTMQMAAS-336.5"],
          startTime: "2018-02-19T15:23:36.000Z",
          endTime: "2018-02-19T17:51:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730583,
          code: "ENTMQMAAS-347.5",
        name: "[#759] : Delegate from keycloak to OpenShift Pro.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-340.5"],
          startTime: "2018-02-19T17:51:41.000Z",
          endTime: "2018-02-19T20:19:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730592,
          code: "ENTMQMAAS-356.5",
        name: "[#768] : Disable MQTT (configurable upstream?).5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-347.5"],
          startTime: "2018-02-19T20:19:46.000Z",
          endTime: "2018-02-19T22:47:50.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12734152,
          code: "ENTMQMAAS-382.2",
        name: "Investigate options for enforcing backlog limits on broker/router.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-356.5"],
          startTime: "2018-02-19T22:47:51.000Z",
          endTime: "2018-02-20T01:15:55.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12735056,
          code: "ENTMQMAAS-385.1",
        name: "[#894] : Console does not sanitize address config names.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-382.2"],
          startTime: "2018-02-20T01:15:56.000Z",
          endTime: "2018-02-20T03:44:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722177,
          code: "ENTMQMAAS-302.13",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.13",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-12T23:24:01.000Z",
          endTime: "2018-02-14T07:02:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722174,
          code: "ENTMQMAAS-300.13",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.13",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-14T07:02:41.000Z",
          endTime: "2018-02-15T14:41:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730843,
          code: "ENTMQMAAS-360.7",
        name: "[#772] : WebConsole Tests for addresses status.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-15T14:41:21.000Z",
          endTime: "2018-02-16T22:20:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730848,
          code: "ENTMQMAAS-365.7",
        name: "[#777] : Rewrite Jenkinsfile-long to declarative pipeline syntax.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-16T22:20:01.000Z",
          endTime: "2018-02-18T05:58:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730867,
          code: "ENTMQMAAS-367.7",
        name: "Setup Jenkins job with productized images.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-18T05:58:41.000Z",
          endTime: "2018-02-19T13:37:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12734064,
          code: "ENTMQMAAS-384.1",
        name: "[#877] : Make ansible deployment for install dependencies for running systemtests.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-19T13:37:21.000Z",
          endTime: "2018-02-20T21:16:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722314,
          code: "ENTMQMAAS-309.8",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-06T21:36:01.000Z",
          endTime: "2018-02-09T05:38:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722334,
          code: "ENTMQMAAS-310.8",
        name: "[#548] : System-tests: framework(clients tests): add comments what value can be set for each parameter.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-09T05:38:41.000Z",
          endTime: "2018-02-11T13:41:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723574,
          code: "ENTMQMAAS-314.7",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-11T13:41:21.000Z",
          endTime: "2018-02-13T21:44:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723788,
          code: "ENTMQMAAS-316.5",
        name: "[#604] : Address-controller: PUT method is not implemented.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-13T21:44:01.000Z",
          endTime: "2018-02-16T05:46:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730441,
          code: "ENTMQMAAS-358.3",
        name: "[#770] : Define tests for limitation of address-spaces (by credits).3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-16T05:46:41.000Z",
          endTime: "2018-02-18T13:49:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12732796,
          code: "ENTMQMAAS-374.2",
        name: "[#843] : improve test framework regarding to definition of dynamically created plans.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-18T13:49:21.000Z",
          endTime: "2018-02-20T21:52:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691634,
          code: "ENTMQMAAS-51.10",
        name: "Create product build artifacts.10",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.9"],
          startTime: "2018-02-20T03:44:01.000Z",
          endTime: "2018-02-20T05:08:23.076Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691636,
          code: "ENTMQMAAS-53.10",
        name: "Setup CI for product repositories.10",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.10"],
          startTime: "2018-02-20T05:08:24.076Z",
          endTime: "2018-02-20T06:32:46.152Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691635,
          code: "ENTMQMAAS-52.10",
        name: "Create copy of upstream repositories.10",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.10"],
          startTime: "2018-02-20T06:32:47.153Z",
          endTime: "2018-02-20T07:57:09.229Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726285,
          code: "ENTMQMAAS-323.7",
        name: "Creating and deleting addresses.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-385.1"],
          startTime: "2018-02-20T07:57:10.230Z",
          endTime: "2018-02-20T09:21:32.306Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730670,
          code: "ENTMQMAAS-334.6",
        name: "[#746] : Add support for checking requests against limits and setting status on address.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-323.7"],
          startTime: "2018-02-20T09:21:33.307Z",
          endTime: "2018-02-20T10:45:55.383Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730671,
          code: "ENTMQMAAS-335.6",
        name: "[#747] : Add support for colocated topics.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-334.6"],
          startTime: "2018-02-20T10:45:56.384Z",
          endTime: "2018-02-20T12:10:18.460Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730672,
          code: "ENTMQMAAS-336.6",
        name: "[#748] : Persist decision about where queues/topics are placed.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-335.6"],
          startTime: "2018-02-20T12:10:19.461Z",
          endTime: "2018-02-20T13:34:41.537Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730676,
          code: "ENTMQMAAS-340.6",
        name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-336.6"],
          startTime: "2018-02-20T13:34:42.538Z",
          endTime: "2018-02-20T14:59:04.614Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730683,
          code: "ENTMQMAAS-347.6",
        name: "[#759] : Delegate from keycloak to OpenShift Pro.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-340.6"],
          startTime: "2018-02-20T14:59:05.615Z",
          endTime: "2018-02-20T16:23:27.691Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730692,
          code: "ENTMQMAAS-356.6",
        name: "[#768] : Disable MQTT (configurable upstream?).6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-347.6"],
          startTime: "2018-02-20T16:23:28.692Z",
          endTime: "2018-02-20T17:47:50.768Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12734252,
          code: "ENTMQMAAS-382.3",
        name: "Investigate options for enforcing backlog limits on broker/router.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-356.6"],
          startTime: "2018-02-20T17:47:51.769Z",
          endTime: "2018-02-20T19:12:13.845Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12735156,
          code: "ENTMQMAAS-385.2",
        name: "[#894] : Console does not sanitize address config names.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-382.3"],
          startTime: "2018-02-20T19:12:14.846Z",
          endTime: "2018-02-20T20:36:36.922Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12735471,
          code: "ENTMQMAAS-386.1",
        name: "[#910] : address-controller can't replace addresses created via console.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-20T20:36:37.923Z",
          endTime: "2018-02-20T22:00:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722277,
          code: "ENTMQMAAS-302.14",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.14",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-385.2","ENTMQMAAS-384.1"],
          startTime: "2018-02-20T21:24:01.000Z",
          endTime: "2018-02-20T21:59:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722274,
          code: "ENTMQMAAS-300.14",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.14",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-374.2","ENTMQMAAS-302.14"],
          startTime: "2018-02-20T21:59:01.000Z",
          endTime: "2018-02-20T22:34:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730943,
          code: "ENTMQMAAS-360.8",
        name: "[#772] : WebConsole Tests for addresses status.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-386.1","ENTMQMAAS-300.14"],
          startTime: "2018-02-20T22:34:01.000Z",
          endTime: "2018-02-20T23:09:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730967,
          code: "ENTMQMAAS-367.8",
        name: "Setup Jenkins job with productized images.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-360.8"],
          startTime: "2018-02-20T23:09:01.000Z",
          endTime: "2018-02-20T23:44:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12663544,
          code: "ENTMQMAAS-4.7",
        name: "remove colocated routers.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-49.5"],
          startTime: "2018-01-21T21:40:01.000Z",
          endTime: "2018-01-26T04:52:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680579,
          code: "ENTMQMAAS-49.6",
        name: "providing way to monitor connection and link metrics.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-4.7"],
          startTime: "2018-01-26T04:52:18.142Z",
          endTime: "2018-01-30T12:04:34.284Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12690568,
          code: "ENTMQMAAS-50.5",
        name: "Release Messaging Images.5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2018-01-30T12:04:35.285Z",
          endTime: "2018-02-03T19:16:51.427Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730191,
          code: "ENTMQMAAS-355.1",
        name: "[#767] : Disable durable subs (configurable upstream?).1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-03T19:16:52.428Z",
          endTime: "2018-02-08T02:29:08.570Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730185,
          code: "ENTMQMAAS-349.1",
        name: "[#761] : Console to support status for addresses.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-08T02:29:09.571Z",
          endTime: "2018-02-12T09:41:25.713Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730186,
          code: "ENTMQMAAS-350.1",
        name: "[#762] : How to match plans offered to plans specified (e.g. have console offer plans based on the presence of configmaps in its namespace or variations of that).1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-12T09:41:26.714Z",
          endTime: "2018-02-16T16:53:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730181,
          code: "ENTMQMAAS-345.1",
        name: "[#757] : Oauth for console.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-16T16:53:43.857Z",
          endTime: "2018-02-21T00:05:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12663644,
          code: "ENTMQMAAS-4.8",
        name: "remove colocated routers.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-49.6"],
          startTime: "2018-02-21T00:06:01.000Z",
          endTime: "2018-02-21T04:48:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680679,
          code: "ENTMQMAAS-49.7",
        name: "providing way to monitor connection and link metrics.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-4.8"],
          startTime: "2018-02-21T04:48:41.000Z",
          endTime: "2018-02-21T09:31:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12690668,
          code: "ENTMQMAAS-50.6",
        name: "Release Messaging Images.6",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.11"],
          startTime: "2018-02-21T09:31:21.000Z",
          endTime: "2018-02-21T14:14:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730291,
          code: "ENTMQMAAS-355.2",
        name: "[#767] : Disable durable subs (configurable upstream?).2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-367.8","ENTMQMAAS-345.1","ENTMQMAAS-339.4"],
          startTime: "2018-02-21T14:14:01.000Z",
          endTime: "2018-02-21T18:56:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730285,
          code: "ENTMQMAAS-349.2",
        name: "[#761] : Console to support status for addresses.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-355.2"],
          startTime: "2018-02-21T18:56:41.000Z",
          endTime: "2018-02-21T23:39:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730281,
          code: "ENTMQMAAS-345.2",
        name: "[#757] : Oauth for console.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.15","ENTMQMAAS-309.9","ENTMQMAAS-349.2"],
          startTime: "2018-02-21T23:39:21.000Z",
          endTime: "2018-02-22T04:22:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722414,
          code: "ENTMQMAAS-309.9",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-21T01:40:01.000Z",
          endTime: "2018-02-21T20:34:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722434,
          code: "ENTMQMAAS-310.9",
        name: "[#548] : System-tests: framework(clients tests): add comments what value can be set for each parameter.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-21T20:34:41.000Z",
          endTime: "2018-02-22T15:29:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723674,
          code: "ENTMQMAAS-314.8",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-310.9"],
          startTime: "2018-02-22T15:29:21.000Z",
          endTime: "2018-02-23T10:24:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723888,
          code: "ENTMQMAAS-316.6",
        name: "[#604] : Address-controller: PUT method is not implemented.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-23T10:24:01.000Z",
          endTime: "2018-02-24T05:18:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12735622,
          code: "ENTMQMAAS-387.1",
        name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-24T05:18:41.000Z",
          endTime: "2018-02-25T00:13:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12735631,
          code: "ENTMQMAAS-390.1",
        name: "[#921] : system-tests: new Plan test: testPlansAvailableViaConsole.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-25T00:13:21.000Z",
          endTime: "2018-02-25T19:08:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722377,
          code: "ENTMQMAAS-302.15",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.15",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-20T23:50:01.000Z",
          endTime: "2018-02-21T19:42:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722374,
          code: "ENTMQMAAS-300.15",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.15",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-21T19:42:41.000Z",
          endTime: "2018-02-22T15:35:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731043,
          code: "ENTMQMAAS-360.9",
        name: "[#772] : WebConsole Tests for addresses status.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-22T15:35:21.000Z",
          endTime: "2018-02-23T11:28:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731067,
          code: "ENTMQMAAS-367.9",
        name: "Setup Jenkins job with productized images.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-23T11:28:01.000Z",
          endTime: "2018-02-24T07:20:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12735627,
          code: "ENTMQMAAS-388.1",
        name: "[#919] : system-tests: new scale test: testPodsLimitation.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-24T07:20:41.000Z",
          endTime: "2018-02-25T03:13:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12735630,
          code: "ENTMQMAAS-389.1",
        name: "[#920] : system-tests: new scale test: testCreditLimitation.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-388.1"],
          startTime: "2018-02-25T03:13:21.000Z",
          endTime: "2018-02-25T23:06:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691734,
          code: "ENTMQMAAS-51.11",
        name: "Create product build artifacts.11",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.10"],
          startTime: "2018-02-20T22:01:01.000Z",
          endTime: "2018-02-21T08:06:35.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691736,
          code: "ENTMQMAAS-53.11",
        name: "Setup CI for product repositories.11",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2018-02-21T08:06:36.000Z",
          endTime: "2018-02-21T18:12:10.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691735,
          code: "ENTMQMAAS-52.11",
        name: "Create copy of upstream repositories.11",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-50.6","ENTMQMAAS-53.11"],
          startTime: "2018-02-21T18:12:11.000Z",
          endTime: "2018-02-22T04:17:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726385,
          code: "ENTMQMAAS-323.8",
        name: "Creating and deleting addresses.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-22T04:17:46.000Z",
          endTime: "2018-02-22T14:23:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730770,
          code: "ENTMQMAAS-334.7",
        name: "[#746] : Add support for checking requests against limits and setting status on address.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-345.2","ENTMQMAAS-323.8"],
          startTime: "2018-02-22T14:23:21.000Z",
          endTime: "2018-02-23T00:28:55.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730772,
          code: "ENTMQMAAS-336.7",
        name: "[#748] : Persist decision about where queues/topics are placed.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.15","ENTMQMAAS-352.4","ENTMQMAAS-334.7"],
          startTime: "2018-02-23T00:28:56.000Z",
          endTime: "2018-02-23T10:34:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730776,
          code: "ENTMQMAAS-340.7",
        name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.8","ENTMQMAAS-336.7"],
          startTime: "2018-02-23T10:34:31.000Z",
          endTime: "2018-02-23T20:40:05.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730783,
          code: "ENTMQMAAS-347.7",
        name: "[#759] : Delegate from keycloak to OpenShift Pro.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-360.9","ENTMQMAAS-340.7"],
          startTime: "2018-02-23T20:40:06.000Z",
          endTime: "2018-02-24T06:45:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730792,
          code: "ENTMQMAAS-356.7",
        name: "[#768] : Disable MQTT (configurable upstream?).7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.6","ENTMQMAAS-347.7"],
          startTime: "2018-02-24T06:45:41.000Z",
          endTime: "2018-02-24T16:51:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12734352,
          code: "ENTMQMAAS-382.4",
        name: "Investigate options for enforcing backlog limits on broker/router.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-367.9","ENTMQMAAS-372.2","ENTMQMAAS-353.4","ENTMQMAAS-356.7"],
          startTime: "2018-02-24T16:51:16.000Z",
          endTime: "2018-02-25T02:56:50.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12735256,
          code: "ENTMQMAAS-385.3",
        name: "[#894] : Console does not sanitize address config names.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-387.1","ENTMQMAAS-382.4"],
          startTime: "2018-02-25T02:56:51.000Z",
          endTime: "2018-02-25T13:02:25.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12735571,
          code: "ENTMQMAAS-386.2",
        name: "[#910] : address-controller can't replace addresses created via console.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-385.3"],
          startTime: "2018-02-25T13:02:26.000Z",
          endTime: "2018-02-25T23:08:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691834,
          code: "ENTMQMAAS-51.12",
        name: "Create product build artifacts.12",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.11"],
          startTime: "2018-02-25T23:09:01.000Z",
          endTime: "2018-02-26T01:47:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691836,
          code: "ENTMQMAAS-53.12",
        name: "Setup CI for product repositories.12",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.12"],
          startTime: "2018-02-26T01:47:13.000Z",
          endTime: "2018-02-26T04:25:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691835,
          code: "ENTMQMAAS-52.12",
        name: "Create copy of upstream repositories.12",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.12"],
          startTime: "2018-02-26T04:25:25.000Z",
          endTime: "2018-02-26T07:03:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726485,
          code: "ENTMQMAAS-323.9",
        name: "Creating and deleting addresses.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-390.1","ENTMQMAAS-389.1","ENTMQMAAS-386.2","ENTMQMAAS-343.4"],
          startTime: "2018-02-26T07:03:37.000Z",
          endTime: "2018-02-26T09:41:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730870,
          code: "ENTMQMAAS-334.8",
        name: "[#746] : Add support for checking requests against limits and setting status on address.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-323.9"],
          startTime: "2018-02-26T09:41:49.000Z",
          endTime: "2018-02-26T12:20:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730872,
          code: "ENTMQMAAS-336.8",
        name: "[#748] : Persist decision about where queues/topics are placed.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.10","ENTMQMAAS-334.8"],
          startTime: "2018-02-26T12:20:01.000Z",
          endTime: "2018-02-26T14:58:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730876,
          code: "ENTMQMAAS-340.8",
        name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-336.8"],
          startTime: "2018-02-26T14:58:13.000Z",
          endTime: "2018-02-26T17:36:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730883,
          code: "ENTMQMAAS-347.8",
        name: "[#759] : Delegate from keycloak to OpenShift Pro.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-340.8"],
          startTime: "2018-02-26T17:36:25.000Z",
          endTime: "2018-02-26T20:14:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730892,
          code: "ENTMQMAAS-356.8",
        name: "[#768] : Disable MQTT (configurable upstream?).8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-347.8"],
          startTime: "2018-02-26T20:14:37.000Z",
          endTime: "2018-02-26T22:52:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12734452,
          code: "ENTMQMAAS-382.5",
        name: "Investigate options for enforcing backlog limits on broker/router.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-356.8"],
          startTime: "2018-02-26T22:52:49.000Z",
          endTime: "2018-02-27T01:31:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722514,
          code: "ENTMQMAAS-309.10",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.10",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-25T19:08:01.000Z",
          endTime: "2018-02-26T09:42:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722534,
          code: "ENTMQMAAS-310.10",
        name: "[#548] : System-tests: framework(clients tests): add comments what value can be set for each parameter.10",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-26T09:42:35.285Z",
          endTime: "2018-02-27T00:17:08.570Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723774,
          code: "ENTMQMAAS-314.9",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-310.10"],
          startTime: "2018-02-27T00:17:09.571Z",
          endTime: "2018-02-27T14:51:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723988,
          code: "ENTMQMAAS-316.7",
        name: "[#604] : Address-controller: PUT method is not implemented.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-382.5","ENTMQMAAS-302.16","ENTMQMAAS-314.9"],
          startTime: "2018-02-27T14:51:43.857Z",
          endTime: "2018-02-28T05:26:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12735722,
          code: "ENTMQMAAS-387.2",
        name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-342.4","ENTMQMAAS-316.7"],
          startTime: "2018-02-28T05:26:18.142Z",
          endTime: "2018-02-28T20:00:51.427Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12735731,
          code: "ENTMQMAAS-390.2",
        name: "[#921] : system-tests: new Plan test: testPlansAvailableViaConsole.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.16","ENTMQMAAS-387.2"],
          startTime: "2018-02-28T20:00:52.428Z",
          endTime: "2018-03-01T10:35:25.713Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12736271,
          code: "ENTMQMAAS-391.1",
        name: "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-390.2"],
          startTime: "2018-03-01T10:35:26.714Z",
          endTime: "2018-03-02T01:09:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722614,
          code: "ENTMQMAAS-309.11",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.11",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-391.1"],
          startTime: "2018-03-02T01:10:01.000Z",
          endTime: "2018-03-02T12:04:50.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723874,
          code: "ENTMQMAAS-314.10",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.10",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.11"],
          startTime: "2018-03-02T12:04:51.000Z",
          endTime: "2018-03-02T22:59:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724088,
          code: "ENTMQMAAS-316.8",
        name: "[#604] : Address-controller: PUT method is not implemented.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-355.3","ENTMQMAAS-336.9","ENTMQMAAS-314.10"],
          startTime: "2018-03-02T22:59:41.000Z",
          endTime: "2018-03-03T09:54:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12735822,
          code: "ENTMQMAAS-387.3",
        name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-346.4","ENTMQMAAS-316.8"],
          startTime: "2018-03-03T09:54:31.000Z",
          endTime: "2018-03-03T20:49:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12735831,
          code: "ENTMQMAAS-390.3",
        name: "[#921] : system-tests: new Plan test: testPlansAvailableViaConsole.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-387.3"],
          startTime: "2018-03-03T20:49:21.000Z",
          endTime: "2018-03-04T07:44:10.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12736371,
          code: "ENTMQMAAS-391.2",
        name: "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-347.9","ENTMQMAAS-390.3"],
          startTime: "2018-03-04T07:44:11.000Z",
          endTime: "2018-03-04T18:39:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722477,
          code: "ENTMQMAAS-302.16",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.16",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-25T23:06:01.000Z",
          endTime: "2018-02-27T08:14:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722474,
          code: "ENTMQMAAS-300.16",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.16",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-27T08:14:13.000Z",
          endTime: "2018-02-28T17:22:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731167,
          code: "ENTMQMAAS-367.10",
        name: "Setup Jenkins job with productized images.10",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-28T17:22:25.000Z",
          endTime: "2018-03-02T02:30:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12735727,
          code: "ENTMQMAAS-388.2",
        name: "[#919] : system-tests: new scale test: testPodsLimitation.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-02T02:30:37.000Z",
          endTime: "2018-03-03T11:38:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12735730,
          code: "ENTMQMAAS-389.2",
        name: "[#920] : system-tests: new scale test: testCreditLimitation.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-03T11:38:49.000Z",
          endTime: "2018-03-04T20:47:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691934,
          code: "ENTMQMAAS-51.13",
        name: "Create product build artifacts.13",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.12"],
          startTime: "2018-02-27T01:31:01.000Z",
          endTime: "2018-02-27T16:59:33.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691936,
          code: "ENTMQMAAS-53.13",
        name: "Setup CI for product repositories.13",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.13"],
          startTime: "2018-02-27T16:59:34.333Z",
          endTime: "2018-02-28T08:28:06.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691935,
          code: "ENTMQMAAS-52.13",
        name: "Create copy of upstream repositories.13",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.13"],
          startTime: "2018-02-28T08:28:07.666Z",
          endTime: "2018-02-28T23:56:39.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726585,
          code: "ENTMQMAAS-323.10",
        name: "Creating and deleting addresses.10",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-28T23:56:41.000Z",
          endTime: "2018-03-01T15:25:13.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730970,
          code: "ENTMQMAAS-334.9",
        name: "[#746] : Add support for checking requests against limits and setting status on address.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-341.4","ENTMQMAAS-323.10"],
          startTime: "2018-03-01T15:25:14.333Z",
          endTime: "2018-03-02T06:53:46.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730972,
          code: "ENTMQMAAS-336.9",
        name: "[#748] : Persist decision about where queues/topics are placed.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-367.10","ENTMQMAAS-334.9"],
          startTime: "2018-03-02T06:53:47.666Z",
          endTime: "2018-03-02T22:22:19.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730976,
          code: "ENTMQMAAS-340.9",
        name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-02T22:22:21.000Z",
          endTime: "2018-03-03T13:50:53.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730983,
          code: "ENTMQMAAS-347.9",
        name: "[#759] : Delegate from keycloak to OpenShift Pro.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-388.2","ENTMQMAAS-340.9"],
          startTime: "2018-03-03T13:50:54.333Z",
          endTime: "2018-03-04T05:19:26.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12734552,
          code: "ENTMQMAAS-382.6",
        name: "Investigate options for enforcing backlog limits on broker/router.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-04T05:19:27.666Z",
          endTime: "2018-03-04T20:47:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692034,
          code: "ENTMQMAAS-51.14",
        name: "Create product build artifacts.14",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-50.7","ENTMQMAAS-52.13"],
          startTime: "2018-03-04T20:50:01.000Z",
          endTime: "2018-03-04T21:10:08.571Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692036,
          code: "ENTMQMAAS-53.14",
        name: "Setup CI for product repositories.14",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.14"],
          startTime: "2018-03-04T21:10:09.571Z",
          endTime: "2018-03-04T21:30:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692035,
          code: "ENTMQMAAS-52.14",
        name: "Create copy of upstream repositories.14",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.14"],
          startTime: "2018-03-04T21:30:18.142Z",
          endTime: "2018-03-04T21:50:25.713Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726685,
          code: "ENTMQMAAS-323.11",
        name: "Creating and deleting addresses.11",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.9"],
          startTime: "2018-03-04T21:50:26.714Z",
          endTime: "2018-03-04T22:10:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731076,
          code: "ENTMQMAAS-340.10",
        name: "[#752] : Need to be able to configure address-controller to use wildcard cert for route certs.10",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-323.11"],
          startTime: "2018-03-04T22:10:35.285Z",
          endTime: "2018-03-04T22:30:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731083,
          code: "ENTMQMAAS-347.10",
        name: "[#759] : Delegate from keycloak to OpenShift Pro.10",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-340.10"],
          startTime: "2018-03-04T22:30:43.857Z",
          endTime: "2018-03-04T22:50:51.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12734652,
          code: "ENTMQMAAS-382.7",
        name: "Investigate options for enforcing backlog limits on broker/router.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-387.4","ENTMQMAAS-388.3","ENTMQMAAS-347.10"],
          startTime: "2018-03-04T22:50:52.428Z",
          endTime: "2018-03-04T23:10:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722577,
          code: "ENTMQMAAS-302.17",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.17",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.11","ENTMQMAAS-389.2","ENTMQMAAS-382.6"],
          startTime: "2018-03-04T20:56:01.000Z",
          endTime: "2018-03-04T21:24:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722574,
          code: "ENTMQMAAS-300.17",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.17",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.17"],
          startTime: "2018-03-04T21:24:25.000Z",
          endTime: "2018-03-04T21:52:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731267,
          code: "ENTMQMAAS-367.11",
        name: "Setup Jenkins job with productized images.11",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.17"],
          startTime: "2018-03-04T21:52:49.000Z",
          endTime: "2018-03-04T22:21:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12735827,
          code: "ENTMQMAAS-388.3",
        name: "[#919] : system-tests: new scale test: testPodsLimitation.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-367.11"],
          startTime: "2018-03-04T22:21:13.000Z",
          endTime: "2018-03-04T22:49:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737462,
          code: "ENTMQMAAS-393.1",
        name: "[#991] : system-tests: new scale test: testCreditLimitation ({sharded,pooled}{queues,topics}).1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-04T22:49:37.000Z",
          endTime: "2018-03-04T23:18:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722714,
          code: "ENTMQMAAS-309.12",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.12",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-391.2"],
          startTime: "2018-03-04T18:39:01.000Z",
          endTime: "2018-03-04T19:37:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723974,
          code: "ENTMQMAAS-314.11",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.11",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.12"],
          startTime: "2018-03-04T19:37:01.000Z",
          endTime: "2018-03-04T20:35:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724188,
          code: "ENTMQMAAS-316.9",
        name: "[#604] : Address-controller: PUT method is not implemented.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-04T20:35:01.000Z",
          endTime: "2018-03-04T21:33:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12735922,
          code: "ENTMQMAAS-387.4",
        name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-04T21:33:01.000Z",
          endTime: "2018-03-04T22:31:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12736471,
          code: "ENTMQMAAS-391.3",
        name: "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-04T22:31:01.000Z",
          endTime: "2018-03-04T23:29:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730474,
          code: "ENTMQMAAS-338.4",
        name: "[#750] : Handle scaledown of queues and topics at deploy time.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-15T22:02:01.000Z",
          endTime: "2018-02-17T15:10:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730480,
          code: "ENTMQMAAS-344.4",
        name: "[#756] : Monitoring for operator(us): prometheus for alerting and metrics, log aggregation/search for logs.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-17T15:10:31.000Z",
          endTime: "2018-02-19T08:19:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730475,
          code: "ENTMQMAAS-339.4",
        name: "[#751] : Use valid wildcart cert.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-19T08:19:01.000Z",
          endTime: "2018-02-21T01:27:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730488,
          code: "ENTMQMAAS-352.4",
        name: "[#764] : Some level of metrics on address controller / standard controller to show prometheus metrics.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-21T01:27:31.000Z",
          endTime: "2018-02-22T18:36:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730489,
          code: "ENTMQMAAS-353.4",
        name: "[#765] : Changes to service broker (service type is just address space, different plans are supported. See also point above about how to tie plans offered to plans specified) .4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-22T18:36:01.000Z",
          endTime: "2018-02-24T11:44:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730479,
          code: "ENTMQMAAS-343.4",
        name: "[#755] : Productize: router, queue-scheduler, standard-controller, alter keycloak to be init-container image.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-24T11:44:31.000Z",
          endTime: "2018-02-26T04:53:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730478,
          code: "ENTMQMAAS-342.4",
        name: "[#754] : Deploying keycloak in an HA configuration.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-26T04:53:01.000Z",
          endTime: "2018-02-27T22:01:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730477,
          code: "ENTMQMAAS-341.4",
        name: "[#753] : Tie user identity creating address spaces and addresses to billing (i.e. reliable record of addresses spaces used against some identity for the customer).4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-27T22:01:31.000Z",
          endTime: "2018-03-01T15:10:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730482,
          code: "ENTMQMAAS-346.4",
        name: "[#758] : Keycloak plugin OAUTH2 support.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-01T15:10:01.000Z",
          endTime: "2018-03-03T08:18:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730449,
          code: "ENTMQMAAS-366.3",
        name: "[#778] : Integrate PUMBA into our testing environment? (task already exists for that, from Ulf) .3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-03T08:18:31.000Z",
          endTime: "2018-03-05T01:27:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12663744,
          code: "ENTMQMAAS-4.9",
        name: "remove colocated routers.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-49.7"],
          startTime: "2018-02-22T04:22:01.000Z",
          endTime: "2018-02-24T08:35:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680779,
          code: "ENTMQMAAS-49.8",
        name: "providing way to monitor connection and link metrics.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-4.9"],
          startTime: "2018-02-24T08:35:13.000Z",
          endTime: "2018-02-26T12:48:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12690768,
          code: "ENTMQMAAS-50.7",
        name: "Release Messaging Images.7",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2018-02-26T12:48:25.000Z",
          endTime: "2018-02-28T17:01:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730391,
          code: "ENTMQMAAS-355.3",
        name: "[#767] : Disable durable subs (configurable upstream?).3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-28T17:01:37.000Z",
          endTime: "2018-03-02T21:14:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730381,
          code: "ENTMQMAAS-345.3",
        name: "[#757] : Oauth for console.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-02T21:14:49.000Z",
          endTime: "2018-03-05T01:28:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12728141,
          code: "ENTMQMAAS-328.3",
        name: "Document Creating and deleting addresses.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-07T02:38:01.000Z",
          endTime: "2018-02-15T18:18:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731650,
          code: "ENTMQMAAS-372.2",
        name: "Console: Create an Address wizard tooltip placement awkward.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-15T18:18:41.000Z",
          endTime: "2018-02-24T09:59:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12733275,
          code: "ENTMQMAAS-376.1",
        name: "Add Documentation Conventions to Guide.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-02-24T09:59:21.000Z",
          endTime: "2018-03-05T01:40:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692134,
          code: "ENTMQMAAS-51.15",
        name: "Create product build artifacts.15",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.14"],
          startTime: "2018-03-05T01:32:01.000Z",
          endTime: "2018-03-05T04:49:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692136,
          code: "ENTMQMAAS-53.15",
        name: "Setup CI for product repositories.15",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.15"],
          startTime: "2018-03-05T04:49:16.000Z",
          endTime: "2018-03-05T08:06:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692135,
          code: "ENTMQMAAS-52.15",
        name: "Create copy of upstream repositories.15",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.15"],
          startTime: "2018-03-05T08:06:31.000Z",
          endTime: "2018-03-05T11:23:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726785,
          code: "ENTMQMAAS-323.12",
        name: "Creating and deleting addresses.12",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.18"],
          startTime: "2018-03-05T11:23:46.000Z",
          endTime: "2018-03-05T14:41:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731183,
          code: "ENTMQMAAS-347.11",
        name: "[#759] : Delegate from keycloak to OpenShift Pro.11",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.12","ENTMQMAAS-323.12"],
          startTime: "2018-03-05T14:41:01.000Z",
          endTime: "2018-03-05T17:58:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12734752,
          code: "ENTMQMAAS-382.8",
        name: "Investigate options for enforcing backlog limits on broker/router.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-367.12","ENTMQMAAS-347.11"],
          startTime: "2018-03-05T17:58:16.000Z",
          endTime: "2018-03-05T21:15:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737562,
          code: "ENTMQMAAS-401.1",
        name: "[#693] : Status check for pooled queues is true even if address is not created.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-49.8"],
          startTime: "2018-03-05T21:15:31.000Z",
          endTime: "2018-03-06T00:32:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737584,
          code: "ENTMQMAAS-406.1",
        name: "[#972] : Make global-max-size parameter configurable via template/plan.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-401.1"],
          startTime: "2018-03-06T00:32:46.000Z",
          endTime: "2018-03-06T03:50:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692234,
          code: "ENTMQMAAS-51.16",
        name: "Create product build artifacts.16",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.15"],
          startTime: "2018-03-06T03:50:01.000Z",
          endTime: "2018-03-06T05:45:33.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692236,
          code: "ENTMQMAAS-53.16",
        name: "Setup CI for product repositories.16",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.16"],
          startTime: "2018-03-06T05:45:34.333Z",
          endTime: "2018-03-06T07:41:06.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692235,
          code: "ENTMQMAAS-52.16",
        name: "Create copy of upstream repositories.16",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.16"],
          startTime: "2018-03-06T07:41:07.666Z",
          endTime: "2018-03-06T09:36:39.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726885,
          code: "ENTMQMAAS-323.13",
        name: "Creating and deleting addresses.13",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-395.1"],
          startTime: "2018-03-06T09:36:41.000Z",
          endTime: "2018-03-06T11:32:13.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731283,
          code: "ENTMQMAAS-347.12",
        name: "[#759] : Delegate from keycloak to OpenShift Pro.12",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-391.4","ENTMQMAAS-323.13"],
          startTime: "2018-03-06T11:32:14.333Z",
          endTime: "2018-03-06T13:27:46.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12734852,
          code: "ENTMQMAAS-382.9",
        name: "Investigate options for enforcing backlog limits on broker/router.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-328.4","ENTMQMAAS-347.12"],
          startTime: "2018-03-06T13:27:47.666Z",
          endTime: "2018-03-06T15:23:19.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737662,
          code: "ENTMQMAAS-401.2",
        name: "[#693] : Status check for pooled queues is true even if address is not created.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-4.10","ENTMQMAAS-406.1"],
          startTime: "2018-03-06T15:23:21.000Z",
          endTime: "2018-03-06T17:18:53.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737684,
          code: "ENTMQMAAS-406.2",
        name: "[#972] : Make global-max-size parameter configurable via template/plan.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-401.2"],
          startTime: "2018-03-06T17:18:54.333Z",
          endTime: "2018-03-06T19:14:26.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738000,
          code: "ENTMQMAAS-412.1",
        name: "[#1001] : Automatically create authorization groups in keycloak.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-406.2"],
          startTime: "2018-03-06T19:14:27.666Z",
          endTime: "2018-03-06T21:09:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722814,
          code: "ENTMQMAAS-309.13",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.13",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-04T23:49:01.000Z",
          endTime: "2018-03-05T06:48:08.571Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724074,
          code: "ENTMQMAAS-314.12",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.12",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.13"],
          startTime: "2018-03-05T06:48:09.571Z",
          endTime: "2018-03-05T13:47:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724288,
          code: "ENTMQMAAS-316.10",
        name: "[#604] : Address-controller: PUT method is not implemented.10",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-05T13:47:18.142Z",
          endTime: "2018-03-05T20:46:25.713Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12736022,
          code: "ENTMQMAAS-387.5",
        name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-05T20:46:26.714Z",
          endTime: "2018-03-06T03:45:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12736571,
          code: "ENTMQMAAS-391.4",
        name: "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-387.5"],
          startTime: "2018-03-06T03:45:35.285Z",
          endTime: "2018-03-06T10:44:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737513,
          code: "ENTMQMAAS-396.1",
        name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-06T10:44:43.857Z",
          endTime: "2018-03-06T17:43:51.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737529,
          code: "ENTMQMAAS-399.1",
        name: "[#998] : system-tests: review list of February disabled tests.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-382.9","ENTMQMAAS-396.1"],
          startTime: "2018-03-06T17:43:52.428Z",
          endTime: "2018-03-07T00:42:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722677,
          code: "ENTMQMAAS-302.18",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.18",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-382.7","ENTMQMAAS-393.1","ENTMQMAAS-391.3"],
          startTime: "2018-03-04T23:51:01.000Z",
          endTime: "2018-03-05T05:23:06.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722674,
          code: "ENTMQMAAS-300.18",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.18",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-366.3","ENTMQMAAS-345.3","ENTMQMAAS-376.1","ENTMQMAAS-302.18"],
          startTime: "2018-03-05T05:23:07.666Z",
          endTime: "2018-03-05T10:55:13.332Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731367,
          code: "ENTMQMAAS-367.12",
        name: "Setup Jenkins job with productized images.12",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-05T10:55:14.333Z",
          endTime: "2018-03-05T16:27:19.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12735927,
          code: "ENTMQMAAS-388.4",
        name: "[#919] : system-tests: new scale test: testPodsLimitation.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-05T16:27:21.000Z",
          endTime: "2018-03-05T21:59:26.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737562,
          code: "ENTMQMAAS-393.2",
        name: "[#991] : system-tests: new scale test: testCreditLimitation ({sharded,pooled}{queues,topics}).2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.10","ENTMQMAAS-382.8","ENTMQMAAS-388.4"],
          startTime: "2018-03-05T21:59:27.666Z",
          endTime: "2018-03-06T03:31:33.332Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737503,
          code: "ENTMQMAAS-395.1",
        name: "[#996] : system-tests: look at longtime running tests and fix them.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-393.2"],
          startTime: "2018-03-06T03:31:34.333Z",
          endTime: "2018-03-06T09:03:39.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737521,
          code: "ENTMQMAAS-397.1",
        name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-06T09:03:41.000Z",
          endTime: "2018-03-06T14:35:46.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737525,
          code: "ENTMQMAAS-398.1",
        name: "System-tests: periodical maintenance of systemtests and CI.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-397.1"],
          startTime: "2018-03-06T14:35:47.666Z",
          endTime: "2018-03-06T20:07:53.332Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737530,
          code: "ENTMQMAAS-400.1",
        name: "[#795] : System-tests: Enable authentication in marathon tests.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-06T20:07:54.333Z",
          endTime: "2018-03-07T01:39:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722777,
          code: "ENTMQMAAS-302.19",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.19",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-07T01:40:01.000Z",
          endTime: "2018-03-07T03:54:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722774,
          code: "ENTMQMAAS-300.19",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.19",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.19"],
          startTime: "2018-03-07T03:54:31.000Z",
          endTime: "2018-03-07T06:09:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731467,
          code: "ENTMQMAAS-367.13",
        name: "Setup Jenkins job with productized images.13",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.13","ENTMQMAAS-300.19"],
          startTime: "2018-03-07T06:09:01.000Z",
          endTime: "2018-03-07T08:23:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12736027,
          code: "ENTMQMAAS-388.5",
        name: "[#919] : system-tests: new scale test: testPodsLimitation.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-367.13"],
          startTime: "2018-03-07T08:23:31.000Z",
          endTime: "2018-03-07T10:38:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737603,
          code: "ENTMQMAAS-395.2",
        name: "[#996] : system-tests: look at longtime running tests and fix them.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-388.5"],
          startTime: "2018-03-07T10:38:01.000Z",
          endTime: "2018-03-07T12:52:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737621,
          code: "ENTMQMAAS-397.2",
        name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-395.2"],
          startTime: "2018-03-07T12:52:31.000Z",
          endTime: "2018-03-07T15:07:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737625,
          code: "ENTMQMAAS-398.2",
        name: "System-tests: periodical maintenance of systemtests and CI.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-397.2"],
          startTime: "2018-03-07T15:07:01.000Z",
          endTime: "2018-03-07T17:21:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737630,
          code: "ENTMQMAAS-400.2",
        name: "[#795] : System-tests: Enable authentication in marathon tests.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-412.1","ENTMQMAAS-49.9","ENTMQMAAS-400.1"],
          startTime: "2018-03-07T17:21:31.000Z",
          endTime: "2018-03-07T19:36:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722914,
          code: "ENTMQMAAS-309.14",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.14",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-398.1","ENTMQMAAS-399.1"],
          startTime: "2018-03-07T00:43:01.000Z",
          endTime: "2018-03-07T03:24:37.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724174,
          code: "ENTMQMAAS-314.13",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.13",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.14"],
          startTime: "2018-03-07T03:24:38.500Z",
          endTime: "2018-03-07T06:06:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724388,
          code: "ENTMQMAAS-316.11",
        name: "[#604] : Address-controller: PUT method is not implemented.11",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-07T06:06:16.000Z",
          endTime: "2018-03-07T08:47:52.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12736122,
          code: "ENTMQMAAS-387.6",
        name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.11"],
          startTime: "2018-03-07T08:47:53.500Z",
          endTime: "2018-03-07T11:29:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12736671,
          code: "ENTMQMAAS-391.5",
        name: "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-387.6"],
          startTime: "2018-03-07T11:29:31.000Z",
          endTime: "2018-03-07T14:11:07.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737613,
          code: "ENTMQMAAS-396.2",
        name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-391.5"],
          startTime: "2018-03-07T14:11:08.500Z",
          endTime: "2018-03-07T16:52:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737629,
          code: "ENTMQMAAS-399.2",
        name: "[#998] : system-tests: review list of February disabled tests.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-338.5","ENTMQMAAS-396.2"],
          startTime: "2018-03-07T16:52:46.000Z",
          endTime: "2018-03-07T19:34:22.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738236,
          code: "ENTMQMAAS-415.1",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-07T19:34:23.500Z",
          endTime: "2018-03-07T22:16:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722877,
          code: "ENTMQMAAS-302.20",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.20",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-398.2","ENTMQMAAS-399.2"],
          startTime: "2018-03-07T20:48:01.000Z",
          endTime: "2018-03-07T21:05:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722874,
          code: "ENTMQMAAS-300.20",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.20",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.20"],
          startTime: "2018-03-07T21:05:35.285Z",
          endTime: "2018-03-07T21:23:08.570Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731567,
          code: "ENTMQMAAS-367.14",
        name: "Setup Jenkins job with productized images.14",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.20"],
          startTime: "2018-03-07T21:23:09.571Z",
          endTime: "2018-03-07T21:40:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737703,
          code: "ENTMQMAAS-395.3",
        name: "[#996] : system-tests: look at longtime running tests and fix them.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-367.14"],
          startTime: "2018-03-07T21:40:43.857Z",
          endTime: "2018-03-07T21:58:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737721,
          code: "ENTMQMAAS-397.3",
        name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-395.3"],
          startTime: "2018-03-07T21:58:18.142Z",
          endTime: "2018-03-07T22:15:51.427Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737725,
          code: "ENTMQMAAS-398.3",
        name: "System-tests: periodical maintenance of systemtests and CI.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-07T22:15:52.428Z",
          endTime: "2018-03-07T22:33:25.713Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738414,
          code: "ENTMQMAAS-416.1",
        name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-400.2","ENTMQMAAS-415.1"],
          startTime: "2018-03-07T22:33:26.714Z",
          endTime: "2018-03-07T22:50:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723014,
          code: "ENTMQMAAS-309.15",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.15",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-372.3","ENTMQMAAS-397.3"],
          startTime: "2018-03-07T22:16:01.000Z",
          endTime: "2018-03-07T22:30:06.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724274,
          code: "ENTMQMAAS-314.14",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.14",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.15"],
          startTime: "2018-03-07T22:30:07.666Z",
          endTime: "2018-03-07T22:44:13.332Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724488,
          code: "ENTMQMAAS-316.12",
        name: "[#604] : Address-controller: PUT method is not implemented.12",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-398.3","ENTMQMAAS-314.14"],
          startTime: "2018-03-07T22:44:14.333Z",
          endTime: "2018-03-07T22:58:19.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12736222,
          code: "ENTMQMAAS-387.7",
        name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.12"],
          startTime: "2018-03-07T22:58:21.000Z",
          endTime: "2018-03-07T23:12:26.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12736771,
          code: "ENTMQMAAS-391.6",
        name: "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-387.7"],
          startTime: "2018-03-07T23:12:27.666Z",
          endTime: "2018-03-07T23:26:33.332Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737713,
          code: "ENTMQMAAS-396.3",
        name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-391.6"],
          startTime: "2018-03-07T23:26:34.333Z",
          endTime: "2018-03-07T23:40:39.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737729,
          code: "ENTMQMAAS-399.3",
        name: "[#998] : system-tests: review list of February disabled tests.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-396.3"],
          startTime: "2018-03-07T23:40:41.000Z",
          endTime: "2018-03-07T23:54:46.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738336,
          code: "ENTMQMAAS-415.2",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-416.1"],
          startTime: "2018-03-07T23:54:47.666Z",
          endTime: "2018-03-08T00:08:53.332Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738469,
          code: "ENTMQMAAS-417.1",
        name: "[#1021] : system-tests: modify QueueTest#testScaledown.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-415.2"],
          startTime: "2018-03-08T00:08:54.333Z",
          endTime: "2018-03-08T00:22:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723114,
          code: "ENTMQMAAS-309.16",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.16",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-399.3"],
          startTime: "2018-03-08T00:35:01.000Z",
          endTime: "2018-03-08T02:39:53.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724374,
          code: "ENTMQMAAS-314.15",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.15",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.16"],
          startTime: "2018-03-08T02:39:54.333Z",
          endTime: "2018-03-08T04:44:46.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724588,
          code: "ENTMQMAAS-316.13",
        name: "[#604] : Address-controller: PUT method is not implemented.13",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.15"],
          startTime: "2018-03-08T04:44:47.666Z",
          endTime: "2018-03-08T06:49:39.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12736322,
          code: "ENTMQMAAS-387.8",
        name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.21","ENTMQMAAS-316.13"],
          startTime: "2018-03-08T06:49:41.000Z",
          endTime: "2018-03-08T08:54:33.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12736871,
          code: "ENTMQMAAS-391.7",
        name: "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-387.8"],
          startTime: "2018-03-08T08:54:34.333Z",
          endTime: "2018-03-08T10:59:26.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737813,
          code: "ENTMQMAAS-396.4",
        name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-367.15","ENTMQMAAS-391.7"],
          startTime: "2018-03-08T10:59:27.666Z",
          endTime: "2018-03-08T13:04:19.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738436,
          code: "ENTMQMAAS-415.3",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-417.1"],
          startTime: "2018-03-08T13:04:21.000Z",
          endTime: "2018-03-08T15:09:13.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738569,
          code: "ENTMQMAAS-417.2",
        name: "[#1021] : system-tests: modify QueueTest#testScaledown.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-415.3"],
          startTime: "2018-03-08T15:09:14.333Z",
          endTime: "2018-03-08T17:14:06.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738499,
          code: "ENTMQMAAS-418.1",
        name: "[#1022] : System-tests: March list of disabled tests.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-417.2"],
          startTime: "2018-03-08T17:14:07.666Z",
          endTime: "2018-03-08T19:18:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722977,
          code: "ENTMQMAAS-302.21",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.21",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-07T22:51:01.000Z",
          endTime: "2018-03-08T02:40:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12722974,
          code: "ENTMQMAAS-300.21",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.21",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.21"],
          startTime: "2018-03-08T02:40:31.000Z",
          endTime: "2018-03-08T06:30:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731667,
          code: "ENTMQMAAS-367.15",
        name: "Setup Jenkins job with productized images.15",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-08T06:30:01.000Z",
          endTime: "2018-03-08T10:19:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737821,
          code: "ENTMQMAAS-397.4",
        name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-08T10:19:31.000Z",
          endTime: "2018-03-08T14:09:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737825,
          code: "ENTMQMAAS-398.4",
        name: "System-tests: periodical maintenance of systemtests and CI.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-396.4","ENTMQMAAS-397.4"],
          startTime: "2018-03-08T14:09:01.000Z",
          endTime: "2018-03-08T17:58:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738514,
          code: "ENTMQMAAS-416.2",
        name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-08T17:58:31.000Z",
          endTime: "2018-03-08T21:48:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723214,
          code: "ENTMQMAAS-309.17",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.17",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-398.4"],
          startTime: "2018-03-08T19:19:01.000Z",
          endTime: "2018-03-08T19:43:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724474,
          code: "ENTMQMAAS-314.16",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.16",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.17"],
          startTime: "2018-03-08T19:43:01.000Z",
          endTime: "2018-03-08T20:07:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724688,
          code: "ENTMQMAAS-316.14",
        name: "[#604] : Address-controller: PUT method is not implemented.14",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.16"],
          startTime: "2018-03-08T20:07:01.000Z",
          endTime: "2018-03-08T20:31:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12736422,
          code: "ENTMQMAAS-387.9",
        name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.14"],
          startTime: "2018-03-08T20:31:01.000Z",
          endTime: "2018-03-08T20:55:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12736971,
          code: "ENTMQMAAS-391.8",
        name: "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-387.9"],
          startTime: "2018-03-08T20:55:01.000Z",
          endTime: "2018-03-08T21:19:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737913,
          code: "ENTMQMAAS-396.5",
        name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-391.8"],
          startTime: "2018-03-08T21:19:01.000Z",
          endTime: "2018-03-08T21:43:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738536,
          code: "ENTMQMAAS-415.4",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-418.1"],
          startTime: "2018-03-08T21:43:01.000Z",
          endTime: "2018-03-08T22:07:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738669,
          code: "ENTMQMAAS-417.3",
        name: "[#1021] : system-tests: modify QueueTest#testScaledown.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-416.2","ENTMQMAAS-415.4"],
          startTime: "2018-03-08T22:07:01.000Z",
          endTime: "2018-03-08T22:31:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738599,
          code: "ENTMQMAAS-418.2",
        name: "[#1022] : System-tests: March list of disabled tests.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-417.3"],
          startTime: "2018-03-08T22:31:01.000Z",
          endTime: "2018-03-08T22:55:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738623,
          code: "ENTMQMAAS-420.1",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-418.2"],
          startTime: "2018-03-08T22:55:01.000Z",
          endTime: "2018-03-08T23:19:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723314,
          code: "ENTMQMAAS-309.18",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.18",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-396.5"],
          startTime: "2018-03-09T00:01:01.000Z",
          endTime: "2018-03-09T03:49:50.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724574,
          code: "ENTMQMAAS-314.17",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.17",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-355.4","ENTMQMAAS-309.18"],
          startTime: "2018-03-09T03:49:51.000Z",
          endTime: "2018-03-09T07:38:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724788,
          code: "ENTMQMAAS-316.15",
        name: "[#604] : Address-controller: PUT method is not implemented.15",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.17"],
          startTime: "2018-03-09T07:38:41.000Z",
          endTime: "2018-03-09T11:27:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12736522,
          code: "ENTMQMAAS-387.10",
        name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.10",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-376.2","ENTMQMAAS-316.15"],
          startTime: "2018-03-09T11:27:31.000Z",
          endTime: "2018-03-09T15:16:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737071,
          code: "ENTMQMAAS-391.9",
        name: "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.22","ENTMQMAAS-387.10"],
          startTime: "2018-03-09T15:16:21.000Z",
          endTime: "2018-03-09T19:05:10.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738013,
          code: "ENTMQMAAS-396.6",
        name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-391.9"],
          startTime: "2018-03-09T19:05:11.000Z",
          endTime: "2018-03-09T22:54:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738636,
          code: "ENTMQMAAS-415.5",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-420.1"],
          startTime: "2018-03-09T22:54:01.000Z",
          endTime: "2018-03-10T02:42:50.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738769,
          code: "ENTMQMAAS-417.4",
        name: "[#1021] : system-tests: modify QueueTest#testScaledown.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-415.5"],
          startTime: "2018-03-10T02:42:51.000Z",
          endTime: "2018-03-10T06:31:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738699,
          code: "ENTMQMAAS-418.3",
        name: "[#1022] : System-tests: March list of disabled tests.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-417.4"],
          startTime: "2018-03-10T06:31:41.000Z",
          endTime: "2018-03-10T10:20:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738723,
          code: "ENTMQMAAS-420.2",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-418.3"],
          startTime: "2018-03-10T10:20:31.000Z",
          endTime: "2018-03-10T14:09:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738709,
          code: "ENTMQMAAS-426.1",
        name: "[#1034] : system-tests: create test for REST API - address resource required params are missing.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-420.2"],
          startTime: "2018-03-10T14:09:21.000Z",
          endTime: "2018-03-10T17:58:10.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738728,
          code: "ENTMQMAAS-428.1",
        name: "[#1029] : system-tests: modify authentication tests to create multiple address-spaces in one request.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-426.1"],
          startTime: "2018-03-10T17:58:11.000Z",
          endTime: "2018-03-10T21:47:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738731,
          code: "ENTMQMAAS-431.1",
        name: "[#1036] : system-tests: create new test for address-space endpoints \"host\".1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-410.1","ENTMQMAAS-428.1"],
          startTime: "2018-03-10T21:47:01.000Z",
          endTime: "2018-03-11T01:35:50.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738730,
          code: "ENTMQMAAS-430.1",
        name: "[#1032] : system-tests: create new test for replace single address-space.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-405.1","ENTMQMAAS-431.1"],
          startTime: "2018-03-11T01:35:51.000Z",
          endTime: "2018-03-11T05:24:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738733,
          code: "ENTMQMAAS-433.1",
        name: "[#1038] : system-tests: create new test for address-space endpoints name and service (messaging, console, mqtt).1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-430.1"],
          startTime: "2018-03-11T05:24:41.000Z",
          endTime: "2018-03-11T09:13:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738732,
          code: "ENTMQMAAS-432.1",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-433.1"],
          startTime: "2018-03-11T09:13:31.000Z",
          endTime: "2018-03-11T13:02:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738729,
          code: "ENTMQMAAS-429.1",
        name: "[#1031] : system-tests: create new test for replace address-space list.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-432.1"],
          startTime: "2018-03-11T13:02:21.000Z",
          endTime: "2018-03-11T16:51:10.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738734,
          code: "ENTMQMAAS-434.1",
        name: "[#1040] : system-tests: create new test that verify that returned restapi routes are reachable.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-429.1"],
          startTime: "2018-03-11T16:51:11.000Z",
          endTime: "2018-03-11T20:40:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12663844,
          code: "ENTMQMAAS-4.10",
        name: "remove colocated routers.10",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-05T01:32:01.000Z",
          endTime: "2018-03-06T01:22:08.571Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680879,
          code: "ENTMQMAAS-49.9",
        name: "providing way to monitor connection and link metrics.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-06T01:22:09.571Z",
          endTime: "2018-03-07T01:12:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12690868,
          code: "ENTMQMAAS-50.8",
        name: "Release Messaging Images.8",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2018-03-07T01:12:18.142Z",
          endTime: "2018-03-08T01:02:25.713Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730491,
          code: "ENTMQMAAS-355.4",
        name: "[#767] : Disable durable subs (configurable upstream?).4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-08T01:02:26.714Z",
          endTime: "2018-03-09T00:52:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730481,
          code: "ENTMQMAAS-345.4",
        name: "[#757] : Oauth for console.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-09T00:52:35.285Z",
          endTime: "2018-03-10T00:42:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737583,
          code: "ENTMQMAAS-405.1",
        name: "[#949] : agent: Results count is not set correctly after refresh the page.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-10T00:42:43.857Z",
          endTime: "2018-03-11T00:32:51.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737585,
          code: "ENTMQMAAS-407.1",
        name: "[#973] : Configure per-address settings for each address created on broker.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-11T00:32:52.428Z",
          endTime: "2018-03-12T00:22:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12728241,
          code: "ENTMQMAAS-328.4",
        name: "Document Creating and deleting addresses.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-05T01:42:01.000Z",
          endTime: "2018-03-06T11:58:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731750,
          code: "ENTMQMAAS-372.3",
        name: "Console: Create an Address wizard tooltip placement awkward.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-06T11:58:13.000Z",
          endTime: "2018-03-07T22:14:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12733375,
          code: "ENTMQMAAS-376.2",
        name: "Add Documentation Conventions to Guide.2",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-07T22:14:25.000Z",
          endTime: "2018-03-09T08:30:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737592,
          code: "ENTMQMAAS-410.1",
        name: "Docs: how to manage user permissions.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-09T08:30:37.000Z",
          endTime: "2018-03-10T18:46:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737595,
          code: "ENTMQMAAS-411.1",
        name: "Docs: document the sign-up process for beta.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-10T18:46:49.000Z",
          endTime: "2018-03-12T05:03:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692334,
          code: "ENTMQMAAS-51.17",
        name: "Create product build artifacts.17",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.16"],
          startTime: "2018-03-06T21:10:01.000Z",
          endTime: "2018-03-07T15:04:54.545Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692336,
          code: "ENTMQMAAS-53.17",
        name: "Setup CI for product repositories.17",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.17"],
          startTime: "2018-03-07T15:04:55.545Z",
          endTime: "2018-03-08T08:59:49.090Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692335,
          code: "ENTMQMAAS-52.17",
        name: "Create copy of upstream repositories.17",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-50.8","ENTMQMAAS-53.17"],
          startTime: "2018-03-08T08:59:50.090Z",
          endTime: "2018-03-09T02:54:43.635Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726985,
          code: "ENTMQMAAS-323.14",
        name: "Creating and deleting addresses.14",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-09T02:54:44.636Z",
          endTime: "2018-03-09T20:49:38.181Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731383,
          code: "ENTMQMAAS-347.13",
        name: "[#759] : Delegate from keycloak to OpenShift Pro.13",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-323.14"],
          startTime: "2018-03-09T20:49:39.181Z",
          endTime: "2018-03-10T14:44:32.726Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12734952,
          code: "ENTMQMAAS-382.10",
        name: "Investigate options for enforcing backlog limits on broker/router.10",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-10T14:44:33.727Z",
          endTime: "2018-03-11T08:39:27.272Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737762,
          code: "ENTMQMAAS-401.3",
        name: "[#693] : Status check for pooled queues is true even if address is not created.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-11T08:39:28.272Z",
          endTime: "2018-03-12T02:34:21.817Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737784,
          code: "ENTMQMAAS-406.3",
        name: "[#972] : Make global-max-size parameter configurable via template/plan.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-434.1","ENTMQMAAS-407.1","ENTMQMAAS-401.3"],
          startTime: "2018-03-12T02:34:22.818Z",
          endTime: "2018-03-12T20:29:16.363Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738100,
          code: "ENTMQMAAS-412.2",
        name: "[#1001] : Automatically create authorization groups in keycloak.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-12T20:29:17.363Z",
          endTime: "2018-03-13T14:24:10.908Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738110,
          code: "ENTMQMAAS-413.1",
        name: "[#1009] : Make resync interval in controllers configurable.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-412.2"],
          startTime: "2018-03-13T14:24:11.909Z",
          endTime: "2018-03-14T08:19:05.454Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738111,
          code: "ENTMQMAAS-414.1",
        name: "[#1011] : Separata status check from controller resync.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-14T08:19:06.454Z",
          endTime: "2018-03-15T02:13:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692434,
          code: "ENTMQMAAS-51.18",
        name: "Create product build artifacts.18",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.17"],
          startTime: "2018-03-15T02:14:01.000Z",
          endTime: "2018-03-15T03:38:50.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692436,
          code: "ENTMQMAAS-53.18",
        name: "Setup CI for product repositories.18",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.18"],
          startTime: "2018-03-15T03:38:51.000Z",
          endTime: "2018-03-15T05:03:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692435,
          code: "ENTMQMAAS-52.18",
        name: "Create copy of upstream repositories.18",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.18"],
          startTime: "2018-03-15T05:03:41.000Z",
          endTime: "2018-03-15T06:28:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12727085,
          code: "ENTMQMAAS-323.15",
        name: "Creating and deleting addresses.15",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-328.5","ENTMQMAAS-396.7"],
          startTime: "2018-03-15T06:28:31.000Z",
          endTime: "2018-03-15T07:53:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731483,
          code: "ENTMQMAAS-347.14",
        name: "[#759] : Delegate from keycloak to OpenShift Pro.14",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-323.15"],
          startTime: "2018-03-15T07:53:21.000Z",
          endTime: "2018-03-15T09:18:10.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12735052,
          code: "ENTMQMAAS-382.11",
        name: "Investigate options for enforcing backlog limits on broker/router.11",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-347.14"],
          startTime: "2018-03-15T09:18:11.000Z",
          endTime: "2018-03-15T10:43:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737862,
          code: "ENTMQMAAS-401.4",
        name: "[#693] : Status check for pooled queues is true even if address is not created.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-414.1","ENTMQMAAS-425.1","ENTMQMAAS-418.4"],
          startTime: "2018-03-15T10:43:01.000Z",
          endTime: "2018-03-15T12:07:50.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737884,
          code: "ENTMQMAAS-406.4",
        name: "[#972] : Make global-max-size parameter configurable via template/plan.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-401.4"],
          startTime: "2018-03-15T12:07:51.000Z",
          endTime: "2018-03-15T13:32:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738200,
          code: "ENTMQMAAS-412.3",
        name: "[#1001] : Automatically create authorization groups in keycloak.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-406.4"],
          startTime: "2018-03-15T13:32:41.000Z",
          endTime: "2018-03-15T14:57:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738210,
          code: "ENTMQMAAS-413.2",
        name: "[#1009] : Make resync interval in controllers configurable.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-412.3"],
          startTime: "2018-03-15T14:57:31.000Z",
          endTime: "2018-03-15T16:22:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738211,
          code: "ENTMQMAAS-414.2",
        name: "[#1011] : Separata status check from controller resync.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-413.2"],
          startTime: "2018-03-15T16:22:21.000Z",
          endTime: "2018-03-15T17:47:10.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739706,
          code: "ENTMQMAAS-435.1",
        name: "[#1017] : Events sent to address of type queue not delivered after a while.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-414.2"],
          startTime: "2018-03-15T17:47:11.000Z",
          endTime: "2018-03-15T19:12:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723077,
          code: "ENTMQMAAS-302.22",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.22",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-08T23:19:01.000Z",
          endTime: "2018-03-09T13:00:05.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723074,
          code: "ENTMQMAAS-300.22",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.22",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-09T13:00:06.000Z",
          endTime: "2018-03-10T02:41:10.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731767,
          code: "ENTMQMAAS-367.16",
        name: "Setup Jenkins job with productized images.16",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-396.6","ENTMQMAAS-345.4","ENTMQMAAS-300.22"],
          startTime: "2018-03-10T02:41:11.000Z",
          endTime: "2018-03-10T16:22:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737921,
          code: "ENTMQMAAS-397.5",
        name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-344.5","ENTMQMAAS-347.13","ENTMQMAAS-367.16"],
          startTime: "2018-03-10T16:22:16.000Z",
          endTime: "2018-03-11T06:03:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737925,
          code: "ENTMQMAAS-398.5",
        name: "System-tests: periodical maintenance of systemtests and CI.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-397.5"],
          startTime: "2018-03-11T06:03:21.000Z",
          endTime: "2018-03-11T19:44:25.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738614,
          code: "ENTMQMAAS-416.3",
        name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-11T19:44:26.000Z",
          endTime: "2018-03-12T09:25:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738643,
          code: "ENTMQMAAS-421.1",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-411.1","ENTMQMAAS-416.3"],
          startTime: "2018-03-12T09:25:31.000Z",
          endTime: "2018-03-12T23:06:35.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738706,
          code: "ENTMQMAAS-423.1",
        name: "[#1027] : System-tests: create new test fo REST API - PUT | /v1/addresses/myspace/:name.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-406.3","ENTMQMAAS-421.1"],
          startTime: "2018-03-12T23:06:36.000Z",
          endTime: "2018-03-13T12:47:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738705,
          code: "ENTMQMAAS-422.1",
        name: "[#1026] : System-tests: create test for REST API - GET | /v1/addresses/myspace/:name .1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-4.11","ENTMQMAAS-423.1"],
          startTime: "2018-03-13T12:47:41.000Z",
          endTime: "2018-03-14T02:28:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738710,
          code: "ENTMQMAAS-427.1",
        name: "[#1035] : system-tests: create set of tests for REST API - address resource optional params are missing.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-422.1"],
          startTime: "2018-03-14T02:28:46.000Z",
          endTime: "2018-03-14T16:09:50.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738708,
          code: "ENTMQMAAS-425.1",
        name: "[#1033] : System-tests: create test for REST API - GET /v1/schema.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-427.1"],
          startTime: "2018-03-14T16:09:51.000Z",
          endTime: "2018-03-15T05:50:55.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738707,
          code: "ENTMQMAAS-424.1",
        name: "[#1028] : System-tests: create test for REST API - DELETE | /v1/addresses/myspace.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-15T05:50:56.000Z",
          endTime: "2018-03-15T19:32:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12663944,
          code: "ENTMQMAAS-4.11",
        name: "remove colocated routers.11",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-12T00:23:01.000Z",
          endTime: "2018-03-13T04:02:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12680979,
          code: "ENTMQMAAS-49.10",
        name: "providing way to monitor connection and link metrics.10",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-13T04:02:31.000Z",
          endTime: "2018-03-14T07:42:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12690968,
          code: "ENTMQMAAS-50.9",
        name: "Release Messaging Images.9",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2018-03-14T07:42:01.000Z",
          endTime: "2018-03-15T11:21:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730591,
          code: "ENTMQMAAS-355.5",
        name: "[#767] : Disable durable subs (configurable upstream?).5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-15T11:21:31.000Z",
          endTime: "2018-03-16T15:01:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730581,
          code: "ENTMQMAAS-345.5",
        name: "[#757] : Oauth for console.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-16T15:01:01.000Z",
          endTime: "2018-03-17T18:40:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737685,
          code: "ENTMQMAAS-407.2",
        name: "[#973] : Configure per-address settings for each address created on broker.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-17T18:40:31.000Z",
          endTime: "2018-03-18T22:20:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723414,
          code: "ENTMQMAAS-309.19",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.19",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-382.10","ENTMQMAAS-398.5"],
          startTime: "2018-03-11T21:26:01.000Z",
          endTime: "2018-03-12T08:01:37.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724674,
          code: "ENTMQMAAS-314.18",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.18",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.19"],
          startTime: "2018-03-12T08:01:38.500Z",
          endTime: "2018-03-12T18:37:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724888,
          code: "ENTMQMAAS-316.16",
        name: "[#604] : Address-controller: PUT method is not implemented.16",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.18"],
          startTime: "2018-03-12T18:37:16.000Z",
          endTime: "2018-03-13T05:12:52.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12736622,
          code: "ENTMQMAAS-387.11",
        name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.11",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-339.5","ENTMQMAAS-316.16"],
          startTime: "2018-03-13T05:12:53.500Z",
          endTime: "2018-03-13T15:48:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738113,
          code: "ENTMQMAAS-396.7",
        name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-387.11"],
          startTime: "2018-03-13T15:48:31.000Z",
          endTime: "2018-03-14T02:24:07.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738736,
          code: "ENTMQMAAS-415.6",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-14T02:24:08.500Z",
          endTime: "2018-03-14T12:59:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738869,
          code: "ENTMQMAAS-417.5",
        name: "[#1021] : system-tests: modify QueueTest#testScaledown.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-49.10","ENTMQMAAS-413.1","ENTMQMAAS-415.6"],
          startTime: "2018-03-14T12:59:46.000Z",
          endTime: "2018-03-14T23:35:22.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738799,
          code: "ENTMQMAAS-418.4",
        name: "[#1022] : System-tests: March list of disabled tests.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-417.5"],
          startTime: "2018-03-14T23:35:23.500Z",
          endTime: "2018-03-15T10:11:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738823,
          code: "ENTMQMAAS-420.3",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-15T10:11:01.000Z",
          endTime: "2018-03-15T20:46:37.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738809,
          code: "ENTMQMAAS-426.2",
        name: "[#1034] : system-tests: create test for REST API - address resource required params are missing.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-435.1","ENTMQMAAS-424.1","ENTMQMAAS-420.3"],
          startTime: "2018-03-15T20:46:38.500Z",
          endTime: "2018-03-16T07:22:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738828,
          code: "ENTMQMAAS-428.2",
        name: "[#1029] : system-tests: modify authentication tests to create multiple address-spaces in one request.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-426.2"],
          startTime: "2018-03-16T07:22:16.000Z",
          endTime: "2018-03-16T17:57:52.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738831,
          code: "ENTMQMAAS-431.2",
        name: "[#1036] : system-tests: create new test for address-space endpoints \"host\".2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-428.2"],
          startTime: "2018-03-16T17:57:53.500Z",
          endTime: "2018-03-17T04:33:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738830,
          code: "ENTMQMAAS-430.2",
        name: "[#1032] : system-tests: create new test for replace single address-space.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-431.2"],
          startTime: "2018-03-17T04:33:31.000Z",
          endTime: "2018-03-17T15:09:07.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738832,
          code: "ENTMQMAAS-432.2",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-430.2"],
          startTime: "2018-03-17T15:09:08.500Z",
          endTime: "2018-03-18T01:44:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738829,
          code: "ENTMQMAAS-429.2",
        name: "[#1031] : system-tests: create new test for replace address-space list.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-432.2"],
          startTime: "2018-03-18T01:44:46.000Z",
          endTime: "2018-03-18T12:20:22.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738834,
          code: "ENTMQMAAS-434.2",
        name: "[#1040] : system-tests: create new test that verify that returned restapi routes are reachable.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-18T12:20:23.500Z",
          endTime: "2018-03-18T22:56:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723177,
          code: "ENTMQMAAS-302.23",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.23",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-382.11","ENTMQMAAS-352.5","ENTMQMAAS-372.4"],
          startTime: "2018-03-15T19:35:01.000Z",
          endTime: "2018-03-16T05:30:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723174,
          code: "ENTMQMAAS-300.23",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.23",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.23"],
          startTime: "2018-03-16T05:30:16.000Z",
          endTime: "2018-03-16T15:25:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731867,
          code: "ENTMQMAAS-367.17",
        name: "Setup Jenkins job with productized images.17",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-355.5","ENTMQMAAS-300.23"],
          startTime: "2018-03-16T15:25:31.000Z",
          endTime: "2018-03-17T01:20:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738021,
          code: "ENTMQMAAS-397.6",
        name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-367.17"],
          startTime: "2018-03-17T01:20:46.000Z",
          endTime: "2018-03-17T11:16:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738025,
          code: "ENTMQMAAS-398.6",
        name: "System-tests: periodical maintenance of systemtests and CI.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-397.6"],
          startTime: "2018-03-17T11:16:01.000Z",
          endTime: "2018-03-17T21:11:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738714,
          code: "ENTMQMAAS-416.4",
        name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-17T21:11:16.000Z",
          endTime: "2018-03-18T07:06:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738743,
          code: "ENTMQMAAS-421.2",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-416.4"],
          startTime: "2018-03-18T07:06:31.000Z",
          endTime: "2018-03-18T17:01:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738806,
          code: "ENTMQMAAS-423.2",
        name: "[#1027] : System-tests: create new test fo REST API - PUT | /v1/addresses/myspace/:name.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-18T17:01:46.000Z",
          endTime: "2018-03-19T02:57:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723514,
          code: "ENTMQMAAS-309.20",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.20",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-376.3","ENTMQMAAS-347.15","ENTMQMAAS-345.5","ENTMQMAAS-398.6","ENTMQMAAS-353.5"],
          startTime: "2018-03-18T22:56:01.000Z",
          endTime: "2018-03-18T23:12:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724774,
          code: "ENTMQMAAS-314.19",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.19",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.20"],
          startTime: "2018-03-18T23:12:49.000Z",
          endTime: "2018-03-18T23:29:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724988,
          code: "ENTMQMAAS-316.17",
        name: "[#604] : Address-controller: PUT method is not implemented.17",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.19"],
          startTime: "2018-03-18T23:29:37.000Z",
          endTime: "2018-03-18T23:46:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12736722,
          code: "ENTMQMAAS-387.12",
        name: "[#918] : system-tests: new scale test: testScaleRouterAutomatically.12",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.17"],
          startTime: "2018-03-18T23:46:25.000Z",
          endTime: "2018-03-19T00:03:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738213,
          code: "ENTMQMAAS-396.8",
        name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-387.12"],
          startTime: "2018-03-19T00:03:13.000Z",
          endTime: "2018-03-19T00:20:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738836,
          code: "ENTMQMAAS-415.7",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-421.2","ENTMQMAAS-412.4","ENTMQMAAS-407.2","ENTMQMAAS-434.2"],
          startTime: "2018-03-19T00:20:01.000Z",
          endTime: "2018-03-19T00:36:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738969,
          code: "ENTMQMAAS-417.6",
        name: "[#1021] : system-tests: modify QueueTest#testScaledown.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-415.7"],
          startTime: "2018-03-19T00:36:49.000Z",
          endTime: "2018-03-19T00:53:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738899,
          code: "ENTMQMAAS-418.5",
        name: "[#1022] : System-tests: March list of disabled tests.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-417.6"],
          startTime: "2018-03-19T00:53:37.000Z",
          endTime: "2018-03-19T01:10:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738923,
          code: "ENTMQMAAS-420.4",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-418.5"],
          startTime: "2018-03-19T01:10:25.000Z",
          endTime: "2018-03-19T01:27:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738909,
          code: "ENTMQMAAS-426.3",
        name: "[#1034] : system-tests: create test for REST API - address resource required params are missing.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-420.4"],
          startTime: "2018-03-19T01:27:13.000Z",
          endTime: "2018-03-19T01:44:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738931,
          code: "ENTMQMAAS-431.3",
        name: "[#1036] : system-tests: create new test for address-space endpoints \"host\".3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-426.3"],
          startTime: "2018-03-19T01:44:01.000Z",
          endTime: "2018-03-19T02:00:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738930,
          code: "ENTMQMAAS-430.3",
        name: "[#1032] : system-tests: create new test for replace single address-space.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-431.3"],
          startTime: "2018-03-19T02:00:49.000Z",
          endTime: "2018-03-19T02:17:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738932,
          code: "ENTMQMAAS-432.3",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-430.3"],
          startTime: "2018-03-19T02:17:37.000Z",
          endTime: "2018-03-19T02:34:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738929,
          code: "ENTMQMAAS-429.3",
        name: "[#1031] : system-tests: create new test for replace address-space list.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-432.3"],
          startTime: "2018-03-19T02:34:25.000Z",
          endTime: "2018-03-19T02:51:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738934,
          code: "ENTMQMAAS-434.3",
        name: "[#1040] : system-tests: create new test that verify that returned restapi routes are reachable.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-429.3"],
          startTime: "2018-03-19T02:51:13.000Z",
          endTime: "2018-03-19T03:08:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12728341,
          code: "ENTMQMAAS-328.5",
        name: "Document Creating and deleting addresses.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-12T05:03:01.000Z",
          endTime: "2018-03-13T23:12:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731850,
          code: "ENTMQMAAS-372.4",
        name: "Console: Create an Address wizard tooltip placement awkward.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-13T23:12:01.000Z",
          endTime: "2018-03-15T17:21:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12733475,
          code: "ENTMQMAAS-376.3",
        name: "Add Documentation Conventions to Guide.3",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-15T17:21:01.000Z",
          endTime: "2018-03-17T11:30:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737692,
          code: "ENTMQMAAS-410.2",
        name: "Docs: how to manage user permissions.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-17T11:30:01.000Z",
          endTime: "2018-03-19T05:39:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723614,
          code: "ENTMQMAAS-309.21",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.21",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-396.8"],
          startTime: "2018-03-19T03:08:01.000Z",
          endTime: "2018-03-19T03:42:47.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724874,
          code: "ENTMQMAAS-314.20",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.20",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.21"],
          startTime: "2018-03-19T03:42:48.142Z",
          endTime: "2018-03-19T04:17:34.284Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725088,
          code: "ENTMQMAAS-316.18",
        name: "[#604] : Address-controller: PUT method is not implemented.18",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.20"],
          startTime: "2018-03-19T04:17:35.285Z",
          endTime: "2018-03-19T04:52:21.427Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738313,
          code: "ENTMQMAAS-396.9",
        name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.18"],
          startTime: "2018-03-19T04:52:22.428Z",
          endTime: "2018-03-19T05:27:08.570Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738936,
          code: "ENTMQMAAS-415.8",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-423.2","ENTMQMAAS-434.3"],
          startTime: "2018-03-19T05:27:09.571Z",
          endTime: "2018-03-19T06:01:55.713Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739069,
          code: "ENTMQMAAS-417.7",
        name: "[#1021] : system-tests: modify QueueTest#testScaledown.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-410.2","ENTMQMAAS-415.8"],
          startTime: "2018-03-19T06:01:56.714Z",
          endTime: "2018-03-19T06:36:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738999,
          code: "ENTMQMAAS-418.6",
        name: "[#1022] : System-tests: March list of disabled tests.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-417.7"],
          startTime: "2018-03-19T06:36:43.857Z",
          endTime: "2018-03-19T07:11:29.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739023,
          code: "ENTMQMAAS-420.5",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-413.3","ENTMQMAAS-418.6"],
          startTime: "2018-03-19T07:11:31.000Z",
          endTime: "2018-03-19T07:46:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739009,
          code: "ENTMQMAAS-426.4",
        name: "[#1034] : system-tests: create test for REST API - address resource required params are missing.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-420.5"],
          startTime: "2018-03-19T07:46:18.142Z",
          endTime: "2018-03-19T08:21:04.284Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739031,
          code: "ENTMQMAAS-431.4",
        name: "[#1036] : system-tests: create new test for address-space endpoints \"host\".4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-426.4"],
          startTime: "2018-03-19T08:21:05.285Z",
          endTime: "2018-03-19T08:55:51.427Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739030,
          code: "ENTMQMAAS-430.4",
        name: "[#1032] : system-tests: create new test for replace single address-space.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-431.4"],
          startTime: "2018-03-19T08:55:52.428Z",
          endTime: "2018-03-19T09:30:38.570Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739032,
          code: "ENTMQMAAS-432.4",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-430.4"],
          startTime: "2018-03-19T09:30:39.571Z",
          endTime: "2018-03-19T10:05:25.713Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739029,
          code: "ENTMQMAAS-429.4",
        name: "[#1031] : system-tests: create new test for replace address-space list.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-432.4"],
          startTime: "2018-03-19T10:05:26.714Z",
          endTime: "2018-03-19T10:40:12.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739034,
          code: "ENTMQMAAS-434.4",
        name: "[#1040] : system-tests: create new test that verify that returned restapi routes are reachable.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-429.4"],
          startTime: "2018-03-19T10:40:13.857Z",
          endTime: "2018-03-19T11:14:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692534,
          code: "ENTMQMAAS-51.19",
        name: "Create product build artifacts.19",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.18","ENTMQMAAS-50.9"],
          startTime: "2018-03-15T19:12:01.000Z",
          endTime: "2018-03-16T04:31:10.909Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692536,
          code: "ENTMQMAAS-53.19",
        name: "Setup CI for product repositories.19",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.19"],
          startTime: "2018-03-16T04:31:11.909Z",
          endTime: "2018-03-16T13:50:21.818Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692535,
          code: "ENTMQMAAS-52.19",
        name: "Create copy of upstream repositories.19",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.19"],
          startTime: "2018-03-16T13:50:22.818Z",
          endTime: "2018-03-16T23:09:32.727Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12727185,
          code: "ENTMQMAAS-323.16",
        name: "Creating and deleting addresses.16",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-16T23:09:33.727Z",
          endTime: "2018-03-17T08:28:43.636Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731583,
          code: "ENTMQMAAS-347.15",
        name: "[#759] : Delegate from keycloak to OpenShift Pro.15",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-323.16"],
          startTime: "2018-03-17T08:28:44.636Z",
          endTime: "2018-03-17T17:47:54.545Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737962,
          code: "ENTMQMAAS-401.5",
        name: "[#693] : Status check for pooled queues is true even if address is not created.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-17T17:47:55.545Z",
          endTime: "2018-03-18T03:07:05.454Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737984,
          code: "ENTMQMAAS-406.5",
        name: "[#972] : Make global-max-size parameter configurable via template/plan.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-401.5"],
          startTime: "2018-03-18T03:07:06.454Z",
          endTime: "2018-03-18T12:26:16.363Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738300,
          code: "ENTMQMAAS-412.4",
        name: "[#1001] : Automatically create authorization groups in keycloak.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-429.2","ENTMQMAAS-406.5"],
          startTime: "2018-03-18T12:26:17.363Z",
          endTime: "2018-03-18T21:45:27.272Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738310,
          code: "ENTMQMAAS-413.3",
        name: "[#1009] : Make resync interval in controllers configurable.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-18T21:45:28.272Z",
          endTime: "2018-03-19T07:04:38.181Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738311,
          code: "ENTMQMAAS-414.3",
        name: "[#1011] : Separata status check from controller resync.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-19T07:04:39.181Z",
          endTime: "2018-03-19T16:23:49.090Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739806,
          code: "ENTMQMAAS-435.2",
        name: "[#1017] : Events sent to address of type queue not delivered after a while.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-434.4","ENTMQMAAS-414.3"],
          startTime: "2018-03-19T16:23:50.090Z",
          endTime: "2018-03-20T01:42:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692634,
          code: "ENTMQMAAS-51.20",
        name: "Create product build artifacts.20",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.19"],
          startTime: "2018-03-20T01:43:01.000Z",
          endTime: "2018-03-20T03:45:25.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692636,
          code: "ENTMQMAAS-53.20",
        name: "Setup CI for product repositories.20",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.20"],
          startTime: "2018-03-20T03:45:26.000Z",
          endTime: "2018-03-20T05:47:50.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692635,
          code: "ENTMQMAAS-52.20",
        name: "Create copy of upstream repositories.20",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.20"],
          startTime: "2018-03-20T05:47:51.000Z",
          endTime: "2018-03-20T07:50:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12727285,
          code: "ENTMQMAAS-323.17",
        name: "Creating and deleting addresses.17",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-396.10"],
          startTime: "2018-03-20T07:50:16.000Z",
          endTime: "2018-03-20T09:52:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731683,
          code: "ENTMQMAAS-347.16",
        name: "[#759] : Delegate from keycloak to OpenShift Pro.16",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-397.7","ENTMQMAAS-323.17"],
          startTime: "2018-03-20T09:52:41.000Z",
          endTime: "2018-03-20T11:55:05.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738062,
          code: "ENTMQMAAS-401.6",
        name: "[#693] : Status check for pooled queues is true even if address is not created.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-417.8"],
          startTime: "2018-03-20T11:55:06.000Z",
          endTime: "2018-03-20T13:57:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738084,
          code: "ENTMQMAAS-406.6",
        name: "[#972] : Make global-max-size parameter configurable via template/plan.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-401.6"],
          startTime: "2018-03-20T13:57:31.000Z",
          endTime: "2018-03-20T15:59:55.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738400,
          code: "ENTMQMAAS-412.5",
        name: "[#1001] : Automatically create authorization groups in keycloak.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-418.7","ENTMQMAAS-406.6"],
          startTime: "2018-03-20T15:59:56.000Z",
          endTime: "2018-03-20T18:02:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738410,
          code: "ENTMQMAAS-413.4",
        name: "[#1009] : Make resync interval in controllers configurable.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-412.5"],
          startTime: "2018-03-20T18:02:21.000Z",
          endTime: "2018-03-20T20:04:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738411,
          code: "ENTMQMAAS-414.4",
        name: "[#1011] : Separata status check from controller resync.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-420.6","ENTMQMAAS-413.4"],
          startTime: "2018-03-20T20:04:46.000Z",
          endTime: "2018-03-20T22:07:10.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739906,
          code: "ENTMQMAAS-435.3",
        name: "[#1017] : Events sent to address of type queue not delivered after a while.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-414.4"],
          startTime: "2018-03-20T22:07:11.000Z",
          endTime: "2018-03-21T00:09:35.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740388,
          code: "ENTMQMAAS-450.1",
        name: "[#1079] : standard-controller: is trying to connect to router which was already killed.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-426.5","ENTMQMAAS-416.5","ENTMQMAAS-435.3"],
          startTime: "2018-03-21T00:09:36.000Z",
          endTime: "2018-03-21T02:12:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723277,
          code: "ENTMQMAAS-302.24",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.24",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-19T02:57:01.000Z",
          endTime: "2018-03-19T10:25:53.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723274,
          code: "ENTMQMAAS-300.24",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.24",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-19T10:25:54.333Z",
          endTime: "2018-03-19T17:54:46.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731967,
          code: "ENTMQMAAS-367.18",
        name: "Setup Jenkins job with productized images.18",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-19T17:54:47.666Z",
          endTime: "2018-03-20T01:23:39.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738121,
          code: "ENTMQMAAS-397.7",
        name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-367.18"],
          startTime: "2018-03-20T01:23:41.000Z",
          endTime: "2018-03-20T08:52:33.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738125,
          code: "ENTMQMAAS-398.7",
        name: "System-tests: periodical maintenance of systemtests and CI.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-20T08:52:34.333Z",
          endTime: "2018-03-20T16:21:26.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738814,
          code: "ENTMQMAAS-416.5",
        name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-20T16:21:27.666Z",
          endTime: "2018-03-20T23:50:19.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738843,
          code: "ENTMQMAAS-421.3",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-20T23:50:21.000Z",
          endTime: "2018-03-21T07:19:13.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738906,
          code: "ENTMQMAAS-423.3",
        name: "[#1027] : System-tests: create new test fo REST API - PUT | /v1/addresses/myspace/:name.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-21T07:19:14.333Z",
          endTime: "2018-03-21T14:48:06.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740131,
          code: "ENTMQMAAS-438.1",
        name: "[#1073] : system-tests: Create test for check if size of messages was exceeded.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-423.3"],
          startTime: "2018-03-21T14:48:07.666Z",
          endTime: "2018-03-21T22:16:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723714,
          code: "ENTMQMAAS-309.22",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.22",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-396.9","ENTMQMAAS-302.24"],
          startTime: "2018-03-19T11:15:01.000Z",
          endTime: "2018-03-19T15:12:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724974,
          code: "ENTMQMAAS-314.21",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.21",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.22"],
          startTime: "2018-03-19T15:12:01.000Z",
          endTime: "2018-03-19T19:09:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725188,
          code: "ENTMQMAAS-316.19",
        name: "[#604] : Address-controller: PUT method is not implemented.19",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.24","ENTMQMAAS-314.21"],
          startTime: "2018-03-19T19:09:01.000Z",
          endTime: "2018-03-19T23:06:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738413,
          code: "ENTMQMAAS-396.10",
        name: "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests.10",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.19"],
          startTime: "2018-03-19T23:06:01.000Z",
          endTime: "2018-03-20T03:03:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739036,
          code: "ENTMQMAAS-415.9",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-435.2"],
          startTime: "2018-03-20T03:03:01.000Z",
          endTime: "2018-03-20T07:00:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739169,
          code: "ENTMQMAAS-417.8",
        name: "[#1021] : system-tests: modify QueueTest#testScaledown.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-415.9"],
          startTime: "2018-03-20T07:00:01.000Z",
          endTime: "2018-03-20T10:57:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739099,
          code: "ENTMQMAAS-418.7",
        name: "[#1022] : System-tests: March list of disabled tests.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-20T10:57:01.000Z",
          endTime: "2018-03-20T14:54:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739123,
          code: "ENTMQMAAS-420.6",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-20T14:54:01.000Z",
          endTime: "2018-03-20T18:51:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739109,
          code: "ENTMQMAAS-426.5",
        name: "[#1034] : system-tests: create test for REST API - address resource required params are missing.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-20T18:51:01.000Z",
          endTime: "2018-03-20T22:48:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739131,
          code: "ENTMQMAAS-431.5",
        name: "[#1036] : system-tests: create new test for address-space endpoints \"host\".5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-20T22:48:01.000Z",
          endTime: "2018-03-21T02:45:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739130,
          code: "ENTMQMAAS-430.5",
        name: "[#1032] : system-tests: create new test for replace single address-space.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-450.1","ENTMQMAAS-431.5"],
          startTime: "2018-03-21T02:45:01.000Z",
          endTime: "2018-03-21T06:42:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739132,
          code: "ENTMQMAAS-432.5",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-430.5"],
          startTime: "2018-03-21T06:42:01.000Z",
          endTime: "2018-03-21T10:39:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739129,
          code: "ENTMQMAAS-429.5",
        name: "[#1031] : system-tests: create new test for replace address-space list.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-421.3","ENTMQMAAS-432.5"],
          startTime: "2018-03-21T10:39:01.000Z",
          endTime: "2018-03-21T14:36:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739134,
          code: "ENTMQMAAS-434.5",
        name: "[#1040] : system-tests: create new test that verify that returned restapi routes are reachable.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-429.5"],
          startTime: "2018-03-21T14:36:01.000Z",
          endTime: "2018-03-21T18:33:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740285,
          code: "ENTMQMAAS-449.1",
        name: "[#1074] : console: \"Results\" value is not updated after addresses are removed.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-434.5"],
          startTime: "2018-03-21T18:33:01.000Z",
          endTime: "2018-03-21T22:30:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723377,
          code: "ENTMQMAAS-302.25",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.25",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-21T22:17:01.000Z",
          endTime: "2018-03-22T10:03:37.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723374,
          code: "ENTMQMAAS-300.25",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.25",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-22T10:03:38.500Z",
          endTime: "2018-03-22T21:50:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738221,
          code: "ENTMQMAAS-397.8",
        name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.20","ENTMQMAAS-300.25"],
          startTime: "2018-03-22T21:50:16.000Z",
          endTime: "2018-03-23T09:36:52.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738225,
          code: "ENTMQMAAS-398.8",
        name: "System-tests: periodical maintenance of systemtests and CI.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-397.8"],
          startTime: "2018-03-23T09:36:53.500Z",
          endTime: "2018-03-23T21:23:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738914,
          code: "ENTMQMAAS-416.6",
        name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-23T21:23:31.000Z",
          endTime: "2018-03-24T09:10:07.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738943,
          code: "ENTMQMAAS-421.4",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-416.6"],
          startTime: "2018-03-24T09:10:08.500Z",
          endTime: "2018-03-24T20:56:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739006,
          code: "ENTMQMAAS-423.4",
        name: "[#1027] : System-tests: create new test fo REST API - PUT | /v1/addresses/myspace/:name.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-24T20:56:46.000Z",
          endTime: "2018-03-25T08:43:22.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740231,
          code: "ENTMQMAAS-438.2",
        name: "[#1073] : system-tests: Create test for check if size of messages was exceeded.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-25T08:43:23.500Z",
          endTime: "2018-03-25T20:30:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730574,
          code: "ENTMQMAAS-338.5",
        name: "[#750] : Handle scaledown of queues and topics at deploy time.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-05T01:28:01.000Z",
          endTime: "2018-03-07T16:23:37.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730580,
          code: "ENTMQMAAS-344.5",
        name: "[#756] : Monitoring for operator(us): prometheus for alerting and metrics, log aggregation/search for logs.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-07T16:23:38.500Z",
          endTime: "2018-03-10T07:19:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730575,
          code: "ENTMQMAAS-339.5",
        name: "[#751] : Use valid wildcart cert.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-10T07:19:16.000Z",
          endTime: "2018-03-12T22:14:52.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730588,
          code: "ENTMQMAAS-352.5",
        name: "[#764] : Some level of metrics on address controller / standard controller to show prometheus metrics.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-12T22:14:53.500Z",
          endTime: "2018-03-15T13:10:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730589,
          code: "ENTMQMAAS-353.5",
        name: "[#765] : Changes to service broker (service type is just address space, different plans are supported. See also point above about how to tie plans offered to plans specified) .5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-15T13:10:31.000Z",
          endTime: "2018-03-18T04:06:07.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730578,
          code: "ENTMQMAAS-342.5",
        name: "[#754] : Deploying keycloak in an HA configuration.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-18T04:06:08.500Z",
          endTime: "2018-03-20T19:01:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730582,
          code: "ENTMQMAAS-346.5",
        name: "[#758] : Keycloak plugin OAUTH2 support.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-20T19:01:46.000Z",
          endTime: "2018-03-23T09:57:22.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730549,
          code: "ENTMQMAAS-366.4",
        name: "[#778] : Integrate PUMBA into our testing environment? (task already exists for that, from Ulf) .4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-23T09:57:23.500Z",
          endTime: "2018-03-26T00:53:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723814,
          code: "ENTMQMAAS-309.23",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.23",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-347.16","ENTMQMAAS-398.7","ENTMQMAAS-342.5"],
          startTime: "2018-03-21T22:30:01.000Z",
          endTime: "2018-03-22T05:32:51.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725074,
          code: "ENTMQMAAS-314.22",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.22",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.23"],
          startTime: "2018-03-22T05:32:52.428Z",
          endTime: "2018-03-22T12:35:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725288,
          code: "ENTMQMAAS-316.20",
        name: "[#604] : Address-controller: PUT method is not implemented.20",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.25","ENTMQMAAS-314.22"],
          startTime: "2018-03-22T12:35:43.857Z",
          endTime: "2018-03-22T19:38:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739136,
          code: "ENTMQMAAS-415.10",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.10",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-4.12","ENTMQMAAS-438.1","ENTMQMAAS-449.1"],
          startTime: "2018-03-22T19:38:35.285Z",
          endTime: "2018-03-23T02:41:25.713Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739269,
          code: "ENTMQMAAS-417.9",
        name: "[#1021] : system-tests: modify QueueTest#testScaledown.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-415.10"],
          startTime: "2018-03-23T02:41:26.714Z",
          endTime: "2018-03-23T09:44:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739199,
          code: "ENTMQMAAS-418.8",
        name: "[#1022] : System-tests: March list of disabled tests.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-417.9"],
          startTime: "2018-03-23T09:44:18.142Z",
          endTime: "2018-03-23T16:47:08.570Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739223,
          code: "ENTMQMAAS-420.7",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-418.8"],
          startTime: "2018-03-23T16:47:09.571Z",
          endTime: "2018-03-23T23:49:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739209,
          code: "ENTMQMAAS-426.6",
        name: "[#1034] : system-tests: create test for REST API - address resource required params are missing.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-420.7"],
          startTime: "2018-03-23T23:50:01.000Z",
          endTime: "2018-03-24T06:52:51.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739231,
          code: "ENTMQMAAS-431.6",
        name: "[#1036] : system-tests: create new test for address-space endpoints \"host\".6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-426.6"],
          startTime: "2018-03-24T06:52:52.428Z",
          endTime: "2018-03-24T13:55:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739230,
          code: "ENTMQMAAS-430.6",
        name: "[#1032] : system-tests: create new test for replace single address-space.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-431.6"],
          startTime: "2018-03-24T13:55:43.857Z",
          endTime: "2018-03-24T20:58:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739232,
          code: "ENTMQMAAS-432.6",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-421.4","ENTMQMAAS-430.6"],
          startTime: "2018-03-24T20:58:35.285Z",
          endTime: "2018-03-25T04:01:25.713Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739229,
          code: "ENTMQMAAS-429.6",
        name: "[#1031] : system-tests: create new test for replace address-space list.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-49.11","ENTMQMAAS-432.6"],
          startTime: "2018-03-25T04:01:26.714Z",
          endTime: "2018-03-25T11:04:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739234,
          code: "ENTMQMAAS-434.6",
        name: "[#1040] : system-tests: create new test that verify that returned restapi routes are reachable.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-423.4","ENTMQMAAS-429.6"],
          startTime: "2018-03-25T11:04:18.142Z",
          endTime: "2018-03-25T18:07:08.570Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740385,
          code: "ENTMQMAAS-449.2",
        name: "[#1074] : console: \"Results\" value is not updated after addresses are removed.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-434.6"],
          startTime: "2018-03-25T18:07:09.571Z",
          endTime: "2018-03-26T01:09:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723914,
          code: "ENTMQMAAS-309.24",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.24",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-323.18","ENTMQMAAS-366.4"],
          startTime: "2018-03-26T01:10:01.000Z",
          endTime: "2018-03-26T02:35:36.923Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725174,
          code: "ENTMQMAAS-314.23",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.23",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.24"],
          startTime: "2018-03-26T02:35:37.923Z",
          endTime: "2018-03-26T04:01:13.846Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725388,
          code: "ENTMQMAAS-316.21",
        name: "[#604] : Address-controller: PUT method is not implemented.21",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.23"],
          startTime: "2018-03-26T04:01:14.846Z",
          endTime: "2018-03-26T05:26:50.769Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739236,
          code: "ENTMQMAAS-415.11",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.11",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-438.2","ENTMQMAAS-449.2"],
          startTime: "2018-03-26T05:26:51.769Z",
          endTime: "2018-03-26T06:52:27.692Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739369,
          code: "ENTMQMAAS-417.10",
        name: "[#1021] : system-tests: modify QueueTest#testScaledown.10",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-415.11"],
          startTime: "2018-03-26T06:52:28.692Z",
          endTime: "2018-03-26T08:18:04.615Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739299,
          code: "ENTMQMAAS-418.9",
        name: "[#1022] : System-tests: March list of disabled tests.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-417.10"],
          startTime: "2018-03-26T08:18:05.615Z",
          endTime: "2018-03-26T09:43:41.538Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739323,
          code: "ENTMQMAAS-420.8",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-418.9"],
          startTime: "2018-03-26T09:43:42.538Z",
          endTime: "2018-03-26T11:09:18.461Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739309,
          code: "ENTMQMAAS-426.7",
        name: "[#1034] : system-tests: create test for REST API - address resource required params are missing.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-420.8"],
          startTime: "2018-03-26T11:09:19.461Z",
          endTime: "2018-03-26T12:34:55.384Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739331,
          code: "ENTMQMAAS-431.7",
        name: "[#1036] : system-tests: create new test for address-space endpoints \"host\".7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-426.7"],
          startTime: "2018-03-26T12:34:56.384Z",
          endTime: "2018-03-26T14:00:32.307Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739330,
          code: "ENTMQMAAS-430.7",
        name: "[#1032] : system-tests: create new test for replace single address-space.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-431.7"],
          startTime: "2018-03-26T14:00:33.307Z",
          endTime: "2018-03-26T15:26:09.230Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739332,
          code: "ENTMQMAAS-432.7",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-430.7"],
          startTime: "2018-03-26T15:26:10.230Z",
          endTime: "2018-03-26T16:51:46.153Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739334,
          code: "ENTMQMAAS-434.7",
        name: "[#1040] : system-tests: create new test that verify that returned restapi routes are reachable.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-432.7"],
          startTime: "2018-03-26T16:51:47.153Z",
          endTime: "2018-03-26T18:17:23.076Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740485,
          code: "ENTMQMAAS-449.3",
        name: "[#1074] : console: \"Results\" value is not updated after addresses are removed.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-434.7"],
          startTime: "2018-03-26T18:17:24.076Z",
          endTime: "2018-03-26T19:42:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724014,
          code: "ENTMQMAAS-309.25",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.25",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-347.17","ENTMQMAAS-339.6","ENTMQMAAS-300.26"],
          startTime: "2018-03-26T19:43:01.000Z",
          endTime: "2018-03-26T20:13:18.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725274,
          code: "ENTMQMAAS-314.24",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.24",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.25"],
          startTime: "2018-03-26T20:13:19.000Z",
          endTime: "2018-03-26T20:43:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725488,
          code: "ENTMQMAAS-316.22",
        name: "[#604] : Address-controller: PUT method is not implemented.22",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.24"],
          startTime: "2018-03-26T20:43:37.000Z",
          endTime: "2018-03-26T21:13:54.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739336,
          code: "ENTMQMAAS-415.12",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.12",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-449.3"],
          startTime: "2018-03-26T21:13:55.000Z",
          endTime: "2018-03-26T21:44:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739469,
          code: "ENTMQMAAS-417.11",
        name: "[#1021] : system-tests: modify QueueTest#testScaledown.11",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-415.12"],
          startTime: "2018-03-26T21:44:13.000Z",
          endTime: "2018-03-26T22:14:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739399,
          code: "ENTMQMAAS-418.10",
        name: "[#1022] : System-tests: March list of disabled tests.10",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-417.11"],
          startTime: "2018-03-26T22:14:31.000Z",
          endTime: "2018-03-26T22:44:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739423,
          code: "ENTMQMAAS-420.9",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-418.10"],
          startTime: "2018-03-26T22:44:49.000Z",
          endTime: "2018-03-26T23:15:06.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739430,
          code: "ENTMQMAAS-430.8",
        name: "[#1032] : system-tests: create new test for replace single address-space.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-420.9"],
          startTime: "2018-03-26T23:15:07.000Z",
          endTime: "2018-03-26T23:45:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739432,
          code: "ENTMQMAAS-432.8",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-430.8"],
          startTime: "2018-03-26T23:45:25.000Z",
          endTime: "2018-03-27T00:15:42.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740585,
          code: "ENTMQMAAS-449.4",
        name: "[#1074] : console: \"Results\" value is not updated after addresses are removed.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-432.8"],
          startTime: "2018-03-27T00:15:43.000Z",
          endTime: "2018-03-27T00:46:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730674,
          code: "ENTMQMAAS-338.6",
        name: "[#750] : Handle scaledown of queues and topics at deploy time.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-26T00:53:01.000Z",
          endTime: "2018-03-26T06:54:08.571Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730680,
          code: "ENTMQMAAS-344.6",
        name: "[#756] : Monitoring for operator(us): prometheus for alerting and metrics, log aggregation/search for logs.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.21","ENTMQMAAS-338.6"],
          startTime: "2018-03-26T06:54:09.571Z",
          endTime: "2018-03-26T12:55:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730675,
          code: "ENTMQMAAS-339.6",
        name: "[#751] : Use valid wildcart cert.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.26","ENTMQMAAS-344.6"],
          startTime: "2018-03-26T12:55:18.142Z",
          endTime: "2018-03-26T18:56:25.713Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730688,
          code: "ENTMQMAAS-352.6",
        name: "[#764] : Some level of metrics on address controller / standard controller to show prometheus metrics.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-26T18:56:26.714Z",
          endTime: "2018-03-27T00:57:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730689,
          code: "ENTMQMAAS-353.6",
        name: "[#765] : Changes to service broker (service type is just address space, different plans are supported. See also point above about how to tie plans offered to plans specified) .6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-352.6"],
          startTime: "2018-03-27T00:57:35.285Z",
          endTime: "2018-03-27T06:58:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730678,
          code: "ENTMQMAAS-342.6",
        name: "[#754] : Deploying keycloak in an HA configuration.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-397.9","ENTMQMAAS-353.6"],
          startTime: "2018-03-27T06:58:43.857Z",
          endTime: "2018-03-27T12:59:51.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730649,
          code: "ENTMQMAAS-366.5",
        name: "[#778] : Integrate PUMBA into our testing environment? (task already exists for that, from Ulf) .5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-342.6"],
          startTime: "2018-03-27T12:59:52.428Z",
          endTime: "2018-03-27T19:00:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723477,
          code: "ENTMQMAAS-302.26",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.26",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-25T20:30:01.000Z",
          endTime: "2018-03-26T07:45:08.571Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723474,
          code: "ENTMQMAAS-300.26",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.26",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-26T07:45:09.571Z",
          endTime: "2018-03-26T19:00:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738321,
          code: "ENTMQMAAS-397.9",
        name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-26T19:00:18.142Z",
          endTime: "2018-03-27T06:15:25.713Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738325,
          code: "ENTMQMAAS-398.9",
        name: "System-tests: periodical maintenance of systemtests and CI.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-27T06:15:26.714Z",
          endTime: "2018-03-27T17:30:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739014,
          code: "ENTMQMAAS-416.7",
        name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-27T17:30:35.285Z",
          endTime: "2018-03-28T04:45:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739043,
          code: "ENTMQMAAS-421.5",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-28T04:45:43.857Z",
          endTime: "2018-03-28T16:00:51.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739106,
          code: "ENTMQMAAS-423.5",
        name: "[#1027] : System-tests: create new test fo REST API - PUT | /v1/addresses/myspace/:name.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-28T16:00:52.428Z",
          endTime: "2018-03-29T03:15:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724114,
          code: "ENTMQMAAS-309.26",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.26",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.22"],
          startTime: "2018-03-27T00:46:01.000Z",
          endTime: "2018-03-27T04:58:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725374,
          code: "ENTMQMAAS-314.25",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.25",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.26"],
          startTime: "2018-03-27T04:58:41.000Z",
          endTime: "2018-03-27T09:11:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725588,
          code: "ENTMQMAAS-316.23",
        name: "[#604] : Address-controller: PUT method is not implemented.23",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.25"],
          startTime: "2018-03-27T09:11:21.000Z",
          endTime: "2018-03-27T13:24:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739436,
          code: "ENTMQMAAS-415.13",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.13",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-449.4"],
          startTime: "2018-03-27T13:24:01.000Z",
          endTime: "2018-03-27T17:36:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739569,
          code: "ENTMQMAAS-417.12",
        name: "[#1021] : system-tests: modify QueueTest#testScaledown.12",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-401.7","ENTMQMAAS-415.13"],
          startTime: "2018-03-27T17:36:41.000Z",
          endTime: "2018-03-27T21:49:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739499,
          code: "ENTMQMAAS-418.11",
        name: "[#1022] : System-tests: March list of disabled tests.11",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-417.12"],
          startTime: "2018-03-27T21:49:21.000Z",
          endTime: "2018-03-28T02:02:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739523,
          code: "ENTMQMAAS-420.10",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....10",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-418.11"],
          startTime: "2018-03-28T02:02:01.000Z",
          endTime: "2018-03-28T06:14:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739530,
          code: "ENTMQMAAS-430.9",
        name: "[#1032] : system-tests: create new test for replace single address-space.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-416.7","ENTMQMAAS-420.10"],
          startTime: "2018-03-28T06:14:41.000Z",
          endTime: "2018-03-28T10:27:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739532,
          code: "ENTMQMAAS-432.9",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-430.9"],
          startTime: "2018-03-28T10:27:21.000Z",
          endTime: "2018-03-28T14:40:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740685,
          code: "ENTMQMAAS-449.5",
        name: "[#1074] : console: \"Results\" value is not updated after addresses are removed.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-432.9"],
          startTime: "2018-03-28T14:40:01.000Z",
          endTime: "2018-03-28T18:52:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741776,
          code: "ENTMQMAAS-454.1",
        name: "[#1103] : mqtt (standard-space): interoperability - send amqp, receive mqtt doesn't work.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-421.5","ENTMQMAAS-412.6","ENTMQMAAS-449.5"],
          startTime: "2018-03-28T18:52:41.000Z",
          endTime: "2018-03-28T23:05:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741775,
          code: "ENTMQMAAS-453.1",
        name: "[#1102] : mqtt (standard-space): Message with retained flag set to true are not received by subscribers.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-454.1"],
          startTime: "2018-03-28T23:05:21.000Z",
          endTime: "2018-03-29T03:18:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12664044,
          code: "ENTMQMAAS-4.12",
        name: "remove colocated routers.12",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-18T22:20:01.000Z",
          endTime: "2018-03-21T21:40:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12681079,
          code: "ENTMQMAAS-49.11",
        name: "providing way to monitor connection and link metrics.11",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-21T21:40:49.000Z",
          endTime: "2018-03-24T21:01:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691068,
          code: "ENTMQMAAS-50.10",
        name: "Release Messaging Images.10",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.21"],
          startTime: "2018-03-24T21:01:37.000Z",
          endTime: "2018-03-27T20:22:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730681,
          code: "ENTMQMAAS-345.6",
        name: "[#757] : Oauth for console.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-27T20:22:25.000Z",
          endTime: "2018-03-30T19:43:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737785,
          code: "ENTMQMAAS-407.3",
        name: "[#973] : Configure per-address settings for each address created on broker.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-30T19:43:13.000Z",
          endTime: "2018-04-02T19:04:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12664144,
          code: "ENTMQMAAS-4.13",
        name: "remove colocated routers.13",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-423.6","ENTMQMAAS-453.2","ENTMQMAAS-407.3"],
          startTime: "2018-04-02T19:04:01.000Z",
          endTime: "2018-04-02T21:07:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12681179,
          code: "ENTMQMAAS-49.12",
        name: "providing way to monitor connection and link metrics.12",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-4.13"],
          startTime: "2018-04-02T21:07:01.000Z",
          endTime: "2018-04-02T23:10:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691168,
          code: "ENTMQMAAS-50.11",
        name: "Release Messaging Images.11",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-50.10"],
          startTime: "2018-04-02T23:10:01.000Z",
          endTime: "2018-04-03T01:13:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737885,
          code: "ENTMQMAAS-407.4",
        name: "[#973] : Configure per-address settings for each address created on broker.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-49.12"],
          startTime: "2018-04-03T01:13:01.000Z",
          endTime: "2018-04-03T03:16:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723577,
          code: "ENTMQMAAS-302.27",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.27",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-338.7"],
          startTime: "2018-03-29T03:49:01.000Z",
          endTime: "2018-03-29T20:53:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723574,
          code: "ENTMQMAAS-300.27",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.27",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-29T20:53:01.000Z",
          endTime: "2018-03-30T13:57:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738421,
          code: "ENTMQMAAS-397.10",
        name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).10",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.24","ENTMQMAAS-344.7","ENTMQMAAS-300.27"],
          startTime: "2018-03-30T13:57:01.000Z",
          endTime: "2018-03-31T07:01:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739114,
          code: "ENTMQMAAS-416.8",
        name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-31T07:01:01.000Z",
          endTime: "2018-04-01T00:05:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739143,
          code: "ENTMQMAAS-421.6",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-01T00:05:01.000Z",
          endTime: "2018-04-01T17:09:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739206,
          code: "ENTMQMAAS-423.6",
        name: "[#1027] : System-tests: create new test fo REST API - PUT | /v1/addresses/myspace/:name.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-01T17:09:01.000Z",
          endTime: "2018-04-02T10:13:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742376,
          code: "ENTMQMAAS-455.1",
        name: "[#1115] : New system-tests for websocket.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-02T10:13:01.000Z",
          endTime: "2018-04-03T03:17:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692734,
          code: "ENTMQMAAS-51.21",
        name: "Create product build artifacts.21",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.20"],
          startTime: "2018-03-21T03:55:01.000Z",
          endTime: "2018-03-22T05:51:50.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692736,
          code: "ENTMQMAAS-53.21",
        name: "Setup CI for product repositories.21",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.21"],
          startTime: "2018-03-22T05:51:51.000Z",
          endTime: "2018-03-23T07:48:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692735,
          code: "ENTMQMAAS-52.21",
        name: "Create copy of upstream repositories.21",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.21"],
          startTime: "2018-03-23T07:48:41.000Z",
          endTime: "2018-03-24T09:45:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12727385,
          code: "ENTMQMAAS-323.18",
        name: "Creating and deleting addresses.18",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-346.5","ENTMQMAAS-398.8"],
          startTime: "2018-03-24T09:45:31.000Z",
          endTime: "2018-03-25T11:42:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731783,
          code: "ENTMQMAAS-347.17",
        name: "[#759] : Delegate from keycloak to OpenShift Pro.17",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-25T11:42:21.000Z",
          endTime: "2018-03-26T13:39:10.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738162,
          code: "ENTMQMAAS-401.7",
        name: "[#693] : Status check for pooled queues is true even if address is not created.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-26T13:39:11.000Z",
          endTime: "2018-03-27T15:36:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738500,
          code: "ENTMQMAAS-412.6",
        name: "[#1001] : Automatically create authorization groups in keycloak.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-27T15:36:01.000Z",
          endTime: "2018-03-28T17:32:50.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738510,
          code: "ENTMQMAAS-413.5",
        name: "[#1009] : Make resync interval in controllers configurable.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-28T17:32:51.000Z",
          endTime: "2018-03-29T19:29:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738511,
          code: "ENTMQMAAS-414.5",
        name: "[#1011] : Separata status check from controller resync.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-29T19:29:41.000Z",
          endTime: "2018-03-30T21:26:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740006,
          code: "ENTMQMAAS-435.4",
        name: "[#1017] : Events sent to address of type queue not delivered after a while.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-30T21:26:31.000Z",
          endTime: "2018-03-31T23:23:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740488,
          code: "ENTMQMAAS-450.2",
        name: "[#1079] : standard-controller: is trying to connect to router which was already killed.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-31T23:23:21.000Z",
          endTime: "2018-04-02T01:20:10.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740675,
          code: "ENTMQMAAS-452.1",
        name: "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-02T01:20:11.000Z",
          endTime: "2018-04-03T03:17:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724214,
          code: "ENTMQMAAS-309.27",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.27",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-29T03:18:01.000Z",
          endTime: "2018-03-29T12:33:18.461Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725474,
          code: "ENTMQMAAS-314.26",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.26",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.27"],
          startTime: "2018-03-29T12:33:19.461Z",
          endTime: "2018-03-29T21:48:36.922Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725688,
          code: "ENTMQMAAS-316.24",
        name: "[#604] : Address-controller: PUT method is not implemented.24",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.27","ENTMQMAAS-314.26"],
          startTime: "2018-03-29T21:48:37.923Z",
          endTime: "2018-03-30T07:03:55.384Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739536,
          code: "ENTMQMAAS-415.14",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.14",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-423.5","ENTMQMAAS-453.1","ENTMQMAAS-413.5"],
          startTime: "2018-03-30T07:03:56.384Z",
          endTime: "2018-03-30T16:19:13.845Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739669,
          code: "ENTMQMAAS-417.13",
        name: "[#1021] : system-tests: modify QueueTest#testScaledown.13",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-415.14"],
          startTime: "2018-03-30T16:19:14.846Z",
          endTime: "2018-03-31T01:34:32.307Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739599,
          code: "ENTMQMAAS-418.12",
        name: "[#1022] : System-tests: March list of disabled tests.12",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-414.5","ENTMQMAAS-417.13"],
          startTime: "2018-03-31T01:34:33.307Z",
          endTime: "2018-03-31T10:49:50.768Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739623,
          code: "ENTMQMAAS-420.11",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....11",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-418.12"],
          startTime: "2018-03-31T10:49:51.769Z",
          endTime: "2018-03-31T20:05:09.230Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739630,
          code: "ENTMQMAAS-430.10",
        name: "[#1032] : system-tests: create new test for replace single address-space.10",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-420.11"],
          startTime: "2018-03-31T20:05:10.230Z",
          endTime: "2018-04-01T05:20:27.691Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739632,
          code: "ENTMQMAAS-432.10",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .10",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-435.4","ENTMQMAAS-416.8","ENTMQMAAS-430.10"],
          startTime: "2018-04-01T05:20:28.692Z",
          endTime: "2018-04-01T14:35:46.153Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740785,
          code: "ENTMQMAAS-449.6",
        name: "[#1074] : console: \"Results\" value is not updated after addresses are removed.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-432.10"],
          startTime: "2018-04-01T14:35:47.153Z",
          endTime: "2018-04-01T23:51:04.614Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741876,
          code: "ENTMQMAAS-454.2",
        name: "[#1103] : mqtt (standard-space): interoperability - send amqp, receive mqtt doesn't work.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-421.6","ENTMQMAAS-449.6"],
          startTime: "2018-04-01T23:51:05.615Z",
          endTime: "2018-04-02T09:06:23.076Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741875,
          code: "ENTMQMAAS-453.2",
        name: "[#1102] : mqtt (standard-space): Message with retained flag set to true are not received by subscribers.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-450.2","ENTMQMAAS-454.2"],
          startTime: "2018-04-02T09:06:24.076Z",
          endTime: "2018-04-02T18:21:41.537Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742377,
          code: "ENTMQMAAS-456.1",
        name: "[#1116] : system-tests: extend MQTT tests about testing \"will\" functionality.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-02T18:21:42.538Z",
          endTime: "2018-04-03T03:36:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724314,
          code: "ENTMQMAAS-309.28",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.28",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-353.7"],
          startTime: "2018-04-03T03:37:01.000Z",
          endTime: "2018-04-03T04:39:55.714Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725574,
          code: "ENTMQMAAS-314.27",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.27",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.28"],
          startTime: "2018-04-03T04:39:56.714Z",
          endTime: "2018-04-03T05:42:51.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725788,
          code: "ENTMQMAAS-316.25",
        name: "[#604] : Address-controller: PUT method is not implemented.25",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.28","ENTMQMAAS-314.27"],
          startTime: "2018-04-03T05:42:52.428Z",
          endTime: "2018-04-03T06:45:47.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739636,
          code: "ENTMQMAAS-415.15",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.15",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-407.4","ENTMQMAAS-455.1","ENTMQMAAS-452.1","ENTMQMAAS-456.1"],
          startTime: "2018-04-03T06:45:48.142Z",
          endTime: "2018-04-03T07:48:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739769,
          code: "ENTMQMAAS-417.14",
        name: "[#1021] : system-tests: modify QueueTest#testScaledown.14",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-415.15"],
          startTime: "2018-04-03T07:48:43.857Z",
          endTime: "2018-04-03T08:51:38.571Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739699,
          code: "ENTMQMAAS-418.13",
        name: "[#1022] : System-tests: March list of disabled tests.13",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-417.14"],
          startTime: "2018-04-03T08:51:39.571Z",
          endTime: "2018-04-03T09:54:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739723,
          code: "ENTMQMAAS-420.12",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....12",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-418.13"],
          startTime: "2018-04-03T09:54:35.285Z",
          endTime: "2018-04-03T10:57:29.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739730,
          code: "ENTMQMAAS-430.11",
        name: "[#1032] : system-tests: create new test for replace single address-space.11",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-416.9","ENTMQMAAS-420.12"],
          startTime: "2018-04-03T10:57:31.000Z",
          endTime: "2018-04-03T12:00:25.714Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739732,
          code: "ENTMQMAAS-432.11",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .11",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-430.11"],
          startTime: "2018-04-03T12:00:26.714Z",
          endTime: "2018-04-03T13:03:21.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740885,
          code: "ENTMQMAAS-449.7",
        name: "[#1074] : console: \"Results\" value is not updated after addresses are removed.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-421.7","ENTMQMAAS-432.11"],
          startTime: "2018-04-03T13:03:22.428Z",
          endTime: "2018-04-03T14:06:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741976,
          code: "ENTMQMAAS-454.3",
        name: "[#1103] : mqtt (standard-space): interoperability - send amqp, receive mqtt doesn't work.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-449.7"],
          startTime: "2018-04-03T14:06:18.142Z",
          endTime: "2018-04-03T15:09:12.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741975,
          code: "ENTMQMAAS-453.3",
        name: "[#1102] : mqtt (standard-space): Message with retained flag set to true are not received by subscribers.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-423.7","ENTMQMAAS-454.3"],
          startTime: "2018-04-03T15:09:13.857Z",
          endTime: "2018-04-03T16:12:08.571Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742477,
          code: "ENTMQMAAS-456.2",
        name: "[#1116] : system-tests: extend MQTT tests about testing \"will\" functionality.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-453.3"],
          startTime: "2018-04-03T16:12:09.571Z",
          endTime: "2018-04-03T17:15:04.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742684,
          code: "ENTMQMAAS-466.1",
        name: "[#1123] :  system-tests: new test for auto scaleup after manual scaledown.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-455.2","ENTMQMAAS-456.2"],
          startTime: "2018-04-03T17:15:05.285Z",
          endTime: "2018-04-03T18:17:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723677,
          code: "ENTMQMAAS-302.28",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.28",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-04-03T03:17:01.000Z",
          endTime: "2018-04-03T05:11:07.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723674,
          code: "ENTMQMAAS-300.28",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.28",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-04-03T05:11:08.500Z",
          endTime: "2018-04-03T07:05:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738521,
          code: "ENTMQMAAS-397.11",
        name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).11",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.25","ENTMQMAAS-300.28"],
          startTime: "2018-04-03T07:05:16.000Z",
          endTime: "2018-04-03T08:59:22.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739214,
          code: "ENTMQMAAS-416.9",
        name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-03T08:59:23.500Z",
          endTime: "2018-04-03T10:53:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739243,
          code: "ENTMQMAAS-421.7",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-03T10:53:31.000Z",
          endTime: "2018-04-03T12:47:37.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739306,
          code: "ENTMQMAAS-423.7",
        name: "[#1027] : System-tests: create new test fo REST API - PUT | /v1/addresses/myspace/:name.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-03T12:47:38.500Z",
          endTime: "2018-04-03T14:41:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742476,
          code: "ENTMQMAAS-455.2",
        name: "[#1115] : New system-tests for websocket.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-03T14:41:46.000Z",
          endTime: "2018-04-03T16:35:52.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743375,
          code: "ENTMQMAAS-461.8",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-03T16:35:53.500Z",
          endTime: "2018-04-03T18:30:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730774,
          code: "ENTMQMAAS-338.7",
        name: "[#750] : Handle scaledown of queues and topics at deploy time.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.23","ENTMQMAAS-398.9","ENTMQMAAS-366.5"],
          startTime: "2018-03-27T19:01:01.000Z",
          endTime: "2018-03-29T03:35:50.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730780,
          code: "ENTMQMAAS-344.7",
        name: "[#756] : Monitoring for operator(us): prometheus for alerting and metrics, log aggregation/search for logs.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-29T03:35:51.000Z",
          endTime: "2018-03-30T12:10:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730788,
          code: "ENTMQMAAS-352.7",
        name: "[#764] : Some level of metrics on address controller / standard controller to show prometheus metrics.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-30T12:10:41.000Z",
          endTime: "2018-03-31T20:45:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730789,
          code: "ENTMQMAAS-353.7",
        name: "[#765] : Changes to service broker (service type is just address space, different plans are supported. See also point above about how to tie plans offered to plans specified) .7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-345.6","ENTMQMAAS-397.10","ENTMQMAAS-352.7"],
          startTime: "2018-03-31T20:45:31.000Z",
          endTime: "2018-04-02T05:20:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730778,
          code: "ENTMQMAAS-342.7",
        name: "[#754] : Deploying keycloak in an HA configuration.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-04-02T05:20:21.000Z",
          endTime: "2018-04-03T13:55:10.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730749,
          code: "ENTMQMAAS-366.6",
        name: "[#778] : Integrate PUMBA into our testing environment? (task already exists for that, from Ulf) .6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-04-03T13:55:11.000Z",
          endTime: "2018-04-04T22:30:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724414,
          code: "ENTMQMAAS-309.29",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.29",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-397.11","ENTMQMAAS-342.7"],
          startTime: "2018-04-03T18:31:01.000Z",
          endTime: "2018-04-04T01:34:53.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725674,
          code: "ENTMQMAAS-314.28",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.28",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.29"],
          startTime: "2018-04-04T01:34:54.333Z",
          endTime: "2018-04-04T08:38:46.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725888,
          code: "ENTMQMAAS-316.26",
        name: "[#604] : Address-controller: PUT method is not implemented.26",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.28"],
          startTime: "2018-04-04T08:38:47.666Z",
          endTime: "2018-04-04T15:42:39.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739736,
          code: "ENTMQMAAS-415.16",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.16",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-466.1","ENTMQMAAS-461.8"],
          startTime: "2018-04-04T15:42:41.000Z",
          endTime: "2018-04-04T22:46:33.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739869,
          code: "ENTMQMAAS-417.15",
        name: "[#1021] : system-tests: modify QueueTest#testScaledown.15",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-415.16"],
          startTime: "2018-04-04T22:46:34.333Z",
          endTime: "2018-04-05T05:50:26.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739799,
          code: "ENTMQMAAS-418.14",
        name: "[#1022] : System-tests: March list of disabled tests.14",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-417.15"],
          startTime: "2018-04-05T05:50:27.666Z",
          endTime: "2018-04-05T12:54:19.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739823,
          code: "ENTMQMAAS-420.13",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....13",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-418.14"],
          startTime: "2018-04-05T12:54:21.000Z",
          endTime: "2018-04-05T19:58:13.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739830,
          code: "ENTMQMAAS-430.12",
        name: "[#1032] : system-tests: create new test for replace single address-space.12",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-420.13"],
          startTime: "2018-04-05T19:58:14.333Z",
          endTime: "2018-04-06T03:02:06.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739832,
          code: "ENTMQMAAS-432.12",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .12",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-430.12"],
          startTime: "2018-04-06T03:02:07.666Z",
          endTime: "2018-04-06T10:05:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740985,
          code: "ENTMQMAAS-449.8",
        name: "[#1074] : console: \"Results\" value is not updated after addresses are removed.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-432.12"],
          startTime: "2018-04-06T10:06:01.000Z",
          endTime: "2018-04-06T17:09:53.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742076,
          code: "ENTMQMAAS-454.4",
        name: "[#1103] : mqtt (standard-space): interoperability - send amqp, receive mqtt doesn't work.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-449.8"],
          startTime: "2018-04-06T17:09:54.333Z",
          endTime: "2018-04-07T00:13:46.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742075,
          code: "ENTMQMAAS-453.4",
        name: "[#1102] : mqtt (standard-space): Message with retained flag set to true are not received by subscribers.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-454.4"],
          startTime: "2018-04-07T00:13:47.666Z",
          endTime: "2018-04-07T07:17:39.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742577,
          code: "ENTMQMAAS-456.3",
        name: "[#1116] : system-tests: extend MQTT tests about testing \"will\" functionality.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-453.4"],
          startTime: "2018-04-07T07:17:41.000Z",
          endTime: "2018-04-07T14:21:33.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742784,
          code: "ENTMQMAAS-466.2",
        name: "[#1123] :  system-tests: new test for auto scaleup after manual scaledown.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-456.3"],
          startTime: "2018-04-07T14:21:34.333Z",
          endTime: "2018-04-07T21:25:26.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742777,
          code: "ENTMQMAAS-469.1",
        name: "[#1124] : system-tests: review of list of disabled tests from March and create new one for April.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-466.2"],
          startTime: "2018-04-07T21:25:27.666Z",
          endTime: "2018-04-08T04:29:19.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742778,
          code: "ENTMQMAAS-470.1",
        name: "system-tests: unclosed archives exception in Jenkins when core-dump is stored.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-469.1"],
          startTime: "2018-04-08T04:29:21.000Z",
          endTime: "2018-04-08T11:33:13.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742779,
          code: "ENTMQMAAS-471.1",
        name: "[#1128] : system-tests: Remove logs collecting for pods/statefull-sets.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-4.14","ENTMQMAAS-470.1"],
          startTime: "2018-04-08T11:33:14.333Z",
          endTime: "2018-04-08T18:37:06.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742783,
          code: "ENTMQMAAS-475.1",
        name: "[#1125] : system-tests: Rewrite tests to use Dependency injection.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-416.10","ENTMQMAAS-471.1"],
          startTime: "2018-04-08T18:37:07.666Z",
          endTime: "2018-04-09T01:40:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724514,
          code: "ENTMQMAAS-309.30",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.30",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-04-09T01:41:01.000Z",
          endTime: "2018-04-09T02:56:44.210Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725774,
          code: "ENTMQMAAS-314.29",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.29",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-323.19","ENTMQMAAS-309.30"],
          startTime: "2018-04-09T02:56:45.210Z",
          endTime: "2018-04-09T04:12:28.420Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725988,
          code: "ENTMQMAAS-316.27",
        name: "[#604] : Address-controller: PUT method is not implemented.27",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.29"],
          startTime: "2018-04-09T04:12:29.421Z",
          endTime: "2018-04-09T05:28:12.631Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739836,
          code: "ENTMQMAAS-415.17",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.17",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-475.1"],
          startTime: "2018-04-09T05:28:13.631Z",
          endTime: "2018-04-09T06:43:56.841Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739969,
          code: "ENTMQMAAS-417.16",
        name: "[#1021] : system-tests: modify QueueTest#testScaledown.16",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-415.17"],
          startTime: "2018-04-09T06:43:57.842Z",
          endTime: "2018-04-09T07:59:41.052Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739899,
          code: "ENTMQMAAS-418.15",
        name: "[#1022] : System-tests: March list of disabled tests.15",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-417.16"],
          startTime: "2018-04-09T07:59:42.052Z",
          endTime: "2018-04-09T09:15:25.262Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739923,
          code: "ENTMQMAAS-420.14",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....14",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-418.15"],
          startTime: "2018-04-09T09:15:26.263Z",
          endTime: "2018-04-09T10:31:09.473Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739930,
          code: "ENTMQMAAS-430.13",
        name: "[#1032] : system-tests: create new test for replace single address-space.13",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-420.14"],
          startTime: "2018-04-09T10:31:10.473Z",
          endTime: "2018-04-09T11:46:53.683Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739932,
          code: "ENTMQMAAS-432.13",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .13",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-430.13"],
          startTime: "2018-04-09T11:46:54.684Z",
          endTime: "2018-04-09T13:02:37.894Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741085,
          code: "ENTMQMAAS-449.9",
        name: "[#1074] : console: \"Results\" value is not updated after addresses are removed.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-432.13"],
          startTime: "2018-04-09T13:02:38.894Z",
          endTime: "2018-04-09T14:18:22.104Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742176,
          code: "ENTMQMAAS-454.5",
        name: "[#1103] : mqtt (standard-space): interoperability - send amqp, receive mqtt doesn't work.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-449.9"],
          startTime: "2018-04-09T14:18:23.105Z",
          endTime: "2018-04-09T15:34:06.315Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742175,
          code: "ENTMQMAAS-453.5",
        name: "[#1102] : mqtt (standard-space): Message with retained flag set to true are not received by subscribers.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-454.5"],
          startTime: "2018-04-09T15:34:07.315Z",
          endTime: "2018-04-09T16:49:50.525Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742677,
          code: "ENTMQMAAS-456.4",
        name: "[#1116] : system-tests: extend MQTT tests about testing \"will\" functionality.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-453.5"],
          startTime: "2018-04-09T16:49:51.526Z",
          endTime: "2018-04-09T18:05:34.736Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742884,
          code: "ENTMQMAAS-466.3",
        name: "[#1123] :  system-tests: new test for auto scaleup after manual scaledown.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-456.4"],
          startTime: "2018-04-09T18:05:35.736Z",
          endTime: "2018-04-09T19:21:18.946Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742877,
          code: "ENTMQMAAS-469.2",
        name: "[#1124] : system-tests: review of list of disabled tests from March and create new one for April.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-466.3"],
          startTime: "2018-04-09T19:21:19.947Z",
          endTime: "2018-04-09T20:37:03.157Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742878,
          code: "ENTMQMAAS-470.2",
        name: "system-tests: unclosed archives exception in Jenkins when core-dump is stored.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-469.2"],
          startTime: "2018-04-09T20:37:04.157Z",
          endTime: "2018-04-09T21:52:47.367Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742879,
          code: "ENTMQMAAS-471.2",
        name: "[#1128] : system-tests: Remove logs collecting for pods/statefull-sets.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-470.2"],
          startTime: "2018-04-09T21:52:48.368Z",
          endTime: "2018-04-09T23:08:31.578Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742883,
          code: "ENTMQMAAS-475.2",
        name: "[#1125] : system-tests: Rewrite tests to use Dependency injection.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-471.2"],
          startTime: "2018-04-09T23:08:32.578Z",
          endTime: "2018-04-10T00:24:15.788Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744038,
          code: "ENTMQMAAS-478.1",
        name: "[#1134] : resource defragmentation for pooled addresses doesn't work.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-421.9","ENTMQMAAS-475.2"],
          startTime: "2018-04-10T00:24:16.789Z",
          endTime: "2018-04-10T01:39:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724614,
          code: "ENTMQMAAS-309.31",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.31",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.27"],
          startTime: "2018-04-10T01:40:01.000Z",
          endTime: "2018-04-10T04:58:54.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725874,
          code: "ENTMQMAAS-314.30",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.30",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.31"],
          startTime: "2018-04-10T04:58:55.000Z",
          endTime: "2018-04-10T08:17:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726088,
          code: "ENTMQMAAS-316.28",
        name: "[#604] : Address-controller: PUT method is not implemented.28",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-344.8","ENTMQMAAS-314.30"],
          startTime: "2018-04-10T08:17:49.000Z",
          endTime: "2018-04-10T11:36:42.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739936,
          code: "ENTMQMAAS-415.18",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.18",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-478.1"],
          startTime: "2018-04-10T11:36:43.000Z",
          endTime: "2018-04-10T14:55:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740069,
          code: "ENTMQMAAS-417.17",
        name: "[#1021] : system-tests: modify QueueTest#testScaledown.17",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-415.18"],
          startTime: "2018-04-10T14:55:37.000Z",
          endTime: "2018-04-10T18:14:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739999,
          code: "ENTMQMAAS-418.16",
        name: "[#1022] : System-tests: March list of disabled tests.16",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-417.17"],
          startTime: "2018-04-10T18:14:31.000Z",
          endTime: "2018-04-10T21:33:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740023,
          code: "ENTMQMAAS-420.15",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....15",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-418.16"],
          startTime: "2018-04-10T21:33:25.000Z",
          endTime: "2018-04-11T00:52:18.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740030,
          code: "ENTMQMAAS-430.14",
        name: "[#1032] : system-tests: create new test for replace single address-space.14",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-420.15"],
          startTime: "2018-04-11T00:52:19.000Z",
          endTime: "2018-04-11T04:11:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740032,
          code: "ENTMQMAAS-432.14",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .14",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-430.14"],
          startTime: "2018-04-11T04:11:13.000Z",
          endTime: "2018-04-11T07:30:06.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741185,
          code: "ENTMQMAAS-449.10",
        name: "[#1074] : console: \"Results\" value is not updated after addresses are removed.10",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-423.8","ENTMQMAAS-432.14"],
          startTime: "2018-04-11T07:30:07.000Z",
          endTime: "2018-04-11T10:49:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742276,
          code: "ENTMQMAAS-454.6",
        name: "[#1103] : mqtt (standard-space): interoperability - send amqp, receive mqtt doesn't work.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-449.10"],
          startTime: "2018-04-11T10:49:01.000Z",
          endTime: "2018-04-11T14:07:54.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742275,
          code: "ENTMQMAAS-453.6",
        name: "[#1102] : mqtt (standard-space): Message with retained flag set to true are not received by subscribers.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-454.6"],
          startTime: "2018-04-11T14:07:55.000Z",
          endTime: "2018-04-11T17:26:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742777,
          code: "ENTMQMAAS-456.5",
        name: "[#1116] : system-tests: extend MQTT tests about testing \"will\" functionality.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-453.6"],
          startTime: "2018-04-11T17:26:49.000Z",
          endTime: "2018-04-11T20:45:42.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742984,
          code: "ENTMQMAAS-466.4",
        name: "[#1123] :  system-tests: new test for auto scaleup after manual scaledown.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-456.5"],
          startTime: "2018-04-11T20:45:43.000Z",
          endTime: "2018-04-12T00:04:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742977,
          code: "ENTMQMAAS-469.3",
        name: "[#1124] : system-tests: review of list of disabled tests from March and create new one for April.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-466.4"],
          startTime: "2018-04-12T00:04:37.000Z",
          endTime: "2018-04-12T03:23:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742978,
          code: "ENTMQMAAS-470.3",
        name: "system-tests: unclosed archives exception in Jenkins when core-dump is stored.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-401.8","ENTMQMAAS-469.3"],
          startTime: "2018-04-12T03:23:31.000Z",
          endTime: "2018-04-12T06:42:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742979,
          code: "ENTMQMAAS-471.3",
        name: "[#1128] : system-tests: Remove logs collecting for pods/statefull-sets.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-470.3"],
          startTime: "2018-04-12T06:42:25.000Z",
          endTime: "2018-04-12T10:01:18.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742983,
          code: "ENTMQMAAS-475.3",
        name: "[#1125] : system-tests: Rewrite tests to use Dependency injection.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-471.3"],
          startTime: "2018-04-12T10:01:19.000Z",
          endTime: "2018-04-12T13:20:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744138,
          code: "ENTMQMAAS-478.2",
        name: "[#1134] : resource defragmentation for pooled addresses doesn't work.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-455.3","ENTMQMAAS-475.3"],
          startTime: "2018-04-12T13:20:13.000Z",
          endTime: "2018-04-12T16:39:06.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744332,
          code: "ENTMQMAAS-480.1",
        name: "[#1136] : Auto scale down doesn't work when plan of address is changed.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-478.2"],
          startTime: "2018-04-12T16:39:07.000Z",
          endTime: "2018-04-12T19:58:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723777,
          code: "ENTMQMAAS-302.29",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.29",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-04-03T18:30:01.000Z",
          endTime: "2018-04-05T00:21:54.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723774,
          code: "ENTMQMAAS-300.29",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.29",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.26","ENTMQMAAS-366.6","ENTMQMAAS-302.29"],
          startTime: "2018-04-05T00:21:55.000Z",
          endTime: "2018-04-06T06:13:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738621,
          code: "ENTMQMAAS-397.12",
        name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).12",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.29"],
          startTime: "2018-04-06T06:13:49.000Z",
          endTime: "2018-04-07T12:05:42.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739314,
          code: "ENTMQMAAS-416.10",
        name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.10",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-07T12:05:43.000Z",
          endTime: "2018-04-08T17:57:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739443,
          code: "ENTMQMAAS-421.9",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-08T17:57:37.000Z",
          endTime: "2018-04-09T23:49:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739406,
          code: "ENTMQMAAS-423.8",
        name: "[#1027] : System-tests: create new test fo REST API - PUT | /v1/addresses/myspace/:name.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-09T23:49:31.000Z",
          endTime: "2018-04-11T05:41:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742576,
          code: "ENTMQMAAS-455.3",
        name: "[#1115] : New system-tests for websocket.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-11T05:41:25.000Z",
          endTime: "2018-04-12T11:33:18.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743575,
          code: "ENTMQMAAS-461.10",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.10",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-12T11:33:19.000Z",
          endTime: "2018-04-13T17:25:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742782,
          code: "ENTMQMAAS-474.1",
        name: "[#1126] : system-tests: use multi-asserts instead of single asserts.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-13T17:25:13.000Z",
          endTime: "2018-04-14T23:17:06.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742780,
          code: "ENTMQMAAS-472.1",
        name: "[#1127] : system-tests: Use ENUM instead of string tags.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-14T23:17:07.000Z",
          endTime: "2018-04-16T05:09:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724714,
          code: "ENTMQMAAS-309.32",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.32",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.28","ENTMQMAAS-347.18","ENTMQMAAS-328.6"],
          startTime: "2018-04-12T19:58:01.000Z",
          endTime: "2018-04-13T01:18:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725974,
          code: "ENTMQMAAS-314.31",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.31",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-352.8","ENTMQMAAS-309.32"],
          startTime: "2018-04-13T01:18:31.000Z",
          endTime: "2018-04-13T06:39:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726188,
          code: "ENTMQMAAS-316.29",
        name: "[#604] : Address-controller: PUT method is not implemented.29",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.31"],
          startTime: "2018-04-13T06:39:01.000Z",
          endTime: "2018-04-13T11:59:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740036,
          code: "ENTMQMAAS-415.19",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.19",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-480.1"],
          startTime: "2018-04-13T11:59:31.000Z",
          endTime: "2018-04-13T17:20:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740099,
          code: "ENTMQMAAS-418.17",
        name: "[#1022] : System-tests: March list of disabled tests.17",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-412.7","ENTMQMAAS-415.19"],
          startTime: "2018-04-13T17:20:01.000Z",
          endTime: "2018-04-13T22:40:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740123,
          code: "ENTMQMAAS-420.16",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....16",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-461.10","ENTMQMAAS-49.13","ENTMQMAAS-418.17"],
          startTime: "2018-04-13T22:40:31.000Z",
          endTime: "2018-04-14T04:01:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740130,
          code: "ENTMQMAAS-430.15",
        name: "[#1032] : system-tests: create new test for replace single address-space.15",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-420.16"],
          startTime: "2018-04-14T04:01:01.000Z",
          endTime: "2018-04-14T09:21:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740132,
          code: "ENTMQMAAS-432.15",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .15",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-430.15"],
          startTime: "2018-04-14T09:21:31.000Z",
          endTime: "2018-04-14T14:42:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741285,
          code: "ENTMQMAAS-449.11",
        name: "[#1074] : console: \"Results\" value is not updated after addresses are removed.11",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-432.15"],
          startTime: "2018-04-14T14:42:01.000Z",
          endTime: "2018-04-14T20:02:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742376,
          code: "ENTMQMAAS-454.7",
        name: "[#1103] : mqtt (standard-space): interoperability - send amqp, receive mqtt doesn't work.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-449.11"],
          startTime: "2018-04-14T20:02:31.000Z",
          endTime: "2018-04-15T01:23:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742375,
          code: "ENTMQMAAS-453.7",
        name: "[#1102] : mqtt (standard-space): Message with retained flag set to true are not received by subscribers.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-474.1","ENTMQMAAS-413.6","ENTMQMAAS-454.7"],
          startTime: "2018-04-15T01:23:01.000Z",
          endTime: "2018-04-15T06:43:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742877,
          code: "ENTMQMAAS-456.6",
        name: "[#1116] : system-tests: extend MQTT tests about testing \"will\" functionality.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-453.7"],
          startTime: "2018-04-15T06:43:31.000Z",
          endTime: "2018-04-15T12:04:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743077,
          code: "ENTMQMAAS-469.4",
        name: "[#1124] : system-tests: review of list of disabled tests from March and create new one for April.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-456.6"],
          startTime: "2018-04-15T12:04:01.000Z",
          endTime: "2018-04-15T17:24:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743078,
          code: "ENTMQMAAS-470.4",
        name: "system-tests: unclosed archives exception in Jenkins when core-dump is stored.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-469.4"],
          startTime: "2018-04-15T17:24:31.000Z",
          endTime: "2018-04-15T22:45:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743079,
          code: "ENTMQMAAS-471.4",
        name: "[#1128] : system-tests: Remove logs collecting for pods/statefull-sets.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-470.4"],
          startTime: "2018-04-15T22:45:01.000Z",
          endTime: "2018-04-16T04:05:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743083,
          code: "ENTMQMAAS-475.4",
        name: "[#1125] : system-tests: Rewrite tests to use Dependency injection.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-471.4"],
          startTime: "2018-04-16T04:05:31.000Z",
          endTime: "2018-04-16T09:26:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744238,
          code: "ENTMQMAAS-478.3",
        name: "[#1134] : resource defragmentation for pooled addresses doesn't work.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-16T09:26:01.000Z",
          endTime: "2018-04-16T14:46:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744432,
          code: "ENTMQMAAS-480.2",
        name: "[#1136] : Auto scale down doesn't work when plan of address is changed.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-16T14:46:31.000Z",
          endTime: "2018-04-16T20:07:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723877,
          code: "ENTMQMAAS-302.30",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.30",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.29","ENTMQMAAS-353.8"],
          startTime: "2018-04-16T05:09:01.000Z",
          endTime: "2018-04-16T06:47:21.818Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723874,
          code: "ENTMQMAAS-300.30",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.30",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.30"],
          startTime: "2018-04-16T06:47:22.818Z",
          endTime: "2018-04-16T08:25:43.636Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738721,
          code: "ENTMQMAAS-397.13",
        name: "[#997] : system-tests: rewrite to junit5 2. step (reduce inheritance of TestBases).13",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.30"],
          startTime: "2018-04-16T08:25:44.636Z",
          endTime: "2018-04-16T10:04:05.454Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739414,
          code: "ENTMQMAAS-416.11",
        name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.11",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-472.1","ENTMQMAAS-475.4"],
          startTime: "2018-04-16T10:04:06.454Z",
          endTime: "2018-04-16T11:42:27.272Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739643,
          code: "ENTMQMAAS-421.11",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.11",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-416.11"],
          startTime: "2018-04-16T11:42:28.272Z",
          endTime: "2018-04-16T13:20:49.090Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739506,
          code: "ENTMQMAAS-423.9",
        name: "[#1027] : System-tests: create new test fo REST API - PUT | /v1/addresses/myspace/:name.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-414.6","ENTMQMAAS-421.11"],
          startTime: "2018-04-16T13:20:50.090Z",
          endTime: "2018-04-16T14:59:10.908Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742676,
          code: "ENTMQMAAS-455.4",
        name: "[#1115] : New system-tests for websocket.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-478.3","ENTMQMAAS-423.9"],
          startTime: "2018-04-16T14:59:11.909Z",
          endTime: "2018-04-16T16:37:32.727Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743775,
          code: "ENTMQMAAS-461.12",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.12",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-455.4"],
          startTime: "2018-04-16T16:37:33.727Z",
          endTime: "2018-04-16T18:15:54.545Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742882,
          code: "ENTMQMAAS-474.2",
        name: "[#1126] : system-tests: use multi-asserts instead of single asserts.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-461.12"],
          startTime: "2018-04-16T18:15:55.545Z",
          endTime: "2018-04-16T19:54:16.363Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742880,
          code: "ENTMQMAAS-472.2",
        name: "[#1127] : system-tests: Use ENUM instead of string tags.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-474.2"],
          startTime: "2018-04-16T19:54:17.363Z",
          endTime: "2018-04-16T21:32:38.181Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12745373,
          code: "ENTMQMAAS-482.1",
        name: "[#1145] : Standard: allow send/receive messages over WebSocket.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-480.2","ENTMQMAAS-472.2"],
          startTime: "2018-04-16T21:32:39.181Z",
          endTime: "2018-04-16T23:10:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723977,
          code: "ENTMQMAAS-302.31",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.31",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-397.13"],
          startTime: "2018-04-16T23:13:01.000Z",
          endTime: "2018-04-17T01:20:13.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12723974,
          code: "ENTMQMAAS-300.31",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.31",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.31"],
          startTime: "2018-04-17T01:20:14.333Z",
          endTime: "2018-04-17T03:27:26.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739514,
          code: "ENTMQMAAS-416.12",
        name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.12",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-482.1"],
          startTime: "2018-04-17T03:27:27.666Z",
          endTime: "2018-04-17T05:34:39.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739843,
          code: "ENTMQMAAS-421.13",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.13",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-416.12"],
          startTime: "2018-04-17T05:34:41.000Z",
          endTime: "2018-04-17T07:41:53.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739606,
          code: "ENTMQMAAS-423.10",
        name: "[#1027] : System-tests: create new test fo REST API - PUT | /v1/addresses/myspace/:name.10",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-421.13"],
          startTime: "2018-04-17T07:41:54.333Z",
          endTime: "2018-04-17T09:49:06.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742776,
          code: "ENTMQMAAS-455.5",
        name: "[#1115] : New system-tests for websocket.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-423.10"],
          startTime: "2018-04-17T09:49:07.666Z",
          endTime: "2018-04-17T11:56:19.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743975,
          code: "ENTMQMAAS-461.14",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.14",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-455.5"],
          startTime: "2018-04-17T11:56:21.000Z",
          endTime: "2018-04-17T14:03:33.333Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742980,
          code: "ENTMQMAAS-472.3",
        name: "[#1127] : system-tests: Use ENUM instead of string tags.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-461.14"],
          startTime: "2018-04-17T14:03:34.333Z",
          endTime: "2018-04-17T16:10:46.666Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12745473,
          code: "ENTMQMAAS-482.2",
        name: "[#1145] : Standard: allow send/receive messages over WebSocket.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-472.3"],
          startTime: "2018-04-17T16:10:47.666Z",
          endTime: "2018-04-17T18:17:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724077,
          code: "ENTMQMAAS-302.32",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.32",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-04-17T18:18:01.000Z",
          endTime: "2018-04-18T00:19:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724074,
          code: "ENTMQMAAS-300.32",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.32",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.30","ENTMQMAAS-302.32"],
          startTime: "2018-04-18T00:19:16.000Z",
          endTime: "2018-04-18T06:20:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739614,
          code: "ENTMQMAAS-416.13",
        name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.13",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-435.5"],
          startTime: "2018-04-18T06:20:31.000Z",
          endTime: "2018-04-18T12:21:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740043,
          code: "ENTMQMAAS-421.15",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.15",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-416.13"],
          startTime: "2018-04-18T12:21:46.000Z",
          endTime: "2018-04-18T18:23:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739706,
          code: "ENTMQMAAS-423.11",
        name: "[#1027] : System-tests: create new test fo REST API - PUT | /v1/addresses/myspace/:name.11",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-418.18","ENTMQMAAS-421.15"],
          startTime: "2018-04-18T18:23:01.000Z",
          endTime: "2018-04-19T00:24:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742876,
          code: "ENTMQMAAS-455.6",
        name: "[#1115] : New system-tests for websocket.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-423.11"],
          startTime: "2018-04-19T00:24:16.000Z",
          endTime: "2018-04-19T06:25:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744175,
          code: "ENTMQMAAS-461.16",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.16",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-455.6"],
          startTime: "2018-04-19T06:25:31.000Z",
          endTime: "2018-04-19T12:26:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12745573,
          code: "ENTMQMAAS-482.3",
        name: "[#1145] : Standard: allow send/receive messages over WebSocket.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-430.16","ENTMQMAAS-450.3","ENTMQMAAS-461.16"],
          startTime: "2018-04-19T12:26:46.000Z",
          endTime: "2018-04-19T18:28:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724814,
          code: "ENTMQMAAS-309.33",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.33",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-04-16T20:07:01.000Z",
          endTime: "2018-04-17T04:56:45.882Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726074,
          code: "ENTMQMAAS-314.32",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.32",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.31","ENTMQMAAS-309.33"],
          startTime: "2018-04-17T04:56:46.882Z",
          endTime: "2018-04-17T13:46:31.764Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726288,
          code: "ENTMQMAAS-316.30",
        name: "[#604] : Address-controller: PUT method is not implemented.30",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.32"],
          startTime: "2018-04-17T13:46:32.764Z",
          endTime: "2018-04-17T22:36:17.646Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740136,
          code: "ENTMQMAAS-415.20",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.20",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-482.2"],
          startTime: "2018-04-17T22:36:18.647Z",
          endTime: "2018-04-18T07:26:03.529Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740199,
          code: "ENTMQMAAS-418.18",
        name: "[#1022] : System-tests: March list of disabled tests.18",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-415.20"],
          startTime: "2018-04-18T07:26:04.529Z",
          endTime: "2018-04-18T16:15:49.411Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740223,
          code: "ENTMQMAAS-420.17",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....17",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-18T16:15:50.411Z",
          endTime: "2018-04-19T01:05:35.293Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740230,
          code: "ENTMQMAAS-430.16",
        name: "[#1032] : system-tests: create new test for replace single address-space.16",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-420.17"],
          startTime: "2018-04-19T01:05:36.294Z",
          endTime: "2018-04-19T09:55:21.176Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740232,
          code: "ENTMQMAAS-432.16",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .16",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-19T09:55:22.176Z",
          endTime: "2018-04-19T18:45:07.058Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741385,
          code: "ENTMQMAAS-449.12",
        name: "[#1074] : console: \"Results\" value is not updated after addresses are removed.12",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-482.3","ENTMQMAAS-432.16"],
          startTime: "2018-04-19T18:45:08.058Z",
          endTime: "2018-04-20T03:34:52.940Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742476,
          code: "ENTMQMAAS-454.8",
        name: "[#1103] : mqtt (standard-space): interoperability - send amqp, receive mqtt doesn't work.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-449.12"],
          startTime: "2018-04-20T03:34:53.941Z",
          endTime: "2018-04-20T12:24:38.823Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742475,
          code: "ENTMQMAAS-453.8",
        name: "[#1102] : mqtt (standard-space): Message with retained flag set to true are not received by subscribers.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-454.8"],
          startTime: "2018-04-20T12:24:39.823Z",
          endTime: "2018-04-20T21:14:24.705Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742977,
          code: "ENTMQMAAS-456.7",
        name: "[#1116] : system-tests: extend MQTT tests about testing \"will\" functionality.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-453.8"],
          startTime: "2018-04-20T21:14:25.705Z",
          endTime: "2018-04-21T06:04:10.587Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743177,
          code: "ENTMQMAAS-469.5",
        name: "[#1124] : system-tests: review of list of disabled tests from March and create new one for April.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-452.2","ENTMQMAAS-456.7"],
          startTime: "2018-04-21T06:04:11.588Z",
          endTime: "2018-04-21T14:53:56.470Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743178,
          code: "ENTMQMAAS-470.5",
        name: "system-tests: unclosed archives exception in Jenkins when core-dump is stored.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-469.5"],
          startTime: "2018-04-21T14:53:57.470Z",
          endTime: "2018-04-21T23:43:42.352Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743183,
          code: "ENTMQMAAS-475.5",
        name: "[#1125] : system-tests: Rewrite tests to use Dependency injection.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-421.17","ENTMQMAAS-470.5"],
          startTime: "2018-04-21T23:43:43.352Z",
          endTime: "2018-04-22T08:33:28.234Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744338,
          code: "ENTMQMAAS-478.4",
        name: "[#1134] : resource defragmentation for pooled addresses doesn't work.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-475.5"],
          startTime: "2018-04-22T08:33:29.235Z",
          endTime: "2018-04-22T17:23:14.117Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744532,
          code: "ENTMQMAAS-480.3",
        name: "[#1136] : Auto scale down doesn't work when plan of address is changed.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-478.4"],
          startTime: "2018-04-22T17:23:15.117Z",
          endTime: "2018-04-23T02:12:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730874,
          code: "ENTMQMAAS-338.8",
        name: "[#750] : Handle scaledown of queues and topics at deploy time.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-04-04T22:30:01.000Z",
          endTime: "2018-04-07T13:56:08.571Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730880,
          code: "ENTMQMAAS-344.8",
        name: "[#756] : Monitoring for operator(us): prometheus for alerting and metrics, log aggregation/search for logs.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-04-07T13:56:09.571Z",
          endTime: "2018-04-10T05:22:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730888,
          code: "ENTMQMAAS-352.8",
        name: "[#764] : Some level of metrics on address controller / standard controller to show prometheus metrics.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-04-10T05:22:18.142Z",
          endTime: "2018-04-12T20:48:25.713Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730889,
          code: "ENTMQMAAS-353.8",
        name: "[#765] : Changes to service broker (service type is just address space, different plans are supported. See also point above about how to tie plans offered to plans specified) .8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-04-12T20:48:26.714Z",
          endTime: "2018-04-15T12:14:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730878,
          code: "ENTMQMAAS-342.8",
        name: "[#754] : Deploying keycloak in an HA configuration.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-04-15T12:14:35.285Z",
          endTime: "2018-04-18T03:40:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730849,
          code: "ENTMQMAAS-366.7",
        name: "[#778] : Integrate PUMBA into our testing environment? (task already exists for that, from Ulf) .7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-04-18T03:40:43.857Z",
          endTime: "2018-04-20T19:06:51.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743158,
          code: "ENTMQMAAS-477.1",
        name: "As a Tenant Admin I need to create addresses which can store a copy of all messages sent to a different address even when no consumer is connected.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-20T19:06:52.428Z",
          endTime: "2018-04-23T10:32:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724177,
          code: "ENTMQMAAS-302.33",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.33",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-342.8","ENTMQMAAS-300.32"],
          startTime: "2018-04-19T20:19:01.000Z",
          endTime: "2018-04-20T08:50:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724174,
          code: "ENTMQMAAS-300.33",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.33",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-302.33"],
          startTime: "2018-04-20T08:50:46.000Z",
          endTime: "2018-04-20T21:22:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739714,
          code: "ENTMQMAAS-416.14",
        name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.14",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-20T21:22:31.000Z",
          endTime: "2018-04-21T09:54:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740243,
          code: "ENTMQMAAS-421.17",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.17",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-416.14"],
          startTime: "2018-04-21T09:54:16.000Z",
          endTime: "2018-04-21T22:26:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739806,
          code: "ENTMQMAAS-423.12",
        name: "[#1027] : System-tests: create new test fo REST API - PUT | /v1/addresses/myspace/:name.12",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-21T22:26:01.000Z",
          endTime: "2018-04-22T10:57:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744375,
          code: "ENTMQMAAS-461.18",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.18",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-462.1","ENTMQMAAS-423.12"],
          startTime: "2018-04-22T10:57:46.000Z",
          endTime: "2018-04-22T23:29:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12745673,
          code: "ENTMQMAAS-482.4",
        name: "[#1145] : Standard: allow send/receive messages over WebSocket.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-461.18"],
          startTime: "2018-04-22T23:29:31.000Z",
          endTime: "2018-04-23T12:01:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746188,
          code: "ENTMQMAAS-483.1",
        name: "[#1159] : System-tests: Improve waiting for webItems.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-480.3","ENTMQMAAS-477.1","ENTMQMAAS-482.4"],
          startTime: "2018-04-23T12:01:16.000Z",
          endTime: "2018-04-24T00:33:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724914,
          code: "ENTMQMAAS-309.34",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.34",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-366.7","ENTMQMAAS-300.33"],
          startTime: "2018-04-23T02:13:01.000Z",
          endTime: "2018-04-23T07:54:48.750Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726174,
          code: "ENTMQMAAS-314.33",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.33",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.34"],
          startTime: "2018-04-23T07:54:49.750Z",
          endTime: "2018-04-23T13:36:37.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726388,
          code: "ENTMQMAAS-316.31",
        name: "[#604] : Address-controller: PUT method is not implemented.31",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.33"],
          startTime: "2018-04-23T13:36:38.500Z",
          endTime: "2018-04-23T19:18:26.250Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740236,
          code: "ENTMQMAAS-415.21",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.21",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-23T19:18:27.250Z",
          endTime: "2018-04-24T01:00:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740299,
          code: "ENTMQMAAS-418.19",
        name: "[#1022] : System-tests: March list of disabled tests.19",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-463.1","ENTMQMAAS-483.1","ENTMQMAAS-415.21"],
          startTime: "2018-04-24T01:00:16.000Z",
          endTime: "2018-04-24T06:42:03.750Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740323,
          code: "ENTMQMAAS-420.18",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....18",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-418.19"],
          startTime: "2018-04-24T06:42:04.750Z",
          endTime: "2018-04-24T12:23:52.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740330,
          code: "ENTMQMAAS-430.17",
        name: "[#1032] : system-tests: create new test for replace single address-space.17",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-407.5","ENTMQMAAS-420.18"],
          startTime: "2018-04-24T12:23:53.500Z",
          endTime: "2018-04-24T18:05:41.250Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740332,
          code: "ENTMQMAAS-432.17",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .17",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-430.17"],
          startTime: "2018-04-24T18:05:42.250Z",
          endTime: "2018-04-24T23:47:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741485,
          code: "ENTMQMAAS-449.13",
        name: "[#1074] : console: \"Results\" value is not updated after addresses are removed.13",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-432.17"],
          startTime: "2018-04-24T23:47:31.000Z",
          endTime: "2018-04-25T05:29:18.750Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742576,
          code: "ENTMQMAAS-454.9",
        name: "[#1103] : mqtt (standard-space): interoperability - send amqp, receive mqtt doesn't work.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-449.13"],
          startTime: "2018-04-25T05:29:19.750Z",
          endTime: "2018-04-25T11:11:07.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742575,
          code: "ENTMQMAAS-453.9",
        name: "[#1102] : mqtt (standard-space): Message with retained flag set to true are not received by subscribers.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-460.1","ENTMQMAAS-454.9"],
          startTime: "2018-04-25T11:11:08.500Z",
          endTime: "2018-04-25T16:52:56.250Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743077,
          code: "ENTMQMAAS-456.8",
        name: "[#1116] : system-tests: extend MQTT tests about testing \"will\" functionality.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-453.9"],
          startTime: "2018-04-25T16:52:57.250Z",
          endTime: "2018-04-25T22:34:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743277,
          code: "ENTMQMAAS-469.6",
        name: "[#1124] : system-tests: review of list of disabled tests from March and create new one for April.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-488.1","ENTMQMAAS-456.8"],
          startTime: "2018-04-25T22:34:46.000Z",
          endTime: "2018-04-26T04:16:33.750Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743278,
          code: "ENTMQMAAS-470.6",
        name: "system-tests: unclosed archives exception in Jenkins when core-dump is stored.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-469.6"],
          startTime: "2018-04-26T04:16:34.750Z",
          endTime: "2018-04-26T09:58:22.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744438,
          code: "ENTMQMAAS-478.5",
        name: "[#1134] : resource defragmentation for pooled addresses doesn't work.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-470.6"],
          startTime: "2018-04-26T09:58:23.500Z",
          endTime: "2018-04-26T15:40:11.250Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744632,
          code: "ENTMQMAAS-480.4",
        name: "[#1136] : Auto scale down doesn't work when plan of address is changed.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-478.5"],
          startTime: "2018-04-26T15:40:12.250Z",
          endTime: "2018-04-26T21:22:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692834,
          code: "ENTMQMAAS-51.22",
        name: "Create product build artifacts.22",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-50.11"],
          startTime: "2018-04-03T03:34:01.000Z",
          endTime: "2018-04-04T15:11:52.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692836,
          code: "ENTMQMAAS-53.22",
        name: "Setup CI for product repositories.22",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.22"],
          startTime: "2018-04-04T15:11:53.500Z",
          endTime: "2018-04-06T02:49:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692835,
          code: "ENTMQMAAS-52.22",
        name: "Create copy of upstream repositories.22",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.22"],
          startTime: "2018-04-06T02:49:46.000Z",
          endTime: "2018-04-07T14:27:37.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12727485,
          code: "ENTMQMAAS-323.19",
        name: "Creating and deleting addresses.19",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-397.12","ENTMQMAAS-338.8"],
          startTime: "2018-04-07T14:27:38.500Z",
          endTime: "2018-04-09T02:05:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731883,
          code: "ENTMQMAAS-347.18",
        name: "[#759] : Delegate from keycloak to OpenShift Pro.18",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-04-09T02:05:31.000Z",
          endTime: "2018-04-10T13:43:22.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738262,
          code: "ENTMQMAAS-401.8",
        name: "[#693] : Status check for pooled queues is true even if address is not created.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-10T13:43:23.500Z",
          endTime: "2018-04-12T01:21:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738600,
          code: "ENTMQMAAS-412.7",
        name: "[#1001] : Automatically create authorization groups in keycloak.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-12T01:21:16.000Z",
          endTime: "2018-04-13T12:59:07.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738610,
          code: "ENTMQMAAS-413.6",
        name: "[#1009] : Make resync interval in controllers configurable.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-13T12:59:08.500Z",
          endTime: "2018-04-15T00:37:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738611,
          code: "ENTMQMAAS-414.6",
        name: "[#1011] : Separata status check from controller resync.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-15T00:37:01.000Z",
          endTime: "2018-04-16T12:14:52.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740106,
          code: "ENTMQMAAS-435.5",
        name: "[#1017] : Events sent to address of type queue not delivered after a while.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-16T12:14:53.500Z",
          endTime: "2018-04-17T23:52:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740588,
          code: "ENTMQMAAS-450.3",
        name: "[#1079] : standard-controller: is trying to connect to router which was already killed.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-17T23:52:46.000Z",
          endTime: "2018-04-19T11:30:37.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740775,
          code: "ENTMQMAAS-452.2",
        name: "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-19T11:30:38.500Z",
          endTime: "2018-04-20T23:08:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742676,
          code: "ENTMQMAAS-462.1",
        name: "[#1117] : Response code/payload of AddressController REST API POST/DELETE operations.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-20T23:08:31.000Z",
          endTime: "2018-04-22T10:46:22.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742677,
          code: "ENTMQMAAS-463.1",
        name: "[#1091] : Endpoints declaratively specified should be checked in status.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-22T10:46:23.500Z",
          endTime: "2018-04-23T22:24:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742674,
          code: "ENTMQMAAS-460.1",
        name: "[#1087] : Upgrade to Artemis 2.5.0.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-23T22:24:16.000Z",
          endTime: "2018-04-25T10:02:07.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742683,
          code: "ENTMQMAAS-465.1",
        name: "Install EnMasse on Bosch OpenShift Dedicated cluster.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-25T10:02:08.500Z",
          endTime: "2018-04-26T21:40:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724277,
          code: "ENTMQMAAS-302.34",
        name: "[#517] : System-tests: create testCreateDeleteAddressSpaceViaAgentLong.34",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-04-24T00:33:01.000Z",
          endTime: "2018-04-25T03:19:08.571Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724274,
          code: "ENTMQMAAS-300.34",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.34",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-366.8","ENTMQMAAS-302.34"],
          startTime: "2018-04-25T03:19:09.571Z",
          endTime: "2018-04-26T06:05:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739814,
          code: "ENTMQMAAS-416.15",
        name: "[#1020] : system-tests: test{Pod,Credit}Limitations with webconsole.15",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-26T06:05:18.142Z",
          endTime: "2018-04-27T08:51:25.713Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740443,
          code: "ENTMQMAAS-421.19",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.19",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-27T08:51:26.714Z",
          endTime: "2018-04-28T11:37:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739906,
          code: "ENTMQMAAS-423.13",
        name: "[#1027] : System-tests: create new test fo REST API - PUT | /v1/addresses/myspace/:name.13",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-28T11:37:35.285Z",
          endTime: "2018-04-29T14:23:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744575,
          code: "ENTMQMAAS-461.20",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.20",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-29T14:23:43.857Z",
          endTime: "2018-04-30T17:09:51.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12745773,
          code: "ENTMQMAAS-482.5",
        name: "[#1145] : Standard: allow send/receive messages over WebSocket.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-30T17:09:52.428Z",
          endTime: "2018-05-01T19:55:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725014,
          code: "ENTMQMAAS-309.35",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.35",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-300.34"],
          startTime: "2018-04-26T21:22:01.000Z",
          endTime: "2018-04-27T05:32:52.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726274,
          code: "ENTMQMAAS-314.34",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.34",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-309.35"],
          startTime: "2018-04-27T05:32:53.000Z",
          endTime: "2018-04-27T13:43:44.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726488,
          code: "ENTMQMAAS-316.32",
        name: "[#604] : Address-controller: PUT method is not implemented.32",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.34"],
          startTime: "2018-04-27T13:43:45.000Z",
          endTime: "2018-04-27T21:54:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740336,
          code: "ENTMQMAAS-415.22",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.22",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-480.4","ENTMQMAAS-465.1","ENTMQMAAS-485.1","ENTMQMAAS-416.15"],
          startTime: "2018-04-27T21:54:37.000Z",
          endTime: "2018-04-28T06:05:28.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740399,
          code: "ENTMQMAAS-418.20",
        name: "[#1022] : System-tests: March list of disabled tests.20",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-415.22"],
          startTime: "2018-04-28T06:05:29.000Z",
          endTime: "2018-04-28T14:16:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740423,
          code: "ENTMQMAAS-420.19",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....19",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-421.19","ENTMQMAAS-418.20"],
          startTime: "2018-04-28T14:16:21.000Z",
          endTime: "2018-04-28T22:27:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740430,
          code: "ENTMQMAAS-430.18",
        name: "[#1032] : system-tests: create new test for replace single address-space.18",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-420.19"],
          startTime: "2018-04-28T22:27:13.000Z",
          endTime: "2018-04-29T06:38:04.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740432,
          code: "ENTMQMAAS-432.18",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .18",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-430.18"],
          startTime: "2018-04-29T06:38:05.000Z",
          endTime: "2018-04-29T14:48:56.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741585,
          code: "ENTMQMAAS-449.14",
        name: "[#1074] : console: \"Results\" value is not updated after addresses are removed.14",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-423.13","ENTMQMAAS-432.18"],
          startTime: "2018-04-29T14:48:57.000Z",
          endTime: "2018-04-29T22:59:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742676,
          code: "ENTMQMAAS-454.10",
        name: "[#1103] : mqtt (standard-space): interoperability - send amqp, receive mqtt doesn't work.10",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-449.14"],
          startTime: "2018-04-29T22:59:49.000Z",
          endTime: "2018-04-30T07:10:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742675,
          code: "ENTMQMAAS-453.10",
        name: "[#1102] : mqtt (standard-space): Message with retained flag set to true are not received by subscribers.10",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-454.10"],
          startTime: "2018-04-30T07:10:41.000Z",
          endTime: "2018-04-30T15:21:32.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743177,
          code: "ENTMQMAAS-456.9",
        name: "[#1116] : system-tests: extend MQTT tests about testing \"will\" functionality.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-453.10"],
          startTime: "2018-04-30T15:21:33.000Z",
          endTime: "2018-04-30T23:32:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743378,
          code: "ENTMQMAAS-470.7",
        name: "system-tests: unclosed archives exception in Jenkins when core-dump is stored.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-456.9"],
          startTime: "2018-04-30T23:32:25.000Z",
          endTime: "2018-05-01T07:43:16.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744538,
          code: "ENTMQMAAS-478.6",
        name: "[#1134] : resource defragmentation for pooled addresses doesn't work.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-470.7"],
          startTime: "2018-05-01T07:43:17.000Z",
          endTime: "2018-05-01T15:54:08.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744732,
          code: "ENTMQMAAS-480.5",
        name: "[#1136] : Auto scale down doesn't work when plan of address is changed.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-478.6"],
          startTime: "2018-05-01T15:54:09.000Z",
          endTime: "2018-05-02T00:05:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692934,
          code: "ENTMQMAAS-51.23",
        name: "Create product build artifacts.23",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-50.12"],
          startTime: "2018-04-26T21:40:01.000Z",
          endTime: "2018-04-27T06:04:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692936,
          code: "ENTMQMAAS-53.23",
        name: "Setup CI for product repositories.23",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2018-04-27T06:04:25.000Z",
          endTime: "2018-04-27T14:28:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12692935,
          code: "ENTMQMAAS-52.23",
        name: "Create copy of upstream repositories.23",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.23"],
          startTime: "2018-04-27T14:28:49.000Z",
          endTime: "2018-04-27T22:53:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12727585,
          code: "ENTMQMAAS-323.20",
        name: "Creating and deleting addresses.20",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.32"],
          startTime: "2018-04-27T22:53:13.000Z",
          endTime: "2018-04-28T07:17:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731983,
          code: "ENTMQMAAS-347.19",
        name: "[#759] : Delegate from keycloak to OpenShift Pro.19",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-323.20"],
          startTime: "2018-04-28T07:17:37.000Z",
          endTime: "2018-04-28T15:42:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738362,
          code: "ENTMQMAAS-401.9",
        name: "[#693] : Status check for pooled queues is true even if address is not created.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-28T15:42:01.000Z",
          endTime: "2018-04-29T00:06:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738700,
          code: "ENTMQMAAS-412.8",
        name: "[#1001] : Automatically create authorization groups in keycloak.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-401.9"],
          startTime: "2018-04-29T00:06:25.000Z",
          endTime: "2018-04-29T08:30:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738710,
          code: "ENTMQMAAS-413.7",
        name: "[#1009] : Make resync interval in controllers configurable.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-412.8"],
          startTime: "2018-04-29T08:30:49.000Z",
          endTime: "2018-04-29T16:55:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738711,
          code: "ENTMQMAAS-414.7",
        name: "[#1011] : Separata status check from controller resync.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-457.1","ENTMQMAAS-413.7"],
          startTime: "2018-04-29T16:55:13.000Z",
          endTime: "2018-04-30T01:19:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740206,
          code: "ENTMQMAAS-435.6",
        name: "[#1017] : Events sent to address of type queue not delivered after a while.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-414.7"],
          startTime: "2018-04-30T01:19:37.000Z",
          endTime: "2018-04-30T09:44:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740688,
          code: "ENTMQMAAS-450.4",
        name: "[#1079] : standard-controller: is trying to connect to router which was already killed.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-435.6"],
          startTime: "2018-04-30T09:44:01.000Z",
          endTime: "2018-04-30T18:08:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740875,
          code: "ENTMQMAAS-452.3",
        name: "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-461.20","ENTMQMAAS-450.4"],
          startTime: "2018-04-30T18:08:25.000Z",
          endTime: "2018-05-01T02:32:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742776,
          code: "ENTMQMAAS-462.2",
        name: "[#1117] : Response code/payload of AddressController REST API POST/DELETE operations.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-452.3"],
          startTime: "2018-05-01T02:32:49.000Z",
          endTime: "2018-05-01T10:57:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742777,
          code: "ENTMQMAAS-463.2",
        name: "[#1091] : Endpoints declaratively specified should be checked in status.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-462.2"],
          startTime: "2018-05-01T10:57:13.000Z",
          endTime: "2018-05-01T19:21:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742783,
          code: "ENTMQMAAS-465.2",
        name: "Install EnMasse on Bosch OpenShift Dedicated cluster.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-463.2"],
          startTime: "2018-05-01T19:21:37.000Z",
          endTime: "2018-05-02T03:46:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12664244,
          code: "ENTMQMAAS-4.14",
        name: "remove colocated routers.14",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-03T03:17:01.000Z",
          endTime: "2018-04-08T10:28:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12681279,
          code: "ENTMQMAAS-49.13",
        name: "providing way to monitor connection and link metrics.13",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-08T10:28:18.142Z",
          endTime: "2018-04-13T17:39:34.284Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691268,
          code: "ENTMQMAAS-50.12",
        name: "Release Messaging Images.12",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.22"],
          startTime: "2018-04-13T17:39:35.285Z",
          endTime: "2018-04-19T00:50:51.427Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737985,
          code: "ENTMQMAAS-407.5",
        name: "[#973] : Configure per-address settings for each address created on broker.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-19T00:50:52.428Z",
          endTime: "2018-04-24T08:02:08.570Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742671,
          code: "ENTMQMAAS-457.1",
        name: "[#1096] : agent: use \"direction\" attribute instead of \"dir\" for autoLinks.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-24T08:02:09.571Z",
          endTime: "2018-04-29T15:13:25.713Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742673,
          code: "ENTMQMAAS-459.1",
        name: "[#1084] : agent container: high load and memory issue with many addresses.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-29T15:13:26.714Z",
          endTime: "2018-05-04T22:24:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742672,
          code: "ENTMQMAAS-458.1",
        name: "[#1097] : When creating many addresses at the same time, a few have missing autolinks.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-05-04T22:24:43.857Z",
          endTime: "2018-05-10T05:35:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730974,
          code: "ENTMQMAAS-338.9",
        name: "[#750] : Handle scaledown of queues and topics at deploy time.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-04-23T10:36:01.000Z",
          endTime: "2018-04-23T17:12:25.573Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730980,
          code: "ENTMQMAAS-344.9",
        name: "[#756] : Monitoring for operator(us): prometheus for alerting and metrics, log aggregation/search for logs.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-338.9"],
          startTime: "2018-04-23T17:12:26.573Z",
          endTime: "2018-04-23T23:48:51.146Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730988,
          code: "ENTMQMAAS-352.9",
        name: "[#764] : Some level of metrics on address controller / standard controller to show prometheus metrics.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.31","ENTMQMAAS-344.9"],
          startTime: "2018-04-23T23:48:52.147Z",
          endTime: "2018-04-24T06:25:16.720Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730989,
          code: "ENTMQMAAS-353.9",
        name: "[#765] : Changes to service broker (service type is just address space, different plans are supported. See also point above about how to tie plans offered to plans specified) .9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-352.9"],
          startTime: "2018-04-24T06:25:17.721Z",
          endTime: "2018-04-24T13:01:42.294Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730978,
          code: "ENTMQMAAS-342.9",
        name: "[#754] : Deploying keycloak in an HA configuration.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-353.9"],
          startTime: "2018-04-24T13:01:43.295Z",
          endTime: "2018-04-24T19:38:07.868Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12730949,
          code: "ENTMQMAAS-366.8",
        name: "[#778] : Integrate PUMBA into our testing environment? (task already exists for that, from Ulf) .8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-342.9"],
          startTime: "2018-04-24T19:38:08.868Z",
          endTime: "2018-04-25T02:14:33.441Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743258,
          code: "ENTMQMAAS-477.2",
        name: "As a Tenant Admin I need to create addresses which can store a copy of all messages sent to a different address even when no consumer is connected.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-25T02:14:34.442Z",
          endTime: "2018-04-25T08:50:59.015Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746580,
          code: "ENTMQMAAS-484.1",
        name: "As a System Admin I want to Install AMQ Online from templates.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-477.2"],
          startTime: "2018-04-25T08:51:00.016Z",
          endTime: "2018-04-25T15:27:24.589Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746584,
          code: "ENTMQMAAS-488.1",
        name: "As a System Admin I want to Define address space plans for address spaces which use a single broker.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-484.1"],
          startTime: "2018-04-25T15:27:25.590Z",
          endTime: "2018-04-25T22:03:50.163Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746582,
          code: "ENTMQMAAS-486.1",
        name: "As a System Admin I want to Define address space plans for address spaces which use a dedicated network of routers and brokers.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-25T22:03:51.163Z",
          endTime: "2018-04-26T04:40:15.736Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746588,
          code: "ENTMQMAAS-492.1",
        name: "As a System Admin I want to Change plan for an existing address space.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-486.1"],
          startTime: "2018-04-26T04:40:16.737Z",
          endTime: "2018-04-26T11:16:41.310Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746595,
          code: "ENTMQMAAS-499.1",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using the service catalog on the same cluster.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-492.1"],
          startTime: "2018-04-26T11:16:42.311Z",
          endTime: "2018-04-26T17:53:06.884Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746581,
          code: "ENTMQMAAS-485.1",
        name: "As a System Admin I want to Install AMQ Online using Ansible playbooks.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-499.1"],
          startTime: "2018-04-26T17:53:07.885Z",
          endTime: "2018-04-27T00:29:32.458Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746641,
          code: "ENTMQMAAS-545.1",
        name: "As a Tenant Admin I want to Create addresses which send messages to all receivers for that address, and will buffer messages which cannot be consumed immediately where the number of receivers may be in the (tens of) thousands.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2018-04-27T00:29:33.459Z",
          endTime: "2018-04-27T07:05:58.032Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746629,
          code: "ENTMQMAAS-533.1",
        name: "As a Tenant Admin I want to Create an address space with a plan that allocates dedicated resources to the address space whether they are used or not.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.23","ENTMQMAAS-545.1"],
          startTime: "2018-04-27T07:05:59.032Z",
          endTime: "2018-04-27T13:42:23.605Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746635,
          code: "ENTMQMAAS-539.1",
        name: "As a Tenant Admin I want to Bind an application to an address space using the Service Catalog (causing connection/credential information to be injected into the namespace of the application).1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-533.1"],
          startTime: "2018-04-27T13:42:24.606Z",
          endTime: "2018-04-27T20:18:49.179Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746636,
          code: "ENTMQMAAS-540.1",
        name: "As a Tenant Admin I want to Provide information in the binding request which determines the permissions associated with the binding (e.g. which address can be sent to/received from).1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-539.1"],
          startTime: "2018-04-27T20:18:50.180Z",
          endTime: "2018-04-28T02:55:14.753Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746628,
          code: "ENTMQMAAS-532.1",
        name: "As a Tenant Admin I want to Create a messaging instance which allows scaling to (tens of) thousands of connections / addresses and high throughput.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.23","ENTMQMAAS-540.1"],
          startTime: "2018-04-28T02:55:15.754Z",
          endTime: "2018-04-28T09:31:40.327Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746618,
          code: "ENTMQMAAS-522.1",
        name: "As a System Operator I want to Access the system logs for any component in any address space.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-532.1"],
          startTime: "2018-04-28T09:31:41.327Z",
          endTime: "2018-04-28T16:08:05.900Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746627,
          code: "ENTMQMAAS-531.1",
        name: "As a Tenant Admin I want to Create a messaging instance which provides full JMS semantics.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-522.1"],
          startTime: "2018-04-28T16:08:06.901Z",
          endTime: "2018-04-28T22:44:31.474Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746597,
          code: "ENTMQMAAS-501.1",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using the service catalog on multiple clusters.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-531.1"],
          startTime: "2018-04-28T22:44:32.475Z",
          endTime: "2018-04-29T05:20:57.048Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746634,
          code: "ENTMQMAAS-538.1",
        name: "As a Tenant Admin I want to Create/Manage an address space through a REST API.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-501.1"],
          startTime: "2018-04-29T05:20:58.049Z",
          endTime: "2018-04-29T11:57:22.622Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746599,
          code: "ENTMQMAAS-503.1",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using a REST API.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-538.1"],
          startTime: "2018-04-29T11:57:23.622Z",
          endTime: "2018-04-29T18:33:48.195Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746598,
          code: "ENTMQMAAS-502.1",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using custom resources.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-503.1"],
          startTime: "2018-04-29T18:33:49.196Z",
          endTime: "2018-04-30T01:10:13.769Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746640,
          code: "ENTMQMAAS-544.1",
        name: "As a Tenant Admin I want to Create addresess which allow a sender to send a message to a single receiver which is receiving from that address, but will fail to accept the message if their is no receiver able to immediately receive it.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-502.1"],
          startTime: "2018-04-30T01:10:14.770Z",
          endTime: "2018-04-30T07:46:39.343Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746609,
          code: "ENTMQMAAS-513.1",
        name: "As a System Admin I want to Configure the system to use a single source for authorisation configuration for all address spaces.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-544.1"],
          startTime: "2018-04-30T07:46:40.344Z",
          endTime: "2018-04-30T14:23:04.917Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746601,
          code: "ENTMQMAAS-505.1",
        name: "As a System Admin I want to Configure role-based access control to control who may create an address space (of a given type/plan) using the service catalog.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-513.1"],
          startTime: "2018-04-30T14:23:05.918Z",
          endTime: "2018-04-30T20:59:30.491Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746624,
          code: "ENTMQMAAS-528.1",
        name: "As a System Operator I want to Inspect the state of system component using their built-in monitoring tools (e.g. Broker console).1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-505.1"],
          startTime: "2018-04-30T20:59:31.491Z",
          endTime: "2018-05-01T03:35:56.064Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746611,
          code: "ENTMQMAAS-515.1",
        name: "As a System Admin I want to Configure the system such that all address spaces can receive messages from applications running outside the cluster.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-528.1"],
          startTime: "2018-05-01T03:35:57.065Z",
          endTime: "2018-05-01T10:12:21.638Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746632,
          code: "ENTMQMAAS-536.1",
        name: "As a Tenant Admin I want to Create an address space through the service catalog.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-515.1"],
          startTime: "2018-05-01T10:12:22.639Z",
          endTime: "2018-05-01T16:48:47.212Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746637,
          code: "ENTMQMAAS-541.1",
        name: "As a Tenant Admin I want to Provide a mechanism for a binding to occur between an application owned by a different user than that which created the service (Service Catalog).1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-536.1"],
          startTime: "2018-05-01T16:48:48.213Z",
          endTime: "2018-05-01T23:25:12.786Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746638,
          code: "ENTMQMAAS-542.1",
        name: "As a Tenant Admin I want to Delete a binding from the service, removing any associated credentials.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-541.1"],
          startTime: "2018-05-01T23:25:13.786Z",
          endTime: "2018-05-02T06:01:38.359Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746608,
          code: "ENTMQMAAS-512.1",
        name: "As a System Admin I want to Configure the system to restrict address spaces to use source for identity/authentication from a restricted list.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-542.1"],
          startTime: "2018-05-02T06:01:39.360Z",
          endTime: "2018-05-02T12:38:03.933Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746596,
          code: "ENTMQMAAS-500.1",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using the service catalog on a different cluster.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-512.1"],
          startTime: "2018-05-02T12:38:04.934Z",
          endTime: "2018-05-02T19:14:29.507Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746610,
          code: "ENTMQMAAS-514.1",
        name: "As a System Admin I want to Configure the system to use allow address spaces to manage their own authorisation.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.24","ENTMQMAAS-500.1"],
          startTime: "2018-05-02T19:14:30.508Z",
          endTime: "2018-05-03T01:50:55.081Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746600,
          code: "ENTMQMAAS-504.1",
        name: "As a System Admin I want to Configure role-based access control to control who may create an address space of a given type/plen an address space using the REST API.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-514.1"],
          startTime: "2018-05-03T01:50:56.081Z",
          endTime: "2018-05-03T08:27:20.654Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746639,
          code: "ENTMQMAAS-543.1",
        name: "As a Tenant Admin I want to Create addresses which provide reliable store and forward messaging from a sender to a single receiver (amongst potentially many) listening on that address.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.24","ENTMQMAAS-504.1"],
          startTime: "2018-05-03T08:27:21.655Z",
          endTime: "2018-05-03T15:03:46.228Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746633,
          code: "ENTMQMAAS-537.1",
        name: "As a Tenant Admin I want to Create an address space using custom resources.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-543.1"],
          startTime: "2018-05-03T15:03:47.229Z",
          endTime: "2018-05-03T21:40:11.802Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746621,
          code: "ENTMQMAAS-525.1",
        name: "As a System Operator I want to \"Restart\" an individual component or a single address space.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.24","ENTMQMAAS-537.1"],
          startTime: "2018-05-03T21:40:12.803Z",
          endTime: "2018-05-04T04:16:37.376Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746630,
          code: "ENTMQMAAS-534.1",
        name: "As a Tenant Admin I want to Create an address space with a plan that allocates resources as they are required, but each allocated resource is dedicated to that single address space.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-525.1"],
          startTime: "2018-05-04T04:16:38.377Z",
          endTime: "2018-05-04T10:53:02.950Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746650,
          code: "ENTMQMAAS-554.1",
        name: "As a Tenant Admin I want to View on a single screen all the address spaces which I can administer.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-534.1"],
          startTime: "2018-05-04T10:53:03.950Z",
          endTime: "2018-05-04T17:29:28.523Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746688,
          code: "ENTMQMAAS-592.1",
        name: "As a Developer I want to Send and receive messages within a (local) transaction (AMQP only).1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-554.1"],
          startTime: "2018-05-04T17:29:29.524Z",
          endTime: "2018-05-05T00:05:54.097Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746679,
          code: "ENTMQMAAS-583.1",
        name: "As a Developer I want to Connect to a messaging space from outside the cluster using the AMQP protocol using TLS over WebSockets.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-592.1"],
          startTime: "2018-05-05T00:05:55.098Z",
          endTime: "2018-05-05T06:42:19.671Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746649,
          code: "ENTMQMAAS-553.1",
        name: "As a Tenant Admin I want to Change the plan associated with an address to reflect changing resource requirements.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-583.1"],
          startTime: "2018-05-05T06:42:20.672Z",
          endTime: "2018-05-05T13:18:45.245Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746656,
          code: "ENTMQMAAS-560.1",
        name: "As a Tenant Admin I want to Asign permissions to address space users to allow them to send/receive/create/delete/manage addresses of a given name/pattern.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-553.1"],
          startTime: "2018-05-05T13:18:46.245Z",
          endTime: "2018-05-05T19:55:10.818Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746646,
          code: "ENTMQMAAS-550.1",
        name: "As a Tenant Admin I want to Create an address which, when received from, fetches messages from an address in a different address space potentially in a different system/cluster.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-560.1"],
          startTime: "2018-05-05T19:55:11.819Z",
          endTime: "2018-05-06T02:31:36.392Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746683,
          code: "ENTMQMAAS-587.1",
        name: "As a Developer I want to Connect to a messaging space from inside the cluster using the AMQP protocol (optionally using TLS) over WebSockets.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-550.1"],
          startTime: "2018-05-06T02:31:37.393Z",
          endTime: "2018-05-06T09:08:01.966Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746642,
          code: "ENTMQMAAS-546.1",
        name: "As a Tenant Admin I want to Create addresses which send messages to all receivers for that address, but which provide no buffering/storage (where the number of receivers may be in the (tens of) thousands).1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-587.1"],
          startTime: "2018-05-06T09:08:02.967Z",
          endTime: "2018-05-06T15:44:27.540Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746686,
          code: "ENTMQMAAS-590.1",
        name: "As a Developer I want to Send a message to a destination using at-least-once semantics.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-546.1"],
          startTime: "2018-05-06T15:44:28.540Z",
          endTime: "2018-05-06T22:20:53.113Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746678,
          code: "ENTMQMAAS-582.1",
        name: "As a Developer I want to Connect to a messaging space from outside the cluster using the MQTT protocol using TLS over TCP.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-590.1"],
          startTime: "2018-05-06T22:20:54.114Z",
          endTime: "2018-05-07T04:57:18.687Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746691,
          code: "ENTMQMAAS-595.1",
        name: "As a Developer I want to Receive messages from an address using a filter (selector) to exclude unwanted messages from consumption.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-582.1"],
          startTime: "2018-05-07T04:57:19.688Z",
          endTime: "2018-05-07T11:33:44.261Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746685,
          code: "ENTMQMAAS-589.1",
        name: "As a Developer I want to Send a message to a destination using at-most-once semantics.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-595.1"],
          startTime: "2018-05-07T11:33:45.262Z",
          endTime: "2018-05-07T18:10:09.835Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746682,
          code: "ENTMQMAAS-586.1",
        name: "As a Developer I want to Connect to a messaging space from inside the cluster using the MQTT protocol (optionally using TLS) over TCP.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-589.1"],
          startTime: "2018-05-07T18:10:10.836Z",
          endTime: "2018-05-08T00:46:35.409Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746648,
          code: "ENTMQMAAS-552.1",
        name: "As a Tenant Admin I want to On creating an address select a plan from a fixed list which defines the expected resource requirements for that list.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-586.1"],
          startTime: "2018-05-08T00:46:36.409Z",
          endTime: "2018-05-08T07:23:00.982Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746693,
          code: "ENTMQMAAS-597.1",
        name: "As a Developer I want to receive from an address using at-most-once semantics.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-552.1"],
          startTime: "2018-05-08T07:23:01.983Z",
          endTime: "2018-05-08T13:59:26.556Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746681,
          code: "ENTMQMAAS-585.1",
        name: "As a Developer I want to Connect to a messaging space from inside the cluster using the AMQP protocol (optionally using TLS) over TCP.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-597.1"],
          startTime: "2018-05-08T13:59:27.557Z",
          endTime: "2018-05-08T20:35:52.130Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746694,
          code: "ENTMQMAAS-598.1",
        name: "As a Developer I want to receive from an address using at-least-once semantics.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-585.1"],
          startTime: "2018-05-08T20:35:53.131Z",
          endTime: "2018-05-09T03:12:17.704Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746655,
          code: "ENTMQMAAS-559.1",
        name: "As a Tenant Admin I want to Create/delete users specific to the address space.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-598.1"],
          startTime: "2018-05-09T03:12:18.704Z",
          endTime: "2018-05-09T09:48:43.277Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746690,
          code: "ENTMQMAAS-594.1",
        name: "As a Developer I want to Browse messages on a queue (i.e. iterate over stored messages without consuming them).1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-559.1"],
          startTime: "2018-05-09T09:48:44.278Z",
          endTime: "2018-05-09T16:25:08.851Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746677,
          code: "ENTMQMAAS-581.1",
        name: "As a Developer I want to Connect to a messaging space from outside the cluster using the AMQP protocol using TLS over TCP.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-594.1"],
          startTime: "2018-05-09T16:25:09.852Z",
          endTime: "2018-05-09T23:01:34.425Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746644,
          code: "ENTMQMAAS-548.1",
        name: "As a Tenant Admin I want to Create an address which, when sent to, forwards the message to an address in a different address space potentially in a different system/cluster.1",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-581.1"],
          startTime: "2018-05-09T23:01:35.426Z",
          endTime: "2018-05-10T05:37:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12693034,
          code: "ENTMQMAAS-51.24",
        name: "Create product build artifacts.24",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2018-05-02T03:46:01.000Z",
          endTime: "2018-05-02T17:36:55.714Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12693036,
          code: "ENTMQMAAS-53.24",
        name: "Setup CI for product repositories.24",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2018-05-02T17:36:56.714Z",
          endTime: "2018-05-03T07:27:51.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12693035,
          code: "ENTMQMAAS-52.24",
        name: "Create copy of upstream repositories.24",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2018-05-03T07:27:52.428Z",
          endTime: "2018-05-03T21:18:47.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12727685,
          code: "ENTMQMAAS-323.21",
        name: "Creating and deleting addresses.21",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-347.19"],
          startTime: "2018-05-03T21:18:48.142Z",
          endTime: "2018-05-04T11:09:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12732083,
          code: "ENTMQMAAS-347.20",
        name: "[#759] : Delegate from keycloak to OpenShift Pro.20",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-323.21"],
          startTime: "2018-05-04T11:09:43.857Z",
          endTime: "2018-05-05T01:00:38.571Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738462,
          code: "ENTMQMAAS-401.10",
        name: "[#693] : Status check for pooled queues is true even if address is not created.10",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-482.5","ENTMQMAAS-480.5","ENTMQMAAS-465.2","ENTMQMAAS-459.1"],
          startTime: "2018-05-05T01:00:39.571Z",
          endTime: "2018-05-05T14:51:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738800,
          code: "ENTMQMAAS-412.9",
        name: "[#1001] : Automatically create authorization groups in keycloak.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-401.10"],
          startTime: "2018-05-05T14:51:35.285Z",
          endTime: "2018-05-06T04:42:29.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738810,
          code: "ENTMQMAAS-413.8",
        name: "[#1009] : Make resync interval in controllers configurable.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-412.9"],
          startTime: "2018-05-06T04:42:31.000Z",
          endTime: "2018-05-06T18:33:25.714Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738811,
          code: "ENTMQMAAS-414.8",
        name: "[#1011] : Separata status check from controller resync.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-413.8"],
          startTime: "2018-05-06T18:33:26.714Z",
          endTime: "2018-05-07T08:24:21.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740306,
          code: "ENTMQMAAS-435.7",
        name: "[#1017] : Events sent to address of type queue not delivered after a while.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-414.8"],
          startTime: "2018-05-07T08:24:22.428Z",
          endTime: "2018-05-07T22:15:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740788,
          code: "ENTMQMAAS-450.5",
        name: "[#1079] : standard-controller: is trying to connect to router which was already killed.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-435.7"],
          startTime: "2018-05-07T22:15:18.142Z",
          endTime: "2018-05-08T12:06:12.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740975,
          code: "ENTMQMAAS-452.4",
        name: "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-450.5"],
          startTime: "2018-05-08T12:06:13.857Z",
          endTime: "2018-05-09T01:57:08.571Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742876,
          code: "ENTMQMAAS-462.3",
        name: "[#1117] : Response code/payload of AddressController REST API POST/DELETE operations.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-452.4"],
          startTime: "2018-05-09T01:57:09.571Z",
          endTime: "2018-05-09T15:48:04.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742877,
          code: "ENTMQMAAS-463.3",
        name: "[#1091] : Endpoints declaratively specified should be checked in status.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-462.3"],
          startTime: "2018-05-09T15:48:05.285Z",
          endTime: "2018-05-10T05:38:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12693134,
          code: "ENTMQMAAS-51.25",
        name: "Create product build artifacts.25",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-548.1"],
          startTime: "2018-05-10T05:39:01.000Z",
          endTime: "2018-05-11T06:52:27.692Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12693136,
          code: "ENTMQMAAS-53.25",
        name: "Setup CI for product repositories.25",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-51.25"],
          startTime: "2018-05-11T06:52:28.692Z",
          endTime: "2018-05-12T08:05:55.384Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12693135,
          code: "ENTMQMAAS-52.25",
        name: "Create copy of upstream repositories.25",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.25"],
          startTime: "2018-05-12T08:05:56.384Z",
          endTime: "2018-05-13T09:19:23.076Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12727785,
          code: "ENTMQMAAS-323.22",
        name: "Creating and deleting addresses.22",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-347.20","ENTMQMAAS-372.5","ENTMQMAAS-300.35","ENTMQMAAS-309.36"],
          startTime: "2018-05-13T09:19:24.076Z",
          endTime: "2018-05-14T10:32:50.768Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738562,
          code: "ENTMQMAAS-401.11",
        name: "[#693] : Status check for pooled queues is true even if address is not created.11",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-421.21","ENTMQMAAS-4.15"],
          startTime: "2018-05-14T10:32:51.769Z",
          endTime: "2018-05-15T11:46:18.461Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738900,
          code: "ENTMQMAAS-412.10",
        name: "[#1001] : Automatically create authorization groups in keycloak.10",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-401.11"],
          startTime: "2018-05-15T11:46:19.461Z",
          endTime: "2018-05-16T12:59:46.153Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738910,
          code: "ENTMQMAAS-413.9",
        name: "[#1009] : Make resync interval in controllers configurable.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-412.10"],
          startTime: "2018-05-16T12:59:47.153Z",
          endTime: "2018-05-17T14:13:13.845Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738911,
          code: "ENTMQMAAS-414.9",
        name: "[#1011] : Separata status check from controller resync.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-413.9"],
          startTime: "2018-05-17T14:13:14.846Z",
          endTime: "2018-05-18T15:26:41.538Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740406,
          code: "ENTMQMAAS-435.8",
        name: "[#1017] : Events sent to address of type queue not delivered after a while.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-49.14","ENTMQMAAS-414.9"],
          startTime: "2018-05-18T15:26:42.538Z",
          endTime: "2018-05-19T16:40:09.230Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740888,
          code: "ENTMQMAAS-450.6",
        name: "[#1079] : standard-controller: is trying to connect to router which was already killed.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-435.8"],
          startTime: "2018-05-19T16:40:10.230Z",
          endTime: "2018-05-20T17:53:36.922Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741075,
          code: "ENTMQMAAS-452.5",
        name: "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-423.14","ENTMQMAAS-450.6"],
          startTime: "2018-05-20T17:53:37.923Z",
          endTime: "2018-05-21T19:07:04.615Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742976,
          code: "ENTMQMAAS-462.4",
        name: "[#1117] : Response code/payload of AddressController REST API POST/DELETE operations.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-452.5"],
          startTime: "2018-05-21T19:07:05.615Z",
          endTime: "2018-05-22T20:20:32.307Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742977,
          code: "ENTMQMAAS-463.4",
        name: "[#1091] : Endpoints declaratively specified should be checked in status.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-462.4"],
          startTime: "2018-05-22T20:20:33.307Z",
          endTime: "2018-05-23T21:33:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12664344,
          code: "ENTMQMAAS-4.15",
        name: "remove colocated routers.15",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-458.1","ENTMQMAAS-463.3"],
          startTime: "2018-05-10T05:49:01.000Z",
          endTime: "2018-05-13T23:25:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12681379,
          code: "ENTMQMAAS-49.14",
        name: "providing way to monitor connection and link metrics.14",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-05-13T23:25:25.000Z",
          endTime: "2018-05-17T17:01:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691368,
          code: "ENTMQMAAS-50.13",
        name: "Release Messaging Images.13",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.25"],
          startTime: "2018-05-17T17:01:49.000Z",
          endTime: "2018-05-21T10:38:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738085,
          code: "ENTMQMAAS-407.6",
        name: "[#973] : Configure per-address settings for each address created on broker.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-05-21T10:38:13.000Z",
          endTime: "2018-05-25T04:14:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742772,
          code: "ENTMQMAAS-458.2",
        name: "[#1097] : When creating many addresses at the same time, a few have missing autolinks.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-05-25T04:14:37.000Z",
          endTime: "2018-05-28T21:51:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12693236,
          code: "ENTMQMAAS-53.26",
        name: "Setup CI for product repositories.26",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-50.13"],
          startTime: "2018-05-23T21:42:01.000Z",
          endTime: "2018-05-24T13:27:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12693235,
          code: "ENTMQMAAS-52.26",
        name: "Create copy of upstream repositories.26",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.26"],
          startTime: "2018-05-24T13:27:41.000Z",
          endTime: "2018-05-25T05:13:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12727885,
          code: "ENTMQMAAS-323.23",
        name: "Creating and deleting addresses.23",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-352.10","ENTMQMAAS-314.35"],
          startTime: "2018-05-25T05:13:21.000Z",
          endTime: "2018-05-25T20:59:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739000,
          code: "ENTMQMAAS-412.11",
        name: "[#1001] : Automatically create authorization groups in keycloak.11",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-463.4","ENTMQMAAS-407.6","ENTMQMAAS-461.22"],
          startTime: "2018-05-25T20:59:01.000Z",
          endTime: "2018-05-26T12:44:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740506,
          code: "ENTMQMAAS-435.9",
        name: "[#1017] : Events sent to address of type queue not delivered after a while.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-412.11"],
          startTime: "2018-05-26T12:44:41.000Z",
          endTime: "2018-05-27T04:30:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740988,
          code: "ENTMQMAAS-450.7",
        name: "[#1079] : standard-controller: is trying to connect to router which was already killed.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-435.9"],
          startTime: "2018-05-27T04:30:21.000Z",
          endTime: "2018-05-27T20:16:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741175,
          code: "ENTMQMAAS-452.6",
        name: "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-450.7"],
          startTime: "2018-05-27T20:16:01.000Z",
          endTime: "2018-05-28T12:01:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743076,
          code: "ENTMQMAAS-462.5",
        name: "[#1117] : Response code/payload of AddressController REST API POST/DELETE operations.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-452.6"],
          startTime: "2018-05-28T12:01:41.000Z",
          endTime: "2018-05-29T03:47:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743077,
          code: "ENTMQMAAS-463.5",
        name: "[#1091] : Endpoints declaratively specified should be checked in status.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-458.2","ENTMQMAAS-462.5"],
          startTime: "2018-05-29T03:47:21.000Z",
          endTime: "2018-05-29T19:33:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724374,
          code: "ENTMQMAAS-300.35",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.35",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-05-01T21:50:01.000Z",
          endTime: "2018-05-07T21:14:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740643,
          code: "ENTMQMAAS-421.21",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.21",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-05-07T21:14:49.000Z",
          endTime: "2018-05-13T20:39:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740006,
          code: "ENTMQMAAS-423.14",
        name: "[#1027] : System-tests: create new test fo REST API - PUT | /v1/addresses/myspace/:name.14",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-05-13T20:39:37.000Z",
          endTime: "2018-05-19T20:04:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744775,
          code: "ENTMQMAAS-461.22",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.22",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-05-19T20:04:25.000Z",
          endTime: "2018-05-25T19:29:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12745873,
          code: "ENTMQMAAS-482.6",
        name: "[#1145] : Standard: allow send/receive messages over WebSocket.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-05-25T19:29:13.000Z",
          endTime: "2018-05-31T18:54:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12693336,
          code: "ENTMQMAAS-53.27",
        name: "Setup CI for product repositories.27",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.26"],
          startTime: "2018-05-29T19:33:01.000Z",
          endTime: "2018-05-31T08:15:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12693335,
          code: "ENTMQMAAS-52.27",
        name: "Create copy of upstream repositories.27",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.27"],
          startTime: "2018-05-31T08:15:46.000Z",
          endTime: "2018-06-01T20:58:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12727985,
          code: "ENTMQMAAS-323.24",
        name: "Creating and deleting addresses.24",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-376.4","ENTMQMAAS-366.9"],
          startTime: "2018-06-01T20:58:31.000Z",
          endTime: "2018-06-03T09:41:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739100,
          code: "ENTMQMAAS-412.12",
        name: "[#1001] : Automatically create authorization groups in keycloak.12",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-463.5","ENTMQMAAS-482.6"],
          startTime: "2018-06-03T09:41:16.000Z",
          endTime: "2018-06-04T22:24:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740606,
          code: "ENTMQMAAS-435.10",
        name: "[#1017] : Events sent to address of type queue not delivered after a while.10",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-412.12"],
          startTime: "2018-06-04T22:24:01.000Z",
          endTime: "2018-06-06T11:06:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741088,
          code: "ENTMQMAAS-450.8",
        name: "[#1079] : standard-controller: is trying to connect to router which was already killed.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-477.3","ENTMQMAAS-435.10"],
          startTime: "2018-06-06T11:06:46.000Z",
          endTime: "2018-06-07T23:49:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741275,
          code: "ENTMQMAAS-452.7",
        name: "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-450.8"],
          startTime: "2018-06-07T23:49:31.000Z",
          endTime: "2018-06-09T12:32:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743177,
          code: "ENTMQMAAS-463.6",
        name: "[#1091] : Endpoints declaratively specified should be checked in status.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-452.7"],
          startTime: "2018-06-09T12:32:16.000Z",
          endTime: "2018-06-11T01:15:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12693436,
          code: "ENTMQMAAS-53.28",
        name: "Setup CI for product repositories.28",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.27"],
          startTime: "2018-06-11T01:15:01.000Z",
          endTime: "2018-06-12T04:35:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12693435,
          code: "ENTMQMAAS-52.28",
        name: "Create copy of upstream repositories.28",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.28"],
          startTime: "2018-06-12T04:35:35.285Z",
          endTime: "2018-06-13T07:56:08.570Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12728085,
          code: "ENTMQMAAS-323.25",
        name: "Creating and deleting addresses.25",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-323.24","ENTMQMAAS-316.33"],
          startTime: "2018-06-13T07:56:09.571Z",
          endTime: "2018-06-14T11:16:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739200,
          code: "ENTMQMAAS-412.13",
        name: "[#1001] : Automatically create authorization groups in keycloak.13",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-463.6","ENTMQMAAS-488.2"],
          startTime: "2018-06-14T11:16:43.857Z",
          endTime: "2018-06-15T14:37:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740706,
          code: "ENTMQMAAS-435.11",
        name: "[#1017] : Events sent to address of type queue not delivered after a while.11",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-415.23","ENTMQMAAS-412.13"],
          startTime: "2018-06-15T14:37:18.142Z",
          endTime: "2018-06-16T17:57:51.427Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741188,
          code: "ENTMQMAAS-450.9",
        name: "[#1079] : standard-controller: is trying to connect to router which was already killed.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-435.11"],
          startTime: "2018-06-16T17:57:52.428Z",
          endTime: "2018-06-17T21:18:25.713Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741375,
          code: "ENTMQMAAS-452.8",
        name: "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-450.9"],
          startTime: "2018-06-17T21:18:26.714Z",
          endTime: "2018-06-19T00:38:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12693536,
          code: "ENTMQMAAS-53.29",
        name: "Setup CI for product repositories.29",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.28"],
          startTime: "2018-06-19T00:39:01.000Z",
          endTime: "2018-06-30T11:55:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12693535,
          code: "ENTMQMAAS-52.29",
        name: "Create copy of upstream repositories.29",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2018-06-30T11:55:31.000Z",
          endTime: "2018-07-11T23:12:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12728185,
          code: "ENTMQMAAS-323.26",
        name: "Creating and deleting addresses.26",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-323.25","ENTMQMAAS-300.36"],
          startTime: "2018-07-11T23:12:01.000Z",
          endTime: "2018-07-23T10:28:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739300,
          code: "ENTMQMAAS-412.14",
        name: "[#1001] : Automatically create authorization groups in keycloak.14",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-439.1"],
          startTime: "2018-07-23T10:28:31.000Z",
          endTime: "2018-08-03T21:45:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741288,
          code: "ENTMQMAAS-450.10",
        name: "[#1079] : standard-controller: is trying to connect to router which was already killed.10",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-421.23","ENTMQMAAS-412.14"],
          startTime: "2018-08-03T21:45:01.000Z",
          endTime: "2018-08-15T09:01:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741475,
          code: "ENTMQMAAS-452.9",
        name: "[#1082] : address-controller: NPE when required parameters (address, plan or type) are not set.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-440.2","ENTMQMAAS-450.10"],
          startTime: "2018-08-15T09:01:31.000Z",
          endTime: "2018-08-26T20:18:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12724474,
          code: "ENTMQMAAS-300.36",
        name: "[#515] : System-tests: create testSendReceiveWithCreatingAlreadyCreatedAddressesLong.36",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-05-31T18:54:01.000Z",
          endTime: "2018-07-01T14:15:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740843,
          code: "ENTMQMAAS-421.23",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.23",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-07-01T14:15:16.000Z",
          endTime: "2018-08-01T09:36:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740106,
          code: "ENTMQMAAS-423.15",
        name: "[#1027] : System-tests: create new test fo REST API - PUT | /v1/addresses/myspace/:name.15",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-08-01T09:36:31.000Z",
          endTime: "2018-09-01T04:57:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744975,
          code: "ENTMQMAAS-461.24",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.24",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-09-01T04:57:46.000Z",
          endTime: "2018-10-02T00:19:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12725114,
          code: "ENTMQMAAS-309.36",
        name: "[#547] : System-tests: multitenant: Support multiple address controllers in the same OpenShift cluster.36",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-05-02T00:05:01.000Z",
          endTime: "2018-05-12T22:23:55.714Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726374,
          code: "ENTMQMAAS-314.35",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.35",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-05-12T22:23:56.714Z",
          endTime: "2018-05-23T20:42:51.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726588,
          code: "ENTMQMAAS-316.33",
        name: "[#604] : Address-controller: PUT method is not implemented.33",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-05-23T20:42:52.428Z",
          endTime: "2018-06-03T19:01:47.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740436,
          code: "ENTMQMAAS-415.23",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.23",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-06-03T19:01:48.142Z",
          endTime: "2018-06-14T17:20:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740499,
          code: "ENTMQMAAS-418.21",
        name: "[#1022] : System-tests: March list of disabled tests.21",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-06-14T17:20:43.857Z",
          endTime: "2018-06-25T15:39:38.571Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740523,
          code: "ENTMQMAAS-420.20",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....20",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-06-25T15:39:39.571Z",
          endTime: "2018-07-06T13:58:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740530,
          code: "ENTMQMAAS-430.19",
        name: "[#1032] : system-tests: create new test for replace single address-space.19",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-485.2","ENTMQMAAS-420.20"],
          startTime: "2018-07-06T13:58:35.285Z",
          endTime: "2018-07-17T12:17:29.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740532,
          code: "ENTMQMAAS-432.19",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .19",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-430.19"],
          startTime: "2018-07-17T12:17:31.000Z",
          endTime: "2018-07-28T10:36:25.714Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741685,
          code: "ENTMQMAAS-449.15",
        name: "[#1074] : console: \"Results\" value is not updated after addresses are removed.15",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-432.19"],
          startTime: "2018-07-28T10:36:26.714Z",
          endTime: "2018-08-08T08:55:21.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742776,
          code: "ENTMQMAAS-454.11",
        name: "[#1103] : mqtt (standard-space): interoperability - send amqp, receive mqtt doesn't work.11",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-449.15"],
          startTime: "2018-08-08T08:55:22.428Z",
          endTime: "2018-08-19T07:14:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742775,
          code: "ENTMQMAAS-453.11",
        name: "[#1102] : mqtt (standard-space): Message with retained flag set to true are not received by subscribers.11",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-454.11"],
          startTime: "2018-08-19T07:14:18.142Z",
          endTime: "2018-08-30T05:33:12.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743277,
          code: "ENTMQMAAS-456.10",
        name: "[#1116] : system-tests: extend MQTT tests about testing \"will\" functionality.10",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-452.9","ENTMQMAAS-453.11"],
          startTime: "2018-08-30T05:33:13.857Z",
          endTime: "2018-09-10T03:52:08.571Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744638,
          code: "ENTMQMAAS-478.7",
        name: "[#1134] : resource defragmentation for pooled addresses doesn't work.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-423.15","ENTMQMAAS-441.3","ENTMQMAAS-456.10"],
          startTime: "2018-09-10T03:52:09.571Z",
          endTime: "2018-09-21T02:11:04.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744832,
          code: "ENTMQMAAS-480.6",
        name: "[#1136] : Auto scale down doesn't work when plan of address is changed.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-478.7"],
          startTime: "2018-09-21T02:11:05.285Z",
          endTime: "2018-10-02T00:29:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726474,
          code: "ENTMQMAAS-314.36",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.36",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-323.27"],
          startTime: "2018-10-02T00:31:01.000Z",
          endTime: "2018-10-03T08:07:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726688,
          code: "ENTMQMAAS-316.34",
        name: "[#604] : Address-controller: PUT method is not implemented.34",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.36"],
          startTime: "2018-10-03T08:07:41.000Z",
          endTime: "2018-10-04T15:44:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740536,
          code: "ENTMQMAAS-415.24",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.24",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-443.4","ENTMQMAAS-461.24","ENTMQMAAS-480.6"],
          startTime: "2018-10-04T15:44:21.000Z",
          endTime: "2018-10-05T23:21:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740623,
          code: "ENTMQMAAS-420.21",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....21",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-415.24"],
          startTime: "2018-10-05T23:21:01.000Z",
          endTime: "2018-10-07T06:57:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740630,
          code: "ENTMQMAAS-430.20",
        name: "[#1032] : system-tests: create new test for replace single address-space.20",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-421.25","ENTMQMAAS-420.21"],
          startTime: "2018-10-07T06:57:41.000Z",
          endTime: "2018-10-08T14:34:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740632,
          code: "ENTMQMAAS-432.20",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .20",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-412.15","ENTMQMAAS-430.20"],
          startTime: "2018-10-08T14:34:21.000Z",
          endTime: "2018-10-09T22:11:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741785,
          code: "ENTMQMAAS-449.16",
        name: "[#1074] : console: \"Results\" value is not updated after addresses are removed.16",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-432.20"],
          startTime: "2018-10-09T22:11:01.000Z",
          endTime: "2018-10-11T05:47:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742876,
          code: "ENTMQMAAS-454.12",
        name: "[#1103] : mqtt (standard-space): interoperability - send amqp, receive mqtt doesn't work.12",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-449.16"],
          startTime: "2018-10-11T05:47:41.000Z",
          endTime: "2018-10-12T13:24:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742875,
          code: "ENTMQMAAS-453.12",
        name: "[#1102] : mqtt (standard-space): Message with retained flag set to true are not received by subscribers.12",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-423.16","ENTMQMAAS-454.12"],
          startTime: "2018-10-12T13:24:21.000Z",
          endTime: "2018-10-13T21:01:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743377,
          code: "ENTMQMAAS-456.11",
        name: "[#1116] : system-tests: extend MQTT tests about testing \"will\" functionality.11",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-453.12"],
          startTime: "2018-10-13T21:01:01.000Z",
          endTime: "2018-10-15T04:37:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744738,
          code: "ENTMQMAAS-478.8",
        name: "[#1134] : resource defragmentation for pooled addresses doesn't work.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-456.11"],
          startTime: "2018-10-15T04:37:41.000Z",
          endTime: "2018-10-16T12:14:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744932,
          code: "ENTMQMAAS-480.7",
        name: "[#1136] : Auto scale down doesn't work when plan of address is changed.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-478.8"],
          startTime: "2018-10-16T12:14:21.000Z",
          endTime: "2018-10-17T19:51:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741043,
          code: "ENTMQMAAS-421.25",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.25",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-10-02T00:19:01.000Z",
          endTime: "2018-10-07T06:50:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740206,
          code: "ENTMQMAAS-423.16",
        name: "[#1027] : System-tests: create new test fo REST API - PUT | /v1/addresses/myspace/:name.16",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-10-07T06:50:01.000Z",
          endTime: "2018-10-12T13:21:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12745175,
          code: "ENTMQMAAS-461.26",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.26",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-10-12T13:21:01.000Z",
          endTime: "2018-10-17T19:52:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738526,
          code: "ENTMQMAAS-419.1",
        name: "Remove 'docker' for the templates and images.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-08T02:14:01.000Z",
          endTime: "2018-10-17T19:54:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12693636,
          code: "ENTMQMAAS-53.30",
        name: "Setup CI for product repositories.30",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2018-08-26T20:18:01.000Z",
          endTime: "2018-09-06T05:49:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12693635,
          code: "ENTMQMAAS-52.30",
        name: "Create copy of upstream repositories.30",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2018-09-06T05:49:13.000Z",
          endTime: "2018-09-16T15:20:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12728285,
          code: "ENTMQMAAS-323.27",
        name: "Creating and deleting addresses.27",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-323.26"],
          startTime: "2018-09-16T15:20:25.000Z",
          endTime: "2018-09-27T00:51:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12739400,
          code: "ENTMQMAAS-412.15",
        name: "[#1001] : Automatically create authorization groups in keycloak.15",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-09-27T00:51:37.000Z",
          endTime: "2018-10-07T10:22:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741388,
          code: "ENTMQMAAS-450.11",
        name: "[#1079] : standard-controller: is trying to connect to router which was already killed.11",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-10-07T10:22:49.000Z",
          endTime: "2018-10-17T19:54:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12728441,
          code: "ENTMQMAAS-328.6",
        name: "Document Creating and deleting addresses.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-03-19T06:05:01.000Z",
          endTime: "2018-04-12T10:54:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731950,
          code: "ENTMQMAAS-372.5",
        name: "Console: Create an Address wizard tooltip placement awkward.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-04-12T10:54:41.000Z",
          endTime: "2018-05-06T15:44:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12733575,
          code: "ENTMQMAAS-376.4",
        name: "Add Documentation Conventions to Guide.4",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-05-06T15:44:21.000Z",
          endTime: "2018-05-30T20:34:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737792,
          code: "ENTMQMAAS-410.3",
        name: "Docs: how to manage user permissions.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-05-30T20:34:01.000Z",
          endTime: "2018-06-24T01:23:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740187,
          code: "ENTMQMAAS-439.1",
        name: "Reference table for Developer role assumptions.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-06-24T01:23:41.000Z",
          endTime: "2018-07-18T06:13:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740294,
          code: "ENTMQMAAS-440.2",
        name: "Reference table for Developer role assumptions.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-07-18T06:13:21.000Z",
          endTime: "2018-08-11T11:03:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740396,
          code: "ENTMQMAAS-441.3",
        name: "Reference table for Developer role assumptions.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-08-11T11:03:01.000Z",
          endTime: "2018-09-04T15:52:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740498,
          code: "ENTMQMAAS-443.4",
        name: "Reference table for Developer role assumptions.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-09-04T15:52:41.000Z",
          endTime: "2018-09-28T20:42:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740205,
          code: "ENTMQMAAS-447.1",
        name: "Self-provision an address/destination.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-09-28T20:42:21.000Z",
          endTime: "2018-10-23T01:32:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12728541,
          code: "ENTMQMAAS-328.7",
        name: "Document Creating and deleting addresses.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.34"],
          startTime: "2018-10-23T01:32:01.000Z",
          endTime: "2018-10-25T05:16:37.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12732050,
          code: "ENTMQMAAS-372.6",
        name: "Console: Create an Address wizard tooltip placement awkward.6",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-328.7"],
          startTime: "2018-10-25T05:16:38.500Z",
          endTime: "2018-10-27T09:01:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12733675,
          code: "ENTMQMAAS-376.5",
        name: "Add Documentation Conventions to Guide.5",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-372.6"],
          startTime: "2018-10-27T09:01:16.000Z",
          endTime: "2018-10-29T12:45:52.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740587,
          code: "ENTMQMAAS-439.5",
        name: "Reference table for Developer role assumptions.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-480.7","ENTMQMAAS-461.26","ENTMQMAAS-419.1","ENTMQMAAS-450.11","ENTMQMAAS-447.1","ENTMQMAAS-4.16"],
          startTime: "2018-10-29T12:45:53.500Z",
          endTime: "2018-10-31T16:30:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740694,
          code: "ENTMQMAAS-440.6",
        name: "Reference table for Developer role assumptions.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-439.5"],
          startTime: "2018-10-31T16:30:31.000Z",
          endTime: "2018-11-02T20:15:07.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740796,
          code: "ENTMQMAAS-441.7",
        name: "Reference table for Developer role assumptions.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-440.6"],
          startTime: "2018-11-02T20:15:08.500Z",
          endTime: "2018-11-04T23:59:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740898,
          code: "ENTMQMAAS-443.8",
        name: "Reference table for Developer role assumptions.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-441.7"],
          startTime: "2018-11-04T23:59:46.000Z",
          endTime: "2018-11-07T03:44:22.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740305,
          code: "ENTMQMAAS-447.2",
        name: "Self-provision an address/destination.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-443.8"],
          startTime: "2018-11-07T03:44:23.500Z",
          endTime: "2018-11-09T07:29:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12745275,
          code: "ENTMQMAAS-461.27",
        name: "[#1025] : Artemis image throws unable to expand property AUTHENTICATION_SERVICE_HOST.27",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-10-17T19:52:01.000Z",
          endTime: "2018-11-18T23:24:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744094,
          code: "ENTMQMAAS-479.1",
        name: "Change header logo from EnMasse to AMQ Online for TP environment.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-04-09T05:33:01.000Z",
          endTime: "2018-11-18T23:56:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731074,
          code: "ENTMQMAAS-338.10",
        name: "[#750] : Handle scaledown of queues and topics at deploy time.10",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-05-10T05:38:01.000Z",
          endTime: "2018-05-14T15:12:22.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731080,
          code: "ENTMQMAAS-344.10",
        name: "[#756] : Monitoring for operator(us): prometheus for alerting and metrics, log aggregation/search for logs.10",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-323.22","ENTMQMAAS-338.10"],
          startTime: "2018-05-14T15:12:23.000Z",
          endTime: "2018-05-19T00:46:44.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731088,
          code: "ENTMQMAAS-352.10",
        name: "[#764] : Some level of metrics on address controller / standard controller to show prometheus metrics.10",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-344.10"],
          startTime: "2018-05-19T00:46:45.000Z",
          endTime: "2018-05-23T10:21:06.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731078,
          code: "ENTMQMAAS-342.10",
        name: "[#754] : Deploying keycloak in an HA configuration.10",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-05-23T10:21:07.000Z",
          endTime: "2018-05-27T19:55:28.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731049,
          code: "ENTMQMAAS-366.9",
        name: "[#778] : Integrate PUMBA into our testing environment? (task already exists for that, from Ulf) .9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-323.23","ENTMQMAAS-342.10"],
          startTime: "2018-05-27T19:55:29.000Z",
          endTime: "2018-06-01T05:29:50.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743358,
          code: "ENTMQMAAS-477.3",
        name: "As a Tenant Admin I need to create addresses which can store a copy of all messages sent to a different address even when no consumer is connected.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-06-01T05:29:51.000Z",
          endTime: "2018-06-05T15:04:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746680,
          code: "ENTMQMAAS-484.2",
        name: "As a System Admin I want to Install AMQ Online from templates.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-06-05T15:04:13.000Z",
          endTime: "2018-06-10T00:38:34.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746684,
          code: "ENTMQMAAS-488.2",
        name: "As a System Admin I want to Define address space plans for address spaces which use a single broker.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-484.2"],
          startTime: "2018-06-10T00:38:35.000Z",
          endTime: "2018-06-14T10:12:56.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746682,
          code: "ENTMQMAAS-486.2",
        name: "As a System Admin I want to Define address space plans for address spaces which use a dedicated network of routers and brokers.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-06-14T10:12:57.000Z",
          endTime: "2018-06-18T19:47:18.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746688,
          code: "ENTMQMAAS-492.2",
        name: "As a System Admin I want to Change plan for an existing address space.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-486.2"],
          startTime: "2018-06-18T19:47:19.000Z",
          endTime: "2018-06-23T05:21:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746695,
          code: "ENTMQMAAS-499.2",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using the service catalog on the same cluster.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-452.8","ENTMQMAAS-492.2"],
          startTime: "2018-06-23T05:21:41.000Z",
          endTime: "2018-06-27T14:56:02.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746681,
          code: "ENTMQMAAS-485.2",
        name: "As a System Admin I want to Install AMQ Online using Ansible playbooks.2",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-410.3","ENTMQMAAS-418.21","ENTMQMAAS-499.2"],
          startTime: "2018-06-27T14:56:03.000Z",
          endTime: "2018-07-02T00:30:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746741,
          code: "ENTMQMAAS-545.2",
        name: "As a Tenant Admin I want to Create addresses which send messages to all receivers for that address, and will buffer messages which cannot be consumed immediately where the number of receivers may be in the (tens of) thousands.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.29"],
          startTime: "2018-07-02T00:30:25.000Z",
          endTime: "2018-07-06T10:04:46.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746729,
          code: "ENTMQMAAS-533.2",
        name: "As a Tenant Admin I want to Create an address space with a plan that allocates dedicated resources to the address space whether they are used or not.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-545.2"],
          startTime: "2018-07-06T10:04:47.000Z",
          endTime: "2018-07-10T19:39:08.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746735,
          code: "ENTMQMAAS-539.2",
        name: "As a Tenant Admin I want to Bind an application to an address space using the Service Catalog (causing connection/credential information to be injected into the namespace of the application).2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-533.2"],
          startTime: "2018-07-10T19:39:09.000Z",
          endTime: "2018-07-15T05:13:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746736,
          code: "ENTMQMAAS-540.2",
        name: "As a Tenant Admin I want to Provide information in the binding request which determines the permissions associated with the binding (e.g. which address can be sent to/received from).2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.29","ENTMQMAAS-539.2"],
          startTime: "2018-07-15T05:13:31.000Z",
          endTime: "2018-07-19T14:47:52.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746728,
          code: "ENTMQMAAS-532.2",
        name: "As a Tenant Admin I want to Create a messaging instance which allows scaling to (tens of) thousands of connections / addresses and high throughput.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-540.2"],
          startTime: "2018-07-19T14:47:53.000Z",
          endTime: "2018-07-24T00:22:14.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746718,
          code: "ENTMQMAAS-522.2",
        name: "As a System Operator I want to Access the system logs for any component in any address space.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-532.2"],
          startTime: "2018-07-24T00:22:15.000Z",
          endTime: "2018-07-28T09:56:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746727,
          code: "ENTMQMAAS-531.2",
        name: "As a Tenant Admin I want to Create a messaging instance which provides full JMS semantics.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-522.2"],
          startTime: "2018-07-28T09:56:37.000Z",
          endTime: "2018-08-01T19:30:58.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746697,
          code: "ENTMQMAAS-501.2",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using the service catalog on multiple clusters.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-531.2"],
          startTime: "2018-08-01T19:30:59.000Z",
          endTime: "2018-08-06T05:05:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746734,
          code: "ENTMQMAAS-538.2",
        name: "As a Tenant Admin I want to Create/Manage an address space through a REST API.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-501.2"],
          startTime: "2018-08-06T05:05:21.000Z",
          endTime: "2018-08-10T14:39:42.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746699,
          code: "ENTMQMAAS-503.2",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using a REST API.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-538.2"],
          startTime: "2018-08-10T14:39:43.000Z",
          endTime: "2018-08-15T00:14:04.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746698,
          code: "ENTMQMAAS-502.2",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using custom resources.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-503.2"],
          startTime: "2018-08-15T00:14:05.000Z",
          endTime: "2018-08-19T09:48:26.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746740,
          code: "ENTMQMAAS-544.2",
        name: "As a Tenant Admin I want to Create addresess which allow a sender to send a message to a single receiver which is receiving from that address, but will fail to accept the message if their is no receiver able to immediately receive it.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-502.2"],
          startTime: "2018-08-19T09:48:27.000Z",
          endTime: "2018-08-23T19:22:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746709,
          code: "ENTMQMAAS-513.2",
        name: "As a System Admin I want to Configure the system to use a single source for authorisation configuration for all address spaces.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-544.2"],
          startTime: "2018-08-23T19:22:49.000Z",
          endTime: "2018-08-28T04:57:10.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746701,
          code: "ENTMQMAAS-505.2",
        name: "As a System Admin I want to Configure role-based access control to control who may create an address space (of a given type/plan) using the service catalog.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-513.2"],
          startTime: "2018-08-28T04:57:11.000Z",
          endTime: "2018-09-01T14:31:32.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746724,
          code: "ENTMQMAAS-528.2",
        name: "As a System Operator I want to Inspect the state of system component using their built-in monitoring tools (e.g. Broker console).2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-505.2"],
          startTime: "2018-09-01T14:31:33.000Z",
          endTime: "2018-09-06T00:05:54.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746711,
          code: "ENTMQMAAS-515.2",
        name: "As a System Admin I want to Configure the system such that all address spaces can receive messages from applications running outside the cluster.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-528.2"],
          startTime: "2018-09-06T00:05:55.000Z",
          endTime: "2018-09-10T09:40:16.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746732,
          code: "ENTMQMAAS-536.2",
        name: "As a Tenant Admin I want to Create an address space through the service catalog.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.30","ENTMQMAAS-515.2"],
          startTime: "2018-09-10T09:40:17.000Z",
          endTime: "2018-09-14T19:14:38.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746737,
          code: "ENTMQMAAS-541.2",
        name: "As a Tenant Admin I want to Provide a mechanism for a binding to occur between an application owned by a different user than that which created the service (Service Catalog).2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-536.2"],
          startTime: "2018-09-14T19:14:39.000Z",
          endTime: "2018-09-19T04:49:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746738,
          code: "ENTMQMAAS-542.2",
        name: "As a Tenant Admin I want to Delete a binding from the service, removing any associated credentials.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.30","ENTMQMAAS-541.2"],
          startTime: "2018-09-19T04:49:01.000Z",
          endTime: "2018-09-23T14:23:22.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746708,
          code: "ENTMQMAAS-512.2",
        name: "As a System Admin I want to Configure the system to restrict address spaces to use source for identity/authentication from a restricted list.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-542.2"],
          startTime: "2018-09-23T14:23:23.000Z",
          endTime: "2018-09-27T23:57:44.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746696,
          code: "ENTMQMAAS-500.2",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using the service catalog on a different cluster.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-512.2"],
          startTime: "2018-09-27T23:57:45.000Z",
          endTime: "2018-10-02T09:32:06.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746710,
          code: "ENTMQMAAS-514.2",
        name: "As a System Admin I want to Configure the system to use allow address spaces to manage their own authorisation.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-500.2"],
          startTime: "2018-10-02T09:32:07.000Z",
          endTime: "2018-10-06T19:06:28.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746700,
          code: "ENTMQMAAS-504.2",
        name: "As a System Admin I want to Configure role-based access control to control who may create an address space of a given type/plen an address space using the REST API.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-514.2"],
          startTime: "2018-10-06T19:06:29.000Z",
          endTime: "2018-10-11T04:40:50.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746739,
          code: "ENTMQMAAS-543.2",
        name: "As a Tenant Admin I want to Create addresses which provide reliable store and forward messaging from a sender to a single receiver (amongst potentially many) listening on that address.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-504.2"],
          startTime: "2018-10-11T04:40:51.000Z",
          endTime: "2018-10-15T14:15:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746733,
          code: "ENTMQMAAS-537.2",
        name: "As a Tenant Admin I want to Create an address space using custom resources.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-543.2"],
          startTime: "2018-10-15T14:15:13.000Z",
          endTime: "2018-10-19T23:49:34.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746721,
          code: "ENTMQMAAS-525.2",
        name: "As a System Operator I want to \"Restart\" an individual component or a single address space.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-537.2"],
          startTime: "2018-10-19T23:49:35.000Z",
          endTime: "2018-10-24T09:23:56.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746730,
          code: "ENTMQMAAS-534.2",
        name: "As a Tenant Admin I want to Create an address space with a plan that allocates resources as they are required, but each allocated resource is dedicated to that single address space.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-525.2"],
          startTime: "2018-10-24T09:23:57.000Z",
          endTime: "2018-10-28T18:58:18.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746750,
          code: "ENTMQMAAS-554.2",
        name: "As a Tenant Admin I want to View on a single screen all the address spaces which I can administer.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-534.2"],
          startTime: "2018-10-28T18:58:19.000Z",
          endTime: "2018-11-02T04:32:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746788,
          code: "ENTMQMAAS-592.2",
        name: "As a Developer I want to Send and receive messages within a (local) transaction (AMQP only).2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-554.2"],
          startTime: "2018-11-02T04:32:41.000Z",
          endTime: "2018-11-06T14:07:02.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746779,
          code: "ENTMQMAAS-583.2",
        name: "As a Developer I want to Connect to a messaging space from outside the cluster using the AMQP protocol using TLS over WebSockets.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-592.2"],
          startTime: "2018-11-06T14:07:03.000Z",
          endTime: "2018-11-10T23:41:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746749,
          code: "ENTMQMAAS-553.2",
        name: "As a Tenant Admin I want to Change the plan associated with an address to reflect changing resource requirements.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-583.2"],
          startTime: "2018-11-10T23:41:25.000Z",
          endTime: "2018-11-15T09:15:46.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746756,
          code: "ENTMQMAAS-560.2",
        name: "As a Tenant Admin I want to Asign permissions to address space users to allow them to send/receive/create/delete/manage addresses of a given name/pattern.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-553.2"],
          startTime: "2018-11-15T09:15:47.000Z",
          endTime: "2018-11-19T18:50:08.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746746,
          code: "ENTMQMAAS-550.2",
        name: "As a Tenant Admin I want to Create an address which, when received from, fetches messages from an address in a different address space potentially in a different system/cluster.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-560.2"],
          startTime: "2018-11-19T18:50:09.000Z",
          endTime: "2018-11-24T04:24:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746783,
          code: "ENTMQMAAS-587.2",
        name: "As a Developer I want to Connect to a messaging space from inside the cluster using the AMQP protocol (optionally using TLS) over WebSockets.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-550.2"],
          startTime: "2018-11-24T04:24:31.000Z",
          endTime: "2018-11-28T13:58:52.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746742,
          code: "ENTMQMAAS-546.2",
        name: "As a Tenant Admin I want to Create addresses which send messages to all receivers for that address, but which provide no buffering/storage (where the number of receivers may be in the (tens of) thousands).2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-587.2"],
          startTime: "2018-11-28T13:58:53.000Z",
          endTime: "2018-12-02T23:33:14.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746786,
          code: "ENTMQMAAS-590.2",
        name: "As a Developer I want to Send a message to a destination using at-least-once semantics.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-546.2"],
          startTime: "2018-12-02T23:33:15.000Z",
          endTime: "2018-12-07T09:07:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746778,
          code: "ENTMQMAAS-582.2",
        name: "As a Developer I want to Connect to a messaging space from outside the cluster using the MQTT protocol using TLS over TCP.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-590.2"],
          startTime: "2018-12-07T09:07:37.000Z",
          endTime: "2018-12-11T18:41:58.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746791,
          code: "ENTMQMAAS-595.2",
        name: "As a Developer I want to Receive messages from an address using a filter (selector) to exclude unwanted messages from consumption.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-582.2"],
          startTime: "2018-12-11T18:41:59.000Z",
          endTime: "2018-12-16T04:16:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746785,
          code: "ENTMQMAAS-589.2",
        name: "As a Developer I want to Send a message to a destination using at-most-once semantics.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-595.2"],
          startTime: "2018-12-16T04:16:21.000Z",
          endTime: "2018-12-20T13:50:42.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746782,
          code: "ENTMQMAAS-586.2",
        name: "As a Developer I want to Connect to a messaging space from inside the cluster using the MQTT protocol (optionally using TLS) over TCP.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-589.2"],
          startTime: "2018-12-20T13:50:43.000Z",
          endTime: "2018-12-24T23:25:04.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746748,
          code: "ENTMQMAAS-552.2",
        name: "As a Tenant Admin I want to On creating an address select a plan from a fixed list which defines the expected resource requirements for that list.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-586.2"],
          startTime: "2018-12-24T23:25:05.000Z",
          endTime: "2018-12-29T08:59:26.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746793,
          code: "ENTMQMAAS-597.2",
        name: "As a Developer I want to receive from an address using at-most-once semantics.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-552.2"],
          startTime: "2018-12-29T08:59:27.000Z",
          endTime: "2019-01-02T18:33:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746781,
          code: "ENTMQMAAS-585.2",
        name: "As a Developer I want to Connect to a messaging space from inside the cluster using the AMQP protocol (optionally using TLS) over TCP.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-597.2"],
          startTime: "2019-01-02T18:33:49.000Z",
          endTime: "2019-01-07T04:08:10.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746794,
          code: "ENTMQMAAS-598.2",
        name: "As a Developer I want to receive from an address using at-least-once semantics.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-585.2"],
          startTime: "2019-01-07T04:08:11.000Z",
          endTime: "2019-01-11T13:42:32.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746755,
          code: "ENTMQMAAS-559.2",
        name: "As a Tenant Admin I want to Create/delete users specific to the address space.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-598.2"],
          startTime: "2019-01-11T13:42:33.000Z",
          endTime: "2019-01-15T23:16:54.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746790,
          code: "ENTMQMAAS-594.2",
        name: "As a Developer I want to Browse messages on a queue (i.e. iterate over stored messages without consuming them).2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-559.2"],
          startTime: "2019-01-15T23:16:55.000Z",
          endTime: "2019-01-20T08:51:16.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746777,
          code: "ENTMQMAAS-581.2",
        name: "As a Developer I want to Connect to a messaging space from outside the cluster using the AMQP protocol using TLS over TCP.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-594.2"],
          startTime: "2019-01-20T08:51:17.000Z",
          endTime: "2019-01-24T18:25:38.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746744,
          code: "ENTMQMAAS-548.2",
        name: "As a Tenant Admin I want to Create an address which, when sent to, forwards the message to an address in a different address space potentially in a different system/cluster.2",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-581.2"],
          startTime: "2019-01-24T18:25:39.000Z",
          endTime: "2019-01-29T04:00:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731174,
          code: "ENTMQMAAS-338.11",
        name: "[#750] : Handle scaledown of queues and topics at deploy time.11",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-372.7"],
          startTime: "2019-01-29T04:02:01.000Z",
          endTime: "2019-01-29T06:32:11.538Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731180,
          code: "ENTMQMAAS-344.11",
        name: "[#756] : Monitoring for operator(us): prometheus for alerting and metrics, log aggregation/search for logs.11",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-338.11"],
          startTime: "2019-01-29T06:32:12.538Z",
          endTime: "2019-01-29T09:02:23.076Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731188,
          code: "ENTMQMAAS-352.11",
        name: "[#764] : Some level of metrics on address controller / standard controller to show prometheus metrics.11",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-344.11"],
          startTime: "2019-01-29T09:02:24.076Z",
          endTime: "2019-01-29T11:32:34.614Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731178,
          code: "ENTMQMAAS-342.11",
        name: "[#754] : Deploying keycloak in an HA configuration.11",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-352.11"],
          startTime: "2019-01-29T11:32:35.615Z",
          endTime: "2019-01-29T14:02:46.153Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731149,
          code: "ENTMQMAAS-366.10",
        name: "[#778] : Integrate PUMBA into our testing environment? (task already exists for that, from Ulf) .10",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-342.11"],
          startTime: "2019-01-29T14:02:47.153Z",
          endTime: "2019-01-29T16:32:57.691Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746780,
          code: "ENTMQMAAS-484.3",
        name: "As a System Admin I want to Install AMQ Online from templates.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-454.13"],
          startTime: "2019-01-29T16:32:58.692Z",
          endTime: "2019-01-29T19:03:09.230Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746788,
          code: "ENTMQMAAS-492.3",
        name: "As a System Admin I want to Change plan for an existing address space.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-484.3"],
          startTime: "2019-01-29T19:03:10.230Z",
          endTime: "2019-01-29T21:33:20.768Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746795,
          code: "ENTMQMAAS-499.3",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using the service catalog on the same cluster.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-492.3"],
          startTime: "2019-01-29T21:33:21.769Z",
          endTime: "2019-01-30T00:03:32.307Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746835,
          code: "ENTMQMAAS-539.3",
        name: "As a Tenant Admin I want to Bind an application to an address space using the Service Catalog (causing connection/credential information to be injected into the namespace of the application).3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-548.2"],
          startTime: "2019-01-30T00:03:33.307Z",
          endTime: "2019-01-30T02:33:43.845Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746836,
          code: "ENTMQMAAS-540.3",
        name: "As a Tenant Admin I want to Provide information in the binding request which determines the permissions associated with the binding (e.g. which address can be sent to/received from).3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-539.3"],
          startTime: "2019-01-30T02:33:44.846Z",
          endTime: "2019-01-30T05:03:55.384Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746797,
          code: "ENTMQMAAS-501.3",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using the service catalog on multiple clusters.3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-540.3"],
          startTime: "2019-01-30T05:03:56.384Z",
          endTime: "2019-01-30T07:34:06.922Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746809,
          code: "ENTMQMAAS-513.3",
        name: "As a System Admin I want to Configure the system to use a single source for authorisation configuration for all address spaces.3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-501.3"],
          startTime: "2019-01-30T07:34:07.923Z",
          endTime: "2019-01-30T10:04:18.461Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746801,
          code: "ENTMQMAAS-505.3",
        name: "As a System Admin I want to Configure role-based access control to control who may create an address space (of a given type/plan) using the service catalog.3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-513.3"],
          startTime: "2019-01-30T10:04:19.461Z",
          endTime: "2019-01-30T12:34:29.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746832,
          code: "ENTMQMAAS-536.3",
        name: "As a Tenant Admin I want to Create an address space through the service catalog.3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-505.3"],
          startTime: "2019-01-30T12:34:31.000Z",
          endTime: "2019-01-30T15:04:41.538Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746837,
          code: "ENTMQMAAS-541.3",
        name: "As a Tenant Admin I want to Provide a mechanism for a binding to occur between an application owned by a different user than that which created the service (Service Catalog).3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-536.3"],
          startTime: "2019-01-30T15:04:42.538Z",
          endTime: "2019-01-30T17:34:53.076Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746838,
          code: "ENTMQMAAS-542.3",
        name: "As a Tenant Admin I want to Delete a binding from the service, removing any associated credentials.3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-541.3"],
          startTime: "2019-01-30T17:34:54.076Z",
          endTime: "2019-01-30T20:05:04.614Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746808,
          code: "ENTMQMAAS-512.3",
        name: "As a System Admin I want to Configure the system to restrict address spaces to use source for identity/authentication from a restricted list.3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-542.3"],
          startTime: "2019-01-30T20:05:05.615Z",
          endTime: "2019-01-30T22:35:16.153Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746796,
          code: "ENTMQMAAS-500.3",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using the service catalog on a different cluster.3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-512.3"],
          startTime: "2019-01-30T22:35:17.153Z",
          endTime: "2019-01-31T01:05:27.691Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746810,
          code: "ENTMQMAAS-514.3",
        name: "As a System Admin I want to Configure the system to use allow address spaces to manage their own authorisation.3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-500.3"],
          startTime: "2019-01-31T01:05:28.692Z",
          endTime: "2019-01-31T03:35:39.230Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746800,
          code: "ENTMQMAAS-504.3",
        name: "As a System Admin I want to Configure role-based access control to control who may create an address space of a given type/plen an address space using the REST API.3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-514.3"],
          startTime: "2019-01-31T03:35:40.230Z",
          endTime: "2019-01-31T06:05:50.768Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746833,
          code: "ENTMQMAAS-537.3",
        name: "As a Tenant Admin I want to Create an address space using custom resources.3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-504.3"],
          startTime: "2019-01-31T06:05:51.769Z",
          endTime: "2019-01-31T08:36:02.307Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746850,
          code: "ENTMQMAAS-554.3",
        name: "As a Tenant Admin I want to View on a single screen all the address spaces which I can administer.3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-537.3"],
          startTime: "2019-01-31T08:36:03.307Z",
          endTime: "2019-01-31T11:06:13.845Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746846,
          code: "ENTMQMAAS-550.3",
        name: "As a Tenant Admin I want to Create an address which, when received from, fetches messages from an address in a different address space potentially in a different system/cluster.3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-554.3"],
          startTime: "2019-01-31T11:06:14.846Z",
          endTime: "2019-01-31T13:36:25.384Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746883,
          code: "ENTMQMAAS-587.3",
        name: "As a Developer I want to Connect to a messaging space from inside the cluster using the AMQP protocol (optionally using TLS) over WebSockets.3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-550.3"],
          startTime: "2019-01-31T13:36:26.384Z",
          endTime: "2019-01-31T16:06:36.922Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746881,
          code: "ENTMQMAAS-585.3",
        name: "As a Developer I want to Connect to a messaging space from inside the cluster using the AMQP protocol (optionally using TLS) over TCP.3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-587.3"],
          startTime: "2019-01-31T16:06:37.923Z",
          endTime: "2019-01-31T18:36:48.461Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746844,
          code: "ENTMQMAAS-548.3",
        name: "As a Tenant Admin I want to Create an address which, when sent to, forwards the message to an address in a different address space potentially in a different system/cluster.3",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-585.3"],
          startTime: "2019-01-31T18:36:49.461Z",
          endTime: "2019-01-31T21:06:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726574,
          code: "ENTMQMAAS-314.37",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.37",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-10-17T19:51:01.000Z",
          endTime: "2018-10-31T22:48:10.909Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726788,
          code: "ENTMQMAAS-316.35",
        name: "[#604] : Address-controller: PUT method is not implemented.35",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-376.5","ENTMQMAAS-314.37"],
          startTime: "2018-10-31T22:48:11.909Z",
          endTime: "2018-11-15T01:45:21.818Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740636,
          code: "ENTMQMAAS-415.25",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.25",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-447.2"],
          startTime: "2018-11-15T01:45:22.818Z",
          endTime: "2018-11-29T04:42:32.727Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740723,
          code: "ENTMQMAAS-420.22",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....22",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-461.27","ENTMQMAAS-479.1","ENTMQMAAS-415.25"],
          startTime: "2018-11-29T04:42:33.727Z",
          endTime: "2018-12-13T07:39:43.636Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740730,
          code: "ENTMQMAAS-430.21",
        name: "[#1032] : system-tests: create new test for replace single address-space.21",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-420.22"],
          startTime: "2018-12-13T07:39:44.636Z",
          endTime: "2018-12-27T10:36:54.545Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740732,
          code: "ENTMQMAAS-432.21",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .21",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-430.21"],
          startTime: "2018-12-27T10:36:55.545Z",
          endTime: "2019-01-10T13:34:05.454Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742976,
          code: "ENTMQMAAS-454.13",
        name: "[#1103] : mqtt (standard-space): interoperability - send amqp, receive mqtt doesn't work.13",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-432.21"],
          startTime: "2019-01-10T13:34:06.454Z",
          endTime: "2019-01-24T16:31:16.363Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12742975,
          code: "ENTMQMAAS-453.13",
        name: "[#1102] : mqtt (standard-space): Message with retained flag set to true are not received by subscribers.13",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2019-01-24T16:31:17.363Z",
          endTime: "2019-02-07T19:28:27.272Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743477,
          code: "ENTMQMAAS-456.12",
        name: "[#1116] : system-tests: extend MQTT tests about testing \"will\" functionality.12",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-499.3","ENTMQMAAS-453.13"],
          startTime: "2019-02-07T19:28:28.272Z",
          endTime: "2019-02-21T22:25:38.181Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744838,
          code: "ENTMQMAAS-478.9",
        name: "[#1134] : resource defragmentation for pooled addresses doesn't work.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2019-02-21T22:25:39.181Z",
          endTime: "2019-03-08T01:22:49.090Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12745032,
          code: "ENTMQMAAS-480.8",
        name: "[#1136] : Auto scale down doesn't work when plan of address is changed.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-499.4","ENTMQMAAS-478.9"],
          startTime: "2019-03-08T01:22:50.090Z",
          endTime: "2019-03-22T04:19:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12728641,
          code: "ENTMQMAAS-328.8",
        name: "Document Creating and deleting addresses.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2018-11-09T07:29:01.000Z",
          endTime: "2018-12-10T20:17:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12732150,
          code: "ENTMQMAAS-372.7",
        name: "Console: Create an Address wizard tooltip placement awkward.7",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.35","ENTMQMAAS-328.8"],
          startTime: "2018-12-10T20:17:35.285Z",
          endTime: "2019-01-11T09:06:08.570Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740987,
          code: "ENTMQMAAS-439.9",
        name: "Reference table for Developer role assumptions.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2019-01-11T09:06:09.571Z",
          endTime: "2019-02-11T21:54:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741094,
          code: "ENTMQMAAS-440.10",
        name: "Reference table for Developer role assumptions.10",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2019-02-11T21:54:43.857Z",
          endTime: "2019-03-15T10:43:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741196,
          code: "ENTMQMAAS-441.11",
        name: "Reference table for Developer role assumptions.11",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-440.10"],
          startTime: "2019-03-15T10:43:18.142Z",
          endTime: "2019-04-15T23:31:51.427Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741298,
          code: "ENTMQMAAS-443.12",
        name: "Reference table for Developer role assumptions.12",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2019-04-15T23:31:52.428Z",
          endTime: "2019-05-17T12:20:25.713Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740405,
          code: "ENTMQMAAS-447.3",
        name: "Self-provision an address/destination.3",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2019-05-17T12:20:26.714Z",
          endTime: "2019-06-18T01:08:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726674,
          code: "ENTMQMAAS-314.38",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.38",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-366.11"],
          startTime: "2019-03-22T04:20:01.000Z",
          endTime: "2019-03-30T23:19:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726888,
          code: "ENTMQMAAS-316.36",
        name: "[#604] : Address-controller: PUT method is not implemented.36",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-314.38"],
          startTime: "2019-03-30T23:19:37.000Z",
          endTime: "2019-04-08T18:19:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740736,
          code: "ENTMQMAAS-415.26",
        name: "[#1014] : deprovisioning router resources doesn't work in standard-space.26",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-480.8","ENTMQMAAS-49.15"],
          startTime: "2019-04-08T18:19:13.000Z",
          endTime: "2019-04-17T13:18:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740823,
          code: "ENTMQMAAS-420.23",
        name: "[#1024] : update resource-definition - add comments which fetures are enabled/disabled ....23",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-441.11","ENTMQMAAS-415.26"],
          startTime: "2019-04-17T13:18:49.000Z",
          endTime: "2019-04-26T08:18:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740830,
          code: "ENTMQMAAS-430.22",
        name: "[#1032] : system-tests: create new test for replace single address-space.22",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-420.23"],
          startTime: "2019-04-26T08:18:25.000Z",
          endTime: "2019-05-05T03:18:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740832,
          code: "ENTMQMAAS-432.22",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .22",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-430.22"],
          startTime: "2019-05-05T03:18:01.000Z",
          endTime: "2019-05-13T22:17:36.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743076,
          code: "ENTMQMAAS-454.14",
        name: "[#1103] : mqtt (standard-space): interoperability - send amqp, receive mqtt doesn't work.14",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-432.22"],
          startTime: "2019-05-13T22:17:37.000Z",
          endTime: "2019-05-22T17:17:12.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743075,
          code: "ENTMQMAAS-453.14",
        name: "[#1102] : mqtt (standard-space): Message with retained flag set to true are not received by subscribers.14",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-443.12","ENTMQMAAS-454.14"],
          startTime: "2019-05-22T17:17:13.000Z",
          endTime: "2019-05-31T12:16:48.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743577,
          code: "ENTMQMAAS-456.13",
        name: "[#1116] : system-tests: extend MQTT tests about testing \"will\" functionality.13",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-453.14"],
          startTime: "2019-05-31T12:16:49.000Z",
          endTime: "2019-06-09T07:16:24.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12744938,
          code: "ENTMQMAAS-478.10",
        name: "[#1134] : resource defragmentation for pooled addresses doesn't work.10",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-456.13"],
          startTime: "2019-06-09T07:16:25.000Z",
          endTime: "2019-06-18T02:16:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731280,
          code: "ENTMQMAAS-344.12",
        name: "[#756] : Monitoring for operator(us): prometheus for alerting and metrics, log aggregation/search for logs.12",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-366.10"],
          startTime: "2019-01-31T21:08:01.000Z",
          endTime: "2019-02-06T14:23:27.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731278,
          code: "ENTMQMAAS-342.12",
        name: "[#754] : Deploying keycloak in an HA configuration.12",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-344.12"],
          startTime: "2019-02-06T14:23:28.500Z",
          endTime: "2019-02-12T07:38:55.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731249,
          code: "ENTMQMAAS-366.11",
        name: "[#778] : Integrate PUMBA into our testing environment? (task already exists for that, from Ulf) .11",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-342.12"],
          startTime: "2019-02-12T07:38:56.000Z",
          endTime: "2019-02-18T00:54:22.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746880,
          code: "ENTMQMAAS-484.4",
        name: "As a System Admin I want to Install AMQ Online from templates.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-439.9"],
          startTime: "2019-02-18T00:54:23.500Z",
          endTime: "2019-02-23T18:09:50.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746888,
          code: "ENTMQMAAS-492.4",
        name: "As a System Admin I want to Change plan for an existing address space.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-456.12","ENTMQMAAS-484.4"],
          startTime: "2019-02-23T18:09:51.000Z",
          endTime: "2019-03-01T11:25:17.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746895,
          code: "ENTMQMAAS-499.4",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using the service catalog on the same cluster.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-492.4"],
          startTime: "2019-03-01T11:25:18.500Z",
          endTime: "2019-03-07T04:40:45.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746935,
          code: "ENTMQMAAS-539.4",
        name: "As a Tenant Admin I want to Bind an application to an address space using the Service Catalog (causing connection/credential information to be injected into the namespace of the application).4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-548.3","ENTMQMAAS-53.31"],
          startTime: "2019-03-07T04:40:46.000Z",
          endTime: "2019-03-12T21:56:12.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746936,
          code: "ENTMQMAAS-540.4",
        name: "As a Tenant Admin I want to Provide information in the binding request which determines the permissions associated with the binding (e.g. which address can be sent to/received from).4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-539.4"],
          startTime: "2019-03-12T21:56:13.500Z",
          endTime: "2019-03-18T15:11:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746897,
          code: "ENTMQMAAS-501.4",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using the service catalog on multiple clusters.4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-540.4"],
          startTime: "2019-03-18T15:11:41.000Z",
          endTime: "2019-03-24T08:27:07.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746909,
          code: "ENTMQMAAS-513.4",
        name: "As a System Admin I want to Configure the system to use a single source for authorisation configuration for all address spaces.4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-501.4"],
          startTime: "2019-03-24T08:27:08.500Z",
          endTime: "2019-03-30T01:42:35.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746901,
          code: "ENTMQMAAS-505.4",
        name: "As a System Admin I want to Configure role-based access control to control who may create an address space (of a given type/plan) using the service catalog.4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-513.4"],
          startTime: "2019-03-30T01:42:36.000Z",
          endTime: "2019-04-04T18:58:02.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746932,
          code: "ENTMQMAAS-536.4",
        name: "As a Tenant Admin I want to Create an address space through the service catalog.4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-505.4"],
          startTime: "2019-04-04T18:58:03.500Z",
          endTime: "2019-04-10T12:13:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746937,
          code: "ENTMQMAAS-541.4",
        name: "As a Tenant Admin I want to Provide a mechanism for a binding to occur between an application owned by a different user than that which created the service (Service Catalog).4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-536.4"],
          startTime: "2019-04-10T12:13:31.000Z",
          endTime: "2019-04-16T05:28:57.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746938,
          code: "ENTMQMAAS-542.4",
        name: "As a Tenant Admin I want to Delete a binding from the service, removing any associated credentials.4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-541.4"],
          startTime: "2019-04-16T05:28:58.500Z",
          endTime: "2019-04-21T22:44:25.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746908,
          code: "ENTMQMAAS-512.4",
        name: "As a System Admin I want to Configure the system to restrict address spaces to use source for identity/authentication from a restricted list.4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-542.4"],
          startTime: "2019-04-21T22:44:26.000Z",
          endTime: "2019-04-27T15:59:52.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746896,
          code: "ENTMQMAAS-500.4",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using the service catalog on a different cluster.4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-512.4"],
          startTime: "2019-04-27T15:59:53.500Z",
          endTime: "2019-05-03T09:15:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746910,
          code: "ENTMQMAAS-514.4",
        name: "As a System Admin I want to Configure the system to use allow address spaces to manage their own authorisation.4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-500.4"],
          startTime: "2019-05-03T09:15:21.000Z",
          endTime: "2019-05-09T02:30:47.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746900,
          code: "ENTMQMAAS-504.4",
        name: "As a System Admin I want to Configure role-based access control to control who may create an address space of a given type/plen an address space using the REST API.4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-514.4"],
          startTime: "2019-05-09T02:30:48.500Z",
          endTime: "2019-05-14T19:46:15.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746933,
          code: "ENTMQMAAS-537.4",
        name: "As a Tenant Admin I want to Create an address space using custom resources.4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-504.4"],
          startTime: "2019-05-14T19:46:16.000Z",
          endTime: "2019-05-20T13:01:42.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746950,
          code: "ENTMQMAAS-554.4",
        name: "As a Tenant Admin I want to View on a single screen all the address spaces which I can administer.4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-537.4"],
          startTime: "2019-05-20T13:01:43.500Z",
          endTime: "2019-05-26T06:17:10.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746946,
          code: "ENTMQMAAS-550.4",
        name: "As a Tenant Admin I want to Create an address which, when received from, fetches messages from an address in a different address space potentially in a different system/cluster.4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-554.4"],
          startTime: "2019-05-26T06:17:11.000Z",
          endTime: "2019-05-31T23:32:37.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746983,
          code: "ENTMQMAAS-587.4",
        name: "As a Developer I want to Connect to a messaging space from inside the cluster using the AMQP protocol (optionally using TLS) over WebSockets.4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-550.4"],
          startTime: "2019-05-31T23:32:38.500Z",
          endTime: "2019-06-06T16:48:05.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746981,
          code: "ENTMQMAAS-585.4",
        name: "As a Developer I want to Connect to a messaging space from inside the cluster using the AMQP protocol (optionally using TLS) over TCP.4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.31","ENTMQMAAS-587.4"],
          startTime: "2019-06-06T16:48:06.000Z",
          endTime: "2019-06-12T10:03:32.500Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746944,
          code: "ENTMQMAAS-548.4",
        name: "As a Tenant Admin I want to Create an address which, when sent to, forwards the message to an address in a different address space potentially in a different system/cluster.4",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-585.4"],
          startTime: "2019-06-12T10:03:33.500Z",
          endTime: "2019-06-18T03:19:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12732250,
          code: "ENTMQMAAS-372.8",
        name: "Console: Create an Address wizard tooltip placement awkward.8",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.36"],
          startTime: "2019-06-18T01:09:01.000Z",
          endTime: "2019-06-18T10:18:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741387,
          code: "ENTMQMAAS-439.13",
        name: "Reference table for Developer role assumptions.13",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-447.3","ENTMQMAAS-478.10"],
          startTime: "2019-06-18T10:18:21.000Z",
          endTime: "2019-06-18T19:27:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741494,
          code: "ENTMQMAAS-440.14",
        name: "Reference table for Developer role assumptions.14",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-439.13"],
          startTime: "2019-06-18T19:27:41.000Z",
          endTime: "2019-06-19T04:37:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741596,
          code: "ENTMQMAAS-441.15",
        name: "Reference table for Developer role assumptions.15",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-440.14"],
          startTime: "2019-06-19T04:37:01.000Z",
          endTime: "2019-06-19T13:46:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741698,
          code: "ENTMQMAAS-443.16",
        name: "Reference table for Developer role assumptions.16",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-441.15"],
          startTime: "2019-06-19T13:46:21.000Z",
          endTime: "2019-06-19T22:55:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740505,
          code: "ENTMQMAAS-447.4",
        name: "Self-provision an address/destination.4",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-443.16"],
          startTime: "2019-06-19T22:55:41.000Z",
          endTime: "2019-06-20T08:05:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12732350,
          code: "ENTMQMAAS-372.9",
        name: "Console: Create an Address wizard tooltip placement awkward.9",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-372.8"],
          startTime: "2019-06-20T08:09:01.000Z",
          endTime: "2019-06-22T17:31:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740605,
          code: "ENTMQMAAS-447.5",
        name: "Self-provision an address/destination.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-447.4"],
          startTime: "2019-06-22T17:31:31.000Z",
          endTime: "2019-06-25T02:54:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731378,
          code: "ENTMQMAAS-342.13",
        name: "[#754] : Deploying keycloak in an HA configuration.13",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2019-06-18T03:21:01.000Z",
          endTime: "2019-06-25T04:48:46.363Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746980,
          code: "ENTMQMAAS-484.5",
        name: "As a System Admin I want to Install AMQ Online from templates.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-447.5"],
          startTime: "2019-06-25T04:48:47.363Z",
          endTime: "2019-07-02T06:16:32.726Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746988,
          code: "ENTMQMAAS-492.5",
        name: "As a System Admin I want to Change plan for an existing address space.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-484.5"],
          startTime: "2019-07-02T06:16:33.727Z",
          endTime: "2019-07-09T07:44:19.090Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746995,
          code: "ENTMQMAAS-499.5",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using the service catalog on the same cluster.5",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-492.5"],
          startTime: "2019-07-09T07:44:20.090Z",
          endTime: "2019-07-16T09:12:05.453Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747035,
          code: "ENTMQMAAS-539.5",
        name: "As a Tenant Admin I want to Bind an application to an address space using the Service Catalog (causing connection/credential information to be injected into the namespace of the application).5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-548.4"],
          startTime: "2019-07-16T09:12:06.454Z",
          endTime: "2019-07-23T10:39:51.817Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747036,
          code: "ENTMQMAAS-540.5",
        name: "As a Tenant Admin I want to Provide information in the binding request which determines the permissions associated with the binding (e.g. which address can be sent to/received from).5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-539.5"],
          startTime: "2019-07-23T10:39:52.818Z",
          endTime: "2019-07-30T12:07:38.181Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746997,
          code: "ENTMQMAAS-501.5",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using the service catalog on multiple clusters.5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-540.5"],
          startTime: "2019-07-30T12:07:39.181Z",
          endTime: "2019-08-06T13:35:24.544Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747009,
          code: "ENTMQMAAS-513.5",
        name: "As a System Admin I want to Configure the system to use a single source for authorisation configuration for all address spaces.5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-501.5"],
          startTime: "2019-08-06T13:35:25.545Z",
          endTime: "2019-08-13T15:03:10.908Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747001,
          code: "ENTMQMAAS-505.5",
        name: "As a System Admin I want to Configure role-based access control to control who may create an address space (of a given type/plan) using the service catalog.5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-513.5"],
          startTime: "2019-08-13T15:03:11.909Z",
          endTime: "2019-08-20T16:30:57.272Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747032,
          code: "ENTMQMAAS-536.5",
        name: "As a Tenant Admin I want to Create an address space through the service catalog.5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-50.14","ENTMQMAAS-505.5"],
          startTime: "2019-08-20T16:30:58.272Z",
          endTime: "2019-08-27T17:58:43.635Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747037,
          code: "ENTMQMAAS-541.5",
        name: "As a Tenant Admin I want to Provide a mechanism for a binding to occur between an application owned by a different user than that which created the service (Service Catalog).5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-536.5"],
          startTime: "2019-08-27T17:58:44.636Z",
          endTime: "2019-09-03T19:26:29.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747038,
          code: "ENTMQMAAS-542.5",
        name: "As a Tenant Admin I want to Delete a binding from the service, removing any associated credentials.5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-541.5"],
          startTime: "2019-09-03T19:26:31.000Z",
          endTime: "2019-09-10T20:54:16.363Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747008,
          code: "ENTMQMAAS-512.5",
        name: "As a System Admin I want to Configure the system to restrict address spaces to use source for identity/authentication from a restricted list.5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-542.5"],
          startTime: "2019-09-10T20:54:17.363Z",
          endTime: "2019-09-17T22:22:02.726Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12746996,
          code: "ENTMQMAAS-500.5",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using the service catalog on a different cluster.5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-512.5"],
          startTime: "2019-09-17T22:22:03.727Z",
          endTime: "2019-09-24T23:49:49.090Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747010,
          code: "ENTMQMAAS-514.5",
        name: "As a System Admin I want to Configure the system to use allow address spaces to manage their own authorisation.5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-500.5"],
          startTime: "2019-09-24T23:49:50.090Z",
          endTime: "2019-10-02T01:17:35.453Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747000,
          code: "ENTMQMAAS-504.5",
        name: "As a System Admin I want to Configure role-based access control to control who may create an address space of a given type/plen an address space using the REST API.5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-514.5"],
          startTime: "2019-10-02T01:17:36.454Z",
          endTime: "2019-10-09T02:45:21.817Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747033,
          code: "ENTMQMAAS-537.5",
        name: "As a Tenant Admin I want to Create an address space using custom resources.5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-504.5"],
          startTime: "2019-10-09T02:45:22.818Z",
          endTime: "2019-10-16T04:13:08.181Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747050,
          code: "ENTMQMAAS-554.5",
        name: "As a Tenant Admin I want to View on a single screen all the address spaces which I can administer.5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-537.5"],
          startTime: "2019-10-16T04:13:09.181Z",
          endTime: "2019-10-23T05:40:54.544Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747046,
          code: "ENTMQMAAS-550.5",
        name: "As a Tenant Admin I want to Create an address which, when received from, fetches messages from an address in a different address space potentially in a different system/cluster.5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-554.5"],
          startTime: "2019-10-23T05:40:55.545Z",
          endTime: "2019-10-30T07:08:40.908Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747083,
          code: "ENTMQMAAS-587.5",
        name: "As a Developer I want to Connect to a messaging space from inside the cluster using the AMQP protocol (optionally using TLS) over WebSockets.5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-550.5"],
          startTime: "2019-10-30T07:08:41.909Z",
          endTime: "2019-11-06T08:36:27.272Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747081,
          code: "ENTMQMAAS-585.5",
        name: "As a Developer I want to Connect to a messaging space from inside the cluster using the AMQP protocol (optionally using TLS) over TCP.5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-587.5"],
          startTime: "2019-11-06T08:36:28.272Z",
          endTime: "2019-11-13T10:04:13.635Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747044,
          code: "ENTMQMAAS-548.5",
        name: "As a Tenant Admin I want to Create an address which, when sent to, forwards the message to an address in a different address space potentially in a different system/cluster.5",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-585.5"],
          startTime: "2019-11-13T10:04:14.636Z",
          endTime: "2019-11-20T11:31:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731478,
          code: "ENTMQMAAS-342.14",
        name: "[#754] : Deploying keycloak in an HA configuration.14",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-316.37","ENTMQMAAS-323.28"],
          startTime: "2019-11-20T11:32:01.000Z",
          endTime: "2019-11-21T10:53:25.714Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747080,
          code: "ENTMQMAAS-484.6",
        name: "As a System Admin I want to Install AMQ Online from templates.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-453.15"],
          startTime: "2019-11-21T10:53:26.714Z",
          endTime: "2019-11-22T10:14:51.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747088,
          code: "ENTMQMAAS-492.6",
        name: "As a System Admin I want to Change plan for an existing address space.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-484.6"],
          startTime: "2019-11-22T10:14:52.428Z",
          endTime: "2019-11-23T09:36:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747095,
          code: "ENTMQMAAS-499.6",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using the service catalog on the same cluster.6",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-492.6"],
          startTime: "2019-11-23T09:36:18.142Z",
          endTime: "2019-11-24T08:57:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747135,
          code: "ENTMQMAAS-539.6",
        name: "As a Tenant Admin I want to Bind an application to an address space using the Service Catalog (causing connection/credential information to be injected into the namespace of the application).6",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-548.5"],
          startTime: "2019-11-24T08:57:43.857Z",
          endTime: "2019-11-25T08:19:08.571Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747136,
          code: "ENTMQMAAS-540.6",
        name: "As a Tenant Admin I want to Provide information in the binding request which determines the permissions associated with the binding (e.g. which address can be sent to/received from).6",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-539.6"],
          startTime: "2019-11-25T08:19:09.571Z",
          endTime: "2019-11-26T07:40:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747097,
          code: "ENTMQMAAS-501.6",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using the service catalog on multiple clusters.6",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-540.6"],
          startTime: "2019-11-26T07:40:35.285Z",
          endTime: "2019-11-27T07:01:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747109,
          code: "ENTMQMAAS-513.6",
        name: "As a System Admin I want to Configure the system to use a single source for authorisation configuration for all address spaces.6",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-501.6"],
          startTime: "2019-11-27T07:02:01.000Z",
          endTime: "2019-11-28T06:23:25.714Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747101,
          code: "ENTMQMAAS-505.6",
        name: "As a System Admin I want to Configure role-based access control to control who may create an address space (of a given type/plan) using the service catalog.6",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-513.6"],
          startTime: "2019-11-28T06:23:26.714Z",
          endTime: "2019-11-29T05:44:51.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747132,
          code: "ENTMQMAAS-536.6",
        name: "As a Tenant Admin I want to Create an address space through the service catalog.6",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-505.6"],
          startTime: "2019-11-29T05:44:52.428Z",
          endTime: "2019-11-30T05:06:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747137,
          code: "ENTMQMAAS-541.6",
        name: "As a Tenant Admin I want to Provide a mechanism for a binding to occur between an application owned by a different user than that which created the service (Service Catalog).6",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-536.6"],
          startTime: "2019-11-30T05:06:18.142Z",
          endTime: "2019-12-01T04:27:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747138,
          code: "ENTMQMAAS-542.6",
        name: "As a Tenant Admin I want to Delete a binding from the service, removing any associated credentials.6",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-541.6"],
          startTime: "2019-12-01T04:27:43.857Z",
          endTime: "2019-12-02T03:49:08.571Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747108,
          code: "ENTMQMAAS-512.6",
        name: "As a System Admin I want to Configure the system to restrict address spaces to use source for identity/authentication from a restricted list.6",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-542.6"],
          startTime: "2019-12-02T03:49:09.571Z",
          endTime: "2019-12-03T03:10:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747096,
          code: "ENTMQMAAS-500.6",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using the service catalog on a different cluster.6",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-512.6"],
          startTime: "2019-12-03T03:10:35.285Z",
          endTime: "2019-12-04T02:31:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747110,
          code: "ENTMQMAAS-514.6",
        name: "As a System Admin I want to Configure the system to use allow address spaces to manage their own authorisation.6",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-500.6"],
          startTime: "2019-12-04T02:32:01.000Z",
          endTime: "2019-12-05T01:53:25.714Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747133,
          code: "ENTMQMAAS-537.6",
        name: "As a Tenant Admin I want to Create an address space using custom resources.6",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-514.6"],
          startTime: "2019-12-05T01:53:26.714Z",
          endTime: "2019-12-06T01:14:51.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747150,
          code: "ENTMQMAAS-554.6",
        name: "As a Tenant Admin I want to View on a single screen all the address spaces which I can administer.6",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-537.6"],
          startTime: "2019-12-06T01:14:52.428Z",
          endTime: "2019-12-07T00:36:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747146,
          code: "ENTMQMAAS-550.6",
        name: "As a Tenant Admin I want to Create an address which, when received from, fetches messages from an address in a different address space potentially in a different system/cluster.6",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-554.6"],
          startTime: "2019-12-07T00:36:18.142Z",
          endTime: "2019-12-07T23:57:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747183,
          code: "ENTMQMAAS-587.6",
        name: "As a Developer I want to Connect to a messaging space from inside the cluster using the AMQP protocol (optionally using TLS) over WebSockets.6",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-550.6"],
          startTime: "2019-12-07T23:57:43.857Z",
          endTime: "2019-12-08T23:19:08.571Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747181,
          code: "ENTMQMAAS-585.6",
        name: "As a Developer I want to Connect to a messaging space from inside the cluster using the AMQP protocol (optionally using TLS) over TCP.6",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-587.6"],
          startTime: "2019-12-08T23:19:09.571Z",
          endTime: "2019-12-09T22:40:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747144,
          code: "ENTMQMAAS-548.6",
        name: "As a Tenant Admin I want to Create an address which, when sent to, forwards the message to an address in a different address space potentially in a different system/cluster.6",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-585.6"],
          startTime: "2019-12-09T22:40:35.285Z",
          endTime: "2019-12-10T22:01:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731578,
          code: "ENTMQMAAS-342.15",
        name: "[#754] : Deploying keycloak in an HA configuration.15",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-342.14"],
          startTime: "2019-12-10T22:06:01.000Z",
          endTime: "2019-12-12T21:05:25.714Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747180,
          code: "ENTMQMAAS-484.7",
        name: "As a System Admin I want to Install AMQ Online from templates.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-499.6"],
          startTime: "2019-12-12T21:05:26.714Z",
          endTime: "2019-12-14T20:04:51.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747188,
          code: "ENTMQMAAS-492.7",
        name: "As a System Admin I want to Change plan for an existing address space.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-484.7"],
          startTime: "2019-12-14T20:04:52.428Z",
          endTime: "2019-12-16T19:04:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747195,
          code: "ENTMQMAAS-499.7",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using the service catalog on the same cluster.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-456.14","ENTMQMAAS-492.7"],
          startTime: "2019-12-16T19:04:18.142Z",
          endTime: "2019-12-18T18:03:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747209,
          code: "ENTMQMAAS-513.7",
        name: "As a System Admin I want to Configure the system to use a single source for authorisation configuration for all address spaces.7",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-548.6"],
          startTime: "2019-12-18T18:03:43.857Z",
          endTime: "2019-12-20T17:03:08.571Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747232,
          code: "ENTMQMAAS-536.7",
        name: "As a Tenant Admin I want to Create an address space through the service catalog.7",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-513.7"],
          startTime: "2019-12-20T17:03:09.571Z",
          endTime: "2019-12-22T16:02:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747208,
          code: "ENTMQMAAS-512.7",
        name: "As a System Admin I want to Configure the system to restrict address spaces to use source for identity/authentication from a restricted list.7",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-536.7"],
          startTime: "2019-12-22T16:02:35.285Z",
          endTime: "2019-12-24T15:01:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747210,
          code: "ENTMQMAAS-514.7",
        name: "As a System Admin I want to Configure the system to use allow address spaces to manage their own authorisation.7",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-512.7"],
          startTime: "2019-12-24T15:02:01.000Z",
          endTime: "2019-12-26T14:01:25.714Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747233,
          code: "ENTMQMAAS-537.7",
        name: "As a Tenant Admin I want to Create an address space using custom resources.7",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-514.7"],
          startTime: "2019-12-26T14:01:26.714Z",
          endTime: "2019-12-28T13:00:51.428Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747250,
          code: "ENTMQMAAS-554.7",
        name: "As a Tenant Admin I want to View on a single screen all the address spaces which I can administer.7",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-537.7"],
          startTime: "2019-12-28T13:00:52.428Z",
          endTime: "2019-12-30T12:00:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747246,
          code: "ENTMQMAAS-550.7",
        name: "As a Tenant Admin I want to Create an address which, when received from, fetches messages from an address in a different address space potentially in a different system/cluster.7",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-554.7"],
          startTime: "2019-12-30T12:00:18.142Z",
          endTime: "2020-01-01T10:59:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747283,
          code: "ENTMQMAAS-587.7",
        name: "As a Developer I want to Connect to a messaging space from inside the cluster using the AMQP protocol (optionally using TLS) over WebSockets.7",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-550.7"],
          startTime: "2020-01-01T10:59:43.857Z",
          endTime: "2020-01-03T09:59:08.571Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747281,
          code: "ENTMQMAAS-585.7",
        name: "As a Developer I want to Connect to a messaging space from inside the cluster using the AMQP protocol (optionally using TLS) over TCP.7",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-587.7"],
          startTime: "2020-01-03T09:59:09.571Z",
          endTime: "2020-01-05T08:58:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747244,
          code: "ENTMQMAAS-548.7",
        name: "As a Tenant Admin I want to Create an address which, when sent to, forwards the message to an address in a different address space potentially in a different system/cluster.7",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-585.7"],
          startTime: "2020-01-05T08:58:35.285Z",
          endTime: "2020-01-07T07:57:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12693736,
          code: "ENTMQMAAS-53.31",
        name: "Setup CI for product repositories.31",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2018-10-17T19:54:01.000Z",
          endTime: "2019-02-08T01:57:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12693735,
          code: "ENTMQMAAS-52.31",
        name: "Create copy of upstream repositories.31",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2019-02-08T01:57:01.000Z",
          endTime: "2019-06-01T08:00:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12728385,
          code: "ENTMQMAAS-323.28",
        name: "Creating and deleting addresses.28",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2019-06-01T08:00:01.000Z",
          endTime: "2019-09-22T14:03:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12741488,
          code: "ENTMQMAAS-450.12",
        name: "[#1079] : standard-controller: is trying to connect to router which was already killed.12",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2019-09-22T14:03:01.000Z",
          endTime: "2020-01-13T20:06:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12664444,
          code: "ENTMQMAAS-4.16",
        name: "remove colocated routers.16",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-05-28T21:51:01.000Z",
          endTime: "2018-10-24T15:26:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12681479,
          code: "ENTMQMAAS-49.15",
        name: "providing way to monitor connection and link metrics.15",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-10-24T15:26:31.000Z",
          endTime: "2019-03-22T09:02:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12691468,
          code: "ENTMQMAAS-50.14",
        name: "Release Messaging Images.14",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2019-03-22T09:02:01.000Z",
          endTime: "2019-08-18T02:37:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738185,
          code: "ENTMQMAAS-407.7",
        name: "[#973] : Configure per-address settings for each address created on broker.7",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2019-08-18T02:37:31.000Z",
          endTime: "2020-01-13T20:13:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726774,
          code: "ENTMQMAAS-314.39",
        name: "[#590] : TopicTest with wildcards failed due to user doesn't have permission='CREATE_ADDRESS'.39",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2019-06-18T03:17:01.000Z",
          endTime: "2019-07-18T02:24:34.285Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12726988,
          code: "ENTMQMAAS-316.37",
        name: "[#604] : Address-controller: PUT method is not implemented.37",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-372.9","ENTMQMAAS-342.13","ENTMQMAAS-314.39"],
          startTime: "2019-07-18T02:24:35.285Z",
          endTime: "2019-08-17T01:32:08.570Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740932,
          code: "ENTMQMAAS-432.23",
        name: "[#1037] : system-tests: create new test for address-space endpoints \"cert\" .23",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-499.5"],
          startTime: "2019-08-17T01:32:09.571Z",
          endTime: "2019-09-16T00:39:42.856Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743176,
          code: "ENTMQMAAS-454.15",
        name: "[#1103] : mqtt (standard-space): interoperability - send amqp, receive mqtt doesn't work.15",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-432.23"],
          startTime: "2019-09-16T00:39:43.857Z",
          endTime: "2019-10-15T23:47:17.142Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743175,
          code: "ENTMQMAAS-453.15",
        name: "[#1102] : mqtt (standard-space): Message with retained flag set to true are not received by subscribers.15",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-454.15"],
          startTime: "2019-10-15T23:47:18.142Z",
          endTime: "2019-11-14T22:54:51.427Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743677,
          code: "ENTMQMAAS-456.14",
        name: "[#1116] : system-tests: extend MQTT tests about testing \"will\" functionality.14",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2019-11-14T22:54:52.428Z",
          endTime: "2019-12-14T22:02:25.713Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12745038,
          code: "ENTMQMAAS-478.11",
        name: "[#1134] : resource defragmentation for pooled addresses doesn't work.11",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2019-12-14T22:02:26.714Z",
          endTime: "2020-01-13T21:09:59.999Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731678,
          code: "ENTMQMAAS-342.16",
        name: "[#754] : Deploying keycloak in an HA configuration.16",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-342.15"],
          startTime: "2020-01-07T07:58:01.000Z",
          endTime: "2020-01-13T09:34:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747288,
          code: "ENTMQMAAS-492.8",
        name: "As a System Admin I want to Change plan for an existing address space.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-499.7"],
          startTime: "2020-01-13T09:34:01.000Z",
          endTime: "2020-01-19T11:10:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747295,
          code: "ENTMQMAAS-499.8",
        name: "As a System Admin I want to Allow address spaces to be created/deleted using the service catalog on the same cluster.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-450.12","ENTMQMAAS-407.7","ENTMQMAAS-478.11","ENTMQMAAS-492.8"],
          startTime: "2020-01-19T11:10:01.000Z",
          endTime: "2020-01-25T12:46:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747309,
          code: "ENTMQMAAS-513.8",
        name: "As a System Admin I want to Configure the system to use a single source for authorisation configuration for all address spaces.8",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-548.7"],
          startTime: "2020-01-25T12:46:01.000Z",
          endTime: "2020-01-31T14:22:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747332,
          code: "ENTMQMAAS-536.8",
        name: "As a Tenant Admin I want to Create an address space through the service catalog.8",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-513.8"],
          startTime: "2020-01-31T14:22:01.000Z",
          endTime: "2020-02-06T15:58:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747308,
          code: "ENTMQMAAS-512.8",
        name: "As a System Admin I want to Configure the system to restrict address spaces to use source for identity/authentication from a restricted list.8",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-536.8"],
          startTime: "2020-02-06T15:58:01.000Z",
          endTime: "2020-02-12T17:34:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747310,
          code: "ENTMQMAAS-514.8",
        name: "As a System Admin I want to Configure the system to use allow address spaces to manage their own authorisation.8",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-512.8"],
          startTime: "2020-02-12T17:34:01.000Z",
          endTime: "2020-02-18T19:10:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747333,
          code: "ENTMQMAAS-537.8",
        name: "As a Tenant Admin I want to Create an address space using custom resources.8",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-514.8"],
          startTime: "2020-02-18T19:10:01.000Z",
          endTime: "2020-02-24T20:46:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747350,
          code: "ENTMQMAAS-554.8",
        name: "As a Tenant Admin I want to View on a single screen all the address spaces which I can administer.8",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-53.32","ENTMQMAAS-537.8"],
          startTime: "2020-02-24T20:46:01.000Z",
          endTime: "2020-03-01T22:22:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747346,
          code: "ENTMQMAAS-550.8",
        name: "As a Tenant Admin I want to Create an address which, when received from, fetches messages from an address in a different address space potentially in a different system/cluster.8",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-554.8"],
          startTime: "2020-03-01T22:22:01.000Z",
          endTime: "2020-03-07T23:58:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747383,
          code: "ENTMQMAAS-587.8",
        name: "As a Developer I want to Connect to a messaging space from inside the cluster using the AMQP protocol (optionally using TLS) over WebSockets.8",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-550.8"],
          startTime: "2020-03-07T23:58:01.000Z",
          endTime: "2020-03-14T01:34:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747381,
          code: "ENTMQMAAS-585.8",
        name: "As a Developer I want to Connect to a messaging space from inside the cluster using the AMQP protocol (optionally using TLS) over TCP.8",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-587.8"],
          startTime: "2020-03-14T01:34:01.000Z",
          endTime: "2020-03-20T03:10:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747344,
          code: "ENTMQMAAS-548.8",
        name: "As a Tenant Admin I want to Create an address which, when sent to, forwards the message to an address in a different address space potentially in a different system/cluster.8",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-585.8"],
          startTime: "2020-03-20T03:10:01.000Z",
          endTime: "2020-03-26T04:46:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731778,
          code: "ENTMQMAAS-342.17",
        name: "[#754] : Deploying keycloak in an HA configuration.17",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-342.16"],
          startTime: "2020-03-26T04:52:01.000Z",
          endTime: "2020-03-26T06:44:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747388,
          code: "ENTMQMAAS-492.9",
        name: "As a System Admin I want to Change plan for an existing address space.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-499.8","ENTMQMAAS-49.16","ENTMQMAAS-454.16"],
          startTime: "2020-03-26T06:44:01.000Z",
          endTime: "2020-03-26T08:36:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747432,
          code: "ENTMQMAAS-536.9",
        name: "As a Tenant Admin I want to Create an address space through the service catalog.9",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-548.8"],
          startTime: "2020-03-26T08:36:01.000Z",
          endTime: "2020-03-26T10:28:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747433,
          code: "ENTMQMAAS-537.9",
        name: "As a Tenant Admin I want to Create an address space using custom resources.9",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-536.9"],
          startTime: "2020-03-26T10:28:01.000Z",
          endTime: "2020-03-26T12:20:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747450,
          code: "ENTMQMAAS-554.9",
        name: "As a Tenant Admin I want to View on a single screen all the address spaces which I can administer.9",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-537.9"],
          startTime: "2020-03-26T12:20:01.000Z",
          endTime: "2020-03-26T14:12:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747446,
          code: "ENTMQMAAS-550.9",
        name: "As a Tenant Admin I want to Create an address which, when received from, fetches messages from an address in a different address space potentially in a different system/cluster.9",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-554.9"],
          startTime: "2020-03-26T14:12:01.000Z",
          endTime: "2020-03-26T16:04:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747483,
          code: "ENTMQMAAS-587.9",
        name: "As a Developer I want to Connect to a messaging space from inside the cluster using the AMQP protocol (optionally using TLS) over WebSockets.9",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-550.9"],
          startTime: "2020-03-26T16:04:01.000Z",
          endTime: "2020-03-26T17:56:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747481,
          code: "ENTMQMAAS-585.9",
        name: "As a Developer I want to Connect to a messaging space from inside the cluster using the AMQP protocol (optionally using TLS) over TCP.9",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-587.9"],
          startTime: "2020-03-26T17:56:01.000Z",
          endTime: "2020-03-26T19:48:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12747444,
          code: "ENTMQMAAS-548.9",
        name: "As a Tenant Admin I want to Create an address which, when sent to, forwards the message to an address in a different address space potentially in a different system/cluster.9",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-585.9"],
          startTime: "2020-03-26T19:48:01.000Z",
          endTime: "2020-03-26T21:40:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12693836,
          code: "ENTMQMAAS-53.32",
        name: "Setup CI for product repositories.32",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2020-01-13T20:06:01.000Z",
          endTime: "2020-02-21T15:53:40.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12693835,
          code: "ENTMQMAAS-52.32",
        name: "Create copy of upstream repositories.32",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: [],
          startTime: "2020-02-21T15:53:41.000Z",
          endTime: "2020-03-31T11:41:20.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12728485,
          code: "ENTMQMAAS-323.29",
        name: "Creating and deleting addresses.29",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-342.17"],
          startTime: "2020-03-31T11:41:21.000Z",
          endTime: "2020-05-09T07:29:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12681579,
          code: "ENTMQMAAS-49.16",
        name: "providing way to monitor connection and link metrics.16",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2020-01-13T21:26:01.000Z",
          endTime: "2020-03-12T02:27:30.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738285,
          code: "ENTMQMAAS-407.8",
        name: "[#973] : Configure per-address settings for each address created on broker.8",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2020-03-12T02:27:31.000Z",
          endTime: "2020-05-09T07:29:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12721558,
          code: "ENTMQMAAS-308.1",
        name: "Console UI tweaks to Create Address wizard.1",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2017-11-17T09:12:01.000Z",
          endTime: "2020-05-10T10:11:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12693935,
          code: "ENTMQMAAS-52.33",
        name: "Create copy of upstream repositories.33",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-548.9","ENTMQMAAS-52.32"],
          startTime: "2020-05-09T07:29:01.000Z",
          endTime: "2020-05-09T20:54:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12728585,
          code: "ENTMQMAAS-323.30",
        name: "Creating and deleting addresses.30",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: ["ENTMQMAAS-323.29"],
          startTime: "2020-05-09T20:54:01.000Z",
          endTime: "2020-05-10T10:19:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12732450,
          code: "ENTMQMAAS-372.10",
        name: "Console: Create an Address wizard tooltip placement awkward.10",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2019-06-25T02:54:01.000Z",
          endTime: "2020-05-10T10:29:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12738385,
          code: "ENTMQMAAS-407.9",
        name: "[#973] : Configure per-address settings for each address created on broker.9",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: ["ENTMQMAAS-492.9","ENTMQMAAS-407.8"],
          startTime: "2020-05-09T07:29:01.000Z",
          endTime: "2020-05-10T10:33:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740204,
          code: "ENTMQMAAS-446.1",
        name: "As a Tenant Admin, I need to purge any broker destination.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-19T06:00:01.000Z",
          endTime: "2020-05-10T10:35:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743276,
          code: "ENTMQMAAS-454.16",
        name: "[#1103] : mqtt (standard-space): interoperability - send amqp, receive mqtt doesn't work.16",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2020-01-13T21:26:01.000Z",
          endTime: "2020-03-12T16:02:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12743275,
          code: "ENTMQMAAS-453.16",
        name: "[#1102] : mqtt (standard-space): Message with retained flag set to true are not received by subscribers.16",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2020-03-12T16:02:01.000Z",
          endTime: "2020-05-10T10:38:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12731878,
          code: "ENTMQMAAS-342.18",
        name: "[#754] : Deploying keycloak in an HA configuration.18",
          projectKey: "ENTMQMAAS_3xxxx",
          preceedingTasks: [],
          startTime: "2020-03-26T23:04:01.000Z",
          endTime: "2020-05-10T21:15:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12694035,
          code: "ENTMQMAAS-52.34",
        name: "Create copy of upstream repositories.34",
          projectKey: "ENTMQMAAS_5xxxx",
          preceedingTasks: ["ENTMQMAAS-52.33"],
          startTime: "2020-05-10T10:19:01.000Z",
          endTime: "2020-05-11T21:49:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12740212,
          code: "ENTMQMAAS-448.1",
        name: "Document how to delete a destination/address.1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-19T06:27:01.000Z",
          endTime: "2020-10-02T00:32:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        },

        {
          id: 12737577,
          code: "ENTMQMAAS-404.1",
        name: "Investigate what's needed for operations (logs/monitoring).1",
          projectKey: "ENTMQMAAS_4xxxx",
          preceedingTasks: [],
          startTime: "2018-03-05T01:14:01.000Z",
          endTime: "2022-01-26T05:39:00.000Z",
          kpiInTask: kpiC,
          taskKPIWeight: 0.005
        }
      ];
      module.exports = { tasks };
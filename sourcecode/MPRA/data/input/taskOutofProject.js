const projects = [
  {
    "id": 12839866,
    "code": "ENTMQMAAS-1522",
    "name": "Performance test cache with large number of addresses/connections/links",
    "description": "We need to understand the performance of the console cache/graphql when there are large numbers of addresses/connections/links.",
    "startTime": "2019/11/26 4:43 AM",
    "endTime": "2020/03/23 7:47 AM",
    "assignee": "buschv",
    "estimateNormalTime": 118.12777777777778
  },
  {
    "id": 12839918,
    "code": "ENTMQMAAS-1524",
    "name": "[#3484] : Load balance routes based on least connections",
    "description": "Created from upstream issue [#3484|https://github.com/EnMasseProject/enmasse/issues/3484].",
    "startTime": "2019/11/26 7:33 AM",
    "endTime": "2020/01/07 5:44 AM",
    "assignee": "lulf@redhat.com",
    "estimateNormalTime": 41.924305555555556
  },
  {
    "id": 12840057,
    "code": "ENTMQMAAS-1525",
    "name": "[#3513] : component/console - frontend - Create Address Detail Page",
    "description": "Created from upstream issue [#3513|https://github.com/EnMasseProject/enmasse/issues/3513].",
    "startTime": "2019/11/27 4:16 AM",
    "endTime": "2019/12/27 3:28 AM",
    "assignee": "rpattnai",
    "estimateNormalTime": 29.96666666666667
  },
  {
    "id": 12840060,
    "code": "ENTMQMAAS-1528",
    "name": "[#3516] : component/console - frontend - Create Addresses and download certificates for Address Space Detail",
    "description": "Created from upstream issue [#3516|https://github.com/EnMasseProject/enmasse/issues/3516].",
    "startTime": "2019/11/27 4:27 AM",
    "endTime": "2020/01/02 7:45 AM",
    "assignee": "sanjekum",
    "estimateNormalTime": 36.137499999999996
  },
  {
    "id": 12840058,
    "code": "ENTMQMAAS-1526",
    "name": "[#3514] : component/console - frontend - Add filters and pagination for connection List",
    "description": "Created from upstream issue [#3514|https://github.com/EnMasseProject/enmasse/issues/3514].",
    "startTime": "2019/11/27 4:27 AM",
    "endTime": "2020/01/02 7:44 AM",
    "assignee": "anujha@redhat.com",
    "estimateNormalTime": 36.136805555555554
  },
  {
    "id": 12840059,
    "code": "ENTMQMAAS-1527",
    "name": "[#3515] : component/console - frontend - Enable mutations, filter and pagination to Address Space List",
    "description": "Created from upstream issue [#3515|https://github.com/EnMasseProject/enmasse/issues/3515].",
    "startTime": "2019/11/27 4:27 AM",
    "endTime": "2020/01/02 7:44 AM",
    "assignee": "sanjekum",
    "estimateNormalTime": 36.136805555555554
  },
  {
    "id": 12840061,
    "code": "ENTMQMAAS-1529",
    "name": "[#3517] : component/console - frontend - Enable Mutation and pagination for Addresses List",
    "description": "Created from upstream issue [#3517|https://github.com/EnMasseProject/enmasse/issues/3517].",
    "startTime": "2019/11/27 4:27 AM",
    "endTime": "2020/01/02 7:46 AM",
    "assignee": "anujha@redhat.com",
    "estimateNormalTime": 36.138194444444444
  },
  {
    "id": 12840124,
    "code": "ENTMQMAAS-1530",
    "name": "Define IoT Personas",
    "description": "We need to define the additional IoT related personas and align them with the core enmasse personas.",
    "startTime": "2019/11/27 7:12 AM",
    "endTime": "2020/01/13 5:07 AM",
    "assignee": "dejanbosanac",
    "estimateNormalTime": 46.91319444444445
  },
  {
    "id": 12840175,
    "code": "ENTMQMAAS-1532",
    "name": "[OLM] Deploying AMQ Online to a custom namespace fails with security context constraint error",
    "description": "When instancing an authentication service of standard type, for example:\r\n\r\n\r\n{code:java}\r\napiVersion: admin.enmasse.io/v1beta1\r\nkind: AuthenticationService\r\nmetadata:\r\n  name: authentication-standard\r\nspec:\r\n  type: standard\r\n  standard:\r\n    credentialsSecret:\r\n      name: keycloak-credentials\r\n    resources:\r\n      requests:\r\n        memory: 1Gi\r\n      limits:\r\n        memory: 1Gi\r\n    storage:\r\n      type: persistent-claim\r\n      size: 5Gi\r\n{code}\r\n\r\nThe deployment cannot create the pod with the following error:\r\n{code:java}\r\nError creating: pods \\\"authentication-standard-67c5659566-\\\" is forbidden: unable to validate against any security context constraint: [fsGroup: Invalid value: []int64{185}: 185 is not an allowed group]\r\n{code}\r\n\r\n",
    "startTime": "2019/11/27 9:36 AM",
    "endTime": "2019/12/12 5:57 AM",
    "assignee": "keithbwall",
    "estimateNormalTime": 14.847916666666668
  },
  {
    "id": 12841002,
    "code": "ENTMQMAAS-1536",
    "name": "Docs: Document Pods overview",
    "description": "Add to service admin guide overview: overview of Pods and their \\\"responsibilities\\\"\r\nPer Rob G.: \\\"I think it would make sense for us to create some content like this for SRE folks (and their equivalent in customer orgs)\\\"\r\nFor more information, see https://docs.google.com/document/d/17EBZ5VTldVpt3r2kgC5MYcgGaUyhhSSS-qLw-fCs95Y/edit#",
    "startTime": "2019/12/03 8:47 AM",
    "endTime": "2020/07/22 4:36 PM",
    "assignee": "rhn-support-jmalloy",
    "estimateNormalTime": 232.32569444444445
  },
  {
    "id": 12841355,
    "code": "ENTMQMAAS-1537",
    "name": "Docs: Create an FAQ article for splash page",
    "description": "Need a FAQ article that has links to common AMQ Online questions. \r\nPotential questions gathered here: https://docs.google.com/document/d/1j-DD6J-ST2MvGkxOL18I_EWjnpylX_iUZqFsocKHmO4/edit",
    "startTime": "2019/12/04 5:00 PM",
    "endTime": "",
    "assignee": "rhn-support-jmalloy",
    "estimateNormalTime": null
  },
  {
    "id": 12841498,
    "code": "ENTMQMAAS-1538",
    "name": "[#3463] : CSV manifest is missing configmap finalizers permission",
    "description": "Created from upstream issue [#3463|https://github.com/EnMasseProject/enmasse/issues/3463].",
    "startTime": "2019/12/05 6:48 AM",
    "endTime": "2019/12/12 5:56 AM",
    "assignee": "keithbwall",
    "estimateNormalTime": 6.963888888888889
  },
  {
    "id": 12841618,
    "code": "ENTMQMAAS-1540",
    "name": "[#3547] : Network policies not deleted when address space is deleted",
    "description": "Created from upstream issue [#3547|https://github.com/EnMasseProject/enmasse/issues/3547].",
    "startTime": "2019/12/06 4:13 AM",
    "endTime": "2019/12/12 5:56 AM",
    "assignee": "lulf@redhat.com",
    "estimateNormalTime": 6.071527777777778
  },
  {
    "id": 12841715,
    "code": "ENTMQMAAS-1541",
    "name": "Docs: Document metrics and alerts",
    "description": "Document available metrics and alerts. SME is Rob Shelly\r\n\r\nNotes:\r\nhttps://docs.google.com/document/d/1uEGk980S3_8woWppMaA4D-5MFY73e6VMeI9HpGISkf8/edit",
    "startTime": "2019/12/06 4:59 PM",
    "endTime": "2020/03/04 8:54 AM",
    "assignee": "rhn-support-jmalloy",
    "estimateNormalTime": 88.66319444444444
  },
  {
    "id": 12841718,
    "code": "ENTMQMAAS-1542",
    "name": "Docs: remove issue for 1.3.2 RNs",
    "description": "For 1.3 RNs, add note about ENTMQMAAS-1469 being fixed for 1.3.2 release. Also add link to resolved issues for 1.3.x. ",
    "startTime": "2019/12/06 5:35 PM",
    "endTime": "2019/12/11 10:47 AM",
    "assignee": "rhn-support-jmalloy",
    "estimateNormalTime": 4.716666666666667
  },
  {
    "id": 12842423,
    "code": "ENTMQMAAS-1546",
    "name": "Docs: Sweep for references to old API",
    "description": "Need to make sure docs don't reference any removed API stuff",
    "startTime": "2019/12/10 10:33 AM",
    "endTime": "",
    "assignee": "rhn-support-jmalloy",
    "estimateNormalTime": null
  },
  {
    "id": 12842314,
    "code": "ENTMQMAAS-1544",
    "name": "AMQ Online displays broken image icon displayed in Operator catalogue in some browsers",
    "description": "Inspecting AMQ Online in the operator catalogue, the icon displayed in the catalogue view and the install dialogue shows as a broken link.  This issue only manifest in some browsers.  ",
    "startTime": "2019/12/10 6:21 AM",
    "endTime": "2019/12/12 5:56 AM",
    "assignee": "lulf@redhat.com",
    "estimateNormalTime": 1.982638888888889
  },
  {
    "id": 12842351,
    "code": "ENTMQMAAS-1545",
    "name": "Docs: Add Tech Preview note to new IoT assemblies downstream",
    "description": "Need to add the tech preview note to the new IoT assemblies in the downstream docs only",
    "startTime": "2019/12/10 8:31 AM",
    "endTime": "2020/03/02 5:23 PM",
    "assignee": "rhn-support-jmalloy",
    "estimateNormalTime": 83.36944444444444
  },
  {
    "id": 12842699,
    "code": "ENTMQMAAS-1550",
    "name": "Update AMQ Online images to pick up nss nss-softokn nss-util security update RHSA :49269",
    "description": "Impact - Important\r\nShipped Live - December 10, 2019\r\nUpdate (days) - 30\r\nDue January 9, 2020\r\n\r\nLink to Tracker https://docs.google.com/a/redhat.com/spreadsheets/d/1JjpFAFdFMpy5tu9VFAy_ixGiDgpliRdm2O9t4_4hu3w/edit#gid=0\r\n\r\nThis CVE impacts the RHEL 7 base images. Use the following base images to update your layered images.\r\n\r\nrhel-server rhel-server-container-7.7-384.1575996163 https://errata.engineering.redhat.com/advisory/49496\r\n\r\nubi7 ubi7-container-7.7-214.1575996166 https://errata.engineering.redhat.com/advisory/49504",
    "startTime": "2019/12/11 6:37 PM",
    "endTime": "",
    "assignee": "rgodfrey@redhat.com",
    "estimateNormalTime": null
  },
  {
    "id": 12842887,
    "code": "ENTMQMAAS-1553",
    "name": "[IoT Design] IoT Competitor Research - Bosch IoT",
    "description": "IoT Competitor Research\r\n\r\nProduct: Bosch IoT https://www.bosch-iot-suite.com/\r\n\r\n* Obtaining information about your competitors\r\n* Evaluating their advantage\r\n* Innovative possibilities or future goals and direction\r\n",
    "startTime": "2019/12/12 8:42 AM",
    "endTime": "2020/02/12 5:32 AM",
    "assignee": "yanzredhat",
    "estimateNormalTime": 61.86805555555555
  },
  {
    "id": 12842897,
    "code": "ENTMQMAAS-1555",
    "name": "[IoT Design] IoT Competitor Research - IBM IoT",
    "description": "IoT Competitor Research\r\n\r\nProduct: IBM IoT https://www.ibm.com/internet-of-things\r\n\r\n* Obtaining information about your competitors\r\n* Evaluating their advantage\r\n* Innovative possibilities or future goals and direction",
    "startTime": "2019/12/12 9:31 AM",
    "endTime": "2020/02/12 5:22 AM",
    "assignee": "yanzredhat",
    "estimateNormalTime": 61.82708333333333
  },
  {
    "id": 12893780,
    "code": "ENTMQMAAS-1558",
    "name": "[#5203] agent uses deprecated APIs",
    "description": "In OCP 4.2+, there are warnings from standard-controller, and even some alerts are being raised on the OCP console about the use of deprecated APIs.\r\n\r\nExample:\r\n\r\n2019-12-17T15:59:13.040Z agent INFO  GET /oapi/v1/namespaces/amq-online-infra/routes/messaging-hiy666dnoy => 404 \r\n2019-12-17T15:59:13.041Z agent INFO  could not retrieve messaging route hostname\r\n\r\nThe route api in 4.2 should be:\r\n\r\n/apis/route.openshift.io/v1/namespaces/amq-online-infra/routes/messaging-hiy666dnoy\r\n\r\nIt has been tested using curl against the api server in 4.2 and 4.3 dev preview.\r\n\r\nThe alert on the OCP console refers to NetworkPolicy v1beta1. ",
    "startTime": "2019/12/17 11:33 AM",
    "endTime": "2020/10/15 3:28 AM",
    "assignee": "keithbwall",
    "estimateNormalTime": 302.66319444444446
  },
  {
    "id": 12895401,
    "code": "ENTMQMAAS-1560",
    "name": "[#3610] : component/console - frontend - Create filters and actions for AddressList",
    "description": "Created from upstream issue [#3610|https://github.com/EnMasseProject/enmasse/issues/3610].",
    "startTime": "2020/01/02 4:18 AM",
    "endTime": "2020/01/14 3:25 AM",
    "assignee": "sanjekum",
    "estimateNormalTime": 11.963194444444445
  },
  {
    "id": 12895402,
    "code": "ENTMQMAAS-1561",
    "name": "[#3611] : component/console - frontend - Implement filters, creation wizard and actions for AddressSpaceList",
    "description": "Created from upstream issue [#3611|https://github.com/EnMasseProject/enmasse/issues/3611].",
    "startTime": "2020/01/02 4:18 AM",
    "endTime": "2020/01/14 3:26 AM",
    "assignee": "anujha@redhat.com",
    "estimateNormalTime": 11.963888888888889
  },
  {
    "id": 12895405,
    "code": "ENTMQMAAS-1563",
    "name": "[#3613] : component/console - frontend - Create connection detail components",
    "description": "Created from upstream issue [#3613|https://github.com/EnMasseProject/enmasse/issues/3613].",
    "startTime": "2020/01/02 4:19 AM",
    "endTime": "2020/01/14 3:31 AM",
    "assignee": "anujha@redhat.com",
    "estimateNormalTime": 11.966666666666667
  },
  {
    "id": 12895403,
    "code": "ENTMQMAAS-1562",
    "name": "[#3612] : component/console - frontend - Implement filters and pagination for AddressDetail component",
    "description": "Created from upstream issue [#3612|https://github.com/EnMasseProject/enmasse/issues/3612].",
    "startTime": "2020/01/02 4:19 AM",
    "endTime": "2020/01/14 3:29 AM",
    "assignee": "sanjekum",
    "estimateNormalTime": 11.965277777777779
  },
  {
    "id": 12895406,
    "code": "ENTMQMAAS-1564",
    "name": "[#3614] : component/console - frontend - Implement toolbars",
    "description": "Created from upstream issue [#3614|https://github.com/EnMasseProject/enmasse/issues/3614].",
    "startTime": "2020/01/02 4:19 AM",
    "endTime": "2020/01/29 3:41 AM",
    "assignee": "sanjekum",
    "estimateNormalTime": 26.97361111111111
  },
  {
    "id": 12896442,
    "code": "ENTMQMAAS-1568",
    "name": "[IoT Design] Project Detail Design",
    "description": "Based on the low-fi https://marvelapp.com/d9f562h/screen/64677436\r\n\r\nIn the detail page, it will include as follows:\r\n* Project Status\r\n* [Need to think] if the device list page will be combined into this page?\r\n* General information ",
    "startTime": "2020/01/07 10:28 PM",
    "endTime": "2020/07/16 11:45 PM",
    "assignee": "yanzredhat",
    "estimateNormalTime": 191.05347222222224
  },
  {
    "id": 12896196,
    "code": "ENTMQMAAS-1565",
    "name": "Bad formatting of diagram in AMQ Online documentation",
    "description": "The page at https://access.redhat.com/documentation/en-us/red_hat_amq/7.4/html/installing_and_managing_amq_online_on_openshift_container_platform/configuring-messaging\r\nincludes a rather largely scaled class diagram in sub-chapter \\\"3.1. Service configuration resources and definition\\\"\r\n\r\nPerhaps it should be scaled a bit smaller to fit on the screen? \r\nWhen scrolling the right pane it moves the text over the left pane that shows the document structure. Screenshot attached.",
    "startTime": "2020/01/07 8:33 AM",
    "endTime": "",
    "assignee": "rhn-support-jmalloy",
    "estimateNormalTime": null
  },
  {
    "id": 12897426,
    "code": "ENTMQMAAS-1569",
    "name": "Productise hibernate-validator 6.1.0.Final",
    "description": "We need to bump Hibernate-validator\r\n to 6.1.0.Final to avoid a CVE upstream.  Currently this version is not productised.",
    "startTime": "2020/01/10 4:42 AM",
    "endTime": "2020/01/17 9:06 AM",
    "assignee": "jreimann-2",
    "estimateNormalTime": 7.183333333333334
  },
  {
    "id": 12897784,
    "code": "ENTMQMAAS-1572",
    "name": "Browser reload in console results in 404",
    "description": "When testing the Console end to end with the real backend, I notice\r\nthat if after say navigating to an address space, I click the\r\nbrowser's reload button, I see a 404.  The issue appears to be that\r\nthe react app is using the location to maintain state (?), however, in\r\na reload situation, it is this page that is being requested from the\r\nserver (which is oauth-proxy).\r\n\r\nIs it possible for the app to keep state in another way?   Query\r\nparameter (?) or fragment (#) would work from a server side\r\nperspective.",
    "startTime": "2020/01/13 3:57 AM",
    "endTime": "2020/01/14 9:22 AM",
    "assignee": "anujha@redhat.com",
    "estimateNormalTime": 1.2256944444444444
  },
  {
    "id": 12897793,
    "code": "ENTMQMAAS-1573",
    "name": "Represent temporary topic subscriptions in the address model",
    "description": "The console-server is currently not representing temporary topic subscriptions in its view of addresses. This is a gap.",
    "startTime": "2020/01/13 4:26 AM",
    "endTime": "2024/04/16 12:57 PM",
    "assignee": "keithbwall",
    "estimateNormalTime": 1555.3548611111112
  },
  {
    "id": 12897812,
    "code": "ENTMQMAAS-1577",
    "name": "read-only authentication services API for console",
    "description": "The console needs to be able to retrieve a list of authentication services in order to generate a drop down list during its create address space workflow.  The mock API needs to be extended to expose this information.\r\n\r\nWe don't need to support mutation of the auth service at this stage.",
    "startTime": "2020/01/13 5:32 AM",
    "endTime": "2020/01/13 1:31 PM",
    "assignee": "buschv",
    "estimateNormalTime": 0.3326388888888889
  },
  {
    "id": 12897811,
    "code": "ENTMQMAAS-1576",
    "name": "[#3637] : Add support for pod disruption budgets",
    "description": "Created from upstream issue [#3637|https://github.com/EnMasseProject/enmasse/issues/3637].",
    "startTime": "2020/01/13 5:32 AM",
    "endTime": "2020/02/13 4:45 AM",
    "assignee": "lulf@redhat.com",
    "estimateNormalTime": 30.967361111111114
  },
  {
    "id": 12897810,
    "code": "ENTMQMAAS-1575",
    "name": "[#3646] : Configure router anti-affinity by default",
    "description": "Created from upstream issue [#3646|https://github.com/EnMasseProject/enmasse/issues/3646].",
    "startTime": "2020/01/13 5:32 AM",
    "endTime": "2020/01/15 7:41 AM",
    "assignee": "lulf@redhat.com",
    "estimateNormalTime": 2.089583333333333
  },
  {
    "id": 12897817,
    "code": "ENTMQMAAS-1580",
    "name": "Document IoT metrics",
    "description": "",
    "startTime": "2020/01/13 5:40 AM",
    "endTime": "2020/01/21 10:33 AM",
    "assignee": "jreimann-2",
    "estimateNormalTime": 8.203472222222222
  },
  {
    "id": 12897822,
    "code": "ENTMQMAAS-1582",
    "name": "Design and implement JDBC based device registry",
    "description": "",
    "startTime": "2020/01/13 5:56 AM",
    "endTime": "2020/02/12 11:13 AM",
    "assignee": "jbtrystram",
    "estimateNormalTime": 30.220138888888886
  },
  {
    "id": 12897823,
    "code": "ENTMQMAAS-1583",
    "name": "Upgrade Hono to 1.0.2",
    "description": "",
    "startTime": "2020/01/13 5:58 AM",
    "endTime": "2020/01/14 10:28 AM",
    "assignee": "jreimann-2",
    "estimateNormalTime": 1.1875
  },
  {
    "id": 12898232,
    "code": "ENTMQMAAS-1584",
    "name": "component/console - frontend - Handle actions for multiple selections in AddressList",
    "description": "",
    "startTime": "2020/01/14 1:42 AM",
    "endTime": "2020/01/29 3:43 AM",
    "assignee": "sanjekum",
    "estimateNormalTime": 15.084027777777777
  },
  {
    "id": 12898233,
    "code": "ENTMQMAAS-1585",
    "name": "component/console - frontend - Error handling and Error message display",
    "description": "",
    "startTime": "2020/01/14 1:45 AM",
    "endTime": "2020/02/28 3:40 AM",
    "assignee": "anujha@redhat.com",
    "estimateNormalTime": 45.079861111111114
  },
  {
    "id": 12898235,
    "code": "ENTMQMAAS-1586",
    "name": "component/console - frontend - CreateAddressSpace wizard non-uniform behaviour",
    "description": "On CreateAddressSpace wizard, sometimes the dropdowns aren't selected and creation throws errors.",
    "startTime": "2020/01/14 2:01 AM",
    "endTime": "2020/01/24 7:32 AM",
    "assignee": "rpattnai",
    "estimateNormalTime": 10.229861111111111
  },
  {
    "id": 12898237,
    "code": "ENTMQMAAS-1587",
    "name": "component/console - frontend - Filter selection displays an empty dropdown item",
    "description": "",
    "startTime": "2020/01/14 2:03 AM",
    "endTime": "2020/01/29 3:43 AM",
    "assignee": "sanjekum",
    "estimateNormalTime": 15.069444444444445
  },
  {
    "id": 12898238,
    "code": "ENTMQMAAS-1588",
    "name": "component/console - frontend - CreateAddress wizard shows non-uniform behaviour",
    "description": "On CreateAddressSpace wizard, sometimes the dropdowns aren't selected and creation throws errors.",
    "startTime": "2020/01/14 2:07 AM",
    "endTime": "2020/01/29 7:01 AM",
    "assignee": "rpattnai",
    "estimateNormalTime": 15.204166666666666
  },
  {
    "id": 12898239,
    "code": "ENTMQMAAS-1589",
    "name": "component/console - frontend - On selecting filters, two filter icons appear",
    "description": "",
    "startTime": "2020/01/14 2:08 AM",
    "endTime": "2020/01/22 1:42 AM",
    "assignee": "rpattnai",
    "estimateNormalTime": 7.981944444444444
  },
  {
    "id": 12898240,
    "code": "ENTMQMAAS-1590",
    "name": "component/console - frontend - Update link provided when no addresses are found",
    "description": "A suitable link has to be provided to be displayed when no addresses are found.",
    "startTime": "2020/01/14 2:11 AM",
    "endTime": "2020/01/29 3:44 AM",
    "assignee": "sanjekum",
    "estimateNormalTime": 15.064583333333333
  },
  {
    "id": 12898242,
    "code": "ENTMQMAAS-1591",
    "name": "component/console - frontend - non-uniform behaviour of ConnectionList and AddressSpaceList",
    "description": "The ConnectionList and AddressSpaceList do not display any data at times even after the appp is logging responses after a successful fetch.",
    "startTime": "2020/01/14 2:13 AM",
    "endTime": "2020/01/17 9:00 AM",
    "assignee": "anujha@redhat.com",
    "estimateNormalTime": 3.2826388888888887
  },
  {
    "id": 12898246,
    "code": "ENTMQMAAS-1592",
    "name": "component/console - frontend - issue in filtering by text",
    "description": "In filtering using text, we require to select a dropdown item from the auto-populated dropdown in order to perform a filer and the typed text becomes irrelevant.",
    "startTime": "2020/01/14 2:19 AM",
    "endTime": "2020/01/22 7:15 AM",
    "assignee": "rpattnai",
    "estimateNormalTime": 8.205555555555556
  },
  {
    "id": 12898252,
    "code": "ENTMQMAAS-1593",
    "name": "[systemtest] create api tests for console backend",
    "description": "",
    "startTime": "2020/01/14 3:05 AM",
    "endTime": "2020/02/10 2:14 PM",
    "assignee": "dkornel@redhat.com",
    "estimateNormalTime": 27.464583333333334
  },
  {
    "id": 12898254,
    "code": "ENTMQMAAS-1595",
    "name": "[systemtest] create test for new frontend functionality",
    "description": "",
    "startTime": "2020/01/14 3:08 AM",
    "endTime": "2020/02/26 10:33 AM",
    "assignee": "dkornel@redhat.com",
    "estimateNormalTime": 43.30902777777778
  },
  {
    "id": 12898299,
    "code": "ENTMQMAAS-1596",
    "name": "component/console - frontend - Integrate user profile with server",
    "description": "",
    "startTime": "2020/01/14 3:48 AM",
    "endTime": "2020/01/29 3:42 AM",
    "assignee": "sanjekum",
    "estimateNormalTime": 14.995833333333332
  },
  {
    "id": 12898301,
    "code": "ENTMQMAAS-1597",
    "name": "component/console - frontend - Integrate User Authentication Service on creating address spaces",
    "description": "",
    "startTime": "2020/01/14 3:54 AM",
    "endTime": "2020/01/22 6:57 AM",
    "assignee": "rpattnai",
    "estimateNormalTime": 8.127083333333333
  },
  {
    "id": 12898315,
    "code": "ENTMQMAAS-1598",
    "name": "Create downstream image for console-server component",
    "description": "Create downstream image for console-server component",
    "startTime": "2020/01/14 4:43 AM",
    "endTime": "2020/02/25 2:39 PM",
    "assignee": "lulf@redhat.com",
    "estimateNormalTime": 42.413888888888884
  },
  {
    "id": 12898325,
    "code": "ENTMQMAAS-1599",
    "name": "Document uninstall using OLM",
    "description": "How to cleanup resources that don't get automatically deleted.",
    "startTime": "2020/01/14 5:01 AM",
    "endTime": "2020/01/16 6:51 AM",
    "assignee": "lulf@redhat.com",
    "estimateNormalTime": 2.076388888888889
  },
  {
    "id": 12898346,
    "code": "ENTMQMAAS-1600",
    "name": "Update AMQ broker image",
    "description": "Update AMQ broker image",
    "startTime": "2020/01/14 5:18 AM",
    "endTime": "2020/01/24 4:51 AM",
    "assignee": "lulf@redhat.com",
    "estimateNormalTime": 9.981250000000001
  },
  {
    "id": 12898348,
    "code": "ENTMQMAAS-1601",
    "name": "Upgrade AMQ interconnect image",
    "description": "Upgrade AMQ interconnect image",
    "startTime": "2020/01/14 5:18 AM",
    "endTime": "2020/01/24 4:51 AM",
    "assignee": "lulf@redhat.com",
    "estimateNormalTime": 9.981250000000001
  },
  {
    "id": 12898352,
    "code": "ENTMQMAAS-1602",
    "name": "Improve reject behaviour for forwarding use-case",
    "description": "With the new AMQ Broker, we have the new configurations option to control the reject behavioiur when messages are rejected by the target broker.   We should enable these options in the AMQ Online broker configurations.  Also we should document what the user of an external AMQ Broker would need to do in order to forward to/from it nicely.",
    "startTime": "2020/01/14 5:21 AM",
    "endTime": "2020/02/13 7:53 AM",
    "assignee": "lulf@redhat.com",
    "estimateNormalTime": 30.105555555555554
  },
  {
    "id": 12898373,
    "code": "ENTMQMAAS-1603",
    "name": "[systemtest] create upgrade test for iot components",
    "description": "1.  create scripts for deploying iot (using enmasse documentiation) (similar to systemtests/scripts/test_func.sh)\r\n2. create methods using created scripts (UpgradeTest)\r\n3. create test for deploying iot and then check if iot pods are updated\r\n4. connect devices and check if the upgrade is working correctly",
    "startTime": "2020/01/14 5:57 AM",
    "endTime": "2020/03/26 9:29 AM",
    "assignee": "zschwarz",
    "estimateNormalTime": 72.14722222222223
  },
  {
    "id": 12898466,
    "code": "ENTMQMAAS-1604",
    "name": "Investigate and fix frequent IoTProject changes",
    "description": "Creating a new IoTProject, we currently experience batches of frequent updates during the creation phase (tens of changes in a single second).\r\n\r\nWe need to investigate the cause of that, and see if we reduce the frequency of the changes.",
    "startTime": "2020/01/14 9:15 AM",
    "endTime": "2020/02/26 4:26 AM",
    "assignee": "dejanbosanac",
    "estimateNormalTime": 42.799305555555556
  },
  {
    "id": 12899009,
    "code": "ENTMQMAAS-1610",
    "name": "Console address detail page gives no ability determine which topic/subscription relation",
    "description": "Looking at the address list or address detail, the user cannot determine which topic relates to a subscription.\r\n\r\n(The old console didn't give the user this ability either).\r\n\r\n !image-2020-01-15-19-11-17-689.png|thumbnail! \r\n !image-2020-01-15-19-12-13-311.png|thumbnail! \r\n !image-2020-01-15-19-10-11-684.png|thumbnail! ",
    "startTime": "2020/01/15 2:12 PM",
    "endTime": "2020/01/28 12:02 PM",
    "assignee": "sanjekum",
    "estimateNormalTime": 12.909722222222221
  },
  {
    "id": 12898689,
    "code": "ENTMQMAAS-1606",
    "name": "Create iot-tenant-cleaner image for downstream",
    "description": "",
    "startTime": "2020/01/15 4:11 AM",
    "endTime": "2020/02/13 4:44 AM",
    "assignee": "lulf@redhat.com",
    "estimateNormalTime": 29.022916666666664
  },
  {
    "id": 12898693,
    "code": "ENTMQMAAS-1607",
    "name": "Blank page seen if connection is close whilst connection detail page is open",
    "description": "If the console is open at a connection detail page then the connection is closed, the console displays a blank page and the following Javascipt error is logged.\r\n\r\n(I think the console needs to be prepared for the connection details query to spontaneously fail, and display a message such as \\\"this connection has gone\\\" and let the user navigate back to the connection list). \r\n\r\n\r\nTypeError: \\\"d is undefined\\\"\r\n    Oe ConnectionDetailPage.tsx:33\r\n    React 7\r\n    unstable_runWithPriority scheduler.production.min.js:18\r\n    React 5\r\n    next QueryData.ts:282\r\n    b Observable.js:135\r\n    O Observable.js:179\r\n    value Observable.js:235\r\n    b ObservableQuery.ts:701\r\n    b ObservableQuery.ts:701\r\n    next ObservableQuery.ts:662\r\n    o QueryManager.ts:518\r\n    queryListenerForObserver QueryManager.ts:644\r\n    broadcastQueries QueryManager.ts:1091\r\n    broadcastQueries QueryManager.ts:1087\r\n    broadcastQueries QueryManager.ts:1085\r\n    b QueryManager.ts:1237\r\n    next Observable.js:322\r\n    b Observable.js:135\r\n    O Observable.js:179\r\n    value Observable.js:235\r\n    next observables.ts:12\r\n    next observables.ts:12\r\n    b Observable.js:135\r\n    O Observable.js:179\r\n    value Observable.js:235\r\n    next index.ts:60\r\n    b Observable.js:135\r\n    O Observable.js:179\r\n    value Observable.js:235\r\n    Ce httpLink.ts:142\r\nreact-dom.production.min.js:196:194\r\n    React 5\r\n    unstable_runWithPriority scheduler.production.min.js:18\r\n    React 4\r\n    unstable_runWithPriority scheduler.production.min.js:18\r\n    React 5\r\n    next QueryData.ts:282\r\n    b Observable.js:135\r\n    O Observable.js:179\r\n    value Observable.js:235\r\n    b ObservableQuery.ts:701\r\n    b ObservableQuery.ts:701\r\n    next ObservableQuery.ts:662\r\n    o QueryManager.ts:518\r\n    queryListenerForObserver QueryManager.ts:644\r\n    broadcastQueries QueryManager.ts:1091\r\n    broadcastQueries QueryManager.ts:1087\r\n    broadcastQueries QueryManager.ts:1085\r\n    b QueryManager.ts:1237\r\n    next Observable.js:322\r\n    b Observable.js:135\r\n    O Observable.js:179\r\n    value Observable.js:235\r\n    next observables.ts:12\r\n    next observables.ts:12\r\n    b Observable.js:135\r\n    O Observable.js:179\r\n    value Observable.js:235\r\n    next index.ts:60\r\n    b Observable.js:135\r\n    O Observable.js:179\r\n    value Observable.js:235\r\n    Ce httpLink.ts:142\r\n",
    "startTime": "2020/01/15 4:24 AM",
    "endTime": "2020/02/25 12:58 PM",
    "assignee": "sanjekum",
    "estimateNormalTime": 41.356944444444444
  },
  {
    "id": 12898823,
    "code": "ENTMQMAAS-1609",
    "name": "address column ordering on the connection detail page not working",
    "description": "Ordering is ineffective in the address column on the connection detail page.\r\nSee screen shot.\r\n\r\nI notice the orderBy clause with the Links subquery is absent.  It seems to work fine for the numerical columns.\r\n\r\nI also notice that the padlock icon is in the incorrect state for a TLS connection (it should be closed).\r\n\r\n !image-2020-01-15-14-07-55-917.png|thumbnail! ",
    "startTime": "2020/01/15 9:10 AM",
    "endTime": "2020/01/21 7:35 AM",
    "assignee": "sanjekum",
    "estimateNormalTime": 5.934027777777778
  },
  {
    "id": 12899539,
    "code": "ENTMQMAAS-1614",
    "name": "Release respins for 1.3 CVE-2020-2583 CVE-2020-2590 CVE-2020-2593 CVE-2020-2601 CVE-2020-2604 CVE-2020-2654 CVE-2020-2655",
    "description": "",
    "startTime": "2020/01/16 10:30 PM",
    "endTime": "2020/01/28 2:37 AM",
    "assignee": "buschv",
    "estimateNormalTime": 11.171527777777778
  },
  {
    "id": 12899376,
    "code": "ENTMQMAAS-1611",
    "name": "[#3670] : Upgrading from 0.30.2 to master stuck in restarting address-space-controller (4000 addresses)",
    "description": "Created from upstream issue [#3670|https://github.com/EnMasseProject/enmasse/issues/3670].",
    "startTime": "2020/01/16 10:50 AM",
    "endTime": "2020/01/20 2:21 AM",
    "assignee": "lulf@redhat.com",
    "estimateNormalTime": 3.6465277777777776
  },
  {
    "id": 12899784,
    "code": "ENTMQMAAS-1618",
    "name": "Connection detail page fails for brokered address space",
    "description": "Using a brokered address space, clicking through from connection list to connection detail leads to a blank page.  The issue is that the connections to the brokered addressspace do not have connection properties.  \r\n\r\nthe connection detail page currently assumes that all connections have the same set of connection properties.  This is not true.   It needs to be prepared to handle and empty connection.spec.properties array, or property keys/values the UI implementation doesn't recognise.\r\n\r\n",
    "startTime": "2020/01/17 10:54 AM",
    "endTime": "2020/01/25 1:31 PM",
    "assignee": "sanjekum",
    "estimateNormalTime": 8.109027777777778
  },
  {
    "id": 12899901,
    "code": "ENTMQMAAS-1619",
    "name": "console - remove old console route",
    "description": "Remove the automatic generation of the console route and the advertisement of the same in the addressspace.   Also make sure that for the upgrade case, the console route is removed.",
    "startTime": "2020/01/18 12:08 PM",
    "endTime": "2020/01/30 12:42 PM",
    "assignee": "keithbwall",
    "estimateNormalTime": 12.02361111111111
  },
  {
    "id": 12900211,
    "code": "ENTMQMAAS-1620",
    "name": "Use word 'partitions' rather than shards.",
    "description": "Console pages to use the word 'partitions' rather than shards.",
    "startTime": "2020/01/20 10:01 AM",
    "endTime": "2020/01/22 6:51 AM",
    "assignee": "rpattnai",
    "estimateNormalTime": 1.8680555555555556
  },
  {
    "id": 12900215,
    "code": "ENTMQMAAS-1621",
    "name": "Expose connection creation timestamp",
    "description": "The connection list and connection detail should expose the connection's timestamp to the user.  Follow the pattern you've already established from the AddressSpace pages.\r\n\r\nThe API makes this available in the same way AddressSpaces.\r\n\r\n\r\nquery connections {\r\n  connections {\r\n    Connections\r\n    {\r\n      ObjectMeta {\r\n        Name\r\n        CreationTimestamp\r\n      }\r\n    }\r\n  }\r\n}\r\n",
    "startTime": "2020/01/20 10:09 AM",
    "endTime": "2020/01/22 6:51 AM",
    "assignee": "sanjekum",
    "estimateNormalTime": 1.8625
  },
  {
    "id": 12900224,
    "code": "ENTMQMAAS-1622",
    "name": "Connection detail page to use connection's hostname rather than id",
    "description": "On the connection detail page, use the connection's hostname as a title rather than the uuid.\r\n\r\nquery connections {\r\n  connections {\r\n    Connections\r\n    {\r\n      Spec {\r\n        Hostname\r\n      }\r\n    }\r\n  }\r\n}\r\n",
    "startTime": "2020/01/20 10:15 AM",
    "endTime": "2020/01/22 6:53 AM",
    "assignee": "sanjekum",
    "estimateNormalTime": 1.8597222222222223
  },
  {
    "id": 12900232,
    "code": "ENTMQMAAS-1624",
    "name": "add server side smarts for the defaulting of the address's name from the address",
    "description": "The server mutation createAddress should have the ability to default the address's name from the address's address.  If the address is a valid kubernetes name use <addressspace>.<address> as the name. If the name would not a a valid kubernetes name generate a valid name instead.    The same algorithm should be used in the address command query.",
    "startTime": "2020/01/20 10:23 AM",
    "endTime": "2020/02/17 5:22 AM",
    "assignee": "keithbwall",
    "estimateNormalTime": 27.790972222222223
  },
  {
    "id": 12900235,
    "code": "ENTMQMAAS-1625",
    "name": "Calculate messages/sec for metrics such as message in",
    "description": "Calculate messages/sec for metrics such as messages in/out.  Value should use 2dp for rates less than 1.",
    "startTime": "2020/01/20 10:24 AM",
    "endTime": "2020/01/30 12:43 PM",
    "assignee": "keithbwall",
    "estimateNormalTime": 10.096527777777778
  },
  {
    "id": 12900254,
    "code": "ENTMQMAAS-1627",
    "name": "Hide \\\"stored messages\\\" for anycast/mutlicast address types",
    "description": "On the address list page, the stored message value needs to be hidden for rows corresponding to anycast/mulicast.  These address types don't store messages,.\r\n",
    "startTime": "2020/01/20 10:52 AM",
    "endTime": "2020/01/22 4:53 AM",
    "assignee": "rpattnai",
    "estimateNormalTime": 1.7506944444444443
  },
  {
    "id": 12900257,
    "code": "ENTMQMAAS-1628",
    "name": "Hide \\\"shards\\\" value for address types except queue",
    "description": "On the address list page, Hide \\\"shards\\\" value (which is to be renamed partitions) for address types except queue\r\n",
    "startTime": "2020/01/20 10:54 AM",
    "endTime": "2020/01/22 6:52 AM",
    "assignee": "rpattnai",
    "estimateNormalTime": 1.8319444444444446
  },
  {
    "id": 12900266,
    "code": "ENTMQMAAS-1631",
    "name": "Message in/out screen label",
    "description": "Message in/out values are rates, in messages per second.  The UI needs to consistently report using appropriate screen labelling.\r\n\r\nAlso I notice on the connection detail page, in the more details are the pluralisation of the message in / message out differs from that used elsewhere.",
    "startTime": "2020/01/20 11:07 AM",
    "endTime": "2020/02/21 4:21 AM",
    "assignee": "rpattnai",
    "estimateNormalTime": 31.718055555555555
  },
  {
    "id": 12900303,
    "code": "ENTMQMAAS-1632",
    "name": "Addressspace list - namespace is one word",
    "description": "On the addressspace list page, \\\"namespace\\\" is one word.   Also we disliked the use of the slash to separate name/namespace as this often signifies a choice.",
    "startTime": "2020/01/20 11:47 AM",
    "endTime": "2020/01/23 9:49 AM",
    "assignee": "rpattnai",
    "estimateNormalTime": 2.9180555555555556
  },
  {
    "id": 12900312,
    "code": "ENTMQMAAS-1633",
    "name": "Create workflow - review hyperlink spurious",
    "description": "I notice in the create addressspace workflow, Review is a live hyperlink.  Clicking it gives me a blank page.     The user should not be able to skip the form.\r\n\r\n !CreateInstanceWorkflow.png|thumbnail! ",
    "startTime": "2020/01/20 12:33 PM",
    "endTime": "2020/01/24 7:28 AM",
    "assignee": "rpattnai",
    "estimateNormalTime": 3.7881944444444446
  },
  {
    "id": 12900892,
    "code": "ENTMQMAAS-1634",
    "name": "Support disconnected installs from tag",
    "description": "",
    "startTime": "2020/01/22 6:40 AM",
    "endTime": "2020/02/26 4:08 AM",
    "assignee": "lulf@redhat.com",
    "estimateNormalTime": 34.894444444444446
  },
  {
    "id": 12900963,
    "code": "ENTMQMAAS-1635",
    "name": "PlanStatus field of the Address.Status object may be null",
    "description": "The PlanStatus field of the Address.Status object may be null.   The UI currently fails with a blank page if this is the case.  This is affected creation of the addresses in the brokered space.\r\n\r\nTypeError: \\\"e.Status.PlanStatus is null\\\"\r\n    W AddressListPage.tsx:108\r\n    ve AddressListPage.tsx:93\r\n    React 7\r\n    unstable_runWithPriority scheduler.production.min.js:18\r\n    React 5\r\n    next QueryData.ts:282\r\n    b Observable.js:135\r\n    O Observable.js:179\r\n    value Observable.js:235\r\n    b ObservableQuery.ts:701\r\n    b ObservableQuery.ts:701\r\n    next ObservableQuery.ts:662\r\n    o QueryManager.ts:518\r\n    queryListenerForObserver QueryManager.ts:644",
    "startTime": "2020/01/22 8:56 AM",
    "endTime": "2020/01/29 3:46 AM",
    "assignee": "anujha@redhat.com",
    "estimateNormalTime": 6.784722222222222
  },
  {
    "id": 12900969,
    "code": "ENTMQMAAS-1636",
    "name": "Address create workflow in brokered shows wrong address type selection",
    "description": "Use the address creation workflow to create  an address in the brokered address space.  The drop down shows the address types for the standard address space, rather than those for the brokered address space.    The server's behaviour is correct.\r\n\r\n!image-2020-01-22-14-05-55-146.png|thumbnail! \r\n\r\n\r\nquery plans {\r\n  addressTypes_v2(addressSpaceType: brokered) {\r\n    ObjectMeta {\r\n      Name\r\n    }\r\n  }\r\n}\r\n\r\n\r\n{\r\n  \\\"data\\\": {\r\n    \\\"addressTypes_v2\\\": [\r\n      {\r\n        \\\"ObjectMeta\\\": {\r\n          \\\"Name\\\": \\\"brokered.queue\\\"\r\n        }\r\n      },\r\n      {\r\n        \\\"ObjectMeta\\\": {\r\n          \\\"Name\\\": \\\"brokered.topic\\\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}",
    "startTime": "2020/01/22 9:07 AM",
    "endTime": "2020/01/29 3:47 AM",
    "assignee": "rpattnai",
    "estimateNormalTime": 6.777777777777778
  },
  {
    "id": 12901469,
    "code": "ENTMQMAAS-1637",
    "name": "Stored Message value shown in place of Partitions value shown on address details page",
    "description": "On the address details page, the top area has the words \\\"Stored in x Partitions\\\".  However the x value shown is actually the queue's stored message value. See ui/src/Pages/AddressDetail/AddressDetailPage.tsx:139.  \r\n\r\nspecifically:\r\n        partitions={getFilteredValue(\r\n            addressDetail.Metrics,\r\n            \\\"enmasse_messages_stored\\\"\r\n          )} \r\n\r\nThe partitions value comes from Status.PlanStatus.Partitions.\r\n\r\nI'd argue that showing the stored messages is more useful for the average user. Perhaps both values should be seen?\r\nWhatever is decided, the logic about when to display these items need to follow that implemented on the address list page.\r\n\r\n\r\n!image-2020-01-23-16-12-01-854.png|thumbnail! ",
    "startTime": "2020/01/23 11:19 AM",
    "endTime": "2020/01/24 7:28 AM",
    "assignee": "anujha@redhat.com",
    "estimateNormalTime": 0.8395833333333332
  },
  {
    "id": 12901488,
    "code": "ENTMQMAAS-1639",
    "name": "Page <title/> wrong on connection connection detail page",
    "description": "It shows \\\"Address Details\\\" rather than \\\"Connection Details\\\" \r\n\r\n!image-2020-01-23-17-33-30-923.png|thumbnail! ",
    "startTime": "2020/01/23 12:34 PM",
    "endTime": "2020/01/24 7:34 AM",
    "assignee": "anujha@redhat.com",
    "estimateNormalTime": 0.7916666666666666
  },
  {
    "id": 12901617,
    "code": "ENTMQMAAS-1641",
    "name": "Expose console-server memory size, session timeout for configuration via CR",
    "description": "Expose console-server memory size, session timeout for configuration via console-service CR.",
    "startTime": "2020/01/24 4:44 AM",
    "endTime": "2020/02/25 12:22 PM",
    "assignee": "keithbwall",
    "estimateNormalTime": 32.31805555555555
  },
  {
    "id": 12902756,
    "code": "ENTMQMAAS-1647",
    "name": "Create 1.4 RNs",
    "description": "",
    "startTime": "2020/01/28 10:23 AM",
    "endTime": "2020/03/26 5:08 PM",
    "assignee": "rhn-support-jmalloy",
    "estimateNormalTime": 58.28125
  },
  {
    "id": 12903743,
    "code": "ENTMQMAAS-1651",
    "name": "[#3804] : Create alert for standard authentication service status",
    "description": "Created from upstream issue [#3804|https://github.com/EnMasseProject/enmasse/issues/3804].",
    "startTime": "2020/01/30 10:51 AM",
    "endTime": "2020/02/27 7:57 AM",
    "assignee": "rshelly",
    "estimateNormalTime": 27.879166666666666
  },
  {
    "id": 12903748,
    "code": "ENTMQMAAS-1653",
    "name": "[#3806] : Create an alert for console status",
    "description": "Created from upstream issue [#3806|https://github.com/EnMasseProject/enmasse/issues/3806].",
    "startTime": "2020/01/30 10:53 AM",
    "endTime": "2020/06/23 11:04 AM",
    "assignee": "rshelly",
    "estimateNormalTime": 145.0076388888889
  },
  {
    "id": 12903807,
    "code": "ENTMQMAAS-1656",
    "name": "Spurious topic: \\\" \\\" in the address command preview",
    "description": "When I address command for a non-subscription address type, I see a spurious topic: \\\" \\\" in the yaml.  I can see by snooping the request, that the space is coming from the UI side.\r\n\r\nSee screenshot.",
    "startTime": "2020/01/30 12:02 PM",
    "endTime": "2020/01/31 5:40 AM",
    "assignee": "rpattnai",
    "estimateNormalTime": 0.7347222222222222
  },
  {
    "id": 12903810,
    "code": "ENTMQMAAS-1657",
    "name": "No visual feedback when commands are copied to the clipboard",
    "description": "When you click the icon to copy the address space or address command line, there's no visual indications that anything has actually happened.  The button doesn't depress and there's no \\\"Copied!\\\" popup to let you know something done.\r\n\r\nI attach a screenshot from https://access.redhat.com/containers/?tab=images#/registry.access.redhat.com/openshift3/oauth-proxy  notice when you click their copy button, it is really clear something has happened.",
    "startTime": "2020/01/30 12:09 PM",
    "endTime": "2020/02/28 7:49 AM",
    "assignee": "anujha@redhat.com",
    "estimateNormalTime": 28.819444444444443
  },
  {
    "id": 12907050,
    "code": "ENTMQMAAS-1686",
    "name": "[systemtest] re-test documentation steps",
    "description": "",
    "startTime": "2020/02/10 1:15 PM",
    "endTime": "2020/03/14 7:33 AM",
    "assignee": "obabec",
    "estimateNormalTime": 32.762499999999996
  },
  {
    "id": 12906744,
    "code": "ENTMQMAAS-1668",
    "name": "[systemtest] testing epic for new console",
    "description": "",
    "startTime": "2020/02/10 2:03 AM",
    "endTime": "2020/03/27 4:37 AM",
    "assignee": "dkornel@redhat.com",
    "estimateNormalTime": 46.106944444444444
  },
  {
    "id": 12906747,
    "code": "ENTMQMAAS-1669",
    "name": "[systemtest] create scale tests for enmasse",
    "description": "So to summarize discussion in chat, the following tests will be created:\r\n\r\n# Address and connection scale tests - create 4 anycast + 1 queue, check create and ready time. Then create 1 sender/receiver pair connecting to the queue. Check that system is stable. Rinse & Repeat\r\n# Messaging performance tests - create addresses first, then create messaging clients and increase load from messaging clients\r\n# HA tests - create addresses first, then create messaging clients and api clients creating/deleting addresses and measure downtime.\r\n",
    "startTime": "2020/02/10 2:09 AM",
    "endTime": "2020/03/30 12:50 PM",
    "assignee": "dkornel@redhat.com",
    "estimateNormalTime": 49.44513888888889
  },
  {
    "id": 12906748,
    "code": "ENTMQMAAS-1670",
    "name": "[systemtest] provide stable RHMI env for scale/performance tests",
    "description": "",
    "startTime": "2020/02/10 2:10 AM",
    "endTime": "2020/02/17 5:46 AM",
    "assignee": "dkornel@redhat.com",
    "estimateNormalTime": 7.1499999999999995
  },
  {
    "id": 12906750,
    "code": "ENTMQMAAS-1672",
    "name": "[systemtest] write metadata for new performance tests",
    "description": "",
    "startTime": "2020/02/10 2:11 AM",
    "endTime": "2020/03/16 1:57 PM",
    "assignee": "dkornel@redhat.com",
    "estimateNormalTime": 35.49027777777778
  },
  {
    "id": 12906755,
    "code": "ENTMQMAAS-1674",
    "name": "[systemtest] test suite for enmasse 1.0/amq-online 2.0",
    "description": "",
    "startTime": "2020/02/10 2:20 AM",
    "endTime": "2020/09/21 5:47 AM",
    "assignee": "dkornel@redhat.com",
    "estimateNormalTime": 224.14374999999998
  },
  {
    "id": 12906756,
    "code": "ENTMQMAAS-1675",
    "name": "[systemtest] write javadoc for tests",
    "description": "write javadoc for tests for better readability (only for tests where name of test is not so sufficient)",
    "startTime": "2020/02/10 2:21 AM",
    "endTime": "2020/06/01 1:38 PM",
    "assignee": "dkornel@redhat.com",
    "estimateNormalTime": 112.47013888888888
  },
  {
    "id": 12906757,
    "code": "ENTMQMAAS-1676",
    "name": "[systemtest] refactor managers (shared and isolated)",
    "description": "",
    "startTime": "2020/02/10 2:22 AM",
    "endTime": "2020/04/07 4:22 AM",
    "assignee": "dkornel@redhat.com",
    "estimateNormalTime": 57.083333333333336
  },
  {
    "id": 12906758,
    "code": "ENTMQMAAS-1677",
    "name": "[systemtest] make default resources available in resource manager",
    "description": "make default enmasse resources available in resource manager.",
    "startTime": "2020/02/10 2:24 AM",
    "endTime": "2020/04/07 4:22 AM",
    "assignee": "dkornel@redhat.com",
    "estimateNormalTime": 57.081944444444446
  },
  {
    "id": 12906762,
    "code": "ENTMQMAAS-1678",
    "name": "[systemtest] upstream CI",
    "description": "",
    "startTime": "2020/02/10 2:56 AM",
    "endTime": "2020/09/21 5:48 AM",
    "assignee": "dkornel@redhat.com",
    "estimateNormalTime": 224.11944444444444
  },
  {
    "id": 12906765,
    "code": "ENTMQMAAS-1680",
    "name": "[systemtest] run iot tests as part of smoke",
    "description": "",
    "startTime": "2020/02/10 2:57 AM",
    "endTime": "2020/07/20 3:22 AM",
    "assignee": "obabec",
    "estimateNormalTime": 161.01736111111111
  },
  {
    "id": 12906764,
    "code": "ENTMQMAAS-1679",
    "name": "[systemtest] migrate actions from docker to podman",
    "description": "",
    "startTime": "2020/02/10 2:57 AM",
    "endTime": "2020/02/12 9:06 AM",
    "assignee": "obabec",
    "estimateNormalTime": 2.25625
  },
  {
    "id": 12906766,
    "code": "ENTMQMAAS-1681",
    "name": "[systemtest] iot test triggered by label",
    "description": "",
    "startTime": "2020/02/10 2:59 AM",
    "endTime": "2020/09/21 5:47 AM",
    "assignee": "obabec",
    "estimateNormalTime": 224.11666666666667
  },
  {
    "id": 12906823,
    "code": "ENTMQMAAS-1682",
    "name": "[systemtest] dowsntream CI",
    "description": "",
    "startTime": "2020/02/10 4:57 AM",
    "endTime": "2022/11/01 12:24 PM",
    "assignee": "rhn-support-jkalinic",
    "estimateNormalTime": 995.3104166666667
  },
  {
    "id": 12906938,
    "code": "ENTMQMAAS-1684",
    "name": "[systemtest] implement tests for monitoring",
    "description": "",
    "startTime": "2020/02/10 9:12 AM",
    "endTime": "2020/05/20 3:06 AM",
    "assignee": "dkornel@redhat.com",
    "estimateNormalTime": 99.74583333333334
  },
  {
    "id": 12906951,
    "code": "ENTMQMAAS-1685",
    "name": "[systemtest] send our results and artifacts to report portal",
    "description": "as part of our upstream/dowsntream jobs we should send results to report portal",
    "startTime": "2020/02/10 9:30 AM",
    "endTime": "2020/03/24 2:09 PM",
    "assignee": "dkornel@redhat.com",
    "estimateNormalTime": 43.19375
  },
  {
    "id": 12907322,
    "code": "ENTMQMAAS-1688",
    "name": "[systemtest] create install pipeline for ocp 4.x",
    "description": "Create pipeline for automatically installation of ocp 4 on top of openstack",
    "startTime": "2020/02/11 4:26 AM",
    "endTime": "2020/02/18 10:24 AM",
    "assignee": "dkornel@redhat.com",
    "estimateNormalTime": 7.248611111111111
  },
  {
    "id": 12907482,
    "code": "ENTMQMAAS-1690",
    "name": "Enable Pod Affinity/AntiAffinity in IoTConfig",
    "description": "Allow configuring PodDisruption and AntiAffinity for Pods of the IoT infrastructure. Think about concept to provide infrastructure globals and possible overrides for single components.",
    "startTime": "2020/02/11 8:10 AM",
    "endTime": "2020/06/03 7:33 AM",
    "assignee": "jreimann-2",
    "estimateNormalTime": 112.97430555555555
  },
  {
    "id": 12908120,
    "code": "ENTMQMAAS-1708",
    "name": "[systemtest] fix cli-rhea client duration mode and connector",
    "description": "",
    "startTime": "2020/02/12 10:39 AM",
    "endTime": "2020/02/12 10:40 AM",
    "assignee": "dkornel@redhat.com",
    "estimateNormalTime": 0.0006944444444444445
  },
  {
    "id": 12907901,
    "code": "ENTMQMAAS-1705",
    "name": "[IoT Design] Device Creation",
    "description": "Device Creation UX Designs\r\n\r\nNeed to consider in these parts:\r\n* PatternFly 4 adaptation\r\n* A full cycle for the creation\r\n* How to check the new item",
    "startTime": "2020/02/12 5:28 AM",
    "endTime": "2020/07/16 11:45 PM",
    "assignee": "yanzredhat",
    "estimateNormalTime": 155.76180555555555
  },
  {
    "id": 12907941,
    "code": "ENTMQMAAS-1706",
    "name": "[#3864] : Add additional router mesh checks",
    "description": "Created from upstream issue [#3864|https://github.com/EnMasseProject/enmasse/issues/3864].",
    "startTime": "2020/02/12 6:26 AM",
    "endTime": "2020/02/25 12:23 PM",
    "assignee": "lulf@redhat.com",
    "estimateNormalTime": 13.247916666666667
  },
  {
    "id": 12907986,
    "code": "ENTMQMAAS-1707",
    "name": "Clients needs to be able to scale the subscription consumer pods",
    "description": "Currently trying to scale up the consumers for a topic subscription using standard address generates an error.\r\n\r\njavax.jms.IllegalStateException:TheMessageConsumerwasclosedduetoanunrecoverableerror.atorg.apache.qpid.jms.JmsMessageConsumer.checkClosed(JmsMessageConsumer.java:395)~[qpid-jms-client-0.48.0.jar:na]atorg.apache.qpid.jms.JmsMessageConsumer.receive(JmsMessageConsumer.java:205)~[qpid-jms-client-0.48.0.jar:na]atnl.rechtspraak.cmp.service.ConsumerService.consume(ConsumerService.java:64)~[classes/:na]atnl.rechtspraak.cmp.controller.AmqConsumerController.consume(AmqConsumerController.java:19)~[classes/:na]atsun.reflect.NativeMethodAccessorImpl.invoke0(NativeMethod)~[na:1.8.0_221]atsun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)~[na:1.8.0_221]atsun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)~[na:1.8.0_221]atjava.lang.reflect.Method.invoke(Method.java:498)~[na:1.8.0_221]atorg.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:190)~[spring-web-5.1.9.RELEASE.jar:5.1.9.RELEASE]atorg.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:138)~[spring-web-5.1.9.RELEASE.jar:5.1.9.RELEASE]atorg.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:104)~[spring-webmvc-5.1.9.RELEASE.jar:5.1.9.RELEASE]atorg.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:892)~[spring-webmvc-5.1.9.RELEASE.jar:5.1.9.RELEASE]atorg.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java:797)~[spring-webmvc-5.1.9.RELEASE.jar:5.1.9.RELEASE]atorg.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java:87)~[spring-webmvc-5.1.9.RELEASE.jar:5.1.9.RELEASE]atorg.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:1039)~[spring-webmvc-5.1.9.RELEASE.jar:5.1.9.RELEASE]atorg.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:942)~[spring-webmvc-5.1.9.RELEASE.jar:5.1.9.RELEASE]atorg.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:1005)[spring-webmvc-5.1.9.RELEASE.jar:5.1.9.RELEASE]atorg.springframework.web.servlet.FrameworkServlet.doGet(FrameworkServlet.java:897)[spring-webmvc-5.1.9.RELEASE.jar:5.1.9.RELEASE]atjavax.servlet.http.HttpServlet.service(HttpServlet.java:634)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:882)[spring-webmvc-5.1.9.RELEASE.jar:5.1.9.RELEASE]atjavax.servlet.http.HttpServlet.service(HttpServlet.java:741)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:231)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:53)[tomcat-embed-websocket-9.0.24.jar:9.0.24]atorg.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.springframework.boot.actuate.web.trace.servlet.HttpTraceFilter.doFilterInternal(HttpTraceFilter.java:88)[spring-boot-actuator-2.1.8.RELEASE.jar:2.1.8.RELEASE]atorg.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:118)[spring-web-5.1.9.RELEASE.jar:5.1.9.RELEASE]atorg.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.springframework.web.filter.RequestContextFilter.doFilterInternal(RequestContextFilter.java:99)[spring-web-5.1.9.RELEASE.jar:5.1.9.RELEASE]atorg.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:118)[spring-web-5.1.9.RELEASE.jar:5.1.9.RELEASE]atorg.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.springframework.web.filter.FormContentFilter.doFilterInternal(FormContentFilter.java:92)[spring-web-5.1.9.RELEASE.jar:5.1.9.RELEASE]atorg.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:118)[spring-web-5.1.9.RELEASE.jar:5.1.9.RELEASE]atorg.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.springframework.web.filter.HiddenHttpMethodFilter.doFilterInternal(HiddenHttpMethodFilter.java:93)[spring-web-5.1.9.RELEASE.jar:5.1.9.RELEASE]atorg.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:118)[spring-web-5.1.9.RELEASE.jar:5.1.9.RELEASE]atorg.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.springframework.boot.actuate.metrics.web.servlet.WebMvcMetricsFilter.filterAndRecordMetrics(WebMvcMetricsFilter.java:114)[spring-boot-actuator-2.1.8.RELEASE.jar:2.1.8.RELEASE]atorg.springframework.boot.actuate.metrics.web.servlet.WebMvcMetricsFilter.doFilterInternal(WebMvcMetricsFilter.java:104)[spring-boot-actuator-2.1.8.RELEASE.jar:2.1.8.RELEASE]atorg.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:118)[spring-web-5.1.9.RELEASE.jar:5.1.9.RELEASE]atorg.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java:200)[spring-web-5.1.9.RELEASE.jar:5.1.9.RELEASE]atorg.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:118)[spring-web-5.1.9.RELEASE.jar:5.1.9.RELEASE]atorg.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:202)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:96)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:526)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:139)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:92)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:74)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:343)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.coyote.http11.Http11Processor.service(Http11Processor.java:408)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.coyote.AbstractProcessorLight.process(AbstractProcessorLight.java:66)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.coyote.AbstractProtocol$ConnectionHandler.process(AbstractProtocol.java:860)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1587)[tomcat-embed-core-9.0.24.jar:9.0.24]atorg.apache.tomcat.util.net.SocketProcessorBase.run(SocketProcessorBase.java:49)[tomcat-embed-core-9.0.24.jar:9.0.24]atjava.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)[na:1.8.0_221]atjava.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)[na:1.8.0_221]atorg.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61)[tomcat-embed-core-9.0.24.jar:9.0.24]atjava.lang.Thread.run(Thread.java:748)[na:1.8.0_221]Causedby:org.apache.qpid.jms.provider.ProviderException:AMQ119005:errorcreatingconsumer,AMQ229200:MaximumConsumerLimitReachedonQueue:(address=mytopic,queue=mysub)[condition=amqp:internal-error]atorg.apache.qpid.jms.provider.amqp.AmqpSupport.convertToNonFatalException(AmqpSupport.java:181)~[qpid-jms-client-0.48.0.jar:na]atorg.apache.qpid.jms.provider.amqp.AmqpAbstractResource.processRemoteClose(AmqpAbstractResource.java:266)~[qpid-jms-client-0.48.0.jar:na]atorg.apache.qpid.jms.provider.amqp.AmqpProvider.processUpdates(AmqpProvider.java:985)~[qpid-jms-client-0.48.0.jar:na]atorg.apache.qpid.jms.provider.amqp.AmqpProvider.onData(AmqpProvider.java:871)~[qpid-jms-client-0.48.0.jar:na]atorg.apache.qpid.jms.transports.netty.NettyTcpTransport$NettyTcpTransportHandler.channelRead0(NettyTcpTransport.java:563)~[qpid-jms-client-0.48.0.jar:na]atorg.apache.qpid.jms.transports.netty.NettyTcpTransport$NettyTcpTransportHandler.channelRead0(NettyTcpTransport.java:556)~[qpid-jms-client-0.48.0.jar:na]atio.netty.channel.SimpleChannelInboundHandler.channelRead(SimpleChannelInboundHandler.java:105)~[netty-transport-4.1.39.Final.jar:4.1.39.Final]atio.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:374)~[netty-transport-4.1.39.Final.jar:4.1.39.Final]atio.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:360)~[netty-transport-4.1.39.Final.jar:4.1.39.Final]atio.netty.channel.AbstractChannelHandlerContext.fireChannelRead(AbstractChannelHandlerContext.java:352)~[netty-transport-4.1.39.Final.jar:4.1.39.Final]atio.netty.handler.ssl.SslHandler.unwrap(SslHandler.java:1475)~[netty-handler-4.1.39.Final.jar:4.1.39.Final]atio.netty.handler.ssl.SslHandler.decodeJdkCompatible(SslHandler.java:1224)~[netty-handler-4.1.39.Final.jar:4.1.39.Final]atio.netty.handler.ssl.SslHandler.decode(SslHandler.java:1271)~[netty-handler-4.1.39.Final.jar:4.1.39.Final]atio.netty.handler.codec.ByteToMessageDecoder.decodeRemovalReentryProtection(ByteToMessageDecoder.java:505)~[netty-codec-4.1.39.Final.jar:4.1.39.Final]atio.netty.handler.codec.ByteToMessageDecoder.callDecode(ByteToMessageDecoder.java:444)~[netty-codec-4.1.39.Final.jar:4.1.39.Final]atio.netty.handler.codec.ByteToMessageDecoder.channelRead(ByteToMessageDecoder.java:283)~[netty-codec-4.1.39.Final.jar:4.1.39.Final]atio.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:374)~[netty-transport-4.1.39.Final.jar:4.1.39.Final]atio.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:360)~[netty-transport-4.1.39.Final.jar:4.1.39.Final]atio.netty.channel.AbstractChannelHandlerContext.fireChannelRead(AbstractChannelHandlerContext.java:352)~[netty-transport-4.1.39.Final.jar:4.1.39.Final]atio.netty.channel.DefaultChannelPipeline$HeadContext.channelRead(DefaultChannelPipeline.java:1421)~[netty-transport-4.1.39.Final.jar:4.1.39.Final]atio.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:374)~[netty-transport-4.1.39.Final.jar:4.1.39.Final]atio.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:360)~[netty-transport-4.1.39.Final.jar:4.1.39.Final]atio.netty.channel.DefaultChannelPipeline.fireChannelRead(DefaultChannelPipeline.java:930)~[netty-transport-4.1.39.Final.jar:4.1.39.Final]atio.netty.channel.nio.AbstractNioByteChannel$NioByteUnsafe.read(AbstractNioByteChannel.java:163)~[netty-transport-4.1.39.Final.jar:4.1.39.Final]atio.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:697)~[netty-transport-4.1.39.Final.jar:4.1.39.Final]atio.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:632)~[netty-transport-4.1.39.Final.jar:4.1.39.Final]atio.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:549)~[netty-transport-4.1.39.Final.jar:4.1.39.Final]atio.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:511)~[netty-transport-4.1.39.Final.jar:4.1.39.Final]atio.netty.util.concurrent.SingleThreadEventExecutor$5.run(SingleThreadEventExecutor.java:918)~[netty-common-4.1.39.Final.jar:4.1.39.Final]atio.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)~[netty-common-4.1.39.Final.jar:4.1.39.Final]...1commonframesomitted",
    "startTime": "2020/02/12 7:29 AM",
    "endTime": "2020/02/14 4:57 PM",
    "assignee": "lulf@redhat.com",
    "estimateNormalTime": 2.3944444444444444
  },
  {
    "id": 12908513,
    "code": "ENTMQMAAS-1711",
    "name": "Console issues",
    "description": "",
    "startTime": "2020/02/13 5:13 AM",
    "endTime": "",
    "assignee": "rgodfrey@redhat.com",
    "estimateNormalTime": null
  },
  {
    "id": 12908515,
    "code": "ENTMQMAAS-1712",
    "name": "Console does not show clients attached to topic/queue in brokered address space, it shows only connection",
    "description": "",
    "startTime": "2020/02/13 5:15 AM",
    "endTime": "2020/02/21 8:40 AM",
    "assignee": "keithbwall",
    "estimateNormalTime": 8.14236111111111
  },
  {
    "id": 12908614,
    "code": "ENTMQMAAS-1716",
    "name": "Validation on address space creation is missing",
    "description": "Validation on address space creation is missing. (User can create address space with number in name - which is not permitted in kube world, also user can create standard address space with brokered plans...)",
    "startTime": "2020/02/13 8:09 AM",
    "endTime": "2020/02/14 2:23 AM",
    "assignee": "anujha@redhat.com",
    "estimateNormalTime": 0.7597222222222223
  },
  {
    "id": 12908615,
    "code": "ENTMQMAAS-1717",
    "name": "If user tries to create address space with forbidden character (+,-,...) in name than console doesn’t complete request and with no error just stay on last form with finish button",
    "description": "If user tries to create address space with forbidden character (+,-,...) in name than console doesn’t complete request and with no error just stay on last form with finish button",
    "startTime": "2020/02/13 8:09 AM",
    "endTime": "2020/02/26 10:56 AM",
    "assignee": "anujha@redhat.com",
    "estimateNormalTime": 13.115972222222224
  },
  {
    "id": 12908617,
    "code": "ENTMQMAAS-1719",
    "name": "Service catalog application contains dashboard link (which was link to addressspace console) and it still contains console proxy route. So please change it to new console link",
    "description": "Service catalog application contains dashboard link (which was link to addressspace console) and it still contains console proxy route. So please change it to new console link",
    "startTime": "2020/02/13 8:10 AM",
    "endTime": "2020/02/16 1:29 PM",
    "assignee": "keithbwall",
    "estimateNormalTime": 3.2215277777777778
  },
  {
    "id": 12908620,
    "code": "ENTMQMAAS-1721",
    "name": "Edit doesn’t work either for addresses (change plan from small anycast to large anycast or etc..)",
    "description": "Edit doesn’t work either for addresses (change plan from small anycast to large anycast or etc..)",
    "startTime": "2020/02/13 8:11 AM",
    "endTime": "2020/02/14 3:37 AM",
    "assignee": "buschv",
    "estimateNormalTime": 0.8097222222222222
  },
  {
    "id": 12908635,
    "code": "ENTMQMAAS-1726",
    "name": "address creation form allows to create addresses with name like '.fasdfffasd'",
    "description": "address creation form allows to create addresses with name like '.fasdfffasd'  however graphql server fails because of 'GraphQL error: Address.enmasse.io \\\"standard-shared-0..fasdfffasd\\\" is invalid: metadata.name: Invalid value: \\\"standard-shared-0..fasdfffasd\\\": a DNS-1123 subdomain must consist of lower case alphanumeric characters, '-' or '.', and must start and end with an alphanumeric character (e.g. 'example.com', regex used for validation is '[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*')'  ",
    "startTime": "2020/02/13 8:28 AM",
    "endTime": "2020/02/26 11:21 AM",
    "assignee": "keithbwall",
    "estimateNormalTime": 13.120138888888889
  },
  {
    "id": 12908633,
    "code": "ENTMQMAAS-1725",
    "name": "Addressspace edit does not work, I'm not able to switch plan and auth service",
    "description": "Addressspace edit does not work, I'm not able to switch plan and auth service",
    "startTime": "2020/02/13 8:28 AM",
    "endTime": "2020/02/13 12:24 PM",
    "assignee": "buschv",
    "estimateNormalTime": 0.1638888888888889
  },
  {
    "id": 12909122,
    "code": "ENTMQMAAS-1732",
    "name": "[systemtest] write console test for generated yamls",
    "description": "",
    "startTime": "2020/02/14 9:19 AM",
    "endTime": "2020/02/19 2:24 AM",
    "assignee": "obabec",
    "estimateNormalTime": 4.711805555555555
  },
  {
    "id": 12909424,
    "code": "ENTMQMAAS-1733",
    "name": "confirm button in delete addresses does not close wizard",
    "description": "Unable to infer path to ace from script src, use ace.config.set('basePath', 'path') to enable dynamic loading of modes and themes or with webpack use ace/webpack-resolver ace.js:4518:16\r\n    c ace.js:4518\r\n    loadModule ace.js:4509\r\n    setMode ace.js:10323\r\n    componentDidMount ace.tsx:221\r\n    bu React\r\n    unstable_runWithPriority scheduler.production.min.js:18\r\n    React 4\r\n    unstable_runWithPriority scheduler.production.min.js:18\r\n    React 5\r\n    next QueryData.ts:282\r\n    _ Observable.js:130\r\n    b Observable.js:165\r\n    value Observable.js:219\r\n    b ObservableQuery.ts:701\r\n    b ObservableQuery.ts:701\r\n    next ObservableQuery.ts:662\r\n    o QueryManager.ts:518\r\n    queryListenerForObserver QueryManager.ts:644\r\n    broadcastQueries QueryManager.ts:1091\r\n    broadcastQueries QueryManager.ts:1087\r\n    broadcastQueries QueryManager.ts:1085\r\n    b QueryManager.ts:1237\r\n    next Observable.js:308\r\n    _ Observable.js:130\r\n    b Observable.js:165\r\n    value Observable.js:219\r\n    next observables.ts:12\r\n    next observables.ts:12\r\n    _ Observable.js:130\r\n    b Observable.js:165\r\n    value Observable.js:219\r\n    next index.ts:60\r\n    _ Observable.js:130\r\n    b Observable.js:165\r\n    value Observable.js:219\r\n    Ce httpLink.ts:142\r\n",
    "startTime": "2020/02/16 2:54 PM",
    "endTime": "2020/02/17 4:38 AM",
    "assignee": "rpattnai",
    "estimateNormalTime": 0.5722222222222222
  },
  {
    "id": 12909533,
    "code": "ENTMQMAAS-1734",
    "name": "API server can be unreachable if network policies are enabled on OpenShift",
    "description": "The release notes in the 1.3 documentation should contain a note about network policies that can affect api-server:\r\n\r\nIf the OpenShift cluster is configured with a deny-all or namespaced-only network policy, the AMQ Online api-server could be unreachable by the OpenShift API server. To resolve this, a NetworkPolicy must be installed:\r\n\r\n{code}\r\napiVersion: networking.k8s.io/v1\r\nkind: NetworkPolicy\r\nmetadata:\r\n  name: api-server-policy\r\n  namespace: amq-online-infra\r\nspec:\r\n  podSelector:\r\n    matchLabels:\r\n      component: api-server\r\n  policyTypes:\r\n  - Ingress\r\n  ingress:\r\n  - {}\r\n{code}",
    "startTime": "2020/02/17 5:13 AM",
    "endTime": "",
    "assignee": "rhn-support-jmalloy",
    "estimateNormalTime": null
  },
  {
    "id": 12910328,
    "code": "ENTMQMAAS-1741",
    "name": "Consolelink CR is not deleted when enmasse-infra is uninstalled",
    "description": "console link CR survived enmasse uninstall process, so link is referring into non-exists console",
    "startTime": "2020/02/18 11:14 AM",
    "endTime": "2020/02/25 1:57 PM",
    "assignee": "rhn-support-jmalloy",
    "estimateNormalTime": 7.113194444444445
  },
  {
    "id": 12910540,
    "code": "ENTMQMAAS-1743",
    "name": "Selection of address type error",
    "description": "When qdrouter is not running I am not able to select address plan(Process of address creation), also I can see error in JS console. Templates are fresh from 19.2 morning master. Address space is standard.",
    "startTime": "2020/02/19 2:54 AM",
    "endTime": "2020/02/26 8:23 AM",
    "assignee": "keithbwall",
    "estimateNormalTime": 7.228472222222222
  },
  {
    "id": 12910764,
    "code": "ENTMQMAAS-1745",
    "name": "[systemtest] write console tests for attached links (clients)",
    "description": "",
    "startTime": "2020/02/19 9:42 AM",
    "endTime": "2020/02/21 8:41 AM",
    "assignee": "obabec",
    "estimateNormalTime": 1.957638888888889
  },
  {
    "id": 12911723,
    "code": "ENTMQMAAS-1750",
    "name": "[service catalog] user does not see his addressspace created by service catalog",
    "description": "",
    "startTime": "2020/02/21 1:59 PM",
    "endTime": "2020/02/25 1:23 AM",
    "assignee": "keithbwall",
    "estimateNormalTime": 3.475
  },
  {
    "id": 12911529,
    "code": "ENTMQMAAS-1749",
    "name": "the server responded with a status of 504 (Gateway Time-out) during console oauth authentication",
    "description": "From: \r\n\r\nhttps://maas-jenkins-csb-amq-online.cloud.paas.psi.redhat.com/job/enmasse-master-folder/job/enmasse-master-shared/68/artifact/artifacts/openshift-logs/logs/selenium_tests/io.enmasse.systemtest.shared.standard.web.ChromeConsoleTest/testSortConnectionsByContainerId/browser_console.log\r\n\r\nSEVERE: 2020-02-20 06:15:21: https://console-enmasse-infra.10.0.141.187.nip.io/ - Failed to load resource: the server responded with a status of 403 (Forbidden)\r\nSEVERE: 2020-02-20 06:15:54: https://console-enmasse-infra.10.0.141.187.nip.io/oauth/callback?code=8gtDRD7alhoH0oh-IgnaqPl2R4o2ZUhX4UAN8D1yZlo&state=a89ca7862abfb68a25785d1f2927b3d2%3A%2F - Failed to load resource: the server responded with a status of 504 (Gateway Time-out)",
    "startTime": "2020/02/21 4:49 AM",
    "endTime": "2024/04/16 12:57 PM",
    "assignee": "keithbwall",
    "estimateNormalTime": 1516.3388888888887
  },
  {
    "id": 12912044,
    "code": "ENTMQMAAS-1751",
    "name": "spurious \\\"creationTimestamp: null\\\" included as part of the address space command preview",
    "description": "The address space command preview includes a spurious null creationTimestamp and a metadata container.\r\n\r\n  authenticationService:\r\n    metadata:\r\n      creationTimestamp: null \r\n\r\n!image-2020-02-24-12-46-43-879.png|thumbnail! ",
    "startTime": "2020/02/24 7:48 AM",
    "endTime": "2020/02/25 12:38 PM",
    "assignee": "keithbwall",
    "estimateNormalTime": 1.2013888888888888
  },
  {
    "id": 12912956,
    "code": "ENTMQMAAS-1761",
    "name": "[systemtest] create test for blank page (address, address space)",
    "description": "",
    "startTime": "2020/02/26 11:09 AM",
    "endTime": "2020/03/06 2:36 AM",
    "assignee": "obabec",
    "estimateNormalTime": 8.643749999999999
  },
  {
    "id": 12912955,
    "code": "ENTMQMAAS-1760",
    "name": "[systemtest] create test for link blank page",
    "description": "",
    "startTime": "2020/02/26 11:09 AM",
    "endTime": "2020/03/06 2:35 AM",
    "assignee": "obabec",
    "estimateNormalTime": 8.643055555555556
  },
  {
    "id": 12912958,
    "code": "ENTMQMAAS-1762",
    "name": "[systemtest] create test for container id filtering",
    "description": "",
    "startTime": "2020/02/26 11:10 AM",
    "endTime": "2020/03/06 8:11 AM",
    "assignee": "obabec",
    "estimateNormalTime": 8.875694444444445
  },
  {
    "id": 12912875,
    "code": "ENTMQMAAS-1758",
    "name": "Broken links in 7.5 version of the published documentation",
    "description": "Mostly just broken #anchors, meaning the documentation reader does not get a 404 page back, only that their browser does not scroll to the correct part of the single-page doc document linked.\r\n\r\n+ go run cmd/check_released/main.go\r\n\r\n/// evaluating_amq_online_on_openshift\r\n\r\nhttps://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html-single/evaluating_amq_online_on_openshift/\r\nlinks to: https://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html-single/evaluating_amq_online_on_openshift/#installing-services-messaging-iot\r\nissue: id #installing-services-messaging-iot not found\r\n\r\n/// release_notes_for_amq_online_1.3_on_openshift\r\n\r\nhttps://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html-single/release_notes_for_amq_online_1.3_on_openshift/\r\nlinks to: https://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html-single/installing_and_managing_amq_online_on_openshift/#proc-uninstalling-olm-workaround-rh-messaging\r\nissue: id #proc-uninstalling-olm-workaround-rh-messaging not found\r\n\r\n/// using_amq_online_on_openshift\r\n\r\nhttps://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html-single/using_amq_online_on_openshift/\r\nlinks to: https://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html-single/using_amq_online_on_openshift/#ref-view-message-conn-stats-table-messaging\r\nissue: id #ref-view-message-conn-stats-table-messaging not found\r\n\r\n/// installing_and_managing_amq_online_on_openshift\r\n\r\nhttps://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html-single/installing_and_managing_amq_online_on_openshift/\r\nlinks to: https://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html-single/installing_and_managing_amq_online_on_openshift/#create-address-cli-messaging\r\nissue: id #create-address-cli-messaging not found\r\n\r\nhttps://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html-single/installing_and_managing_amq_online_on_openshift/\r\nlinks to: https://access.redhat.com/documentation/en-us/openshift_container_platform/4.1/html-single/nodes/index#nodes-nodes-health\r\nissue: id #nodes-nodes-health not found\r\n\r\nhttps://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html-single/installing_and_managing_amq_online_on_openshift/\r\nlinks to: https://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html-single/installing_and_managing_amq_online_on_openshift/#create-address-space-cli-messaging\r\nissue: id #create-address-space-cli-messaging not found\r\n\r\nhttps://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html-single/installing_and_managing_amq_online_on_openshift/\r\nlinks to: https://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html-single/installing_and_managing_amq_online_on_openshift/#proc-creating-users-cli-messaging\r\nissue: id #proc-creating-users-cli-messaging not found",
    "startTime": "2020/02/26 8:34 AM",
    "endTime": "2020/07/14 11:35 AM",
    "assignee": "rhn-support-hmaclean",
    "estimateNormalTime": 139.12569444444446
  },
  {
    "id": 12913512,
    "code": "ENTMQMAAS-1770",
    "name": "[systemtest] create test for error dialog window",
    "description": "",
    "startTime": "2020/02/28 3:17 AM",
    "endTime": "2020/03/23 6:05 AM",
    "assignee": "obabec",
    "estimateNormalTime": 24.116666666666664
  },
  {
    "id": 12913795,
    "code": "ENTMQMAAS-1776",
    "name": "Docs: Fix broken workaround link in RNs",
    "description": "Need to fix:\r\n* the broken link in the 1.3.x RNs: `link:{BookUrlBase}{BaseProductVersion}/html-single/installing_and_managing_amq_online_on_openshift/#proc-uninstalling-olm-workaround-rh-messaging`\r\n\r\n\r\n",
    "startTime": "2020/02/28 6:38 PM",
    "endTime": "2020/03/03 4:25 PM",
    "assignee": "rhn-support-jmalloy",
    "estimateNormalTime": 3.9076388888888887
  },
  {
    "id": 12913587,
    "code": "ENTMQMAAS-1773",
    "name": "Auth session expiration not handled gracefully",
    "description": "If the user's authentication session expires, the UI will receive 403 responses from the server for all of its graphql requests.  This will continue until the user logs on again.   \r\n\r\nCurrently the the UI displays \\\"We're having problems connecting to the server\\\" in this situation.  It would be better if the UI could let the user know that they are no longer authorised and give them a link to login again.\r\n\r\n",
    "startTime": "2020/02/28 6:39 AM",
    "endTime": "2020/03/11 5:04 AM",
    "assignee": "anujha@redhat.com",
    "estimateNormalTime": 11.934027777777779
  },
  {
    "id": 12914068,
    "code": "ENTMQMAAS-1777",
    "name": "Console gives no access to Global DLQ depth.",
    "description": "With the old console, you used to be able to see the GlobalDLQ statistic.  With the new console access to this information has gone.\r\n\r\nIt should probably be modelled as a metric of the address space, with the value with displayed being the sum of the depth of all the Global DLQs across all the brokers assigned to the address-space.",
    "startTime": "2020/03/02 6:12 AM",
    "endTime": "2020/06/24 8:15 AM",
    "assignee": "buschv",
    "estimateNormalTime": 114.08541666666667
  },
  {
    "id": 12914086,
    "code": "ENTMQMAAS-1779",
    "name": "Refresh console documentation",
    "description": "The EnMasse documentation that references the console needs updating:\r\n\r\n# screenshot needs refreshing\r\n# \\\"Using the EnMasse Console address filtering\\\" needs revisiting.  There is no longer a filtering syntax so the table describing the regular expressions can be removed.  All pages offer filtering on the displayed column values, with a feature to specify textual values or pick from a dropdown.\r\n# Viewing message and connection statistics - the new console mostly exposes the same information but it is presented slightly differently.  The contents of the tables need to be adjusted accordingly.\r\n## Message ingress rate/Message egress rates are now messages per second, computed over the last five minutes.\r\n# Global DLQ information is not currently available from the Console (ENTMQMAAS-1777)\r\n# The authenticated users name is not currently available (ENTMQMAAS-1778)",
    "startTime": "2020/03/02 7:06 AM",
    "endTime": "2020/03/18 8:17 AM",
    "assignee": "rhn-support-jmalloy",
    "estimateNormalTime": 16.049305555555556
  },
  {
    "id": 12916498,
    "code": "ENTMQMAAS-1793",
    "name": "Docs: how to change the auth service for an address space using the console",
    "description": "New console features the ability to change the auth service for an address space; need to document this procedure (parallels the change address space plan associated with an address space procedure)",
    "startTime": "2020/03/08 7:29 PM",
    "endTime": "2020/03/18 8:16 AM",
    "assignee": "rhn-support-jmalloy",
    "estimateNormalTime": 9.532638888888888
  },
  {
    "id": 12918540,
    "code": "ENTMQMAAS-1803",
    "name": "Bad example inventory in 1.3 docs",
    "description": "https://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html/installing_and_managing_amq_online_on_openshift/installing-messaging#installing-using-ansible-messaging \r\n\r\nInstalling using ansible example inventory has bug. There is missing option standard_authentication_service_postgresql=False.",
    "startTime": "2020/03/12 9:53 AM",
    "endTime": "2020/04/22 2:20 AM",
    "assignee": "rhn-support-hmaclean",
    "estimateNormalTime": 40.68541666666667
  },
  {
    "id": 12918993,
    "code": "ENTMQMAAS-1813",
    "name": "Docs: add new console screenshots to console docs",
    "description": "Add two new console screenshots to the console docs (upstream and downstream): viewing connections page and viewing addresses page. Keith has contributed the upstream images and given Jen the downstream versions, so they are already in the respective images folders.",
    "startTime": "2020/03/13 10:06 AM",
    "endTime": "2020/04/02 4:39 PM",
    "assignee": "rhn-support-jmalloy",
    "estimateNormalTime": 20.272916666666667
  },
  {
    "id": 12918999,
    "code": "ENTMQMAAS-1814",
    "name": "Wrong namespace name",
    "description": "[affected docs|https://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html/evaluating_amq_online_on_openshift/assembly-iot-messaging-iot]\r\n\r\nSection 3.5.1 namespace enmasse-infra is wrong, if user follow whole this doc then there will be ready amq-online-infra, so it should change to \r\n\r\nexport REGISTRY_HOST=$(oc -n amq-online-infra get routes device-registry --template='{{ .spec.host }}')",
    "startTime": "2020/03/13 10:16 AM",
    "endTime": "2020/04/28 4:16 PM",
    "assignee": "obabec",
    "estimateNormalTime": 46.25
  },
  {
    "id": 12919003,
    "code": "ENTMQMAAS-1815",
    "name": "IoT exporting registry host error",
    "description": "[Affected docs|https://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html/evaluating_amq_online_on_openshift/assembly-iot-messaging-iot]\r\n\r\nSection 3.5.1 snippet with exporting registry host doesn't work. \r\nI think snippet could look like this:\r\n\r\n{code:bash}\r\nexport REGISTRY_HOST=$(oc -n amq-online-infra get routes device-registry --template='{{ .spec.host }}')\r\n{code}\r\n\r\nAlso messaging host export is wrong, it should look like this\r\n\r\n{code:bash}\r\nexport MESSAGING_HOST=$(oc get -n myapp addressspace iot -o jsonpath='{.status.endpointStatuses[?(@.name==\\\"messaging\\\")].externalHost}')\r\n{code}\r\n\r\n\r\n[~lulf@redhat.com] WDYT ?\r\n",
    "startTime": "2020/03/13 10:35 AM",
    "endTime": "2020/05/04 2:53 AM",
    "assignee": "rhn-support-hmaclean",
    "estimateNormalTime": 51.67916666666667
  },
  {
    "id": 12919120,
    "code": "ENTMQMAAS-1819",
    "name": "[#4107] : Architecture: Monitoring CRD",
    "description": "Created from upstream issue [#4107|https://github.com/EnMasseProject/enmasse/issues/4107].",
    "startTime": "2020/03/13 3:26 PM",
    "endTime": "2022/01/26 12:37 PM",
    "assignee": "rshelly",
    "estimateNormalTime": 683.8826388888889
  },
  {
    "id": 12919119,
    "code": "ENTMQMAAS-1818",
    "name": "[#4108] : Architecture: IoT for shared infra in 1.0",
    "description": "Created from upstream issue [#4108|https://github.com/EnMasseProject/enmasse/issues/4108].",
    "startTime": "2020/03/13 3:26 PM",
    "endTime": "",
    "assignee": "jreimann-2",
    "estimateNormalTime": null
  },
  {
    "id": 12918844,
    "code": "ENTMQMAAS-1804",
    "name": "Wrong dropdown title for operator hub",
    "description": "link title[affected docs|https://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html/installing_and_managing_amq_online_on_openshift/installing-messaging#assembly-installing-configuring-olm-messaging]\r\n\r\nClick Catalog > OperatorHub. Catalog is not present, this should change to  Operators > OperatorHub\r\n\r\nAnother presence of this issue is under 10 point Catalog > Installed Operators this should be changed to Operators > Installed Operators\r\n\r\nThis bug is also in these docs [afftected docs2|https://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html/evaluating_amq_online_on_openshift/assembly-getting-started-rh-messaging]",
    "startTime": "2020/03/13 4:44 AM",
    "endTime": "",
    "assignee": "rhn-support-jmalloy",
    "estimateNormalTime": null
  },
  {
    "id": 12918850,
    "code": "ENTMQMAAS-1805",
    "name": "Unnecessary step in installing standard auth conf",
    "description": "I think second step is not necessary `Click Catalog > Installed Operators` and should be removed. Step is in all example custom deployments.\r\n\r\n[affected docs|https://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html/installing_and_managing_amq_online_on_openshift/installing-messaging#assembly-installing-configuring-olm-messaging]\r\n\r\nThere docs are affected too [affected docs2|https://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html/evaluating_amq_online_on_openshift/assembly-getting-started-rh-messaging]",
    "startTime": "2020/03/13 4:58 AM",
    "endTime": "2021/01/27 1:18 PM",
    "assignee": "rhn-support-hmaclean",
    "estimateNormalTime": 320.34722222222223
  },
  {
    "id": 12918852,
    "code": "ENTMQMAAS-1806",
    "name": "Wrong verification step for infra config",
    "description": "2.4.2.2. Creating an infrastructure configuration custom resource using the OpenShift console-> step 6 is wrong because deployment of custom infra config has no effect to the pods in that moment. So step should probably be Operators -> Installed Operators -> AMQ Online -> Standard Infra Config and there user can see if deployment has been done.\r\n\r\nThere docs are affected too [affected docs2|https://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html/evaluating_amq_online_on_openshift/assembly-getting-started-rh-messaging]",
    "startTime": "2020/03/13 5:10 AM",
    "endTime": "2020/08/07 3:25 AM",
    "assignee": "rhn-support-hmaclean",
    "estimateNormalTime": 146.92708333333334
  },
  {
    "id": 12918854,
    "code": "ENTMQMAAS-1807",
    "name": "Wrong verification step for address space plan",
    "description": "Step is under 2.4.2.3. Creating an address space plan custom resource using the OpenShift console -> procedure -> 6. should be changed to Operators -> Installed Operators -> AMQ Online -> Address Space Plan. Here can user check if deployment has been done.\r\n\r\nThere docs are affected too [affected docs2|https://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html/evaluating_amq_online_on_openshift/assembly-getting-started-rh-messaging]",
    "startTime": "2020/03/13 5:15 AM",
    "endTime": "2020/08/07 3:24 AM",
    "assignee": "rhn-support-hmaclean",
    "estimateNormalTime": 146.92291666666668
  },
  {
    "id": 12918856,
    "code": "ENTMQMAAS-1808",
    "name": "Wrong verification step for address plan",
    "description": "2.4.2.4. Creating an address plan custom resource using the OpenShift console -> procedure -> 6. should be changed to Operators -> Installed Operators -> AMQ Online -> Address Plan. Here can user check if deployment has been done.\r\n\r\nThere docs are affected too [affected docs2|https://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html/evaluating_amq_online_on_openshift/assembly-getting-started-rh-messaging]",
    "startTime": "2020/03/13 5:18 AM",
    "endTime": "2020/08/07 3:18 AM",
    "assignee": "rhn-support-hmaclean",
    "estimateNormalTime": 146.91666666666666
  },
  {
    "id": 12918860,
    "code": "ENTMQMAAS-1809",
    "name": "Unnecessary chapter",
    "description": "Chapter 3 should be removed migration script is no longer provided in bundle. Migrating from 1.0 is not supported.",
    "startTime": "2020/03/13 5:26 AM",
    "endTime": "2020/04/17 8:55 AM",
    "assignee": "rhn-support-hmaclean",
    "estimateNormalTime": 35.14513888888889
  },
  {
    "id": 12918873,
    "code": "ENTMQMAAS-1810",
    "name": "Wrong arrangement in chapter 5",
    "description": "In chapter 5 there should be changed order between creating address space plans and address plan because address space plan depends on address plans. \r\n\r\nAlso in address plan there should be removed last step with validation because address space schema doesn't exists before address space with new plan is created.\r\n\r\nThere docs are affected too [affected docs2|https://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html/evaluating_amq_online_on_openshift/assembly-getting-started-rh-messaging]",
    "startTime": "2020/03/13 5:44 AM",
    "endTime": "2021/02/17 2:37 PM",
    "assignee": "rhn-support-hmaclean",
    "estimateNormalTime": 341.3701388888889
  },
  {
    "id": 12918966,
    "code": "ENTMQMAAS-1811",
    "name": "Wrong namespace name",
    "description": "In chapter 6 in monitoring deployment there snippet is using amq-online-monitoring project but that's wrong, because from install bundle there is dependency on enmasse-monitoring.\r\n\r\nSo amq-online-monitoring should be changed to enmasse-monitoring.",
    "startTime": "2020/03/13 8:52 AM",
    "endTime": "2020/05/04 1:37 PM",
    "assignee": "rhn-support-hmaclean",
    "estimateNormalTime": 52.197916666666664
  },
  {
    "id": 12921438,
    "code": "ENTMQMAAS-1852",
    "name": "[#4292] Getting error when passing forbidden characters to filter",
    "description": " If I pass this \\\" ][;,;[;''/'\\\\';'[pkjioihuygyuhjpl[];.;'\\\\ \\\" into search filter, I am redirected to error page. I don't think this is right behavior. I think filter should not accept this input.",
    "startTime": "2020/03/20 5:31 AM",
    "endTime": "2020/04/20 12:57 PM",
    "assignee": "anujha@redhat.com",
    "estimateNormalTime": 31.30972222222222
  },
  {
    "id": 12921708,
    "code": "ENTMQMAAS-1856",
    "name": "Docs: fix wording in subscription address type description",
    "description": "Change \\\"attribute\\\" to \\\"field\\\" per Keith's comment in the upstream PR (https://github.com/EnMasseProject/enmasse/pull/4144): \r\n\r\n\\\"This setting can be changed by editing the `maxConsumers` attribute of the subscription address.\\\"\r\n",
    "startTime": "2020/03/22 9:06 PM",
    "endTime": "2020/04/02 6:53 AM",
    "assignee": "rhn-support-hmaclean",
    "estimateNormalTime": 10.407638888888888
  },
  {
    "id": 12922699,
    "code": "ENTMQMAAS-1860",
    "name": "Add systemtest unit tests to github actions PR build",
    "description": "Add systemtest unit tests to github actions PR build.",
    "startTime": "2020/03/25 3:24 AM",
    "endTime": "2020/03/27 5:24 AM",
    "assignee": "obabec",
    "estimateNormalTime": 2.0833333333333335
  },
  {
    "id": 12922708,
    "code": "ENTMQMAAS-1862",
    "name": "Create beaker tast for Kubernetes deployment",
    "description": "",
    "startTime": "2020/03/25 3:38 AM",
    "endTime": "2020/06/26 6:24 AM",
    "assignee": "obabec",
    "estimateNormalTime": 93.11527777777779
  },
  {
    "id": 12922707,
    "code": "ENTMQMAAS-1861",
    "name": "Create beaker tast for OC deployment (CRC, cluster up)",
    "description": "",
    "startTime": "2020/03/25 3:38 AM",
    "endTime": "2020/03/27 5:24 AM",
    "assignee": "obabec",
    "estimateNormalTime": 2.073611111111111
  },
  {
    "id": 12923774,
    "code": "ENTMQMAAS-1871",
    "name": "Docs: 1.4 RNs add period and forward slash characters",
    "description": "For 1.4 RNs:\r\nPer Fabian: \\\"In the known issues section, in the issue ENTMQMAAS-1799 the text says \\\"both period and forward slash  \\\" . It would be nice to have an example of what \\\"period\\\" is , like forward slash has, because there can be users that don't know what a period character is\\\"",
    "startTime": "2020/03/26 5:07 PM",
    "endTime": "2020/04/07 1:35 PM",
    "assignee": "rhn-support-hmaclean",
    "estimateNormalTime": 11.852777777777776
  },
  {
    "id": 12924878,
    "code": "ENTMQMAAS-1891",
    "name": "[systemtest] soak suite iot tests",
    "description": "Create iot tests as part of soak suite for long running job.",
    "startTime": "2020/03/30 12:49 PM",
    "endTime": "2020/09/21 5:46 AM",
    "assignee": "zschwarz",
    "estimateNormalTime": 174.70624999999998
  },
  {
    "id": 12924969,
    "code": "ENTMQMAAS-1895",
    "name": "[systemtest] improve web page wait for items",
    "description": "",
    "startTime": "2020/03/30 2:55 PM",
    "endTime": "2020/06/01 7:55 AM",
    "assignee": "obabec",
    "estimateNormalTime": 62.708333333333336
  },
  {
    "id": 12925110,
    "code": "ENTMQMAAS-1896",
    "name": "postgress db/infinispan endpoint not reachable",
    "description": "h3.*Back link to Report Portal:*\r\n - [Link to defect|https://reportportal-amq-online.cloud.paas.psi.redhat.com/#enmasse/launches/all%7Cpage.page=1&page.size=50&page.sort=start_time/5e81e29d25e98700015b2235%7Cpage.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:c6430a194f6af2e926b8d447eb6ceac0?page.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:c6430a194f6af2e926b8d447eb6ceac0&log.item=5e81e29725e98700015b2184]\r\n\r\nh3.*Test execution log:*\r\n{panel:title=Test execution log|borderStyle=solid|borderColor=#ccc|titleColor=#34302D|titleBGColor=#6DB33F}{code} Time: 03/30/2020 12:14:15, Level: INFO, Log: 2020-03-30T09:09:16.258Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get pods -n enmasse-infra -o wide\r\n2020-03-30T09:09:16.492Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Return code: 0\r\n2020-03-30T09:09:16.492Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] stdout: \r\nNAME                                       READY     STATUS    RESTARTS   AGE       IP            NODE        NOMINATED NODE\r\naddress-space-controller-87675c95d-44qcr   1/1       Running   0          1h        172.17.0.10   localhost   <none>\r\nconsole-7df49c589c-4xhqx                   2/2       Running   0          1h        172.17.0.16   localhost   <none>\r\nenmasse-operator-8f9cc594b-fhchp           1/1       Running   0          1h        172.17.0.6    localhost   <none>\r\nnone-authservice-856d6965c9-679nf          1/1       Running   0          1h        172.17.0.15   localhost   <none>\r\nservice-broker-5f97f9f464-4fxmc            1/1       Running   0          1h        172.17.0.9    localhost   <none>\r\nstandard-authservice-54db57d7c5-bpqp2      1/1       Running   0          1h        172.17.0.14   localhost   <none>\r\n\r\n2020-03-30T09:09:16.493Z &amp#27;[34mINFO &amp#27;[0;39m [TimeMeasuringSystem] Start time of operation TEST_EXECUTION is correctly stored\r\n2020-03-30T09:09:16.493Z &amp#27;[34mINFO &amp#27;[0;39m [ITestSeparator] ####################################################################################################\r\n2020-03-30T09:09:16.494Z &amp#27;[34mINFO &amp#27;[0;39m [ITestSeparator] io.enmasse.systemtest.iot.isolated.registry.PostgresFlatDeviceRegistryTest.testCorrectTypeDeployed-STARTED\r\n2020-03-30T09:09:16.494Z &amp#27;[34mINFO &amp#27;[0;39m [ITestBase] Test init\r\n2020-03-30T09:09:16.494Z &amp#27;[34mINFO &amp#27;[0;39m [TestInfo] Test is not shared!\r\n2020-03-30T09:09:16.498Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] Namespace iot-project-ns already exists\r\n2020-03-30T09:09:16.503Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] Namespace systemtests-postgresql already exists\r\n2020-03-30T09:09:16.503Z &amp#27;[34mINFO &amp#27;[0;39m [SystemtestsKubernetesApps] Loading resources from: ../templates/iot/examples/postgresql/deploy\r\n2020-03-30T09:09:16.503Z &amp#27;[34mINFO &amp#27;[0;39m [SystemtestsKubernetesApps] Processing: ../templates/iot/examples/postgresql/deploy/010-PersistentVolumeClaim.yaml\r\n2020-03-30T09:09:16.520Z &amp#27;[34mINFO &amp#27;[0;39m [SystemtestsKubernetesApps] Processing: ../templates/iot/examples/postgresql/deploy/020-Deployment.yaml\r\n2020-03-30T09:09:16.552Z &amp#27;[34mINFO &amp#27;[0;39m [SystemtestsKubernetesApps] Processing: ../templates/iot/examples/postgresql/deploy/030-Service.yaml\r\n2020-03-30T09:14:25.403Z &amp#27;[1;31mERROR&amp#27;[0;39m [JunitCallbackListener] Test failed at Test before each\r\n2020-03-30T09:14:25.403Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get pods -n enmasse-infra -o wide\r\n2020-03-30T09:14:25.645Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Return code: 0\r\n2020-03-30T09:14:25.645Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] stdout: \r\nNAME                                       READY     STATUS    RESTARTS   AGE       IP            NODE        NOMINATED NODE\r\naddress-space-controller-87675c95d-44qcr   1/1       Running   0          1h        172.17.0.10   localhost   <none>\r\nconsole-7df49c589c-4xhqx                   2/2       Running   0          1h        172.17.0.16   localhost   <none>\r\nenmasse-operator-8f9cc594b-fhchp           1/1       Running   0          1h        172.17.0.6    localhost   <none>\r\nnone-authservice-856d6965c9-679nf          1/1       Running   0          1h        172.17.0.15   localhost   <none>\r\nservice-broker-5f97f9f464-4fxmc            1/1       Running   0          1h        172.17.0.9    localhost   <none>\r\nstandard-authservice-54db57d7c5-bpqp2      1/1       Running   0          1h        172.17.0.14   localhost   <none>\r\n\r\n2020-03-30T09:14:25.646Z &amp#27;[34mINFO &amp#27;[0;39m [GlobalLogCollector] Saving pod logs and info...\r\n2020-03-30T09:14:48.227Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'address-space-controller-87675c95d-44qcr', container:'address-space-controller' : restart count '0'\r\n2020-03-30T09:14:48.227Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'console-7df49c589c-4xhqx', container:'console-proxy' : restart count '0'\r\n2020-03-30T09:14:48.227Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'console-7df49c589c-4xhqx', container:'console-server' : restart count '0'\r\n2020-03-30T09:14:48.227Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'enmasse-operator-8f9cc594b-fhchp', container:'controller' : restart count '0'\r\n2020-03-30T09:14:48.227Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'none-authservice-856d6965c9-679nf', container:'none-authservice' : restart count '0'\r\n2020-03-30T09:14:48.228Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'service-broker-5f97f9f464-4fxmc', container:'service-broker' : restart count '0'\r\n2020-03-30T09:14:48.228Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'standard-authservice-54db57d7c5-bpqp2', container:'keycloak' : restart count '0'\r\n2020-03-30T09:14:48.229Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc -n enmasse-infra describe pods\r\n2020-03-30T09:14:48.687Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc describe nodes\r\n2020-03-30T09:14:48.981Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get events --namespace enmasse-infra --output custom-columns=LAST SEEN:{lastTimestamp},FIRST SEEN:{firstTimestamp},COUNT:{count},NAME:{metadata.name},KIND:{involvedObject.kind},SUBOBJECT:{involvedObject.fieldPath},TYPE:{type},REASON:{reason},SOURCE:{source.component},MESSAGE:{message} --sort-by={.lastTimestamp}\r\n2020-03-30T09:14:50.645Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get events --all-namespaces=true --output custom-columns=LAST SEEN:{lastTimestamp},FIRST SEEN:{firstTimestamp},COUNT:{count},NAME:{metadata.name},KIND:{involvedObject.kind},SUBOBJECT:{involvedObject.fieldPath},TYPE:{type},REASON:{reason},SOURCE:{source.component},MESSAGE:{message} --sort-by={.lastTimestamp}\r\n2020-03-30T09:14:52.819Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get configmaps --namespace enmasse-infra --output yaml\r\n2020-03-30T09:14:53.050Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc describe pv\r\n2020-03-30T09:14:56.532Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc describe pvc -n enmasse-infra\r\n2020-03-30T09:14:56.791Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get storageclass -o yaml\r\n2020-03-30T09:14:57.004Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get iotconfig --namespace enmasse-infra --output yaml\r\n2020-03-30T09:14:57.215Z &amp#27;[34mINFO &amp#27;[0;39m [GlobalLogCollector] Collecting qdr-proxy router state in namespace enmasse-infra\r\n2020-03-30T09:14:57.222Z &amp#27;[34mINFO &amp#27;[0;39m [GlobalLogCollector] Collecting qdr-proxy router state in namespace enmasse-infra\r\n2020-03-30T09:14:57.225Z &amp#27;[34mINFO &amp#27;[0;39m [GlobalLogCollector] Pod logs and describe successfully stored into /tmp/testlogs/failed_test_logs/io.enmasse.systemtest.iot.isolated.registry.PostgresFlatDeviceRegistryTest/testCorrectTypeDeployed\r\n2020-03-30T09:14:57.228Z &amp#27;[1;31mERROR&amp#27;[0;39m [ITestSeparator] Caught exception\r\njava.lang.IllegalArgumentException: Pod with name:[postgresql-5dfc454676-v7qr6] in namespace:[systemtests-postgresql] not found!\r\n\tat io.fabric8.kubernetes.client.dsl.base.BaseOperation.waitUntilCondition(BaseOperation.java:1073)\r\n\tat io.enmasse.systemtest.platform.apps.SystemtestsKubernetesApps.deployPostgresqlServer(SystemtestsKubernetesApps.java:452)\r\n\tat io.enmasse.systemtest.iot.DefaultDeviceRegistry.newPostgresFlatBased(DefaultDeviceRegistry.java:116)\r\n\tat io.enmasse.systemtest.iot.isolated.registry.PostgresFlatDeviceRegistryTest.provideIoTConfig(PostgresFlatDeviceRegistryTest.java:24)\r\n\tat io.enmasse.systemtest.iot.isolated.registry.DeviceRegistryTest.setAttributes(DeviceRegistryTest.java:68)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.junit.platform.commons.util.ReflectionUtils.invokeMethod(ReflectionUtils.java:675)\r\n\tat org.junit.jupiter.engine.execution.MethodInvocation.proceed(MethodInvocation.java:60)\r\n\tat org.junit.jupiter.engine.execution.InvocationInterceptorChain$ValidatingInvocation.proceed(InvocationInterceptorChain.java:125)\r\n\tat org.junit.jupiter.engine.extension.TimeoutExtension.intercept(TimeoutExtension.java:132)\r\n\tat org.junit.jupiter.engine.extension.TimeoutExtension.interceptLifecycleMethod(TimeoutExtension.java:111)\r\n\tat org.junit.jupiter.engine.extension.TimeoutExtension.interceptBeforeEachMethod(TimeoutExtension.java:67)\r\n\tat org.junit.jupiter.engine.execution.ExecutableInvoker$ReflectiveInterceptorCall.lambda$ofVoidMethod$0(ExecutableInvoker.java:115)\r\n\tat org.junit.jupiter.engine.execution.ExecutableInvoker.lambda$invoke$0(ExecutableInvoker.java:105)\r\n\tat org.junit.jupiter.engine.execution.InvocationInterceptorChain$InterceptedInvocation.proceed(InvocationInterceptorChain.java:104)\r\n\tat org.junit.jupiter.engine.execution.InvocationInterceptorChain.proceed(InvocationInterceptorChain.java:62)\r\n\tat org.junit.jupiter.engine.execution.InvocationInterceptorChain.chainAndInvoke(InvocationInterceptorChain.java:43)\r\n\tat org.junit.jupiter.engine.execution.InvocationInterceptorChain.invoke(InvocationInterceptorChain.java:35)\r\n\tat org.junit.jupiter.engine.execution.ExecutableInvoker.invoke(ExecutableInvoker.java:104)\r\n\tat org.junit.jupiter.engine.execution.ExecutableInvoker.invoke(ExecutableInvoker.java:98)\r\n\tat org.junit.jupiter.engine.descriptor.ClassBasedTestDescriptor.invokeMethodInExtensionContext(ClassBasedTestDescriptor.java:464)\r\n\tat org.junit.jupiter.engine.descriptor.ClassBasedTestDescriptor.lambda$synthesizeBeforeEachMethodAdapter$16(ClassBasedTestDescriptor.java:449)\r\n\tat org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.lambda$invokeBeforeEachMethods$2(TestMethodTestDescriptor.java:159)\r\n\tat org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.lambda$invokeBeforeMethodsOrCallbacksUntilExceptionOccurs$5(TestMethodTestDescriptor.java:187)\r\n\tat org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)\r\n\tat org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.invokeBeforeMethodsOrCallbacksUntilExceptionOccurs(TestMethodTestDescriptor.java:187)\r\n\tat org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.invokeBeforeEachMethods(TestMethodTestDescriptor.java:156)\r\n\tat org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.execute(TestMethodTestDescriptor.java:131)\r\n\tat org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.execute(TestMethodTestDescriptor.java:69)\r\n\tat org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$5(NodeTestTask.java:135)\r\n\tat org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)\r\n\tat org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$7(NodeTestTask.java:125)\r\n\tat org.junit.platform.engine.support.hierarchical.Node.around(Node.java:135)\r\n\tat org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$8(NodeTestTask.java:123)\r\n\tat org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)\r\n\tat org.junit.platform.engine.support.hierarchical.NodeTestTask.executeRecursively(NodeTestTask.java:122)\r\n\tat org.junit.platform.engine.support.hierarchical.NodeTestTask.execute(NodeTestTask.java:80)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1540)\r\n\tat org.junit.platform.engine.support.hierarchical.SameThreadHierarchicalTestExecutorService.invokeAll(SameThreadHierarchicalTestExecutorService.java:38)\r\n\tat org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$5(NodeTestTask.java:139)\r\n\tat org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)\r\n\tat org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$7(NodeTestTask.java:125)\r\n\tat org.junit.platform.engine.support.hierarchical.Node.around(Node.java:135)\r\n\tat org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$8(NodeTestTask.java:123)\r\n\tat org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)\r\n\tat org.junit.platform.engine.support.hierarchical.NodeTestTask.executeRecursively(NodeTestTask.java:122)\r\n\tat org.junit.platform.engine.support.hierarchical.NodeTestTask.execute(NodeTestTask.java:80)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1540)\r\n\tat org.junit.platform.engine.support.hierarchical.SameThreadHierarchicalTestExecutorService.invokeAll(SameThreadHierarchicalTestExecutorService.java:38)\r\n\tat org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$5(NodeTestTask.java:139)\r\n\tat org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)\r\n\tat org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$7(NodeTestTask.java:125)\r\n\tat org.junit.platform.engine.support.hierarchical.Node.around(Node.java:135)\r\n\tat org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$8(NodeTestTask.java:123)\r\n\tat org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)\r\n\tat org.junit.platform.engine.support.hierarchical.NodeTestTask.executeRecursively(NodeTestTask.java:122)\r\n\tat org.junit.platform.engine.support.hierarchical.NodeTestTask.execute(NodeTestTask.java:80)\r\n\tat org.junit.platform.engine.support.hierarchical.SameThreadHierarchicalTestExecutorService.submit(SameThreadHierarchicalTestExecutorService.java:32)\r\n\tat org.junit.platform.engine.support.hierarchical.HierarchicalTestExecutor.execute(HierarchicalTestExecutor.java:57)\r\n\tat org.junit.platform.engine.support.hierarchical.HierarchicalTestEngine.execute(HierarchicalTestEngine.java:51)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:229)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.lambda$execute$6(DefaultLauncher.java:197)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.withInterceptedStreams(DefaultLauncher.java:211)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:191)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:128)\r\n\tat org.apache.maven.surefire.junitplatform.JUnitPlatformProvider.invokeAllTests(JUnitPlatformProvider.java:154)\r\n\tat org.apache.maven.surefire.junitplatform.JUnitPlatformProvider.invoke(JUnitPlatformProvider.java:127)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\r\n2020-03-30T09:14:57.229Z &amp#27;[34mINFO &amp#27;[0;39m [TimeMeasuringSystem] End time of operation TEST_EXECUTION is correctly stored\r\n2020-03-30T09:14:57.229Z &amp#27;[34mINFO &amp#27;[0;39m [ITestSeparator] io.enmasse.systemtest.iot.isolated.registry.PostgresFlatDeviceRegistryTest.testCorrectTypeDeployed-FINISHED\r\n2020-03-30T09:14:57.229Z &amp#27;[34mINFO &amp#27;[0;39m [ITestSeparator] ####################################################################################################\r\n2020-03-30T09:14:57.229Z &amp#27;[34mINFO &amp#27;[0;39m [JunitCallbackListener] Teardown section: \r\n2020-03-30T09:14:57.229Z &amp#27;[34mINFO &amp#27;[0;39m [TestInfo] Test is not shared!\r\n2020-03-30T09:14:57.229Z &amp#27;[34mINFO &amp#27;[0;39m [TestInfo] Test is IoT\r\n2020-03-30T09:14:57.229Z &amp#27;[34mINFO &amp#27;[0;39m [IsolatedIoTManager] All IoTProjects will be removed\r\n2020-03-30T09:14:57.229Z &amp#27;[34mINFO &amp#27;[0;39m [IsolatedIoTManager] All IoTConfigs will be removed\r\n2020-03-30T09:14:57.229Z &amp#27;[34mINFO &amp#27;[0;39m [GlobalLogCollector] Store logs from all pods in namespace 'systemtests-infinispan'\r\n2020-03-30T09:14:57.232Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] No pods to get logs\r\n2020-03-30T09:14:57.238Z &amp#27;[34mINFO &amp#27;[0;39m [SystemtestsKubernetesApps] Postgresql server will be removed\r\n2020-03-30T09:14:57.238Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc -n systemtests-postgresql delete -f ../templates/iot/examples/postgresql/deploy\r\n2020-03-30T09:14:58.277Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Return code: 0\r\n2020-03-30T09:14:58.277Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] stdout: \r\npersistentvolumeclaim \\\"postgresql\\\" deleted\r\ndeployment.apps \\\"postgresql\\\" deleted\r\nservice \\\"postgresql\\\" deleted\r\n{code}{code} Time: 03/30/2020 12:14:15, Level: ERROR, Log: java.lang.IllegalArgumentException: Pod with name:[postgresql-5dfc454676-v7qr6] in namespace:[systemtests-postgresql] not found!\r\n\tat io.enmasse.systemtest.iot.isolated.registry.PostgresFlatDeviceRegistryTest.provideIoTConfig(PostgresFlatDeviceRegistryTest.java:24)\r\n{code}{code} Time: 03/30/2020 12:14:15, Level: INFO, Log: address-space-controller-87675c95d-44qcr_address-space-controller.log\r\n{code}[^5e81e29825e98700015b2188.txt]\\\\\\\\ {code} Time: 03/30/2020 12:14:15, Level: INFO, Log: console-7df49c589c-4xhqx_console-proxy.log\r\n{code}[^5e81e29825e98700015b2191.txt]\\\\\\\\ {code} Time: 03/30/2020 12:14:15, Level: INFO, Log: console-7df49c589c-4xhqx_console-server.log\r\n{code}[^5e81e29825e98700015b2198.txt]\\\\\\\\ {code} Time: 03/30/2020 12:14:15, Level: INFO, Log: enmasse-operator-8f9cc594b-fhchp_controller.log\r\n{code}[^5e81e29925e98700015b21b1.txt]\\\\\\\\ {code} Time: 03/30/2020 12:14:16, Level: INFO, Log: none-authservice-856d6965c9-679nf_none-authservice.log\r\n{code}[^5e81e29925e98700015b21bf.txt]\\\\\\\\ {code} Time: 03/30/2020 12:14:16, Level: INFO, Log: service-broker-5f97f9f464-4fxmc_service-broker.log\r\n{code}[^5e81e29925e98700015b21cc.txt]\\\\\\\\ {code} Time: 03/30/2020 12:14:16, Level: INFO, Log: standard-authservice-54db57d7c5-bpqp2_keycloak.log\r\n{code}[^5e81e29925e98700015b21d8.txt]\\\\\\\\ {code} Time: 03/30/2020 12:14:16, Level: INFO, Log: describe_pods.txt\r\n{code}[^5e81e29925e98700015b21e0.txt]\\\\\\\\ {code} Time: 03/30/2020 12:14:16, Level: INFO, Log: describe_nodes.txt\r\n{code}[^5e81e29925e98700015b21eb.txt]\\\\\\\\ {code} Time: 03/30/2020 12:14:16, Level: INFO, Log: events.enmasse-infra.txt\r\n{code}[^5e81e29925e98700015b21ef.txt]\\\\\\\\ {code} Time: 03/30/2020 12:14:17, Level: INFO, Log: events.txt\r\n{code}[^5e81e29925e98700015b21f3.txt]\\\\\\\\ {code} Time: 03/30/2020 12:14:17, Level: INFO, Log: configmaps.yaml\r\n{code}[^5e81e29925e98700015b21f7.txt]\\\\\\\\ {code} Time: 03/30/2020 12:14:17, Level: INFO, Log: pvs.txt\r\n{code}[^5e81e29925e98700015b21fa.txt]\\\\\\\\ {code} Time: 03/30/2020 12:14:17, Level: INFO, Log: pvcs.txt\r\n{code}[^5e81e29925e98700015b21fd.txt]\\\\\\\\ {code} Time: 03/30/2020 12:14:17, Level: INFO, Log: storageclass.yml\r\n{code}[^5e81e29a25e98700015b2200.txt]\\\\\\\\ {code} Time: 03/30/2020 12:14:17, Level: INFO, Log: iotconfig.yaml\r\n{code}[^5e81e29a25e98700015b2203.txt]\\\\\\\\ {panel}\r\n",
    "startTime": "2020/03/31 4:49 AM",
    "endTime": "2020/06/16 8:40 AM",
    "assignee": "jreimann-2",
    "estimateNormalTime": 77.16041666666666
  },
  {
    "id": 12926320,
    "code": "ENTMQMAAS-1904",
    "name": "Console-IoT-UI - Add dropdown in Toolbar",
    "description": "Add a dropdown  to select AMQ to the existing Console Toolbar. Includes Unit Tests.\r\nRefer design: https://marvelapp.com/5gbji22/screen/67563419",
    "startTime": "2020/04/02 6:23 AM",
    "endTime": "",
    "assignee": "apratap468",
    "estimateNormalTime": null
  },
  {
    "id": 12926377,
    "code": "ENTMQMAAS-1917",
    "name": "Console-IoT-UI-Create Project Detail Header",
    "description": "Create project detail header.\r\nRefer design : \r\nhttps://marvelapp.com/5gbji22/screen/69214939\r\n\t\t",
    "startTime": "2020/04/02 8:10 AM",
    "endTime": "2020/07/21 2:17 PM",
    "assignee": "apratap468",
    "estimateNormalTime": 110.25486111111111
  },
  {
    "id": 12926382,
    "code": "ENTMQMAAS-1919",
    "name": "Console-IoT-UI-Create General Info on project detail page",
    "description": "Create General Info section component on project detail page.\r\nRefer design : https://marvelapp.com/5gbji22/screen/66234445",
    "startTime": "2020/04/02 8:16 AM",
    "endTime": "2020/07/21 2:15 PM",
    "assignee": "apratap468",
    "estimateNormalTime": 110.24930555555555
  },
  {
    "id": 12926385,
    "code": "ENTMQMAAS-1920",
    "name": "Console-IoT-UI-Create Add Credentials Form for Add device page",
    "description": "Create Add Credentials Form for Add device page. There are multiple fields and functionality.\r\n1. Create Add Credentials component\r\n2. Create Secrets component\r\n3. Create Extensions component\r\n4. Implemented hide/show advanced settings functionality.\r\n5. Add/delete credentials\r\n7. Add/delete secrets \r\n8. Add/delete extensions\r\n9. Create storybook component to view Add Credentials page\r\n\r\nRefer design : \r\nhttps://marvelapp.com/5gbji22/screen/68823169\r\n",
    "startTime": "2020/04/02 8:20 AM",
    "endTime": "2020/07/21 2:12 PM",
    "assignee": "apratap468",
    "estimateNormalTime": 110.24444444444445
  },
  {
    "id": 12926388,
    "code": "ENTMQMAAS-1921",
    "name": "Console-IoT-UI-Add Download certificate for Project Detail Page",
    "description": "Add Download certificate for Project Detail Page.\r\nThere are two download button on page 1. Download PEM 2. Download  JKS\r\nRefer design: https://marvelapp.com/5gbji22/screen/69214939",
    "startTime": "2020/04/02 8:23 AM",
    "endTime": "",
    "assignee": "apratap468",
    "estimateNormalTime": null
  },
  {
    "id": 12928653,
    "code": "ENTMQMAAS-1941",
    "name": "[#4287] : Address links not displayed if address resource name suffix does not match address name",
    "description": "Created from upstream issue [#4287|https://github.com/EnMasseProject/enmasse/issues/4287]. Fix version: 1.4.1",
    "startTime": "2020/04/08 12:22 PM",
    "endTime": "2020/04/20 8:57 AM",
    "assignee": "buschv",
    "estimateNormalTime": 11.857638888888888
  },
  {
    "id": 12928698,
    "code": "ENTMQMAAS-1942",
    "name": "Docs: As a Customer I would like to see messaging routes/ingresses when I open address space in console",
    "description": "",
    "startTime": "2020/04/08 2:33 PM",
    "endTime": "2020/06/22 8:19 AM",
    "assignee": "rhn-support-hmaclean",
    "estimateNormalTime": 74.74027777777778
  },
  {
    "id": 12930402,
    "code": "ENTMQMAAS-1952",
    "name": "Document workaround for ENTMQBR-2313 (Fails to load journal after queue full)",
    "description": "Document workaround for ENTMQBR-2313",
    "startTime": "2020/04/15 10:28 AM",
    "endTime": "2020/04/27 8:15 AM",
    "assignee": "rhn-support-hmaclean",
    "estimateNormalTime": 11.90763888888889
  },
  {
    "id": 12930404,
    "code": "ENTMQMAAS-1953",
    "name": "Update connector documentation",
    "description": "After the work of ENTMQMAAS-1934, the connector documentation needs expanded to capture the new fields.",
    "startTime": "2020/04/15 10:32 AM",
    "endTime": "2020/04/22 2:24 AM",
    "assignee": "rhn-support-hmaclean",
    "estimateNormalTime": 6.661111111111111
  },
  {
    "id": 12930154,
    "code": "ENTMQMAAS-1951",
    "name": "IoT POST-iot-device-registry failed 503",
    "description": "",
    "startTime": "2020/04/15 3:50 AM",
    "endTime": "2020/04/20 7:17 AM",
    "assignee": "jreimann-2",
    "estimateNormalTime": 5.14375
  },
  {
    "id": 12932158,
    "code": "ENTMQMAAS-1976",
    "name": "UXD: As a Customer I would like to see messaging routes/ingresses when I open address space in console",
    "description": "As a Customer I would like to see messaging routes/ingresses when I open address space in console",
    "startTime": "2020/04/19 10:55 PM",
    "endTime": "2020/06/17 1:40 PM",
    "assignee": "HelloJune",
    "estimateNormalTime": 58.614583333333336
  },
  {
    "id": 12936269,
    "code": "ENTMQMAAS-1991",
    "name": "[IoT Design] Device connection info",
    "description": "",
    "startTime": "2020/04/29 5:41 AM",
    "endTime": "2020/07/13 4:53 AM",
    "assignee": "yanzredhat",
    "estimateNormalTime": 74.96666666666667
  },
  {
    "id": 12937022,
    "code": "ENTMQMAAS-1995",
    "name": "The title of console shows as 'React App' while loading",
    "description": "Description\r\nThe tile of console appears as 'React App' initially while loading.\r\n\r\nExpected behavior\r\nThe default title should show as 'Messaging Console'",
    "startTime": "2020/04/30 9:27 AM",
    "endTime": "2020/05/05 5:16 AM",
    "assignee": "apratap468",
    "estimateNormalTime": 4.825694444444444
  },
  {
    "id": 12937952,
    "code": "ENTMQMAAS-1998",
    "name": "Missing permissions in OLM manifests",
    "description": "\r\nh3.*Back link to Report Portal:*\r\n - [Link to defect|https://reportportal-amq-online.cloud.paas.psi.redhat.com/#enmasse/launches/all%7Cpage.page=1&page.size=50&page.sort=start_time/5eb033e49554cf00019b2f96%7Cpage.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:c926fbc3cb671b615a91fcd9418c626b?page.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:c926fbc3cb671b615a91fcd9418c626b&log.item=5eb033b29554cf00019b298b]\r\n\r\nh3.*Back link to Report Portal:*\r\n - [Link to defect|https://reportportal-amq-online.cloud.paas.psi.redhat.com/#enmasse/launches/all%7Cpage.page=1&page.size=50&page.sort=start_time/5eb033e49554cf00019b2f96%7Cpage.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:b754c0d9439aa93e960c85493ae341ad?page.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:b754c0d9439aa93e960c85493ae341ad&log.item=5eb033b59554cf00019b29f7]\r\n\r\nh3.*Back link to Report Portal:*\r\n - [Link to defect|https://reportportal-amq-online.cloud.paas.psi.redhat.com/#enmasse/launches/all%7Cpage.page=1&page.size=50&page.sort=start_time/5eb033e49554cf00019b2f96%7Cpage.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:57d038d48dea81ba74e2a40aafd667e8?page.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:57d038d48dea81ba74e2a40aafd667e8&log.item=5eb033b79554cf00019b2a56]\r\n\r\nh3.*Back link to Report Portal:*\r\n - [Link to defect|https://reportportal-amq-online.cloud.paas.psi.redhat.com/#enmasse/launches/all%7Cpage.page=1&page.size=50&page.sort=start_time/5eb033e49554cf00019b2f96%7Cpage.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:1ad299c02990a33fd1404f7845819b32?page.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:1ad299c02990a33fd1404f7845819b32&log.item=5eb033bb9554cf00019b2abe]\r\n\r\nh3.*Back link to Report Portal:*\r\n - [Link to defect|https://reportportal-amq-online.cloud.paas.psi.redhat.com/#enmasse/launches/all%7Cpage.page=1&page.size=50&page.sort=start_time/5eb033e49554cf00019b2f96%7Cpage.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:24d95d8dd4288f3fc0dff3a5457cba97?page.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:24d95d8dd4288f3fc0dff3a5457cba97&log.item=5eb033bf9554cf00019b2b1e]\r\n\r\nh3.*Back link to Report Portal:*\r\n - [Link to defect|https://reportportal-amq-online.cloud.paas.psi.redhat.com/#enmasse/launches/all%7Cpage.page=1&page.size=50&page.sort=start_time/5eb033e49554cf00019b2f96%7Cpage.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:8386ac6d571514e9ce1c2c362bcf1c3c?page.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:8386ac6d571514e9ce1c2c362bcf1c3c&log.item=5eb033c49554cf00019b2b88]\r\n\r\nh3.*Back link to Report Portal:*\r\n - [Link to defect|https://reportportal-amq-online.cloud.paas.psi.redhat.com/#enmasse/launches/all%7Cpage.page=1&page.size=50&page.sort=start_time/5eb033e49554cf00019b2f96%7Cpage.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:89dedf40f647f255b764e647bebdad08?page.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:89dedf40f647f255b764e647bebdad08&log.item=5eb033c99554cf00019b2beb]\r\n\r\nh3.*Back link to Report Portal:*\r\n - [Link to defect|https://reportportal-amq-online.cloud.paas.psi.redhat.com/#enmasse/launches/all%7Cpage.page=1&page.size=50&page.sort=start_time/5eb033e49554cf00019b2f96%7Cpage.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:ef5db4f144edab4c8e0f8ab7e726e9f6?page.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:ef5db4f144edab4c8e0f8ab7e726e9f6&log.item=5eb033cc9554cf00019b2cae]\r\n\r\nh3.*Back link to Report Portal:*\r\n - [Link to defect|https://reportportal-amq-online.cloud.paas.psi.redhat.com/#enmasse/launches/all%7Cpage.page=1&page.size=50&page.sort=start_time/5eb033e49554cf00019b2f96%7Cpage.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:2072d61d6cc12de9beaa01218118d71b?page.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:2072d61d6cc12de9beaa01218118d71b&log.item=5eb033ce9554cf00019b2d0d]\r\n\r\nh3.*Back link to Report Portal:*\r\n - [Link to defect|https://reportportal-amq-online.cloud.paas.psi.redhat.com/#enmasse/launches/all%7Cpage.page=1&page.size=50&page.sort=start_time/5eb033e49554cf00019b2f96%7Cpage.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:7859aa20aa75cbd30902fdcb5a907f28?page.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:7859aa20aa75cbd30902fdcb5a907f28&log.item=5eb033d09554cf00019b2d69]\r\n\r\nh3.*Back link to Report Portal:*\r\n - [Link to defect|https://reportportal-amq-online.cloud.paas.psi.redhat.com/#enmasse/launches/all%7Cpage.page=1&page.size=50&page.sort=start_time/5eb033e49554cf00019b2f96%7Cpage.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:2175b9af5f80edcd40194962543b820f?page.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:2175b9af5f80edcd40194962543b820f&log.item=5eb033d29554cf00019b2dce]\r\n\r\nh3.*Back link to Report Portal:*\r\n - [Link to defect|https://reportportal-amq-online.cloud.paas.psi.redhat.com/#enmasse/launches/all%7Cpage.page=1&page.size=50&page.sort=start_time/5eb033e49554cf00019b2f96%7Cpage.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:834a99c6d9666ca439072aa07f72c8df?page.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:834a99c6d9666ca439072aa07f72c8df&log.item=5eb033d59554cf00019b2e3c]\r\n\r\nh3.*Back link to Report Portal:*\r\n - [Link to defect|https://reportportal-amq-online.cloud.paas.psi.redhat.com/#enmasse/launches/all%7Cpage.page=1&page.size=50&page.sort=start_time/5eb033e49554cf00019b2f96%7Cpage.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:60267feb1738d8a20c90d64190593226?page.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:60267feb1738d8a20c90d64190593226&log.item=5eb033d89554cf00019b2eaf]\r\n\r\n",
    "startTime": "2020/05/04 12:28 PM",
    "endTime": "2020/05/05 3:54 AM",
    "assignee": "jreimann-2",
    "estimateNormalTime": 0.6430555555555556
  },
  {
    "id": 12938727,
    "code": "ENTMQMAAS-2001",
    "name": "[IoT Design] External Project design",
    "description": "Use case document: https://docs.google.com/document/d/182WtWk-NYTUuAfg9Dtm1wVdOYpcYRJ7XJkDAZ0XKrdk/edit#",
    "startTime": "2020/05/06 2:41 AM",
    "endTime": "2020/07/13 4:59 AM",
    "assignee": "yanzredhat",
    "estimateNormalTime": 68.09583333333333
  },
  {
    "id": 12940443,
    "code": "ENTMQMAAS-2023",
    "name": "testSortConnectionsBySenders fails sporadically",
    "description": "\r\nh3.*Back link to Report Portal:*\r\n - [Link to defect|https://reportportal-amq-online.cloud.paas.psi.redhat.com/#enmasse/launches/all%7Cpage.page=1&page.size=50&page.sort=start_time/5eb493ea5fa2c40001c36e34%7Cpage.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:8737c8d72cfac1b6b239e7aef2a51c43?page.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:8737c8d72cfac1b6b239e7aef2a51c43&log.item=5eb493e15fa2c40001c36ca5]\r\n\r\nh3.*Test Item comments:*\r\nThis is a race between the UI and the test.  The test's observation of the results may occur whilst the UI is updating the table.  This can give rise to inconsistencies and spurious errors.\r\nh3.*Test execution log:*\r\n{panel:title=Test execution log|borderStyle=solid|borderColor=#ccc|titleColor=#34302D|titleBGColor=#6DB33F}{code} Time: 05/07/2020 23:04:02, Level: INFO, Log: storageclass.yml\r\n{code}[^5eb493e25fa2c40001c36d3f.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:03, Level: INFO, Log: addressspaces.yml\r\n{code}[^5eb493e25fa2c40001c36d42.bin]\\\\\\\\ {code} Time: 05/07/2020 23:04:03, Level: INFO, Log: addresses.yml\r\n{code}[^5eb493e25fa2c40001c36d44.bin]\\\\\\\\ {code} Time: 05/07/2020 23:04:03, Level: INFO, Log: users.yml\r\n{code}[^5eb493e25fa2c40001c36d46.bin]\\\\\\\\ {code} Time: 05/07/2020 23:04:03, Level: INFO, Log: done.txt\r\n{code}[^5eb493e35fa2c40001c36d48.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:03, Level: INFO, Log: io.enmasse.systemtest.shared.standard.web.FirefoxConsoleTest.testSortConnectionsBySenders_2020-05-07_18:28:02:747.png\r\n{code}!5eb493e35fa2c40001c36d4e.png|height=366!\\\\\\\\ {code} Time: 05/07/2020 23:04:03, Level: INFO, Log: io.enmasse.systemtest.shared.standard.web.FirefoxConsoleTest.testSortConnectionsBySenders_2020-05-07_18:28:00:684.png\r\n{code}!5eb493e35fa2c40001c36d52.png|height=366!\\\\\\\\ {code} Time: 05/07/2020 23:04:03, Level: INFO, Log: io.enmasse.systemtest.shared.standard.web.FirefoxConsoleTest.testSortConnectionsBySenders_2020-05-07_18:28:01:524.png\r\n{code}!5eb493e35fa2c40001c36d57.png|height=366!\\\\\\\\ {code} Time: 05/07/2020 23:04:03, Level: INFO, Log: io.enmasse.systemtest.shared.standard.web.FirefoxConsoleTest.testSortConnectionsBySenders_2020-05-07_18:28:03:832.png\r\n{code}!5eb493e35fa2c40001c36d5d.png|height=366!\\\\\\\\ {code} Time: 05/07/2020 23:04:03, Level: INFO, Log: io.enmasse.systemtest.shared.standard.web.FirefoxConsoleTest.testSortConnectionsBySenders_2020-05-07_18:28:01:250.png\r\n{code}!5eb493e45fa2c40001c36d62.png|height=366!\\\\\\\\ {code} Time: 05/07/2020 23:04:03, Level: INFO, Log: io.enmasse.systemtest.shared.standard.web.FirefoxConsoleTest.testSortConnectionsBySenders_2020-05-07_18:28:03:556.png\r\n{code}!5eb493e45fa2c40001c36d67.png|height=366!\\\\\\\\ {code} Time: 05/07/2020 23:04:04, Level: INFO, Log: io.enmasse.systemtest.shared.standard.web.FirefoxConsoleTest.testSortConnectionsBySenders_2020-05-07_18:28:04:036.png\r\n{code}!5eb493e45fa2c40001c36d6c.png|height=366!\\\\\\\\ {code} Time: 05/07/2020 23:04:04, Level: INFO, Log: io.enmasse.systemtest.shared.standard.web.FirefoxConsoleTest.testSortConnectionsBySenders_2020-05-07_18:28:01:740.png\r\n{code}!5eb493e45fa2c40001c36d70.png|height=366!\\\\\\\\ {code} Time: 05/07/2020 23:04:04, Level: INFO, Log: io.enmasse.systemtest.shared.standard.web.FirefoxConsoleTest.testSortConnectionsBySenders_2020-05-07_18:28:00:974.png\r\n{code}!5eb493e45fa2c40001c36d76.png|height=366!\\\\\\\\ {code} Time: 05/07/2020 23:04:04, Level: INFO, Log: io.enmasse.systemtest.shared.standard.web.FirefoxConsoleTest.testSortConnectionsBySenders_2020-05-07_18:28:03:365.png\r\n{code}!5eb493e55fa2c40001c36d7c.png|height=366!\\\\\\\\ {code} Time: 05/07/2020 23:04:04, Level: INFO, Log: io.enmasse.systemtest.shared.standard.web.FirefoxConsoleTest.testSortConnectionsBySenders_2020-05-07_18:28:01:064.png\r\n{code}!5eb493e55fa2c40001c36d80.png|height=366!\\\\\\\\ {code} Time: 05/07/2020 23:04:04, Level: INFO, Log: io.enmasse.systemtest.shared.standard.web.FirefoxConsoleTest.testSortConnectionsBySenders_2020-05-07_18:28:01:895.png\r\n{code}!5eb493e55fa2c40001c36d85.png|height=366!\\\\\\\\ {code} Time: 05/07/2020 23:04:05, Level: INFO, Log: io.enmasse.systemtest.shared.standard.web.FirefoxConsoleTest.testSortConnectionsBySenders_2020-05-07_18:28:01:368.png\r\n{code}!5eb493e55fa2c40001c36d8a.png|height=366!\\\\\\\\ {code} Time: 05/07/2020 23:04:05, Level: INFO, Log: io.enmasse.systemtest.shared.standard.web.FirefoxConsoleTest.testSortConnectionsBySenders_2020-05-07_18:30:33:153.png\r\n{code}!5eb493e55fa2c40001c36d90.png|height=366!\\\\\\\\ {code} Time: 05/07/2020 23:04:05, Level: INFO, Log: io.enmasse.systemtest.shared.standard.web.FirefoxConsoleTest.testSortConnectionsBySenders_2020-05-07_18:28:01:607.png\r\n{code}!5eb493e55fa2c40001c36d97.png|height=366!\\\\\\\\ {code} Time: 05/07/2020 23:04:05, Level: INFO, Log: systemtests-clients.systemtests-clients-789d5496c-w9qp7-systemtests-clients.log\r\n{code}[^5eb493e55fa2c40001c36d8d.bin]\\\\\\\\ {code} Time: 05/07/2020 23:04:05, Level: INFO, Log: qdrouterd-b41e7da-0.deleteMessagingClientApp.autolinks.1588890585030.log\r\n{code}[^5eb493e55fa2c40001c36d93.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:06, Level: INFO, Log: qdrouterd-b41e7da-0.deleteMessagingClientApp.links.1588890585030.log\r\n{code}[^5eb493e65fa2c40001c36d9a.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:06, Level: INFO, Log: qdrouterd-b41e7da-0.deleteMessagingClientApp.connections.1588890585030.log\r\n{code}[^5eb493e65fa2c40001c36d9d.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:06, Level: INFO, Log: qdrouterd-b41e7da-0.deleteMessagingClientApp.qdstat_a.1588890585030.log\r\n{code}[^5eb493e65fa2c40001c36da0.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:06, Level: INFO, Log: qdrouterd-b41e7da-0.deleteMessagingClientApp.qdstat_l.1588890585030.log\r\n{code}[^5eb493e65fa2c40001c36da3.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:06, Level: INFO, Log: qdrouterd-b41e7da-0.deleteMessagingClientApp.qdstat_n.1588890585030.log\r\n{code}[^5eb493e65fa2c40001c36da6.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:06, Level: INFO, Log: qdrouterd-b41e7da-0.deleteMessagingClientApp.qdstat_c.1588890585030.log\r\n{code}[^5eb493e65fa2c40001c36da9.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:06, Level: INFO, Log: qdrouterd-b41e7da-0.deleteMessagingClientApp.qdstat_linkroutes.1588890585030.log\r\n{code}[^5eb493e65fa2c40001c36dac.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:06, Level: INFO, Log: qdrouterd-b41e7da-1.deleteMessagingClientApp.autolinks.1588890585030.log\r\n{code}[^5eb493e65fa2c40001c36daf.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:06, Level: INFO, Log: qdrouterd-b41e7da-1.deleteMessagingClientApp.links.1588890585030.log\r\n{code}[^5eb493e65fa2c40001c36db2.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:06, Level: INFO, Log: qdrouterd-b41e7da-1.deleteMessagingClientApp.connections.1588890585030.log\r\n{code}[^5eb493e65fa2c40001c36db5.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:06, Level: INFO, Log: qdrouterd-b41e7da-1.deleteMessagingClientApp.qdstat_a.1588890585030.log\r\n{code}[^5eb493e65fa2c40001c36db8.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:06, Level: INFO, Log: qdrouterd-b41e7da-1.deleteMessagingClientApp.qdstat_l.1588890585030.log\r\n{code}[^5eb493e65fa2c40001c36dbb.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:06, Level: INFO, Log: qdrouterd-b41e7da-1.deleteMessagingClientApp.qdstat_n.1588890585030.log\r\n{code}[^5eb493e65fa2c40001c36dbe.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:06, Level: INFO, Log: qdrouterd-b41e7da-1.deleteMessagingClientApp.qdstat_c.1588890585030.log\r\n{code}[^5eb493e65fa2c40001c36dc1.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:06, Level: INFO, Log: qdrouterd-b41e7da-1.deleteMessagingClientApp.qdstat_linkroutes.1588890585030.log\r\n{code}[^5eb493e65fa2c40001c36dc4.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:06, Level: INFO, Log: CLI_RHEA_CONNECTOR-topic-via-web-0-68c964d8-5fa1-4939-afd9-eb4397c3587d-output.log\r\n{code}[^5eb493e65fa2c40001c36dc7.bin]\\\\\\\\ {code} Time: 05/07/2020 23:04:06, Level: INFO, Log: CLI_RHEA_CONNECTOR-topic-via-web-0-68c964d8-5fa1-4939-afd9-eb4397c3587d-error.log\r\n{code}[^5eb493e65fa2c40001c36dc9.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:06, Level: INFO, Log: CLI_RHEA_CONNECTOR-topic-via-web-0-e086144e-634e-486b-98ad-36f8a43f2997-output.log\r\n{code}[^5eb493e65fa2c40001c36dce.bin]\\\\\\\\ {code} Time: 05/07/2020 23:04:06, Level: INFO, Log: CLI_RHEA_CONNECTOR-topic-via-web-0-e086144e-634e-486b-98ad-36f8a43f2997-error.log\r\n{code}[^5eb493e65fa2c40001c36dd4.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:06, Level: INFO, Log: CLI_RHEA_CONNECTOR-topic-via-web-0-a198472f-462b-486d-a608-ae099e8ddae1-output.log\r\n{code}[^5eb493e65fa2c40001c36dda.bin]\\\\\\\\ {code} Time: 05/07/2020 23:04:06, Level: INFO, Log: CLI_RHEA_CONNECTOR-topic-via-web-0-a198472f-462b-486d-a608-ae099e8ddae1-error.log\r\n{code}[^5eb493e75fa2c40001c36de8.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:07, Level: INFO, Log: CLI_RHEA_CONNECTOR-queue-via-web-1-fdd079a1-f720-493e-b69a-57b84f002522-output.log\r\n{code}[^5eb493e75fa2c40001c36df0.bin]\\\\\\\\ {code} Time: 05/07/2020 23:04:07, Level: INFO, Log: CLI_RHEA_CONNECTOR-queue-via-web-1-fdd079a1-f720-493e-b69a-57b84f002522-error.log\r\n{code}[^5eb493e75fa2c40001c36df6.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:07, Level: INFO, Log: CLI_RHEA_CONNECTOR-queue-via-web-1-e6e93897-17c3-4b97-b676-98b1865f3198-output.log\r\n{code}[^5eb493e75fa2c40001c36dff.bin]\\\\\\\\ {code} Time: 05/07/2020 23:04:07, Level: INFO, Log: CLI_RHEA_CONNECTOR-queue-via-web-1-e6e93897-17c3-4b97-b676-98b1865f3198-error.log\r\n{code}[^5eb493e75fa2c40001c36e07.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:07, Level: INFO, Log: CLI_RHEA_CONNECTOR-queue-via-web-1-0bc21730-af5b-4df4-b72d-146f9d4be07f-output.log\r\n{code}[^5eb493e75fa2c40001c36e0f.bin]\\\\\\\\ {code} Time: 05/07/2020 23:04:07, Level: INFO, Log: CLI_RHEA_CONNECTOR-queue-via-web-1-0bc21730-af5b-4df4-b72d-146f9d4be07f-error.log\r\n{code}[^5eb493e75fa2c40001c36e11.txt]\\\\\\\\ {code} Time: 05/07/2020 23:04:07, Level: INFO, Log: systemtests-selenium.selenium-firefox-5df4f58fb7-9gpb6-selenium-firefox.log\r\n{code}[^5eb493e75fa2c40001c36e17.txt]\\\\\\\\ {panel}\r\n",
    "startTime": "2020/05/10 4:50 PM",
    "endTime": "",
    "assignee": "apratap468",
    "estimateNormalTime": null
  },
  {
    "id": 12943229,
    "code": "ENTMQMAAS-2043",
    "name": "[#4349] Console-UI Create DropdownWithToggle generic component",
    "description": "Create DropdownWithToggle generic component. its wrapper on patterfly dropdown component.\r\nRef PR:\r\nhttps://github.com/EnMasseProject/enmasse/pull/4349",
    "startTime": "2020/05/16 1:09 PM",
    "endTime": "2020/05/23 3:04 PM",
    "assignee": "apratap468",
    "estimateNormalTime": 7.079861111111111
  },
  {
    "id": 12943230,
    "code": "ENTMQMAAS-2044",
    "name": "[#4349] Console-UI Create DropdownWithKebabToggle generic component",
    "description": "Create DropdownWithKebabToggle generic component. Its wrapper o patternfly dropdownkebab component.\r\nRef PR:\r\nhttps://github.com/EnMasseProject/enmasse/pull/4349",
    "startTime": "2020/05/16 1:13 PM",
    "endTime": "2020/05/23 3:03 PM",
    "assignee": "apratap468",
    "estimateNormalTime": 7.076388888888889
  },
  {
    "id": 12943266,
    "code": "ENTMQMAAS-2045",
    "name": "[#4522] Update yarn dependencies",
    "description": "Update yarn dependencies\r\nPR : https://github.com/EnMasseProject/enmasse/pull/4522\r\n",
    "startTime": "2020/05/17 2:12 PM",
    "endTime": "2020/05/22 5:31 AM",
    "assignee": "apratap468",
    "estimateNormalTime": 4.638194444444444
  },
  {
    "id": 12943370,
    "code": "ENTMQMAAS-2048",
    "name": "Console-IoT-UI- Create MetadataListTable view component",
    "description": "MetadataListTable view generic component to display json metadata.\r\nRefer design:\r\n1. Create MetadataListTable component\r\n2. Create NoMetadataFound component\r\nhttps://marvelapp.com/5gbji22/screen/68097330\r\n\r\nhttps://marvelapp.com/5gbji22/screen/69928584",
    "startTime": "2020/05/18 4:48 AM",
    "endTime": "2020/07/21 2:16 PM",
    "assignee": "apratap468",
    "estimateNormalTime": 64.39444444444445
  },
  {
    "id": 12943394,
    "code": "ENTMQMAAS-2049",
    "name": "Console-IoT-UI-Create ViaGateways component for Device Info page",
    "description": "Create ViaGateways component for Device Info page.\r\nRefer design:\r\nhttps://marvelapp.com/5gbji22/screen/68097332",
    "startTime": "2020/05/18 5:38 AM",
    "endTime": "2020/07/21 2:16 PM",
    "assignee": "apratap468",
    "estimateNormalTime": 64.35972222222223
  },
  {
    "id": 12943408,
    "code": "ENTMQMAAS-2050",
    "name": "Console-IoT-UI-Create Credentials view component for Device Info page",
    "description": "Create Credentials view component for Device Info page\r\n1. Create secrets view generic component\r\n2. Create extensions view  generic component\r\n3. Create Credentials view component\r\n\r\nRefer design:\r\nhttps://marvelapp.com/5gbji22/screen/68097330",
    "startTime": "2020/05/18 5:41 AM",
    "endTime": "2020/07/21 2:23 PM",
    "assignee": "apratap468",
    "estimateNormalTime": 64.3625
  },
  {
    "id": 12943411,
    "code": "ENTMQMAAS-2051",
    "name": "Console-IoT-UI-View in Json Device Info page",
    "description": "View in Json Device Info page.\r\n1. Add view in json toggle button and functionality\r\n2. View device info page in json editor\r\n\r\nRefer design:\r\nhttps://marvelapp.com/5gbji22/screen/68097331",
    "startTime": "2020/05/18 5:44 AM",
    "endTime": "2020/07/21 2:21 PM",
    "assignee": "apratap468",
    "estimateNormalTime": 64.35902777777777
  },
  {
    "id": 12943420,
    "code": "ENTMQMAAS-2052",
    "name": "[#4349] Consol-UI refactor for Address Space",
    "description": "Code refactor for Address Space. \r\n1. Create modules for each functionality e.i. Address Space\r\n2. Create separate component folder and move all the html code in component\r\n2. Create container folder and created container component \r\n3. Create utils \r\n4. Create dialog folder and create separate dialog/modal component\r\n5. Create constant file and  moved all hard code values into constant file\r\n\r\nRef PR:\r\nRef PR:\r\nhttps://github.com/EnMasseProject/enmasse/pull/4349",
    "startTime": "2020/05/18 5:58 AM",
    "endTime": "2020/05/23 3:02 PM",
    "assignee": "apratap468",
    "estimateNormalTime": 5.377777777777777
  },
  {
    "id": 12943548,
    "code": "ENTMQMAAS-2055",
    "name": "Add AMQP Protocol Adapter",
    "description": "Add the AMQP 1.0 protocol adapter to the IoT infrastructure.",
    "startTime": "2020/05/18 9:40 AM",
    "endTime": "2020/07/02 10:21 AM",
    "assignee": "jreimann-2",
    "estimateNormalTime": 45.02847222222223
  },
  {
    "id": 12944573,
    "code": "ENTMQMAAS-2072",
    "name": "[#4567] : Refactor GraphQL delete addressspace and address to take more than one target",
    "description": "Created from upstream issue [#4567|https://github.com/EnMasseProject/enmasse/issues/4567]. Fix version: 1.5.0",
    "startTime": "2020/05/20 4:47 AM",
    "endTime": "2020/05/28 11:19 AM",
    "assignee": "buschv",
    "estimateNormalTime": 8.272222222222222
  },
  {
    "id": 12944757,
    "code": "ENTMQMAAS-2087",
    "name": "Extract the inter service PSK into a secret",
    "description": "",
    "startTime": "2020/05/20 9:10 AM",
    "endTime": "2020/06/03 7:33 AM",
    "assignee": "jreimann-2",
    "estimateNormalTime": 13.932638888888889
  },
  {
    "id": 12945233,
    "code": "ENTMQMAAS-2090",
    "name": "Upgrade Hono to version 1.3.0",
    "description": "",
    "startTime": "2020/05/21 5:29 AM",
    "endTime": "",
    "assignee": "dejanbosanac",
    "estimateNormalTime": null
  },
  {
    "id": 12945689,
    "code": "ENTMQMAAS-2093",
    "name": "Add upstream embedded Infinispan device connection service",
    "description": "",
    "startTime": "2020/05/22 4:38 AM",
    "endTime": "",
    "assignee": "jreimann-2",
    "estimateNormalTime": null
  },
  {
    "id": 12946946,
    "code": "ENTMQMAAS-2113",
    "name": "MQTT stopped working on brokered address space",
    "description": "h3.*Back link to Report Portal:*\r\n - [Link to defect|https://reportportal-amq-online.cloud.paas.psi.redhat.com/#enmasse/launches/all%7Cpage.page=1&page.size=50&page.sort=start_time/5ecd02a388b1c30001be9d81%7Cpage.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:1f0424324d2da17bdf3278584bb91c94?page.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:1f0424324d2da17bdf3278584bb91c94&log.item=5ecd027a88b1c30001be970a]\r\n\r\nh3.*Test Item comments:*\r\nenvironment issue\r\nh3.*Test execution log:*\r\n{panel:title=Test execution log|borderStyle=solid|borderColor=#ccc|titleColor=#34302D|titleBGColor=#6DB33F}{code} Time: 05/26/2020 11:50:16, Level: INFO, Log: 2020-05-26T05:04:35.011Z &amp#27;[34mINFO &amp#27;[0;39m [ResourceManager] Setting pointer to class resources\r\n2020-05-26T05:04:35.011Z &amp#27;[34mINFO &amp#27;[0;39m [KubeClusterManager] Setting pointer to class configurations\r\n2020-05-26T05:04:35.024Z &amp#27;[34mINFO &amp#27;[0;39m [ResourceManager] Setting pointer to method resources\r\n2020-05-26T05:04:35.024Z &amp#27;[34mINFO &amp#27;[0;39m [KubeClusterManager] Setting pointer to method configurations\r\n2020-05-26T05:04:35.024Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get pods -n enmasse-infra -o wide\r\n2020-05-26T05:04:35.205Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Return code: 0\r\n2020-05-26T05:04:35.205Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] stdout: \r\nNAME                                        READY     STATUS    RESTARTS   AGE       IP            NODE        NOMINATED NODE\r\naddress-space-controller-68d8db4c88-dlg4f   1/1       Running   0          48m       172.17.0.12   localhost   <none>\r\nagent.86862a0-7f86577bfb-ngvq4              1/1       Running   0          45m       172.17.0.18   localhost   <none>\r\nbroker.86862a0-5d8f5984f7-7mcpw             1/1       Running   0          45m       172.17.0.19   localhost   <none>\r\nconsole-f4877f649-zsnjs                     2/2       Running   0          47m       172.17.0.16   localhost   <none>\r\nenmasse-operator-7cbb477b57-w6fkd           1/1       Running   0          48m       172.17.0.6    localhost   <none>\r\nnone-authservice-856d6965c9-ljpr7           1/1       Running   0          48m       172.17.0.15   localhost   <none>\r\nservice-broker-5f97f9f464-sk8t5             1/1       Running   0          48m       172.17.0.9    localhost   <none>\r\nstandard-authservice-557fcf8964-kndjg       1/1       Running   0          48m       172.17.0.14   localhost   <none>\r\n\r\n2020-05-26T05:04:35.205Z &amp#27;[34mINFO &amp#27;[0;39m [TimeMeasuringSystem] Start time of operation TEST_EXECUTION is correctly stored\r\n2020-05-26T05:04:35.205Z &amp#27;[34mINFO &amp#27;[0;39m [ITestSeparator] ####################################################################################################\r\n2020-05-26T05:04:35.205Z &amp#27;[34mINFO &amp#27;[0;39m [ITestSeparator] io.enmasse.systemtest.shared.brokered.mqtt.PublishTest.testPublishQoS0-STARTED\r\n2020-05-26T05:04:35.205Z &amp#27;[34mINFO &amp#27;[0;39m [ITestBase] Test init\r\n2020-05-26T05:04:35.205Z &amp#27;[34mINFO &amp#27;[0;39m [TestInfo] Test is shared\r\n2020-05-26T05:04:35.208Z &amp#27;[34mINFO &amp#27;[0;39m [GlobalLogCollector] Collecting router state in namespace enmasse-infra\r\n2020-05-26T05:04:35.211Z &amp#27;[34mINFO &amp#27;[0;39m [AddressUtils] Creating addresses [{metadata=ObjectMeta(annotations={}, clusterName=null, creationTimestamp=null, deletionGracePeriodSeconds=null, deletionTimestamp=null, finalizers=[], generateName=null, generation=null, labels={}, managedFields=[], name=brokered-shared-0.mytopic, namespace=enmasse-infra, ownerReferences=[], resourceVersion=null, selfLink=null, uid=null, additionalProperties={}),spec={address=mytopic,type=topic,plan=brokered-topic,forwarders=[],subscription=null},status={ready=false,phase=Pending,messages=[],brokerStatuses=[],planStatus=null,forwarders=[],subscription=null}}]\r\n2020-05-26T05:04:35.211Z &amp#27;[34mINFO &amp#27;[0;39m [TimeMeasuringSystem] Start time of operation CREATE_ADDRESS-f695198e is correctly stored\r\n2020-05-26T05:04:35.211Z &amp#27;[34mINFO &amp#27;[0;39m [AddressUtils] Remove addresses in every addresses's address space\r\n2020-05-26T05:04:35.219Z &amp#27;[34mINFO &amp#27;[0;39m [AddressUtils] Address brokered-shared-0.mytopic created\r\n2020-05-26T05:04:35.219Z &amp#27;[34mINFO &amp#27;[0;39m [TimeMeasuringSystem] Start time of operation ADDRESS_WAIT_READY-62dac1fe is correctly stored\r\n2020-05-26T05:04:35.219Z &amp#27;[34mINFO &amp#27;[0;39m [TestUtils] Waiting 899989 ms for - 1 match\r\n2020-05-26T05:04:35.221Z &amp#27;[34mINFO &amp#27;[0;39m [AddressUtils] Waiting until address brokered-shared-0.mytopic ready, message []\r\n2020-05-26T05:04:40.224Z &amp#27;[34mINFO &amp#27;[0;39m [TestUtils] Successfully waited for: 1 match, it took 5016 ms\r\n2020-05-26T05:04:40.224Z &amp#27;[34mINFO &amp#27;[0;39m [TimeMeasuringSystem] End time of operation ADDRESS_WAIT_READY-62dac1fe is correctly stored\r\n2020-05-26T05:04:40.224Z &amp#27;[34mINFO &amp#27;[0;39m [TimeMeasuringSystem] End time of operation CREATE_ADDRESS-f695198e is correctly stored\r\n2020-05-26T05:04:40.225Z &amp#27;[34mINFO &amp#27;[0;39m [AddressSpaceUtils] Got endpoint: name: messaging, service-name: messaging, host: messaging-86862a0-enmasse-infra.10.0.132.107.nip.io, port: Optional[443]\r\n2020-05-26T05:04:40.232Z &amp#27;[34mINFO &amp#27;[0;39m [MqttClientFactory] Using mqtt endpoint messaging-86862a0-enmasse-infra.10.0.132.107.nip.io:443\r\n2020-05-26T05:04:40.268Z &amp#27;[34mINFO &amp#27;[0;39m [MqttPublishTestBase] Connecting\r\n2020-05-26T06:04:41.255Z &amp#27;[1;31mERROR&amp#27;[0;39m [JunitCallbackListener] Test failed at Test execution\r\n2020-05-26T06:04:41.256Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get pods -n enmasse-infra -o wide\r\n2020-05-26T06:04:41.477Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Return code: 0\r\n2020-05-26T06:04:41.477Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] stdout: \r\nNAME                                        READY     STATUS    RESTARTS   AGE       IP            NODE        NOMINATED NODE\r\naddress-space-controller-68d8db4c88-dlg4f   1/1       Running   0          1h        172.17.0.12   localhost   <none>\r\nagent.86862a0-7f86577bfb-ngvq4              1/1       Running   0          1h        172.17.0.18   localhost   <none>\r\nbroker.86862a0-5d8f5984f7-7mcpw             1/1       Running   0          1h        172.17.0.19   localhost   <none>\r\nconsole-f4877f649-zsnjs                     2/2       Running   0          1h        172.17.0.16   localhost   <none>\r\nenmasse-operator-7cbb477b57-w6fkd           1/1       Running   0          1h        172.17.0.6    localhost   <none>\r\nnone-authservice-856d6965c9-ljpr7           1/1       Running   0          1h        172.17.0.15   localhost   <none>\r\nservice-broker-5f97f9f464-sk8t5             1/1       Running   0          1h        172.17.0.9    localhost   <none>\r\nstandard-authservice-557fcf8964-kndjg       1/1       Running   0          1h        172.17.0.14   localhost   <none>\r\n\r\n2020-05-26T06:04:41.478Z &amp#27;[34mINFO &amp#27;[0;39m [GlobalLogCollector] Saving pod logs and info...\r\n2020-05-26T06:05:25.163Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'address-space-controller-68d8db4c88-dlg4f', container:'address-space-controller' : restart count '0'\r\n2020-05-26T06:05:25.163Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'agent.86862a0-7f86577bfb-ngvq4', container:'agent' : restart count '0'\r\n2020-05-26T06:05:25.163Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'broker.86862a0-5d8f5984f7-7mcpw', container:'broker' : restart count '0'\r\n2020-05-26T06:05:25.163Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'console-f4877f649-zsnjs', container:'console-proxy' : restart count '0'\r\n2020-05-26T06:05:25.163Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'console-f4877f649-zsnjs', container:'console-server' : restart count '0'\r\n2020-05-26T06:05:25.163Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'enmasse-operator-7cbb477b57-w6fkd', container:'controller' : restart count '0'\r\n2020-05-26T06:05:25.163Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'none-authservice-856d6965c9-ljpr7', container:'none-authservice' : restart count '0'\r\n2020-05-26T06:05:25.163Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'service-broker-5f97f9f464-sk8t5', container:'service-broker' : restart count '0'\r\n2020-05-26T06:05:25.163Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'standard-authservice-557fcf8964-kndjg', container:'keycloak' : restart count '0'\r\n2020-05-26T06:05:25.166Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc -n enmasse-infra describe pods\r\n2020-05-26T06:05:25.441Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get events --namespace enmasse-infra --sort-by={.metadata.creationTimestamp}\r\n2020-05-26T06:05:25.623Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get configmaps --namespace enmasse-infra --output yaml\r\n2020-05-26T06:05:25.808Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get secrets --namespace enmasse-infra --output yaml\r\n2020-05-26T06:05:26.130Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc describe pvc -n enmasse-infra\r\n2020-05-26T06:05:26.342Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get deployments -o yaml -n enmasse-infra\r\n2020-05-26T06:05:26.554Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get statefulsets -o yaml -n enmasse-infra\r\n2020-05-26T06:05:26.756Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc -n systemtests-selenium describe pods\r\n2020-05-26T06:05:26.939Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get events --namespace systemtests-selenium --sort-by={.metadata.creationTimestamp}\r\n2020-05-26T06:05:27.163Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get configmaps --namespace systemtests-selenium --output yaml\r\n2020-05-26T06:05:27.379Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get secrets --namespace systemtests-selenium --output yaml\r\n2020-05-26T06:05:27.588Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc describe pvc -n systemtests-selenium\r\n2020-05-26T06:05:27.784Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get deployments -o yaml -n systemtests-selenium\r\n2020-05-26T06:05:27.977Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get statefulsets -o yaml -n systemtests-selenium\r\n2020-05-26T06:05:28.168Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc -n default describe pods\r\n2020-05-26T06:05:28.395Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get events --namespace default --sort-by={.metadata.creationTimestamp}\r\n2020-05-26T06:05:28.587Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get configmaps --namespace default --output yaml\r\n2020-05-26T06:05:28.769Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get secrets --namespace default --output yaml\r\n2020-05-26T06:05:29.011Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc describe pvc -n default\r\n2020-05-26T06:05:29.191Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get deployments -o yaml -n default\r\n2020-05-26T06:05:29.387Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get statefulsets -o yaml -n default\r\n2020-05-26T06:05:29.600Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc describe addressspaces --all-namespaces\r\n2020-05-26T06:05:29.796Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc describe addresses --all-namespaces\r\n2020-05-26T06:05:29.994Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get addresses -o yaml --all-namespaces\r\n2020-05-26T06:05:30.169Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get addresses -o yaml --all-namespaces\r\n2020-05-26T06:05:30.371Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get messaginguser -o yaml --all-namespaces\r\n2020-05-26T06:05:30.555Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc describe pv\r\n2020-05-26T06:05:31.510Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get storageclass -o yaml\r\n2020-05-26T06:05:31.728Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get -A routes -o yaml\r\n2020-05-26T06:05:31.903Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get -A routes -o yaml\r\n2020-05-26T06:05:32.078Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get events --all-namespaces=true --sort-by={.metadata.creationTimestamp}\r\n2020-05-26T06:05:32.269Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc describe nodes\r\n2020-05-26T06:05:32.485Z &amp#27;[34mINFO &amp#27;[0;39m [GlobalLogCollector] Pod logs and describe successfully stored into /tmp/testlogs/failed_test_logs/io.enmasse.systemtest.shared.brokered.mqtt.PublishTest/testPublishQoS0\r\n2020-05-26T06:05:32.493Z &amp#27;[1;31mERROR&amp#27;[0;39m [ITestSeparator] Caught exception\r\norg.eclipse.paho.client.mqttv3.MqttException: Connection lost\r\n\tat org.eclipse.paho.client.mqttv3.internal.CommsReceiver.run(CommsReceiver.java:189)\r\n\tat java.base/java.lang.Thread.run(Thread.java:834)\r\nCaused by: java.io.EOFException: null\r\n\tat java.base/java.io.DataInputStream.readByte(DataInputStream.java:272)\r\n\tat org.eclipse.paho.client.mqttv3.internal.wire.MqttInputStream.readMqttWireMessage(MqttInputStream.java:92)\r\n\tat org.eclipse.paho.client.mqttv3.internal.CommsReceiver.run(CommsReceiver.java:136)\r\n\t... 1 common frames omitted\r\n2020-05-26T06:05:32.493Z &amp#27;[34mINFO &amp#27;[0;39m [TimeMeasuringSystem] End time of operation TEST_EXECUTION is correctly stored\r\n2020-05-26T06:05:32.493Z &amp#27;[34mINFO &amp#27;[0;39m [ITestSeparator] io.enmasse.systemtest.shared.brokered.mqtt.PublishTest.testPublishQoS0-FINISHED\r\n2020-05-26T06:05:32.493Z &amp#27;[34mINFO &amp#27;[0;39m [ITestSeparator] ####################################################################################################\r\n2020-05-26T06:05:32.493Z &amp#27;[34mINFO &amp#27;[0;39m [JunitCallbackListener] Teardown section: \r\n2020-05-26T06:05:32.493Z &amp#27;[34mINFO &amp#27;[0;39m [ResourceManager] Going to clear all method resources\r\n2020-05-26T06:05:32.493Z &amp#27;[34mINFO &amp#27;[0;39m [ResourceManager] ------------------------------------\r\n2020-05-26T06:05:32.493Z &amp#27;[34mINFO &amp#27;[0;39m [ResourceManager] ------------------------------------\r\n2020-05-26T06:05:32.493Z &amp#27;[34mINFO &amp#27;[0;39m [KubeClusterManager] Going to restore all method configurations\r\n2020-05-26T06:05:32.493Z &amp#27;[34mINFO &amp#27;[0;39m [KubeClusterManager] ------------------------------------\r\n2020-05-26T06:05:32.493Z &amp#27;[34mINFO &amp#27;[0;39m [KubeClusterManager] ------------------------------------\r\n2020-05-26T06:05:32.493Z &amp#27;[34mINFO &amp#27;[0;39m [TestInfo] Test is shared\r\n2020-05-26T06:05:32.493Z &amp#27;[34mINFO &amp#27;[0;39m [TestInfo] AddressSpace isDeleteable: false\r\n2020-05-26T06:05:32.493Z &amp#27;[34mINFO &amp#27;[0;39m [TestInfo] Test is not IoT!\r\n2020-05-26T06:05:32.493Z &amp#27;[34mINFO &amp#27;[0;39m [JunitCallbackListener] Teardown shared!\r\n2020-05-26T06:05:32.493Z &amp#27;[34mINFO &amp#27;[0;39m [SharedResourceManager] test failed: io.enmasse.systemtest.shared.brokered.mqtt.PublishTest.testPublishQoS0\r\n2020-05-26T06:05:32.493Z &amp#27;[34mINFO &amp#27;[0;39m [SharedResourceManager] shared address space '{metadata=ObjectMeta(annotations={enmasse.io/applied-configuration={\\\"authenticationServiceSettings\\\":{\\\"host\\\":\\\"standard-authservice.enmasse-infra.svc\\\",\\\"port\\\":5671,\\\"realm\\\":\\\"enmasse-infra-brokered-shared-0\\\",\\\"caCertSecret\\\":{\\\"name\\\":\\\"standard-authservice-cert\\\"}},\\\"addressSpaceSpec\\\":{\\\"type\\\":\\\"brokered\\\",\\\"endpoints\\\":[{\\\"name\\\":\\\"messaging\\\",\\\"service\\\":\\\"messaging\\\",\\\"expose\\\":{\\\"type\\\":\\\"route\\\",\\\"routeServicePort\\\":\\\"amqps\\\",\\\"routeTlsTermination\\\":\\\"passthrough\\\"},\\\"cert\\\":{\\\"provider\\\":\\\"selfsigned\\\",\\\"secretName\\\":\\\"external-certs-messaging-86862a0\\\"}},{\\\"name\\\":\\\"messaging-wss\\\",\\\"service\\\":\\\"messaging\\\",\\\"expose\\\":{\\\"type\\\":\\\"route\\\",\\\"routeServicePort\\\":\\\"amqps\\\",\\\"routeTlsTermination\\\":\\\"reencrypt\\\"},\\\"cert\\\":{\\\"provider\\\":\\\"selfsigned\\\",\\\"secretName\\\":\\\"external-certs-messaging-86862a0\\\"}}],\\\"plan\\\":\\\"brokered-single-broker\\\",\\\"authenticationService\\\":{\\\"name\\\":\\\"standard-authservice\\\"}}}, enmasse.io/applied-infra-config={\\\"apiVersion\\\":\\\"admin.enmasse.io/v1beta1\\\",\\\"kind\\\":\\\"BrokeredInfraConfig\\\",\\\"metadata\\\":{\\\"annotations\\\":{\\\"kubectl.kubernetes.io/last-applied-configuration\\\":\\\"{\\\\\\\"apiVersion\\\\\\\":\\\\\\\"admin.enmasse.io/v1beta1\\\\\\\",\\\\\\\"kind\\\\\\\":\\\\\\\"BrokeredInfraConfig\\\\\\\",\\\\\\\"metadata\\\\\\\":{\\\\\\\"annotations\\\\\\\":{},\\\\\\\"labels\\\\\\\":{\\\\\\\"app\\\\\\\":\\\\\\\"enmasse\\\\\\\"},\\\\\\\"name\\\\\\\":\\\\\\\"default\\\\\\\",\\\\\\\"namespace\\\\\\\":\\\\\\\"enmasse-infra\\\\\\\"},\\\\\\\"spec\\\\\\\":{\\\\\\\"admin\\\\\\\":{\\\\\\\"resources\\\\\\\":{\\\\\\\"memory\\\\\\\":\\\\\\\"512Mi\\\\\\\"}},\\\\\\\"broker\\\\\\\":{\\\\\\\"addressFullPolicy\\\\\\\":\\\\\\\"FAIL\\\\\\\",\\\\\\\"resources\\\\\\\":{\\\\\\\"memory\\\\\\\":\\\\\\\"512Mi\\\\\\\",\\\\\\\"storage\\\\\\\":\\\\\\\"5Gi\\\\\\\"}}}}\\\\n\\\"},\\\"creationTimestamp\\\":\\\"2020-05-26T04:15:57Z\\\",\\\"generation\\\":1,\\\"labels\\\":{\\\"app\\\":\\\"enmasse\\\"},\\\"name\\\":\\\"default\\\",\\\"namespace\\\":\\\"enmasse-infra\\\",\\\"resourceVersion\\\":\\\"3301\\\",\\\"selfLink\\\":\\\"/apis/admin.enmasse.io/v1beta1/namespaces/enmasse-infra/brokeredinfraconfigs/default\\\",\\\"uid\\\":\\\"997fa2a1-9f07-11ea-8fc6-fa163e04a727\\\"},\\\"spec\\\":{\\\"version\\\":\\\"0.32-SNAPSHOT\\\",\\\"admin\\\":{\\\"resources\\\":{\\\"memory\\\":\\\"512Mi\\\"}},\\\"broker\\\":{\\\"resources\\\":{\\\"memory\\\":\\\"512Mi\\\",\\\"storage\\\":\\\"5Gi\\\"},\\\"addressFullPolicy\\\":\\\"FAIL\\\"}}}, enmasse.io/infra-uuid=86862a0, enmasse.io/realm-name=enmasse-infra-brokered-shared-0}, clusterName=null, creationTimestamp=2020-05-26T04:19:03Z, deletionGracePeriodSeconds=null, deletionTimestamp=null, finalizers=[enmasse.io/addresses, enmasse.io/messaging-users, enmasse.io/components, enmasse.io/realms], generateName=null, generation=1, labels=null, managedFields=[], name=brokered-shared-0, namespace=enmasse-infra, ownerReferences=[], resourceVersion=5218, selfLink=/apis/enmasse.io/v1beta1/namespaces/enmasse-infra/addressspaces/brokered-shared-0, uid=080c31ea-9f08-11ea-8fc6-fa163e04a727, additionalProperties={}),spec={type=brokered,plan=brokered-single-broker,authenticationService=AuthenticationService{additionalProperties={}, name=standard-authservice, type=null, overrides=null},endpoints=[{name=messaging,expose=ExposeSpec{type=route, annotations={}, routeHost='null', routeServicePort='amqps', routeTlsTermination=passthrough, loadBalancerPorts=[], loadBalancerSourceRanges=[]},service=messaging,exports=null,cert=CertSpec{provider='selfsigned', secretName='external-certs-messaging-86862a0'}}, {name=messaging-wss,expose=ExposeSpec{type=route, annotations={}, routeHost='null', routeServicePort='amqps', routeTlsTermination=reencrypt, loadBalancerPorts=[], loadBalancerSourceRanges=[]},service=messaging,exports=null,cert=CertSpec{provider='selfsigned', secretName='external-certs-messaging-86862a0'}}],networkPolicy=null,connectors=null,status={ready=true,phase=Active,caCert=LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURaekNDQWsrZ0F3SUJBZ0lVYlhDdk5xZzRoQVY4MTh6RHN5cGNWWWFBajRnd0RRWUpLb1pJaHZjTkFRRUwKQlFBd1FqRUxNQWtHQTFVRUJoTUNXRmd4RlRBVEJnTlZCQWNNREVSbFptRjFiSFFnUTJsMGVURWNNQm9HQTFVRQpDZ3dUUkdWbVlYVnNkQ0JEYjIxd1lXNTVJRXgwWkRBZ0Z3MHlNREExTWpZd05ERTVNRFphR0E4eU1EVXdNRGN3Ck9EQTBNVGt3Tmxvd1FqRUxNQWtHQTFVRUJoTUNXRmd4RlRBVEJnTlZCQWNNREVSbFptRjFiSFFnUTJsMGVURWMKTUJvR0ExVUVDZ3dUUkdWbVlYVnNkQ0JEYjIxd1lXNTVJRXgwWkRDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRApnZ0VQQURDQ0FRb0NnZ0VCQUxTWG1tTjA3KzljQlRuVi9TcnM4TmlNa0t4QmdzdnlpVUEvOVJwdjh4MDFZenUzCkxsQzZUak1OSm1XSmltNUQybGhKa2VQNEx1clduVkpZRU4zYUc2MTNnb25lNEphWERRenhrWUNlQndkbCtwa0IKeUtUQnpoZzNGdWhvc21iVG5lN1FQQ0JJSVF4Tmc5TUVaeSs1RlBxN3hLdXVsenRody9PT1BmKzB1YUJoT1VGMgpic29xQWFQbjhicDlMazE1ZUNHbUc4TXdGbjAyL3c2dmluWTJIRDNXRUU2SjgzZDc2ZnQxMXVnVFJOU01JZVZNCm45eFd5QlBBRlhQdjZaYTdxQjZUODVtWlVrZFE3VEVrR0h2QUI5VC9mSDVwSVlDSnZ0SmdhUURScmNuZmJCMkIKWG9ZWjlYTTJnVERTRzBRdXZGbDZZVTFuMDZrYXFkMGs5WmtyTGNzQ0F3RUFBYU5UTUZFd0hRWURWUjBPQkJZRQpGTWNMT1lLZUpaTHEybVhoS0lmYUNtclZudE94TUI4R0ExVWRJd1FZTUJhQUZNY0xPWUtlSlpMcTJtWGhLSWZhCkNtclZudE94TUE4R0ExVWRFd0VCL3dRRk1BTUJBZjh3RFFZSktvWklodmNOQVFFTEJRQURnZ0VCQUdpZm8wajcKbWFkeHZxbmR5OHVHck9NaW42S2p0UDQyeEpYYnZpMDVmSWtUS3ZNT3pEdFZyS0lQWExYdFRyWE9GSTNadnBxRwp4Q2hsQnFhQ0hGdDB6eFNERlhic1F0NEIwQll5SDc2NTRRa0xEeXRVOTdBVWRvMzREOHdmc2xJUkR2TDNjV2pNCnluSlJhRURFZEhZaE0zcmRueGZwL1hJcEwxYWZPRFlhaEJNVStUcm0wUUJiTVVrMUlKSzZuVnIrUVE3WTZyRGQKRG5VdE0zdjU3K2ZTc25GMUMxNktzU000OXhZZnROamhyQzc3VTB1TzZ6RFVaY2FFQnFkVFNybEJoNGswbmY1Vgo2MC9XMkFGWFpjWU82S3V5Qm9Ba1JDK3dMTnJMdEJKT3ZhRWlpR0NPb21udFVBT0tXVjFGWC9GdGVZZXdZQnd5CmRhazIwY2g2eUltYUt4WT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=,endpointStatuses=[{name=messaging,externalHost=messaging-86862a0-enmasse-infra.10.0.132.107.nip.io,externalPorts={amqps=443},serviceHost=messaging-86862a0.enmasse-infra.svc,servicePorts={amqps=5671, amqp=5672}}, {name=messaging-wss,externalHost=messaging-wss-86862a0-enmasse-infra.10.0.132.107.nip.io,externalPorts={amqps=443},serviceHost=messaging-86862a0.enmasse-infra.svc,servicePorts={amqps=5671, amqp=5672}}],messages=[],connectors=[],routers=[]}}' will be removed\r\n2020-05-26T06:05:32.500Z &amp#27;[34mINFO &amp#27;[0;39m [AddressSpaceUtils] Following addressspaces are deployed [brokered-shared-0] in namespace enmasse-infra\r\n2020-05-26T06:05:32.503Z &amp#27;[34mINFO &amp#27;[0;39m [TimeMeasuringSystem] Start time of operation DELETE_ADDRESS_SPACE-4d9c3bba is correctly stored\r\n2020-05-26T06:05:32.503Z &amp#27;[34mINFO &amp#27;[0;39m [GlobalLogCollector] Collecting events in enmasse-infra\r\n2020-05-26T06:05:32.503Z &amp#27;[34mINFO &amp#27;[0;39m [Exec] Running command - oc get events --namespace enmasse-infra --sort-by={.metadata.creationTimestamp}\r\n2020-05-26T06:05:32.689Z &amp#27;[34mINFO &amp#27;[0;39m [GlobalLogCollector] Store logs from all terminated pods in namespace 'enmasse-infra'\r\n2020-05-26T06:05:32.693Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'address-space-controller-68d8db4c88-dlg4f', container:'address-space-controller' : restart count '0'\r\n2020-05-26T06:05:32.693Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'agent.86862a0-7f86577bfb-ngvq4', container:'agent' : restart count '0'\r\n2020-05-26T06:05:32.693Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'broker.86862a0-5d8f5984f7-7mcpw', container:'broker' : restart count '0'\r\n2020-05-26T06:05:32.693Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'console-f4877f649-zsnjs', container:'console-proxy' : restart count '0'\r\n2020-05-26T06:05:32.693Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'console-f4877f649-zsnjs', container:'console-server' : restart count '0'\r\n2020-05-26T06:05:32.693Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'enmasse-operator-7cbb477b57-w6fkd', container:'controller' : restart count '0'\r\n2020-05-26T06:05:32.693Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'none-authservice-856d6965c9-ljpr7', container:'none-authservice' : restart count '0'\r\n2020-05-26T06:05:32.693Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'service-broker-5f97f9f464-sk8t5', container:'service-broker' : restart count '0'\r\n2020-05-26T06:05:32.693Z &amp#27;[34mINFO &amp#27;[0;39m [Kubernetes] pod:'standard-authservice-557fcf8964-kndjg', container:'keycloak' : restart count '0'\r\n2020-05-26T06:05:32.694Z &amp#27;[34mINFO &amp#27;[0;39m [GlobalLogCollector] Collecting configmaps for namespace enmasse-infra\r\n2020-05-26T06:05:32.699Z &amp#27;[34mINFO &amp#27;[0;39m [GlobalLogCollector] config map 'console-trusted-ca-bundle' will be archived with path: '/tmp/testlogs/enmasse-infra/console-trusted-ca-bundle.global.configmap'\r\n2020-05-26T06:05:32.699Z &amp#27;[34mINFO &amp#27;[0;39m [GlobalLogCollector] config map 'enmasse-lock' will be archived with path: '/tmp/testlogs/enmasse-infra/enmasse-lock.global.configmap'\r\n2020-05-26T06:05:32.699Z &amp#27;[34mINFO &amp#27;[0;39m [GlobalLogCollector] Collecting router state in namespace enmasse-infra\r\n2020-05-26T06:05:32.718Z &amp#27;[34mINFO &amp#27;[0;39m [AddressSpaceUtils] Waiting for AddressSpace brokered-shared-0 to be deleted\r\n2020-05-26T06:05:38.824Z &amp#27;[34mINFO &amp#27;[0;39m [TimeMeasuringSystem] End time of operation DELETE_ADDRESS_SPACE-4d9c3bba is correctly stored\r\n2020-05-26T06:05:38.826Z &amp#27;[34mINFO &amp#27;[0;39m [AmqpClientFactory] Closed 0 clients\r\n{code}{code} Time: 05/26/2020 11:50:16, Level: ERROR, Log: org.eclipse.paho.client.mqttv3.MqttException: Connection lost\r\nCaused by: java.io.EOFException\r\n{code}{code} Time: 05/26/2020 11:50:16, Level: INFO, Log: address-space-controller-68d8db4c88-dlg4f_address-space-controller.log\r\n{code}[^5ecd027b88b1c30001be970e.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:17, Level: INFO, Log: agent.86862a0-7f86577bfb-ngvq4_agent.log\r\n{code}[^5ecd027b88b1c30001be9713.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:17, Level: INFO, Log: broker.86862a0-5d8f5984f7-7mcpw_broker.log\r\n{code}[^5ecd027c88b1c30001be975c.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:18, Level: INFO, Log: console-f4877f649-zsnjs_console-proxy.log\r\n{code}[^5ecd027c88b1c30001be976a.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:18, Level: INFO, Log: console-f4877f649-zsnjs_console-server.log\r\n{code}[^5ecd027c88b1c30001be9772.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:18, Level: INFO, Log: enmasse-operator-7cbb477b57-w6fkd_controller.log\r\n{code}[^5ecd027d88b1c30001be9781.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:18, Level: INFO, Log: none-authservice-856d6965c9-ljpr7_none-authservice.log\r\n{code}[^5ecd027d88b1c30001be9786.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:18, Level: INFO, Log: service-broker-5f97f9f464-sk8t5_service-broker.log\r\n{code}[^5ecd027d88b1c30001be9792.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:19, Level: INFO, Log: standard-authservice-557fcf8964-kndjg_keycloak.log\r\n{code}[^5ecd027d88b1c30001be97a1.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:19, Level: INFO, Log: docker-registry-1-q6tq8_registry.log\r\n{code}[^5ecd027d88b1c30001be97af.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:19, Level: INFO, Log: persistent-volume-setup-shlks_setup-persistent-volumes.log\r\n{code}[^5ecd027d88b1c30001be97b9.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:19, Level: INFO, Log: router-1-znd98_router.log\r\n{code}[^5ecd027d88b1c30001be97c4.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:19, Level: INFO, Log: describe_pods.enmasse-infra.txt\r\n{code}[^5ecd027d88b1c30001be97cf.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:19, Level: INFO, Log: events.enmasse-infra.txt\r\n{code}[^5ecd027d88b1c30001be97d6.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:19, Level: INFO, Log: configmaps.enmasse-infra.yaml\r\n{code}[^5ecd027d88b1c30001be97dd.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:19, Level: INFO, Log: secrets.enmasse-infra.yaml\r\n{code}[^5ecd027e88b1c30001be97e5.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:19, Level: INFO, Log: pvcs.enmasse-infra.txt\r\n{code}[^5ecd027e88b1c30001be97ed.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:19, Level: INFO, Log: deployments.enmasse-infra.yml\r\n{code}[^5ecd027e88b1c30001be97f6.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:19, Level: INFO, Log: statefulsets.enmasse-infra.yml\r\n{code}[^5ecd027e88b1c30001be97fe.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:19, Level: INFO, Log: describe_pods.systemtests-selenium.txt\r\n{code}[^5ecd027e88b1c30001be9806.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:20, Level: INFO, Log: events.systemtests-selenium.txt\r\n{code}[^5ecd027e88b1c30001be980b.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:20, Level: INFO, Log: configmaps.systemtests-selenium.yaml\r\n{code}[^5ecd027e88b1c30001be9811.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:20, Level: INFO, Log: secrets.systemtests-selenium.yaml\r\n{code}[^5ecd027e88b1c30001be9817.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:20, Level: INFO, Log: pvcs.systemtests-selenium.txt\r\n{code}[^5ecd027e88b1c30001be981d.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:20, Level: INFO, Log: deployments.systemtests-selenium.yml\r\n{code}[^5ecd027e88b1c30001be9824.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:20, Level: INFO, Log: statefulsets.systemtests-selenium.yml\r\n{code}[^5ecd027e88b1c30001be982c.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:20, Level: INFO, Log: describe_pods.default.txt\r\n{code}[^5ecd027e88b1c30001be983c.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:20, Level: INFO, Log: events.default.txt\r\n{code}[^5ecd027e88b1c30001be9841.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:20, Level: INFO, Log: configmaps.default.yaml\r\n{code}[^5ecd027e88b1c30001be9844.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:20, Level: INFO, Log: secrets.default.yaml\r\n{code}[^5ecd027e88b1c30001be9847.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:20, Level: INFO, Log: pvcs.default.txt\r\n{code}[^5ecd027e88b1c30001be984a.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:20, Level: INFO, Log: deployments.default.yml\r\n{code}[^5ecd027e88b1c30001be984c.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:20, Level: INFO, Log: statefulsets.default.yml\r\n{code}[^5ecd027e88b1c30001be984f.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:20, Level: INFO, Log: describe_addressspaces.txt\r\n{code}[^5ecd027f88b1c30001be9852.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:20, Level: INFO, Log: describe_addresses.txt\r\n{code}[^5ecd027f88b1c30001be9855.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:20, Level: INFO, Log: addressspaces.yml\r\n{code}[^5ecd027f88b1c30001be9858.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:20, Level: INFO, Log: addresses.yml\r\n{code}[^5ecd027f88b1c30001be985b.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:20, Level: INFO, Log: users.yml\r\n{code}[^5ecd027f88b1c30001be985e.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:21, Level: INFO, Log: pvs.txt\r\n{code}[^5ecd027f88b1c30001be9861.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:21, Level: INFO, Log: storageclass.yml\r\n{code}[^5ecd027f88b1c30001be9864.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:21, Level: INFO, Log: routes.yml\r\n{code}[^5ecd027f88b1c30001be9867.bin]\\\\\\\\ {code} Time: 05/26/2020 11:50:21, Level: INFO, Log: events.txt\r\n{code}[^5ecd027f88b1c30001be9869.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:21, Level: INFO, Log: describe_nodes.txt\r\n{code}[^5ecd027f88b1c30001be986c.txt]\\\\\\\\ {code} Time: 05/26/2020 11:50:21, Level: INFO, Log: done.txt\r\n{code}[^5ecd027f88b1c30001be986f.txt]\\\\\\\\ {panel}\r\n",
    "startTime": "2020/05/27 3:06 AM",
    "endTime": "2020/05/28 8:43 AM",
    "assignee": "jreimann-2",
    "estimateNormalTime": 1.2340277777777777
  },
  {
    "id": 12947745,
    "code": "ENTMQMAAS-2129",
    "name": "Example iot-config-k8s is not allign with documentation",
    "description": "Iot-config-k8s is configuring infinispan device registry but this device registry is not deployed if user follow docs. Following docs there is postgres device reg deployed.",
    "startTime": "2020/05/28 6:26 AM",
    "endTime": "",
    "assignee": "dejanbosanac",
    "estimateNormalTime": null
  },
  {
    "id": 12947749,
    "code": "ENTMQMAAS-2130",
    "name": "Token auth is not working on kubernetes",
    "description": "Token probably hasn't got right permissions and there is no possibility to authenticate with that token to device registry.",
    "startTime": "2020/05/28 6:29 AM",
    "endTime": "2020/07/29 4:18 AM",
    "assignee": "dejanbosanac",
    "estimateNormalTime": 61.90902777777777
  },
  {
    "id": 12947876,
    "code": "ENTMQMAAS-2131",
    "name": "Upgrade Infinispan to 11.x",
    "description": "To my understanding RHDG 7 (Infinispan 9.x) is no longer under standard support. In the meantime Infinispan 10 and 11 are released, as well as RHDG 8.\r\n\r\nSo we need to switch to some version after 9.x.",
    "startTime": "2020/05/28 7:48 AM",
    "endTime": "2020/07/29 4:08 AM",
    "assignee": "jreimann-2",
    "estimateNormalTime": 61.84722222222222
  },
  {
    "id": 12948972,
    "code": "ENTMQMAAS-2150",
    "name": "MonitorTest sporadic failure - query enmasse_addresses_not_ready_total unexpected value",
    "description": "\r\nh3.*Back link to Report Portal:*\r\n - [Link to defect|https://reportportal-amq-online.cloud.paas.psi.redhat.com/#enmasse/launches/all%7Cpage.page=1&page.size=50&page.sort=start_time/5ed462027e98290001c59ef7%7Cpage.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:c875b5229d8771641081749cf767a775?page.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:c875b5229d8771641081749cf767a775&log.item=5ed461e87e98290001c59daa]\r\n\r\nh3.*Test execution log:*\r\n{panel:title=Test execution log|borderStyle=solid|borderColor=#ccc|titleColor=#34302D|titleBGColor=#6DB33F}{code} Time: 06/01/2020 02:03:23, Level: INFO, Log: persistent-volume-setup-rzfq9_setup-persistent-volumes.log\r\n{code}[^5ed461ec7e98290001c59e05.bin]\\\\\\\\ {code} Time: 06/01/2020 02:03:23, Level: INFO, Log: recycler-for-pv0006_pv-recycler.log\r\n{code}[^5ed461ec7e98290001c59e0a.bin]\\\\\\\\ {code} Time: 06/01/2020 02:03:24, Level: INFO, Log: recycler-for-pv0015_pv-recycler.log\r\n{code}[^5ed461ec7e98290001c59e0f.bin]\\\\\\\\ {code} Time: 06/01/2020 02:03:24, Level: INFO, Log: recycler-for-pv0018_pv-recycler.log\r\n{code}[^5ed461ec7e98290001c59e12.bin]\\\\\\\\ {code} Time: 06/01/2020 02:03:24, Level: INFO, Log: recycler-for-pv0024_pv-recycler.log\r\n{code}[^5ed461ed7e98290001c59e14.bin]\\\\\\\\ {code} Time: 06/01/2020 02:03:24, Level: INFO, Log: recycler-for-pv0028_pv-recycler.log\r\n{code}[^5ed461ed7e98290001c59e16.bin]\\\\\\\\ {code} Time: 06/01/2020 02:03:24, Level: INFO, Log: recycler-for-pv0046_pv-recycler.log\r\n{code}[^5ed461ed7e98290001c59e18.bin]\\\\\\\\ {code} Time: 06/01/2020 02:03:24, Level: INFO, Log: recycler-for-pv0049_pv-recycler.log\r\n{code}[^5ed461ed7e98290001c59e1a.bin]\\\\\\\\ {code} Time: 06/01/2020 02:03:24, Level: INFO, Log: recycler-for-pv0052_pv-recycler.log\r\n{code}[^5ed461ed7e98290001c59e1c.bin]\\\\\\\\ {code} Time: 06/01/2020 02:03:25, Level: INFO, Log: recycler-for-pv0065_pv-recycler.log\r\n{code}[^5ed461ed7e98290001c59e1e.bin]\\\\\\\\ {code} Time: 06/01/2020 02:03:25, Level: INFO, Log: recycler-for-pv0068_pv-recycler.log\r\n{code}[^5ed461ed7e98290001c59e20.bin]\\\\\\\\ {code} Time: 06/01/2020 02:03:25, Level: INFO, Log: recycler-for-pv0072_pv-recycler.log\r\n{code}[^5ed461ee7e98290001c59e22.bin]\\\\\\\\ {code} Time: 06/01/2020 02:03:25, Level: INFO, Log: recycler-for-pv0074_pv-recycler.log\r\n{code}[^5ed461ee7e98290001c59e24.bin]\\\\\\\\ {code} Time: 06/01/2020 02:03:25, Level: INFO, Log: recycler-for-pv0076_pv-recycler.log\r\n{code}[^5ed461ee7e98290001c59e26.bin]\\\\\\\\ {code} Time: 06/01/2020 02:03:25, Level: INFO, Log: recycler-for-pv0094_pv-recycler.log\r\n{code}[^5ed461ee7e98290001c59e28.bin]\\\\\\\\ {code} Time: 06/01/2020 02:03:26, Level: INFO, Log: recycler-for-pv0097_pv-recycler.log\r\n{code}[^5ed461ee7e98290001c59e2a.bin]\\\\\\\\ {code} Time: 06/01/2020 02:03:26, Level: INFO, Log: recycler-for-pv0098_pv-recycler.log\r\n{code}[^5ed461ee7e98290001c59e2c.bin]\\\\\\\\ {code} Time: 06/01/2020 02:03:26, Level: INFO, Log: router-1-jwtfx_router.log\r\n{code}[^5ed461ee7e98290001c59e2e.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:26, Level: INFO, Log: describe_pods.enmasse-infra.txt\r\n{code}[^5ed461ee7e98290001c59e31.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:26, Level: INFO, Log: events.enmasse-infra.txt\r\n{code}[^5ed461ee7e98290001c59e34.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:26, Level: INFO, Log: configmaps.enmasse-infra.yaml\r\n{code}[^5ed461ee7e98290001c59e38.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:26, Level: INFO, Log: secrets.enmasse-infra.yaml\r\n{code}[^5ed461ee7e98290001c59e3b.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:26, Level: INFO, Log: pvcs.enmasse-infra.txt\r\n{code}[^5ed461ef7e98290001c59e3f.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:26, Level: INFO, Log: deployments.enmasse-infra.yml\r\n{code}[^5ed461ef7e98290001c59e42.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:26, Level: INFO, Log: statefulsets.enmasse-infra.yml\r\n{code}[^5ed461ef7e98290001c59e45.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:26, Level: INFO, Log: describe_pods.enmasse-monitoring.txt\r\n{code}[^5ed461ef7e98290001c59e48.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:26, Level: INFO, Log: events.enmasse-monitoring.txt\r\n{code}[^5ed461ef7e98290001c59e4b.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:27, Level: INFO, Log: configmaps.enmasse-monitoring.yaml\r\n{code}[^5ed461ef7e98290001c59e4e.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:27, Level: INFO, Log: secrets.enmasse-monitoring.yaml\r\n{code}[^5ed461ef7e98290001c59e51.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:27, Level: INFO, Log: pvcs.enmasse-monitoring.txt\r\n{code}[^5ed461ef7e98290001c59e54.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:27, Level: INFO, Log: deployments.enmasse-monitoring.yml\r\n{code}[^5ed461f07e98290001c59e56.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:27, Level: INFO, Log: statefulsets.enmasse-monitoring.yml\r\n{code}[^5ed461f07e98290001c59e59.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:27, Level: INFO, Log: describe_pods.default.txt\r\n{code}[^5ed461f07e98290001c59e5c.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:27, Level: INFO, Log: events.default.txt\r\n{code}[^5ed461f07e98290001c59e5f.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:27, Level: INFO, Log: configmaps.default.yaml\r\n{code}[^5ed461f07e98290001c59e62.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:27, Level: INFO, Log: secrets.default.yaml\r\n{code}[^5ed461f07e98290001c59e65.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:27, Level: INFO, Log: pvcs.default.txt\r\n{code}[^5ed461f07e98290001c59e68.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:27, Level: INFO, Log: deployments.default.yml\r\n{code}[^5ed461f07e98290001c59e6a.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:27, Level: INFO, Log: statefulsets.default.yml\r\n{code}[^5ed461f07e98290001c59e6d.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:28, Level: INFO, Log: describe_addressspaces.txt\r\n{code}[^5ed461f07e98290001c59e70.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:28, Level: INFO, Log: describe_addresses.txt\r\n{code}[^5ed461f07e98290001c59e73.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:28, Level: INFO, Log: addressspaces.yml\r\n{code}[^5ed461f07e98290001c59e76.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:28, Level: INFO, Log: addresses.yml\r\n{code}[^5ed461f07e98290001c59e79.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:28, Level: INFO, Log: users.yml\r\n{code}[^5ed461f17e98290001c59e7c.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:28, Level: INFO, Log: pvs.txt\r\n{code}[^5ed461f17e98290001c59e7f.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:28, Level: INFO, Log: storageclass.yml\r\n{code}[^5ed461f17e98290001c59e82.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:28, Level: INFO, Log: routes.yml\r\n{code}[^5ed461f17e98290001c59e85.bin]\\\\\\\\ {code} Time: 06/01/2020 02:03:28, Level: INFO, Log: events.txt\r\n{code}[^5ed461f17e98290001c59e87.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:28, Level: INFO, Log: describe_nodes.txt\r\n{code}[^5ed461f17e98290001c59e8b.txt]\\\\\\\\ {code} Time: 06/01/2020 02:03:28, Level: INFO, Log: done.txt\r\n{code}[^5ed461f17e98290001c59e8e.txt]\\\\\\\\ {panel}\r\n",
    "startTime": "2020/06/01 4:10 AM",
    "endTime": "2020/06/24 7:11 AM",
    "assignee": "rshelly",
    "estimateNormalTime": 23.125694444444445
  },
  {
    "id": 12949076,
    "code": "ENTMQMAAS-2154",
    "name": "Unable to install monitoring on ocp4 if enmasse is installed via OLM",
    "description": "h3.*Back link to Report Portal:*\r\n - [Link to defect|https://reportportal-amq-online.cloud.paas.psi.redhat.com/#enmasse/launches/all%7Cpage.page=1&page.size=50&page.sort=start_time/5ed4c54a7e98290001c5cae9%7Cpage.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:011abe807e3b372c2c6a3e940559f0c3?page.page=1&page.size=50&page.sort=start_time&filter.eq.has_childs=false&filter.eq.uniqueId=auto:011abe807e3b372c2c6a3e940559f0c3&log.item=5ed4c4e67e98290001c5bf0f]\r\n\r\nh3.*Test execution log:*\r\n{panel:title=Test execution log|borderStyle=solid|borderColor=#ccc|titleColor=#34302D|titleBGColor=#6DB33F}{code} Time: 06/01/2020 09:05:48, Level: INFO, Log: secrets.systemtests-infinispan.yaml\r\n{code}[^5ed4c4ec7e98290001c5bfac.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:48, Level: INFO, Log: pvcs.systemtests-infinispan.txt\r\n{code}[^5ed4c4ec7e98290001c5bfaf.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:48, Level: INFO, Log: deployments.systemtests-infinispan.yml\r\n{code}[^5ed4c4ec7e98290001c5bfb2.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:48, Level: INFO, Log: statefulsets.systemtests-infinispan.yml\r\n{code}[^5ed4c4ec7e98290001c5bfb5.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:48, Level: INFO, Log: describe_pods.systemtests-postgresql.txt\r\n{code}[^5ed4c4ec7e98290001c5bfb8.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:48, Level: INFO, Log: events.systemtests-postgresql.txt\r\n{code}[^5ed4c4ec7e98290001c5bfbb.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:48, Level: INFO, Log: configmaps.systemtests-postgresql.yaml\r\n{code}[^5ed4c4ec7e98290001c5bfbe.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:49, Level: INFO, Log: secrets.systemtests-postgresql.yaml\r\n{code}[^5ed4c4ec7e98290001c5bfc1.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:49, Level: INFO, Log: pvcs.systemtests-postgresql.txt\r\n{code}[^5ed4c4ec7e98290001c5bfc4.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:49, Level: INFO, Log: deployments.systemtests-postgresql.yml\r\n{code}[^5ed4c4ed7e98290001c5bfc7.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:49, Level: INFO, Log: statefulsets.systemtests-postgresql.yml\r\n{code}[^5ed4c4ed7e98290001c5bfca.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:49, Level: INFO, Log: describe_pods.systemtests-h2.txt\r\n{code}[^5ed4c4ed7e98290001c5bfcd.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:49, Level: INFO, Log: events.systemtests-h2.txt\r\n{code}[^5ed4c4ed7e98290001c5bfcf.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:49, Level: INFO, Log: configmaps.systemtests-h2.yaml\r\n{code}[^5ed4c4ed7e98290001c5bfd2.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:49, Level: INFO, Log: secrets.systemtests-h2.yaml\r\n{code}[^5ed4c4ed7e98290001c5bfd5.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:49, Level: INFO, Log: pvcs.systemtests-h2.txt\r\n{code}[^5ed4c4ed7e98290001c5bfd8.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:49, Level: INFO, Log: deployments.systemtests-h2.yml\r\n{code}[^5ed4c4ed7e98290001c5bfda.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:50, Level: INFO, Log: statefulsets.systemtests-h2.yml\r\n{code}[^5ed4c4ed7e98290001c5bfdd.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:50, Level: INFO, Log: describe_pods.enmasse-monitoring.txt\r\n{code}[^5ed4c4ed7e98290001c5bfe0.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:50, Level: INFO, Log: events.enmasse-monitoring.txt\r\n{code}[^5ed4c4ee7e98290001c5bfe2.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:50, Level: INFO, Log: configmaps.enmasse-monitoring.yaml\r\n{code}[^5ed4c4ee7e98290001c5bfe4.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:50, Level: INFO, Log: secrets.enmasse-monitoring.yaml\r\n{code}[^5ed4c4ee7e98290001c5bfe7.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:50, Level: INFO, Log: pvcs.enmasse-monitoring.txt\r\n{code}[^5ed4c4ee7e98290001c5bfea.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:50, Level: INFO, Log: deployments.enmasse-monitoring.yml\r\n{code}[^5ed4c4ee7e98290001c5bfec.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:50, Level: INFO, Log: statefulsets.enmasse-monitoring.yml\r\n{code}[^5ed4c4ee7e98290001c5bfef.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:50, Level: INFO, Log: describe_pods.openshift-authentication.txt\r\n{code}[^5ed4c4ee7e98290001c5bff2.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:50, Level: INFO, Log: events.openshift-authentication.txt\r\n{code}[^5ed4c4ee7e98290001c5bff5.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:51, Level: INFO, Log: configmaps.openshift-authentication.yaml\r\n{code}[^5ed4c4ee7e98290001c5bff8.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:51, Level: INFO, Log: secrets.openshift-authentication.yaml\r\n{code}[^5ed4c4ef7e98290001c5bffb.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:51, Level: INFO, Log: pvcs.openshift-authentication.txt\r\n{code}[^5ed4c4ef7e98290001c5c001.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:51, Level: INFO, Log: deployments.openshift-authentication.yml\r\n{code}[^5ed4c4ef7e98290001c5c003.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:51, Level: INFO, Log: describe_pods.default.txt\r\n{code}[^5ed4c4ef7e98290001c5c006.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:51, Level: INFO, Log: statefulsets.openshift-authentication.yml\r\n{code}[^5ed4c4ef7e98290001c5c008.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:51, Level: INFO, Log: events.default.txt\r\n{code}[^5ed4c4ef7e98290001c5c00b.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:51, Level: INFO, Log: configmaps.default.yaml\r\n{code}[^5ed4c4ef7e98290001c5c00e.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:51, Level: INFO, Log: secrets.default.yaml\r\n{code}[^5ed4c4ef7e98290001c5c011.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:51, Level: INFO, Log: pvcs.default.txt\r\n{code}[^5ed4c4ef7e98290001c5c014.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:52, Level: INFO, Log: deployments.default.yml\r\n{code}[^5ed4c4ef7e98290001c5c016.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:52, Level: INFO, Log: statefulsets.default.yml\r\n{code}[^5ed4c4ef7e98290001c5c019.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:52, Level: INFO, Log: describe_addressspaces.txt\r\n{code}[^5ed4c4f07e98290001c5c01c.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:52, Level: INFO, Log: describe_addresses.txt\r\n{code}[^5ed4c4f07e98290001c5c01e.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:52, Level: INFO, Log: addressspaces.yml\r\n{code}[^5ed4c4f07e98290001c5c020.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:52, Level: INFO, Log: addresses.yml\r\n{code}[^5ed4c4f07e98290001c5c023.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:52, Level: INFO, Log: users.yml\r\n{code}[^5ed4c4f17e98290001c5c026.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:53, Level: INFO, Log: pvs.txt\r\n{code}[^5ed4c4f17e98290001c5c029.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:53, Level: INFO, Log: storageclass.yml\r\n{code}[^5ed4c4f17e98290001c5c02c.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:53, Level: INFO, Log: routes.yml\r\n{code}[^5ed4c4f17e98290001c5c02f.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:53, Level: INFO, Log: events.txt\r\n{code}[^5ed4c4f17e98290001c5c032.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:54, Level: INFO, Log: describe_nodes.txt\r\n{code}[^5ed4c4f17e98290001c5c038.txt]\\\\\\\\ {code} Time: 06/01/2020 09:05:54, Level: INFO, Log: done.txt\r\n{code}[^5ed4c4f17e98290001c5c03b.txt]\\\\\\\\ {panel}\r\n",
    "startTime": "2020/06/01 5:12 AM",
    "endTime": "2020/06/24 5:20 AM",
    "assignee": "rshelly",
    "estimateNormalTime": 23.005555555555556
  },
  {
    "id": 12950357,
    "code": "ENTMQMAAS-2171",
    "name": "Rename IoTConfig to IoTInfrastructure",
    "description": "As discussed in the design document, we rename IoTConfig to IoTInfrastructure",
    "startTime": "2020/06/03 10:52 AM",
    "endTime": "",
    "assignee": "jreimann-2",
    "estimateNormalTime": null
  },
  {
    "id": 12950356,
    "code": "ENTMQMAAS-2170",
    "name": "Basic migration to shared infrastructure",
    "description": "Do the basic migration:\r\n* Drop all references to address space\r\n* Make use of new resource type for Address, MessagingInfrastructure, MessagingUser\r\n",
    "startTime": "2020/06/03 10:52 AM",
    "endTime": "2020/07/09 10:35 AM",
    "assignee": "jreimann-2",
    "estimateNormalTime": 35.988194444444446
  },
  {
    "id": 12953565,
    "code": "ENTMQMAAS-2214",
    "name": "[systemtest] add ability to check errors in pod logs during tests",
    "description": "",
    "startTime": "2020/06/11 12:06 PM",
    "endTime": "2020/09/21 5:47 AM",
    "assignee": "zschwarz",
    "estimateNormalTime": 101.73680555555556
  },
  {
    "id": 12953960,
    "code": "ENTMQMAAS-2222",
    "name": "Upgrade to Hono 1.2.3",
    "description": "",
    "startTime": "2020/06/15 6:06 AM",
    "endTime": "2020/06/17 4:45 AM",
    "assignee": "dejanbosanac",
    "estimateNormalTime": 1.9437499999999999
  },
  {
    "id": 12955010,
    "code": "ENTMQMAAS-2237",
    "name": "[#4755] : Change alert severity levels",
    "description": "Created from upstream issue [#4755|https://github.com/EnMasseProject/enmasse/issues/4755].",
    "startTime": "2020/06/17 5:18 AM",
    "endTime": "2020/06/17 6:57 AM",
    "assignee": "rshelly",
    "estimateNormalTime": 0.06874999999999999
  },
  {
    "id": 12960819,
    "code": "ENTMQMAAS-2329",
    "name": "Hono - Add Management API operation to delete all devices matching a filter",
    "description": "",
    "startTime": "2020/06/30 10:15 AM",
    "endTime": "2024/02/05 9:53 AM",
    "assignee": "jbtrystram",
    "estimateNormalTime": 1314.9847222222222
  },
  {
    "id": 12960820,
    "code": "ENTMQMAAS-2330",
    "name": "Create graphQL query to disable multiples iot projects",
    "description": "",
    "startTime": "2020/06/30 10:15 AM",
    "endTime": "2020/07/01 10:21 AM",
    "assignee": "jbtrystram",
    "estimateNormalTime": 1.0041666666666667
  },
  {
    "id": 12960647,
    "code": "ENTMQMAAS-2317",
    "name": "Update iot console GraphQL types to reflect shared-infra changes",
    "description": "",
    "startTime": "2020/06/30 7:49 AM",
    "endTime": "2020/07/09 5:08 AM",
    "assignee": "jbtrystram",
    "estimateNormalTime": 8.888194444444444
  },
  {
    "id": 12960648,
    "code": "ENTMQMAAS-2318",
    "name": "Add mock stats for IOT entities in mock server",
    "description": "",
    "startTime": "2020/06/30 7:50 AM",
    "endTime": "2024/02/05 9:53 AM",
    "assignee": "jbtrystram",
    "estimateNormalTime": 1315.0854166666666
  },
  {
    "id": 12960653,
    "code": "ENTMQMAAS-2319",
    "name": "Add graphQL query to delete multiple iot projects",
    "description": "",
    "startTime": "2020/06/30 7:56 AM",
    "endTime": "2020/07/01 10:05 AM",
    "assignee": "jbtrystram",
    "estimateNormalTime": 1.0895833333333333
  },
  {
    "id": 12960657,
    "code": "ENTMQMAAS-2320",
    "name": "Add graphQL querry to delete multiples iot devices",
    "description": "",
    "startTime": "2020/06/30 7:57 AM",
    "endTime": "2020/07/01 10:40 AM",
    "assignee": "jbtrystram",
    "estimateNormalTime": 1.1131944444444444
  },
  {
    "id": 12960660,
    "code": "ENTMQMAAS-2322",
    "name": "Add UUID for credentials entries in mock servers",
    "description": "",
    "startTime": "2020/06/30 7:58 AM",
    "endTime": "2024/02/05 9:53 AM",
    "assignee": "jbtrystram",
    "estimateNormalTime": 1315.079861111111
  },
  {
    "id": 12960658,
    "code": "ENTMQMAAS-2321",
    "name": "Add status fields for Iot devices in mock server",
    "description": "",
    "startTime": "2020/06/30 7:58 AM",
    "endTime": "2020/06/30 10:38 AM",
    "assignee": "jbtrystram",
    "estimateNormalTime": 0.1111111111111111
  },
  {
    "id": 12960662,
    "code": "ENTMQMAAS-2323",
    "name": "Add graphQL query to generate command to create iot project",
    "description": "",
    "startTime": "2020/06/30 7:59 AM",
    "endTime": "2020/07/09 5:08 AM",
    "assignee": "jbtrystram",
    "estimateNormalTime": 8.88125
  },
  {
    "id": 12960663,
    "code": "ENTMQMAAS-2324",
    "name": "Boolean values in filters don't work for iot device + add examples in README",
    "description": "",
    "startTime": "2020/06/30 8:00 AM",
    "endTime": "2020/07/09 5:07 AM",
    "assignee": "jbtrystram",
    "estimateNormalTime": 8.879861111111111
  },
  {
    "id": 12960668,
    "code": "ENTMQMAAS-2325",
    "name": "Add user token in whoami console querry",
    "description": "",
    "startTime": "2020/06/30 8:01 AM",
    "endTime": "2024/02/05 9:53 AM",
    "assignee": "jbtrystram",
    "estimateNormalTime": 1315.0777777777778
  },
  {
    "id": 12960671,
    "code": "ENTMQMAAS-2326",
    "name": "Mock server should return an array of addresses fro command",
    "description": "",
    "startTime": "2020/06/30 8:02 AM",
    "endTime": "2020/06/30 10:23 AM",
    "assignee": "jbtrystram",
    "estimateNormalTime": 0.09791666666666667
  },
  {
    "id": 12961134,
    "code": "ENTMQMAAS-2333",
    "name": "[#4859] : Use OpenShift4 oauth-proxy when running on OpenShift4",
    "description": "Created from upstream issue [#4859|https://github.com/EnMasseProject/enmasse/issues/4859]. Fix version: 1.5.2",
    "startTime": "2020/07/01 3:42 AM",
    "endTime": "2020/07/15 3:44 AM",
    "assignee": "buschv",
    "estimateNormalTime": 14.00138888888889
  },
  {
    "id": 12961392,
    "code": "ENTMQMAAS-2338",
    "name": "Console-IoT-UI-Edit in JSON under certificates not working",
    "description": "",
    "startTime": "2020/07/01 7:13 AM",
    "endTime": "2020/07/31 8:22 AM",
    "assignee": "suyash-naithani",
    "estimateNormalTime": 30.047916666666666
  },
  {
    "id": 12961821,
    "code": "ENTMQMAAS-2342",
    "name": "Add cross console navigation for RHMI solution explorer",
    "description": "Add cross console navigation for RHMI solution explorer",
    "startTime": "2020/07/01 8:58 PM",
    "endTime": "2020/07/22 9:53 AM",
    "assignee": "buschv",
    "estimateNormalTime": 20.538194444444446
  },
  {
    "id": 12965028,
    "code": "ENTMQMAAS-2355",
    "name": "[UXD] V2.0 UI Changes for Endpoint",
    "description": "Console 1.0 Proposal - [https://github.com/EnMasseProject/enmasse/pull/4855/files#diff-b3a53d5b57ea3309633b77a4c0603931]\r\n\r\nOverview of Shared Infra - [https://github.com/lulf/enmasse/blob/1.0-getting-started/documentation/design/proposals/shared-infrastructure.adoc]",
    "startTime": "2020/07/07 4:24 AM",
    "endTime": "2020/08/19 6:03 AM",
    "assignee": "HelloJune",
    "estimateNormalTime": 43.06875
  },
  {
    "id": 12966534,
    "code": "ENTMQMAAS-2364",
    "name": "Create the backend service for the iot console",
    "description": "",
    "startTime": "2020/07/09 5:25 AM",
    "endTime": "2024/02/05 9:54 AM",
    "assignee": "jbtrystram",
    "estimateNormalTime": 1306.1868055555556
  },
  {
    "id": 12966539,
    "code": "ENTMQMAAS-2365",
    "name": "iot console metrics",
    "description": "Design metrics needed for the iot console and scrap them from the enmasse prometheus instance.",
    "startTime": "2020/07/09 5:27 AM",
    "endTime": "2024/02/05 9:54 AM",
    "assignee": "jbtrystram",
    "estimateNormalTime": 1306.1854166666667
  },
  {
    "id": 12968508,
    "code": "ENTMQMAAS-2413",
    "name": "[UXD] UI changes for IoT - AMQ Online V2.0",
    "description": "Based on the feedback collected from the Engineering team,  here are changes needed for the IoT: \r\n\r\n[[Doc of UI changes for IoT|[https://docs.google.com/document/d/1n3Ecc0ZmUA4IY3Wp5QWOTqklYBPLjI7w8pel_PDwaU8/edit#]]\r\n # Project detail page: The interaction of a Pending/Configuring project. How does the user find out the issue of these statuses and how to support them to fix the issue. \r\n # Add a device_Credentials: the current design is not friendly to new users that are not familiar with the mechanism of this product. Need to revisit the flow.\r\n # Notification drawers: Revisit the existing console and new design to make sure the design are consistent so the Front end is easy to implement.",
    "startTime": "2020/07/13 4:49 AM",
    "endTime": "2020/08/30 11:47 PM",
    "assignee": "yanzredhat",
    "estimateNormalTime": 48.79027777777778
  },
  {
    "id": 12971593,
    "code": "ENTMQMAAS-2422",
    "name": "Console-IoT-UI - Add meaningful ID to address module",
    "description": "Add meaningful ID to address module components",
    "startTime": "2020/07/15 4:00 AM",
    "endTime": "2020/07/17 8:35 AM",
    "assignee": "suyash-naithani",
    "estimateNormalTime": 2.1909722222222223
  },
  {
    "id": 12971604,
    "code": "ENTMQMAAS-2423",
    "name": "Console-IoT-UI- Add meaningful ID to address-detail module",
    "description": "Add meaningful ID to address-detail module components",
    "startTime": "2020/07/15 4:24 AM",
    "endTime": "2020/07/17 8:36 AM",
    "assignee": "suyash-naithani",
    "estimateNormalTime": 2.1750000000000003
  },
  {
    "id": 12971607,
    "code": "ENTMQMAAS-2424",
    "name": "Console-IoT-UI - Add meaningful ID to connections module",
    "description": "Add meaningful ID to connections module components",
    "startTime": "2020/07/15 4:28 AM",
    "endTime": "2020/07/17 8:35 AM",
    "assignee": "suyash-naithani",
    "estimateNormalTime": 2.171527777777778
  },
  {
    "id": 12971609,
    "code": "ENTMQMAAS-2425",
    "name": "Console-IoT-UI - Add meaningful ID to Endpoint module",
    "description": "Add meaningful ID to Endpoint module components",
    "startTime": "2020/07/15 4:30 AM",
    "endTime": "2020/07/17 8:35 AM",
    "assignee": "suyash-naithani",
    "estimateNormalTime": 2.170138888888889
  },
  {
    "id": 12971610,
    "code": "ENTMQMAAS-2426",
    "name": "Console-IoT-UI - Add meaningful ID to IoT Certificates module",
    "description": "Add meaningful ID to IoT Certificates module components",
    "startTime": "2020/07/15 4:31 AM",
    "endTime": "2020/07/17 8:36 AM",
    "assignee": "suyash-naithani",
    "estimateNormalTime": 2.170138888888889
  },
  {
    "id": 12971612,
    "code": "ENTMQMAAS-2427",
    "name": "Console-IoT-UI - Add meaningful ID to IoT device detail module",
    "description": "Add meaningful ID to IoT device detail module components",
    "startTime": "2020/07/15 4:32 AM",
    "endTime": "2020/07/27 4:22 AM",
    "assignee": "suyash-naithani",
    "estimateNormalTime": 11.993055555555555
  },
  {
    "id": 12971614,
    "code": "ENTMQMAAS-2428",
    "name": "Console-IoT-UI - Add meaningful ID to IoT project detail module",
    "description": "Add meaningful ID to IoT project detail module components",
    "startTime": "2020/07/15 4:32 AM",
    "endTime": "2020/07/27 4:22 AM",
    "assignee": "suyash-naithani",
    "estimateNormalTime": 11.993055555555555
  },
  {
    "id": 12971615,
    "code": "ENTMQMAAS-2429",
    "name": "Console-IoT-UI - Add meaningful ID to connection details module",
    "description": "Add meaningful ID to connection details module components",
    "startTime": "2020/07/15 4:33 AM",
    "endTime": "2020/07/27 4:22 AM",
    "assignee": "suyash-naithani",
    "estimateNormalTime": 11.99236111111111
  },
  {
    "id": 12971618,
    "code": "ENTMQMAAS-2431",
    "name": "Console-IoT-UI - Add meaningful ID to IoT device module",
    "description": "Add meaningful ID to IoT device module components",
    "startTime": "2020/07/15 4:34 AM",
    "endTime": "2020/07/27 4:22 AM",
    "assignee": "suyash-naithani",
    "estimateNormalTime": 11.991666666666667
  },
  {
    "id": 12971617,
    "code": "ENTMQMAAS-2430",
    "name": "Console-IoT-UI - Add meaningful ID to project module",
    "description": "Add meaningful ID to project module components",
    "startTime": "2020/07/15 4:34 AM",
    "endTime": "2020/07/27 4:23 AM",
    "assignee": "suyash-naithani",
    "estimateNormalTime": 11.99236111111111
  },
  {
    "id": 12971619,
    "code": "ENTMQMAAS-2432",
    "name": "Console-IoT-UI - Add meaningful ID to address space module",
    "description": "Add meaningful ID to address space module components",
    "startTime": "2020/07/15 4:35 AM",
    "endTime": "2020/07/22 7:15 AM",
    "assignee": "suyash-naithani",
    "estimateNormalTime": 7.111111111111111
  },
  {
    "id": 12973217,
    "code": "ENTMQMAAS-2437",
    "name": "[IoT Design] Edit a Device",
    "description": "",
    "startTime": "2020/07/16 11:46 PM",
    "endTime": "2020/07/16 11:53 PM",
    "assignee": "yanzredhat",
    "estimateNormalTime": 0.004861111111111111
  },
  {
    "id": 12973366,
    "code": "ENTMQMAAS-2440",
    "name": "Console-IoT-UI-Fix alignment isuues in add a device modal dialog",
    "description": "Fix alignment issues in Add a device modal",
    "startTime": "2020/07/17 7:51 AM",
    "endTime": "2020/08/05 7:25 AM",
    "assignee": "suyash-naithani",
    "estimateNormalTime": 18.981944444444444
  },
  {
    "id": 12973404,
    "code": "ENTMQMAAS-2442",
    "name": "Console-IoT-UI - Add meaningful ID to components folder",
    "description": "Add meaningful ID to components folder",
    "startTime": "2020/07/17 8:57 AM",
    "endTime": "2020/07/27 4:23 AM",
    "assignee": "suyash-naithani",
    "estimateNormalTime": 9.809722222222222
  },
  {
    "id": 12977008,
    "code": "ENTMQMAAS-2455",
    "name": "Console-IoT-UI- Enable 'View Json format' view in add a device for IoT project",
    "description": "Enable 'View Json format' view in Add device for IoT project",
    "startTime": "2020/07/22 7:22 AM",
    "endTime": "",
    "assignee": "suyash-naithani",
    "estimateNormalTime": null
  },
  {
    "id": 12993799,
    "code": "ENTMQMAAS-2521",
    "name": "[#5130] : Addresses fail to become ready if globalMaxSize is omitted from the infraconfig",
    "description": "Created from upstream issue [#5130|https://github.com/EnMasseProject/enmasse/issues/5130]. Fix version: 1.5.3",
    "startTime": "2020/08/11 1:43 PM",
    "endTime": "2020/10/05 6:37 AM",
    "assignee": "buschv",
    "estimateNormalTime": 54.70416666666667
  },
  {
    "id": 13000889,
    "code": "ENTMQMAAS-2536",
    "name": "Change parent images to use external registry registry.redhat.io/ubi7/ubi:latest",
    "description": "-release tags are deprecated.  And being removed Sept. 30th\r\nUse the equivalent parent image from registry.redhat.io. Dockerfile needs the following update:\r\n- FROM ubi7:7-released\r\n+ FROM registry.redhat.io/ubi7/ubi:latest",
    "startTime": "2020/08/27 10:23 PM",
    "endTime": "2021/01/27 5:28 AM",
    "assignee": "buschv",
    "estimateNormalTime": 152.29513888888889
  },
  {
    "id": 13003173,
    "code": "ENTMQMAAS-2537",
    "name": "[#5183] : Expiry-address and TTL do not work for durable subscriptions",
    "description": "Created from upstream issue [#5183|https://github.com/EnMasseProject/enmasse/issues/5183]. Fix version: 1.6.0",
    "startTime": "2020/09/02 10:02 PM",
    "endTime": "2021/01/27 5:27 AM",
    "assignee": "buschv",
    "estimateNormalTime": 146.30902777777777
  },
  {
    "id": 13192916,
    "code": "ENTMQMAAS-2589",
    "name": "Create job which test operator from index image (CVP, CPAAS)",
    "description": "",
    "startTime": "2020/11/09 7:31 AM",
    "endTime": "2021/03/26 8:56 AM",
    "assignee": "zschwarz",
    "estimateNormalTime": 137.05902777777777
  },
  {
    "id": 13203415,
    "code": "ENTMQMAAS-2624",
    "name": "Identify flaky tests from latest 1.5 and 1.6 runs make list",
    "description": "report portal link: [https://reportportal-amq-online.cloud.paas.psi.redhat.com/ui/]\r\n\r\njenkins: https://maas-jenkins-csb-amq-online.cloud.paas.psi.redhat.com/job/amq-online-downstream/",
    "startTime": "2020/11/24 4:31 AM",
    "endTime": "2021/04/13 10:40 AM",
    "assignee": "zschwarz",
    "estimateNormalTime": 140.25625
  },
  {
    "id": 13203417,
    "code": "ENTMQMAAS-2625",
    "name": "Investigate random issue \\\"no route to host\\\"",
    "description": "see downstream results and investigate no route to host issue and try to fix it in test or cooperate with devs if it is product isue",
    "startTime": "2020/11/24 4:35 AM",
    "endTime": "2021/01/27 5:12 AM",
    "assignee": "rhn-support-jkalinic",
    "estimateNormalTime": 64.02569444444444
  },
  {
    "id": 13203419,
    "code": "ENTMQMAAS-2626",
    "name": "Build new version of systemtests-clients",
    "description": "Build and store new version of systemtests-clients image into enmasse quay.io repository with updated clients. Also try to get never version of java clients. I suggest to build java clients from source and pack it into image\r\n\r\n \r\n\r\nrepo of image -> [https://github.com/EnMasseProject/systemtests-clients-docker-base]\r\n\r\njava repo -> https://github.com/rh-messaging/cli-java",
    "startTime": "2020/11/24 4:38 AM",
    "endTime": "2021/01/04 6:43 AM",
    "assignee": "zschwarz",
    "estimateNormalTime": 41.08680555555556
  },
  {
    "id": 13203421,
    "code": "ENTMQMAAS-2627",
    "name": "Investigate why upstream isolated job takes too much time and build failed",
    "description": "Investigate why isolated job takes too much time and failed for upstream on crc instance -> https://maas-jenkins-csb-amq-online.cloud.paas.psi.redhat.com/job/enmasse-master-folder/job/enmasse-master-isolated-3.11-BUNDLE/",
    "startTime": "2020/11/24 4:40 AM",
    "endTime": "2021/02/06 4:10 AM",
    "assignee": "rhn-support-jkalinic",
    "estimateNormalTime": 73.97916666666667
  },
  {
    "id": 13203438,
    "code": "ENTMQMAAS-2628",
    "name": "Investigate and fix why dowsntream stage and production jobs do not run tests and replace images in templates",
    "description": "investigate in amq-ci repo why stage and prod jobs in release pipelines does not trigger tests and replace images",
    "startTime": "2020/11/24 4:59 AM",
    "endTime": "2021/02/19 3:20 AM",
    "assignee": "rhn-support-jkalinic",
    "estimateNormalTime": 86.93124999999999
  },
  {
    "id": 13224508,
    "code": "ENTMQMAAS-2644",
    "name": "CVP trigger job from iib message and run olm tests",
    "description": "message\r\n\r\n \r\n # \r\n\\\"msg\\\": {\r\n # \r\n    \\\"artifact\\\": {\r\n # \r\n      \\\"advisory_id\\\": \\\"N/A\\\",\r\n # \r\n      \\\"brew_build_tag\\\": \\\"Undefined Brew Tag Name\\\",\r\n # \r\n      \\\"brew_build_target\\\": \\\"Undefined Brew Target Name\\\",\r\n # \r\n      \\\"component\\\": \\\"cvp-teamredhatamq\\\",\r\n # \r\n      \\\"full_name\\\": \\\"Undefined Artifact Image Full Name\\\",\r\n # \r\n      \\\"id\\\": \\\"1442140\\\",\r\n # \r\n      \\\"image_tag\\\": \\\"Undefined Artifact Image Tag\\\",\r\n # \r\n      \\\"issuer\\\": \\\"vbusch\\\",\r\n # \r\n      \\\"name\\\": \\\"Undefined Artifact Image Name\\\",\r\n # \r\n      \\\"namespace\\\": \\\"Undefined Artifact Image Namespace\\\",\r\n # \r\n      \\\"nvr\\\": \\\"amq7-amq-online-1-controller-manager-operator-metadata-container-1.5-66\\\",\r\n # \r\n      \\\"registry_url\\\": \\\"Undefined Artifact Image Registry URL\\\",\r\n # \r\n      \\\"scratch\\\": \\\"false\\\",\r\n # \r\n      \\\"type\\\": \\\"cvp\\\"\r\n # \r\n    },\r\n # \r\n    \\\"ci\\\": {\r\n # \r\n      \\\"doc\\\": \\\"https://docs.engineering.redhat.com/display/CVP/Container+Verification+Pipeline+E2E+Documentation\\\",\r\n # \r\n      \\\"email\\\": \\\"cvp-ops@redhat.com\\\",\r\n # \r\n      \\\"name\\\": \\\"Container Verification Pipeline\\\",\r\n # \r\n      \\\"team\\\": \\\"CVP Development Team\\\",\r\n # \r\n      \\\"url\\\": \\\"https://jenkins0-cvp.cloud.paas.psi.redhat.com/job/cvp-brew-operator-bundle-image-trigger/1745/\\\"\r\n # \r\n    },\r\n # \r\n    \\\"generated_at\\\": \\\"2021-01-04T19:01:35.729140Z\\\",\r\n # \r\n    \\\"pipeline\\\": {\r\n # \r\n      \\\"build\\\": \\\"11\\\",\r\n # \r\n      \\\"id\\\": \\\"5c22e47b-731c-4650-b427-8d722511693e\\\",\r\n # \r\n      \\\"index_image\\\": {\r\n # \r\n        \\\"v4.5\\\": \\\"registry-proxy.engineering.redhat.com/rh-osbs/iib:35719\\\",\r\n # \r\n        \\\"v4.6\\\": \\\"registry-proxy.engineering.redhat.com/rh-osbs/iib:35723\\\",\r\n # \r\n        \\\"v4.7\\\": \\\"registry-proxy.engineering.redhat.com/rh-osbs/iib:35727\\\"\r\n # \r\n      },\r\n # \r\n      \\\"name\\\": \\\"cvp-redhat-operator-bundle-image-validation-test\\\",\r\n # \r\n      \\\"runtime\\\": \\\"1542.19\\\",\r\n # \r\n      \\\"status\\\": \\\"complete\\\"\r\n # \r\n    },\r\n # \r\n    \\\"run\\\": {\r\n # \r\n      \\\"log\\\": \\\"https://jenkins-cvp-5c79a550dd19c77a1590d089.cloud.paas.psi.redhat.com/job/cvp-redhat-operator-bundle-image-validation-test/11/console\\\",\r\n # \r\n      \\\"result_files\\\": [],\r\n # \r\n      \\\"url\\\": \\\"https://jenkins-cvp-5c79a550dd19c77a1590d089.cloud.paas.psi.redhat.com/job/cvp-redhat-operator-bundle-image-validation-test/11/\\\"\r\n # \r\n    },\r\n # \r\n    \\\"timestamp\\\": \\\"2021-01-04T19:01:35.729140Z\\\",\r\n # \r\n    \\\"version\\\": \\\"0.1.0\\\"\r\n # \r\n  }",
    "startTime": "2021/01/05 3:47 AM",
    "endTime": "2021/06/15 7:49 AM",
    "assignee": "rhn-support-jkalinic",
    "estimateNormalTime": 161.16805555555555
  },
  {
    "id": 13224637,
    "code": "ENTMQMAAS-2645",
    "name": "Implement or update olm upgrade tests in testsuite",
    "description": "",
    "startTime": "2021/01/05 6:55 AM",
    "endTime": "2021/07/13 8:18 AM",
    "assignee": "rhn-support-jkalinic",
    "estimateNormalTime": 189.05763888888887
  },
  {
    "id": 13232859,
    "code": "ENTMQMAAS-2653",
    "name": "enmasse-ci refactor common pipelines",
    "description": "Since we migrated to not shared repo, we can move common pipelines into amq-online/src jobs and pipelines and modify paths in DSLs. Also scripts from common should be copied there and we need to change references in pipelines and script where we use scripts from common",
    "startTime": "2021/01/15 7:33 AM",
    "endTime": "2021/02/04 5:46 AM",
    "assignee": "zschwarz",
    "estimateNormalTime": 19.925694444444442
  },
  {
    "id": 13251975,
    "code": "ENTMQMAAS-2664",
    "name": "[#5253] Monitoring does not work on OpenShift >= 4.7",
    "description": "TechPreview User monitoring workload does not work on ocp >= 4.7",
    "startTime": "2021/02/02 9:10 AM",
    "endTime": "2021/02/22 6:58 AM",
    "assignee": "rshelly",
    "estimateNormalTime": 19.908333333333335
  },
  {
    "id": 13268826,
    "code": "ENTMQMAAS-2671",
    "name": "[System tests] Monitoring regression on 3.11",
    "description": "",
    "startTime": "2021/02/22 5:45 AM",
    "endTime": "2021/03/08 6:08 AM",
    "assignee": "rshelly",
    "estimateNormalTime": 14.015972222222222
  },
  {
    "id": 13279357,
    "code": "ENTMQMAAS-2674",
    "name": "[#5272] Support router configuration maxMessageSize",
    "description": "Add this field to the router policy so that is configured on the router.",
    "startTime": "2021/03/03 5:00 AM",
    "endTime": "2021/03/18 6:30 AM",
    "assignee": "rhn-support-jkalinic",
    "estimateNormalTime": 15.0625
  },
  {
    "id": 13280664,
    "code": "ENTMQMAAS-2676",
    "name": "Modify documentation - use migrated jenkins url",
    "description": "modify [https://docs.engineering.redhat.com/display/ENTMQMAAS/AMQ+Online+QE+Guide]\r\n\r\nand [https://docs.engineering.redhat.com/display/ENTMQMAAS/AMQ+Online+CI] \r\n\r\n \r\n\r\nold version link: [https://maas-jenkins-csb-amq-online.cloud.paas.psi.redhat.com/]\r\n\r\nmigrated new version: [https://maas-jenkins-csb-amq-online.apps.ocp4.prod.psi.redhat.com/]\r\n\r\n ",
    "startTime": "2021/03/04 3:37 AM",
    "endTime": "2021/03/05 2:56 AM",
    "assignee": "rhn-support-jkalinic",
    "estimateNormalTime": 0.9715277777777778
  },
  {
    "id": 13297785,
    "code": "ENTMQMAAS-2702",
    "name": "[CI] investigate why upstream jobs stopped triggering every day",
    "description": "fyi [~zschwarz]",
    "startTime": "2021/03/23 6:35 AM",
    "endTime": "2021/04/23 11:02 AM",
    "assignee": "rhn-support-jkalinic",
    "estimateNormalTime": 31.18541666666667
  },
  {
    "id": 13297789,
    "code": "ENTMQMAAS-2703",
    "name": "Onboard AMQ online 1.7 to ocp4 LP testing",
    "description": "Write task to onborad AMQ Online 1.7 to OCP LP testing and disable Online 4.5.\r\n\r\nLP interop project https://issues.redhat.com/projects/LPINTEROP/issues/LPINTEROP-1605?filter=allopenissues",
    "startTime": "2021/03/23 6:37 AM",
    "endTime": "2021/06/07 10:49 AM",
    "assignee": "rhn-support-jkalinic",
    "estimateNormalTime": 76.175
  },
  {
    "id": 13319722,
    "code": "ENTMQMAAS-2707",
    "name": "Migrate from old cachet plugin to statuspage",
    "description": "Strimzi referent PR: [https://gitlab.cee.redhat.com/strimzi/strimzi-ci/-/merge_requests/135]\r\n\r\n \r\n\r\nHello, I am letting you know that we are ready for users to migrate to \r\n Cachet replacement known as [statuspage.io|http://statuspage.io/][0]. This is a new \r\n implementation of Resource Ready best practice[2], that is going to \r\n replace the old one.\r\n \r\n We are working with EXD on a timeline to terminate Cachet server \r\n (running on [https://internal.status.redhat.com/]), but that is not yet \r\n finalized. For now, they have asked us to migrate over as soon as we can.\r\n \r\n Please, make an effort to migrate your instance and jobs to \r\n StatusPage[0]. Feel free to get back to me in case of problems or questions.\r\n \r\n Thank you!\r\n \r\n [0] \r\n [https://docs.engineering.redhat.com/display/CentralCI/Jenkins+Gating+with+StatusPage.io]\r\n [1] [https://docs.engineering.redhat.com/display/QEARCH/Resource+Ready]{color:#888888}\r\n{color}",
    "startTime": "2021/04/13 12:34 PM",
    "endTime": "2022/11/01 12:24 PM",
    "assignee": "rhn-support-jkalinic",
    "estimateNormalTime": 566.9930555555555
  },
  {
    "id": 13331712,
    "code": "ENTMQMAAS-2709",
    "name": "Cleanup aws and openstack dead clusters",
    "description": "Cleanup after non-deleted clusters and machines on openstack and aws.",
    "startTime": "2021/04/23 2:22 PM",
    "endTime": "2021/04/23 2:24 PM",
    "assignee": "rhn-support-jkalinic",
    "estimateNormalTime": 0.001388888888888889
  },
  {
    "id": 13332981,
    "code": "ENTMQMAAS-2710",
    "name": "[Weekly] Check and eventually cleanup nightly ocp/aws clusters",
    "description": "Jakub Stejskal discovered, that online clusters are not being deleted. This task should be a reminder for daily checkup and eventual cleanup of these clusters with all of the components. This will be fixed in the future and there will be no need for manual cleaning. Until this happens, manual approach is advised.",
    "startTime": "2021/04/26 8:02 AM",
    "endTime": "2021/06/15 8:06 AM",
    "assignee": "rhn-support-jkalinic",
    "estimateNormalTime": 50.00277777777777
  },
  {
    "id": 13335560,
    "code": "ENTMQMAAS-2712",
    "name": "Migration of Jenkins CSB instances",
    "description": "* Google calendar Event\r\n* Plugins\r\n* Seed job\r\n* Properties",
    "startTime": "2021/04/28 12:43 PM",
    "endTime": "2021/05/04 1:25 PM",
    "assignee": "rhn-support-jkalinic",
    "estimateNormalTime": 6.029166666666666
  },
  {
    "id": 13336533,
    "code": "ENTMQMAAS-2713",
    "name": "RHMI - AMQ Online 1.7 debugging",
    "description": "RHMI team is including AMQ Online 1.7 in RHMI 1.10 - must support OSD 3.11.154.\r\nNeed help with debugging and running test suite",
    "startTime": "2021/04/29 8:05 AM",
    "endTime": "2021/05/25 11:55 AM",
    "assignee": "rhn-support-jkalinic",
    "estimateNormalTime": 26.159722222222225
  },
  {
    "id": 13371393,
    "code": "ENTMQMAAS-2719",
    "name": "glib2 security update RHSA :76601 - Container images to be updated for AMQ Online",
    "description": "https://docs.google.com/spreadsheets/d/1cJfIW7Spog4teA9WRZAiZo3zpzFwNc9v0bwtHN7kMDo/edit#gid=0",
    "startTime": "2021/06/03 2:21 PM",
    "endTime": "2021/07/19 2:07 PM",
    "assignee": "rgodfrey@redhat.com",
    "estimateNormalTime": 45.99027777777778
  },
  {
    "id": 13411663,
    "code": "ENTMQMAAS-2728",
    "name": "Document new infraconfig fields",
    "description": "The 1.7.2 release will introduce two new fields into the infraconfig.  These fields will need to be documented in the product documentation.",
    "startTime": "2021/07/13 10:41 AM",
    "endTime": "2022/09/14 9:05 PM",
    "assignee": "sjay@redhat.com",
    "estimateNormalTime": 428.43333333333334
  },
  {
    "id": 13423544,
    "code": "ENTMQMAAS-2737",
    "name": "java-11-openjdk security update RHSA :78473 Important Due: 08/20/2021",
    "description": "java-11-openjdk security update\r\n\r\n[https://errata.devel.redhat.com/advisory/78473]\r\n\r\n \r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-address-space-controller|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-address-space-controller]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-broker-plugin|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-broker-plugin]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-standard-controller|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-standard-controller]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-topic-forwarder|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-topic-forwarder]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-auth-plugin|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-auth-plugin]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-service-broker|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-service-broker]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-none-auth-service|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-none-auth-service]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-mqtt-gateway|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-mqtt-gateway]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-mqtt-lwt|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-mqtt-lwt]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-auth-service|https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-auth-service]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-tenant-service|https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-tenant-service]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-tenant-cleaner-rhel7|https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-tenant-cleaner-rhel7]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-adapters-rhel7|https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-adapters-rhel7]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-device-registry-rhel7|https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-device-registry-rhel7]|",
    "startTime": "2021/07/26 12:14 PM",
    "endTime": "2021/08/16 6:43 PM",
    "assignee": "buschv",
    "estimateNormalTime": 21.27013888888889
  },
  {
    "id": 14225846,
    "code": "ENTMQMAAS-2752",
    "name": "libX11 security update RHSA :80344 Important Due: 09/29/2021",
    "description": "Hi, the below images are required to be updated with the security update: [https://errata.devel.redhat.com/advisory/80344]\r\n\r\n \r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-address-space-controller|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-address-space-controller]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-standard-controller|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-standard-controller]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-topic-forwarder|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-topic-forwarder]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-auth-plugin|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-auth-plugin]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-service-broker|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-service-broker]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-none-auth-service|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-none-auth-service]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-mqtt-gateway|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-mqtt-gateway]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-mqtt-lwt|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-mqtt-lwt]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-auth-service|https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-auth-service]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-tenant-service|https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-tenant-service]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-tenant-cleaner-rhel7|https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-tenant-cleaner-rhel7]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-adapters-rhel7|https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-adapters-rhel7]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-device-registry-rhel7|https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-device-registry-rhel7]|\r\n\r\n ",
    "startTime": "2021/08/30 6:34 PM",
    "endTime": "2021/09/27 10:25 AM",
    "assignee": "buschv",
    "estimateNormalTime": 27.660416666666666
  },
  {
    "id": 14570451,
    "code": "ENTMQMAAS-2782",
    "name": "7.9 openssl and expat CVE - AMQ Online base image update",
    "description": "[1] Here is the 7.9 openssl and expat CVE fix info, which is shipped live:\r\n * * openssl: [https://errata.devel.redhat.com/advisory/92249] - [openssl-1.0.2k-25.el7_9|https://brewweb.engineering.redhat.com/brew/buildinfo?buildID=1939667]\r\n * expat: [https://errata.devel.redhat.com/advisory/92151] - [expat-2.1.0-14.el7_9|https://brewweb.engineering.redhat.com/brew/buildinfo?buildID=1936345]\r\n\r\n[2] Here are the updated 7.9 base image errata with expat and openssl fixes.  This info is also in the tracker doc [3]. * Rhel-server: [https://errata.devel.redhat.com/advisory/92480]\r\n * Rhel7-atomic (minimal) [https://errata.devel.redhat.com/advisory/92482]\r\n * Rhel7-init: [https://errata.devel.redhat.com/advisory/92483]\r\n * Ubi7: [https://errata.devel.redhat.com/advisory/92489]\r\n * Ubi7-minimal:[https://errata.devel.redhat.com/advisory/92491]\r\n * Ubi7-init: [https://errata.devel.redhat.com/advisory/92490]\r\n\r\n \r\n\r\n*AMQ Online base images impacted and require an update.*\r\n\r\n \r\n|Container Image|\r\n|[ [https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-address-space-controller]|\r\n|[ [https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-agent]|\r\n|[ [https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-broker-plugin]|\r\n|[ [https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-mqtt-gateway]|\r\n|[ [https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-standard-controller]|\r\n|[ [https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-topic-forwarder]|\r\n|[ [https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-auth-plugin]|\r\n|[ [https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-mqtt-lwt]|\r\n|[ [https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-service-broker]|\r\n|[ [https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-none-auth-service]|\r\n|[ [https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-console-init]|\r\n|[ [https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-auth-service]|\r\n|[ [https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-tenant-service]|\r\n|[ [https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-proxy-configurator]|\r\n|[ [https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-tenant-cleaner-rhel7]|\r\n|[ [https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-console-server-rhel7]|\r\n|[ [https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-controller-manager-rhel7-operator]|\r\n|[ [https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-adapters-rhel7]|\r\n|[ [https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-device-registry-rhel7]|\r\n\r\n ",
    "startTime": "2022/04/04 7:12 AM",
    "endTime": "2022/05/13 3:53 PM",
    "assignee": "rgodfrey@redhat.com",
    "estimateNormalTime": 39.361805555555556
  },
  {
    "id": 14631045,
    "code": "ENTMQMAAS-2801",
    "name": "java-11-openjdk security update RHSA :93346 Important Due: 05/20/2022 - AMQ Online base image update",
    "description": "A fix for an Important CVE,  java-11-openjdk security update was released \r\non 04/20/2022, that impacts layered container images that you manage. \r\nUpdated layered container images are due by 05/20/2022, (i.e. 04/20/2022 + \r\n30 days) to prevent CHI scores from dropping to grade C.\r\n\r\n[https://errata.devel.redhat.com/advisory/93346]\r\n\r\n \r\n\r\n*AMQ Online base images impacted and require an update.*\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-address-space-controller|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-address-space-controller]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-mqtt-gateway|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-mqtt-gateway]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-standard-controller|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-standard-controller]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-topic-forwarder|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-topic-forwarder]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-mqtt-lwt|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-mqtt-lwt]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-service-broker|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-service-broker]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-none-auth-service|https://catalog.redhat.com/software/containers/search?q=amq7/amq-online-1-none-auth-service]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-auth-service|https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-auth-service]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-tenant-service|https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-tenant-service]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-tenant-cleaner-rhel7|https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-tenant-cleaner-rhel7]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-adapters-rhel7|https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-adapters-rhel7]|\r\n|[ https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-device-registry-rhel7|https://catalog.redhat.com/software/containers/search?q=amq7-tech-preview/amq-online-1-iot-device-registry-rhel7]|\r\n \r\n ",
    "startTime": "2022/05/08 4:45 PM",
    "endTime": "2022/06/03 3:27 PM",
    "assignee": "rgodfrey@redhat.com",
    "estimateNormalTime": 25.945833333333336
  },
  {
    "id": 14966828,
    "code": "ENTMQMAAS-2873",
    "name": "Setup EOL plan of record - AMQ Online",
    "description": "https://docs.google.com/document/d/1Zbga8cmPcdIuE8dRBys7Srult3ur5jrOUH2mZbODM4M/edit#",
    "startTime": "2022/12/05 6:55 AM",
    "endTime": "2023/02/28 9:16 PM",
    "assignee": "mokumar@redhat.com",
    "estimateNormalTime": 85.59791666666666
  },
  {
    "id": 15054822,
    "code": "ENTMQMAAS-2881",
    "name": "Add a banner in the documentation - EOL",
    "description": "https://access.redhat.com/documentation/en-us/red_hat_amq/2021.q1#category-amq-online",
    "startTime": "2023/01/31 6:05 PM",
    "endTime": "2023/02/01 4:38 PM",
    "assignee": "pwright@redhat.com",
    "estimateNormalTime": 0.9395833333333333
  },
  {
    "id": 15054824,
    "code": "ENTMQMAAS-2882",
    "name": "Update the lifeCycle page - EOL in June",
    "description": "Remove the note in the life cycle page.\r\n\r\n \r\n\r\n!Screenshot 2023-01-31 at 1.26.14 PM.png!",
    "startTime": "2023/01/31 6:08 PM",
    "endTime": "2023/02/23 7:30 PM",
    "assignee": "rhn-support-dgeoffroy",
    "estimateNormalTime": 23.056944444444444
  },
  {
    "id": 15054825,
    "code": "ENTMQMAAS-2883",
    "name": "Announcement page on the portal (similar to datavirt)",
    "description": "",
    "startTime": "2023/01/31 6:10 PM",
    "endTime": "2023/02/01 7:32 PM",
    "assignee": "rhn-support-dgeoffroy",
    "estimateNormalTime": 1.0569444444444445
  },
  {
    "id": 15054828,
    "code": "ENTMQMAAS-2884",
    "name": "Salesforce to be updated",
    "description": "",
    "startTime": "2023/01/31 6:11 PM",
    "endTime": "2023/06/01 5:29 PM",
    "assignee": "rhn-support-dgeoffroy",
    "estimateNormalTime": 120.97083333333335
  },
  {
    "id": 12724080,
    "code": "ENTMQMAAS-318",
    "name": "Productize ER3 of RHOM",
    "description": "The following tag should be productized: \r\n\r\nhttps://code.engineering.redhat.com/gerrit/gitweb?p=EnMasseProject/enmasse.git;a=shortlog;h=refs/tags/0.15.3.rhom-001002\r\n\r\nThe project name is supposed to change from RHOM to something else, but its OK to use RHOM for this release.",
    "startTime": "2017/12/08 6:22 AM",
    "endTime": "2017/12/08 11:23 AM",
    "assignee": "pkralik",
    "estimateNormalTime": 0.20902777777777778
  },
  {
    "id": 12730091,
    "code": "ENTMQMAAS-355",
    "name": "[#767] : Disable durable subs (configurable upstream?)",
    "description": "Created from upstream issue [#767|https://github.com/EnMasseProject/enmasse/issues/767].",
    "startTime": "2018/01/22 4:40 AM",
    "endTime": "2018/03/19 5:20 AM",
    "assignee": "gordonsim",
    "estimateNormalTime": 56.02777777777778
  },
  {
    "id": 12730085,
    "code": "ENTMQMAAS-349",
    "name": "[#761] : Console to support status for addresses",
    "description": "Created from upstream issue [#761|https://github.com/EnMasseProject/enmasse/issues/761].",
    "startTime": "2018/01/22 4:40 AM",
    "endTime": "2018/02/22 11:22 AM",
    "assignee": "gordonsim",
    "estimateNormalTime": 31.27916666666667
  },
  {
    "id": 12730089,
    "code": "ENTMQMAAS-353",
    "name": "[#765] : Changes to service broker (service type is just address space, different plans are supported. See also point above about how to tie plans offered to plans specified) ",
    "description": "Created from upstream issue [#765|https://github.com/EnMasseProject/enmasse/issues/765].",
    "startTime": "2018/01/22 4:40 AM",
    "endTime": "2018/05/10 12:38 PM",
    "assignee": "rgodfrey@redhat.com",
    "estimateNormalTime": 108.33194444444445
  },
  {
    "id": 12730086,
    "code": "ENTMQMAAS-350",
    "name": "[#762] : How to match plans offered to plans specified (e.g. have console offer plans based on the presence of configmaps in its namespace or variations of that)",
    "description": "Created from upstream issue [#762|https://github.com/EnMasseProject/enmasse/issues/762].",
    "startTime": "2018/01/22 4:40 AM",
    "endTime": "2018/02/21 7:06 AM",
    "assignee": "gordonsim",
    "estimateNormalTime": 30.101388888888888
  },
  {
    "id": 12730081,
    "code": "ENTMQMAAS-345",
    "name": "[#757] : Oauth for console",
    "description": "Created from upstream issue [#757|https://github.com/EnMasseProject/enmasse/issues/757].",
    "startTime": "2018/01/22 4:40 AM",
    "endTime": "2018/04/03 2:04 AM",
    "assignee": "gordonsim",
    "estimateNormalTime": 70.89166666666667
  },
  {
    "id": 12730082,
    "code": "ENTMQMAAS-346",
    "name": "[#758] : Keycloak plugin OAUTH2 support",
    "description": "Created from upstream issue [#758|https://github.com/EnMasseProject/enmasse/issues/758].",
    "startTime": "2018/01/22 4:40 AM",
    "endTime": "2018/03/26 7:53 AM",
    "assignee": "rgodfrey@redhat.com",
    "estimateNormalTime": 63.13402777777778
  },
  {
    "id": 12730139,
    "code": "ENTMQMAAS-357",
    "name": "Polarion reporting of enmasse test cases",
    "description": "Complete all automated steps for future polarion reporting of enmasse test cases.\r\n\r\n- Create and setup new job in MSGQE Jenkins (Job1) (Tomas)\r\n- Modify already existing job (MSGQE Jenkins) for reporting due to new parameters (Job2) (David)\r\n- Setup polarion.ini files for enmasse project in (MSGQE repo) (Tomas+David)\r\n- Call Job1 from enmasse Jenkins job via rest api with parameters (Tomas+David)",
    "startTime": "2018/01/22 6:52 AM",
    "endTime": "2018/02/05 7:27 AM",
    "assignee": "tkratky_jira",
    "estimateNormalTime": 14.024305555555555
  },
  {
    "id": 12730141,
    "code": "ENTMQMAAS-358",
    "name": "[#770] : Define tests for limitation of address-spaces (by credits)",
    "description": "Created from upstream issue [#770|https://github.com/EnMasseProject/enmasse/issues/770].",
    "startTime": "2018/01/22 6:53 AM",
    "endTime": "2018/02/21 8:40 AM",
    "assignee": "tkratky_jira",
    "estimateNormalTime": 30.074305555555554
  },
  {
    "id": 12730147,
    "code": "ENTMQMAAS-364",
    "name": "[#776] : Recheck and enable system tests for standard address space",
    "description": "Created from upstream issue [#776|https://github.com/EnMasseProject/enmasse/issues/776].",
    "startTime": "2018/01/22 6:53 AM",
    "endTime": "2018/02/07 4:36 AM",
    "assignee": "tkratky_jira",
    "estimateNormalTime": 15.90486111111111
  },
  {
    "id": 12732596,
    "code": "ENTMQMAAS-374",
    "name": "[#843] : improve test framework regarding to definition of dynamically created plans",
    "description": "Created from upstream issue [#843|https://github.com/EnMasseProject/enmasse/issues/843].",
    "startTime": "2018/02/05 6:47 AM",
    "endTime": "2018/02/21 4:52 AM",
    "assignee": "tkratky_jira",
    "estimateNormalTime": 15.920138888888888
  },
  {
    "id": 12733954,
    "code": "ENTMQMAAS-383",
    "name": "[#811] : Brokered: cannot create topic: user null does not have permissions to 'send'...",
    "description": "Created from upstream issue [#811|https://github.com/EnMasseProject/enmasse/issues/811].",
    "startTime": "2018/02/13 5:59 AM",
    "endTime": "2018/02/16 5:02 AM",
    "assignee": "rgodfrey@redhat.com",
    "estimateNormalTime": 2.9604166666666667
  },
  {
    "id": 12735522,
    "code": "ENTMQMAAS-387",
    "name": "[#918] : system-tests: new scale test: testScaleRouterAutomatically",
    "description": "Created from upstream issue [#918|https://github.com/EnMasseProject/enmasse/issues/918].",
    "startTime": "2018/02/21 6:32 AM",
    "endTime": "2018/03/19 10:08 AM",
    "assignee": "tkratky_jira",
    "estimateNormalTime": 26.150000000000002
  },
  {
    "id": 12735531,
    "code": "ENTMQMAAS-390",
    "name": "[#921] : system-tests: new Plan test: testPlansAvailableViaConsole",
    "description": "Created from upstream issue [#921|https://github.com/EnMasseProject/enmasse/issues/921].",
    "startTime": "2018/02/21 6:57 AM",
    "endTime": "2018/03/05 1:39 AM",
    "assignee": "tkratky_jira",
    "estimateNormalTime": 11.779166666666667
  },
  {
    "id": 12736171,
    "code": "ENTMQMAAS-391",
    "name": "[#936] : system-tests: create new test for thorough testing of REST API for address/address-space",
    "description": "Created from upstream issue [#936|https://github.com/EnMasseProject/enmasse/issues/936].",
    "startTime": "2018/02/26 2:08 AM",
    "endTime": "2018/03/12 3:40 AM",
    "assignee": "tkratky_jira",
    "estimateNormalTime": 14.06388888888889
  },
  {
    "id": 12737413,
    "code": "ENTMQMAAS-396",
    "name": "[#907] : system-tests: add parametr for disable 'tear down' methods in systemtests",
    "description": "Created from upstream issue [#907|https://github.com/EnMasseProject/enmasse/issues/907].",
    "startTime": "2018/03/05 6:29 AM",
    "endTime": "2018/03/22 5:30 AM",
    "assignee": "tkratky_jira",
    "estimateNormalTime": 16.959027777777777
  },
  {
    "id": 12737429,
    "code": "ENTMQMAAS-399",
    "name": "[#998] : system-tests: review list of February disabled tests",
    "description": "Created from upstream issue [#998|https://github.com/EnMasseProject/enmasse/issues/998].",
    "startTime": "2018/03/05 6:49 AM",
    "endTime": "2018/03/08 7:35 AM",
    "assignee": "tkratky_jira",
    "estimateNormalTime": 3.0319444444444446
  },
  {
    "id": 12737477,
    "code": "ENTMQMAAS-404",
    "name": "Investigate what's needed for operations (logs/monitoring)",
    "description": "",
    "startTime": "2018/03/05 8:14 AM",
    "endTime": "2022/01/26 12:39 PM",
    "assignee": "rshelly",
    "estimateNormalTime": 1423.1840277777776
  },
  {
    "id": 12737483,
    "code": "ENTMQMAAS-405",
    "name": "[#949] : agent: Results count is not set correctly after refresh the page",
    "description": "Created from upstream issue [#949|https://github.com/EnMasseProject/enmasse/issues/949].",
    "startTime": "2018/03/05 8:28 AM",
    "endTime": "2018/03/12 7:23 AM",
    "assignee": "gordonsim",
    "estimateNormalTime": 6.954861111111111
  },
  {
    "id": 12737485,
    "code": "ENTMQMAAS-407",
    "name": "[#973] : Configure per-address settings for each address created on broker",
    "description": "Created from upstream issue [#973|https://github.com/EnMasseProject/enmasse/issues/973].",
    "startTime": "2018/03/05 8:32 AM",
    "endTime": "2020/05/10 5:33 PM",
    "assignee": "gordonsim",
    "estimateNormalTime": 797.3756944444444
  },
  {
    "id": 12738369,
    "code": "ENTMQMAAS-417",
    "name": "[#1021] : system-tests: modify QueueTest#testScaledown",
    "description": "Created from upstream issue [#1021|https://github.com/EnMasseProject/enmasse/issues/1021].",
    "startTime": "2018/03/08 5:16 AM",
    "endTime": "2018/04/13 2:58 AM",
    "assignee": "tkratky_jira",
    "estimateNormalTime": 35.90416666666667
  },
  {
    "id": 12738609,
    "code": "ENTMQMAAS-426",
    "name": "[#1034] : system-tests: create test for REST API - address resource required params are missing",
    "description": "Created from upstream issue [#1034|https://github.com/EnMasseProject/enmasse/issues/1034].",
    "startTime": "2018/03/09 6:19 AM",
    "endTime": "2018/03/27 2:43 AM",
    "assignee": "tkratky_jira",
    "estimateNormalTime": 17.849999999999998
  },
  {
    "id": 12738628,
    "code": "ENTMQMAAS-428",
    "name": "[#1029] : system-tests: modify authentication tests to create multiple address-spaces in one request",
    "description": "Created from upstream issue [#1029|https://github.com/EnMasseProject/enmasse/issues/1029].",
    "startTime": "2018/03/09 7:00 AM",
    "endTime": "2018/03/19 5:56 AM",
    "assignee": "tkratky_jira",
    "estimateNormalTime": 9.955555555555556
  },
  {
    "id": 12738631,
    "code": "ENTMQMAAS-431",
    "name": "[#1036] : system-tests: create new test for address-space endpoints \\\"host\\\"",
    "description": "Created from upstream issue [#1036|https://github.com/EnMasseProject/enmasse/issues/1036].",
    "startTime": "2018/03/09 7:01 AM",
    "endTime": "2018/03/27 2:43 AM",
    "assignee": "tkratky_jira",
    "estimateNormalTime": 17.820833333333333
  },
  {
    "id": 12738629,
    "code": "ENTMQMAAS-429",
    "name": "[#1031] : system-tests: create new test for replace address-space list",
    "description": "Created from upstream issue [#1031|https://github.com/EnMasseProject/enmasse/issues/1031].",
    "startTime": "2018/03/09 7:01 AM",
    "endTime": "2018/03/26 8:10 AM",
    "assignee": "tkratky_jira",
    "estimateNormalTime": 17.047916666666666
  },
  {
    "id": 12738634,
    "code": "ENTMQMAAS-434",
    "name": "[#1040] : system-tests: create new test that verify that returned restapi routes are reachable",
    "description": "Created from upstream issue [#1040|https://github.com/EnMasseProject/enmasse/issues/1040].",
    "startTime": "2018/03/09 7:01 AM",
    "endTime": "2018/03/27 2:43 AM",
    "assignee": "tkratky_jira",
    "estimateNormalTime": 17.820833333333333
  },
  {
    "id": 12742571,
    "code": "ENTMQMAAS-457",
    "name": "[#1096] : agent: use \\\"direction\\\" attribute instead of \\\"dir\\\" for autoLinks",
    "description": "Created from upstream issue [#1096|https://github.com/EnMasseProject/enmasse/issues/1096].",
    "startTime": "2018/04/03 10:16 AM",
    "endTime": "2018/05/10 12:49 PM",
    "assignee": "gordonsim",
    "estimateNormalTime": 37.106249999999996
  },
  {
    "id": 12742573,
    "code": "ENTMQMAAS-459",
    "name": "[#1084] : agent container: high load and memory issue with many addresses",
    "description": "Created from upstream issue [#1084|https://github.com/EnMasseProject/enmasse/issues/1084].",
    "startTime": "2018/04/03 10:17 AM",
    "endTime": "2018/05/10 12:36 PM",
    "assignee": "gordonsim",
    "estimateNormalTime": 37.09652777777778
  },
  {
    "id": 12742572,
    "code": "ENTMQMAAS-458",
    "name": "[#1097] : When creating many addresses at the same time, a few have missing autolinks",
    "description": "Created from upstream issue [#1097|https://github.com/EnMasseProject/enmasse/issues/1097].",
    "startTime": "2018/04/03 10:17 AM",
    "endTime": "2018/05/29 4:51 AM",
    "assignee": "gordonsim",
    "estimateNormalTime": 55.77361111111111
  },
  {
    "id": 12748266,
    "code": "ENTMQMAAS-636",
    "name": "Review Durable Subscription proposal for standard Space, and decompose into tasks",
    "description": "",
    "startTime": "2018/05/02 10:45 AM",
    "endTime": "2018/05/29 10:02 AM",
    "assignee": "gordonsim",
    "estimateNormalTime": 26.970138888888886
  },
  {
    "id": 12748166,
    "code": "ENTMQMAAS-632",
    "name": "align amqonline and interconnect needs for router image",
    "description": "",
    "startTime": "2018/05/02 8:34 AM",
    "endTime": "2018/08/24 4:36 AM",
    "assignee": "gordonsim",
    "estimateNormalTime": 113.83472222222223
  },
  {
    "id": 12748167,
    "code": "ENTMQMAAS-633",
    "name": "remove per-address address-settings config",
    "description": "",
    "startTime": "2018/05/02 8:38 AM",
    "endTime": "2018/05/22 5:36 AM",
    "assignee": "gordonsim",
    "estimateNormalTime": 19.87361111111111
  },
  {
    "id": 12748669,
    "code": "ENTMQMAAS-638",
    "name": "[#1206] : 'Connections' tab in console doesn't show connections",
    "description": "Created from upstream issue [#1206|https://github.com/EnMasseProject/enmasse/issues/1206].",
    "startTime": "2018/05/04 8:21 AM",
    "endTime": "2018/05/29 4:42 AM",
    "assignee": "gordonsim",
    "estimateNormalTime": 24.847916666666666
  },
  {
    "id": 12752443,
    "code": "ENTMQMAAS-658",
    "name": "durable subscriptions: agent",
    "description": "The agent assumes that any subscription address in the confguring\r\nphase will have been allocated to a particular broker. It will then:\r\n\r\n* ensure a subscription queue exists on the specified broker, bound to\r\n  the topic address, with any specified filter and if the address is\r\n  exclusive max-consumers set to 1\r\n\r\n* ensure a link route for the out direction exists on all routers,\r\n  referencing the specified broker\r\n",
    "startTime": "2018/05/29 10:00 AM",
    "endTime": "2018/08/24 4:35 AM",
    "assignee": "gordonsim",
    "estimateNormalTime": 86.77430555555556
  },
  {
    "id": 12752444,
    "code": "ENTMQMAAS-659",
    "name": "durable subscriptions: subserv",
    "description": "The subscription location logic should be removed entirely.\r\n",
    "startTime": "2018/05/29 10:01 AM",
    "endTime": "2018/08/24 4:35 AM",
    "assignee": "gordonsim",
    "estimateNormalTime": 86.77361111111111
  },
  {
    "id": 12752497,
    "code": "ENTMQMAAS-662",
    "name": "[#1291] : Creating addressspaces through api server appears to require cluster-admin rights",
    "description": "Created from upstream issue [#1291|https://github.com/EnMasseProject/enmasse/issues/1291].",
    "startTime": "2018/05/29 2:08 PM",
    "endTime": "2018/06/07 4:43 AM",
    "assignee": "rgodfrey@redhat.com",
    "estimateNormalTime": 8.60763888888889
  },
  {
    "id": 12752422,
    "code": "ENTMQMAAS-651",
    "name": "[#1285] : Unable to create queue of type \\\"sharded-queue\\\" using api server",
    "description": "Created from upstream issue [#1285|https://github.com/EnMasseProject/enmasse/issues/1285].",
    "startTime": "2018/05/29 8:49 AM",
    "endTime": "2018/06/11 8:02 AM",
    "assignee": "rgodfrey@redhat.com",
    "estimateNormalTime": 12.96736111111111
  },
  {
    "id": 12752423,
    "code": "ENTMQMAAS-652",
    "name": "[#1287] : Addresses created through the console cannot properly be used through the command line tools",
    "description": "Created from upstream issue [#1287|https://github.com/EnMasseProject/enmasse/issues/1287].",
    "startTime": "2018/05/29 8:49 AM",
    "endTime": "2018/06/19 8:31 AM",
    "assignee": "rgodfrey@redhat.com",
    "estimateNormalTime": 20.9875
  },
  {
    "id": 12752421,
    "code": "ENTMQMAAS-650",
    "name": "[#1283] : Errors when attempting to create two addressspaces with the same name in different namespaces",
    "description": "Created from upstream issue [#1283|https://github.com/EnMasseProject/enmasse/issues/1283].",
    "startTime": "2018/05/29 8:49 AM",
    "endTime": "2018/06/04 7:35 AM",
    "assignee": "rgodfrey@redhat.com",
    "estimateNormalTime": 5.948611111111112
  },
  {
    "id": 12773135,
    "code": "ENTMQMAAS-810",
    "name": "[#1751] : Binding credentials can still be used after the secret is deleted",
    "description": "Created from upstream issue [#1751|https://github.com/EnMasseProject/enmasse/issues/1751].",
    "startTime": "2018/10/05 12:17 PM",
    "endTime": "2018/10/31 12:31 PM",
    "assignee": "rgodfrey@redhat.com",
    "estimateNormalTime": 26.009722222222223
  },
  {
    "id": 12773516,
    "code": "ENTMQMAAS-812",
    "name": "[#1756] : Remove the ability to request console access on binding",
    "description": "Created from upstream issue [#1756|https://github.com/EnMasseProject/enmasse/issues/1756].",
    "startTime": "2018/10/09 6:44 AM",
    "endTime": "2018/11/09 7:26 AM",
    "assignee": "rgodfrey@redhat.com",
    "estimateNormalTime": 31.02916666666667
  },
  {
    "id": 12775832,
    "code": "ENTMQMAAS-827",
    "name": "[#1831] : Document and provide prometheus and grafana installation bundles",
    "description": "Created from upstream issue [#1831|https://github.com/EnMasseProject/enmasse/issues/1831].",
    "startTime": "2018/10/23 5:02 AM",
    "endTime": "2018/11/07 2:46 AM",
    "assignee": "rshelly",
    "estimateNormalTime": 14.905555555555557
  },
  {
    "id": 12779285,
    "code": "ENTMQMAAS-870",
    "name": "Install AMQ Online with IoT using templates",
    "description": "https://docs.google.com/document/d/1YnnmVhleSMw2O07LrnH9WCb-RyUemrojTu45tHkRx_E/edit#heading=h.kk4jz527eura",
    "startTime": "2018/11/14 5:00 AM",
    "endTime": "2019/08/09 6:55 AM",
    "assignee": "dejanbosanac",
    "estimateNormalTime": 268.07986111111114
  },
  {
    "id": 12779292,
    "code": "ENTMQMAAS-871",
    "name": "Create OpenShift template for IoT components",
    "description": "The template should install:\r\n\r\n* MQTT protocol adapter\r\n* HTTP protocol adapter\r\n* File-based device registry\r\n* Hono authentication service\r\n* QDR that will be used for bridging adapters to address spaces",
    "startTime": "2018/11/14 5:15 AM",
    "endTime": "2019/03/01 9:30 AM",
    "assignee": "dejanbosanac",
    "estimateNormalTime": 107.17708333333333
  },
  {
    "id": 12784884,
    "code": "ENTMQMAAS-929",
    "name": "[#2054] : Allow MessagingUsers to be created from service accounts",
    "description": "Created from upstream issue [#2054|https://github.com/EnMasseProject/enmasse/issues/2054].",
    "startTime": "2018/12/17 3:42 AM",
    "endTime": "2019/01/07 12:49 PM",
    "assignee": "rgodfrey@redhat.com",
    "estimateNormalTime": 21.37986111111111
  },
  {
    "id": 12803380,
    "code": "ENTMQMAAS-1104",
    "name": "Remove Beta Support Statement",
    "description": "The following docs all still have the Beta support notice. That needs to be removed for 1.0 and of course 1.1\r\n\r\n\\\"The AMQ Online 1.0 release is provided as a service to customers who want to try the AMQ Online features and work with support when problems are encountered. Support for Beta releases is limited to commercially reasonable effort and non-production use cases, and all support cases must be opened with a severity of 4. Patches will not be provided, but bug fixes might be incorporated in future releases. To contact support, visit Open a Support Case.\\\"\r\n\r\nhttps://access.redhat.com/documentation/en-us/red_hat_amq/7.2/html-single/installing_and_managing_amq_online_on_openshift_container_platform/index#con-support-statement-messaging\r\nhttps://access.redhat.com/documentation/en-us/red_hat_amq/7.2/html/evaluating_amq_online_on_openshift_container_platform/assembly-intro-messaging#con-support-statement-messaging\r\nhttps://access.redhat.com/documentation/en-us/red_hat_amq/7.2/html/using_amq_online_on_openshift_container_platform/assembly-intro-using-messaging#con-support-statement-messaging\r\n",
    "startTime": "2019/04/17 1:51 PM",
    "endTime": "2019/04/17 6:10 PM",
    "assignee": "ncbaratta",
    "estimateNormalTime": 0.1798611111111111
  },
  {
    "id": 12803437,
    "code": "ENTMQMAAS-1105",
    "name": "Remove Beta Support Statement",
    "description": "The following docs all still have the Beta support notice. That needs to be removed for 1.0 \r\n\r\n\\\"The AMQ Online 1.0 release is provided as a service to customers who want to try the AMQ Online features and work with support when problems are encountered. Support for Beta releases is limited to commercially reasonable effort and non-production use cases, and all support cases must be opened with a severity of 4. Patches will not be provided, but bug fixes might be incorporated in future releases. To contact support, visit Open a Support Case.\\\"\r\n\r\nhttps://access.redhat.com/documentation/en-us/red_hat_amq/7.2/html-single/installing_and_managing_amq_online_on_openshift_container_platform/index#con-support-statement-messaging\r\nhttps://access.redhat.com/documentation/en-us/red_hat_amq/7.2/html/evaluating_amq_online_on_openshift_container_platform/assembly-intro-messaging#con-support-statement-messaging\r\nhttps://access.redhat.com/documentation/en-us/red_hat_amq/7.2/html/using_amq_online_on_openshift_container_platform/assembly-intro-using-messaging#con-support-statement-messaging\r\n",
    "startTime": "2019/04/17 6:11 PM",
    "endTime": "2019/04/26 2:30 PM",
    "assignee": "ncbaratta",
    "estimateNormalTime": 8.846527777777778
  },
  {
    "id": 12806058,
    "code": "ENTMQMAAS-1131",
    "name": "[#2779] : Namespace of address spaces and addresses is wrong in Grafana",
    "description": "Created from upstream issue [#2779|https://github.com/EnMasseProject/enmasse/issues/2779].",
    "startTime": "2019/05/08 4:56 AM",
    "endTime": "2019/05/24 9:25 AM",
    "assignee": "rshelly",
    "estimateNormalTime": 16.186805555555555
  },
  {
    "id": 12835781,
    "code": "ENTMQMAAS-1474",
    "name": "Deprecate old Command and Control addressing",
    "description": "",
    "startTime": "2019/10/30 9:36 AM",
    "endTime": "",
    "assignee": "dejanbosanac",
    "estimateNormalTime": null
  },
  {
    "id": 12835784,
    "code": "ENTMQMAAS-1476",
    "name": "Define new IoT documentation structure",
    "description": "",
    "startTime": "2019/10/30 9:42 AM",
    "endTime": "2019/11/07 9:53 AM",
    "assignee": "dejanbosanac",
    "estimateNormalTime": 8.00763888888889
  },
  {
    "id": 12836873,
    "code": "ENTMQMAAS-1502",
    "name": "[#3428] : Create service monitor for tenant metrics",
    "description": "Created from upstream issue [#3428|https://github.com/EnMasseProject/enmasse/issues/3428].",
    "startTime": "2019/11/06 5:04 AM",
    "endTime": "2020/01/13 11:20 AM",
    "assignee": "rshelly",
    "estimateNormalTime": 68.2611111111111
  },
  {
    "id": 12836874,
    "code": "ENTMQMAAS-1503",
    "name": "[#3429] : Create address space failed create/delete metrics",
    "description": "Created from upstream issue [#3429|https://github.com/EnMasseProject/enmasse/issues/3429].",
    "startTime": "2019/11/06 5:05 AM",
    "endTime": "2020/01/27 12:03 PM",
    "assignee": "rshelly",
    "estimateNormalTime": 82.29027777777777
  },
  {
    "id": 12837226,
    "code": "ENTMQMAAS-1511",
    "name": "Create Command examples and introduce \\\"device applications\\\" section",
    "description": "",
    "startTime": "2019/11/07 9:59 AM",
    "endTime": "2020/01/13 5:39 AM",
    "assignee": "dejanbosanac",
    "estimateNormalTime": 66.81944444444444
  },
  {
    "id": 12721458,
    "code": "ENTMQMAAS-308",
    "name": "Console UI tweaks to Create Address wizard",
    "description": "Two minor tweaks to the Console UI Create Address wizard:\r\n\r\n*Remove the em dashes before the Learn More link and radio buttons throughout\r\n\r\n*If possible, on the Summary page, remove the \\\"twisties\\\" (and headers, if possible) and just list the 3 chosen elements.  \r\n ",
    "startTime": "2017/11/17 4:12 PM",
    "endTime": "2020/05/10 5:11 PM",
    "assignee": "eallen@redhat.com",
    "estimateNormalTime": 905.0409722222222
  },
  {
    "id": 12708671,
    "code": "ENTMQMAAS-174",
    "name": "Extract UI tooltips from ascii doc files",
    "description": "We need a way to extract text that is used in the console pages from the ascii docs.\r\n\r\nThree pieces of information should be extracted:\r\n- an UI label\r\n- popup tooltip text when the mouse hovers over the label\r\n- an optional link to an external page for more information\r\n\r\nTo do this, a program that parses the ascii docs for a formatted comment needs to be developed. The proposed comment format is:\r\nLabels:\r\n// key.that.identifies.the.console.page.label: The label text\r\n   \r\nTooltips:\r\n// key.that.identifies.the.console.page.tooltip: start\r\nThis is the popup text that appears in the ascii doc and in the tooltop\r\n// key.that.identifies.the.console.page.tooltip: stop\r\n\r\nExternal links:\r\n// key.that.identifies.the.console.page.external: http://www.redhat.com#topic\r\n\r\nThe ouput of this program should be a json file that can be read by the console code.\r\nThis same json file will be read by the java address controller which will extract the tooltips and use them for the address descriptions.\r\n\r\n",
    "startTime": "2017/08/24 8:41 AM",
    "endTime": "2020/05/10 5:16 PM",
    "assignee": "eallen@redhat.com",
    "estimateNormalTime": 990.3576388888888
  }
]; module.exports = { taskOutofProject };
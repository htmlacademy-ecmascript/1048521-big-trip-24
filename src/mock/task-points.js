const MOCK_POINTS =
[
  {
    "id": "bfcc9e50-2475-469f-b7ab-b53c088d6f5f",
    "base_price": 9902,
    "date_from": "2024-10-26T19:18:09.792Z",
    "date_to": "2024-10-27T11:47:09.792Z",
    "destination": "bc7cc015-e1c5-46da-afae-1be5395e76ec",
    "is_favorite": false,
    "offers": [
      "d634e3ae-8e6f-489c-b091-36f79a58d565"
    ],
    "type": "train"
  },
  {
    "id": "dd927bf8-5ff1-4793-9703-43843777989b",
    "base_price": 2123,
    "date_from": "2024-10-29T07:06:09.792Z",
    "date_to": "2024-10-30T23:04:09.792Z",
    "destination": "bc7cc015-e1c5-46da-afae-1be5395e76ec",
    "is_favorite": false,
    "offers": [
      "9c33d803-2535-4047-a8fe-f68998592323",
      "566cef4f-0be6-4bda-b67f-60c519dacbfa"
    ],
    "type": "check-in"
  },
  {
    "id": "c344f8ea-c3ac-43f4-8093-357923159877",
    "base_price": 5051,
    "date_from": "2024-11-01T18:38:09.792Z",
    "date_to": "2024-11-02T12:00:09.792Z",
    "destination": "bc7cc015-e1c5-46da-afae-1be5395e76ec",
    "is_favorite": true,
    "offers": [
      "5836aeef-9934-4c92-9edd-37a6f2d3475a"
    ],
    "type": "taxi"
  },
  {
    "id": "084ada3b-da72-48ad-a95c-d254771f9c73",
    "base_price": 1177,
    "date_from": "2024-11-03T14:39:09.792Z",
    "date_to": "2024-11-04T02:45:09.792Z",
    "destination": "ed2ca707-bb34-4cff-a1b2-23d63a5f8b64",
    "is_favorite": false,
    "offers": [
      "b2fbc0f6-9563-430a-a3c5-69fc8480af2a"
    ],
    "type": "bus"
  },
  {
    "id": "00a39a6c-024f-4913-91b9-41700feb5a01",
    "base_price": 1117,
    "date_from": "2024-11-05T14:14:09.792Z",
    "date_to": "2024-11-06T16:22:09.792Z",
    "destination": "6a4f843d-01f2-433c-bf93-e7a6fbc605f3",
    "is_favorite": false,
    "offers": [
      "52ed7c59-c12d-48b6-a818-e77e4ad510d0",
      "7a72138e-7e9f-4108-8011-b485c752adaa",
      "48ce47f3-610a-4973-a47f-9742c9c223a0",
      "5836aeef-9934-4c92-9edd-37a6f2d3475a"
    ],
    "type": "taxi"
  },
  {
    "id": "b132596d-9a22-4a24-b2b1-cbcf7efdf86b",
    "base_price": 3802,
    "date_from": "2024-11-07T05:40:09.792Z",
    "date_to": "2024-11-08T18:14:09.792Z",
    "destination": "d9241ccc-05b5-4b5e-8eff-914c4c097db2",
    "is_favorite": false,
    "offers": [
      "48ce47f3-610a-4973-a47f-9742c9c223a0",
      "5836aeef-9934-4c92-9edd-37a6f2d3475a"
    ],
    "type": "taxi"
  },
  {
    "id": "9d5e6e4e-0335-4ed7-be79-bbb83dc4241d",
    "base_price": 6519,
    "date_from": "2024-11-09T04:50:09.792Z",
    "date_to": "2024-11-11T05:48:09.792Z",
    "destination": "ed2ca707-bb34-4cff-a1b2-23d63a5f8b64",
    "is_favorite": false,
    "offers": [],
    "type": "drive"
  },
  {
    "id": "fac06b0b-3b71-424e-a6ea-2e607e3c9bea",
    "base_price": 2188,
    "date_from": "2024-11-13T03:15:09.792Z",
    "date_to": "2024-11-14T01:26:09.792Z",
    "destination": "d9241ccc-05b5-4b5e-8eff-914c4c097db2",
    "is_favorite": true,
    "offers": [
      "d634e3ae-8e6f-489c-b091-36f79a58d565"
    ],
    "type": "train"
  },
  {
    "id": "4e9659d1-56b2-4194-9a03-741aa10e2f60",
    "base_price": 7988,
    "date_from": "2024-11-14T10:59:09.792Z",
    "date_to": "2024-11-15T08:31:09.792Z",
    "destination": "09938363-4494-4122-b101-144c1a3474e1",
    "is_favorite": false,
    "offers": [
      "577759dd-4bcc-4792-8314-34cbb2c0a7b0",
      "f9d95e79-2c6d-4d7a-aed2-26c3253527ae",
      "2bd75fdd-88b0-452e-8d28-56f7845f66a1",
      "ffaf425b-741d-4eb3-8dc2-0f05aa2c5ac3",
      "31f028a7-03d2-43c4-8fd6-9e6ee327782a",
      "8f46e86b-e80f-4b72-9033-0993dd990053"
    ],
    "type": "ship"
  },
  {
    "id": "1966d62d-8f62-4081-9147-25f61296968c",
    "base_price": 4677,
    "date_from": "2024-11-15T18:02:09.792Z",
    "date_to": "2024-11-16T11:46:09.792Z",
    "destination": "09938363-4494-4122-b101-144c1a3474e1",
    "is_favorite": true,
    "offers": [],
    "type": "sightseeing"
  },
  {
    "id": "a216bd36-5f08-4b54-afa4-9acbdf3959d9",
    "base_price": 7596,
    "date_from": "2024-11-18T06:55:09.792Z",
    "date_to": "2024-11-20T05:00:09.792Z",
    "destination": "5dc4835d-a02d-42aa-a118-310f81c02855",
    "is_favorite": false,
    "offers": [
      "31f028a7-03d2-43c4-8fd6-9e6ee327782a",
      "8f46e86b-e80f-4b72-9033-0993dd990053"
    ],
    "type": "ship"
  },
  {
    "id": "870c9ba2-5edf-4180-b3ad-dd7228d4f7c0",
    "base_price": 9620,
    "date_from": "2024-11-22T05:52:09.792Z",
    "date_to": "2024-11-23T16:42:09.792Z",
    "destination": "2685fc4c-cdb9-44a0-ba5c-7149639e2c6a",
    "is_favorite": false,
    "offers": [],
    "type": "taxi"
  },
  {
    "id": "8586a6c7-55af-4787-a970-93a46e2df156",
    "base_price": 3764,
    "date_from": "2024-11-25T14:34:09.792Z",
    "date_to": "2024-11-27T13:17:09.792Z",
    "destination": "09938363-4494-4122-b101-144c1a3474e1",
    "is_favorite": false,
    "offers": [],
    "type": "drive"
  },
  {
    "id": "570c0c7a-a051-4ae2-a56f-d3343b520420",
    "base_price": 533,
    "date_from": "2024-11-29T13:11:09.792Z",
    "date_to": "2024-12-01T05:56:09.792Z",
    "destination": "440817c7-b233-42be-94de-9ab0b756d5e8",
    "is_favorite": false,
    "offers": [],
    "type": "bus"
  },
  {
    "id": "aa0df4ec-39a8-433b-b4d0-48fbb2e2ed5e",
    "base_price": 3436,
    "date_from": "2024-12-02T05:02:09.792Z",
    "date_to": "2024-12-03T13:59:09.792Z",
    "destination": "d9241ccc-05b5-4b5e-8eff-914c4c097db2",
    "is_favorite": false,
    "offers": [
      "1ee6861f-167d-4254-8ca1-2b74bab50938",
      "70dfd5f2-acd1-4a18-b016-4b7ca64e13fb",
      "9dde68ca-0dd7-4ff2-858d-05461dff8645",
      "9c33d803-2535-4047-a8fe-f68998592323",
      "566cef4f-0be6-4bda-b67f-60c519dacbfa"
    ],
    "type": "check-in"
  },
  {
    "id": "8f468de6-89d2-4114-a833-c726a1268a46",
    "base_price": 778,
    "date_from": "2024-12-05T09:29:09.792Z",
    "date_to": "2024-12-07T08:32:09.792Z",
    "destination": "6a4f843d-01f2-433c-bf93-e7a6fbc605f3",
    "is_favorite": true,
    "offers": [
      "eab836b1-9e3e-411b-8ef1-5c47e0200df0",
      "b2fbc0f6-9563-430a-a3c5-69fc8480af2a"
    ],
    "type": "bus"
  },
  {
    "id": "ac54befa-f8a0-4dc0-a7e5-9a12257dc1ea",
    "base_price": 735,
    "date_from": "2024-12-07T16:28:09.792Z",
    "date_to": "2024-12-08T12:02:09.792Z",
    "destination": "ed2ca707-bb34-4cff-a1b2-23d63a5f8b64",
    "is_favorite": false,
    "offers": [],
    "type": "sightseeing"
  },
  {
    "id": "30af6f36-75c1-44c1-914c-762c05c70563",
    "base_price": 2067,
    "date_from": "2024-12-09T16:05:09.792Z",
    "date_to": "2024-12-11T04:32:09.792Z",
    "destination": "2685fc4c-cdb9-44a0-ba5c-7149639e2c6a",
    "is_favorite": false,
    "offers": [
      "8f46e86b-e80f-4b72-9033-0993dd990053"
    ],
    "type": "ship"
  },
  {
    "id": "3c2e9415-6d40-462e-96af-f30403c7537c",
    "base_price": 6371,
    "date_from": "2024-12-11T13:30:09.792Z",
    "date_to": "2024-12-12T12:01:09.792Z",
    "destination": "6a4f843d-01f2-433c-bf93-e7a6fbc605f3",
    "is_favorite": true,
    "offers": [
      "e8290a87-207f-4968-8c42-148870854129"
    ],
    "type": "drive"
  },
  {
    "id": "7fc4f479-e4d1-454a-a92a-236ac556d804",
    "base_price": 9037,
    "date_from": "2024-12-13T12:20:09.792Z",
    "date_to": "2024-12-14T09:46:09.792Z",
    "destination": "ed2ca707-bb34-4cff-a1b2-23d63a5f8b64",
    "is_favorite": false,
    "offers": [
      "2ab367d1-5b06-4fd9-bee6-05b0ec99420e"
    ],
    "type": "flight"
  },
  {
    "id": "5009c525-befc-41d2-b4f1-8ab40c4eb2ab",
    "base_price": 3169,
    "date_from": "2024-12-16T04:18:09.792Z",
    "date_to": "2024-12-17T12:28:09.792Z",
    "destination": "09938363-4494-4122-b101-144c1a3474e1",
    "is_favorite": true,
    "offers": [],
    "type": "drive"
  },
  {
    "id": "f09eeb74-7c17-4c09-8653-a2a752c80c57",
    "base_price": 6657,
    "date_from": "2024-12-19T04:19:09.792Z",
    "date_to": "2024-12-20T17:57:09.792Z",
    "destination": "09938363-4494-4122-b101-144c1a3474e1",
    "is_favorite": true,
    "offers": [],
    "type": "train"
  },
  {
    "id": "700f8576-2f3f-4cb6-8a0d-4698fab9db23",
    "base_price": 8058,
    "date_from": "2024-12-21T07:34:09.792Z",
    "date_to": "2024-12-22T13:53:09.792Z",
    "destination": "ea336fbf-1774-4b80-8b69-b29d757a3291",
    "is_favorite": true,
    "offers": [
      "e8290a87-207f-4968-8c42-148870854129"
    ],
    "type": "drive"
  },
  {
    "id": "f124d7f2-eb48-4343-b579-168cadb13b64",
    "base_price": 8969,
    "date_from": "2024-12-24T05:05:09.792Z",
    "date_to": "2024-12-24T12:02:09.792Z",
    "destination": "d9241ccc-05b5-4b5e-8eff-914c4c097db2",
    "is_favorite": false,
    "offers": [
      "8f46e86b-e80f-4b72-9033-0993dd990053"
    ],
    "type": "ship"
  },
  {
    "id": "ceec025b-3eb9-423c-82e7-056df2106995",
    "base_price": 5293,
    "date_from": "2024-12-24T19:52:09.792Z",
    "date_to": "2024-12-26T19:15:09.792Z",
    "destination": "440817c7-b233-42be-94de-9ab0b756d5e8",
    "is_favorite": false,
    "offers": [
      "ffaf425b-741d-4eb3-8dc2-0f05aa2c5ac3",
      "31f028a7-03d2-43c4-8fd6-9e6ee327782a",
      "8f46e86b-e80f-4b72-9033-0993dd990053"
    ],
    "type": "ship"
  }
];

export {MOCK_POINTS};

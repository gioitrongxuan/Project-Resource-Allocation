 const employees = [
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
    "id": 9396,
    "name": "rpattnai",
    "employeeNumber": "MS2024396",
    "position": "Dev",
    "tags": [],
    "level": 3,
    "costPerHour": 7.5,
    "qualities": {
      "backend": 2.45,
      "frontend": 2.97,
      "database": 2.39,
      "devops": 2.83,
      "ai_ml": 2.45,
      "testing": 2.23,
      "issue_tracking": 2.35
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
    "id": 7083,
    "name": "pwright@redhat.com",
    "employeeNumber": "MS2024083",
    "position": "Dev",
    "tags": [],
    "level": 3,
    "costPerHour": 7.5,
    "qualities": {
      "backend": 3.92,
      "frontend": 3.5,
      "database": 3.15,
      "devops": 3.52,
      "ai_ml": 2.1,
      "testing": 1.8,
      "issue_tracking": 3.31
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
    "id": 3241,
    "name": "ncbaratta",
    "employeeNumber": "MS2024241",
    "position": "QA",
    "tags": [],
    "level": 3,
    "costPerHour": 7.5,
    "qualities": {
      "backend": 3.37,
      "frontend": 2.36,
      "database": 2.7,
      "devops": 3.54,
      "ai_ml": 2.1,
      "testing": 1.92,
      "issue_tracking": 3.86
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
]; module.exports = { employees };
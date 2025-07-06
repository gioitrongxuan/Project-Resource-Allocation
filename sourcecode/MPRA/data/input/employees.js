 const employees = [
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
    "id": 920,
    "name": "hguerrer",
    "employeeNumber": "MS2024920",
    "position": "Dev",
    "tags": [],
    "level": 3,
    "costPerHour": 7.5,
    "qualities": {
      "backend": 4.29,
      "frontend": 2.87,
      "database": 3.54,
      "devops": 3.47,
      "ai_ml": 2.83,
      "testing": 1.99,
      "issue_tracking": 2.9
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
]; module.exports = { employees };
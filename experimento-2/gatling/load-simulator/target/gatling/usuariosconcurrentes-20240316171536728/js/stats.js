var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "241",
        "ok": "77",
        "ko": "164"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "14",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "4840",
        "ok": "4837",
        "ko": "4840"
    },
    "meanResponseTime": {
        "total": "1203",
        "ok": "3160",
        "ko": "284"
    },
    "standardDeviation": {
        "total": "2018",
        "ok": "2160",
        "ko": "1074"
    },
    "percentiles1": {
        "total": "4",
        "ok": "4533",
        "ko": "3"
    },
    "percentiles2": {
        "total": "3234",
        "ok": "4833",
        "ko": "4"
    },
    "percentiles3": {
        "total": "4834",
        "ok": "4834",
        "ko": "4223"
    },
    "percentiles4": {
        "total": "4838",
        "ok": "4835",
        "ko": "4838"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 24,
    "percentage": 10
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 52,
    "percentage": 22
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 164,
    "percentage": 68
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.41",
        "ok": "0.77",
        "ko": "1.64"
    }
},
contents: {
"req_get-token-1318270063": {
        type: "REQUEST",
        name: "Get Token",
path: "Get Token",
pathFormatted: "req_get-token-1318270063",
stats: {
    "name": "Get Token",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "percentiles2": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "percentiles3": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.01",
        "ok": "0.01",
        "ko": "-"
    }
}
    },"req_post-usuario-va-1086779557": {
        type: "REQUEST",
        name: "post usuario valido",
path: "post usuario valido",
pathFormatted: "req_post-usuario-va-1086779557",
stats: {
    "name": "post usuario valido",
    "numberOfRequests": {
        "total": "240",
        "ok": "76",
        "ko": "164"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "31",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "4840",
        "ok": "4837",
        "ko": "4840"
    },
    "meanResponseTime": {
        "total": "1208",
        "ok": "3202",
        "ko": "284"
    },
    "standardDeviation": {
        "total": "2021",
        "ok": "2143",
        "ko": "1074"
    },
    "percentiles1": {
        "total": "4",
        "ok": "4533",
        "ko": "3"
    },
    "percentiles2": {
        "total": "3434",
        "ok": "4833",
        "ko": "4"
    },
    "percentiles3": {
        "total": "4834",
        "ok": "4834",
        "ko": "4223"
    },
    "percentiles4": {
        "total": "4838",
        "ok": "4836",
        "ko": "4838"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 23,
    "percentage": 10
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 52,
    "percentage": 22
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 164,
    "percentage": 68
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.4",
        "ok": "0.76",
        "ko": "1.64"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}

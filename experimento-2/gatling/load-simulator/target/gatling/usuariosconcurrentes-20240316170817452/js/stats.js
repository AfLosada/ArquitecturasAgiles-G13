var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "141",
        "ok": "62",
        "ko": "79"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "31",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "4840",
        "ok": "4835",
        "ko": "4840"
    },
    "meanResponseTime": {
        "total": "1370",
        "ok": "2388",
        "ko": "571"
    },
    "standardDeviation": {
        "total": "2061",
        "ok": "2230",
        "ko": "1492"
    },
    "percentiles1": {
        "total": "32",
        "ok": "3236",
        "ko": "4"
    },
    "percentiles2": {
        "total": "4532",
        "ok": "4534",
        "ko": "4"
    },
    "percentiles3": {
        "total": "4833",
        "ok": "4833",
        "ko": "4540"
    },
    "percentiles4": {
        "total": "4837",
        "ok": "4835",
        "ko": "4839"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 28,
    "percentage": 20
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 33,
    "percentage": 23
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 79,
    "percentage": 56
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.762",
        "ok": "0.775",
        "ko": "0.988"
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
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "percentiles2": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "percentiles3": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "percentiles4": {
        "total": "41",
        "ok": "41",
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
        "total": "0.013",
        "ok": "0.013",
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
        "total": "140",
        "ok": "61",
        "ko": "79"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "31",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "4840",
        "ok": "4835",
        "ko": "4840"
    },
    "meanResponseTime": {
        "total": "1380",
        "ok": "2427",
        "ko": "571"
    },
    "standardDeviation": {
        "total": "2065",
        "ok": "2228",
        "ko": "1492"
    },
    "percentiles1": {
        "total": "32",
        "ok": "4040",
        "ko": "4"
    },
    "percentiles2": {
        "total": "4532",
        "ok": "4534",
        "ko": "4"
    },
    "percentiles3": {
        "total": "4833",
        "ok": "4833",
        "ko": "4540"
    },
    "percentiles4": {
        "total": "4837",
        "ok": "4835",
        "ko": "4839"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 27,
    "percentage": 19
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 33,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 79,
    "percentage": 56
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.75",
        "ok": "0.762",
        "ko": "0.988"
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

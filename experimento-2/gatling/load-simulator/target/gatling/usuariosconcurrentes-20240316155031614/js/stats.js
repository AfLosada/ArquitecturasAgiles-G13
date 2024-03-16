var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "146",
        "ok": "68",
        "ko": "78"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "11",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "4834",
        "ok": "4834",
        "ko": "4551"
    },
    "meanResponseTime": {
        "total": "2032",
        "ok": "4159",
        "ko": "178"
    },
    "standardDeviation": {
        "total": "2217",
        "ok": "1101",
        "ko": "873"
    },
    "percentiles1": {
        "total": "6",
        "ok": "4533",
        "ko": "4"
    },
    "percentiles2": {
        "total": "4533",
        "ok": "4534",
        "ko": "4"
    },
    "percentiles3": {
        "total": "4539",
        "ok": "4833",
        "ko": "6"
    },
    "percentiles4": {
        "total": "4834",
        "ok": "4834",
        "ko": "4542"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 3,
    "percentage": 2
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
    "count": 64,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 78,
    "percentage": 53
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.947",
        "ok": "0.907",
        "ko": "1.04"
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
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "percentiles2": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "percentiles3": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "percentiles4": {
        "total": "11",
        "ok": "11",
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
        "total": "145",
        "ok": "67",
        "ko": "78"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "36",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "4834",
        "ok": "4834",
        "ko": "4551"
    },
    "meanResponseTime": {
        "total": "2046",
        "ok": "4220",
        "ko": "178"
    },
    "standardDeviation": {
        "total": "2218",
        "ok": "985",
        "ko": "873"
    },
    "percentiles1": {
        "total": "5",
        "ok": "4533",
        "ko": "4"
    },
    "percentiles2": {
        "total": "4533",
        "ok": "4534",
        "ko": "4"
    },
    "percentiles3": {
        "total": "4539",
        "ok": "4833",
        "ko": "6"
    },
    "percentiles4": {
        "total": "4834",
        "ok": "4834",
        "ko": "4542"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2,
    "percentage": 1
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
    "count": 64,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 78,
    "percentage": 54
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.933",
        "ok": "0.893",
        "ko": "1.04"
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

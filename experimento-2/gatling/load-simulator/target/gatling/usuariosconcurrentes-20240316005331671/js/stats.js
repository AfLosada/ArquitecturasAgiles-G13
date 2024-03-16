var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "40",
        "ok": "20",
        "ko": "20"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "5",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "4850",
        "ok": "9",
        "ko": "4850"
    },
    "meanResponseTime": {
        "total": "666",
        "ok": "6",
        "ko": "1327"
    },
    "standardDeviation": {
        "total": "1397",
        "ok": "1",
        "ko": "1742"
    },
    "percentiles1": {
        "total": "6",
        "ok": "6",
        "ko": "190"
    },
    "percentiles2": {
        "total": "101",
        "ok": "6",
        "ko": "2287"
    },
    "percentiles3": {
        "total": "4394",
        "ok": "8",
        "ko": "4850"
    },
    "percentiles4": {
        "total": "4850",
        "ok": "9",
        "ko": "4850"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 20,
    "percentage": 50
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
    "count": 20,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "0.833",
        "ko": "0.833"
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
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "percentiles1": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 20,
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
        "total": "0.833",
        "ok": "0.833",
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
        "total": "20",
        "ok": "0",
        "ko": "20"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "-",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "4850",
        "ok": "-",
        "ko": "4850"
    },
    "meanResponseTime": {
        "total": "1327",
        "ok": "-",
        "ko": "1327"
    },
    "standardDeviation": {
        "total": "1742",
        "ok": "-",
        "ko": "1742"
    },
    "percentiles1": {
        "total": "190",
        "ok": "-",
        "ko": "190"
    },
    "percentiles2": {
        "total": "2287",
        "ok": "-",
        "ko": "2287"
    },
    "percentiles3": {
        "total": "4850",
        "ok": "-",
        "ko": "4850"
    },
    "percentiles4": {
        "total": "4850",
        "ok": "-",
        "ko": "4850"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 20,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.833",
        "ok": "-",
        "ko": "0.833"
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

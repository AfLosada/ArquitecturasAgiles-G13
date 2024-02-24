var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "18984",
        "ok": "14756",
        "ko": "4228"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "16",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "59575",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "5445",
        "ok": "3568",
        "ko": "11993"
    },
    "standardDeviation": {
        "total": "12768",
        "ok": "6286",
        "ko": "23215"
    },
    "percentiles1": {
        "total": "1186",
        "ok": "1281",
        "ko": "753"
    },
    "percentiles2": {
        "total": "2862",
        "ok": "3358",
        "ko": "1466"
    },
    "percentiles3": {
        "total": "34216",
        "ok": "15724",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "60000",
        "ok": "34221",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1387,
    "percentage": 7
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 5730,
    "percentage": 30
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 7639,
    "percentage": 40
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 4228,
    "percentage": 22
},
    "meanNumberOfRequestsPerSecond": {
        "total": "134.638",
        "ok": "104.652",
        "ko": "29.986"
    }
},
contents: {
"req_post-usuario-va-1064480997": {
        type: "REQUEST",
        name: "POST Usuario Valido",
path: "POST Usuario Valido",
pathFormatted: "req_post-usuario-va-1064480997",
stats: {
    "name": "POST Usuario Valido",
    "numberOfRequests": {
        "total": "18982",
        "ok": "14755",
        "ko": "4227"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "16",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "59575",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "5445",
        "ok": "3568",
        "ko": "11996"
    },
    "standardDeviation": {
        "total": "12769",
        "ok": "6286",
        "ko": "23217"
    },
    "percentiles1": {
        "total": "1186",
        "ok": "1274",
        "ko": "753"
    },
    "percentiles2": {
        "total": "2863",
        "ok": "3358",
        "ko": "1466"
    },
    "percentiles3": {
        "total": "34217",
        "ok": "15725",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "60000",
        "ok": "34221",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1387,
    "percentage": 7
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 5729,
    "percentage": 30
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 7639,
    "percentage": 40
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 4227,
    "percentage": 22
},
    "meanNumberOfRequestsPerSecond": {
        "total": "134.624",
        "ok": "104.645",
        "ko": "29.979"
    }
}
    },"req_post-usuario-er-988981974": {
        type: "REQUEST",
        name: "POST Usuario Error",
path: "POST Usuario Error",
pathFormatted: "req_post-usuario-er-988981974",
stats: {
    "name": "POST Usuario Error",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "168",
        "ok": "1118",
        "ko": "168"
    },
    "maxResponseTime": {
        "total": "1118",
        "ok": "1118",
        "ko": "168"
    },
    "meanResponseTime": {
        "total": "643",
        "ok": "1118",
        "ko": "168"
    },
    "standardDeviation": {
        "total": "475",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "643",
        "ok": "1118",
        "ko": "168"
    },
    "percentiles2": {
        "total": "881",
        "ok": "1118",
        "ko": "168"
    },
    "percentiles3": {
        "total": "1071",
        "ok": "1118",
        "ko": "168"
    },
    "percentiles4": {
        "total": "1109",
        "ok": "1118",
        "ko": "168"
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
    "count": 1,
    "percentage": 50
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
    "count": 1,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.014",
        "ok": "0.007",
        "ko": "0.007"
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

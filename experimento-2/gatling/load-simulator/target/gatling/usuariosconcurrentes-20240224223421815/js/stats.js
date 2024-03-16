var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "26701",
        "ok": "15195",
        "ko": "11506"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "12",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "60008",
        "ok": "59202",
        "ko": "60008"
    },
    "meanResponseTime": {
        "total": "3507",
        "ok": "3274",
        "ko": "3813"
    },
    "standardDeviation": {
        "total": "8921",
        "ok": "6873",
        "ko": "11051"
    },
    "percentiles1": {
        "total": "1712",
        "ok": "740",
        "ko": "2005"
    },
    "percentiles2": {
        "total": "2086",
        "ok": "1967",
        "ko": "2088"
    },
    "percentiles3": {
        "total": "16093",
        "ok": "16756",
        "ko": "2119"
    },
    "percentiles4": {
        "total": "60000",
        "ok": "33242",
        "ko": "60000"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 9260,
    "percentage": 35
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 497,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 5438,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 11506,
    "percentage": 43
},
    "meanNumberOfRequestsPerSecond": {
        "total": "215.331",
        "ok": "122.54",
        "ko": "92.79"
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
        "total": "26699",
        "ok": "15194",
        "ko": "11505"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "12",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "60008",
        "ok": "59202",
        "ko": "60008"
    },
    "meanResponseTime": {
        "total": "3507",
        "ok": "3275",
        "ko": "3814"
    },
    "standardDeviation": {
        "total": "8921",
        "ok": "6873",
        "ko": "11052"
    },
    "percentiles1": {
        "total": "1712",
        "ok": "740",
        "ko": "2005"
    },
    "percentiles2": {
        "total": "2086",
        "ok": "1967",
        "ko": "2088"
    },
    "percentiles3": {
        "total": "16094",
        "ok": "16757",
        "ko": "2119"
    },
    "percentiles4": {
        "total": "60000",
        "ok": "33242",
        "ko": "60000"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 9259,
    "percentage": 35
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 497,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 5438,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 11505,
    "percentage": 43
},
    "meanNumberOfRequestsPerSecond": {
        "total": "215.315",
        "ok": "122.532",
        "ko": "92.782"
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
        "total": "572",
        "ok": "658",
        "ko": "572"
    },
    "maxResponseTime": {
        "total": "658",
        "ok": "658",
        "ko": "572"
    },
    "meanResponseTime": {
        "total": "615",
        "ok": "658",
        "ko": "572"
    },
    "standardDeviation": {
        "total": "43",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "615",
        "ok": "658",
        "ko": "572"
    },
    "percentiles2": {
        "total": "637",
        "ok": "658",
        "ko": "572"
    },
    "percentiles3": {
        "total": "654",
        "ok": "658",
        "ko": "572"
    },
    "percentiles4": {
        "total": "657",
        "ok": "658",
        "ko": "572"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1,
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
    "count": 1,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.016",
        "ok": "0.008",
        "ko": "0.008"
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

let statusCode = {
    informationResponses:{
        continue : 101,
        switchingProtocols:101,
        processing:102,
        earlyHints:103,
    },
    successfulResponse :{
        ok : 200,
        created:201,
        accepted:202,
        nonAuthorativeInformation:203,
        noContent:204,
        resetContent:205,
        partialContent:206,
        multiStatus:207,
        alreadyReported:208,
        imUsed:226,
    },
    redirectingMessages:{
        multipleChoice:300,
        movedPermanently:301,
        found:302,
        seeOther:303,
        notModified:304,
        useProxy:305,
        unused:306,
        temporaryRedirect:307,
        permanentRedirect:308,
    },
    clientErrorResponses :{
        badRequest:400,
        unauthorized:401,
        paymentRequired:402,
        forbidden:403,
        notFound:404,
        methodNotAllowed:405,
        notAcceptable:406,
        proxyAuthenticationRequired:407,
        requestTimeout:408,
        conflict:409,
        gone:410,
        lengthRequired:411,
        preconditionFailed:412,
        payloadTooLarge:413,
        uriTooLong:414,
        unSupportedMediaType:415,
        rangeNotSatisfiable:416,
        expectationFailed:417,
        iMaTeapot:418,
        misDirectedRequest:421,
        unProcessableConetnt:422,
        locked:423,
        failedDependency:424,
        tooEarly:425,
        upgradeRequired:426,
        preConditionRequired:428,
        tooManyRequests:429,
        requestHeaderFieldsTooLarge:431,
        unAvailableForLegalReasons:451,
    },
    serverErrorResponses : {
        internalServerError:500,
        notImplemented:501,
        badGateway:502,
        serviceUnAvailable:503,
        gatewayTimeout:504,
        httpVersionNotSupported:505,
        variantAlsoNegotiates:506,
        insufficientStorage:507,
        loopDirected:508,
        notExtended:510,
        networkAuthenticateRequired:511,
    },
};

let STATUS_CODE = {
    INFORMATION_RESPONSES:{
        CONTINUE : 101,
        SWITCHING_PROTOCOLS:101,
        PROCESSING:102,
        EARLY_HINTS:103,
    },
    SUCCESSFUL_RESPONSE :{
        OK : 200,
        CREATED:201,
        ACCEPTED:202,
        NON_AUTHORATIVE_INFORMATION:203,
        NO_CONTENT:204,
        RESET_CONTENT:205,
        PARTIAL_CONTENT:206,
        MULTI_STATUS:207,
        ALREADY_REPORTED:208,
        IM_USED:226,
    },
    REDIRECTING_MESSAGES:{
        MULTIPLE_CHOICE:300,
        MOVED_PERMANENTLY:301,
        FOUND:302,
        SEE_OTHER:303,
        NOT_MODIFIED:304,
        USE_PROXY:305,
        UNUSED:306,
        TEMPORARY_REDIRECT:307,
        PERMANENT_REDIRECT:308,
    },
    CLIENT_ERROR_RESPONSES :{
        BAD_REQUEST:400,
        UNAUTHORIZED:401,
        PAYMENT_REQUIRED:402,
        FORBIDDEN:403,
        NOT_FOUND:404,
        METHOD_NOT_ALLOWED:405,
        NOT_ACCEPTABLE:406,
        PROXY_AUTHENTICATION_REQUIRED:407,
        REQUEST_TIMEOUT:408,
        CONFLICT:409,
        GONE:410,
        LENGTH_REQUIRED:411,
        PRECONDITION_FAILED:412,
        PAYLOAD_TOO_LARGE:413,
        URI_TOO_LONG:414,
        UN_SUPPORTED_MEDIA_TYPE:415,
        RANGE_NOT_SATISFIABLE:416,
        EXPECTATION_FAILED:417,
        I_MA_TEAPOT:418,
        MISDIRECTEDREQUEST:421,
        UN_PROCESSABLE_CONETNT:422,
        LOCKED:423,
        FAILED_DEPENDENCY:424,
        TOO_EARLY:425,
        UPGRADE_REQUIRED:426,
        PRE_CONDITION_REQUIRED:428,
        TOO_MANY_REQUESTS:429,
        REQUEST_HEADER_FIELDS_TOO_LARGE:431,
        UN_AVAILABLE_FOR_LEGAL_REASONS:451,
    },
    SERVER_ERROR_RESPONSES : {
        INTERNAL_SERVER_ERROR:500,
        NOT_IMPLEMENTED:501,
        BAD_GATEWAY:502,
        SERVICE_UN_AVAILABLE:503,
        GATEWAY_TIMEOUT:504,
        HTTP_VERSION_NOT_SUPPORTED:505,
        VARIANT_ALSO_NEGOTIATES:506,
        INSUFFICIENT_STORAGE:507,
        LOOP_DIRECTED:508,
        NOT_EXTENDED:510,
        NETWORK_AUTHENTICATE_REQUIRED:511,
    },
};

// module.exports = statusCode
exports.status = statusCode
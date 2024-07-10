function logger(namespace) {
    function logInfo(logInfo) {
        console.log(`[${namespace}]: `, logInfo)
    }
    return logInfo;
}

const logInfo = logger('Info')
logInfo('Adding more operations')

const logError = logger('Error')
logError('Index not found')
logError('Syntax error')
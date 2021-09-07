/*
Создается массив объектов, где каждый объект { message: 'message', dateTime: 'time, when message come', type: 'one of third types: warn, error, log' }.
Используется замыкание, для того, чтобы массив logsArray был уникален для каждого вызова createLogger(). 
getRecords() возвращает массив объектов, отсортированный по времени (сначала идут самые свежие записи) с помощью метода reverse(). Если getRecords() не имеет па-
раметров - возвращается весь массив, если есть строка ('warn' || 'error' || 'log') - массив фильтруется, чтобы были только записи с указанным типом, и возвращается, а если за-
писей с таким типом нету - возвращается пустой массив.
*/

const createLogger = () => {
  const logsArray = [];

  const warn = (message) =>
    logsArray.push({
      message,
      dateTime: new Date(),
      type: 'warn',
    });

  const error = (message) =>
    logsArray.push({
      message,
      dateTime: new Date(),
      type: 'error',
    });

  const log = (message) =>
    logsArray.push({
      message,
      dateTime: new Date(),
      type: 'log',
    });

  const getRecords = (text) => {
    if (text === undefined) {
      return logsArray.reverse();
    }
    let filteredLogsArray = [];
    switch (text) {
      case 'warn':
        filteredLogsArray = logsArray.filter(
          (logObj) => logObj.type === 'warn'
        );
        return filteredLogsArray.length > 0 ? filteredLogsArray.reverse() : [];
      case 'error':
        filteredLogsArray = logsArray.filter(
          (logObj) => logObj.type === 'error'
        );
        return filteredLogsArray.length > 0 ? filteredLogsArray.reverse() : [];
      case 'log':
        filteredLogsArray = logsArray.filter((logObj) => logObj.type === 'log');
        return filteredLogsArray.length > 0 ? filteredLogsArray.reverse() : [];
      default:
        return null; // не делал проверку с кейсом default
    }
  };

  return {
    warn,
    error,
    log,
    getRecords,
  };
};

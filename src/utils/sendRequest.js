import axios from "axios";
import { customErrorToast, customSuccessToast } from "./CustomToasts";
const API_ENDPOINT = process.env.REACT_APP_API_BASE;

const ERROR_TITLE_BASE = "Erreur !";
const ERROR_MSG_BASE = "Une erreur est survenue lors de l'opération";
const SUCCESS_TITLE_BASE = "Succès !";
const SUCCESS_MSG_BASE = "L'opération a bien été effectuée";

const headers = {
  headers: {
    "Content-Type": "application/json",
  },
};

const fireSuccessToast = (title, message) => {
  customSuccessToast(title, message);
};

const fireErrorToast = (title, message) => {
  customErrorToast(title, message);
};

const defaultHandleSuccess = (res) => {
  console.log("Requête ok :", res);
};
const defaultHandleError = (err) => {
  console.log("Requête échouée :", err);
};

/**
 * 	Envoie une requête POST
 * @param {*} url : url de la requête
 * @param {*} values : valeurs qui seront envoyé via la requête
 * @param {*} handleSuccess : Fonction de traitement du résultat de la
 * 		requête en cas de succes. Prend le résultat en paramètre
 * @param {*} handleError : Fonction de traitement du résultat de la
 * 		requête en cas d'érreur . Prend l'érreur en paramètre
 */
export function sendPostRequest(
  url,
  values,
  headers,
  handleSuccess = defaultHandleSuccess,
  handleError = defaultHandleError,
  successTitle = SUCCESS_TITLE_BASE,
  successMsg = SUCCESS_MSG_BASE,
  errorTitle = ERROR_TITLE_BASE
) {
  url = API_ENDPOINT + url;
  return axios
    .post(url, values, headers)
    .then((res) => {
      if (successTitle !== null) {
        fireSuccessToast(successTitle, successMsg);
      }
      handleSuccess(res);
    })
    .catch((err) => {
      const message = err?.response?.data?.timestamp
        ? ERROR_MSG_BASE
        : err?.response?.data?.message;
      fireErrorToast(errorTitle, message);
      handleError(err);
    });
}

/**
 * 	Envoie une requête DELETE
 * @param {*} url : url de la requête
 * @param {*} id : id de l'élement à supprimer
 * @param {*} handleSuccess : Fonction de traitement du résultat de la
 * 		requête en cas de succes. Prend le résultat en paramètre
 * @param {*} handleError : Fonction de traitement du résultat de la
 * 		requête en cas d'érreur . Prend l'érreur en paramètre
 */
export function sendDeleteRequest(
  url,
  id,
  handleSuccess = defaultHandleSuccess,
  handleError = defaultHandleError,
  successTitle = SUCCESS_TITLE_BASE,
  successMsg = SUCCESS_MSG_BASE,
  errorTitle = ERROR_TITLE_BASE
) {
  url = API_ENDPOINT + url + id.toString();

  return axios
    .delete(url, headers)
    .then((res) => {
      if (successTitle !== null) {
        fireSuccessToast(successTitle, successMsg);
      }
      handleSuccess(res);
    })
    .catch((err) => {
      const message = err?.response?.data?.timestamp
        ? ERROR_MSG_BASE
        : err?.response?.data?.message;
      fireErrorToast(errorTitle, message);
      handleError(err);
    });
}

/**
 * 	Envoie une requête PUT
 */
export function sendPutRequest(
  url,
  values,
  handleSuccess = defaultHandleSuccess,
  handleError = defaultHandleError,
  successTitle = SUCCESS_TITLE_BASE,
  successMsg = SUCCESS_MSG_BASE,
  errorTitle = ERROR_TITLE_BASE
) {
  url = API_ENDPOINT + url + values.id.toString();
  console.log(url);
  return axios
    .put(url, values, headers)
    .then((res) => {
      if (successTitle !== null) {
        fireSuccessToast(successTitle, successMsg);
      }
      handleSuccess(res);
    })
    .catch((err) => {
      const message = err?.response?.data?.timestamp
        ? ERROR_MSG_BASE
        : err?.response?.data?.message;
      fireErrorToast(errorTitle, message);
      handleError(err);
    });
}

/**
 * 	Envoie une requête PUT mais cette sans concaténer l'id des values à l'url
 */
export function sendPutRequestWithoutIdInURL(
  url,
  values,
  handleSuccess = defaultHandleSuccess,
  handleError = defaultHandleError,
  successTitle = SUCCESS_TITLE_BASE,
  successMsg = SUCCESS_MSG_BASE,
  errorTitle = ERROR_TITLE_BASE
) {
  url = API_ENDPOINT + url;
  // console.log(url);
  return axios
    .put(url, values, headers)
    .then((res) => {
      if (successTitle !== null) {
        fireSuccessToast(successTitle, successMsg);
      }
      handleSuccess(res);
    })
    .catch((err) => {
      const message = err?.response?.data?.timestamp
        ? ERROR_MSG_BASE
        : err?.response?.data?.message;
      fireErrorToast(errorTitle, message);
      handleError(err);
    });
}

/**
 * 	Envoie une requête GET
 */
export function sendGetRequest(
  url,
  values,
  handleSuccess = defaultHandleSuccess,
  handleError = defaultHandleError
) {
  url = API_ENDPOINT + url;
  return axios.get(url, values, headers).then(handleSuccess).catch(handleError);
}

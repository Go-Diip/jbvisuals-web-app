import queryString from "query-string"
import Cookies from "js-cookie"
import { gravityFormsApi, HUBSPOT_API, IPIFY_API } from "./apis/apis"
import CryptoJS from "crypto-js"
import dayjs from "dayjs"

export const isBrowser = () => typeof window !== "undefined"

export const getLocalStorageItem = key => {
  if (isBrowser()) {
    return window.localStorage.getItem(key)
  }
  return null
}

export const setLocalStorageItem = (key, value) => {
  if (isBrowser()) {
    window.localStorage.setItem(key, value)
  }
}

export const getColor = (color, theme) => {
  switch (color) {
    case "primary":
      return theme.palette.primary.main
    case "secondary":
      return theme.palette.secondary.main
    case "tertiary":
      return theme.palette.tertiary.main
    case "content":
      return theme.palette.text.content
    default:
      return theme.palette.text.primary
  }
}

export const textEllipsis = (
  str,
  maxLength,
  { side = "end", ellipsis = "..." } = {}
) => {
  if (str.length > maxLength) {
    switch (side) {
      case "start":
        return ellipsis + str.slice(-(maxLength - ellipsis.length))
      case "end":
      default:
        return str.slice(0, maxLength - ellipsis.length) + ellipsis
    }
  }
  return str
}

export const setFormUtmParams = setValue => {
  if (typeof window !== "undefined" && window) {
    const parameters = window.location.search
      ? queryString.parse(window.location.search)
      : ""
    const params = [
      "utm_medium",
      "utm_source",
      "utm_campaign",
      "utm_content",
      "utm_term",
      "utm_name",
    ]
    if (parameters !== "") {
      params.map(param => {
        if (param in parameters) {
          setValue(param, parameters[param])
        }
      })
    }
  }
}

export const submitHubspotForm = async (data, portalId, formId) => {
  let fields = []
  Object.entries(data).map(item => {
    fields.push({ name: item[0], value: item[1] })
  })

  const isBrowser = typeof window !== "undefined"
  const hutk = isBrowser ? Cookies.get("hubspotutk") : null
  const pageUri = isBrowser ? window.location.href : null
  const pageName = isBrowser ? document.title : null
  const ipAddress = await IPIFY_API.get()

  const context =
    ipAddress && ipAddress.data.ip
      ? {
          ipAddress: ipAddress.data.ip,
          hutk,
          pageUri,
          pageName,
        }
      : {
          hutk,
          pageUri,
          pageName,
        }

  try {
    const res = await HUBSPOT_API.post(
      `/${portalId}/${formId}`,
      JSON.stringify({
        submittedAt: Date.now(),
        fields,
        context,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Accept:
            "application/json, application/xml, text/plain, text/html, *.*",
        },
      }
    )

    return res
  } catch (e) {
    return e.response
  }
}

const calculateSignature = (stringToSign, privateKey) => {
  const hash = CryptoJS.HmacSHA1(stringToSign, privateKey)
  const base64 = hash.toString(CryptoJS.enc.Base64)
  return encodeURIComponent(base64)
}

export const submitGravityForm = (data, formId) => {
  const d = new Date(),
    expiration = 3600,
    unixtime = parseInt(d.getTime() / 1000),
    future_unixtime = unixtime + expiration,
    publicKey = process.env.GF_PUB_KEY,
    privateKey = process.env.GF_PRIV_KEY,
    method = "POST",
    route = `forms/${formId}/submissions`,
    stringToSign =
      publicKey + ":" + method + ":" + route + ":" + future_unixtime,
    sig = calculateSignature(stringToSign, privateKey)

  const uri =
    route +
    "?api_key=" +
    publicKey +
    "&signature=" +
    sig +
    "&expires=" +
    future_unixtime

  const values = {
    input_values: {
      data,
    },
  }

  return gravityFormsApi
    .post(uri, values, {
      headers: { "Content-Type": "application/json" },
    })
    .then(response => {
      return response
    })
}

export const capitalizeFirstLetter = string => {
  if (!string) return
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const orderPostsByDate = (products, invert) => {
  const orderedProducts = products.sort((a, b) => {
    const aUnixDate = +dayjs(a.date, "DD.MM.YYYY")
    const bUnixDate = +dayjs(b.date, "DD.MM.YYYY")
    return invert ? bUnixDate - aUnixDate : aUnixDate - bUnixDate
  })

  return orderedProducts
}

export const getRHFErrorMessage = (errors, name, rules) => {
  const splitName = `${name}`.split(".")

  let nameLabel = name
  const getError = () => {
    if (splitName.length === 2) {
      nameLabel = splitName[1]
      return errors[splitName[0]]?.[splitName[1]]
    }
    if (splitName.length === 3) {
      nameLabel = splitName[2]
      return errors[splitName[0]]?.[splitName[1]]?.[splitName[2]]
    }
    return errors[name]
  }
  const error = getError()

  nameLabel = capitalizeFirstLetter(nameLabel)

  if (error) {
    // console.log(name, error);
    if (error?.message) {
      return error.message
    }
    switch (error.type) {
      case "valueAsNumber":
        return `${nameLabel} is not a valid number`
      case "required":
        return "This is a required field"
      case "min":
        return `Min ${rules?.min}`
      case "max":
        return `Max ${rules?.max}`
      case "maxLength":
        return `Max ${rules?.maxLength} characters`
      case "minLength":
        return `Min ${rules?.minLength} characters`
      case "pattern":
        return `${nameLabel} is not valid`
      case "validate":
        //console.log(errors)
        return error.message
      default:
        return ""
    }
  }
}

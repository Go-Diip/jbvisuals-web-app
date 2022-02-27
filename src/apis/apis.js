const axios = require("axios")

const BASE_URL = "https://admin.jbvisuals.co/wp-json"

export const HUBSPOT_API = axios.create({
  baseURL: "https://api.hsforms.com/submissions/v3/integration/submit",
})

export const IPIFY_API = axios.create({
  baseURL: "https://api.ipify.org?format=json",
})

export const gravityFormsApi = axios.create({
  baseURL: `https://admin.domain.com/gravityformsapi/
`,
})

export const contactFormApi = axios.create({
  baseURL: `${BASE_URL}/contact-form-7/v1/contact-forms`,
})

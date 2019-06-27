const destinatarios = {
  to: [],
  cc: [],
  bcc: []
}

const destinatarios_dev = {
  to: [],
  cc: [],
  bcc: []
}

module.exports = {
  apiURL: process.env.VUE_APP_API,
  destinatarios: process.env.NODE_ENV == 'production' ? destinatarios : destinatarios_dev,
  template: "~/PlantillasCorreo/publicar/mail-chileautos-landing-campaign.txt",
  mensajeOut: "Enviado correctamente."
};
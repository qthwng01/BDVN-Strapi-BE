
module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "strapi-provider-firebase-storage",
      providerOptions: {
        serviceAccount: require('../box-detailing-vn-firebase-adminsdk-ims4e-77a2c76dbb.json'),
        // Custom bucket name
        bucket: env("STORAGE_BUCKET_URL"),
        sortInStorage: true, // true | false
        debug: false, // true | false
      },
    },
  },
  // ...
  // ...
  seo: {
    enabled: true,
  },
  // ...
});

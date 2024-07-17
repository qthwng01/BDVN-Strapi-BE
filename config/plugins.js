module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "local",
      providerOptions: {
        sizeLimit: 100000,
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

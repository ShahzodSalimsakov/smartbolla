module.exports = {
  async headers() {
    return [
      {
        source: '/about/',
        headers: [
          {
            key: 'X-About-Custom-Header',
            value: 'about_header_value',
          },
        ],
      },
      {
        source: '/media/',
        headers: [
          {
            key: 'X-Media-Custom-Header',
            value: 'media_header_value',
          },
        ],
      },
      {
        source: '/contacts/',
        headers: [
          {
            key: 'X-Contacts-Custom-Header',
            value: 'contacts_header_value',
          },
        ],
      },
    ]
  },
  i18n: {
    locales: ['en-US', 'fr', 'ru'],
    defaultLocale: 'en-US',
  },
  images: {
    domains: ['smartbolla.com'],
  },
}
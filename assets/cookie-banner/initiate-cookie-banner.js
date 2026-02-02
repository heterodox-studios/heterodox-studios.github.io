silktideCookieBannerManager.updateCookieBannerConfig({
  background: {
    showBackground: false
  },
  cookieIcon: {
    position: "bottomRight"
  },
  cookieTypes: [
    {
      id: "analytics",
      name: "Analytics",
      description: "<p>Analytics cookies allows us to understand how or site is used and where traffic comes from. They are not required</p>",
      required: false,
      onAccept: function() {
        gtag('consent', 'update', {
          analytics_storage: 'granted',
        });
        dataLayer.push({
          'event': 'consent_accepted_analytics',
        });
      },
      onReject: function() {
        gtag('consent', 'update', {
          analytics_storage: 'denied',
        });
      }
    }
  ],
  text: {
    banner: {
      description: "<p>We use cookies on our site analyze our traffic.</p>",
      acceptAllButtonText: "Accept all",
      acceptAllButtonAccessibleLabel: "Accept all cookies",
      rejectNonEssentialButtonText: "Reject non-essential",
      rejectNonEssentialButtonAccessibleLabel: "Reject non-essential",
      preferencesButtonText: "Preferences",
      preferencesButtonAccessibleLabel: "Toggle preferences"
    },
    preferences: {
      title: "Customize your cookie preferences",
      description: "<p>We respect your right to privacy. You can choose not to allow some types of cookies. Your cookie preferences will apply across our website.</p>",
      creditLinkText: "Get this banner for free",
      creditLinkAccessibleLabel: "Get this banner for free"
    }
  }
});




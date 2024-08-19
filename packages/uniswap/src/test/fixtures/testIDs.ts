/**
 * IDs for testing purposes
 */
export const TestID = {
  AccountCard: 'account-card',
  AccountHeaderAvatar: 'account-header-avatar',
  AccountHeaderSettings: 'account-header-settings-icon',
  AccountHeaderCopyAddress: 'account-header-copy-address',
  ActivityTab: 'activity-tab',
  AddCloudBackup: 'add-cloud-backup',
  AddManualBackup: 'add-manual-backup',
  AmountInputIn: 'amount-input-in',
  AmountInputOut: 'amount-input-out',
  Back: 'back',
  Cancel: 'cancal',
  ChooseInputToken: 'choose-input-token',
  ChooseOutputToken: 'choose-output-token',
  Confirm: 'confirm',
  Continue: 'continue',
  Copy: 'copy',
  CreateAccount: 'create-account',
  Done: 'done',
  Edit: 'edit',
  ExploreSearchInput: 'explore-search-input',
  Favorite: 'favorite',
  ImportAccount: 'import-account',
  ImportAccountInput: 'import-account-input',
  Next: 'next',
  NFTsTab: 'NFTs-tab',
  NotificationToastTitle: 'notification-toast-title',
  OK: 'ok',
  OnboardingImportSeedPhrase: 'onboarding-import-seed-phrase',
  OpenDeviceLanguageSettings: 'open-device-language-settings',
  QRCodeModalToggle: 'qr-code-modal-toggle',
  PortfolioBalance: 'portfolio-balance',
  PortfolioRelativeChange: 'portfolio-relative-change',
  PriceExplorerAnimatedNumber: 'price-explorer-animated-number',
  PriceExplorerChart: 'price-explorer-chart',
  PriceText: 'price-text',
  ReadMoreButton: 'read-more-button',
  Remove: 'remove',
  RelativePriceChange: 'relative-price-change',
  ReviewSwap: 'review-swap',
  RestoreFromCloud: 'restore-from-cloud',
  RestoreWallet: 'restore-wallet',
  ReviewTransfer: 'review-transfer',
  SearchEtherscanItem: 'search-etherscan-item',
  SearchNFTCollectionItem: 'search-nft-collection-item',
  SearchTokenItem: 'search-token-item',
  SearchTokensAndWallets: 'search-tokens-and-wallets',
  SelectRecipient: 'select-recipient',
  Send: 'send',
  SendModalHeaderLabel: 'send-modal-header-label',
  SendReview: 'send-review',
  SetMaxInput: 'set-max-input',
  SetMaxOutput: 'set-max-output',
  ShowHiddenTokens: 'show-hidden-tokens',
  Skip: 'skip',
  Submit: 'submit',
  Swap: 'swap',
  SwapFormHeader: 'swap-form-header',
  SwapSettings: 'swap-settings',
  SwitchCurrenciesButton: 'switch-currencies-button',
  TokenDetailsAboutHeader: 'token-details-about-header',
  TokenDetailsBuyButton: 'token-details-buy-button',
  TokenDetailsMoreButton: 'token-details-more-button',
  TokenDetailsSellButton: 'token-details-sell-button',
  TokenDetailsHeaderText: 'token-details-header-text',
  TokenSelectorToggle: 'token-selector-toggle',
  TokenLinkCopy: 'token-link-copy',
  TokenLinkEtherscan: 'token-link-etherscan',
  TokenLinkTwitter: 'token-link-twitter',
  TokenLinkWebsite: 'token-link-website',
  TokensTab: 'tokens-tab',
  TokenWarningAccept: 'token-warning-accept',
  WalletCard: 'wallet-card',
  WalletNameInput: 'wallet-name-input',
  WalletSettings: 'wallet-settings',
  WCDappNetworks: 'wc-dapp-networks',
  WCDappSwitchAccount: 'wc-dapp-switch-account',
  WatchWallet: 'watch-wallet',
  // alphabetize additional values.
} as const

export type TestIDType = (typeof TestID)[keyof typeof TestID]

export type TestIDIterableType = `${(typeof TestID)[keyof typeof TestID]}-${number}`

export type TestIDwithSufixType = `${(typeof TestID)[keyof typeof TestID]}-${string}`

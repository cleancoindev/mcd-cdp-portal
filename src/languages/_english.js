export default {
  cdp_page: {
    liquidation_price: 'Liquidation price',
    // "liquidation_ratio": "Liquidation ratio",
    collateralization_ratio: 'Collateralization ratio',
    // "current_price_information": "Current price information",
    liquidation_penalty: 'Liquidation penalty',
    minimum_ratio: 'Minimum ratio',
    stability_fee: 'Stability fee',
    current_price_info: 'Current price information',
    position: 'position',
    // "collateral": "collateral",
    locked: 'Locked',
    // "required_for_safety": "Required for safety",
    able_withdraw: 'Able to withdraw',
    available_generate: 'Available to generate',
    // "outstanding_debt": "Outstanding debt",
    // "wallet_balance": "wallet balance",
    tx_history: 'Vault history',
    outstanding_dai_debt: 'Outstanding Tao debt',
    not_applicable: 'N/A'
  },
  landing_page: {
    headline: 'Trade, Borrow, and Save using Tao.',
    trade_card: {
      title: 'Trade',
      description:
        'Place orders in the decentralised Marketplace, or exchange your tokens quickly.',
      button: 'Start Trading'
    },
    borrow_card: {
      title: 'Borrow',
      description:
        'Lock your tokens as collateral to generate Tao, a decentralized stablecoin soft-pegged to 1 USD.',
      button: 'Borrow Tao'
    },
    save_card: {
      title: 'Save',
      description:
        'Earn savings on your Tao by locking it into Aqua Save. Automatic and non-custodial.',
      button: 'Save Tao'
    },
    token_section_title: 'Supported Tokens',
    token_section_only_on_trade: '* Only available on Aqua Trade',
    section1_title: 'What is Aqua?',
    section1_p:
      'Aqua is a platform for decentralized finance. Use it to swap tokens, borrow Tao, and earn savings — all in one place.',
    section2_title: 'Secure protocol built on Ethereum',
    section2_p:
      'Aqua is built on top of audited and formally verified smart contracts created by Maker, the industry leader in secure decentralized finance.',
    section3_title: 'Completely permissionless',
    section3_p:
      'Aqua is a decentralized, non-custodial platform, accessible using an Ethereum-supported wallet. You—and only you—control your assets.',
    questions_title: 'Questions',
    question1: 'What is Aqua?',
    answer1:
      'Aqua is a decentralized application that runs on the Ethereum blockchain. Anyone can use Aqua to trade tokens, borrow against them, and earn savings using Tao.',
    question2: 'What is Tao?',
    answer2:
      'Tao is the world’s first unbiased currency and leading decentralized stablecoin soft-pegged to the US Dollar. Learn more about Tao {0}.',
    answer2_link1_url: 'https://makerdao.com/en/',
    answer2_link1_text: 'here',
    question3: 'Do I need an account?',
    answer3:
      'You do not need an account to use Aqua. However, you will need an Ethereum wallet. Aqua supports most Ethereum browser wallets such as {0}, {1}, etc.',
    answer3_link1_url: 'https://metamask.io/',
    answer3_link1_text: 'Metamask',
    answer3_link2_url: 'https://wallet.coinbase.com/',
    answer3_link2_text: 'Coinbase Wallet',
    question4: 'Is Aqua secure?',
    answer4:
      'Security is our top priority. The Aqua team regularly conducts audits on our smart contracts. In addition, the Aqua, forked from DAI Oasis code is {0}, giving the community the ability to pressure test and audit the core technology.',
    answer4_link1_url: 'https://github.com/takertao/aqua',
    answer4_link1_text: 'open-source',
    question5: 'Will I be charged a fee to use Aqua?',
    answer5:
      'Aqua is free to use. However, you will have to pay gas and other fees associated with the Maker Protocol, such as Stability Fees.',
    question6: 'How can I contact the Aqua team?',
    answer6: 'You can reach the Aqua team by contacting us on {0}.',
    answer6_link1_url: 'https://*discord link TBA*',
    answer6_link1_text: 'chat',
    question7:
      'Can I buy Bitcoin or Ethereum on Aqua using a credit card or via my bank account?',
    answer7:
      'You cannot buy crypto from your bank account using Aqua. Instead, you can use Tao to buy Ethereum and other supported tokens.',
    read_only: 'Read-Only',
    wallet_connect: 'Wallet Connect',
    wallet_link: 'Coinbase Wallet'
  },
  overview_page: {
    title: 'Overview',
    your_cdps: 'Your Vaults',
    token: 'TOKEN',
    id: 'VAULT ID',
    ratio: 'CURRENT RATIO',
    ratio_mobile: 'Ratio',
    deposited: 'DEPOSITED',
    withdraw: 'AVAIL. TO WITHDRAW',
    debt: 'TAO',
    view_cdp: 'Manage Vault',
    view_cdp_mobile: 'Manage',
    total_collateral_locked: 'total collateral locked',
    total_dai_debt: 'total tao debt',
    get_started_title: 'Open your first Vault to start generating Tao.',
    select_another_wallet: 'Select another wallet',
    connect_ledgers_choice: 'Connect {0} or {1}',
    no_vaults: 'Address {0} has no Vaults.',
    vault_unavailable: 'Sorry, this vault is unavailable',
    loading_vaults: 'Loading Vaults...'
  },
  navbar: {
    save: 'Save',
    borrow: 'Borrow',
    trade: 'Trade',
    privacy: 'Privacy',
    terms: 'Terms'
  },
  sidebar: {
    wallet_balances: 'Wallet Balances',
    // "read_only_mode": "Read-Only Mode",
    price_feeds: 'Price Feeds',
    system_info: 'System Info',
    active_cdps: 'ACTIVE VAULTS',
    active_cdps_figure: '{0} Vaults',
    global_debt_ceiling: 'GLOBAL DEBT CEILING',
    current_debt: 'CURRENT DEBT',
    base_rate: 'BASE RATE',
    // "number_of_liquidations": "NUMBER OF LIQUIDATIONS",
    buy_and_burn_lot_size: 'BUY & BURN LOT SIZE',
    inflate_and_sell_lot_size: 'INFLATE & SELL LOT SIZE',
    system_collateralization: 'COLLATERALIZATION',
    view_price_feeds: 'View price feeds',
    view_mkr_tools: 'View mkr.tools',
    view_more: 'View more',
    view_less: 'View less',
    asset: 'ASSET',
    balance: 'BALANCE',
    usd: 'USD',
    send: 'SEND',
    migrate: 'UPGRADE',
    no_wallet: 'Not connected',
    save_details: {
      title: 'Save Details',
      total_savings_dai: 'Total Tao in DSR',
      total_dai_supply: 'Total Tao Supply',
      dai_savings_rate: 'Tao Savings Rate'
    }
  },
  cdp_create: {
    screen_titles: {
      select_collateral: 'Select Collateral',
      vault_management: 'Vault Management',
      generate_dai: 'Generate Tao',
      confirmation: 'Confirmation'
    },
    set_allowance: 'Set Allowance',
    seconds_wait_time: 'seconds',
    minutes_wait_time_singular: 'minute',
    minutes_wait_time_plural: 'minutes',
    tx_hash: 'Transaction hash',
    view_tx_details: 'View transaction details',
    select_title: 'Select a collateral type',
    select_text:
      'Each collateral type has its own risk parameters. You can lock up additional collateral types later.',

    setup_proxy_title: 'Vault Setup and Management',
    setup_proxy_proxy_text:
      'Configure your Vault for easy management. This only has to be done once.',
    setup_proxy_allowance_text:
      'This permission allows Aqua to interact with your {0}. This has to be done once for each new collateral type.',
    setup_proxy_proxy_button: 'Setup',
    setup_proxy_allowance_button: 'Set',
    setup_vault: 'Setup Vault',

    deposit_title: 'Deposit {0} and Generate Tao',
    deposit_text:
      'Different collateral types have different risk parameters and collateralization ratios.',
    // "deposit_sidebar_title": "{0} Risk Parameters",
    deposit_form_field1_title:
      'How much {0} would you like to lock in your Vault?',
    deposit_form_field1_text:
      'The amount of {0} you lock up determines how much Tao you can generate.',
    // "deposit_form_field2_title": "What target collateralization ratio would you like to stay above?",
    // "deposit_form_field2_text": "If your Vault drops below this target it will be considered {0} risk.",
    // "deposit_form_field2_after": "Suggested:",
    deposit_form_field3_title: 'How much Tao would you like to generate?',
    deposit_form_field3_text:
      'Generate an amount that is safely above the liquidation ratio.',
    // "deposit_form_field3_after1": "Max at target ratio",
    deposit_form_field3_after2: 'Max avail to generate',

    confirm_title: 'Confirm Vault Details',
    confirmed_title: 'Your Vault is being created',
    confirmed_text:
      'The estimated time is {0}. You can safely leave this page.',
    post_confirmed_title: 'Your Vault has been created',
    post_confirmed_text: 'You can safely leave this page.',
    insufficient_ilk_balance: 'Insufficient {0} balance',
    has_understood_stability_fee:
      'I understand the Stability Fee is not fixed and is likely to change over time',
    collateralization_warning:
      'The amount of Tao you are generating is putting your Vault at risk of liquidation',
    draw_too_much_dai: 'Vault below liquidation threshold',
    below_dust_limit: 'A Vault requires a minimum of {0} Tao to be generated',
    dust_max_payback:
      'You can repay all your outstanding debt, or a maximum of {0} Tao',
    stability_fee_description:
      'The fee calculated based on the outstanding debt of your Vault. This is continuously added to your existing debt.',
    liquidation_ratio_description:
      'The collateral-to-tao ratio at which the Vault becomes vulnerable to liquidation.',
    liquidation_penalty_description:
      'This is the additional fee that you will pay on top of your debt when your position is liquidated. There could also be other costs involved depending on the price your collateral is sold',
    waiting_for_comfirmations: 'Waiting for confirmations... {0} of {1}',
    confirmed_with_confirmations: 'Confirmed with {0} confirmations',
    waiting_for_confirmations_info:
      "Waiting for confirmations reduces the risk of your Vault address changing. We require users to wait 10 block confirmations to ensure it's been created successfully. This will often take around 2 minutes.",
    proxy_failure_not_mined: 'This transaction is taking longer than usual...',
    proxy_failure_not_mined_info:
      'Transactions to the network may sometimes take longer than expected. This can be for a variety of reasons but may be due to a congested network or a transaction sent with a low gas price. Some wallets enable users to resend a transaction with a higher gas price, otherwise check for your transaction on etherscan and come back again later.',
    proxy_failure_contract_data: 'There was an error with your Ledger wallet...',
    proxy_failure_contract_data_info:
      'If you see this message and are using a Ledger hardware wallet, it often means that you need to enable "Contract Data." To do this, go to your Ethereum app on Ledger, choose Settings and then Contract Data.',
    proxy_failure_rejected: 'The transaction has been rejected on the wallet',
    proxy_failure_timeout: 'Your transaction timed out and was automatically rejected',
    proxy_failure_timeout_info: 'This error is often caused because you did not sign the transaction in a reasonable time, and it has been automatically rejected by the wallet. Where this has happened, you often still need to reject the transaction yourself on the wallet to allow you to sign another.',
  },
  cdp_migrate: {
    select_title: 'Select Vault to Migrate',
    select_text:
      'Select a Vault and pay back the stability fee in Tao or MKR to migrate it to Multi-collateral Tao and the new CDP Portal.',
    current_ratio: 'Current Ratio',
    dai_debt: 'Tao debt',
    fee_in_dai: 'Fee in Tao',
    fee_in_mkr: 'Fee in MKR',
    migrate: 'Migrate',
    payment: 'Payment',
    trust_site_with_dai: 'Trust this site with my TAO',
    pay_and_migrate: 'Pay and Migrate',
    migrate_in_progress_header: 'Your CDP is being migrated',
    migrate_in_progress_text:
      'The estimated time is 8 minutes. You can safely leave this page and return.',
    migrate_complete_header: 'CDP Migration complete',
    migrate_complete_text:
      'CDP #{0} has been successfully migrated to Multi-collateral Tao and the new CDP Portal.',
    view_transaction_details: 'View transaction details',
    migrate_another_cdp: 'Migrate another CDP',
    exit_to_cdp_portal: 'Exit to CDP Portal'
  },
  dsr_deposit: {
    screen_titles: {
      open_vault: 'Manage Proxy',
      deposit_dai: 'Deposit Tao',
      confirmation: 'Confirmation'
    },
    setup_header: 'Deploy Proxy',
    open_vault: 'Earn savings on your Tao by locking into Aqua Save',
    deposit_form_title: 'Enter the amount you would like to deposit.',
    setup_proxy_text:
      'Setting up your proxy will bundle multiple transactions into one, saving transaction time and gas costs. This only has to be done once.',
    confirm_title: 'Confirm Deposit'
    // "post_confirm_title": "Deposit Confirmed"
  },
  actions: {
    back: 'Back',
    continue: 'Continue',
    create_cdp: 'Open Vault',
    deposit: 'Deposit',
    withdraw: 'Withdraw',
    pay_back: 'Pay back',
    generate: 'Generate',
    send: 'Send',
    skip: 'Skip',
    get_started: 'Get Started',
    try_again: 'Try Again'
  },
  actions_past_tense: {
    deposit: 'Deposited',
    withdraw: 'Withdrew',
    pay_back: 'Paid back',
    generate: 'Generated'
  },
  event_history: {
    open: 'Opened a new Vault with id #{0}',
    deposit: 'Deposited {0} {1} into Vault',
    dsr_deposit: 'Deposited {0} Tao',
    withdraw: 'Withdrew {0} {1} from Vault',
    dsr_withdraw: 'Withdrew {0} Tao',
    generate: 'Generated {0} new Tao from Vault',
    pay_back: 'Repaid {0} Tao to Vault',
    give: 'Vault given to {0} by {1}',
    migrate: 'Vault upgraded from SCD'
  },
  action_sidebar: {
    deposit_title: 'Deposit {0}',
    deposit_description: 'How much {0} would you like to deposit?',
    withdraw_title: 'Withdraw {0}',
    withdraw_description: 'How much {0} would you like to withdraw?',
    withdraw_warning:
      'The amount of collateral you are withdrawing puts your Vault at risk of liquidation',
    generate_title: 'Generate TAO',
    generate_description: 'How much TAO would you like to generate?',
    generate_warning:
      'The amount of Tao you are generating puts your Vault at risk of liquidation',
    payback_title: 'Pay Back TAO',
    payback_description: 'How much TAO would you like to pay back?',
    cdp_below_threshold: 'Vault below liquidation threshold',
    insufficient_balance: 'Insufficient {0} balance',
    cannot_payback_more_than_owed: 'Cannot pay back more than owed',
    dai_balance: 'Your Tao balance',
    dai_debt: 'Tao debt',
    locked_dsr: 'Locked in DSR',
    unlock_token: 'Unlock {0} to continue',
    unlocking_token: 'Unlocking {0}...',
    token_unlocked: '{0} unlocked',
    maximum_available_to_generate: 'Maximum available to generate',
    maximum_available_to_withdraw: 'Maximum available to withdraw',
    current_account_balance: 'Current account balance',
    gem_usd_price_feed: '{0}/USD Price feed',
    new_liquidation_price: 'New liquidation price',
    new_collateralization_ratio: 'New collateralization ratio',
    create_proxy: 'Create Proxy to continue',
    creating_proxy: 'Creating Proxy...',
    proxy_created: 'Proxy Created',
    send_title: 'Send {0}',
    send_description: 'How much {0} would you like to send?',
    your_balance: 'Your Balance',
    dest_address: 'Destination Address',
    invalid_input: 'This input is invalid',
    invalid_min_amount: 'Can only send a positive amount of {0}',
    invalid_max_amount: 'Amount is greater than your balance',
    invalid_min_gas: 'Balance is below the required tx fee: {0}',
    invalid_max_gas: 'Balance is below the Amount + tx fee: {0}',
    invalid_address: 'This is not a valid address',
    invalid_allowance: 'Amount is higher than your allowance for {0}'
  },
  save: {
    title: 'Savings',
    dai_savings_rate: 'Tao Savings rate',
    description:
      'Receive savings on your Tao. Deposit or withdraw at any time.',
    deposit_amount: 'Deposit amount',
    withdraw_amount: 'Withdraw amount',
    deposit_dai: 'Deposit Tao',
    deposit_dai_subheading:
      'Start earning as soon as your deposit is confirmed.',
    get_started_title: 'Start earning {0} on your Tao today',
    start_earning:
      'Deposit Tao to see your first transaction and start earning',
    tx_history: 'History',
    savings_earned_to_date: 'Savings earned to date',
    estimated_savings: 'Estimated savings',
    dai_locked_dsr: 'TAO locked in DSR',
    deposit_withdraw: 'Deposit and withdraw',
    deposit_btn_cta: 'Receive savings on your Tao. Deposit at any time',
    withdraw_btn_cta: 'Safely withdraw your Tao at any time',
    no_savings:
      "This address either doesn't exist or has no DSR account history"
  },
  verbs: {
    depositing: 'Depositing',
    generating: 'Generating',
    withdrawing: 'Withdrawing',
    paying_back: 'Paying back'
  },
  table: {
    type: 'Type',
    activity: 'Activity',
    date: 'Date',
    time: 'Time',
    sender_id: 'Sender ID',
    tx_hash: 'Tx Hash',
    loading: 'Loading...'
  },
  transactions: {
    unlocking_token: 'Unlocking {0}',
    setting_up_proxy: 'Setting up proxy',
    creating_cdp: 'Creating Vault',
    generate_dai: 'Generating {0} Tao',
    pay_back_dai: 'Paying back {0} Tao',
    withdrawing_gem: 'Withdrawing {0}',
    depositing_gem: 'Depositing {0}',
    claiming_collateral: 'Claiming collateral',
    send: 'Sending {0} to {1}'
  },
  transactions_past_tense: {
    unlocking_token: 'Unlocked {0}',
    setting_up_proxy: 'Set up proxy',
    creating_cdp: 'Created Vault',
    generate_dai: 'Generated {0} TAO',
    pay_back_dai: 'Paid back {0} TAO',
    withdrawing_gem: 'Withdrew {0}',
    depositing_gem: 'Deposited {0}',
    claiming_collateral: 'Claimed collateral',
    send: 'Sent {0} to {1}'
  },
  transaction_manager: {
    transaction_singular_capitalised: 'Transaction',
    transaction_plural_capitalised: 'Transactions',
    transaction_singular: 'transaction',
    transaction_plural: 'transactions',
    show: 'Show',
    hide: 'Hide'
  },
  input_validations: {
    max_float: 'Amount must be less than {0}',
    min_float: 'Amount must be greater than {0}',
    is_float: 'Please enter a valid number',
    default: 'Please enter a valid input'
  },
  connect: 'Connect',
  disconnect: 'Disconnect',
  view: 'View',
  dismiss: 'Dismiss',
  exit: 'Exit',
  close: 'Close',
  connect_to: 'Connect to {0}',
  overview: 'Overview',
  cdp_type: 'Vault Type',
  not_found: 'Not Found',
  // "network": "Network",
  // "unknown": "Unknown",
  cdp: 'Vault',
  cdp_id: 'Vault ID',
  // "connect": "Connect",
  set_max: 'Set max',
  paste: 'Paste',
  cancel: 'Cancel',
  current_price: 'Current Price',
  stability_fee: 'Stability Fee',
  liquidation_penalty: 'Liquidation Fee',
  collateral_debt_ceiling: 'Debt ceiling',
  dai_available: 'TAO Available',
  returned_auction: 'returned from the auction',
  liquidated_event: 'Your Vault has been liquidated',
  liquidation_ratio: 'Liquidation Ratio',
  liquidation_price: 'Your Liquidation Price',
  liquidation_penalty_shortened: 'Liq Fee',
  liquidation_ratio_shortened: 'Liq ratio',
  // "liquidation_price_shortened": "Liq Price",
  collateral_type: 'Collateral Type',
  collateralization: 'Your Collateralization Ratio',
  collateralization_ratio: 'Collateralization ratio',
  current_ilk_price: 'Current {0} Price',
  your_balance: 'Your balance',
  why_is_this: 'Why is this?',
  // "risk_parameters": "Risk Parameters",
  terms_of_service_text: 'I have read and accept the {0}',
  terms_of_service: 'Terms of Service',
  cookie_notice: 'By using this website you agree to our {0}',
  privacy_policy: 'privacy policy',
  see_how_it_works: 'See how it works',
  learn_more: 'Learn more',
  providers: {
    connect_wallet: 'Connect a wallet to get started',
    metamask: 'MetaMask',
    trust: 'Trust',
    coinbase: 'Coinbase Wallet',
    imtoken: 'ImToken',
    alphawallet: 'Alpha Wallet',
    ledger_nano: 'Ledger Nano',
    trezor: 'Trezor',
    other: 'Active Wallet',
    ledger: 'Ledger',
    walletconnect: 'Wallet Connect',
    walletlink: 'Coinbase Wallet'
  },
  notifications: {
    claim: 'Claim',
    claim_collateral:
      'Your {0} Vault auction(s) have completed. You have {1} {2} to claim',
    non_vault_owner:
      'The owner of this position ({0}) does not match the connected wallet address',
    non_overview_owner:
      'You are currently viewing the Overview of another address ({0})',
    non_savings_owner:
      'You are currently viewing the savings of another address ({0})',
    emergency_shutdown_active:
      'Emergency shutdown has been initiated on {0}. This dashboard is currently read-only. If you have any vaults or DAI, please go to {1}. For more information you can read more {2}',
    vault_below_next_price:
      'Your {0} Vault has entered the liquidation phase and your collateral will be auctioned at {1}. You can still avoid auction by depositing at least {2} or repaying {3}',
    vault_below_current_price:
      'Your {0} Vault is available for liquidation and your collateral can be auctioned at any time. You can try to avoid the auction by depositing at least {1} or repaying {2}',
    vault_is_liquidated:
      'Your Vault was recently liquidated and {0} was made available for Auction. Please check back here for more details.'
  }
};

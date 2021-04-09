import { MenuEntry } from '@pancakeswap-libs/uikit'


const homepage = "https://sishi.finance/"

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: `${homepage}`,
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: `${homepage}farms`,
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: `${homepage}nests`,
  },
  {
    label: 'Vault',
    icon: 'VaultIcon',
    href: `${homepage}vaults`,
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://pancakeswap.finance/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: 'https://pancakeswap.finance/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://pancakeswap.finance/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://pancakeswap.finance/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://pancakeswap.finance/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://pancakeswap.finance/ifo',
  // },
  {
    label: 'Listing',
    icon: 'LayerIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=BNB&outputCurrency=0x8e8538c75f273ab2df6adeecd3622a9c314fccf3',
        newTab: true,
      },
      {
        label: 'Resfinex',
        href: 'https://trade.resfinex.com/trade/SISHI_USDT',
        newTab: true,
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/sishi-finance',
        newTab: true,
      },
      {
        label: 'Coinpaprika',
        href: 'https://coinpaprika.com/coin/sishi-sishi-token/',
        newTab: true,
      },
    ],
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    href:'https://docs.sishi.finance/security/audit',
    newTab: true,
  },
  {
    label: 'Governance',
    icon: 'GroupsIcon',
    href:'https://snapshot.org/#/sishi.eth',
    newTab: true,
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/sishi-finance/',
        newTab: true,
      },
      {
        label: 'Docs',
        href: 'https://docs.sishi.finance',
        newTab: true,
      },
      {
        label: 'Medium',
        href: 'https://0xsishi.medium.com/',
        newTab: true,
      },
      {
        label: 'Publish0x',
        href: 'https://www.publish0x.com/sishi-finance',
        newTab: true,
      },
    ],
  },
]

export default config

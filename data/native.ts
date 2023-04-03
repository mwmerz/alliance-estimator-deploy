export interface NativeInputValues {
  inflationRate: number;
  lsdApr: number;
  totalTokenSupply: number;
  denom: string;
  assetPrice: number;
  allianceRewardWeight: number;
  annualizedTakeRate: number;
}

export interface NativeCalculatedValues {
  rewardPoolOnNativeChain: number;
  rewardPoolPercentage: number;
  principalStakeOnTerra: number;
  rewardPoolMakeup: number;
  valueOfDenomInRewardPoolExcludingLSD: number;
  valueOfDenomInRewardPoolIncludingLSD: number;
  percentageMakeupOfRewardPoolValue: number;
  poolTotalValue: number;
  principalStakeExcludingRewards: number;
  principalStakeIncludingLSD: number;
  stakingRewardValue: number;
  stakingAPR: number;
}

export type NativeFieldKey =
  | keyof NativeInputValues
  | keyof NativeCalculatedValues;

export interface NativeField {
  name: NativeFieldKey;
  label: string;
  secondaryLabel?: string;
  input: boolean;
  group: string;
  advanced?: boolean;
}

export type NativeFieldMap = {
  [key: string]: NativeField[];
};

export const nativeFields: NativeField[] = [
  {
    group: "Chain Data",
    name: "inflationRate",
    label: "Inflation Rate",
    input: true,
  },
  {
    group: "Chain Data",
    name: "lsdApr",
    label: "Annual Estimated LSD Growth Rate",
    secondaryLabel: "Set to 0 if not an LSD",
    input: true,
  },
  {
    group: "Chain Data",
    name: "totalTokenSupply",
    label: "Total Token Supply",
    input: true,
  },
  {
    group: "Chain Data",
    name: "rewardPoolOnNativeChain",
    label: "Reward Pool on Native Chain",
    input: false,
  },
  {
    group: "Chain Data",
    name: "denom",
    label: "Denom",
    input: true,
  },
  {
    group: "Chain Data",
    name: "assetPrice",
    label: "Asset Price",
    input: true,
  },
  {
    group: "Alliance Asset Parameters",
    label: "Alliance Reward Weight",
    input: true,
    name: "allianceRewardWeight",
  },
  {
    group: "Alliance Asset Parameters",
    label: "Reward Pool Percentage",
    input: false,
    name: "rewardPoolPercentage",
  },
  // {
  //   group: "Alliance Asset Parameters",
  //   label: "Annualized Take Rate",
  //   secondaryLabel: "For LSDs",
  //   input: true,
  //   name: "annualizedTakeRate",
  // },
  {
    group: "Reward Pool",
    name: "principalStakeOnTerra",
    label: "Principal stake on Native chain",
    input: true,
  },
  {
    group: "Reward Pool",
    name: "rewardPoolMakeup",
    label: "Reward Pool Makeup after 1 year",
    secondaryLabel: "Take rate included",
    input: false,
    advanced: true,
  },
  {
    group: "Reward Pool",
    name: "valueOfDenomInRewardPoolExcludingLSD",
    label: "Value of denom in reward pool",
    secondaryLabel: "Excluding LSD yield",
    input: false,
    advanced: true,
  },
  {
    group: "Reward Pool",
    name: "valueOfDenomInRewardPoolIncludingLSD",
    label: "Value of denom in reward pool",
    secondaryLabel: "After 1 year LSD yield",
    input: false,
    advanced: true,
  },
  {
    group: "Reward Pool",
    name: "percentageMakeupOfRewardPoolValue",
    label: "% makeup of reward pool value",
    input: false,
    advanced: true,
  },
  {
    group: "Pool Total Value",
    name: "poolTotalValue",
    label: "(including LSD appreciation)",
    input: false,
  },
  {
    group: "Principal",
    name: "principalStakeExcludingRewards",
    label: "Principal stake - after 1 year take rate",
    secondaryLabel: "Excluding Rewards",
    input: false,
    advanced: true,
  },
  {
    group: "Principal",
    name: "principalStakeIncludingLSD",
    label: "Principal stake - after 1 year take rate",
    secondaryLabel: "Including LSD yield",
    input: false,
    advanced: true,
  },
  {
    group: "Yield",
    name: "stakingRewardValue",
    label: "Staking reward value",
    secondaryLabel: "Including LSD yield",
    input: false,
  },
  {
    group: "Yield",
    name: "stakingAPR",
    label: "Staking APR",
    secondaryLabel: "Including LSD appreciation and take rate",
    input: false,
  },
];

// convert the fields to a map keyed by group for rendering
export const nativeFieldMap: NativeFieldMap = {};

nativeFields.forEach((field) => {
  if (!nativeFieldMap[field.group]) {
    nativeFieldMap[field.group] = [];
  }
  nativeFieldMap[field.group].push(field);
});
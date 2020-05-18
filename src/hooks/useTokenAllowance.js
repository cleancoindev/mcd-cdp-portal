import { useState } from 'react';
import useTaker from 'hooks/useTaker';
import useActionState from 'hooks/useActionState';
import { watch } from 'hooks/useObservable';
import BigNumber from 'bignumber.js';

export default function useTokenAllowance(tokenSymbol) {
  const { taker, account } = useTaker();

  const proxyAddress = watch.proxyAddress(account?.address);
  const allowance = watch.tokenAllowance(
    account?.address,
    proxyAddress || undefined,
    tokenSymbol
  );

  const hasFetchedAllowance = proxyAddress === null || allowance !== undefined;
  const hasAllowance =
    tokenSymbol === 'ETH' ||
    (allowance !== undefined && allowance !== null && !allowance.eq(0));

  const hasSufficientAllowance = value =>
    BigNumber(value).isLessThanOrEqualTo(allowance);

  const [startedWithoutAllowance, setStartedWithoutAllowance] = useState(false);
  const [setAllowance, allowanceLoading, , allowanceErrors] = useActionState(
    async () => {
      const token = taker.getToken(tokenSymbol);
      const txPromise = token.approveUnlimited(proxyAddress);
      setStartedWithoutAllowance(true);
      return await txPromise;
    }
  );

  return {
    hasAllowance,
    hasFetchedAllowance,
    setAllowance,
    allowanceLoading,
    allowanceErrors,
    startedWithoutAllowance,
    allowance,
    hasSufficientAllowance
  };
}

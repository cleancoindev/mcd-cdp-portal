import { useState, useEffect } from 'react';
import useTaker from 'hooks/useTaker';

export const useWeb3BlockHeight = (initialState = null) => {
  const { taker } = useTaker();
  const [blockHeight, setBlockHeight] = useState(initialState);
  if (!taker) return;
  if (!taker.service('web3')) return;

  taker.service('web3').onNewBlock(setBlockHeight);

  return blockHeight;
};

const useBlockHeight = (initialState = null) => {
  const { watcher } = useTaker();
  const [blockHeight, setBlockHeight] = useState(initialState);

  useEffect(() => {
    if (!watcher) return;
    const subscription = watcher.onNewBlock(blockHeight =>
      setBlockHeight(blockHeight)
    );
    return subscription.unsub;
  }, [watcher]);

  return blockHeight;
};

export default useBlockHeight;

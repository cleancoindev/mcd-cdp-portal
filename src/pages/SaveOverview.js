import React, { useEffect } from 'react';
import useTaker from 'hooks/useTaker';
import PageContentLayout from 'layouts/PageContentLayout';
import AccountSelection from 'components/AccountSelection';
import { Routes } from 'utils/constants';

function SaveOverview() {
  const { account, network, navigation } = useTaker();

  useEffect(() => {
    if (account && account.address) {
      navigation.navigate(
        `/${Routes.SAVE}/owner/${account.address}?network=${network}`
      );
    }
  }, [account, navigation, network]);
  return (
    <PageContentLayout>
      {!account ? <AccountSelection /> : <div />}
    </PageContentLayout>
  );
}

export default SaveOverview;

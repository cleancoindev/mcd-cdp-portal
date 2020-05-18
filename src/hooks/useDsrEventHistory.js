import { useEffect, useState } from 'react';
import useTaker from 'hooks/useTaker';
import debug from 'debug';
const log = debug('maker:useDsrEventHistory');

export default function useDsrEventHistory(address) {
  const { taker, txLastUpdate } = useTaker();
  const [events, setEvents] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  let isCancelled = false;
  useEffect(() => {
    if (!taker || !address) return;
    async function getHistory() {
      setEvents(null);
      setIsLoading(true);
      log(`Getting DSR event history for address ${address}...`);
      const events = await taker
        .service('mcd:savings')
        .getEventHistory(address);
      if (isCancelled) return;
      log('Got DSR events for address ' + address, events);
      setEvents(events);
      setIsLoading(false);
    }
    getHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => (isCancelled = true);
  }, [taker, address, txLastUpdate?.save]);

  return { events, isLoading };
}

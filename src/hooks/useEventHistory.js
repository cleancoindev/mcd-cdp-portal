import { useEffect, useState } from 'react';
import useTaker from 'hooks/useTaker';
import debug from 'debug';
const log = debug('taker:useEventHistory');

export default function useEventHistory(id) {
  const { taker, txLastUpdate } = useTaker();
  const [events, setEvents] = useState(null);

  let isCancelled = false;
  useEffect(() => {
    if (!taker) return;
    async function getHistory() {
      setEvents(null);
      log(`Getting event history for vault #${id}...`);
      const cdp = await taker
        .service('mcd:cdpManager')
        .getCdp(id, { prefetch: false });
      if (isCancelled) return;
      const events = await taker.service('mcd:cdpManager').getEventHistory(cdp);
      if (isCancelled) return;
      log('Got events for #' + id, events);
      setEvents(events);
    }
    getHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => (isCancelled = true);
  }, [taker, id, txLastUpdate?.[id]]);

  return events;
}

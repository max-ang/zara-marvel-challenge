'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import styles from './index.module.css';
import Icon from '@/components/Icon';
import { ICON_TYPES } from '@/constants';

export default function Search({ placeholder, totalValues }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 80);

  return (
    <div className={styles['search-bar']}>
      <div className={styles['search-bar__input']}>
        <div className={styles['search-bar__input__icon']}>
          <Icon
            type={ICON_TYPES.SEARCH}
          />
        </div>
        <input
          type="text"
          className={styles['search-bar__input__field']}
          placeholder={placeholder}
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get('query')?.toString()}
        />
      </div>
      <span className={styles['search-bar__result']}>
        {`${totalValues} ${totalValues === 1 ? 'result' : 'results'}`}
      </span>
    </div>
  );
}
